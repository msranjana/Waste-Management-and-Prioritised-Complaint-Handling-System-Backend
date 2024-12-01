# Waste Management and Prioritized Complaint Handling System

## Project Overview
This project aims to streamline the process of managing waste collection complaints in Mangalore (or similar urban areas) by providing an efficient system for handling, prioritizing, and resolving complaints. The system uses data structures like **queues** to prioritize urgent complaints, **stacks** to store historical data of resolved complaints, and **file handling** to maintain logs of actions for transparency and audit purposes. Complaints are categorized and processed based on their priority, such as health hazards or missed pickups in sensitive areas (e.g., near hospitals or schools).

---

## Features
- **Complaint Prioritization:** Complaints are handled based on urgency. For example, complaints near hospitals or schools are prioritized.
- **Historical Tracking:** Resolved complaints are stored in a stack for potential reversion or review.
- **Log Generation:** A CSV file of resolved complaints is generated for auditing purposes.
- **RESTful API:** The backend exposes API endpoints for submitting complaints, viewing complaints, resolving complaints, and generating logs.
- **Scalable System:** Built using Node.js and Express, it provides an extensible architecture for future improvements.

---

## Project Structure
```plaintext
waste-management-system/
├── controllers/
│   ├── complaintsController.js   # Logic for handling complaints
│   ├── resolutionController.js   # Logic for resolving complaints
├── data/
│   ├── resolvedComplaints.csv    # Log of resolved complaints
├── routes/
│   ├── complaintRoutes.js        # Defines API endpoints for complaints
│   ├── resolutionRoutes.js       # Defines API endpoints for resolutions
├── services/
│   ├── queueService.js           # Queue logic for prioritization
│   ├── stackService.js           # Stack logic for historical tracking
├── app.js                        # Main server file
├── package.json                  # Project metadata and dependencies
├── README.md                     # Project documentation
```

## API Endpoints

### 1. **POST /complaints**
- **Description:** Submit a new complaint to the system.
- **Request Body Example:**
  ```json
  {
    "complaintId": "C001",
    "description": "Missed garbage pickup near hospital",
    "priority": 1
  }

**Response Example:**
```
json
Copy code
```

### 2. **GET  /complaints**
- **Description:** Fetch all active complaints in the system.

**Response Example:**
```
json
[
  {
    "complaintId": "C001",
    "description": "Missed garbage pickup near hospital",
    "priority": 1
  },
  {
    "complaintId": "C002",
    "description": "Overflowing garbage bin in park",
    "priority": 2
  }
]
```

### 3. **POST /resolve**
- **Description:**  Resolve the highest-priority complaint and move it to the resolved stack.

**Response Example:**
```
json
{
  "message": "Complaint C001 resolved and moved to history."
}
```

### 4. **GET /resolved**
- **Description:**  Fetch all resolved complaints stored in the stack.

**Response Example:**
```
json
[
  {
    "complaintId": "C001",
    "description": "Missed garbage pickup near hospital",
    "resolvedAt": "2024-12-01T12:00:00Z"
  }
]
```

### 5. **GET /generate-log**
- **Description:**  Generate a .csv file of resolved complaints.

**Response Example:**
```
json
{
  "message": "Resolved complaints log generated successfully."
}

```
---

## Setup Instructions

### 1. **Clone the Repository**
To begin, clone the repository to your local machine by running the following command in your terminal or command prompt:

```bash
git clone https://github.com/msranjana/Waste-Management-and-Prioritised-Complaint-Handling-System.git
```
Next, navigate into the project directory using the command:
```bash
cd Waste-Management-and-Prioritised-Complaint-Handling-System
```

### 2. **Install Dependencies**
Before you can run the project, you need to install the necessary dependencies. Make sure you have **Node.js** installed on your system. If not, you can download it from the [official Node.js website](https://nodejs.org/).

Once **Node.js** is installed, run the following command to install the required packages:

```bash
npm install
```

### 3. **Start the Server**
After the dependencies are installed, you can start the backend server by running the following command:
```bash
node app.js
```
Once the server is started, it will listen on http://localhost:3000. You can check if the server is running by visiting this URL in your browser or using Postman to test the endpoints.

### 4. **Acess the application**
After starting the server, it will be accessible locally on http://localhost:3000. You can now test the API endpoints using tools like Postman or cURL. Follow the instructions in the API Endpoints section to test each API route.










