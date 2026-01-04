import socket
for p in [9002,9003]:
    s=socket.socket()
    s.connect(("127.0.0.1",p))
    print("CONNECTED TO",p)
    s.close()
