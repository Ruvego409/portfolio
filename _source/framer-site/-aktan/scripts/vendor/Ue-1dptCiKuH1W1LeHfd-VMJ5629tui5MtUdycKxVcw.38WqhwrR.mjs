import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  M as i,
  N as a,
  P as o,
  c as s,
  g as c,
  h as l,
  j as u,
  k as d,
  l as f,
  o as p,
  v as ee,
} from "./react.D20wc1Tc.mjs";
import { N as m, S as h, a as g, b as _, r as te, t as v } from "./motion.jtMCvOiK.mjs";
import {
  $ as y,
  A as b,
  J as x,
  L as S,
  M as C,
  Q as ne,
  S as w,
  X as T,
  Z as E,
  a as D,
  at as O,
  ct as k,
  et as A,
  h as j,
  l as M,
  lt as N,
  m as P,
  n as F,
  nt as I,
  ot as L,
  q as R,
  r as z,
  s as B,
  t as V,
  tt as re,
  v as H,
  w as U,
  y as W,
} from "./framer.jQONGl1Q.mjs";
import {
  d as ie,
  f as ae,
  i as oe,
  l as se,
  n as G,
  o as ce,
  p as K,
  s as le,
  t as q,
} from "./OIjZRBmWDcIE2B6qgG1j.CjKmj2_P.mjs";
import { a as J, i as ue, o as de, r as Y } from "./shared-lib.B1UR4gSL.mjs";
import { n as fe, t as pe } from "./Video.C7bZWvFX.mjs";
import me, { t as he } from "./_dbah60N96ivAbPBIP3mQVx2CqI4pTMIScmOZn9ukck.hYXt9pAq.mjs";
function ge(e) {
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
function X(e) {
  let t = ge(e);
  return s(we, { ...t });
}
function _e(e) {
  let t = ne(),
    n = r(!1),
    i = r(!1),
    a = u((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: u(() => {
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
    pause: u(() => {
      !e.current || n.current || (e.current.pause(), (i.current = !1));
    }, []),
    setProgress: a,
    isPlaying: i,
  };
}
function ve({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
  let [a] = o(e),
    [s, c] = o(!1);
  e !== a && !s && c(!0);
  let l = a && t && n && r && !i && !s,
    u;
  return ((u = l ? `on-viewport` : a ? `on-mount` : `no-autoplay`), u);
}
function ye(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function be(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(ye).join(` `);
}
var xe,
  Se,
  Ce,
  we,
  Te,
  Ee = e(() => {
    (p(),
      S(),
      v(),
      q(),
      n(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((xe ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((Se ||= {})),
      (Ce = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (we = l(function (e) {
        let {
            srcType: n = `URL`,
            srcUrl: a,
            srcFile: o = ``,
            posterEnabled: c = !1,
            controls: l = !1,
            playing: u = !0,
            loop: d = !0,
            muted: f = !0,
            playsinline: p = !0,
            restartOnEnter: ee = !1,
            objectFit: h = `cover`,
            backgroundColor: g = `rgba(0,0,0,0)`,
            radius: te = 0,
            volume: v = 25,
            startTime: y = 0,
            poster: b,
            playing: x,
            progress: S,
            onSeeked: C,
            onPause: ne,
            onPlay: w,
            onEnd: T,
            onClick: E,
            onMouseEnter: D,
            onMouseLeave: O,
            onMouseDown: k,
            onMouseUp: A,
          } = e,
          j = r(),
          M = se(),
          N = r(null),
          F = r(null),
          I = ce(),
          L = le(),
          R = I || L === P.export,
          z = oe(e),
          B = R
            ? `no-autoplay`
            : ve({ playingProp: x, muted: f, loop: d, playsinline: p, controls: l }),
          V = R ? !0 : m(j),
          re = !R && m(j, { margin: `10%`, once: !0 }),
          H = y === 100 ? 99.9 : y,
          { play: U, pause: W, setProgress: G, isPlaying: K } = _e(j);
        (i(() => {
          R || (B !== `on-viewport` && (x ? U() : W()));
        }, [B, x]),
          i(() => {
            R || (V && x && B !== `no-autoplay` && U(), B === `on-viewport` && W());
          }, [B, V, x]),
          i(() => {
            !I || b || c || H || !j.current || (j.current.currentTime = 0.01);
          }, [c, b, H]));
        let q = r(!1);
        (i(() => {
          if (!q.current) {
            q.current = !0;
            return;
          }
          let e = _(S) ? S.get() : (S ?? 0) * 0.01;
          G((e ?? 0) || (H ?? 0) / 100);
        }, [H, o, a, S]),
          i(() => {
            if (_(S)) return S.on(`change`, (e) => G(e));
          }, [S]),
          ie(() => {
            N.current !== null && j.current && ((!F && d) || !N.current) && U();
          }),
          ae(() => {
            j.current && ((F.current = j.current.ended), (N.current = j.current.paused), W());
          }));
        let J = t(() => {
          if (n === `URL`) return a + ``;
          if (n === `Upload`) return o + ``;
        }, [n, o, a, H]);
        return (
          i(() => {
            M && j.current && B === `on-mount` && setTimeout(() => U(), 50);
          }, []),
          i(() => {
            j.current && !f && (j.current.volume = (v ?? 0) / 100);
          }, [v]),
          s(`video`, {
            onClick: E,
            onMouseEnter: D,
            onMouseLeave: O,
            onMouseDown: k,
            onMouseUp: A,
            src: J,
            loop: d,
            ref: j,
            onSeeked: (e) => C?.(e),
            onPause: (e) => ne?.(e),
            onPlay: (e) => w?.(e),
            onEnded: (e) => T?.(e),
            autoPlay: K.current || B === `on-mount` || (x && B === `on-viewport` && V),
            preload: K.current
              ? `auto`
              : R && !b
                ? `metadata`
                : B !== `on-mount` && !re
                  ? `none`
                  : `metadata`,
            poster:
              c && !o && a === Ce
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : c && b
                  ? b
                  : void 0,
            onLoadedData: () => {
              let e = j.current;
              e &&
                (e.currentTime < 0.3 && H > 0 && G((H ?? 0) * 0.01),
                (K.current || B === `on-mount` || (x && B === `on-viewport` && V)) && U());
            },
            controls: l,
            muted: R ? !0 : f,
            playsInline: p,
            style: {
              cursor: E ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: z,
              display: `block`,
              objectFit: h,
              backgroundColor: g,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (X.displayName = `Video`),
      (Te = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      W(X, {
        srcType: {
          type: z.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: z.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: z.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        ...G,
        loop: { type: z.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        posterEnabled: {
          type: z.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hiddenWhenUnset: !0,
          defaultValue: !0,
        },
        poster: {
          type: z.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        controls: {
          type: z.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
          hiddenWhenUnset: !0,
        },
        muted: {
          type: z.Boolean,
          title: `Muted`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hiddenWhenUnset: !0,
        },
        objectFit: {
          type: z.Enum,
          title: `Fit`,
          options: Te,
          optionTitles: Te.map(be),
          hiddenWhenUnset: !0,
        },
        playing: {
          type: z.Boolean,
          title: `Playing`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hiddenWhenUnset: !0,
        },
        backgroundColor: { type: z.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: {
          title: `Start Time`,
          type: z.Number,
          min: 0,
          max: 100,
          step: 0.1,
          unit: `%`,
          hiddenWhenUnset: !0,
        },
        volume: {
          type: z.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
          hiddenWhenUnset: !0,
        },
        onEnd: { type: z.EventHandler },
        onSeeked: { type: z.EventHandler },
        onPause: { type: z.EventHandler },
        onPlay: { type: z.EventHandler },
        ...K,
      }));
  });
function De(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Z,
  Le = e(() => {
    (p(),
      S(),
      v(),
      n(),
      (Oe = [`ynjoDQg7q`, `IV7eQNktG`, `duJun0NdW`, `NkZG6k5rW`, `GdLT0GozL`, `MfN5l00Kg`]),
      (ke = `framer-IM9yu`),
      (Ae = {
        duJun0NdW: `framer-v-90dzeb`,
        GdLT0GozL: `framer-v-t7tbrv`,
        IV7eQNktG: `framer-v-1xuqwfg`,
        MfN5l00Kg: `framer-v-7u6xld`,
        NkZG6k5rW: `framer-v-ke4l5v`,
        ynjoDQg7q: `framer-v-12tjvtj`,
      }),
      (je = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Me = ({ value: e, children: n }) => {
        let r = d(g),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(g.Provider, { value: a, children: n });
      }),
      (Ne = {
        "Variant 1": `ynjoDQg7q`,
        "Variant 2": `IV7eQNktG`,
        "Variant 3": `duJun0NdW`,
        "Variant 4": `NkZG6k5rW`,
        "Variant 5": `GdLT0GozL`,
        "Variant 6": `MfN5l00Kg`,
      }),
      (Pe = h.create(a)),
      (Fe = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ne[r.variant] ?? r.variant ?? `ynjoDQg7q`,
      })),
      (Ie = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = L(
        c(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = ee(),
            { activeLocale: o, setLocale: c } = A(),
            l = x(),
            { style: u, className: d, layoutId: f, variant: p, ...m } = Fe(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: S,
              setGestureState: ne,
              setVariant: T,
              variants: E,
            } = O({
              cycleOrder: Oe,
              defaultVariant: `ynjoDQg7q`,
              ref: i,
              variant: p,
              variantClassNames: Ae,
            }),
            D = Ie(e, E),
            { activeVariantCallback: k, delay: j } = R(g),
            M = k(async (...e) => {
              await j(() => T(`IV7eQNktG`, !0), 700);
            }),
            N = k(async (...e) => {
              await j(() => T(`duJun0NdW`, !0), 700);
            }),
            P = k(async (...e) => {
              await j(() => T(`NkZG6k5rW`, !0), 700);
            }),
            F = k(async (...e) => {
              await j(() => T(`GdLT0GozL`, !0), 700);
            });
          I(g, {
            default: M,
            duJun0NdW: P,
            GdLT0GozL: k(async (...e) => {
              await j(() => T(`MfN5l00Kg`, !0), 700);
            }),
            IV7eQNktG: N,
            MfN5l00Kg: k(async (...e) => {
              await j(() => T(`ynjoDQg7q`, !0), 700);
            }),
            NkZG6k5rW: F,
          });
          let L = w(ke);
          return s(te, {
            id: f ?? a,
            children: s(Pe, {
              animate: E,
              initial: !1,
              children: s(Me, {
                value: je,
                children: s(h.div, {
                  ...m,
                  ...y,
                  className: w(L, `framer-12tjvtj`, d, _),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: D,
                  layoutId: `ynjoDQg7q`,
                  ref: i,
                  style: { backgroundColor: `rgb(182, 182, 182)`, ...u },
                  ...De(
                    {
                      duJun0NdW: { "data-framer-name": `Variant 3` },
                      GdLT0GozL: { "data-framer-name": `Variant 5` },
                      IV7eQNktG: { "data-framer-name": `Variant 2` },
                      MfN5l00Kg: { "data-framer-name": `Variant 6` },
                      NkZG6k5rW: { "data-framer-name": `Variant 4` },
                    },
                    g,
                    b
                  ),
                  children: s(B, {
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 2031.2,
                      intrinsicWidth: 2645.6,
                      loading: C((l?.y || 0) + (40 + ((l?.height || 499) - 80 - 419) / 2)),
                      pixelHeight: 2539,
                      pixelWidth: 3307,
                      sizes: `546px`,
                      src: `../../assets/images/VocXQQCXA7epkcS8eluPo9Gt8.png?width=3307&height=2539`,
                      srcSet: `../../assets/images/VocXQQCXA7epkcS8eluPo9Gt8.png?scale-down-to=512&width=3307&height=2539 512w,../../assets/images/VocXQQCXA7epkcS8eluPo9Gt8.png 1024w,../../assets/images/VocXQQCXA7epkcS8eluPo9Gt8.png?scale-down-to=2048&width=3307&height=2539 2048w,../../assets/images/VocXQQCXA7epkcS8eluPo9Gt8.png?width=3307&height=2539 3307w`,
                    },
                    className: `framer-1srttks`,
                    "data-framer-name": `Untitled-12`,
                    layoutDependency: D,
                    layoutId: `NvfQaR55k`,
                    ...De(
                      {
                        duJun0NdW: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 2539,
                            intrinsicWidth: 3307,
                            loading: C((l?.y || 0) + (40 + ((l?.height || 499) - 80 - 419) / 2)),
                            pixelHeight: 2539,
                            pixelWidth: 3307,
                            sizes: `546px`,
                            src: `../../assets/images/JYh5SlKqZ9L7wxTU4uKGfacDHuc.png?width=3307&height=2539`,
                            srcSet: `../../assets/images/JYh5SlKqZ9L7wxTU4uKGfacDHuc.png?scale-down-to=512&width=3307&height=2539 512w,../../assets/images/JYh5SlKqZ9L7wxTU4uKGfacDHuc.png 1024w,../../assets/images/JYh5SlKqZ9L7wxTU4uKGfacDHuc.png?scale-down-to=2048&width=3307&height=2539 2048w,../../assets/images/JYh5SlKqZ9L7wxTU4uKGfacDHuc.png?width=3307&height=2539 3307w`,
                          },
                        },
                        GdLT0GozL: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 2539,
                            intrinsicWidth: 3307,
                            loading: C((l?.y || 0) + (40 + ((l?.height || 494) - 80 - 419) / 2)),
                            pixelHeight: 2539,
                            pixelWidth: 3307,
                            sizes: `546px`,
                            src: `../../assets/images/2CdVDz59r6Nll29JHVL7VZiOcQ.png?width=3307&height=2539`,
                            srcSet: `../../assets/images/2CdVDz59r6Nll29JHVL7VZiOcQ.png?scale-down-to=512&width=3307&height=2539 512w,../../assets/images/2CdVDz59r6Nll29JHVL7VZiOcQ.png 1024w,../../assets/images/2CdVDz59r6Nll29JHVL7VZiOcQ.png?scale-down-to=2048&width=3307&height=2539 2048w,../../assets/images/2CdVDz59r6Nll29JHVL7VZiOcQ.png?width=3307&height=2539 3307w`,
                          },
                        },
                        IV7eQNktG: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 2539,
                            intrinsicWidth: 3307,
                            loading: C((l?.y || 0) + (40 + ((l?.height || 499) - 80 - 419) / 2)),
                            pixelHeight: 2539,
                            pixelWidth: 3307,
                            sizes: `546px`,
                            src: `../../assets/images/JmSqjwmCflMndUGmL2sGQvEcfBU.png?width=3307&height=2539`,
                            srcSet: `../../assets/images/JmSqjwmCflMndUGmL2sGQvEcfBU.png?scale-down-to=512&width=3307&height=2539 512w,../../assets/images/JmSqjwmCflMndUGmL2sGQvEcfBU.png 1024w,../../assets/images/JmSqjwmCflMndUGmL2sGQvEcfBU.png?scale-down-to=2048&width=3307&height=2539 2048w,../../assets/images/JmSqjwmCflMndUGmL2sGQvEcfBU.png?width=3307&height=2539 3307w`,
                          },
                        },
                        MfN5l00Kg: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 2539,
                            intrinsicWidth: 3307,
                            loading: C((l?.y || 0) + (40 + ((l?.height || 494) - 80 - 419) / 2)),
                            pixelHeight: 2539,
                            pixelWidth: 3307,
                            sizes: `546px`,
                            src: `../../assets/images/NOavjdW8oiXLl4FIMb1Ne9xF0.png?width=3307&height=2539`,
                            srcSet: `../../assets/images/NOavjdW8oiXLl4FIMb1Ne9xF0.png?scale-down-to=512&width=3307&height=2539 512w,../../assets/images/NOavjdW8oiXLl4FIMb1Ne9xF0.png 1024w,../../assets/images/NOavjdW8oiXLl4FIMb1Ne9xF0.png 2048w,../../assets/images/NOavjdW8oiXLl4FIMb1Ne9xF0.png?width=3307&height=2539 3307w`,
                          },
                        },
                        NkZG6k5rW: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 2539,
                            intrinsicWidth: 3307,
                            loading: C((l?.y || 0) + (40 + ((l?.height || 494) - 80 - 419) / 2)),
                            pixelHeight: 2539,
                            pixelWidth: 3307,
                            sizes: `546px`,
                            src: `../../assets/images/TCF5QXzrG4P3AwKNLlE64dENO4.png?width=3307&height=2539`,
                            srcSet: `../../assets/images/TCF5QXzrG4P3AwKNLlE64dENO4.png?scale-down-to=512&width=3307&height=2539 512w,../../assets/images/TCF5QXzrG4P3AwKNLlE64dENO4.png 1024w,../../assets/images/TCF5QXzrG4P3AwKNLlE64dENO4.png?scale-down-to=2048&width=3307&height=2539 2048w,../../assets/images/TCF5QXzrG4P3AwKNLlE64dENO4.png?width=3307&height=2539 3307w`,
                          },
                        },
                      },
                      g,
                      b
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-IM9yu.framer-bcs5ww, .framer-IM9yu .framer-bcs5ww { display: block; }`,
          `.framer-IM9yu.framer-12tjvtj { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 40px; position: relative; width: min-content; }`,
          `.framer-IM9yu .framer-1srttks { aspect-ratio: 1.3024812918471838 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 546px; }`,
        ],
        `framer-IM9yu`
      )),
      (Z.displayName = `Artboard 3 copy 2Ð±ÑÐ»Ð¸Ð¹`),
      (Z.defaultProps = { height: 499, width: 626 }),
      W(Z, {
        variant: {
          options: [`ynjoDQg7q`, `IV7eQNktG`, `duJun0NdW`, `NkZG6k5rW`, `GdLT0GozL`, `MfN5l00Kg`],
          optionTitles: [
            `Variant 1`,
            `Variant 2`,
            `Variant 3`,
            `Variant 4`,
            `Variant 5`,
            `Variant 6`,
          ],
          title: `Variant`,
          type: z.Enum,
        },
      }),
      H(Z, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  Q,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  $,
  st;
e(() => {
  (p(),
    S(),
    v(),
    n(),
    fe(),
    Ee(),
    de(),
    ue(),
    Le(),
    he(),
    (Re = b(J)),
    (ze = b(X)),
    (Be = N(h.div)),
    (Ve = b(Z)),
    (He = b(pe)),
    (Ue = k(h.div)),
    (We = b(Y)),
    (Ge = k(F)),
    (Ke = {}),
    (qe = []),
    (Je = `framer-JN6Yc`),
    (Ye = { tok7W17US: `framer-v-3u3r9t` }),
    (Xe = (e, t, n) => (e && t ? `position` : n)),
    (Ze = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.75, ease: [0.22, 1, 0.36, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Qe = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 24,
    }),
    (Q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    ($e = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 28,
    }),
    (et = { delay: 0, duration: 0.7, ease: [0.22, 1, 0.36, 1], type: `tween` }),
    (tt = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: et,
      x: 0,
      y: 28,
    }),
    (nt = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 20,
    }),
    (rt = { delay: 0, duration: 0.65, ease: [0.22, 1, 0.36, 1], type: `tween` }),
    (it = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: rt,
      x: 0,
      y: 20,
    }),
    (at = ({ value: e }) =>
      y()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ot = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
    ($ = L(
      c(function (e, n) {
        let i = r(null),
          o = n ?? i,
          c = ee(),
          { activeLocale: l, setLocale: u } = A(),
          p = x(),
          { style: m, className: _, layoutId: v, variant: y, ...b } = ot(e);
        re(t(() => me({}, l), [l]));
        let [S, ne] = E(y, Ke, !1),
          O = w(Je),
          k = d(D)?.isLayoutTemplate,
          N = !!d(g)?.transition?.layout,
          P = Xe(k, N);
        return (
          T({}),
          s(D.Provider, {
            value: { activeVariantId: S, primaryVariantId: `tok7W17US`, variantClassNames: Ye },
            children: f(te, {
              id: v ?? c,
              children: [
                s(at, { value: `html body { background: rgb(255, 255, 255); }` }),
                f(h.div, {
                  ...b,
                  className: w(O, `framer-3u3r9t`, _),
                  ref: o,
                  style: { ...m },
                  children: [
                    f(Be, {
                      animate: Ze,
                      className: `framer-pdsexx`,
                      "data-framer-appear-id": `pdsexx`,
                      initial: Qe,
                      layout: P,
                      optimized: !0,
                      children: [
                        s(V, {
                          height: 59,
                          width: p?.width || `100vw`,
                          y: (p?.y || 0) + 0 + 0 + 0 + 0,
                          children: s(F, {
                            className: `framer-glxuvz-container`,
                            nodeId: `hWdFcIPex`,
                            scopeId: `d9Ci6hBOG`,
                            children: s(J, {
                              height: `100%`,
                              id: `hWdFcIPex`,
                              layoutId: `hWdFcIPex`,
                              style: { width: `100%` },
                              variant: Q(`N1Y2xUv_c`),
                              width: `100%`,
                            }),
                          }),
                        }),
                        f(`div`, {
                          className: `framer-1cy97kd`,
                          children: [
                            s(`div`, {
                              className: `framer-7y3e80`,
                              children: s(`div`, {
                                className: `framer-axn04i`,
                                children: s(j, {
                                  __fromCanvasComponent: !0,
                                  children: s(a, {
                                    children: s(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                        "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                        "--framer-font-size": `48px`,
                                        "--framer-line-height": `2.5em`,
                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                      },
                                      children: `Bruno Jasieński Akta № Illustrated book`,
                                    }),
                                  }),
                                  className: `framer-j0w35`,
                                  fonts: [`BI;Amiamie/Regular/v0`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            s(`div`, {
                              className: `framer-16jw4yi`,
                              children: f(`div`, {
                                className: `framer-b9wc38`,
                                children: [
                                  s(V, {
                                    children: s(F, {
                                      className: `framer-n4c1z9-container`,
                                      isModuleExternal: !0,
                                      nodeId: `wQUsULyGJ`,
                                      scopeId: `d9Ci6hBOG`,
                                      children: s(X, {
                                        backgroundColor: `rgba(0, 0, 0, 0)`,
                                        borderRadius: 0,
                                        bottomLeftRadius: 0,
                                        bottomRightRadius: 0,
                                        controls: !1,
                                        height: `100%`,
                                        id: `wQUsULyGJ`,
                                        isMixedBorderRadius: !1,
                                        layoutId: `wQUsULyGJ`,
                                        loop: !0,
                                        muted: !0,
                                        objectFit: `cover`,
                                        playing: !0,
                                        posterEnabled: !0,
                                        srcFile: `../../assets/misc/K4lqmGfqKdZDyEHxwgMJ5YUydA.mp4`,
                                        srcType: `Upload`,
                                        srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                        startTime: 0,
                                        style: { width: `100%` },
                                        topLeftRadius: 0,
                                        topRightRadius: 0,
                                        volume: 25,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  f(`div`, {
                                    className: `framer-jgdspm`,
                                    children: [
                                      f(`div`, {
                                        className: `framer-1ygufc9`,
                                        children: [
                                          s(j, {
                                            __fromCanvasComponent: !0,
                                            children: s(a, {
                                              children: s(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-text-color": `rgb(87, 87, 87)`,
                                                },
                                                children: `Project type:`,
                                              }),
                                            }),
                                            className: `framer-1w5i1qw`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          s(j, {
                                            __fromCanvasComponent: !0,
                                            children: s(a, {
                                              children: s(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                },
                                                children: `Editorial design`,
                                              }),
                                            }),
                                            className: `framer-1nzlbar`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      f(`div`, {
                                        className: `framer-1cz04yi`,
                                        children: [
                                          s(j, {
                                            __fromCanvasComponent: !0,
                                            children: s(a, {
                                              children: s(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-text-color": `rgb(87, 87, 87)`,
                                                },
                                                children: `Year:`,
                                              }),
                                            }),
                                            className: `framer-s70bnv`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          s(j, {
                                            __fromCanvasComponent: !0,
                                            children: s(a, {
                                              children: s(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                },
                                                children: `2026`,
                                              }),
                                            }),
                                            className: `framer-1l8cesu`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      f(`div`, {
                                        className: `framer-6trclf`,
                                        children: [
                                          s(j, {
                                            __fromCanvasComponent: !0,
                                            children: s(a, {
                                              children: s(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-text-color": `rgb(87, 87, 87)`,
                                                },
                                                children: `Context:`,
                                              }),
                                            }),
                                            className: `framer-1qhus98`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          s(j, {
                                            __fromCanvasComponent: !0,
                                            children: s(a, {
                                              children: s(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                },
                                                children: `University project`,
                                              }),
                                            }),
                                            className: `framer-1m5bv33`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  f(`div`, {
                                    className: `framer-1ljlq3p`,
                                    children: [
                                      s(j, {
                                        __fromCanvasComponent: !0,
                                        children: s(a, {
                                          children: s(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-text-color": `rgb(87, 87, 87)`,
                                            },
                                            children: `Project overview:`,
                                          }),
                                        }),
                                        className: `framer-18nozae`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      s(j, {
                                        __fromCanvasComponent: !0,
                                        children: s(a, {
                                          children: s(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              "--framer-font-size": `24px`,
                                            },
                                            children: `An illustrated poetry book of nine poems by Bruno Jasieński — a Polish-language futurist poet and committed communist who returned to the USSR full of conviction, only to disappear into the Great Purge: first as a rumor of exile to Siberia, then, years later, as a confirmed execution.`,
                                          }),
                                        }),
                                        className: `framer-19s1dyd`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    f(Ue, {
                      __framer__animate: { transition: et },
                      __framer__animateOnce: !0,
                      __framer__enter: $e,
                      __framer__exit: tt,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.16,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-m78c6x`,
                      layout: P,
                      children: [
                        f(`div`, {
                          className: `framer-158ua2d`,
                          children: [
                            f(`div`, {
                              className: `framer-vykx89`,
                              children: [
                                f(`div`, {
                                  className: `framer-3f5fax`,
                                  children: [
                                    s(j, {
                                      __fromCanvasComponent: !0,
                                      children: s(a, {
                                        children: s(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-text-color": `rgb(87, 87, 87)`,
                                          },
                                          children: `Mood Board`,
                                        }),
                                      }),
                                      className: `framer-1hdllq4`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(B, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 708,
                                        intrinsicWidth: 1280,
                                        loading: C(
                                          (p?.y || 0) + 0 + 661.8 + 0 + 0 + 0 + 0 + 0 + 0 + 27.2
                                        ),
                                        pixelHeight: 708,
                                        pixelWidth: 1280,
                                        src: `../../assets/images/tcbeOzybtpGmP1sObudWElrsTY.png`,
                                        srcSet: `../../assets/images/tcbeOzybtpGmP1sObudWElrsTY.png?scale-down-to=512&width=1280&height=708 512w,../../assets/images/tcbeOzybtpGmP1sObudWElrsTY.png?scale-down-to=1024&width=1280&height=708 1024w,../../assets/images/tcbeOzybtpGmP1sObudWElrsTY.png 1280w`,
                                      },
                                      className: `framer-muy2xu`,
                                      "data-framer-name": `Artboard 3Ð±ÑÐ»Ð¸Ð¹`,
                                      fitImageDimension: `height`,
                                    }),
                                  ],
                                }),
                                f(`div`, {
                                  className: `framer-1o6cg8`,
                                  children: [
                                    s(j, {
                                      __fromCanvasComponent: !0,
                                      children: s(a, {
                                        children: s(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-text-color": `rgb(87, 87, 87)`,
                                          },
                                          children: `Scetches`,
                                        }),
                                      }),
                                      className: `framer-4a4ubh`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(B, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 412,
                                        intrinsicWidth: 1280,
                                        loading: C(
                                          (p?.y || 0) + 0 + 661.8 + 0 + 0 + 0 + 0 + 488.2 + 0 + 27.2
                                        ),
                                        pixelHeight: 412,
                                        pixelWidth: 1280,
                                        src: `../../assets/images/qOqTMNLHv36eeZNSKVsRIpdWKwo.png`,
                                        srcSet: `../../assets/images/qOqTMNLHv36eeZNSKVsRIpdWKwo.png?scale-down-to=512&width=1280&height=412 512w,../../assets/images/qOqTMNLHv36eeZNSKVsRIpdWKwo.png?scale-down-to=1024&width=1280&height=412 1024w,../../assets/images/qOqTMNLHv36eeZNSKVsRIpdWKwo.png 1280w`,
                                      },
                                      className: `framer-1m864tz`,
                                      "data-framer-name": `Artboard 3 copyÐ±ÑÐ»Ð¸Ð¹`,
                                      fitImageDimension: `height`,
                                    }),
                                  ],
                                }),
                                f(`div`, {
                                  className: `framer-d6xo05`,
                                  children: [
                                    s(j, {
                                      __fromCanvasComponent: !0,
                                      children: s(a, {
                                        children: s(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-text-color": `rgb(87, 87, 87)`,
                                          },
                                          children: `Final Result:`,
                                        }),
                                      }),
                                      className: `framer-h34f1i`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(V, {
                                      height: 499,
                                      y: (p?.y || 0) + 0 + 661.8 + 0 + 0 + 0 + 0 + 792.4 + 0 + 27.2,
                                      children: s(F, {
                                        className: `framer-19ykeyw-container`,
                                        nodeId: `i0H8zWQWL`,
                                        scopeId: `d9Ci6hBOG`,
                                        children: s(Z, {
                                          height: `100%`,
                                          id: `i0H8zWQWL`,
                                          layoutId: `i0H8zWQWL`,
                                          style: { width: `100%` },
                                          variant: Q(`ynjoDQg7q`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                s(B, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 2539,
                                    intrinsicWidth: 3307,
                                    loading: C((p?.y || 0) + 0 + 661.8 + 0 + 0 + 0 + 0 + 1338.6),
                                    pixelHeight: 2539,
                                    pixelWidth: 3307,
                                    src: `../../assets/images/NOavjdW8oiXLl4FIMb1Ne9xF0.png?width=3307&height=2539`,
                                    srcSet: `../../assets/images/NOavjdW8oiXLl4FIMb1Ne9xF0.png?scale-down-to=512&width=3307&height=2539 512w,../../assets/images/NOavjdW8oiXLl4FIMb1Ne9xF0.png 1024w,../../assets/images/NOavjdW8oiXLl4FIMb1Ne9xF0.png 2048w,../../assets/images/NOavjdW8oiXLl4FIMb1Ne9xF0.png?width=3307&height=2539 3307w`,
                                  },
                                  className: `framer-lj08v7`,
                                  "data-framer-name": `Untitled-2`,
                                  fitImageDimension: `height`,
                                }),
                                s(B, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 2539,
                                    intrinsicWidth: 3307,
                                    loading: C((p?.y || 0) + 0 + 661.8 + 0 + 0 + 0 + 0 + 1971.6),
                                    pixelHeight: 2539,
                                    pixelWidth: 3307,
                                    src: `../../assets/images/tsAsaIZClXpfnvWg10zYXNlBUR4.jpg?width=3307&height=2539`,
                                    srcSet: `../../assets/images/tsAsaIZClXpfnvWg10zYXNlBUR4.jpg?scale-down-to=512&width=3307&height=2539 512w,../../assets/images/tsAsaIZClXpfnvWg10zYXNlBUR4.jpg?scale-down-to=1024&width=3307&height=2539 1024w,../../assets/images/tsAsaIZClXpfnvWg10zYXNlBUR4.jpg 2048w,../../assets/images/tsAsaIZClXpfnvWg10zYXNlBUR4.jpg?width=3307&height=2539 3307w`,
                                  },
                                  className: `framer-14vq1gq`,
                                  "data-framer-name": `PXL 20260623_1223075961`,
                                  fitImageDimension: `height`,
                                }),
                                s(V, {
                                  children: s(F, {
                                    className: `framer-1qj1har-container`,
                                    isModuleExternal: !0,
                                    nodeId: `SmFjbCwlD`,
                                    scopeId: `d9Ci6hBOG`,
                                    children: s(X, {
                                      backgroundColor: `rgba(0, 0, 0, 0)`,
                                      borderRadius: 0,
                                      bottomLeftRadius: 0,
                                      bottomRightRadius: 0,
                                      controls: !1,
                                      height: `100%`,
                                      id: `SmFjbCwlD`,
                                      isMixedBorderRadius: !1,
                                      layoutId: `SmFjbCwlD`,
                                      loop: !0,
                                      muted: !0,
                                      objectFit: `cover`,
                                      playing: !0,
                                      posterEnabled: !0,
                                      srcFile: `../../assets/misc/WFDgKrhEQYxr1vB3i6jE4rvANPU.mp4`,
                                      srcType: `Upload`,
                                      srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                      startTime: 0,
                                      style: { width: `100%` },
                                      topLeftRadius: 0,
                                      topRightRadius: 0,
                                      volume: 25,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                s(B, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 2268,
                                    intrinsicWidth: 4032,
                                    loading: C((p?.y || 0) + 0 + 661.8 + 0 + 0 + 0 + 0 + 2736.6),
                                    pixelHeight: 2268,
                                    pixelWidth: 4032,
                                    src: `../../assets/images/Q7ZqwQYoYCnGTKR9x3wu7GAtRPY.png?width=4032&height=2268`,
                                    srcSet: `../../assets/images/Q7ZqwQYoYCnGTKR9x3wu7GAtRPY.png?scale-down-to=512&width=4032&height=2268 512w,../../assets/images/Q7ZqwQYoYCnGTKR9x3wu7GAtRPY.png?scale-down-to=1024&width=4032&height=2268 1024w,../../assets/images/Q7ZqwQYoYCnGTKR9x3wu7GAtRPY.png 2048w,../../assets/images/Q7ZqwQYoYCnGTKR9x3wu7GAtRPY.png?width=4032&height=2268 4032w`,
                                  },
                                  className: `framer-jsm4wd`,
                                  "data-framer-name": `Untitled-1`,
                                  fitImageDimension: `height`,
                                }),
                                s(B, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 2170,
                                    intrinsicWidth: 3790,
                                    loading: C((p?.y || 0) + 0 + 661.8 + 0 + 0 + 0 + 0 + 3205.6),
                                    pixelHeight: 2170,
                                    pixelWidth: 3790,
                                    src: `../../assets/images/JP5cZqOg6vS1gavC5q2QsMv4.png?width=3790&height=2170`,
                                    srcSet: `../../assets/images/JP5cZqOg6vS1gavC5q2QsMv4.png?scale-down-to=512&width=3790&height=2170 512w,../../assets/images/JP5cZqOg6vS1gavC5q2QsMv4.png?scale-down-to=1024&width=3790&height=2170 1024w,../../assets/images/JP5cZqOg6vS1gavC5q2QsMv4.png 2048w,../../assets/images/JP5cZqOg6vS1gavC5q2QsMv4.png?width=3790&height=2170 3790w`,
                                  },
                                  className: `framer-1rahlrp`,
                                  "data-framer-name": `Untitled-1`,
                                  fitImageDimension: `height`,
                                }),
                                s(B, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 2170,
                                    intrinsicWidth: 3790,
                                    loading: C((p?.y || 0) + 0 + 661.8 + 0 + 0 + 0 + 0 + 3682.6),
                                    pixelHeight: 2170,
                                    pixelWidth: 3790,
                                    src: `../../assets/images/ZlsLyQin6SuGC3WclY5ikZ8mFM.png?width=3790&height=2170`,
                                    srcSet: `../../assets/images/ZlsLyQin6SuGC3WclY5ikZ8mFM.png?scale-down-to=512&width=3790&height=2170 512w,../../assets/images/ZlsLyQin6SuGC3WclY5ikZ8mFM.png?scale-down-to=1024&width=3790&height=2170 1024w,../../assets/images/ZlsLyQin6SuGC3WclY5ikZ8mFM.png 2048w,../../assets/images/ZlsLyQin6SuGC3WclY5ikZ8mFM.png?width=3790&height=2170 3790w`,
                                  },
                                  className: `framer-1kh4zou`,
                                  "data-framer-name": `Untitled-1`,
                                  fitImageDimension: `height`,
                                }),
                              ],
                            }),
                            f(`div`, {
                              className: `framer-gxps7d`,
                              children: [
                                f(`div`, {
                                  className: `framer-1qwl7rw`,
                                  children: [
                                    s(j, {
                                      __fromCanvasComponent: !0,
                                      children: s(a, {
                                        children: s(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-size": `14px`,
                                            "--framer-text-color": `rgb(87, 87, 87)`,
                                          },
                                          children: `Problem:`,
                                        }),
                                      }),
                                      className: `framer-qf5113`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(j, {
                                      __fromCanvasComponent: !0,
                                      children: s(a, {
                                        children: s(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                          },
                                          children: `The state didn't just kill Jasieński — it tried to erase him from the record entirely, leaving behind rumor and silence instead of a documented fact. A conventionally illustrated poetry collection would smooth over that erasure rather than confront it.`,
                                        }),
                                      }),
                                      className: `framer-ibe137`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                f(`div`, {
                                  className: `framer-wnmv37`,
                                  children: [
                                    s(j, {
                                      __fromCanvasComponent: !0,
                                      children: s(a, {
                                        children: s(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-size": `14px`,
                                            "--framer-text-color": `rgb(87, 87, 87)`,
                                          },
                                          children: `Solution:`,
                                        }),
                                      }),
                                      className: `framer-1kiacqo`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(j, {
                                      __fromCanvasComponent: !0,
                                      children: s(a, {
                                        children: s(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                          },
                                          children: `The illustrations are framed as Jasieński's own — as if these were sketches he made in secret while imprisoned in Siberia, using whatever materials a prisoner could find. Raw charcoal marks stand in for a smuggled visual diary: a flock of crows over a bruised sky, a figure glimpsed through a watchtower archway, bare trees doubling as camp fencing. Some spreads are even printed inverted, as if the record itself had been tampered with after the fact.`,
                                        }),
                                      }),
                                      className: `framer-1gk24f5`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                f(`div`, {
                                  className: `framer-13rxobx`,
                                  children: [
                                    s(j, {
                                      __fromCanvasComponent: !0,
                                      children: s(a, {
                                        children: s(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-size": `14px`,
                                            "--framer-text-color": `rgb(87, 87, 87)`,
                                          },
                                          children: `Result:`,
                                        }),
                                      }),
                                      className: `framer-w6bmem`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(j, {
                                      __fromCanvasComponent: !0,
                                      children: s(a, {
                                        children: s(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                          },
                                          children: `No drawing could recreate what Jasieński actually went through in Siberia — the book doesn't try to. Instead, it lets you feel something closer to the act itself: sketching in secret, in haste, not knowing if it would survive. You're not asked to feel his suffering — just to sit for a moment inside the fear of trying to leave a trace before it's erased.`,
                                        }),
                                      }),
                                      className: `framer-1bibpey`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        f(`div`, {
                          className: `framer-1o0edfj`,
                          children: [
                            f(`div`, {
                              className: `framer-o7s3s9`,
                              children: [
                                s(M, {
                                  href: { webPageId: `aCRbSljkl` },
                                  motionChild: !0,
                                  nodeId: `v2EhruewR`,
                                  openInNewTab: !1,
                                  scopeId: `d9Ci6hBOG`,
                                  children: s(h.a, {
                                    className: `framer-5m5uf0 framer-kr7kj`,
                                    children: s(V, {
                                      children: s(F, {
                                        className: `framer-5b5i3p-container`,
                                        isModuleExternal: !0,
                                        nodeId: `B2gjzfsDI`,
                                        scopeId: `d9Ci6hBOG`,
                                        children: s(pe, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 0,
                                          bottomLeftRadius: 0,
                                          bottomRightRadius: 0,
                                          controls: !1,
                                          height: `100%`,
                                          id: `B2gjzfsDI`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `B2gjzfsDI`,
                                          loop: !0,
                                          muted: !0,
                                          objectFit: `cover`,
                                          playing: !0,
                                          posterEnabled: !1,
                                          srcFile: `../../assets/misc/SpAQypmAKcjojk1r7A0F5hcye7M.mp4`,
                                          srcType: `Upload`,
                                          srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                          startTime: 0,
                                          style: { width: `100%` },
                                          topLeftRadius: 0,
                                          topRightRadius: 0,
                                          volume: 25,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                f(`div`, {
                                  className: `framer-sjibew`,
                                  children: [
                                    s(j, {
                                      __fromCanvasComponent: !0,
                                      children: s(a, {
                                        children: s(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                            "--framer-font-size": `18px`,
                                            "--framer-letter-spacing": `-0.02em`,
                                            "--framer-line-height": `1.6em`,
                                          },
                                          children: `Ubu Roi ou les Polonais `,
                                        }),
                                      }),
                                      className: `framer-1jp993g`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(j, {
                                      __fromCanvasComponent: !0,
                                      children: s(a, {
                                        children: s(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                            "--framer-letter-spacing": `-0.02em`,
                                            "--framer-line-height": `1.6em`,
                                            "--framer-text-color": `rgb(102, 102, 102)`,
                                          },
                                          children: `Editorial`,
                                        }),
                                      }),
                                      className: `framer-rhvnio`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            f(`div`, {
                              className: `framer-g8rgtt`,
                              children: [
                                s(M, {
                                  href: { webPageId: `YN_8Vp9ZG` },
                                  motionChild: !0,
                                  nodeId: `JNgIAnxx_`,
                                  openInNewTab: !1,
                                  scopeId: `d9Ci6hBOG`,
                                  children: s(B, {
                                    as: `a`,
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1034,
                                      intrinsicWidth: 1554,
                                      loading: C((p?.y || 0) + 0 + 661.8 + 0 + 4259.6 + 0 + 0 + 0),
                                      pixelHeight: 1034,
                                      pixelWidth: 1554,
                                      sizes: `max((${p?.width || `100vw`} - 100px) / 3, 1px)`,
                                      src: `../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png?width=1554&height=1034`,
                                      srcSet: `../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png 512w,../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png?scale-down-to=1024&width=1554&height=1034 1024w,../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png?width=1554&height=1034 1554w`,
                                    },
                                    className: `framer-d2ahfa framer-kr7kj`,
                                  }),
                                }),
                                f(`div`, {
                                  className: `framer-yad6le`,
                                  children: [
                                    s(j, {
                                      __fromCanvasComponent: !0,
                                      children: s(a, {
                                        children: s(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                            "--framer-font-size": `18px`,
                                            "--framer-letter-spacing": `-0.02em`,
                                            "--framer-line-height": `1.6em`,
                                          },
                                          children: `Honored agency`,
                                        }),
                                      }),
                                      className: `framer-1pt3kjn`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(j, {
                                      __fromCanvasComponent: !0,
                                      children: s(a, {
                                        children: s(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                            "--framer-letter-spacing": `-0.02em`,
                                            "--framer-line-height": `1.6em`,
                                            "--framer-text-color": `rgb(102, 102, 102)`,
                                          },
                                          children: `Framer-based web design`,
                                        }),
                                      }),
                                      className: `framer-oumpfp`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            f(`div`, {
                              className: `framer-1njals0`,
                              children: [
                                s(M, {
                                  href: { webPageId: `M2JH_EIJa` },
                                  motionChild: !0,
                                  nodeId: `CSX3EfgmI`,
                                  openInNewTab: !1,
                                  scopeId: `d9Ci6hBOG`,
                                  children: s(h.a, {
                                    className: `framer-ady8vi framer-kr7kj`,
                                    children: s(V, {
                                      children: s(F, {
                                        className: `framer-1v4l9nc-container`,
                                        isModuleExternal: !0,
                                        nodeId: `FE1y5OmJa`,
                                        scopeId: `d9Ci6hBOG`,
                                        children: s(pe, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 0,
                                          bottomLeftRadius: 0,
                                          bottomRightRadius: 0,
                                          controls: !1,
                                          height: `100%`,
                                          id: `FE1y5OmJa`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `FE1y5OmJa`,
                                          loop: !0,
                                          muted: !0,
                                          objectFit: `cover`,
                                          playing: !0,
                                          posterEnabled: !1,
                                          srcFile: `../../assets/misc/zl174ethgs7OB28ATVUU6DpaS0.mp4`,
                                          srcType: `Upload`,
                                          srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                          startTime: 0,
                                          style: { width: `100%` },
                                          topLeftRadius: 0,
                                          topRightRadius: 0,
                                          volume: 25,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                f(`div`, {
                                  className: `framer-kjdl5e`,
                                  children: [
                                    s(j, {
                                      __fromCanvasComponent: !0,
                                      children: s(a, {
                                        children: s(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                            "--framer-font-size": `18px`,
                                            "--framer-letter-spacing": `-0.02em`,
                                            "--framer-line-height": `1.6em`,
                                          },
                                          children: `Re:Move event `,
                                        }),
                                      }),
                                      className: `framer-5ojcki`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(j, {
                                      __fromCanvasComponent: !0,
                                      children: s(a, {
                                        children: s(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                            "--framer-letter-spacing": `-0.02em`,
                                            "--framer-line-height": `1.6em`,
                                            "--framer-text-color": `rgb(102, 102, 102)`,
                                          },
                                          children: `Key Visual`,
                                        }),
                                      }),
                                      className: `framer-1q66bc0`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    s(V, {
                      height: 390,
                      width: p?.width || `100vw`,
                      y: (p?.y || 0) + 0 + 5401.4,
                      children: s(Ge, {
                        __framer__animate: { transition: rt },
                        __framer__animateOnce: !0,
                        __framer__enter: nt,
                        __framer__exit: it,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.12,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: `framer-19uekct-container`,
                        layout: P,
                        nodeId: `vPbXgchPO`,
                        rendersWithMotion: !0,
                        scopeId: `d9Ci6hBOG`,
                        children: s(Y, {
                          height: `100%`,
                          id: `vPbXgchPO`,
                          layoutId: `vPbXgchPO`,
                          style: { width: `100%` },
                          variant: Q(`Q4FA0ndjW`),
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-JN6Yc.framer-kr7kj, .framer-JN6Yc .framer-kr7kj { display: block; }`,
        `.framer-JN6Yc.framer-3u3r9t { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-JN6Yc .framer-pdsexx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-JN6Yc .framer-glxuvz-container, .framer-JN6Yc .framer-n4c1z9-container, .framer-JN6Yc .framer-19ykeyw-container, .framer-JN6Yc .framer-1qj1har-container, .framer-JN6Yc .framer-19uekct-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-JN6Yc .framer-1cy97kd, .framer-JN6Yc .framer-sjibew, .framer-JN6Yc .framer-yad6le, .framer-JN6Yc .framer-kjdl5e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-JN6Yc .framer-7y3e80 { align-content: center; align-items: center; background-color: #000000; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-JN6Yc .framer-axn04i { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 1px; }`,
        `.framer-JN6Yc .framer-j0w35, .framer-JN6Yc .framer-1w5i1qw, .framer-JN6Yc .framer-1nzlbar, .framer-JN6Yc .framer-s70bnv, .framer-JN6Yc .framer-1l8cesu, .framer-JN6Yc .framer-1qhus98, .framer-JN6Yc .framer-1m5bv33, .framer-JN6Yc .framer-18nozae, .framer-JN6Yc .framer-1hdllq4, .framer-JN6Yc .framer-4a4ubh, .framer-JN6Yc .framer-h34f1i, .framer-JN6Yc .framer-qf5113, .framer-JN6Yc .framer-1kiacqo, .framer-JN6Yc .framer-w6bmem { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-JN6Yc .framer-16jw4yi, .framer-JN6Yc .framer-b9wc38 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-JN6Yc .framer-jgdspm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-JN6Yc .framer-1ygufc9, .framer-JN6Yc .framer-1cz04yi, .framer-JN6Yc .framer-6trclf, .framer-JN6Yc .framer-1qwl7rw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-JN6Yc .framer-1ljlq3p { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-JN6Yc .framer-19s1dyd { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 917px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JN6Yc .framer-m78c6x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-JN6Yc .framer-158ua2d { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 53px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-JN6Yc .framer-vykx89 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-JN6Yc .framer-3f5fax, .framer-JN6Yc .framer-1o6cg8, .framer-JN6Yc .framer-d6xo05 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-JN6Yc .framer-muy2xu, .framer-JN6Yc .framer-1m864tz, .framer-JN6Yc .framer-lj08v7, .framer-JN6Yc .framer-14vq1gq, .framer-JN6Yc .framer-jsm4wd, .framer-JN6Yc .framer-1rahlrp, .framer-JN6Yc .framer-1kh4zou { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-JN6Yc .framer-gxps7d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; top: 40px; width: min-content; z-index: 1; }`,
        `.framer-JN6Yc .framer-ibe137 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 309px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JN6Yc .framer-wnmv37, .framer-JN6Yc .framer-13rxobx { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; }`,
        `.framer-JN6Yc .framer-1gk24f5, .framer-JN6Yc .framer-1bibpey, .framer-JN6Yc .framer-1jp993g, .framer-JN6Yc .framer-rhvnio, .framer-JN6Yc .framer-1pt3kjn, .framer-JN6Yc .framer-oumpfp, .framer-JN6Yc .framer-5ojcki, .framer-JN6Yc .framer-1q66bc0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JN6Yc .framer-1o0edfj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-JN6Yc .framer-o7s3s9, .framer-JN6Yc .framer-g8rgtt, .framer-JN6Yc .framer-1njals0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-JN6Yc .framer-5m5uf0, .framer-JN6Yc .framer-ady8vi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-JN6Yc .framer-5b5i3p-container, .framer-JN6Yc .framer-1v4l9nc-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-JN6Yc .framer-d2ahfa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 489px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
      ],
      `framer-JN6Yc`
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 7196, width: 1200 }),
    H(
      $,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Amiamie`,
              source: `builtIn`,
              style: `normal`,
              uiFamilyName: `Amiamie`,
              url: `../../assets/fonts/F5XpBteQsnbE9wFB7y5SqSZQYA.woff2`,
              weight: `400`,
            },
          ],
        },
        ...Re,
        ...ze,
        ...Ve,
        ...He,
        ...We,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (t.locale, Promise.allSettled([U(J, {}, t), U(Z, {}, t), U(Y, {}, t)])),
    }),
    (st = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `Framerd9Ci6hBOG`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerIntrinsicWidth: `1200`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}`,
            framerColorSyntax: `true`,
            framerIntrinsicHeight: `7196`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerImmutableVariables: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { st as __FramerMetadata__, $ as default, qe as queryParamNames };
//# sourceMappingURL=Ue-1dptCiKuH1W1LeHfd-VMJ5629tui5MtUdycKxVcw.38WqhwrR.mjs.map
