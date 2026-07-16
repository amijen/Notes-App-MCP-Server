# Notes App MCP Server
A secure, AI-powered Notes application built with the Model Context Protocol (MCP). This project features a React frontend with Stytch authentication and a Python FastMCP backend that allows AI assistants (like Cline) to securely read and write notes on behalf of the authenticated user.

## 🛠️ Tech Stack

- **Backend:** Python, FastMCP, SQLAlchemy, SQLite, Stytch (JWT Auth)
- **Frontend:** React, Vite, Stytch React SDK
- **AI Integration:** Model Context Protocol (MCP), Cline (VS Code Extension)

## 📂 Project Structure
```
├── backend/
│   ├── main.py          # FastMCP server and API routes
│   ├── database.py      # SQLAlchemy models and repository
│   ├── database.db      # SQLite database (auto-generated)
│   ├── .env             # Environment variables (Stytch keys)
│   └── pyproject.toml   # Python dependencies (uv)
├── vite-project/        # React Frontend
│   ├── src/
│   │   ├── App.jsx      # Stytch Login component
│   │   └── main.jsx     # Stytch Client provider
│   └── package.json
└── README.md
```

## 🚀 Getting Started

#### Prerequisites
- Python 3.10+ and uv package manager
- Node.js and npm
- A Stytch account (for API keys)

#### 1. Backend Setup
Navigate to the backend folder and install dependencies:

```bash
cd backend
uv sync
```

Create a ``.env `` file in the ``backend`` folder with your Stytch credentials:

```bash
STYTCH_PROJECT_ID = 
STYTCH_SECRET = 
STYTCH_DOMAIN =
```
#### 2. Frontend Setup
Navigate to the frontend folder and install dependencies:
```bash
cd vite-project
npm install
```

## ▶️ How to Run

You need to run three separate processes to use the full application.

### 1. Start the Backend Server
```bash
cd backend
python main.py
```
The MCP server will start on ``http://127.0.0.1:8000/mcp``.

### 2. Start the Frontend
```bash
cd vite-project
npm run dev
```
The React app will start on ``http://localhost:5173``.

### 3. Start the MCP Inspector (Optional)
To manually test the tools and connection:

```bash
npx @modelcontextprotocol/inspector
```
Open the inspector in your browser, set the URL to `http://127.0.0.1:8000/mcp`, and connect.

## 🤖 Using the MCP Tools with Cline
This project is designed to let AI assistants interact with your notes. We use **Cline**, an open-source AI coding assistant for VS Code.

### Step 1: Install Cline
1. Open VScode
2. Go to the Extensions marketplace (Ctrl+Shift+X).
3. Search for Cline and install it.

### Step 2: Configure the MCP Server in Cline
1. Click the **Cline icon** in the VS Code sidebar to open the chat.
2. Click the **Settings (gear)** icon inside the Cline window.
3. Scroll down to the **MCP Servers** section.
4. Click **Add MCP Server** and enter the following details:
    - **Name**: `Notes App`
    - **Transport**: `streamable-http`
    - **URL**: `http://127.0.0.1:8000/mcp`
5. Save the settings. Cline will automatically connect to your running backend.

### Step 3: Interact with your Notes
Once connected, you can chat with Cline naturally. Because the tools are secured with Stytch JWTs, ensure you are logged in via the frontend to generate valid tokens if required by your specific auth flow.