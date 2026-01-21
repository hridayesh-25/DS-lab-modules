


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


# 📘 Module 1: Socket Programming

## Hostel Complaint Management System

---

## 📌 Module Objective

The objective of this module is to demonstrate **low-level client–server communication using TCP socket programming**.
Multiple clients can submit hostel complaints to a central server, which processes and stores them **in memory**.

---

## 🧠 Distributed Systems Concept Used

* TCP Socket Programming
* Client–Server Architecture
* Concurrent client handling
* In-memory data storage

---

## 📁 Folder Structure (Module 1)

```
Module1_Sockets/
│
├── backend/
│   └── server.py
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── start_module1.bat
```

---

## 📄 File-wise Explanation

### 1️⃣ `server.py` (Backend – Socket Server)

**Purpose:**
Acts as the **central server** that listens for incoming client connections using **TCP sockets**.

**Responsibilities:**

* Creates a TCP socket
* Listens on a fixed port
* Accepts multiple client connections
* Receives complaint data
* Stores complaints in **in-memory data structures**

**Distributed Systems Aspect:**

* Implements **reliable communication** using TCP
* Handles multiple clients concurrently
* Demonstrates classic client–server model

---

### 2️⃣ `index.html` (Frontend UI)

**Purpose:**
Provides a **web-based user interface** for students to submit hostel complaints.

**Features:**

* Input fields for:

  * Room number
  * Complaint category
  * Complaint description
* Submit button to send complaint

**Distributed Systems Aspect:**

* Acts as a **client interface**
* Abstracts socket communication from the user

---

### 3️⃣ `style.css` (UI Styling)

**Purpose:**
Improves readability and presentation of the complaint submission interface.

**Note:**
UI aesthetics are **not graded**, but usability is improved.

---

### 4️⃣ `script.js` (Client Logic)

**Purpose:**
Handles the logic of sending complaint data from the browser to the backend server.

**Responsibilities:**

* Collects user input
* Validates form fields
* Sends complaint data to the server
* Displays server response in UI

**Distributed Systems Aspect:**

* Acts as the **client-side communication layer**
* Triggers socket-based communication indirectly

---

### 5️⃣ `start_module1.bat` (Startup Script)

**Purpose:**
Simplifies execution of the module.

**Responsibilities:**

* Starts the socket server
* Opens the frontend UI in the browser

**Benefit:**

* One-click execution
* Useful for demonstrations and evaluations

---

## 🧪 How the Module Works (Flow)

1. Student opens the complaint UI (`index.html`)
2. Complaint details are entered and submitted
3. Data is sent to the backend server via TCP socket
4. Server receives and stores the complaint in memory
5. Server sends acknowledgment back to client
6. Client displays success message

---

## 🎓 Learning Outcome

After completing this module, the learner understands:

* How TCP socket communication works
* How clients and servers interact at a low level
* How multiple clients can connect to a single server
* How in-memory storage is used in distributed systems

---

### ✅ Module 1 Status

* Client–Server Communication: ✅
* TCP Sockets: ✅
* In-Memory Storage: ✅
* Multiple Clients: ✅

---


# 📘 Module 2: Java RMI

## Hostel Room Information Service

---

## 📌 Module Objective

The objective of this module is to demonstrate **distributed object communication using Java RMI (Remote Method Invocation)**.
Clients can remotely invoke methods to retrieve hostel room details such as occupants and warden contact information.

---

## 🧠 Distributed Systems Concept Used

* Remote Method Invocation (RMI)
* Distributed object model
* Stub–Skeleton communication
* RMI Registry
* In-memory data storage

---

## 📁 Folder Structure (Module 2)

```
Module2_RMI/
│
├── backend/
│   ├── RoomService.java
│   ├── RoomServiceImpl.java
│   ├── RMIServer.java
│   └── HttpBridgeServer.java
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── start_module2.bat
```

---

## 📄 File-wise Explanation

### 1️⃣ `RoomService.java` (Remote Interface)

**Purpose:**
Defines the **remote methods** that can be invoked by clients.

**Responsibilities:**

* Declares methods such as:

  * Get room details
  * Get warden contact
* Extends `Remote`
* Throws `RemoteException`

**Distributed Systems Aspect:**

* Acts as the **contract** between client and server
* Enables remote method invocation

---

### 2️⃣ `RoomServiceImpl.java` (Remote Object Implementation)

**Purpose:**
Implements the methods declared in `RoomService`.

**Responsibilities:**

* Stores room and warden information in **Java Maps**
* Returns data requested by clients
* Runs on the server side

**Distributed Systems Aspect:**

* Represents the **remote object**
* Data is accessed remotely by clients

---

### 3️⃣ `RMIServer.java` (RMI Server)

**Purpose:**
Starts the RMI server and binds the remote object to the RMI registry.

**Responsibilities:**

* Creates RMI registry
* Registers `RoomServiceImpl` with a logical name
* Makes the remote object available to clients

**Distributed Systems Aspect:**

* Publishes distributed objects
* Enables location transparency

---

### 4️⃣ `HttpBridgeServer.java` (HTTP–RMI Bridge)

**Purpose:**
Acts as a bridge between the **web UI (HTTP)** and **Java RMI backend**.

**Responsibilities:**

* Accepts HTTP requests from browser
* Internally invokes RMI methods
* Sends results back as HTTP responses

**Distributed Systems Aspect:**

* Integrates distributed objects with web clients
* Demonstrates multi-tier distributed architecture

---

### 5️⃣ `index.html` (Frontend UI)

**Purpose:**
Provides a web interface for students to query hostel room information.

**Features:**

* Input field for room number
* Buttons to fetch:

  * Room details
  * Warden contact

**Distributed Systems Aspect:**

* Acts as a **thin client**
* Does not directly interact with RMI

---

### 6️⃣ `script.js` (Client-side Logic)

**Purpose:**
Handles communication between UI and backend.

**Responsibilities:**

* Sends HTTP requests to `HttpBridgeServer`
* Displays returned room details on UI

**Distributed Systems Aspect:**

* Enables remote invocation indirectly
* Separates UI from backend logic

---

### 7️⃣ `style.css` (UI Styling)

**Purpose:**
Improves readability and presentation of the room information UI.

---

### 8️⃣ `start_module2.bat` (Startup Script)

**Purpose:**
Automates execution of the RMI module.

**Responsibilities:**

* Starts RMI registry
* Launches RMI server
* Starts HTTP bridge server
* Opens frontend UI

**Benefit:**

* Simplifies demonstration
* Ensures correct startup order

---

## 🧪 How the Module Works (Flow)

1. User enters room number in UI
2. Browser sends HTTP request to bridge server
3. Bridge server invokes RMI method
4. RMI server accesses in-memory data
5. Result returned via RMI
6. Bridge sends response to UI

---

## 🎓 Learning Outcome

After completing this module, the learner understands:

* How remote objects are created and accessed
* How RMI registry enables object lookup
* How distributed objects communicate transparently
* How web clients can interact with RMI systems

---

### ✅ Module 2 Status

* Java RMI implementation: ✅
* Remote methods: ✅
* RMI registry usage: ✅
* In-memory storage: ✅

---

# 📘 Module 3: RPC (REST API)

## Hostel Notice Board System

---

## 📌 Module Objective

The objective of this module is to demonstrate **Remote Procedure Call (RPC)** using a **RESTful API**.
An admin can post hostel notices, and students can view the notices through a web interface.

---

## 🧠 Distributed Systems Concept Used

* RPC using HTTP
* RESTful API design
* Stateless client–server interaction
* In-memory data storage

---

## 📁 Folder Structure (Module 3)

```
Module3_REST/
│
├── backend/
│   └── server.py
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── start_module3.bat
```

---

## 📄 File-wise Explanation

### 1️⃣ `server.py` (Backend – REST Server)

**Purpose:**
Implements a RESTful server that handles notice-related operations.

**Responsibilities:**

* Exposes HTTP endpoints:

  * `POST /add-notice` – Add a new notice
  * `GET /notices` – Retrieve all notices
* Stores notices in an **in-memory list**
* Handles multiple client requests independently

**Distributed Systems Aspect:**

* Demonstrates **RPC over HTTP**
* Follows a **stateless request–response model**

---

### 2️⃣ `index.html` (Frontend UI)

**Purpose:**
Provides a single-page interface for both admin and students.

**Features:**

* Admin section to post notices (title, message, date)
* Student section to view posted notices

**Distributed Systems Aspect:**

* Acts as a client that invokes remote procedures via REST APIs

---

### 3️⃣ `script.js` (Client-side Logic)

**Purpose:**
Handles interaction between the UI and REST server.

**Responsibilities:**

* Sends POST requests to add notices
* Sends GET requests to fetch notices
* Dynamically updates the UI with server responses

**Distributed Systems Aspect:**

* Implements RPC-style communication using HTTP methods

---

### 4️⃣ `style.css` (UI Styling)

**Purpose:**
Enhances layout and readability of the notice board interface.

---

### 5️⃣ `start_module3.bat` (Startup Script)

**Purpose:**
Automates execution of the REST module.

**Responsibilities:**

* Starts the REST API server
* Opens the frontend UI in the browser

---

## 🧪 How the Module Works (Flow)

1. Admin enters notice details in UI
2. Browser sends HTTP POST request to server
3. Server stores notice in memory
4. Student UI sends HTTP GET request
5. Server returns list of notices
6. Notices are displayed dynamically on UI

---

## 🎓 Learning Outcome

* Understanding RPC through REST APIs
* Designing stateless distributed services
* Implementing client–server communication over HTTP
* Managing shared data without persistent storage

---

### ✅ Module 3 Status

* REST API implementation: ✅
* Stateless communication: ✅
* In-memory storage: ✅
* Admin–Student interaction: ✅

# 📘 Module 4: Peer-to-Peer (P2P)

## Student Resource Sharing System

---

## 📌 Module Objective

The objective of this module is to demonstrate a **Peer-to-Peer (P2P) distributed system**, where there is **no central server** and each node (peer) can act as both a **client and a server** to share academic resources.

---

## 🧠 Distributed Systems Concept Used

* Peer-to-Peer architecture
* Decentralized communication
* Direct peer communication using TCP
* Fault tolerance
* In-memory peer information

---

## 📁 Folder Structure (Module 4)

```
Module4_P2P/
│
├── backend/
│   ├── peer1.py
│   ├── peer2.py
│   └── peer3.py
│
├── shared_peer1/
├── shared_peer2/
├── shared_peer3/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── start_module4.bat
```

---

## 📄 File-wise Explanation

### 1️⃣ `peer1.py`, `peer2.py`, `peer3.py` (Peer Programs)

**Purpose:**
Each file represents an independent **peer** in the P2P network.

**Responsibilities:**

* Starts a TCP server to serve files to other peers
* Maintains an **in-memory peer list** (known peers)
* Responds to file list and file download requests
* Acts as both client and server

**Distributed Systems Aspect:**

* No centralized server
* Each peer is autonomous
* Direct peer-to-peer communication

---

### 2️⃣ `shared_peer1/`, `shared_peer2/`, `shared_peer3/` (Shared Folders)

**Purpose:**
Stores files that each peer is willing to share.

**Responsibilities:**

* Files placed here become available to other peers
* No global or central storage

**Distributed Systems Aspect:**

* Local ownership of data
* Decentralized file sharing

---

### 3️⃣ `index.html` (Frontend UI)

**Purpose:**
Provides a user interface to interact with peers.

**Features:**

* Peer selection dropdown
* List available files on a selected peer
* Download files from another peer
* Upload files to the local peer

**Distributed Systems Aspect:**

* Acts as a client interface for peer interaction

---

### 4️⃣ `script.js` (Client-side Logic)

**Purpose:**
Handles communication between UI and the local peer backend.

**Responsibilities:**

* Fetches list of available peers
* Requests file lists from selected peers
* Initiates file download
* Uploads files to the local peer

**Distributed Systems Aspect:**

* Manages decentralized communication
* Demonstrates peer discovery and interaction

---

### 5️⃣ `style.css` (UI Styling)

**Purpose:**
Improves layout and usability of the P2P interface.

---

### 6️⃣ `start_module4.bat` (Startup Script)

**Purpose:**
Automates startup of multiple peers and UI.

**Responsibilities:**

* Starts peer processes on different ports
* Opens the frontend UI

---

## 🧪 How the Module Works (Flow)

1. Multiple peers are started on different ports
2. Each peer maintains a list of known peers in memory
3. User selects a peer from the UI
4. UI requests the selected peer’s file list
5. File is downloaded directly from the peer
6. Files uploaded are stored in the local peer’s shared folder

---

## 🎓 Learning Outcome

* Understanding decentralized systems
* Implementing direct peer-to-peer communication
* Handling multiple autonomous nodes
* Achieving resource sharing without a central server

---

### ✅ Module 4 Status

* Peer-to-Peer architecture: ✅
* No central server: ✅
* Direct file transfer: ✅
* In-memory peer management: ✅

# 📘 Module 5: Shared Memory

## Mess Feedback Live Counter

---

## 📌 Module Objective

The objective of this module is to demonstrate **inter-process communication using shared memory** and to ensure **safe concurrent access** using synchronization mechanisms such as **semaphores / mutexes**.

---

## 🧠 Distributed Systems Concept Used

* Shared memory
* Inter-process communication (IPC)
* Synchronization using semaphore / mutex
* Race condition prevention
* In-memory data sharing

---

## 📁 Folder Structure (Module 5)

```
Module5_SharedMemory/
│
├── backend/
│   └── server.py
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── start_module5.bat
```

---

## 📄 File-wise Explanation

### 1️⃣ `server.py` (Backend – Shared Memory Server)

**Purpose:**
Implements the backend logic that maintains shared feedback counters using **shared memory**.

**Responsibilities:**

* Creates shared memory variables for:

  * Good
  * Average
  * Poor
* Uses a **semaphore/mutex** to control access
* Handles concurrent update requests safely
* Returns live feedback counts to clients

**Distributed Systems Aspect:**

* Demonstrates shared memory IPC
* Ensures mutual exclusion
* Prevents race conditions

---

### 2️⃣ `index.html` (Frontend UI)

**Purpose:**
Provides a user interface for submitting mess feedback.

**Features:**

* Buttons for:

  * Good
  * Average
  * Poor
* Live display of feedback counts

**Distributed Systems Aspect:**

* Acts as multiple concurrent clients
* Triggers updates to shared memory

---

### 3️⃣ `script.js` (Client-side Logic)

**Purpose:**
Handles communication between the UI and backend server.

**Responsibilities:**

* Sends feedback choice to the server
* Periodically fetches updated counts
* Updates the UI in real time

**Distributed Systems Aspect:**

* Simulates concurrent processes
* Demonstrates synchronized access to shared data

---

### 4️⃣ `style.css` (UI Styling)

**Purpose:**
Improves clarity and usability of the feedback interface.

---

### 5️⃣ `start_module5.bat` (Startup Script)

**Purpose:**
Automates execution of the shared memory module.

**Responsibilities:**

* Starts the shared memory server
* Opens the frontend UI

---

## 🧪 How the Module Works (Flow)

1. Multiple users open the feedback UI
2. Each user submits feedback
3. Backend acquires semaphore
4. Shared memory counter is updated
5. Semaphore is released
6. Updated counts are returned and displayed live

---

## 🎓 Learning Outcome

* Understanding shared memory IPC
* Applying synchronization techniques
* Preventing race conditions in concurrent systems
* Managing shared state safely

---

### ✅ Module 5 Status

* Shared memory implementation: ✅
* Semaphore-based synchronization: ✅
* Race condition prevention: ✅
* Live updates: ✅


## 🎓 Conclusion

This project provides a comprehensive demonstration of **core Distributed Systems concepts**, including communication, coordination, decentralization, and synchronization.
Each module is implemented independently and integrated through a unified interface for effective demonstration and evaluation.

---

