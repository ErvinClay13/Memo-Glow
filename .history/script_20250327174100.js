// let newX = 0, newY = 0, startX = 0, startY = 0;
// let newX2 = 0, newY2 = 0, startX2 = 0, startY2 = 0;
// let newX3 = 0, newY3 = 0, startX3 = 0, startY3 = 0;
// let newX4 = 0, newY4 = 0, startX4 = 0, startY4 = 0;


// const card = document.getElementById('card');
// const card2 = document.getElementById('card2');
// const card3 = document.getElementById('card3');
// const card4 = document.getElementById('card4');


// card.addEventListener('mousedown', mouseDown)
// card2.addEventListener('mousedown', mouseDown2)
// card3.addEventListener('mousedown', mouseDown3)
// card4.addEventListener('mousedown', mouseDown4)

// const cardBtn = document.getElementById('cardBtn')
// const cardBtn2 = document.getElementById('cardBtn2')
// const cardBtn3 = document.getElementById('cardBtn3')



// const para = document.createElement("p");

// const textNode = document.createTextNode("Hello World");
// para.appendChild(textNode);
// card.appendChild(para)

// const para2 = document.createElement("p");
// const textNode2 = document.createTextNode("Hello World");
// para2.appendChild(textNode2);
// card2.appendChild(para2)

// const para3 = document.createElement("p");
// const textNode3 = document.createTextNode("Hello World");
// para3.appendChild(textNode3);
// card3.appendChild(para3)

// const para4 = document.createElement("p");
// const textNode4 = document.createTextNode("Hello World");
// para4.appendChild(textNode4);
// card4.appendChild(para4)

// cardBtn.addEventListener("click", () => {
//     card2.style.display = "block"
//     card2.style.display = "flex"
//     cardBtn.style.display = "none"
//     cardBtn2.style.display = "block"
//     userText();
    
// })

// cardBtn2.addEventListener("click", () => {
//     card3.style.display = "block"
//     card3.style.display = "flex"
//     cardBtn2.style.display = "none"
//     cardBtn3.style.display = "block"
    
// })

// cardBtn3.addEventListener("click", () => {
//     card4.style.display = "block"
//     card4.style.display = "flex"
//     cardBtn3.style.display = "none"
    
    
// })

   

// // card2.addEventListener("click", () => {   
// //     card.style.display = "none"   
// // })


// function mouseDown(e) {
//     startX = e.clientX
//     startY = e.clientY

//     document.addEventListener('mousemove', mouseMove)
//     document.addEventListener('mouseup', mouseUp)
// }

// function mouseMove(e) {
//     newX = startX - e.clientX
//     newY = startY - e.clientY

//     startX = e.clientX
//     startY = e.clientY

//     card.style.top = (card.offsetTop - newY) + 'px'
//     card.style.left = (card.offsetLeft - newX) + 'px'
// }


// function mouseUp(e) {
//     document.removeEventListener('mousemove', mouseMove)
    
// }




// function mouseDown2(e) {
//     startX2 = e.clientX
//     startY2 = e.clientY

//     document.addEventListener('mousemove', mouseMove2)
//     document.addEventListener('mouseup', mouseUp2)
// }


// function mouseMove2(e) {
//     newX2 = startX2 - e.clientX
//     newY2 = startY2 - e.clientY

//     startX2 = e.clientX
//     startY2 = e.clientY


//     card2.style.top = (card2.offsetTop - newY2) + 'px'
//     card2.style.left = (card2.offsetLeft - newX2) + 'px'
// }

// function mouseUp2(e) {
//     document.removeEventListener('mousemove', mouseMove2)  
// }




// function mouseDown3(e) {
//     startX3 = e.clientX
//     startY3 = e.clientY

//     document.addEventListener('mousemove', mouseMove3)
//     document.addEventListener('mouseup', mouseUp3)
// }


// function mouseMove3(e) {
//     newX3 = startX3 - e.clientX
//     newY3 = startY3 - e.clientY

//     startX3 = e.clientX
//     startY3 = e.clientY


//     card3.style.top = (card3.offsetTop - newY3) + 'px'
//     card3.style.left = (card3.offsetLeft - newX3) + 'px'
// }

// function mouseUp3(e) {
//     document.removeEventListener('mousemove', mouseMove3)  
// }





// function mouseDown4(e) {
//     startX4 = e.clientX
//     startY4 = e.clientY

//     document.addEventListener('mousemove', mouseMove4)
//     document.addEventListener('mouseup', mouseUp4)
// }


// function mouseMove4(e) {
//     newX4 = startX4 - e.clientX
//     newY4 = startY4 - e.clientY

//     startX4 = e.clientX
//     startY4 = e.clientY


//     card4.style.top = (card4.offsetTop - newY4) + 'px'
//     card4.style.left = (card4.offsetLeft - newX4) + 'px'
// }

// function mouseUp4(e) {
//     document.removeEventListener('mousemove', mouseMove4)  
// }