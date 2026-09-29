// config.js: project settings.
//   bpm: measured from the song (beat_grid.py on the vocal/mix): 132.5 BPM; the clip starts on a beat, so offset 0.
//   duration: the length of assets/clip.m4a (see ot_set.js for how it's cut).
//   fastFill / density: cheap stand-ins for p5.brush watercolour fills and a 2/3-resolution paint layer, for rendering
//   on a machine without a GPU (software WebGL). Set fastFill: false, density: 1 on a machine with a GPU.
const PROJECT = { bpm: 132.5, offset: 0, duration: 64.0, fastFill: true, density: .6667, audio: 'assets/clip.m4a' };
