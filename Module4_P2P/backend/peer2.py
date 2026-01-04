import socket
import threading
import os
from flask import Flask, request, jsonify
from flask_cors import CORS

# ---------------- CONFIG ----------------
HOST = "127.0.0.1"
TCP_PORT = 9002          # change for each peer
HTTP_PORT = 8085         # UI talks to this
PEER_NAME = "peer2"      # change to peer2, peer3, etc.

SHARED_DIR = f"shared_{PEER_NAME}"
os.makedirs(SHARED_DIR, exist_ok=True)

# In-memory peer list
peers = {
    "peer1": {"host": "127.0.0.1", "port": 9001},
    "peer2": {"host": "127.0.0.1", "port": 9002},
    "peer3": {"host": "127.0.0.1", "port": 9003}
}

# ---------------- TCP FILE SERVER ----------------
def handle_peer(conn):
    try:
        request = conn.recv(1024).decode()

        if request == "LIST":
            files = os.listdir(SHARED_DIR)
            conn.send(",".join(files).encode())

        elif request.startswith("GET"):
            _, filename = request.split(" ", 1)
            path = os.path.join(SHARED_DIR, filename)

            if os.path.exists(path):
                conn.send(b"OK")
                with open(path, "rb") as f:
                    while chunk := f.read(1024):
                        conn.send(chunk)
            else:
                conn.send(b"NO")
    finally:
        conn.close()

def tcp_server():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind((HOST, TCP_PORT))
    s.listen()
    print(f"[TCP] Peer server running on {TCP_PORT}")

    while True:
        conn, _ = s.accept()
        threading.Thread(target=handle_peer, args=(conn,), daemon=True).start()

# ---------------- HTTP API FOR UI ----------------
app = Flask(__name__)
CORS(app)

@app.route("/list-peers")
def list_peers():
    return jsonify([{"name": k} for k in peers.keys()])

@app.route("/list-files")
def list_files():
    peer = request.args.get("peer")
    p = peers.get(peer)

    s = socket.socket()
    s.connect((p["host"], p["port"]))
    s.send(b"LIST")
    data = s.recv(4096).decode()
    s.close()

    files = [{"name": f} for f in data.split(",") if f]
    return jsonify(files)

@app.route("/download")
def download():
    peer = request.args.get("peer")
    filename = request.args.get("file")
    p = peers.get(peer)

    s = socket.socket()
    s.connect((p["host"], p["port"]))
    s.send(f"GET {filename}".encode())

    if s.recv(2) == b"OK":
        with open(os.path.join(SHARED_DIR, filename), "wb") as f:
            while chunk := s.recv(1024):
                f.write(chunk)

    s.close()
    return jsonify({"status": "downloaded"})

# ---------------- START SERVERS ----------------
threading.Thread(target=tcp_server, daemon=True).start()
app.run(port=HTTP_PORT)
