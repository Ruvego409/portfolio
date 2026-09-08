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
  o as l,
  v as ee,
} from "./react.D20wc1Tc.mjs";
import { S as u, a as te, r as ne, t as re } from "./motion.jtMCvOiK.mjs";
import {
  $ as d,
  A as f,
  J as ie,
  L as p,
  M as m,
  S as ae,
  X as oe,
  Z as se,
  a as h,
  ct as g,
  et as ce,
  f as _,
  g as v,
  h as y,
  l as b,
  lt as x,
  n as S,
  ot as C,
  s as w,
  t as T,
  tt as le,
  v as E,
  w as D,
} from "./framer.jQONGl1Q.mjs";
import { a as O, i as k, o as ue, r as A } from "./shared-lib.B1UR4gSL.mjs";
import { n as j, t as M } from "./Video.C7bZWvFX.mjs";
import { n as N, t as P } from "./Video.CwIi_51J.mjs";
import de, { t as F } from "./BX2DuNnKHVYOSSqSx3nj4R49l_MypHGTAIk7FD_-s-M.BuR8vQkU.mjs";
var I, L, R, z, B, V, H, U, W, G, K, q, J, fe, pe, Y, me, X, he, ge, Z, _e, Q, ve, ye, $, be;
e(() => {
  (l(),
    p(),
    re(),
    n(),
    j(),
    N(),
    ue(),
    k(),
    F(),
    (I = f(O)),
    (L = f(P)),
    (R = x(u.div)),
    (z = f(M)),
    (B = g(u.div)),
    (V = f(A)),
    (H = g(S)),
    (U = { QPqTdr5Bd: `(max-width: 1199.98px)`, V0TrS9xfI: `(min-width: 1200px)` }),
    (W = () => typeof document < `u`),
    (G = []),
    (K = `framer-Bnjzq`),
    (q = { QPqTdr5Bd: `framer-v-1y63n48`, V0TrS9xfI: `framer-v-10oyrls` }),
    (J = (e, t, n) => (e && t ? `position` : n)),
    (fe = {
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
    (pe = {
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
    (me = {
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
    (he = {
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
    (ge = {
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
    (_e = {
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
    (Q = { Desktop: `V0TrS9xfI`, Phone: `QPqTdr5Bd` }),
    (ve = ({ value: e }) =>
      d()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ye = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `V0TrS9xfI`,
    })),
    ($ = C(
      o(function (e, n) {
        let o = r(null),
          l = n ?? o,
          re = ee(),
          { activeLocale: d, setLocale: f } = ce(),
          p = ie(),
          { style: g, className: x, layoutId: C, variant: E, ...D } = ye(e);
        le(t(() => de({}, d), [d]));
        let [k, ue] = se(E, U, !1),
          j = ae(K),
          N = s(h)?.isLayoutTemplate,
          F = !!s(te)?.transition?.layout,
          I = J(N, F),
          L = () => !W() || k !== `QPqTdr5Bd`,
          z = () => !W() || k === `QPqTdr5Bd`;
        return (
          oe({}),
          a(h.Provider, {
            value: {
              activeVariantId: k,
              humanReadableVariantMap: Q,
              primaryVariantId: `V0TrS9xfI`,
              variantClassNames: q,
            },
            children: c(ne, {
              id: C ?? re,
              children: [
                a(ve, { value: `html body { background: rgb(255, 255, 255); }` }),
                c(u.div, {
                  ...D,
                  className: ae(j, `framer-10oyrls`, x),
                  ref: l,
                  style: { ...g },
                  children: [
                    c(R, {
                      animate: fe,
                      className: `framer-1xzcwd5`,
                      "data-framer-appear-id": `1xzcwd5`,
                      initial: pe,
                      layout: I,
                      optimized: !0,
                      children: [
                        a(T, {
                          height: 59,
                          width: p?.width || `100vw`,
                          y: (p?.y || 0) + 0 + 0 + 0 + 0,
                          children: a(S, {
                            className: `framer-fkdes-container`,
                            nodeId: `wQe55QGQ9`,
                            scopeId: `TwvfQk14J`,
                            children: a(_, {
                              breakpoint: k,
                              overrides: { QPqTdr5Bd: { variant: Y(`tnNrPT_eu`) } },
                              children: a(O, {
                                height: `100%`,
                                id: `wQe55QGQ9`,
                                layoutId: `wQe55QGQ9`,
                                style: { width: `100%` },
                                variant: Y(`N1Y2xUv_c`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        c(`div`, {
                          className: `framer-1k0ft6u`,
                          children: [
                            c(`div`, {
                              className: `framer-8x042o`,
                              children: [
                                L() &&
                                  c(v, {
                                    className: `framer-1gyj3e7 hidden-1y63n48`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 59.894 59.801" overflow="visible"><g><path d="M 18.198 34.511 L 46.497 34.511 L 46.497 51.019 C 48.115 45.565 52.641 41.47 58.228 40.402 C 58.296 40.233 58.355 40.064 58.423 39.895 C 55.287 39.346 52.481 37.841 50.325 35.677 C 47.484 32.843 45.882 28.998 45.871 24.985 L 21.63 24.985 C 21.604 28.594 20.328 31.916 18.198 34.511 Z M 52.067 9.788 L 52.067 24.935 L 59.894 24.935 C 58.034 12.662 48.813 2.798 36.869 0 L 36.869 24.977 C 36.869 20.784 38.568 16.981 41.324 14.234 C 44.079 11.478 47.874 9.779 52.067 9.779 Z" fill="rgb(255, 255, 255)"></path><path d="M 17.234 14.242 C 19.981 16.989 21.68 20.793 21.68 24.985 L 21.68 0.355 C 15.944 1.986 10.816 5.273 6.939 9.805 C 10.954 9.923 14.58 11.597 17.234 14.242 Z M 0 24.892 L 6.483 24.892 L 6.483 10.337 C 3.059 14.522 0.82 19.548 0 24.892 Z M 30.834 50.664 C 30.834 54.061 29.719 57.197 27.825 59.725 C 28.527 59.775 29.228 59.801 29.947 59.801 C 31.232 59.801 32.491 59.716 33.733 59.564 C 31.849 56.979 30.834 53.863 30.834 50.664 Z M 15.189 50.165 L 15.206 50.165 L 15.206 37.3 C 12.729 39.058 9.703 40.09 6.432 40.09 C 4.607 40.09 2.848 39.768 1.226 39.177 C 3.643 46.353 8.672 52.329 15.189 55.972 Z" fill="rgb(255, 255, 255)"></path></g></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      c(v, {
                                        className: `framer-scjg98`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.696 51.019" overflow="visible"><path d="M 0 34.511 L 28.299 34.511 L 28.299 51.019 C 29.917 45.565 34.443 41.47 40.03 40.402 C 40.098 40.233 40.157 40.064 40.225 39.895 C 37.089 39.346 34.283 37.841 32.127 35.677 C 29.286 32.843 27.684 28.998 27.673 24.985 L 3.432 24.985 C 3.406 28.594 2.13 31.916 0 34.511 Z M 33.869 9.788 L 33.869 24.935 L 41.696 24.935 C 39.836 12.662 30.615 2.798 18.671 0 L 18.671 24.977 C 18.671 20.784 20.37 16.981 23.126 14.234 C 25.881 11.478 29.676 9.779 33.869 9.779 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                        withExternalLayout: !0,
                                        children: [
                                          a(v, {
                                            className: `framer-1kfbmuc`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40.225 26.033" overflow="visible"><path d="M 0 9.526 L 28.299 9.526 L 28.299 26.033 C 29.917 20.58 34.443 16.485 40.03 15.417 C 40.098 15.248 40.157 15.079 40.225 14.91 C 37.089 14.361 34.283 12.856 32.127 10.692 C 29.286 7.858 27.684 4.013 27.673 0 L 3.432 0 C 3.406 3.609 2.13 6.931 0 9.526 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          a(v, {
                                            className: `framer-egjbdv`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.024 24.977" overflow="visible"><path d="M 15.197 9.788 L 15.197 24.935 L 23.024 24.935 C 21.165 12.662 11.943 2.798 0 0 L 0 24.977 C 0 20.784 1.699 16.981 4.454 14.234 C 7.21 11.478 11.005 9.779 15.197 9.779 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      c(v, {
                                        className: `framer-pc9kgv`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33.733 59.446" overflow="visible"><path d="M 17.234 13.887 C 19.981 16.634 21.68 20.438 21.68 24.63 L 21.68 0 C 15.944 1.631 10.816 4.918 6.939 9.45 C 10.954 9.568 14.58 11.242 17.234 13.887 Z M 0 24.537 L 6.483 24.537 L 6.483 9.982 C 3.059 14.167 0.82 19.193 0 24.537 Z M 30.834 50.309 C 30.834 53.706 29.719 56.842 27.825 59.37 C 28.527 59.42 29.228 59.446 29.947 59.446 C 31.232 59.446 32.491 59.361 33.733 59.209 C 31.849 56.624 30.834 53.508 30.834 50.309 Z M 15.189 49.81 L 15.206 49.81 L 15.206 36.945 C 12.729 38.703 9.703 39.735 6.432 39.735 C 4.607 39.735 2.848 39.413 1.226 38.822 C 3.643 45.998 8.672 51.974 15.189 55.617 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                        withExternalLayout: !0,
                                        children: [
                                          a(v, {
                                            className: `framer-1924dz3`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.741 24.63" overflow="visible"><path d="M 10.295 13.887 C 13.042 16.634 14.741 20.438 14.741 24.63 L 14.741 0 C 9.004 1.631 3.877 4.918 0 9.45 C 4.015 9.568 7.641 11.242 10.295 13.887 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          a(v, {
                                            className: `framer-y3xwxa`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.483 14.555" overflow="visible"><path d="M 0 14.555 L 6.483 14.555 L 6.483 0 C 3.059 4.184 0.82 9.211 0 14.555 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          a(v, {
                                            className: `framer-196tuv2`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.908 9.137" overflow="visible"><path d="M 3.009 0 C 3.009 3.398 1.893 6.534 0 9.061 C 0.702 9.112 1.403 9.137 2.122 9.137 C 3.406 9.137 4.666 9.052 5.908 8.9 C 4.024 6.315 3.009 3.199 3.009 0 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          a(v, {
                                            className: `framer-1rgj1s8`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.98 18.671" overflow="visible"><path d="M 13.963 12.865 L 13.98 12.865 L 13.98 0 C 11.504 1.758 8.478 2.789 5.207 2.789 C 3.381 2.789 1.623 2.468 0 1.876 C 2.417 9.053 7.447 15.028 13.963 18.671 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                a(`div`, {
                                  className: `framer-1qenst`,
                                  children: a(_, {
                                    breakpoint: k,
                                    overrides: {
                                      QPqTdr5Bd: {
                                        children: c(i, {
                                          children: [
                                            a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `Warsaw museum of dance `,
                                            }),
                                            a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `and movement visual identity`,
                                            }),
                                          ],
                                        }),
                                      },
                                    },
                                    children: a(y, {
                                      __fromCanvasComponent: !0,
                                      children: a(i, {
                                        children: a(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-size": `34px`,
                                            "--framer-line-height": `2.5em`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: `Warsaw museum of dance and movement visual identity`,
                                        }),
                                      }),
                                      className: `framer-b2bee0`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                L() &&
                                  c(v, {
                                    className: `framer-a3zhjj hidden-1y63n48`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 59.894 59.801" overflow="visible"><g><path d="M 18.198 34.511 L 46.497 34.511 L 46.497 51.019 C 48.115 45.565 52.641 41.47 58.228 40.402 C 58.296 40.233 58.355 40.064 58.423 39.895 C 55.287 39.346 52.481 37.841 50.325 35.677 C 47.484 32.843 45.882 28.998 45.871 24.985 L 21.63 24.985 C 21.604 28.594 20.328 31.916 18.198 34.511 Z M 52.067 9.788 L 52.067 24.935 L 59.894 24.935 C 58.034 12.662 48.813 2.798 36.869 0 L 36.869 24.977 C 36.869 20.784 38.568 16.981 41.324 14.234 C 44.079 11.478 47.874 9.779 52.067 9.779 Z" fill="rgb(255, 255, 255)"></path><path d="M 17.234 14.242 C 19.981 16.989 21.68 20.793 21.68 24.985 L 21.68 0.355 C 15.944 1.986 10.816 5.273 6.939 9.805 C 10.954 9.923 14.58 11.597 17.234 14.242 Z M 0 24.892 L 6.483 24.892 L 6.483 10.337 C 3.059 14.522 0.82 19.548 0 24.892 Z M 30.834 50.664 C 30.834 54.061 29.719 57.197 27.825 59.725 C 28.527 59.775 29.228 59.801 29.947 59.801 C 31.232 59.801 32.491 59.716 33.733 59.564 C 31.849 56.979 30.834 53.863 30.834 50.664 Z M 15.189 50.165 L 15.206 50.165 L 15.206 37.3 C 12.729 39.058 9.703 40.09 6.432 40.09 C 4.607 40.09 2.848 39.768 1.226 39.177 C 3.643 46.353 8.672 52.329 15.189 55.972 Z" fill="rgb(255, 255, 255)"></path></g></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      c(v, {
                                        className: `framer-k8m97l`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.696 51.019" overflow="visible"><path d="M 0 34.511 L 28.299 34.511 L 28.299 51.019 C 29.917 45.565 34.443 41.47 40.03 40.402 C 40.098 40.233 40.157 40.064 40.225 39.895 C 37.089 39.346 34.283 37.841 32.127 35.677 C 29.286 32.843 27.684 28.998 27.673 24.985 L 3.432 24.985 C 3.406 28.594 2.13 31.916 0 34.511 Z M 33.869 9.788 L 33.869 24.935 L 41.696 24.935 C 39.836 12.662 30.615 2.798 18.671 0 L 18.671 24.977 C 18.671 20.784 20.37 16.981 23.126 14.234 C 25.881 11.478 29.676 9.779 33.869 9.779 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                        withExternalLayout: !0,
                                        children: [
                                          a(v, {
                                            className: `framer-dlqsea`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40.225 26.033" overflow="visible"><path d="M 0 9.526 L 28.299 9.526 L 28.299 26.033 C 29.917 20.58 34.443 16.485 40.03 15.417 C 40.098 15.248 40.157 15.079 40.225 14.91 C 37.089 14.361 34.283 12.856 32.127 10.692 C 29.286 7.858 27.684 4.013 27.673 0 L 3.432 0 C 3.406 3.609 2.13 6.931 0 9.526 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          a(v, {
                                            className: `framer-nmb8k0`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.024 24.977" overflow="visible"><path d="M 15.197 9.788 L 15.197 24.935 L 23.024 24.935 C 21.165 12.662 11.943 2.798 0 0 L 0 24.977 C 0 20.784 1.699 16.981 4.454 14.234 C 7.21 11.478 11.005 9.779 15.197 9.779 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      c(v, {
                                        className: `framer-f32272`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33.733 59.446" overflow="visible"><path d="M 17.234 13.887 C 19.981 16.634 21.68 20.438 21.68 24.63 L 21.68 0 C 15.944 1.631 10.816 4.918 6.939 9.45 C 10.954 9.568 14.58 11.242 17.234 13.887 Z M 0 24.537 L 6.483 24.537 L 6.483 9.982 C 3.059 14.167 0.82 19.193 0 24.537 Z M 30.834 50.309 C 30.834 53.706 29.719 56.842 27.825 59.37 C 28.527 59.42 29.228 59.446 29.947 59.446 C 31.232 59.446 32.491 59.361 33.733 59.209 C 31.849 56.624 30.834 53.508 30.834 50.309 Z M 15.189 49.81 L 15.206 49.81 L 15.206 36.945 C 12.729 38.703 9.703 39.735 6.432 39.735 C 4.607 39.735 2.848 39.413 1.226 38.822 C 3.643 45.998 8.672 51.974 15.189 55.617 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                        withExternalLayout: !0,
                                        children: [
                                          a(v, {
                                            className: `framer-4gitfy`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.741 24.63" overflow="visible"><path d="M 10.295 13.887 C 13.042 16.634 14.741 20.438 14.741 24.63 L 14.741 0 C 9.004 1.631 3.877 4.918 0 9.45 C 4.015 9.568 7.641 11.242 10.295 13.887 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          a(v, {
                                            className: `framer-xb0n80`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.483 14.555" overflow="visible"><path d="M 0 14.555 L 6.483 14.555 L 6.483 0 C 3.059 4.184 0.82 9.211 0 14.555 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          a(v, {
                                            className: `framer-wthgtq`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.908 9.137" overflow="visible"><path d="M 3.009 0 C 3.009 3.398 1.893 6.534 0 9.061 C 0.702 9.112 1.403 9.137 2.122 9.137 C 3.406 9.137 4.666 9.052 5.908 8.9 C 4.024 6.315 3.009 3.199 3.009 0 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          a(v, {
                                            className: `framer-eo26yx`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.98 18.671" overflow="visible"><path d="M 13.963 12.865 L 13.98 12.865 L 13.98 0 C 11.504 1.758 8.478 2.789 5.207 2.789 C 3.381 2.789 1.623 2.468 0 1.876 C 2.417 9.053 7.447 15.028 13.963 18.671 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1jf2ycs`,
                              children: [
                                a(T, {
                                  children: a(S, {
                                    className: `framer-1h5hft2-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `j3Cy51W2k`,
                                    scopeId: `TwvfQk14J`,
                                    children: a(_, {
                                      breakpoint: k,
                                      overrides: {
                                        QPqTdr5Bd: {
                                          srcFile: `https://framerusercontent.com/assets/1SBUPFmivlWB4AcWR8lgsZvk.mp4`,
                                        },
                                      },
                                      children: a(P, {
                                        backgroundColor: `rgba(0, 0, 0, 0)`,
                                        borderRadius: 0,
                                        bottomLeftRadius: 0,
                                        bottomRightRadius: 0,
                                        controls: !1,
                                        height: `100%`,
                                        id: `j3Cy51W2k`,
                                        isMixedBorderRadius: !1,
                                        layoutId: `j3Cy51W2k`,
                                        loop: !0,
                                        muted: !0,
                                        objectFit: `cover`,
                                        playing: !0,
                                        posterEnabled: !0,
                                        srcFile: `../../assets/misc/Vk3ywMXsR0VyfH7BrTW8C5PW8A.mp4`,
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
                                  className: `framer-1dyxvrq`,
                                  children: [
                                    c(`div`, {
                                      className: `framer-79kfvg`,
                                      children: [
                                        a(_, {
                                          breakpoint: k,
                                          overrides: {
                                            QPqTdr5Bd: {
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
                                          children: a(y, {
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
                                            className: `framer-xjlxal`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(y, {
                                          __fromCanvasComponent: !0,
                                          children: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              },
                                              children: `Visual identity`,
                                            }),
                                          }),
                                          className: `framer-1je803k`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    c(`div`, {
                                      className: `framer-iklbi7`,
                                      children: [
                                        a(_, {
                                          breakpoint: k,
                                          overrides: {
                                            QPqTdr5Bd: {
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
                                          children: a(y, {
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
                                            className: `framer-1m388vf`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(y, {
                                          __fromCanvasComponent: !0,
                                          children: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              },
                                              children: `2025`,
                                            }),
                                          }),
                                          className: `framer-38cqm2`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    c(`div`, {
                                      className: `framer-15fbwmy`,
                                      children: [
                                        a(_, {
                                          breakpoint: k,
                                          overrides: {
                                            QPqTdr5Bd: {
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
                                          children: a(y, {
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
                                            className: `framer-1fhgm19`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(y, {
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
                                          className: `framer-wuz93v`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                c(`div`, {
                                  className: `framer-sp60oe`,
                                  children: [
                                    c(`div`, {
                                      className: `framer-1id028a`,
                                      children: [
                                        a(_, {
                                          breakpoint: k,
                                          overrides: {
                                            QPqTdr5Bd: {
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
                                          children: a(y, {
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
                                            className: `framer-xkvzls`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(_, {
                                          breakpoint: k,
                                          overrides: {
                                            QPqTdr5Bd: {
                                              children: a(i, {
                                                children: c(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                    "--framer-font-size": `20px`,
                                                  },
                                                  children: [
                                                    `Visual identity for an imaginary museum. The core concept: `,
                                                    a(`span`, {
                                                      style: {
                                                        "--font-selector": `Qkk7QW1pYW1pZS9MaWdodC92MA==`,
                                                        "--framer-font-weight": `300`,
                                                      },
                                                      children: a(`strong`, {
                                                        children: `circle as the essence of dance`,
                                                      }),
                                                    }),
                                                    `. Not a pose, not a silhouette, but the circular form that defines movement through centuries.`,
                                                  ],
                                                }),
                                              }),
                                            },
                                          },
                                          children: a(y, {
                                            __fromCanvasComponent: !0,
                                            children: a(i, {
                                              children: c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                  "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  "--framer-font-size": `24px`,
                                                },
                                                children: [
                                                  `Visual identity for an imaginary museum. The core concept: `,
                                                  a(`span`, {
                                                    style: {
                                                      "--font-selector": `Qkk7QW1pYW1pZS9MaWdodC92MA==`,
                                                      "--framer-font-weight": `300`,
                                                    },
                                                    children: a(`strong`, {
                                                      children: `circle as the essence of dance`,
                                                    }),
                                                  }),
                                                  `. Not a pose, not a silhouette, but the circular form that defines movement through centuries.`,
                                                ],
                                              }),
                                            }),
                                            className: `framer-m9u95v`,
                                            fonts: [`BI;Amiamie/Regular/v0`, `BI;Amiamie/Light/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    z() &&
                                      c(`div`, {
                                        className: `framer-aeq1tn hidden-10oyrls`,
                                        children: [
                                          c(`div`, {
                                            className: `framer-1sqfowy`,
                                            children: [
                                              a(y, {
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
                                                className: `framer-m1rduw`,
                                                fonts: [`BI;Amiamie/Regular/v0`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              a(y, {
                                                __fromCanvasComponent: !0,
                                                children: a(i, {
                                                  children: a(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                      "--framer-font-size": `20px`,
                                                    },
                                                    children: `Dance-related visual identities rely on literal, clichéd imagery — dancers mid-pose, ribbons, silhouettes. For an imaginary Warsaw dance museum, that approach would blend in with every other identity in the category.`,
                                                  }),
                                                }),
                                                className: `framer-13q9xk3`,
                                                fonts: [`BI;Amiamie/Regular/v0`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          c(`div`, {
                                            className: `framer-ygcwoq`,
                                            children: [
                                              a(y, {
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
                                                className: `framer-117tgf6`,
                                                fonts: [`BI;Amiamie/Regular/v0`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              a(y, {
                                                __fromCanvasComponent: !0,
                                                children: a(i, {
                                                  children: a(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                      "--framer-font-size": `20px`,
                                                    },
                                                    children: `The solution came from research showing that dance, across centuries, has always been built around the circle. The logo’s typography grew from that shape, and the color was chosen to reflect the energy and power of the art form.`,
                                                  }),
                                                }),
                                                className: `framer-16zove2`,
                                                fonts: [`BI;Amiamie/Regular/v0`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          c(`div`, {
                                            className: `framer-2lxmiz`,
                                            children: [
                                              a(y, {
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
                                                className: `framer-2ovuqw`,
                                                fonts: [`BI;Amiamie/Regular/v0`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              a(y, {
                                                __fromCanvasComponent: !0,
                                                children: a(i, {
                                                  children: a(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                      "--framer-font-size": `20px`,
                                                    },
                                                    children: `A flexible identity that reads instantly at any scale — from a building sign to an Instagram story — built on one repeating motif instead of a literal dance image.`,
                                                  }),
                                                }),
                                                className: `framer-1srlxyz`,
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
                          ],
                        }),
                      ],
                    }),
                    c(B, {
                      __framer__animate: { transition: X },
                      __framer__animateOnce: !0,
                      __framer__enter: me,
                      __framer__exit: he,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.16,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-1jfo67h`,
                      layout: I,
                      children: [
                        c(`div`, {
                          className: `framer-1abnfk4`,
                          children: [
                            c(`div`, {
                              className: `framer-risffc`,
                              children: [
                                c(`div`, {
                                  className: `framer-189twhe`,
                                  children: [
                                    a(y, {
                                      __fromCanvasComponent: !0,
                                      children: a(i, {
                                        children: a(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-text-color": `rgb(87, 87, 87)`,
                                          },
                                          children: `Idea of logo:`,
                                        }),
                                      }),
                                      className: `framer-clrufj`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(_, {
                                      breakpoint: k,
                                      overrides: {
                                        QPqTdr5Bd: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 2232,
                                            intrinsicWidth: 4012,
                                            loading: m(
                                              (p?.y || 0) +
                                                0 +
                                                1090.4 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                27.2
                                            ),
                                            pixelHeight: 2232,
                                            pixelWidth: 4012,
                                            sizes: `max(${p?.width || `100vw`} - 40px, 1px)`,
                                            src: `../../assets/images/RDmYEmjHL7f4A7eRW80puUiDY48.png?width=4012&height=2232`,
                                            srcSet: `../../assets/images/RDmYEmjHL7f4A7eRW80puUiDY48.png?scale-down-to=512&width=4012&height=2232 512w,../../assets/images/RDmYEmjHL7f4A7eRW80puUiDY48.png?scale-down-to=1024&width=4012&height=2232 1024w,../../assets/images/RDmYEmjHL7f4A7eRW80puUiDY48.png 2048w,../../assets/images/RDmYEmjHL7f4A7eRW80puUiDY48.png?width=4012&height=2232 4012w`,
                                          },
                                        },
                                      },
                                      children: a(w, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 2232,
                                          intrinsicWidth: 4012,
                                          loading: m(
                                            (p?.y || 0) + 0 + 626.8 + 0 + 0 + 0 + 0 + 0 + 0 + 27.2
                                          ),
                                          pixelHeight: 2232,
                                          pixelWidth: 4012,
                                          src: `../../assets/images/RDmYEmjHL7f4A7eRW80puUiDY48.png?width=4012&height=2232`,
                                          srcSet: `../../assets/images/RDmYEmjHL7f4A7eRW80puUiDY48.png?scale-down-to=512&width=4012&height=2232 512w,../../assets/images/RDmYEmjHL7f4A7eRW80puUiDY48.png?scale-down-to=1024&width=4012&height=2232 1024w,../../assets/images/RDmYEmjHL7f4A7eRW80puUiDY48.png 2048w,../../assets/images/RDmYEmjHL7f4A7eRW80puUiDY48.png?width=4012&height=2232 4012w`,
                                        },
                                        className: `framer-axrhm5`,
                                        "data-framer-name": `Artboard 3Ð±ÑÐ»Ð¸Ð¹`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  ],
                                }),
                                c(`div`, {
                                  className: `framer-1egvprs`,
                                  children: [
                                    a(y, {
                                      __fromCanvasComponent: !0,
                                      children: a(i, {
                                        children: a(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-text-color": `rgb(87, 87, 87)`,
                                          },
                                          children: `Different sketches and other variants:`,
                                        }),
                                      }),
                                      className: `framer-1t1bnm4`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(_, {
                                      breakpoint: k,
                                      overrides: {
                                        QPqTdr5Bd: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 2080,
                                            intrinsicWidth: 3592,
                                            loading: m(
                                              (p?.y || 0) +
                                                0 +
                                                1090.4 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                242.2 +
                                                0 +
                                                27.2
                                            ),
                                            pixelHeight: 2080,
                                            pixelWidth: 3592,
                                            sizes: `max(${p?.width || `100vw`} - 40px, 1px)`,
                                            src: `../../assets/images/yf4ayLrFViTJeHmUbc9Sp3XzAtw.png?width=3592&height=2080`,
                                            srcSet: `../../assets/images/yf4ayLrFViTJeHmUbc9Sp3XzAtw.png?scale-down-to=512&width=3592&height=2080 512w,../../assets/images/yf4ayLrFViTJeHmUbc9Sp3XzAtw.png?scale-down-to=1024&width=3592&height=2080 1024w,../../assets/images/yf4ayLrFViTJeHmUbc9Sp3XzAtw.png 2048w,../../assets/images/yf4ayLrFViTJeHmUbc9Sp3XzAtw.png?width=3592&height=2080 3592w`,
                                          },
                                        },
                                      },
                                      children: a(w, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 2080,
                                          intrinsicWidth: 3592,
                                          loading: m(
                                            (p?.y || 0) +
                                              0 +
                                              626.8 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              491.2 +
                                              0 +
                                              27.2
                                          ),
                                          pixelHeight: 2080,
                                          pixelWidth: 3592,
                                          src: `../../assets/images/yf4ayLrFViTJeHmUbc9Sp3XzAtw.png?width=3592&height=2080`,
                                          srcSet: `../../assets/images/yf4ayLrFViTJeHmUbc9Sp3XzAtw.png?scale-down-to=512&width=3592&height=2080 512w,../../assets/images/yf4ayLrFViTJeHmUbc9Sp3XzAtw.png?scale-down-to=1024&width=3592&height=2080 1024w,../../assets/images/yf4ayLrFViTJeHmUbc9Sp3XzAtw.png 2048w,../../assets/images/yf4ayLrFViTJeHmUbc9Sp3XzAtw.png?width=3592&height=2080 3592w`,
                                        },
                                        className: `framer-6ruij4`,
                                        "data-framer-name": `Artboard 3 copyÐ±ÑÐ»Ð¸Ð¹`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  ],
                                }),
                                c(`div`, {
                                  className: `framer-kt4xkp`,
                                  children: [
                                    a(y, {
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
                                      className: `framer-mcq34a`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(_, {
                                      breakpoint: k,
                                      overrides: {
                                        QPqTdr5Bd: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 2720,
                                            intrinsicWidth: 4576,
                                            loading: m(
                                              (p?.y || 0) +
                                                0 +
                                                1090.4 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                492.4 +
                                                0 +
                                                27.2
                                            ),
                                            pixelHeight: 2720,
                                            pixelWidth: 4576,
                                            sizes: `max(${p?.width || `100vw`} - 40px, 1px)`,
                                            src: `../../assets/images/s1aYIj6heOAw1Qof49OfrefvFAo.png?width=4576&height=2720`,
                                            srcSet: `../../assets/images/s1aYIj6heOAw1Qof49OfrefvFAo.png?scale-down-to=512&width=4576&height=2720 512w,../../assets/images/s1aYIj6heOAw1Qof49OfrefvFAo.png?scale-down-to=1024&width=4576&height=2720 1024w,../../assets/images/s1aYIj6heOAw1Qof49OfrefvFAo.png 2048w,../../assets/images/s1aYIj6heOAw1Qof49OfrefvFAo.png?scale-down-to=4096&width=4576&height=2720 4096w,../../assets/images/s1aYIj6heOAw1Qof49OfrefvFAo.png?width=4576&height=2720 4576w`,
                                          },
                                        },
                                      },
                                      children: a(w, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 2720,
                                          intrinsicWidth: 4576,
                                          loading: m(
                                            (p?.y || 0) +
                                              0 +
                                              626.8 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              1000.4 +
                                              0 +
                                              27.2
                                          ),
                                          pixelHeight: 2720,
                                          pixelWidth: 4576,
                                          src: `../../assets/images/s1aYIj6heOAw1Qof49OfrefvFAo.png?width=4576&height=2720`,
                                          srcSet: `../../assets/images/s1aYIj6heOAw1Qof49OfrefvFAo.png?scale-down-to=512&width=4576&height=2720 512w,../../assets/images/s1aYIj6heOAw1Qof49OfrefvFAo.png?scale-down-to=1024&width=4576&height=2720 1024w,../../assets/images/s1aYIj6heOAw1Qof49OfrefvFAo.png 2048w,../../assets/images/s1aYIj6heOAw1Qof49OfrefvFAo.png?scale-down-to=4096&width=4576&height=2720 4096w,../../assets/images/s1aYIj6heOAw1Qof49OfrefvFAo.png?width=4576&height=2720 4576w`,
                                        },
                                        className: `framer-1l7f7we`,
                                        "data-framer-name": `Artboard 3 copy 2Ð±ÑÐ»Ð¸Ð¹`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  ],
                                }),
                                a(_, {
                                  breakpoint: k,
                                  overrides: {
                                    QPqTdr5Bd: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 628,
                                        intrinsicWidth: 1400,
                                        loading: m(
                                          (p?.y || 0) + 0 + 1090.4 + 0 + 0 + 0 + 0 + 747.6
                                        ),
                                        pixelHeight: 628,
                                        pixelWidth: 1400,
                                        sizes: `max(${p?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/6WiEs27G55SKeLJncsqSQ6dpBYA.png`,
                                        srcSet: `../../assets/images/6WiEs27G55SKeLJncsqSQ6dpBYA.png?scale-down-to=512&width=1400&height=628 512w,../../assets/images/6WiEs27G55SKeLJncsqSQ6dpBYA.png?scale-down-to=1024&width=1400&height=628 1024w,../../assets/images/6WiEs27G55SKeLJncsqSQ6dpBYA.png 1400w`,
                                      },
                                    },
                                  },
                                  children: a(w, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 628,
                                      intrinsicWidth: 1400,
                                      loading: m((p?.y || 0) + 0 + 626.8 + 0 + 0 + 0 + 0 + 1521.6),
                                      pixelHeight: 628,
                                      pixelWidth: 1400,
                                      src: `../../assets/images/6WiEs27G55SKeLJncsqSQ6dpBYA.png`,
                                      srcSet: `../../assets/images/6WiEs27G55SKeLJncsqSQ6dpBYA.png?scale-down-to=512&width=1400&height=628 512w,../../assets/images/6WiEs27G55SKeLJncsqSQ6dpBYA.png?scale-down-to=1024&width=1400&height=628 1024w,../../assets/images/6WiEs27G55SKeLJncsqSQ6dpBYA.png 1400w`,
                                    },
                                    className: `framer-4bcb8f`,
                                    "data-framer-name": `ubu animacja`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                a(_, {
                                  breakpoint: k,
                                  overrides: {
                                    QPqTdr5Bd: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 628,
                                        intrinsicWidth: 1400,
                                        loading: m(
                                          (p?.y || 0) + 0 + 1090.4 + 0 + 0 + 0 + 0 + 924.6
                                        ),
                                        pixelHeight: 628,
                                        pixelWidth: 1400,
                                        sizes: `max(${p?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/Hx3UkmAr0EmvPLOHIHHiZGCIdA.png`,
                                        srcSet: `../../assets/images/Hx3UkmAr0EmvPLOHIHHiZGCIdA.png?scale-down-to=512&width=1400&height=628 512w,../../assets/images/Hx3UkmAr0EmvPLOHIHHiZGCIdA.png?scale-down-to=1024&width=1400&height=628 1024w,../../assets/images/Hx3UkmAr0EmvPLOHIHHiZGCIdA.png 1400w`,
                                      },
                                    },
                                  },
                                  children: a(w, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 628,
                                      intrinsicWidth: 1400,
                                      loading: m((p?.y || 0) + 0 + 626.8 + 0 + 0 + 0 + 0 + 1899.6),
                                      pixelHeight: 628,
                                      pixelWidth: 1400,
                                      src: `../../assets/images/Hx3UkmAr0EmvPLOHIHHiZGCIdA.png`,
                                      srcSet: `../../assets/images/Hx3UkmAr0EmvPLOHIHHiZGCIdA.png?scale-down-to=512&width=1400&height=628 512w,../../assets/images/Hx3UkmAr0EmvPLOHIHHiZGCIdA.png?scale-down-to=1024&width=1400&height=628 1024w,../../assets/images/Hx3UkmAr0EmvPLOHIHHiZGCIdA.png 1400w`,
                                    },
                                    className: `framer-7hqmjj`,
                                    "data-framer-name": `PXL 20260623_1223075961`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                a(_, {
                                  breakpoint: k,
                                  overrides: {
                                    QPqTdr5Bd: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 2e3,
                                        intrinsicWidth: 2936,
                                        loading: m(
                                          (p?.y || 0) + 0 + 1090.4 + 0 + 0 + 0 + 0 + 1101.6
                                        ),
                                        pixelHeight: 2e3,
                                        pixelWidth: 2936,
                                        sizes: `max(${p?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/ymqrXopgmBV7D4h6jiwhgXWC1Y.png?width=2936&height=2000`,
                                        srcSet: `../../assets/images/ymqrXopgmBV7D4h6jiwhgXWC1Y.png?scale-down-to=512&width=2936&height=2000 512w,../../assets/images/ymqrXopgmBV7D4h6jiwhgXWC1Y.png?scale-down-to=1024&width=2936&height=2000 1024w,../../assets/images/ymqrXopgmBV7D4h6jiwhgXWC1Y.png 2048w,../../assets/images/ymqrXopgmBV7D4h6jiwhgXWC1Y.png?width=2936&height=2000 2936w`,
                                      },
                                    },
                                  },
                                  children: a(w, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 2e3,
                                      intrinsicWidth: 2936,
                                      loading: m((p?.y || 0) + 0 + 626.8 + 0 + 0 + 0 + 0 + 2277.6),
                                      pixelHeight: 2e3,
                                      pixelWidth: 2936,
                                      src: `../../assets/images/ymqrXopgmBV7D4h6jiwhgXWC1Y.png?width=2936&height=2000`,
                                      srcSet: `../../assets/images/ymqrXopgmBV7D4h6jiwhgXWC1Y.png?scale-down-to=512&width=2936&height=2000 512w,../../assets/images/ymqrXopgmBV7D4h6jiwhgXWC1Y.png?scale-down-to=1024&width=2936&height=2000 1024w,../../assets/images/ymqrXopgmBV7D4h6jiwhgXWC1Y.png 2048w,../../assets/images/ymqrXopgmBV7D4h6jiwhgXWC1Y.png?width=2936&height=2000 2936w`,
                                    },
                                    className: `framer-dbicm2`,
                                    "data-framer-name": `Untitled-2`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                a(_, {
                                  breakpoint: k,
                                  overrides: {
                                    QPqTdr5Bd: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 723,
                                        intrinsicWidth: 1400,
                                        loading: m(
                                          (p?.y || 0) + 0 + 1090.4 + 0 + 0 + 0 + 0 + 1359.6
                                        ),
                                        pixelHeight: 723,
                                        pixelWidth: 1400,
                                        sizes: `max(${p?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/Jx9iqoQQHyCAxwRE6u2QjpSV0.png`,
                                        srcSet: `../../assets/images/Jx9iqoQQHyCAxwRE6u2QjpSV0.png?scale-down-to=512&width=1400&height=723 512w,../../assets/images/Jx9iqoQQHyCAxwRE6u2QjpSV0.png?scale-down-to=1024&width=1400&height=723 1024w,../../assets/images/Jx9iqoQQHyCAxwRE6u2QjpSV0.png 1400w`,
                                      },
                                    },
                                  },
                                  children: a(w, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 723,
                                      intrinsicWidth: 1400,
                                      loading: m((p?.y || 0) + 0 + 626.8 + 0 + 0 + 0 + 0 + 2841.6),
                                      pixelHeight: 723,
                                      pixelWidth: 1400,
                                      src: `../../assets/images/Jx9iqoQQHyCAxwRE6u2QjpSV0.png`,
                                      srcSet: `../../assets/images/Jx9iqoQQHyCAxwRE6u2QjpSV0.png?scale-down-to=512&width=1400&height=723 512w,../../assets/images/Jx9iqoQQHyCAxwRE6u2QjpSV0.png?scale-down-to=1024&width=1400&height=723 1024w,../../assets/images/Jx9iqoQQHyCAxwRE6u2QjpSV0.png 1400w`,
                                    },
                                    className: `framer-hwvvd`,
                                    "data-framer-name": `Untitled-1`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                a(_, {
                                  breakpoint: k,
                                  overrides: {
                                    QPqTdr5Bd: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 628,
                                        intrinsicWidth: 1400,
                                        loading: m(
                                          (p?.y || 0) + 0 + 1090.4 + 0 + 0 + 0 + 0 + 1560.6
                                        ),
                                        pixelHeight: 628,
                                        pixelWidth: 1400,
                                        sizes: `max(${p?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/ldqNRSQyseJ8jNAfOnz2AuYW8U.png`,
                                        srcSet: `../../assets/images/ldqNRSQyseJ8jNAfOnz2AuYW8U.png?scale-down-to=512&width=1400&height=628 512w,../../assets/images/ldqNRSQyseJ8jNAfOnz2AuYW8U.png?scale-down-to=1024&width=1400&height=628 1024w,../../assets/images/ldqNRSQyseJ8jNAfOnz2AuYW8U.png 1400w`,
                                      },
                                    },
                                  },
                                  children: a(w, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 628,
                                      intrinsicWidth: 1400,
                                      loading: m((p?.y || 0) + 0 + 626.8 + 0 + 0 + 0 + 0 + 3273.6),
                                      pixelHeight: 628,
                                      pixelWidth: 1400,
                                      src: `../../assets/images/ldqNRSQyseJ8jNAfOnz2AuYW8U.png`,
                                      srcSet: `../../assets/images/ldqNRSQyseJ8jNAfOnz2AuYW8U.png?scale-down-to=512&width=1400&height=628 512w,../../assets/images/ldqNRSQyseJ8jNAfOnz2AuYW8U.png?scale-down-to=1024&width=1400&height=628 1024w,../../assets/images/ldqNRSQyseJ8jNAfOnz2AuYW8U.png 1400w`,
                                    },
                                    className: `framer-lusyjb`,
                                    "data-framer-name": `Untitled-1`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                a(_, {
                                  breakpoint: k,
                                  overrides: {
                                    QPqTdr5Bd: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 454,
                                        intrinsicWidth: 1400,
                                        loading: m(
                                          (p?.y || 0) + 0 + 1090.4 + 0 + 0 + 0 + 0 + 1737.6
                                        ),
                                        pixelHeight: 454,
                                        pixelWidth: 1400,
                                        sizes: `max(${p?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/x7lOC3nEvfFNHRctSHdeRNFRVE4.png`,
                                        srcSet: `../../assets/images/x7lOC3nEvfFNHRctSHdeRNFRVE4.png?scale-down-to=512&width=1400&height=454 512w,../../assets/images/x7lOC3nEvfFNHRctSHdeRNFRVE4.png?scale-down-to=1024&width=1400&height=454 1024w,../../assets/images/x7lOC3nEvfFNHRctSHdeRNFRVE4.png 1400w`,
                                      },
                                    },
                                  },
                                  children: a(w, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 454,
                                      intrinsicWidth: 1400,
                                      loading: m((p?.y || 0) + 0 + 626.8 + 0 + 0 + 0 + 0 + 3651.6),
                                      pixelHeight: 454,
                                      pixelWidth: 1400,
                                      src: `../../assets/images/x7lOC3nEvfFNHRctSHdeRNFRVE4.png`,
                                      srcSet: `../../assets/images/x7lOC3nEvfFNHRctSHdeRNFRVE4.png?scale-down-to=512&width=1400&height=454 512w,../../assets/images/x7lOC3nEvfFNHRctSHdeRNFRVE4.png?scale-down-to=1024&width=1400&height=454 1024w,../../assets/images/x7lOC3nEvfFNHRctSHdeRNFRVE4.png 1400w`,
                                    },
                                    className: `framer-wuvx0`,
                                    "data-framer-name": `Untitled-1`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                a(_, {
                                  breakpoint: k,
                                  overrides: {
                                    QPqTdr5Bd: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 454,
                                        intrinsicWidth: 1400,
                                        loading: m(
                                          (p?.y || 0) + 0 + 1090.4 + 0 + 0 + 0 + 0 + 1871.6
                                        ),
                                        pixelHeight: 454,
                                        pixelWidth: 1400,
                                        sizes: `max(${p?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/cUvL4YuhIciQHNXKYHUySSau5k.png`,
                                        srcSet: `../../assets/images/cUvL4YuhIciQHNXKYHUySSau5k.png?scale-down-to=512&width=1400&height=454 512w,../../assets/images/cUvL4YuhIciQHNXKYHUySSau5k.png?scale-down-to=1024&width=1400&height=454 1024w,../../assets/images/cUvL4YuhIciQHNXKYHUySSau5k.png 1400w`,
                                      },
                                    },
                                  },
                                  children: a(w, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 454,
                                      intrinsicWidth: 1400,
                                      loading: m((p?.y || 0) + 0 + 626.8 + 0 + 0 + 0 + 0 + 3930.6),
                                      pixelHeight: 454,
                                      pixelWidth: 1400,
                                      src: `../../assets/images/cUvL4YuhIciQHNXKYHUySSau5k.png`,
                                      srcSet: `../../assets/images/cUvL4YuhIciQHNXKYHUySSau5k.png?scale-down-to=512&width=1400&height=454 512w,../../assets/images/cUvL4YuhIciQHNXKYHUySSau5k.png?scale-down-to=1024&width=1400&height=454 1024w,../../assets/images/cUvL4YuhIciQHNXKYHUySSau5k.png 1400w`,
                                    },
                                    className: `framer-muz5ng`,
                                    "data-framer-name": `Untitled-1`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                a(_, {
                                  breakpoint: k,
                                  overrides: {
                                    QPqTdr5Bd: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 596,
                                        intrinsicWidth: 1381,
                                        loading: m(
                                          (p?.y || 0) + 0 + 1090.4 + 0 + 0 + 0 + 0 + 2005.6
                                        ),
                                        pixelHeight: 596,
                                        pixelWidth: 1381,
                                        sizes: `max(${p?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/flYTSczCRfPx0pRLW9nN58diVk.png`,
                                        srcSet: `../../assets/images/flYTSczCRfPx0pRLW9nN58diVk.png?scale-down-to=512&width=1381&height=596 512w,../../assets/images/flYTSczCRfPx0pRLW9nN58diVk.png?scale-down-to=1024&width=1381&height=596 1024w,../../assets/images/flYTSczCRfPx0pRLW9nN58diVk.png 1381w`,
                                      },
                                    },
                                  },
                                  children: a(w, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 596,
                                      intrinsicWidth: 1381,
                                      loading: m((p?.y || 0) + 0 + 626.8 + 0 + 0 + 0 + 0 + 4209.6),
                                      pixelHeight: 596,
                                      pixelWidth: 1381,
                                      src: `../../assets/images/flYTSczCRfPx0pRLW9nN58diVk.png`,
                                      srcSet: `../../assets/images/flYTSczCRfPx0pRLW9nN58diVk.png?scale-down-to=512&width=1381&height=596 512w,../../assets/images/flYTSczCRfPx0pRLW9nN58diVk.png?scale-down-to=1024&width=1381&height=596 1024w,../../assets/images/flYTSczCRfPx0pRLW9nN58diVk.png 1381w`,
                                    },
                                    className: `framer-rmwsyx`,
                                    "data-framer-name": `Untitled-1`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                a(_, {
                                  breakpoint: k,
                                  overrides: {
                                    QPqTdr5Bd: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 456,
                                        intrinsicWidth: 1381,
                                        loading: m(
                                          (p?.y || 0) + 0 + 1090.4 + 0 + 0 + 0 + 0 + 2176.6
                                        ),
                                        pixelHeight: 456,
                                        pixelWidth: 1381,
                                        sizes: `max(${p?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/UYiub1H0gvNy11B59RCWyQj3X4.png`,
                                        srcSet: `../../assets/images/UYiub1H0gvNy11B59RCWyQj3X4.png?scale-down-to=512&width=1381&height=456 512w,../../assets/images/UYiub1H0gvNy11B59RCWyQj3X4.png?scale-down-to=1024&width=1381&height=456 1024w,../../assets/images/UYiub1H0gvNy11B59RCWyQj3X4.png 1381w`,
                                      },
                                    },
                                  },
                                  children: a(w, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 456,
                                      intrinsicWidth: 1381,
                                      loading: m((p?.y || 0) + 0 + 626.8 + 0 + 0 + 0 + 0 + 4573.6),
                                      pixelHeight: 456,
                                      pixelWidth: 1381,
                                      src: `../../assets/images/UYiub1H0gvNy11B59RCWyQj3X4.png`,
                                      srcSet: `../../assets/images/UYiub1H0gvNy11B59RCWyQj3X4.png?scale-down-to=512&width=1381&height=456 512w,../../assets/images/UYiub1H0gvNy11B59RCWyQj3X4.png?scale-down-to=1024&width=1381&height=456 1024w,../../assets/images/UYiub1H0gvNy11B59RCWyQj3X4.png 1381w`,
                                    },
                                    className: `framer-xabx41`,
                                    "data-framer-name": `Untitled-1`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                              ],
                            }),
                            L() &&
                              c(`div`, {
                                className: `framer-7ezhrd hidden-1y63n48`,
                                children: [
                                  c(`div`, {
                                    className: `framer-yu6fya`,
                                    children: [
                                      a(y, {
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
                                        className: `framer-cj4kgn`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(y, {
                                        __fromCanvasComponent: !0,
                                        children: a(i, {
                                          children: a(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            },
                                            children: `Dance-related visual identities rely on literal, clichéd imagery — dancers mid-pose, ribbons, silhouettes. For an imaginary Warsaw dance museum, that approach would blend in with every other identity in the category.`,
                                          }),
                                        }),
                                        className: `framer-u6lfql`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  c(`div`, {
                                    className: `framer-m6qmmm`,
                                    children: [
                                      a(y, {
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
                                        className: `framer-19liqcq`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(y, {
                                        __fromCanvasComponent: !0,
                                        children: a(i, {
                                          children: a(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            },
                                            children: `The solution came from research showing that dance, across centuries, has always been built around the circle. The logo’s typography grew from that shape, and the color was chosen to reflect the energy and power of the art form.`,
                                          }),
                                        }),
                                        className: `framer-1rheis3`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  c(`div`, {
                                    className: `framer-1pjlnz5`,
                                    children: [
                                      a(y, {
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
                                        className: `framer-160wta2`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(y, {
                                        __fromCanvasComponent: !0,
                                        children: a(i, {
                                          children: a(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            },
                                            children: `A flexible identity that reads instantly at any scale — from a building sign to an Instagram story — built on one repeating motif instead of a literal dance image.`,
                                          }),
                                        }),
                                        className: `framer-16en8uk`,
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
                          className: `framer-1kkioz7`,
                          children: [
                            c(`div`, {
                              className: `framer-1wtizo4`,
                              children: [
                                a(b, {
                                  href: { webPageId: `o9Tvh7Ah_` },
                                  motionChild: !0,
                                  nodeId: `AMsLTxTHW`,
                                  openInNewTab: !1,
                                  scopeId: `TwvfQk14J`,
                                  children: a(u.a, {
                                    className: `framer-1q4cc5s framer-kukiof`,
                                    children: a(T, {
                                      children: a(S, {
                                        className: `framer-10kzspr-container`,
                                        isModuleExternal: !0,
                                        nodeId: `d1v81XTEK`,
                                        scopeId: `TwvfQk14J`,
                                        children: a(M, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 0,
                                          bottomLeftRadius: 0,
                                          bottomRightRadius: 0,
                                          controls: !1,
                                          height: `100%`,
                                          id: `d1v81XTEK`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `d1v81XTEK`,
                                          loop: !0,
                                          muted: !0,
                                          objectFit: `cover`,
                                          playing: !0,
                                          posterEnabled: !1,
                                          srcFile: `../../assets/misc/X7mVWw48oBMDDHbcxH3RhVommQ.mp4`,
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
                                  className: `framer-fm5lg8`,
                                  children: [
                                    a(y, {
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
                                          children: `SheetSolved visual identity`,
                                        }),
                                      }),
                                      className: `framer-1impumf`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(y, {
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
                                      className: `framer-1jgg69m`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-381cp9`,
                              children: [
                                a(b, {
                                  href: { webPageId: `M2JH_EIJa` },
                                  motionChild: !0,
                                  nodeId: `yVzhgQo5n`,
                                  openInNewTab: !1,
                                  scopeId: `TwvfQk14J`,
                                  children: a(u.a, {
                                    className: `framer-1x03wyp framer-kukiof`,
                                    children: a(T, {
                                      children: a(S, {
                                        className: `framer-jmb91-container`,
                                        isModuleExternal: !0,
                                        nodeId: `k_9j183Wz`,
                                        scopeId: `TwvfQk14J`,
                                        children: a(M, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 0,
                                          bottomLeftRadius: 0,
                                          bottomRightRadius: 0,
                                          controls: !1,
                                          height: `100%`,
                                          id: `k_9j183Wz`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `k_9j183Wz`,
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
                                c(`div`, {
                                  className: `framer-1asguux`,
                                  children: [
                                    a(y, {
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
                                      className: `framer-12wob0u`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(y, {
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
                                      className: `framer-l5zqel`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-foixt2`,
                              children: [
                                a(b, {
                                  href: { webPageId: `aCRbSljkl` },
                                  motionChild: !0,
                                  nodeId: `G5dRxWIlJ`,
                                  openInNewTab: !1,
                                  scopeId: `TwvfQk14J`,
                                  children: a(u.a, {
                                    className: `framer-1fsyqio framer-kukiof`,
                                    children: a(T, {
                                      children: a(S, {
                                        className: `framer-1i88v27-container`,
                                        isModuleExternal: !0,
                                        nodeId: `RlbX3rZb8`,
                                        scopeId: `TwvfQk14J`,
                                        children: a(M, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 0,
                                          bottomLeftRadius: 0,
                                          bottomRightRadius: 0,
                                          controls: !1,
                                          height: `100%`,
                                          id: `RlbX3rZb8`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `RlbX3rZb8`,
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
                                  className: `framer-o9intv`,
                                  children: [
                                    a(y, {
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
                                      className: `framer-11sqvqy`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(y, {
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
                                      className: `framer-1eg3s0t`,
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
                      breakpoint: k,
                      overrides: { QPqTdr5Bd: { y: (p?.y || 0) + 0 + 4843 } },
                      children: a(T, {
                        height: 390,
                        width: p?.width || `100vw`,
                        y: (p?.y || 0) + 0 + 6063.4,
                        children: a(H, {
                          __framer__animate: { transition: Z },
                          __framer__animateOnce: !0,
                          __framer__enter: ge,
                          __framer__exit: _e,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.12,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-vrd04g-container`,
                          layout: I,
                          nodeId: `YZL3PofMI`,
                          rendersWithMotion: !0,
                          scopeId: `TwvfQk14J`,
                          children: a(_, {
                            breakpoint: k,
                            overrides: { QPqTdr5Bd: { variant: Y(`bC5BwOq5u`) } },
                            children: a(A, {
                              height: `100%`,
                              id: `YZL3PofMI`,
                              layoutId: `YZL3PofMI`,
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
        `.framer-Bnjzq.framer-kukiof, .framer-Bnjzq .framer-kukiof { display: block; }`,
        `.framer-Bnjzq.framer-10oyrls { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-Bnjzq .framer-1xzcwd5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Bnjzq .framer-fkdes-container, .framer-Bnjzq .framer-1h5hft2-container, .framer-Bnjzq .framer-vrd04g-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Bnjzq .framer-1k0ft6u, .framer-Bnjzq .framer-fm5lg8, .framer-Bnjzq .framer-1asguux, .framer-Bnjzq .framer-o9intv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Bnjzq .framer-8x042o { align-content: center; align-items: center; background-color: #e01f27; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-Bnjzq .framer-1gyj3e7, .framer-Bnjzq .framer-a3zhjj { height: 60px; position: relative; width: 60px; }`,
        `.framer-Bnjzq .framer-scjg98, .framer-Bnjzq .framer-k8m97l { height: 51px; left: 18px; position: absolute; top: 0px; width: 42px; }`,
        `.framer-Bnjzq .framer-1kfbmuc, .framer-Bnjzq .framer-dlqsea { height: 26px; left: 0px; position: absolute; top: 25px; width: 40px; }`,
        `.framer-Bnjzq .framer-egjbdv, .framer-Bnjzq .framer-nmb8k0 { height: 25px; left: 19px; position: absolute; top: 0px; width: 23px; }`,
        `.framer-Bnjzq .framer-pc9kgv, .framer-Bnjzq .framer-f32272 { height: 60px; left: 0px; position: absolute; top: 0px; width: 34px; }`,
        `.framer-Bnjzq .framer-1924dz3, .framer-Bnjzq .framer-4gitfy { height: 25px; left: 7px; position: absolute; top: 0px; width: 15px; }`,
        `.framer-Bnjzq .framer-y3xwxa, .framer-Bnjzq .framer-xb0n80 { height: 15px; left: 0px; position: absolute; top: 10px; width: 7px; }`,
        `.framer-Bnjzq .framer-196tuv2, .framer-Bnjzq .framer-wthgtq { height: 9px; left: 28px; position: absolute; top: 50px; width: 6px; }`,
        `.framer-Bnjzq .framer-1rgj1s8, .framer-Bnjzq .framer-eo26yx { height: 19px; left: 1px; position: absolute; top: 37px; width: 14px; }`,
        `.framer-Bnjzq .framer-1qenst { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 1px; }`,
        `.framer-Bnjzq .framer-b2bee0, .framer-Bnjzq .framer-xjlxal, .framer-Bnjzq .framer-1je803k, .framer-Bnjzq .framer-1m388vf, .framer-Bnjzq .framer-38cqm2, .framer-Bnjzq .framer-1fhgm19, .framer-Bnjzq .framer-wuz93v, .framer-Bnjzq .framer-xkvzls, .framer-Bnjzq .framer-m1rduw, .framer-Bnjzq .framer-117tgf6, .framer-Bnjzq .framer-2ovuqw, .framer-Bnjzq .framer-clrufj, .framer-Bnjzq .framer-1t1bnm4, .framer-Bnjzq .framer-mcq34a, .framer-Bnjzq .framer-cj4kgn, .framer-Bnjzq .framer-19liqcq, .framer-Bnjzq .framer-160wta2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Bnjzq .framer-1jf2ycs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Bnjzq .framer-1dyxvrq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-Bnjzq .framer-79kfvg, .framer-Bnjzq .framer-iklbi7, .framer-Bnjzq .framer-15fbwmy, .framer-Bnjzq .framer-yu6fya { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-Bnjzq .framer-sp60oe { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-Bnjzq .framer-1id028a, .framer-Bnjzq .framer-1sqfowy, .framer-Bnjzq .framer-ygcwoq, .framer-Bnjzq .framer-2lxmiz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Bnjzq .framer-m9u95v { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 790px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Bnjzq .framer-aeq1tn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Bnjzq .framer-13q9xk3, .framer-Bnjzq .framer-16zove2, .framer-Bnjzq .framer-1srlxyz, .framer-Bnjzq .framer-1rheis3, .framer-Bnjzq .framer-16en8uk, .framer-Bnjzq .framer-1impumf, .framer-Bnjzq .framer-1jgg69m, .framer-Bnjzq .framer-12wob0u, .framer-Bnjzq .framer-l5zqel, .framer-Bnjzq .framer-11sqvqy, .framer-Bnjzq .framer-1eg3s0t { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Bnjzq .framer-1jfo67h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Bnjzq .framer-1abnfk4 { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 53px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-Bnjzq .framer-risffc { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Bnjzq .framer-189twhe, .framer-Bnjzq .framer-1egvprs, .framer-Bnjzq .framer-kt4xkp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Bnjzq .framer-axrhm5, .framer-Bnjzq .framer-6ruij4, .framer-Bnjzq .framer-1l7f7we, .framer-Bnjzq .framer-7hqmjj, .framer-Bnjzq .framer-dbicm2, .framer-Bnjzq .framer-hwvvd, .framer-Bnjzq .framer-lusyjb, .framer-Bnjzq .framer-wuvx0, .framer-Bnjzq .framer-muz5ng, .framer-Bnjzq .framer-rmwsyx, .framer-Bnjzq .framer-xabx41 { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-Bnjzq .framer-4bcb8f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 40px; position: relative; width: 100%; }`,
        `.framer-Bnjzq .framer-7ezhrd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; top: 40px; width: min-content; z-index: 1; }`,
        `.framer-Bnjzq .framer-u6lfql { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 309px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Bnjzq .framer-m6qmmm, .framer-Bnjzq .framer-1pjlnz5 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; }`,
        `.framer-Bnjzq .framer-1kkioz7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-Bnjzq .framer-1wtizo4, .framer-Bnjzq .framer-381cp9, .framer-Bnjzq .framer-foixt2 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Bnjzq .framer-1q4cc5s, .framer-Bnjzq .framer-1x03wyp, .framer-Bnjzq .framer-1fsyqio { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-Bnjzq .framer-10kzspr-container, .framer-Bnjzq .framer-jmb91-container, .framer-Bnjzq .framer-1i88v27-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `@media (max-width: 1199.98px) { .framer-Bnjzq.framer-10oyrls { width: 390px; } .framer-Bnjzq .framer-8x042o { padding: 10px 20px 10px 20px; } .framer-Bnjzq .framer-1dyxvrq { padding: 0px 10px 0px 10px; } .framer-Bnjzq .framer-sp60oe { gap: 40px; padding: 0px 10px 0px 10px; } .framer-Bnjzq .framer-m9u95v { width: 100%; } .framer-Bnjzq .framer-1kkioz7 { flex-direction: column; } .framer-Bnjzq .framer-1wtizo4, .framer-Bnjzq .framer-381cp9, .framer-Bnjzq .framer-foixt2 { flex: none; width: 100%; }}`,
      ],
      `framer-Bnjzq`
    )),
    ($.displayName = `Ubu`),
    ($.defaultProps = { height: 6982, width: 1200 }),
    E(
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
        ...I,
        ...L,
        ...z,
        ...V,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([D(O, {}, t), D(A, {}, t)])) }),
    (be = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerTwvfQk14J`,
          slots: [],
          annotations: {
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `6982`,
            framerAcceptsLayoutTemplate: `true`,
            framerAutoSizeImages: `true`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1200`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"QPqTdr5Bd":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `false`,
            framerResponsiveScreen: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { be as __FramerMetadata__, $ as default, G as queryParamNames };
//# sourceMappingURL=MIT8YaFeh2icgirEix-LmlP8RzKlv8LUeEiBpq3e3uc.BeIAtf5j.mjs.map
