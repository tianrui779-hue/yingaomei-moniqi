// ot_pre.js: the pre-chorus, between verse 2 and the chorus. 人生到处是假正经 … 天高海阔我的渊明 谁倾听.
// b = quarters of the shot (Q = its length / 4).
(() => {
  const GY = 900;
  const beats = lt => lt / Q;
  const GALA = ['#7A2E3A', '#E8AA38'], SEA = ['#3A9C98', '#F2A276'];

  // ---------- p1 · 人生到处是假正经 (郭): a stiff gala; everyone bows in unison; 采 drops her mask and winks ----------
  const GUEST = { col: '#A9A6B8', dk: '#7A768C', lt: '#D0CDD8' };
  function masq(x, y, s, rot) {   // a masquerade mask, as a loose prop
    push(); translate(x, y); rotate(rot);
    paint([[-5.2, -.8], [-2.4, -1.5], [0, -.6], [2.4, -1.5], [5.2, -.8], [4.2, 1.3], [1.4, 1.2], [0, .5], [-1.4, 1.2], [-4.2, 1.3]].map(([a, b]) => [a * s, b * s]), { wash: PAL.violet, ink: PAL.ink, sw: .7, curv: .3 });
    for (const ex of [-2.5, 2.5]) paint(ellPts(ex * s, .1 * s, 1.1 * s, .6 * s, 12), { wash: PAL.ink, ink: null });
    inkLine([[5.2 * s, -.8 * s], [6.5 * s, -2.5 * s]], 1.2, PAL.ochre, 'ink', .4);
    pop();
  }
  function p1(t, lt, dur) {
    const b = beats(lt);
    camBegin(960, 540, 1.04 + .03 * seg(b, 2.4, 4));
    boilSeed('hall');
    paint(rectPts(-400, -300, W + 800, 1200), { wash: '#6E2B38', fill: '#4A1E2A', fillOp: 90, tex: .6, ink: null });
    for (let i = 0; i < 9; i++) paint(rectPts(-200 + i * 280, 120, 26, 740), { wash: '#8A3A48', ink: null });   // wall stripes
    paint(rectPts(-400, 860, W + 800, 500), { wash: '#3A2A3A', fill: '#2A1E2A', fillOp: 80, ink: PAL.ink, sw: .9 });
    boilSeed('chand'); glow(960, 120, 260, '#FFD27A', .9);
    for (let i = -3; i <= 3; i++) paint(ellPts(960 + i * 55, 150 + 18 * Math.abs(i) * .4, 14, 20, 10), { wash: '#FFE3A0', ink: PAL.ink, sw: .5 });
    inkLine([[960, -40], [960, 120]], 1.4, PAL.ochre, 'ink', 0);
    // everyone bows stiffly on beats 1 and 2 (same angle, same time: that's the joke)
    const bow = Math.sin(clamp(seg(b, .15, .9)) * Math.PI) + Math.sin(clamp(seg(b, 1.15, 1.9)) * Math.PI);
    const stiff = { eyes: 'narrow', mouth: 'flat', noShadow: false, aL: -.9, aR: -.9, rot: .28 * bow };
    [[260, 20], [540, 21], [1380, 21], [1660, 20]].forEach(([x, u], i) => clawd(x, GY, u, { ...stiff, ...GUEST, tint: null, hat: 'top', boilKey: 'guest' + i }));
    // 采: bows along in her mask, then flicks it off (b2.4) and winks at us (b2.8)
    const off = seg(b, 2.4, 2.9), m = emotions(lt, [[0, 'neutral', { eyes: 'narrow', mouth: 'flat' }], [2.7 * Q, 'mischief', { lookX: -.3 }]], { take: .9 });
    cai(960, GY, 26, { ...m, hat: off > 0 ? 'flower' : 'masq', rot: b < 2.2 ? .28 * bow : 0, aR: lerp(-.9, 1.3, backOut(seg(b, 2.3, 2.6))), aL: -.9, eyes: b > 2.7 && b < 3.6 ? ['wink', 'happy'] : m.eyes });
    if (off > 0 && off < 1) { boilSeed('mask'); const p = arcPt([960 + 4 * 26, GY - 7 * 26], [1500, 1100], 260, off); masq(p[0], p[1], 26, off * 5); }
    camEnd();
    if (lt < .3) brushWipe(.5 + lt / .6, GALA);
    if (lt > dur - .22) whipPan((lt - (dur - .22)) / .44, ['#6E2B38', '#B9A8D0']);
  }

  // ---------- p2 · 变幻莫测捕风捉影 (肆): chasing the wind and a shape-shifting shadow with a net ----------
  function net(u, swing) {   // held in an arm hook: a pole with a hoop and a mesh bag
    rotate(swing);
    inkLine([[0, 0], [5.5 * u, 0]], 2.2, '#8A5E48', 'ink', 0);
    paint(ellPts(7.3 * u, 0, 1.8 * u, 1.3 * u, 18), { wash: '#F3EFE6', washOp: 120, ink: PAL.ink, sw: .9 });
    paint([[5.6 * u, -1 * u], [9 * u, -.9 * u], [8.6 * u, 2.6 * u], [7.2 * u, 3.4 * u]], { wash: '#F3EFE6', washOp: 90, ink: PAL.ink, sw: .5, curv: .5 });
  }
  const shadowAt = b => kf(b, [[0, [1250, 0]], [.9, [1250, 0]], [1.15, [600, 1]], [2.4, [600, 1]], [2.65, [1450, 2]], [4, [1450, 2]]]);
  function p2(t, lt, dur) {
    const b = beats(lt);
    camBegin(960 + 30 * Math.sin(lt * 1.3), 540, 1.03);
    skyIn(FULL, '#B9A8D0', '#E8D8EC', t, 'wsky', 760);
    boilSeed('wfield'); paint(ellPts(960, 1180, 1500, 400, 40, 3), { wash: '#9DB88A', ink: PAL.ink, sw: .9 });
    // gusts: ink curls blowing across, leaves riding them
    for (let i = 0; i < 4; i++) {
      boilSeed('wind' + i);
      const x = ((t * 700 + i * 560) % 2600) - 400, y = 260 + i * 120 + 30 * Math.sin(t * 2 + i);
      inkLine([[x - 220, y], [x - 90, y - 24], [x, y + 8], [x - 26, y + 40], [x - 54, y + 22]], 1.3, PAL.cream, 'ink', .6);
      paint(ellPts(x + 40, y - 10, 14, 7, 10, 0, t * 4 + i), { wash: i % 2 ? '#E8AA38' : '#D9743A', ink: PAL.ink, sw: .4 });
    }
    // the shadow on the grass: it jumps away each time the net comes down, and changes shape (cat, bird, cloud)
    const [sx, form] = shadowAt(b), f = Math.round(form);
    boilSeed('shadow' + f);
    if (f === 0) { paint(ellPts(sx, 930, 90, 22, 20), { wash: '#4A3E5E', washOp: 170, ink: null }); paint([[sx + 60, 915], [sx + 80, 880], [sx + 95, 915]], { wash: '#4A3E5E', washOp: 170, ink: null }); paint([[sx + 30, 915], [sx + 45, 885], [sx + 60, 915]], { wash: '#4A3E5E', washOp: 170, ink: null }); }
    else if (f === 1) paint([[sx - 110, 925], [sx - 30, 915], [sx, 900], [sx + 30, 915], [sx + 110, 925], [sx + 20, 935], [sx - 20, 935]], { wash: '#4A3E5E', washOp: 170, ink: null });
    else paint(lumpCloud(sx, 930, 100, 22, 3), { wash: '#4A3E5E', washOp: 170, ink: null });
    // 肆: lunges and swings at b1 and b2.4 (misses), then gets the net over her own head (b3.3), dizzy
    const x = kf(b, [[0, 900], [.8, 1030], [1.5, 1030], [2.3, 760], [4, 760]]);
    const swingA = b < 1.5 ? kf(b, [[.5, 1.4], [1, -.6], [1.5, -.4]]) : b < 3 ? kf(b, [[1.9, 1.4], [2.4, -.6], [3, -.3]]) : kf(b, [[3, -.3], [3.3, 2.5]]);
    const m = emotions(lt, [[0, 'determined', { lookX: 1, lookY: .6 }], [1.05 * Q, 'surprised', { lookX: -1, lookY: .6 }], [2.45 * Q, 'angry', { lookX: 1, lookY: .6 }], [3.3 * Q, 'dizzy']], { take: .8 });
    const faceL = b > 1.05 && b < 2.45;
    si(x, GY, 26, { ...m, flip: faceL, view: 'q', aR: .4, aL: -.2, armR: (u) => { upright(.4); net(u, faceL ? -swingA : swingA - .4); } });
    if (b > 3.3) { boilSeed('netHead'); paint(ellPts(x, GY - 9 * 26, 6 * 26, 3.6 * 26, 20), { wash: '#F3EFE6', washOp: 110, ink: PAL.ink, sw: .8 }); }
    camEnd();
    if (lt < .22) whipPan(.5 + lt / .44, ['#6E2B38', '#B9A8D0']);
  }

  // ---------- p3 · 有几个陪我等雨停 (肆): alone at a rainy bus stop; umbrellas hurry past; 采 comes and sits ----------
  function shelter() {
    boilSeed('shelter');
    paint(rectPts(560, 380, 900, 40), { wash: '#3A6A78', ink: PAL.ink, sw: 1 });
    for (const x of [590, 1420]) paint(rectPts(x - 10, 400, 20, 500), { wash: '#2E4E5A', ink: PAL.ink, sw: .8 });
    paint(rectPts(620, 420, 780, 260), { wash: '#BFE0E8', washOp: 70, ink: PAL.ink, sw: .6 });
    paint(rectPts(700, 800, 600, 24), { wash: '#8A5E48', ink: PAL.ink, sw: .8 });
    for (const x of [730, 1270]) paint(rectPts(x - 8, 820, 16, 80), { wash: '#5E4232', ink: PAL.ink, sw: .6 });
  }
  function p3(t, lt, dur) {
    const b = beats(lt);
    camBegin(960, 540, 1.02 + .03 * seg(b, 2.5, 4));
    skyIn(FULL, '#34406E', '#56649A', t, 'bsky3', 760);
    skyline(FULL, 820, '#28305C', '#F2B84E', 41, 80, 240, .3);
    boilSeed('street3'); paint(rectPts(-400, 860, W + 800, 500), { wash: '#3E4466', fill: '#2A2E4A', fillOp: 70, ink: PAL.ink, sw: .8 });
    for (let i = 0; i < 5; i++) paint(ellPts(150 + i * 420, 960 + 20 * (i % 2), 110, 12, 16), { wash: '#6E7AA8', washOp: 200, ink: null });
    shelter();
    // passers-by with umbrellas, hurrying left → right without stopping
    [[.0, '#D8394E', 18], [1.1, '#E8AA38', 17]].forEach(([d, c, u], i) => {
      const k = seg(b, d, d + 1.6); if (k <= 0 || k >= 1) return;
      const x = lerp(-150, W + 150, k);
      clawd(x, GY + 20, u, { eyes: 'narrow', mouth: null, view: 'side', walk: x / 70, col: '#8C8FA8', dk: '#62657E', lt: '#B5B8CC', tint: null, aL: 1.3, armL: (uu) => { upright(1.3); umbrella(0, .2 * uu, 1.7 * uu, 1, 0, c, { key: 'pumb' + i }); }, boilKey: 'passer' + i });
    });
    const ms = emotions(lt, [[0, 'sad', { lookX: 1 }], [2.6 * Q, 'surprised', { lookX: 1 }], [3.2 * Q, 'happy', { lookX: 1 }]], { take: .7 });
    si(880, 810, 24, { ...ms, noLegs: false, aL: -.3, aR: -.3 });
    // 采 walks in from the right under her umbrella (b2.2), closes it and sits beside her (b3)
    const w = stroll(lt, 2.1 * Q, 2.9 * Q, W + 150, 1140, 24), sit = seg(b, 2.9, 3.2), furl = seg(b, 2.85, 3.05);
    const mc = emotions(lt, [[0, 'happy', { lookX: -1 }], [3.2 * Q, 'love', { lookX: -1 }]], { take: .6 });
    if (b > 2.1) cai(w.x, lerp(GY, 810, ease(sit)), 24, { ...mc, ...w, flip: true, noShadow: sit > .5, aR: 1.3 - 1.5 * furl, armR: (uu) => { upright(1.3 - 1.5 * furl); umbrella(0, .2 * uu, 1.7 * uu, 1 - furl, 0, '#E27A92', { key: 'cumb' }); } });
    rainIn(FULL, t, 1, '#AFC0E8', 'r3');
    camEnd();
  }

  // ---------- p4 · 难得真性情 (郭): silly faces, then both fall over laughing ----------
  function p4(t, lt, dur) {
    const b = beats(lt);
    camBegin(960, 560, 1.06 + .04 * seg(b, 3, 4));
    skyIn(FULL, '#F6C8A0', '#FFF1C8', t, 'fsky4', 700);
    boilSeed('fgrass'); paint(ellPts(960, 1180, 1500, 400, 40, 3), { wash: '#A8CC7A', ink: PAL.ink, sw: .9 });
    for (let i = 0; i < 14; i++) { boilSeed('conf' + i); const ph = frac(t * .4 + hash(i)); paint(rectPts(100 + hash(i * 3) * 1720 + 20 * Math.sin(t * 3 + i), -40 + ph * 900, 14, 8), { wash: [PAL.rose, PAL.ochre, PAL.sky, '#9CCB7A'][i % 4], ink: null }); }
    // b0 采 pulls a face, b1 肆 cracks up, b2 肆 pulls one back, b3 both fall over laughing
    const fall = ease(seg(b, 3, 3.35)), roll = Math.sin(lt * 18) * .06 * fall;
    const mc = emotions(lt, [[0, 'playful', { eyes: ['swirl', 'wide'], mouth: 'tongue' }], [1.2 * Q, 'happy', { lookX: 1 }], [2.2 * Q, 'laugh'], [3 * Q, 'laugh']], { take: .9 });
    const ms = emotions(lt, [[0, 'surprised', { lookX: -1 }], [1 * Q, 'laugh'], [2 * Q, 'playful', { eyes: ['x', 'wide'], mouth: 'tongue', lookX: -1 }], [3 * Q, 'laugh']], { take: .9 });
    cai(720, GY, 30, { ...mc, rot: -1.2 * fall + roll, dx: -1 * fall, aL: b < 1 ? 1.4 : .6, aR: b < 1 ? 1.4 : .6 });
    si(1200, GY, 30, { ...ms, rot: 1.2 * fall - roll, dx: 1 * fall, aL: b > 2 && b < 3 ? 1.4 : .6, aR: b > 2 && b < 3 ? 1.4 : .6 });
    if (b > 3.1) { boilSeed('laughH'); emote('hearts', 960, GY - 10 * 30, 60, seg(b, 3.1, 3.4), lt); }
    camEnd();
  }

  // ---------- p5 · 天高海阔我的渊明 谁倾听 (肆): a tin-can phone across the wide sea; 采 is listening ----------
  const IS = 2350;   // 采's island, off to the right
  function p5(t, lt, dur) {
    const b = beats(lt), pan = ease(seg(b, 2.3, 3.4));
    camBegin(lerp(760, IS - 380, pan), 520, lerp(1.0, 1.08, pan));
    skyIn(reg(-600, 3400), '#9FD3EE', '#FFF1C8', t, 'seasky', 700);
    for (let i = 0; i < 4; i++) { boilSeed('gull' + i); const x = ((t * 60 + i * 700) % 3200) - 300, y = 180 + 60 * (i % 2); inkLine([[x - 24, y], [x - 10, y - 10], [x, y], [x + 10, y - 10], [x + 24, y]], 1.2, PAL.ink, 'ink', .6); }
    boilSeed('sea5'); paint(rectPts(-600, 700, 4000, 700), { wash: '#4FA8B0', fill: '#2E7C84', fillOp: 80, ink: PAL.ink, sw: .7 });
    for (let i = 0; i < 16; i++) inkLine([[-400 + i * 240 + 30 * Math.sin(t + i), 760 + (i % 4) * 60], [-310 + i * 240 + 30 * Math.sin(t + i), 760 + (i % 4) * 60]], .9, PAL.cream, 'inkfine', 0);
    // the pier on the left, a pot of chrysanthemums (渊明's flower) at its end
    boilSeed('pier');
    paint(rectPts(-400, 830, 1120, 40), { wash: '#8A5E48', ink: PAL.ink, sw: .9 });
    for (let x = -300; x < 720; x += 160) paint(rectPts(x, 870, 22, 300), { wash: '#6B4A3A', ink: PAL.ink, sw: .6 });
    paint(rectPts(600, 780, 60, 50), { wash: '#B8573A', ink: PAL.ink, sw: .6 });
    for (let i = 0; i < 3; i++) paint(starPts(610 + i * 20, 760 - 10 * (i % 2), 18, .45, 10), { wash: '#F4C24A', ink: PAL.ink, sw: .4 });
    // 采's island on the right
    boilSeed('island');
    paint(ellPts(IS, 860, 260, 70, 24, 3), { wash: '#E6CFA0', ink: PAL.ink, sw: .9 });
    palm(IS + 150, 840, 40, t, 'islpalm');
    // the string, sagging across the sea, from 肆's can to 采's
    const canS = [480 + 7 * 24, 830 - 6.6 * 24], canC = [IS - 7 * 24, 830 - 6.6 * 24];
    boilSeed('string');
    const P = []; for (let i = 0; i <= 12; i++) { const k = i / 12; P.push([lerp(canS[0], canC[0], k), lerp(canS[1], canC[1], k) + 120 * Math.sin(k * Math.PI)]); }
    inkLine(P, 1.1, PAL.ink, 'inkfine', .5);
    // little sound ripples running along the string while 肆 talks
    for (let j = 0; j < 3; j++) { const k = frac(t * .8 + j / 3), i = Math.floor(k * 12); if (b < 3.2) { const p = P[i]; boilSeed('snd' + j); paint(ellPts(p[0], p[1] - 14, 8, 8, 8), { wash: PAL.cream, ink: PAL.ink, sw: .4 }); } }
    const can = (a) => (uu) => { upright(a); paint(rrPts(-.6 * uu, -1 * uu, 1.2 * uu, 1.6 * uu, .2 * uu), { wash: '#B8BCC8', ink: PAL.ink, sw: .7 }); };
    const ms = emotions(lt, [[0, 'hopeful', { lookX: 1 }], [1.5 * Q, 'thinking', { lookX: 1, lookY: -.3 }], [3.3 * Q, 'happy', { lookX: 1 }]], { take: .5 });
    si(480, 830, 24, { ...ms, aR: 1.0, aL: -.2, armR: can(1.0) });
    const mc = emotions(lt, [[0, 'shy', { lookX: -1 }], [3.1 * Q, 'love', { lookX: -1 }]], { take: .7 });
    const nod = b > 3.1 ? .1 * Math.sin((lt - 3.1 * Q) * 12) : 0;
    cai(IS, 830, 24, { ...mc, flip: true, rot: nod, aR: 1.0, aL: -.2, armR: can(1.0) });
    camEnd();
    if (lt > dur - .3) { boilSeed('wipeP5'); brushWipe((lt - (dur - .3)) / .6, SEA); }
  }

  shotList(9, [p1, p2, p3, p4, p5]);
})();
