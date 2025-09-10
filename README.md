# React Calculator

An elegant, responsive calculator built with React and Vite. Supports basic arithmetic operations, keyboard backspace for delete, and a clean, modern UI.

## Features

- Basic operations: **addition (+)**, **subtraction (-)**, **multiplication (x)**, **division (÷)**
- Input buttons for digits 0–9 and decimal point
- Shows previous value and selected operation
- Clear (C), Delete (⌫), and Equals (=) controls
- Keyboard: Backspace deletes the last digit

## Tech Stack

- **React 19** with **Vite** bundler
- Modern CSS with grid layout and hover transitions
- ESLint configured for a clean codebase

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install
```bash
npm install
```

### Run locally (dev server)
```bash
npm run dev
```
Open the printed local URL (usually `http://localhost:5173`).

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## Project Structure

```
src/
  components/
    Calculator.jsx   # Main calculator component and logic
  App.jsx            # App entry rendering Calculator
  App.css            # Component styles for Calculator/UI
  index.css          # Global base styles
  main.jsx           # React root bootstrap
index.html           # App HTML shell and metadata
```

## How It Works

- `Calculator.jsx` manages `current`, `prev`, and `operation` states.
- Clicking a number appends to `current`.
- Selecting an operation stores `current` in `prev`, resets `current`, and sets `operation`.
- `=` computes `prev (op) current` and shows the result.
- `C` clears all; `⌫` deletes the last character. Division by zero returns "Error".

## Accessibility & UX

- Clear visual hierarchy and focusable controls
- Large targets and responsive grid layout

## License

MIT
