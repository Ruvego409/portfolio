import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  M as i,
  P as a,
  c as o,
  h as s,
  j as c,
  o as l,
} from "./react.D20wc1Tc.mjs";
import { N as u, b as d, t as f } from "./motion.jtMCvOiK.mjs";
import { L as p, Q as m, m as h, r as g, y as _ } from "./framer.jQONGl1Q.mjs";
import {
  d as v,
  f as ee,
  i as y,
  l as b,
  n as x,
  o as S,
  p as C,
  s as w,
  t as T,
} from "./OIjZRBmWDcIE2B6qgG1j.CjKmj2_P.mjs";
function E(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function D(e) {
  let t = E(e);
  return o(N, { ...t });
}
function te(e) {
  let t = m(),
    n = r(!1),
    i = r(!1),
    a = c((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: c(() => {
      let r = e.current;
      r &&
        ((r.preload = `auto`),
        !(
          r.currentTime > 0 &&
          r.onplaying &&
          !r.paused &&
          !r.ended &&
          r.readyState >= r.HAVE_CURRENT_DATA
        ) &&
          r &&
          !n.current &&
          t &&
          ((n.current = !0),
          (i.current = !0),
          r
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: c(() => {
      !e.current || n.current || (e.current.pause(), (i.current = !1));
    }, []),
    setProgress: a,
    isPlaying: i,
  };
}
function ne({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
  let [o] = a(e),
    [s, c] = a(!1);
  e !== o && !s && c(!0);
  let l = o && t && n && r && !i && !s,
    u;
  return ((u = l ? `on-viewport` : o ? `on-mount` : `no-autoplay`), u);
}
function O(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function k(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(O).join(` `);
}
var A,
  j,
  M,
  N,
  P,
  F = e(() => {
    (l(),
      p(),
      f(),
      T(),
      n(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((A ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((j ||= {})),
      (M = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (N = s(function (e) {
        let {
            srcType: n = `URL`,
            srcUrl: a,
            srcFile: s = ``,
            posterEnabled: c = !1,
            controls: l = !1,
            playing: f = !0,
            loop: p = !0,
            muted: m = !0,
            playsinline: g = !0,
            restartOnEnter: _ = !1,
            objectFit: x = `cover`,
            backgroundColor: C = `rgba(0,0,0,0)`,
            radius: T = 0,
            volume: E = 25,
            startTime: D = 0,
            poster: O,
            playing: k,
            progress: A,
            onSeeked: j,
            onPause: N,
            onPlay: P,
            onEnd: F,
            onClick: I,
            onMouseEnter: re,
            onMouseLeave: ie,
            onMouseDown: ae,
            onMouseUp: L,
          } = e,
          R = r(),
          z = b(),
          B = r(null),
          V = r(null),
          H = S(),
          U = w(),
          W = H || U === h.export,
          G = y(e),
          K = W
            ? `no-autoplay`
            : ne({ playingProp: k, muted: m, loop: p, playsinline: g, controls: l }),
          q = W ? !0 : u(R),
          oe = !W && u(R, { margin: `10%`, once: !0 }),
          J = D === 100 ? 99.9 : D,
          { play: Y, pause: X, setProgress: Z, isPlaying: Q } = te(R);
        (i(() => {
          W || (K !== `on-viewport` && (k ? Y() : X()));
        }, [K, k]),
          i(() => {
            W || (q && k && K !== `no-autoplay` && Y(), K === `on-viewport` && X());
          }, [K, q, k]),
          i(() => {
            !H || O || c || J || !R.current || (R.current.currentTime = 0.01);
          }, [c, O, J]));
        let $ = r(!1);
        (i(() => {
          if (!$.current) {
            $.current = !0;
            return;
          }
          let e = d(A) ? A.get() : (A ?? 0) * 0.01;
          Z((e ?? 0) || (J ?? 0) / 100);
        }, [J, s, a, A]),
          i(() => {
            if (d(A)) return A.on(`change`, (e) => Z(e));
          }, [A]),
          v(() => {
            B.current !== null && R.current && ((!V && p) || !B.current) && Y();
          }),
          ee(() => {
            R.current && ((V.current = R.current.ended), (B.current = R.current.paused), X());
          }));
        let se = t(() => {
          if (n === `URL`) return a + ``;
          if (n === `Upload`) return s + ``;
        }, [n, s, a, J]);
        return (
          i(() => {
            z && R.current && K === `on-mount` && setTimeout(() => Y(), 50);
          }, []),
          i(() => {
            R.current && !m && (R.current.volume = (E ?? 0) / 100);
          }, [E]),
          o(`video`, {
            onClick: I,
            onMouseEnter: re,
            onMouseLeave: ie,
            onMouseDown: ae,
            onMouseUp: L,
            src: se,
            loop: p,
            ref: R,
            onSeeked: (e) => j?.(e),
            onPause: (e) => N?.(e),
            onPlay: (e) => P?.(e),
            onEnded: (e) => F?.(e),
            autoPlay: Q.current || K === `on-mount` || (k && K === `on-viewport` && q),
            preload: Q.current
              ? `auto`
              : W && !O
                ? `metadata`
                : K !== `on-mount` && !oe
                  ? `none`
                  : `metadata`,
            poster:
              c && !s && a === M
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : c && O
                  ? O
                  : void 0,
            onLoadedData: () => {
              let e = R.current;
              e &&
                (e.currentTime < 0.3 && J > 0 && Z((J ?? 0) * 0.01),
                (Q.current || K === `on-mount` || (k && K === `on-viewport` && q)) && Y());
            },
            controls: l,
            muted: W ? !0 : m,
            playsInline: g,
            style: {
              cursor: I ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: G,
              display: `block`,
              objectFit: x,
              backgroundColor: C,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (D.displayName = `Video`),
      (P = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      _(D, {
        srcType: {
          type: g.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: g.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: g.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          description: `Only MP4 and WebM`,
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: { type: g.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
        ...x,
        posterEnabled: {
          type: g.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: g.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: { type: g.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: { title: `Start Time`, type: g.Number, min: 0, max: 100, step: 0.1, unit: `%` },
        loop: { type: g.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        objectFit: { type: g.Enum, title: `Fit`, options: P, optionTitles: P.map(k) },
        controls: {
          type: g.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: { type: g.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
        volume: {
          type: g.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: g.EventHandler },
        onSeeked: { type: g.EventHandler },
        onPause: { type: g.EventHandler },
        onPlay: { type: g.EventHandler },
        ...C,
      }));
  });
export { F as n, D as t };
//# sourceMappingURL=Video.CwIi_51J.mjs.map
