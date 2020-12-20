//This is taken from class, I was more focusing on using this in conjuction with the lyrics changing
let audio = new Audio/*(`audioFiles/texas-sun.mp3`)*/ //I used music I don't have the right to
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
/* HOLY CRAP I FIGURED SOMETHING OUT. COME BACK TO THIS IF EVERYTHING GETS SCREWED FROM HERE!
function timeout(){
setTimeout(changeLyrics, 1000);
function changeLyrics (){
	lyricsA.style.backgroundColor = "black";
}
}
*/


//This is doing what I want it to do, but I'm not sure if there's a better way. Like to condense the code to make it more efficient.
function timeout(){
	setTimeout(changeLyrics, 33500);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "white";
		lyricsA.innerHTML = "You say you like the wind blowin' through your hair";
		lyricsB.style.backgroundColor = "transparent";
		lyricsB.innerHTML = "Well, come on roll with me 'til the sun comes down";
	setTimeout(changeLyrics, 4500);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "transparent";
		lyricsA.innerHTML = "You say you like the wind blowin' through your hair";
		lyricsB.style.backgroundColor = "white";
		lyricsB.innerHTML = "Well, come on roll with me 'til the sun comes down";
	setTimeout(changeLyrics, 8500);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "white";
		lyricsA.innerHTML = "Texas sun";
		lyricsB.style.backgroundColor = "transparent";
		lyricsB.innerHTML = "Say you wanna hit the highway while the engine roars";
	setTimeout(changeLyrics, 4000);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "transparent";
		lyricsA.innerHTML = "Texas sun";
		lyricsB.style.backgroundColor = "white";
		lyricsB.innerHTML = "Say you wanna hit the highway while the engine roars";
	setTimeout(changeLyrics, 5000);
	function changeLyrics (){
			lyricsA.style.backgroundColor = "white";
			lyricsA.innerHTML = "Well, come on, roll with me 'til the sun goes down";
			lyricsB.style.backgroundColor = "transparent";
			lyricsB.innerHTML = "That Texas sun, oh yeah, Texas sun";
	setTimeout(changeLyrics, 6500);
	function changeLyrics (){
			lyricsA.style.backgroundColor = "transparent";
			lyricsA.innerHTML = "Well, come on, roll with me 'til the sun goes down";
			lyricsB.style.backgroundColor = "white";
			lyricsB.innerHTML = "That Texas sun, oh yeah, Texas sun";
	setTimeout(changeLyrics, 13000);
	function changeLyrics (){
			lyricsA.style.backgroundColor = "white";
			lyricsA.innerHTML = "Caressing you from Fort Worth to Amarillo";
			lyricsB.style.backgroundColor = "transparent";
			lyricsB.innerHTML = "Well, come on, roll with me 'til the sun dips low";
	setTimeout(changeLyrics, 6000);
	function changeLyrics (){
			lyricsA.style.backgroundColor = "transparent";
			lyricsA.innerHTML = "Caressing you from Fort Worth to Amarillo";
			lyricsB.style.backgroundColor = "white";
			lyricsB.innerHTML = "Well, come on, roll with me 'til the sun dips low";
	setTimeout(changeLyrics, 5000);
	function changeLyrics (){
			lyricsA.style.backgroundColor = "white";
			lyricsA.innerHTML = "Texas sun, Texas sun, oh girl";
			lyricsB.style.backgroundColor = "transparent";
			lyricsB.innerHTML = "That Texas sun";
	setTimeout(changeLyrics, 18000);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "transparent";
		lyricsA.innerHTML = "Texas sun, Texas sun, oh girl";
		lyricsB.style.backgroundColor = "white";
		lyricsB.innerHTML = "That Texas sun";
	setTimeout(changeLyrics, 5000);
	function changeLyrics (){
			lyricsA.style.backgroundColor = "white";
			lyricsA.innerHTML = "When I'm far from home and them cold winds blow";
			lyricsB.style.backgroundColor = "transparent";
			lyricsB.innerHTML = "Stuck out somewhere with folks I don't know";
	setTimeout(changeLyrics, 5500);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "transparent";
		lyricsA.innerHTML = "When I'm far from home and them cold winds blow";
		lyricsB.style.backgroundColor = "white";
		lyricsB.innerHTML = "Stuck out somewhere with folks I don't know";
	setTimeout(changeLyrics, 5000);
	function changeLyrics (){
			lyricsA.style.backgroundColor = "white";
			lyricsA.innerHTML = "'Cause you keep me nice and you keep me warm";
			lyricsB.style.backgroundColor = "transparent";
			lyricsB.innerHTML = "Wanna feel you on me, can't wait to get back there again";
	setTimeout(changeLyrics, 4500);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "transparent";
		lyricsA.innerHTML = "'Cause you keep me nice and you keep me warm";
		lyricsB.style.backgroundColor = "white";
		lyricsB.innerHTML = "Wanna feel you on me, can't wait to get back there again";
	setTimeout(changeLyrics, 5000);
	function changeLyrics (){
			lyricsA.style.backgroundColor = "white";
			lyricsA.innerHTML = "Texas sun (x4)";
			lyricsB.style.backgroundColor = "transparent";
			lyricsB.innerHTML = "";
	setTimeout(changeLyrics, 31500);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "white";
		lyricsA.innerHTML = "You say you like the wind blowing through your hair";
		lyricsB.style.backgroundColor = "transparent";
		lyricsB.innerHTML = "Well, come on, roll with me 'til the sun goes down";
	setTimeout(changeLyrics, 6500);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "transparent";
		lyricsA.innerHTML = "You say you like the wind blowing through your hair";
		lyricsB.style.backgroundColor = "white";
		lyricsB.innerHTML = "Well, come on, roll with me 'til the sun goes down";
	setTimeout(changeLyrics, 9000);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "white";
		lyricsA.innerHTML = "Texas sun (x2)";
		lyricsB.style.backgroundColor = "transparent";
		lyricsB.innerHTML = "";
	setTimeout(changeLyrics, 13000);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "white";
		lyricsA.innerHTML = "Ooh baby, you're so gorgeous";
		lyricsB.style.backgroundColor = "transparent";
		lyricsB.innerHTML = "How 'bout you and me... take a little trip in the big body?";
	setTimeout(changeLyrics, 4500);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "transparent";
		lyricsA.innerHTML = "Ooh baby, you're so gorgeous";
		lyricsB.style.backgroundColor = "white";
		lyricsB.innerHTML = "How 'bout you and me... take a little trip in the big body?";
	setTimeout(changeLyrics, 10000);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "white";
		lyricsA.innerHTML = "Take a ride with me, baby, you by my side";
		lyricsB.style.backgroundColor = "transparent";
		lyricsB.innerHTML = "How does it sound, you and I? Oh girl";
	setTimeout(changeLyrics, 6000);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "transparent";
		lyricsA.innerHTML = "Take a ride with me, baby, you by my side";
		lyricsB.style.backgroundColor = "white";
		lyricsB.innerHTML = "How does it sound, you and I? Oh girl";
	setTimeout(changeLyrics, 13000);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "white";
		lyricsA.innerHTML = "Take a ride with me, baby, you by my side";
		lyricsB.style.backgroundColor = "transparent";
		lyricsB.innerHTML = "How does it sound, you and I? Baby, oh";
	setTimeout(changeLyrics, 5000);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "transparent";
		lyricsA.innerHTML = "Take a ride with me, baby, you by my side";
		lyricsB.style.backgroundColor = "white";
		lyricsB.innerHTML = "How does it sound, you and I? Baby, oh";
	setTimeout(changeLyrics, 12000);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "white";
		lyricsA.innerHTML = "Take a ride with me, baby, you by my side";
		lyricsB.style.backgroundColor = "transparent";
		lyricsB.innerHTML = "How does it sound, you and I?";
	setTimeout(changeLyrics, 5000);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "transparent";
		lyricsA.innerHTML = "Take a ride with me, baby, you by my side";
		lyricsB.style.backgroundColor = "white";
		lyricsB.innerHTML = "How does it sound, you and I?";
		}}}}}}}}}}}}}}}}}}}}}}}}
	}
	}
}
//Wow that was very time comsuming. There just has to be a better way. Not sure how/if I could condense these functions.
//Oh yea shoutout to Leon Bridges, my favourite musician. Love his stuff. https://www.youtube.com/watch?v=zSWNWWREtsI
//Lyrics pulled from here: https://genius.com/Khruangbin-and-leon-bridges-texas-sun-lyrics
play.addEventListener(`click`, toggleMusic)
play.addEventListener(`click`, timeout)
