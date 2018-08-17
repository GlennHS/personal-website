M.AutoInit();

const colorNavButton = () => {
  let buttonToChange = '';
  switch(window.location.href.substr(window.location.href.length - 10)) {
    case 'index.html':
      buttonToChange = document.getElementById('nav-home');
      break;
    case 'about.html':
      buttonToChange = document.getElementById('nav-about');
      break;
    case 'jects.html':
      buttonToChange = document.getElementById('nav-projects');
      break;
    case 'links.html':
      buttonToChange = document.getElementById('nav-links');
      break;
  }
  buttonToChange.classList.add('cyan', 'lighten-2');
  buttonToChange.classList.remove('blue', 'lighten-1');
}

const randomizeColors = () => {
  const elementArray = Array.from(document.getElementsByClassName('random-color'));
  elementArray.forEach( item => {
    // Make a blank array to store RGB
    let newColor = [];
    // Generate Red Green and Blue values
    for(i=0;i<3;i++) {
      newColor.push(Math.floor(Math.random() * 172))
    }
    // Stringify the array and apply the new color to the object
    // Colors always look like "rgb(r, g, b)"
    const colorString = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`
    item.style.color = colorString;
  })
}

// Cool little go to top function
const goToTop = () => {
  scroll(0,0);
}

// Perform onload functions
window.onload = () => {
  colorNavButton();
  randomizeColors();
}
