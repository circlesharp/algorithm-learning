const _ = require('underscore');

const curry2 = fun =>
  secondArg =>
    firstArg =>
      fun(firstArg, secondArg);

const plays = [
  {artist: "Burial", track: "Archangel"},
  {artist: "Ben Frost", track: "Stomp"},
  {artist: "Ben Frost", track: "Stomp"},
  {artist: "Burial", track: "Archangel"},
  {artist: "Emeralds", track: "Snores"},
  {artist: "Burial", track: "Archangel"},
];

console.log(
  _.countBy(plays, song => `${song.artist}-${song.track}`),
);

const songToString = song =>
  `${song.artist}-${song.track}`;

/* effectively stating “to implement songCount, countBy songToString.” */
const songCount = curry2(_.countBy)(songToString);

console.log(
  songCount(plays),
);

/* currying 3 params */
const curry3 = fun =>
  last =>
    middle =>
      first =>
        fun(first, middle, last);

/**
 * _.uniq = function(array, isSorted, iteratee, context)...
 * 
 * Produce a duplicate-free version of the array.
 * If the array has already been sorted,
 * you have the option of using a faster algorithm.
 */

const songsPlayed = curry3(_.uniq)(songToString)(false);

console.log(
  songsPlayed(plays),
);

const toHex = n => {
  const hex = n.toString(16);
  return hex.length < 2 ? 0 + hex : hex;
};

const rgbToHexString = (r, g, b) =>
  `#${toHex(r)}${toHex(g)}${toHex(b)}`;

const blueGreenish = curry3(rgbToHexString)(255)(200);

console.log(
  rgbToHexString(0, 200, 255),
  blueGreenish(0),
);
