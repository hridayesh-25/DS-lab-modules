const ws = new WebSocket("ws://localhost:8080");

ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);

    if (msg.type === "INIT") {
        msg.data.forEach(addComplaint);
    }

    if (msg.type === "NEW_COMPLAINT") {
        addComplaint(msg.data);
    }
};

function submitComplaint() {
    const room = document.getElementById("room").value.trim();
    const category = document.getElementById("category").value;
    const desc = document.getElementById("desc").value.trim();
    const status = document.getElementById("status");

    if (!room || !category || !desc) {
        status.style.color = "red";
        status.innerText = "⚠️ All fields are mandatory";
        return;
    }

    const complaint = {
        room,
        category,
        description: desc,
        time: new Date().toLocaleString()
    };

    ws.send(JSON.stringify(complaint));

    status.style.color = "green";
    status.innerText = "Complaint submitted";

    document.getElementById("room").value = "";
    document.getElementById("category").value = "";
    document.getElementById("desc").value = "";
}

function addComplaint(c) {
    const div = document.createElement("div");
    div.className = "complaint";
    div.innerHTML = `
        <b>${c.room}</b> [${c.category}]<br>
        ${c.description}<br>
        <small>${c.time}</small>
    `;
    document.getElementById("complaints").prepend(div);
}
