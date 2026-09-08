import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  N as i,
  c as a,
  g as o,
  k as ee,
  l as s,
  o as c,
  v as te,
} from "./react.D20wc1Tc.mjs";
import { S as l, a as ne, r as re, t as ie } from "./motion.jtMCvOiK.mjs";
import {
  $ as u,
  A as d,
  J as ae,
  L as f,
  M as p,
  S as m,
  X as oe,
  Z as se,
  a as h,
  ct as g,
  et as ce,
  f as _,
  h as v,
  lt as y,
  n as b,
  ot as x,
  s as le,
  t as S,
  tt as ue,
  v as C,
  w,
} from "./framer.jQONGl1Q.mjs";
import { a as T, i as de, o as E, r as D } from "./shared-lib.B1UR4gSL.mjs";
import fe, { t as O } from "./PdPMCaHn99OO0DWvSIAmKRDf5ymV-w3rK1qL5DrKwA8.Bi1X6jnD.mjs";
var k, A, j, M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, pe, $, me;
e(() => {
  (c(),
    f(),
    ie(),
    n(),
    E(),
    de(),
    O(),
    (k = d(T)),
    (A = y(b)),
    (j = y(l.div)),
    (M = g(l.div)),
    (N = d(D)),
    (P = g(b)),
    (F = { DfejLC7Ze: `(min-width: 1200px)`, s2J4QhUEX: `(max-width: 1199.98px)` }),
    (I = []),
    (L = `framer-JoQ1L`),
    (R = { DfejLC7Ze: `framer-v-1sacag4`, s2J4QhUEX: `framer-v-osmjvw` }),
    (z = (e, t, n) => (e && t ? `position` : n)),
    (B = {
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
    (V = {
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
    (H = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (U = {
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
    (W = {
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
    (G = {
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
    (K = { delay: 0, duration: 0.7, ease: [0.22, 1, 0.36, 1], type: `tween` }),
    (q = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: K,
      x: 0,
      y: 28,
    }),
    (J = {
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
    (Y = { delay: 0, duration: 0.65, ease: [0.22, 1, 0.36, 1], type: `tween` }),
    (X = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Y,
      x: 0,
      y: 20,
    }),
    (Z = { Desktop: `DfejLC7Ze`, Phone: `s2J4QhUEX` }),
    (Q = ({ value: e }) =>
      u()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (pe = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `DfejLC7Ze`,
    })),
    ($ = x(
      o(function (e, n) {
        let o = r(null),
          c = n ?? o,
          ie = te(),
          { activeLocale: u, setLocale: d } = ce(),
          f = ae(),
          { style: g, className: y, layoutId: b, variant: x, ...C } = pe(e);
        ue(t(() => fe({}, u), [u]));
        let [w, de] = se(x, F, !1),
          E = m(L),
          O = ee(h)?.isLayoutTemplate,
          k = !!ee(ne)?.transition?.layout,
          N = z(O, k);
        return (
          oe({}),
          a(h.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: Z,
              primaryVariantId: `DfejLC7Ze`,
              variantClassNames: R,
            },
            children: s(re, {
              id: b ?? ie,
              children: [
                a(Q, { value: `html body { background: rgb(255, 255, 255); }` }),
                s(l.div, {
                  ...C,
                  className: m(E, `framer-1sacag4`, y),
                  ref: c,
                  style: { ...g },
                  children: [
                    a(S, {
                      height: 59,
                      width: f?.width || `100vw`,
                      y: (f?.y || 0) + 0 + 0,
                      children: a(A, {
                        animate: B,
                        className: `framer-15767z6-container`,
                        "data-framer-appear-id": `15767z6`,
                        initial: V,
                        layout: N,
                        nodeId: `g6IZnm0js`,
                        optimized: !0,
                        rendersWithMotion: !0,
                        scopeId: `CsfUvEijD`,
                        children: a(_, {
                          breakpoint: w,
                          overrides: { s2J4QhUEX: { variant: H(`tnNrPT_eu`) } },
                          children: a(T, {
                            height: `100%`,
                            id: `g6IZnm0js`,
                            layoutId: `g6IZnm0js`,
                            style: { width: `100%` },
                            variant: H(`N1Y2xUv_c`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    s(j, {
                      animate: U,
                      className: `framer-1wror4p`,
                      "data-framer-appear-id": `1wror4p`,
                      initial: W,
                      layout: N,
                      optimized: !0,
                      children: [
                        a(_, {
                          breakpoint: w,
                          overrides: {
                            s2J4QhUEX: {
                              children: a(i, {
                                children: a(`h2`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                    "--framer-font-size": `64px`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `0.9em`,
                                    "--framer-text-alignment": `left`,
                                  },
                                  children: `About me`,
                                }),
                              }),
                            },
                          },
                          children: a(v, {
                            __fromCanvasComponent: !0,
                            children: a(i, {
                              children: a(`h2`, {
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
                            className: `framer-w43ct4`,
                            fonts: [`BI;Amiamie/Regular/v0`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        a(_, {
                          breakpoint: w,
                          overrides: {
                            s2J4QhUEX: {
                              children: a(i, {
                                children: a(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                    "--framer-font-size": `24px`,
                                  },
                                  children: `Typography is where I start. Not as decoration, but as the actual engine of a project — it's a grid that dictates every shape, a single letterform that becomes a whole identity. I'd rather spend three weeks perfecting a system than one week making something that merely looks finished. That's the kind of designer I am: less interested in trends, more interested in whether the logic holds up when you look closely.`,
                                }),
                              }),
                            },
                          },
                          children: a(v, {
                            __fromCanvasComponent: !0,
                            children: a(i, {
                              children: a(`p`, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                  "--framer-font-size": `40px`,
                                },
                                children: `Typography is where I start. Not as decoration, but as the actual engine of a project — it's a grid that dictates every shape, a single letterform that becomes a whole identity. I'd rather spend three weeks perfecting a system than one week making something that merely looks finished. That's the kind of designer I am: less interested in trends, more interested in whether the logic holds up when you look closely.`,
                              }),
                            }),
                            className: `framer-zae35o`,
                            fonts: [`BI;Amiamie/Regular/v0`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    s(l.div, {
                      className: `framer-1urwwmn`,
                      layout: N,
                      children: [
                        s(M, {
                          __framer__animate: { transition: K },
                          __framer__animateOnce: !0,
                          __framer__enter: G,
                          __framer__exit: q,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.16,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1a9yhg0`,
                          children: [
                            a(_, {
                              breakpoint: w,
                              overrides: {
                                s2J4QhUEX: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 4228,
                                    intrinsicWidth: 3456,
                                    loading: p((f?.y || 0) + 0 + 362.6 + 0 + 0 + 0 + 0),
                                    pixelHeight: 4228,
                                    pixelWidth: 3456,
                                    sizes: `340.0416px`,
                                    src: `../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg?width=3456&height=4228`,
                                    srcSet: `../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg 837w,../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg?scale-down-to=2048&width=3456&height=4228 1674w,../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg?scale-down-to=4096&width=3456&height=4228 3348w,../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg?width=3456&height=4228 3456w`,
                                  },
                                },
                              },
                              children: a(le, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 4228,
                                  intrinsicWidth: 3456,
                                  loading: p((f?.y || 0) + 0 + 589 + 0 + 0 + 96.5),
                                  pixelHeight: 4228,
                                  pixelWidth: 3456,
                                  sizes: `267.2923px`,
                                  src: `../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg?width=3456&height=4228`,
                                  srcSet: `../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg 837w,../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg?scale-down-to=2048&width=3456&height=4228 1674w,../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg?scale-down-to=4096&width=3456&height=4228 3348w,../../assets/images/Rj1qeQOeefFaAhfVvneggTY.jpg?width=3456&height=4228 3456w`,
                                },
                                className: `framer-yxfx3i`,
                                "data-framer-name": `Photo 32523423`,
                                fitImageDimension: `width`,
                              }),
                            }),
                            s(`div`, {
                              className: `framer-15d1nnl`,
                              children: [
                                s(`div`, {
                                  className: `framer-1m6xxqg`,
                                  children: [
                                    s(`div`, {
                                      className: `framer-bhj45z`,
                                      children: [
                                        a(_, {
                                          breakpoint: w,
                                          overrides: {
                                            s2J4QhUEX: {
                                              children: a(i, {
                                                children: a(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                    "--framer-font-size": `12px`,
                                                    "--framer-text-color": `rgb(87, 87, 87)`,
                                                  },
                                                  children: `Where I am:`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: a(v, {
                                            __fromCanvasComponent: !0,
                                            children: a(i, {
                                              children: a(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `20px`,
                                                  "--framer-text-color": `rgb(87, 87, 87)`,
                                                },
                                                children: `Where I am:`,
                                              }),
                                            }),
                                            className: `framer-1updi10`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(_, {
                                          breakpoint: w,
                                          overrides: {
                                            s2J4QhUEX: {
                                              children: a(i, {
                                                children: a(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  },
                                                  children: `Currently finishing my design education in Kraków, looking for job opportunities in branding and editorial design.`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: a(v, {
                                            __fromCanvasComponent: !0,
                                            children: a(i, {
                                              children: a(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `24px`,
                                                },
                                                children: `Currently finishing my design education in Kraków, looking for job opportunities in branding and editorial design.`,
                                              }),
                                            }),
                                            className: `framer-n93nk2`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    s(`div`, {
                                      className: `framer-1rgnkcp`,
                                      children: [
                                        a(_, {
                                          breakpoint: w,
                                          overrides: {
                                            s2J4QhUEX: {
                                              children: a(i, {
                                                children: a(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                    "--framer-font-size": `12px`,
                                                    "--framer-text-color": `rgb(87, 87, 87)`,
                                                  },
                                                  children: `What I like:`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: a(v, {
                                            __fromCanvasComponent: !0,
                                            children: a(i, {
                                              children: a(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `20px`,
                                                  "--framer-text-color": `rgb(87, 87, 87)`,
                                                },
                                                children: `What I like:`,
                                              }),
                                            }),
                                            className: `framer-6b688t`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(_, {
                                          breakpoint: w,
                                          overrides: {
                                            s2J4QhUEX: {
                                              children: a(i, {
                                                children: a(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  },
                                                  children: `I’m drawn to projects where typography and system-thinking meet — whether that’s a book design or a logo built from a strict grid.`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: a(v, {
                                            __fromCanvasComponent: !0,
                                            children: a(i, {
                                              children: a(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `24px`,
                                                },
                                                children: `I’m drawn to projects where typography and system-thinking meet — whether that’s a book design or a logo built from a strict grid.`,
                                              }),
                                            }),
                                            className: `framer-z53q9u`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                s(`div`, {
                                  className: `framer-xz01ek`,
                                  children: [
                                    s(`div`, {
                                      className: `framer-umb0l2`,
                                      children: [
                                        a(_, {
                                          breakpoint: w,
                                          overrides: {
                                            s2J4QhUEX: {
                                              children: a(i, {
                                                children: a(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                    "--framer-font-size": `12px`,
                                                    "--framer-text-color": `rgb(87, 87, 87)`,
                                                  },
                                                  children: `How I work:`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: a(v, {
                                            __fromCanvasComponent: !0,
                                            children: a(i, {
                                              children: a(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `20px`,
                                                  "--framer-text-color": `rgb(87, 87, 87)`,
                                                },
                                                children: `How I work:`,
                                              }),
                                            }),
                                            className: `framer-o25khv`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(_, {
                                          breakpoint: w,
                                          overrides: {
                                            s2J4QhUEX: {
                                              children: a(i, {
                                                children: a(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  },
                                                  children: `I like starting from constraints — a grid, a rule, a material limitation and seeing how far a concept can be pushed within them.`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: a(v, {
                                            __fromCanvasComponent: !0,
                                            children: a(i, {
                                              children: a(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `24px`,
                                                },
                                                children: `I like starting from constraints — a grid, a rule, a material limitation and seeing how far a concept can be pushed within them.`,
                                              }),
                                            }),
                                            className: `framer-1p7j86a`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    s(`div`, {
                                      className: `framer-1x63qwp`,
                                      children: [
                                        a(_, {
                                          breakpoint: w,
                                          overrides: {
                                            s2J4QhUEX: {
                                              children: a(i, {
                                                children: a(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                    "--framer-font-size": `12px`,
                                                    "--framer-text-color": `rgb(87, 87, 87)`,
                                                  },
                                                  children: `I am working with:`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: a(v, {
                                            __fromCanvasComponent: !0,
                                            children: a(i, {
                                              children: a(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `20px`,
                                                  "--framer-text-color": `rgb(87, 87, 87)`,
                                                },
                                                children: `I am working with:`,
                                              }),
                                            }),
                                            className: `framer-hetwmq`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(`div`, {
                                          className: `framer-13euukp`,
                                          children: s(`div`, {
                                            className: `framer-1itdhk5`,
                                            children: [
                                              a(_, {
                                                breakpoint: w,
                                                overrides: {
                                                  s2J4QhUEX: {
                                                    children: s(i, {
                                                      children: [
                                                        a(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                          },
                                                          children: `Visual identities`,
                                                        }),
                                                        a(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                          },
                                                          children: `Web design`,
                                                        }),
                                                      ],
                                                    }),
                                                  },
                                                },
                                                children: a(v, {
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
                                                        children: `Visual identities`,
                                                      }),
                                                      a(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                          "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                          "--framer-font-size": `24px`,
                                                        },
                                                        children: `Web design`,
                                                      }),
                                                    ],
                                                  }),
                                                  className: `framer-1din19x`,
                                                  fonts: [`BI;Amiamie/Regular/v0`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              a(_, {
                                                breakpoint: w,
                                                overrides: {
                                                  s2J4QhUEX: {
                                                    children: s(i, {
                                                      children: [
                                                        a(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                          },
                                                          children: `Editorial`,
                                                        }),
                                                        a(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                          },
                                                          children: `Packaging`,
                                                        }),
                                                      ],
                                                    }),
                                                  },
                                                },
                                                children: a(v, {
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
                                                        children: `Editorial`,
                                                      }),
                                                      a(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                          "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                          "--framer-font-size": `24px`,
                                                        },
                                                        children: `Packaging`,
                                                      }),
                                                    ],
                                                  }),
                                                  className: `framer-cflw4d`,
                                                  fonts: [`BI;Amiamie/Regular/v0`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
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
                        a(_, {
                          breakpoint: w,
                          overrides: { s2J4QhUEX: { y: (f?.y || 0) + 0 + 362.6 + 0 + 1185.6 } },
                          children: a(S, {
                            height: 390,
                            width: f?.width || `100vw`,
                            y: (f?.y || 0) + 0 + 589 + 0 + 600,
                            children: a(P, {
                              __framer__animate: { transition: Y },
                              __framer__animateOnce: !0,
                              __framer__enter: J,
                              __framer__exit: X,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.12,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1pxyqzk-container`,
                              nodeId: `NxOdB9rOs`,
                              rendersWithMotion: !0,
                              scopeId: `CsfUvEijD`,
                              children: a(_, {
                                breakpoint: w,
                                overrides: { s2J4QhUEX: { variant: H(`bC5BwOq5u`) } },
                                children: a(D, {
                                  height: `100%`,
                                  id: `NxOdB9rOs`,
                                  layoutId: `NxOdB9rOs`,
                                  style: { width: `100%` },
                                  variant: H(`Q4FA0ndjW`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
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
        `.framer-JoQ1L.framer-4fdywt, .framer-JoQ1L .framer-4fdywt { display: block; }`,
        `.framer-JoQ1L.framer-1sacag4 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-JoQ1L .framer-15767z6-container { flex: none; height: auto; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-JoQ1L .framer-1wror4p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-JoQ1L .framer-w43ct4, .framer-JoQ1L .framer-zae35o, .framer-JoQ1L .framer-n93nk2, .framer-JoQ1L .framer-z53q9u, .framer-JoQ1L .framer-1p7j86a { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JoQ1L .framer-1urwwmn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-JoQ1L .framer-1a9yhg0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 52px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-JoQ1L .framer-yxfx3i { flex: none; height: 327px; overflow: visible; position: relative; width: auto; }`,
        `.framer-JoQ1L .framer-15d1nnl { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-JoQ1L .framer-1m6xxqg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-JoQ1L .framer-bhj45z, .framer-JoQ1L .framer-1rgnkcp, .framer-JoQ1L .framer-umb0l2, .framer-JoQ1L .framer-1x63qwp { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-JoQ1L .framer-1updi10, .framer-JoQ1L .framer-6b688t, .framer-JoQ1L .framer-o25khv, .framer-JoQ1L .framer-hetwmq { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-JoQ1L .framer-xz01ek { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 89px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-JoQ1L .framer-13euukp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-JoQ1L .framer-1itdhk5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-JoQ1L .framer-1din19x, .framer-JoQ1L .framer-cflw4d { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JoQ1L .framer-1pxyqzk-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (max-width: 1199.98px) { .framer-JoQ1L.framer-1sacag4 { gap: 40px; width: 390px; } .framer-JoQ1L .framer-1urwwmn { gap: 100px; } .framer-JoQ1L .framer-1a9yhg0 { flex-direction: column; } .framer-JoQ1L .framer-yxfx3i { height: 416px; } .framer-JoQ1L .framer-15d1nnl { flex: none; gap: 16px; width: 100%; } .framer-JoQ1L .framer-1m6xxqg, .framer-JoQ1L .framer-xz01ek { flex-direction: column; gap: 16px; } .framer-JoQ1L .framer-bhj45z, .framer-JoQ1L .framer-1rgnkcp, .framer-JoQ1L .framer-umb0l2, .framer-JoQ1L .framer-1x63qwp { flex: none; width: 100%; }}`,
      ],
      `framer-JoQ1L`
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 1502, width: 1200 }),
    C(
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
        ...k,
        ...N,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([w(T, {}, t), w(D, {}, t)])) }),
    (me = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerCsfUvEijD`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"s2J4QhUEX":{"layout":["fixed","auto"]}}}`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `1502`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicWidth: `1200`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { me as __FramerMetadata__, $ as default, I as queryParamNames };
//# sourceMappingURL=IFYhQfepVoGCP7JziTSUyeHnUs6Ryn0FPYSntpFc4mo.Dz2bULeT.mjs.map
