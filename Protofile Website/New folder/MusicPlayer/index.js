var Pause_And_Play_Btn = document.getElementById('btn1')
var Title_Singer =  document.getElementById('Title_Singer')
var img = document.getElementById('img')
var all_izz_well = new Audio('01. Aal Izz Well.mp3')
var Khairiyat = new Audio('Khairiyat - Chhichhore 320 Kbps.mp3')
var KhadTenuMainDasa = new Audio('Khad Tainu Main Dassa - Neha Kakkar.mp3')

function PlayPause(){
    all_izz_well.pause()
    Pause_And_Play_Btn.innerHTML = '<button class="btn" onclick="BackSong()" id="BackWard"><img src="Backward.png" alt=""></button><button class="btn" onclick="PausePlay()"id="Pause"><img src="Pause.jpg" alt=""></button><button onclick="BackSong" class="btn" id="forward"><img src="Forward.png" alt=""></button>'
}

function Replay(){
    all_izz_well.play()
    KhadTenuMainDasa.pause()
    Khairiyat.pause()
    all_izz_well.currentTime=0
    Pause_And_Play_Btn.innerHTML = '<button onclick="BackSong()" class="btn" id="BackWard"><img src="Backward.png" alt=""></button><button class="btn" onclick="PlayPause()"id="PausePlays"><img id="Plays" src="play1.jpg" alt=""></button><button class="btn" id="forward"><img src="Forward.png" alt=""></button>'
    Title_Singer.innerHTML = '<h1>All Izz Well</h1><h3>Sonu Nigam</h3>'
    img.innerHTML = '<img src="https://cdn.dribbble.com/users/1162658/screenshots/10851175/3idiot-01_4x.png" alt="">'
}

function PausePlay(){
    all_izz_well.play()
    KhadTenuMainDasa.pause()
    Khairiyat.pause()
    // Khairiyat.play()
    // KhadTenuMainDasa.play()
    // Pause_And_Play_Btn.innerHTML = '<button onclick="BackSong()" class="btn" id="BackWard"><img src="Backward.png" alt=""></button><button class="btn" onclick="PlayPause()"id="PausePlays"><img id="Plays" src="play1.jpg" alt=""></button><button class="btn" id="forward"><img src="Forward.png" alt=""></button>'
    Pause_And_Play_Btn.innerHTML = '<button onclick="BackSong()" class="btn" id="BackWard"><img src="Backward.png" alt=""></button><button class="btn" onclick="PlayPause()"id="PausePlays"><img id="Plays" src="play1.jpg" alt=""></button><button class="btn" onclick="BackSong2" id="forward"><img src="Forward.png" alt=""></button>'
    Title_Singer.innerHTML = '<h1>All Izz Well</h1><h3>Sonu Nigam</h3>'
    img.innerHTML = '<img src="https://cdn.dribbble.com/users/1162658/screenshots/10851175/3idiot-01_4x.png" alt="">'
}

function BackSong(){
    all_izz_well.pause()
    Khairiyat.play()
    Khairiyat.currentTime=0
    Pause_And_Play_Btn.innerHTML = '<button class="btn" id="BackWard"><img src="Backward.png" alt=""></button><button class="btn" onclick="PlayPause()"id="PausePlays"><img id="Plays" src="play1.jpg" alt=""></button><button class="btn" id="forward"><img src="Forward.png" alt=""></button>'
    Title_Singer.innerHTML = '<h1>Khariyat</h1><h3>Arijit Singh</h3>'
    img.innerHTML = '<img src="Khairiyat.jpg" alt="">'
    Pause_And_Play_Btn.innerHTML = '<button class="btn" onclick="BackSong2()" id="BackWard"><img src="Backward.png" alt=""></button><button class="btn" onclick="PlayPause1()"id="Pause"><img src="play1.jpg" alt=""></button><button class="btn" id="forward"><img src="Forward.png" alt=""></button>'

}

function PlayPause1(){
    Khairiyat.pause()
    Pause_And_Play_Btn.innerHTML = '<button class="btn" onclick="BackSong2()" id="BackWard"><img src="Backward.png" alt=""></button><button class="btn" onclick="PausePlay1()"id="Pause"><img src="Pause.jpg" alt=""></button><button class="btn" id="forward"><img src="Forward.png" alt=""></button>'
}

function PausePlay1(){
    // all_izz_well.play()
    Khairiyat.play()
    // KhadTenuMainDasa.play()
    Pause_And_Play_Btn.innerHTML = '<button onclick="BackSong2()" class="btn" id="BackWard"><img src="Backward.png" alt=""></button><button class="btn" onclick="PlayPause1()"id="PausePlays"><img id="Plays" src="play1.jpg" alt=""></button><button class="btn" id="forward"><img src="Forward.png" alt=""></button>'
}

function BackSong2(){
    // all_izz_well.pause()
    Khairiyat.pause()
    KhadTenuMainDasa.play()
    KhadTenuMainDasa.currentTime = 0
    Pause_And_Play_Btn.innerHTML = '<button class="btn" id="BackWard"><img src="Backward.png" alt=""></button><button class="btn" onclick="PlayPause()"id="PausePlays"><img id="Plays" src="play1.jpg" alt=""></button><button class="btn" id="forward"><img src="Forward.png" alt=""></button>'
    Title_Singer.innerHTML = '<h1 id="Khadh1">Khad Tenu Main Dassa</h1><h3>Neha Kakkar</h3>'
    img.innerHTML = '<img src="KHAD-TAINU-MAIN-DASSA-LYRICS-NEHA-KAKKAR.jpg" alt="">'
    Pause_And_Play_Btn.innerHTML = '<button class="btn" onclick="Replay()" id="BackWard"><img src="Backward.png" alt=""></button><button class="btn" onclick="PlayPause2()"id="Pause"><img src="play1.jpg" alt=""></button><button class="btn" id="forward"><img src="Forward.png" alt=""></button>'

}


function PlayPause2(){
    Khairiyat.pause()
    KhadTenuMainDasa.pause()
    Pause_And_Play_Btn.innerHTML = '<button class="btn" onclick="Replay()" id="BackWard"><img src="Backward.png" alt=""></button><button class="btn" onclick="PausePlay2()"id="Pause"><img src="Pause.jpg" alt=""></button><button class="btn" id="forward"><img src="Forward.png" alt=""></button>'
}

function PausePlay2(){
    // all_izz_well.play()
    // Khairiyat.play()
    KhadTenuMainDasa.play()
    Pause_And_Play_Btn.innerHTML = '<button onclick="Replay()" class="btn" id="BackWard"><img src="Backward.png" alt=""></button><button class="btn" onclick="PlayPause2()"id="PausePlays"><img id="Plays" src="play1.jpg" alt=""></button><button class="btn" id="forward"><img src="Forward.png" alt=""></button>'
}

function FrontSong2() {
    all_izz_well.pause()
    KhadTenuMainDasa.pause()
    Khairiyat.play()
    Khairiyat.currentTime=0
    Pause_And_Play_Btn.innerHTML = '<button class="btn" id="BackWard"><img src="Backward.png" alt=""></button><button class="btn" onclick="PlayPause()"id="PausePlays"><img id="Plays" src="play1.jpg" alt=""></button><button class="btn" id="forward"><img src="Forward.png" alt=""></button>'
    Title_Singer.innerHTML = '<h1>Khariyat</h1><h3>Arijit Singh</h3>'
    img.innerHTML = '<img src="Khairiyat.jpg" alt="">'
    Pause_And_Play_Btn.innerHTML = '<button class="btn" onclick="BackSong2()" id="BackWard"><img src="Backward.png" alt=""></button><button class="btn" onclick="PlayPause1()"id="Pause"><img src="play1.jpg" alt=""></button><button class="btn" id="forward"><img src="Forward.png" alt=""></button>'

}

function FrontSong(){
    all_izz_well.pause()
    KhadTenuMainDasa.play()
    KhadTenuMainDasa.currentTime=0
    Pause_And_Play_Btn.innerHTML = '<button class="btn" id="BackWard"><img src="Backward.png" alt=""></button><button class="btn" onclick="PlayPause()"id="PausePlays"><img id="Plays" src="play1.jpg" alt=""></button><button class="btn" id="forward"><img src="Forward.png" alt=""></button>'
    Title_Singer.innerHTML = '<h1>Khad Tenu Main Dasa</h1><h3>Neha Kakkar</h3>'
    img.innerHTML = '<img src="KHAD-TAINU-MAIN-DASSA-LYRICS-NEHA-KAKKAR.jpg" alt="">'
    Pause_And_Play_Btn.innerHTML = '<button class="btn" onclick="FrontSong2()" id="BackWard"><img src="Backward.png" alt=""></button><button class="btn" onclick="PlayPause1()"id="Pause"><img src="play1.jpg" alt=""></button><button class="btn" id="forward" onclick="BackSong2"><img src="Forward.png" alt=""></button>'

}