# CodeAlpha_Calculator

A sleek, modern, and responsive web-based Calculator built using HTML5, CSS3, and vanilla JavaScript as part of the Frontend Development Internship at CodeAlpha.

## 🚀 Features

- **Core Arithmetic Operations:** Supports addition (`+`), subtraction (`-`), multiplication (`×`), and division (`÷`).
- **Real-Time Display:** A dual-line screen that clearly tracks both your previous operand/operator and your current real-time input.
- **Error Handling:** Built-in validation to handle edge cases, such as preventing division by zero ("Error") or restricting multiple decimal points.
- **Dynamic Layout:** Built using modern CSS Grid layouts with custom hover effects and micro-transitions for an enhanced user experience.
- **Bonus Feature - Full Keyboard Support:** Allows users to execute complete calculations smoothly using their physical computer keyboard.

## 🎹 Keyboard Controls

| Physical Key | Calculator Action |
| :--- | :--- |
| `0` - `9` / `.` | Appends Numbers or Decimals |
| `+`, `-`, `*`, `/` | Arithmetic Operators |
| `Enter` / `=` | Computes the expression |
| `Backspace` | Deletes the last digit (`DEL`) |
| `Escape` | Clears the entire workspace (`AC`) |

## 🛠️ Built With

* **HTML5:** Semantic structure for the calculator buttons and display screen elements.
* **CSS3:** Custom styles leveraging CSS variables, a responsive layout via Flexbox/Grid, and smooth `linear-gradient` backgrounds.
* **JavaScript (ES6):** Dynamic event Handling, state management, calculation logic, and event listeners for keyboard input.

## 📂 Project Structure

```text
CodeAlpha_Calculator/
│
├── index.html     # Structural layout and button distribution
├── style.css      # Custom styling, grid system, and themes
└── script.js     # Computational math engine and keyboard support
