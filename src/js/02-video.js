import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

player.getVideoTitle();

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds);
}

player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_KEY) ?? 0);
