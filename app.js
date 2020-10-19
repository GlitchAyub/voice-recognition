const btn =document.querySelector('.voice');
const content=document.querySelector('.content');

//text back

const  greetings = [`i'm doing good you piece of shit!`,`leave me alone dont disturb me do your own stuff`,` i'm fine wassup`];
const weather=[`weather is fine why do u need  did u leave your ass from that bed or u sitting right now?`,`it's great yeah like u`];
const build =[`hi i'm friday ayub stark AI assistance haha lol  but he's good`]
const no =['i dont wanna know who the fuck are you']



const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function (){
    console.log("activated");
}
recognition.onresult = function(event){
const current = event.resultIndex;

const transcript = event.results[current][0].transcript;
content.textContent=transcript;
readOutLoud(transcript);
}

//add btn listener
 btn.addEventListener('click',()=>{
     recognition.start();
 })

 function readOutLoud(message){
     const speech = new SpeechSynthesisUtterance();
     speech.text='why u do this i ahve to learn now';

     if(message.includes('how are you'))
     {
         const final= greetings[Math.floor(Math.random()*greetings.length)];
        speech.text=final;
     }else if(message.includes('tell me about weather')){
        const a = weather[Math.floor(Math.random()*weather.length)];
        speech.text=a;
     }
     else if(message.includes('who are you')){
        const b =build[Math.floor(Math.random()*build.length)];
        speech.text=b;
    }
    else if(message.includes('do you know me')){
        const c =no[0];
        speech.text=c;
    }
     
     speech.volume=1;
     speech.rate=1;
     speech.pitch=3;
     window.speechSynthesis.speak(speech);
 }