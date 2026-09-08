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
import { S as u, a as te, r as ne, t as d } from "./motion.jtMCvOiK.mjs";
import {
  $ as f,
  A as p,
  J as re,
  L as m,
  M as h,
  S as ie,
  X as ae,
  Z as oe,
  a as g,
  ct as _,
  et as se,
  f as v,
  g as y,
  h as b,
  l as x,
  lt as S,
  n as C,
  ot as w,
  s as T,
  t as E,
  tt as ce,
  v as le,
  w as D,
} from "./framer.jQONGl1Q.mjs";
import { a as O, i as k, o as ue, r as A } from "./shared-lib.B1UR4gSL.mjs";
import { n as j, t as M } from "./Video.C7bZWvFX.mjs";
import de, { t as N } from "./XUwkL0zs3YHJCE0F86_vFEg6UsTxC1Qi1CnxRvOdiv8.C10JBUrI.mjs";
var P, F, I, L, R, z, fe, B, V, H, U, W, G, K, q, J, Y, pe, me, X, he, Z, ge, _e, Q, $;
e(() => {
  (l(),
    m(),
    d(),
    n(),
    j(),
    ue(),
    k(),
    N(),
    (P = p(O)),
    (F = S(u.div)),
    (I = p(M)),
    (L = _(u.div)),
    (R = p(A)),
    (z = _(C)),
    (fe = { aq5VqbHPf: `(max-width: 1199.98px)`, Jmsvv3z33: `(min-width: 1200px)` }),
    (B = () => typeof document < `u`),
    (V = []),
    (H = `framer-PqOEz`),
    (U = { aq5VqbHPf: `framer-v-cqzhuz`, Jmsvv3z33: `framer-v-1l8tmn2` }),
    (W = (e, t, n) => (e && t ? `position` : n)),
    (G = {
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
    (K = {
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
    (q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
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
      y: 28,
    }),
    (Y = { delay: 0, duration: 0.7, ease: [0.22, 1, 0.36, 1], type: `tween` }),
    (pe = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Y,
      x: 0,
      y: 28,
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
      y: 20,
    }),
    (X = { delay: 0, duration: 0.65, ease: [0.22, 1, 0.36, 1], type: `tween` }),
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
      y: 20,
    }),
    (Z = { Desktop: `Jmsvv3z33`, Phone: `aq5VqbHPf` }),
    (ge = ({ value: e }) =>
      f()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (_e = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `Jmsvv3z33`,
    })),
    (Q = w(
      o(function (e, n) {
        let o = r(null),
          l = n ?? o,
          d = ee(),
          { activeLocale: f, setLocale: p } = se(),
          m = re(),
          { style: _, className: S, layoutId: w, variant: le, ...D } = _e(e);
        ce(t(() => de({}, f), [f]));
        let [k, ue] = oe(le, fe, !1),
          j = ie(H),
          N = s(g)?.isLayoutTemplate,
          P = !!s(te)?.transition?.layout,
          I = W(N, P),
          R = () => !B() || k !== `aq5VqbHPf`,
          V = () => !B() || k === `aq5VqbHPf`;
        return (
          ae({}),
          a(g.Provider, {
            value: {
              activeVariantId: k,
              humanReadableVariantMap: Z,
              primaryVariantId: `Jmsvv3z33`,
              variantClassNames: U,
            },
            children: c(ne, {
              id: w ?? d,
              children: [
                a(ge, { value: `html body { background: rgb(255, 255, 255); }` }),
                c(u.div, {
                  ...D,
                  className: ie(j, `framer-1l8tmn2`, S),
                  ref: l,
                  style: { ..._ },
                  children: [
                    c(F, {
                      animate: G,
                      className: `framer-gokqot`,
                      "data-framer-appear-id": `gokqot`,
                      initial: K,
                      layout: I,
                      optimized: !0,
                      children: [
                        a(E, {
                          height: 59,
                          width: m?.width || `100vw`,
                          y: (m?.y || 0) + 0 + 0 + 0 + 0,
                          children: a(C, {
                            className: `framer-1rxgxfw-container`,
                            nodeId: `YIpvgPMbO`,
                            scopeId: `PlMaHNi_L`,
                            children: a(v, {
                              breakpoint: k,
                              overrides: { aq5VqbHPf: { variant: q(`tnNrPT_eu`) } },
                              children: a(O, {
                                height: `100%`,
                                id: `YIpvgPMbO`,
                                layoutId: `YIpvgPMbO`,
                                style: { width: `100%` },
                                variant: q(`N1Y2xUv_c`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        c(`div`, {
                          className: `framer-1gg9hql`,
                          children: [
                            c(`div`, {
                              className: `framer-8gppup`,
                              children: [
                                R() &&
                                  c(y, {
                                    className: `framer-11u3x6l hidden-cqzhuz`,
                                    requiresOverflowVisible: !0,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 78.752 79" overflow="visible"><g><path d="M 78.752 39.753 C 78.752 33.556 73.971 28.489 67.927 28.033 C 72.304 23.423 72.254 16.128 67.742 11.602 C 63.23 7.076 55.739 7.008 51.16 11.602 L 49.998 13.071 L 50.133 11.771 C 50.133 5.269 44.881 0 38.399 0 C 31.918 0 27.019 4.931 26.699 11.146 C 22.104 6.637 14.747 6.654 10.202 11.23 C 8.003 13.436 6.767 16.428 6.767 19.547 C 6.767 22.667 8.003 25.659 10.202 27.864 L 10.437 28.05 C 4.579 28.692 0 33.691 0 39.736 C 0 46.137 5.084 51.321 11.431 51.49 C 7.445 56.152 7.709 63.105 12.037 67.449 C 15.979 71.4 22.147 72.028 26.801 68.952 C 27.642 74.626 32.491 79 38.383 79 C 44.662 79 49.78 74.035 50.083 67.82 C 54.742 71.708 61.588 71.393 65.873 67.094 C 70.132 62.822 70.419 56.117 66.782 51.49 L 67.018 51.49 C 73.499 51.507 78.752 46.255 78.752 39.753 Z M 40.319 45.833 L 37.238 45.833 L 33.063 41.645 L 33.063 35.194 L 35.083 33.167 L 42.473 33.167 L 45.689 36.393 L 45.689 40.429 L 40.319 45.816 Z" fill="rgb(205,33,31)" stroke-width="2.19" stroke="rgb(247,247,235)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 26.447 39.5 C 26.447 32.337 32.235 26.53 39.376 26.53 C 46.516 26.53 52.305 32.337 52.305 39.5 C 52.305 46.663 46.516 52.47 39.376 52.47 C 32.235 52.47 26.447 46.663 26.447 39.5 Z" fill="rgb(205,33,31)" stroke-width="2.19" stroke="rgb(247,247,235)" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      c(y, {
                                        className: `framer-1lzc1j0`,
                                        requiresOverflowVisible: !0,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 78.752 79" overflow="visible"><path d="M 78.752 39.753 C 78.752 33.556 73.971 28.489 67.927 28.033 C 72.304 23.423 72.254 16.128 67.742 11.602 C 63.23 7.076 55.739 7.008 51.16 11.602 L 49.998 13.071 L 50.133 11.771 C 50.133 5.269 44.881 0 38.399 0 C 31.918 0 27.019 4.931 26.699 11.146 C 22.104 6.637 14.747 6.654 10.202 11.23 C 8.003 13.436 6.767 16.428 6.767 19.547 C 6.767 22.667 8.003 25.659 10.202 27.864 L 10.437 28.05 C 4.579 28.692 0 33.691 0 39.736 C 0 46.137 5.084 51.321 11.431 51.49 C 7.445 56.152 7.709 63.105 12.037 67.449 C 15.979 71.4 22.147 72.028 26.801 68.952 C 27.642 74.626 32.491 79 38.383 79 C 44.662 79 49.78 74.035 50.083 67.82 C 54.742 71.708 61.588 71.393 65.873 67.094 C 70.132 62.822 70.419 56.117 66.782 51.49 L 67.018 51.49 C 73.499 51.507 78.752 46.255 78.752 39.753 Z M 40.319 45.833 L 37.238 45.833 L 33.063 41.645 L 33.063 35.194 L 35.083 33.167 L 42.473 33.167 L 45.689 36.393 L 45.689 40.429 L 40.319 45.816 Z" fill="rgb(205,33,31)" stroke-width="2.19" stroke="rgb(247,247,235)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                        withExternalLayout: !0,
                                        children: [
                                          a(y, {
                                            className: `framer-1o2viyy`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 78.752 79" overflow="visible"><path d="M 78.752 39.753 C 78.752 33.556 73.971 28.489 67.927 28.033 C 72.304 23.423 72.254 16.128 67.742 11.602 C 63.23 7.076 55.739 7.008 51.16 11.602 L 49.998 13.071 L 50.133 11.771 C 50.133 5.269 44.881 0 38.399 0 C 31.918 0 27.019 4.931 26.699 11.146 C 22.104 6.637 14.747 6.654 10.202 11.23 C 8.003 13.436 6.767 16.428 6.767 19.547 C 6.767 22.667 8.003 25.659 10.202 27.864 L 10.437 28.05 C 4.579 28.692 0 33.691 0 39.736 C 0 46.137 5.084 51.321 11.431 51.49 C 7.445 56.152 7.709 63.105 12.037 67.449 C 15.979 71.4 22.147 72.028 26.801 68.952 C 27.642 74.626 32.491 79 38.383 79 C 44.662 79 49.78 74.035 50.083 67.82 C 54.742 71.708 61.588 71.393 65.873 67.094 C 70.132 62.822 70.419 56.117 66.782 51.49 L 67.018 51.49 C 73.499 51.507 78.752 46.255 78.752 39.753 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          a(y, {
                                            className: `framer-12s6y2w`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.626 12.666" overflow="visible"><path d="M 7.256 12.666 L 4.175 12.666 L 0 8.478 L 0 2.027 L 2.02 0 L 9.41 0 L 12.626 3.226 L 12.626 7.262 L 7.256 12.649 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      a(y, {
                                        className: `framer-tlfmzc`,
                                        requiresOverflowVisible: !0,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25.858 25.939" overflow="visible"><path d="M 0 12.97 C 0 5.807 5.788 0 12.929 0 C 20.069 0 25.858 5.807 25.858 12.97 C 25.858 20.133 20.069 25.939 12.929 25.939 C 5.788 25.939 0 20.133 0 12.97 Z" fill="rgb(205,33,31)" stroke-width="2.19" stroke="rgb(247,247,235)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                a(`div`, {
                                  className: `framer-1y554h6`,
                                  children: a(v, {
                                    breakpoint: k,
                                    overrides: {
                                      aq5VqbHPf: {
                                        children: a(i, {
                                          children: a(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              "--framer-font-size": `25px`,
                                              "--framer-line-height": `2.5em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `Lasowiak cranberry liqueur `,
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
                                          children: `Lasowiak cranberry liqueur `,
                                        }),
                                      }),
                                      className: `framer-p5pocj`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                R() &&
                                  c(y, {
                                    className: `framer-kxmfsp hidden-cqzhuz`,
                                    requiresOverflowVisible: !0,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 78.752 79" overflow="visible"><g><path d="M 78.752 39.753 C 78.752 33.556 73.971 28.489 67.927 28.033 C 72.304 23.423 72.254 16.128 67.742 11.602 C 63.23 7.076 55.739 7.008 51.16 11.602 L 49.998 13.071 L 50.133 11.771 C 50.133 5.269 44.881 0 38.399 0 C 31.918 0 27.019 4.931 26.699 11.146 C 22.104 6.637 14.747 6.654 10.202 11.23 C 8.003 13.436 6.767 16.428 6.767 19.547 C 6.767 22.667 8.003 25.659 10.202 27.864 L 10.437 28.05 C 4.579 28.692 0 33.691 0 39.736 C 0 46.137 5.084 51.321 11.431 51.49 C 7.445 56.152 7.709 63.105 12.037 67.449 C 15.979 71.4 22.147 72.028 26.801 68.952 C 27.642 74.626 32.491 79 38.383 79 C 44.662 79 49.78 74.035 50.083 67.82 C 54.742 71.708 61.588 71.393 65.873 67.094 C 70.132 62.822 70.419 56.117 66.782 51.49 L 67.018 51.49 C 73.499 51.507 78.752 46.255 78.752 39.753 Z M 40.319 45.833 L 37.238 45.833 L 33.063 41.645 L 33.063 35.194 L 35.083 33.167 L 42.473 33.167 L 45.689 36.393 L 45.689 40.429 L 40.319 45.816 Z" fill="rgb(205,33,31)" stroke-width="2.19" stroke="rgb(247,247,235)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 26.447 39.5 C 26.447 32.337 32.235 26.53 39.376 26.53 C 46.516 26.53 52.305 32.337 52.305 39.5 C 52.305 46.663 46.516 52.47 39.376 52.47 C 32.235 52.47 26.447 46.663 26.447 39.5 Z" fill="rgb(205,33,31)" stroke-width="2.19" stroke="rgb(247,247,235)" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      c(y, {
                                        className: `framer-r57zlt`,
                                        requiresOverflowVisible: !0,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 78.752 79" overflow="visible"><path d="M 78.752 39.753 C 78.752 33.556 73.971 28.489 67.927 28.033 C 72.304 23.423 72.254 16.128 67.742 11.602 C 63.23 7.076 55.739 7.008 51.16 11.602 L 49.998 13.071 L 50.133 11.771 C 50.133 5.269 44.881 0 38.399 0 C 31.918 0 27.019 4.931 26.699 11.146 C 22.104 6.637 14.747 6.654 10.202 11.23 C 8.003 13.436 6.767 16.428 6.767 19.547 C 6.767 22.667 8.003 25.659 10.202 27.864 L 10.437 28.05 C 4.579 28.692 0 33.691 0 39.736 C 0 46.137 5.084 51.321 11.431 51.49 C 7.445 56.152 7.709 63.105 12.037 67.449 C 15.979 71.4 22.147 72.028 26.801 68.952 C 27.642 74.626 32.491 79 38.383 79 C 44.662 79 49.78 74.035 50.083 67.82 C 54.742 71.708 61.588 71.393 65.873 67.094 C 70.132 62.822 70.419 56.117 66.782 51.49 L 67.018 51.49 C 73.499 51.507 78.752 46.255 78.752 39.753 Z M 40.319 45.833 L 37.238 45.833 L 33.063 41.645 L 33.063 35.194 L 35.083 33.167 L 42.473 33.167 L 45.689 36.393 L 45.689 40.429 L 40.319 45.816 Z" fill="rgb(205,33,31)" stroke-width="2.19" stroke="rgb(247,247,235)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                        withExternalLayout: !0,
                                        children: [
                                          a(y, {
                                            className: `framer-dhlx38`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 78.752 79" overflow="visible"><path d="M 78.752 39.753 C 78.752 33.556 73.971 28.489 67.927 28.033 C 72.304 23.423 72.254 16.128 67.742 11.602 C 63.23 7.076 55.739 7.008 51.16 11.602 L 49.998 13.071 L 50.133 11.771 C 50.133 5.269 44.881 0 38.399 0 C 31.918 0 27.019 4.931 26.699 11.146 C 22.104 6.637 14.747 6.654 10.202 11.23 C 8.003 13.436 6.767 16.428 6.767 19.547 C 6.767 22.667 8.003 25.659 10.202 27.864 L 10.437 28.05 C 4.579 28.692 0 33.691 0 39.736 C 0 46.137 5.084 51.321 11.431 51.49 C 7.445 56.152 7.709 63.105 12.037 67.449 C 15.979 71.4 22.147 72.028 26.801 68.952 C 27.642 74.626 32.491 79 38.383 79 C 44.662 79 49.78 74.035 50.083 67.82 C 54.742 71.708 61.588 71.393 65.873 67.094 C 70.132 62.822 70.419 56.117 66.782 51.49 L 67.018 51.49 C 73.499 51.507 78.752 46.255 78.752 39.753 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          a(y, {
                                            className: `framer-11zpp3r`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.626 12.666" overflow="visible"><path d="M 7.256 12.666 L 4.175 12.666 L 0 8.478 L 0 2.027 L 2.02 0 L 9.41 0 L 12.626 3.226 L 12.626 7.262 L 7.256 12.649 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      a(y, {
                                        className: `framer-ycp8ks`,
                                        requiresOverflowVisible: !0,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25.858 25.939" overflow="visible"><path d="M 0 12.97 C 0 5.807 5.788 0 12.929 0 C 20.069 0 25.858 5.807 25.858 12.97 C 25.858 20.133 20.069 25.939 12.929 25.939 C 5.788 25.939 0 20.133 0 12.97 Z" fill="rgb(205,33,31)" stroke-width="2.19" stroke="rgb(247,247,235)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-11eet60`,
                              children: [
                                a(v, {
                                  breakpoint: k,
                                  overrides: {
                                    aq5VqbHPf: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 5760,
                                        intrinsicWidth: 4320,
                                        loading: h(
                                          (m?.y || 0) + 0 + 0 + 0 + 83 + 0 + 312.5 + 0 + 0
                                        ),
                                        pixelHeight: 5760,
                                        pixelWidth: 4320,
                                        sizes: m?.width || `100vw`,
                                        src: `../../assets/images/8Y6uS4lAom9ZMoK921mTvnPTM.png?width=4320&height=5760`,
                                        srcSet: `../../assets/images/8Y6uS4lAom9ZMoK921mTvnPTM.png?scale-down-to=1024&width=4320&height=5760 768w,../../assets/images/8Y6uS4lAom9ZMoK921mTvnPTM.png 1536w,../../assets/images/8Y6uS4lAom9ZMoK921mTvnPTM.png?scale-down-to=4096&width=4320&height=5760 3072w,../../assets/images/8Y6uS4lAom9ZMoK921mTvnPTM.png?width=4320&height=5760 4320w`,
                                      },
                                    },
                                  },
                                  children: a(T, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 3064,
                                      intrinsicWidth: 4604,
                                      loading: h((m?.y || 0) + 0 + 0 + 0 + 83 + 0 + 120 + 0 + 0),
                                      pixelHeight: 3064,
                                      pixelWidth: 4604,
                                      sizes: m?.width || `100vw`,
                                      src: `../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?width=4604&height=3064`,
                                      srcSet: `../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?scale-down-to=512&width=4604&height=3064 512w,../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?scale-down-to=1024&width=4604&height=3064 1024w,../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg 2048w,../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?scale-down-to=4096&width=4604&height=3064 4096w,../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?width=4604&height=3064 4604w`,
                                    },
                                    className: `framer-1u8eof0`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                c(`div`, {
                                  className: `framer-1e0wx3m`,
                                  children: [
                                    c(`div`, {
                                      className: `framer-48r3cg`,
                                      children: [
                                        c(`div`, {
                                          className: `framer-1uknlot`,
                                          children: [
                                            a(v, {
                                              breakpoint: k,
                                              overrides: {
                                                aq5VqbHPf: {
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
                                                className: `framer-1tfsm05`,
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
                                                  children: `Label + Packaging`,
                                                }),
                                              }),
                                              className: `framer-y990ll`,
                                              fonts: [`BI;Amiamie/Regular/v0`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        c(`div`, {
                                          className: `framer-1ilnz1l`,
                                          children: [
                                            a(v, {
                                              breakpoint: k,
                                              overrides: {
                                                aq5VqbHPf: {
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
                                                className: `framer-vevpxu`,
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
                                              className: `framer-ax4nat`,
                                              fonts: [`BI;Amiamie/Regular/v0`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        c(`div`, {
                                          className: `framer-42reud`,
                                          children: [
                                            a(v, {
                                              breakpoint: k,
                                              overrides: {
                                                aq5VqbHPf: {
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
                                                    children: `Context:`,
                                                  }),
                                                }),
                                                className: `framer-3liasj`,
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
                                                  children: `University project`,
                                                }),
                                              }),
                                              className: `framer-1e8cp79`,
                                              fonts: [`BI;Amiamie/Regular/v0`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    c(`div`, {
                                      className: `framer-1ep2ekq`,
                                      children: [
                                        a(v, {
                                          breakpoint: k,
                                          overrides: {
                                            aq5VqbHPf: {
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
                                            className: `framer-e927et`,
                                            fonts: [`BI;Amiamie/Regular/v0`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(v, {
                                          breakpoint: k,
                                          overrides: {
                                            aq5VqbHPf: {
                                              children: a(i, {
                                                children: a(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                    "--framer-font-size": `20px`,
                                                  },
                                                  children: `Packaging concept for cranberry liqueur — the traditional drink of the Lasowiacy ethnic group from the Sandomierz Forest region in Poland reinterpreting folk material culture for a contemporary product language.`,
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
                                                  "--framer-font-size": `24px`,
                                                },
                                                children: `Packaging concept for cranberry liqueur — the traditional drink of the Lasowiacy ethnic group from the Sandomierz Forest region in Poland reinterpreting folk material culture for a contemporary product language.`,
                                              }),
                                            }),
                                            className: `framer-54w6u1`,
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
                      ],
                    }),
                    V() &&
                      c(u.div, {
                        className: `framer-1l4oe43 hidden-1l8tmn2`,
                        layout: I,
                        children: [
                          c(`div`, {
                            className: `framer-g7qzr2`,
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
                                className: `framer-1h52vqx`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(b, {
                                __fromCanvasComponent: !0,
                                children: c(i, {
                                  children: [
                                    a(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                        "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      },
                                      children: `There are no contemporary packaging solutions for traditional regional drinks like this one. The category is stuck in dated folk visual clichés that fail to interest `,
                                    }),
                                    a(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                        "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      },
                                      children: `a modern buyer.`,
                                    }),
                                  ],
                                }),
                                className: `framer-xkxn8v`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          c(`div`, {
                            className: `framer-1ar55ph`,
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
                                className: `framer-1em0niz`,
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
                                    children: `The concept builds a single graphic system from the region’s embroidery motif and the apothecary cross — a nod to the folk belief in the liqueur’s medicinal power. The cross-and-flower pattern repeats across the fabric cap wrap, the back label border, and the front label framing, carrying one visual language across every material.`,
                                  }),
                                }),
                                className: `framer-1514fu1`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          c(`div`, {
                            className: `framer-1henxhh`,
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
                                className: `framer-tbhve0`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(b, {
                                __fromCanvasComponent: !0,
                                children: c(i, {
                                  children: [
                                    a(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                        "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      },
                                      children: `The project was submitted to `,
                                    }),
                                    a(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                        "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      },
                                      children: `Art of Packaging in Poznań, Poland’s national packaging design competition, in the Debiuty (student) category judged by an independent jury of packaging industry professionals.`,
                                    }),
                                  ],
                                }),
                                className: `framer-1phlk6f`,
                                fonts: [`BI;Amiamie/Regular/v0`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    c(L, {
                      __framer__animate: { transition: Y },
                      __framer__animateOnce: !0,
                      __framer__enter: J,
                      __framer__exit: pe,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.16,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-tqnjp1`,
                      layout: I,
                      children: [
                        c(`div`, {
                          className: `framer-1njlk6v`,
                          children: [
                            c(`div`, {
                              className: `framer-m467z`,
                              children: [
                                c(`div`, {
                                  className: `framer-10ogtns`,
                                  children: [
                                    a(v, {
                                      breakpoint: k,
                                      overrides: {
                                        aq5VqbHPf: {
                                          children: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-text-color": `rgb(87, 87, 87)`,
                                              },
                                              children: `Mood Board`,
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
                                            children: `Mood Board`,
                                          }),
                                        }),
                                        className: `framer-m7feb`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    a(v, {
                                      breakpoint: k,
                                      overrides: {
                                        aq5VqbHPf: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 2170,
                                            intrinsicWidth: 3858,
                                            loading: h(
                                              (m?.y || 0) +
                                                0 +
                                                1810.9 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                22.4
                                            ),
                                            pixelHeight: 2170,
                                            pixelWidth: 3858,
                                            sizes: `max(${m?.width || `100vw`} - 40px, 1px)`,
                                            src: `../../assets/images/HtY5PMVP9JDu9L2XiBugugcc.png?width=3858&height=2170`,
                                            srcSet: `../../assets/images/HtY5PMVP9JDu9L2XiBugugcc.png?scale-down-to=512&width=3858&height=2170 512w,../../assets/images/HtY5PMVP9JDu9L2XiBugugcc.png?scale-down-to=1024&width=3858&height=2170 1024w,../../assets/images/HtY5PMVP9JDu9L2XiBugugcc.png 2048w,../../assets/images/HtY5PMVP9JDu9L2XiBugugcc.png?width=3858&height=2170 3858w`,
                                          },
                                        },
                                      },
                                      children: a(T, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 2170,
                                          intrinsicWidth: 3858,
                                          loading: h(
                                            (m?.y || 0) + 0 + 1348.8 + 0 + 0 + 0 + 0 + 0 + 0 + 27.2
                                          ),
                                          pixelHeight: 2170,
                                          pixelWidth: 3858,
                                          src: `../../assets/images/HtY5PMVP9JDu9L2XiBugugcc.png?width=3858&height=2170`,
                                          srcSet: `../../assets/images/HtY5PMVP9JDu9L2XiBugugcc.png?scale-down-to=512&width=3858&height=2170 512w,../../assets/images/HtY5PMVP9JDu9L2XiBugugcc.png?scale-down-to=1024&width=3858&height=2170 1024w,../../assets/images/HtY5PMVP9JDu9L2XiBugugcc.png 2048w,../../assets/images/HtY5PMVP9JDu9L2XiBugugcc.png?width=3858&height=2170 3858w`,
                                        },
                                        className: `framer-1imo1bd`,
                                        "data-framer-name": `Artboard 3Ð±ÑÐ»Ð¸Ð¹`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  ],
                                }),
                                c(`div`, {
                                  className: `framer-178021d`,
                                  children: [
                                    a(v, {
                                      breakpoint: k,
                                      overrides: {
                                        aq5VqbHPf: {
                                          children: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-text-color": `rgb(87, 87, 87)`,
                                              },
                                              children: `Different variants:`,
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
                                            children: `Different variants:`,
                                          }),
                                        }),
                                        className: `framer-ecnj0f`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    a(v, {
                                      breakpoint: k,
                                      overrides: {
                                        aq5VqbHPf: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 1644,
                                            intrinsicWidth: 3219,
                                            loading: h(
                                              (m?.y || 0) +
                                                0 +
                                                1810.9 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                239.4 +
                                                0 +
                                                22.4
                                            ),
                                            pixelHeight: 1644,
                                            pixelWidth: 3219,
                                            sizes: `max(${m?.width || `100vw`} - 40px, 1px)`,
                                            src: `../../assets/images/NGrkKAiV2ppoSxPYQF68EaCIDU.png?width=3219&height=1644`,
                                            srcSet: `../../assets/images/NGrkKAiV2ppoSxPYQF68EaCIDU.png?scale-down-to=512&width=3219&height=1644 512w,../../assets/images/NGrkKAiV2ppoSxPYQF68EaCIDU.png?scale-down-to=1024&width=3219&height=1644 1024w,../../assets/images/NGrkKAiV2ppoSxPYQF68EaCIDU.png 2048w,../../assets/images/NGrkKAiV2ppoSxPYQF68EaCIDU.png?width=3219&height=1644 3219w`,
                                          },
                                        },
                                      },
                                      children: a(T, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 1644,
                                          intrinsicWidth: 3219,
                                          loading: h(
                                            (m?.y || 0) +
                                              0 +
                                              1348.8 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              496.2 +
                                              0 +
                                              27.2
                                          ),
                                          pixelHeight: 1644,
                                          pixelWidth: 3219,
                                          src: `../../assets/images/NGrkKAiV2ppoSxPYQF68EaCIDU.png?width=3219&height=1644`,
                                          srcSet: `../../assets/images/NGrkKAiV2ppoSxPYQF68EaCIDU.png?scale-down-to=512&width=3219&height=1644 512w,../../assets/images/NGrkKAiV2ppoSxPYQF68EaCIDU.png?scale-down-to=1024&width=3219&height=1644 1024w,../../assets/images/NGrkKAiV2ppoSxPYQF68EaCIDU.png 2048w,../../assets/images/NGrkKAiV2ppoSxPYQF68EaCIDU.png?width=3219&height=1644 3219w`,
                                        },
                                        className: `framer-18u20uw`,
                                        "data-framer-name": `Artboard 3 copyÐ±ÑÐ»Ð¸Ð¹`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  ],
                                }),
                                c(`div`, {
                                  className: `framer-wg3zuf`,
                                  children: [
                                    a(v, {
                                      breakpoint: k,
                                      overrides: {
                                        aq5VqbHPf: {
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
                                            children: `Final Result:`,
                                          }),
                                        }),
                                        className: `framer-chkz2h`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    a(v, {
                                      breakpoint: k,
                                      overrides: {
                                        aq5VqbHPf: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 2631,
                                            intrinsicWidth: 4254,
                                            loading: h(
                                              (m?.y || 0) +
                                                0 +
                                                1810.9 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                460.8 +
                                                0 +
                                                22.4
                                            ),
                                            pixelHeight: 2631,
                                            pixelWidth: 4254,
                                            sizes: `max(${m?.width || `100vw`} - 40px, 1px)`,
                                            src: `../../assets/images/50HWscz7ysiTMfzWxdgXScNmehM.png?width=4254&height=2631`,
                                            srcSet: `../../assets/images/50HWscz7ysiTMfzWxdgXScNmehM.png?scale-down-to=512&width=4254&height=2631 512w,../../assets/images/50HWscz7ysiTMfzWxdgXScNmehM.png?scale-down-to=1024&width=4254&height=2631 1024w,../../assets/images/50HWscz7ysiTMfzWxdgXScNmehM.png 2048w,../../assets/images/50HWscz7ysiTMfzWxdgXScNmehM.png?scale-down-to=4096&width=4254&height=2631 4096w,../../assets/images/50HWscz7ysiTMfzWxdgXScNmehM.png?width=4254&height=2631 4254w`,
                                          },
                                        },
                                      },
                                      children: a(T, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 2631,
                                          intrinsicWidth: 4254,
                                          loading: h(
                                            (m?.y || 0) +
                                              0 +
                                              1348.8 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              951.4 +
                                              0 +
                                              27.2
                                          ),
                                          pixelHeight: 2631,
                                          pixelWidth: 4254,
                                          src: `../../assets/images/50HWscz7ysiTMfzWxdgXScNmehM.png?width=4254&height=2631`,
                                          srcSet: `../../assets/images/50HWscz7ysiTMfzWxdgXScNmehM.png?scale-down-to=512&width=4254&height=2631 512w,../../assets/images/50HWscz7ysiTMfzWxdgXScNmehM.png?scale-down-to=1024&width=4254&height=2631 1024w,../../assets/images/50HWscz7ysiTMfzWxdgXScNmehM.png 2048w,../../assets/images/50HWscz7ysiTMfzWxdgXScNmehM.png?scale-down-to=4096&width=4254&height=2631 4096w,../../assets/images/50HWscz7ysiTMfzWxdgXScNmehM.png?width=4254&height=2631 4254w`,
                                        },
                                        className: `framer-1eu5ao6`,
                                        "data-framer-name": `Artboard 3 copy 2Ð±ÑÐ»Ð¸Ð¹`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  ],
                                }),
                                a(v, {
                                  breakpoint: k,
                                  overrides: {
                                    aq5VqbHPf: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 2527,
                                        intrinsicWidth: 3990,
                                        loading: h(
                                          (m?.y || 0) + 0 + 1810.9 + 0 + 0 + 0 + 0 + 719.2
                                        ),
                                        pixelHeight: 2527,
                                        pixelWidth: 3990,
                                        sizes: `max(${m?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/oydoUodnHgP6O23vOYSBKadtRw.jpg?width=3990&height=2527`,
                                        srcSet: `../../assets/images/oydoUodnHgP6O23vOYSBKadtRw.jpg?scale-down-to=512&width=3990&height=2527 512w,../../assets/images/oydoUodnHgP6O23vOYSBKadtRw.jpg?scale-down-to=1024&width=3990&height=2527 1024w,../../assets/images/oydoUodnHgP6O23vOYSBKadtRw.jpg 2048w,../../assets/images/oydoUodnHgP6O23vOYSBKadtRw.jpg?width=3990&height=2527 3990w`,
                                      },
                                    },
                                  },
                                  children: a(T, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 2527,
                                      intrinsicWidth: 3990,
                                      loading: h((m?.y || 0) + 0 + 1348.8 + 0 + 0 + 0 + 0 + 1492.6),
                                      pixelHeight: 2527,
                                      pixelWidth: 3990,
                                      src: `../../assets/images/oydoUodnHgP6O23vOYSBKadtRw.jpg?width=3990&height=2527`,
                                      srcSet: `../../assets/images/oydoUodnHgP6O23vOYSBKadtRw.jpg?scale-down-to=512&width=3990&height=2527 512w,../../assets/images/oydoUodnHgP6O23vOYSBKadtRw.jpg?scale-down-to=1024&width=3990&height=2527 1024w,../../assets/images/oydoUodnHgP6O23vOYSBKadtRw.jpg 2048w,../../assets/images/oydoUodnHgP6O23vOYSBKadtRw.jpg?width=3990&height=2527 3990w`,
                                    },
                                    className: `framer-a3ih4q`,
                                    "data-framer-name": `ubu animacja`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                a(v, {
                                  breakpoint: k,
                                  overrides: {
                                    aq5VqbHPf: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 3064,
                                        intrinsicWidth: 4604,
                                        loading: h(
                                          (m?.y || 0) + 0 + 1810.9 + 0 + 0 + 0 + 0 + 961.2
                                        ),
                                        pixelHeight: 3064,
                                        pixelWidth: 4604,
                                        sizes: `max(${m?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?width=4604&height=3064`,
                                        srcSet: `../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?scale-down-to=512&width=4604&height=3064 512w,../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?scale-down-to=1024&width=4604&height=3064 1024w,../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg 2048w,../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?scale-down-to=4096&width=4604&height=3064 4096w,../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?width=4604&height=3064 4604w`,
                                      },
                                    },
                                  },
                                  children: a(T, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 3064,
                                      intrinsicWidth: 4604,
                                      loading: h((m?.y || 0) + 0 + 1348.8 + 0 + 0 + 0 + 0 + 2017.6),
                                      pixelHeight: 3064,
                                      pixelWidth: 4604,
                                      src: `../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?width=4604&height=3064`,
                                      srcSet: `../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?scale-down-to=512&width=4604&height=3064 512w,../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?scale-down-to=1024&width=4604&height=3064 1024w,../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg 2048w,../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?scale-down-to=4096&width=4604&height=3064 4096w,../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?width=4604&height=3064 4604w`,
                                    },
                                    className: `framer-1h55kxf`,
                                    "data-framer-name": `PXL 20260623_1223075961`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                a(v, {
                                  breakpoint: k,
                                  overrides: {
                                    aq5VqbHPf: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 3456,
                                        intrinsicWidth: 5184,
                                        loading: h(
                                          (m?.y || 0) + 0 + 1810.9 + 0 + 0 + 0 + 0 + 1214.2
                                        ),
                                        pixelHeight: 3456,
                                        pixelWidth: 5184,
                                        sizes: `max(${m?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/NCH4xGBKo0kzFSzSrEu1K2VFUr0.jpg?width=5184&height=3456`,
                                        srcSet: `../../assets/images/NCH4xGBKo0kzFSzSrEu1K2VFUr0.jpg?scale-down-to=512&width=5184&height=3456 512w,../../assets/images/NCH4xGBKo0kzFSzSrEu1K2VFUr0.jpg?scale-down-to=1024&width=5184&height=3456 1024w,../../assets/images/NCH4xGBKo0kzFSzSrEu1K2VFUr0.jpg 2048w,../../assets/images/NCH4xGBKo0kzFSzSrEu1K2VFUr0.jpg?scale-down-to=4096&width=5184&height=3456 4096w,../../assets/images/NCH4xGBKo0kzFSzSrEu1K2VFUr0.jpg?width=5184&height=3456 5184w`,
                                      },
                                    },
                                  },
                                  children: a(T, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 3456,
                                      intrinsicWidth: 5184,
                                      loading: h((m?.y || 0) + 0 + 1348.8 + 0 + 0 + 0 + 0 + 2568.6),
                                      pixelHeight: 3456,
                                      pixelWidth: 5184,
                                      src: `../../assets/images/NCH4xGBKo0kzFSzSrEu1K2VFUr0.jpg?width=5184&height=3456`,
                                      srcSet: `../../assets/images/NCH4xGBKo0kzFSzSrEu1K2VFUr0.jpg?scale-down-to=512&width=5184&height=3456 512w,../../assets/images/NCH4xGBKo0kzFSzSrEu1K2VFUr0.jpg?scale-down-to=1024&width=5184&height=3456 1024w,../../assets/images/NCH4xGBKo0kzFSzSrEu1K2VFUr0.jpg 2048w,../../assets/images/NCH4xGBKo0kzFSzSrEu1K2VFUr0.jpg?scale-down-to=4096&width=5184&height=3456 4096w,../../assets/images/NCH4xGBKo0kzFSzSrEu1K2VFUr0.jpg?width=5184&height=3456 5184w`,
                                    },
                                    className: `framer-adneuq`,
                                    "data-framer-name": `Untitled-2`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                a(v, {
                                  breakpoint: k,
                                  overrides: {
                                    aq5VqbHPf: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 3206,
                                        intrinsicWidth: 4809,
                                        loading: h(
                                          (m?.y || 0) + 0 + 1810.9 + 0 + 0 + 0 + 0 + 1467.2
                                        ),
                                        pixelHeight: 3206,
                                        pixelWidth: 4809,
                                        sizes: `max(${m?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/OpaVQoo5wEt2g9JKaBhDVzRiT4w.jpg?width=4809&height=3206`,
                                        srcSet: `../../assets/images/OpaVQoo5wEt2g9JKaBhDVzRiT4w.jpg?scale-down-to=512&width=4809&height=3206 512w,../../assets/images/OpaVQoo5wEt2g9JKaBhDVzRiT4w.jpg?scale-down-to=1024&width=4809&height=3206 1024w,../../assets/images/OpaVQoo5wEt2g9JKaBhDVzRiT4w.jpg 2048w,../../assets/images/OpaVQoo5wEt2g9JKaBhDVzRiT4w.jpg?scale-down-to=4096&width=4809&height=3206 4096w,../../assets/images/OpaVQoo5wEt2g9JKaBhDVzRiT4w.jpg?width=4809&height=3206 4809w`,
                                      },
                                    },
                                  },
                                  children: a(T, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 3206,
                                      intrinsicWidth: 4809,
                                      loading: h((m?.y || 0) + 0 + 1348.8 + 0 + 0 + 0 + 0 + 3120.6),
                                      pixelHeight: 3206,
                                      pixelWidth: 4809,
                                      src: `../../assets/images/OpaVQoo5wEt2g9JKaBhDVzRiT4w.jpg?width=4809&height=3206`,
                                      srcSet: `../../assets/images/OpaVQoo5wEt2g9JKaBhDVzRiT4w.jpg?scale-down-to=512&width=4809&height=3206 512w,../../assets/images/OpaVQoo5wEt2g9JKaBhDVzRiT4w.jpg?scale-down-to=1024&width=4809&height=3206 1024w,../../assets/images/OpaVQoo5wEt2g9JKaBhDVzRiT4w.jpg 2048w,../../assets/images/OpaVQoo5wEt2g9JKaBhDVzRiT4w.jpg?scale-down-to=4096&width=4809&height=3206 4096w,../../assets/images/OpaVQoo5wEt2g9JKaBhDVzRiT4w.jpg?width=4809&height=3206 4809w`,
                                    },
                                    className: `framer-gunk29`,
                                    "data-framer-name": `Untitled-1`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                a(v, {
                                  breakpoint: k,
                                  overrides: {
                                    aq5VqbHPf: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 3456,
                                        intrinsicWidth: 5184,
                                        loading: h(
                                          (m?.y || 0) + 0 + 1810.9 + 0 + 0 + 0 + 0 + 1720.2
                                        ),
                                        pixelHeight: 3456,
                                        pixelWidth: 5184,
                                        sizes: `max(${m?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/7jMMFO7GzMZIHiGaLslCBgT380A.png?width=5184&height=3456`,
                                        srcSet: `../../assets/images/7jMMFO7GzMZIHiGaLslCBgT380A.png?scale-down-to=512&width=5184&height=3456 512w,../../assets/images/7jMMFO7GzMZIHiGaLslCBgT380A.png?scale-down-to=1024&width=5184&height=3456 1024w,../../assets/images/7jMMFO7GzMZIHiGaLslCBgT380A.png 2048w,../../assets/images/7jMMFO7GzMZIHiGaLslCBgT380A.png?scale-down-to=4096&width=5184&height=3456 4096w,../../assets/images/7jMMFO7GzMZIHiGaLslCBgT380A.png?width=5184&height=3456 5184w`,
                                      },
                                    },
                                  },
                                  children: a(T, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 3456,
                                      intrinsicWidth: 5184,
                                      loading: h((m?.y || 0) + 0 + 1348.8 + 0 + 0 + 0 + 0 + 3672.6),
                                      pixelHeight: 3456,
                                      pixelWidth: 5184,
                                      src: `../../assets/images/7jMMFO7GzMZIHiGaLslCBgT380A.png?width=5184&height=3456`,
                                      srcSet: `../../assets/images/7jMMFO7GzMZIHiGaLslCBgT380A.png?scale-down-to=512&width=5184&height=3456 512w,../../assets/images/7jMMFO7GzMZIHiGaLslCBgT380A.png?scale-down-to=1024&width=5184&height=3456 1024w,../../assets/images/7jMMFO7GzMZIHiGaLslCBgT380A.png 2048w,../../assets/images/7jMMFO7GzMZIHiGaLslCBgT380A.png?scale-down-to=4096&width=5184&height=3456 4096w,../../assets/images/7jMMFO7GzMZIHiGaLslCBgT380A.png?width=5184&height=3456 5184w`,
                                    },
                                    className: `framer-jnli0q`,
                                    "data-framer-name": `Untitled-1`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                              ],
                            }),
                            R() &&
                              c(`div`, {
                                className: `framer-16c4ftp hidden-cqzhuz`,
                                children: [
                                  c(`div`, {
                                    className: `framer-1vvccdm`,
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
                                        className: `framer-1ripnnw`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(b, {
                                        __fromCanvasComponent: !0,
                                        children: c(i, {
                                          children: [
                                            a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              },
                                              children: `There are no contemporary packaging solutions for traditional regional drinks like this one. The category is stuck in dated folk visual clichés that fail to interest `,
                                            }),
                                            a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              },
                                              children: `a modern buyer.`,
                                            }),
                                          ],
                                        }),
                                        className: `framer-17i5oer`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  c(`div`, {
                                    className: `framer-1y9dfop`,
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
                                        className: `framer-29vtbw`,
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
                                            children: `The concept builds a single graphic system from the region’s embroidery motif and the apothecary cross — a nod to the folk belief in the liqueur’s medicinal power. The cross-and-flower pattern repeats across the fabric cap wrap, the back label border, and the front label framing, carrying one visual language across every material.`,
                                          }),
                                        }),
                                        className: `framer-10rhde8`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  c(`div`, {
                                    className: `framer-pksp2f`,
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
                                        className: `framer-4y9mmr`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(b, {
                                        __fromCanvasComponent: !0,
                                        children: c(i, {
                                          children: [
                                            a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              },
                                              children: `The project was submitted to `,
                                            }),
                                            a(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              },
                                              children: `Art of Packaging in Poznań, Poland’s national packaging design competition, in the Debiuty (student) category judged by an independent jury of packaging industry professionals.`,
                                            }),
                                          ],
                                        }),
                                        className: `framer-92ie1u`,
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
                          className: `framer-gtfm1x`,
                          children: [
                            c(`div`, {
                              className: `framer-twsp8`,
                              children: [
                                a(x, {
                                  href: { webPageId: `aCRbSljkl` },
                                  motionChild: !0,
                                  nodeId: `DuZxrs5Ag`,
                                  openInNewTab: !1,
                                  scopeId: `PlMaHNi_L`,
                                  children: a(u.a, {
                                    className: `framer-1tacxlu framer-10o6bto`,
                                    children: a(E, {
                                      children: a(C, {
                                        className: `framer-zwya5r-container`,
                                        isModuleExternal: !0,
                                        nodeId: `gSDn3rA57`,
                                        scopeId: `PlMaHNi_L`,
                                        children: a(M, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 0,
                                          bottomLeftRadius: 0,
                                          bottomRightRadius: 0,
                                          controls: !1,
                                          height: `100%`,
                                          id: `gSDn3rA57`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `gSDn3rA57`,
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
                                  className: `framer-e0lob6`,
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
                                          children: `Ubu Roi ou les Polonais `,
                                        }),
                                      }),
                                      className: `framer-1j2q3on`,
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
                                          children: `Editorial`,
                                        }),
                                      }),
                                      className: `framer-1g5dbio`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1t3lzcr`,
                              children: [
                                a(x, {
                                  href: { webPageId: `YN_8Vp9ZG` },
                                  motionChild: !0,
                                  nodeId: `ulLZ7XaAD`,
                                  openInNewTab: !1,
                                  scopeId: `PlMaHNi_L`,
                                  children: a(v, {
                                    breakpoint: k,
                                    overrides: {
                                      aq5VqbHPf: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 1034,
                                          intrinsicWidth: 1554,
                                          loading: h(
                                            (m?.y || 0) + 0 + 1810.9 + 0 + 2073.2 + 0 + 430 + 0 + 0
                                          ),
                                          pixelHeight: 1034,
                                          pixelWidth: 1554,
                                          sizes: `calc(${m?.width || `100vw`} - 40px)`,
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
                                        loading: h(
                                          (m?.y || 0) + 0 + 1348.8 + 0 + 4324.6 + 0 + 0 + 0
                                        ),
                                        pixelHeight: 1034,
                                        pixelWidth: 1554,
                                        sizes: `max((${m?.width || `100vw`} - 100px) / 3, 1px)`,
                                        src: `../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png?width=1554&height=1034`,
                                        srcSet: `../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png 512w,../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png?scale-down-to=1024&width=1554&height=1034 1024w,../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png?width=1554&height=1034 1554w`,
                                      },
                                      className: `framer-16wazj7 framer-10o6bto`,
                                    }),
                                  }),
                                }),
                                c(`div`, {
                                  className: `framer-1uocid8`,
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
                                      className: `framer-1ttgbh2`,
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
                                      className: `framer-u6tm0v`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1fe1ypd`,
                              children: [
                                a(x, {
                                  href: { webPageId: `M2JH_EIJa` },
                                  motionChild: !0,
                                  nodeId: `JQ4vXb34K`,
                                  openInNewTab: !1,
                                  scopeId: `PlMaHNi_L`,
                                  children: a(u.a, {
                                    className: `framer-plaqc8 framer-10o6bto`,
                                    children: a(E, {
                                      children: a(C, {
                                        className: `framer-4uw6tz-container`,
                                        isModuleExternal: !0,
                                        nodeId: `cPXId39K4`,
                                        scopeId: `PlMaHNi_L`,
                                        children: a(M, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 0,
                                          bottomLeftRadius: 0,
                                          bottomRightRadius: 0,
                                          controls: !1,
                                          height: `100%`,
                                          id: `cPXId39K4`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `cPXId39K4`,
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
                                  className: `framer-e035tx`,
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
                                          children: `Re:Move event `,
                                        }),
                                      }),
                                      className: `framer-cekxog`,
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
                                          children: `Key Visual`,
                                        }),
                                      }),
                                      className: `framer-10azz35`,
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
                    a(v, {
                      breakpoint: k,
                      overrides: { aq5VqbHPf: { y: (m?.y || 0) + 0 + 5072.1 } },
                      children: a(E, {
                        height: 390,
                        width: m?.width || `100vw`,
                        y: (m?.y || 0) + 0 + 6153.4,
                        children: a(z, {
                          __framer__animate: { transition: X },
                          __framer__animateOnce: !0,
                          __framer__enter: me,
                          __framer__exit: he,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.12,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-6qnn9n-container`,
                          layout: I,
                          nodeId: `j4wAYqoAb`,
                          rendersWithMotion: !0,
                          scopeId: `PlMaHNi_L`,
                          children: a(v, {
                            breakpoint: k,
                            overrides: { aq5VqbHPf: { variant: q(`bC5BwOq5u`) } },
                            children: a(A, {
                              height: `100%`,
                              id: `j4wAYqoAb`,
                              layoutId: `j4wAYqoAb`,
                              style: { width: `100%` },
                              variant: q(`Q4FA0ndjW`),
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
        `.framer-PqOEz.framer-10o6bto, .framer-PqOEz .framer-10o6bto { display: block; }`,
        `.framer-PqOEz.framer-1l8tmn2 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-PqOEz .framer-gokqot { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-PqOEz .framer-1rxgxfw-container, .framer-PqOEz .framer-6qnn9n-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-PqOEz .framer-1gg9hql, .framer-PqOEz .framer-e0lob6, .framer-PqOEz .framer-1uocid8, .framer-PqOEz .framer-e035tx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-PqOEz .framer-8gppup { align-content: center; align-items: center; background-color: #cc1d1f; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-PqOEz .framer-11u3x6l, .framer-PqOEz .framer-kxmfsp { height: 79px; position: relative; width: 79px; }`,
        `.framer-PqOEz .framer-1lzc1j0, .framer-PqOEz .framer-1o2viyy, .framer-PqOEz .framer-r57zlt, .framer-PqOEz .framer-dhlx38 { height: 79px; left: 0px; position: absolute; top: 0px; width: 79px; }`,
        `.framer-PqOEz .framer-12s6y2w, .framer-PqOEz .framer-11zpp3r { height: 13px; left: 33px; position: absolute; top: 33px; width: 13px; }`,
        `.framer-PqOEz .framer-tlfmzc, .framer-PqOEz .framer-ycp8ks { height: 26px; left: 26px; position: absolute; top: 27px; width: 26px; }`,
        `.framer-PqOEz .framer-1y554h6 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 1px; }`,
        `.framer-PqOEz .framer-p5pocj, .framer-PqOEz .framer-1tfsm05, .framer-PqOEz .framer-y990ll, .framer-PqOEz .framer-vevpxu, .framer-PqOEz .framer-ax4nat, .framer-PqOEz .framer-3liasj, .framer-PqOEz .framer-1e8cp79, .framer-PqOEz .framer-e927et, .framer-PqOEz .framer-1h52vqx, .framer-PqOEz .framer-1em0niz, .framer-PqOEz .framer-tbhve0, .framer-PqOEz .framer-m7feb, .framer-PqOEz .framer-ecnj0f, .framer-PqOEz .framer-chkz2h, .framer-PqOEz .framer-1ripnnw, .framer-PqOEz .framer-29vtbw, .framer-PqOEz .framer-4y9mmr { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-PqOEz .framer-11eet60, .framer-PqOEz .framer-1e0wx3m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-PqOEz .framer-1u8eof0 { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-PqOEz .framer-48r3cg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-PqOEz .framer-1uknlot, .framer-PqOEz .framer-1ilnz1l, .framer-PqOEz .framer-42reud, .framer-PqOEz .framer-1vvccdm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-PqOEz .framer-1ep2ekq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-PqOEz .framer-54w6u1 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 807px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-PqOEz .framer-1l4oe43 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-PqOEz .framer-g7qzr2, .framer-PqOEz .framer-1ar55ph, .framer-PqOEz .framer-1henxhh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-PqOEz .framer-xkxn8v, .framer-PqOEz .framer-17i5oer { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 309px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-PqOEz .framer-1514fu1, .framer-PqOEz .framer-1phlk6f, .framer-PqOEz .framer-10rhde8, .framer-PqOEz .framer-92ie1u, .framer-PqOEz .framer-1j2q3on, .framer-PqOEz .framer-1g5dbio, .framer-PqOEz .framer-1ttgbh2, .framer-PqOEz .framer-u6tm0v, .framer-PqOEz .framer-cekxog, .framer-PqOEz .framer-10azz35 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-PqOEz .framer-tqnjp1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-PqOEz .framer-1njlk6v { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 53px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-PqOEz .framer-m467z { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-PqOEz .framer-10ogtns, .framer-PqOEz .framer-178021d, .framer-PqOEz .framer-wg3zuf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-PqOEz .framer-1imo1bd, .framer-PqOEz .framer-18u20uw, .framer-PqOEz .framer-1eu5ao6, .framer-PqOEz .framer-1h55kxf, .framer-PqOEz .framer-adneuq, .framer-PqOEz .framer-gunk29, .framer-PqOEz .framer-jnli0q { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-PqOEz .framer-a3ih4q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 40px; position: relative; width: 100%; }`,
        `.framer-PqOEz .framer-16c4ftp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; top: 40px; width: min-content; z-index: 1; }`,
        `.framer-PqOEz .framer-1y9dfop, .framer-PqOEz .framer-pksp2f { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; }`,
        `.framer-PqOEz .framer-gtfm1x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-PqOEz .framer-twsp8, .framer-PqOEz .framer-1t3lzcr, .framer-PqOEz .framer-1fe1ypd { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-PqOEz .framer-1tacxlu, .framer-PqOEz .framer-plaqc8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-PqOEz .framer-zwya5r-container, .framer-PqOEz .framer-4uw6tz-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-PqOEz .framer-16wazj7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 489px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `@media (max-width: 1199.98px) { .framer-PqOEz.framer-1l8tmn2 { gap: 40px; width: 390px; } .framer-PqOEz .framer-1y554h6 { padding: 0px; } .framer-PqOEz .framer-p5pocj { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; } .framer-PqOEz .framer-54w6u1 { width: 100%; } .framer-PqOEz .framer-gtfm1x { flex-direction: column; } .framer-PqOEz .framer-twsp8, .framer-PqOEz .framer-1t3lzcr, .framer-PqOEz .framer-1fe1ypd { flex: none; width: 100%; }}`,
      ],
      `framer-PqOEz`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 6644, width: 1200 }),
    le(
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
          ],
        },
        ...P,
        ...I,
        ...R,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([D(O, {}, t), D(A, {}, t)])) }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerPlMaHNi_L`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1200`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `6644`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"aq5VqbHPf":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `false`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, V as queryParamNames };
//# sourceMappingURL=NHMudSqFaJbzVxx6WdKX6c9-j8MRzMGWpB5i1MK6Dow.C75vSsZp.mjs.map
