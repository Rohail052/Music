'use strict';

const musicData = [
  {
    backgroundImage: "Izhaar.jpeg",
    posterUrl: "Izhaar.jpeg",
    title: "Izhaar",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 1 - Izhaar.mp3",
  },

  {
    backgroundImage: "Raaz-E-Ulfat.jpeg",
    posterUrl: "Raaz-E-Ulfat.jpeg",
    title: "Raaz-E-Ulfat",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 2  - Raaz-E-Ulfat (Original Score).mp3",
  },
  {
    backgroundImage: ".Chhad Gayi.jpeg",
    posterUrl: "Chhad Gayi.jpeg",
    title: "Chhad Gayi",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 3  - Chhad Gayi - DJ Hardik Remix.mp3",
  },
  {
    backgroundImage: "Safar.jpeg",
    posterUrl: "Safar.jpeg",
    title: "Safar",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 4 - Safar.mp3",
  },
  {
    backgroundImage: "Dard Kam Nahi Hota.jpeg",
    posterUrl: "Dard Kam Nahi Hota.jpeg",
    title: "Dard Kam Nahi Hota",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 5 - Dard Kam Nahi Hota.mp3",
  },
  {
    backgroundImage: "Down to Earth.jpeg",
    posterUrl: "Down to Earth.jpeg",
    title: "Down to Earth",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 6- Down to Earth.mp3",
  },
  {
    backgroundImage: "Pehla Valentine.jpeg",
    posterUrl: "Pehla Valentine.jpeg",
    title: "Pehla Valentine",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 7  - Pehla Valentine.mp3",
  },
  {
    backgroundImage: "Koi Si.jpeg",
    posterUrl: "Koi Si.jpeg",
    title: "Koi Si",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 8 - Koi Si.mp3",
  },
  {
    backgroundImage: "Channa - Love is Life.jpeg",
    posterUrl: "Channa - Love is Life.jpeg",
    title: "Channa - Love is Life",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 9  - Channa - Love is Life.mp3",
  },
  {
    backgroundImage: "GIFT.jpeg",
    posterUrl: "GIFT.jpeg",
    title: "GIFT",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 10  - GIFT.mp3",
  },
  {
    backgroundImage: "Ishqan De Rog.jpeg",
    posterUrl: "Ishqan De Rog.jpeg",
    title: "Ishqan De Rog",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 11  - Ishqan De Rog.mp3",
  },
  {
    backgroundImage: "Everybody Hurts.jpeg",
    posterUrl: "Everybody Hurts.jpeg",
    title: "Everybody Hurts",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 12  - Everybody Hurts.mp3",
  },
  {
    backgroundImage: "Everybody Hurts.jpeg",
    posterUrl: "Everybody Hurts.jpeg",
    title: "Love Sick",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 1 3 - Love Sick.mp3",
  },
  {
    backgroundImage: "So High.jpeg",
    posterUrl: "So High.jpeg",
    title: "So High",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 14 - So High.mp3",
  },
  {
    backgroundImage: "Parindey.jpeg",
    posterUrl: "Parindey.jpeg",
    title: "Parindey",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 15- Parindey.mp3",
  },
  {
    backgroundImage: "90-90 Nabbe Nabbe.jpeg",
    posterUrl: "90-90 Nabbe Nabbe.jpeg",
    title: "90-90 Nabbe Nabbe",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 16- 90-90 Nabbe Nabbe.mp3",
  },
  {
    backgroundImage: "Impress.jpeg",
    posterUrl: "Impress.jpeg",
    title: "Impress",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 17 - Impress.mp3",
  },
  {
    backgroundImage: "Kamlee.jpeg",
    posterUrl: "Kamlee.jpeg",
    title: "Kamlee",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 18- Kamlee.mp3",
  },
  {
    backgroundImage: "Bulleya.jpeg",
    posterUrl: "Bulleya.jpeg",
    title: "Bulleya",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "Punjabi 19- Bulleya.mp3",
  },
  {
    backgroundImage: "jubin nautiyal.jpeg",
    posterUrl: "jubin nautiyal.jpeg",
    title: "Jubin Nautiyal",
    album: "Chaudhry",
    year: 2022,
    artist: "Rashid",
    musicPath: "videoplayback.mp3",
  },
  // ... other music data
];

const addEventOnElements = (elements, eventType, callback) => {
  elements.forEach(element => element.addEventListener(eventType, callback));
}

const playlist = document.querySelector("[data-music-list]");

musicData.forEach((music, index) => {
  playlist.innerHTML += `
    <li>
      <button class="music-item ${index === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${index}">
        <img src="${music.posterUrl}" width="800" height="800" alt="${music.title} Album Poster" class="img-cover">
        <div class="item-icon">
          <span class="material-symbols-rounded">equalizer</span>
        </div>
      </button>
    </li>
  `;
});

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = () => {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);

const playlistItems = document.querySelectorAll("[data-playlist-item]");
let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = () => {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
  changePlayerInfo();
});

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = () => {
  const music = musicData[currentMusic];
  playerBanner.src = music.posterUrl;
  playerBanner.alt = `${music.title} Album Poster`;
  document.body.style.backgroundImage = `url(${music.backgroundImage})`;
  playerTitle.textContent = music.title;
  playerAlbum.textContent = music.album;
  playerYear.textContent = music.year;
  playerArtist.textContent = music.artist;
  audioSource.src = music.musicPath;
  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

const getTimecode = duration => {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

const updateDuration = () => {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);

const playBtn = document.querySelector("[data-play-btn]");
let playInterval;

const playMusic = () => {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);

const playerRunningTime = document.querySelector("[data-running-time]");

const updateRunningTime = () => {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);
  updateRangeFill();
  isMusicEnd();
}

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = () => {
  ranges.forEach(range => {
    const rangeValue = (range.value / range.max) * 100;
    range.nextElementSibling.style.width = `${rangeValue}%`;
  });
}

addEventOnElements(ranges, "input", updateRangeFill);

const seek = () => {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);
}

playerSeekRange.addEventListener("input", seek);

const skipNext = document.querySelector("[data-skip-next]");
const skipPrev = document.querySelector("[data-skip-prev]");

skipNext.addEventListener("click", () => {
  lastPlayedMusic = currentMusic;
  currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  changePlaylistItem();
  changePlayerInfo();
});

skipPrev.addEventListener("click", () => {
  lastPlayedMusic = currentMusic;
  currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  changePlaylistItem();
  changePlayerInfo();
});

const playerVolumeRange = document.querySelector("[data-volume]");
const volumeBtn = document.querySelector("[data-volume-btn]");

playerVolumeRange.addEventListener("input", () => {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;
  volumeBtn.children[0].textContent = "volume_up";
}, false);

volumeBtn.addEventListener("click", () => {
  audioSource.muted = !audioSource.muted;
  volumeBtn.children[0].textContent = audioSource.muted ? "volume_off" : "volume_up";
});

const shuffleBtn = document.querySelector("[data-shuffle]");
const repeatBtn = document.querySelector("[data-repeat]");

shuffleBtn.addEventListener("click", () => shuffleBtn.classList.toggle("active"));
repeatBtn.addEventListener("click", () => repeatBtn.classList.toggle("active"));

const isMusicEnd = () => {
  if (audioSource.ended) {
    if (repeatBtn.classList.contains("active")) {
      playMusic();
    } else if (shuffleBtn.classList.contains("active")) {
      let rand = Number((Math.random() * (musicData.length - 1)).toFixed());
      lastPlayedMusic = currentMusic;
      currentMusic = rand;
      changePlaylistItem();
      changePlayerInfo();
    } else {
      skipNext.click();
    }
  }
}

audioSource.addEventListener("ended", isMusicEnd);

window.addEventListener("load", changePlayerInfo);
