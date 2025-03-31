// Wait for the DOM to fully load before running any script
document.addEventListener("DOMContentLoaded", () => {
  let cardCount = 0; // Tracks number of cards created
  let currentFont = "'Segoe UI', sans-serif"; // Default font for notes

  // DOM references
  const container = document.getElementById('container');
  const addCardBtn = document.getElementById('addCardBtn');
  const noteList = document.getElementById('noteList');
  const fontSelector = document.getElementById('fontSelector');

  // Array of background colors to cycle through for cards
  const colors = [
    '#ccff00', '#bb0dfa', '#0095ff', '#ff00ea',
    '#ffa500', '#00ffaa', '#ff5555', '#aaff00'
  ];

  // Change font style when user selects a new one
  fontSelector.addEventListener("change", () => {
    currentFont = fontSelector.value;
  });

  // When "New Card" button is clicked
  addCardBtn.addEventListener("click", () => {
    const userText = prompt("Enter your card text:");
    if (!userText) return; // Exit if user cancels or inputs nothing

    const cardColor = colors[cardCount % colors.length]; // Pick color based on count

    // Create card element
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = cardColor;
    card.style.boxShadow = `10px 10px 40px ${cardColor}`;
    card.style.top = `${100 + cardCount * 20}px`;
    card.style.left = `${180 + cardCount * 30}px`;
    card.style.fontFamily = currentFont;

    // Add user-entered text to the card
    const para = document.createElement("p");
    para.innerText = userText;
    para.style.fontFamily = currentFont;
    card.appendChild(para);

    // Add timestamp showing creation date and time
    const dateDiv = document.createElement("div");
    const now = new Date();
    dateDiv.innerText = now.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short"
    });
    dateDiv.classList.add("timestamp");
    card.appendChild(dateDiv);

    // Create close (delete) button for card
    const closeBtn = document.createElement("button");
    closeBtn.innerText = "✕";
    closeBtn.classList.add("close-btn");

    // Create corresponding list item in the sidebar
    const listItem = document.createElement("li");
    listItem.classList.add("note-item");

    // Input for editing note text from the sidebar
    const input = document.createElement("input");
    input.type = "text";
    input.value = userText;
    input.classList.add("note-input");
    input.style.fontFamily = currentFont;

    // Save button to update card text from input
    const saveBtn = document.createElement("button");
    saveBtn.innerText = "💾";
    saveBtn.classList.add("note-save");
    saveBtn.style.color = cardColor;

    // Delete button for the sidebar note
    const deleteNoteBtn = document.createElement("button");
    deleteNoteBtn.classList.add("note-delete");
    deleteNoteBtn.innerText = "✕";
    deleteNoteBtn.style.color = cardColor;

    // Deletes both the card and its corresponding sidebar note
    const deleteBoth = () => {
      container.removeChild(card);
      noteList.removeChild(listItem);
    };

    // Updates card content when save is clicked
    const saveText = () => {
      para.innerText = input.value;
    };

    // Event listeners for buttons
    closeBtn.addEventListener("click", deleteBoth);
    deleteNoteBtn.addEventListener("click", deleteBoth);
    saveBtn.addEventListener("click", saveText);

    // Add visual pulse effect on hover
    listItem.addEventListener("mouseenter", () => {
      card.classList.add("pulse");
    });
    listItem.addEventListener("mouseleave", () => {
      card.classList.remove("pulse");
    });

    // Highlight sidebar input when its card is clicked
    card.addEventListener("click", () => {
      document.querySelectorAll(".note-input").forEach(input => {
        input.style.backgroundColor = "";
      });
      input.style.backgroundColor = "#ccc";
    });

    // Cross-reference between card and sidebar input
    card.sidebarInput = input;
    input.relatedCard = card;

    // Append input and buttons to sidebar list item
    listItem.appendChild(input);
    listItem.appendChild(saveBtn);
    listItem.appendChild(deleteNoteBtn);
    noteList.appendChild(listItem);

    // Append elements to card and container
    card.appendChild(closeBtn);
    container.appendChild(card);
    cardCount++;

    // Enable dragging the card around the screen
    makeDraggable(card);
  });

  // Function to make cards draggable by mouse
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
