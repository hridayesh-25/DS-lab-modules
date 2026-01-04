from flask import Flask, jsonify, request
from flask_cors import CORS
from multiprocessing import Value, Semaphore

app = Flask(__name__)
CORS(app)

good = Value('i', 0)
average = Value('i', 0)
poor = Value('i', 0)

mutex = Semaphore(1)

@app.route("/feedback", methods=["POST"])
def submit_feedback():
    choice = request.json.get("choice")

    with mutex:
        if choice == "good":
            good.value += 1
        elif choice == "average":
            average.value += 1
        elif choice == "poor":
            poor.value += 1

    return jsonify({"status": "updated"})

@app.route("/counts")
def get_counts():
    with mutex:
        return jsonify({
            "good": good.value,
            "average": average.value,
            "poor": poor.value
        })

if __name__ == "__main__":
    app.run(port=8090)
