# Goal Manager

A simple React application for managing personal goals. Built with Vite and React.

## Features

- Add new goals with an input field and "Add" button
- View a list of all goals
- Mark goals as done (with strikethrough styling)
- Delete goals from the list
- Component drilling for structured code organization

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

- `src/App.jsx` - Main application component
- `src/components/GoalList.jsx` - Component for rendering the list of goals
- `src/components/GoalItem.jsx` - Component for individual goal items
- `src/App.css` - Styles for the application

## Technologies Used

- React 19
- Vite
- ESLint
