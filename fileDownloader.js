const Downloader = require("node-url-downloader");

for (let index = 40; index <= 100; index++) {
  const download = new Downloader();
  if (index >= 90 && index < 100) {
    download.get(`https://server8.mp3quran.net/afs/0${index}.mp3`);
  }
}
