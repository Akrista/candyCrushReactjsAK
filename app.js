document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const width = 8;
  const squares = [];
  const candyColors = ["red", "yellow", "green", "blue", "orange", "purple"];

  // Create Board
  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.setAttribute("draggable", true);
      square.setAttribute("id", i);
      let randomColor = Math.floor(Math.random() * candyColors.length);
      square.style.backgroundColor = candyColors[randomColor];
      grid.appendChild(square);
      squares.push(square);
    }
  }
  createBoard();

  //Drag the candies

  let colorBeingDragged;

  square.forEach((square) => square.addEventListener("dragstart", dragStart));
  square.forEach((square) => square.addEventListener("dragend", dragEnd));
  square.forEach((square) => square.addEventListener("dragover", dragOver));
  square.forEach((square) => square.addEventListener("dragenter", dragEnter));
  square.forEach((square) => square.addEventListener("dragleave", dragLeave));
  square.forEach((square) => square.addEventListener("drop", dragDrop));

  function dragStart() {
    colorBeingDragged = this.style.backgroundColor;
  }
  function dragEnd() {}
  function dragOver() {}
  function dragEnter() {}
  function dragLeave() {}
  function dragDrop() {}
});
