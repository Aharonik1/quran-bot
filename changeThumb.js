const NodeID3 = require("node-id3");

for (let index = 1; index <= 114; index++) {
  if (index > 0 && index < 10) {
    let text = NodeID3.read(`./audio/afs/00${index}.mp3`);
    const tags = {
      comment: { text: "@quron_quran_koran_bot" },
      image: {},
      title: `${text.title} @quron_quran_koran_bot`,
    };

    NodeID3.update(tags, `./audio/afs/00${index}.mp3`);
  } else if (index > 9 && index < 100) {
    let text = NodeID3.read(`./audio/afs/0${index}.mp3`);
    const tags = {
      comment: { text: "@quron_quran_koran_bot" },
      image: {},
      title: `${text.title} @quron_quran_koran_bot`,
    };

    NodeID3.update(tags, `./audio/afs/0${index}.mp3`);
  } else if (index > 99 && index <= 114) {
    let text = NodeID3.read(`./audio/afs/${index}.mp3`);
    const tags = {
      comment: { text: "@quron_quran_koran_bot" },
      image: {},
      title: `${text.title} @quron_quran_koran_bot`,
    };

    NodeID3.update(tags, `./audio/afs/${index}.mp3`);
  }
}

// text = NodeID3.read("./audio/afs/001.mp3");
// console.log(text);
