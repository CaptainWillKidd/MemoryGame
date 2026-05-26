# Overview

As a software engineer, my goal with this project is to deepen my understanding of core and advanced JavaScript concepts, moving beyond basic scripts to create an interactive, state-driven application. This project allows me to master modern ECMAScript (ES6+) features, asynchronous programming, and audio manipulation in a practical scenario.

I have built an interactive, browser-based **Memory Match Game** featuring audio feedback. The game presents a grid of faced-down cards. Users flip two cards at a time to find matching pairs. To elevate the user experience, the software features sound effects for successful matches, mismatches, and victory celebrations, alongside a real-time score tracker.

The purpose of writing this software is to demonstrate proficiency in native JavaScript manipulation, efficient data structures (using ES6 array methods for shuffling and matching logic), structural code organization via recursion, and smooth integration of third-party audio packages to enrich web interactivity.

[Software Demo Video](https://youtube.link.goes.here)

# Development Environment

To build and test this software, I utilized the following tools:
- **Visual Studio Code (VS Code):** As the primary Integrated Development Environment (IDE) for writing code, debugging, and managing files.
- **Google Chrome / Developer Tools:** Used extensively for testing DOM performance, inspecting elements, and debugging JavaScript logic via the console.
- **Git & GitHub:** For version control and repository hosting.

### Language & Libraries
- **JavaScript (ES6+):** The core programming language used to handle the game's state, logic, and animations.
- **Howler.js (via CDN):** A robust third-party JavaScript audio library used to ensure reliable, cross-browser playback of game sound effects.

---

# Key JavaScript Implementations

Here is how the module's unique requirements are met inside the source code:

* **Display Output:** Rendered visually directly in the browser via dynamic HTML manipulation and styled using CSS.
* **Native Array ES6 Functions:** Used `.map()` to generate card elements, `.filter()` to check for remaining unmatched pairs, and `.forEach()` to attach event listeners dynamically.
* **Recursion:** Implemented a recursive function to handle the game's grid-clearing animation or countdown timer sequences.
* **Third-Party Library:** Integrated **Howler.js** to pre-load, cache, and trigger spatialized sound effects without blocking the main execution thread.
* **Exception Handling (Additional Requirement):** Wrapped the external asset loading process (images and audio files) in `try...catch` blocks to gracefully log errors if a resource fails to load.

---

# Useful Websites

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Howler.js Official Documentation](https://howlerjs.com/)
- [JavaScript.info - Promises and Async/Await](https://javascript.info/)
- [How to Create a Memory Game] (https://www.youtube.com/watch?v=t3cydTwfEnM)

# Future Work

- Add difficulty levels (4x4, 6x6, 8x8 grids) that dynamically scale the UI.
- Implement a persistent Leaderboard using browser LocalStorage to save high scores.
- Add a dark mode toggle and advanced accessibility features (keyboard navigation for cards).