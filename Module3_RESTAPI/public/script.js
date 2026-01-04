const API = "http://localhost:8083/notices";

async function postNotice() {
    const title = document.getElementById("title").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!title || !message) {
        alert("All fields required");
        return;
    }

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, message })
    });

    document.getElementById("title").value = "";
    document.getElementById("message").value = "";

    loadNotices();
}

async function loadNotices() {
    const res = await fetch(API);
    const data = await res.json();

    const box = document.getElementById("notices");
    box.innerHTML = "";

    data.forEach(n => {
        const div = document.createElement("div");
        div.className = "notice";

        div.innerHTML = `
            <div><strong>${n.title}</strong></div>
            <div>${n.message}</div>
            <div style="margin-top:6px; font-size:13px; color:#444;">
                📅 Date: ${n.date}
            </div>
        `;

        box.appendChild(div);
    });
}



loadNotices();
