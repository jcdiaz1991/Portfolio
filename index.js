/*const webImages = [{ sample:"http://res.cloudinary.com/jcdiaz1991/image/upload/v1530201612/RandomQuotes_gfwe2v.png",
bg:"http://res.cloudinary.com/jcdiaz1991/image/upload/e_brightness:-26/v1530317401/blue_fipkuz.png"}, {sample:"http://res.cloudinary.com/jcdiaz1991/image/upload/v1530201611/WeatherApp_t237di.png",
bg:"https://res.cloudinary.com/jcdiaz1991/image/upload/v1530318271/dblue_mmnb9h.png"}, {sample:"http://res.cloudinary.com/jcdiaz1991/image/upload/v1530201608/WikiViewer1_cupcpq.png",
bg:"https://res.cloudinary.com/jcdiaz1991/image/upload/v1530319801/third_vldfuu.png"}, {sample:"http://res.cloudinary.com/jcdiaz1991/image/upload/v1530201607/TwitchStreamers_a1hjfk.png",
bg:"https://res.cloudinary.com/jcdiaz1991/image/upload/v1530319973/fourth_gxvtsr.png"}, {sample:"http://res.cloudinary.com/jcdiaz1991/image/upload/v1508608925/Screen_Shot_2017-10-21_at_11.01.36_AM_lf4epv.png",
bg:"https://res.cloudinary.com/jcdiaz1991/image/upload/v1530320224/orange_g6no2d.png"}, {sample:"http://res.cloudinary.com/jcdiaz1991/image/upload/v1516469309/Screen_Shot_2018-01-20_at_9.24.02_AM_iet5xj.png",
bg:"http://res.cloudinary.com/jcdiaz1991/image/upload/v1530320358/light_aakyqb.png"
}]*/
window.onload = windowWidth();

//switches the projects to next and before hiding divs and removing and adding classes so the transitions look smoother
var current=0;
function nextProject(slide){
  let past=current;
  let arrOfDivs = ["rock", "quotes", "weather", "wiki", "twitch", "glasses"];
  arrOfDivs.forEach(value=>document.getElementById(`${value}`).classList.remove('animated', 'slideInLeft', 'slideInRight','slideOutRight','slideOutLeft', 'shake'));
  if (slide && current == 0 || slide == false && current == arrOfDivs.length-1){
    document.getElementById(`${arrOfDivs[current]}`).classList.add('animated','shake');
  }
  else{
  if (slide){
    current -= 1;
    document.getElementById(`${arrOfDivs[current]}`).classList.add('animated','slideInLeft');
  }
  else{
    current+=1;
    document.getElementById(`${arrOfDivs[current]}`).classList.add('animated','slideInRight');
  }
  document.getElementById(`${arrOfDivs[past]}`).classList.add('hide');
  document.getElementById(`${arrOfDivs[current]}`).classList.remove('hide');
}}

//start of touch gesture movement
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const gestureZone = document.getElementById('projects');

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false);

function handleGesture() {
    if (touchendX < touchstartX) {
        console.log('Swiped left');
        nextProject(0);
    }
    if (touchendX > touchstartX) {
        console.log('Swiped right');
        nextProject(1);
    }
}

//window resizing changes how progects are displayed

function windowWidth() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    var caption = document.querySelectorAll('.caption');
    var imagess = document.querySelectorAll('.des');
    if (w<576){
      imagess.forEach(function(value){value.style.display=""});
      caption.forEach(function(value){value.style.display="none"});

      //caption.outerHTML="";
    }
    else if (w>575){
      imagess.forEach(function(value){value.style.display="none"});
      caption.forEach(function(value){value.style.display=""});

    }
    }
    window.onscroll = function() {stickNav()};

    var header = document.getElementById("myNav");
    var sticky = header.offsetTop;

    function stickNav() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        //document.getElementById('content');
      } else {
        header.classList.remove("sticky");
      }
    }
