//This is taken from class, I was more focusing on using this in conjuction with the lyrics changing
let audio = new Audio/*(`audioFiles/happy-thoughts.mp3`)*/ //I used music I don't have the right to
let lyrics = document.getElementById(`lyricsA`)
let playOrPauseBtn = document.querySelector(`#play`)
let isMusicPlaying = false

let toggleMusic = function() {
	if (isMusicPlaying === false) {
		audio.play()
		isMusicPlaying = true
	} else {
		audio.pause()
		isMusicPlaying = false
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

//Intro
function timeout(){
	setTimeout(changeLyrics, 6400);
	function changeLyrics (){
		lineOne();
		lyricsA.innerHTML = "Woo";
		lyricsB.innerHTML = "All gas, no brake";
		lyricsC.innerHTML = "Yeah";
		lyricsD.innerHTML = "Yeah, yeah, yeah";
	setTimeout(changeLyrics, 6000);
	function changeLyrics (){
		lineTwo();
		lyricsA.innerHTML = "Woo";
		lyricsB.innerHTML = "All gas, no brake";
		lyricsC.innerHTML = "Yeah";
		lyricsD.innerHTML = "Yeah, yeah, yeah";
	setTimeout(changeLyrics, 4000);
	function changeLyrics (){
		lineThree();
		lyricsA.innerHTML = "Woo";
		lyricsB.innerHTML = "All gas, no brake";
		lyricsC.innerHTML = "Yeah";
		lyricsD.innerHTML = "Yeah, yeah, yeah";
	setTimeout(changeLyrics, 2200);
	function changeLyrics (){
		lineFour();
		lyricsA.innerHTML = "Woo";		
		lyricsB.innerHTML = "All gas, no brake";
		lyricsC.innerHTML = "Yeah";
		lyricsD.innerHTML = "Yeah, yeah, yeah";
//Chorus
	setTimeout(changeLyrics, 1600);
	function changeLyrics (){
		lineOne();
		lyricsA.innerHTML = "Sittin' good, that's that Herman Miller";
		lyricsB.innerHTML = "Eatin' good, baby, that's the Chick-Fil-A";
		lyricsC.innerHTML = "In the house, I feel like Swisher";
		lyricsD.innerHTML = "I ain't with the negative, get the picture";
	setTimeout(changeLyrics, 3200);
	function changeLyrics (){
		lineTwo();
		lyricsA.innerHTML = "Sittin' good, that's that Herman Miller";
		lyricsB.innerHTML = "Eatin' good, baby, that's the Chick-Fil-A";
		lyricsC.innerHTML = "In the house, I feel like Swisher";
		lyricsD.innerHTML = "I ain't with the negative, get the picture";
	setTimeout(changeLyrics, 3000);
	function changeLyrics (){
		lineThree();
		lyricsA.innerHTML = "Sittin' good, that's that Herman Miller";
		lyricsB.innerHTML = "Eatin' good, baby, that's the Chick-Fil-A";
		lyricsC.innerHTML = "In the house, I feel like Swisher";
		lyricsD.innerHTML = "I ain't with the negative, get the picture";
	setTimeout(changeLyrics, 3000);
	function changeLyrics (){
		lineFour();
		lyricsA.innerHTML = "Sittin' good, that's that Herman Miller";		
		lyricsB.innerHTML = "Eatin' good, baby, that's the Chick-Fil-A";
		lyricsC.innerHTML = "In the house, I feel like Swisher";
		lyricsD.innerHTML = "I ain't with the negative, get the picture";
	}}}}}}
	}
	}
}

//I haven't gotten to finishing this song yet, but I think the concept is there and more efficient
//Audio ripped from https://www.youtube.com/watch?v=LAaaPEqkGnQ
//Lyrics pulled from https://genius.com/Andy-mineo-herman-miller-lyrics
play.addEventListener(`click`, toggleMusic)
play.addEventListener(`click`, timeout)
