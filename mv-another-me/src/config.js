// config.js: project settings. See STORYBOARD.md for the song grid.
//   bpm/offset: ASSUMED grid (92 BPM, first sung bar at 1 bar in) until the song file is measured with
//   scripts/beat_grid.py; every shot is keyed to bars and beats, so changing these re-times the whole video.
//   duration: 22 bars (intro + 20 lyric bars + outro) + a 1 s hold.
//   fastFill: cheap stand-in for p5.brush watercolour fills (this machine renders WebGL in software).
const PROJECT = { bpm: 92, offset: 0, fastFill: true, density: .6667 };
PROJECT.duration = 22 * 4 * 60 / PROJECT.bpm + 1;
