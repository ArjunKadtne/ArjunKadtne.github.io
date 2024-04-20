document.addEventListener("DOMContentLoaded", function() 
{
    const songListItems = document.querySelectorAll('.song-list li');
    const songTitle = document.querySelector('.song-title');
    const playBtn = document.querySelector('.play-btn');
    const pauseBtn = document.querySelector('.pause-btn');
    function loadSong(songSrc, coverSrc, songName) 
    {
      const audioPlayer = document.querySelector('.audio-player');
      const cover = document.querySelector('.cover');
      audioPlayer.src = songSrc;
      cover.src = coverSrc;
      songTitle.textContent = songName;
      document.querySelector('.music-player').style.display = 'block';
      playBtn.style.display = 'inline-block';
      pauseBtn.style.display = 'none';
    }
    songListItems.forEach(function(item) {
      item.addEventListener('click', function() {
        const songSrc = this.getAttribute('data-src');
        const coverSrc = this.getAttribute('data-cover');
        const songName = this.textContent;
        loadSong(songSrc, coverSrc, songName);
      });
    });

playBtn.addEventListener('click', function() 
{
    const audioPlayer = document.querySelector('.audio-player');
    audioPlayer.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
  });
  
  pauseBtn.addEventListener('click', function() {
    const audioPlayer = document.querySelector('.audio-player');
    audioPlayer.pause();
    playBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
  });
    const progress = document.querySelector('.progress');
    const audioPlayer = document.querySelector('.audio-player');
    audioPlayer.addEventListener('timeupdate', function() {
      const currentTime = audioPlayer.currentTime;
      const duration = audioPlayer.duration;
      const progressPercentage = (currentTime / duration) * 100;
      progress.style.width = progressPercentage + '%';
    });
  });
  