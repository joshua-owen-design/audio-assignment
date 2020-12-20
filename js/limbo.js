//This is taken from class, I was more focusing on using this in conjuction with the lyrics changing
let audio = new Audio/* I used audio I don't have the right to (`audioFiles/gelato.mp3`)*/
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

//This is doing what I want it to do, but I'm not sure if there's a better way. Like to condense the code to make it more efficient.

//I just think this song is so funny, sorry if it isn't your taste haha

//Intro
function timeout(){
	setTimeout(changeLyrics, 1000);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "white";
		lyricsA.innerHTML = "Yolo";
		lyricsB.style.backgroundColor = "transparent";
		lyricsB.innerHTML = "Yee";
		lyricsC.style.backgroundColor = "transparent";
		lyricsC.innerHTML = "Yee";
		lyricsD.style.backgroundColor = "transparent";
		lyricsD.innerHTML = "Yee";
	setTimeout(changeLyrics, 4000);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "transparent";
		lyricsA.innerHTML = "Yolo";
		lyricsB.style.backgroundColor = "white";
		lyricsB.innerHTML = "Yee";
		lyricsC.style.backgroundColor = "transparent";
		lyricsC.innerHTML = "Yee";
		lyricsD.style.backgroundColor = "transparent";
		lyricsD.innerHTML = "Yee";
	setTimeout(changeLyrics, 4000);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "transparent";
		lyricsA.innerHTML = "Yolo";
		lyricsB.style.backgroundColor = "transparent";
		lyricsB.innerHTML = "Yee";
		lyricsC.style.backgroundColor = "white";
		lyricsC.innerHTML = "Yee";
		lyricsD.style.backgroundColor = "transparent";
		lyricsD.innerHTML = "Yee";
	setTimeout(changeLyrics, 3000);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "transparent";
		lyricsA.innerHTML = "Yolo";
		lyricsB.style.backgroundColor = "transparent";
		lyricsB.innerHTML = "Yee";
		lyricsC.style.backgroundColor = "transparent";
		lyricsC.innerHTML = "Yee";
		lyricsD.style.backgroundColor = "white";
		lyricsD.innerHTML = "Yee";
//Chorus part 1
	setTimeout(changeLyrics, 1500);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "white";
		lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
		lyricsB.style.backgroundColor = "transparent";
		lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
		lyricsC.style.backgroundColor = "transparent";
		lyricsC.innerHTML = "Gelato (Swag), Gelato, I'm smoking big";
		lyricsD.style.backgroundColor = "transparent";
		lyricsD.innerHTML = "";
	setTimeout(changeLyrics, 1800);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "transparent";
		lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
		lyricsB.style.backgroundColor = "white";
		lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
		lyricsC.style.backgroundColor = "transparent";
		lyricsC.innerHTML = "Gelato (Swag), Gelato, I'm smoking big";
		lyricsD.style.backgroundColor = "transparent";
		lyricsD.innerHTML = "";
	setTimeout(changeLyrics, 1800);
	function changeLyrics (){
		lyricsA.style.backgroundColor = "transparent";
		lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
		lyricsB.style.backgroundColor = "transparent";
		lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
		lyricsC.style.backgroundColor = "white";
		lyricsC.innerHTML = "Gelato (Swag), Gelato, I'm smoking big";
		lyricsD.style.backgroundColor = "transparent";
		lyricsD.innerHTML = "";
//Chorus part 2
setTimeout(changeLyrics, 2400);
function changeLyrics (){
	lyricsA.style.backgroundColor = "white";
	lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Gelato (Swag), Gelato, yeah, I keep a zip";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "";
setTimeout(changeLyrics, 1800);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsB.style.backgroundColor = "white";
	lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Gelato (Swag), Gelato, yeah, I keep a zip";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "";
setTimeout(changeLyrics, 1800);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsC.style.backgroundColor = "white";
	lyricsC.innerHTML = "Gelato (Swag), Gelato, yeah, I keep a zip";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "";
//Verse 1 part 1
setTimeout(changeLyrics, 3000);
function changeLyrics (){
	lyricsA.style.backgroundColor = "white";
	lyricsA.innerHTML = "I feel like Skateboard P, I got the ice on freeze";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Livin' lavish like I'm Master P on MTV";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "I was just roamin' Rome (Rome)";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "I'ma just do as the Romans do";
setTimeout(changeLyrics, 3100);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "I feel like Skateboard P, I got the ice on freeze";
	lyricsB.style.backgroundColor = "white";
	lyricsB.innerHTML = "Livin' lavish like I'm Master P on MTV";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "I was just roamin' Rome (Rome)";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "I'ma just do as the Romans do";
setTimeout(changeLyrics, 3300);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "I feel like Skateboard P, I got the ice on freeze";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Livin' lavish like I'm Master P on MTV";
	lyricsC.style.backgroundColor = "white";
	lyricsC.innerHTML = "I was just roamin' Rome (Rome)";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "I'ma just do as the Romans do";
setTimeout(changeLyrics, 2200);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "I feel like Skateboard P, I got the ice on freeze";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Livin' lavish like I'm Master P on MTV";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "I was just roamin' Rome (Rome)";
	lyricsD.style.backgroundColor = "white";
	lyricsD.innerHTML = "I'ma  just do as the Romans do";
//Verse 1 part 2
setTimeout(changeLyrics, 1500);
function changeLyrics (){
	lyricsA.style.backgroundColor = "white";
	lyricsA.innerHTML = "Nothing can phase me, I'm bulletproof";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Geeked with my feet up in living room (Ayy)";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Sit on my face and it taste like Pinkity Drinkity";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "Open the door for your motherfuckin' bitch like, chivalry, chivalry";
setTimeout(changeLyrics, 2000);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Nothing can phase me, I'm bulletproof";
	lyricsB.style.backgroundColor = "white";
	lyricsB.innerHTML = "Geeked with my feet up in living room (Ayy)";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Sit on my face and it taste like Pinkity Drinkity";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "Open the door for your motherfuckin' bitch like, chivalry, chivalry";
setTimeout(changeLyrics, 2000);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Nothing can phase me, I'm bulletproof";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Geeked with my feet up in living room (Ayy)";
	lyricsC.style.backgroundColor = "white";
	lyricsC.innerHTML = "Sit on my face and it taste like Pinkity Drinkity";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "Open the door for your motherfuckin' bitch like, chivalry, chivalry";
setTimeout(changeLyrics, 3000);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Nothing can phase me, I'm bulletproof";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Geeked with my feet up in living room (Ayy)";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Sit on my face and it taste like Pinkity Drinkity";
	lyricsD.style.backgroundColor = "white";
	lyricsD.innerHTML = "Open the door for your motherfuckin' bitch like, chivalry, chivalry";
//Verse 1 part 3
setTimeout(changeLyrics, 3000);
function changeLyrics (){
	lyricsA.style.backgroundColor = "white";
	lyricsA.innerHTML = "Came in this bitch with my ice and I'm sensin' the hate";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Stop with the ke-ke-ke";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Doin' the cha-cha, smokin' on zaza";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "Cake, cake, cake, cake";
setTimeout(changeLyrics, 2000);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Came in this bitch with my ice and I'm sensin' the hate";
	lyricsB.style.backgroundColor = "white";
	lyricsB.innerHTML = "Stop with the ke-ke-ke";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Doin' the cha-cha, smokin' on zaza";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "Cake, cake, cake, cake";
setTimeout(changeLyrics, 1700);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Came in this bitch with my ice and I'm sensin' the hate";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Stop with the ke-ke-ke";
	lyricsC.style.backgroundColor = "white";
	lyricsC.innerHTML = "Doin' the cha-cha, smokin' on zaza";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "Cake, cake, cake, cake";
setTimeout(changeLyrics, 1300);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Came in this bitch with my ice and I'm sensin' the hate";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Stop with the ke-ke-ke";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Doin' the cha-cha, smokin' on zaza";
	lyricsD.style.backgroundColor = "white";
	lyricsD.innerHTML = "Cake, cake, cake, cake";
//2nd Chorus part 1
setTimeout(changeLyrics, 1700);
function changeLyrics (){
	lyricsA.style.backgroundColor = "white";
	lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Gelato (Swag), Gelato, I'm smoking big";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "";
setTimeout(changeLyrics, 1800);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsB.style.backgroundColor = "white";
	lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Gelato (Swag), Gelato, I'm smoking big";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "";
setTimeout(changeLyrics, 1800);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsC.style.backgroundColor = "white";
	lyricsC.innerHTML = "Gelato (Swag), Gelato, I'm smoking big";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "";
//2nd Chorus part 2
setTimeout(changeLyrics, 2600);
function changeLyrics (){
	lyricsA.style.backgroundColor = "white";
	lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Gelato (Swag), Gelato, yeah, I keep a zip";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "";
setTimeout(changeLyrics, 1800);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsB.style.backgroundColor = "white";
	lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Gelato (Swag), Gelato, yeah, I keep a zip";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "";
setTimeout(changeLyrics, 1800);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsC.style.backgroundColor = "white";
	lyricsC.innerHTML = "Gelato (Swag), Gelato, yeah, I keep a zip";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "";
//Verse 2 part 1
setTimeout(changeLyrics, 3000);
function changeLyrics (){
	lyricsA.style.backgroundColor = "white";
	lyricsA.innerHTML = "I'm puffin' on loud";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Stephen A";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "I'm Damian Lillard, I'm runnin' the game";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "NBA";
setTimeout(changeLyrics, 1500);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "I'm puffin' on loud";
	lyricsB.style.backgroundColor = "white";
	lyricsB.innerHTML = "Stephen A";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "I'm Damian Lillard, I'm runnin' the game";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "NBA";
setTimeout(changeLyrics, 1000);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "I'm puffin' on loud";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Stephen A";
	lyricsC.style.backgroundColor = "white";
	lyricsC.innerHTML = "I'm Damian Lillard, I'm runnin' the game";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "NBA";
setTimeout(changeLyrics, 2500);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "I'm puffin' on loud";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Stephen A";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "I'm Damian Lillard, I'm runnin' the game";
	lyricsD.style.backgroundColor = "white";
	lyricsD.innerHTML = "NBA";
//Verse 2 part 2
setTimeout(changeLyrics, 1000);
function changeLyrics (){
	lyricsA.style.backgroundColor = "white";
	lyricsA.innerHTML = "Call-callin' through Weezy, I feel like a martian";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "We are not the same";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "No, this ain't CBD, I'm smokin' Gelato at BET";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "I'm eatin' halal in the Middle East";
setTimeout(changeLyrics, 1500);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Call-callin' through Weezy, I feel like a martian";
	lyricsB.style.backgroundColor = "white";
	lyricsB.innerHTML = "We are not the same";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "No, this ain't CBD, I'm smokin' Gelato at BET";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "I'm eatin' halal in the Middle East";
setTimeout(changeLyrics, 1200);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Call-callin' through Weezy, I feel like a martian";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "We are not the same";
	lyricsC.style.backgroundColor = "white";
	lyricsC.innerHTML = "No, this ain't CBD, I'm smokin' Gelato at BET";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "I'm eatin' halal in the Middle East";
setTimeout(changeLyrics, 2800);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Call-callin' through Weezy, I feel like a martian";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "We are not the same";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "No, this ain't CBD, I'm smokin' Gelato at BET";
	lyricsD.style.backgroundColor = "white";
	lyricsD.innerHTML = "I'm eatin' halal in the Middle East";
//Verse 2 part 3
setTimeout(changeLyrics, 2300);
function changeLyrics (){
	lyricsA.style.backgroundColor = "white";
	lyricsA.innerHTML = "Spendin' cash money";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Louis suit on me, check my tag, dummy";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "My bitch got on tags, homie";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "Keepin' tabs on me, Evisu on me";
setTimeout(changeLyrics, 2500);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Spendin' cash money";
	lyricsB.style.backgroundColor = "white";
	lyricsB.innerHTML = "Louis suit on me, check my tag, dummy";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "My bitch got on tags, homie";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "Keepin' tabs on me, Evisu on me";
setTimeout(changeLyrics, 3800);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Spendin' cash money";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Louis suit on me, check my tag, dummy";
	lyricsC.style.backgroundColor = "white";
	lyricsC.innerHTML = "My bitch got on tags, homie";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "Keepin' tabs on me, Evisu on me";
setTimeout(changeLyrics, 2950);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Spendin' cash money";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Louis suit on me, check my tag, dummy";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "My bitch got on tags, homie";
	lyricsD.style.backgroundColor = "white";
	lyricsD.innerHTML = "Keepin' tabs on me, Evisu on me";
//3rd Chorus part 1
setTimeout(changeLyrics, 3500);
function changeLyrics (){
	lyricsA.style.backgroundColor = "white";
	lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Gelato (Swag), Gelato, I'm smoking big";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "";
setTimeout(changeLyrics, 1800);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsB.style.backgroundColor = "white";
	lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Gelato (Swag), Gelato, I'm smoking big";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "";
setTimeout(changeLyrics, 1800);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsC.style.backgroundColor = "white";
	lyricsC.innerHTML = "Gelato (Swag), Gelato, I'm smoking big";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "";
//3rd Chorus part 2
setTimeout(changeLyrics, 2600);
function changeLyrics (){
	lyricsA.style.backgroundColor = "white";
	lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Gelato (Swag), Gelato, yeah, I keep a zip";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "";
setTimeout(changeLyrics, 1800);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsB.style.backgroundColor = "white";
	lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Gelato (Swag), Gelato, yeah, I keep a zip";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "";
setTimeout(changeLyrics, 1800);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "Gelato (Swag), Gelato (Swag)";
	lyricsC.style.backgroundColor = "white";
	lyricsC.innerHTML = "Gelato (Swag), Gelato, yeah, I keep a zip";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "";
//Outro
setTimeout(changeLyrics, 3000);
function changeLyrics (){
	lyricsA.style.backgroundColor = "white";
	lyricsA.innerHTML = "Bee-boo-bap, boo-bap (Woah, woah, woah, woah)";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "He still gas you like (Woah, woah, woah, woah)";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Bee-boo-bap, boo-bap (Woah, woah, woah, woah)";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "He still gas you like (Woah, woah, woah, woah)";
setTimeout(changeLyrics, 3500);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Bee-boo-bap, boo-bap (Woah, woah, woah, woah)";
	lyricsB.style.backgroundColor = "white";
	lyricsB.innerHTML = "He still gas you like (Woah, woah, woah, woah)";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Bee-boo-bap, boo-bap (Woah, woah, woah, woah)";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "He still gas you like (Woah, woah, woah, woah)";
setTimeout(changeLyrics, 3500);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Bee-boo-bap, boo-bap (Woah, woah, woah, woah)";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "He still gas you like (Woah, woah, woah, woah)";
	lyricsC.style.backgroundColor = "white";
	lyricsC.innerHTML = "Bee-boo-bap, boo-bap (Woah, woah, woah, woah)";
	lyricsD.style.backgroundColor = "transparent";
	lyricsD.innerHTML = "He still gas you like (Woah, woah, woah, woah)";
setTimeout(changeLyrics, 3500);
function changeLyrics (){
	lyricsA.style.backgroundColor = "transparent";
	lyricsA.innerHTML = "Bee-boo-bap, boo-bap (Woah, woah, woah, woah)";
	lyricsB.style.backgroundColor = "transparent";
	lyricsB.innerHTML = "He still gas you like (Woah, woah, woah, woah)";
	lyricsC.style.backgroundColor = "transparent";
	lyricsC.innerHTML = "Bee-boo-bap, boo-bap (Woah, woah, woah, woah)";
	lyricsD.style.backgroundColor = "white";
	lyricsD.innerHTML = "He still gas you like (Woah, woah, woah, woah)";
	}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
	}
	}
}

//Yea so I realized I need to put the transparency as a funciton. Cause if I wanted to change it from transparent to black I would currently have to go in and change like hundreds of lines of code instead of one. I only realized this at the end tho lol.
//Wow that was very time comsuming. There just has to be a better way. Not sure how/if I could condense these functions.
//Audio ripped from https://www.youtube.com/watch?v=YuDz9uX1UBo
//Lyrics pulled from https://genius.com/Amine-gelato-lyrics
play.addEventListener(`click`, toggleMusic)
play.addEventListener(`click`, timeout)
