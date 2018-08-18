M.AutoInit();

let userHasScrolled = false;
/**
 * @fires onPageLoad
 * 
 * No arguments
 * Colors the nav button of the current page
 */
const colorNavButton = () => {
  let buttonToChange = '';
  switch(window.location.href.substr(window.location.href.length - 10)) {
    case 'index.html':
      buttonToChange = document.getElementsByClassName('nav-home');
      break;
    case 'about.html':
      buttonToChange = document.getElementsByClassName('nav-about');
      break;
    case 'jects.html':
      buttonToChange = document.getElementsByClassName('nav-projects');
      break;
    case 'links.html':
      buttonToChange = document.getElementsByClassName('nav-links');
      break;
  }
  Array.from(buttonToChange).forEach( (button) => {
    button.classList.remove('teal', 'lighten-1');
    button.classList.add('teal', 'lighten-3');
  })
}

/**
 * @fires onPageLoad
 * 
 * Randomizes the colors of any element with color random-color
 */
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
  const btntop = document.getElementById('btn-top');
  btntop.classList.remove('show');
  btntop.classList.add('hide');
  window.setTimeout(() => {userHasScrolled = false}, 500);
}

// Perform onload functions
window.onload = () => {
  colorNavButton();
  randomizeColors();
}

window.addEventListener('scroll', () => {
  if (!userHasScrolled) {
    userHasScrolled = true;
    const btntop = document.getElementById('btn-top');
    btntop.classList.remove('hide');
    btntop.classList.add('show', 'pulse');
    window.setTimeout(() => {btntop.classList.remove('pulse')},3000);
  }
})

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});