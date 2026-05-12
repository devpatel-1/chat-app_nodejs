# 📝 Full Stack Notes App

A modern full-stack Notes App built using Node.js, Express, MongoDB, HTML, CSS, and JavaScript.

---

# 🚀 Live Demo

🌐 Live App:  
https://chat-app-nodejs-nine.vercel.app/

⚙️ Backend API:  
https://chat-app-nodejs-ag2d.onrender.com

---

# ✨ Features

- Add Notes
- Delete Notes
- Persistent MongoDB Database
- Responsive UI
- REST API
- Full Stack Deployment
- Fast Frontend using Vercel
- Backend API using Render

---

# 🛠️ Tech Stack

## Frontend
- HTML
- CSS
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Deployment
- Vercel (Frontend)
- Render (Backend)

---

# 📂 Project Structure

```bash
chat-app_nodejs/

├── backend/
│   ├── app.js
│   ├── db.js
│   ├── note.js
│   ├── package.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/devpatel-1/chat-app_nodejs.git
```

---

## Backend Setup

```bash
cd chat-app_nodejs/backend

npm install
```

Create environment variable:

```env
MONGODB_URL=your_mongodb_connection_string
```

Run backend server:

```bash
npm start
```

---

## Frontend Setup

Open:

```bash
chat-app_nodejs/frontend/index.html
```

OR use Live Server extension in VS Code.

---

# 🌐 API Endpoints

## Get Notes

```http
GET /notes
```

---

## Add Note

```http
POST /notes
```

### Request Body

```json
{
  "title": "My Note",
  "body": "Hello World"
}
```

---

## Delete Note

```http
DELETE /notes/:title
```

---

# 👨‍💻 Author

Built with ❤️ by Dev Patel

GitHub:
https://github.com/devpatel-1

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub.
