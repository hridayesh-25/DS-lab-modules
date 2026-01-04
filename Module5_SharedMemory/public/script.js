const BASE = "http://localhost:8090";

async function sendFeedback(choice) {
    await fetch(`${BASE}/feedback`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ choice })
    });
    loadCounts();
}

async function loadCounts() {
    const res = await fetch(`${BASE}/counts`);
    const data = await res.json();

    document.getElementById("good").textContent = data.good;
    document.getElementById("average").textContent = data.average;
    document.getElementById("poor").textContent = data.poor;
}

setInterval(loadCounts, 1000);
