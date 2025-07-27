# Modern React Form with Glassmorphism UI

A beautiful, responsive contact form built with React and Tailwind CSS featuring a modern glassmorphism design and smooth toast notifications.

## ✨ Features

- **Glassmorphism Design**: Modern translucent glass effect with backdrop blur
- **Floating Labels**: Clean and modern input field design
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Toast Notifications**: Smooth toast notifications using Sonner
- **Modern UI**: Clean, minimalist design with smooth animations
- **Gradient Background**: Beautiful purple-to-blue gradient background

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Sonner** - Beautiful toast notifications
- **ESLint** - Code linting and formatting

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
src/
├── components/
│   └── Form.jsx          # Main form component
├── App.jsx               # Root application component
├── main.jsx              # Application entry point
├── App.css               # Global styles
└── index.css             # Base styles
```

## 🎨 Features in Detail

### Form Fields
- **Name**: Text input with validation
- **Email**: Email input with format validation
- **Message**: Multi-line textarea for longer messages
- **Gender**: Radio button selection (Male/Female)

### UI Components
- **Glassmorphism Container**: Translucent background with blur effect
- **Floating Labels**: Labels that appear above input fields
- **Responsive Design**: Adapts to different screen sizes
- **Focus States**: Smooth focus animations on form elements

### Toast Notifications
- **Success Messages**: Confirmation when form is submitted
- **Smooth Animations**: Elegant slide-in/out animations
- **Auto-dismiss**: Toasts automatically disappear after 4 seconds
- **Manual Close**: Users can manually close toasts

## 🎯 Usage

1. Fill in the required fields (Name, Email, Message)
2. Select your gender preference
3. Click the "Send" button to submit
4. View the success toast notification

## 📱 Responsive Design

The form is fully responsive and optimized for:
- **Desktop**: 40% width on extra-large screens
- **Tablet**: 35% width on medium screens
- **Mobile**: 80% width on small screens

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize:
- Colors in the gradient background
- Glassmorphism effects
- Form field styling
- Toast notification appearance



- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

