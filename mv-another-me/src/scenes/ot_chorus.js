// ot_chorus.js: bars 9–21. Chorus, 郭's half (beach, seasons, clocks, dance) then 肆's half (sun/rain, egg,
// tangle, decode), and the finale back on the Taipei roof, together. b = quarters of the shot (Q = its length / 4); the 啦 shots use the measured note times.
(() => {
  const GY = 900;
  const beats = lt => lt / Q;
  const glassIn = (a, level) => (uu, sw) => { upright(a); mojito(.4 * uu, 2.2 * uu, 1.0 * uu, { level, key: 'g' + uu }); };

  // ---------- the beach and the wave ----------
  function beachIn(t) {
    skyIn(FULL, '#E48A78', '#FBD59A', t, 'bsky', 640);
    boilSeed('bsun'); glow(1320, 610, 240, '#FFC07A', .9);
    paint(ellPts(1320, 630, 110, 110, 28), { wash: '#FBD27A', ink: null });
    boilSeed('sea');
    paint(rectPts(-400, 630, W + 800, 160), { wash: '#3A9C98', fill: '#2E7C84', fillOp: 90, ink: PAL.ink, sw: .7 });
    for (let i = 0; i < 9; i++) { const y = 650 + i * 15, x = (hash(i) * W + 40 * Math.sin(t * 1.3 + i)); inkLine([[x, y], [x + 90 + 70 * hash(i + 1), y]], .9, i < 3 ? '#FFD9A0' : PAL.cream, 'inkfine', 0); }
    boilSeed('sand');
    paint(rectPts(-400, 770, W + 800, 500), { wash: '#EBC78F', fill: '#D8A868', fillOp: 70, ink: PAL.ink, sw: .8 });
  }
  // A curling painted wave whose crest is at x = front, height h above the sand.
  function bigWave(front, h, t) {
    if (h < 5) return;
    boilSeed('wave');
    const base = GY + 30, top = base - h, P = [[-2400, H + 300], [-2400, top + h * .35]];
    for (let k = 0; k <= 10; k++) { const x = lerp(-2400, front - 160, k / 10); P.push([x, top + h * .35 * (1 - k * k / 100) + 10 * Math.sin(x * .01 + t * 3)]); }
    P.push([front - 90, top - 30], [front + 40, top - 20], [front + 140, top + 50], [front + 150, top + 130], [front + 90, top + 150], [front + 60, top + 95], [front + 20, top + 110]);
    P.push([front + 70, top + h * .55], [front + 190, base], [front + 210, H + 300]);
    paint(P, { wash: '#2E8C8C', fill: '#1F6470', fillOp: 90, ink: PAL.ink, sw: 1.2 });
    for (let i = 1; i < 5; i++) {   // inner stripes following the face
      const d = i * 70; inkLine([[front - 400 - d, top + 60 + d * .5], [front - 150 - d * .4, top + 20 + d * .6], [front + 20 - d * .1, top + 80 + d * .8], [front + 60 - d * .1, base - 40]], 1.2, '#6FC3C0', 'ink', .6);
    }
    for (let i = 0; i < 9; i++) {   // foam claws along the lip
      boilSeed('foam' + i);
      const k = i / 8, x = lerp(front - 360, front + 130, k), y = top - 20 + 60 * k * k + 12 * Math.sin(t * 7 + i);
      paint(lumpCloud(x, y, 34 + 12 * hash(i), 26, i), { wash: PAL.cream, ink: PAL.ink, sw: .7 });
    }
  }
  function sandcastle(x, y, s) {
    boilSeed('castle');
    const c = '#D9B070', d = '#B88A4E';
    paint(rectPts(x - 2 * s, y - 1.6 * s, 4 * s, 1.6 * s), { wash: c, ink: PAL.ink, sw: .8 });
    for (const k of [-1.5, 0, 1.5]) {
      const hh = k ? 2.4 : 3.2; paint(rectPts(x + k * s - .55 * s, y - hh * s, 1.1 * s, hh * s), { wash: c, ink: PAL.ink, sw: .8 });
      for (let j = 0; j < 3; j++) paint(rectPts(x + k * s - .55 * s + j * .4 * s, y - hh * s - .3 * s, .25 * s, .3 * s), { wash: c, ink: PAL.ink, sw: .5 });
    }
    paint(rrPts(x - .35 * s, y - 1 * s, .7 * s, 1 * s, .3 * s), { wash: d, ink: PAL.ink, sw: .6 });
    inkLine([[x, y - 3.5 * s], [x, y - 4.6 * s]], 1, PAL.ink, 'ink', 0);
    paint([[x, y - 4.6 * s], [x + .9 * s, y - 4.3 * s], [x, y - 4 * s]], { wash: '#E2687A', ink: PAL.ink, sw: .5 });
  }
  function paperBoat(x, y, s) {
    boilSeed('boat');
    paint([[x - 1.6 * s, y - .8 * s], [x + 1.6 * s, y - .8 * s], [x + 1 * s, y], [x - 1 * s, y]], { wash: '#F3EFE6', ink: PAL.ink, sw: .7 });
    paint([[x - .7 * s, y - .8 * s], [x, y - 2 * s], [x + .7 * s, y - .8 * s]], { wash: '#E6E0D2', ink: PAL.ink, sw: .7 });
  }
  // Something the wave sweeps up: once the front reaches its x it rides the wave, tumbling up and away.
  const swept = (front, x0, y0) => { const d = front - x0 + 60; if (d <= 0) return [x0, y0, 0]; return [x0 + d * .8, y0 - Math.min(420, d * 1.2), d * .012]; };

  // ---------- 9 · 岁月为我大浪淘沙: the wave rises and sweeps the beach clean ----------
  // the wave rears up at the left edge (b0–b2), then rolls across the whole beach (b2–b4)
  const waveFront = t => kf(t, [[at(9, 0), -60], [at(9, 2), 300], [cutAt(10), W + 700]], easeIn);
  const waveH = t => lerp(0, 520, easeOut(seg(t, at(9, 0), at(9, 2))));
  function s9(t, lt, dur) {
    const b = beats(lt), f = waveFront(t);
    camBegin(960 + 15 * Math.sin(lt), 520, 1.03 + .02 * lt);
    beachIn(t);
    for (let i = 0; i < 10; i++) { boilSeed('fp' + i); const p = swept(f, 300 + i * 90, 930 + 14 * (i % 2)); if (p[1] > 900) paint(ellPts(p[0], p[1], 14, 7, 10), { wash: '#C9A06A', ink: null }); }   // footprints
    { const p = swept(f, 1120, 930); push(); translate(p[0], p[1]); rotate(p[2]); sandcastle(0, 0, 36); pop(); }
    { const p = swept(f, 640, 950); push(); translate(p[0], p[1]); rotate(p[2] * 1.5); paperBoat(0, 0, 40); pop(); }
    { const p = swept(f, 1390, 950); wallClock(p[0], p[1] - 40, 40, .15, .6 + t * .4, 0, '#F3E3C4', 'beachclock'); }
    const m = emotions(lt, [[0, 'happy', { lookX: -.6 }], [1 * Q, 'surprised', { lookX: -1, lookY: -.6 }], [2.4 * Q, 'scared', { lookX: -1, lookY: -.8 }]], { take: 1 });
    cai(1640, GY, 26, { ...m, flip: true, view: 'q', aL: lerp(.2, 1.3, seg(b, 2.3, 2.6)), aR: lerp(.2, 1.3, seg(b, 2.4, 2.7)) });
    bigWave(f, waveH(t), t);
    camEnd();
  }

  // ---------- 10 · 而你被留下: the wave draws back; one thing is left, 肆, and 采 runs to hug her ----------
  function s10(t, lt, dur) {
    const b = beats(lt), f = lerp(W + 700, -1400, ease(seg(b, 0, 1.5)));
    camBegin(960, 520, 1.03 + .03 * seg(b, 2, 4));
    beachIn(t);
    boilSeed('wet'); paint(rectPts(-400, 800, W + 800, 200), { wash: '#D6AE7A', washOp: 150, ink: null });
    for (let i = 0; i < 6; i++) inkLine([[200 + i * 300, 860 + 20 * (i % 2)], [320 + i * 300, 862 + 20 * (i % 2)]], .8, PAL.cream, 'inkfine', 0);
    // the sparkle, then 肆 pops up out of the sand
    const X = 1000, spark = seg(b, 1, 1.3), up = backOut(seg(b, 2, 2.35));
    if (b > 1 && b < 2.3) { boilSeed('sparkle'); glow(X, GY - 10, 90 * spark, '#FFE3A0', 1); emote('spark', X, GY - 30, 50, spark, lt); }
    const ms = emotions(lt, [[0, 'surprised', { lookX: .6 }], [2.2 * Q, 'excited', { lookX: .8 }], [3.3 * Q, 'love', { lookX: 1 }]], { take: .8 });
    si(X, GY + lerp(9 * 24, 0, up), 24, { ...ms, noShadow: up < .9, aL: lerp(-.3, 1.3, up), aR: lerp(-.3, 1.3, up) });
    boilSeed('sandfront');
    paint(rectPts(-400, GY + 10, W + 800, 300), { wash: '#E4BD84', ink: null });
    inkLine([[-400, GY + 10], [W + 400, GY + 10]], .5, mixCol('#D8A868', PAL.ink, .3), 'inkfine', 0);
    if (up > .05 && up < 1) for (let i = 0; i < 6; i++) { boilSeed('spray' + i); const a = -Math.PI / 2 + (i - 2.5) * .45, r = 140 * up; paint(ellPts(X + Math.cos(a) * r, GY - 20 + Math.sin(a) * r, 10, 10, 8), { wash: '#D8A868', ink: null }); }
    // 采 runs in from the right and hugs her
    const run = stroll(lt, 2.4 * Q, 3.2 * Q, 1640, X + 12 * 24 + 10, 26);
    const mc = emotions(lt, [[0, 'relieved', { lookX: -1 }], [2.1 * Q, 'surprised', { lookX: -1 }], [3.2 * Q, 'love', { lookX: -1 }]], { take: .7 });
    const hug = seg(b, 3.2, 3.5);
    cai(run.x, GY, 26, { ...mc, ...run, flip: true, view: hug > 0 ? 'front' : run.view, rot: -.12 * hug, aL: lerp(-.2, 1.1, hug), aR: -.2 });
    if (hug > 0) { boilSeed('hug'); emote('hearts', X + 6 * 26, GY - 12 * 26, 50, hug, lt); }
    bigWave(f, 520 * (1 - seg(b, .8, 1.5)), t);
    camEnd();
  }

  // ---------- 11 · 我的世界流转变化: a season on every beat ----------
  const SEASONS = [
    { sky: '#BFE3F0', hill: '#9CCB7A', leaf: '#F4B6C8', fall: '#F7C8D6', emo: 'happy' },
    { sky: '#8EC3E6', hill: '#6E9F58', leaf: '#4E9A5A', fall: null, emo: 'excited', sun: true },
    { sky: '#F2C48A', hill: '#C99A4E', leaf: '#D9743A', fall: '#D9743A', emo: 'surprised' },
    { sky: '#C9D3E6', hill: '#F3EFEA', leaf: null, fall: '#FFFFFF', emo: 'dizzy', snow: true },
  ];
  function s11(t, lt, dur) {
    const b = beats(lt), i = clamp(Math.floor(b), 0, 3), S = SEASONS[i], pop = lerp(.45, 1, backOut(seg(b - i, 0, .25)));
    camBegin(960, 520, 1.02 + .02 * lt);
    skyIn(FULL, S.sky, mixCol(S.sky, PAL.cream, .5), t, 'ssky' + i);
    if (S.sun) sunFace(1560, 220, 80, t, pop, { key: 'ssun' });
    boilSeed('hill' + i);
    paint(ellPts(960, 1180, 1500, 420, 40, 3), { wash: S.hill, fill: mixCol(S.hill, PAL.ink, .15), fillOp: 80, ink: PAL.ink, sw: 1 });
    // the tree: trunk, then a canopy that pops on each change (winter: bare branches with snow)
    const TX = 1180, TY = 800;
    boilSeed('trunk');
    paint(ribbon([[TX, TY + 40], [TX - 10, TY - 150], [TX + 10, TY - 280]], 60, 30), { wash: '#7A5A48', ink: PAL.ink, sw: .9 });
    for (const [dx, dy] of [[-150, -360], [140, -380], [0, -440]]) inkLine([[TX, TY - 250], [TX + dx, TY + dy]], 6, '#7A5A48', 'ink', .4);
    if (S.leaf) {
      for (let k = 0; k < 5; k++) {
        boilSeed('canopy' + i + k);
        const a = k / 5 * TAU, cx = TX + Math.cos(a) * 130, cy = TY - 400 + Math.sin(a) * 70;
        paint(ellPts(cx, cy, 130 * pop, 110 * pop, 20, 3), { wash: S.leaf, fill: mixCol(S.leaf, PAL.ink, .2), fillOp: 70, ink: PAL.ink, sw: .8 });
      }
    } else for (const [dx, dy] of [[-150, -360], [140, -380], [0, -440]]) { boilSeed('snowcap' + dx); paint(ellPts(TX + dx * .8, TY + dy * .9 - 8, 50 * pop, 14 * pop, 12), { wash: PAL.cream, ink: PAL.ink, sw: .6 }); }
    if (S.fall) for (let k = 0; k < 22; k++) {   // petals / leaves / snow
      boilSeed('fall' + i + k);
      const ph = frac(hash(k * 2.3) + (t - at(11, i)) * (.35 + .2 * hash(k))), x = 200 + hash(k * 5.1) * 1600 + 60 * Math.sin(t * 2 + k), y = -50 + ph * 1000;
      if (S.snow) paint(ellPts(x, y, 7, 7, 8), { wash: '#FFFFFF', ink: PAL.ink, sw: .3 });
      else paint(ellPts(x, y, 13, 7, 10, 0, t * 3 + k), { wash: S.fall, ink: PAL.ink, sw: .4 });
    }
    // 采: a take on every change
    const keys = SEASONS.map((s, j) => [j * Q, s.emo, { lookX: .7, lookY: -.5, emote: j === 3 ? 'swirl' : j === 2 ? '!' : null }]);
    const m = emotions(lt, keys, { take: .9 });
    cai(780, GY, 30, { ...m, aL: .3 + .6 * pulse(t, 5), aR: .3 + .6 * pulse(t + .1, 5) });
    flash(.35 * Math.exp(-(b - i) * 10) * (i > 0 ? 1 : 0));
    const irisAt = toScreen(780, GY - 4 * 30);
    camEnd();
    if (lt > dur - .35) iris(irisAt[0], irisAt[1], lerp(1300, 0, easeIn((lt - (dur - .35)) / .35)), PAL.ink);
  }

  // ---------- 12 · 你却没时差: two clocks spin, then snap to twelve on the same beat ----------
  function room(R, wall, dark, win, t, key) {
    boilSeed(key);
    paint(rectPts(R.x0, -100, R.w, 1100), { wash: wall, ink: null });
    paint(rectPts(R.x0, 820, R.w, 400), { wash: dark, fill: mixCol(dark, PAL.ink, .3), fillOp: 70, ink: PAL.ink, sw: .8 });
    win();
  }
  function s12(t, lt, dur) {
    const b = beats(lt), snap = seg(b, 2, 2.08), spinK = 1 - ease(seg(b, 1.7, 2));
    camBegin(W / 2, 540, 1);
    room(LEFT, '#3A3462', '#5A3F4E', () => {   // night window
      paint(rectPts(140, 380, 300, 260), { wash: '#1F2550', ink: PAL.ink, sw: 1.2 }); glow(330, 450, 90, '#FFE9B0', .9);
      paint(ellPts(330, 450, 36, 36, 16), { wash: '#FFF0C8', ink: PAL.ink, sw: .6 }); paint(ellPts(345, 440, 30, 30, 16), { wash: '#1F2550', ink: null });
    }, t, 'roomL');
    room(RIGHT, '#F2D9B0', '#B98A5E', () => {   // day window
      paint(rectPts(1480, 380, 300, 260), { wash: '#8EC3E6', ink: PAL.ink, sw: 1.2 });
      paint(ellPts(1560, 450, 34, 34, 16), { wash: '#FFD45A', ink: PAL.ink, sw: .6 });
    }, t, 'roomR');
    // the clocks: different speeds and times until the snap, then both at twelve, ringing
    const handsAt = (sp, off) => { if (b >= 2) return [0, 0]; const m = off + lt * sp; return [lerp(0, m / 12 + off * .3, spinK), lerp(0, m, spinK)]; };
    const [hL, mL] = handsAt(5.3, .35), [hR, mR] = handsAt(-4.1, .8), ringK = b > 2 ? Math.exp(-(b - 2) * 3) : 0;
    wallClock(620, 270, 120, hL, mL, ringK, '#F3E3C4', 'clkL');
    wallClock(1300, 270, 120, hR, mR, ringK, '#FFF5E2', 'clkR');
    if (b > 2 && b < 3) for (const cx of [620, 1300]) for (let k = 0; k < 3; k++) {   // ding lines
      const a = -Math.PI / 2 + (k - 1) * .7, r0 = 150 + 40 * seg(b, 2, 2.4);
      inkLine([[cx + Math.cos(a) * r0, 270 + Math.sin(a) * r0], [cx + Math.cos(a) * (r0 + 40), 270 + Math.sin(a) * (r0 + 40)]], 2, '#E8AA38', 'ink', 0);
    }
    const keys = side => [[0, 'dizzy', { lookY: -1, lookX: side * .2 }], [2 * Q, 'surprised', { lookY: -1 }], [3 * Q, 'laugh', { lookX: side }]];
    const hopC = jump(lt, 3 * Q, 3 * Q + .35, .9), hopS = jump(lt, 3 * Q + .07, 3 * Q + .42, .9);
    const mc = emotions(lt, keys(1), { take: 1 }), ms = emotions(lt, keys(-1), { take: 1 });
    cai(720, GY, 26, { ...mc, dy: (mc.dy || 0) + hopC.dy, sq: (mc.sq || 0) + hopC.sq, aL: .2, aR: .2 + .8 * seg(b, 3, 3.3) });
    si(1200, GY, 26, { ...ms, dy: (ms.dy || 0) + hopS.dy, sq: (ms.sq || 0) + hopS.sq, aL: .2 + .8 * seg(b, 3, 3.3), aR: .2 });
    seam(t, 1);
    camEnd();
    if (lt < .35) iris(W / 2, GY - 110, lerp(0, 1300, easeOut(lt / .35)), PAL.ink);
    if (lt > dur - .3) { boilSeed('wipe12'); brushWipe((lt - (dur - .3)) / .6, ['#E48A78', '#F4B63A']); }
  }

  // ---------- 13–14 · 啦啦啦啦 我亲爱的你呀: a note per "啦", then a cheek bump ----------
  function s13(t, lt, dur) {
    const Y = YA_G;   // 我亲爱的你呀 starts; the four 啦 are at LA_G
    camBegin(960, 520 - 10 * seg(t, Y, Y + 3), 1.02 + .08 * ease(seg(t, Y, Y + 2.5)));
    skyIn(FULL, '#E48A78', '#FBD59A', t, 'dsky', 700);
    boilSeed('dsun'); glow(960, 640, 300, '#FFC07A', .9); paint(ellPts(960, 660, 150, 150, 28), { wash: '#FBD27A', ink: null });
    boilSeed('dhill'); paint(ellPts(400, 880, 900, 220, 36, 3), { wash: '#B7658A', ink: PAL.ink, sw: .7 }); paint(ellPts(1600, 900, 900, 200, 36, 3), { wash: '#9E5A86', ink: PAL.ink, sw: .7 });
    boilSeed('stage'); paint(rectPts(-400, 860, W + 800, 400), { wash: '#8A5E48', fill: '#6B4A3A', fillOp: 70, ink: PAL.ink, sw: .9 });
    for (let i = 0; i < 14; i++) inkLine([[-200 + i * 170, 870], [-260 + i * 170, 1100]], .6, '#5A3C2E', 'inkfine', 0);
    partyLights(FULL, 120, t);
    const CXd = 720, SXd = 1200;
    // hop in turn on each 啦 (采 on 1st and 3rd, 肆 on 2nd and 4th), a note pops over the hopper
    const hopAt = k => jump(t, LA_G[k], LA_G[k] + .38, 1.4);
    const hc = [0, 2].map(hopAt).reduce((a, h) => ({ dy: a.dy + h.dy, sq: a.sq + h.sq }), { dy: 0, sq: 0 });
    const hs = [1, 3].map(hopAt).reduce((a, h) => ({ dy: a.dy + h.dy, sq: a.sq + h.sq }), { dy: 0, sq: 0 });
    // 我亲爱的你呀: turn to each other, lean in, cheek bump on 亲爱, hearts; then hold through the break
    const lean = ease(seg(t, Y + .1, Y + .45)), bump = spring(t, Y + .5, 5, 20), y0 = Y - cutAt(13);
    const mc = emotions(lt, [[0, 'laugh'], [y0 - .15, 'love', { lookX: 1 }]], { take: .7 });
    const ms = emotions(lt, [[0, 'laugh'], [y0, 'love', { lookX: -1 }]], { take: .7 });
    cai(CXd + 110 * lean, GY, 28, { ...mc, dy: (mc.dy || 0) + hc.dy, sq: (mc.sq || 0) + hc.sq, rot: .12 * lean + .05 * bump, aL: t < Y ? 1.2 + .3 * Math.sin(lt * 8) : .2, aR: t < Y ? 1.1 : lerp(.2, .6, lean), blush: lean });
    si(SXd - 110 * lean, GY, 28, { ...ms, dy: (ms.dy || 0) + hs.dy, sq: (ms.sq || 0) + hs.sq, rot: -.12 * lean - .05 * bump, aR: t < Y ? 1.2 - .3 * Math.sin(lt * 8) : .2, aL: t < Y ? 1.1 : lerp(.2, .6, lean), blush: lean });
    for (let k = 0; k < 4; k++) {
      const age = t - LA_G[k]; if (age < 0 || age > 1.6) continue;
      boilSeed('note' + k);
      const x = (k % 2 ? SXd : CXd) + (k < 2 ? -60 : 60), y = GY - 13 * 28 - age * 120;
      emote('music', x, y, 52 * (1 - seg(age, 1.2, 1.6)), backOut(clamp(age / .25)), age);
    }
    if (t > Y + .5) { boilSeed('bumpH'); glow(960, GY - 9 * 28, 200 * seg(t, Y + .5, Y + .7), '#FFB0C0', .8); emote('hearts', 960, GY - 11 * 28, 70, seg(t, Y + .5, Y + .7), lt); }
    camEnd();
    if (lt < .3) brushWipe(.5 + lt / .6, ['#E48A78', '#F4B63A']);
    if (lt > dur - .3) { boilSeed('wipe14'); brushWipe((lt - (dur - .3)) / .6, ['#8EC3E6', '#9CCB7A']); }
  }

  // ---------- 15 · 岁月待我晴雨交加: sun, rain, sun, rain, one per beat ----------
  function s15(t, lt, dur) {
    const b = beats(lt), i = clamp(Math.floor(b), 0, 3), wet = i % 2 === 1, k = seg(b - i, 0, .12);
    camBegin(960, 520, 1.03 + .02 * lt);
    skyIn(FULL, wet ? '#7F8DA6' : '#8EC3E6', wet ? '#A9B6C6' : '#FFF1C8', t, 'msky' + (wet ? 1 : 0));
    if (!wet) sunFace(1480, 230, 90, t, backOut(seg(b - i, 0, .3)), { key: 'msun' });
    else { boilSeed('mcloud'); paint(lumpCloud(1300, 200, 380 * backOut(k), 120, 2), { wash: '#8E9AAE', ink: PAL.ink, sw: .8 }); }
    boilSeed('meadow');
    paint(ellPts(960, 1150, 1500, 380, 40, 3), { wash: wet ? '#6E8F60' : '#8DBF6A', ink: PAL.ink, sw: .9 });
    for (let j = 0; j < 12; j++) { boilSeed('fl' + j); const x = 120 + j * 150 + 40 * hash(j), y = 880 + 60 * hash(j + 1); paint(ellPts(x, y, 10, 10, 8), { wash: ['#F4B6C8', '#FFF5E2', '#F4D05A'][j % 3], ink: PAL.ink, sw: .4 }); }
    if (wet) rainIn(FULL, t, 1, '#DCE6F2', 'r15');
    const keys = [[0, 'happy'], [1 * Q, 'nervous', { lookY: -1 }], [2 * Q, 'happy'], [3 * Q, 'surprised', { lookY: -1 }]];
    const m = emotions(lt, keys, { take: .7 });
    const open = wet ? backOut(k) : 1 - ease(seg(b - i, 0, .12)), a = 1.25;
    si(900, GY, 30, { ...m, aR: a, aL: -.2, armR: (uu) => { upright(a); umbrella(0, .2 * uu, 1.7 * uu, clamp(open, 0, 1.1), 0, '#E2687A', { key: 'umb15' }); } });
    camEnd();
    if (lt < .3) brushWipe(.5 + lt / .6, ['#8EC3E6', '#9CCB7A']);
  }

  // ---------- 16 · 而你被孵化: the egg wobbles, cracks, and out pops a tiny 采 ----------
  function nestAt(x, y) {
    boilSeed('nest');
    paint(ellPts(x, y, 150, 55, 24, 3), { wash: '#9A6B45', fill: '#6B4A3A', fillOp: 80, ink: PAL.ink, sw: .9 });
    for (let i = 0; i < 7; i++) inkLine([[x - 140 + i * 40, y - 20 + 10 * hash(i)], [x - 100 + i * 40, y + 30]], 1, '#C9A06A', 'ink', .4);
  }
  function s16(t, lt, dur) {
    const b = beats(lt);
    camBegin(960, 520, 1.05 + .04 * seg(b, 2, 4));
    skyIn(FULL, '#BFE3F0', '#FFF1C8', t, 'esky');
    boilSeed('hedge'); for (let i = 0; i < 6; i++) paint(lumpCloud(i * 380, 760, 260, 130, i), { wash: '#7FB069', ink: PAL.ink, sw: .7 });
    boilSeed('egrass'); paint(rectPts(-400, 820, W + 800, 500), { wash: '#9CCB7A', ink: PAL.ink, sw: .8 });
    const ms = emotions(lt, [[0, 'thinking', { lookX: 1, lookY: .3 }], [1 * Q, 'surprised', { lookX: 1, lookY: .3 }], [2.2 * Q, 'love', { lookX: .8 }]], { take: .7 });
    si(680, GY, 30, { ...ms, aR: .2, aL: -.2 });
    // the egg (with her flower's colours in its spots), on a nest to the right
    const EX = 1260, EY = 860, wob = seg(b, 0, 1) > 0 && b < 2 ? Math.sin(lt * 26) * .12 * (1 - seg(b, 1.6, 2)) : 0;
    nestAt(EX, EY + 20);
    const hatch = seg(b, 2, 2.3), capP = arcPt([EX, EY - 190], [EX - 24, EY - 225], 260, ease(seg(b, 2, 2.9)));
    if (b >= 2) {   // tiny 采 pops out of the lower shell
      const up = backOut(seg(b, 2, 2.35));
      const mc = emotions(lt, [[2 * Q, 'excited'], [3 * Q, 'love', { lookX: -1 }]], { take: .8 });
      cai(EX, EY - 40 - 60 * up, 12, { ...mc, noShadow: true, hat: null, aL: 1.2, aR: 1.2 * up });
    }
    boilSeed('egg');
    push(); translate(EX, EY); rotate(wob);
    if (b < 2) {
      paint(ellPts(0, -110, 90, 118, 30), { wash: '#FFF5E2', ink: PAL.ink, sw: 1 });
      for (const [sx, sy] of [[-30, -150], [35, -90], [-10, -60], [40, -170]]) paint(ellPts(sx, sy, 14, 12, 10), { wash: '#F4B6C8', ink: null });
      if (b > 1) { const C = [[-88, -110], [-50, -130], [-20, -100], [10, -135], [45, -105], [88, -125]], n = 2 + Math.floor(4 * seg(b, 1, 1.25)); inkLine(C.slice(0, n), 1.6, PAL.ink, 'ink', 0); }
    } else {   // the lower half stays in the nest, zigzag rim
      const P = [[-90, -110]]; for (let i = 0; i <= 8; i++) P.push([-90 + i * 22.5, -110 + (i % 2 ? -22 : 0)]);
      for (let i = 0; i <= 16; i++) { const a = i / 16 * Math.PI; P.push([Math.cos(a) * 90, -110 + Math.sin(a) * 118]); }
      paint(P, { wash: '#FFF5E2', ink: PAL.ink, sw: 1 });
    }
    pop();
    if (b >= 2) {   // the top shell flies up and lands on her head as a cap
      boilSeed('cap');
      push(); translate(capP[0], capP[1] + (b > 2.9 ? -60 * backOut(seg(b, 2, 2.35)) + 60 : 0)); rotate(lerp(0, -.3, ease(seg(b, 2, 2.9))) + TAU * ease(seg(b, 2, 2.9)));
      const P = []; for (let i = 0; i <= 14; i++) { const a = Math.PI + i / 14 * Math.PI; P.push([Math.cos(a) * 70, Math.sin(a) * 60]); }
      for (let i = 8; i >= 0; i--) P.push([-70 + i * 17.5, i % 2 ? 16 : 0]);
      paint(P, { wash: '#FFF5E2', ink: PAL.ink, sw: .9 }); paint(ellPts(-20, -30, 12, 10, 10), { wash: '#F4B6C8', ink: null });
      pop();
      if (hatch < 1) { glow(EX, EY - 150, 220 * (1 - hatch), '#FFE3A0', 1); }
    }
    if (b > 3) { boilSeed('eh'); emote('heart', (680 + EX) / 2 + 60, 420 - 30 * seg(b, 3, 4), 50, seg(b, 3, 3.25), lt); }
    camEnd();
  }

  // ---------- 17–18 · 我的心事纷乱复杂 / 你却能解码: a tangle of thoughts, and the one who can pull the thread ----------
  const TC = [960, 330], NT = 64;
  function tanglePts(r, n) {   // a scribble: a random walk around the centre, stable per point
    const P = []; for (let i = 0; i < n; i++) { const a = hash(i * 1.37) * TAU, rr = r * Math.sqrt(hash(i * 2.71 + 5)); P.push([TC[0] + Math.cos(a) * rr * 1.25, TC[1] + Math.sin(a) * rr]); }
    return P;
  }
  function heartLine(n, R) {   // the same number of points along a heart
    const P = [], hp = heartPts(TC[0], TC[1] + 40, R, n); for (let i = 0; i < n; i++) P.push(hp[i]); return P;
  }
  function thoughts(t, lt) {
    skyIn(FULL, '#B9A8D0', '#E8D8EC', t, 'tsky', 800);
    boilSeed('tfloor'); paint(rectPts(-400, 860, W + 800, 500), { wash: '#8C7AA8', ink: PAL.ink, sw: .8 });
  }
  function s17(t, lt, dur) {
    const b = beats(lt), grow = ease(seg(b, 0, 3.4)), n = Math.round(lerp(18, NT, clamp(b / 3.2)));
    camBegin(960, 520 + 20 * seg(b, 0, 4), 1.02 + .05 * seg(b, 0, 4));
    thoughts(t, lt);
    const ms = emotions(lt, [[0, 'thinking', { lookY: -1 }], [1 * Q, 'confused', { lookY: -1 }], [2.5 * Q, 'dizzy', { emote: 'sweat' }]], { take: .6 });
    si(960, GY, 34, { ...ms, aL: .3 + .4 * Math.sin(lt * 5), aR: .9 + .3 * Math.sin(lt * 4) });
    boilSeed('tdots'); for (let i = 0; i < 3; i++) paint(ellPts(960 + 30 * i, 560 - i * 45, 10 + 5 * i, 10 + 5 * i, 10), { wash: PAL.cream, ink: PAL.ink, sw: .6 });
    const P = tanglePts(lerp(60, 200, grow) * (1 + .05 * pulse(t, 4)), n);
    boilSeed('tangle'); inkLine(P, 1.3, PAL.ink, 'ink', .8);
    camEnd();
  }
  function s18(t, lt, dur) {
    const b = beats(lt), un = ease(seg(b, 1.9, 3)), fillH = seg(b, 3, 3.3);
    camBegin(960, 540, 1.07 - .05 * seg(b, 0, 2));
    thoughts(t, lt);
    const ms = emotions(lt, [[0, 'dizzy', { emote: 'sweat' }], [1.9 * Q, 'idea', { lookY: -1 }], [3.1 * Q, 'love', { lookX: 1 }]], { take: .8 });
    si(960, GY, 34, { ...ms, aL: .3, aR: .4 });
    const walk = stroll(lt, 0, 1.2 * Q, 1800, 1480, 26);
    const mc = emotions(lt, [[0, 'determined', { lookX: -1, lookY: -.6 }], [2 * Q, 'proud', { lookX: -1, lookY: -.6 }], [3.1 * Q, 'love', { lookX: -1 }]], { take: .6 });
    const pull = ease(seg(b, 1.2, 1.9)), aC = lerp(.2, 1.1, ease(seg(b, 1, 1.3))) - .3 * pull;
    cai(walk.x + 40 * pull, GY, 26, { ...mc, ...walk, flip: true, view: walk.view === 'front' ? 'q' : walk.view, aL: aC, aR: -.2 });
    // the tangle (full), a loose end running to 采's paw, then it unravels into one heart
    const T0 = tanglePts(200, NT), T1 = heartLine(NT, 170), P = T0.map((p, i) => [lerp(p[0], T1[i][0], un), lerp(p[1], T1[i][1], un)]);
    if (fillH > 0) { boilSeed('hfill'); glow(TC[0], TC[1] + 20, 260 * fillH, '#FFB0C0', .9); paint(heartPts(TC[0], TC[1] + 40, 165, 40), { wash: '#E2687A', washOp: 230 * fillH, ink: null }); }
    boilSeed('tangle'); inkLine(P, 1.3 + 2 * un, un > .95 ? '#B8324A' : PAL.ink, 'ink', .8);
    if (b > 1 && un < .95) {
      const hand = [walk.x + 40 * pull - 7.2 * 26, GY - 4.5 * 26 - 2.2 * 26 * Math.sin(aC)], end = P[NT - 1];
      boilSeed('thread'); inkLine([end, [(end[0] + hand[0]) / 2, (end[1] + hand[1]) / 2 + 60 * (1 - pull)], hand], 1.8, PAL.ink, 'ink', .6);
    }
    camEnd();
    if (lt > dur - .35) iris(W / 2, 420, lerp(1300, 0, easeIn((lt - (dur - .35)) / .35)), PAL.night);
  }

  // ---------- 19–21 · 啦啦啦啦 我亲爱的你呀 + outro: the Taipei roof again, together ----------
  function s19(t, lt, dur) {
    const Y = YA_S, y0 = Y - cutAt(18);   // 我亲爱的你呀 starts; the four 啦 are at LA_S
    camBegin(960, lerp(540, 470, ease(seg(t, Y + 1.2, Y + 5))), lerp(1.02, 1.12, ease(seg(t, Y - 1, DUR))));
    skyIn(FULL, '#1F2550', '#3E4C8C', t, 'fsky');
    starsIn(FULL, t, 40, 'fst');
    const FW = [[760, 250, '#F4B63A'], [1300, 210, '#E27A92'], [520, 320, '#6FC3C0'], [1500, 330, '#F6D27A']];
    FW.forEach(([x, y, c], k) => firework(t, LA_S[k], x, y, c, { r: 200, n: 14, x0: x + 40, gy: 820, climb: .5, key: 'f19' + k }));
    firework(t, Y + 1.4, 960, 250, '#F28AA8', { r: 240, n: 26, heart: true, life: 3.2, x0: 980, gy: 820, climb: .8, key: 'fheart' });
    firework(t, Y + 3.3, 560, 220, '#F4B63A', { r: 170, n: 12, life: 1.8, key: 'f21a', climb: .5 });
    firework(t, Y + 3.9, 1380, 240, '#6FC3C0', { r: 170, n: 12, life: 1.8, key: 'f21b', climb: .5 });
    skyline(FULL, 820, '#1B1F44', '#F2B84E', 11, 60, 170, .35);
    taipei101(1640, 820, 30, '#3A4A7A', '#F2C86A', t);
    skyline(FULL, 860, '#262B58', '#F2B84E', 3, 40, 110, .55);
    rooftop(FULL, GY - 10, '#4B4A6C', 'froof');
    partyLights(reg(-100, W + 100), 60, t, 'flights');
    // hops in turn on the four 啦 (采 1st and 3rd · 肆 2nd and 4th), then glasses up and a clink on 亲爱
    const hopAt = k => jump(t, LA_S[k], LA_S[k] + .38, 1.3);
    const hc = [0, 2].map(hopAt).reduce((a, h) => ({ dy: a.dy + h.dy, sq: a.sq + h.sq }), { dy: 0, sq: 0 });
    const hs = [1, 3].map(hopAt).reduce((a, h) => ({ dy: a.dy + h.dy, sq: a.sq + h.sq }), { dy: 0, sq: 0 });
    const raise = ease(seg(t, Y - .5, Y + .1)), clink = spring(t, Y + .5, 6, 22), aC = lerp(-.2, .75, raise) + .1 * clink, aS = aC;
    const lookUp = t > Y + 1.6;
    const mc = emotions(lt, [[0, 'excited', { lookY: -1 }], [y0 - .5, 'happy', { lookX: 1 }], [y0 + 1.6, 'love', { lookY: -1, lookX: .3 }]], { take: .7 });
    const ms = emotions(lt, [[0, 'excited', { lookY: -1 }], [y0 - .45, 'happy', { lookX: -1 }], [y0 + 1.7, 'love', { lookY: -1, lookX: -.3 }]], { take: .7 });
    cai(790, GY, 28, { ...mc, dy: (mc.dy || 0) + hc.dy, sq: (mc.sq || 0) + hc.sq, aR: aC, aL: t < Y - .5 ? 1.1 + .3 * Math.sin(lt * 8) : -.2, armR: glassIn(aC, .7), rot: lookUp ? .04 : 0 });
    si(1130, GY, 28, { ...ms, dy: (ms.dy || 0) + hs.dy, sq: (ms.sq || 0) + hs.sq, aL: aS, aR: t < Y - .5 ? 1.1 - .3 * Math.sin(lt * 8) : -.2, armL: glassIn(aS, .6), rot: lookUp ? -.04 : 0 });
    if (t > Y + .5 && t < Y + 1) { boilSeed('clink'); const k = seg(t, Y + .5, Y + .6); glow(960, GY - 8 * 28, 120 * (1 - seg(t, Y + .6, Y + 1)), '#FFF0C8', 1); emote('spark', 960, GY - 9.5 * 28, 50, k, lt); }
    const irisAt = toScreen(960, GY - 4 * 28);
    camEnd();
    const endK = seg(lt, dur - 1.6, dur - .5);
    if (endK > 0) iris(irisAt[0], irisAt[1] - 40, lerp(1300, 0, easeIn(endK)), PAL.night);
  }

  shotList(9, [s9, s10, s11, s12, s13, s15, s16, s17, s18, s19]);
})();
