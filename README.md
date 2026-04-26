# CRM Frontend (React)

## 🚀 Overview

This is the frontend of the CRM Lead Management System built using React.
It provides a simple and responsive interface to manage leads including adding, viewing, searching, and updating lead status.

---

## 🛠️ Tech Stack

* React.js (SPA)
* Vite
* Fetch API
* CSS (inline styling)

---

## ✨ Features

* ➕ Add new leads
* 📋 View all leads
* 🔍 Search leads (client-side filtering for fast UX)
* 🔄 Update lead status
* ⚡ Fast and responsive UI

---

## 🏗️ Architecture

* Single Page Application (SPA)
* Uses React hooks (`useState`, `useEffect`)
* Communicates with backend via REST API

---

## 🌐 API Integration

The frontend connects to the backend API:

```text
https://crm-real-estate-red.vercel.app/api/leads
```

---

## ⚙️ Setup Instructions

### 1️⃣ Install dependencies

```bash
npm install
```

---

### 2️⃣ Run development server

```bash
npm run dev
```

---

### 3️⃣ Open in browser

```text
http://localhost:5173
```

---

## 📂 Project Structure

```text
src/
  App.jsx
  main.jsx
  components/
    LeadForm.jsx
    LeadList.jsx
```

---

## 🔍 Search Functionality

* Implemented on the frontend for instant results
* Filters leads based on:

  * name
  * phone

---

## ⚡ Key Highlights

* Clean and minimal UI
* Fast filtering without API delay
* Easy to extend and maintain
* Modular component structure

---

## ⚠️ Notes

* API URL is currently hardcoded
* Can be moved to environment variables for production

---

## 🚧 Future Improvements

* Better UI/UX design
* Form validation enhancements
* Pagination
* Debounced search

---

## 👨‍💻 Author

Vaibhav Pandey
