


---

# 📘 Distributed Systems – Integrated Project (5 Modules)


---

## 📌 Project Overview

This project demonstrates **five core concepts of Distributed Systems**, implemented as **independent modules** and integrated using a **single dashboard UI**.
Each module focuses on a specific distributed systems paradigm and uses **in-memory storage only**, as per lab requirements.

A **master batch file** is provided to start all modules simultaneously.

---

## 🧱 Project Structure

```
Distributed_Systems_Project/
│
├── dashboard/                 # Central navigation UI
│
├── Module1_Sockets/            # Socket Programming
├── Module2_RMI/                # Java RMI
├── Module3_REST/               # RPC using REST API
├── Module4_P2P/                # Peer-to-Peer System
├── Module5_SharedMemory/       # Shared Memory & Synchronization
│
└── start_all_modules.bat       # One-click startup
```

---

## 🔹 Module 1: Socket Programming

### **Hostel Complaint Management System**

### Concept Demonstrated

* TCP Socket Programming
* Client–Server communication
* Handling multiple client requests

### Description

Students submit hostel complaints through a web UI.
Complaints are sent to a backend server using **socket programming** and stored **in memory** on the server.

### Key Features

* Multiple clients supported
* Real-time complaint submission
* In-memory storage (no database)

### Learning Outcome

Understanding low-level network communication using sockets.

---

## 🔹 Module 2: Java RMI

### **Hostel Room Information Service**

### Concept Demonstrated

* Remote Method Invocation (RMI)
* Distributed object communication
* Stub–skeleton interaction

### Description

Students query hostel room details such as:

* Room number
* Occupant names
* Warden contact details

The information is fetched from a **remote Java object** using RMI.

### Key Features

* Two remote methods
* RMI registry usage
* In-memory data using Java collections

### Learning Outcome

Understanding distributed object-based systems.

---

## 🔹 Module 3: RPC (REST API)

### **Hostel Notice Board System**

### Concept Demonstrated

* Remote Procedure Call (RPC)
* RESTful API design
* Stateless client–server interaction

### Description

An admin posts hostel notices, and students view them on the same UI.
Communication is done using **HTTP REST APIs**.

### Key Features

* REST endpoints (GET, POST)
* Stateless design
* In-memory notice storage

### Learning Outcome

Understanding service-based communication over HTTP.

---

## 🔹 Module 4: Peer-to-Peer (P2P)

### **Student Resource Sharing System**

### Concept Demonstrated

* Peer-to-Peer architecture
* Decentralized systems
* Fault tolerance

### Description

Students share academic resources directly with each other.
Each peer acts as **both client and server**, and there is **no central file storage**.

### Key Features

* Multiple peers running on different ports
* Direct peer-to-peer file transfer
* No central server or database

### Learning Outcome

Understanding decentralized distributed systems.

---

## 🔹 Module 5: Shared Memory

### **Mess Feedback Live Counter**

### Concept Demonstrated

* Shared memory
* Process synchronization
* Race condition prevention

### Description

Students submit mess feedback (Good / Average / Poor).
Feedback counts are stored in a **shared memory segment**, and updates are synchronized using a **semaphore**.

### Key Features

* Shared memory counters
* Mutual exclusion using semaphore
* Live counter updates

### Learning Outcome

Understanding inter-process communication and synchronization.

---

## 🖥️ Integrated Dashboard

A central dashboard (`dashboard/index.html`) is provided to:

* Explain each module
* Navigate to individual module UIs
* Present the entire project as a single system

---

## ▶ How to Run the Project

### Step 1: Install Dependencies

```bash
pip install flask flask-cors
```

(Java is required for Module 2 – Java RMI)

---

### Step 2: Start All Modules

Double-click:

```
start_all_modules.bat
```

This will:

* Start all backend servers
* Open the main dashboard UI

---

## 🧪 Testing

* **Modules 1, 3, 5:** Tested using multiple browser tabs
* **Module 4:** Tested using multiple peers on the same system and different systems
* **Module 2:** Tested using Java RMI client–server setup

---

## 🎓 Conclusion

This project provides a comprehensive demonstration of **core Distributed Systems concepts**, including communication, coordination, decentralization, and synchronization.
Each module is implemented independently and integrated through a unified interface for effective demonstration and evaluation.

---

