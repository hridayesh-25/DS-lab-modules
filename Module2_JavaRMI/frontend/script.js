// Module 2: Java RMI - Frontend JavaScript

document.getElementById('getDetailsBtn').addEventListener('click', async function() {
    const roomNumber = document.getElementById('roomNumber').value;
    if (!roomNumber) {
        alert('Please enter a room number');
        return;
    }
    
    await fetchRoomInfo(roomNumber, 'details');
});

document.getElementById('getWardenBtn').addEventListener('click', async function() {
    const roomNumber = document.getElementById('roomNumber').value;
    if (!roomNumber) {
        alert('Please enter a room number');
        return;
    }
    
    await fetchRoomInfo(roomNumber, 'warden');
});

async function fetchRoomInfo(roomNumber, type) {
    const resultBox = document.getElementById('result');
    const endpoint = type === 'details' ? '/room-details' : '/warden-contact';
    
    resultBox.className = 'result-box';
    resultBox.textContent = 'Loading...';
    resultBox.classList.add('show');
    
    try {
        const response = await fetch(`http://localhost:8082${endpoint}?roomNumber=${encodeURIComponent(roomNumber)}`);
        const data = await response.json();
        
        resultBox.textContent = data.result || 'No data received';
        resultBox.classList.remove('error');
    } catch (error) {
        resultBox.textContent = 'Error: Could not connect to RMI server. Make sure the server is running.';
        resultBox.classList.add('error');
        console.error('Error:', error);
    }
}

