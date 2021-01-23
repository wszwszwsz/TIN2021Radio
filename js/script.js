var audio = document.getElementById("myAudio"); 

//Trzeba bylo zrestartowac current time i src aby wyczyscic pamiec i nie odtwarzac wczesniej zaladowanego etapu a byc na biezaco 
function playAudio() {
  audio.src = 'http://4stream.pl:18266/;';    
  audio.play(); 
} 

function pauseAudio() { 
  audio.pause();
  audio.currentTime = 0;
  audio.src = '';
}     

let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(e) {
audio.volume = e.currentTarget.value / 100;
})