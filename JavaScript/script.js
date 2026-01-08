document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".title");
    const text = title.dataset.text;
    let index = 0;
  
    const type = () => {
      if (index < text.length) {
        title.textContent += text.charAt(index);
        index++;
        setTimeout(type,250); // typing speed
      }
    };
  
    // ⏱ delay before typing starts (3000ms = 3s)
    setTimeout(type, 1500);
  });
  