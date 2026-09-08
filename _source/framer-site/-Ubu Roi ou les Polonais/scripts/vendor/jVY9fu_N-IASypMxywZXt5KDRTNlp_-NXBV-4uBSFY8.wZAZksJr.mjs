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
  h as ee,
  j as l,
  k as u,
  l as d,
  o as f,
  v as p,
} from "./react.D20wc1Tc.mjs";
import { N as m, S as h, a as g, b as _, r as v, t as y } from "./motion.jtMCvOiK.mjs";
import {
  $ as b,
  A as x,
  J as S,
  L as C,
  M as w,
  Q as T,
  S as E,
  X as D,
  Z as O,
  _ as k,
  a as A,
  at as j,
  ct as M,
  et as N,
  f as P,
  g as F,
  h as I,
  l as L,
  lt as R,
  m as z,
  n as B,
  nt as te,
  ot as V,
  q as H,
  r as U,
  s as W,
  t as G,
  tt as ne,
  v as K,
  w as q,
  y as J,
} from "./framer.jQONGl1Q.mjs";
import { n as Y, t as X } from "./KlB745hHu.nSBdfznD.mjs";
import {
  d as re,
  f as ie,
  i as ae,
  l as oe,
  n as se,
  o as ce,
  p as le,
  s as ue,
  t as de,
} from "./OIjZRBmWDcIE2B6qgG1j.CjKmj2_P.mjs";
import { a as fe, i as pe, o as me, r as he } from "./shared-lib.B1UR4gSL.mjs";
import ge, { t as _e } from "./T0TRQdI94mTXPuSmCMwp1eFsY5EXCZdFMDAI4d6Wc1A.CEQUyaUH.mjs";
function ve(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...ee
  } = e;
  return ee;
}
function Z(e) {
  let t = ve(e);
  return s(Ee, { ...t });
}
function ye(e) {
  let t = T(),
    n = r(!1),
    i = r(!1),
    a = l((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: l(() => {
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
    pause: l(() => {
      !e.current || n.current || (e.current.pause(), (i.current = !1));
    }, []),
    setProgress: a,
    isPlaying: i,
  };
}
function be({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
  let [a] = o(e),
    [s, c] = o(!1);
  e !== a && !s && c(!0);
  let ee = a && t && n && r && !i && !s,
    l;
  return ((l = ee ? `on-viewport` : a ? `on-mount` : `no-autoplay`), l);
}
function xe(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Se(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(xe).join(` `);
}
var Ce,
  we,
  Te,
  Ee,
  De,
  Oe = e(() => {
    (f(),
      C(),
      y(),
      de(),
      n(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((Ce ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((we ||= {})),
      (Te = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (Ee = ee(function (e) {
        let {
            srcType: n = `URL`,
            srcUrl: a,
            srcFile: o = ``,
            posterEnabled: c = !1,
            controls: ee = !1,
            playing: l = !0,
            loop: u = !0,
            muted: d = !0,
            playsinline: f = !0,
            restartOnEnter: p = !1,
            objectFit: h = `cover`,
            backgroundColor: g = `rgba(0,0,0,0)`,
            radius: v = 0,
            volume: y = 25,
            startTime: b = 0,
            poster: x,
            playing: S,
            progress: C,
            onSeeked: w,
            onPause: T,
            onPlay: E,
            onEnd: D,
            onClick: O,
            onMouseEnter: k,
            onMouseLeave: A,
            onMouseDown: j,
            onMouseUp: M,
          } = e,
          N = r(),
          P = oe(),
          F = r(null),
          I = r(null),
          L = ce(),
          R = ue(),
          B = L || R === z.export,
          te = ae(e),
          V = B
            ? `no-autoplay`
            : be({ playingProp: S, muted: d, loop: u, playsinline: f, controls: ee }),
          H = B ? !0 : m(N),
          U = !B && m(N, { margin: `10%`, once: !0 }),
          W = b === 100 ? 99.9 : b,
          { play: G, pause: ne, setProgress: K, isPlaying: q } = ye(N);
        (i(() => {
          B || (V !== `on-viewport` && (S ? G() : ne()));
        }, [V, S]),
          i(() => {
            B || (H && S && V !== `no-autoplay` && G(), V === `on-viewport` && ne());
          }, [V, H, S]),
          i(() => {
            !L || x || c || W || !N.current || (N.current.currentTime = 0.01);
          }, [c, x, W]));
        let J = r(!1);
        (i(() => {
          if (!J.current) {
            J.current = !0;
            return;
          }
          let e = _(C) ? C.get() : (C ?? 0) * 0.01;
          K((e ?? 0) || (W ?? 0) / 100);
        }, [W, o, a, C]),
          i(() => {
            if (_(C)) return C.on(`change`, (e) => K(e));
          }, [C]),
          re(() => {
            F.current !== null && N.current && ((!I && u) || !F.current) && G();
          }),
          ie(() => {
            N.current && ((I.current = N.current.ended), (F.current = N.current.paused), ne());
          }));
        let Y = t(() => {
          if (n === `URL`) return a + ``;
          if (n === `Upload`) return o + ``;
        }, [n, o, a, W]);
        return (
          i(() => {
            P && N.current && V === `on-mount` && setTimeout(() => G(), 50);
          }, []),
          i(() => {
            N.current && !d && (N.current.volume = (y ?? 0) / 100);
          }, [y]),
          s(`video`, {
            onClick: O,
            onMouseEnter: k,
            onMouseLeave: A,
            onMouseDown: j,
            onMouseUp: M,
            src: Y,
            loop: u,
            ref: N,
            onSeeked: (e) => w?.(e),
            onPause: (e) => T?.(e),
            onPlay: (e) => E?.(e),
            onEnded: (e) => D?.(e),
            autoPlay: q.current || V === `on-mount` || (S && V === `on-viewport` && H),
            preload: q.current
              ? `auto`
              : B && !x
                ? `metadata`
                : V !== `on-mount` && !U
                  ? `none`
                  : `metadata`,
            poster:
              c && !o && a === Te
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : c && x
                  ? x
                  : void 0,
            onLoadedData: () => {
              let e = N.current;
              e &&
                (e.currentTime < 0.3 && W > 0 && K((W ?? 0) * 0.01),
                (q.current || V === `on-mount` || (S && V === `on-viewport` && H)) && G());
            },
            controls: ee,
            muted: B ? !0 : d,
            playsInline: f,
            style: {
              cursor: O ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: te,
              display: `block`,
              objectFit: h,
              backgroundColor: g,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (Z.displayName = `Video`),
      (De = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      J(Z, {
        srcType: {
          type: U.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: U.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: U.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          description: `Only MP4 and WebM`,
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: { type: U.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
        ...se,
        posterEnabled: {
          type: U.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: U.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: { type: U.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: { title: `Start Time`, type: U.Number, min: 0, max: 100, step: 0.1, unit: `%` },
        loop: { type: U.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        objectFit: { type: U.Enum, title: `Fit`, options: De, optionTitles: De.map(Se) },
        controls: {
          type: U.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: { type: U.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
        volume: {
          type: U.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: U.EventHandler },
        onSeeked: { type: U.EventHandler },
        onPause: { type: U.EventHandler },
        onPlay: { type: U.EventHandler },
        ...le,
      }));
  }),
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze = e(() => {
    (f(),
      C(),
      y(),
      n(),
      Y(),
      Oe(),
      (ke = x(Z)),
      (Ae = x(X)),
      (je = `framer-lmVxC`),
      (Me = { x0oIawKAa: `framer-v-kvn46x` }),
      (Ne = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Pe = ({ value: e, children: n }) => {
        let r = u(g),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(g.Provider, { value: a, children: n });
      }),
      (Fe = h.create(a)),
      (Ie = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Le = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Re = V(
        c(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = p(),
            { activeLocale: c, setLocale: ee } = N();
          S();
          let { style: l, className: u, layoutId: f, variant: m, ...g } = Ie(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = j({ defaultVariant: `x0oIawKAa`, ref: i, variant: m, variantClassNames: Me }),
            A = Le(e, O),
            M = E(je);
          return s(v, {
            id: f ?? o,
            children: s(Fe, {
              animate: O,
              initial: !1,
              children: s(Pe, {
                value: Ne,
                children: d(h.div, {
                  ...g,
                  ...x,
                  className: E(M, `framer-kvn46x`, u, y),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: A,
                  layoutId: `x0oIawKAa`,
                  ref: i,
                  style: { ...l },
                  children: [
                    s(G, {
                      children: s(k, {
                        className: `framer-ncrmd2-container`,
                        isModuleExternal: !0,
                        layoutDependency: A,
                        layoutId: `Y8YkP83oQ-container`,
                        nodeId: `Y8YkP83oQ`,
                        rendersWithMotion: !0,
                        scopeId: `aJDAKYsNG`,
                        children: s(Z, {
                          backgroundColor: `rgba(0, 0, 0, 0)`,
                          borderRadius: 0,
                          bottomLeftRadius: 0,
                          bottomRightRadius: 0,
                          controls: !1,
                          height: `100%`,
                          id: `Y8YkP83oQ`,
                          isMixedBorderRadius: !1,
                          layoutId: `Y8YkP83oQ`,
                          loop: !0,
                          muted: !0,
                          objectFit: `cover`,
                          playing: !0,
                          posterEnabled: !0,
                          srcFile: `../../assets/misc/zl174ethgs7OB28ATVUU6DpaS0.mp4`,
                          srcType: `Upload`,
                          srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                          startTime: 0,
                          style: { height: `100%`, width: `100%` },
                          topLeftRadius: 0,
                          topRightRadius: 0,
                          volume: 25,
                          width: `100%`,
                        }),
                      }),
                    }),
                    d(h.div, {
                      className: `framer-hd2jw2`,
                      layoutDependency: A,
                      layoutId: `dIoh_vmSF`,
                      style: { backgroundColor: `rgb(0, 0, 0)` },
                      children: [
                        s(I, {
                          __fromCanvasComponent: !0,
                          children: s(a, {
                            children: s(h.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                "--framer-font-size": `20px`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                              },
                              children: `See full project`,
                            }),
                          }),
                          className: `framer-6yf043`,
                          fonts: [`BI;Amiamie/Regular/v0`],
                          layoutDependency: A,
                          layoutId: `wpza9baP_`,
                          style: {
                            "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        s(X, {
                          animated: !0,
                          className: `framer-196iiar`,
                          layoutDependency: A,
                          layoutId: `kMO2Wzuh4`,
                          style: {
                            "--1m6trwb": 0,
                            "--21h8s6": `rgb(255, 255, 255)`,
                            "--pgex8v": 1.5,
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-lmVxC.framer-1oot7nk, .framer-lmVxC .framer-1oot7nk { display: block; }`,
          `.framer-lmVxC.framer-kvn46x { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 253px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 190px; }`,
          `.framer-lmVxC .framer-ncrmd2-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-lmVxC .framer-hd2jw2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 6px; position: relative; width: 100%; }`,
          `.framer-lmVxC .framer-6yf043 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-lmVxC .framer-196iiar { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 24px; }`,
        ],
        `framer-lmVxC`
      )),
      (Re.displayName = `Re:move`),
      (Re.defaultProps = { height: 253, width: 190 }),
      K(
        Re,
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
          ...ke,
          ...Ae,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Be(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ve,
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
  Qe = e(() => {
    (f(),
      C(),
      y(),
      n(),
      Y(),
      (Ve = x(X)),
      (He = [`LWW6NnG7_`, `d5XyM5HIC`, `qofd_yQH2`]),
      (Ue = `framer-WAS9U`),
      (We = {
        d5XyM5HIC: `framer-v-1kz6afo`,
        LWW6NnG7_: `framer-v-8nz9d8`,
        qofd_yQH2: `framer-v-yky3aa`,
      }),
      (Ge = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ke = ({ value: e, children: n }) => {
        let r = u(g),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(g.Provider, { value: a, children: n });
      }),
      (qe = { "Variant 1": `LWW6NnG7_`, "Variant 2": `d5XyM5HIC`, "Variant 3": `qofd_yQH2` }),
      (Je = h.create(a)),
      (Ye = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: qe[r.variant] ?? r.variant ?? `LWW6NnG7_`,
      })),
      (Xe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ze = V(
        c(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = p(),
            { activeLocale: c, setLocale: ee } = N();
          S();
          let { style: l, className: u, layoutId: f, variant: m, ...g } = Ye(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = j({
              cycleOrder: He,
              defaultVariant: `LWW6NnG7_`,
              ref: i,
              variant: m,
              variantClassNames: We,
            }),
            k = Xe(e, O),
            { activeVariantCallback: A, delay: M } = H(_),
            P = A(async (...e) => {
              (T({ isHovered: !0 }), D(`d5XyM5HIC`));
            }),
            F = A(async (...e) => {
              (T({ isHovered: !1 }), D(`LWW6NnG7_`));
            }),
            R = E(Ue);
          return s(v, {
            id: f ?? o,
            children: s(Je, {
              animate: O,
              initial: !1,
              children: s(Ke, {
                value: Ge,
                children: s(L, {
                  motionChild: !0,
                  nodeId: `LWW6NnG7_`,
                  scopeId: `BRSKIGvPL`,
                  ...Be(
                    {
                      d5XyM5HIC: {
                        href: `https://www.instagram.com/koty_koty_myszi/`,
                        openInNewTab: !0,
                      },
                      qofd_yQH2: {
                        href: `https://www.instagram.com/koty_koty_myszi/`,
                        openInNewTab: !0,
                      },
                    },
                    _,
                    C
                  ),
                  children: d(h.a, {
                    ...g,
                    ...x,
                    className: `${E(R, `framer-8nz9d8`, u, y)} framer-1nxmufb`,
                    "data-framer-name": `Variant 1`,
                    "data-highlight": !0,
                    layoutDependency: k,
                    layoutId: `LWW6NnG7_`,
                    onMouseEnter: P,
                    ref: i,
                    style: { ...l },
                    ...Be(
                      {
                        d5XyM5HIC: {
                          "data-framer-name": `Variant 2`,
                          onMouseEnter: void 0,
                          onMouseLeave: F,
                        },
                        qofd_yQH2: {
                          "data-framer-name": `Variant 3`,
                          "data-highlight": void 0,
                          onMouseEnter: void 0,
                        },
                      },
                      _,
                      C
                    ),
                    children: [
                      s(I, {
                        __fromCanvasComponent: !0,
                        children: s(a, {
                          children: s(h.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `Qkk7QW1pYW1pZS9MaWdodC92MA==`,
                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                              "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                              "--framer-font-size": `20px`,
                              "--framer-font-weight": `300`,
                              "--framer-letter-spacing": `-0.02em`,
                              "--framer-line-height": `1.6em`,
                            },
                            children: `Instagram`,
                          }),
                        }),
                        className: `framer-1tdq7nj`,
                        fonts: [`BI;Amiamie/Light/v0`],
                        layoutDependency: k,
                        layoutId: `edVZi0BjT`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `center`,
                        withExternalLayout: !0,
                        ...Be(
                          {
                            d5XyM5HIC: {
                              children: s(a, {
                                children: s(h.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                    "--framer-font-size": `20px`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1.6em`,
                                  },
                                  children: `Instagram`,
                                }),
                              }),
                              fonts: [`BI;Amiamie/Regular/v0`],
                            },
                            qofd_yQH2: {
                              children: s(a, {
                                children: s(h.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Qkk7QW1pYW1pZS9MaWdodC92MA==`,
                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                    "--framer-font-weight": `300`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1.6em`,
                                  },
                                  children: `Instagram`,
                                }),
                              }),
                            },
                          },
                          _,
                          C
                        ),
                      }),
                      s(X, {
                        animated: !0,
                        className: `framer-i8stqd`,
                        layoutDependency: k,
                        layoutId: `P1IawVazO`,
                        style: { "--1m6trwb": 0, "--21h8s6": `rgb(0, 0, 0)`, "--pgex8v": 1 },
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-WAS9U.framer-1nxmufb, .framer-WAS9U .framer-1nxmufb { display: block; }`,
          `.framer-WAS9U.framer-8nz9d8 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-WAS9U .framer-1tdq7nj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-WAS9U .framer-i8stqd { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 24px; }`,
          `.framer-WAS9U.framer-v-1kz6afo.framer-8nz9d8, .framer-WAS9U.framer-v-yky3aa.framer-8nz9d8 { text-decoration: none; }`,
          `.framer-WAS9U.framer-v-yky3aa .framer-i8stqd { width: 18px; }`,
        ],
        `framer-WAS9U`
      )),
      (Ze.displayName = `Instagram`),
      (Ze.defaultProps = { height: 32, width: 112 }),
      J(Ze, {
        variant: {
          options: [`LWW6NnG7_`, `d5XyM5HIC`, `qofd_yQH2`],
          optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`],
          title: `Variant`,
          type: U.Enum,
        },
      }),
      K(
        Ze,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Amiamie`,
                source: `builtIn`,
                style: `normal`,
                uiFamilyName: `Amiamie`,
                url: `../../assets/fonts/1MH4lxBHPP5tkXBqyBrWkrJ1as.woff2`,
                weight: `300`,
              },
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
          ...Ve,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function $e(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft = e(() => {
    (f(),
      C(),
      y(),
      n(),
      Y(),
      Oe(),
      (et = x(Z)),
      (tt = x(X)),
      (nt = [`ZC7Svk4_n`, `IrNOP9k1K`, `eoxuc9BWB`, `EXrCmanC3`, `umtCAnqfj`, `mtxKI0zSL`]),
      (rt = `framer-d2Sg9`),
      (it = {
        eoxuc9BWB: `framer-v-1of1act`,
        EXrCmanC3: `framer-v-ltjxlm`,
        IrNOP9k1K: `framer-v-1addqzs`,
        mtxKI0zSL: `framer-v-pzulpo`,
        umtCAnqfj: `framer-v-137jylv`,
        ZC7Svk4_n: `framer-v-91aqvz`,
      }),
      (at = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (ot = ({ value: e, children: n }) => {
        let r = u(g),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(g.Provider, { value: a, children: n });
      }),
      (st = {
        "Variant 1": `ZC7Svk4_n`,
        "Variant 2": `IrNOP9k1K`,
        "Variant 3": `eoxuc9BWB`,
        "Variant 4": `EXrCmanC3`,
        "Variant 5": `umtCAnqfj`,
        "Variant 6": `mtxKI0zSL`,
      }),
      (ct = h.create(a)),
      (lt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: st[r.variant] ?? r.variant ?? `ZC7Svk4_n`,
      })),
      (ut = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (dt = V(
        c(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = p(),
            { activeLocale: c, setLocale: ee } = N(),
            l = S(),
            { style: u, className: f, layoutId: m, variant: g, ..._ } = lt(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: T,
              isLoading: D,
              setGestureState: O,
              setVariant: A,
              variants: M,
            } = j({
              cycleOrder: nt,
              defaultVariant: `ZC7Svk4_n`,
              ref: i,
              variant: g,
              variantClassNames: it,
            }),
            P = ut(e, M),
            { activeVariantCallback: F, delay: L } = H(y),
            R = F(async (...e) => {
              await L(() => A(`IrNOP9k1K`, !0), 500);
            }),
            z = F(async (...e) => {
              await L(() => A(`eoxuc9BWB`, !0), 500);
            });
          te(y, {
            default: R,
            eoxuc9BWB: F(async (...e) => {
              await L(() => A(`EXrCmanC3`, !0), 500);
            }),
            EXrCmanC3: F(async (...e) => {
              await L(() => A(`umtCAnqfj`, !0), 500);
            }),
            IrNOP9k1K: z,
            umtCAnqfj: F(async (...e) => {
              await L(() => A(`mtxKI0zSL`, !0), 500);
            }),
          });
          let B = E(rt),
            V = () =>
              ![`IrNOP9k1K`, `eoxuc9BWB`, `EXrCmanC3`, `umtCAnqfj`, `mtxKI0zSL`].includes(y),
            U = () => y === `IrNOP9k1K`,
            ne = () => y === `eoxuc9BWB`,
            K = () => y === `EXrCmanC3`,
            q = () => y === `umtCAnqfj`,
            J = () => y === `mtxKI0zSL`;
          return s(v, {
            id: m ?? o,
            children: s(ct, {
              animate: M,
              initial: !1,
              children: s(ot, {
                value: at,
                children: d(h.div, {
                  ..._,
                  ...C,
                  className: E(B, `framer-91aqvz`, f, b),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: P,
                  layoutId: `ZC7Svk4_n`,
                  ref: i,
                  style: { ...u },
                  ...$e(
                    {
                      eoxuc9BWB: { "data-framer-name": `Variant 3` },
                      EXrCmanC3: { "data-framer-name": `Variant 4` },
                      IrNOP9k1K: { "data-framer-name": `Variant 2` },
                      mtxKI0zSL: { "data-framer-name": `Variant 6` },
                      umtCAnqfj: { "data-framer-name": `Variant 5` },
                    },
                    y,
                    T
                  ),
                  children: [
                    V() &&
                      s(G, {
                        children: s(k, {
                          className: `framer-1haqctx-container`,
                          isModuleExternal: !0,
                          layoutDependency: P,
                          layoutId: `eBCJOvt0n-container`,
                          nodeId: `eBCJOvt0n`,
                          rendersWithMotion: !0,
                          scopeId: `CHecTeAsA`,
                          children: s(Z, {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            controls: !1,
                            height: `100%`,
                            id: `eBCJOvt0n`,
                            isMixedBorderRadius: !1,
                            layoutId: `eBCJOvt0n`,
                            loop: !0,
                            muted: !0,
                            objectFit: `cover`,
                            playing: !0,
                            posterEnabled: !0,
                            srcFile: `../../assets/misc/1SBUPFmivlWB4AcWR8lgsZvk.mp4`,
                            srcType: `Upload`,
                            srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                            startTime: 0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            volume: 25,
                            width: `100%`,
                          }),
                        }),
                      }),
                    U() &&
                      s(W, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 1350,
                          intrinsicWidth: 1080,
                          pixelHeight: 1350,
                          pixelWidth: 1080,
                          src: `https://framerusercontent.com/images/1ReoTnPwTmuO9swpjHUMIANH6t0.png?width=1080&height=1350`,
                          srcSet: `https://framerusercontent.com/images/1ReoTnPwTmuO9swpjHUMIANH6t0.png?scale-down-to=1024&width=1080&height=1350 819w,https://framerusercontent.com/images/1ReoTnPwTmuO9swpjHUMIANH6t0.png?width=1080&height=1350 1080w`,
                        },
                        className: `framer-vz0vjx`,
                        layoutDependency: P,
                        layoutId: `Z0_VtUhbE`,
                        ...$e(
                          {
                            IrNOP9k1K: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 1350,
                                intrinsicWidth: 1080,
                                loading: w(
                                  (l?.y || 0) +
                                    0 +
                                    (((l?.height || 253) -
                                      0 -
                                      (Math.max(0, ((l?.height || 253) - 0 - 36) / 1) * 1 +
                                        36 +
                                        0)) /
                                      2 +
                                      0 +
                                      0)
                                ),
                                pixelHeight: 1350,
                                pixelWidth: 1080,
                                sizes: l?.width || `100vw`,
                                src: `https://framerusercontent.com/images/1ReoTnPwTmuO9swpjHUMIANH6t0.png?width=1080&height=1350`,
                                srcSet: `https://framerusercontent.com/images/1ReoTnPwTmuO9swpjHUMIANH6t0.png?scale-down-to=1024&width=1080&height=1350 819w,https://framerusercontent.com/images/1ReoTnPwTmuO9swpjHUMIANH6t0.png?width=1080&height=1350 1080w`,
                              },
                            },
                          },
                          y,
                          T
                        ),
                      }),
                    ne() &&
                      s(W, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 1350,
                          intrinsicWidth: 1080,
                          pixelHeight: 1350,
                          pixelWidth: 1080,
                          src: `https://framerusercontent.com/images/3R4WbIdvMZyUCj8EHMpxQPZpHV0.png?width=1080&height=1350`,
                          srcSet: `https://framerusercontent.com/images/3R4WbIdvMZyUCj8EHMpxQPZpHV0.png?scale-down-to=1024&width=1080&height=1350 819w,https://framerusercontent.com/images/3R4WbIdvMZyUCj8EHMpxQPZpHV0.png?width=1080&height=1350 1080w`,
                        },
                        className: `framer-1kgebfg`,
                        layoutDependency: P,
                        layoutId: `xoVztCbwt`,
                        ...$e(
                          {
                            eoxuc9BWB: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 1350,
                                intrinsicWidth: 1080,
                                loading: w(
                                  (l?.y || 0) +
                                    0 +
                                    (((l?.height || 253) -
                                      0 -
                                      (Math.max(0, ((l?.height || 253) - 0 - 36) / 1) * 1 +
                                        36 +
                                        0)) /
                                      2 +
                                      0 +
                                      0)
                                ),
                                pixelHeight: 1350,
                                pixelWidth: 1080,
                                sizes: l?.width || `100vw`,
                                src: `https://framerusercontent.com/images/3R4WbIdvMZyUCj8EHMpxQPZpHV0.png?width=1080&height=1350`,
                                srcSet: `https://framerusercontent.com/images/3R4WbIdvMZyUCj8EHMpxQPZpHV0.png?scale-down-to=1024&width=1080&height=1350 819w,https://framerusercontent.com/images/3R4WbIdvMZyUCj8EHMpxQPZpHV0.png?width=1080&height=1350 1080w`,
                              },
                            },
                          },
                          y,
                          T
                        ),
                      }),
                    K() &&
                      s(W, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 1350,
                          intrinsicWidth: 1080,
                          pixelHeight: 1350,
                          pixelWidth: 1080,
                          src: `https://framerusercontent.com/images/HW5rQPcVaNYYv7R2N7Rlahg7He0.png?width=1080&height=1350`,
                          srcSet: `https://framerusercontent.com/images/HW5rQPcVaNYYv7R2N7Rlahg7He0.png?scale-down-to=1024&width=1080&height=1350 819w,https://framerusercontent.com/images/HW5rQPcVaNYYv7R2N7Rlahg7He0.png?width=1080&height=1350 1080w`,
                        },
                        className: `framer-1osi2q3`,
                        layoutDependency: P,
                        layoutId: `sdPMya73q`,
                        ...$e(
                          {
                            EXrCmanC3: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 1350,
                                intrinsicWidth: 1080,
                                loading: w(
                                  (l?.y || 0) +
                                    0 +
                                    (((l?.height || 253) -
                                      0 -
                                      (Math.max(0, ((l?.height || 253) - 0 - 36) / 1) * 1 +
                                        36 +
                                        0)) /
                                      2 +
                                      0 +
                                      0)
                                ),
                                pixelHeight: 1350,
                                pixelWidth: 1080,
                                sizes: l?.width || `100vw`,
                                src: `https://framerusercontent.com/images/HW5rQPcVaNYYv7R2N7Rlahg7He0.png?width=1080&height=1350`,
                                srcSet: `https://framerusercontent.com/images/HW5rQPcVaNYYv7R2N7Rlahg7He0.png?scale-down-to=1024&width=1080&height=1350 819w,https://framerusercontent.com/images/HW5rQPcVaNYYv7R2N7Rlahg7He0.png?width=1080&height=1350 1080w`,
                              },
                            },
                          },
                          y,
                          T
                        ),
                      }),
                    q() &&
                      s(W, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 1350,
                          intrinsicWidth: 1080,
                          pixelHeight: 1350,
                          pixelWidth: 1080,
                          src: `https://framerusercontent.com/images/tzME1oQXxoaDQfzF5HJ11IThw.png?width=1080&height=1350`,
                          srcSet: `https://framerusercontent.com/images/tzME1oQXxoaDQfzF5HJ11IThw.png?scale-down-to=1024&width=1080&height=1350 819w,https://framerusercontent.com/images/tzME1oQXxoaDQfzF5HJ11IThw.png?width=1080&height=1350 1080w`,
                        },
                        className: `framer-100efd7`,
                        layoutDependency: P,
                        layoutId: `AFvXIgUuG`,
                        ...$e(
                          {
                            umtCAnqfj: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 1350,
                                intrinsicWidth: 1080,
                                loading: w(
                                  (l?.y || 0) +
                                    0 +
                                    (((l?.height || 253) -
                                      0 -
                                      (Math.max(0, ((l?.height || 253) - 0 - 36) / 1) * 1 +
                                        36 +
                                        0)) /
                                      2 +
                                      0 +
                                      0)
                                ),
                                pixelHeight: 1350,
                                pixelWidth: 1080,
                                sizes: l?.width || `100vw`,
                                src: `https://framerusercontent.com/images/tzME1oQXxoaDQfzF5HJ11IThw.png?width=1080&height=1350`,
                                srcSet: `https://framerusercontent.com/images/tzME1oQXxoaDQfzF5HJ11IThw.png?scale-down-to=1024&width=1080&height=1350 819w,https://framerusercontent.com/images/tzME1oQXxoaDQfzF5HJ11IThw.png?width=1080&height=1350 1080w`,
                              },
                            },
                          },
                          y,
                          T
                        ),
                      }),
                    J() &&
                      s(W, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 1350,
                          intrinsicWidth: 1080,
                          pixelHeight: 1350,
                          pixelWidth: 1080,
                          src: `https://framerusercontent.com/images/VsfaOZ6CAWzZ38ONzdzOwVwyZk.png?width=1080&height=1350`,
                          srcSet: `https://framerusercontent.com/images/VsfaOZ6CAWzZ38ONzdzOwVwyZk.png?scale-down-to=1024&width=1080&height=1350 819w,https://framerusercontent.com/images/VsfaOZ6CAWzZ38ONzdzOwVwyZk.png?width=1080&height=1350 1080w`,
                        },
                        className: `framer-d4v3vk`,
                        layoutDependency: P,
                        layoutId: `bDsbFFmkG`,
                        ...$e(
                          {
                            mtxKI0zSL: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 1350,
                                intrinsicWidth: 1080,
                                loading: w(
                                  (l?.y || 0) +
                                    0 +
                                    (((l?.height || 253) -
                                      0 -
                                      (Math.max(0, ((l?.height || 253) - 0 - 36) / 1) * 1 +
                                        36 +
                                        0)) /
                                      2 +
                                      0 +
                                      0)
                                ),
                                pixelHeight: 1350,
                                pixelWidth: 1080,
                                sizes: l?.width || `100vw`,
                                src: `https://framerusercontent.com/images/VsfaOZ6CAWzZ38ONzdzOwVwyZk.png?width=1080&height=1350`,
                                srcSet: `https://framerusercontent.com/images/VsfaOZ6CAWzZ38ONzdzOwVwyZk.png?scale-down-to=1024&width=1080&height=1350 819w,https://framerusercontent.com/images/VsfaOZ6CAWzZ38ONzdzOwVwyZk.png?width=1080&height=1350 1080w`,
                              },
                            },
                          },
                          y,
                          T
                        ),
                      }),
                    d(h.div, {
                      className: `framer-1ulo54d`,
                      layoutDependency: P,
                      layoutId: `bK9U6H3kZ`,
                      style: { backgroundColor: `rgb(0, 0, 0)` },
                      children: [
                        s(I, {
                          __fromCanvasComponent: !0,
                          children: s(a, {
                            children: s(h.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                "--framer-font-size": `20px`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                              },
                              children: `See full project`,
                            }),
                          }),
                          className: `framer-buu6ge`,
                          fonts: [`BI;Amiamie/Regular/v0`],
                          layoutDependency: P,
                          layoutId: `yrbsUZY5C`,
                          style: {
                            "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        s(X, {
                          animated: !0,
                          className: `framer-1uj25z3`,
                          layoutDependency: P,
                          layoutId: `KrIpERO7y`,
                          style: {
                            "--1m6trwb": 0,
                            "--21h8s6": `rgb(255, 255, 255)`,
                            "--pgex8v": 1.5,
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-d2Sg9.framer-smilo4, .framer-d2Sg9 .framer-smilo4 { display: block; }`,
          `.framer-d2Sg9.framer-91aqvz { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 253px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 190px; }`,
          `.framer-d2Sg9 .framer-1haqctx-container { flex: none; height: 285px; position: relative; width: 228px; }`,
          `.framer-d2Sg9 .framer-vz0vjx, .framer-d2Sg9 .framer-1kgebfg, .framer-d2Sg9 .framer-1osi2q3, .framer-d2Sg9 .framer-100efd7, .framer-d2Sg9 .framer-d4v3vk { flex: 1 0 0px; height: 1px; overflow: visible; position: relative; width: 100%; }`,
          `.framer-d2Sg9 .framer-1ulo54d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; mix-blend-mode: difference; overflow: visible; padding: 6px; position: relative; width: 100%; }`,
          `.framer-d2Sg9 .framer-buu6ge { flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`,
          `.framer-d2Sg9 .framer-1uj25z3 { aspect-ratio: 1 / 1; flex: none; height: auto; mix-blend-mode: difference; position: relative; width: 24px; }`,
        ],
        `framer-d2Sg9`
      )),
      (dt.displayName = `MRTW`),
      (dt.defaultProps = { height: 253, width: 190 }),
      J(dt, {
        variant: {
          options: [`ZC7Svk4_n`, `IrNOP9k1K`, `eoxuc9BWB`, `EXrCmanC3`, `umtCAnqfj`, `mtxKI0zSL`],
          optionTitles: [
            `Variant 1`,
            `Variant 2`,
            `Variant 3`,
            `Variant 4`,
            `Variant 5`,
            `Variant 6`,
          ],
          title: `Variant`,
          type: U.Enum,
        },
      }),
      K(
        dt,
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
          ...et,
          ...tt,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function pt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt = e(() => {
    (f(),
      C(),
      y(),
      n(),
      Y(),
      (mt = x(X)),
      (ht = [`NHNLjYOQE`, `cx_NyLZkF`, `RzfAaNIrS`, `aqtSNIpVN`, `t5lGyJQrp`, `w1dbVttuW`]),
      (gt = `framer-2nAYF`),
      (_t = {
        aqtSNIpVN: `framer-v-1e5tk87`,
        cx_NyLZkF: `framer-v-5stliy`,
        NHNLjYOQE: `framer-v-1frrmzj`,
        RzfAaNIrS: `framer-v-1fverqf`,
        t5lGyJQrp: `framer-v-11qjn3g`,
        w1dbVttuW: `framer-v-1wm7qk2`,
      }),
      (vt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (yt = ({ value: e, children: n }) => {
        let r = u(g),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(g.Provider, { value: a, children: n });
      }),
      (bt = {
        "Variant 1": `NHNLjYOQE`,
        "Variant 2": `cx_NyLZkF`,
        "Variant 3": `RzfAaNIrS`,
        "Variant 4": `aqtSNIpVN`,
        "Variant 5": `t5lGyJQrp`,
        "Variant 6": `w1dbVttuW`,
      }),
      (xt = h.create(a)),
      (St = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: bt[r.variant] ?? r.variant ?? `NHNLjYOQE`,
      })),
      (Ct = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (wt = V(
        c(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = p(),
            { activeLocale: c, setLocale: ee } = N(),
            l = S(),
            { style: u, className: f, layoutId: m, variant: g, ..._ } = St(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: T,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = j({
              cycleOrder: ht,
              defaultVariant: `NHNLjYOQE`,
              ref: i,
              variant: g,
              variantClassNames: _t,
            }),
            M = Ct(e, A),
            { activeVariantCallback: P, delay: F } = H(y),
            L = P(async (...e) => {
              await F(() => k(`cx_NyLZkF`, !0), 500);
            }),
            R = P(async (...e) => {
              await F(() => k(`RzfAaNIrS`, !0), 500);
            }),
            z = P(async (...e) => {
              await F(() => k(`aqtSNIpVN`, !0), 500);
            });
          te(y, {
            aqtSNIpVN: P(async (...e) => {
              await F(() => k(`t5lGyJQrp`, !0), 500);
            }),
            cx_NyLZkF: R,
            default: L,
            RzfAaNIrS: z,
            t5lGyJQrp: P(async (...e) => {
              await F(() => k(`w1dbVttuW`, !0), 500);
            }),
            w1dbVttuW: P(async (...e) => {
              await F(() => k(`NHNLjYOQE`, !0), 500);
            }),
          });
          let B = E(gt);
          return s(v, {
            id: m ?? o,
            children: s(xt, {
              animate: A,
              initial: !1,
              children: s(yt, {
                value: vt,
                children: d(W, {
                  ..._,
                  ...C,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 4608,
                    intrinsicWidth: 3456,
                    loading: w(l?.y || 0),
                    pixelHeight: 5760,
                    pixelWidth: 4320,
                    sizes: l?.width || `100vw`,
                    src: `https://framerusercontent.com/images/8Y6uS4lAom9ZMoK921mTvnPTM.png?width=4320&height=5760`,
                    srcSet: `https://framerusercontent.com/images/8Y6uS4lAom9ZMoK921mTvnPTM.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/8Y6uS4lAom9ZMoK921mTvnPTM.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/8Y6uS4lAom9ZMoK921mTvnPTM.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/8Y6uS4lAom9ZMoK921mTvnPTM.png?width=4320&height=5760 4320w`,
                  },
                  className: E(B, `framer-1frrmzj`, f, b),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: M,
                  layoutId: `NHNLjYOQE`,
                  ref: i,
                  style: { ...u },
                  ...pt(
                    {
                      aqtSNIpVN: {
                        "data-framer-name": `Variant 4`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 5760,
                          intrinsicWidth: 4320,
                          loading: w(l?.y || 0),
                          pixelHeight: 5760,
                          pixelWidth: 4320,
                          sizes: l?.width || `100vw`,
                          src: `https://framerusercontent.com/images/HFlxXqe63l2KMyeRH6BXsAHKMpg.png?width=4320&height=5760`,
                          srcSet: `https://framerusercontent.com/images/HFlxXqe63l2KMyeRH6BXsAHKMpg.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/HFlxXqe63l2KMyeRH6BXsAHKMpg.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/HFlxXqe63l2KMyeRH6BXsAHKMpg.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/HFlxXqe63l2KMyeRH6BXsAHKMpg.png?width=4320&height=5760 4320w`,
                        },
                      },
                      cx_NyLZkF: {
                        "data-framer-name": `Variant 2`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 5760,
                          intrinsicWidth: 4320,
                          loading: w(l?.y || 0),
                          pixelHeight: 5760,
                          pixelWidth: 4320,
                          sizes: l?.width || `100vw`,
                          src: `https://framerusercontent.com/images/DFZIWgnRbCHJKg3Rr2ObqwEqTQ.png?width=4320&height=5760`,
                          srcSet: `https://framerusercontent.com/images/DFZIWgnRbCHJKg3Rr2ObqwEqTQ.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/DFZIWgnRbCHJKg3Rr2ObqwEqTQ.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/DFZIWgnRbCHJKg3Rr2ObqwEqTQ.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/DFZIWgnRbCHJKg3Rr2ObqwEqTQ.png?width=4320&height=5760 4320w`,
                        },
                      },
                      RzfAaNIrS: {
                        "data-framer-name": `Variant 3`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 5760,
                          intrinsicWidth: 4320,
                          loading: w(l?.y || 0),
                          pixelHeight: 5760,
                          pixelWidth: 4320,
                          sizes: l?.width || `100vw`,
                          src: `https://framerusercontent.com/images/rTuALCHlN5QJkzYYWbhbX6tJUN4.png?width=4320&height=5760`,
                          srcSet: `https://framerusercontent.com/images/rTuALCHlN5QJkzYYWbhbX6tJUN4.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/rTuALCHlN5QJkzYYWbhbX6tJUN4.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/rTuALCHlN5QJkzYYWbhbX6tJUN4.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/rTuALCHlN5QJkzYYWbhbX6tJUN4.png?width=4320&height=5760 4320w`,
                        },
                      },
                      t5lGyJQrp: {
                        "data-framer-name": `Variant 5`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 5760,
                          intrinsicWidth: 4320,
                          loading: w(l?.y || 0),
                          pixelHeight: 5760,
                          pixelWidth: 4320,
                          sizes: l?.width || `100vw`,
                          src: `https://framerusercontent.com/images/FK4jJivTpBsmrE14HasJHqtKI.png?width=4320&height=5760`,
                          srcSet: `https://framerusercontent.com/images/FK4jJivTpBsmrE14HasJHqtKI.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/FK4jJivTpBsmrE14HasJHqtKI.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/FK4jJivTpBsmrE14HasJHqtKI.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/FK4jJivTpBsmrE14HasJHqtKI.png?width=4320&height=5760 4320w`,
                        },
                      },
                      w1dbVttuW: {
                        "data-framer-name": `Variant 6`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 5760,
                          intrinsicWidth: 4320,
                          loading: w(l?.y || 0),
                          pixelHeight: 5760,
                          pixelWidth: 4320,
                          sizes: l?.width || `100vw`,
                          src: `https://framerusercontent.com/images/S3tWIZOirErhFWIujjW9vk2kFA.png?width=4320&height=5760`,
                          srcSet: `https://framerusercontent.com/images/S3tWIZOirErhFWIujjW9vk2kFA.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/S3tWIZOirErhFWIujjW9vk2kFA.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/S3tWIZOirErhFWIujjW9vk2kFA.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/S3tWIZOirErhFWIujjW9vk2kFA.png?width=4320&height=5760 4320w`,
                        },
                      },
                    },
                    y,
                    T
                  ),
                  children: [
                    s(W, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        intrinsicHeight: 5760,
                        intrinsicWidth: 4320,
                        loading: w((l?.y || 0) + 0 + (((l?.height || 285) - 0 - 321) / 2 + 0 + 0)),
                        pixelHeight: 5760,
                        pixelWidth: 4320,
                        sizes: `214px`,
                        src: `https://framerusercontent.com/images/8Y6uS4lAom9ZMoK921mTvnPTM.png?width=4320&height=5760`,
                        srcSet: `https://framerusercontent.com/images/8Y6uS4lAom9ZMoK921mTvnPTM.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/8Y6uS4lAom9ZMoK921mTvnPTM.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/8Y6uS4lAom9ZMoK921mTvnPTM.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/8Y6uS4lAom9ZMoK921mTvnPTM.png?width=4320&height=5760 4320w`,
                      },
                      className: `framer-1biumzf`,
                      layoutDependency: M,
                      layoutId: `ZSmoi7X9_`,
                      ...pt(
                        {
                          aqtSNIpVN: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 5760,
                              intrinsicWidth: 4320,
                              loading: w(
                                (l?.y || 0) + 0 + (((l?.height || 285) - 0 - 321) / 2 + 0 + 0)
                              ),
                              pixelHeight: 5760,
                              pixelWidth: 4320,
                              sizes: `214px`,
                              src: `https://framerusercontent.com/images/HFlxXqe63l2KMyeRH6BXsAHKMpg.png?width=4320&height=5760`,
                              srcSet: `https://framerusercontent.com/images/HFlxXqe63l2KMyeRH6BXsAHKMpg.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/HFlxXqe63l2KMyeRH6BXsAHKMpg.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/HFlxXqe63l2KMyeRH6BXsAHKMpg.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/HFlxXqe63l2KMyeRH6BXsAHKMpg.png?width=4320&height=5760 4320w`,
                            },
                          },
                          cx_NyLZkF: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 5760,
                              intrinsicWidth: 4320,
                              loading: w(
                                (l?.y || 0) + 0 + (((l?.height || 285) - 0 - 321) / 2 + 0 + 0)
                              ),
                              pixelHeight: 5760,
                              pixelWidth: 4320,
                              sizes: `214px`,
                              src: `https://framerusercontent.com/images/DFZIWgnRbCHJKg3Rr2ObqwEqTQ.png?width=4320&height=5760`,
                              srcSet: `https://framerusercontent.com/images/DFZIWgnRbCHJKg3Rr2ObqwEqTQ.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/DFZIWgnRbCHJKg3Rr2ObqwEqTQ.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/DFZIWgnRbCHJKg3Rr2ObqwEqTQ.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/DFZIWgnRbCHJKg3Rr2ObqwEqTQ.png?width=4320&height=5760 4320w`,
                            },
                          },
                          RzfAaNIrS: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 5760,
                              intrinsicWidth: 4320,
                              loading: w(
                                (l?.y || 0) + 0 + (((l?.height || 285) - 0 - 321) / 2 + 0 + 0)
                              ),
                              pixelHeight: 5760,
                              pixelWidth: 4320,
                              sizes: `214px`,
                              src: `https://framerusercontent.com/images/rTuALCHlN5QJkzYYWbhbX6tJUN4.png?width=4320&height=5760`,
                              srcSet: `https://framerusercontent.com/images/rTuALCHlN5QJkzYYWbhbX6tJUN4.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/rTuALCHlN5QJkzYYWbhbX6tJUN4.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/rTuALCHlN5QJkzYYWbhbX6tJUN4.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/rTuALCHlN5QJkzYYWbhbX6tJUN4.png?width=4320&height=5760 4320w`,
                            },
                          },
                          t5lGyJQrp: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 5760,
                              intrinsicWidth: 4320,
                              loading: w(
                                (l?.y || 0) + 0 + (((l?.height || 285) - 0 - 321) / 2 + 0 + 0)
                              ),
                              pixelHeight: 5760,
                              pixelWidth: 4320,
                              sizes: `214px`,
                              src: `https://framerusercontent.com/images/FK4jJivTpBsmrE14HasJHqtKI.png?width=4320&height=5760`,
                              srcSet: `https://framerusercontent.com/images/FK4jJivTpBsmrE14HasJHqtKI.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/FK4jJivTpBsmrE14HasJHqtKI.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/FK4jJivTpBsmrE14HasJHqtKI.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/FK4jJivTpBsmrE14HasJHqtKI.png?width=4320&height=5760 4320w`,
                            },
                          },
                          w1dbVttuW: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 5760,
                              intrinsicWidth: 4320,
                              loading: w(
                                (l?.y || 0) + 0 + (((l?.height || 285) - 0 - 321) / 2 + 0 + 0)
                              ),
                              pixelHeight: 5760,
                              pixelWidth: 4320,
                              sizes: `214px`,
                              src: `https://framerusercontent.com/images/S3tWIZOirErhFWIujjW9vk2kFA.png?width=4320&height=5760`,
                              srcSet: `https://framerusercontent.com/images/S3tWIZOirErhFWIujjW9vk2kFA.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/S3tWIZOirErhFWIujjW9vk2kFA.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/S3tWIZOirErhFWIujjW9vk2kFA.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/S3tWIZOirErhFWIujjW9vk2kFA.png?width=4320&height=5760 4320w`,
                            },
                          },
                        },
                        y,
                        T
                      ),
                    }),
                    d(h.div, {
                      className: `framer-1fqybsz`,
                      layoutDependency: M,
                      layoutId: `xfZ6fiLan`,
                      style: { backgroundColor: `rgb(0, 0, 0)` },
                      children: [
                        s(I, {
                          __fromCanvasComponent: !0,
                          children: s(a, {
                            children: s(h.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                "--framer-font-size": `20px`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                              },
                              children: `See full project`,
                            }),
                          }),
                          className: `framer-1a5bmkn`,
                          fonts: [`BI;Amiamie/Regular/v0`],
                          layoutDependency: M,
                          layoutId: `KpuUFa8sq`,
                          style: {
                            "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        s(X, {
                          animated: !0,
                          className: `framer-787vlt`,
                          layoutDependency: M,
                          layoutId: `OZjXmFZKk`,
                          style: {
                            "--1m6trwb": 0,
                            "--21h8s6": `rgb(255, 255, 255)`,
                            "--pgex8v": 1.5,
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-2nAYF.framer-bqj5hx, .framer-2nAYF .framer-bqj5hx { display: block; }`,
          `.framer-2nAYF.framer-1frrmzj { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 285px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 214px; }`,
          `.framer-2nAYF .framer-1biumzf { flex: none; height: 285px; overflow: visible; position: relative; width: 214px; }`,
          `.framer-2nAYF .framer-1fqybsz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 6px; position: relative; width: 100%; }`,
          `.framer-2nAYF .framer-1a5bmkn { flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`,
          `.framer-2nAYF .framer-787vlt { aspect-ratio: 1 / 1; flex: none; height: auto; mix-blend-mode: difference; position: relative; width: 24px; }`,
        ],
        `framer-2nAYF`
      )),
      (wt.displayName = `Łasowiacka nalewka`),
      (wt.defaultProps = { height: 285, width: 214 }),
      J(wt, {
        variant: {
          options: [`NHNLjYOQE`, `cx_NyLZkF`, `RzfAaNIrS`, `aqtSNIpVN`, `t5lGyJQrp`, `w1dbVttuW`],
          optionTitles: [
            `Variant 1`,
            `Variant 2`,
            `Variant 3`,
            `Variant 4`,
            `Variant 5`,
            `Variant 6`,
          ],
          title: `Variant`,
          type: U.Enum,
        },
      }),
      K(
        wt,
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
          ...mt,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Et(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt = e(() => {
    (f(),
      C(),
      y(),
      n(),
      Y(),
      (Dt = x(X)),
      (Ot = [`rWn3aWkch`, `YxSL3XfAK`]),
      (kt = `framer-FbJH3`),
      (At = { rWn3aWkch: `framer-v-su1669`, YxSL3XfAK: `framer-v-1krk16v` }),
      (jt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Mt = ({ value: e, children: n }) => {
        let r = u(g),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(g.Provider, { value: a, children: n });
      }),
      (Nt = { "Variant 1": `rWn3aWkch`, "Variant 2": `YxSL3XfAK` }),
      (Pt = h.create(a)),
      (Ft = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Nt[r.variant] ?? r.variant ?? `rWn3aWkch`,
      })),
      (It = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Lt = V(
        c(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = p(),
            { activeLocale: c, setLocale: ee } = N();
          S();
          let { style: l, className: u, layoutId: f, variant: m, ...g } = Ft(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = j({
              cycleOrder: Ot,
              defaultVariant: `rWn3aWkch`,
              ref: i,
              variant: m,
              variantClassNames: At,
            }),
            k = It(e, O),
            { activeVariantCallback: A, delay: M } = H(_),
            P = A(async (...e) => {
              (T({ isHovered: !0 }), D(`YxSL3XfAK`));
            }),
            F = A(async (...e) => {
              (T({ isHovered: !1 }), D(`rWn3aWkch`));
            }),
            R = E(kt);
          return s(v, {
            id: f ?? o,
            children: s(Pt, {
              animate: O,
              initial: !1,
              children: s(Mt, {
                value: jt,
                children: s(L, {
                  motionChild: !0,
                  nodeId: `rWn3aWkch`,
                  scopeId: `jWTZBZ8AN`,
                  ...Et(
                    {
                      YxSL3XfAK: {
                        href: `https://www.linkedin.com/in/danylo-vasiur-7a9604324/`,
                        openInNewTab: !0,
                      },
                    },
                    _,
                    C
                  ),
                  children: d(h.a, {
                    ...g,
                    ...x,
                    className: `${E(R, `framer-su1669`, u, y)} framer-1iu93wj`,
                    "data-framer-name": `Variant 1`,
                    "data-highlight": !0,
                    layoutDependency: k,
                    layoutId: `rWn3aWkch`,
                    onMouseEnter: P,
                    ref: i,
                    style: { ...l },
                    ...Et(
                      {
                        YxSL3XfAK: {
                          "data-framer-name": `Variant 2`,
                          onMouseEnter: void 0,
                          onMouseLeave: F,
                        },
                      },
                      _,
                      C
                    ),
                    children: [
                      s(I, {
                        __fromCanvasComponent: !0,
                        children: s(a, {
                          children: s(h.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `Qkk7QW1pYW1pZS9MaWdodC92MA==`,
                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                              "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                              "--framer-font-size": `20px`,
                              "--framer-font-weight": `300`,
                              "--framer-letter-spacing": `-0.02em`,
                              "--framer-line-height": `1.6em`,
                            },
                            children: `Linked In`,
                          }),
                        }),
                        className: `framer-1m1dzld`,
                        fonts: [`BI;Amiamie/Light/v0`],
                        layoutDependency: k,
                        layoutId: `TB8zwwXpe`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `center`,
                        withExternalLayout: !0,
                        ...Et(
                          {
                            YxSL3XfAK: {
                              children: s(a, {
                                children: s(h.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                    "--framer-font-size": `20px`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1.6em`,
                                  },
                                  children: `Linked In`,
                                }),
                              }),
                              fonts: [`BI;Amiamie/Regular/v0`],
                            },
                          },
                          _,
                          C
                        ),
                      }),
                      s(X, {
                        animated: !0,
                        className: `framer-1lpyle0`,
                        layoutDependency: k,
                        layoutId: `at87leKfK`,
                        style: { "--1m6trwb": 0, "--21h8s6": `rgb(0, 0, 0)`, "--pgex8v": 1 },
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-FbJH3.framer-1iu93wj, .framer-FbJH3 .framer-1iu93wj { display: block; }`,
          `.framer-FbJH3.framer-su1669 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-FbJH3 .framer-1m1dzld { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-FbJH3 .framer-1lpyle0 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 24px; }`,
          `.framer-FbJH3.framer-v-1krk16v.framer-su1669 { text-decoration: none; }`,
        ],
        `framer-FbJH3`
      )),
      (Lt.displayName = `Linked in`),
      (Lt.defaultProps = { height: 32, width: 106 }),
      J(Lt, {
        variant: {
          options: [`rWn3aWkch`, `YxSL3XfAK`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: U.Enum,
        },
      }),
      K(
        Lt,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Amiamie`,
                source: `builtIn`,
                style: `normal`,
                uiFamilyName: `Amiamie`,
                url: `../../assets/fonts/1MH4lxBHPP5tkXBqyBrWkrJ1as.woff2`,
                weight: `300`,
              },
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
          ...Dt,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function zt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Q,
  Yt = e(() => {
    (f(),
      C(),
      y(),
      n(),
      (Bt = [`ergfnayr1`, `SJkSWtwrD`]),
      (Vt = `framer-DvVYV`),
      (Ht = { ergfnayr1: `framer-v-1tztuf`, SJkSWtwrD: `framer-v-14mckpi` }),
      (Ut = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Wt = ({ value: e, children: n }) => {
        let r = u(g),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(g.Provider, { value: a, children: n });
      }),
      (Gt = { Desktop: `ergfnayr1`, Mobile: `SJkSWtwrD` }),
      (Kt = h.create(a)),
      (qt = ({ description: e, height: t, id: n, role: r, title: i, width: a, year: o, ...s }) => ({
        ...s,
        DwK_HcFci: i ?? s.DwK_HcFci ?? `company`,
        FfaVB0OyP: o ?? s.FfaVB0OyP ?? `2021-now`,
        urYaRgX6o:
          e ??
          s.urYaRgX6o ??
          `Working with startups and small businesses to create strategic brand identities that help them stand out and connect with their customers.`,
        variant: Gt[s.variant] ?? s.variant ?? `ergfnayr1`,
        wrjWTGkAU: r ?? s.wrjWTGkAU ?? `role`,
      })),
      (Jt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = V(
        c(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = p(),
            { activeLocale: c, setLocale: ee } = N();
          S();
          let {
              style: l,
              className: u,
              layoutId: f,
              variant: m,
              DwK_HcFci: g,
              wrjWTGkAU: _,
              urYaRgX6o: y,
              FfaVB0OyP: b,
              ...x
            } = qt(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: k,
              setGestureState: A,
              setVariant: M,
              variants: P,
            } = j({
              cycleOrder: Bt,
              defaultVariant: `ergfnayr1`,
              ref: i,
              variant: m,
              variantClassNames: Ht,
            }),
            F = Jt(e, P),
            L = E(Vt),
            R = () => C !== `SJkSWtwrD`;
          return s(v, {
            id: f ?? o,
            children: s(Kt, {
              animate: P,
              initial: !1,
              children: s(Wt, {
                value: Ut,
                children: d(h.div, {
                  ...x,
                  ...D,
                  className: E(L, `framer-1tztuf`, u, w),
                  "data-framer-name": `Desktop`,
                  layoutDependency: F,
                  layoutId: `ergfnayr1`,
                  ref: i,
                  style: { backgroundColor: `rgba(0, 0, 0, 0)`, ...l },
                  variants: { SJkSWtwrD: { backgroundColor: `rgb(255, 255, 255)` } },
                  ...zt({ SJkSWtwrD: { "data-framer-name": `Mobile` } }, C, O),
                  children: [
                    d(h.div, {
                      className: `framer-1r4hmqo`,
                      "data-framer-name": `Text`,
                      layoutDependency: F,
                      layoutId: `qcm5sfFFE`,
                      children: [
                        s(I, {
                          __fromCanvasComponent: !0,
                          children: s(a, {
                            children: s(h.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                "--framer-font-size": `24px`,
                                "--framer-letter-spacing": `-0.04em`,
                                "--framer-text-transform": `lowercase`,
                              },
                              children: `company`,
                            }),
                          }),
                          className: `framer-50al1u`,
                          fonts: [`BI;Amiamie/Regular/v0`],
                          layoutDependency: F,
                          layoutId: `OISszZM6g`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: g,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...zt(
                            {
                              SJkSWtwrD: {
                                children: s(a, {
                                  children: s(h.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      "--framer-letter-spacing": `-0.03em`,
                                      "--framer-text-transform": `lowercase`,
                                    },
                                    children: `company`,
                                  }),
                                }),
                              },
                            },
                            C,
                            O
                          ),
                        }),
                        s(I, {
                          __fromCanvasComponent: !0,
                          children: s(a, {
                            children: s(h.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `Qkk7QW1pYW1pZS9MaWdodC92MA==`,
                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                "--framer-font-size": `20px`,
                                "--framer-font-weight": `300`,
                                "--framer-letter-spacing": `-0.04em`,
                                "--framer-text-transform": `lowercase`,
                              },
                              children: `role`,
                            }),
                          }),
                          className: `framer-1848uyk`,
                          fonts: [`BI;Amiamie/Light/v0`],
                          layoutDependency: F,
                          layoutId: `MQ_7X3MLw`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                            opacity: 0.6,
                          },
                          text: _,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...zt(
                            {
                              SJkSWtwrD: {
                                children: s(a, {
                                  children: s(h.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9MaWdodC92MA==`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-weight": `300`,
                                      "--framer-letter-spacing": `-0.02em`,
                                      "--framer-text-transform": `lowercase`,
                                    },
                                    children: `role`,
                                  }),
                                }),
                              },
                            },
                            C,
                            O
                          ),
                        }),
                      ],
                    }),
                    R() &&
                      s(I, {
                        __fromCanvasComponent: !0,
                        children: s(a, {
                          children: s(h.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `Qkk7QW1pYW1pZS9MaWdodC92MA==`,
                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                              "--framer-font-weight": `300`,
                              "--framer-letter-spacing": `-0.02em`,
                              "--framer-text-transform": `lowercase`,
                            },
                            children: `Working with startups and small businesses to create strategic brand identities that help them stand out and connect with their customers.`,
                          }),
                        }),
                        className: `framer-1g5ajxo`,
                        fonts: [`BI;Amiamie/Light/v0`],
                        layoutDependency: F,
                        layoutId: `pDYsMiNLA`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          opacity: 0.7,
                        },
                        text: y,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    s(I, {
                      __fromCanvasComponent: !0,
                      children: s(a, {
                        children: s(h.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                            "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                            "--framer-font-size": `24px`,
                            "--framer-letter-spacing": `-0.04em`,
                            "--framer-text-alignment": `right`,
                            "--framer-text-transform": `lowercase`,
                          },
                          children: `2021-now`,
                        }),
                      }),
                      className: `framer-1gr0wy5`,
                      fonts: [`BI;Amiamie/Regular/v0`],
                      layoutDependency: F,
                      layoutId: `u0gRgURZy`,
                      style: {
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: b,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...zt(
                        {
                          SJkSWtwrD: {
                            children: s(a, {
                              children: s(h.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                  "--framer-letter-spacing": `-0.03em`,
                                  "--framer-text-alignment": `right`,
                                  "--framer-text-transform": `lowercase`,
                                },
                                children: `2021-now`,
                              }),
                            }),
                          },
                        },
                        C,
                        O
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-DvVYV.framer-qjga60, .framer-DvVYV .framer-qjga60 { display: block; }`,
          `.framer-DvVYV.framer-1tztuf { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1144px; }`,
          `.framer-DvVYV .framer-1r4hmqo { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-DvVYV .framer-50al1u, .framer-DvVYV .framer-1848uyk { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-DvVYV .framer-1g5ajxo { --framer-text-wrap: balance; flex: 1 0 0px; height: auto; max-width: 360px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-DvVYV .framer-1gr0wy5 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-DvVYV.framer-v-14mckpi.framer-1tztuf { overflow: visible; width: 390px; }`,
          `.framer-DvVYV.framer-v-14mckpi .framer-1r4hmqo { overflow: visible; }`,
        ],
        `framer-DvVYV`
      )),
      (Q.displayName = `Experience card`),
      (Q.defaultProps = { height: 61, width: 1144 }),
      J(Q, {
        variant: {
          options: [`ergfnayr1`, `SJkSWtwrD`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: U.Enum,
        },
        DwK_HcFci: { defaultValue: `company`, displayTextArea: !0, title: `Title`, type: U.String },
        onDwK_HcFciChange: { changes: `DwK_HcFci`, type: U.ChangeHandler },
        wrjWTGkAU: { defaultValue: `role`, displayTextArea: !0, title: `Role`, type: U.String },
        onwrjWTGkAUChange: { changes: `wrjWTGkAU`, type: U.ChangeHandler },
        urYaRgX6o: {
          defaultValue: `Working with startups and small businesses to create strategic brand identities that help them stand out and connect with their customers.`,
          displayTextArea: !0,
          title: `Description`,
          type: U.String,
        },
        onurYaRgX6oChange: { changes: `urYaRgX6o`, type: U.ChangeHandler },
        FfaVB0OyP: { defaultValue: `2021-now`, displayTextArea: !0, title: `Year`, type: U.String },
        onFfaVB0OyPChange: { changes: `FfaVB0OyP`, type: U.ChangeHandler },
      }),
      K(
        Q,
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
              {
                cssFamilyName: `Amiamie`,
                source: `builtIn`,
                style: `normal`,
                uiFamilyName: `Amiamie`,
                url: `../../assets/fonts/1MH4lxBHPP5tkXBqyBrWkrJ1as.woff2`,
                weight: `300`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn = e(() => {
    (f(),
      C(),
      y(),
      n(),
      Y(),
      Oe(),
      (Xt = x(Z)),
      (Zt = x(X)),
      (Qt = `framer-AgGZn`),
      ($t = { GrrnbWxQT: `framer-v-1y9xayh` }),
      (en = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (tn = ({ value: e, children: n }) => {
        let r = u(g),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(g.Provider, { value: a, children: n });
      }),
      (nn = h.create(a)),
      (rn = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (an = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (on = V(
        c(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = p(),
            { activeLocale: c, setLocale: ee } = N();
          S();
          let { style: l, className: u, layoutId: f, variant: m, ...g } = rn(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = j({ defaultVariant: `GrrnbWxQT`, ref: i, variant: m, variantClassNames: $t }),
            A = an(e, O),
            M = E(Qt);
          return s(v, {
            id: f ?? o,
            children: s(nn, {
              animate: O,
              initial: !1,
              children: s(tn, {
                value: en,
                children: d(h.div, {
                  ...g,
                  ...x,
                  className: E(M, `framer-1y9xayh`, u, y),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: A,
                  layoutId: `GrrnbWxQT`,
                  ref: i,
                  style: { ...l },
                  children: [
                    s(G, {
                      children: s(k, {
                        className: `framer-13ke9mm-container`,
                        isModuleExternal: !0,
                        layoutDependency: A,
                        layoutId: `gGLGhi6R1-container`,
                        nodeId: `gGLGhi6R1`,
                        rendersWithMotion: !0,
                        scopeId: `LljKutHdv`,
                        children: s(Z, {
                          backgroundColor: `rgba(0, 0, 0, 0)`,
                          borderRadius: 0,
                          bottomLeftRadius: 0,
                          bottomRightRadius: 0,
                          controls: !1,
                          height: `100%`,
                          id: `gGLGhi6R1`,
                          isMixedBorderRadius: !1,
                          layoutId: `gGLGhi6R1`,
                          loop: !0,
                          muted: !0,
                          objectFit: `cover`,
                          playing: !0,
                          posterEnabled: !0,
                          srcFile: `https://framerusercontent.com/assets/SpAQypmAKcjojk1r7A0F5hcye7M.mp4`,
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
                    d(h.div, {
                      className: `framer-y7vcar`,
                      layoutDependency: A,
                      layoutId: `lDp2_dwd6`,
                      style: { backgroundColor: `rgb(0, 0, 0)` },
                      children: [
                        s(I, {
                          __fromCanvasComponent: !0,
                          children: s(a, {
                            children: s(h.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                "--framer-font-size": `20px`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                              },
                              children: `See full project`,
                            }),
                          }),
                          className: `framer-k6r5dt`,
                          fonts: [`BI;Amiamie/Regular/v0`],
                          layoutDependency: A,
                          layoutId: `TiCf7FNEr`,
                          style: {
                            "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        s(X, {
                          animated: !0,
                          className: `framer-eq21aw`,
                          layoutDependency: A,
                          layoutId: `iIF1ojLfH`,
                          style: {
                            "--1m6trwb": 0,
                            "--21h8s6": `rgb(255, 255, 255)`,
                            "--pgex8v": 1.5,
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-AgGZn.framer-1k4j6wc, .framer-AgGZn .framer-1k4j6wc { display: block; }`,
          `.framer-AgGZn.framer-1y9xayh { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 190px; }`,
          `.framer-AgGZn .framer-13ke9mm-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-AgGZn .framer-y7vcar { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; mix-blend-mode: difference; overflow: visible; padding: 6px; position: relative; width: 100%; }`,
          `.framer-AgGZn .framer-k6r5dt { flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`,
          `.framer-AgGZn .framer-eq21aw { aspect-ratio: 1 / 1; flex: none; height: auto; mix-blend-mode: difference; position: relative; width: 24px; }`,
        ],
        `framer-AgGZn`
      )),
      (on.displayName = `Ubu`),
      (on.defaultProps = { height: 289, width: 190 }),
      K(
        on,
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
          ...Xt,
          ...Zt,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function cn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn = e(() => {
    (f(),
      C(),
      y(),
      n(),
      Y(),
      (ln = x(X)),
      (un = [`UD25oqEfR`, `epd4X6Aso`, `TbORdwU3U`, `bgMYcMYok`, `GYsPKs8W0`]),
      (dn = `framer-ZiT6R`),
      (fn = {
        bgMYcMYok: `framer-v-f0ns8z`,
        epd4X6Aso: `framer-v-1r31n5m`,
        GYsPKs8W0: `framer-v-1oou12q`,
        TbORdwU3U: `framer-v-o1hvlo`,
        UD25oqEfR: `framer-v-y2d6zv`,
      }),
      (pn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (mn = ({ value: e, children: n }) => {
        let r = u(g),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(g.Provider, { value: a, children: n });
      }),
      (hn = {
        "Variant 1": `UD25oqEfR`,
        "Variant 2": `epd4X6Aso`,
        "Variant 3": `TbORdwU3U`,
        "Variant 4": `bgMYcMYok`,
        "Variant 5": `GYsPKs8W0`,
      }),
      (gn = h.create(a)),
      (_n = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: hn[r.variant] ?? r.variant ?? `UD25oqEfR`,
      })),
      (vn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (yn = V(
        c(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = p(),
            { activeLocale: c, setLocale: ee } = N(),
            l = S(),
            { style: u, className: f, layoutId: m, variant: g, ..._ } = _n(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: T,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = j({
              cycleOrder: un,
              defaultVariant: `UD25oqEfR`,
              ref: i,
              variant: g,
              variantClassNames: fn,
            }),
            M = vn(e, A),
            { activeVariantCallback: P, delay: F } = H(y),
            L = P(async (...e) => {
              await F(() => k(`epd4X6Aso`, !0), 500);
            }),
            R = P(async (...e) => {
              await F(() => k(`TbORdwU3U`, !0), 500);
            }),
            z = P(async (...e) => {
              await F(() => k(`bgMYcMYok`, !0), 500);
            });
          te(y, {
            bgMYcMYok: P(async (...e) => {
              await F(() => k(`GYsPKs8W0`, !0), 500);
            }),
            default: L,
            epd4X6Aso: R,
            GYsPKs8W0: P(async (...e) => {
              await F(() => k(`UD25oqEfR`, !0), 500);
            }),
            TbORdwU3U: z,
          });
          let B = E(dn);
          return s(v, {
            id: m ?? o,
            children: s(gn, {
              animate: A,
              initial: !1,
              children: s(mn, {
                value: pn,
                children: d(W, {
                  ..._,
                  ...C,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 4655.2,
                    intrinsicWidth: 3503.2,
                    loading: w(l?.y || 0),
                    pixelHeight: 5819,
                    pixelWidth: 4379,
                    sizes: l?.width || `100vw`,
                    src: `https://framerusercontent.com/images/oaYLPYUCqCUMzxazQxSndHndE.png?width=4379&height=5819`,
                    srcSet: `https://framerusercontent.com/images/oaYLPYUCqCUMzxazQxSndHndE.png?scale-down-to=1024&width=4379&height=5819 770w,https://framerusercontent.com/images/oaYLPYUCqCUMzxazQxSndHndE.png?scale-down-to=2048&width=4379&height=5819 1541w,https://framerusercontent.com/images/oaYLPYUCqCUMzxazQxSndHndE.png?scale-down-to=4096&width=4379&height=5819 3082w,https://framerusercontent.com/images/oaYLPYUCqCUMzxazQxSndHndE.png?width=4379&height=5819 4379w`,
                  },
                  className: E(B, `framer-y2d6zv`, f, b),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  fitImageDimension: `height`,
                  layoutDependency: M,
                  layoutId: `UD25oqEfR`,
                  ref: i,
                  style: { ...u },
                  ...cn(
                    {
                      bgMYcMYok: {
                        "data-framer-name": `Variant 4`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 5760,
                          intrinsicWidth: 4320,
                          loading: w(l?.y || 0),
                          pixelHeight: 5760,
                          pixelWidth: 4320,
                          sizes: l?.width || `100vw`,
                          src: `https://framerusercontent.com/images/fqmnxjtzTIgieTElr2YoY1JSQ.png?width=4320&height=5760`,
                          srcSet: `https://framerusercontent.com/images/fqmnxjtzTIgieTElr2YoY1JSQ.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/fqmnxjtzTIgieTElr2YoY1JSQ.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/fqmnxjtzTIgieTElr2YoY1JSQ.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/fqmnxjtzTIgieTElr2YoY1JSQ.png?width=4320&height=5760 4320w`,
                        },
                      },
                      epd4X6Aso: {
                        "data-framer-name": `Variant 2`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 5760,
                          intrinsicWidth: 4320,
                          loading: w(l?.y || 0),
                          pixelHeight: 5760,
                          pixelWidth: 4320,
                          sizes: l?.width || `100vw`,
                          src: `https://framerusercontent.com/images/IEWtN4fsRjgsSTBeREV1eA7eJfo.png?width=4320&height=5760`,
                          srcSet: `https://framerusercontent.com/images/IEWtN4fsRjgsSTBeREV1eA7eJfo.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/IEWtN4fsRjgsSTBeREV1eA7eJfo.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/IEWtN4fsRjgsSTBeREV1eA7eJfo.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/IEWtN4fsRjgsSTBeREV1eA7eJfo.png?width=4320&height=5760 4320w`,
                        },
                      },
                      GYsPKs8W0: {
                        "data-framer-name": `Variant 5`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 5760,
                          intrinsicWidth: 4320,
                          loading: w(l?.y || 0),
                          pixelHeight: 5760,
                          pixelWidth: 4320,
                          sizes: l?.width || `100vw`,
                          src: `https://framerusercontent.com/images/dnsm4P9qwU9ZWZF6PIgzNkSjac.png?width=4320&height=5760`,
                          srcSet: `https://framerusercontent.com/images/dnsm4P9qwU9ZWZF6PIgzNkSjac.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/dnsm4P9qwU9ZWZF6PIgzNkSjac.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/dnsm4P9qwU9ZWZF6PIgzNkSjac.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/dnsm4P9qwU9ZWZF6PIgzNkSjac.png?width=4320&height=5760 4320w`,
                        },
                      },
                      TbORdwU3U: {
                        "data-framer-name": `Variant 3`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 5760,
                          intrinsicWidth: 4320,
                          loading: w(l?.y || 0),
                          pixelHeight: 5760,
                          pixelWidth: 4320,
                          sizes: l?.width || `100vw`,
                          src: `https://framerusercontent.com/images/ZwZdt1Oc0nTAyYrYQR6rk0JbOk.png?width=4320&height=5760`,
                          srcSet: `https://framerusercontent.com/images/ZwZdt1Oc0nTAyYrYQR6rk0JbOk.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/ZwZdt1Oc0nTAyYrYQR6rk0JbOk.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/ZwZdt1Oc0nTAyYrYQR6rk0JbOk.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/ZwZdt1Oc0nTAyYrYQR6rk0JbOk.png?width=4320&height=5760 4320w`,
                        },
                      },
                    },
                    y,
                    T
                  ),
                  children: [
                    s(W, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        intrinsicHeight: 5819,
                        intrinsicWidth: 4379,
                        loading: w(
                          (l?.y || 0) +
                            0 +
                            ((l?.height || 288) -
                              0 -
                              (((l?.height || 288) - 0) * 1 + 36 + 0) +
                              0 +
                              0)
                        ),
                        pixelHeight: 5819,
                        pixelWidth: 4379,
                        sizes: l?.width || `100vw`,
                        src: `https://framerusercontent.com/images/oaYLPYUCqCUMzxazQxSndHndE.png?width=4379&height=5819`,
                        srcSet: `https://framerusercontent.com/images/oaYLPYUCqCUMzxazQxSndHndE.png?scale-down-to=1024&width=4379&height=5819 770w,https://framerusercontent.com/images/oaYLPYUCqCUMzxazQxSndHndE.png?scale-down-to=2048&width=4379&height=5819 1541w,https://framerusercontent.com/images/oaYLPYUCqCUMzxazQxSndHndE.png?scale-down-to=4096&width=4379&height=5819 3082w,https://framerusercontent.com/images/oaYLPYUCqCUMzxazQxSndHndE.png?width=4379&height=5819 4379w`,
                      },
                      className: `framer-14ryhl5`,
                      layoutDependency: M,
                      layoutId: `BbIMx0cIQ`,
                      ...cn(
                        {
                          bgMYcMYok: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 5760,
                              intrinsicWidth: 4320,
                              loading: w(
                                (l?.y || 0) +
                                  0 +
                                  ((l?.height || 289) -
                                    0 -
                                    (((l?.height || 289) - 0) * 1 + 36 + 0) +
                                    0 +
                                    0)
                              ),
                              pixelHeight: 5760,
                              pixelWidth: 4320,
                              sizes: l?.width || `100vw`,
                              src: `https://framerusercontent.com/images/fqmnxjtzTIgieTElr2YoY1JSQ.png?width=4320&height=5760`,
                              srcSet: `https://framerusercontent.com/images/fqmnxjtzTIgieTElr2YoY1JSQ.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/fqmnxjtzTIgieTElr2YoY1JSQ.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/fqmnxjtzTIgieTElr2YoY1JSQ.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/fqmnxjtzTIgieTElr2YoY1JSQ.png?width=4320&height=5760 4320w`,
                            },
                          },
                          epd4X6Aso: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 5760,
                              intrinsicWidth: 4320,
                              loading: w(
                                (l?.y || 0) +
                                  0 +
                                  ((l?.height || 289) -
                                    0 -
                                    (((l?.height || 289) - 0) * 1 + 36 + 0) +
                                    0 +
                                    0)
                              ),
                              pixelHeight: 5760,
                              pixelWidth: 4320,
                              sizes: l?.width || `100vw`,
                              src: `https://framerusercontent.com/images/IEWtN4fsRjgsSTBeREV1eA7eJfo.png?width=4320&height=5760`,
                              srcSet: `https://framerusercontent.com/images/IEWtN4fsRjgsSTBeREV1eA7eJfo.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/IEWtN4fsRjgsSTBeREV1eA7eJfo.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/IEWtN4fsRjgsSTBeREV1eA7eJfo.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/IEWtN4fsRjgsSTBeREV1eA7eJfo.png?width=4320&height=5760 4320w`,
                            },
                          },
                          GYsPKs8W0: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 5760,
                              intrinsicWidth: 4320,
                              loading: w(
                                (l?.y || 0) +
                                  0 +
                                  ((l?.height || 289) -
                                    0 -
                                    (((l?.height || 289) - 0) * 1 + 36 + 0) +
                                    0 +
                                    0)
                              ),
                              pixelHeight: 5760,
                              pixelWidth: 4320,
                              sizes: l?.width || `100vw`,
                              src: `https://framerusercontent.com/images/dnsm4P9qwU9ZWZF6PIgzNkSjac.png?width=4320&height=5760`,
                              srcSet: `https://framerusercontent.com/images/dnsm4P9qwU9ZWZF6PIgzNkSjac.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/dnsm4P9qwU9ZWZF6PIgzNkSjac.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/dnsm4P9qwU9ZWZF6PIgzNkSjac.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/dnsm4P9qwU9ZWZF6PIgzNkSjac.png?width=4320&height=5760 4320w`,
                            },
                          },
                          TbORdwU3U: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 5760,
                              intrinsicWidth: 4320,
                              loading: w(
                                (l?.y || 0) +
                                  0 +
                                  ((l?.height || 289) -
                                    0 -
                                    (((l?.height || 289) - 0) * 1 + 36 + 0) +
                                    0 +
                                    0)
                              ),
                              pixelHeight: 5760,
                              pixelWidth: 4320,
                              sizes: l?.width || `100vw`,
                              src: `https://framerusercontent.com/images/ZwZdt1Oc0nTAyYrYQR6rk0JbOk.png?width=4320&height=5760`,
                              srcSet: `https://framerusercontent.com/images/ZwZdt1Oc0nTAyYrYQR6rk0JbOk.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/ZwZdt1Oc0nTAyYrYQR6rk0JbOk.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/ZwZdt1Oc0nTAyYrYQR6rk0JbOk.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/ZwZdt1Oc0nTAyYrYQR6rk0JbOk.png?width=4320&height=5760 4320w`,
                            },
                          },
                        },
                        y,
                        T
                      ),
                    }),
                    d(h.div, {
                      className: `framer-194iruh`,
                      layoutDependency: M,
                      layoutId: `Uybo7biie`,
                      style: { backgroundColor: `rgb(0, 0, 0)` },
                      children: [
                        s(I, {
                          __fromCanvasComponent: !0,
                          children: s(a, {
                            children: s(h.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                "--framer-font-size": `20px`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                              },
                              children: `See full project`,
                            }),
                          }),
                          className: `framer-uqhq8x`,
                          fonts: [`BI;Amiamie/Regular/v0`],
                          layoutDependency: M,
                          layoutId: `o6ghOz4dD`,
                          style: {
                            "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        s(X, {
                          animated: !0,
                          className: `framer-1fvzeu2`,
                          layoutDependency: M,
                          layoutId: `XpFys23t0`,
                          style: {
                            "--1m6trwb": 0,
                            "--21h8s6": `rgb(255, 255, 255)`,
                            "--pgex8v": 1.5,
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-ZiT6R.framer-181lq85, .framer-ZiT6R .framer-181lq85 { display: block; }`,
          `.framer-ZiT6R.framer-y2d6zv { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 190px; }`,
          `.framer-ZiT6R .framer-14ryhl5 { flex: none; height: 100%; overflow: visible; position: relative; width: 100%; }`,
          `.framer-ZiT6R .framer-194iruh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 6px; position: relative; width: 100%; }`,
          `.framer-ZiT6R .framer-uqhq8x { flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`,
          `.framer-ZiT6R .framer-1fvzeu2 { aspect-ratio: 1 / 1; flex: none; height: auto; mix-blend-mode: difference; position: relative; width: 24px; }`,
        ],
        `framer-ZiT6R`
      )),
      (yn.displayName = `Honored`),
      (yn.defaultProps = { height: 288, width: 190 }),
      J(yn, {
        variant: {
          options: [`UD25oqEfR`, `epd4X6Aso`, `TbORdwU3U`, `bgMYcMYok`, `GYsPKs8W0`],
          optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`, `Variant 4`, `Variant 5`],
          title: `Variant`,
          type: U.Enum,
        },
      }),
      K(
        yn,
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
          ...ln,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function xn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn = e(() => {
    (f(),
      C(),
      y(),
      n(),
      Y(),
      (Sn = x(X)),
      (Cn = [`wnhhwWxB6`, `weqHM2svn`]),
      (wn = `framer-yrqmN`),
      (Tn = { weqHM2svn: `framer-v-uz8os5`, wnhhwWxB6: `framer-v-m300l8` }),
      (En = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Dn = (e, t) => `translate(-50%, -50%) ${t}`),
      (On = ({ value: e, children: n }) => {
        let r = u(g),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(g.Provider, { value: a, children: n });
      }),
      (kn = { "Variant 1": `wnhhwWxB6`, "Variant 2": `weqHM2svn` }),
      (An = h.create(a)),
      (jn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: kn[r.variant] ?? r.variant ?? `wnhhwWxB6`,
      })),
      (Mn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Nn = V(
        c(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = p(),
            { activeLocale: c, setLocale: ee } = N();
          S();
          let { style: l, className: u, layoutId: f, variant: m, ...g } = jn(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = j({
              cycleOrder: Cn,
              defaultVariant: `wnhhwWxB6`,
              ref: i,
              variant: m,
              variantClassNames: Tn,
            }),
            k = Mn(e, O),
            { activeVariantCallback: A, delay: M } = H(_),
            P = A(async (...e) => {
              (T({ isHovered: !0 }), D(`weqHM2svn`));
            }),
            F = A(async (...e) => {
              (T({ isHovered: !1 }), D(`wnhhwWxB6`));
            }),
            R = E(wn);
          return s(v, {
            id: f ?? o,
            children: s(An, {
              animate: O,
              initial: !1,
              children: s(On, {
                value: En,
                children: s(L, {
                  motionChild: !0,
                  nodeId: `wnhhwWxB6`,
                  scopeId: `qzHZ2bwSN`,
                  ...xn(
                    { weqHM2svn: { href: `https://www.behance.net/daniavasur`, openInNewTab: !0 } },
                    _,
                    C
                  ),
                  children: d(h.a, {
                    ...g,
                    ...x,
                    className: `${E(R, `framer-m300l8`, u, y)} framer-1kxdfdp`,
                    "data-framer-name": `Variant 1`,
                    "data-highlight": !0,
                    layoutDependency: k,
                    layoutId: `wnhhwWxB6`,
                    onMouseEnter: P,
                    ref: i,
                    style: { ...l },
                    ...xn(
                      {
                        weqHM2svn: {
                          "data-framer-name": `Variant 2`,
                          onMouseEnter: void 0,
                          onMouseLeave: F,
                        },
                      },
                      _,
                      C
                    ),
                    children: [
                      s(h.div, {
                        className: `framer-6uq38w`,
                        "data-framer-name": `Behance`,
                        layoutDependency: k,
                        layoutId: `ASI2wplQl`,
                        children: s(I, {
                          __fromCanvasComponent: !0,
                          children: s(a, {
                            children: s(h.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `Qkk7QW1pYW1pZS9MaWdodC92MA==`,
                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                "--framer-font-size": `20px`,
                                "--framer-font-weight": `300`,
                                "--framer-letter-spacing": `-0.02em`,
                                "--framer-line-height": `1.6em`,
                              },
                              children: `Behance`,
                            }),
                          }),
                          className: `framer-k87h6`,
                          fonts: [`BI;Amiamie/Light/v0`],
                          layoutDependency: k,
                          layoutId: `KOtxfQmhL`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          transformTemplate: Dn,
                          verticalAlignment: `center`,
                          withExternalLayout: !0,
                          ...xn(
                            {
                              weqHM2svn: {
                                children: s(a, {
                                  children: s(h.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                      "--framer-font-size": `20px`,
                                      "--framer-letter-spacing": `-0.02em`,
                                      "--framer-line-height": `1.6em`,
                                    },
                                    children: `Behance`,
                                  }),
                                }),
                                fonts: [`BI;Amiamie/Regular/v0`],
                                transformTemplate: void 0,
                              },
                            },
                            _,
                            C
                          ),
                        }),
                      }),
                      s(X, {
                        animated: !0,
                        className: `framer-19yxzs5`,
                        layoutDependency: k,
                        layoutId: `uaJ53e39u`,
                        style: { "--1m6trwb": 0, "--21h8s6": `rgb(0, 0, 0)`, "--pgex8v": 1 },
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-yrqmN.framer-1kxdfdp, .framer-yrqmN .framer-1kxdfdp { display: block; }`,
          `.framer-yrqmN.framer-m300l8 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-yrqmN .framer-6uq38w { flex: none; height: 32px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 74px; }`,
          `.framer-yrqmN .framer-k87h6 { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre; width: auto; }`,
          `.framer-yrqmN .framer-19yxzs5 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 24px; }`,
          `.framer-yrqmN.framer-v-uz8os5.framer-m300l8 { text-decoration: none; }`,
          `.framer-yrqmN.framer-v-uz8os5 .framer-6uq38w { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; justify-content: center; padding: 0px; width: min-content; }`,
          `.framer-yrqmN.framer-v-uz8os5 .framer-k87h6 { left: unset; position: relative; top: unset; }`,
        ],
        `framer-yrqmN`
      )),
      (Nn.displayName = `Behance 2`),
      (Nn.defaultProps = { height: 32, width: 104 }),
      J(Nn, {
        variant: {
          options: [`wnhhwWxB6`, `weqHM2svn`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: U.Enum,
        },
      }),
      K(
        Nn,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Amiamie`,
                source: `builtIn`,
                style: `normal`,
                uiFamilyName: `Amiamie`,
                url: `../../assets/fonts/1MH4lxBHPP5tkXBqyBrWkrJ1as.woff2`,
                weight: `300`,
              },
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
          ...Sn,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Fn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn = e(() => {
    (f(),
      C(),
      y(),
      n(),
      Y(),
      (In = x(X)),
      (Ln = [
        `TkpOSA6BP`,
        `UlVYUcuPA`,
        `yzisWf8nt`,
        `taLBIxf9j`,
        `ZDEhLuwnC`,
        `HwQfn1lJO`,
        `pOzStyYKE`,
      ]),
      (Rn = `framer-xkABy`),
      (zn = {
        HwQfn1lJO: `framer-v-ot7qda`,
        pOzStyYKE: `framer-v-1of0681`,
        taLBIxf9j: `framer-v-hml9p2`,
        TkpOSA6BP: `framer-v-g1e4a3`,
        UlVYUcuPA: `framer-v-1u8q00c`,
        yzisWf8nt: `framer-v-1mo9dei`,
        ZDEhLuwnC: `framer-v-9lb0n8`,
      }),
      (Bn = { bounce: 0, delay: 0, duration: 0.5, type: `spring` }),
      (Vn = ({ value: e, children: n }) => {
        let r = u(g),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(g.Provider, { value: a, children: n });
      }),
      (Hn = {
        "Variant 1": `TkpOSA6BP`,
        "Variant 2": `UlVYUcuPA`,
        "Variant 3": `yzisWf8nt`,
        "Variant 4": `taLBIxf9j`,
        "Variant 5": `ZDEhLuwnC`,
        "Variant 6": `HwQfn1lJO`,
        "Variant 7": `pOzStyYKE`,
      }),
      (Un = h.create(a)),
      (Wn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Hn[r.variant] ?? r.variant ?? `TkpOSA6BP`,
      })),
      (Gn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Kn = V(
        c(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = p(),
            { activeLocale: c, setLocale: ee } = N(),
            l = S(),
            { style: u, className: f, layoutId: m, variant: g, ..._ } = Wn(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: T,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = j({
              cycleOrder: Ln,
              defaultVariant: `TkpOSA6BP`,
              ref: i,
              variant: g,
              variantClassNames: zn,
            }),
            M = Gn(e, A),
            { activeVariantCallback: P, delay: F } = H(y),
            L = P(async (...e) => {
              await F(() => k(`UlVYUcuPA`, !0), 500);
            }),
            R = P(async (...e) => {
              await F(() => k(`pOzStyYKE`, !0), 500);
            }),
            z = P(async (...e) => {
              await F(() => k(`HwQfn1lJO`, !0), 500);
            }),
            B = P(async (...e) => {
              await F(() => k(`TkpOSA6BP`, !0), 500);
            }),
            V = P(async (...e) => {
              await F(() => k(`taLBIxf9j`, !0), 400);
            });
          te(y, {
            default: L,
            HwQfn1lJO: P(async (...e) => {
              await F(() => k(`ZDEhLuwnC`, !0), 500);
            }),
            pOzStyYKE: P(async (...e) => {
              await F(() => k(`yzisWf8nt`, !0), 500);
            }),
            taLBIxf9j: B,
            UlVYUcuPA: R,
            yzisWf8nt: z,
            ZDEhLuwnC: V,
          });
          let U = E(Rn);
          return s(v, {
            id: m ?? o,
            children: s(Un, {
              animate: A,
              initial: !1,
              children: s(Vn, {
                value: Bn,
                children: d(W, {
                  ..._,
                  ...C,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 2820,
                    intrinsicWidth: 2820,
                    loading: w(l?.y || 0),
                    pixelHeight: 2820,
                    pixelWidth: 2820,
                    sizes: l?.width || `100vw`,
                    src: `https://framerusercontent.com/images/RVPTFhhHQ6Uf9yoV54RZelWmGg.png?width=2820&height=2820`,
                    srcSet: `https://framerusercontent.com/images/RVPTFhhHQ6Uf9yoV54RZelWmGg.png?scale-down-to=512&width=2820&height=2820 512w,https://framerusercontent.com/images/RVPTFhhHQ6Uf9yoV54RZelWmGg.png?scale-down-to=1024&width=2820&height=2820 1024w,https://framerusercontent.com/images/RVPTFhhHQ6Uf9yoV54RZelWmGg.png?scale-down-to=2048&width=2820&height=2820 2048w,https://framerusercontent.com/images/RVPTFhhHQ6Uf9yoV54RZelWmGg.png?width=2820&height=2820 2820w`,
                  },
                  className: E(U, `framer-g1e4a3`, f, b),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: M,
                  layoutId: `TkpOSA6BP`,
                  ref: i,
                  style: { ...u },
                  ...Fn(
                    {
                      HwQfn1lJO: {
                        "data-framer-name": `Variant 6`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 5760,
                          intrinsicWidth: 4320,
                          loading: w(l?.y || 0),
                          pixelHeight: 5760,
                          pixelWidth: 4320,
                          sizes: l?.width || `100vw`,
                          src: `https://framerusercontent.com/images/23Iv8PiMHsMqR7Phly6LaZLhj4.png?width=4320&height=5760`,
                          srcSet: `https://framerusercontent.com/images/23Iv8PiMHsMqR7Phly6LaZLhj4.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/23Iv8PiMHsMqR7Phly6LaZLhj4.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/23Iv8PiMHsMqR7Phly6LaZLhj4.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/23Iv8PiMHsMqR7Phly6LaZLhj4.png?width=4320&height=5760 4320w`,
                        },
                      },
                      pOzStyYKE: {
                        "data-framer-name": `Variant 7`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 5760,
                          intrinsicWidth: 4320,
                          loading: w(l?.y || 0),
                          pixelHeight: 5760,
                          pixelWidth: 4320,
                          sizes: l?.width || `100vw`,
                          src: `https://framerusercontent.com/images/CemeKkiQShFgYU3Owbhulw6s.png?width=4320&height=5760`,
                          srcSet: `https://framerusercontent.com/images/CemeKkiQShFgYU3Owbhulw6s.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/CemeKkiQShFgYU3Owbhulw6s.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/CemeKkiQShFgYU3Owbhulw6s.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/CemeKkiQShFgYU3Owbhulw6s.png?width=4320&height=5760 4320w`,
                        },
                      },
                      taLBIxf9j: {
                        "data-framer-name": `Variant 4`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 5760,
                          intrinsicWidth: 4320,
                          loading: w(l?.y || 0),
                          pixelHeight: 5760,
                          pixelWidth: 4320,
                          sizes: l?.width || `100vw`,
                          src: `https://framerusercontent.com/images/gylHDlmqYUy1tnlbJIkYE5XPG0.png?width=4320&height=5760`,
                          srcSet: `https://framerusercontent.com/images/gylHDlmqYUy1tnlbJIkYE5XPG0.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/gylHDlmqYUy1tnlbJIkYE5XPG0.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/gylHDlmqYUy1tnlbJIkYE5XPG0.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/gylHDlmqYUy1tnlbJIkYE5XPG0.png?width=4320&height=5760 4320w`,
                        },
                      },
                      UlVYUcuPA: {
                        "data-framer-name": `Variant 2`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 5760,
                          intrinsicWidth: 4320,
                          loading: w(l?.y || 0),
                          pixelHeight: 5760,
                          pixelWidth: 4320,
                          sizes: l?.width || `100vw`,
                          src: `https://framerusercontent.com/images/5eiuZDIRCbBdVd2Eej4ul4zTBkQ.png?width=4320&height=5760`,
                          srcSet: `https://framerusercontent.com/images/5eiuZDIRCbBdVd2Eej4ul4zTBkQ.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/5eiuZDIRCbBdVd2Eej4ul4zTBkQ.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/5eiuZDIRCbBdVd2Eej4ul4zTBkQ.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/5eiuZDIRCbBdVd2Eej4ul4zTBkQ.png?width=4320&height=5760 4320w`,
                        },
                      },
                      yzisWf8nt: {
                        "data-framer-name": `Variant 3`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 5760,
                          intrinsicWidth: 4320,
                          loading: w(l?.y || 0),
                          pixelHeight: 5760,
                          pixelWidth: 4320,
                          sizes: l?.width || `100vw`,
                          src: `https://framerusercontent.com/images/fSf6rH8iDtMwZSRNcZHVm0s6Oc.png?width=4320&height=5760`,
                          srcSet: `https://framerusercontent.com/images/fSf6rH8iDtMwZSRNcZHVm0s6Oc.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/fSf6rH8iDtMwZSRNcZHVm0s6Oc.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/fSf6rH8iDtMwZSRNcZHVm0s6Oc.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/fSf6rH8iDtMwZSRNcZHVm0s6Oc.png?width=4320&height=5760 4320w`,
                        },
                      },
                      ZDEhLuwnC: {
                        "data-framer-name": `Variant 5`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 5760,
                          intrinsicWidth: 4320,
                          loading: w(l?.y || 0),
                          pixelHeight: 5760,
                          pixelWidth: 4320,
                          sizes: l?.width || `100vw`,
                          src: `https://framerusercontent.com/images/6raO56cvGw0EjsssuTzXBIxg.png?width=4320&height=5760`,
                          srcSet: `https://framerusercontent.com/images/6raO56cvGw0EjsssuTzXBIxg.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/6raO56cvGw0EjsssuTzXBIxg.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/6raO56cvGw0EjsssuTzXBIxg.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/6raO56cvGw0EjsssuTzXBIxg.png?width=4320&height=5760 4320w`,
                        },
                      },
                    },
                    y,
                    T
                  ),
                  children: [
                    s(W, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        intrinsicHeight: 5760,
                        intrinsicWidth: 4320,
                        loading: w((l?.y || 0) + 0 + (((l?.height || 265) - 0 - 265) / 2 + 0 + 0)),
                        pixelHeight: 5760,
                        pixelWidth: 4320,
                        sizes: l?.width || `100vw`,
                        src: `https://framerusercontent.com/images/v3NorKRTRnKLStEJmiJd9hO1nSo.png?width=4320&height=5760`,
                        srcSet: `https://framerusercontent.com/images/v3NorKRTRnKLStEJmiJd9hO1nSo.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/v3NorKRTRnKLStEJmiJd9hO1nSo.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/v3NorKRTRnKLStEJmiJd9hO1nSo.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/v3NorKRTRnKLStEJmiJd9hO1nSo.png?width=4320&height=5760 4320w`,
                      },
                      className: `framer-16wd8ww`,
                      layoutDependency: M,
                      layoutId: `JyaYmkgWY`,
                      ...Fn(
                        {
                          HwQfn1lJO: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 5760,
                              intrinsicWidth: 4320,
                              loading: w(
                                (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 265) / 2 + 0 + 0)
                              ),
                              pixelHeight: 5760,
                              pixelWidth: 4320,
                              sizes: l?.width || `100vw`,
                              src: `https://framerusercontent.com/images/23Iv8PiMHsMqR7Phly6LaZLhj4.png?width=4320&height=5760`,
                              srcSet: `https://framerusercontent.com/images/23Iv8PiMHsMqR7Phly6LaZLhj4.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/23Iv8PiMHsMqR7Phly6LaZLhj4.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/23Iv8PiMHsMqR7Phly6LaZLhj4.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/23Iv8PiMHsMqR7Phly6LaZLhj4.png?width=4320&height=5760 4320w`,
                            },
                          },
                          pOzStyYKE: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 5760,
                              intrinsicWidth: 4320,
                              loading: w(
                                (l?.y || 0) + 0 + (((l?.height || 265) - 0 - 265) / 2 + 0 + 0)
                              ),
                              pixelHeight: 5760,
                              pixelWidth: 4320,
                              sizes: l?.width || `100vw`,
                              src: `https://framerusercontent.com/images/CemeKkiQShFgYU3Owbhulw6s.png?width=4320&height=5760`,
                              srcSet: `https://framerusercontent.com/images/CemeKkiQShFgYU3Owbhulw6s.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/CemeKkiQShFgYU3Owbhulw6s.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/CemeKkiQShFgYU3Owbhulw6s.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/CemeKkiQShFgYU3Owbhulw6s.png?width=4320&height=5760 4320w`,
                            },
                          },
                          taLBIxf9j: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 5760,
                              intrinsicWidth: 4320,
                              loading: w(
                                (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 265) / 2 + 0 + 0)
                              ),
                              pixelHeight: 5760,
                              pixelWidth: 4320,
                              sizes: l?.width || `100vw`,
                              src: `https://framerusercontent.com/images/6raO56cvGw0EjsssuTzXBIxg.png?width=4320&height=5760`,
                              srcSet: `https://framerusercontent.com/images/6raO56cvGw0EjsssuTzXBIxg.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/6raO56cvGw0EjsssuTzXBIxg.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/6raO56cvGw0EjsssuTzXBIxg.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/6raO56cvGw0EjsssuTzXBIxg.png?width=4320&height=5760 4320w`,
                            },
                          },
                          UlVYUcuPA: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 5760,
                              intrinsicWidth: 4320,
                              loading: w(
                                (l?.y || 0) + 0 + (((l?.height || 265) - 0 - 265) / 2 + 0 + 0)
                              ),
                              pixelHeight: 5760,
                              pixelWidth: 4320,
                              sizes: l?.width || `100vw`,
                              src: `https://framerusercontent.com/images/5eiuZDIRCbBdVd2Eej4ul4zTBkQ.png?width=4320&height=5760`,
                              srcSet: `https://framerusercontent.com/images/5eiuZDIRCbBdVd2Eej4ul4zTBkQ.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/5eiuZDIRCbBdVd2Eej4ul4zTBkQ.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/5eiuZDIRCbBdVd2Eej4ul4zTBkQ.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/5eiuZDIRCbBdVd2Eej4ul4zTBkQ.png?width=4320&height=5760 4320w`,
                            },
                          },
                          yzisWf8nt: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 5760,
                              intrinsicWidth: 4320,
                              loading: w(
                                (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 265) / 2 + 0 + 0)
                              ),
                              pixelHeight: 5760,
                              pixelWidth: 4320,
                              sizes: l?.width || `100vw`,
                              src: `https://framerusercontent.com/images/fSf6rH8iDtMwZSRNcZHVm0s6Oc.png?width=4320&height=5760`,
                              srcSet: `https://framerusercontent.com/images/fSf6rH8iDtMwZSRNcZHVm0s6Oc.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/fSf6rH8iDtMwZSRNcZHVm0s6Oc.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/fSf6rH8iDtMwZSRNcZHVm0s6Oc.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/fSf6rH8iDtMwZSRNcZHVm0s6Oc.png?width=4320&height=5760 4320w`,
                            },
                          },
                          ZDEhLuwnC: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 5760,
                              intrinsicWidth: 4320,
                              loading: w(
                                (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 265) / 2 + 0 + 0)
                              ),
                              pixelHeight: 5760,
                              pixelWidth: 4320,
                              sizes: l?.width || `100vw`,
                              src: `https://framerusercontent.com/images/gylHDlmqYUy1tnlbJIkYE5XPG0.png?width=4320&height=5760`,
                              srcSet: `https://framerusercontent.com/images/gylHDlmqYUy1tnlbJIkYE5XPG0.png?scale-down-to=1024&width=4320&height=5760 768w,https://framerusercontent.com/images/gylHDlmqYUy1tnlbJIkYE5XPG0.png?scale-down-to=2048&width=4320&height=5760 1536w,https://framerusercontent.com/images/gylHDlmqYUy1tnlbJIkYE5XPG0.png?scale-down-to=4096&width=4320&height=5760 3072w,https://framerusercontent.com/images/gylHDlmqYUy1tnlbJIkYE5XPG0.png?width=4320&height=5760 4320w`,
                            },
                          },
                        },
                        y,
                        T
                      ),
                    }),
                    d(h.div, {
                      className: `framer-1p5t90g`,
                      layoutDependency: M,
                      layoutId: `kqVJRVa_O`,
                      style: { backgroundColor: `rgb(0, 0, 0)` },
                      children: [
                        s(I, {
                          __fromCanvasComponent: !0,
                          children: s(a, {
                            children: s(h.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                "--framer-font-size": `20px`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                              },
                              children: `See full project`,
                            }),
                          }),
                          className: `framer-17vsxyf`,
                          fonts: [`BI;Amiamie/Regular/v0`],
                          layoutDependency: M,
                          layoutId: `GTMNjBKyn`,
                          style: {
                            "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        s(X, {
                          animated: !0,
                          className: `framer-vulayr`,
                          layoutDependency: M,
                          layoutId: `bbRwCdEVg`,
                          style: {
                            "--1m6trwb": 0,
                            "--21h8s6": `rgb(255, 255, 255)`,
                            "--pgex8v": 1.5,
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-xkABy.framer-1g9sstv, .framer-xkABy .framer-1g9sstv { display: block; }`,
          `.framer-xkABy.framer-g1e4a3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 190px; }`,
          `.framer-xkABy .framer-16wd8ww { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 229px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-xkABy .framer-1p5t90g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 6px; position: relative; width: 100%; }`,
          `.framer-xkABy .framer-17vsxyf { flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`,
          `.framer-xkABy .framer-vulayr { aspect-ratio: 1 / 1; flex: none; height: auto; mix-blend-mode: difference; position: relative; width: 24px; }`,
        ],
        `framer-xkABy`
      )),
      (Kn.displayName = `ShetSolved`),
      (Kn.defaultProps = { height: 265, width: 190 }),
      J(Kn, {
        variant: {
          options: [
            `TkpOSA6BP`,
            `UlVYUcuPA`,
            `yzisWf8nt`,
            `taLBIxf9j`,
            `ZDEhLuwnC`,
            `HwQfn1lJO`,
            `pOzStyYKE`,
          ],
          optionTitles: [
            `Variant 1`,
            `Variant 2`,
            `Variant 3`,
            `Variant 4`,
            `Variant 5`,
            `Variant 6`,
            `Variant 7`,
          ],
          title: `Variant`,
          type: U.Enum,
        },
      }),
      K(
        Kn,
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
          ...In,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  $,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br;
e(() => {
  (f(),
    C(),
    y(),
    n(),
    ze(),
    Qe(),
    me(),
    ft(),
    pe(),
    Tt(),
    Rt(),
    Yt(),
    sn(),
    bn(),
    Pn(),
    qn(),
    _e(),
    (Jn = x(fe)),
    (Yn = R(B)),
    (Xn = R(h.a)),
    (Zn = R(h.div)),
    (Qn = x(Ze)),
    ($n = x(Nn)),
    (er = x(Lt)),
    (tr = M(h.div)),
    (nr = x(Q)),
    (rr = x(he)),
    (ir = M(B)),
    (ar = x(on)),
    (or = x(Kn)),
    (sr = x(dt)),
    (cr = x(Re)),
    (lr = x(wt)),
    (ur = x(yn)),
    (dr = { rqaCb7Rwp: `(max-width: 1199.98px)`, WQLkyLRf1: `(min-width: 1200px)` }),
    (fr = () => typeof document < `u`),
    (pr = []),
    (mr = `framer-wMIKB`),
    (hr = { rqaCb7Rwp: `framer-v-1ps97kd`, WQLkyLRf1: `framer-v-72rtr7` }),
    (gr = (e, t, n) => (e && t ? `position` : n)),
    (_r = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.55, ease: [0.22, 1, 0.36, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (vr = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: -12,
    }),
    ($ = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (yr = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (br = {
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
    (xr = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0, duration: 0.5, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Sr = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: -111,
    }),
    (Cr = {
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
    (wr = { delay: 0, duration: 0.7, ease: [0.22, 1, 0.36, 1], type: `tween` }),
    (Tr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: wr,
      x: 0,
      y: 28,
    }),
    (Er = {
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
    (Dr = { delay: 0, duration: 0.65, ease: [0.22, 1, 0.36, 1], type: `tween` }),
    (Or = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Dr,
      x: 0,
      y: 20,
    }),
    (kr = { Desktop: `WQLkyLRf1`, Phone: `rqaCb7Rwp` }),
    (Ar = ({ value: e }) =>
      b()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (jr = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: kr[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (Mr = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
    (Nr = {
      alignment: `center`,
      component: on,
      offset: { x: 0, y: 0 },
      placement: `bottom`,
      transition: Mr,
      variant: `GrrnbWxQT`,
    }),
    (Pr = {
      alignment: `center`,
      component: Kn,
      offset: { x: 0, y: 0 },
      placement: `bottom`,
      transition: Mr,
      variant: `TkpOSA6BP`,
    }),
    (Fr = {
      alignment: `center`,
      component: dt,
      offset: { x: 0, y: 0 },
      placement: `bottom`,
      transition: Mr,
      variant: `IrNOP9k1K`,
    }),
    (Ir = {
      alignment: `center`,
      component: Re,
      offset: { x: 20, y: -20 },
      placement: `top`,
      transition: Mr,
      variant: `x0oIawKAa`,
    }),
    (Lr = {
      alignment: `center`,
      component: wt,
      offset: { x: 20, y: -20 },
      placement: `top`,
      transition: Mr,
      variant: `NHNLjYOQE`,
    }),
    (Rr = {
      alignment: `center`,
      component: yn,
      offset: { x: 20, y: -20 },
      placement: `top`,
      transition: Mr,
      variant: `UD25oqEfR`,
    }),
    (zr = V(
      c(function (e, n) {
        let i = r(null),
          o = n ?? i,
          c = p(),
          { activeLocale: ee, setLocale: l } = N(),
          f = S(),
          { style: m, className: _, layoutId: y, variant: b, ...x } = jr(e);
        ne(t(() => ge({}, ee), [ee]));
        let [C, T] = O(b, dr, !1),
          k = E(mr),
          j = u(A)?.isLayoutTemplate,
          M = !!u(g)?.transition?.layout,
          R = gr(j, M),
          z = () => !fr() || C !== `rqaCb7Rwp`;
        return (
          D({
            "1aelr66": Fr,
            "1ckra4l": Pr,
            "1grq7vs": Ir,
            "1wd5axa": Nr,
            "3kqtix": Rr,
            yqnlso: Lr,
          }),
          s(A.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: kr,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: hr,
            },
            children: d(v, {
              id: y ?? c,
              children: [
                s(Ar, { value: `html body { background: rgb(255, 255, 255); }` }),
                d(h.div, {
                  ...x,
                  className: E(k, `framer-72rtr7`, _),
                  ref: o,
                  style: { ...m },
                  children: [
                    s(G, {
                      height: 59,
                      width: f?.width || `100vw`,
                      y: (f?.y || 0) + 0 + 0,
                      children: s(Yn, {
                        animate: _r,
                        className: `framer-1cqubso-container`,
                        "data-framer-appear-id": `1cqubso`,
                        initial: vr,
                        layout: R,
                        nodeId: `plB_RNcYK`,
                        optimized: !0,
                        rendersWithMotion: !0,
                        scopeId: `augiA20Il`,
                        children: s(P, {
                          breakpoint: C,
                          overrides: { rqaCb7Rwp: { variant: $(`tnNrPT_eu`) } },
                          children: s(fe, {
                            height: `100%`,
                            id: `plB_RNcYK`,
                            layoutId: `plB_RNcYK`,
                            style: { width: `100%` },
                            variant: $(`N1Y2xUv_c`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    d(Zn, {
                      animate: yr,
                      className: `framer-1pk19t6`,
                      "data-framer-appear-id": `1pk19t6`,
                      initial: br,
                      layout: R,
                      optimized: !0,
                      children: [
                        s(`div`, {
                          className: `framer-1wo15fn`,
                          children: s(L, {
                            href: { webPageId: `aCRbSljkl` },
                            motionChild: !0,
                            nodeId: `wMJwj1NWA`,
                            openInNewTab: !1,
                            scopeId: `augiA20Il`,
                            children: s(P, {
                              breakpoint: C,
                              overrides: { rqaCb7Rwp: { "data-framer-cursor": void 0 } },
                              children: d(Xn, {
                                animate: xr,
                                className: `framer-1o35j7e framer-lux5qc`,
                                "data-framer-appear-id": `1o35j7e`,
                                "data-framer-cursor": `1wd5axa`,
                                initial: Sr,
                                optimized: !0,
                                children: [
                                  z() &&
                                    d(`div`, {
                                      className: `framer-fabrby hidden-1ps97kd`,
                                      children: [
                                        s(`div`, { className: `framer-f31bhh` }),
                                        s(`div`, { className: `framer-1whu6ux` }),
                                        s(`div`, { className: `framer-1276jb5` }),
                                      ],
                                    }),
                                  d(`div`, {
                                    className: `framer-12q841r`,
                                    children: [
                                      s(P, {
                                        breakpoint: C,
                                        overrides: {
                                          rqaCb7Rwp: {
                                            children: s(a, {
                                              children: s(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-line-height": `4.4em`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: `Ubu Roi ou les Polonais publication design`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: s(I, {
                                          __fromCanvasComponent: !0,
                                          children: s(a, {
                                            children: s(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-line-height": `2.5em`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `Ubu Roi ou les Polonais publication design`,
                                            }),
                                          }),
                                          className: `framer-5ab62k`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      z() &&
                                        s(I, {
                                          __fromCanvasComponent: !0,
                                          children: s(a, {
                                            children: s(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-line-height": `2.5em`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `2026`,
                                            }),
                                          }),
                                          className: `framer-1ykyxam hidden-1ps97kd`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                    ],
                                  }),
                                  z() &&
                                    d(`div`, {
                                      className: `framer-ylii6c hidden-1ps97kd`,
                                      children: [
                                        s(`div`, { className: `framer-1rbm2pr` }),
                                        s(`div`, { className: `framer-1co7ojz` }),
                                        s(`div`, { className: `framer-gkf850` }),
                                      ],
                                    }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        s(`div`, {
                          className: `framer-1xs9kvi`,
                          children: s(L, {
                            href: { webPageId: `o9Tvh7Ah_` },
                            motionChild: !0,
                            nodeId: `O98pFWo1R`,
                            openInNewTab: !1,
                            scopeId: `augiA20Il`,
                            children: s(P, {
                              breakpoint: C,
                              overrides: { rqaCb7Rwp: { "data-framer-cursor": void 0 } },
                              children: d(Xn, {
                                animate: xr,
                                className: `framer-dvw8u0 framer-lux5qc`,
                                "data-framer-appear-id": `dvw8u0`,
                                "data-framer-cursor": `1ckra4l`,
                                initial: Sr,
                                optimized: !0,
                                children: [
                                  z() &&
                                    d(F, {
                                      className: `framer-2w6ucr hidden-1ps97kd`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49.76 42.007" overflow="visible"><g><path d="M 49.76 20.97 L 49.76 37.87 C 49.76 40.153 47.931 42.007 45.678 42.007 L 20.727 42.007 C 18.474 42.007 16.645 40.153 16.645 37.87 L 16.645 37.81 C 16.645 35.527 14.816 33.673 12.562 33.673 L 12.47 33.673 C 10.217 33.673 8.388 31.82 8.388 29.537 L 8.388 29.413 C 8.388 27.13 10.217 25.277 12.47 25.277 L 12.592 25.277 C 14.845 25.277 16.674 27.13 16.674 29.413 L 16.674 29.49 C 16.674 31.773 18.503 33.627 20.757 33.627 L 37.405 33.627 C 39.658 33.627 41.487 31.773 41.487 29.49 L 41.487 20.97 C 41.487 18.687 43.316 16.833 45.569 16.833 L 45.674 16.833 C 47.928 16.833 49.757 18.687 49.757 20.97 Z" fill="rgb(255,255,255)"></path><path d="M 18.77 25.23 C 17.578 25.23 16.612 24.251 16.612 23.043 L 16.612 19.02 C 16.612 17.812 17.578 16.833 18.77 16.833 L 31.01 16.833 C 32.202 16.833 33.168 17.812 33.168 19.02 L 33.168 23.043 C 33.168 24.251 32.202 25.23 31.01 25.23 Z" fill="rgb(255,255,255)"></path><path d="M 41.293 12.427 L 41.293 12.533 C 41.293 14.817 39.464 16.67 37.211 16.67 L 37.089 16.67 C 34.836 16.67 33.007 14.817 33.007 12.533 C 33.007 10.25 31.178 8.397 28.924 8.397 L 12.368 8.397 C 10.115 8.397 8.286 10.25 8.286 12.533 L 8.286 21.037 C 8.286 23.32 6.457 25.173 4.204 25.173 L 4.082 25.173 C 1.829 25.173 0 23.32 0 21.037 L 0 4.137 C 0 1.853 1.829 0 4.082 0 L 29.046 0 C 31.299 0 33.128 1.853 33.128 4.137 L 33.128 4.153 C 33.128 6.437 34.957 8.29 37.211 8.29 C 39.464 8.29 41.293 10.143 41.293 12.427 Z" fill="rgb(255,255,255)"></path></g></svg>`,
                                      withExternalLayout: !0,
                                      children: [
                                        s(F, {
                                          className: `framer-1jwjuv1`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.372 25.173" overflow="visible"><path d="M 41.372 4.137 L 41.372 21.037 C 41.372 23.32 39.543 25.173 37.289 25.173 L 12.339 25.173 C 10.086 25.173 8.257 23.32 8.257 21.037 L 8.257 20.977 C 8.257 18.693 6.428 16.84 4.174 16.84 L 4.082 16.84 C 1.829 16.84 0 14.987 0 12.703 L 0 12.58 C 0 10.297 1.829 8.443 4.082 8.443 L 4.204 8.443 C 6.457 8.443 8.286 10.297 8.286 12.58 L 8.286 12.657 C 8.286 14.94 10.115 16.793 12.368 16.793 L 29.016 16.793 C 31.27 16.793 33.099 14.94 33.099 12.657 L 33.099 4.137 C 33.099 1.853 34.928 0 37.181 0 L 37.286 0 C 39.539 0 41.368 1.853 41.368 4.137 Z" fill="rgb(255,255,255)"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        s(F, {
                                          className: `framer-15ta0gg`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.556 8.397" overflow="visible"><path d="M 2.158 8.397 C 0.966 8.397 0 7.418 0 6.21 L 0 2.187 C 0 0.979 0.966 0 2.158 0 L 14.398 0 C 15.59 0 16.556 0.979 16.556 2.187 L 16.556 6.21 C 16.556 7.418 15.59 8.397 14.398 8.397 Z" fill="rgb(255,255,255)"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        s(F, {
                                          className: `framer-pwfvvc`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.293 25.173" overflow="visible"><path d="M 41.293 12.427 L 41.293 12.533 C 41.293 14.817 39.464 16.67 37.211 16.67 L 37.089 16.67 C 34.836 16.67 33.007 14.817 33.007 12.533 C 33.007 10.25 31.178 8.397 28.924 8.397 L 12.368 8.397 C 10.115 8.397 8.286 10.25 8.286 12.533 L 8.286 21.037 C 8.286 23.32 6.457 25.173 4.204 25.173 L 4.082 25.173 C 1.829 25.173 0 23.32 0 21.037 L 0 4.137 C 0 1.853 1.829 0 4.082 0 L 29.046 0 C 31.299 0 33.128 1.853 33.128 4.137 L 33.128 4.153 C 33.128 6.437 34.957 8.29 37.211 8.29 C 39.464 8.29 41.293 10.143 41.293 12.427 Z" fill="rgb(255,255,255)"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  d(`div`, {
                                    className: `framer-14zj0xi`,
                                    children: [
                                      s(P, {
                                        breakpoint: C,
                                        overrides: {
                                          rqaCb7Rwp: {
                                            children: s(a, {
                                              children: s(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-line-height": `4.2em`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: `SheetSolved branding + UI/UX`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: s(I, {
                                          __fromCanvasComponent: !0,
                                          children: s(a, {
                                            children: s(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-line-height": `3.3em`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `SheetSolved branding + UI/UX`,
                                            }),
                                          }),
                                          className: `framer-t562ga`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      z() &&
                                        s(I, {
                                          __fromCanvasComponent: !0,
                                          children: s(a, {
                                            children: s(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-line-height": `3.3em`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `2026`,
                                            }),
                                          }),
                                          className: `framer-1ktxd14 hidden-1ps97kd`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        s(`div`, {
                          className: `framer-c6d7ho`,
                          children: s(L, {
                            href: { webPageId: `TwvfQk14J` },
                            motionChild: !0,
                            nodeId: `Gca3pwQkU`,
                            openInNewTab: !0,
                            scopeId: `augiA20Il`,
                            children: s(P, {
                              breakpoint: C,
                              overrides: { rqaCb7Rwp: { "data-framer-cursor": void 0 } },
                              children: d(Xn, {
                                animate: xr,
                                className: `framer-1tpbxj3 framer-lux5qc`,
                                "data-framer-appear-id": `1tpbxj3`,
                                "data-framer-cursor": `1aelr66`,
                                initial: Sr,
                                optimized: !0,
                                children: [
                                  z() &&
                                    d(F, {
                                      className: `framer-1vz55az hidden-1ps97kd`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 59.894 59.801" overflow="visible"><g><path d="M 18.198 34.511 L 46.497 34.511 L 46.497 51.019 C 48.115 45.565 52.641 41.47 58.228 40.402 C 58.296 40.233 58.355 40.064 58.423 39.895 C 55.287 39.346 52.481 37.841 50.325 35.677 C 47.484 32.843 45.882 28.998 45.871 24.985 L 21.63 24.985 C 21.604 28.594 20.328 31.916 18.198 34.511 Z M 52.067 9.788 L 52.067 24.935 L 59.894 24.935 C 58.034 12.662 48.813 2.798 36.869 0 L 36.869 24.977 C 36.869 20.784 38.568 16.981 41.324 14.234 C 44.079 11.478 47.874 9.779 52.067 9.779 Z" fill="rgb(255, 255, 255)"></path><path d="M 17.234 14.242 C 19.981 16.989 21.68 20.793 21.68 24.985 L 21.68 0.355 C 15.944 1.986 10.816 5.273 6.939 9.805 C 10.954 9.923 14.58 11.597 17.234 14.242 Z M 0 24.892 L 6.483 24.892 L 6.483 10.337 C 3.059 14.522 0.82 19.548 0 24.892 Z M 30.834 50.664 C 30.834 54.061 29.719 57.197 27.825 59.725 C 28.527 59.775 29.228 59.801 29.947 59.801 C 31.232 59.801 32.491 59.716 33.733 59.564 C 31.849 56.979 30.834 53.863 30.834 50.664 Z M 15.189 50.165 L 15.206 50.165 L 15.206 37.3 C 12.729 39.058 9.703 40.09 6.432 40.09 C 4.607 40.09 2.848 39.768 1.226 39.177 C 3.643 46.353 8.672 52.329 15.189 55.972 Z" fill="rgb(255, 255, 255)"></path></g></svg>`,
                                      withExternalLayout: !0,
                                      children: [
                                        d(F, {
                                          className: `framer-1yqgfw3`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.696 51.019" overflow="visible"><path d="M 0 34.511 L 28.299 34.511 L 28.299 51.019 C 29.917 45.565 34.443 41.47 40.03 40.402 C 40.098 40.233 40.157 40.064 40.225 39.895 C 37.089 39.346 34.283 37.841 32.128 35.677 C 29.286 32.843 27.684 28.998 27.673 24.985 L 3.432 24.985 C 3.406 28.594 2.13 31.916 0 34.511 Z M 33.869 9.788 L 33.869 24.935 L 41.696 24.935 C 39.836 12.662 30.615 2.798 18.671 0 L 18.671 24.977 C 18.671 20.784 20.37 16.981 23.126 14.234 C 25.881 11.478 29.676 9.779 33.869 9.779 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            s(F, {
                                              className: `framer-11yycdn`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40.225 26.033" overflow="visible"><path d="M 0 9.526 L 28.299 9.526 L 28.299 26.033 C 29.917 20.58 34.443 16.485 40.03 15.417 C 40.098 15.248 40.157 15.079 40.225 14.91 C 37.089 14.361 34.283 12.856 32.127 10.692 C 29.286 7.858 27.684 4.013 27.673 0 L 3.432 0 C 3.406 3.609 2.13 6.931 0 9.526 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            s(F, {
                                              className: `framer-e8qmnm`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.024 24.977" overflow="visible"><path d="M 15.197 9.788 L 15.197 24.935 L 23.024 24.935 C 21.165 12.662 11.943 2.798 0 0 L 0 24.977 C 0 20.784 1.699 16.981 4.454 14.234 C 7.21 11.478 11.005 9.779 15.197 9.779 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        d(F, {
                                          className: `framer-5i1ld`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33.733 59.446" overflow="visible"><path d="M 17.234 13.887 C 19.981 16.634 21.68 20.438 21.68 24.63 L 21.68 0 C 15.944 1.631 10.816 4.918 6.939 9.45 C 10.954 9.568 14.58 11.242 17.234 13.887 Z M 0 24.537 L 6.483 24.537 L 6.483 9.982 C 3.059 14.167 0.82 19.193 0 24.537 Z M 30.834 50.309 C 30.834 53.706 29.719 56.842 27.825 59.37 C 28.527 59.42 29.228 59.446 29.947 59.446 C 31.232 59.446 32.491 59.361 33.733 59.209 C 31.849 56.624 30.834 53.508 30.834 50.309 Z M 15.189 49.81 L 15.206 49.81 L 15.206 36.945 C 12.729 38.703 9.703 39.735 6.432 39.735 C 4.607 39.735 2.848 39.413 1.226 38.822 C 3.643 45.998 8.672 51.974 15.189 55.617 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            s(F, {
                                              className: `framer-1fcp6ff`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.741 24.63" overflow="visible"><path d="M 10.295 13.887 C 13.042 16.634 14.741 20.438 14.741 24.63 L 14.741 0 C 9.004 1.631 3.877 4.918 0 9.45 C 4.015 9.568 7.641 11.242 10.295 13.887 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            s(F, {
                                              className: `framer-1vbouz`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.483 14.555" overflow="visible"><path d="M 0 14.555 L 6.483 14.555 L 6.483 0 C 3.059 4.184 0.82 9.211 0 14.555 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            s(F, {
                                              className: `framer-k4c35e`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.908 9.137" overflow="visible"><path d="M 3.009 0 C 3.009 3.398 1.893 6.534 0 9.061 C 0.702 9.112 1.403 9.137 2.122 9.137 C 3.406 9.137 4.666 9.052 5.908 8.9 C 4.024 6.315 3.009 3.199 3.009 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            s(F, {
                                              className: `framer-1yr06kl`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.98 18.671" overflow="visible"><path d="M 13.963 12.865 L 13.98 12.865 L 13.98 0 C 11.504 1.758 8.478 2.789 5.207 2.789 C 3.381 2.789 1.623 2.468 0 1.876 C 2.417 9.053 7.447 15.028 13.963 18.671 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  s(`div`, {
                                    className: `framer-14q6jjd`,
                                    children: d(`div`, {
                                      className: `framer-105kwlt`,
                                      children: [
                                        s(P, {
                                          breakpoint: C,
                                          overrides: {
                                            rqaCb7Rwp: {
                                              children: s(a, {
                                                children: s(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                    "--framer-font-size": `14px`,
                                                    "--framer-line-height": `4.5em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `Warsaw museum of dance and movement branding`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: s(I, {
                                            __fromCanvasComponent: !0,
                                            children: s(a, {
                                              children: s(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `24px`,
                                                  "--framer-line-height": `3.6em`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: `Warsaw museum of dance and movement branding`,
                                              }),
                                            }),
                                            className: `framer-1t4zjh7`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        z() &&
                                          s(I, {
                                            __fromCanvasComponent: !0,
                                            children: s(a, {
                                              children: s(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `24px`,
                                                  "--framer-line-height": `3.6em`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: `2025`,
                                              }),
                                            }),
                                            className: `framer-1c9hx4p hidden-1ps97kd`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        s(`div`, {
                          className: `framer-7m5o4b`,
                          children: s(L, {
                            href: { webPageId: `M2JH_EIJa` },
                            motionChild: !0,
                            nodeId: `Ds7QrKe03`,
                            openInNewTab: !1,
                            scopeId: `augiA20Il`,
                            children: s(P, {
                              breakpoint: C,
                              overrides: { rqaCb7Rwp: { "data-framer-cursor": void 0 } },
                              children: s(Xn, {
                                animate: xr,
                                className: `framer-fct209 framer-lux5qc`,
                                "data-framer-appear-id": `fct209`,
                                "data-framer-cursor": `1grq7vs`,
                                initial: Sr,
                                optimized: !0,
                                children: d(`div`, {
                                  className: `framer-ks57lr`,
                                  children: [
                                    s(P, {
                                      breakpoint: C,
                                      overrides: {
                                        rqaCb7Rwp: {
                                          children: s(a, {
                                            children: s(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `15px`,
                                                "--framer-line-height": `3em`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `Re:Move event visual key`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: s(I, {
                                        __fromCanvasComponent: !0,
                                        children: s(a, {
                                          children: s(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              "--framer-font-size": `24px`,
                                              "--framer-line-height": `2.4em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `Re:Move event visual key`,
                                          }),
                                        }),
                                        className: `framer-x3tb15`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    z() &&
                                      s(I, {
                                        __fromCanvasComponent: !0,
                                        children: s(a, {
                                          children: s(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              "--framer-font-size": `24px`,
                                              "--framer-line-height": `2.4em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `2026`,
                                          }),
                                        }),
                                        className: `framer-1xfpqu hidden-1ps97kd`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        }),
                        s(`div`, {
                          className: `framer-ez5d44`,
                          children: s(`div`, {
                            className: `framer-8dh0w5`,
                            children: s(L, {
                              href: { webPageId: `PlMaHNi_L` },
                              motionChild: !0,
                              nodeId: `Y_3H8scAn`,
                              openInNewTab: !1,
                              scopeId: `augiA20Il`,
                              children: s(P, {
                                breakpoint: C,
                                overrides: { rqaCb7Rwp: { "data-framer-cursor": void 0 } },
                                children: d(Xn, {
                                  animate: xr,
                                  className: `framer-asbvxi framer-lux5qc`,
                                  "data-framer-appear-id": `asbvxi`,
                                  "data-framer-cursor": `yqnlso`,
                                  initial: Sr,
                                  optimized: !0,
                                  children: [
                                    z() &&
                                      d(F, {
                                        className: `framer-25nq1v hidden-1ps97kd`,
                                        requiresOverflowVisible: !0,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 55.738 55.738" overflow="visible"><g><path d="M 55.738 28.048 C 55.738 23.675 52.354 20.1 48.077 19.779 C 51.174 16.526 51.139 11.379 47.946 8.186 C 44.752 4.992 39.45 4.945 36.209 8.186 L 35.387 9.222 L 35.483 8.305 C 35.483 3.717 31.765 0 27.178 0 C 22.591 0 19.123 3.479 18.897 7.864 C 15.644 4.683 10.437 4.694 7.22 7.923 C 5.664 9.48 4.79 11.591 4.79 13.791 C 4.79 15.992 5.664 18.103 7.22 19.66 L 7.387 19.791 C 3.241 20.243 0 23.77 0 28.036 C 0 32.551 3.598 36.209 8.09 36.329 C 5.269 39.617 5.456 44.523 8.519 47.588 C 11.31 50.376 15.675 50.819 18.969 48.649 C 19.564 52.652 22.996 55.738 27.166 55.738 C 31.61 55.738 35.232 52.235 35.447 47.85 C 38.745 50.593 43.59 50.371 46.623 47.338 C 49.637 44.323 49.84 39.593 47.266 36.329 L 47.433 36.329 C 52.02 36.34 55.738 32.635 55.738 28.048 Z M 28.536 32.337 L 26.356 32.337 L 23.401 29.382 L 23.401 24.831 L 24.831 23.401 L 30.061 23.401 L 32.337 25.677 L 32.337 28.524 L 28.536 32.325 Z" fill="rgb(205,33,31)" stroke-width="2.19" stroke="rgb(247,247,235)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 18.718 27.869 C 18.718 22.815 22.815 18.718 27.869 18.718 C 32.923 18.718 37.02 22.815 37.02 27.869 C 37.02 32.923 32.923 37.02 27.869 37.02 C 22.815 37.02 18.718 32.923 18.718 27.869 Z" fill="rgb(205,33,31)" stroke-width="2.19" stroke="rgb(247,247,235)" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                                        withExternalLayout: !0,
                                        children: [
                                          d(F, {
                                            className: `framer-yi9huk`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 55.738 55.738" overflow="visible"><path d="M 55.738 28.048 C 55.738 23.675 52.354 20.1 48.077 19.779 C 51.174 16.526 51.139 11.379 47.946 8.186 C 44.752 4.992 39.45 4.945 36.209 8.186 L 35.387 9.222 L 35.483 8.305 C 35.483 3.717 31.765 0 27.178 0 C 22.591 0 19.123 3.479 18.897 7.864 C 15.644 4.683 10.437 4.694 7.22 7.923 C 5.664 9.48 4.79 11.591 4.79 13.791 C 4.79 15.992 5.664 18.103 7.22 19.66 L 7.387 19.791 C 3.241 20.243 0 23.77 0 28.036 C 0 32.551 3.598 36.209 8.09 36.329 C 5.269 39.617 5.456 44.523 8.519 47.588 C 11.31 50.376 15.675 50.819 18.969 48.649 C 19.564 52.652 22.996 55.738 27.166 55.738 C 31.61 55.738 35.232 52.235 35.447 47.85 C 38.745 50.593 43.59 50.371 46.623 47.338 C 49.637 44.323 49.84 39.593 47.266 36.329 L 47.433 36.329 C 52.02 36.34 55.738 32.635 55.738 28.048 Z M 28.536 32.337 L 26.356 32.337 L 23.401 29.382 L 23.401 24.831 L 24.831 23.401 L 30.061 23.401 L 32.337 25.677 L 32.337 28.524 L 28.536 32.325 Z" fill="rgb(205,33,31)" stroke-width="2.19" stroke="rgb(247,247,235)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                            withExternalLayout: !0,
                                            children: [
                                              s(F, {
                                                className: `framer-164bcyw`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 55.738 55.738" overflow="visible"><path d="M 55.738 28.048 C 55.738 23.675 52.354 20.1 48.077 19.779 C 51.174 16.526 51.139 11.379 47.946 8.186 C 44.752 4.992 39.45 4.945 36.209 8.186 L 35.387 9.222 L 35.483 8.305 C 35.483 3.717 31.765 0 27.178 0 C 22.591 0 19.123 3.479 18.897 7.864 C 15.644 4.683 10.437 4.694 7.22 7.923 C 5.664 9.48 4.79 11.591 4.79 13.791 C 4.79 15.992 5.664 18.103 7.22 19.66 L 7.387 19.791 C 3.241 20.243 0 23.77 0 28.036 C 0 32.551 3.598 36.209 8.09 36.329 C 5.269 39.617 5.456 44.523 8.519 47.588 C 11.31 50.376 15.675 50.819 18.969 48.649 C 19.564 52.652 22.996 55.738 27.166 55.738 C 31.61 55.738 35.232 52.235 35.447 47.85 C 38.745 50.593 43.59 50.371 46.623 47.338 C 49.637 44.323 49.84 39.593 47.266 36.329 L 47.433 36.329 C 52.02 36.34 55.738 32.635 55.738 28.048 Z" fill="transparent"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                              s(F, {
                                                className: `framer-1qe5i4v`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.936 8.936" overflow="visible"><path d="M 5.135 8.936 L 2.955 8.936 L 0 5.981 L 0 1.43 L 1.43 0 L 6.66 0 L 8.936 2.276 L 8.936 5.123 L 5.135 8.924 Z" fill="transparent"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          s(F, {
                                            className: `framer-137qiw6`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.301 18.301" overflow="visible"><path d="M 0 9.151 C 0 4.097 4.097 0 9.151 0 C 14.204 0 18.301 4.097 18.301 9.151 C 18.301 14.204 14.204 18.301 9.151 18.301 C 4.097 18.301 0 14.204 0 9.151 Z" fill="rgb(205,33,31)" stroke-width="2.19" stroke="rgb(247,247,235)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    d(`div`, {
                                      className: `framer-55dll9`,
                                      children: [
                                        s(P, {
                                          breakpoint: C,
                                          overrides: {
                                            rqaCb7Rwp: {
                                              children: s(a, {
                                                children: s(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                    "--framer-font-size": `15px`,
                                                    "--framer-line-height": `3.4em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `Lasowiak cranberry liqueur label + packaging`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: s(I, {
                                            __fromCanvasComponent: !0,
                                            children: s(a, {
                                              children: s(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `24px`,
                                                  "--framer-line-height": `2.4em`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: `Lasowiak cranberry liqueur label + packaging`,
                                              }),
                                            }),
                                            className: `framer-162dgcm`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        z() &&
                                          s(I, {
                                            __fromCanvasComponent: !0,
                                            children: s(a, {
                                              children: s(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `24px`,
                                                  "--framer-line-height": `2.4em`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: `2026`,
                                              }),
                                            }),
                                            className: `framer-1snm8py hidden-1ps97kd`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                      ],
                                    }),
                                    z() &&
                                      d(F, {
                                        className: `framer-1luz9ju hidden-1ps97kd`,
                                        requiresOverflowVisible: !0,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 55.738 55.738" overflow="visible"><g><path d="M 55.738 28.048 C 55.738 23.675 52.354 20.1 48.077 19.779 C 51.174 16.526 51.139 11.379 47.946 8.186 C 44.752 4.992 39.45 4.945 36.209 8.186 L 35.387 9.222 L 35.483 8.305 C 35.483 3.717 31.765 0 27.178 0 C 22.591 0 19.123 3.479 18.897 7.864 C 15.644 4.683 10.437 4.694 7.22 7.923 C 5.664 9.48 4.79 11.591 4.79 13.791 C 4.79 15.992 5.664 18.103 7.22 19.66 L 7.387 19.791 C 3.241 20.243 0 23.77 0 28.036 C 0 32.551 3.598 36.209 8.09 36.329 C 5.269 39.617 5.456 44.523 8.519 47.588 C 11.31 50.376 15.675 50.819 18.969 48.649 C 19.564 52.652 22.996 55.738 27.166 55.738 C 31.61 55.738 35.232 52.235 35.447 47.85 C 38.745 50.593 43.59 50.371 46.623 47.338 C 49.637 44.323 49.84 39.593 47.266 36.329 L 47.433 36.329 C 52.02 36.34 55.738 32.635 55.738 28.048 Z M 28.536 32.337 L 26.356 32.337 L 23.401 29.382 L 23.401 24.831 L 24.831 23.401 L 30.061 23.401 L 32.337 25.677 L 32.337 28.524 L 28.536 32.325 Z" fill="rgb(205,33,31)" stroke-width="2.19" stroke="rgb(247,247,235)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 18.718 27.869 C 18.718 22.815 22.815 18.718 27.869 18.718 C 32.923 18.718 37.02 22.815 37.02 27.869 C 37.02 32.923 32.923 37.02 27.869 37.02 C 22.815 37.02 18.718 32.923 18.718 27.869 Z" fill="rgb(205,33,31)" stroke-width="2.19" stroke="rgb(247,247,235)" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                                        withExternalLayout: !0,
                                        children: [
                                          d(F, {
                                            className: `framer-ama1fl`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 55.738 55.738" overflow="visible"><path d="M 55.738 28.048 C 55.738 23.675 52.354 20.1 48.077 19.779 C 51.174 16.526 51.139 11.379 47.946 8.186 C 44.752 4.992 39.45 4.945 36.209 8.186 L 35.387 9.222 L 35.483 8.305 C 35.483 3.717 31.765 0 27.178 0 C 22.591 0 19.123 3.479 18.897 7.864 C 15.644 4.683 10.437 4.694 7.22 7.923 C 5.664 9.48 4.79 11.591 4.79 13.791 C 4.79 15.992 5.664 18.103 7.22 19.66 L 7.387 19.791 C 3.241 20.243 0 23.77 0 28.036 C 0 32.551 3.598 36.209 8.09 36.329 C 5.269 39.617 5.456 44.523 8.519 47.588 C 11.31 50.376 15.675 50.819 18.969 48.649 C 19.564 52.652 22.996 55.738 27.166 55.738 C 31.61 55.738 35.232 52.235 35.447 47.85 C 38.745 50.593 43.59 50.371 46.623 47.338 C 49.637 44.323 49.84 39.593 47.266 36.329 L 47.433 36.329 C 52.02 36.34 55.738 32.635 55.738 28.048 Z M 28.536 32.337 L 26.356 32.337 L 23.401 29.382 L 23.401 24.831 L 24.831 23.401 L 30.061 23.401 L 32.337 25.677 L 32.337 28.524 L 28.536 32.325 Z" fill="rgb(205,33,31)" stroke-width="2.19" stroke="rgb(247,247,235)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                            withExternalLayout: !0,
                                            children: [
                                              s(F, {
                                                className: `framer-qo43hm`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 55.738 55.738" overflow="visible"><path d="M 55.738 28.048 C 55.738 23.675 52.354 20.1 48.077 19.779 C 51.174 16.526 51.139 11.379 47.946 8.186 C 44.752 4.992 39.45 4.945 36.209 8.186 L 35.387 9.222 L 35.483 8.305 C 35.483 3.717 31.765 0 27.178 0 C 22.591 0 19.123 3.479 18.897 7.864 C 15.644 4.683 10.437 4.694 7.22 7.923 C 5.664 9.48 4.79 11.591 4.79 13.791 C 4.79 15.992 5.664 18.103 7.22 19.66 L 7.387 19.791 C 3.241 20.243 0 23.77 0 28.036 C 0 32.551 3.598 36.209 8.09 36.329 C 5.269 39.617 5.456 44.523 8.519 47.588 C 11.31 50.376 15.675 50.819 18.969 48.649 C 19.564 52.652 22.996 55.738 27.166 55.738 C 31.61 55.738 35.232 52.235 35.447 47.85 C 38.745 50.593 43.59 50.371 46.623 47.338 C 49.637 44.323 49.84 39.593 47.266 36.329 L 47.433 36.329 C 52.02 36.34 55.738 32.635 55.738 28.048 Z" fill="transparent"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                              s(F, {
                                                className: `framer-a5mydi`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.936 8.936" overflow="visible"><path d="M 5.135 8.936 L 2.955 8.936 L 0 5.981 L 0 1.43 L 1.43 0 L 6.66 0 L 8.936 2.276 L 8.936 5.123 L 5.135 8.924 Z" fill="transparent"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          s(F, {
                                            className: `framer-1habuhz`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.301 18.301" overflow="visible"><path d="M 0 9.151 C 0 4.097 4.097 0 9.151 0 C 14.204 0 18.301 4.097 18.301 9.151 C 18.301 14.204 14.204 18.301 9.151 18.301 C 4.097 18.301 0 14.204 0 9.151 Z" fill="rgb(205,33,31)" stroke-width="2.19" stroke="rgb(247,247,235)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        }),
                        s(`div`, {
                          className: `framer-1hqbkop`,
                          children: s(P, {
                            breakpoint: C,
                            overrides: { rqaCb7Rwp: { "data-framer-cursor": void 0 } },
                            children: s(Zn, {
                              animate: xr,
                              className: `framer-190x5on`,
                              "data-framer-appear-id": `190x5on`,
                              "data-framer-cursor": `3kqtix`,
                              initial: Sr,
                              optimized: !0,
                              children: s(L, {
                                href: { webPageId: `YN_8Vp9ZG` },
                                motionChild: !0,
                                nodeId: `KgPDBOpZP`,
                                openInNewTab: !1,
                                scopeId: `augiA20Il`,
                                children: d(h.a, {
                                  className: `framer-1wh09wn framer-lux5qc`,
                                  children: [
                                    s(P, {
                                      breakpoint: C,
                                      overrides: {
                                        rqaCb7Rwp: {
                                          children: s(a, {
                                            children: s(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `14px`,
                                                "--framer-line-height": `4.2em`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `Honored agency web design`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: s(I, {
                                        __fromCanvasComponent: !0,
                                        children: s(a, {
                                          children: s(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              "--framer-font-size": `24px`,
                                              "--framer-line-height": `2.9em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `Honored agency web design`,
                                          }),
                                        }),
                                        className: `framer-r4d2z`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    z() &&
                                      s(I, {
                                        __fromCanvasComponent: !0,
                                        children: s(a, {
                                          children: s(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              "--framer-font-size": `24px`,
                                              "--framer-line-height": `2.1em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `2026`,
                                          }),
                                        }),
                                        className: `framer-1b9ib11 hidden-1ps97kd`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        }),
                        d(`div`, {
                          className: `framer-1sfypcx`,
                          children: [
                            s(P, {
                              breakpoint: C,
                              overrides: {
                                rqaCb7Rwp: {
                                  children: s(a, {
                                    children: s(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                        "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                        "--framer-line-height": `3.4em`,
                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                      },
                                      children: `projects `,
                                    }),
                                  }),
                                },
                              },
                              children: s(I, {
                                __fromCanvasComponent: !0,
                                children: s(a, {
                                  children: s(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      "--framer-font-size": `24px`,
                                      "--framer-line-height": `3.8em`,
                                      "--framer-text-color": `rgb(255, 255, 255)`,
                                    },
                                    children: `projects `,
                                  }),
                                }),
                                className: `framer-155ktf`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            s(P, {
                              breakpoint: C,
                              overrides: {
                                rqaCb7Rwp: {
                                  children: s(a, {
                                    children: s(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                        "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                        "--framer-line-height": `3.4em`,
                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                      },
                                      children: `bookshelf `,
                                    }),
                                  }),
                                },
                              },
                              children: s(I, {
                                __fromCanvasComponent: !0,
                                children: s(a, {
                                  children: s(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      "--framer-font-size": `24px`,
                                      "--framer-line-height": `3.8em`,
                                      "--framer-text-color": `rgb(255, 255, 255)`,
                                    },
                                    children: `bookshelf `,
                                  }),
                                }),
                                className: `framer-1obsjhk`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    d(tr, {
                      __framer__animate: { transition: wr },
                      __framer__animateOnce: !0,
                      __framer__enter: Cr,
                      __framer__exit: Tr,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.18,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-e91nem`,
                      layout: R,
                      children: [
                        s(`div`, {
                          className: `framer-9tzqce`,
                          children: s(P, {
                            breakpoint: C,
                            overrides: {
                              rqaCb7Rwp: {
                                children: s(a, {
                                  children: s(`h2`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      "--framer-font-size": `68px`,
                                      "--framer-letter-spacing": `-0.02em`,
                                      "--framer-line-height": `0.9em`,
                                      "--framer-text-alignment": `center`,
                                    },
                                    children: `About me`,
                                  }),
                                }),
                              },
                            },
                            children: s(I, {
                              __fromCanvasComponent: !0,
                              children: s(a, {
                                children: s(`h2`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                    "--framer-font-size": `120px`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `0.9em`,
                                    "--framer-text-alignment": `left`,
                                  },
                                  children: `About me`,
                                }),
                              }),
                              className: `framer-49rmyj`,
                              fonts: [`BI;Amiamie/Regular/v0`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        s(`div`, {
                          className: `framer-11w0d1u`,
                          children: d(`div`, {
                            className: `framer-lq9v6g`,
                            children: [
                              d(`div`, {
                                className: `framer-1vdns6f`,
                                children: [
                                  s(P, {
                                    breakpoint: C,
                                    overrides: {
                                      rqaCb7Rwp: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 4228,
                                          intrinsicWidth: 3456,
                                          loading: w(
                                            (f?.y || 0) + 0 + 1047.6 + 0 + 85.2 + 0 + 0 + 0 + 0 + 0
                                          ),
                                          pixelHeight: 4228,
                                          pixelWidth: 3456,
                                          sizes: `300.8061px`,
                                          src: `../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg?width=3456&height=4228`,
                                          srcSet: `../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg 837w,../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg?scale-down-to=2048&width=3456&height=4228 1674w,../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg?scale-down-to=4096&width=3456&height=4228 3348w,../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg?width=3456&height=4228 3456w`,
                                        },
                                      },
                                    },
                                    children: s(W, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 4228,
                                        intrinsicWidth: 3456,
                                        loading: w(
                                          (f?.y || 0) + 0 + 780.6 + 0 + 148 + 0 + 0 + 0 + 0
                                        ),
                                        pixelHeight: 4228,
                                        pixelWidth: 3456,
                                        sizes: `300.8061px`,
                                        src: `../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg?width=3456&height=4228`,
                                        srcSet: `../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg 837w,../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg?scale-down-to=2048&width=3456&height=4228 1674w,../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg?scale-down-to=4096&width=3456&height=4228 3348w,../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg?width=3456&height=4228 3456w`,
                                      },
                                      className: `framer-wfm4ho`,
                                      "data-framer-name": `Photo 32523423`,
                                      fitImageDimension: `width`,
                                    }),
                                  }),
                                  s(I, {
                                    __fromCanvasComponent: !0,
                                    children: d(a, {
                                      children: [
                                        s(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-size": `20px`,
                                          },
                                          children: `Always looking`,
                                        }),
                                        s(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-size": `20px`,
                                          },
                                          children: `                           for creative projects`,
                                        }),
                                      ],
                                    }),
                                    className: `framer-oejy4h`,
                                    fonts: [`BI;Amiamie/Regular/v0`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              d(`div`, {
                                className: `framer-1qwnilv`,
                                children: [
                                  s(`div`, {
                                    className: `framer-l5nl8k`,
                                    "data-border": !0,
                                    children: s(P, {
                                      breakpoint: C,
                                      overrides: {
                                        rqaCb7Rwp: {
                                          children: s(a, {
                                            children: s(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                                "--framer-font-size": `24px`,
                                                "--framer-letter-spacing": `-0.02em`,
                                                "--framer-line-height": `1.3em`,
                                              },
                                              children: `From idea to execution, I handle every step myself. Over the past 2 years, I’ve been building brand identities and digital design that are thoughtful, sharp, and made to work. One designer, full attention, real results.`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: s(I, {
                                        __fromCanvasComponent: !0,
                                        children: s(a, {
                                          children: s(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                              "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.7)`,
                                              "--framer-letter-spacing": `-0.02em`,
                                              "--framer-line-height": `1.3em`,
                                            },
                                            children: `From idea to execution, I handle every step myself. Over the past 2 years, I’ve been building brand identities and digital design that are thoughtful, sharp, and made to work. One designer,           full attention, real results.`,
                                          }),
                                        }),
                                        className: `framer-45o0ld`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `center`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                  d(`div`, {
                                    className: `framer-1tdrmcm`,
                                    children: [
                                      s(P, {
                                        breakpoint: C,
                                        overrides: {
                                          rqaCb7Rwp: {
                                            y:
                                              (f?.y || 0) +
                                              0 +
                                              1047.6 +
                                              0 +
                                              85.2 +
                                              0 +
                                              0 +
                                              454 +
                                              0 +
                                              178 +
                                              0,
                                          },
                                        },
                                        children: s(G, {
                                          height: 32,
                                          y:
                                            (f?.y || 0) +
                                            0 +
                                            780.6 +
                                            0 +
                                            148 +
                                            0 +
                                            0 +
                                            0 +
                                            197.5 +
                                            0,
                                          children: s(B, {
                                            className: `framer-kudysn-container`,
                                            nodeId: `s9ulzLDJq`,
                                            scopeId: `augiA20Il`,
                                            children: s(Ze, {
                                              height: `100%`,
                                              id: `s9ulzLDJq`,
                                              layoutId: `s9ulzLDJq`,
                                              variant: $(`LWW6NnG7_`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      s(P, {
                                        breakpoint: C,
                                        overrides: {
                                          rqaCb7Rwp: {
                                            y:
                                              (f?.y || 0) +
                                              0 +
                                              1047.6 +
                                              0 +
                                              85.2 +
                                              0 +
                                              0 +
                                              454 +
                                              0 +
                                              178 +
                                              0,
                                          },
                                        },
                                        children: s(G, {
                                          height: 32,
                                          y:
                                            (f?.y || 0) +
                                            0 +
                                            780.6 +
                                            0 +
                                            148 +
                                            0 +
                                            0 +
                                            0 +
                                            197.5 +
                                            0,
                                          children: s(B, {
                                            className: `framer-10z4ps0-container`,
                                            nodeId: `lPReS4SDU`,
                                            scopeId: `augiA20Il`,
                                            children: s(Nn, {
                                              height: `100%`,
                                              id: `lPReS4SDU`,
                                              layoutId: `lPReS4SDU`,
                                              variant: $(`wnhhwWxB6`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      s(P, {
                                        breakpoint: C,
                                        overrides: {
                                          rqaCb7Rwp: {
                                            y:
                                              (f?.y || 0) +
                                              0 +
                                              1047.6 +
                                              0 +
                                              85.2 +
                                              0 +
                                              0 +
                                              454 +
                                              0 +
                                              178 +
                                              0,
                                          },
                                        },
                                        children: s(G, {
                                          height: 32,
                                          y:
                                            (f?.y || 0) +
                                            0 +
                                            780.6 +
                                            0 +
                                            148 +
                                            0 +
                                            0 +
                                            0 +
                                            197.5 +
                                            0,
                                          children: s(B, {
                                            className: `framer-1rk2vh5-container`,
                                            nodeId: `T5ouJhFbo`,
                                            scopeId: `augiA20Il`,
                                            children: s(Lt, {
                                              height: `100%`,
                                              id: `T5ouJhFbo`,
                                              layoutId: `T5ouJhFbo`,
                                              variant: $(`rWn3aWkch`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    d(tr, {
                      __framer__animate: { transition: wr },
                      __framer__animateOnce: !0,
                      __framer__enter: Cr,
                      __framer__exit: Tr,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.16,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-l3v06p`,
                      "data-framer-name": `Content container`,
                      layout: R,
                      children: [
                        s(`div`, {
                          className: `framer-1etvy11`,
                          "data-framer-name": `Content top`,
                          children: s(P, {
                            breakpoint: C,
                            overrides: {
                              rqaCb7Rwp: {
                                children: s(a, {
                                  children: s(`h2`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      "--framer-font-size": `68px`,
                                      "--framer-letter-spacing": `-0.03em`,
                                      "--framer-line-height": `0.9em`,
                                      "--framer-text-alignment": `center`,
                                    },
                                    children: `My experience`,
                                  }),
                                }),
                              },
                            },
                            children: s(I, {
                              __fromCanvasComponent: !0,
                              children: s(a, {
                                children: s(`h2`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                    "--framer-font-size": `120px`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `0.9em`,
                                    "--framer-text-alignment": `left`,
                                  },
                                  children: `My experience`,
                                }),
                              }),
                              className: `framer-19r59z7`,
                              fonts: [`BI;Amiamie/Regular/v0`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        d(`div`, {
                          className: `framer-1gva25k`,
                          "data-framer-name": `Content bottom`,
                          children: [
                            s(`div`, { className: `framer-m9ulnp`, "data-framer-name": `Line` }),
                            s(P, {
                              breakpoint: C,
                              overrides: {
                                rqaCb7Rwp: {
                                  width: `calc(min(${f?.width || `100vw`}, 1660px) - 20px)`,
                                  y: (f?.y || 0) + 0 + 1856.8 + 0 + 101.2 + 0 + 21,
                                },
                              },
                              children: s(G, {
                                height: 61,
                                width: `calc(min(${f?.width || `100vw`}, 1660px) - 40px)`,
                                y: (f?.y || 0) + 0 + 1438.6 + 0 + 148 + 0 + 21,
                                children: s(B, {
                                  className: `framer-14tsi5g-container`,
                                  nodeId: `pdeciNr0S`,
                                  scopeId: `augiA20Il`,
                                  children: s(P, {
                                    breakpoint: C,
                                    overrides: { rqaCb7Rwp: { variant: $(`SJkSWtwrD`) } },
                                    children: s(Q, {
                                      DwK_HcFci: `Honored agency`,
                                      FfaVB0OyP: `2026 - now`,
                                      height: `100%`,
                                      id: `pdeciNr0S`,
                                      layoutId: `pdeciNr0S`,
                                      style: { width: `100%` },
                                      urYaRgX6o: `Working mostly with film directors and developing pitch-decks, director's treatments and framer based web sites`,
                                      variant: $(`ergfnayr1`),
                                      width: `100%`,
                                      wrjWTGkAU: `Presentation design
no-code web development`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            s(`div`, { className: `framer-1haonbm`, "data-framer-name": `Line` }),
                            s(P, {
                              breakpoint: C,
                              overrides: {
                                rqaCb7Rwp: {
                                  width: `calc(min(${f?.width || `100vw`}, 1660px) - 20px)`,
                                  y: (f?.y || 0) + 0 + 1856.8 + 0 + 101.2 + 0 + 123,
                                },
                              },
                              children: s(G, {
                                height: 61,
                                width: `calc(min(${f?.width || `100vw`}, 1660px) - 40px)`,
                                y: (f?.y || 0) + 0 + 1438.6 + 0 + 148 + 0 + 123,
                                children: s(B, {
                                  className: `framer-1prg2vq-container`,
                                  nodeId: `walCP44iR`,
                                  scopeId: `augiA20Il`,
                                  children: s(P, {
                                    breakpoint: C,
                                    overrides: { rqaCb7Rwp: { variant: $(`SJkSWtwrD`) } },
                                    children: s(Q, {
                                      DwK_HcFci: `DoGood inc.`,
                                      FfaVB0OyP: `2024-2026`,
                                      height: `100%`,
                                      id: `walCP44iR`,
                                      layoutId: `walCP44iR`,
                                      style: { width: `100%` },
                                      urYaRgX6o: `collaborated with project manager and team lead designing a web site for charity start up`,
                                      variant: $(`ergfnayr1`),
                                      width: `100%`,
                                      wrjWTGkAU: `UX/UI `,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            s(`div`, { className: `framer-1uilnho`, "data-framer-name": `Line` }),
                            s(`div`, { className: `framer-1esrrfv`, "data-framer-name": `Line` }),
                          ],
                        }),
                      ],
                    }),
                    s(P, {
                      breakpoint: C,
                      overrides: { rqaCb7Rwp: { y: (f?.y || 0) + 0 + 2244 } },
                      children: s(G, {
                        height: 390,
                        width: f?.width || `100vw`,
                        y: (f?.y || 0) + 0 + 1892.6,
                        children: s(ir, {
                          __framer__animate: { transition: Dr },
                          __framer__animateOnce: !0,
                          __framer__enter: Er,
                          __framer__exit: Or,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.12,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-wytk1k-container`,
                          layout: R,
                          nodeId: `Nc9hE9Wun`,
                          rendersWithMotion: !0,
                          scopeId: `augiA20Il`,
                          children: s(P, {
                            breakpoint: C,
                            overrides: { rqaCb7Rwp: { variant: $(`bC5BwOq5u`) } },
                            children: s(he, {
                              height: `100%`,
                              id: `Nc9hE9Wun`,
                              layoutId: `Nc9hE9Wun`,
                              style: { width: `100%` },
                              variant: $(`Q4FA0ndjW`),
                              width: `100%`,
                            }),
                          }),
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
        `.framer-wMIKB.framer-lux5qc, .framer-wMIKB .framer-lux5qc { display: block; }`,
        `.framer-wMIKB.framer-72rtr7 { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-wMIKB .framer-1cqubso-container { flex: none; height: auto; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-wMIKB .framer-1pk19t6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-wMIKB .framer-1wo15fn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 67px; position: relative; width: 100%; }`,
        `.framer-wMIKB .framer-1o35j7e { align-content: center; align-items: center; background-color: #513754; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; text-decoration: none; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-wMIKB .framer-fabrby, .framer-wMIKB .framer-ylii6c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-wMIKB .framer-f31bhh, .framer-wMIKB .framer-1whu6ux, .framer-wMIKB .framer-1rbm2pr, .framer-wMIKB .framer-1co7ojz { align-self: stretch; background-color: #cae4d0; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 17px; }`,
        `.framer-wMIKB .framer-1276jb5, .framer-wMIKB .framer-gkf850 { background-color: #cae4d0; flex: none; height: 100px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 17px; }`,
        `.framer-wMIKB .framer-12q841r, .framer-wMIKB .framer-55dll9 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 1px; }`,
        `.framer-wMIKB .framer-5ab62k, .framer-wMIKB .framer-1ykyxam, .framer-wMIKB .framer-t562ga, .framer-wMIKB .framer-1ktxd14, .framer-wMIKB .framer-1t4zjh7, .framer-wMIKB .framer-1c9hx4p, .framer-wMIKB .framer-x3tb15, .framer-wMIKB .framer-1xfpqu, .framer-wMIKB .framer-162dgcm, .framer-wMIKB .framer-1snm8py, .framer-wMIKB .framer-r4d2z, .framer-wMIKB .framer-1b9ib11, .framer-wMIKB .framer-155ktf, .framer-wMIKB .framer-1obsjhk, .framer-wMIKB .framer-oejy4h { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-wMIKB .framer-1xs9kvi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 81px 0px 20px; position: relative; width: 100%; }`,
        `.framer-wMIKB .framer-dvw8u0 { align-content: center; align-items: center; background-color: #228c22; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; text-decoration: none; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-wMIKB .framer-2w6ucr { height: 42px; position: relative; width: 50px; }`,
        `.framer-wMIKB .framer-1jwjuv1 { height: 25px; left: 8px; position: absolute; top: 17px; width: 42px; }`,
        `.framer-wMIKB .framer-15ta0gg { height: 9px; left: 17px; position: absolute; top: 17px; width: 17px; }`,
        `.framer-wMIKB .framer-pwfvvc { height: 25px; left: 0px; position: absolute; top: 0px; width: 42px; }`,
        `.framer-wMIKB .framer-14zj0xi { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 1px; }`,
        `.framer-wMIKB .framer-c6d7ho { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 97px; position: relative; width: 100%; }`,
        `.framer-wMIKB .framer-1tpbxj3 { align-content: center; align-items: center; background-color: #e01f27; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; text-decoration: none; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-wMIKB .framer-1vz55az { height: 60px; position: relative; width: 60px; }`,
        `.framer-wMIKB .framer-1yqgfw3 { height: 51px; left: 18px; position: absolute; top: 0px; width: 42px; }`,
        `.framer-wMIKB .framer-11yycdn { height: 26px; left: 0px; position: absolute; top: 25px; width: 40px; }`,
        `.framer-wMIKB .framer-e8qmnm { height: 25px; left: 19px; position: absolute; top: 0px; width: 23px; }`,
        `.framer-wMIKB .framer-5i1ld { height: 60px; left: 0px; position: absolute; top: 0px; width: 34px; }`,
        `.framer-wMIKB .framer-1fcp6ff { height: 25px; left: 7px; position: absolute; top: 0px; width: 15px; }`,
        `.framer-wMIKB .framer-1vbouz { height: 15px; left: 0px; position: absolute; top: 10px; width: 7px; }`,
        `.framer-wMIKB .framer-k4c35e { height: 9px; left: 28px; position: absolute; top: 50px; width: 6px; }`,
        `.framer-wMIKB .framer-1yr06kl { height: 19px; left: 1px; position: absolute; top: 37px; width: 14px; }`,
        `.framer-wMIKB .framer-14q6jjd { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-wMIKB .framer-105kwlt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-wMIKB .framer-7m5o4b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 44px; position: relative; width: 100%; }`,
        `.framer-wMIKB .framer-fct209 { align-content: center; align-items: center; background-color: #e01f27; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-wMIKB .framer-ks57lr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 40px; position: relative; width: 1px; }`,
        `.framer-wMIKB .framer-ez5d44 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 56px 0px 20px; position: relative; width: 100%; }`,
        `.framer-wMIKB .framer-8dh0w5 { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-wMIKB .framer-asbvxi { align-content: center; align-items: center; background-color: #cc1d1f; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 10px 20px 10px 20px; position: relative; text-decoration: none; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-wMIKB .framer-25nq1v, .framer-wMIKB .framer-1luz9ju { height: 56px; position: relative; width: 56px; }`,
        `.framer-wMIKB .framer-yi9huk, .framer-wMIKB .framer-164bcyw, .framer-wMIKB .framer-ama1fl, .framer-wMIKB .framer-qo43hm { height: 56px; left: 0px; position: absolute; top: 0px; width: 56px; }`,
        `.framer-wMIKB .framer-1qe5i4v, .framer-wMIKB .framer-a5mydi { height: 9px; left: 23px; position: absolute; top: 23px; width: 9px; }`,
        `.framer-wMIKB .framer-137qiw6, .framer-wMIKB .framer-1habuhz { height: 19px; left: 19px; position: absolute; top: 19px; width: 19px; }`,
        `.framer-wMIKB .framer-1hqbkop { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 26px 0px 40px; position: relative; width: 100%; }`,
        `.framer-wMIKB .framer-190x5on { align-content: center; align-items: center; background-color: #242424; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-wMIKB .framer-1wh09wn { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-wMIKB .framer-1sfypcx { align-content: center; align-items: center; background-color: #635b42; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-wMIKB .framer-e91nem { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-wMIKB .framer-9tzqce { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-wMIKB .framer-49rmyj { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-wMIKB .framer-11w0d1u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0px 20px; position: relative; width: 100%; }`,
        `.framer-wMIKB .framer-lq9v6g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-wMIKB .framer-1vdns6f, .framer-wMIKB .framer-1qwnilv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-wMIKB .framer-wfm4ho { flex: none; height: 368px; overflow: visible; position: relative; width: auto; }`,
        `.framer-wMIKB .framer-l5nl8k { --border-bottom-width: 1.5px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 8px 0px; position: relative; width: min-content; }`,
        `.framer-wMIKB .framer-45o0ld { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 485px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-wMIKB .framer-1tdrmcm { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; }`,
        `.framer-wMIKB .framer-kudysn-container, .framer-wMIKB .framer-10z4ps0-container, .framer-wMIKB .framer-1rk2vh5-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-wMIKB .framer-l3v06p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1660px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-wMIKB .framer-1etvy11 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-wMIKB .framer-19r59z7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-wMIKB .framer-1gva25k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-wMIKB .framer-m9ulnp, .framer-wMIKB .framer-1haonbm, .framer-wMIKB .framer-1uilnho, .framer-wMIKB .framer-1esrrfv { background-color: var(--token-760b2224-5d53-4ceb-988b-26f083436f3c, rgba(236, 232, 223, 0.12)); flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-wMIKB .framer-14tsi5g-container, .framer-wMIKB .framer-1prg2vq-container, .framer-wMIKB .framer-wytk1k-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-wMIKB[data-border="true"]::after, .framer-wMIKB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (max-width: 1199.98px) { .framer-wMIKB.framer-72rtr7 { gap: 60px; width: 390px; } .framer-wMIKB .framer-1wo15fn { padding: 0px 10px 0px 21px; } .framer-wMIKB .framer-1o35j7e, .framer-wMIKB .framer-dvw8u0, .framer-wMIKB .framer-1tpbxj3, .framer-wMIKB .framer-1hqbkop, .framer-wMIKB .framer-9tzqce, .framer-wMIKB .framer-11w0d1u, .framer-wMIKB .framer-l3v06p { padding: 0px 10px 0px 10px; } .framer-wMIKB .framer-12q841r { gap: 127px; justify-content: center; padding: 0px; } .framer-wMIKB .framer-1xs9kvi { padding: 0px 30px 0px 10px; } .framer-wMIKB .framer-14zj0xi { gap: 10px; justify-content: center; padding: 0px; } .framer-wMIKB .framer-c6d7ho { padding: 0px 10px 0px 24px; } .framer-wMIKB .framer-105kwlt, .framer-wMIKB .framer-55dll9 { padding: 0px; } .framer-wMIKB .framer-1t4zjh7, .framer-wMIKB .framer-162dgcm { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; } .framer-wMIKB .framer-7m5o4b { padding: 0px 15px 0px 10px; } .framer-wMIKB .framer-ks57lr { gap: 10px; justify-content: center; padding: 0px 10px 0px 10px; } .framer-wMIKB .framer-ez5d44 { padding: 0px 30px 0px 20px; } .framer-wMIKB .framer-asbvxi { padding: 10px; } .framer-wMIKB .framer-1wh09wn { gap: 10px; justify-content: center; } .framer-wMIKB .framer-e91nem { gap: 24px; } .framer-wMIKB .framer-lq9v6g { align-content: center; align-items: center; flex: 1 0 0px; flex-direction: column; width: 1px; } .framer-wMIKB .framer-1qwnilv, .framer-wMIKB .framer-l5nl8k { width: 100%; } .framer-wMIKB .framer-45o0ld { flex: 1 0 0px; width: 1px; } .framer-wMIKB .framer-1tdrmcm { align-self: unset; width: 100%; }}`,
      ],
      `framer-wMIKB`
    )),
    (zr.displayName = `Home`),
    (zr.defaultProps = { height: 2306, width: 1200 }),
    K(
      zr,
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
        ...Jn,
        ...Qn,
        ...$n,
        ...er,
        ...nr,
        ...rr,
        ...ar,
        ...or,
        ...sr,
        ...cr,
        ...lr,
        ...ur,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (zr.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          q(fe, {}, t),
          q(Ze, {}, t),
          q(Nn, {}, t),
          q(Lt, {}, t),
          q(Q, {}, t),
          q(he, {}, t),
        ])
      ),
    }),
    (Br = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerColorSyntax: `true`,
            framerResponsiveScreen: `true`,
            framerScrollSections: `false`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"rqaCb7Rwp":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `2306`,
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Br as __FramerMetadata__, zr as default, pr as queryParamNames };
//# sourceMappingURL=jVY9fu_N-IASypMxywZXt5KDRTNlp_-NXBV-4uBSFY8.wZAZksJr.mjs.map
