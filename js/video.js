$(document).ready(function () {
    //////////////////////////// Video Player Code Start  /////////////////////////////////
    const videos = document.querySelectorAll(".video");
    const playIcons = document.querySelectorAll(".play-icon");

    videos.forEach(function (video) {
        video.pause();

        function togglePlay() {
            if (video.paused || video.ended) {
                video.play();
            } else {
                video.pause();
            }
        }

        playIcons.forEach(function (icon) {
            icon.addEventListener("click", togglePlay);
        });

        video.addEventListener("playing", function () {

            video.style.position = 'relative';
            video.style.zIndex = 9;
            video.style.opacity = 1;

            playIcons.forEach(function (icon,) {
                icon.style.opacity = 0;

                var posterImagehide = video.closest('.videoWrapper').querySelector('.end_poster_img');
                posterImagehide.style.opacity = 0;
            });
        });

        video.addEventListener("pause", function () {
            playIcons.forEach(function (icon) {
                icon.style.opacity = 1;
            });
        });

        video.addEventListener("ended", function () {
            console.log("video ended");

            playIcons.forEach(function (icon) {
                icon.style.opacity = 1;
            });

            video.style.position = 'relative';
            video.style.zIndex = 999;
            video.style.opacity = 0.0;

            var videoId = video.id;
            //console.log(videoId);

            if (videoId == "krithika_poster") {
                console.log("Condition works");
                var posterImage = video.closest('.videoWrapper').querySelector('.krithika-poster-img');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "krithika_poster2") {
                var posterImage = video.closest('.videoWrapper').querySelector('.krithika-poster-img2');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "dalal-poster") {
                var posterImage = video.closest('.videoWrapper').querySelector('.dalal-poster-img');
                posterImage.style.opacity = 1;
            }
            ////////////////////// Start Be A Part From here /////////////////////////
            else if (videoId == "piyush_poster") {
                console.log("Condition works");
                var posterImage = video.closest('.videoWrapper').querySelector('.piyush-poster-img');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "krithika_part_poster") {
                var posterImage = video.closest('.videoWrapper').querySelector('.krithika-part-poster-img');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "vijaya_ravi_poster") {
                var posterImage = video.closest('.videoWrapper').querySelector('.vijaya-ravi-poster-img');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "vedika_poster") {
                var posterImage = video.closest('.videoWrapper').querySelector('.vedika-poster-img');
                posterImage.style.opacity = 1;
            }
            ////////////////////// Start Units From here /////////////////////////
            /* Girls School Code */
            else if (videoId == "uma-poster-img") {
                var posterImage = video.closest('.videoWrapper').querySelector('.uma_poster_img');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "girls_scl_chetpet_poster_1") {
                var posterImage = video.closest('.videoWrapper').querySelector('.girls_scl_chetpet_poster_1');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "girls_scl_chetpet_poster_2") {
                var posterImage = video.closest('.videoWrapper').querySelector('.girls_scl_chetpet_poster_2');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "girls_scl_chetpet_poster_3") {
                var posterImage = video.closest('.videoWrapper').querySelector('.girls_scl_chetpet_poster_3');
                posterImage.style.opacity = 1;
            }
            /* Shanthi Sadan Code */
            else if (videoId == "jyothi-poster-img") {
                var posterImage = video.closest('.videoWrapper').querySelector('.jyothi-poster-img');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "shanthi_sadan_poster1") {
                var posterImage = video.closest('.videoWrapper').querySelector('.shanthi_sadan_poster1');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "shanthi_sadan_poster2") {
                var posterImage = video.closest('.videoWrapper').querySelector('.shanthi_sadan_poster2');
                posterImage.style.opacity = 1;
            }
            /* Orca Code */
            else if (videoId == "neelu_poster") {
                var posterImage = video.closest('.videoWrapper').querySelector('.neelu_poster_img');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "orca_poster1") {
                var posterImage = video.closest('.videoWrapper').querySelector('.orca_poster_img1');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "orca_poster2") {
                var posterImage = video.closest('.videoWrapper').querySelector('.orca_poster_img2');
                posterImage.style.opacity = 1;
            }
            /* SMVRCH Code */
            else if (videoId == "krish_poster") {
                var posterImage = video.closest('.videoWrapper').querySelector('.krish_poster_img');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "smvrch_poster1") {
                var posterImage = video.closest('.videoWrapper').querySelector('.smvrch_poster_img1');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "smvrch_poster2") {
                var posterImage = video.closest('.videoWrapper').querySelector('.smvrch_poster_img2');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "smvrch_poster3") {
                var posterImage = video.closest('.videoWrapper').querySelector('.smvrch_poster_img3');
                posterImage.style.opacity = 1;
            }
            /* SMVRCH Code */
            else if (videoId == "tamara_poster") {
                var posterImage = video.closest('.videoWrapper').querySelector('.tamara_poster_img');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "samira_poster") {
                var posterImage = video.closest('.videoWrapper').querySelector('.samira_poster_img');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "samira_poster2") {
                var posterImage = video.closest('.videoWrapper').querySelector('.samira_poster_img2');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "sir_mutha_cbse_poster1") {
                var posterImage = video.closest('.videoWrapper').querySelector('.sir_mutha_cbse_poster_img1');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "sir_mutha_cbse_poster2") {
                var posterImage = video.closest('.videoWrapper').querySelector('.sir_mutha_cbse_poster_img2');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "sir_mutha_cbse_poster2") {
                var posterImage = video.closest('.videoWrapper').querySelector('.sir_mutha_cbse_poster_img3');
                posterImage.style.opacity = 1;
            }
            /* Garuda - Cricket Academy */
            else if (videoId == "cricket_poster1") {
                var posterImage = video.closest('.videoWrapper').querySelector('.cricket_poster_img_1');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "cricket_poster2") {
                var posterImage = video.closest('.videoWrapper').querySelector('.cricket_poster_img_2');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "cricket_poster3") {
                var posterImage = video.closest('.videoWrapper').querySelector('.cricket_poster_img_3');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "cricket_poster4") {
                var posterImage = video.closest('.videoWrapper').querySelector('.cricket_poster_img_4');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "cricket_poster5") {
                var posterImage = video.closest('.videoWrapper').querySelector('.cricket_poster_img_5');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "cricket_poster6") {
                var posterImage = video.closest('.videoWrapper').querySelector('.cricket_poster_img_6');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "cricket_poster7") {
                var posterImage = video.closest('.videoWrapper').querySelector('.cricket_poster_img_7');
                posterImage.style.opacity = 1;
            }
            /* Prem Vihar */
            else if (videoId == "anjallee_poster") {
                var posterImage = video.closest('.videoWrapper').querySelector('.anjallee_poster_img');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "premvihar_poster1") {
                var posterImage = video.closest('.videoWrapper').querySelector('.premvihar_poster_img1');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "premvihar_poster2") {
                var posterImage = video.closest('.videoWrapper').querySelector('.premvihar_poster_img2');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "premvihar_poster3") {
                var posterImage = video.closest('.videoWrapper').querySelector('.premvihar_poster_img3');
                posterImage.style.opacity = 1;
            }
            /* Lady Andal IB */
            else if (videoId == "mitchelle_poster") {
                var posterImage = video.closest('.videoWrapper').querySelector('.mitchelle_poster_img');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "shalini_poster") {
                var posterImage = video.closest('.videoWrapper').querySelector('.shalini_poster_img');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "la_ib_poster") {
                var posterImage = video.closest('.videoWrapper').querySelector('.la_ib_poster_img');
                posterImage.style.opacity = 1;
            }
            /* Sir and Lady */
            else if (videoId == "sir_and_lady_poster") {
                var posterImage = video.closest('.videoWrapper').querySelector('.sir_and_lady_poster_img');
                posterImage.style.opacity = 1;
            }
            /* TMSS - Tambaram */
            else if (videoId == "tara-begum-poster") {
                var posterImage = video.closest('.videoWrapper').querySelector('.tara_begum_poster');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "tmss_tambaram_poster1") {
                var posterImage = video.closest('.videoWrapper').querySelector('.tmss_tambaram_poster_img1');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "tmss_tambaram_poster2") {
                var posterImage = video.closest('.videoWrapper').querySelector('.tmss_tambaram_poster_img2');
                posterImage.style.opacity = 1;
            }
            else if (videoId == "tmss_tambaram_poster3") {
                var posterImage = video.closest('.videoWrapper').querySelector('.tmss_tambaram_poster_img3');
                posterImage.style.opacity = 1;
            }
            else {
                var posterImage = video.closest('.videoWrapper').querySelector("." + videoId);
                posterImage.style.opacity = 1;
            }
            // Display the poster image
            posterImage.style.display = 'flex';
        });
    });

    // pause video when clicking outside
    document.body.addEventListener("click", function (event) {
        if (!event.target.closest(".video_sec")) {
            videos.forEach(function (video) {
                video.pause();
            });
        }
    });
    //////////////////////////// Code for Video 2 End  /////////////////////////////////
    const videos2 = document.querySelectorAll(".video2");
    const playIcons2 = document.querySelectorAll(".play-icon2");

    videos2.forEach(function (video) {
        video.pause();

        function togglePlay() {
            if (video.paused || video.ended) {
                video.play();
            } else {
                video.pause();
            }
        }

        playIcons2.forEach(function (icon) {
            icon.addEventListener("click", togglePlay);
        });

        video.addEventListener("playing", function () {

            video.style.position = 'relative';
            video.style.zIndex = 9;
            video.style.opacity = 1;

            playIcons2.forEach(function (icon,) {
                icon.style.opacity = 0;
                var posterImagehide = video.closest('.videoWrapper').querySelector('.end_poster_img');
                posterImagehide.style.opacity = 0;
            });
        });

        video.addEventListener("pause", function () {
            playIcons2.forEach(function (icon) {
                icon.style.opacity = 1;
            });
        });

        video.addEventListener("ended", function () {
            console.log("video ended");
            playIcons2.forEach(function (icon) {
                icon.style.opacity = 1;
            });

            video.style.position = 'relative';
            video.style.zIndex = 999;
            video.style.opacity = 0.0;

            var videoId = video.id;
            console.log(videoId);

            if (videoId == "neelu-poster-img") {
                var posterImage = video.closest('.videoWrapper').querySelector('.neelu_poster_img');
                posterImage.style.opacity = 1;
            }
            if (videoId == "donor-poster-img") {
                var posterImage = video.closest('.videoWrapper').querySelector('.donor_poster_img');
                posterImage.style.opacity = 1;
            }
            else {
                var posterImage = video.closest('.videoWrapper').querySelector("." + videoId);
                posterImage.style.opacity = 1;
            }
            // Display the poster image
            posterImage.style.display = 'flex';
        });
    });

    // pause video when clicking outside
    document.body.addEventListener("click", function (event) {
        if (!event.target.closest(".video_sec2")) {
            videos2.forEach(function (video) {
                video.pause();
            });
        }
    });

    //////////////////////////// Code for Video 3 End  /////////////////////////////////
    const videos3 = document.querySelectorAll(".video3");
    const playIcons3 = document.querySelectorAll(".play-icon3");

    videos3.forEach(function (video) {
        video.pause();

        function togglePlay() {
            if (video.paused || video.ended) {
                video.play();
            } else {
                video.pause();
            }
        }

        playIcons3.forEach(function (icon) {
            icon.addEventListener("click", togglePlay);
        });

        video.addEventListener("playing", function () {

            video.style.position = 'relative';
            video.style.zIndex = 9;
            video.style.opacity = 1;

            playIcons3.forEach(function (icon,) {
                icon.style.opacity = 0;
                var posterImagehide = video.closest('.videoWrapper').querySelector('.end_poster_img');
                posterImagehide.style.opacity = 0;
            });
        });

        video.addEventListener("pause", function () {
            playIcons3.forEach(function (icon) {
                icon.style.opacity = 1;
            });
        });

        video.addEventListener("ended", function () {
            console.log("video ended");
            playIcons3.forEach(function (icon) {
                icon.style.opacity = 1;
            });

            video.style.position = 'relative';
            video.style.zIndex = 999;
            video.style.opacity = 0.0;

            var videoId = video.id;
            console.log(videoId);

            if (videoId == "krithika_poster") {
                var posterImage = video.closest('.videoWrapper').querySelector('.krithika-poster-img');
                posterImage.style.opacity = 1;
            }
            else {
                console.log("Please check video poster");
                var posterImage = video.closest('.videoWrapper').querySelector("." + videoId);
                posterImage.style.opacity = 1;
            }
            // Display the poster image
            posterImage.style.display = 'flex';
        });
    });


    // pause video when clicking outside
    document.body.addEventListener("click", function (event) {
        if (!event.target.closest(".video_sec3")) {
            videos3.forEach(function (video) {
                video.pause();
            });
        }
    });

    //////////////////////////// Video Player Code End  /////////////////////////////////



});

