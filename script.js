function loadStream(videoId, streamerName, gameTitle, viewers) {
  const iframe = document.getElementById("youtube-player");
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  document.querySelector('.stream-info h2').innerText = `${streamerName} - ${gameTitle}`;
  document.querySelector('.stream-info p').innerText = `👥 ${viewers.toLocaleString()} viewers`;

  document.querySelector('.description').innerText =
    `Welcome to ${streamerName}'s live stream of ${gameTitle}! Enjoy the gameplay, drop a comment, and show some support!`;
}
