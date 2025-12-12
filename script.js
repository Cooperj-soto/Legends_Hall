// use variables to make your code shorter

// declare your functions
function changeVideostevie() {
  document.getElementById("player").src =
    "https://www.youtube.com/embed/KC5H9P4F5Uk?si=RLRGi3_VINr1TpO2&enablejsapi=1";
  document.getElementById("Stevie").play();
  document.getElementById("Albert").pause();
  document.getElementById("FreddieK").pause();
  document.getElementById("AC").pause();
  //seperate because these are the text and image cycle classes just looks nicer
  document.getElementById("stevie-text").classList.remove("hiding");
  document.getElementById("srv").classList.add("hiding");
  document.getElementById("albert-text").classList.add("hiding");
  document.getElementById("lucy").classList.remove("hiding");
  document.getElementById("freddie-text").classList.add("hiding");
  document.getElementById("freddie").classList.remove("hiding");
  document.getElementById("collins-text").classList.add("hiding");
  document.getElementById("collins").classList.remove("hiding");
}
function changeVideofreddie() {
  document.getElementById("player").src =
    "https://www.youtube.com/embed/pSAz_lVLIJo?si=S2FicXO87ah_XFDC&enablejsapi=1";
  document.getElementById("FreddieK").play();
  document.getElementById("Albert").pause();
  document.getElementById("AC").pause();
  document.getElementById("Stevie").pause();
  //seperate because these are the text and image cycle classes just looks nicer
  document.getElementById("freddie-text").classList.remove("hiding");
  document.getElementById("freddie").classList.add("hiding");
  document.getElementById("albert-text").classList.add("hiding");
  document.getElementById("lucy").classList.remove("hiding");
  document.getElementById("stevie-text").classList.add("hiding");
  document.getElementById("srv").classList.remove("hiding");
  document.getElementById("collins-text").classList.add("hiding");
  document.getElementById("collins").classList.remove("hiding");
}
function changeVideoalbert() {
  document.getElementById("player").src =
    "https://www.youtube.com/embed/WydRZHhVb00?si=Wafb7hEmzvanDqHt&enablejsapi=1";
  document.getElementById("Albert").play();
  document.getElementById("FreddieK").pause();
  document.getElementById("AC").pause();
  document.getElementById("Stevie").pause();
  //seperate because these are the text and image cycle classes just looks nicer
  document.getElementById("albert-text").classList.remove("hiding");
  document.getElementById("lucy").classList.add("hiding");
  document.getElementById("collins-text").classList.add("hiding");
  document.getElementById("collins").classList.remove("hiding");
  document.getElementById("stevie-text").classList.add("hiding");
  document.getElementById("srv").classList.remove("hiding");
  document.getElementById("freddie-text").classList.add("hiding");
  document.getElementById("freddie").classList.remove("hiding");
}
function changeVideocollins() {
  document.getElementById("player").src =
    "https://www.youtube.com/embed/f9uDeTLDzfs?si=3VDEYlVM1yj_LKYm&enablejsapi=1";
  document.getElementById("AC").play();
  document.getElementById("Albert").pause();
  document.getElementById("FreddieK").pause();
  document.getElementById("Stevie").pause();
  //seperate because these are the text and image cycle classes just looks nicer
  document.getElementById("collins-text").classList.remove("hiding");
  document.getElementById("collins").classList.add("hiding");
  document.getElementById("albert-text").classList.add("hiding");
  document.getElementById("lucy").classList.remove("hiding");
  document.getElementById("stevie-text").classList.add("hiding");
  document.getElementById("srv").classList.remove("hiding");
  document.getElementById("freddie-text").classList.add("hiding");
  document.getElementById("freddie").classList.remove("hiding");
}
function reset() {
  document.getElementById("collins-text").classList.add("hiding");
  document.getElementById("collins").classList.remove("hiding");
  document.getElementById("albert-text").classList.add("hiding");
  document.getElementById("lucy").classList.remove("hiding");
  document.getElementById("stevie-text").classList.add("hiding");
  document.getElementById("srv").classList.remove("hiding");
  document.getElementById("freddie-text").classList.add("hiding");
  document.getElementById("freddie").classList.remove("hiding");
  document.getElementById("player").src =
    "https://www.youtube.com/embed/pSAz_lVLIJo?si=S2FicXO87ah_XFDC&enablejsapi=1";
}
// Create a variable to show you how to count up
let vidChanges = 0;

// Load YouTube API
let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);

let player;

// Attach API to existing iframe
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    events: { onReady: onPlayerReady },
  });
}

// Autoplay the default video
function onPlayerReady(event) {
  event.target.playVideo();
}

// Volume controls
function volumeUp() {
  let current = player.getVolume();
  let newVol = Math.min(current + 10, 100);
  player.setVolume(newVol);
  console.log("Volume:", newVol);
}
function volumeDown() {
  let current = player.getVolume();
  let newVol = Math.max(current - 10, 0);
  player.setVolume(newVol);
  console.log("Volume:", newVol);
}

// Load new videos via API - note cueVideo does NOT play automatically while loadVideo DOES play automatically
function loadVid1() {
  player.cueVideoById("M7lc1UVf-VE"); // YouTube API demo video
  //player.loadVideoById("M7lc1UVf-VE");
  vidChanges = vidChanges + 1;
  console.log(vidChanges);
}

function loadVid2() {
  player.cueVideoById("dQw4w9WgXcQ");
  //player.loadVideoById("dQw4w9WgXcQ");
  vidChanges = vidChanges - 1;
  console.log(vidChanges);
}
