function getVideo(){
    let videos = document.getElementsByTagName('video');
    if(videos.length > 0)
        return videos[0];
    return null;
}

let meterTimer = 1000;
function getOrCreateSpeedMeter(){
    let video = getVideo();
    if(!video)
        return null;

    let speedmeter = document.getElementById('speedmeter');
    let interval = null;
    if(!speedmeter){
        let div = document.createElement('div');
        video.parentElement.style.position = 'relative';
        video.parentElement.appendChild(div);
        div.style.padding = '3px';
        div.style.position = 'absolute';
        div.style.top = '0';
        div.style.left = '0';
        div.style.margin = '1em';
        div.style.backgroundColor = 'black';
        div.style.borderRadius = '10%';
        div.id = 'speedmeter';
        speedmeter = div;
    }
    speedmeter.style.display = 'block';
    meterTimer = 1000;
    if(interval == null){
        interval = setInterval(() => {
            meterTimer -= 100;
            if(meterTimer <= 0){
                speedmeter.style.display = 'none';
                clearInterval(interval);
                interval = null;
            }
        }, 100);
    }

    return speedmeter;
}

document.addEventListener("keydown", (e) => {
    let video = getVideo();
    if(!video || !e.altKey)
        return;
        
    if(!isNaN(e.key)){
        let n = parseInt(e.key);
        video.playbackRate = n;
    }
    else if(e.key === 'a')
        video.playbackRate -= 0.1;
    else if(e.key === 's')
        video.playbackRate += 0.1;
    
    let sm = getOrCreateSpeedMeter();
    if(sm){
        sm.innerText = video.playbackRate.toFixed(2) + 'x';
    }
});