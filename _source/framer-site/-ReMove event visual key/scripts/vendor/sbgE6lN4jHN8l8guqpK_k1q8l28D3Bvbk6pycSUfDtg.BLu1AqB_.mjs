import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  N as i,
  c as a,
  g as o,
  k as s,
  l as c,
  o as ee,
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
  l as y,
  lt as b,
  n as x,
  ot as le,
  s as S,
  t as C,
  tt as ue,
  v as w,
  w as T,
} from "./framer.jQONGl1Q.mjs";
import { a as E, i as D, o as de, r as O } from "./shared-lib.B1UR4gSL.mjs";
import { n as k, t as A } from "./Video.C7bZWvFX.mjs";
import { n as j, t as M } from "./Video.CwIi_51J.mjs";
import fe, { t as N } from "./Lq9-JbvWz_iIjrtfxleaVpfy7EkAjPPdd4EmZLae0kM.D2K-5P2W.mjs";
var P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, pe, X, me, he, Z, ge, Q, _e, ve, $, ye;
e(() => {
  (ee(),
    f(),
    ie(),
    n(),
    k(),
    j(),
    de(),
    D(),
    N(),
    (P = d(E)),
    (F = d(M)),
    (I = b(l.div)),
    (L = d(A)),
    (R = g(l.div)),
    (z = d(O)),
    (B = g(x)),
    (V = { iOi5tWZzY: `(max-width: 1199.98px)`, kO8vtXym6: `(min-width: 1200px)` }),
    (H = () => typeof document < `u`),
    (U = []),
    (W = `framer-4QEqb`),
    (G = { iOi5tWZzY: `framer-v-x1dzxs`, kO8vtXym6: `framer-v-11i5t17` }),
    (K = (e, t, n) => (e && t ? `position` : n)),
    (q = {
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
    (J = {
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
    (Y = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (pe = {
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
    (X = { delay: 0, duration: 0.7, ease: [0.22, 1, 0.36, 1], type: `tween` }),
    (me = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: X,
      x: 0,
      y: 28,
    }),
    (he = {
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
    (Z = { delay: 0, duration: 0.65, ease: [0.22, 1, 0.36, 1], type: `tween` }),
    (ge = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Z,
      x: 0,
      y: 20,
    }),
    (Q = { Desktop: `kO8vtXym6`, Phone: `iOi5tWZzY` }),
    (_e = ({ value: e }) =>
      u()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ve = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `kO8vtXym6`,
    })),
    ($ = le(
      o(function (e, n) {
        let o = r(null),
          ee = n ?? o,
          ie = te(),
          { activeLocale: u, setLocale: d } = ce(),
          f = ae(),
          { style: g, className: b, layoutId: le, variant: w, ...T } = ve(e);
        ue(t(() => fe({}, u), [u]));
        let [D, de] = se(w, V, !1),
          k = m(W),
          j = s(h)?.isLayoutTemplate,
          N = !!s(ne)?.transition?.layout,
          P = K(j, N),
          F = () => !H() || D === `iOi5tWZzY`,
          L = () => !H() || D !== `iOi5tWZzY`;
        return (
          oe({}),
          a(h.Provider, {
            value: {
              activeVariantId: D,
              humanReadableVariantMap: Q,
              primaryVariantId: `kO8vtXym6`,
              variantClassNames: G,
            },
            children: c(re, {
              id: le ?? ie,
              children: [
                a(_e, { value: `html body { background: rgb(255, 255, 255); }` }),
                c(l.div, {
                  ...T,
                  className: m(k, `framer-11i5t17`, b),
                  ref: ee,
                  style: { ...g },
                  children: [
                    c(I, {
                      animate: q,
                      className: `framer-zqqo7e`,
                      "data-framer-appear-id": `zqqo7e`,
                      initial: J,
                      layout: P,
                      optimized: !0,
                      children: [
                        a(C, {
                          height: 59,
                          width: f?.width || `100vw`,
                          y: (f?.y || 0) + 0 + 0 + 0 + 0,
                          children: a(x, {
                            className: `framer-14az060-container`,
                            nodeId: `l1GTRjGeb`,
                            scopeId: `M2JH_EIJa`,
                            children: a(_, {
                              breakpoint: D,
                              overrides: { iOi5tWZzY: { variant: Y(`tnNrPT_eu`) } },
                              children: a(E, {
                                height: `100%`,
                                id: `l1GTRjGeb`,
                                layoutId: `l1GTRjGeb`,
                                style: { width: `100%` },
                                variant: Y(`N1Y2xUv_c`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        c(`div`, {
                          className: `framer-8ulz8h`,
                          children: [
                            a(`div`, {
                              className: `framer-16l9qco`,
                              children: a(`div`, {
                                className: `framer-jjowxb`,
                                children: a(_, {
                                  breakpoint: D,
                                  overrides: {
                                    iOi5tWZzY: {
                                      children: a(i, {
                                        children: a(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-size": `28px`,
                                            "--framer-line-height": `2.5em`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: `Re:Move event visual key`,
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
                                          "--framer-font-size": `48px`,
                                          "--framer-line-height": `2.5em`,
                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                        },
                                        children: `Re:Move event visual key`,
                                      }),
                                    }),
                                    className: `framer-1amlw96`,
                                    fonts: [`BI;Amiamie/Regular/v0`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            }),
                            c(`div`, {
                              className: `framer-16uvx1m`,
                              children: [
                                a(C, {
                                  children: a(x, {
                                    className: `framer-x74xyt-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `khKWeEc4A`,
                                    scopeId: `M2JH_EIJa`,
                                    children: a(_, {
                                      breakpoint: D,
                                      overrides: {
                                        iOi5tWZzY: {
                                          srcFile: `https://framerusercontent.com/assets/XHB3qbHioVOtZzjDdsNiLZ5oFhk.mp4`,
                                        },
                                      },
                                      children: a(M, {
                                        backgroundColor: `rgba(0, 0, 0, 0)`,
                                        borderRadius: 0,
                                        bottomLeftRadius: 0,
                                        bottomRightRadius: 0,
                                        controls: !1,
                                        height: `100%`,
                                        id: `khKWeEc4A`,
                                        isMixedBorderRadius: !1,
                                        layoutId: `khKWeEc4A`,
                                        loop: !0,
                                        muted: !0,
                                        objectFit: `cover`,
                                        playing: !0,
                                        posterEnabled: !0,
                                        srcFile: `../../assets/misc/ycn9r5zuA3n62aFvDjfEagGtsuE.mp4`,
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
                                c(`div`, {
                                  className: `framer-3lojgk`,
                                  children: [
                                    c(`div`, {
                                      className: `framer-qd80e9`,
                                      children: [
                                        a(_, {
                                          breakpoint: D,
                                          overrides: {
                                            iOi5tWZzY: {
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
                                          children: a(v, {
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
                                            className: `framer-1ut1z4l`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(v, {
                                          __fromCanvasComponent: !0,
                                          children: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              },
                                              children: `Visual key`,
                                            }),
                                          }),
                                          className: `framer-1m4qrn8`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    c(`div`, {
                                      className: `framer-tiz3kg`,
                                      children: [
                                        a(_, {
                                          breakpoint: D,
                                          overrides: {
                                            iOi5tWZzY: {
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
                                          children: a(v, {
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
                                            className: `framer-1s6nzrs`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(v, {
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
                                          className: `framer-mpgoxx`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    c(`div`, {
                                      className: `framer-1c02bt8`,
                                      children: [
                                        a(_, {
                                          breakpoint: D,
                                          overrides: {
                                            iOi5tWZzY: {
                                              children: a(i, {
                                                children: a(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                    "--framer-font-size": `12px`,
                                                    "--framer-text-color": `rgb(87, 87, 87)`,
                                                  },
                                                  children: `Context:`,
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
                                                  "--framer-font-size": `14px`,
                                                  "--framer-text-color": `rgb(87, 87, 87)`,
                                                },
                                                children: `Context:`,
                                              }),
                                            }),
                                            className: `framer-1l9jzs5`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(v, {
                                          __fromCanvasComponent: !0,
                                          children: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              },
                                              children: `University project`,
                                            }),
                                          }),
                                          className: `framer-llbhgy`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                c(`div`, {
                                  className: `framer-aa3ehw`,
                                  children: [
                                    a(_, {
                                      breakpoint: D,
                                      overrides: {
                                        iOi5tWZzY: {
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
                                      children: a(v, {
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
                                        className: `framer-1mtpzkv`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    a(_, {
                                      breakpoint: D,
                                      overrides: {
                                        iOi5tWZzY: {
                                          children: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `20px`,
                                              },
                                              children: `A dynamic visual identity for RE:MOVE, dance workshop series at the imaginary Museum of Dance and Movement in Warsaw, exploring human motion, spatial rhythm, and expressive illustration.`,
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
                                            children: `A dynamic visual identity for RE:MOVE, dance workshop series at the imaginary Museum of Dance and Movement in Warsaw, exploring human motion, spatial rhythm, and expressive illustration.`,
                                          }),
                                        }),
                                        className: `framer-10241el`,
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
                    F() &&
                      c(l.div, {
                        className: `framer-1rx6c0b hidden-11i5t17`,
                        layout: P,
                        children: [
                          c(`div`, {
                            className: `framer-19a3fmz`,
                            children: [
                              a(v, {
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
                                className: `framer-1lq5ogm`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(v, {
                                __fromCanvasComponent: !0,
                                children: a(i, {
                                  children: a(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      "--framer-font-size": `20px`,
                                    },
                                    children: `Traditional museum communication feels too static to engage young, modern audiences.`,
                                  }),
                                }),
                                className: `framer-1mfw0ei`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          c(`div`, {
                            className: `framer-19t3qgz`,
                            children: [
                              a(v, {
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
                                className: `framer-s5ayw4`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(v, {
                                __fromCanvasComponent: !0,
                                children: a(i, {
                                  children: a(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      "--framer-font-size": `20px`,
                                    },
                                    children: `An expressive visual key using overlapping, highly saturated figures that capture the fluid energy of dance, paired with bold typography for maximum outdoor visibility.`,
                                  }),
                                }),
                                className: `framer-10xboxy`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          c(`div`, {
                            className: `framer-37kr4y`,
                            children: [
                              a(v, {
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
                                className: `framer-4i02hd`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(v, {
                                __fromCanvasComponent: !0,
                                children: a(i, {
                                  children: a(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      "--framer-font-size": `20px`,
                                    },
                                    children: `A cohesive poster-to-merchandise system from key visuals to apparel and tote bags designed to stay legible and eye-catching in outdoor, high-traffic settings.`,
                                  }),
                                }),
                                className: `framer-qqpqhq`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    c(R, {
                      __framer__animate: { transition: X },
                      __framer__animateOnce: !0,
                      __framer__enter: pe,
                      __framer__exit: me,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.16,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-6eahv8`,
                      layout: P,
                      children: [
                        c(`div`, {
                          className: `framer-7byl6f`,
                          children: [
                            c(`div`, {
                              className: `framer-1su89pn`,
                              children: [
                                c(`div`, {
                                  className: `framer-1e6rbo5`,
                                  children: [
                                    a(_, {
                                      breakpoint: D,
                                      overrides: {
                                        iOi5tWZzY: {
                                          children: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-text-color": `rgb(87, 87, 87)`,
                                              },
                                              children: `First tries:`,
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
                                              "--framer-text-color": `rgb(87, 87, 87)`,
                                            },
                                            children: `First tries:`,
                                          }),
                                        }),
                                        className: `framer-1g1oump`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    a(_, {
                                      breakpoint: D,
                                      overrides: {
                                        iOi5tWZzY: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 2595,
                                            intrinsicWidth: 2831,
                                            loading: p(
                                              (f?.y || 0) +
                                                0 +
                                                1033.2 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                22.4
                                            ),
                                            pixelHeight: 2595,
                                            pixelWidth: 2831,
                                            sizes: `max(${f?.width || `100vw`} - 40px, 1px)`,
                                            src: `../../assets/images/buPqqaA8r2njOudcM2we7VdjM.png?width=2831&height=2595`,
                                            srcSet: `../../assets/images/buPqqaA8r2njOudcM2we7VdjM.png?scale-down-to=512&width=2831&height=2595 512w,../../assets/images/buPqqaA8r2njOudcM2we7VdjM.png?scale-down-to=1024&width=2831&height=2595 1024w,../../assets/images/buPqqaA8r2njOudcM2we7VdjM.png 2048w,../../assets/images/buPqqaA8r2njOudcM2we7VdjM.png?width=2831&height=2595 2831w`,
                                          },
                                        },
                                      },
                                      children: a(S, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 2595,
                                          intrinsicWidth: 2831,
                                          loading: p(
                                            (f?.y || 0) + 0 + 661.8 + 0 + 0 + 0 + 0 + 0 + 0 + 27.2
                                          ),
                                          pixelHeight: 2595,
                                          pixelWidth: 2831,
                                          src: `../../assets/images/buPqqaA8r2njOudcM2we7VdjM.png?width=2831&height=2595`,
                                          srcSet: `../../assets/images/buPqqaA8r2njOudcM2we7VdjM.png?scale-down-to=512&width=2831&height=2595 512w,../../assets/images/buPqqaA8r2njOudcM2we7VdjM.png?scale-down-to=1024&width=2831&height=2595 1024w,../../assets/images/buPqqaA8r2njOudcM2we7VdjM.png 2048w,../../assets/images/buPqqaA8r2njOudcM2we7VdjM.png?width=2831&height=2595 2831w`,
                                        },
                                        className: `framer-mav4pj`,
                                        "data-framer-name": `Artboard 3Ð±ÑÐ»Ð¸Ð¹`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  ],
                                }),
                                c(`div`, {
                                  className: `framer-owbx84`,
                                  children: [
                                    a(_, {
                                      breakpoint: D,
                                      overrides: {
                                        iOi5tWZzY: {
                                          children: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-text-color": `rgb(87, 87, 87)`,
                                              },
                                              children: `Sketches`,
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
                                              "--framer-text-color": `rgb(87, 87, 87)`,
                                            },
                                            children: `Sketches`,
                                          }),
                                        }),
                                        className: `framer-1tkuyo4`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    a(_, {
                                      breakpoint: D,
                                      overrides: {
                                        iOi5tWZzY: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 2268,
                                            intrinsicWidth: 3554,
                                            loading: p(
                                              (f?.y || 0) +
                                                0 +
                                                1033.2 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                363.4 +
                                                0 +
                                                22.4
                                            ),
                                            pixelHeight: 2268,
                                            pixelWidth: 3554,
                                            sizes: `max(${f?.width || `100vw`} - 40px, 1px)`,
                                            src: `../../assets/images/KY1OerOko796069Mdpf9Ise2cPI.jpg?width=3554&height=2268`,
                                            srcSet: `../../assets/images/KY1OerOko796069Mdpf9Ise2cPI.jpg?scale-down-to=512&width=3554&height=2268 512w,../../assets/images/KY1OerOko796069Mdpf9Ise2cPI.jpg?scale-down-to=1024&width=3554&height=2268 1024w,../../assets/images/KY1OerOko796069Mdpf9Ise2cPI.jpg 2048w,../../assets/images/KY1OerOko796069Mdpf9Ise2cPI.jpg?width=3554&height=2268 3554w`,
                                          },
                                        },
                                      },
                                      children: a(S, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 2268,
                                          intrinsicWidth: 3554,
                                          loading: p(
                                            (f?.y || 0) +
                                              0 +
                                              661.8 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              778.2 +
                                              0 +
                                              27.2
                                          ),
                                          pixelHeight: 2268,
                                          pixelWidth: 3554,
                                          src: `../../assets/images/KY1OerOko796069Mdpf9Ise2cPI.jpg?width=3554&height=2268`,
                                          srcSet: `../../assets/images/KY1OerOko796069Mdpf9Ise2cPI.jpg?scale-down-to=512&width=3554&height=2268 512w,../../assets/images/KY1OerOko796069Mdpf9Ise2cPI.jpg?scale-down-to=1024&width=3554&height=2268 1024w,../../assets/images/KY1OerOko796069Mdpf9Ise2cPI.jpg 2048w,../../assets/images/KY1OerOko796069Mdpf9Ise2cPI.jpg?width=3554&height=2268 3554w`,
                                        },
                                        className: `framer-19b84ud`,
                                        "data-framer-name": `Artboard 3 copyÐ±ÑÐ»Ð¸Ð¹`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  ],
                                }),
                                c(`div`, {
                                  className: `framer-sbnpaj`,
                                  children: [
                                    a(_, {
                                      breakpoint: D,
                                      overrides: {
                                        iOi5tWZzY: {
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
                                              "--framer-text-color": `rgb(87, 87, 87)`,
                                            },
                                            children: `Final Result:`,
                                          }),
                                        }),
                                        className: `framer-jkxm2g`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    a(_, {
                                      breakpoint: D,
                                      overrides: {
                                        iOi5tWZzY: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 1080,
                                            intrinsicWidth: 2256,
                                            loading: p(
                                              (f?.y || 0) +
                                                0 +
                                                1033.2 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                628.8 +
                                                0 +
                                                22.4
                                            ),
                                            pixelHeight: 1080,
                                            pixelWidth: 2256,
                                            sizes: `max(${f?.width || `100vw`} - 40px, 1px)`,
                                            src: `../../assets/images/KgMwddGXEKh6onOlRYFXWNd7Hw.png?width=2256&height=1080`,
                                            srcSet: `../../assets/images/KgMwddGXEKh6onOlRYFXWNd7Hw.png?scale-down-to=512&width=2256&height=1080 512w,../../assets/images/KgMwddGXEKh6onOlRYFXWNd7Hw.png?scale-down-to=1024&width=2256&height=1080 1024w,../../assets/images/KgMwddGXEKh6onOlRYFXWNd7Hw.png 2048w,../../assets/images/KgMwddGXEKh6onOlRYFXWNd7Hw.png?width=2256&height=1080 2256w`,
                                          },
                                        },
                                      },
                                      children: a(S, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 1080,
                                          intrinsicWidth: 2256,
                                          loading: p(
                                            (f?.y || 0) +
                                              0 +
                                              661.8 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              1334.4 +
                                              0 +
                                              27.2
                                          ),
                                          pixelHeight: 1080,
                                          pixelWidth: 2256,
                                          src: `../../assets/images/KgMwddGXEKh6onOlRYFXWNd7Hw.png?width=2256&height=1080`,
                                          srcSet: `../../assets/images/KgMwddGXEKh6onOlRYFXWNd7Hw.png?scale-down-to=512&width=2256&height=1080 512w,../../assets/images/KgMwddGXEKh6onOlRYFXWNd7Hw.png?scale-down-to=1024&width=2256&height=1080 1024w,../../assets/images/KgMwddGXEKh6onOlRYFXWNd7Hw.png 2048w,../../assets/images/KgMwddGXEKh6onOlRYFXWNd7Hw.png?width=2256&height=1080 2256w`,
                                        },
                                        className: `framer-1yly4sw`,
                                        "data-framer-name": `Artboard 3 copy 2Ð±ÑÐ»Ð¸Ð¹`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  ],
                                }),
                                a(_, {
                                  breakpoint: D,
                                  overrides: {
                                    iOi5tWZzY: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 12018,
                                        intrinsicWidth: 22540,
                                        loading: p(
                                          (f?.y || 0) + 0 + 1033.2 + 0 + 0 + 0 + 0 + 839.2
                                        ),
                                        pixelHeight: 12018,
                                        pixelWidth: 22540,
                                        sizes: `max(${f?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/2FmdGiRwSnQpAB3PCztTmZKxs.png?width=22540&height=12018`,
                                        srcSet: `../../assets/images/2FmdGiRwSnQpAB3PCztTmZKxs.png?scale-down-to=512&width=22540&height=12018 512w,../../assets/images/2FmdGiRwSnQpAB3PCztTmZKxs.png?scale-down-to=1024&width=22540&height=12018 1024w,../../assets/images/2FmdGiRwSnQpAB3PCztTmZKxs.png 2048w,../../assets/images/2FmdGiRwSnQpAB3PCztTmZKxs.png?scale-down-to=4096&width=22540&height=12018 4096w,../../assets/images/2FmdGiRwSnQpAB3PCztTmZKxs.png?width=22540&height=12018 22540w`,
                                      },
                                    },
                                  },
                                  children: a(S, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 12018,
                                      intrinsicWidth: 22540,
                                      loading: p((f?.y || 0) + 0 + 661.8 + 0 + 0 + 0 + 0 + 1763.6),
                                      pixelHeight: 12018,
                                      pixelWidth: 22540,
                                      src: `../../assets/images/2FmdGiRwSnQpAB3PCztTmZKxs.png?width=22540&height=12018`,
                                      srcSet: `../../assets/images/2FmdGiRwSnQpAB3PCztTmZKxs.png?scale-down-to=512&width=22540&height=12018 512w,../../assets/images/2FmdGiRwSnQpAB3PCztTmZKxs.png?scale-down-to=1024&width=22540&height=12018 1024w,../../assets/images/2FmdGiRwSnQpAB3PCztTmZKxs.png 2048w,../../assets/images/2FmdGiRwSnQpAB3PCztTmZKxs.png?scale-down-to=4096&width=22540&height=12018 4096w,../../assets/images/2FmdGiRwSnQpAB3PCztTmZKxs.png?width=22540&height=12018 22540w`,
                                    },
                                    className: `framer-12lytv4`,
                                    "data-framer-name": `ubu animacja`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                a(_, {
                                  breakpoint: D,
                                  overrides: {
                                    iOi5tWZzY: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1276,
                                        intrinsicWidth: 2565,
                                        loading: p(
                                          (f?.y || 0) + 0 + 1033.2 + 0 + 0 + 0 + 0 + 1046.2
                                        ),
                                        pixelHeight: 1276,
                                        pixelWidth: 2565,
                                        sizes: `max(${f?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/C5EObPWGWx2hp4ZgIkt3BSh0RkY.png?width=2565&height=1276`,
                                        srcSet: `../../assets/images/C5EObPWGWx2hp4ZgIkt3BSh0RkY.png?scale-down-to=512&width=2565&height=1276 512w,../../assets/images/C5EObPWGWx2hp4ZgIkt3BSh0RkY.png?scale-down-to=1024&width=2565&height=1276 1024w,../../assets/images/C5EObPWGWx2hp4ZgIkt3BSh0RkY.png 2048w,../../assets/images/C5EObPWGWx2hp4ZgIkt3BSh0RkY.png?width=2565&height=1276 2565w`,
                                      },
                                    },
                                  },
                                  children: a(S, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1276,
                                      intrinsicWidth: 2565,
                                      loading: p((f?.y || 0) + 0 + 661.8 + 0 + 0 + 0 + 0 + 2208.6),
                                      pixelHeight: 1276,
                                      pixelWidth: 2565,
                                      src: `../../assets/images/C5EObPWGWx2hp4ZgIkt3BSh0RkY.png?width=2565&height=1276`,
                                      srcSet: `../../assets/images/C5EObPWGWx2hp4ZgIkt3BSh0RkY.png?scale-down-to=512&width=2565&height=1276 512w,../../assets/images/C5EObPWGWx2hp4ZgIkt3BSh0RkY.png?scale-down-to=1024&width=2565&height=1276 1024w,../../assets/images/C5EObPWGWx2hp4ZgIkt3BSh0RkY.png 2048w,../../assets/images/C5EObPWGWx2hp4ZgIkt3BSh0RkY.png?width=2565&height=1276 2565w`,
                                    },
                                    className: `framer-yf8nws`,
                                    "data-framer-name": `PXL 20260623_1223075961`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                c(`div`, {
                                  className: `framer-14ye2pc`,
                                  children: [
                                    a(_, {
                                      breakpoint: D,
                                      overrides: {
                                        iOi5tWZzY: {
                                          children: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-text-color": `rgb(87, 87, 87)`,
                                              },
                                              children: `Merch:`,
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
                                              "--framer-text-color": `rgb(87, 87, 87)`,
                                            },
                                            children: `Merch:`,
                                          }),
                                        }),
                                        className: `framer-1pkodv2`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    a(_, {
                                      breakpoint: D,
                                      overrides: {
                                        iOi5tWZzY: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 1723,
                                            intrinsicWidth: 2565,
                                            loading: p(
                                              (f?.y || 0) +
                                                0 +
                                                1033.2 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                1240.2 +
                                                0 +
                                                22.4
                                            ),
                                            pixelHeight: 1723,
                                            pixelWidth: 2565,
                                            sizes: `max(${f?.width || `100vw`} - 40px, 1px)`,
                                            src: `../../assets/images/7mGy2yjOIp1dHt9FvviBZPBBxME.png?width=2565&height=1723`,
                                            srcSet: `../../assets/images/7mGy2yjOIp1dHt9FvviBZPBBxME.png?scale-down-to=512&width=2565&height=1723 512w,../../assets/images/7mGy2yjOIp1dHt9FvviBZPBBxME.png?scale-down-to=1024&width=2565&height=1723 1024w,../../assets/images/7mGy2yjOIp1dHt9FvviBZPBBxME.png 2048w,../../assets/images/7mGy2yjOIp1dHt9FvviBZPBBxME.png?width=2565&height=1723 2565w`,
                                          },
                                        },
                                      },
                                      children: a(S, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 1723,
                                          intrinsicWidth: 2565,
                                          loading: p(
                                            (f?.y || 0) +
                                              0 +
                                              661.8 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              2625.6 +
                                              0 +
                                              27.2
                                          ),
                                          pixelHeight: 1723,
                                          pixelWidth: 2565,
                                          src: `../../assets/images/7mGy2yjOIp1dHt9FvviBZPBBxME.png?width=2565&height=1723`,
                                          srcSet: `../../assets/images/7mGy2yjOIp1dHt9FvviBZPBBxME.png?scale-down-to=512&width=2565&height=1723 512w,../../assets/images/7mGy2yjOIp1dHt9FvviBZPBBxME.png?scale-down-to=1024&width=2565&height=1723 1024w,../../assets/images/7mGy2yjOIp1dHt9FvviBZPBBxME.png 2048w,../../assets/images/7mGy2yjOIp1dHt9FvviBZPBBxME.png?width=2565&height=1723 2565w`,
                                        },
                                        className: `framer-1tas4r0`,
                                        "data-framer-name": `Artboard 3 copy 2Ð±ÑÐ»Ð¸Ð¹`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  ],
                                }),
                                a(_, {
                                  breakpoint: D,
                                  overrides: {
                                    iOi5tWZzY: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1276,
                                        intrinsicWidth: 2565,
                                        loading: p(
                                          (f?.y || 0) + 0 + 1033.2 + 0 + 0 + 0 + 0 + 1517.6
                                        ),
                                        pixelHeight: 1276,
                                        pixelWidth: 2565,
                                        sizes: `max(${f?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/OOvfXaSg9AexrDBadza0DecFtso.png?width=2565&height=1276`,
                                        srcSet: `../../assets/images/OOvfXaSg9AexrDBadza0DecFtso.png?scale-down-to=512&width=2565&height=1276 512w,../../assets/images/OOvfXaSg9AexrDBadza0DecFtso.png?scale-down-to=1024&width=2565&height=1276 1024w,../../assets/images/OOvfXaSg9AexrDBadza0DecFtso.png 2048w,../../assets/images/OOvfXaSg9AexrDBadza0DecFtso.png?width=2565&height=1276 2565w`,
                                      },
                                    },
                                  },
                                  children: a(S, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1276,
                                      intrinsicWidth: 2565,
                                      loading: p((f?.y || 0) + 0 + 661.8 + 0 + 0 + 0 + 0 + 3208.8),
                                      pixelHeight: 1276,
                                      pixelWidth: 2565,
                                      src: `../../assets/images/OOvfXaSg9AexrDBadza0DecFtso.png?width=2565&height=1276`,
                                      srcSet: `../../assets/images/OOvfXaSg9AexrDBadza0DecFtso.png?scale-down-to=512&width=2565&height=1276 512w,../../assets/images/OOvfXaSg9AexrDBadza0DecFtso.png?scale-down-to=1024&width=2565&height=1276 1024w,../../assets/images/OOvfXaSg9AexrDBadza0DecFtso.png 2048w,../../assets/images/OOvfXaSg9AexrDBadza0DecFtso.png?width=2565&height=1276 2565w`,
                                    },
                                    className: `framer-1avrpwl`,
                                    "data-framer-name": `Untitled-2`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                c(`div`, {
                                  className: `framer-1xncmd7`,
                                  children: [
                                    a(_, {
                                      breakpoint: D,
                                      overrides: {
                                        iOi5tWZzY: {
                                          children: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-text-color": `rgb(87, 87, 87)`,
                                              },
                                              children: `Visualisation:`,
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
                                              "--framer-text-color": `rgb(87, 87, 87)`,
                                            },
                                            children: `Visualisation:`,
                                          }),
                                        }),
                                        className: `framer-1s1owhn`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    a(_, {
                                      breakpoint: D,
                                      overrides: {
                                        iOi5tWZzY: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 1537,
                                            intrinsicWidth: 2565,
                                            loading: p(
                                              (f?.y || 0) +
                                                0 +
                                                1033.2 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                1711.6 +
                                                0 +
                                                22.4
                                            ),
                                            pixelHeight: 1537,
                                            pixelWidth: 2565,
                                            sizes: `max(${f?.width || `100vw`} - 40px, 1px)`,
                                            src: `../../assets/images/gvRM3W0eT0MNC12yvyr3Qi2sDIE.png?width=2565&height=1537`,
                                            srcSet: `../../assets/images/gvRM3W0eT0MNC12yvyr3Qi2sDIE.png?scale-down-to=512&width=2565&height=1537 512w,../../assets/images/gvRM3W0eT0MNC12yvyr3Qi2sDIE.png?scale-down-to=1024&width=2565&height=1537 1024w,../../assets/images/gvRM3W0eT0MNC12yvyr3Qi2sDIE.png 2048w,../../assets/images/gvRM3W0eT0MNC12yvyr3Qi2sDIE.png?width=2565&height=1537 2565w`,
                                          },
                                        },
                                      },
                                      children: a(S, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 1537,
                                          intrinsicWidth: 2565,
                                          loading: p(
                                            (f?.y || 0) +
                                              0 +
                                              661.8 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              3625.8 +
                                              0 +
                                              27.2
                                          ),
                                          pixelHeight: 1537,
                                          pixelWidth: 2565,
                                          src: `../../assets/images/gvRM3W0eT0MNC12yvyr3Qi2sDIE.png?width=2565&height=1537`,
                                          srcSet: `../../assets/images/gvRM3W0eT0MNC12yvyr3Qi2sDIE.png?scale-down-to=512&width=2565&height=1537 512w,../../assets/images/gvRM3W0eT0MNC12yvyr3Qi2sDIE.png?scale-down-to=1024&width=2565&height=1537 1024w,../../assets/images/gvRM3W0eT0MNC12yvyr3Qi2sDIE.png 2048w,../../assets/images/gvRM3W0eT0MNC12yvyr3Qi2sDIE.png?width=2565&height=1537 2565w`,
                                        },
                                        className: `framer-1afptxb`,
                                        "data-framer-name": `Artboard 3 copy 2Ð±ÑÐ»Ð¸Ð¹`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  ],
                                }),
                                a(_, {
                                  breakpoint: D,
                                  overrides: {
                                    iOi5tWZzY: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 3584,
                                        intrinsicWidth: 5120,
                                        loading: p((f?.y || 0) + 0 + 1033.2 + 0 + 0 + 0 + 0 + 1964),
                                        pixelHeight: 3584,
                                        pixelWidth: 5120,
                                        sizes: `max(${f?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/hNgU64BfOOfSIuALlbuTXa9oWk.jpg?width=5120&height=3584`,
                                        srcSet: `../../assets/images/hNgU64BfOOfSIuALlbuTXa9oWk.jpg?scale-down-to=512&width=5120&height=3584 512w,../../assets/images/hNgU64BfOOfSIuALlbuTXa9oWk.jpg?scale-down-to=1024&width=5120&height=3584 1024w,../../assets/images/hNgU64BfOOfSIuALlbuTXa9oWk.jpg 2048w,../../assets/images/hNgU64BfOOfSIuALlbuTXa9oWk.jpg?scale-down-to=4096&width=5120&height=3584 4096w,../../assets/images/hNgU64BfOOfSIuALlbuTXa9oWk.jpg?width=5120&height=3584 5120w`,
                                      },
                                    },
                                  },
                                  children: a(S, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 3584,
                                      intrinsicWidth: 5120,
                                      loading: p((f?.y || 0) + 0 + 661.8 + 0 + 0 + 0 + 0 + 4151),
                                      pixelHeight: 3584,
                                      pixelWidth: 5120,
                                      src: `../../assets/images/hNgU64BfOOfSIuALlbuTXa9oWk.jpg?width=5120&height=3584`,
                                      srcSet: `../../assets/images/hNgU64BfOOfSIuALlbuTXa9oWk.jpg?scale-down-to=512&width=5120&height=3584 512w,../../assets/images/hNgU64BfOOfSIuALlbuTXa9oWk.jpg?scale-down-to=1024&width=5120&height=3584 1024w,../../assets/images/hNgU64BfOOfSIuALlbuTXa9oWk.jpg 2048w,../../assets/images/hNgU64BfOOfSIuALlbuTXa9oWk.jpg?scale-down-to=4096&width=5120&height=3584 4096w,../../assets/images/hNgU64BfOOfSIuALlbuTXa9oWk.jpg?width=5120&height=3584 5120w`,
                                    },
                                    className: `framer-1m7jjsn`,
                                    "data-framer-name": `Untitled-2`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                              ],
                            }),
                            L() &&
                              c(`div`, {
                                className: `framer-185uf5v hidden-x1dzxs`,
                                children: [
                                  c(`div`, {
                                    className: `framer-165fazl`,
                                    children: [
                                      a(v, {
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
                                        className: `framer-zxggqg`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(v, {
                                        __fromCanvasComponent: !0,
                                        children: a(i, {
                                          children: a(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            },
                                            children: `Traditional museum communication feels too static to engage young, modern audiences.`,
                                          }),
                                        }),
                                        className: `framer-1ky5c5t`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  c(`div`, {
                                    className: `framer-v9at66`,
                                    children: [
                                      a(v, {
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
                                        className: `framer-mwqxw7`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(v, {
                                        __fromCanvasComponent: !0,
                                        children: a(i, {
                                          children: a(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            },
                                            children: `An expressive visual key using overlapping, highly saturated figures that capture the fluid energy of dance, paired with bold typography for maximum outdoor visibility.`,
                                          }),
                                        }),
                                        className: `framer-6ntzy4`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  c(`div`, {
                                    className: `framer-euul5e`,
                                    children: [
                                      a(v, {
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
                                        className: `framer-fiu15f`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(v, {
                                        __fromCanvasComponent: !0,
                                        children: a(i, {
                                          children: a(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            },
                                            children: `A cohesive poster-to-merchandise system from key visuals to apparel and tote bags designed to stay legible and eye-catching in outdoor, high-traffic settings.`,
                                          }),
                                        }),
                                        className: `framer-ftnnfh`,
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
                        c(`div`, {
                          className: `framer-3rtbe1`,
                          children: [
                            c(`div`, {
                              className: `framer-196mhrb`,
                              children: [
                                a(y, {
                                  href: { webPageId: `TwvfQk14J` },
                                  motionChild: !0,
                                  nodeId: `rzm_P1n4f`,
                                  openInNewTab: !1,
                                  scopeId: `M2JH_EIJa`,
                                  children: a(l.a, {
                                    className: `framer-1hwxgql framer-fdy4lm`,
                                    children: a(C, {
                                      children: a(x, {
                                        className: `framer-1xa1o23-container`,
                                        isModuleExternal: !0,
                                        nodeId: `SBvJo0Bst`,
                                        scopeId: `M2JH_EIJa`,
                                        children: a(A, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 0,
                                          bottomLeftRadius: 0,
                                          bottomRightRadius: 0,
                                          controls: !1,
                                          height: `100%`,
                                          id: `SBvJo0Bst`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `SBvJo0Bst`,
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
                                c(`div`, {
                                  className: `framer-1kfea13`,
                                  children: [
                                    a(v, {
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
                                      className: `framer-1llcv68`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(v, {
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
                                      className: `framer-su07ah`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-pi99u8`,
                              children: [
                                a(y, {
                                  href: { webPageId: `PlMaHNi_L` },
                                  motionChild: !0,
                                  nodeId: `RFdxdb6B2`,
                                  openInNewTab: !1,
                                  scopeId: `M2JH_EIJa`,
                                  children: a(_, {
                                    breakpoint: D,
                                    overrides: {
                                      iOi5tWZzY: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 5044,
                                          intrinsicWidth: 3363,
                                          loading: p(
                                            (f?.y || 0) + 0 + 1033.2 + 0 + 2330 + 0 + 430 + 0 + 0
                                          ),
                                          pixelHeight: 5044,
                                          pixelWidth: 3363,
                                          sizes: `calc(${f?.width || `100vw`} - 40px)`,
                                          src: `../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg?width=3363&height=5044`,
                                          srcSet: `../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg 682w,../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg?scale-down-to=2048&width=3363&height=5044 1365w,../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg?scale-down-to=4096&width=3363&height=5044 2730w,../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg?width=3363&height=5044 3363w`,
                                        },
                                      },
                                    },
                                    children: a(S, {
                                      as: `a`,
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 5044,
                                        intrinsicWidth: 3363,
                                        loading: p((f?.y || 0) + 0 + 661.8 + 0 + 4831 + 0 + 0 + 0),
                                        pixelHeight: 5044,
                                        pixelWidth: 3363,
                                        sizes: `max((${f?.width || `100vw`} - 100px) / 3, 1px)`,
                                        src: `../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg?width=3363&height=5044`,
                                        srcSet: `../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg 682w,../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg?scale-down-to=2048&width=3363&height=5044 1365w,../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg?scale-down-to=4096&width=3363&height=5044 2730w,../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg?width=3363&height=5044 3363w`,
                                      },
                                      className: `framer-njf0kz framer-fdy4lm`,
                                    }),
                                  }),
                                }),
                                c(`div`, {
                                  className: `framer-1v60prp`,
                                  children: [
                                    a(v, {
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
                                          children: `Lasowiak cranberry liqueur`,
                                        }),
                                      }),
                                      className: `framer-lxpgtd`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(v, {
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
                                          children: `Label + Packaging`,
                                        }),
                                      }),
                                      className: `framer-1n3rhpb`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1jhy78f`,
                              children: [
                                a(y, {
                                  href: { webPageId: `aCRbSljkl` },
                                  motionChild: !0,
                                  nodeId: `BaKHlwcXo`,
                                  openInNewTab: !1,
                                  scopeId: `M2JH_EIJa`,
                                  children: a(l.a, {
                                    className: `framer-1xn1s5j framer-fdy4lm`,
                                    children: a(C, {
                                      children: a(x, {
                                        className: `framer-enppcj-container`,
                                        isModuleExternal: !0,
                                        nodeId: `RnalcIQek`,
                                        scopeId: `M2JH_EIJa`,
                                        children: a(A, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 0,
                                          bottomLeftRadius: 0,
                                          bottomRightRadius: 0,
                                          controls: !1,
                                          height: `100%`,
                                          id: `RnalcIQek`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `RnalcIQek`,
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
                                c(`div`, {
                                  className: `framer-1h1ticl`,
                                  children: [
                                    a(v, {
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
                                          children: `Ubu Roi ou les Polonais `,
                                        }),
                                      }),
                                      className: `framer-1se2he4`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(v, {
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
                                          children: `Editorial`,
                                        }),
                                      }),
                                      className: `framer-107vzwr`,
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
                    a(_, {
                      breakpoint: D,
                      overrides: { iOi5tWZzY: { y: (f?.y || 0) + 0 + 4551.2 } },
                      children: a(C, {
                        height: 390,
                        width: f?.width || `100vw`,
                        y: (f?.y || 0) + 0 + 5972.8,
                        children: a(B, {
                          __framer__animate: { transition: Z },
                          __framer__animateOnce: !0,
                          __framer__enter: he,
                          __framer__exit: ge,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.12,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-4pftve-container`,
                          layout: P,
                          nodeId: `pkvith_pI`,
                          rendersWithMotion: !0,
                          scopeId: `M2JH_EIJa`,
                          children: a(_, {
                            breakpoint: D,
                            overrides: { iOi5tWZzY: { variant: Y(`bC5BwOq5u`) } },
                            children: a(O, {
                              height: `100%`,
                              id: `pkvith_pI`,
                              layoutId: `pkvith_pI`,
                              style: { width: `100%` },
                              variant: Y(`Q4FA0ndjW`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
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
        `.framer-4QEqb.framer-fdy4lm, .framer-4QEqb .framer-fdy4lm { display: block; }`,
        `.framer-4QEqb.framer-11i5t17 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-4QEqb .framer-zqqo7e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-4QEqb .framer-14az060-container, .framer-4QEqb .framer-x74xyt-container, .framer-4QEqb .framer-4pftve-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-4QEqb .framer-8ulz8h, .framer-4QEqb .framer-1kfea13, .framer-4QEqb .framer-1v60prp, .framer-4QEqb .framer-1h1ticl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-4QEqb .framer-16l9qco { align-content: center; align-items: center; background-color: #e11e27; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-4QEqb .framer-jjowxb { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 1px; }`,
        `.framer-4QEqb .framer-1amlw96, .framer-4QEqb .framer-1ut1z4l, .framer-4QEqb .framer-1m4qrn8, .framer-4QEqb .framer-1s6nzrs, .framer-4QEqb .framer-mpgoxx, .framer-4QEqb .framer-1l9jzs5, .framer-4QEqb .framer-llbhgy, .framer-4QEqb .framer-1mtpzkv, .framer-4QEqb .framer-1lq5ogm, .framer-4QEqb .framer-s5ayw4, .framer-4QEqb .framer-4i02hd, .framer-4QEqb .framer-1g1oump, .framer-4QEqb .framer-1tkuyo4, .framer-4QEqb .framer-jkxm2g, .framer-4QEqb .framer-1pkodv2, .framer-4QEqb .framer-1s1owhn, .framer-4QEqb .framer-zxggqg, .framer-4QEqb .framer-mwqxw7, .framer-4QEqb .framer-fiu15f { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-4QEqb .framer-16uvx1m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-4QEqb .framer-3lojgk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-4QEqb .framer-qd80e9, .framer-4QEqb .framer-tiz3kg, .framer-4QEqb .framer-1c02bt8, .framer-4QEqb .framer-165fazl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-4QEqb .framer-aa3ehw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-4QEqb .framer-10241el { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 790px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-4QEqb .framer-1rx6c0b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-4QEqb .framer-19a3fmz, .framer-4QEqb .framer-19t3qgz, .framer-4QEqb .framer-37kr4y { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-4QEqb .framer-1mfw0ei, .framer-4QEqb .framer-10xboxy, .framer-4QEqb .framer-qqpqhq, .framer-4QEqb .framer-6ntzy4, .framer-4QEqb .framer-ftnnfh, .framer-4QEqb .framer-1llcv68, .framer-4QEqb .framer-su07ah, .framer-4QEqb .framer-lxpgtd, .framer-4QEqb .framer-1n3rhpb, .framer-4QEqb .framer-1se2he4, .framer-4QEqb .framer-107vzwr { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-4QEqb .framer-6eahv8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 121px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-4QEqb .framer-7byl6f { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 53px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-4QEqb .framer-1su89pn { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-4QEqb .framer-1e6rbo5, .framer-4QEqb .framer-owbx84, .framer-4QEqb .framer-sbnpaj, .framer-4QEqb .framer-14ye2pc, .framer-4QEqb .framer-1xncmd7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-4QEqb .framer-mav4pj, .framer-4QEqb .framer-19b84ud, .framer-4QEqb .framer-1yly4sw, .framer-4QEqb .framer-yf8nws, .framer-4QEqb .framer-1tas4r0, .framer-4QEqb .framer-1avrpwl, .framer-4QEqb .framer-1afptxb, .framer-4QEqb .framer-1m7jjsn { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-4QEqb .framer-12lytv4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 40px; position: relative; width: 100%; }`,
        `.framer-4QEqb .framer-185uf5v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; top: 40px; width: min-content; z-index: 1; }`,
        `.framer-4QEqb .framer-1ky5c5t { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 309px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-4QEqb .framer-v9at66, .framer-4QEqb .framer-euul5e { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; }`,
        `.framer-4QEqb .framer-3rtbe1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-4QEqb .framer-196mhrb, .framer-4QEqb .framer-pi99u8, .framer-4QEqb .framer-1jhy78f { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-4QEqb .framer-1hwxgql, .framer-4QEqb .framer-1xn1s5j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-4QEqb .framer-1xa1o23-container, .framer-4QEqb .framer-enppcj-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-4QEqb .framer-njf0kz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 489px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `@media (max-width: 1199.98px) { .framer-4QEqb.framer-11i5t17 { gap: 40px; width: 390px; } .framer-4QEqb .framer-16l9qco { gap: 10px; justify-content: center; } .framer-4QEqb .framer-jjowxb { padding: 0px; } .framer-4QEqb .framer-10241el { width: 100%; } .framer-4QEqb .framer-3rtbe1 { flex-direction: column; } .framer-4QEqb .framer-196mhrb, .framer-4QEqb .framer-pi99u8, .framer-4QEqb .framer-1jhy78f { flex: none; width: 100%; }}`,
      ],
      `framer-4QEqb`
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 7029, width: 1200 }),
    w(
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
        ...P,
        ...F,
        ...L,
        ...z,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([T(E, {}, t), T(O, {}, t)])) }),
    (ye = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerM2JH_EIJa`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"iOi5tWZzY":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `7029`,
            framerAutoSizeImages: `true`,
            framerColorSyntax: `true`,
            framerScrollSections: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerContractVersion: `1`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ye as __FramerMetadata__, $ as default, U as queryParamNames };
//# sourceMappingURL=sbgE6lN4jHN8l8guqpK_k1q8l28D3Bvbk6pycSUfDtg.BLu1AqB_.mjs.map
