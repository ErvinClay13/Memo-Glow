// let cardCount = 0;
// const container = document.getElementById('container');
// const addCardBtn = document.getElementById('addCardBtn');

// const colors = [
//     '#ccff00',            // neon green
//     'rgb(187, 13, 250)',  // purple
//     'rgb(0, 149, 255)',   // blue
//     'rgb(255, 0, 234)'    // pink
// ];

// addCardBtn.addEventListener("click", () => {
//     if (cardCount >= colors.length) {
//         alert("Max number of cards reached!");
//         return;
//     }

//     // Create card
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.style.backgroundColor = colors[cardCount];
//     card.style.boxShadow = `10px 10px 40px ${colors[cardCount]}`;
//     card.style.top = `${100 + cardCount * 30}px`;
//     card.style.left = `${100 + cardCount * 30}px`;

//     // Get user input
//     const userText = prompt("Enter your card text:");

// // Cancel or empty input? Don't create the card.
// if (!userText) return;

// // Continue creating the card
// const para = document.createElement("p");
// para.innerText = userText;
// card.appendChild(para);


//     // Add delete button
//     const closeBtn = document.createElement("button");
//     closeBtn.innerText = "✕";
//     closeBtn.classList.add("close-btn");
//     closeBtn.addEventListener("click", () => {
//         container.removeChild(card);
//         cardCount--; // optional: allow reusing slots/colors
//     });
//     card.appendChild(closeBtn);

//     // Make card draggable
//     makeDraggable(card);

//     // Add to container
//     container.appendChild(card);
//     cardCount++;
// });

// // Draggable function
// function makeDraggable(card) {
//     let startX = 0, startY = 0, newX = 0, newY = 0;

//     card.addEventListener('mousedown', (e) => {
//         startX = e.clientX;
//         startY = e.clientY;

//         const onMouseMove = (e) => {
//             newX = startX - e.clientX;
//             newY = startY - e.clientY;
//             startX = e.clientX;
//             startY = e.clientY;
//             card.style.top = (card.offsetTop - newY) + 'px';
//             card.style.left = (card.offsetLeft - newX) + 'px';
//         };

//         const onMouseUp = () => {
//             document.removeEventListener('mousemove', onMouseMove);
//             document.removeEventListener('mouseup', onMouseUp);
//         };

//         document.addEventListener('mousemove', onMouseMove);
//         document.addEventListener('mouseup', onMouseUp);
//     });
// }






document.addEventListener("DOMContentLoaded", () => {
    let cardCount = 0;
    const container = document.getElementById('container');
    const addCardBtn = document.getElementById('addCardBtn');
    const noteList = document.getElementById('noteList');
  
    const colors = [
      '#ccff00', '#bb0dfa', '#0095ff', '#ff00ea',
      '#ffa500', '#00ffaa', '#ff5555', '#aaff00'
    ];
  
    addCardBtn.addEventListener("click", () => {
        const userText = prompt("Enter your card text:");
        if (!userText) return;
      
        const cardColor = colors[cardCount % colors.length];
      
        // 🟨 Create card
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.backgroundColor = cardColor;
        card.style.boxShadow = `10px 10px 40px ${cardColor}`;
        card.style.top = `${100 + cardCount * 20}px`;
        card.style.left = `${180 + cardCount * 30}px`;
      
        const para = document.createElement("p");
        para.innerText = userText;
        card.appendChild(para);
      
        const closeBtn = document.createElement("button");
        closeBtn.innerText = "✕";
        closeBtn.classList.add("close-btn");
      
        // 🟨 Create sidebar list item
        const listItem = document.createElement("li");
        listItem.classList.add("note-item");
      
        const input = document.createElement("input");
        input.type = "text";
        input.value = userText;
        input.classList.add("note-input");
      
        const saveBtn = document.createElement("button");
        saveBtn.innerText = "💾";
        saveBtn.classList.add("note-save");
        saveBtn.style.color = cardColor;
      
        const deleteNoteBtn = document.createElement("button");
        deleteNoteBtn.classList.add("note-delete");
        deleteNoteBtn.innerText = "✕";
        deleteNoteBtn.style.color = cardColor;
      
        const deleteBoth = () => {
          container.removeChild(card);
          noteList.removeChild(listItem);
        };
      
        const saveText = () => {
          para.innerText = input.value; // 🟢 Update card text
        };
      
        closeBtn.addEventListener("click", deleteBoth);
        deleteNoteBtn.addEventListener("click", deleteBoth);
        saveBtn.addEventListener("click", saveText);
      
        listItem.appendChild(input);
        listItem.appendChild(saveBtn);
        listItem.appendChild(deleteNoteBtn);
        noteList.appendChild(listItem);
      
        card.appendChild(closeBtn);
        container.appendChild(card);
        cardCount++;
      
        makeDraggable(card);
      });
      
      
  
    function makeDraggable(card) {
      let offsetX = 0, offsetY = 0, isDragging = false;
  
      card.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - card.offsetLeft;
        offsetY = e.clientY - card.offsetTop;
  
        const onMouseMove = (e) => {
          if (!isDragging) return;
          card.style.left = `${e.clientX - offsetX}px`;
          card.style.top = `${e.clientY - offsetY}px`;
        };
  
        const onMouseUp = () => {
          isDragging = false;
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        };
  
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      });
    }
  });
  