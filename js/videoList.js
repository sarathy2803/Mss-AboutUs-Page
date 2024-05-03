const videosList = [
    {
        image:  'Assets/kri-poster.jpg',
        video: 'Assets/Krithika_About_1.mp4',
        title: 'Mrs. Krithika Kumar Quintal-Honarary General Secratary'
    },
    {
        image:  'Assets/kri-poster.jpg',
        video: 'Assets/Krithika_About_2.mp4',
        title: 'Mrs. Krithika Kumar Quintal-Honarary General Secratary'
    },
    {
        image: 'Assets/dalalposter.jpg',
        video: 'Assets/dalal_poster_1.mp4',
        title: 'Mr. D. S.Dalal-erstwhile President'
    },
    ]
    
    const categories = [...new Set(videosList.map((item) => { return item }))]
    document.getElementById('videosList').innerHTML = categories.map((item) => {
        var { endPoster,image,video, title } = item;
        return (
            `<div class="list active">
            <video src=${video} class="list-video" poster="${image}"></video>
            <h3 class="list-title">${title}</h3>
            </div>`
            )
    }).join('')
    
    let videoList = document.querySelectorAll('.video-list-container .list');
    videoList.forEach(remove => { remove.classList.remove('active') });
    videoList.forEach(vid => {
        vid.onclick = () => {
            videoList.forEach(remove => { remove.classList.remove('active') });
            vid.classList.add('active');
            let src = vid.querySelector('.list-video').src;
            let title = vid.querySelector('.list-title').innerHTML;
            document.querySelector('.main-video-container .main-video').src = src;
            document.querySelector('.main-video-container .main-video').play();
            document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
        };
    });