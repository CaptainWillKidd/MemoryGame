/**
 * REQUISITE CHECKLIST:
 * 1. Display output: Done via DOM manipulation in initGame()
 * 2. Native Array ES6: Used .map() and Spread Operator
 * 3. Recursion: Used in recursiveShuffle()
 * 4. Third-party library: Howler.js for audio
 * 5. Exception handling: try/catch block for audio loading
 */

// --- 1. AUDIO CONFIGURATION (Requirement: Library & Exception Handling) ---
let successSound, errorSound, clickSound, winSound;

try {
    // Initializing sounds using Howler.js library
    clickSound = new Howl({ src: ['Sounds/click.mp3'] });
    successSound = new Howl({ src: ['Sounds/correct.mp3'] });
    errorSound = new Howl({ src: ['Sounds/error.mp3'] });
    winSound = new Howl({ src: ['Sounds/win.mp3'] });
} catch (error) {
    // Gracefully handle loading errors (Requirement: Throwing/Handling exceptions)
    console.error("Failed to load third-party audio assets:", error);
}

// --- 2. GAME STATE ---
const emojis = ['🔥', '🔥', '⚡', '⚡', '👑', '👑', '💎', '💎', '🌟', '🌟', '🎉', '🎉', '🎊', '🎊', '🎁', '🎁'];
let flippedCards = [];
let lockBoard = false;
let matchCount = 0;

// --- 3. INITIALIZE GAME ---
function initGame() {
    const board = document.getElementById('game-board');
    board.innerHTML = ''; // Clear previous board
    matchCount = 0;
    document.getElementById('matches').innerText = matchCount;

    // Shuffle cards using a custom recursive function
    const shuffledEmojis = [];
    const emojiCopy = [...emojis]; // ES6 Spread operator
    recursiveShuffle(emojiCopy, shuffledEmojis);

    // Creating DOM structures using ES6 Array functions (Requirement: ES6 Native Array)
    shuffledEmojis.map((emoji, index) => {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.emoji = emoji;
        card.id = `card-${index}`;

        card.innerHTML = `
            <div class="front-face">${emoji}</div>
            <div class="back-face">?</div>
        `;

        card.addEventListener('click', flipCard);
        
        // Requirement: Display output to screen
        board.appendChild(card);
    });
}

// --- 4. RECURSIVE FUNCTION (Requirement: Recursion) ---
function recursiveShuffle(sourceArray, targetArray) {
    // Base case: if no more items, stop recursion
    if (sourceArray.length === 0) return;

    const randomIndex = Math.floor(Math.random() * sourceArray.length);
    targetArray.push(sourceArray[randomIndex]);
    sourceArray.splice(randomIndex, 1);

    // Recursive call
    recursiveShuffle(sourceArray, targetArray);
}

// --- 5. GAME LOGIC ---
function flipCard() {
    if (lockBoard) return;
    if (this === flippedCards[0]) return; 

    if (clickSound) clickSound.play();
    this.classList.add('flip');

    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkForMatch();
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    const isMatch = card1.dataset.emoji === card2.dataset.emoji;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    if (successSound) successSound.play();
    
    flippedCards[0].removeEventListener('click', flipCard);
    flippedCards[1].removeEventListener('click', flipCard);

    matchCount++;
    document.getElementById('matches').innerText = matchCount;

    resetTurn();

    if (matchCount === emojis.length / 2) {
        if (winSound) winSound.play();
        setTimeout(() => alert("Victory! You found all pairs! 🎉"), 500);
    }
}

function unflipCards() {
    lockBoard = true;
    if (errorSound) errorSound.play();

    setTimeout(() => {
        flippedCards[0].classList.remove('flip');
        flippedCards[1].classList.remove('flip');
        resetTurn();
    }, 1000);
}

function resetTurn() {
    flippedCards = [];
    lockBoard = false;
}

function resetGame() {
    initGame();
}

// Initialize when the page loads
window.onload = initGame;