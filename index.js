let timeText = document.getElementById("time");

function getTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  timeText.innerText = hours + ":" + minutes + ":" + seconds;
}

getTime();
setInterval(getTime, 1000);
