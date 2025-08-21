document.addEventListener("click", function(e) {
  const clickedElement = e.target;
  
  // 如果点击的是 body 或空白 div，阻止默认行为
  if (
    clickedElement === document.body ||
    clickedElement.classList.contains("empty-area")
  ) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
});