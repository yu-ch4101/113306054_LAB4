const soundMap = {
	'w': 'sounds/crash.mp3',
    'a': 'sounds/kick-bass.mp3',
    's': 'sounds/snare.mp3',
    'd': 'sounds/tom-1.mp3',
    'j': 'sounds/tom-2.mp3',
    'k': 'sounds/tom-3.mp3',
    'l': 'sounds/tom-4.mp3'
};

function playSound(key){
	const soundFile = soundMap[key];
	if(soundFile){
		const audio = new Audio(soundFile);
		audio.play();
	}
}

function animateButton(key){
	const button = document.getElementById(key);
	if(button){
		button.classList.add("pressed");
		setTimeout(() => button.classList.remove("pressed"), 100);
	}
}

document.querySelectorAll(".drum").forEach(button =>{
	button.addEventListener("click", function(){
		const key = this.id;
		playSound(key);
		animateButton(key);
	});
});

document.addEventListener("keydown", event =>{
	const key = event.key.toLowerCase();
	playSound(key);
	animateButton(key);
});
