# 🩺 Agnos Real-Time Patient Form Monitor (Frontend)

A responsive real-time patient form that allows **patients** to input their information and **staff** to monitor updates instantly via **Socket.IO**.  
Built with **Next.js 15**, **TypeScript**, and **TailwindCSS**.

---

## 🚀 Live Demo

| Service                                 | URL                                            |
| --------------------------------------- | ---------------------------------------------- |
| **Frontend (Next.js)**                  | https://agnos-test-pi.vercel.app/             |
| **Socket Server (Express + Socket.IO)** | https://agnos-socket-production.up.railway.app |

---

## 🧩 Features

- 🧍‍♂️ **Patient Form** – Patients fill in personal data with live validation.
- 🩺 **Staff View** – Displays real-time form updates and typing indicators.
- 🔄 **Real-Time Sync** – Implemented with Socket.IO (room-based).
- 🧠 **Form Validation** – React Hook Form + Zod Schema.
- 📱 **Responsive Design** – Fully adaptive for mobile and desktop.
- ⚡ **TypeScript Support** – Strict type-safe components.
- ☁️ **Deployed** – Frontend on Vercel and Socket Server on Railway.

---

## 🛠️ Tech Stack

| Layer      | Technology                            |
| ---------- | ------------------------------------- |
| Framework  | Next.js 15 (App Router)               |
| Language   | TypeScript                            |
| Styling    | TailwindCSS + ShadCN UI               |
| State Mgmt | React Hooks / useForm                 |
| Real-Time  | Socket.IO Client                      |
| Validation | Zod + React Hook Form                 |
| Deployment | Vercel (Frontend) / Railway (Backend) |

---

## 📂 Project Structure
src/
├── app/
│   ├──(root)
│   │   ├── patient/           # Patient form page (real-time input)
│   │   ├── staff/             # Staff monitoring patient form
│   ├── layout.tsx         # Root layout wrapper
│   └── page.tsx           # Default Home page
│
├── components/
│   ├── custom             # Custom compontents
│   ├── ui/                # ShadCN reusable UI components
│   ├── patient-form/      # Form sections & socket handlers
│   └── staff-view/        # Staff display + typing indicator
│
├── core/
│   ├──modules/            # Modules Components
│      ├──home/
│      │   ├──schema/      # Home Zod Schema Form
│      │   ├──ui/          # Home Component UI
│      ├──patient
│      │   ├──schema/      # Patient Zod Schema Form
│      │   ├──ui/          # Patient Component UI
│      ├──staff 
│      │   ├──ui/          # Staff Component UI
│
├── lib/
│   ├── formate-date.ts    # Formate Date rendering utility function 
│   ├── socket.ts          # Socket.IO client setup
│   └── utils.ts           # Helper utilities
│
└── styles/
└── globals.css
