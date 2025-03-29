// let cardCount = 0;
// const container = document.getElementById("container");
// const addCardBtn = document.getElementById("addCardBtn");

// const colors = [
//   "#ccff00", // neon green
//   "rgb(187, 13, 250)", // purple
//   "rgb(0, 149, 255)", // blue
//   "rgb(255, 0, 234)", // pink
// ];

// addCardBtn.addEventListener("click", () => {
//   if (cardCount >= colors.length) {
//     alert("Max number of cards reached!");
//     return;
//   }

//   // Create card
//   const card = document.createElement("div");
//   card.classList.add("card");
//   card.style.backgroundColor = colors[cardCount];
//   card.style.boxShadow = `10px 10px 40px ${colors[cardCount]}`;
//   card.style.top = `${100 + cardCount * 30}px`;
//   card.style.left = `${100 + cardCount * 30}px`;

//   // Get user input
//   const userText = prompt("Enter your card text:");

//   // Cancel or empty input? Don't create the card.
//   if (!userText) return;

//   // Continue creating the card
//   const para = document.createElement("p");
//   para.innerText = userText;
//   card.appendChild(para);

//   // Add delete button
//   const closeBtn = document.createElement("button");
//   closeBtn.innerText = "✕";
//   closeBtn.classList.add("close-btn");
//   closeBtn.addEventListener("click", () => {
//     container.removeChild(card);
//     cardCount--; // optional: allow reusing slots/colors
//   });
//   card.appendChild(closeBtn);

//   // Make card draggable
//   makeDraggable(card);

//   // Add to container
//   container.appendChild(card);
//   cardCount++;
// });

// // Draggable function
// function makeDraggable(card) {
//   let startX = 0,
//     startY = 0,
//     newX = 0,
//     newY = 0;

//   card.addEventListener("mousedown", (e) => {
//     startX = e.clientX;
//     startY = e.clientY;

//     const onMouseMove = (e) => {
//       newX = startX - e.clientX;
//       newY = startY - e.clientY;
//       startX = e.clientX;
//       startY = e.clientY;
//       card.style.top = card.offsetTop - newY + "px";
//       card.style.left = card.offsetLeft - newX + "px";
//     };

//     const onMouseUp = () => {
//       document.removeEventListener("mousemove", onMouseMove);
//       document.removeEventListener("mouseup", onMouseUp);
//     };

//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseup", onMouseUp);
//   });
// }

















let cardCount = 0;
const container = document.getElementById('container');
const addCardBtn = document.getElementById('addCardBtn');
const noteList = document.getElementById('noteList');

const colors = [
    '#ccff00',
    'rgb(187, 13, 250)',
    'rgb(0, 149, 255)',
    'rgb(255, 0, 234)'
];

addCardBtn.addEventListener("click", () => {
    if (cardCount >= colors.length) {
        alert("Max number of cards reached!");
        return;
    }

    const userText = prompt("Enter your card text:");
    if (!userText) return;

    // Create card
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = colors[cardCount];
    card.style.boxShadow = `10px 10px 40px ${colors[cardCount]}`;
    card.style.top = `${100 + cardCount * 30}px`;
    card.style.left = `${300 + cardCount * 30}px`; // offset from sidebar

    const para = document.createElement("p");
    para.innerText = userText;
    card.appendChild(para);

    const closeBtn = document.createElement("button");
    closeBtn.innerText = "✕";
    closeBtn.classList.add("close-btn");

    // Card and list item delete logic
    const listItem = document.createElement("li");
    listItem.classList.add("note-item");

    const noteText = document.createElement("span");
    noteText.innerText = userText;

    const deleteNoteBtn = document.createElement("button");
    deleteNoteBtn.innerText = "✕";
    deleteNoteBtn.classList.add("note-delete");

    deleteNoteBtn.addEventListener("click", () => {
        container.removeChild(card);
        noteList.removeChild(listItem);
        cardCount--;
    });

    closeBtn.addEventListener("click", () => {
        container.removeChild(card);
        noteList.removeChild(listItem);
        cardCount--;
    });

    listItem.appendChild(noteText);
    listItem.appendChild(deleteNoteBtn);
    noteList.appendChild(listItem);

    card.appendChild(closeBtn);
    makeDraggable(card);
    container.appendChild(card);
    cardCount++;
});
