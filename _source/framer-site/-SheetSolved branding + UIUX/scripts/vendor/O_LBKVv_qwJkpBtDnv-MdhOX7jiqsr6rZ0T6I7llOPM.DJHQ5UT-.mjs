import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  N as i,
  c as a,
  g as ee,
  k as o,
  l as s,
  o as c,
  v as te,
} from "./react.D20wc1Tc.mjs";
import { S as l, a as ne, r as re, t as u } from "./motion.jtMCvOiK.mjs";
import {
  $ as d,
  A as f,
  C as p,
  J as ie,
  L as m,
  M as h,
  S as g,
  X as ae,
  Z as oe,
  a as se,
  ct as _,
  et as ce,
  f as v,
  g as y,
  h as b,
  j as le,
  l as x,
  lt as S,
  n as C,
  ot as w,
  s as T,
  t as E,
  tt as ue,
  v as D,
  w as O,
} from "./framer.jQONGl1Q.mjs";
import { a as k, i as de, o as fe, r as A } from "./shared-lib.B1UR4gSL.mjs";
import { n as j, t as M } from "./Video.C7bZWvFX.mjs";
import { n as N, t as P } from "./Video.CwIi_51J.mjs";
import pe, { t as F } from "./Ci88lZKuSoj0PYXNzzD5T4ILTvLoefGhV5kcUwqut-Y.BuEdVM_S.mjs";
var I,
  L,
  R,
  me = e(() => {
    (m(),
      p.loadFonts([`BI;Amiamie/Regular/v0`]),
      (I = [
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
      ]),
      (L = [
        `.framer-0cFZU .framer-styles-preset-129xceh:not(.rich-text-wrapper), .framer-0cFZU .framer-styles-preset-129xceh.rich-text-wrapper p { --framer-font-family: "Amiamie", "Amiamie Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #575757; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (R = `framer-0cFZU`));
  }),
  z,
  B,
  V,
  H,
  U,
  W,
  he,
  ge,
  _e,
  G,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  K,
  q,
  J,
  Y,
  we,
  X,
  Te,
  Z,
  Ee,
  De,
  Q,
  $;
e(() => {
  (c(),
    m(),
    u(),
    n(),
    j(),
    N(),
    fe(),
    de(),
    me(),
    F(),
    (z = f(k)),
    (B = f(P)),
    (V = S(l.div)),
    (H = _(l.div)),
    (U = _(l.a)),
    (W = f(M)),
    (he = f(A)),
    (ge = _(C)),
    (_e = { arLfJNu6M: `(max-width: 1199.98px)`, SXx1I9bmt: `(min-width: 1200px)` }),
    (G = () => typeof document < `u`),
    (ve = []),
    (ye = `framer-racdu`),
    (be = { arLfJNu6M: `framer-v-1i18yu1`, SXx1I9bmt: `framer-v-flmeye` }),
    (xe = (e, t, n) => (e && t ? `position` : n)),
    (Se = {
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
    (Ce = {
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
    (K = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (q = {
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
    (J = { delay: 0, duration: 0.7, ease: [0.22, 1, 0.36, 1], type: `tween` }),
    (Y = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: J,
      x: 0,
      y: 28,
    }),
    (we = {
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
    (X = { delay: 0, duration: 0.65, ease: [0.22, 1, 0.36, 1], type: `tween` }),
    (Te = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: X,
      x: 0,
      y: 20,
    }),
    (Z = { Desktop: `SXx1I9bmt`, Phone: `arLfJNu6M` }),
    (Ee = ({ value: e }) =>
      d()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (De = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `SXx1I9bmt`,
    })),
    (Q = w(
      ee(function (e, n) {
        let ee = r(null),
          c = n ?? ee,
          u = te(),
          { activeLocale: d, setLocale: f } = ce(),
          p = ie(),
          { style: m, className: _, layoutId: le, variant: S, ...w } = De(e);
        ue(t(() => pe({}, d), [d]));
        let [D, O] = oe(S, _e, !1),
          de = g(ye, R),
          fe = o(se)?.isLayoutTemplate,
          j = !!o(ne)?.transition?.layout,
          N = xe(fe, j),
          F = () => !G() || D !== `arLfJNu6M`,
          I = () => !G() || D === `arLfJNu6M`;
        return (
          ae({}),
          a(se.Provider, {
            value: {
              activeVariantId: D,
              humanReadableVariantMap: Z,
              primaryVariantId: `SXx1I9bmt`,
              variantClassNames: be,
            },
            children: s(re, {
              id: le ?? u,
              children: [
                a(Ee, { value: `html body { background: rgb(255, 255, 255); }` }),
                s(l.div, {
                  ...w,
                  className: g(de, `framer-flmeye`, _),
                  ref: c,
                  style: { ...m },
                  children: [
                    s(V, {
                      animate: Se,
                      className: `framer-13v0vng`,
                      "data-framer-appear-id": `13v0vng`,
                      initial: Ce,
                      layout: N,
                      optimized: !0,
                      children: [
                        a(E, {
                          height: 59,
                          width: p?.width || `100vw`,
                          y: (p?.y || 0) + 0 + 0 + 0 + 0,
                          children: a(C, {
                            className: `framer-evnccp-container`,
                            nodeId: `ndSMLzQU3`,
                            scopeId: `o9Tvh7Ah_`,
                            children: a(v, {
                              breakpoint: D,
                              overrides: { arLfJNu6M: { variant: K(`tnNrPT_eu`) } },
                              children: a(k, {
                                height: `100%`,
                                id: `ndSMLzQU3`,
                                layoutId: `ndSMLzQU3`,
                                style: { width: `100%` },
                                variant: K(`N1Y2xUv_c`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        s(`div`, {
                          className: `framer-1bbiali`,
                          children: [
                            s(`div`, {
                              className: `framer-ged2dj`,
                              children: [
                                F() &&
                                  s(y, {
                                    className: `framer-14pbzeb hidden-1i18yu1`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49.76 42.007" overflow="visible"><g><path d="M 49.76 20.97 L 49.76 37.87 C 49.76 40.153 47.931 42.007 45.678 42.007 L 20.727 42.007 C 18.474 42.007 16.645 40.153 16.645 37.87 L 16.645 37.81 C 16.645 35.527 14.816 33.673 12.562 33.673 L 12.47 33.673 C 10.217 33.673 8.388 31.82 8.388 29.537 L 8.388 29.413 C 8.388 27.13 10.217 25.277 12.47 25.277 L 12.592 25.277 C 14.845 25.277 16.674 27.13 16.674 29.413 L 16.674 29.49 C 16.674 31.773 18.503 33.627 20.757 33.627 L 37.405 33.627 C 39.658 33.627 41.487 31.773 41.487 29.49 L 41.487 20.97 C 41.487 18.687 43.316 16.833 45.569 16.833 L 45.674 16.833 C 47.928 16.833 49.757 18.687 49.757 20.97 Z" fill="rgb(255,255,255)"></path><path d="M 18.77 25.23 C 17.578 25.23 16.612 24.251 16.612 23.043 L 16.612 19.02 C 16.612 17.812 17.578 16.833 18.77 16.833 L 31.01 16.833 C 32.202 16.833 33.168 17.812 33.168 19.02 L 33.168 23.043 C 33.168 24.251 32.202 25.23 31.01 25.23 Z" fill="rgb(255,255,255)"></path><path d="M 41.293 12.427 L 41.293 12.533 C 41.293 14.817 39.464 16.67 37.211 16.67 L 37.089 16.67 C 34.836 16.67 33.007 14.817 33.007 12.533 C 33.007 10.25 31.178 8.397 28.924 8.397 L 12.368 8.397 C 10.115 8.397 8.286 10.25 8.286 12.533 L 8.286 21.037 C 8.286 23.32 6.457 25.173 4.204 25.173 L 4.082 25.173 C 1.829 25.173 0 23.32 0 21.037 L 0 4.137 C 0 1.853 1.829 0 4.082 0 L 29.046 0 C 31.299 0 33.128 1.853 33.128 4.137 L 33.128 4.153 C 33.128 6.437 34.957 8.29 37.211 8.29 C 39.464 8.29 41.293 10.143 41.293 12.427 Z" fill="rgb(255,255,255)"></path></g></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      a(y, {
                                        className: `framer-19kip9l`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.372 25.173" overflow="visible"><path d="M 41.372 4.137 L 41.372 21.037 C 41.372 23.32 39.543 25.173 37.289 25.173 L 12.339 25.173 C 10.086 25.173 8.257 23.32 8.257 21.037 L 8.257 20.977 C 8.257 18.693 6.428 16.84 4.174 16.84 L 4.082 16.84 C 1.829 16.84 0 14.987 0 12.703 L 0 12.58 C 0 10.297 1.829 8.443 4.082 8.443 L 4.204 8.443 C 6.457 8.443 8.286 10.297 8.286 12.58 L 8.286 12.657 C 8.286 14.94 10.115 16.793 12.368 16.793 L 29.016 16.793 C 31.27 16.793 33.099 14.94 33.099 12.657 L 33.099 4.137 C 33.099 1.853 34.928 0 37.181 0 L 37.286 0 C 39.539 0 41.368 1.853 41.368 4.137 Z" fill="rgb(255,255,255)"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      a(y, {
                                        className: `framer-mdtiub`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.556 8.397" overflow="visible"><path d="M 2.158 8.397 C 0.966 8.397 0 7.418 0 6.21 L 0 2.187 C 0 0.979 0.966 0 2.158 0 L 14.398 0 C 15.59 0 16.556 0.979 16.556 2.187 L 16.556 6.21 C 16.556 7.418 15.59 8.397 14.398 8.397 Z" fill="rgb(255,255,255)"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      a(y, {
                                        className: `framer-b05278`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.293 25.173" overflow="visible"><path d="M 41.293 12.427 L 41.293 12.533 C 41.293 14.817 39.464 16.67 37.211 16.67 L 37.089 16.67 C 34.836 16.67 33.007 14.817 33.007 12.533 C 33.007 10.25 31.178 8.397 28.924 8.397 L 12.368 8.397 C 10.115 8.397 8.286 10.25 8.286 12.533 L 8.286 21.037 C 8.286 23.32 6.457 25.173 4.204 25.173 L 4.082 25.173 C 1.829 25.173 0 23.32 0 21.037 L 0 4.137 C 0 1.853 1.829 0 4.082 0 L 29.046 0 C 31.299 0 33.128 1.853 33.128 4.137 L 33.128 4.153 C 33.128 6.437 34.957 8.29 37.211 8.29 C 39.464 8.29 41.293 10.143 41.293 12.427 Z" fill="rgb(255,255,255)"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                a(`div`, {
                                  className: `framer-6thjln`,
                                  children: a(v, {
                                    breakpoint: D,
                                    overrides: {
                                      arLfJNu6M: {
                                        children: a(i, {
                                          children: a(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              "--framer-font-size": `24px`,
                                              "--framer-line-height": `2.5em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `SheetSolved branding + UI/UX`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: a(b, {
                                      __fromCanvasComponent: !0,
                                      children: a(i, {
                                        children: a(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-size": `48px`,
                                            "--framer-line-height": `2.5em`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: `SheetSolved branding + UI/UX`,
                                        }),
                                      }),
                                      className: `framer-1ko148u`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                F() &&
                                  s(y, {
                                    className: `framer-9pg0uk hidden-1i18yu1`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49.76 42.007" overflow="visible"><g><path d="M 49.76 20.97 L 49.76 37.87 C 49.76 40.153 47.931 42.007 45.678 42.007 L 20.727 42.007 C 18.474 42.007 16.645 40.153 16.645 37.87 L 16.645 37.81 C 16.645 35.527 14.816 33.673 12.562 33.673 L 12.47 33.673 C 10.217 33.673 8.388 31.82 8.388 29.537 L 8.388 29.413 C 8.388 27.13 10.217 25.277 12.47 25.277 L 12.592 25.277 C 14.845 25.277 16.674 27.13 16.674 29.413 L 16.674 29.49 C 16.674 31.773 18.503 33.627 20.757 33.627 L 37.405 33.627 C 39.658 33.627 41.487 31.773 41.487 29.49 L 41.487 20.97 C 41.487 18.687 43.316 16.833 45.569 16.833 L 45.674 16.833 C 47.928 16.833 49.757 18.687 49.757 20.97 Z" fill="rgb(255,255,255)"></path><path d="M 18.77 25.23 C 17.578 25.23 16.612 24.251 16.612 23.043 L 16.612 19.02 C 16.612 17.812 17.578 16.833 18.77 16.833 L 31.01 16.833 C 32.202 16.833 33.168 17.812 33.168 19.02 L 33.168 23.043 C 33.168 24.251 32.202 25.23 31.01 25.23 Z" fill="rgb(255,255,255)"></path><path d="M 41.293 12.427 L 41.293 12.533 C 41.293 14.817 39.464 16.67 37.211 16.67 L 37.089 16.67 C 34.836 16.67 33.007 14.817 33.007 12.533 C 33.007 10.25 31.178 8.397 28.924 8.397 L 12.368 8.397 C 10.115 8.397 8.286 10.25 8.286 12.533 L 8.286 21.037 C 8.286 23.32 6.457 25.173 4.204 25.173 L 4.082 25.173 C 1.829 25.173 0 23.32 0 21.037 L 0 4.137 C 0 1.853 1.829 0 4.082 0 L 29.046 0 C 31.299 0 33.128 1.853 33.128 4.137 L 33.128 4.153 C 33.128 6.437 34.957 8.29 37.211 8.29 C 39.464 8.29 41.293 10.143 41.293 12.427 Z" fill="rgb(255,255,255)"></path></g></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      a(y, {
                                        className: `framer-1c330eb`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.372 25.173" overflow="visible"><path d="M 41.372 4.137 L 41.372 21.037 C 41.372 23.32 39.543 25.173 37.289 25.173 L 12.339 25.173 C 10.086 25.173 8.257 23.32 8.257 21.037 L 8.257 20.977 C 8.257 18.693 6.428 16.84 4.174 16.84 L 4.082 16.84 C 1.829 16.84 0 14.987 0 12.703 L 0 12.58 C 0 10.297 1.829 8.443 4.082 8.443 L 4.204 8.443 C 6.457 8.443 8.286 10.297 8.286 12.58 L 8.286 12.657 C 8.286 14.94 10.115 16.793 12.368 16.793 L 29.016 16.793 C 31.27 16.793 33.099 14.94 33.099 12.657 L 33.099 4.137 C 33.099 1.853 34.928 0 37.181 0 L 37.286 0 C 39.539 0 41.368 1.853 41.368 4.137 Z" fill="rgb(255,255,255)"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      a(y, {
                                        className: `framer-1af9e2k`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.556 8.397" overflow="visible"><path d="M 2.158 8.397 C 0.966 8.397 0 7.418 0 6.21 L 0 2.187 C 0 0.979 0.966 0 2.158 0 L 14.398 0 C 15.59 0 16.556 0.979 16.556 2.187 L 16.556 6.21 C 16.556 7.418 15.59 8.397 14.398 8.397 Z" fill="rgb(255,255,255)"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      a(y, {
                                        className: `framer-iokm3c`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.293 25.173" overflow="visible"><path d="M 41.293 12.427 L 41.293 12.533 C 41.293 14.817 39.464 16.67 37.211 16.67 L 37.089 16.67 C 34.836 16.67 33.007 14.817 33.007 12.533 C 33.007 10.25 31.178 8.397 28.924 8.397 L 12.368 8.397 C 10.115 8.397 8.286 10.25 8.286 12.533 L 8.286 21.037 C 8.286 23.32 6.457 25.173 4.204 25.173 L 4.082 25.173 C 1.829 25.173 0 23.32 0 21.037 L 0 4.137 C 0 1.853 1.829 0 4.082 0 L 29.046 0 C 31.299 0 33.128 1.853 33.128 4.137 L 33.128 4.153 C 33.128 6.437 34.957 8.29 37.211 8.29 C 39.464 8.29 41.293 10.143 41.293 12.427 Z" fill="rgb(255,255,255)"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            s(`div`, {
                              className: `framer-1c43jvn`,
                              children: [
                                a(E, {
                                  children: a(C, {
                                    className: `framer-1m5azy7-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `g81ZkpcDx`,
                                    scopeId: `o9Tvh7Ah_`,
                                    children: a(v, {
                                      breakpoint: D,
                                      overrides: {
                                        arLfJNu6M: {
                                          srcFile: `https://framerusercontent.com/assets/X7mVWw48oBMDDHbcxH3RhVommQ.mp4`,
                                        },
                                      },
                                      children: a(P, {
                                        backgroundColor: `rgba(0, 0, 0, 0)`,
                                        borderRadius: 0,
                                        bottomLeftRadius: 0,
                                        bottomRightRadius: 0,
                                        controls: !1,
                                        height: `100%`,
                                        id: `g81ZkpcDx`,
                                        isMixedBorderRadius: !1,
                                        layoutId: `g81ZkpcDx`,
                                        loop: !0,
                                        muted: !0,
                                        objectFit: `cover`,
                                        playing: !0,
                                        posterEnabled: !0,
                                        srcFile: `../../assets/misc/2vdkSvXsuOS9CVeB13a6i1x16Zs.mp4`,
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
                                s(`div`, {
                                  className: `framer-sjakrj`,
                                  children: [
                                    s(`div`, {
                                      className: `framer-j07ls6`,
                                      children: [
                                        a(v, {
                                          breakpoint: D,
                                          overrides: {
                                            arLfJNu6M: {
                                              children: a(i, {
                                                children: a(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                    "--framer-font-size": `12px`,
                                                    "--framer-text-color": `rgb(87, 87, 87)`,
                                                  },
                                                  children: `Project type:`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: a(b, {
                                            __fromCanvasComponent: !0,
                                            children: a(i, {
                                              children: a(`p`, {
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
                                            className: `framer-178xiwb`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(b, {
                                          __fromCanvasComponent: !0,
                                          children: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              },
                                              children: `Branding + Web design`,
                                            }),
                                          }),
                                          className: `framer-afdakx`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    s(`div`, {
                                      className: `framer-5r0kx3`,
                                      children: [
                                        a(v, {
                                          breakpoint: D,
                                          overrides: {
                                            arLfJNu6M: {
                                              children: a(i, {
                                                children: a(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                    "--framer-font-size": `12px`,
                                                    "--framer-text-color": `rgb(87, 87, 87)`,
                                                  },
                                                  children: `Year:`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: a(b, {
                                            __fromCanvasComponent: !0,
                                            children: a(i, {
                                              children: a(`p`, {
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
                                            className: `framer-1y7qq39`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(b, {
                                          __fromCanvasComponent: !0,
                                          children: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              },
                                              children: `2026`,
                                            }),
                                          }),
                                          className: `framer-33c8f9`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    s(`div`, {
                                      className: `framer-u11tqg`,
                                      children: [
                                        a(v, {
                                          breakpoint: D,
                                          overrides: {
                                            arLfJNu6M: {
                                              children: a(i, {
                                                children: a(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                    "--framer-font-size": `12px`,
                                                    "--framer-text-color": `rgb(87, 87, 87)`,
                                                  },
                                                  children: `Client:`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: a(b, {
                                            __fromCanvasComponent: !0,
                                            children: a(i, {
                                              children: a(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-text-color": `rgb(87, 87, 87)`,
                                                },
                                                children: `Client:`,
                                              }),
                                            }),
                                            className: `framer-1gabuxq`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(b, {
                                          __fromCanvasComponent: !0,
                                          children: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              },
                                              children: `Dmytro Shevaga`,
                                            }),
                                          }),
                                          className: `framer-1v7mniy`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                s(`div`, {
                                  className: `framer-8clhr6`,
                                  children: [
                                    a(v, {
                                      breakpoint: D,
                                      overrides: {
                                        arLfJNu6M: {
                                          children: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-text-color": `rgb(87, 87, 87)`,
                                              },
                                              children: `Project overview:`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: a(b, {
                                        __fromCanvasComponent: !0,
                                        children: a(i, {
                                          children: a(`p`, {
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
                                        className: `framer-xepp0m`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    a(v, {
                                      breakpoint: D,
                                      overrides: {
                                        arLfJNu6M: {
                                          children: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `20px`,
                                              },
                                              children: `Branding and Framer-built website for SheetSolved, an Excel automation startup, working within corporate constraints, but with a fresh, stylish execution.`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: a(b, {
                                        __fromCanvasComponent: !0,
                                        children: s(i, {
                                          children: [
                                            a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `24px`,
                                              },
                                              children: `Branding and Framer-built website for SheetSolved, an Excel automation startup, working within corporate constraints, `,
                                            }),
                                            a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `24px`,
                                              },
                                              children: `but with a fresh, stylish execution.`,
                                            }),
                                          ],
                                        }),
                                        className: `framer-m2liaz`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    s(H, {
                      __framer__animate: { transition: J },
                      __framer__animateOnce: !0,
                      __framer__enter: q,
                      __framer__exit: Y,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.16,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-da1yyg`,
                      layout: N,
                      children: [
                        s(`div`, {
                          className: `framer-illa7t`,
                          children: [
                            s(`div`, {
                              className: `framer-1iyeqje`,
                              children: [
                                a(v, {
                                  breakpoint: D,
                                  overrides: {
                                    arLfJNu6M: {
                                      children: a(i, {
                                        children: a(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-size": `12px`,
                                            "--framer-text-color": `rgb(87, 87, 87)`,
                                          },
                                          children: `First tries and iterations:`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: a(b, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: a(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                          "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                          "--framer-text-color": `rgb(87, 87, 87)`,
                                        },
                                        children: `First tries and iterations:`,
                                      }),
                                    }),
                                    className: `framer-nzey6m`,
                                    fonts: [`BI;Amiamie/Regular/v0`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                a(v, {
                                  breakpoint: D,
                                  overrides: {
                                    arLfJNu6M: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1184,
                                        intrinsicWidth: 1896,
                                        loading: h(
                                          (p?.y || 0) + 0 + 1383.2 + 0 + 0 + 0 + 0 + 0 + 22.4
                                        ),
                                        pixelHeight: 1184,
                                        pixelWidth: 1896,
                                        sizes: `calc(${p?.width || `100vw`} - 40px)`,
                                        src: `../../assets/images/5PRHvh7gtLXMkfH4wjvFzA6igw.png`,
                                        srcSet: `../../assets/images/5PRHvh7gtLXMkfH4wjvFzA6igw.png?scale-down-to=512&width=1896&height=1184 512w,../../assets/images/5PRHvh7gtLXMkfH4wjvFzA6igw.png?scale-down-to=1024&width=1896&height=1184 1024w,../../assets/images/5PRHvh7gtLXMkfH4wjvFzA6igw.png 1896w`,
                                      },
                                    },
                                  },
                                  children: a(T, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1184,
                                      intrinsicWidth: 1896,
                                      loading: h((p?.y || 0) + 0 + 805.8 + 0 + 0 + 0 + 0 + 27.2),
                                      pixelHeight: 1184,
                                      pixelWidth: 1896,
                                      src: `../../assets/images/5PRHvh7gtLXMkfH4wjvFzA6igw.png`,
                                      srcSet: `../../assets/images/5PRHvh7gtLXMkfH4wjvFzA6igw.png?scale-down-to=512&width=1896&height=1184 512w,../../assets/images/5PRHvh7gtLXMkfH4wjvFzA6igw.png?scale-down-to=1024&width=1896&height=1184 1024w,../../assets/images/5PRHvh7gtLXMkfH4wjvFzA6igw.png 1896w`,
                                    },
                                    className: `framer-gd2mfl`,
                                    "data-framer-name": `Artboard 3Ð±ÑÐ»Ð¸Ð¹`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                              ],
                            }),
                            s(`div`, {
                              className: `framer-1i7bvsj`,
                              children: [
                                a(v, {
                                  breakpoint: D,
                                  overrides: {
                                    arLfJNu6M: {
                                      children: a(i, {
                                        children: a(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-size": `12px`,
                                            "--framer-text-color": `rgb(87, 87, 87)`,
                                          },
                                          children: `Different sketches:`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: a(b, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: a(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                          "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                          "--framer-text-color": `rgb(87, 87, 87)`,
                                        },
                                        children: `Different sketches:`,
                                      }),
                                    }),
                                    className: `framer-1otf1sm`,
                                    fonts: [`BI;Amiamie/Regular/v0`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                a(v, {
                                  breakpoint: D,
                                  overrides: {
                                    arLfJNu6M: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 2337,
                                        intrinsicWidth: 4326,
                                        loading: h(
                                          (p?.y || 0) + 0 + 1383.2 + 0 + 0 + 0 + 261.4 + 0 + 22.4
                                        ),
                                        pixelHeight: 2337,
                                        pixelWidth: 4326,
                                        sizes: `calc(${p?.width || `100vw`} - 40px)`,
                                        src: `../../assets/images/cWSLTjF3eK5r1FuHhDBBXho1U.png`,
                                      },
                                    },
                                  },
                                  children: a(T, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 2337,
                                      intrinsicWidth: 4326,
                                      loading: h(
                                        (p?.y || 0) + 0 + 805.8 + 0 + 0 + 545.2 + 0 + 27.2
                                      ),
                                      pixelHeight: 2337,
                                      pixelWidth: 4326,
                                      src: `../../assets/images/cWSLTjF3eK5r1FuHhDBBXho1U.png`,
                                    },
                                    className: `framer-1lyurjj`,
                                    "data-framer-name": `Artboard 3 copyÐ±ÑÐ»Ð¸Ð¹`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                              ],
                            }),
                            s(`div`, {
                              className: `framer-104dkub`,
                              children: [
                                a(v, {
                                  breakpoint: D,
                                  overrides: {
                                    arLfJNu6M: {
                                      children: a(i, {
                                        children: a(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-size": `12px`,
                                            "--framer-text-color": `rgb(87, 87, 87)`,
                                          },
                                          children: `Final Result:`,
                                        }),
                                      }),
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                    },
                                  },
                                  children: a(b, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: a(`p`, {
                                        className: `framer-styles-preset-129xceh`,
                                        "data-styles-preset": `VKO6eNXZt`,
                                        dir: `auto`,
                                        children: `Final Result:`,
                                      }),
                                    }),
                                    className: `framer-1wcl436`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                a(v, {
                                  breakpoint: D,
                                  overrides: {
                                    arLfJNu6M: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1351,
                                        intrinsicWidth: 2627,
                                        loading: h(
                                          (p?.y || 0) + 0 + 1383.2 + 0 + 0 + 0 + 492.8 + 0 + 22.4
                                        ),
                                        pixelHeight: 1351,
                                        pixelWidth: 2627,
                                        sizes: `calc(${p?.width || `100vw`} - 40px)`,
                                        src: `../../assets/images/SIrALj72Z8iMXMoIwOGxuV2Evbc.png?width=2627&height=1351`,
                                        srcSet: `../../assets/images/SIrALj72Z8iMXMoIwOGxuV2Evbc.png?scale-down-to=512&width=2627&height=1351 512w,../../assets/images/SIrALj72Z8iMXMoIwOGxuV2Evbc.png?scale-down-to=1024&width=2627&height=1351 1024w,../../assets/images/SIrALj72Z8iMXMoIwOGxuV2Evbc.png 2048w,../../assets/images/SIrALj72Z8iMXMoIwOGxuV2Evbc.png?width=2627&height=1351 2627w`,
                                      },
                                    },
                                  },
                                  children: a(T, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1351,
                                      intrinsicWidth: 2627,
                                      loading: h(
                                        (p?.y || 0) + 0 + 805.8 + 0 + 0 + 1023.4 + 0 + 27.2
                                      ),
                                      pixelHeight: 1351,
                                      pixelWidth: 2627,
                                      src: `../../assets/images/SIrALj72Z8iMXMoIwOGxuV2Evbc.png?width=2627&height=1351`,
                                      srcSet: `../../assets/images/SIrALj72Z8iMXMoIwOGxuV2Evbc.png?scale-down-to=512&width=2627&height=1351 512w,../../assets/images/SIrALj72Z8iMXMoIwOGxuV2Evbc.png?scale-down-to=1024&width=2627&height=1351 1024w,../../assets/images/SIrALj72Z8iMXMoIwOGxuV2Evbc.png 2048w,../../assets/images/SIrALj72Z8iMXMoIwOGxuV2Evbc.png?width=2627&height=1351 2627w`,
                                    },
                                    className: `framer-xsnk8t`,
                                    "data-framer-name": `Artboard 3 copy 2Ð±ÑÐ»Ð¸Ð¹`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                              ],
                            }),
                            s(`div`, {
                              className: `framer-47e5bj`,
                              children: [
                                a(v, {
                                  breakpoint: D,
                                  overrides: {
                                    arLfJNu6M: {
                                      children: a(i, {
                                        children: a(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-size": `12px`,
                                            "--framer-text-color": `rgb(87, 87, 87)`,
                                          },
                                          children: `Logo construction`,
                                        }),
                                      }),
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                    },
                                  },
                                  children: a(b, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: a(`p`, {
                                        className: `framer-styles-preset-129xceh`,
                                        "data-styles-preset": `VKO6eNXZt`,
                                        dir: `auto`,
                                        children: `Logo construction`,
                                      }),
                                    }),
                                    className: `framer-aoo4bp`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                a(v, {
                                  breakpoint: D,
                                  overrides: {
                                    arLfJNu6M: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1350,
                                        intrinsicWidth: 2627,
                                        loading: h(
                                          (p?.y || 0) + 0 + 1383.2 + 0 + 0 + 0 + 715.2 + 0 + 22.4
                                        ),
                                        pixelHeight: 1350,
                                        pixelWidth: 2627,
                                        sizes: `calc(${p?.width || `100vw`} - 40px)`,
                                        src: `../../assets/images/91zYcJUiXUHS2rjAY3PfKUU.png?width=2627&height=1350`,
                                        srcSet: `../../assets/images/91zYcJUiXUHS2rjAY3PfKUU.png?scale-down-to=512&width=2627&height=1350 512w,../../assets/images/91zYcJUiXUHS2rjAY3PfKUU.png?scale-down-to=1024&width=2627&height=1350 1024w,../../assets/images/91zYcJUiXUHS2rjAY3PfKUU.png 2048w,../../assets/images/91zYcJUiXUHS2rjAY3PfKUU.png?width=2627&height=1350 2627w`,
                                      },
                                    },
                                  },
                                  children: a(T, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1350,
                                      intrinsicWidth: 2627,
                                      loading: h(
                                        (p?.y || 0) + 0 + 805.8 + 0 + 0 + 1480.6 + 0 + 27.2
                                      ),
                                      pixelHeight: 1350,
                                      pixelWidth: 2627,
                                      src: `../../assets/images/91zYcJUiXUHS2rjAY3PfKUU.png?width=2627&height=1350`,
                                      srcSet: `../../assets/images/91zYcJUiXUHS2rjAY3PfKUU.png?scale-down-to=512&width=2627&height=1350 512w,../../assets/images/91zYcJUiXUHS2rjAY3PfKUU.png?scale-down-to=1024&width=2627&height=1350 1024w,../../assets/images/91zYcJUiXUHS2rjAY3PfKUU.png 2048w,../../assets/images/91zYcJUiXUHS2rjAY3PfKUU.png?width=2627&height=1350 2627w`,
                                    },
                                    className: `framer-upmpun`,
                                    "data-framer-name": `Artboard 3 copy 2Ð±ÑÐ»Ð¸Ð¹`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                              ],
                            }),
                            a(v, {
                              breakpoint: D,
                              overrides: {
                                arLfJNu6M: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1440,
                                    intrinsicWidth: 2311,
                                    loading: h((p?.y || 0) + 0 + 1383.2 + 0 + 0 + 0 + 937.6),
                                    pixelHeight: 1440,
                                    pixelWidth: 2311,
                                    sizes: `calc(${p?.width || `100vw`} - 40px)`,
                                    src: `../../assets/images/XqhDP0GvXtsiTRHq49mk51kuWA.png?width=2311&height=1440`,
                                    srcSet: `../../assets/images/XqhDP0GvXtsiTRHq49mk51kuWA.png?scale-down-to=512&width=2311&height=1440 512w,../../assets/images/XqhDP0GvXtsiTRHq49mk51kuWA.png?scale-down-to=1024&width=2311&height=1440 1024w,../../assets/images/XqhDP0GvXtsiTRHq49mk51kuWA.png 2048w,../../assets/images/XqhDP0GvXtsiTRHq49mk51kuWA.png?width=2311&height=1440 2311w`,
                                  },
                                },
                              },
                              children: a(T, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 1440,
                                  intrinsicWidth: 2311,
                                  loading: h((p?.y || 0) + 0 + 805.8 + 0 + 0 + 1937.8),
                                  pixelHeight: 1440,
                                  pixelWidth: 2311,
                                  src: `../../assets/images/XqhDP0GvXtsiTRHq49mk51kuWA.png?width=2311&height=1440`,
                                  srcSet: `../../assets/images/XqhDP0GvXtsiTRHq49mk51kuWA.png?scale-down-to=512&width=2311&height=1440 512w,../../assets/images/XqhDP0GvXtsiTRHq49mk51kuWA.png?scale-down-to=1024&width=2311&height=1440 1024w,../../assets/images/XqhDP0GvXtsiTRHq49mk51kuWA.png 2048w,../../assets/images/XqhDP0GvXtsiTRHq49mk51kuWA.png?width=2311&height=1440 2311w`,
                                },
                                className: `framer-vt6yh`,
                                "data-framer-name": `ubu animacja`,
                                fitImageDimension: `height`,
                              }),
                            }),
                            a(v, {
                              breakpoint: D,
                              overrides: {
                                arLfJNu6M: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1440,
                                    intrinsicWidth: 3240,
                                    loading: h((p?.y || 0) + 0 + 1383.2 + 0 + 0 + 0 + 1175.6),
                                    pixelHeight: 1440,
                                    pixelWidth: 3240,
                                    sizes: `calc(${p?.width || `100vw`} - 40px)`,
                                    src: `../../assets/images/ktl5UH5AFDMm4JWqXWHLbyPbvg.png?width=3240&height=1440`,
                                    srcSet: `../../assets/images/ktl5UH5AFDMm4JWqXWHLbyPbvg.png?scale-down-to=512&width=3240&height=1440 512w,../../assets/images/ktl5UH5AFDMm4JWqXWHLbyPbvg.png?scale-down-to=1024&width=3240&height=1440 1024w,../../assets/images/ktl5UH5AFDMm4JWqXWHLbyPbvg.png 2048w,../../assets/images/ktl5UH5AFDMm4JWqXWHLbyPbvg.png?width=3240&height=1440 3240w`,
                                  },
                                },
                              },
                              children: a(T, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 1440,
                                  intrinsicWidth: 3240,
                                  loading: h((p?.y || 0) + 0 + 805.8 + 0 + 0 + 2454.8),
                                  pixelHeight: 1440,
                                  pixelWidth: 3240,
                                  src: `../../assets/images/ktl5UH5AFDMm4JWqXWHLbyPbvg.png?width=3240&height=1440`,
                                  srcSet: `../../assets/images/ktl5UH5AFDMm4JWqXWHLbyPbvg.png?scale-down-to=512&width=3240&height=1440 512w,../../assets/images/ktl5UH5AFDMm4JWqXWHLbyPbvg.png?scale-down-to=1024&width=3240&height=1440 1024w,../../assets/images/ktl5UH5AFDMm4JWqXWHLbyPbvg.png 2048w,../../assets/images/ktl5UH5AFDMm4JWqXWHLbyPbvg.png?width=3240&height=1440 3240w`,
                                },
                                className: `framer-6xqwo7`,
                                "data-framer-name": `PXL 20260623_1223075961`,
                                fitImageDimension: `height`,
                              }),
                            }),
                            a(v, {
                              breakpoint: D,
                              overrides: {
                                arLfJNu6M: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1440,
                                    intrinsicWidth: 2311,
                                    loading: h((p?.y || 0) + 0 + 1383.2 + 0 + 0 + 0 + 1351.6),
                                    pixelHeight: 1440,
                                    pixelWidth: 2311,
                                    sizes: `calc(${p?.width || `100vw`} - 40px)`,
                                    src: `../../assets/images/rEyiALezyniYiBPEllpA5pC2g.png?width=2311&height=1440`,
                                    srcSet: `../../assets/images/rEyiALezyniYiBPEllpA5pC2g.png?scale-down-to=512&width=2311&height=1440 512w,../../assets/images/rEyiALezyniYiBPEllpA5pC2g.png?scale-down-to=1024&width=2311&height=1440 1024w,../../assets/images/rEyiALezyniYiBPEllpA5pC2g.png 2048w,../../assets/images/rEyiALezyniYiBPEllpA5pC2g.png?width=2311&height=1440 2311w`,
                                  },
                                },
                              },
                              children: a(T, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 1440,
                                  intrinsicWidth: 2311,
                                  loading: h((p?.y || 0) + 0 + 805.8 + 0 + 0 + 2829.8),
                                  pixelHeight: 1440,
                                  pixelWidth: 2311,
                                  src: `../../assets/images/rEyiALezyniYiBPEllpA5pC2g.png?width=2311&height=1440`,
                                  srcSet: `../../assets/images/rEyiALezyniYiBPEllpA5pC2g.png?scale-down-to=512&width=2311&height=1440 512w,../../assets/images/rEyiALezyniYiBPEllpA5pC2g.png?scale-down-to=1024&width=2311&height=1440 1024w,../../assets/images/rEyiALezyniYiBPEllpA5pC2g.png 2048w,../../assets/images/rEyiALezyniYiBPEllpA5pC2g.png?width=2311&height=1440 2311w`,
                                },
                                className: `framer-4hvmp1`,
                                "data-framer-name": `Untitled-2`,
                                fitImageDimension: `height`,
                              }),
                            }),
                            a(E, {
                              children: a(C, {
                                className: `framer-1v4992d-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `mANa69myE`,
                                scopeId: `o9Tvh7Ah_`,
                                children: a(P, {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                  borderRadius: 0,
                                  bottomLeftRadius: 0,
                                  bottomRightRadius: 0,
                                  controls: !1,
                                  height: `100%`,
                                  id: `mANa69myE`,
                                  isMixedBorderRadius: !1,
                                  layoutId: `mANa69myE`,
                                  loop: !0,
                                  muted: !0,
                                  objectFit: `cover`,
                                  playing: !0,
                                  posterEnabled: !0,
                                  srcFile: `../../assets/misc/TmGqe7kWcaguIbMh4G0jwTbE.mp4`,
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
                            a(v, {
                              breakpoint: D,
                              overrides: {
                                arLfJNu6M: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1123,
                                    intrinsicWidth: 2311,
                                    loading: h((p?.y || 0) + 0 + 1383.2 + 0 + 0 + 0 + 1721.6),
                                    pixelHeight: 1123,
                                    pixelWidth: 2311,
                                    sizes: `calc(${p?.width || `100vw`} - 40px)`,
                                    src: `../../assets/images/8uf2xSdhdT06cPocARGOx0MMEjc.png?width=2311&height=1123`,
                                    srcSet: `../../assets/images/8uf2xSdhdT06cPocARGOx0MMEjc.png?scale-down-to=512&width=2311&height=1123 512w,../../assets/images/8uf2xSdhdT06cPocARGOx0MMEjc.png?scale-down-to=1024&width=2311&height=1123 1024w,../../assets/images/8uf2xSdhdT06cPocARGOx0MMEjc.png 2048w,../../assets/images/8uf2xSdhdT06cPocARGOx0MMEjc.png?width=2311&height=1123 2311w`,
                                  },
                                },
                              },
                              children: a(T, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 1123,
                                  intrinsicWidth: 2311,
                                  loading: h((p?.y || 0) + 0 + 805.8 + 0 + 0 + 3478.8),
                                  pixelHeight: 1123,
                                  pixelWidth: 2311,
                                  src: `../../assets/images/8uf2xSdhdT06cPocARGOx0MMEjc.png?width=2311&height=1123`,
                                  srcSet: `../../assets/images/8uf2xSdhdT06cPocARGOx0MMEjc.png?scale-down-to=512&width=2311&height=1123 512w,../../assets/images/8uf2xSdhdT06cPocARGOx0MMEjc.png?scale-down-to=1024&width=2311&height=1123 1024w,../../assets/images/8uf2xSdhdT06cPocARGOx0MMEjc.png 2048w,../../assets/images/8uf2xSdhdT06cPocARGOx0MMEjc.png?width=2311&height=1123 2311w`,
                                },
                                className: `framer-1q4c8x8`,
                                "data-framer-name": `Untitled-2`,
                                fitImageDimension: `height`,
                              }),
                            }),
                            a(v, {
                              breakpoint: D,
                              overrides: {
                                arLfJNu6M: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 5036,
                                    intrinsicWidth: 6708,
                                    loading: h((p?.y || 0) + 0 + 1383.2 + 0 + 0 + 0 + 1911.6),
                                    pixelHeight: 5036,
                                    pixelWidth: 6708,
                                    sizes: `calc(${p?.width || `100vw`} - 40px)`,
                                    src: `../../assets/images/F9RTTJ0SqTLA3xxJ19hGqjPKY0.png?width=6708&height=5036`,
                                    srcSet: `../../assets/images/F9RTTJ0SqTLA3xxJ19hGqjPKY0.png?scale-down-to=512&width=6708&height=5036 512w,../../assets/images/F9RTTJ0SqTLA3xxJ19hGqjPKY0.png?scale-down-to=1024&width=6708&height=5036 1024w,../../assets/images/F9RTTJ0SqTLA3xxJ19hGqjPKY0.png 2048w,../../assets/images/F9RTTJ0SqTLA3xxJ19hGqjPKY0.png?scale-down-to=4096&width=6708&height=5036 4096w,../../assets/images/F9RTTJ0SqTLA3xxJ19hGqjPKY0.png?width=6708&height=5036 6708w`,
                                  },
                                },
                              },
                              children: a(T, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 5036,
                                  intrinsicWidth: 6708,
                                  loading: h((p?.y || 0) + 0 + 805.8 + 0 + 0 + 3886.8),
                                  pixelHeight: 5036,
                                  pixelWidth: 6708,
                                  src: `../../assets/images/F9RTTJ0SqTLA3xxJ19hGqjPKY0.png?width=6708&height=5036`,
                                  srcSet: `../../assets/images/F9RTTJ0SqTLA3xxJ19hGqjPKY0.png?scale-down-to=512&width=6708&height=5036 512w,../../assets/images/F9RTTJ0SqTLA3xxJ19hGqjPKY0.png?scale-down-to=1024&width=6708&height=5036 1024w,../../assets/images/F9RTTJ0SqTLA3xxJ19hGqjPKY0.png 2048w,../../assets/images/F9RTTJ0SqTLA3xxJ19hGqjPKY0.png?scale-down-to=4096&width=6708&height=5036 4096w,../../assets/images/F9RTTJ0SqTLA3xxJ19hGqjPKY0.png?width=6708&height=5036 6708w`,
                                },
                                className: `framer-l5b7bi`,
                                "data-framer-name": `Untitled-2`,
                                fitImageDimension: `height`,
                              }),
                            }),
                            a(E, {
                              children: a(C, {
                                className: `framer-16l7i7b-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `qyiMhp35y`,
                                scopeId: `o9Tvh7Ah_`,
                                children: a(P, {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                  borderRadius: 0,
                                  bottomLeftRadius: 0,
                                  bottomRightRadius: 0,
                                  controls: !1,
                                  height: `100%`,
                                  id: `qyiMhp35y`,
                                  isMixedBorderRadius: !1,
                                  layoutId: `qyiMhp35y`,
                                  loop: !0,
                                  muted: !0,
                                  objectFit: `cover`,
                                  playing: !0,
                                  posterEnabled: !0,
                                  srcFile: `../../assets/misc/X3c0HWS2gZqpGPBVnKT88Mu0o.mp4`,
                                  srcType: `Upload`,
                                  srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                  startTime: 5.2,
                                  style: { width: `100%` },
                                  topLeftRadius: 0,
                                  topRightRadius: 0,
                                  volume: 25,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                        }),
                        F() &&
                          s(`div`, {
                            className: `framer-1hn0v0i hidden-1i18yu1`,
                            children: [
                              s(`div`, {
                                className: `framer-1h3fpso`,
                                children: [
                                  a(b, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: a(`p`, {
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
                                    className: `framer-8k543o`,
                                    fonts: [`BI;Amiamie/Regular/v0`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(b, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: a(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                          "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                        },
                                        children: `SheetSolved is a new Excel-automation startup for Polish SMEs. It had zero visual identity, no website, and no trust signals to approach corporate clients.`,
                                      }),
                                    }),
                                    className: `framer-zg2j8x`,
                                    fonts: [`BI;Amiamie/Regular/v0`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              s(`div`, {
                                className: `framer-596021`,
                                children: [
                                  a(b, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: a(`p`, {
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
                                    className: `framer-ulmg0a`,
                                    fonts: [`BI;Amiamie/Regular/v0`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(b, {
                                    __fromCanvasComponent: !0,
                                    children: s(i, {
                                      children: [
                                        a(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                          },
                                          children: `A complete brand system built around Saans typeface and a signature green palette. The logo uses two interlocking modules with a central bar, an abstract “S” that came from a grid of 3 sheets. Clean, technical, and instantly `,
                                        }),
                                        a(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                          },
                                          children: `associated with Excel.`,
                                        }),
                                      ],
                                    }),
                                    className: `framer-777edt`,
                                    fonts: [`BI;Amiamie/Regular/v0`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              s(`div`, {
                                className: `framer-1kp6rqn`,
                                children: [
                                  a(b, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: a(`p`, {
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
                                    className: `framer-5tlzgm`,
                                    fonts: [`BI;Amiamie/Regular/v0`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(b, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: s(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                          "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                        },
                                        children: [
                                          a(`strong`, { children: `0 → 1.` }),
                                          ` A launch-ready brand and live website. The founder now has a professional presence to pitch SMEs.`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-y2607r`,
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
                    a(x, {
                      href: `https://sheetsolved.eu/`,
                      motionChild: !0,
                      nodeId: `tNUIBlWe7`,
                      openInNewTab: !0,
                      scopeId: `o9Tvh7Ah_`,
                      children: a(U, {
                        __framer__animate: { transition: J },
                        __framer__animateOnce: !0,
                        __framer__enter: q,
                        __framer__exit: Y,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.16,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: `framer-11w2xw8 framer-ottxys`,
                        layout: N,
                        children: a(v, {
                          breakpoint: D,
                          overrides: {
                            arLfJNu6M: {
                              children: a(i, {
                                children: a(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                    "--framer-font-size": `24px`,
                                  },
                                  children: `Visit website`,
                                }),
                              }),
                            },
                          },
                          children: a(b, {
                            __fromCanvasComponent: !0,
                            children: a(i, {
                              children: a(`p`, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                  "--framer-font-size": `32px`,
                                },
                                children: `Visit website`,
                              }),
                            }),
                            className: `framer-ekot52`,
                            fonts: [`BI;Amiamie/Regular/v0`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                    }),
                    s(H, {
                      __framer__animate: { transition: J },
                      __framer__animateOnce: !0,
                      __framer__enter: q,
                      __framer__exit: Y,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.16,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-1yvqnlx`,
                      layout: N,
                      children: [
                        s(`div`, {
                          className: `framer-10d8erd`,
                          children: [
                            a(x, {
                              href: { webPageId: `TwvfQk14J` },
                              motionChild: !0,
                              nodeId: `sP_iWlNle`,
                              openInNewTab: !1,
                              scopeId: `o9Tvh7Ah_`,
                              children: a(l.a, {
                                className: `framer-1kzn3cv framer-ottxys`,
                                children: a(E, {
                                  children: a(C, {
                                    className: `framer-1u95ttn-container`,
                                    isModuleExternal: !0,
                                    nodeId: `oM0_I2bEZ`,
                                    scopeId: `o9Tvh7Ah_`,
                                    children: a(M, {
                                      backgroundColor: `rgba(0, 0, 0, 0)`,
                                      borderRadius: 0,
                                      bottomLeftRadius: 0,
                                      bottomRightRadius: 0,
                                      controls: !1,
                                      height: `100%`,
                                      id: `oM0_I2bEZ`,
                                      isMixedBorderRadius: !1,
                                      layoutId: `oM0_I2bEZ`,
                                      loop: !0,
                                      muted: !0,
                                      objectFit: `cover`,
                                      playing: !0,
                                      posterEnabled: !1,
                                      srcFile: `../../assets/misc/1SBUPFmivlWB4AcWR8lgsZvk.mp4`,
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
                            s(`div`, {
                              className: `framer-lz3jdf`,
                              children: [
                                a(b, {
                                  __fromCanvasComponent: !0,
                                  children: a(i, {
                                    children: a(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                        "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                        "--framer-font-size": `18px`,
                                        "--framer-letter-spacing": `-0.02em`,
                                        "--framer-line-height": `1.6em`,
                                      },
                                      children: `Warsaw museum of dance and movement `,
                                    }),
                                  }),
                                  className: `framer-8e7h0s`,
                                  fonts: [`BI;Amiamie/Regular/v0`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(b, {
                                  __fromCanvasComponent: !0,
                                  children: a(i, {
                                    children: a(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                        "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                        "--framer-letter-spacing": `-0.02em`,
                                        "--framer-line-height": `1.6em`,
                                        "--framer-text-color": `rgb(102, 102, 102)`,
                                      },
                                      children: `Visual Identity`,
                                    }),
                                  }),
                                  className: `framer-yhv88e`,
                                  fonts: [`BI;Amiamie/Regular/v0`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        s(`div`, {
                          className: `framer-1s98nys`,
                          children: [
                            a(x, {
                              href: { webPageId: `YN_8Vp9ZG` },
                              motionChild: !0,
                              nodeId: `pftvWZH7i`,
                              openInNewTab: !1,
                              scopeId: `o9Tvh7Ah_`,
                              children: a(v, {
                                breakpoint: D,
                                overrides: {
                                  arLfJNu6M: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1034,
                                      intrinsicWidth: 1554,
                                      loading: h((p?.y || 0) + 0 + 3798.6 + 0 + 430 + 0 + 0),
                                      pixelHeight: 1034,
                                      pixelWidth: 1554,
                                      sizes: `calc(${p?.width || `100vw`} - 40px)`,
                                      src: `../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png?width=1554&height=1034`,
                                      srcSet: `../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png 512w,../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png?scale-down-to=1024&width=1554&height=1034 1024w,../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png?width=1554&height=1034 1554w`,
                                    },
                                  },
                                },
                                children: a(T, {
                                  as: `a`,
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1034,
                                    intrinsicWidth: 1554,
                                    loading: h((p?.y || 0) + 0 + 5622 + 0 + 0 + 0),
                                    pixelHeight: 1034,
                                    pixelWidth: 1554,
                                    sizes: `max((${p?.width || `100vw`} - 100px) / 3, 1px)`,
                                    src: `../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png?width=1554&height=1034`,
                                    srcSet: `../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png 512w,../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png?scale-down-to=1024&width=1554&height=1034 1024w,../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png?width=1554&height=1034 1554w`,
                                  },
                                  className: `framer-zf5s3j framer-ottxys`,
                                }),
                              }),
                            }),
                            s(`div`, {
                              className: `framer-1ovkt03`,
                              children: [
                                a(b, {
                                  __fromCanvasComponent: !0,
                                  children: a(i, {
                                    children: a(`p`, {
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
                                  className: `framer-ehy3fs`,
                                  fonts: [`BI;Amiamie/Regular/v0`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(b, {
                                  __fromCanvasComponent: !0,
                                  children: a(i, {
                                    children: a(`p`, {
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
                                  className: `framer-417mlu`,
                                  fonts: [`BI;Amiamie/Regular/v0`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        s(`div`, {
                          className: `framer-t2z57r`,
                          children: [
                            a(x, {
                              href: { webPageId: `M2JH_EIJa` },
                              motionChild: !0,
                              nodeId: `GwtDlTmxv`,
                              openInNewTab: !1,
                              scopeId: `o9Tvh7Ah_`,
                              children: a(l.a, {
                                className: `framer-mbs076 framer-ottxys`,
                                children: a(E, {
                                  children: a(C, {
                                    className: `framer-1c6hdkx-container`,
                                    isModuleExternal: !0,
                                    nodeId: `IHRg5qn1e`,
                                    scopeId: `o9Tvh7Ah_`,
                                    children: a(M, {
                                      backgroundColor: `rgba(0, 0, 0, 0)`,
                                      borderRadius: 0,
                                      bottomLeftRadius: 0,
                                      bottomRightRadius: 0,
                                      controls: !1,
                                      height: `100%`,
                                      id: `IHRg5qn1e`,
                                      isMixedBorderRadius: !1,
                                      layoutId: `IHRg5qn1e`,
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
                            s(`div`, {
                              className: `framer-1cm3wrh`,
                              children: [
                                a(b, {
                                  __fromCanvasComponent: !0,
                                  children: a(i, {
                                    children: a(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                        "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                        "--framer-font-size": `18px`,
                                        "--framer-letter-spacing": `-0.02em`,
                                        "--framer-line-height": `1.6em`,
                                      },
                                      children: `Re:Move Event`,
                                    }),
                                  }),
                                  className: `framer-1pymtne`,
                                  fonts: [`BI;Amiamie/Regular/v0`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(b, {
                                  __fromCanvasComponent: !0,
                                  children: a(i, {
                                    children: a(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                        "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                        "--framer-letter-spacing": `-0.02em`,
                                        "--framer-line-height": `1.6em`,
                                        "--framer-text-color": `rgb(102, 102, 102)`,
                                      },
                                      children: `Key visual`,
                                    }),
                                  }),
                                  className: `framer-1pt8mob`,
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
                    a(v, {
                      breakpoint: D,
                      overrides: { arLfJNu6M: { y: (p?.y || 0) + 0 + 4986.6 } },
                      children: a(E, {
                        height: 390,
                        width: p?.width || `100vw`,
                        y: (p?.y || 0) + 0 + 6102,
                        children: a(ge, {
                          __framer__animate: { transition: X },
                          __framer__animateOnce: !0,
                          __framer__enter: we,
                          __framer__exit: Te,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.12,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-yk54pq-container`,
                          layout: N,
                          nodeId: `O_lDDzm6E`,
                          rendersWithMotion: !0,
                          scopeId: `o9Tvh7Ah_`,
                          children: a(v, {
                            breakpoint: D,
                            overrides: { arLfJNu6M: { variant: K(`bC5BwOq5u`) } },
                            children: a(A, {
                              height: `100%`,
                              id: `O_lDDzm6E`,
                              layoutId: `O_lDDzm6E`,
                              style: { width: `100%` },
                              variant: K(`Q4FA0ndjW`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    I() &&
                      s(l.div, {
                        className: `framer-mkmhc2 hidden-flmeye`,
                        layout: N,
                        children: [
                          s(`div`, {
                            className: `framer-uhjxxr`,
                            children: [
                              a(b, {
                                __fromCanvasComponent: !0,
                                children: a(i, {
                                  children: a(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      "--framer-font-size": `12px`,
                                      "--framer-text-color": `rgb(87, 87, 87)`,
                                    },
                                    children: `Problem:`,
                                  }),
                                }),
                                className: `framer-q72yng`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(b, {
                                __fromCanvasComponent: !0,
                                children: a(i, {
                                  children: a(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      "--framer-font-size": `20px`,
                                    },
                                    children: `SheetSolved is a new Excel-automation startup for Polish SMEs. It had zero visual identity, no website, and no trust signals to approach corporate clients.`,
                                  }),
                                }),
                                className: `framer-p5pmjx`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-icpjy7`,
                            children: [
                              a(b, {
                                __fromCanvasComponent: !0,
                                children: a(i, {
                                  children: a(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      "--framer-font-size": `12px`,
                                      "--framer-text-color": `rgb(87, 87, 87)`,
                                    },
                                    children: `Solution:`,
                                  }),
                                }),
                                className: `framer-49dvdd`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(b, {
                                __fromCanvasComponent: !0,
                                children: s(i, {
                                  children: [
                                    a(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                        "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                        "--framer-font-size": `20px`,
                                      },
                                      children: `A complete brand system built around Saans typeface and a signature green palette. The logo uses two interlocking modules with a central bar, an abstract “S” that came from a grid of 3 sheets. Clean, technical, and instantly `,
                                    }),
                                    a(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                        "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                        "--framer-font-size": `20px`,
                                      },
                                      children: `associated with Excel.`,
                                    }),
                                  ],
                                }),
                                className: `framer-1m0nvi3`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-2n5t17`,
                            children: [
                              a(b, {
                                __fromCanvasComponent: !0,
                                children: a(i, {
                                  children: a(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      "--framer-font-size": `12px`,
                                      "--framer-text-color": `rgb(87, 87, 87)`,
                                    },
                                    children: `Result:`,
                                  }),
                                }),
                                className: `framer-1u76kfr`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(b, {
                                __fromCanvasComponent: !0,
                                children: a(i, {
                                  children: s(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      "--framer-font-size": `20px`,
                                    },
                                    children: [
                                      a(`strong`, { children: `0 → 1.` }),
                                      ` A launch-ready brand and live website. The founder now has a professional presence to pitch SMEs.`,
                                    ],
                                  }),
                                }),
                                className: `framer-1lj1xl6`,
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
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-racdu.framer-ottxys, .framer-racdu .framer-ottxys { display: block; }`,
        `.framer-racdu.framer-flmeye { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-racdu .framer-13v0vng { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-racdu .framer-evnccp-container, .framer-racdu .framer-1m5azy7-container, .framer-racdu .framer-1v4992d-container, .framer-racdu .framer-16l7i7b-container, .framer-racdu .framer-yk54pq-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-racdu .framer-1bbiali, .framer-racdu .framer-lz3jdf, .framer-racdu .framer-1ovkt03, .framer-racdu .framer-1cm3wrh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-racdu .framer-ged2dj { align-content: center; align-items: center; background-color: #228c22; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-racdu .framer-14pbzeb, .framer-racdu .framer-9pg0uk { height: 42px; position: relative; width: 50px; }`,
        `.framer-racdu .framer-19kip9l, .framer-racdu .framer-1c330eb { height: 25px; left: 8px; position: absolute; top: 17px; width: 42px; }`,
        `.framer-racdu .framer-mdtiub, .framer-racdu .framer-1af9e2k { height: 9px; left: 17px; position: absolute; top: 17px; width: 17px; }`,
        `.framer-racdu .framer-b05278, .framer-racdu .framer-iokm3c { height: 25px; left: 0px; position: absolute; top: 0px; width: 42px; }`,
        `.framer-racdu .framer-6thjln { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 1px; }`,
        `.framer-racdu .framer-1ko148u, .framer-racdu .framer-178xiwb, .framer-racdu .framer-afdakx, .framer-racdu .framer-1y7qq39, .framer-racdu .framer-33c8f9, .framer-racdu .framer-1gabuxq, .framer-racdu .framer-1v7mniy, .framer-racdu .framer-xepp0m, .framer-racdu .framer-nzey6m, .framer-racdu .framer-1otf1sm, .framer-racdu .framer-1wcl436, .framer-racdu .framer-aoo4bp, .framer-racdu .framer-8k543o, .framer-racdu .framer-ulmg0a, .framer-racdu .framer-5tlzgm, .framer-racdu .framer-ekot52, .framer-racdu .framer-q72yng, .framer-racdu .framer-49dvdd, .framer-racdu .framer-1u76kfr { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-racdu .framer-1c43jvn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-racdu .framer-sjakrj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-racdu .framer-j07ls6, .framer-racdu .framer-5r0kx3, .framer-racdu .framer-u11tqg, .framer-racdu .framer-1h3fpso { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-racdu .framer-8clhr6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-racdu .framer-m2liaz { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 790px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-racdu .framer-da1yyg { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 53px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-racdu .framer-illa7t { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-racdu .framer-1iyeqje, .framer-racdu .framer-1i7bvsj, .framer-racdu .framer-104dkub, .framer-racdu .framer-47e5bj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-racdu .framer-gd2mfl, .framer-racdu .framer-1lyurjj, .framer-racdu .framer-xsnk8t, .framer-racdu .framer-upmpun, .framer-racdu .framer-6xqwo7, .framer-racdu .framer-4hvmp1, .framer-racdu .framer-1q4c8x8, .framer-racdu .framer-l5b7bi { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-racdu .framer-vt6yh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 40px; position: relative; width: 100%; }`,
        `.framer-racdu .framer-1hn0v0i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; top: 40px; width: min-content; z-index: 1; }`,
        `.framer-racdu .framer-zg2j8x { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 309px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-racdu .framer-596021, .framer-racdu .framer-1kp6rqn { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; }`,
        `.framer-racdu .framer-777edt, .framer-racdu .framer-y2607r, .framer-racdu .framer-8e7h0s, .framer-racdu .framer-yhv88e, .framer-racdu .framer-ehy3fs, .framer-racdu .framer-417mlu, .framer-racdu .framer-1pymtne, .framer-racdu .framer-1pt8mob, .framer-racdu .framer-p5pmjx, .framer-racdu .framer-1m0nvi3, .framer-racdu .framer-1lj1xl6 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-racdu .framer-11w2xw8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-racdu .framer-1yvqnlx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-racdu .framer-10d8erd, .framer-racdu .framer-1s98nys, .framer-racdu .framer-t2z57r { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-racdu .framer-1kzn3cv, .framer-racdu .framer-mbs076 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-racdu .framer-1u95ttn-container, .framer-racdu .framer-1c6hdkx-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-racdu .framer-zf5s3j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 489px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-racdu .framer-mkmhc2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 10px 0px 10px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-racdu .framer-uhjxxr, .framer-racdu .framer-icpjy7, .framer-racdu .framer-2n5t17 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        ...L,
        `@media (max-width: 1199.98px) { .framer-racdu.framer-flmeye { gap: 40px; width: 390px; } .framer-racdu .framer-13v0vng { order: 0; } .framer-racdu .framer-6thjln { padding: 0px; } .framer-racdu .framer-1ko148u { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; } .framer-racdu .framer-sjakrj, .framer-racdu .framer-8clhr6 { padding: 0px 10px 0px 10px; } .framer-racdu .framer-m2liaz { width: 100%; } .framer-racdu .framer-da1yyg { flex-direction: column; order: 2; } .framer-racdu .framer-illa7t, .framer-racdu .framer-10d8erd, .framer-racdu .framer-1s98nys, .framer-racdu .framer-t2z57r { flex: none; width: 100%; } .framer-racdu .framer-11w2xw8 { order: 3; } .framer-racdu .framer-1yvqnlx { flex-direction: column; order: 4; } .framer-racdu .framer-yk54pq-container { order: 5; } .framer-racdu .framer-mkmhc2 { order: 1; }}`,
      ],
      `framer-racdu`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 7636, width: 1200 }),
    D(
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
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
          ],
        },
        ...z,
        ...B,
        ...W,
        ...he,
        ...le(I),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([O(k, {}, t), O(A, {}, t)])) }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `Framero9Tvh7Ah_`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `7636`,
            framerScrollSections: `false`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"arLfJNu6M":{"layout":["fixed","auto"]}}}`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, ve as queryParamNames };
//# sourceMappingURL=O_LBKVv_qwJkpBtDnv-MdhOX7jiqsr6rZ0T6I7llOPM.DJHQ5UT-.mjs.map
