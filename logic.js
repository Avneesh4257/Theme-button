let s=0
var r = document.querySelector(':root');
document.getElementById("but").className="buttonTheme"


function light(sw) {
  
  if (sw%2 == 0) {
    document.getElementById("para").className="slideDay"
    r.style.setProperty('--color1','skyblue');
    r.style.setProperty('--color2','#357bb3');
    
    
  } else if(sw%2 == 1) {
    document.getElementById("para").className="slideNight"
    r.style.setProperty('--color1','grey');
    r.style.setProperty('--color2','rgb(20, 19, 39)');
  }
}

