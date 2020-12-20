//This is taken from class, I was more focusing on using this in conjuction with the lyrics changing
let audio = new Audio(`audioFiles/yankee-doodle.mp3`)
let lyrics = document.getElementById(`lyricsA`)
let playOrPauseBtn = document.querySelector(`#play`)
let isMusicPlaying = false

let toggleMusic = function() {
	if (isMusicPlaying === false) {
		audio.play()
		isMusicPlaying = true
		play.innerHTML = "PAUSE" //I changed the text to say pause when song is paused
	} else {
		audio.pause()
		isMusicPlaying = false
		play.innerHTML = "PLAY SONG"
	}	
}

//Ok I'm gonna try to make the functions better/more efficient

function lineOne () {
	lyricsA.style.backgroundColor = "white"
	lyricsB.style.backgroundColor = "transparent";
	lyricsC.style.backgroundColor = "transparent";
	lyricsD.style.backgroundColor = "transparent";
}

function lineTwo () {
	lyricsA.style.backgroundColor = "transparent"
	lyricsB.style.backgroundColor = "white";
	lyricsC.style.backgroundColor = "transparent";
	lyricsD.style.backgroundColor = "transparent";
}

function lineThree () {
	lyricsA.style.backgroundColor = "transparent"
	lyricsB.style.backgroundColor = "transparent";
	lyricsC.style.backgroundColor = "white";
	lyricsD.style.backgroundColor = "transparent";
}

function lineFour () {
	lyricsA.style.backgroundColor = "transparent"
	lyricsB.style.backgroundColor = "transparent";
	lyricsC.style.backgroundColor = "transparent";
	lyricsD.style.backgroundColor = "white";
}

//Yooooo, this seems like it should work. And it's way better.

//Verse 1
function timeout(){
	setTimeout(changeLyrics, 21000);
	function changeLyrics (){
		lineOne();
		lyricsA.innerHTML = "Yankee Doodle went to town";
		lyricsB.innerHTML = "A-riding on a pony";
		lyricsC.innerHTML = "He stuck a feather in his hat";
		lyricsD.innerHTML = "And called it macaroni";
	setTimeout(changeLyrics, 2200);
	function changeLyrics (){
		lineTwo();
		lyricsA.innerHTML = "Yankee Doodle went to town";
		lyricsB.innerHTML = "A-riding on a pony";
		lyricsC.innerHTML = "He stuck a feather in his hat";
		lyricsD.innerHTML = "And called it macaroni";
	setTimeout(changeLyrics, 2200);
	function changeLyrics (){
		lineThree();
		lyricsA.innerHTML = "Yankee Doodle went to town";
		lyricsB.innerHTML = "A-riding on a pony";
		lyricsC.innerHTML = "He stuck a feather in his hat";
		lyricsD.innerHTML = "And called it macaroni";
	setTimeout(changeLyrics, 2200);
	function changeLyrics (){
		lineFour();
		lyricsA.innerHTML = "Yankee Doodle went to town";		
		lyricsB.innerHTML = "A-riding on a pony";
		lyricsC.innerHTML = "He stuck a feather in his hat";
		lyricsD.innerHTML = "And called it macaroni";
//Chorus
	setTimeout(changeLyrics, 3000);
	function changeLyrics (){
		lineOne();
		lyricsA.innerHTML = "Yankee Doodle, keep it up";
		lyricsB.innerHTML = "Yankee Doodle dandy";
		lyricsC.innerHTML = "Mind the music and the step";
		lyricsD.innerHTML = "And with the girls be handy!";
	setTimeout(changeLyrics, 2000);
	function changeLyrics (){
		lineTwo();
		lyricsA.innerHTML = "Yankee Doodle, keep it up";
		lyricsB.innerHTML = "Yankee Doodle dandy";
		lyricsC.innerHTML = "Mind the music and the step";
		lyricsD.innerHTML = "And with the girls be handy!";
	setTimeout(changeLyrics, 2000);
	function changeLyrics (){
		lineThree();
		lyricsA.innerHTML = "Yankee Doodle, keep it up";
		lyricsB.innerHTML = "Yankee Doodle dandy";
		lyricsC.innerHTML = "Mind the music and the step";
		lyricsD.innerHTML = "And with the girls be handy!";
	setTimeout(changeLyrics, 2000);
	function changeLyrics (){
		lineFour();
		lyricsA.innerHTML = "Yankee Doodle, keep it up";		
		lyricsB.innerHTML = "Yankee Doodle dandy";
		lyricsC.innerHTML = "Mind the music and the step";
		lyricsD.innerHTML = "And with the girls be handy!";
//Verse 2
	setTimeout(changeLyrics, 15000);
	function changeLyrics (){
		lineOne();
		lyricsA.innerHTML = "Father and I went down to camp";
		lyricsB.innerHTML = "Along with Captain Gooding";
		lyricsC.innerHTML = "And there we saw the men and boys";
		lyricsD.innerHTML = "As thick as hasty pudding";
	setTimeout(changeLyrics, 2000);
	function changeLyrics (){
		lineTwo();
		lyricsA.innerHTML = "Father and I went down to camp";
		lyricsB.innerHTML = "Along with Captain Gooding";
		lyricsC.innerHTML = "And there we saw the men and boys";
		lyricsD.innerHTML = "As thick as hasty pudding";
	setTimeout(changeLyrics, 2100);
	function changeLyrics (){
		lineThree();
		lyricsA.innerHTML = "Father and I went down to camp";
		lyricsB.innerHTML = "Along with Captain Gooding";
		lyricsC.innerHTML = "And there we saw the men and boys";
		lyricsD.innerHTML = "As thick as hasty pudding";
	setTimeout(changeLyrics, 2000);
	function changeLyrics (){
		lineFour();
		lyricsA.innerHTML = "Father and I went down to camp";		
		lyricsB.innerHTML = "Along with Captain Gooding";
		lyricsC.innerHTML = "And there we saw the men and boys";
		lyricsD.innerHTML = "As thick as hasty pudding";
//Chorus 2
	setTimeout(changeLyrics, 2800);
	function changeLyrics (){
		lineOne();
		lyricsA.innerHTML = "Yankee Doodle, keep it up";
		lyricsB.innerHTML = "Yankee Doodle dandy";
		lyricsC.innerHTML = "Mind the music and the step";
		lyricsD.innerHTML = "And with the girls be handy!";
	setTimeout(changeLyrics, 2000);
	function changeLyrics (){
		lineTwo();
		lyricsA.innerHTML = "Yankee Doodle, keep it up";
		lyricsB.innerHTML = "Yankee Doodle dandy";
		lyricsC.innerHTML = "Mind the music and the step";
		lyricsD.innerHTML = "And with the girls be handy!";
	setTimeout(changeLyrics, 2000);
	function changeLyrics (){
		lineThree();
		lyricsA.innerHTML = "Yankee Doodle, keep it up";
		lyricsB.innerHTML = "Yankee Doodle dandy";
		lyricsC.innerHTML = "Mind the music and the step";
		lyricsD.innerHTML = "And with the girls be handy!";
	setTimeout(changeLyrics, 2000);
	function changeLyrics (){
		lineFour();
		lyricsA.innerHTML = "Yankee Doodle, keep it up";		
		lyricsB.innerHTML = "Yankee Doodle dandy";
		lyricsC.innerHTML = "Mind the music and the step";
		lyricsD.innerHTML = "And with the girls be handy!";
//Verse 3
	setTimeout(changeLyrics, 16500);
	function changeLyrics (){
		lineOne();
		lyricsA.innerHTML = "And there was Captain Washington";
		lyricsB.innerHTML = "And gentle folks about him";
		lyricsC.innerHTML = "They say he's grown so tarnal proud";
		lyricsD.innerHTML = "He will not ride without them";
	setTimeout(changeLyrics, 2000);
	function changeLyrics (){
		lineTwo();
		lyricsA.innerHTML = "And there was Captain Washington";
		lyricsB.innerHTML = "And gentle folks about him";
		lyricsC.innerHTML = "They say he's grown so tarnal proud";
		lyricsD.innerHTML = "He will not ride without them";
	setTimeout(changeLyrics, 2100);
	function changeLyrics (){
		lineThree();
		lyricsA.innerHTML = "And there was Captain Washington";
		lyricsB.innerHTML = "And gentle folks about him";
		lyricsC.innerHTML = "They say he's grown so tarnal proud";
		lyricsD.innerHTML = "He will not ride without them";
	setTimeout(changeLyrics, 2000);
	function changeLyrics (){
		lineFour();
		lyricsA.innerHTML = "And there was Captain Washington";		
		lyricsB.innerHTML = "And gentle folks about him";
		lyricsC.innerHTML = "They say he's grown so tarnal proud";
		lyricsD.innerHTML = "He will not ride without them";
//Chorus 3
	setTimeout(changeLyrics, 2800);
	function changeLyrics (){
		lineOne();
		lyricsA.innerHTML = "Yankee Doodle, keep it up";
		lyricsB.innerHTML = "Yankee Doodle dandy";
		lyricsC.innerHTML = "Mind the music and the step";
		lyricsD.innerHTML = "And with the girls be handy!";
	setTimeout(changeLyrics, 2000);
	function changeLyrics (){
		lineTwo();
		lyricsA.innerHTML = "Yankee Doodle, keep it up";
		lyricsB.innerHTML = "Yankee Doodle dandy";
		lyricsC.innerHTML = "Mind the music and the step";
		lyricsD.innerHTML = "And with the girls be handy!";
	setTimeout(changeLyrics, 2000);
	function changeLyrics (){
		lineThree();
		lyricsA.innerHTML = "Yankee Doodle, keep it up";
		lyricsB.innerHTML = "Yankee Doodle dandy";
		lyricsC.innerHTML = "Mind the music and the step";
		lyricsD.innerHTML = "And with the girls be handy!";
	setTimeout(changeLyrics, 2000);
	function changeLyrics (){
		lineFour();
		lyricsA.innerHTML = "Yankee Doodle, keep it up";		
		lyricsB.innerHTML = "Yankee Doodle dandy";
		lyricsC.innerHTML = "Mind the music and the step";
		lyricsD.innerHTML = "And with the girls be handy!";
	}}}}}}}}}}}}}}}}}}}}}}
	}
	}
}



play.addEventListener(`click`, toggleMusic)
play.addEventListener(`click`, timeout)
