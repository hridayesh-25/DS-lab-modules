// Module 4: P2P - Frontend JavaScript

let selectedPeer = '';

// Load peers on page load
loadPeers();

document.getElementById('refreshPeersBtn').addEventListener('click', loadPeers);
document.getElementById('peerSelect').addEventListener('change', function() {
    selectedPeer = this.value;
});

document.getElementById('listFilesBtn').addEventListener('click', listFiles);
document.getElementById('downloadBtn').addEventListener('click', downloadFile);
document.getElementById('uploadBtn').addEventListener('click', uploadFile);

async function loadPeers() {
    try {
        const response = await fetch('http://localhost:8084/list-peers');
        const peers = await response.json();
        
        const select = document.getElementById('peerSelect');
        select.innerHTML = '<option value="">Choose a peer...</option>';
        
        peers.forEach(peer => {
            const option = document.createElement('option');
            option.value = peer.name;
            option.textContent = peer.name;
            select.appendChild(option);
        });
    } catch (error) {
        showStatus('Error loading peers. Make sure the P2P server is running.', 'error');
        console.error('Error:', error);
    }
}

async function listFiles() {
    if (!selectedPeer) {
        showStatus('Please select a peer first', 'error');
        return;
    }
    
    const filesList = document.getElementById('filesList');
    filesList.innerHTML = 'Loading...';
    
    try {
        const response = await fetch(`http://localhost:8084/list-files?peer=${selectedPeer}`);
        const files = await response.json();
        
        if (files.length === 0) {
            filesList.innerHTML = '<p>No files available on this peer.</p>';
            return;
        }
        
        filesList.innerHTML = '';
        files.forEach(file => {
            const div = document.createElement('div');
            div.className = 'file-item';
            div.innerHTML = `
                <span class="file-name">${file.name}</span>
            `;
            filesList.appendChild(div);
        });
        
        showStatus('Files loaded successfully', 'success');
    } catch (error) {
        filesList.innerHTML = '<p>Error loading files.</p>';
        showStatus('Error loading files. Make sure the peer is running.', 'error');
        console.error('Error:', error);
    }
}

async function downloadFile() {
    if (!selectedPeer) {
        showStatus('Please select a peer first', 'error');
        return;
    }
    
    const fileName = document.getElementById('downloadFileName').value;
    if (!fileName) {
        showStatus('Please enter a file name', 'error');
        return;
    }
    
    try {
        const response = await fetch(`http://localhost:8084/download?peer=${selectedPeer}&file=${fileName}`);
        const data = await response.json();
        
        showStatus('Download started. Check the downloads folder.', 'success');
        document.getElementById('downloadFileName').value = '';
    } catch (error) {
        showStatus('Error starting download', 'error');
        console.error('Error:', error);
    }
}

async function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    if (!fileInput.files.length) {
        showStatus('Please select a file to upload', 'error');
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    try {
        await fetch("http://localhost:8084/upload", {
            method: "POST",
            body: formData
        });

        showStatus('File uploaded to local peer successfully', 'success');
        fileInput.value = "";
    } catch (error) {
        showStatus('Upload failed', 'error');
    }
}


function showStatus(message, type) {
    const statusBox = document.getElementById('status');
    statusBox.textContent = message;
    statusBox.className = `status-box ${type} show`;
    
    setTimeout(() => {
        statusBox.classList.remove('show');
    }, 5000);
}

