console.log("Welcome to Spotify");
let audioElement = new Audio ("Material/song/7.mp3");
// audioElement.play();
let gif = document.getElementById('gif');
let myProgressBar=document.getElementById('myProgressBar');
let masterplay=document.getElementById('masterplay');
let songItems=Array.from(document.getElementsByClassName("songItems"));

let songs=[

  { songName:"Nashe si chadh Gayi",filePath:"Material/song/1.mp3",coverPath:"covers/1.jpg"},
  { songName:"Kamariya",filePath:"Material/song/2.mp3",coverPath:"covers/1.jpg"},
  { songName:"Dilliwaali Girlfriend",filePath:"Material/song/3.mp3",coverPath:"covers/1.jpg"},
  { songName:"Balam Pichkari",filePath:"Material/song/4.mp3",coverPath:"covers/1.jpg"},
  { songName:"Nainowale",filePath:"Material/song/5.mp3",coverPath:"covers/1.jpg"},
  { songName:"Lakshya",filePath:"Material/song/6.mp3",coverPath:"covers/1.jpg"},
  { songName:"Unstoppable",filePath:"Material/song/7.mp3",coverPath:"covers/1.jpg"},
  { songName:"Achyutam Keshavam",filePath:"Material/song/8.mp3",coverPath:"covers/1.jpg"},
  { songName:"Tum Prem ho Tum preet ho",filePath:"Material/song/9.mp3",coverPath:"covers/1.jpg"},
  { songName:"Hasi Ban gye",filePath:"Material/song/10.mp3",coverPath:"covers/1.jpg"},


]
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})


masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }
    else{

        audioElement.pause();
        masterplay.classList.add("fa-circle-play" );
        masterplay.classList.remove("fa-circle-pause" );
        gif.style.opacity=0;

    }
    
})

//update the seekbar
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{

    audioElement.currentTime = (audioElement.duration*myProgressBar.value)/100;



})
// const makeAllPlays=()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-circle-pause');
//         element.classList.add('fa-circle-play');
//     })
// }

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
makeAllPlays();
       songIndex=parseInt(e.target.id);


        
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

      audioElement.src = `Material/song/${songIndex + 1}.mp3`;

      audioElement.currentTime=0;
      audioElement.play();
      masterplaySongName.innerText=song[songIndex].songName;
      audioElement.currentTime= 0;
      audioElement.play();
      gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');


    })
})
document.getElementById('next').addEventListener('click',()=>{


    if(songIndex>=9){
    songIndex=0;
    }
    else{
        songIndex+=1;
    }      
    audioElement.src = `Material/song/${songIndex + 1}.mp3`;

    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime=0;

    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');
    

})
document.getElementById('previous').addEventListener('click',()=>{

 if(songIndex<=0){
    songIndex=0;
    }
    else{
        songIndex-=1;
    } 
    audioElement.src = `Material/song/${songIndex + 1}.mp3`;

    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');
}
)
