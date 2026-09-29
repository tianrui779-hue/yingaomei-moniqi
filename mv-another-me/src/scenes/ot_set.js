// ot_set.js: the world of 世界上的另一个我: the song grid, the two friends, the split-screen seam, the four cities,
// and the props every shot shares. The shots live in ot_verse.js and ot_chorus.js.

// ---------- song grid (measured: 132.5 BPM, from the separated vocal track; see STORYBOARD.md) ----------
// assets/clip.m4a = the song from 12.684 s (a beat in the whistle intro) through both verses, the pre-chorus and the
// whole chorus, to a fade at 92.14 s.
const SONG = s => s - 12.684;                                  // song time → clip time
// Shot cuts in song seconds, each where its line starts being sung. Shots act in quarters of their own length (Q), so
// the same staging stretches to a long line or squeezes into a short one.
const CUTS = [12.684, 16.20, 19.92, 23.14, 27.16, 28.97, 32.37, 35.92, 40.26,
  43.40, 46.01, 48.59, 51.76, 54.94,
  58.87, 61.84, 63.96, 65.87, 67.58, 74.69, 76.36, 78.32, 80.15, 81.90].map(SONG);
const cutAt = i => CUTS[i];
const at = (i, q) => CUTS[i] + q * ((CUTS[i + 1] ?? DUR) - CUTS[i]) / 4;   // q quarters into shot i
let Q = BEAT;                                                                // a quarter of the shot being drawn
function shotList(first, fns) { shots(fns.map((fn, j) => [CUTS[first + j], (t, lt, dur) => { Q = dur / 4; fn(t, lt, dur); }])); }
// [song onset, song end, text, singer ('g' 郭采洁, 's' 阿肆)]
const LINES = [
  [16.24, 19.96, '上一秒我在台北看烟火', 'g'], [19.96, 23.18, '下一秒你在上海喝Mojito', 'g'], [23.18, 27.20, '你感觉我 就像我感觉你', 'g'], [27.20, 29.01, '世界上的另一个我', 'g'],
  [29.01, 32.41, '上一秒我在柏林落大雨', 's'], [32.41, 35.96, '下一秒你在曼谷天气晴', 's'], [35.96, 40.30, '你感受我 就像我感受你', 's'], [40.30, 43.44, '世界上的另一个我', 's'],
  [43.44, 46.05, '人生到处是假正经', 'g'], [46.05, 48.63, '变幻莫测捕风捉影', 's'], [48.63, 51.80, '有几个陪我等雨停', 's'], [51.80, 54.98, '难得真性情', 'g'], [54.98, 58.91, '天高海阔我的渊明 谁倾听', 's'],
  [58.91, 62.67, '岁月为我大浪淘沙', 'g'], [62.67, 64.00, '而你被留下', 'g'], [64.00, 66.29, '我的世界流转变化', 'g'], [66.29, 67.62, '你却没时差', 'g'], [67.62, 72.50, '啦啦啦啦 我亲爱的你呀', 'g'],
  [74.73, 77.04, '岁月待我晴雨交加', 's'], [77.04, 78.36, '而你被孵化', 's'], [78.36, 80.19, '我的心事纷乱复杂', 's'], [80.19, 81.94, '你却能解码', 's'], [81.94, 88.40, '啦啦啦啦 我亲爱的你呀', 's'],
];
// the four 啦 notes of each 啦啦啦啦, and where 我亲爱的你呀 starts (clip time)
const LA_G = [67.62, 68.20, 68.80, 69.30].map(SONG), YA_G = SONG(70.09);
const LA_S = [81.94, 82.60, 83.30, 83.80].map(SONG), YA_S = SONG(84.50);

// ---------- the two friends ----------
// 采: rosy, a white flower on her head. 肆: butter yellow, a teal beanie. Mood tints are dropped so both stay on model.
const CAI = { col: '#EE9AAE', dk: '#C0637B', lt: '#FBD0DA' };
const SI = { col: '#F2CC6B', dk: '#C29436', lt: '#FBE6AE' };
function cai(x, y, u, o = {}) { clawd(x, y, u, { ...o, ...CAI, tint: null, hat: o.hat === undefined ? 'flower' : o.hat }); }
function si(x, y, u, o = {}) { clawd(x, y, u, { ...o, ...SI, tint: null, hat: o.hat === undefined ? 'beanie' : o.hat }); }
// Inside an armL/armR hook: undo the arm's angle so a held prop hangs upright.
const upright = a => rotate(a);

// ---------- regions (split screen) ----------
const reg = (x0, x1) => ({ x0, x1, cx: (x0 + x1) / 2, w: x1 - x0 });
const FULL = reg(-400, W + 400), LEFT = reg(-400, W / 2 + 6), RIGHT = reg(W / 2 - 6, W + 400);
const SEAM_X = W / 2;

// Flat sky with a soft horizon glow, confined to a region.
function skyIn(R, top, horizon, t, key = 'sky', hy = 760) {
  boilSeed(key);
  paint(rectPts(R.x0, -600, R.w, 2200), { wash: top, ink: null });
  paint(ellPts(R.cx, hy, R.w * (R.w < W ? .45 : .62), 300, 30, 8), { fill: horizon, fillOp: 170, bleed: .3, ink: null });
}
function starsIn(R, t, n = 30, key = 'st') {
  for (let i = 0; i < n; i++) {
    boilSeed(key + i);
    const x = R.x0 + 60 + hash(i * 3.1) * (R.w - 120), y = 40 + hash(i * 7.7) * 520, tw = .55 + .45 * Math.sin(t * (1.4 + 2 * hash(i + 9)) + i);
    paint(starPts(x, y, (3 + 5 * hash(i + 3)) * tw, .35, 4), { wash: PAL.cream, washOp: 120 + 120 * tw, ink: null });
  }
}
// A row of flat buildings along gy, some windows lit.
function skyline(R, gy, col, win, seed, hMin = 90, hMax = 260, lit = .6) {
  let x = R.x0 + (R.x0 > 0 ? 20 : -40), i = 0;
  while (x < R.x1 && i < 40) {
    boilSeed('bld' + seed + i);
    const w = 70 + 80 * hash(seed + i * 1.3), h = hMin + (hMax - hMin) * hash(seed + i * 2.9);
    paint(rectPts(x, gy - h, w, h + 40, 1.2), { wash: col, ink: PAL.ink, sw: .5 });
    for (let r = 0; r < Math.floor(h / 46); r++) for (let c = 0; c < Math.floor(w / 34); c++) {
      if (hash(seed * 7 + i * 13 + r * 5 + c) < lit) paint(rectPts(x + 12 + c * 34, gy - h + 16 + r * 46, 14, 20), { wash: win, washOp: 220, ink: null });
    }
    x += w + 6; i++;
  }
}
// The seam between "我" and "你": a torn strip of paper with inked edges. k (0..1) draws it top to bottom; peel (0..1)
// curls it away from the top.
function seam(t, k = 1, peel = 0, x = SEAM_X) {
  if (k <= .01) return;
  boilSeed('seam');
  const y1 = lerp(-40, H + 40, ease(k)), y0 = lerp(-40, H + 40, ease(peel));
  if (y1 - y0 < 4) return;
  const L = [], R = [], n = 26;
  for (let i = 0; i <= n; i++) {
    const y = lerp(y0, y1, i / n), tear = 7 * Math.sin(y * .09) + 5 * Math.sin(y * .23 + 1);
    L.push([x - 13 + tear + jit(1.5), y]); R.push([x + 13 + tear * .6 + jit(1.5), y]);
  }
  paint(L.concat(R.reverse()), { wash: PAL.cream, fill: '#E9DCC4', fillOp: 120, tex: .6, ink: PAL.ink, sw: 1 });
  if (peel > .01 && peel < .99) {   // the curl at the torn top
    const cy = y0;
    paint(ellPts(x + 20, cy + 14, 30, 16, 16, 1, -.4), { wash: '#E9DCC4', ink: PAL.ink, sw: .8 });
  }
}

// ---------- landmarks (flat silhouettes, painted) ----------
// Taipei 101: eight flared "bamboo" segments on a podium, a spire. (x, gy) = base centre on the ground; s = scale.
function taipei101(x, gy, s, col, win, t) {
  boilSeed('t101');
  const dk = mixCol(col, PAL.ink, .3);
  paint(rectPts(x - 1.1 * s, gy - 1.6 * s, 2.2 * s, 1.6 * s + 60), { wash: dk, ink: PAL.ink, sw: .7 });
  let y = gy - 1.6 * s;
  for (let i = 0; i < 8; i++) {
    const h = 1.05 * s, b = .55 * s, tp = .74 * s;
    paint([[x - b, y], [x + b, y], [x + tp, y - h], [x - tp, y - h]], { wash: col, ink: PAL.ink, sw: .7 });
    paint([[x - tp, y - h], [x + tp, y - h], [x + tp, y - h + .12 * s], [x - tp, y - h + .12 * s]], { wash: dk, ink: null });
    for (let c = -1; c <= 1; c++) if (hash(i * 5 + c) < .7) paint(rectPts(x + c * .3 * s - .08 * s, y - .7 * s, .16 * s, .32 * s), { wash: win, washOp: 230, ink: null });
    y -= h;
  }
  paint(rectPts(x - .45 * s, y - .9 * s, .9 * s, .9 * s), { wash: col, ink: PAL.ink, sw: .7 });
  paint(rectPts(x - .3 * s, y - 1.5 * s, .6 * s, .6 * s), { wash: dk, ink: PAL.ink, sw: .7 });
  inkLine([[x, y - 1.5 * s], [x, y - 3.2 * s]], 1.4, dk, 'ink', 0);
  glow(x, y - 3.2 * s, 18, '#FF8A8A', .6 + .4 * Math.sin(t * 5));
}
// Oriental Pearl Tower: tripod legs, a big pink pearl, a column, a small pearl, a spire.
function pearlTower(x, gy, s, col, pearl) {
  boilSeed('pearl');
  for (const k of [-1, 0, 1]) paint([[x + k * 1.1 * s - .12 * s, gy], [x + k * 1.1 * s + .12 * s, gy], [x + k * .25 * s + .1 * s, gy - 3.4 * s], [x + k * .25 * s - .1 * s, gy - 3.4 * s]], { wash: col, ink: PAL.ink, sw: .6 });
  for (const k of [-1, 1]) paint(rectPts(x + k * .3 * s - .1 * s, gy - 8.2 * s, .2 * s, 4.8 * s), { wash: col, ink: PAL.ink, sw: .6 });
  paint(ellPts(x, gy - 3.9 * s, 1.15 * s, 1.1 * s, 26), { wash: pearl, ink: PAL.ink, sw: .8 });
  paint(ellPts(x - .35 * s, gy - 4.3 * s, .35 * s, .28 * s, 12), { wash: mixCol(pearl, PAL.cream, .5), ink: null });
  paint(ellPts(x, gy - 8.6 * s, .7 * s, .66 * s, 22), { wash: pearl, ink: PAL.ink, sw: .8 });
  paint(rectPts(x - .08 * s, gy - 11 * s, .16 * s, 1.8 * s), { wash: col, ink: PAL.ink, sw: .5 });
  paint(ellPts(x, gy - 10.3 * s, .25 * s, .25 * s, 12), { wash: pearl, ink: PAL.ink, sw: .5 });
}
// Berlin TV tower: a thin shaft, the steel sphere, a red-and-white antenna.
function tvTower(x, gy, s, col) {
  boilSeed('tvtower');
  paint([[x - .3 * s, gy], [x + .3 * s, gy], [x + .18 * s, gy - 8 * s], [x - .18 * s, gy - 8 * s]], { wash: col, ink: PAL.ink, sw: .6 });
  paint(ellPts(x, gy - 8.4 * s, 1 * s, .95 * s, 26), { wash: mixCol(col, PAL.cream, .3), ink: PAL.ink, sw: .8 });
  paint(rectPts(x - 1 * s, gy - 8.5 * s, 2 * s, .18 * s), { wash: mixCol(col, PAL.ink, .3), ink: null });
  for (let i = 0; i < 5; i++) paint(rectPts(x - .08 * s, gy - 9.4 * s - i * .55 * s - .55 * s, .16 * s, .55 * s), { wash: i % 2 ? PAL.cream : '#C8453A', ink: null });
}
// Thai temple: a platform, red tiered roofs with gold trim and chofa hooks, a gold spire.
function temple(x, gy, s, t) {
  boilSeed('temple');
  const red = '#C4453A', gold = '#E8AA38', wall = '#F3E3C4';
  paint(rectPts(x - 3.4 * s, gy - .6 * s, 6.8 * s, .6 * s + 60), { wash: '#D9C29A', ink: PAL.ink, sw: .7 });
  paint(rectPts(x - 2.6 * s, gy - 2.6 * s, 5.2 * s, 2 * s), { wash: wall, ink: PAL.ink, sw: .7 });
  for (let i = -2; i <= 2; i++) paint(rectPts(x + i * 1.1 * s - .12 * s, gy - 2.6 * s, .24 * s, 2 * s), { wash: gold, ink: null });
  paint(rrPts(x - .45 * s, gy - 1.9 * s, .9 * s, 1.3 * s, .4 * s), { wash: '#7A3A2E', ink: PAL.ink, sw: .6 });
  const tier = (y, hw, h) => {
    paint([[x - hw, y], [x + hw, y], [x + hw * .45, y - h], [x - hw * .45, y - h]], { wash: red, ink: PAL.ink, sw: .8 });
    inkLine([[x - hw, y], [x + hw, y]], 2.2, gold, 'ink', 0);
    for (const k of [-1, 1]) inkLine([[x + k * hw, y], [x + k * (hw + .25 * s), y - .45 * s], [x + k * (hw + .1 * s), y - .65 * s]], 2, gold, 'ink', .6);
  };
  tier(gy - 2.6 * s, 3.4 * s, 1.3 * s); tier(gy - 3.6 * s, 2.5 * s, 1.1 * s); tier(gy - 4.5 * s, 1.6 * s, .9 * s);
  paint([[x - .45 * s, gy - 5.3 * s], [x + .45 * s, gy - 5.3 * s], [x + .1 * s, gy - 7.6 * s], [x - .1 * s, gy - 7.6 * s]], { wash: gold, ink: PAL.ink, sw: .7 });
  glow(x, gy - 7 * s, 60, '#FFE08A', .5 + .3 * Math.sin(t * 4));
}
function palm(x, gy, s, t, key = 'palm') {
  boilSeed(key);
  const sway = Math.sin(t * 1.6) * .15 * s;
  const top = [x + .9 * s + sway, gy - 5.2 * s];
  paint(ribbon([[x, gy], [x + .5 * s, gy - 2.6 * s], top], .5 * s, .3 * s), { wash: '#9A6B45', ink: PAL.ink, sw: .7 });
  for (let i = 0; i < 6; i++) {
    const a = -Math.PI / 2 + (i - 2.5) * .55 + .08 * Math.sin(t * 2 + i), L = 2.2 * s;
    const mid = [top[0] + Math.cos(a) * L * .55, top[1] + Math.sin(a) * L * .55 - .4 * s], end = [top[0] + Math.cos(a) * L, top[1] + Math.sin(a) * L + .6 * s];
    paint(ribbon([top, mid, end], .5 * s, .05 * s), { wash: '#4E9A5A', ink: PAL.ink, sw: .6 });
  }
}

// ---------- props ----------
// A Mojito: a tall tumbler with mint, lime and a straw. (x, y) = the bottom centre; s = height/4.
function mojito(x, y, s, o = {}) {
  boilSeed(o.key || 'mojito');
  const lv = o.level ?? .8, gw = 1.1 * s, gh = 3.4 * s;
  inkLine([[x + .3 * s, y - gh * lv], [x + .55 * s, y - gh - .9 * s], [x + .95 * s, y - gh - 1.1 * s]], .9, '#D8394E', 'ink', .3);   // straw
  paint([[x - gw, y - gh], [x + gw, y - gh], [x + gw * .85, y], [x - gw * .85, y]], { wash: '#D7EEDF', washOp: 170, ink: null });
  paint([[x - gw * .96, y - gh * lv], [x + gw * .96, y - gh * lv], [x + gw * .85, y], [x - gw * .85, y]], { wash: '#A9D8A0', washOp: 210, ink: null });
  for (let i = 0; i < 3; i++) paint(ellPts(x + (i - 1) * .55 * s, y - gh * lv * (.3 + .25 * (i % 2)), .38 * s, .2 * s, 10, 0, .5 * i), { wash: '#3F8A4A', ink: null });
  paint(ellPts(x - .5 * s, y - gh * lv - .05 * s, .45 * s, .45 * s, 12), { wash: '#C7E07A', ink: PAL.ink, sw: .5 });   // lime wheel on the rim
  paint([[x - gw, y - gh], [x + gw, y - gh], [x + gw * .85, y], [x - gw * .85, y]], { ink: PAL.ink, sw: .8 });
  inkLine([[x - gw * .6, y - gh * .85], [x - gw * .5, y - gh * .25]], .7, PAL.cream, 'inkfine', 0);
}
// An umbrella, (x, y) = where the hand holds the handle. open 0..1 (furled → open), inv 0..1 (blown inside out).
function umbrella(x, y, s, open = 1, inv = 0, col = '#D8394E', o = {}) {
  boilSeed(o.key || 'umb');
  const top = y - 3.4 * s, wOpen = lerp(.3, 2.6, ease(open)) * s, hBow = lerp(1.6, -1.2, ease(inv)) * s * lerp(.3, 1, ease(open));
  inkLine([[x, y], [x, top]], 1.6, PAL.ink, 'ink', 0);
  inkLine([[x, y], [x, y + .35 * s], [x - .3 * s, y + .45 * s], [x - .45 * s, y + .25 * s]], 1.6, PAL.ink, 'ink', .6);
  const P = [];
  for (let i = 0; i <= 12; i++) { const k = i / 12, a = Math.PI + k * Math.PI; P.push([x + Math.cos(a) * wOpen, top + .6 * s + Math.sin(a) * hBow]); }
  for (let i = 5; i >= 1; i--) { const k = i / 6, px = x - wOpen + k * 2 * wOpen, sc = Math.sin(k * Math.PI * 6) * .1 * s; P.push([px, top + .6 * s - Math.abs(sc) * (1 - inv)]); }
  paint(P, { wash: col, ink: PAL.ink, sw: .9 });
  for (const k of [-.5, 0, .5]) inkLine([[x, top + .6 * s - hBow], [x + k * wOpen, top + .6 * s]], .6, mixCol(col, PAL.ink, .35), 'inkfine', .3);
  paint(ellPts(x, top + .6 * s - hBow - .15 * s, .18 * s, .18 * s, 8), { wash: PAL.ink, ink: null });
}
// The sun with a face; rays turn slowly. k = 0..1 pop.
function sunFace(x, y, r, t, k = 1, o = {}) {
  if (k <= .01) return;
  boilSeed(o.key || 'sun');
  const rr = r * backOut(k);
  glow(x, y, rr * 3, '#FFD96A', .7);
  push(); translate(x, y); rotate(t * .4);
  for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; paint([[Math.cos(a - .12) * rr * 1.15, Math.sin(a - .12) * rr * 1.15], [Math.cos(a) * rr * 1.65, Math.sin(a) * rr * 1.65], [Math.cos(a + .12) * rr * 1.15, Math.sin(a + .12) * rr * 1.15]], { wash: '#F4B63A', ink: PAL.ink, sw: .6 }); }
  pop();
  paint(ellPts(x, y, rr, rr, 28), { wash: '#FFD45A', fill: '#F4A63A', fillOp: 90, ink: PAL.ink, sw: .9 });
  if (o.face !== false) {
    const e = rr * .16;
    for (const s of [-1, 1]) inkLine([[x + s * e * 2.2 - e * .7, y - e * .2], [x + s * e * 2.2, y - e * .9], [x + s * e * 2.2 + e * .7, y - e * .2]], clamp(rr / 50, .6, 1.4), PAL.ink, 'ink', .6);
    inkLine([[x - e * 1.4, y + e * 1.2], [x, y + e * 2.4], [x + e * 1.4, y + e * 1.2]], clamp(rr / 50, .6, 1.4), PAL.ink, 'ink', .6);
    for (const s of [-1, 1]) paint(ellPts(x + s * e * 3.4, y + e * 1.1, e * .8, e * .45, 10), { wash: '#F08A6A', washOp: 180, ink: null });
  }
}
// A lumpy grey rain cloud (one outline).
function lumpCloud(cx, cy, rx, ry, seed, n = 24) {
  const p = []; for (let k = 0; k < n; k++) { const a = k / n * TAU, w = 1 + .14 * Math.sin(a * 5 + seed) + .07 * Math.sin(a * 9 + seed * 2); p.push([cx + Math.cos(a) * rx * w, cy + Math.sin(a) * ry * w]); }
  return p;
}
// Rain: streaks falling through region R at density k (0..1). Stable per streak (hash), pure in t.
function rainIn(R, t, k = 1, col = '#DCE6F2', key = 'rain', top = -100, bot = 1000) {
  const n = Math.round(70 * k * R.w / W);
  for (let i = 0; i < n; i++) {
    boilSeed(key + i);
    const sp = 1300 + 400 * hash(i + 3), span = bot - top, y = top + ((hash(i * 1.7) * span + t * sp) % span), x = R.x0 + hash(i * 3.3) * R.w - 60 * (y - top) / span;
    inkLine([[x, y], [x - 14, y + 70]], .8, col, 'inkfine', 0);
  }
}
// A firework: a rocket climbs from (x0, gy) to (x, y) over `climb` s, bursts at t0 into n streaks; fades by t0 + life.
function firework(t, t0, x, y, col, o = {}) {
  const climb = o.climb ?? .45, life = o.life ?? 1.5, r = o.r ?? 230, n = o.n ?? 16, x0 = o.x0 ?? x - 40, gy = o.gy ?? 900;
  const age = t - t0;
  boilSeed('fw' + (o.key ?? t0));
  if (age < 0 && age > -climb) {   // the rocket
    const k = easeOut(1 + age / climb), px = lerp(x0, x, k), py = lerp(gy, y, k);
    inkLine([[px, py], [lerp(x0, x, k * .8), lerp(gy, y, k * .8) + 30]], 1.2, '#FFE3A0', 'inkfine', 0);
    glow(px, py, 26, '#FFD27A', .9);
    return;
  }
  if (age < 0 || age > life) return;
  const q = age / life, fade = 1 - easeIn(q), R = r * easeOut(clamp(age / .55)), drop = 90 * age * age;
  if (age < .35) glow(x, y, r * 1.3 * (1 - age / .35), col, 1);
  glow(x, y + drop * .5, R * 1.1, col, .45 * fade);
  const pts = o.heart ? heartPts(0, 0, 1, n) : null;
  for (let i = 0; i < n; i++) {
    let dx, dy;
    if (pts) { dx = pts[i][0]; dy = pts[i][1]; } else { const a = i / n * TAU + (o.rot || 0); dx = Math.cos(a); dy = Math.sin(a); }
    const tip = [x + dx * R, y + dy * R + drop], tk = o.heart ? .9 : .62, tail = [x + dx * R * tk, y + dy * R * tk + drop * .6];
    paint(ribbon([tail, tip], 1, 7 * fade + 1), { wash: col, washOp: 255 * fade, ink: null });
    const d = (o.heart ? 11 : 7) * fade + 2;
    paint(ellPts(tip[0], tip[1], d, d, 8), { wash: o.heart ? col : PAL.cream, washOp: 255 * fade, ink: null });
  }
}
// A wall clock. h, m = hand angles in turns (0 = twelve). ring 0..1 = the "ding" wobble.
function wallClock(x, y, r, h, m, ring = 0, col = '#F3E3C4', key = 'clk') {
  boilSeed(key);
  push(); translate(x, y); rotate(ring * .18 * Math.sin(T * 60));
  paint(ellPts(0, 0, r * 1.12, r * 1.12, 28), { wash: '#8A5E48', ink: PAL.ink, sw: 1 });
  paint(ellPts(0, 0, r, r, 28), { wash: col, ink: PAL.ink, sw: .8 });
  for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; inkLine([[Math.sin(a) * r * .78, -Math.cos(a) * r * .78], [Math.sin(a) * r * .9, -Math.cos(a) * r * .9]], i % 3 ? .6 : 1.3, PAL.ink, 'inkfine', 0); }
  inkLine([[0, 0], [Math.sin(h * TAU) * r * .5, -Math.cos(h * TAU) * r * .5]], 2.2, PAL.ink, 'ink', 0);
  inkLine([[0, 0], [Math.sin(m * TAU) * r * .78, -Math.cos(m * TAU) * r * .78]], 1.4, PAL.ink, 'ink', 0);
  paint(ellPts(0, 0, r * .08, r * .08, 8), { wash: '#D8394E', ink: null });
  pop();
}
// A rooftop parapet across region R: the floor is at y; the ledge sits behind it.
function rooftop(R, y, col, key = 'roof') {
  boilSeed(key);
  paint(rectPts(R.x0, y - 70, R.w, 40), { wash: mixCol(col, PAL.cream, .15), ink: PAL.ink, sw: .8 });
  paint(rectPts(R.x0, y - 32, R.w, 800), { wash: col, fill: mixCol(col, PAL.ink, .3), fillOp: 80, tex: .5, ink: PAL.ink, sw: .8 });
  for (let i = 0; i < 12; i++) { const x = R.x0 + i * 170; if (x > R.x1) break; inkLine([[x, y - 30], [x - 50, y + 200]], .5, mixCol(col, PAL.ink, .4), 'inkfine', 0); }
}
// A string of party lights across region R (sags between the ends), bulbs twinkle on the beat.
function partyLights(R, y, t, key = 'lights') {
  boilSeed(key);
  const P = []; for (let i = 0; i <= 10; i++) { const k = i / 10; P.push([lerp(R.x0 + 60, R.x1 - 60, k), y + 70 * Math.sin(k * Math.PI)]); }
  inkLine(P, .8, PAL.ink, 'inkfine', .5);
  for (let i = 1; i < 10; i++) {
    const c = ['#F4B63A', '#E27A92', '#8EC3E6'][i % 3], on = .5 + .5 * pulse(t + i * BEAT * .25, 3);
    glow(P[i][0], P[i][1] + 14, 40 * on, c, .8);
    paint(ellPts(P[i][0], P[i][1] + 14, 8, 10, 10), { wash: c, ink: PAL.ink, sw: .4 });
  }
}
// Whip pan: horizontal smear streaks across the frame, p 0..1 (peaks at .5). Cut under the peak.
function whipPan(p, cols = ['#2F3C7A', '#E9A08C'], dir = 1) {
  if (p <= 0 || p >= 1) return;
  const k = Math.sin(p * Math.PI);
  for (let i = 0; i < 16; i++) {
    boilSeed('whip' + i);
    const y = i * 72 - 20 + 20 * hash(i), len = W * (.4 + .9 * k), x = dir > 0 ? lerp(-len, W, p) + 300 * hash(i + 2) - 150 : lerp(W, -len, p);
    paint(ribbon([[x, y], [x + len * .5, y + 6], [x + len, y]], 20, 90 * k + 20), { wash: cols[i % 2], washOp: 255 * clamp(k * 1.6), ink: null });
  }
}
