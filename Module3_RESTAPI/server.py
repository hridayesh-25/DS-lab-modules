from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

notices = []  # ✅ in-memory storage

@app.route("/notices", methods=["POST"])
def add_notice():
    data = request.json
    title = data.get("title")
    message = data.get("message")

    if not title or not message:
        return jsonify({"error": "All fields required"}), 400

    notice = {
        "title": title,
        "message": message,
        "date": datetime.now().strftime("%d-%m-%Y %H:%M")
    }

    notices.insert(0, notice)
    return jsonify({"success": True})

@app.route("/notices", methods=["GET"])
def get_notices():
    return jsonify(notices)

if __name__ == "__main__":
    app.run(port=8083)
