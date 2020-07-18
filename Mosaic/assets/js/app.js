  for (let i = 1; i <= 1500; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      document.querySelector('.container').appendChild(box);
  }

  const randColorBlock = document.querySelectorAll('.box');

  function addColors() {
      randColorBlock.forEach(e=>{
        e.style.backgroundColor = randomColor();
      })
}

  function randomColor() {
      var chars = "1234567890abcdef";
      var colorLength = 6;
      let color = "";
      for (let i = 1; i <= colorLength; i++) {
          let randomColor = Math.floor(Math.random() * chars.length);
          color += chars.substring(randomColor, randomColor + 1)
      }

      return "#"+color
  }
addColors();