const FileSelector = document.getElementById('File-Selector');
const output = document.getElementById('fileList');

const reader = new FileReader();

const audiosource = document.getElementById('audiosource');

let files = [];

let currentpick = 0;

FileSelector.addEventListener('change', (event) =>{
    const fileList = event.target.files;
    console.log(fileList);

    output.innerHTML = '';
    count = 0;
    for(const file of event.target.files){
        const li = document.createElement('li');
        const name = file.name;
        li.textContent = `Song ${count + 1}: ${name}`;
        output.append(li);
        files[count] = file;
        count = count + 1;
    }
    // playMusic();
});

audiosource.addEventListener('ended', (event) =>{
    console.log("The song has ended")
    currentpick++;
    playMusic();
});


// music

function playMusic(){
    // var audio = URL.createObjectURL(files[0]);
    // audio.play()

    // reader.addEventListener('load', event => {
    //     console.log(event.target.result);
    //     audiosource.src = URL.createObjectURL(event.target.result);
    //   });
    //   reader.readAsDataURL(files[0]);

    // console.log(URL.createObjectURL(files[0]));

    audiosource.src = URL.createObjectURL(files[currentpick]);
    audiosource.play();
    test();
    test3();

    //duration testing
    audiosource.addEventListener("loadeddata", function() {
    var songlength = this.duration;
    document.getElementById('playlength').max = songlength; 
});
}

function ChangePick(changevalue){
    currentpick = currentpick + changevalue;
    if(currentpick <= 0){
        currentpick = 0;
    }
    if(currentpick >= files.length -1){
        currentpick = files.length -1;
    }
    console.log(currentpick);
    playMusic();
}

function stopMusic(){
    audiosource.pause();
}

function changeVol(changevol){
    audiosource.volume += changevol;
    console.log(audiosource.volume);
}

function test(){
    var currenttime = audiosource.currentTime;
    document.getElementById('playlength').value = currenttime;
    setTimeout( test, 1000);
}

function test3(){
    var percentage = audiosource.currentTime / document.getElementById('playlength').max * 100;
    var display = Math.round(percentage);
    document.getElementById('percent').innerHTML = display + '%';
    setTimeout( test3, 1000);
}

