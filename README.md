# 🎮 Tic-Tac-Toe Game | Vanilla JS

A simple yet highly interactive Tic-Tac-Toe game. This project focuses on clean code and efficient game logic handling using Vanilla JavaScript.

🌐 **Live Demo:** [https://tictactoerk.netlify.app](https://tictactoerk.netlify.app) (Apna sahi link yahan daalein)

---

## ✨ Key Features
- **Smart Win Detection:** Implements an algorithm to check for 8 possible winning combinations instantly.
- **Draw Logic:** Detects when the board is full and no player has won.
- **Interactive UI:** Smooth hover effects and animations for 'X' and 'O' marks.
- **Reset Functionality:** Quickly restart the game without refreshing the page.
- **Responsive Design:** Playable on both mobile and desktop browsers.

---

## 🛠️ Tech Stack
- **Structure:** HTML5
- **Styling:** CSS3 (Flexbox/Grid for the game board)
- **Logic:** Vanilla JavaScript (ES6+)

---

## ⚙️ How It Works (The Logic)
1. **Board State:** The game state is maintained in a JavaScript array.
2. **Event Listeners:** Each cell has a click listener that triggers the turn-taking logic.
3. **Winning Patterns:** After every move, the code iterates through a pre-defined 2D array of winning indexes:
   ```javascript
   const winPatterns = [
     [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
     [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
     [0, 4, 8], [2, 4, 6]             // Diagonals
   ];
