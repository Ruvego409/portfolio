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
import { S as u, a as d, r as te, t as f } from "./motion.jtMCvOiK.mjs";
import {
  $ as p,
  A as m,
  J as ne,
  L as h,
  M as g,
  S as _,
  X as v,
  Z as y,
  a as re,
  at as ie,
  ct as b,
  et as ae,
  f as x,
  h as S,
  l as C,
  lt as w,
  n as T,
  nt as oe,
  ot as E,
  q as D,
  r as O,
  s as k,
  t as A,
  tt as se,
  v as j,
  w as M,
  y as N,
} from "./framer.jQONGl1Q.mjs";
import { a as P, i as F, o as I, r as L } from "./shared-lib.B1UR4gSL.mjs";
import { n as ce, t as R } from "./Video.C7bZWvFX.mjs";
import { n as le, t as z } from "./Video.CwIi_51J.mjs";
import ue, { t as de } from "./BXXrFrGRaUH49NemjdXtOj8BqbTysNUVlHjzLmYbJnY.BUd7ylTk.mjs";
function B(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var V,
  H,
  U,
  W,
  G,
  fe,
  pe,
  me,
  he,
  K,
  ge = e(() => {
    (l(),
      h(),
      f(),
      n(),
      (V = [`Ik05DC9vA`, `h64uAhHv1`, `g4ABo9c19`, `Ly64MUs2x`, `saqgFgpvF`, `R4Z8Rfdf1`]),
      (H = `framer-2BN2B`),
      (U = {
        g4ABo9c19: `framer-v-1jhfbr2`,
        h64uAhHv1: `framer-v-1l0221k`,
        Ik05DC9vA: `framer-v-zucexc`,
        Ly64MUs2x: `framer-v-1gaiqtz`,
        R4Z8Rfdf1: `framer-v-1m37wu3`,
        saqgFgpvF: `framer-v-142ayu4`,
      }),
      (W = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (G = ({ value: e, children: n }) => {
        let r = s(d),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(d.Provider, { value: o, children: n });
      }),
      (fe = {
        "Variant 1": `Ik05DC9vA`,
        "Variant 2": `h64uAhHv1`,
        "Variant 3": `g4ABo9c19`,
        "Variant 4": `Ly64MUs2x`,
        "Variant 5": `saqgFgpvF`,
        "Variant 6": `R4Z8Rfdf1`,
      }),
      (pe = u.create(i)),
      (me = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: fe[r.variant] ?? r.variant ?? `Ik05DC9vA`,
      })),
      (he = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = E(
        o(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = ee(),
            { activeLocale: s, setLocale: c } = ae(),
            l = ne(),
            { style: d, className: f, layoutId: p, variant: m, ...h } = me(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: re,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = ie({
              cycleOrder: V,
              defaultVariant: `Ik05DC9vA`,
              ref: i,
              variant: m,
              variantClassNames: U,
            }),
            E = he(e, T),
            { activeVariantCallback: O, delay: A } = D(v),
            se = O(async (...e) => {
              await A(() => w(`h64uAhHv1`, !0), 700);
            }),
            j = O(async (...e) => {
              await A(() => w(`g4ABo9c19`, !0), 700);
            }),
            M = O(async (...e) => {
              await A(() => w(`Ly64MUs2x`, !0), 700);
            }),
            N = O(async (...e) => {
              await A(() => w(`saqgFgpvF`, !0), 700);
            }),
            P = O(async (...e) => {
              await A(() => w(`R4Z8Rfdf1`, !0), 700);
            });
          oe(v, {
            default: se,
            g4ABo9c19: M,
            h64uAhHv1: j,
            Ly64MUs2x: N,
            R4Z8Rfdf1: O(async (...e) => {
              await A(() => w(`Ik05DC9vA`, !0), 700);
            }),
            saqgFgpvF: P,
          });
          let F = _(H);
          return a(te, {
            id: p ?? o,
            children: a(pe, {
              animate: T,
              initial: !1,
              children: a(G, {
                value: W,
                children: a(u.div, {
                  ...h,
                  ...b,
                  className: _(F, `framer-zucexc`, f, y),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: E,
                  layoutId: `Ik05DC9vA`,
                  ref: i,
                  style: { backgroundColor: `rgb(34, 34, 32)`, ...d },
                  ...B(
                    {
                      g4ABo9c19: { "data-framer-name": `Variant 3` },
                      h64uAhHv1: { "data-framer-name": `Variant 2` },
                      Ly64MUs2x: { "data-framer-name": `Variant 4` },
                      R4Z8Rfdf1: { "data-framer-name": `Variant 6` },
                      saqgFgpvF: { "data-framer-name": `Variant 5` },
                    },
                    v,
                    x
                  ),
                  children: a(k, {
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 2598,
                      intrinsicWidth: 3780,
                      loading: g((l?.y || 0) + 40 + (((l?.height || 516) - 80 - 436) / 2 + 0 + 0)),
                      pixelHeight: 2598,
                      pixelWidth: 3780,
                      sizes: `calc(${l?.width || `100vw`} - 80px)`,
                      src: `../../assets/images/SVDtCvJFZ7zudcbjmd1bS6oBIps.png?width=3780&height=2598`,
                      srcSet: `../../assets/images/SVDtCvJFZ7zudcbjmd1bS6oBIps.png?scale-down-to=512&width=3780&height=2598 512w,../../assets/images/SVDtCvJFZ7zudcbjmd1bS6oBIps.png?scale-down-to=1024&width=3780&height=2598 1024w,../../assets/images/SVDtCvJFZ7zudcbjmd1bS6oBIps.png 2048w,../../assets/images/SVDtCvJFZ7zudcbjmd1bS6oBIps.png?width=3780&height=2598 3780w`,
                    },
                    className: `framer-1qry1ra`,
                    fitImageDimension: `height`,
                    layoutDependency: E,
                    layoutId: `DBQ6cJvu0`,
                    ...B(
                      {
                        g4ABo9c19: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 2598,
                            intrinsicWidth: 3780,
                            loading: g(
                              (l?.y || 0) + 40 + (((l?.height || 516) - 80 - 436) / 2 + 0 + 0)
                            ),
                            pixelHeight: 2598,
                            pixelWidth: 3780,
                            sizes: `calc(${l?.width || `100vw`} - 80px)`,
                            src: `../../assets/images/beaqUlBMOIz1AbYbVn2y5hA1g.png?width=3780&height=2598`,
                            srcSet: `../../assets/images/beaqUlBMOIz1AbYbVn2y5hA1g.png?scale-down-to=512&width=3780&height=2598 512w,../../assets/images/beaqUlBMOIz1AbYbVn2y5hA1g.png?scale-down-to=1024&width=3780&height=2598 1024w,../../assets/images/beaqUlBMOIz1AbYbVn2y5hA1g.png 2048w,../../assets/images/beaqUlBMOIz1AbYbVn2y5hA1g.png?width=3780&height=2598 3780w`,
                          },
                        },
                        Ly64MUs2x: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 2598,
                            intrinsicWidth: 3780,
                            loading: g(
                              (l?.y || 0) + 40 + (((l?.height || 516) - 80 - 436) / 2 + 0 + 0)
                            ),
                            pixelHeight: 2598,
                            pixelWidth: 3780,
                            sizes: `calc(${l?.width || `100vw`} - 80px)`,
                            src: `../../assets/images/hrpHGHeirjOeelxyrnQ4iB44E.png?width=3780&height=2598`,
                            srcSet: `../../assets/images/hrpHGHeirjOeelxyrnQ4iB44E.png?scale-down-to=512&width=3780&height=2598 512w,../../assets/images/hrpHGHeirjOeelxyrnQ4iB44E.png?scale-down-to=1024&width=3780&height=2598 1024w,../../assets/images/hrpHGHeirjOeelxyrnQ4iB44E.png 2048w,../../assets/images/hrpHGHeirjOeelxyrnQ4iB44E.png?width=3780&height=2598 3780w`,
                          },
                        },
                        R4Z8Rfdf1: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 2598,
                            intrinsicWidth: 3780,
                            loading: g(
                              (l?.y || 0) + 40 + (((l?.height || 516) - 80 - 436) / 2 + 0 + 0)
                            ),
                            pixelHeight: 2598,
                            pixelWidth: 3780,
                            sizes: `calc(${l?.width || `100vw`} - 80px)`,
                            src: `../../assets/images/Fl8jSpCunEHKE70owm1ZCoqqIqM.png?width=3780&height=2598`,
                            srcSet: `../../assets/images/Fl8jSpCunEHKE70owm1ZCoqqIqM.png?scale-down-to=512&width=3780&height=2598 512w,../../assets/images/Fl8jSpCunEHKE70owm1ZCoqqIqM.png?scale-down-to=1024&width=3780&height=2598 1024w,../../assets/images/Fl8jSpCunEHKE70owm1ZCoqqIqM.png 2048w,../../assets/images/Fl8jSpCunEHKE70owm1ZCoqqIqM.png?width=3780&height=2598 3780w`,
                          },
                        },
                        saqgFgpvF: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 2598,
                            intrinsicWidth: 3780,
                            loading: g(
                              (l?.y || 0) + 40 + (((l?.height || 516) - 80 - 436) / 2 + 0 + 0)
                            ),
                            pixelHeight: 2598,
                            pixelWidth: 3780,
                            sizes: `calc(${l?.width || `100vw`} - 80px)`,
                            src: `../../assets/images/NkZWTYO7GEMfF4xIjOLUerzWkk.png?width=3780&height=2598`,
                            srcSet: `../../assets/images/NkZWTYO7GEMfF4xIjOLUerzWkk.png?scale-down-to=512&width=3780&height=2598 512w,../../assets/images/NkZWTYO7GEMfF4xIjOLUerzWkk.png?scale-down-to=1024&width=3780&height=2598 1024w,../../assets/images/NkZWTYO7GEMfF4xIjOLUerzWkk.png 2048w,../../assets/images/NkZWTYO7GEMfF4xIjOLUerzWkk.png?width=3780&height=2598 3780w`,
                          },
                        },
                      },
                      v,
                      x
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-2BN2B.framer-ppb5tn, .framer-2BN2B .framer-ppb5tn { display: block; }`,
          `.framer-2BN2B.framer-zucexc { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 40px; position: relative; width: 715px; }`,
          `.framer-2BN2B .framer-1qry1ra { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        ],
        `framer-2BN2B`
      )),
      (K.displayName = `ubu animacja`),
      (K.defaultProps = { height: 516, width: 715 }),
      N(K, {
        variant: {
          options: [`Ik05DC9vA`, `h64uAhHv1`, `g4ABo9c19`, `Ly64MUs2x`, `saqgFgpvF`, `R4Z8Rfdf1`],
          optionTitles: [
            `Variant 1`,
            `Variant 2`,
            `Variant 3`,
            `Variant 4`,
            `Variant 5`,
            `Variant 6`,
          ],
          title: `Variant`,
          type: O.Enum,
        },
      }),
      j(K, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  q,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  J,
  Y,
  X,
  Me,
  Ne,
  Z,
  Pe,
  Q,
  Fe,
  Ie,
  $,
  Le;
e(() => {
  (l(),
    h(),
    f(),
    n(),
    ce(),
    le(),
    I(),
    ge(),
    F(),
    de(),
    (_e = m(P)),
    (ve = m(z)),
    (ye = w(u.div)),
    (be = m(K)),
    (xe = m(R)),
    (Se = b(u.div)),
    (Ce = m(L)),
    (we = b(T)),
    (Te = { br6BLVVH2: `(max-width: 1199.98px)`, nSzSZYDqq: `(min-width: 1200px)` }),
    (q = () => typeof document < `u`),
    (Ee = []),
    (De = `framer-uI4JM`),
    (Oe = { br6BLVVH2: `framer-v-qkcd30`, nSzSZYDqq: `framer-v-1fn8bra` }),
    (ke = (e, t, n) => (e && t ? `position` : n)),
    (Ae = {
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
    (je = {
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
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = {
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
    (Me = {
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
    (Ne = {
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
    (Pe = {
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
    (Q = { Desktop: `nSzSZYDqq`, Phone: `br6BLVVH2` }),
    (Fe = ({ value: e }) =>
      p()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ie = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `nSzSZYDqq`,
    })),
    ($ = E(
      o(function (e, n) {
        let o = r(null),
          l = n ?? o,
          f = ee(),
          { activeLocale: p, setLocale: m } = ae(),
          h = ne(),
          { style: ie, className: b, layoutId: w, variant: oe, ...E } = Ie(e);
        se(t(() => ue({}, p), [p]));
        let [D, O] = y(oe, Te, !1),
          j = _(De),
          M = s(re)?.isLayoutTemplate,
          N = !!s(d)?.transition?.layout,
          F = ke(M, N),
          I = () => !q() || D !== `br6BLVVH2`,
          ce = () => !q() || D === `br6BLVVH2`;
        return (
          v({}),
          a(re.Provider, {
            value: {
              activeVariantId: D,
              humanReadableVariantMap: Q,
              primaryVariantId: `nSzSZYDqq`,
              variantClassNames: Oe,
            },
            children: c(te, {
              id: w ?? f,
              children: [
                a(Fe, { value: `html body { background: rgb(255, 255, 255); }` }),
                c(u.div, {
                  ...E,
                  className: _(j, `framer-1fn8bra`, b),
                  ref: l,
                  style: { ...ie },
                  children: [
                    c(ye, {
                      animate: Ae,
                      className: `framer-2r2hmk`,
                      "data-framer-appear-id": `2r2hmk`,
                      initial: je,
                      layout: F,
                      optimized: !0,
                      children: [
                        a(A, {
                          height: 59,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0 + 0 + 0,
                          children: a(T, {
                            className: `framer-4gc221-container`,
                            nodeId: `B9IcpgU3o`,
                            scopeId: `aCRbSljkl`,
                            children: a(x, {
                              breakpoint: D,
                              overrides: { br6BLVVH2: { variant: J(`tnNrPT_eu`) } },
                              children: a(P, {
                                height: `100%`,
                                id: `B9IcpgU3o`,
                                layoutId: `B9IcpgU3o`,
                                style: { width: `100%` },
                                variant: J(`N1Y2xUv_c`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        c(`div`, {
                          className: `framer-1yg6qij`,
                          children: [
                            c(`div`, {
                              className: `framer-9ooatf`,
                              children: [
                                I() &&
                                  c(`div`, {
                                    className: `framer-1awryaj hidden-qkcd30`,
                                    children: [
                                      a(`div`, { className: `framer-xny5pq` }),
                                      a(`div`, { className: `framer-1pmfzws` }),
                                      a(`div`, { className: `framer-163knr5` }),
                                    ],
                                  }),
                                a(`div`, {
                                  className: `framer-1jrz6oe`,
                                  children: a(x, {
                                    breakpoint: D,
                                    overrides: {
                                      br6BLVVH2: {
                                        children: a(i, {
                                          children: a(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                              "--framer-font-size": `30px`,
                                              "--framer-line-height": `2.5em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `Ubu Roi ou les Polonais `,
                                          }),
                                        }),
                                      },
                                    },
                                    children: a(S, {
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
                                          children: `Ubu Roi ou les Polonais `,
                                        }),
                                      }),
                                      className: `framer-1grbac4`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                I() &&
                                  c(`div`, {
                                    className: `framer-151283z hidden-qkcd30`,
                                    children: [
                                      a(`div`, { className: `framer-1eg8pc9` }),
                                      a(`div`, { className: `framer-1jkthnp` }),
                                      a(`div`, { className: `framer-1minkqq` }),
                                    ],
                                  }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1lecc4z`,
                              children: [
                                c(`div`, {
                                  className: `framer-vsw7xn`,
                                  children: [
                                    a(A, {
                                      children: a(T, {
                                        className: `framer-o88vq2-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `H4RPN7zTO`,
                                        scopeId: `aCRbSljkl`,
                                        children: a(x, {
                                          breakpoint: D,
                                          overrides: {
                                            br6BLVVH2: {
                                              srcFile: `https://framerusercontent.com/assets/SpAQypmAKcjojk1r7A0F5hcye7M.mp4`,
                                            },
                                          },
                                          children: a(z, {
                                            backgroundColor: `rgba(0, 0, 0, 0)`,
                                            borderRadius: 0,
                                            bottomLeftRadius: 0,
                                            bottomRightRadius: 0,
                                            controls: !1,
                                            height: `100%`,
                                            id: `H4RPN7zTO`,
                                            isMixedBorderRadius: !1,
                                            layoutId: `H4RPN7zTO`,
                                            loop: !0,
                                            muted: !0,
                                            objectFit: `cover`,
                                            playing: !0,
                                            posterEnabled: !0,
                                            srcFile: `../../assets/misc/pmrVVXBKjVwuqmxJx9S36N57A.mp4`,
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
                                      className: `framer-1jqaeu8`,
                                      children: [
                                        c(`div`, {
                                          className: `framer-64690l`,
                                          children: [
                                            a(x, {
                                              breakpoint: D,
                                              overrides: {
                                                br6BLVVH2: {
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
                                              children: a(S, {
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
                                                className: `framer-z1z84`,
                                                fonts: [`BI;Amiamie/Regular/v0`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            a(S, {
                                              __fromCanvasComponent: !0,
                                              children: a(i, {
                                                children: a(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                  },
                                                  children: `Editorial Design`,
                                                }),
                                              }),
                                              className: `framer-16i0n6b`,
                                              fonts: [`BI;Amiamie/Regular/v0`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        c(`div`, {
                                          className: `framer-8ham21`,
                                          children: [
                                            a(x, {
                                              breakpoint: D,
                                              overrides: {
                                                br6BLVVH2: {
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
                                              children: a(S, {
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
                                                className: `framer-26dw0w`,
                                                fonts: [`BI;Amiamie/Regular/v0`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            a(S, {
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
                                              className: `framer-18l0ldt`,
                                              fonts: [`BI;Amiamie/Regular/v0`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        c(`div`, {
                                          className: `framer-k2cq6o`,
                                          children: [
                                            a(x, {
                                              breakpoint: D,
                                              overrides: {
                                                br6BLVVH2: {
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
                                              children: a(S, {
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
                                                className: `framer-kosevv`,
                                                fonts: [`BI;Amiamie/Regular/v0`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            a(S, {
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
                                              className: `framer-1f5ja0i`,
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
                                  className: `framer-isx4l9`,
                                  children: [
                                    ce() &&
                                      c(`div`, {
                                        className: `framer-3lquk1 hidden-1fn8bra`,
                                        children: [
                                          c(`div`, {
                                            className: `framer-pe4gzn`,
                                            children: [
                                              a(S, {
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
                                                className: `framer-1fjjgie`,
                                                fonts: [`BI;Amiamie/Regular/v0`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              a(S, {
                                                __fromCanvasComponent: !0,
                                                children: a(i, {
                                                  children: c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                      "--framer-font-size": `20px`,
                                                    },
                                                    children: [
                                                      `Most Polish editions of `,
                                                      a(`em`, { children: `Ubu Roi` }),
                                                      ` wrap the play in conventional, academic design, flattening the very anarchy and grotesque humor that make the text what it is.`,
                                                    ],
                                                  }),
                                                }),
                                                className: `framer-dsc3db`,
                                                fonts: [`BI;Amiamie/Regular/v0`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          c(`div`, {
                                            className: `framer-vner9g`,
                                            children: [
                                              a(S, {
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
                                                className: `framer-2jqj7h`,
                                                fonts: [`BI;Amiamie/Regular/v0`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              a(S, {
                                                __fromCanvasComponent: !0,
                                                children: a(i, {
                                                  children: a(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                      "--framer-font-size": `20px`,
                                                    },
                                                    children: `I took an existing typeface and reworked it, cutting holes into the letterforms and arranging them as if falling apart across the pages — just like Ubu's kingdom.`,
                                                  }),
                                                }),
                                                className: `framer-7wvpo3`,
                                                fonts: [`BI;Amiamie/Regular/v0`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          c(`div`, {
                                            className: `framer-q8kdy2`,
                                            children: [
                                              a(S, {
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
                                                className: `framer-1wsrsil`,
                                                fonts: [`BI;Amiamie/Regular/v0`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              a(S, {
                                                __fromCanvasComponent: !0,
                                                children: a(i, {
                                                  children: a(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                      "--framer-font-size": `20px`,
                                                    },
                                                    children: `The result is a book where the reader physically experiences the collapse: turning pages means watching the text and Ubu's rule — fall apart in real time.`,
                                                  }),
                                                }),
                                                className: `framer-ec5r5z`,
                                                fonts: [`BI;Amiamie/Regular/v0`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    a(`div`, {
                                      className: `framer-17l83e7`,
                                      children: c(`div`, {
                                        className: `framer-1xjo98k`,
                                        children: [
                                          a(x, {
                                            breakpoint: D,
                                            overrides: {
                                              br6BLVVH2: {
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
                                            children: a(S, {
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
                                              className: `framer-2lxqfs`,
                                              fonts: [`BI;Amiamie/Regular/v0`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          a(x, {
                                            breakpoint: D,
                                            overrides: {
                                              br6BLVVH2: {
                                                children: a(i, {
                                                  children: c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                                      "--framer-font-size": `20px`,
                                                    },
                                                    children: [
                                                      `A university editorial project reinterpreting Alfred Jarry's `,
                                                      a(`em`, { children: `Ubu Roi` }),
                                                      ` (1896), an absurdist play about a grotesque king whose greed and incompetence collapse his own kingdom.`,
                                                    ],
                                                  }),
                                                }),
                                              },
                                            },
                                            children: a(S, {
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
                                                    `A university editorial project reinterpreting Alfred Jarry's `,
                                                    a(`em`, { children: `Ubu Roi` }),
                                                    ` (1896), an absurdist play about a grotesque king whose greed and incompetence collapse his own kingdom.`,
                                                  ],
                                                }),
                                              }),
                                              className: `framer-kwemq5`,
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
                    c(Se, {
                      __framer__animate: { transition: X },
                      __framer__animateOnce: !0,
                      __framer__enter: Y,
                      __framer__exit: Me,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.16,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-r5pxwa`,
                      layout: F,
                      children: [
                        c(`div`, {
                          className: `framer-mu4dlp`,
                          children: [
                            c(`div`, {
                              className: `framer-k0249h`,
                              children: [
                                c(`div`, {
                                  className: `framer-1ryn7wz`,
                                  children: [
                                    a(S, {
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
                                      className: `framer-x61jeu`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(x, {
                                      breakpoint: D,
                                      overrides: {
                                        br6BLVVH2: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 4491,
                                            intrinsicWidth: 8393,
                                            loading: g(
                                              (h?.y || 0) +
                                                0 +
                                                1050.2 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                27.2
                                            ),
                                            pixelHeight: 4491,
                                            pixelWidth: 8393,
                                            sizes: `max(${h?.width || `100vw`} - 40px, 1px)`,
                                            src: `../../assets/images/GKnUirhcaQtzkSaxROH0FkhAhiw.png?width=8393&height=4491`,
                                            srcSet: `../../assets/images/GKnUirhcaQtzkSaxROH0FkhAhiw.png?scale-down-to=512&width=8393&height=4491 512w,../../assets/images/GKnUirhcaQtzkSaxROH0FkhAhiw.png?scale-down-to=1024&width=8393&height=4491 1024w,../../assets/images/GKnUirhcaQtzkSaxROH0FkhAhiw.png 2048w,../../assets/images/GKnUirhcaQtzkSaxROH0FkhAhiw.png?scale-down-to=4096&width=8393&height=4491 4096w,../../assets/images/GKnUirhcaQtzkSaxROH0FkhAhiw.png?width=8393&height=4491 8393w`,
                                          },
                                        },
                                      },
                                      children: a(k, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 4491,
                                          intrinsicWidth: 8393,
                                          loading: g(
                                            (h?.y || 0) + 0 + 659.8 + 0 + 0 + 0 + 0 + 0 + 0 + 27.2
                                          ),
                                          pixelHeight: 4491,
                                          pixelWidth: 8393,
                                          src: `../../assets/images/GKnUirhcaQtzkSaxROH0FkhAhiw.png?width=8393&height=4491`,
                                          srcSet: `../../assets/images/GKnUirhcaQtzkSaxROH0FkhAhiw.png?scale-down-to=512&width=8393&height=4491 512w,../../assets/images/GKnUirhcaQtzkSaxROH0FkhAhiw.png?scale-down-to=1024&width=8393&height=4491 1024w,../../assets/images/GKnUirhcaQtzkSaxROH0FkhAhiw.png 2048w,../../assets/images/GKnUirhcaQtzkSaxROH0FkhAhiw.png?scale-down-to=4096&width=8393&height=4491 4096w,../../assets/images/GKnUirhcaQtzkSaxROH0FkhAhiw.png?width=8393&height=4491 8393w`,
                                        },
                                        className: `framer-vyhjc8`,
                                        "data-framer-name": `Artboard 3Ð±ÑÐ»Ð¸Ð¹`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  ],
                                }),
                                c(`div`, {
                                  className: `framer-bfmpwo`,
                                  children: [
                                    a(S, {
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
                                      className: `framer-9k46lf`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(x, {
                                      breakpoint: D,
                                      overrides: {
                                        br6BLVVH2: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 4491,
                                            intrinsicWidth: 7361,
                                            loading: g(
                                              (h?.y || 0) +
                                                0 +
                                                1050.2 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                234.2 +
                                                0 +
                                                27.2
                                            ),
                                            pixelHeight: 4491,
                                            pixelWidth: 7361,
                                            sizes: `max(${h?.width || `100vw`} - 40px, 1px)`,
                                            src: `../../assets/images/BjsAOjLC5f3e9YKMBpst1WHBoI.png?width=7361&height=4491`,
                                            srcSet: `../../assets/images/BjsAOjLC5f3e9YKMBpst1WHBoI.png?scale-down-to=512&width=7361&height=4491 512w,../../assets/images/BjsAOjLC5f3e9YKMBpst1WHBoI.png?scale-down-to=1024&width=7361&height=4491 1024w,../../assets/images/BjsAOjLC5f3e9YKMBpst1WHBoI.png 2048w,../../assets/images/BjsAOjLC5f3e9YKMBpst1WHBoI.png?scale-down-to=4096&width=7361&height=4491 4096w,../../assets/images/BjsAOjLC5f3e9YKMBpst1WHBoI.png?width=7361&height=4491 7361w`,
                                          },
                                        },
                                      },
                                      children: a(k, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 4491,
                                          intrinsicWidth: 7361,
                                          loading: g(
                                            (h?.y || 0) +
                                              0 +
                                              659.8 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              474.2 +
                                              0 +
                                              27.2
                                          ),
                                          pixelHeight: 4491,
                                          pixelWidth: 7361,
                                          src: `../../assets/images/BjsAOjLC5f3e9YKMBpst1WHBoI.png?width=7361&height=4491`,
                                          srcSet: `../../assets/images/BjsAOjLC5f3e9YKMBpst1WHBoI.png?scale-down-to=512&width=7361&height=4491 512w,../../assets/images/BjsAOjLC5f3e9YKMBpst1WHBoI.png?scale-down-to=1024&width=7361&height=4491 1024w,../../assets/images/BjsAOjLC5f3e9YKMBpst1WHBoI.png 2048w,../../assets/images/BjsAOjLC5f3e9YKMBpst1WHBoI.png?scale-down-to=4096&width=7361&height=4491 4096w,../../assets/images/BjsAOjLC5f3e9YKMBpst1WHBoI.png?width=7361&height=4491 7361w`,
                                        },
                                        className: `framer-qvrc4o`,
                                        "data-framer-name": `Artboard 3 copyÐ±ÑÐ»Ð¸Ð¹`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  ],
                                }),
                                c(`div`, {
                                  className: `framer-1t8a7u6`,
                                  children: [
                                    a(S, {
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
                                      className: `framer-1r787lz`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(x, {
                                      breakpoint: D,
                                      overrides: {
                                        br6BLVVH2: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 4491,
                                            intrinsicWidth: 7360,
                                            loading: g(
                                              (h?.y || 0) +
                                                0 +
                                                1050.2 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                495.4 +
                                                0 +
                                                27.2
                                            ),
                                            pixelHeight: 4491,
                                            pixelWidth: 7360,
                                            sizes: `max(${h?.width || `100vw`} - 40px, 1px)`,
                                            src: `../../assets/images/YR4es0CQo2MRPbh6QFIpfVnl4.png?width=7360&height=4491`,
                                            srcSet: `../../assets/images/YR4es0CQo2MRPbh6QFIpfVnl4.png?scale-down-to=512&width=7360&height=4491 512w,../../assets/images/YR4es0CQo2MRPbh6QFIpfVnl4.png?scale-down-to=1024&width=7360&height=4491 1024w,../../assets/images/YR4es0CQo2MRPbh6QFIpfVnl4.png 2048w,../../assets/images/YR4es0CQo2MRPbh6QFIpfVnl4.png?scale-down-to=4096&width=7360&height=4491 4096w,../../assets/images/YR4es0CQo2MRPbh6QFIpfVnl4.png?width=7360&height=4491 7360w`,
                                          },
                                        },
                                      },
                                      children: a(k, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 4491,
                                          intrinsicWidth: 7360,
                                          loading: g(
                                            (h?.y || 0) +
                                              0 +
                                              659.8 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              1008.4 +
                                              0 +
                                              27.2
                                          ),
                                          pixelHeight: 4491,
                                          pixelWidth: 7360,
                                          src: `../../assets/images/YR4es0CQo2MRPbh6QFIpfVnl4.png?width=7360&height=4491`,
                                          srcSet: `../../assets/images/YR4es0CQo2MRPbh6QFIpfVnl4.png?scale-down-to=512&width=7360&height=4491 512w,../../assets/images/YR4es0CQo2MRPbh6QFIpfVnl4.png?scale-down-to=1024&width=7360&height=4491 1024w,../../assets/images/YR4es0CQo2MRPbh6QFIpfVnl4.png 2048w,../../assets/images/YR4es0CQo2MRPbh6QFIpfVnl4.png?scale-down-to=4096&width=7360&height=4491 4096w,../../assets/images/YR4es0CQo2MRPbh6QFIpfVnl4.png?width=7360&height=4491 7360w`,
                                        },
                                        className: `framer-vy48k8`,
                                        "data-framer-name": `Artboard 3 copy 2Ð±ÑÐ»Ð¸Ð¹`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  ],
                                }),
                                a(x, {
                                  breakpoint: D,
                                  overrides: {
                                    br6BLVVH2: {
                                      width: `max(${h?.width || `100vw`} - 40px, 1px)`,
                                      y: (h?.y || 0) + 0 + 1050.2 + 0 + 0 + 0 + 0 + 756.6,
                                    },
                                  },
                                  children: a(A, {
                                    height: 516,
                                    y: (h?.y || 0) + 0 + 659.8 + 0 + 0 + 0 + 0 + 1542.6,
                                    children: a(T, {
                                      className: `framer-14egvwj-container`,
                                      nodeId: `jHvV1XQ6W`,
                                      scopeId: `aCRbSljkl`,
                                      children: a(K, {
                                        height: `100%`,
                                        id: `jHvV1XQ6W`,
                                        layoutId: `jHvV1XQ6W`,
                                        style: { width: `100%` },
                                        variant: J(`Ik05DC9vA`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                a(x, {
                                  breakpoint: D,
                                  overrides: {
                                    br6BLVVH2: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 3756,
                                        intrinsicWidth: 5760,
                                        loading: g(
                                          (h?.y || 0) + 0 + 1050.2 + 0 + 0 + 0 + 0 + 1292.6
                                        ),
                                        pixelHeight: 3756,
                                        pixelWidth: 5760,
                                        sizes: `max(${h?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/pV7luU9OgybtJ5xv6tot7YiiIVw.png?width=5760&height=3756`,
                                        srcSet: `../../assets/images/pV7luU9OgybtJ5xv6tot7YiiIVw.png?scale-down-to=512&width=5760&height=3756 512w,../../assets/images/pV7luU9OgybtJ5xv6tot7YiiIVw.png?scale-down-to=1024&width=5760&height=3756 1024w,../../assets/images/pV7luU9OgybtJ5xv6tot7YiiIVw.png 2048w,../../assets/images/pV7luU9OgybtJ5xv6tot7YiiIVw.png?scale-down-to=4096&width=5760&height=3756 4096w,../../assets/images/pV7luU9OgybtJ5xv6tot7YiiIVw.png?width=5760&height=3756 5760w`,
                                      },
                                    },
                                  },
                                  children: a(k, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 3756,
                                      intrinsicWidth: 5760,
                                      loading: g((h?.y || 0) + 0 + 659.8 + 0 + 0 + 0 + 0 + 2078.6),
                                      pixelHeight: 3756,
                                      pixelWidth: 5760,
                                      src: `../../assets/images/pV7luU9OgybtJ5xv6tot7YiiIVw.png?width=5760&height=3756`,
                                      srcSet: `../../assets/images/pV7luU9OgybtJ5xv6tot7YiiIVw.png?scale-down-to=512&width=5760&height=3756 512w,../../assets/images/pV7luU9OgybtJ5xv6tot7YiiIVw.png?scale-down-to=1024&width=5760&height=3756 1024w,../../assets/images/pV7luU9OgybtJ5xv6tot7YiiIVw.png 2048w,../../assets/images/pV7luU9OgybtJ5xv6tot7YiiIVw.png?scale-down-to=4096&width=5760&height=3756 4096w,../../assets/images/pV7luU9OgybtJ5xv6tot7YiiIVw.png?width=5760&height=3756 5760w`,
                                    },
                                    className: `framer-1o5jwbc`,
                                    "data-framer-name": `PXL 20260623_1223075961`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                a(x, {
                                  breakpoint: D,
                                  overrides: {
                                    br6BLVVH2: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 3032,
                                        intrinsicWidth: 5389.6,
                                        loading: g(
                                          (h?.y || 0) + 0 + 1050.2 + 0 + 0 + 0 + 0 + 1540.6
                                        ),
                                        pixelHeight: 3790,
                                        pixelWidth: 6737,
                                        sizes: `max(${h?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/xPjLZt19Ee5HVdtMiEEwu2twJs.png?width=6737&height=3790`,
                                        srcSet: `../../assets/images/xPjLZt19Ee5HVdtMiEEwu2twJs.png?scale-down-to=512&width=6737&height=3790 512w,../../assets/images/xPjLZt19Ee5HVdtMiEEwu2twJs.png?scale-down-to=1024&width=6737&height=3790 1024w,../../assets/images/xPjLZt19Ee5HVdtMiEEwu2twJs.png 2048w,../../assets/images/xPjLZt19Ee5HVdtMiEEwu2twJs.png?scale-down-to=4096&width=6737&height=3790 4096w,../../assets/images/xPjLZt19Ee5HVdtMiEEwu2twJs.png?width=6737&height=3790 6737w`,
                                      },
                                    },
                                  },
                                  children: a(k, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 3032,
                                      intrinsicWidth: 5389.6,
                                      loading: g((h?.y || 0) + 0 + 659.8 + 0 + 0 + 0 + 0 + 2618.6),
                                      pixelHeight: 3790,
                                      pixelWidth: 6737,
                                      src: `../../assets/images/xPjLZt19Ee5HVdtMiEEwu2twJs.png?width=6737&height=3790`,
                                      srcSet: `../../assets/images/xPjLZt19Ee5HVdtMiEEwu2twJs.png?scale-down-to=512&width=6737&height=3790 512w,../../assets/images/xPjLZt19Ee5HVdtMiEEwu2twJs.png?scale-down-to=1024&width=6737&height=3790 1024w,../../assets/images/xPjLZt19Ee5HVdtMiEEwu2twJs.png 2048w,../../assets/images/xPjLZt19Ee5HVdtMiEEwu2twJs.png?scale-down-to=4096&width=6737&height=3790 4096w,../../assets/images/xPjLZt19Ee5HVdtMiEEwu2twJs.png?width=6737&height=3790 6737w`,
                                    },
                                    className: `framer-522je0`,
                                    "data-framer-name": `Untitled-2`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                                a(x, {
                                  breakpoint: D,
                                  overrides: {
                                    br6BLVVH2: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 3032,
                                        intrinsicWidth: 4616.8,
                                        loading: g(
                                          (h?.y || 0) + 0 + 1050.2 + 0 + 0 + 0 + 0 + 1757.6
                                        ),
                                        pixelHeight: 3790,
                                        pixelWidth: 5771,
                                        sizes: `max(${h?.width || `100vw`} - 40px, 1px)`,
                                        src: `../../assets/images/80cIysrfWEtclepRv0MeoWNjo.png?width=5771&height=3790`,
                                        srcSet: `../../assets/images/80cIysrfWEtclepRv0MeoWNjo.png?scale-down-to=512&width=5771&height=3790 512w,../../assets/images/80cIysrfWEtclepRv0MeoWNjo.png?scale-down-to=1024&width=5771&height=3790 1024w,../../assets/images/80cIysrfWEtclepRv0MeoWNjo.png 2048w,../../assets/images/80cIysrfWEtclepRv0MeoWNjo.png?scale-down-to=4096&width=5771&height=3790 4096w,../../assets/images/80cIysrfWEtclepRv0MeoWNjo.png?width=5771&height=3790 5771w`,
                                      },
                                    },
                                  },
                                  children: a(k, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 3032,
                                      intrinsicWidth: 4616.8,
                                      loading: g((h?.y || 0) + 0 + 659.8 + 0 + 0 + 0 + 0 + 3087.6),
                                      pixelHeight: 3790,
                                      pixelWidth: 5771,
                                      src: `../../assets/images/80cIysrfWEtclepRv0MeoWNjo.png?width=5771&height=3790`,
                                      srcSet: `../../assets/images/80cIysrfWEtclepRv0MeoWNjo.png?scale-down-to=512&width=5771&height=3790 512w,../../assets/images/80cIysrfWEtclepRv0MeoWNjo.png?scale-down-to=1024&width=5771&height=3790 1024w,../../assets/images/80cIysrfWEtclepRv0MeoWNjo.png 2048w,../../assets/images/80cIysrfWEtclepRv0MeoWNjo.png?scale-down-to=4096&width=5771&height=3790 4096w,../../assets/images/80cIysrfWEtclepRv0MeoWNjo.png?width=5771&height=3790 5771w`,
                                    },
                                    className: `framer-lhgjqy`,
                                    "data-framer-name": `Untitled-1`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                              ],
                            }),
                            I() &&
                              c(`div`, {
                                className: `framer-1umwbsc hidden-qkcd30`,
                                children: [
                                  c(`div`, {
                                    className: `framer-vq35bc`,
                                    children: [
                                      a(S, {
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
                                        className: `framer-1mo15hz`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(S, {
                                        __fromCanvasComponent: !0,
                                        children: a(i, {
                                          children: c(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            },
                                            children: [
                                              `Most Polish editions of `,
                                              a(`em`, { children: `Ubu Roi` }),
                                              ` wrap the play in conventional, academic design, flattening the very anarchy and grotesque humor that make the text what it is.`,
                                            ],
                                          }),
                                        }),
                                        className: `framer-hachgg`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  c(`div`, {
                                    className: `framer-ja5mlx`,
                                    children: [
                                      a(S, {
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
                                        className: `framer-ill6wc`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(S, {
                                        __fromCanvasComponent: !0,
                                        children: a(i, {
                                          children: a(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            },
                                            children: `I took an existing typeface and reworked it, cutting holes into the letterforms and arranging them as if falling apart across the pages — just like Ubu's kingdom.`,
                                          }),
                                        }),
                                        className: `framer-kv75x`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  c(`div`, {
                                    className: `framer-ow92i1`,
                                    children: [
                                      a(S, {
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
                                        className: `framer-1x6s38r`,
                                        fonts: [`BI;Amiamie/Regular/v0`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(S, {
                                        __fromCanvasComponent: !0,
                                        children: a(i, {
                                          children: a(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                              "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                            },
                                            children: `The result is a book where the reader physically experiences the collapse: turning pages means watching the text and Ubu's rule — fall apart in real time.`,
                                          }),
                                        }),
                                        className: `framer-bwap6`,
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
                          className: `framer-1d2artb`,
                          children: [
                            c(`div`, {
                              className: `framer-5lnni2`,
                              children: [
                                a(C, {
                                  href: { webPageId: `TwvfQk14J` },
                                  motionChild: !0,
                                  nodeId: `irqGs4U28`,
                                  openInNewTab: !1,
                                  scopeId: `aCRbSljkl`,
                                  children: a(u.a, {
                                    className: `framer-c0rusk framer-adlm7m`,
                                    children: a(A, {
                                      children: a(T, {
                                        className: `framer-njpt5b-container`,
                                        isModuleExternal: !0,
                                        nodeId: `ViYed7u5T`,
                                        scopeId: `aCRbSljkl`,
                                        children: a(R, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 0,
                                          bottomLeftRadius: 0,
                                          bottomRightRadius: 0,
                                          controls: !1,
                                          height: `100%`,
                                          id: `ViYed7u5T`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `ViYed7u5T`,
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
                                  className: `framer-45xpdz`,
                                  children: [
                                    a(S, {
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
                                      className: `framer-1otc86k`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(S, {
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
                                      className: `framer-nex0rp`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1n4levj`,
                              children: [
                                a(`div`, {
                                  className: `framer-13rj3ms`,
                                  children: a(C, {
                                    href: { webPageId: `PlMaHNi_L` },
                                    motionChild: !0,
                                    nodeId: `zWnqg_7W1`,
                                    openInNewTab: !1,
                                    scopeId: `aCRbSljkl`,
                                    children: a(x, {
                                      breakpoint: D,
                                      overrides: {
                                        br6BLVVH2: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 5044,
                                            intrinsicWidth: 3363,
                                            loading: g(
                                              (h?.y || 0) +
                                                0 +
                                                1050.2 +
                                                0 +
                                                2047.6 +
                                                0 +
                                                430 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 5044,
                                            pixelWidth: 3363,
                                            sizes: `max(${h?.width || `100vw`} - 40px, 1px)`,
                                            src: `../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg?width=3363&height=5044`,
                                            srcSet: `../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg 682w,../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg?scale-down-to=2048&width=3363&height=5044 1365w,../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg?scale-down-to=4096&width=3363&height=5044 2730w,../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg?width=3363&height=5044 3363w`,
                                          },
                                        },
                                      },
                                      children: a(k, {
                                        as: `a`,
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 5044,
                                          intrinsicWidth: 3363,
                                          loading: g(
                                            (h?.y || 0) + 0 + 659.8 + 0 + 3731.6 + 0 + 0 + 0 + 0
                                          ),
                                          pixelHeight: 5044,
                                          pixelWidth: 3363,
                                          sizes: `max((${h?.width || `100vw`} - 100px) / 3, 1px)`,
                                          src: `../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg?width=3363&height=5044`,
                                          srcSet: `../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg 682w,../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg?scale-down-to=2048&width=3363&height=5044 1365w,../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg?scale-down-to=4096&width=3363&height=5044 2730w,../../assets/images/YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg?width=3363&height=5044 3363w`,
                                        },
                                        className: `framer-1r9teax framer-adlm7m`,
                                        "data-framer-name": `Nalewka`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  }),
                                }),
                                c(`div`, {
                                  className: `framer-ae00bw`,
                                  children: [
                                    a(S, {
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
                                      className: `framer-pqcndp`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(S, {
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
                                      className: `framer-12g1zan`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1y169c9`,
                              children: [
                                a(C, {
                                  href: { webPageId: `M2JH_EIJa` },
                                  motionChild: !0,
                                  nodeId: `LSPhP9aDe`,
                                  openInNewTab: !1,
                                  scopeId: `aCRbSljkl`,
                                  children: a(u.a, {
                                    className: `framer-u3y5vd framer-adlm7m`,
                                    children: a(A, {
                                      children: a(T, {
                                        className: `framer-5b0q9d-container`,
                                        isModuleExternal: !0,
                                        nodeId: `Fa4x2yGO0`,
                                        scopeId: `aCRbSljkl`,
                                        children: a(R, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 0,
                                          bottomLeftRadius: 0,
                                          bottomRightRadius: 0,
                                          controls: !1,
                                          height: `100%`,
                                          id: `Fa4x2yGO0`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `Fa4x2yGO0`,
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
                                  className: `framer-1exn62h`,
                                  children: [
                                    a(S, {
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
                                      className: `framer-phdp3v`,
                                      fonts: [`BI;Amiamie/Regular/v0`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(S, {
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
                                      className: `framer-1dymq24`,
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
                    a(x, {
                      breakpoint: D,
                      overrides: { br6BLVVH2: { y: (h?.y || 0) + 0 + 4830.8 } },
                      children: a(A, {
                        height: 390,
                        width: h?.width || `100vw`,
                        y: (h?.y || 0) + 0 + 5308.4,
                        children: a(we, {
                          __framer__animate: { transition: Z },
                          __framer__animateOnce: !0,
                          __framer__enter: Ne,
                          __framer__exit: Pe,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.12,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-109i2x7-container`,
                          layout: F,
                          nodeId: `mebMlSfe0`,
                          rendersWithMotion: !0,
                          scopeId: `aCRbSljkl`,
                          children: a(x, {
                            breakpoint: D,
                            overrides: { br6BLVVH2: { variant: J(`bC5BwOq5u`) } },
                            children: a(L, {
                              height: `100%`,
                              id: `mebMlSfe0`,
                              layoutId: `mebMlSfe0`,
                              style: { width: `100%` },
                              variant: J(`Q4FA0ndjW`),
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
        `.framer-uI4JM.framer-adlm7m, .framer-uI4JM .framer-adlm7m { display: block; }`,
        `.framer-uI4JM.framer-1fn8bra { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-uI4JM .framer-2r2hmk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-uI4JM .framer-4gc221-container, .framer-uI4JM .framer-o88vq2-container, .framer-uI4JM .framer-14egvwj-container, .framer-uI4JM .framer-109i2x7-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-uI4JM .framer-1yg6qij, .framer-uI4JM .framer-45xpdz, .framer-uI4JM .framer-ae00bw, .framer-uI4JM .framer-1exn62h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-uI4JM .framer-9ooatf { align-content: center; align-items: center; background-color: #513754; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-uI4JM .framer-1awryaj, .framer-uI4JM .framer-151283z { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-uI4JM .framer-xny5pq, .framer-uI4JM .framer-1pmfzws, .framer-uI4JM .framer-163knr5, .framer-uI4JM .framer-1eg8pc9, .framer-uI4JM .framer-1jkthnp, .framer-uI4JM .framer-1minkqq { background-color: #cae4d0; flex: none; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 17px; }`,
        `.framer-uI4JM .framer-1jrz6oe { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 1px; }`,
        `.framer-uI4JM .framer-1grbac4, .framer-uI4JM .framer-z1z84, .framer-uI4JM .framer-16i0n6b, .framer-uI4JM .framer-26dw0w, .framer-uI4JM .framer-18l0ldt, .framer-uI4JM .framer-kosevv, .framer-uI4JM .framer-1f5ja0i, .framer-uI4JM .framer-1fjjgie, .framer-uI4JM .framer-2jqj7h, .framer-uI4JM .framer-1wsrsil, .framer-uI4JM .framer-2lxqfs, .framer-uI4JM .framer-x61jeu, .framer-uI4JM .framer-9k46lf, .framer-uI4JM .framer-1r787lz, .framer-uI4JM .framer-1mo15hz, .framer-uI4JM .framer-ill6wc, .framer-uI4JM .framer-1x6s38r { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-uI4JM .framer-1lecc4z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-uI4JM .framer-vsw7xn, .framer-uI4JM .framer-isx4l9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-uI4JM .framer-1jqaeu8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-uI4JM .framer-64690l, .framer-uI4JM .framer-8ham21, .framer-uI4JM .framer-k2cq6o, .framer-uI4JM .framer-vq35bc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-uI4JM .framer-3lquk1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 10px 0px 10px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-uI4JM .framer-pe4gzn, .framer-uI4JM .framer-vner9g, .framer-uI4JM .framer-q8kdy2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-uI4JM .framer-dsc3db, .framer-uI4JM .framer-7wvpo3, .framer-uI4JM .framer-ec5r5z, .framer-uI4JM .framer-kv75x, .framer-uI4JM .framer-bwap6, .framer-uI4JM .framer-1otc86k, .framer-uI4JM .framer-nex0rp, .framer-uI4JM .framer-pqcndp, .framer-uI4JM .framer-12g1zan, .framer-uI4JM .framer-phdp3v, .framer-uI4JM .framer-1dymq24 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-uI4JM .framer-17l83e7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-uI4JM .framer-1xjo98k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-uI4JM .framer-kwemq5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 790px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-uI4JM .framer-r5pxwa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-uI4JM .framer-mu4dlp { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 53px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-uI4JM .framer-k0249h { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-uI4JM .framer-1ryn7wz, .framer-uI4JM .framer-bfmpwo, .framer-uI4JM .framer-1t8a7u6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-uI4JM .framer-vyhjc8, .framer-uI4JM .framer-qvrc4o, .framer-uI4JM .framer-vy48k8, .framer-uI4JM .framer-1o5jwbc, .framer-uI4JM .framer-522je0, .framer-uI4JM .framer-lhgjqy { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-uI4JM .framer-1umwbsc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; top: 40px; width: min-content; z-index: 1; }`,
        `.framer-uI4JM .framer-hachgg { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 309px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-uI4JM .framer-ja5mlx, .framer-uI4JM .framer-ow92i1 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; }`,
        `.framer-uI4JM .framer-1d2artb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-uI4JM .framer-5lnni2, .framer-uI4JM .framer-1n4levj, .framer-uI4JM .framer-1y169c9 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-uI4JM .framer-c0rusk, .framer-uI4JM .framer-u3y5vd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-uI4JM .framer-njpt5b-container, .framer-uI4JM .framer-5b0q9d-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-uI4JM .framer-13rj3ms { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-uI4JM .framer-1r9teax { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `@media (max-width: 1199.98px) { .framer-uI4JM.framer-1fn8bra { gap: 60px; width: 390px; } .framer-uI4JM .framer-vsw7xn { gap: 20px; } .framer-uI4JM .framer-1jqaeu8 { padding: 0px 10px 0px 10px; } .framer-uI4JM .framer-isx4l9 { gap: 40px; } .framer-uI4JM .framer-3lquk1 { order: 1; } .framer-uI4JM .framer-17l83e7 { order: 0; padding: 0px 10px 0px 10px; } .framer-uI4JM .framer-kwemq5 { width: 100%; } .framer-uI4JM .framer-r5pxwa { gap: 60px; } .framer-uI4JM .framer-1d2artb { flex-direction: column; } .framer-uI4JM .framer-5lnni2, .framer-uI4JM .framer-1n4levj, .framer-uI4JM .framer-1y169c9 { flex: none; width: 100%; }}`,
      ],
      `framer-uI4JM`
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 6045, width: 1200 }),
    j(
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
        ..._e,
        ...ve,
        ...be,
        ...xe,
        ...Ce,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (t.locale, Promise.allSettled([M(P, {}, t), M(K, {}, t), M(L, {}, t)])),
    }),
    (Le = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraCRbSljkl`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `false`,
            framerResponsiveScreen: `true`,
            framerIntrinsicHeight: `6045`,
            framerLayoutTemplateFlowEffect: `true`,
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"br6BLVVH2":{"layout":["fixed","auto"]}}}`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Le as __FramerMetadata__, $ as default, Ee as queryParamNames };
//# sourceMappingURL=vC8szpoftAaTUOJOi2PPYveMyzmz_kcVJpF_IH77VWc.BJB1PT9B.mjs.map
