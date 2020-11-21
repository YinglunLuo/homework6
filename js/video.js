var video;
var mutebol = false;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log('video loaded');
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector('#volume').innerHTML = video.volume*100 + '%';
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log('Pause Video');
});

document.querySelector("#slower").addEventListener("click",function(){
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click",function(){
	video.playbackRate /= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click",function(){
	video.currentTime += 5;
	video.play;
	video.loop = true;
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click",function(){
	if (mutebol == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "unmute";
		mutebol = true;
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = "mute";
		mutebol = false;
	}
});

document.querySelector("#volumeSlider").addEventListener("click",function(){
	video.volume = this.value/100;
	document.querySelector('#volume').innerHTML = this.value + '%';
	console.log(video.volume)
});

document.querySelector("#old").addEventListener("click",function(){
	video.className='oldTime';
});

document.querySelector("#original").addEventListener("click",function(){
	video.className='';
});
