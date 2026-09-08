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
  v as u,
} from "./react.D20wc1Tc.mjs";
import { S as d, a as f, r as p, t as m } from "./motion.jtMCvOiK.mjs";
import {
  C as h,
  J as g,
  L as _,
  S as v,
  at as y,
  et as ee,
  g as b,
  h as x,
  j as S,
  l as C,
  ot as w,
  r as T,
  v as E,
  y as D,
} from "./framer.jQONGl1Q.mjs";
var O,
  k,
  A,
  j = e(() => {
    (_(),
      h.loadFonts([]),
      (O = [{ explicitInter: !0, fonts: [] }]),
      (k = [
        `.framer-wYd0d .framer-styles-preset-1q364k7:not(.rich-text-wrapper), .framer-wYd0d .framer-styles-preset-1q364k7.rich-text-wrapper a { --framer-link-text-color: #000000; }`,
      ]),
      (A = `framer-wYd0d`));
  });
function M(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U = e(() => {
    (l(),
      _(),
      m(),
      n(),
      j(),
      (N = [`N1Y2xUv_c`, `tnNrPT_eu`]),
      (P = `framer-aQg2O`),
      (F = { N1Y2xUv_c: `framer-v-530mgg`, tnNrPT_eu: `framer-v-1ydmlpa` }),
      (I = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (L = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (R = { "Variant 1": `N1Y2xUv_c`, Mobile: `tnNrPT_eu` }),
      (z = d.create(i)),
      (B = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: R[r.variant] ?? r.variant ?? `N1Y2xUv_c`,
      })),
      (V = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = w(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = ee();
          g();
          let { style: m, className: h, layoutId: _, variant: S, ...w } = B(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: D,
              gestureHandlers: O,
              gestureVariant: k,
              isLoading: j,
              setGestureState: R,
              setVariant: H,
              variants: U,
            } = y({
              cycleOrder: N,
              defaultVariant: `N1Y2xUv_c`,
              ref: o,
              variant: S,
              variantClassNames: F,
            }),
            W = V(e, U),
            G = v(P, A);
          return a(p, {
            id: _ ?? s,
            children: a(z, {
              animate: U,
              initial: !1,
              children: a(L, {
                value: I,
                children: c(d.div, {
                  ...w,
                  ...O,
                  className: v(G, `framer-530mgg`, h, E),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: W,
                  layoutId: `N1Y2xUv_c`,
                  ref: o,
                  style: { backgroundColor: `rgba(0, 0, 0, 0)`, ...m },
                  variants: { tnNrPT_eu: { backgroundColor: `rgb(255, 255, 255)` } },
                  ...M({ tnNrPT_eu: { "data-framer-name": `Mobile` } }, T, k),
                  children: [
                    a(d.div, {
                      className: `framer-1befiyy`,
                      layoutDependency: W,
                      layoutId: `rH52nR2BJ`,
                      children: a(C, {
                        href: { webPageId: `augiA20Il` },
                        motionChild: !0,
                        nodeId: `BLTjx46cv`,
                        openInNewTab: !1,
                        scopeId: `C6D1qpMl6`,
                        children: c(d.a, {
                          className: `framer-z7ojan framer-8ayidh`,
                          layoutDependency: W,
                          layoutId: `BLTjx46cv`,
                          children: [
                            c(b, {
                              className: `framer-h6ulc2`,
                              layoutDependency: W,
                              layoutId: `hq_GxjVaj`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39.077 39.052" overflow="visible"><g><path d="M 19.54 39.052 C 14.143 39.052 9.537 37.146 5.721 33.338 C 1.906 29.526 0 24.923 0 19.526 C 0 14.128 1.906 9.526 5.721 5.714 C 9.537 1.906 14.143 0 19.54 0 C 24.938 0 29.544 1.906 33.356 5.714 C 37.171 9.526 39.077 14.128 39.077 19.526 C 39.077 24.923 37.171 29.526 33.356 33.338 C 29.541 37.149 24.934 39.052 19.54 39.052 Z M 19.54 36.564 C 24.25 36.564 28.268 34.901 31.597 31.579 C 34.927 28.257 36.59 24.239 36.59 19.537 C 36.59 14.835 34.927 10.813 31.597 7.484 C 28.268 4.154 24.25 2.487 19.54 2.487 C 14.831 2.487 10.806 4.154 7.48 7.484 C 4.15 10.817 2.487 14.835 2.487 19.537 C 2.487 24.239 4.15 28.257 7.48 31.579 C 10.806 34.901 14.827 36.564 19.54 36.564 Z M 8.065 20.607 L 9.599 20.607 C 10.824 25.983 14.139 28.672 19.54 28.672 C 24.942 28.672 28.253 25.983 29.478 20.607 L 31.038 20.607 C 30.655 24.092 29.441 26.822 27.403 28.797 C 25.365 30.777 22.745 31.767 19.54 31.767 C 16.336 31.767 13.72 30.777 11.689 28.797 C 9.658 26.822 8.451 24.092 8.065 20.607 Z" fill="rgb(29,29,27)"></path><path d="M 13.985 17.061 L 13.985 15.961 L 13.422 16.792 C 13.216 16.943 12.944 17.057 12.605 17.138 C 12.267 17.219 11.899 17.259 11.505 17.259 C 10.839 17.259 10.25 17.097 9.75 16.781 C 9.246 16.461 8.863 16.016 8.595 15.442 C 8.326 14.868 8.194 14.209 8.194 13.466 C 8.194 12.601 8.352 11.858 8.672 11.236 C 8.992 10.615 9.423 10.144 9.963 9.82 C 10.504 9.496 11.104 9.334 11.763 9.334 C 12.083 9.334 12.403 9.367 12.73 9.434 C 13.054 9.5 13.312 9.588 13.499 9.702 L 13.992 10.504 L 13.992 6.696 L 16.531 6.696 L 16.531 17.061 L 13.992 17.061 Z M 11.236 14.952 C 11.538 15.342 11.917 15.537 12.377 15.537 C 12.874 15.537 13.267 15.368 13.554 15.03 C 13.841 14.691 13.985 14.147 13.985 13.392 L 13.985 13.069 C 13.985 12.373 13.838 11.862 13.54 11.538 C 13.242 11.214 12.877 11.052 12.447 11.052 C 11.939 11.052 11.534 11.247 11.233 11.637 C 10.931 12.027 10.78 12.594 10.78 13.337 C 10.78 14.025 10.931 14.562 11.233 14.952 Z M 25.159 16.398 L 22.175 8.841 L 25.004 8.841 L 26.56 14.375 L 28.102 8.841 L 30.891 8.841 L 27.907 16.398 L 25.162 16.398 Z" fill="rgb(29,29,27)"></path></g></svg>`,
                              withExternalLayout: !0,
                              children: [
                                c(b, {
                                  className: `framer-mfa5fw`,
                                  layoutDependency: W,
                                  layoutId: `O0X3pf0Kv`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39.077 39.052" overflow="visible"><path d="M 19.54 39.052 C 14.143 39.052 9.537 37.146 5.721 33.338 C 1.906 29.526 0 24.923 0 19.526 C 0 14.128 1.906 9.526 5.721 5.714 C 9.537 1.906 14.143 0 19.54 0 C 24.938 0 29.544 1.906 33.356 5.714 C 37.171 9.526 39.077 14.128 39.077 19.526 C 39.077 24.923 37.171 29.526 33.356 33.338 C 29.541 37.149 24.934 39.052 19.54 39.052 Z M 19.54 36.564 C 24.25 36.564 28.268 34.901 31.597 31.579 C 34.927 28.257 36.59 24.239 36.59 19.537 C 36.59 14.835 34.927 10.813 31.597 7.484 C 28.268 4.154 24.25 2.487 19.54 2.487 C 14.831 2.487 10.806 4.154 7.48 7.484 C 4.15 10.817 2.487 14.835 2.487 19.537 C 2.487 24.239 4.15 28.257 7.48 31.579 C 10.806 34.901 14.827 36.564 19.54 36.564 Z M 8.065 20.607 L 9.599 20.607 C 10.824 25.983 14.139 28.672 19.54 28.672 C 24.942 28.672 28.253 25.983 29.478 20.607 L 31.038 20.607 C 30.655 24.092 29.441 26.822 27.403 28.797 C 25.365 30.777 22.745 31.767 19.54 31.767 C 16.336 31.767 13.72 30.777 11.689 28.797 C 9.658 26.822 8.451 24.092 8.065 20.607 Z" fill="rgb(29,29,27)"></path></svg>`,
                                  withExternalLayout: !0,
                                  children: [
                                    a(b, {
                                      className: `framer-bbo692`,
                                      layoutDependency: W,
                                      layoutId: `I2bNzTUcB`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39.077 39.052" overflow="visible"><path d="M 19.54 39.052 C 14.143 39.052 9.537 37.146 5.721 33.338 C 1.906 29.526 0 24.923 0 19.526 C 0 14.128 1.906 9.526 5.721 5.714 C 9.537 1.906 14.143 0 19.54 0 C 24.938 0 29.544 1.906 33.356 5.714 C 37.171 9.526 39.077 14.128 39.077 19.526 C 39.077 24.923 37.171 29.526 33.356 33.338 C 29.541 37.149 24.934 39.052 19.54 39.052 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    a(b, {
                                      className: `framer-wzjegp`,
                                      layoutDependency: W,
                                      layoutId: `vn9zkdBxz`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34.103 34.077" overflow="visible"><path d="M 17.053 34.077 C 21.763 34.077 25.78 32.414 29.11 29.092 C 32.44 25.769 34.103 21.752 34.103 17.05 C 34.103 12.348 32.44 8.326 29.11 4.996 C 25.78 1.667 21.763 0 17.053 0 C 12.344 0 8.319 1.667 4.993 4.996 C 1.663 8.33 0 12.348 0 17.05 C 0 21.752 1.663 25.769 4.993 29.092 C 8.319 32.414 12.34 34.077 17.053 34.077 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    a(b, {
                                      className: `framer-1rwyzxn`,
                                      layoutDependency: W,
                                      layoutId: `YoLjB3c0v`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.973 11.159" overflow="visible"><path d="M 0 0 L 1.534 0 C 2.759 5.375 6.074 8.065 11.476 8.065 C 16.877 8.065 20.188 5.375 21.413 0 L 22.973 0 C 22.591 3.484 21.376 6.214 19.338 8.19 C 17.3 10.169 14.68 11.159 11.476 11.159 C 8.271 11.159 5.655 10.169 3.624 8.19 C 1.593 6.214 0.386 3.484 0 0 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                c(b, {
                                  className: `framer-zjwq1e`,
                                  layoutDependency: W,
                                  layoutId: `GXfPl1OHs`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.697 10.563" overflow="visible"><path d="M 5.791 10.364 L 5.791 9.264 L 5.228 10.096 C 5.022 10.247 4.75 10.361 4.411 10.442 C 4.073 10.523 3.705 10.563 3.311 10.563 C 2.645 10.563 2.057 10.401 1.556 10.085 C 1.052 9.765 0.67 9.32 0.401 8.746 C 0.132 8.172 0 7.513 0 6.77 C 0 5.905 0.158 5.162 0.478 4.54 C 0.798 3.918 1.229 3.447 1.77 3.124 C 2.311 2.8 2.91 2.638 3.569 2.638 C 3.889 2.638 4.209 2.671 4.537 2.737 C 4.86 2.804 5.118 2.892 5.305 3.006 L 5.798 3.808 L 5.798 0 L 8.337 0 L 8.337 10.364 L 5.798 10.364 Z M 3.043 8.256 C 3.344 8.646 3.723 8.841 4.183 8.841 C 4.68 8.841 5.074 8.672 5.361 8.333 C 5.648 7.995 5.791 7.45 5.791 6.696 L 5.791 6.372 C 5.791 5.677 5.644 5.166 5.346 4.842 C 5.048 4.518 4.684 4.356 4.253 4.356 C 3.745 4.356 3.341 4.551 3.039 4.941 C 2.737 5.331 2.587 5.898 2.587 6.641 C 2.587 7.329 2.737 7.866 3.039 8.256 Z M 16.965 9.702 L 13.981 2.145 L 16.81 2.145 L 18.367 7.679 L 19.908 2.145 L 22.697 2.145 L 19.713 9.702 L 16.969 9.702 Z" fill="rgb(29,29,27)"></path></svg>`,
                                  withExternalLayout: !0,
                                  children: [
                                    a(b, {
                                      className: `framer-fqggon`,
                                      layoutDependency: W,
                                      layoutId: `P0xxSAblS`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.337 10.563" overflow="visible"><path d="M 5.791 10.364 L 5.791 9.264 L 5.228 10.096 C 5.022 10.247 4.75 10.361 4.411 10.442 C 4.073 10.523 3.705 10.563 3.311 10.563 C 2.645 10.563 2.057 10.401 1.556 10.085 C 1.052 9.765 0.67 9.32 0.401 8.746 C 0.132 8.172 0 7.513 0 6.77 C 0 5.905 0.158 5.162 0.478 4.54 C 0.798 3.918 1.229 3.447 1.77 3.124 C 2.311 2.8 2.91 2.638 3.569 2.638 C 3.889 2.638 4.209 2.671 4.537 2.737 C 4.86 2.804 5.118 2.892 5.305 3.006 L 5.798 3.808 L 5.798 0 L 8.337 0 L 8.337 10.364 L 5.798 10.364 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    a(b, {
                                      className: `framer-gr0yky`,
                                      layoutDependency: W,
                                      layoutId: `sgslH0L2v`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.205 4.485" overflow="visible"><path d="M 0.456 3.9 C 0.758 4.29 1.137 4.485 1.597 4.485 C 2.093 4.485 2.487 4.316 2.774 3.977 C 3.061 3.639 3.205 3.094 3.205 2.34 L 3.205 2.016 C 3.205 1.321 3.057 0.809 2.759 0.486 C 2.461 0.162 2.097 0 1.667 0 C 1.159 0 0.754 0.195 0.453 0.585 C 0.151 0.975 0 1.542 0 2.285 C 0 2.973 0.151 3.51 0.453 3.9 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    a(b, {
                                      className: `framer-1cdi84b`,
                                      layoutDependency: W,
                                      layoutId: `s4Sgz5yk9`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.716 7.557" overflow="visible"><path d="M 2.984 7.557 L 0 0 L 2.829 0 L 4.386 5.534 L 5.927 0 L 8.716 0 L 5.732 7.557 L 2.988 7.557 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            a(x, {
                              __fromCanvasComponent: !0,
                              children: a(i, {
                                children: a(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                    "--framer-font-size": `21px`,
                                  },
                                  children: `Danylo Vasiur`,
                                }),
                              }),
                              className: `framer-gjmko8`,
                              fonts: [`BI;Amiamie/Regular/v0`],
                              layoutDependency: W,
                              layoutId: `oL7Eue1tw`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `center`,
                              withExternalLayout: !0,
                              ...M(
                                {
                                  tnNrPT_eu: {
                                    children: a(i, {
                                      children: a(d.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                          "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                        },
                                        children: `Danylo Vasiur`,
                                      }),
                                    }),
                                  },
                                },
                                T,
                                k
                              ),
                            }),
                          ],
                        }),
                      }),
                    }),
                    c(d.div, {
                      className: `framer-yfjjjn`,
                      layoutDependency: W,
                      layoutId: `qz72nfoPU`,
                      children: [
                        a(x, {
                          __fromCanvasComponent: !0,
                          children: a(i, {
                            children: a(d.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                "--framer-font-size": `21px`,
                              },
                              children: a(C, {
                                href: { webPageId: `CsfUvEijD` },
                                motionChild: !0,
                                nodeId: `HeS2OwzWM`,
                                openInNewTab: !1,
                                relValues: [],
                                scopeId: `C6D1qpMl6`,
                                smoothScroll: !1,
                                children: a(d.a, {
                                  className: `framer-styles-preset-1q364k7`,
                                  "data-styles-preset": `U5IluzgEh`,
                                  children: `about`,
                                }),
                              }),
                            }),
                          }),
                          className: `framer-1qdwm8y`,
                          fonts: [`BI;Amiamie/Regular/v0`],
                          layoutDependency: W,
                          layoutId: `HeS2OwzWM`,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...M(
                            {
                              tnNrPT_eu: {
                                children: a(i, {
                                  children: a(d.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                    },
                                    children: a(C, {
                                      href: { webPageId: `CsfUvEijD` },
                                      motionChild: !0,
                                      nodeId: `HeS2OwzWM`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `C6D1qpMl6`,
                                      smoothScroll: !1,
                                      children: a(d.a, {
                                        className: `framer-styles-preset-1q364k7`,
                                        "data-styles-preset": `U5IluzgEh`,
                                        children: `about`,
                                      }),
                                    }),
                                  }),
                                }),
                              },
                            },
                            T,
                            k
                          ),
                        }),
                        a(C, {
                          href: { webPageId: `c30CApP2Y` },
                          motionChild: !0,
                          nodeId: `NT7IKnXZI`,
                          openInNewTab: !1,
                          scopeId: `C6D1qpMl6`,
                          children: a(d.a, {
                            className: `framer-1yvvwf0 framer-8ayidh`,
                            layoutDependency: W,
                            layoutId: `NT7IKnXZI`,
                            children: a(x, {
                              __fromCanvasComponent: !0,
                              children: a(i, {
                                children: a(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                    "--framer-font-size": `21px`,
                                  },
                                  children: `contacts`,
                                }),
                              }),
                              className: `framer-7nyjme`,
                              fonts: [`BI;Amiamie/Regular/v0`],
                              layoutDependency: W,
                              layoutId: `ta9Kh_Hsa`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...M(
                                {
                                  tnNrPT_eu: {
                                    children: a(i, {
                                      children: a(d.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                          "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                        },
                                        children: `contacts`,
                                      }),
                                    }),
                                  },
                                },
                                T,
                                k
                              ),
                            }),
                          }),
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
          `.framer-aQg2O.framer-8ayidh, .framer-aQg2O .framer-8ayidh { display: block; }`,
          `.framer-aQg2O.framer-530mgg { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 20px 20px 0px 20px; position: relative; width: 1200px; }`,
          `.framer-aQg2O .framer-1befiyy { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-aQg2O .framer-z7ojan { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-aQg2O .framer-h6ulc2 { height: 39px; position: relative; width: 39px; }`,
          `.framer-aQg2O .framer-mfa5fw, .framer-aQg2O .framer-bbo692 { height: 39px; left: 0px; position: absolute; top: 0px; width: 39px; }`,
          `.framer-aQg2O .framer-wzjegp { height: 34px; left: 2px; position: absolute; top: 2px; width: 34px; }`,
          `.framer-aQg2O .framer-1rwyzxn { height: 11px; left: 8px; position: absolute; top: 21px; width: 23px; }`,
          `.framer-aQg2O .framer-zjwq1e { height: 11px; left: 8px; position: absolute; top: 7px; width: 23px; }`,
          `.framer-aQg2O .framer-fqggon { height: 11px; left: 0px; position: absolute; top: 0px; width: 9px; }`,
          `.framer-aQg2O .framer-gr0yky { height: 5px; left: 3px; position: absolute; top: 4px; width: 3px; }`,
          `.framer-aQg2O .framer-1cdi84b { height: 8px; left: 14px; position: absolute; top: 2px; width: 9px; }`,
          `.framer-aQg2O .framer-gjmko8 { flex: none; height: 39px; position: relative; white-space: pre; width: auto; }`,
          `.framer-aQg2O .framer-yfjjjn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 45px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-aQg2O .framer-1qdwm8y, .framer-aQg2O .framer-7nyjme { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-aQg2O .framer-1yvvwf0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-aQg2O.framer-v-1ydmlpa.framer-530mgg { padding: 14px 16px 14px 16px; width: 390px; }`,
          `.framer-aQg2O.framer-v-1ydmlpa .framer-gjmko8 { height: 32px; }`,
          `.framer-aQg2O.framer-v-1ydmlpa .framer-yfjjjn { gap: 16px; }`,
          `.framer-aQg2O.framer-v-1ydmlpa .framer-1yvvwf0 { gap: 0px; }`,
          ...k,
        ],
        `framer-aQg2O`
      )),
      (H.displayName = `Header`),
      (H.defaultProps = { height: 59, width: 1200 }),
      D(H, {
        variant: {
          options: [`N1Y2xUv_c`, `tnNrPT_eu`],
          optionTitles: [`Variant 1`, `Mobile`],
          title: `Variant`,
          type: T.Enum,
        },
      }),
      E(
        H,
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
          ...S(O),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function W(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  te,
  $,
  ne = e(() => {
    (l(),
      _(),
      m(),
      n(),
      j(),
      (G = [`Q4FA0ndjW`, `bC5BwOq5u`]),
      (K = `framer-wqC2Q`),
      (q = { bC5BwOq5u: `framer-v-ghv7ny`, Q4FA0ndjW: `framer-v-1hqig1t` }),
      (J = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Y = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (X = { "Variant 1": `Q4FA0ndjW`, Mobile: `bC5BwOq5u` }),
      (Z = d.create(i)),
      (Q = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: X[r.variant] ?? r.variant ?? `Q4FA0ndjW`,
      })),
      (te = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = w(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = ee();
          g();
          let { style: m, className: h, layoutId: _, variant: b, ...S } = Q(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: k,
              setGestureState: j,
              setVariant: M,
              variants: N,
            } = y({
              cycleOrder: G,
              defaultVariant: `Q4FA0ndjW`,
              ref: o,
              variant: b,
              variantClassNames: q,
            }),
            P = te(e, N),
            F = v(K, A);
          return a(p, {
            id: _ ?? s,
            children: a(Z, {
              animate: N,
              initial: !1,
              children: a(Y, {
                value: J,
                children: a(d.div, {
                  ...S,
                  ...D,
                  className: v(F, `framer-1hqig1t`, h, T),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: P,
                  layoutId: `Q4FA0ndjW`,
                  ref: o,
                  style: { backgroundColor: `rgba(0, 0, 0, 0)`, ...m },
                  variants: { bC5BwOq5u: { backgroundColor: `rgb(255, 255, 255)` } },
                  ...W({ bC5BwOq5u: { "data-framer-name": `Mobile` } }, w, O),
                  children: a(d.footer, {
                    className: `framer-1pw1b4c`,
                    "data-framer-name": `Section/Footer`,
                    layoutDependency: P,
                    layoutId: `qY8lmBJ4u`,
                    children: c(d.div, {
                      className: `framer-1lx52ls`,
                      "data-framer-name": `Content container`,
                      layoutDependency: P,
                      layoutId: `PAyvsKHLc`,
                      children: [
                        c(d.div, {
                          className: `framer-s6oxiu`,
                          "data-framer-name": `Content top`,
                          layoutDependency: P,
                          layoutId: `CG9z0j0SF`,
                          children: [
                            c(d.div, {
                              className: `framer-1s6o4lk`,
                              "data-framer-name": `Content`,
                              layoutDependency: P,
                              layoutId: `RUeespqfK`,
                              children: [
                                c(d.div, {
                                  className: `framer-1pjzh1`,
                                  "data-framer-name": `Text`,
                                  layoutDependency: P,
                                  layoutId: `kUJz8K883`,
                                  children: [
                                    a(x, {
                                      __fromCanvasComponent: !0,
                                      children: a(i, {
                                        children: a(d.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-size": `20px`,
                                            "--framer-letter-spacing": `-0.04em`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(20, 20, 20))`,
                                            "--framer-text-transform": `lowercase`,
                                          },
                                          children: `Email:\xA0vasurdana@gmail.com`,
                                        }),
                                      }),
                                      className: `framer-1k0mnvn`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      layoutDependency: P,
                                      layoutId: `sauBjzCtm`,
                                      style: { "--extracted-r6o4lv": `rgb(20, 20, 20)` },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(x, {
                                      __fromCanvasComponent: !0,
                                      children: a(i, {
                                        children: a(d.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-size": `20px`,
                                            "--framer-letter-spacing": `-0.04em`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(20, 20, 20))`,
                                            "--framer-text-transform": `lowercase`,
                                          },
                                          children: `Based in: Krakow, Poland`,
                                        }),
                                      }),
                                      className: `framer-h2py4b`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      layoutDependency: P,
                                      layoutId: `wbTUMz07q`,
                                      style: { "--extracted-r6o4lv": `rgb(20, 20, 20)` },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(x, {
                                      __fromCanvasComponent: !0,
                                      children: a(i, {
                                        children: a(d.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            "--framer-font-size": `20px`,
                                            "--framer-letter-spacing": `-0.04em`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(20, 20, 20))`,
                                            "--framer-text-transform": `lowercase`,
                                          },
                                          children: `Available for: Freelance Projects & Full-Time`,
                                        }),
                                      }),
                                      className: `framer-18lsrev`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      layoutDependency: P,
                                      layoutId: `e1HDU22U2`,
                                      style: { "--extracted-r6o4lv": `rgb(20, 20, 20)` },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                c(d.div, {
                                  className: `framer-3ras9f`,
                                  "data-framer-name": `Links`,
                                  layoutDependency: P,
                                  layoutId: `GeV7ayjG9`,
                                  children: [
                                    c(d.div, {
                                      className: `framer-1ngje7`,
                                      "data-framer-name": `Pages`,
                                      layoutDependency: P,
                                      layoutId: `LHd85_jGr`,
                                      children: [
                                        a(x, {
                                          __fromCanvasComponent: !0,
                                          children: a(i, {
                                            children: a(d.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-letter-spacing": `-0.02em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(20, 20, 20))`,
                                                "--framer-text-transform": `lowercase`,
                                              },
                                              children: `pages`,
                                            }),
                                          }),
                                          className: `framer-r1tmt4`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          layoutDependency: P,
                                          layoutId: `JOmnOtBrB`,
                                          style: {
                                            "--extracted-r6o4lv": `rgb(20, 20, 20)`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                            opacity: 0.9,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(x, {
                                          __fromCanvasComponent: !0,
                                          children: a(i, {
                                            children: a(d.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `20px`,
                                                "--framer-letter-spacing": `-0.04em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(20, 20, 20))`,
                                              },
                                              children: a(C, {
                                                href: { webPageId: `augiA20Il` },
                                                motionChild: !0,
                                                nodeId: `Wp3OtSti0`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `E8nraaE0C`,
                                                smoothScroll: !1,
                                                children: a(d.a, {
                                                  className: `framer-styles-preset-1q364k7`,
                                                  "data-styles-preset": `U5IluzgEh`,
                                                  children: `home`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-h9lyob`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          layoutDependency: P,
                                          layoutId: `Wp3OtSti0`,
                                          style: { "--extracted-r6o4lv": `rgb(20, 20, 20)` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(x, {
                                          __fromCanvasComponent: !0,
                                          children: a(i, {
                                            children: a(d.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `20px`,
                                                "--framer-letter-spacing": `-0.04em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(20, 20, 20))`,
                                              },
                                              children: a(C, {
                                                href: { webPageId: `CsfUvEijD` },
                                                motionChild: !0,
                                                nodeId: `p00qshCOP`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `E8nraaE0C`,
                                                smoothScroll: !1,
                                                children: a(d.a, {
                                                  className: `framer-styles-preset-1q364k7`,
                                                  "data-styles-preset": `U5IluzgEh`,
                                                  children: `about`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1246a0e`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          layoutDependency: P,
                                          layoutId: `p00qshCOP`,
                                          style: { "--extracted-r6o4lv": `rgb(20, 20, 20)` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    c(d.div, {
                                      className: `framer-16y1cmi`,
                                      "data-framer-name": `Socials`,
                                      layoutDependency: P,
                                      layoutId: `ZnLYYtlHE`,
                                      children: [
                                        a(x, {
                                          __fromCanvasComponent: !0,
                                          children: a(i, {
                                            children: a(d.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-letter-spacing": `-0.02em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(20, 20, 20))`,
                                                "--framer-text-transform": `lowercase`,
                                              },
                                              children: `socials`,
                                            }),
                                          }),
                                          className: `framer-1rt7x0z`,
                                          "data-framer-name": `socials`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          layoutDependency: P,
                                          layoutId: `ED7aVCuxt`,
                                          style: {
                                            "--extracted-r6o4lv": `rgb(20, 20, 20)`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                            opacity: 0.9,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(x, {
                                          __fromCanvasComponent: !0,
                                          children: a(i, {
                                            children: a(d.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `20px`,
                                                "--framer-letter-spacing": `-0.04em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(20, 20, 20))`,
                                              },
                                              children: a(C, {
                                                href: `https://www.instagram.com/koty_koty_myszi/`,
                                                motionChild: !0,
                                                nodeId: `CuPsvZKeH`,
                                                openInNewTab: !0,
                                                relValues: [],
                                                scopeId: `E8nraaE0C`,
                                                smoothScroll: !1,
                                                children: a(d.a, {
                                                  className: `framer-styles-preset-1q364k7`,
                                                  "data-styles-preset": `U5IluzgEh`,
                                                  children: `instagram`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-ikcok8`,
                                          "data-framer-name": `Instagram`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          layoutDependency: P,
                                          layoutId: `CuPsvZKeH`,
                                          style: { "--extracted-r6o4lv": `rgb(20, 20, 20)` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(x, {
                                          __fromCanvasComponent: !0,
                                          children: a(i, {
                                            children: a(d.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `20px`,
                                                "--framer-letter-spacing": `-0.04em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(20, 20, 20))`,
                                              },
                                              children: a(C, {
                                                href: `https://www.behance.net/daniavasur`,
                                                motionChild: !0,
                                                nodeId: `F_e0p1cUF`,
                                                openInNewTab: !0,
                                                relValues: [],
                                                scopeId: `E8nraaE0C`,
                                                smoothScroll: !1,
                                                children: a(d.a, {
                                                  className: `framer-styles-preset-1q364k7`,
                                                  "data-styles-preset": `U5IluzgEh`,
                                                  children: `behance`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-179l6vs`,
                                          "data-framer-name": `X`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          layoutDependency: P,
                                          layoutId: `F_e0p1cUF`,
                                          style: { "--extracted-r6o4lv": `rgb(20, 20, 20)` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(x, {
                                          __fromCanvasComponent: !0,
                                          children: a(i, {
                                            children: a(d.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                "--framer-font-size": `20px`,
                                                "--framer-letter-spacing": `-0.04em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(20, 20, 20))`,
                                              },
                                              children: a(C, {
                                                href: `https://www.linkedin.com/in/danylo-vasiur-7a9604324/`,
                                                motionChild: !0,
                                                nodeId: `Fh5ad2GD0`,
                                                openInNewTab: !0,
                                                relValues: [],
                                                scopeId: `E8nraaE0C`,
                                                smoothScroll: !1,
                                                children: a(d.a, {
                                                  className: `framer-styles-preset-1q364k7`,
                                                  "data-styles-preset": `U5IluzgEh`,
                                                  children: `linkedin`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-15d3cc2`,
                                          "data-framer-name": `Pinterest`,
                                          fonts: [`BI;Amiamie/Regular/v0`],
                                          layoutDependency: P,
                                          layoutId: `Fh5ad2GD0`,
                                          style: { "--extracted-r6o4lv": `rgb(20, 20, 20)` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            a(d.div, {
                              className: `framer-vb2plc`,
                              layoutDependency: P,
                              layoutId: `QbCtn5hGo`,
                              children: a(d.div, {
                                className: `framer-1asiro4`,
                                layoutDependency: P,
                                layoutId: `NpmZNZKne`,
                                children: a(x, {
                                  __fromCanvasComponent: !0,
                                  children: a(i, {
                                    children: a(d.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                        "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                        "--framer-font-size": `183.26527566958393px`,
                                      },
                                      children: `Danylo Vasiur`,
                                    }),
                                  }),
                                  className: `framer-mqsmpa`,
                                  fonts: [`BI;Amiamie/Regular/v0`],
                                  layoutDependency: P,
                                  layoutId: `k7kLsVpm6`,
                                  verticalAlignment: `top`,
                                  viewBox: `0 0 1160 220`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          ],
                        }),
                        a(d.div, {
                          className: `framer-1glmxmc`,
                          "data-framer-name": `Content bottom`,
                          layoutDependency: P,
                          layoutId: `txVUH9TlZ`,
                          children: a(d.div, {
                            className: `framer-w264nb`,
                            "data-framer-name": `Line`,
                            layoutDependency: P,
                            layoutId: `oyGJUWgvu`,
                            style: {
                              backgroundColor: `var(--token-760b2224-5d53-4ceb-988b-26f083436f3c, rgba(236, 232, 223, 0.12))`,
                            },
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-wqC2Q.framer-814ue1, .framer-wqC2Q .framer-814ue1 { display: block; }`,
          `.framer-wqC2Q.framer-1hqig1t { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
          `.framer-wqC2Q .framer-1pw1b4c { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: 1px; }`,
          `.framer-wqC2Q .framer-1lx52ls { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-wqC2Q .framer-s6oxiu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-wqC2Q .framer-1s6o4lk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-wqC2Q .framer-1pjzh1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-wqC2Q .framer-1k0mnvn, .framer-wqC2Q .framer-h2py4b, .framer-wqC2Q .framer-18lsrev, .framer-wqC2Q .framer-r1tmt4, .framer-wqC2Q .framer-1rt7x0z { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-wqC2Q .framer-3ras9f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 76px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-wqC2Q .framer-1ngje7, .framer-wqC2Q .framer-16y1cmi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-wqC2Q .framer-h9lyob, .framer-wqC2Q .framer-1246a0e, .framer-wqC2Q .framer-ikcok8, .framer-wqC2Q .framer-179l6vs, .framer-wqC2Q .framer-15d3cc2 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,
          `.framer-wqC2Q .framer-vb2plc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-wqC2Q .framer-1asiro4 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-wqC2Q .framer-mqsmpa { flex: 1 0 0px; height: auto; position: relative; white-space: pre; width: 1px; }`,
          `.framer-wqC2Q .framer-1glmxmc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-wqC2Q .framer-w264nb { flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
          `.framer-wqC2Q.framer-v-ghv7ny.framer-1hqig1t { width: 390px; }`,
          `.framer-wqC2Q.framer-v-ghv7ny .framer-1pw1b4c { gap: 48px; padding: 0px 16px 0px 16px; }`,
          `.framer-wqC2Q.framer-v-ghv7ny .framer-s6oxiu { gap: 32px; }`,
          `.framer-wqC2Q.framer-v-ghv7ny .framer-1s6o4lk { flex-direction: column; gap: 32px; justify-content: flex-start; }`,
          `.framer-wqC2Q.framer-v-ghv7ny .framer-1pjzh1 { gap: 12px; width: 100%; }`,
          `.framer-wqC2Q.framer-v-ghv7ny .framer-3ras9f { gap: unset; justify-content: space-between; width: 100%; }`,
          `.framer-wqC2Q.framer-v-ghv7ny .framer-1ngje7 { order: 1; }`,
          `.framer-wqC2Q.framer-v-ghv7ny .framer-16y1cmi { order: 0; }`,
          ...k,
        ],
        `framer-wqC2Q`
      )),
      ($.displayName = `Botom`),
      ($.defaultProps = { height: 390, width: 1200 }),
      D($, {
        variant: {
          options: [`Q4FA0ndjW`, `bC5BwOq5u`],
          optionTitles: [`Variant 1`, `Mobile`],
          title: `Variant`,
          type: T.Enum,
        },
      }),
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
            ],
          },
          ...S(O),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function re(e, t) {
  return {
    description: `Portfolio of graphic designer Danylo Vasiur`,
    favicon: `https://framerusercontent.com/assets/Ege4lEgi6Kg7UnH9rBCSNhjqc.png`,
    robots: `max-image-preview:large`,
    title: `Danylo Vasiur Portfolio`,
  };
}
var ie = e(() => {});
export { H as a, ne as i, re as n, U as o, $ as r, ie as t };
//# sourceMappingURL=shared-lib.B1UR4gSL.mjs.map
