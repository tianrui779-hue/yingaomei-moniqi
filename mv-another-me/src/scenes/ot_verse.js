// ot_verse.js: bars 0–8. Verse 1 (郭: Taipei / Shanghai) and verse 2 (肆: Berlin / Bangkok), apart across the seam.
// b = quarters of the shot (Q = shot length / 4), so each shot's staging fits its sung line.
(() => {
  const GY = 900;                                   // where feet stand
  const NIGHT = { top: '#1F2550', hor: '#3E4C8C', bld: '#262B58', bld2: '#1B1F44', win: '#F2B84E', roof: '#4B4A6C' };
  const DUSK = { top: '#7E6AA6', hor: '#F2A98A', bld: '#6A5A8E', water: '#5D6FA0', rail: '#4A3E66' };
  const RAINY = { top: '#76869E', hor: '#A9B6C6', bld: '#5F6D84', street: '#4E5A6E' };
  const SUNNY = { top: '#8EC3E6', hor: '#FFE3A8', street: '#E6CFA0' };
  const beats = lt => lt / Q;

  // ---------- the four places, each drawn into a region (full frame or half of the split) ----------
  function taipeiIn(R, t, o = {}) {
    skyIn(R, NIGHT.top, NIGHT.hor, t, 'tpsky' + R.x0);
    starsIn(R, t, Math.round(34 * R.w / W), 'tps' + R.x0);
    if (o.fireworks) o.fireworks();
    skyline(R, 820, NIGHT.bld2, NIGHT.win, 11 + (R.x0 > 0 ? 50 : 0), 60, 170, .35);
    taipei101(R.cx + (o.tx ?? 150), 820, o.s ?? 26, '#3A4A7A', '#F2C86A', t);
    skyline(R, 860, NIGHT.bld, NIGHT.win, 3 + (R.x0 > 0 ? 70 : 0), 40, 110, .55);
    rooftop(R, GY - 10, NIGHT.roof, 'tproof' + R.x0);
  }
  function shanghaiIn(R, t, o = {}) {
    skyIn(R, DUSK.top, DUSK.hor, t, 'shsky' + R.x0, 640);
    boilSeed('shsun' + R.x0); glow(R.cx + (o.tx ?? 160) - 260, 600, 160, '#FFC08A', .6);
    skyline(R, 700, DUSK.bld, '#F6C86A', 21 + (R.x0 > 0 ? 9 : 0), 60, 220, .25);
    pearlTower(R.cx + (o.tx ?? 160), 700, o.s ?? 34, '#6A5A8E', '#E27A92');
    boilSeed('river' + R.x0);
    paint(rectPts(R.x0, 700, R.w, 140), { wash: DUSK.water, fill: '#8E90C0', fillOp: 90, ink: PAL.ink, sw: .6 });
    for (let i = 0; i < 7; i++) { const y = 720 + i * 17, x = R.x0 + (hash(i) * R.w * .8) + 30 * Math.sin(t * 1.5 + i); inkLine([[x, y], [x + 70 + 60 * hash(i + 2), y]], .8, '#F2C0A8', 'inkfine', 0); }
    boilSeed('prom' + R.x0);
    paint(rectPts(R.x0, 840, R.w, 400), { wash: '#B7A08E', fill: '#8E7868', fillOp: 70, ink: PAL.ink, sw: .8 });
    inkLine([[R.x0, 800], [R.x1, 800]], 1.4, DUSK.rail, 'ink', 0);
    for (let x = R.x0 + 30; x < R.x1; x += 70) inkLine([[x, 800], [x, 842]], 1, DUSK.rail, 'ink', 0);
  }
  function berlinIn(R, t, o = {}) {
    const clear = o.clear || 0, top = mixCol(RAINY.top, SUNNY.top, clear), hor = mixCol(RAINY.hor, SUNNY.hor, clear);
    skyIn(R, top, hor, t, 'besky' + R.x0);
    if (o.sunBehind) o.sunBehind();
    tvTower(R.cx + (o.tx ?? 200), 830, o.s ?? 38, mixCol('#7F8BA0', '#A89CB8', clear));
    skyline(R, 840, mixCol(RAINY.bld, '#8C8FB0', clear), '#F2D08A', 31 + (R.x0 > 0 ? 7 : 0), 50, 170, .2);
    boilSeed('street' + R.x0);
    paint(rectPts(R.x0, 840, R.w, 400), { wash: mixCol(RAINY.street, '#8F8CA0', clear), fill: '#3E4658', fillOp: 60, ink: PAL.ink, sw: .8 });
    for (let i = 0; i < 4; i++) paint(ellPts(R.x0 + R.w * (.15 + .22 * i), 945 + 18 * (i % 2), 90, 12, 16), { wash: mixCol('#9FB2CC', '#CFE6F4', clear), washOp: 200, ink: null });
    // clouds that thin out as it clears
    for (let i = 0; i < 3; i++) {
      boilSeed('bcl' + R.x0 + i);
      const x = R.x0 + R.w * (.2 + .3 * i) + 20 * Math.sin(t * .8 + i), y = 120 + 40 * (i % 2) - 300 * ease(clear);
      paint(lumpCloud(x, y, 260, 90, i * 3), { wash: mixCol('#8E9AAE', PAL.cream, clear), washOp: 255 * (1 - clear * .6), ink: PAL.ink, sw: .7 });
    }
  }
  function bangkokIn(R, t, o = {}) {
    skyIn(R, SUNNY.top, SUNNY.hor, t, 'bksky' + R.x0);
    if (o.sun) o.sun();
    temple(R.cx + (o.tx ?? 180), 840, o.s ?? 58, t);
    (o.palms || [120, 1780]).forEach((px, i) => palm(px, 860 + 10 * i, (o.ps ?? 55) * (1 - .15 * i), t + i, 'palm' + i + R.x0));
    boilSeed('bkst' + R.x0);
    paint(rectPts(R.x0, 850, R.w, 400), { wash: SUNNY.street, fill: '#D0A870', fillOp: 70, ink: PAL.ink, sw: .8 });
  }
  const glass = (a, u) => (uu, sw) => { upright(a); mojito(.4 * uu, 2.2 * uu, 1.0 * uu, { level: u }); };
  const umb = (a, open, inv, s = 1.7) => (uu, sw) => { upright(a); umbrella(0, .2 * uu, s * uu, open, inv, '#3A9C98'); };

  // ---------- 0 · intro bar: the split screen opens; a rocket climbs on the left ----------
  function s0(t, lt, dur) {
    const b = beats(lt), push_ = easeIn(seg(b, 3, 4));
    camBegin(lerp(W / 2, W / 4 + 60, push_), lerp(540, 520, push_), lerp(1, 1.95, push_));
    taipeiIn(LEFT, t, { tx: 120, s: 22, fireworks: () => firework(t, cutAt(1), 330, 250, '#F4B63A', { climb: 1.9, x0: 250, gy: 820 }) });
    cai(560, GY, 17, emotions(lt, [[0, 'sleepy', { lookX: .6 }], [2.2 * Q, 'surprised', { lookX: -.4, lookY: -1 }]], { take: .6 }));
    shanghaiIn(RIGHT, t, { tx: 200, s: 26 });
    si(1330, GY, 17, { ...feel('happy', t, { lookX: -.4 }), aR: .3, armR: glass(.3, .8) });
    seam(t, 1);
    const irisAt = toScreen(W / 2, 560);
    camEnd();
    if (b < 1.2) iris(irisAt[0], irisAt[1], lerp(0, 1300, easeIn(b / 1.2)), PAL.night);
  }

  // ---------- 1 · 上一秒我在台北看烟火: fireworks over Taipei 101, 采 is starstruck ----------
  function s1(t, lt, dur) {
    const b = beats(lt);
    camBegin(980 + 20 * Math.sin(lt * .7), 520 - 8 * lt, 1.06 + .02 * lt);
    const t0 = cutAt(1);
    taipeiIn(FULL, t, { tx: 380, s: 44, fireworks: () => {
      firework(t, t0, 760, 260, '#F4B63A', { r: 250, x0: 700, gy: 820 });
      firework(t, at(1, 2), 1500, 200, '#E27A92', { r: 210, n: 14, x0: 1450, gy: 820, climb: .5 });
      firework(t, at(1, 3), 1080, 330, '#6FC3C0', { r: 190, n: 12, x0: 1120, gy: 820, climb: .45, rot: .2 });
    } });
    const m = emotions(lt, [[0, 'surprised', { lookX: .3, lookY: -1 }], [1.1 * Q, 'starstruck', { lookX: .5, lookY: -1 }]], { take: .9 });
    const hop = jump(lt, 2 * Q, 2 * Q + .35, .8);
    cai(640, GY, 28, { ...m, dy: (m.dy || 0) + hop.dy, sq: (m.sq || 0) + hop.sq, aL: .9 + .25 * Math.sin(lt * 7), aR: 1.1 });
    camEnd();
    if (lt > dur - .22) whipPan((lt - (dur - .22)) / .44, [NIGHT.top, DUSK.hor]);
  }

  // ---------- 2 · 下一秒你在上海喝Mojito: 肆 on the Bund lifts her Mojito, sips, melts ----------
  function s2(t, lt, dur) {
    const b = beats(lt);
    camBegin(940 - 15 * lt, 540, 1.04 + .03 * lt);
    shanghaiIn(FULL, t, { tx: 420, s: 50 });
    const lift = ease(seg(b, 1, 1.5)), a = lerp(-.15, .95, lift), level = lerp(.8, .5, ease(seg(b, 2, 3.2)));
    const m = emotions(lt, [[0, 'happy', { lookX: .6 }], [2 * Q, 'love', { lookX: .2, blush: 1 }]], { take: .7 });
    si(760, GY, 28, { ...m, aR: a, aL: .15 + .1 * Math.sin(lt * 3), armR: glass(a, level) });
    // bubbles from the glass on the beats of the sip
    for (let i = 0; i < 6; i++) {
      const te = at(2, 2 + i * .33), age = t - te;
      if (age < 0 || age > .9) continue;
      boilSeed('bub' + i);
      const x = 760 + 7 * 28 + 30 * Math.sin(i * 2 + age * 5), y = GY - 11 * 28 - age * 220;
      paint(ellPts(x, y, 9 + 6 * age, 9 + 6 * age, 10), { wash: '#E4F4E8', washOp: 255 * (1 - age / .9), ink: PAL.ink, sw: .5 });
    }
    camEnd();
    if (lt < .22) whipPan(.5 + lt / .44, [NIGHT.top, DUSK.hor]);
  }

  // ---------- 3 · 你感觉我 就像我感觉你: split screen, a touch on the seam crosses to the other side ----------
  const CX = 790, SX = 1130;                       // where each stands in the split
  const splitCities = (t, o = {}) => {
    taipeiIn(LEFT, t, { tx: -200, s: 20 });
    shanghaiIn(RIGHT, t, { tx: 250, s: 24 });
  };
  function ripple(t, t0, x, y, dir, col) {
    const age = t - t0; if (age < 0 || age > 1) return;
    boilSeed('rip' + t0);
    for (let i = 0; i < 3; i++) {
      const r = 30 + (age * 380 - i * 60); if (r < 10) continue;
      const P = []; for (let k = -6; k <= 6; k++) { const a = k / 6 * 1.1; P.push([x + dir * Math.cos(a) * r, y + Math.sin(a) * r]); }
      inkLine(P, 1.6 * (1 - age), col, 'ink', .5);
    }
    glow(x, y, 120 * (1 - age), '#FFE3A0', .8);
  }
  function s3(t, lt, dur) {
    const b = beats(lt);
    camBegin(W / 2, 540, 1.02 - .02 * seg(b, 3, 4));
    splitCities(t);
    // 采 reaches right to the seam on b0; 肆 turns on the ripple (b1) and reaches left on b2
    const reachC = backOut(seg(b, 0, .45)), reachS = backOut(seg(b, 2, 2.45));
    const mc = emotions(lt, [[0, 'hopeful', { lookX: 1 }], [3 * Q, 'love', { lookX: 1 }]], { take: .6 });
    cai(CX, GY, 22, { ...mc, aR: lerp(-.4, .05, reachC), aL: -.3 });
    const ms = emotions(lt, [[0, 'happy', { lookX: .8 }], [1 * Q, 'surprised', { lookX: -1 }], [3 * Q, 'love', { lookX: -1 }]], { take: .8 });
    si(SX, GY, 22, { ...ms, ...turn(lt, 1.05 * Q, 1.3 * Q, .25, 0), aL: lerp(-.4, .05, reachS), aR: -.2, armR: glass(-.2, .5) });
    seam(t, 1);
    ripple(t, at(3, .4), SEAM_X + 12, GY - 4.4 * 22, 1, '#F2C0A8');
    ripple(t, at(3, 2.4), SEAM_X - 12, GY - 4.4 * 22, -1, '#AFC0F0');
    if (b > 3) { boilSeed('meet'); glow(SEAM_X, GY - 4.4 * 22, 170 * easeOut(seg(b, 3, 3.3)), '#FFD9A0', 1); }
    camEnd();
  }

  // ---------- 4 · 世界上的另一个我: a mirror dance across the seam, a heart over it ----------
  function s4(t, lt, dur) {
    const b = beats(lt);
    camBegin(W / 2, 520, 1 - .06 * ease(seg(b, 0, 4)));
    splitCities(t);
    const hop1 = jump(lt, .05, .45, 1.6), hop2 = jump(lt, 2 * Q + .05, 2 * Q + .45, 1.6);
    const lean = .22 * Math.sin(seg(b, 1, 2) * Math.PI) - .22 * Math.sin(seg(b, 3, 4) * Math.PI);
    const pose = (side) => ({
      ...feel('happy', t, { lookX: side }), dy: hop1.dy + hop2.dy, sq: hop1.sq + hop2.sq, rot: side * lean,
      aL: 1.2 + .3 * Math.sin(lt * 9), aR: 1.2 - .3 * Math.sin(lt * 9),
    });
    cai(CX, GY, 22, pose(1));
    si(SX, GY, 22, { ...pose(-1), rot: -lean, aL: 1.2 - .3 * Math.sin(lt * 9), aR: 1.2 + .3 * Math.sin(lt * 9) });
    seam(t, 1);
    const hk = seg(b, 2.8, 3.2);
    if (hk > 0) { boilSeed('heart4'); glow(SEAM_X, 420, 140, '#FFB0C0', .8 * hk); emote('heart', SEAM_X, 420 - 20 * seg(b, 3, 4), 60, hk, lt); }
    camEnd();
    if (lt > dur - .3) { boilSeed('wipe4'); brushWipe((lt - (dur - .3)) / .6, ['#76869E', '#A9B6C6']); }
  }

  // ---------- 5 · 上一秒我在柏林落大雨: Berlin in the rain; the wind flips 肆's umbrella ----------
  function s5(t, lt, dur) {
    const b = beats(lt);
    camBegin(960 + 25 * Math.sin(lt * .6), 540, 1.05 + .03 * lt);
    berlinIn(FULL, t, { tx: 420, s: 56 });
    rainIn(FULL, t, 1, '#DCE6F2', 'r5');
    const inv = easeOut(seg(b, 2, 2.35)), gust = seg(b, 1.8, 2.6);
    const m = emotions(lt, [[0, 'relieved', { lookX: .4, lookY: -.3 }], [2.05 * Q, 'surprised', { lookY: -1 }], [3 * Q, 'cry', { emote: 'cloud' }]], { take: 1 });
    const a = 1.25 + .15 * Math.sin(lt * 4) + .25 * inv * Math.sin(lt * 20) * (1 - seg(b, 2.4, 3));
    si(760 + 40 * ease(gust) , GY, 28, { ...m, aR: a, aL: -.2, rot: .08 * inv * (1 - seg(b, 3, 4)), armR: umb(a, 1, inv) });
    // the gust: a couple of wind curls sweeping in from the left
    if (gust > 0 && gust < 1) for (let i = 0; i < 3; i++) {
      boilSeed('gust' + i);
      const x = lerp(-300, W + 200, gust) - i * 180, y = 380 + i * 110;
      inkLine([[x - 260, y], [x - 80, y - 20], [x, y + 10], [x - 30, y + 40], [x - 60, y + 20]], 1.4, PAL.cream, 'ink', .6);
    }
    camEnd();
    if (lt < .3) brushWipe(.5 + lt / .6, ['#76869E', '#A9B6C6']);
    if (lt > dur - .22) whipPan((lt - (dur - .22)) / .44, ['#76869E', '#FFE3A8']);
  }

  // ---------- 6 · 下一秒你在曼谷天气晴: Bangkok sun pops out; 采 slides on her shades ----------
  function s6(t, lt, dur) {
    const b = beats(lt);
    camBegin(960 - 20 * lt, 540, 1.04 + .02 * lt);
    bangkokIn(FULL, t, { tx: 360, s: 74, ps: 70, sun: () => sunFace(1480, 230, 95, t, seg(b, 0, .6)) });
    const m = emotions(lt, [[0, 'happy', { lookX: .6, lookY: -.6 }], [1 * Q, 'cool'], [3 * Q, 'proud']], { take: .7 });
    const thumb = backOut(seg(b, 3, 3.35));
    cai(700, GY, 28, { ...m, aR: lerp(-.2, 1.3, thumb), aL: -.2, emote: b > 3 ? 'spark' : m.emote, emoteK: b > 3 ? thumb : m.emoteK });
    camEnd();
    if (lt < .22) whipPan(.5 + lt / .44, ['#76869E', '#FFE3A8']);
  }

  // ---------- 7 · 你感受我 就像我感受你: 采 rolls the sun over the seam; 肆 sends her umbrella back ----------
  const SUN0 = [1500, 250], SUN1 = [470, 240];
  const sunAt = t => { const k = ease(seg(t, at(7, 0), at(7, 2))); return arcPt(SUN0, SUN1, 180, k); };
  function s7(t, lt, dur) {
    const b = beats(lt), clear = ease(seg(b, 1.2, 2.2));
    camBegin(W / 2, 540, 1);
    berlinIn(LEFT, t, { tx: -180, s: 34, clear });
    rainIn(LEFT, t, 1 - clear, '#DCE6F2', 'r7');
    bangkokIn(RIGHT, t, { tx: 260, s: 44, ps: 40, palms: [1860] });
    // 肆 (left): soaked → sun arrives → happy; sends the umbrella over on b2.5
    const ms = emotions(lt, [[0, 'sad', { lookX: 1, emote: 'cloud' }], [1.6 * Q, 'surprised', { lookY: -1 }], [2.1 * Q, 'happy', { lookX: 1 }]], { take: .7 });
    const toss = seg(b, 2.4, 3.3), aS = lerp(1.25, .6, ease(seg(b, 2.2, 2.5)));
    si(CX - 40, GY, 22, { ...ms, aR: aS, aL: -.2, armR: toss <= 0 ? umb(aS, 1, 1 - ease(seg(b, 2, 2.4))) : null });
    // 采 (right): pushes the sun off with a big swing on b0; takes the umbrella on b3.3
    const mc = emotions(lt, [[0, 'cool'], [.6 * Q, 'playful', { lookX: -1 }], [3.3 * Q, 'love', { lookX: -.4 }]], { take: .6 });
    const swing = Math.sin(seg(b, 0, .8) * Math.PI), hold = toss >= 1;
    cai(SX + 60, GY, 22, { ...mc, aL: .4 + 1.0 * swing, aR: hold ? 1.3 : -.2, armR: hold ? umb(1.3, 1, 0, 1.6) : null });
    seam(t, 1);
    if (toss > 0 && toss < 1) {   // the umbrella flies over the seam on an arc, spinning once
      const p = arcPt([CX - 40 + 150, GY - 330], [SX + 60 + 150, GY - 330], 260, ease(toss));
      push(); translate(p[0], p[1]); rotate(TAU * ease(toss)); umbrella(0, 60, 36, 1, 0, '#3A9C98', { key: 'flyumb' }); pop();
    }
    const sp = sunAt(t); sunFace(sp[0], sp[1], 80, t, 1, { key: 'sun7' });
    camEnd();
  }

  // ---------- 8 · 世界上的另一个我: the seam peels away into a rainbow; they meet in the middle ----------
  function rainbow(k, t) {
    if (k <= 0) return;
    boilSeed('rainbow');
    const cols = ['#E2687A', '#F2A04A', '#F4D05A', '#7CC47A', '#6FA8DC', '#9A7CC8'];
    for (let i = 0; i < cols.length; i++) {
      const r = 720 - i * 34, P = [];
      for (let j = 0; j <= 30 * k; j++) { const a = Math.PI + j / 30 * Math.PI; P.push([W / 2 + Math.cos(a) * r * 1.25, 900 + Math.sin(a) * r]); }
      if (P.length > 1) paint(ribbon(P, 34, 34), { wash: cols[i], washOp: 200, ink: null });
    }
  }
  function s8(t, lt, dur) {
    const b = beats(lt), clear = 1;
    camBegin(W / 2, 540 - 10 * seg(b, 0, 4), 1 - .04 * seg(b, 0, 4));
    berlinIn(LEFT, t, { tx: -180, s: 34, clear });
    bangkokIn(RIGHT, t, { tx: 260, s: 44, ps: 40, palms: [1860] });
    sunFace(SUN1[0], SUN1[1], 80, t, 1, { key: 'sun7' });
    rainbow(ease(seg(b, .6, 2.4)), t);
    seam(t, 1, ease(seg(b, 0, 1.6)));
    const wS = stroll(lt, 1.4 * Q, 2.9 * Q, CX - 40, 850, 22), wC = stroll(lt, 1.4 * Q, 2.9 * Q, SX + 60, 1070, 22);
    const five = backOut(seg(b, 2.9, 3.2)), hopS = jump(lt, 3 * Q, 3 * Q + .35, 1), hopC = jump(lt, 3 * Q + .06, 3 * Q + .41, 1);
    const ms = emotions(lt, [[0, 'happy', { lookX: 1 }], [3 * Q, 'excited']], { take: .6 });
    const mc = emotions(lt, [[0, 'love', { lookX: -1 }], [3 * Q, 'excited']], { take: .6 });
    si(wS.x, GY, 22, { ...ms, ...wS, flip: false, dy: (ms.dy || 0) + wS.dy + hopS.dy, sq: (ms.sq || 0) + hopS.sq, aR: lerp(-.2, 1.2, five), aL: -.2 });
    cai(wC.x, GY, 22, { ...mc, ...wC, flip: true, dy: (mc.dy || 0) + wC.dy + hopC.dy, sq: (mc.sq || 0) + hopC.sq, aR: lerp(-.2, 1.2, five), aL: -.2, hat: 'flower' });
    if (b > 3) { boilSeed('five'); glow(960, GY - 11 * 22, 160 * (1 - seg(b, 3.1, 4)), '#FFE3A0', 1); emote('stars', 960, GY - 12 * 22, 40, seg(b, 3, 3.2), lt); }
    camEnd();
    if (lt > dur - .3) { boilSeed('wipe8'); brushWipe((lt - (dur - .3)) / .6, ['#3A9C98', '#F2A276']); }
  }

  shotList(0, [s0, s1, s2, s3, s4, s5, s6, s7, s8]);
})();
