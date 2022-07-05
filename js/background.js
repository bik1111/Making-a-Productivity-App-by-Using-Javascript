
function addRgb() {
    const colorVal1 = Math.random() * 255;
    const colorVal2 = Math.random() * 255;
    const colorVal3 = Math.random() * 255;
    return `rgb(${colorVal1}, ${colorVal2}, ${colorVal3})`;
  }
  
  const main = document.querySelector("main");
  main.style.background = `linear-gradient(46deg, ${addRgb()}, ${addRgb()}, ${addRgb()})`;
  main.style.backgroundSize = "600%, 600%";