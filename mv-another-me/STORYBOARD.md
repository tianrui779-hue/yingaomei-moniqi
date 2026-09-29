# 世界上的另一个我 · 阿肆 / 郭采洁 — a ~60 s painted lyric MV

Style: the painted-animation skill (p5.brush watercolour + boiling ink, karaoke in Ma Shan Zheng), same look as the
《小镇姑娘》 example the user sent.

**Length:** 64 s with audio.

**Logline:** Two square friends live a world apart (Taipei / Shanghai, Berlin / Bangkok), always on opposite sides of
a torn-paper seam, yet every move one makes the other feels at the same moment. Time washes everything else away, but
never the other one; in the end the seam is gone and they watch the same fireworks, together.

**Cast**
- **采** (郭采洁's lines): rosy pink block, a white flower on her head. Taiwanese, so she starts in Taipei.
- **肆** (阿肆's lines): butter-yellow block, a teal beanie. From Shanghai, so she starts on the Bund.
The karaoke fill colour follows the singer: rose for 郭, butter for 肆.

**Motif:** the split screen. A vertical torn-paper seam divides "我" and "你" in the verses; what one does crosses it
(a touch, the sun, an umbrella). It dissolves into a rainbow at the end of the verse and never comes back.
**Colour arc:** cool night / cold rain (apart) → golden sunset beach (chorus 1) → bright day garden (chorus 2) →
warm fireworks night (together). **Rhyme:** opens on 采 alone under Taipei fireworks; ends with both of them under
the same fireworks, clinking the Mojito from line 2.

## Song grid (measured)

From the song recording the user supplied: **132.5 BPM** (`beat_grid.py`), and each line's onset from the vocal track
(isolated with Spleeter, then its energy and pitch contour). Verse lines are 8 beats (~3.6 s), except the first
「世界上的另一个我」 (4 beats); the chorus alternates 5–6 and 3 beat lines, then 「啦啦啦啦 我亲爱的你呀」.

The clip (`assets/clip.m4a`, 64.0 s) = song 12.684 s (a beat in the whistle intro) → 43.363 s (end of verse 2), then a
34-beat cut over the pre-chorus 「人生到处是假正经…」 to 58.760 s (both cut points fall between sung words; 60 ms
crossfade), then the whole chorus (郭's half, a short break, 肆's half) and the outro with a fade.

Shot cuts and karaoke come from `CUTS` / `LINES` in `src/scenes/ot_set.js` (song seconds). Each shot's staging is in
quarters of its own length (`Q`); the two 「啦啦啦啦」 shots hit the four measured 啦 notes (`LA_G`, `LA_S`).
The table below keeps the original bar numbering as shot names.

| Bar | Line (singer) | Shot | Beat hits | Out |
|---|---|---|---|---|
| 0 | intro | Ink iris opens on the split screen: 采 on a Taipei roof (night, left), 肆 at a Bund café (dusk, right). A rocket climbs on the left. | iris b0, rocket b2 | camera pushes into the left half |
| 1 | 上一秒我在台北看烟火 (郭) | Taipei 101 at night. Fireworks burst over 采, who goes surprised → starstruck. | bursts b0, b2, b3 | whip pan right |
| 2 | 下一秒你在上海喝Mojito (郭) | The Bund at dusk, Oriental Pearl across the river. 肆 lifts her Mojito, sips, blushes; bubbles pop on the beats. | lift b1, sip b2, bubbles b2–b4 | cut on the beat |
| 3 | 你感觉我 就像我感觉你 (郭) | Split screen. 采 lays a paw on the seam → a ripple crosses to 肆, who turns → 肆 lays her paw on the same spot; the seam glows where they meet. | touch b0, ripple b1, touch b2, glow b3 | camera pulls back |
| 4 | 世界上的另一个我 (郭) | Mirror dance: the two hop, lean and wave as mirror images across the seam; a heart pops over it. | hops b0, b2; heart b3 | blue-grey brush wipe |
| 5 | 上一秒我在柏林落大雨 (肆) | Berlin, TV tower in the rain. 肆 under a tiny umbrella; the wind flips it inside-out; soaked. | rain b0, flip b2 | whip pan right |
| 6 | 下一秒你在曼谷天气晴 (肆) | Bangkok: golden temple roof, palm, a sun that pops out. 采 slides on shades, cool, thumbs up. | sun b0, shades b1, thumb b3 | cut on the beat |
| 7 | 你感受我 就像我感受你 (肆) | Split: rain left (肆), sun right (采). 采 rolls the sun across the seam; the rain stops; 肆 sends her umbrella back over to shade 采. | sun crosses b0–b2, umbrella b2.5–b3.5 | — |
| 8 | 世界上的另一个我 (肆) | The seam peels away into a rainbow over both halves; they walk to the middle and high-five. | peel b0–b2, high-five b3 | a wave rises from below |
| 9 | 岁月为我大浪淘沙 (郭) | Sunset beach: sandcastle, paper boat, clock, footprints. A huge painted wave curls up and crashes across, sweeping it all away. | rise b0–b2, crash b2 | the wave covers the frame |
| 10 | 而你被留下 (郭) | The wave draws back: bare wet sand, one sparkle — 肆 pops up out of the sand. 采 runs in and hugs her. | sparkle b1, pop b2, hug b3 | cut on action |
| 11 | 我的世界流转变化 (郭) | 采 under a tree on a hill; the world turns a season on every beat: blossom, summer, autumn leaves, snow. | a season per beat | circle wipe |
| 12 | 你却没时差 (郭) | Split: a clock over each of them spins wildly, then both snap to twelve on the same beat; they grin at each other. | spin b0–b2, snap b2 | seam slides off |
| 13–14 | 啦啦啦啦 我亲爱的你呀 (郭) | Sunset stage: a note pops on each "啦" as they hop in turn; then 采 turns to 肆, cheek bump, hearts. | notes b0–b3, bump bar 14 b1 | warm brush wipe |
| 15 | 岁月待我晴雨交加 (肆) | 肆 in a meadow: sun / rain / sun / rain on each beat, her umbrella snapping open and shut. | every beat | — |
| 16 | 而你被孵化 (肆) | An egg in 肆's nest wobbles, cracks, and out pops a tiny 采 with an eggshell cap. | wobble b0, crack b1, hatch b2 | — |
| 17 | 我的心事纷乱复杂 (肆) | Close on 肆: a ball of tangled ink thoughts grows over her head, dizzy eyes, sweat. | tangle grows each beat | — |
| 18 | 你却能解码 (肆) | 采 pulls one loose end; the tangle unravels on the beat into a single line that draws a heart. | pull b1, unravel b2, heart b3 | iris to night |
| 19–20 | 啦啦啦啦 我亲爱的你呀 (肆) | Back on the Taipei roof, now together: a firework per "啦", then they clink two Mojitos and a heart firework blooms. | bursts b0–b3, clink bar 20 b1, heart b2 | — |
| 21 | outro | Hold on the pair under the heart firework; iris closes on them. | iris out | end |
