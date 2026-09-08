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
  $ as h,
  A as g,
  J as _,
  L as v,
  M as y,
  S as b,
  X as ee,
  Z as te,
  a as x,
  at as S,
  ct as C,
  et as w,
  f as T,
  h as E,
  l as ne,
  lt as D,
  n as O,
  nt as k,
  ot as A,
  q as j,
  r as M,
  s as re,
  t as N,
  tt as ie,
  v as P,
  w as F,
  y as ae,
} from "./framer.jQONGl1Q.mjs";
import { n as oe, t as I } from "./KlB745hHu.nSBdfznD.mjs";
import { a as L, i as se, o as ce, r as R } from "./shared-lib.B1UR4gSL.mjs";
import le, { t as ue } from "./osNJQa_DSrmPNygQ6XeXliHdFNcmOzGqNiqL6MhQHVs.LZn2EAwS.mjs";
var z,
  B,
  V,
  H,
  U,
  de,
  fe,
  pe,
  W,
  me = e(() => {
    (l(),
      v(),
      m(),
      n(),
      oe(),
      (z = g(I)),
      (B = `framer-t0JBL`),
      (V = { Z966rfO2Y: `framer-v-1wpdz65` }),
      (H = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (U = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (de = d.create(i)),
      (fe = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (pe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = A(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = w();
          _();
          let { style: m, className: h, layoutId: g, variant: v, ...y } = fe(e),
            {
              baseVariant: ee,
              classNames: te,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: T,
              isLoading: ne,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = S({ defaultVariant: `Z966rfO2Y`, ref: o, variant: v, variantClassNames: V }),
            A = pe(e, k),
            j = b(B);
          return a(p, {
            id: g ?? s,
            children: a(de, {
              animate: k,
              initial: !1,
              children: a(U, {
                value: H,
                children: c(d.div, {
                  ...y,
                  ...C,
                  className: b(j, `framer-1wpdz65`, h, te),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: A,
                  layoutId: `Z966rfO2Y`,
                  ref: o,
                  style: { backgroundColor: `rgb(0, 0, 0)`, ...m },
                  children: [
                    a(E, {
                      __fromCanvasComponent: !0,
                      children: a(i, {
                        children: a(d.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                            "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                            "--framer-font-size": `20px`,
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                          },
                          children: `Send mail`,
                        }),
                      }),
                      className: `framer-lxx0yz`,
                      fonts: [`BI;Amiamie/Regular/v0`],
                      layoutDependency: A,
                      layoutId: `OOar5Ec4S`,
                      style: {
                        "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    a(I, {
                      animated: !0,
                      className: `framer-13ky402`,
                      layoutDependency: A,
                      layoutId: `TtxsH1fZJ`,
                      style: { "--1m6trwb": 0, "--21h8s6": `rgb(255, 255, 255)`, "--pgex8v": 1.5 },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-t0JBL.framer-1xszm84, .framer-t0JBL .framer-1xszm84 { display: block; }`,
          `.framer-t0JBL.framer-1wpdz65 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 6px 8px 6px 8px; position: relative; width: min-content; }`,
          `.framer-t0JBL .framer-lxx0yz { flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`,
          `.framer-t0JBL .framer-13ky402 { aspect-ratio: 1 / 1; flex: none; height: auto; mix-blend-mode: difference; position: relative; width: 24px; }`,
        ],
        `framer-t0JBL`
      )),
      (W.displayName = `Send e mail`),
      (W.defaultProps = { height: 36, width: 141 }),
      P(
        W,
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
          ...z,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function he(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ge,
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  we,
  G,
  Te = e(() => {
    (l(),
      v(),
      m(),
      n(),
      (ge = [`uIYtoWIo5`, `mWTLTUClK`, `DvQ6KmHfS`, `Ro563cjlM`, `Oeh5cuXKB`, `dK4JUQnnX`]),
      (_e = `framer-YoIiN`),
      (ve = {
        dK4JUQnnX: `framer-v-t3q799`,
        DvQ6KmHfS: `framer-v-1xozqj2`,
        mWTLTUClK: `framer-v-11owmog`,
        Oeh5cuXKB: `framer-v-1dw8v60`,
        Ro563cjlM: `framer-v-1p4jw9s`,
        uIYtoWIo5: `framer-v-p27vta`,
      }),
      (ye = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (be = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (xe = {
        "Variant 1": `uIYtoWIo5`,
        "Variant 2": `mWTLTUClK`,
        "Variant 3": `DvQ6KmHfS`,
        "Variant 4": `Ro563cjlM`,
        "Variant 5": `Oeh5cuXKB`,
        "Variant 6": `dK4JUQnnX`,
      }),
      (Se = d.create(i)),
      (Ce = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: xe[r.variant] ?? r.variant ?? `uIYtoWIo5`,
      })),
      (we = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = A(
        o(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = u(),
            { activeLocale: s, setLocale: c } = w(),
            l = _(),
            { style: d, className: f, layoutId: m, variant: h, ...g } = Ce(e),
            {
              baseVariant: v,
              classNames: ee,
              clearLoadingGesture: te,
              gestureHandlers: x,
              gestureVariant: C,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = S({
              cycleOrder: ge,
              defaultVariant: `uIYtoWIo5`,
              ref: i,
              variant: h,
              variantClassNames: ve,
            }),
            A = we(e, O),
            { activeVariantCallback: M, delay: N } = j(v),
            ie = M(async (...e) => {
              await N(() => D(`mWTLTUClK`, !0), 500);
            }),
            P = M(async (...e) => {
              await N(() => D(`DvQ6KmHfS`, !0), 500);
            }),
            F = M(async (...e) => {
              await N(() => D(`Ro563cjlM`, !0), 500);
            }),
            ae = M(async (...e) => {
              await N(() => D(`Oeh5cuXKB`, !0), 500);
            }),
            oe = M(async (...e) => {
              await N(() => D(`dK4JUQnnX`, !0), 500);
            });
          k(v, {
            default: ie,
            dK4JUQnnX: M(async (...e) => {
              await N(() => D(`uIYtoWIo5`, !0), 500);
            }),
            DvQ6KmHfS: F,
            mWTLTUClK: P,
            Oeh5cuXKB: oe,
            Ro563cjlM: ae,
          });
          let I = b(_e);
          return a(p, {
            id: m ?? o,
            children: a(Se, {
              animate: O,
              initial: !1,
              children: a(be, {
                value: ye,
                children: a(ne, {
                  href: `mailto:vasurdana@gmail.com`,
                  motionChild: !0,
                  nodeId: `uIYtoWIo5`,
                  openInNewTab: !0,
                  scopeId: `Y8FpNofx4`,
                  children: a(re, {
                    ...g,
                    ...x,
                    as: `a`,
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 3e3,
                      intrinsicWidth: 4500,
                      loading: y(l?.y || 0),
                      pixelHeight: 3e3,
                      pixelWidth: 4500,
                      sizes: l?.width || `100vw`,
                      src: `../../assets/images/JFk9nttuiRdus7addf7KWrhZFY.png?width=4500&height=3000`,
                      srcSet: `../../assets/images/JFk9nttuiRdus7addf7KWrhZFY.png 512w,../../assets/images/JFk9nttuiRdus7addf7KWrhZFY.png?scale-down-to=1024&width=4500&height=3000 1024w,../../assets/images/JFk9nttuiRdus7addf7KWrhZFY.png?scale-down-to=2048&width=4500&height=3000 2048w,../../assets/images/JFk9nttuiRdus7addf7KWrhZFY.png?scale-down-to=4096&width=4500&height=3000 4096w,../../assets/images/JFk9nttuiRdus7addf7KWrhZFY.png?width=4500&height=3000 4500w`,
                    },
                    className: `${b(I, `framer-p27vta`, f, ee)} framer-grhalj`,
                    "data-framer-name": `Variant 1`,
                    "data-highlight": !0,
                    layoutDependency: A,
                    layoutId: `uIYtoWIo5`,
                    ref: i,
                    style: { ...d },
                    ...he(
                      {
                        dK4JUQnnX: {
                          "data-framer-name": `Variant 6`,
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 1034,
                            intrinsicWidth: 1554,
                            loading: y(l?.y || 0),
                            pixelHeight: 1034,
                            pixelWidth: 1554,
                            sizes: l?.width || `100vw`,
                            src: `../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png?width=1554&height=1034`,
                            srcSet: `../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png 512w,../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png?scale-down-to=1024&width=1554&height=1034 1024w,../../assets/images/PKFwInnTMZlUu00bKRvSP5EI.png?width=1554&height=1034 1554w`,
                          },
                        },
                        DvQ6KmHfS: {
                          "data-framer-name": `Variant 3`,
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 3756,
                            intrinsicWidth: 6678,
                            loading: y(l?.y || 0),
                            pixelHeight: 3756,
                            pixelWidth: 6678,
                            sizes: l?.width || `100vw`,
                            src: `../../assets/images/7pp9ENaZU89TFcbfhoR6ntVGhUw.png?width=6678&height=3756`,
                            srcSet: `../../assets/images/7pp9ENaZU89TFcbfhoR6ntVGhUw.png 512w,../../assets/images/7pp9ENaZU89TFcbfhoR6ntVGhUw.png?scale-down-to=1024&width=6678&height=3756 1024w,../../assets/images/7pp9ENaZU89TFcbfhoR6ntVGhUw.png?scale-down-to=2048&width=6678&height=3756 2048w,../../assets/images/7pp9ENaZU89TFcbfhoR6ntVGhUw.png?scale-down-to=4096&width=6678&height=3756 4096w,../../assets/images/7pp9ENaZU89TFcbfhoR6ntVGhUw.png?width=6678&height=3756 6678w`,
                          },
                        },
                        mWTLTUClK: {
                          "data-framer-name": `Variant 2`,
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 684,
                            intrinsicWidth: 1400,
                            loading: y(l?.y || 0),
                            pixelHeight: 684,
                            pixelWidth: 1400,
                            sizes: l?.width || `100vw`,
                            src: `../../assets/images/tg7TLlzpRCXitsk53s5PWi0IZGk.png?width=1400&height=684`,
                            srcSet: `../../assets/images/tg7TLlzpRCXitsk53s5PWi0IZGk.png 512w,../../assets/images/tg7TLlzpRCXitsk53s5PWi0IZGk.png?scale-down-to=1024&width=1400&height=684 1024w,../../assets/images/tg7TLlzpRCXitsk53s5PWi0IZGk.png?width=1400&height=684 1400w`,
                          },
                        },
                        Oeh5cuXKB: {
                          "data-framer-name": `Variant 5`,
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 3064,
                            intrinsicWidth: 4604,
                            loading: y(l?.y || 0),
                            pixelHeight: 3064,
                            pixelWidth: 4604,
                            sizes: l?.width || `100vw`,
                            src: `../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?width=4604&height=3064`,
                            srcSet: `../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg 512w,../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?scale-down-to=1024&width=4604&height=3064 1024w,../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?scale-down-to=2048&width=4604&height=3064 2048w,../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?scale-down-to=4096&width=4604&height=3064 4096w,../../assets/images/2LVl4gPAeX2Z4jsNezslguRIEg.jpg?width=4604&height=3064 4604w`,
                          },
                        },
                        Ro563cjlM: {
                          "data-framer-name": `Variant 4`,
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 1314,
                            intrinsicWidth: 2336,
                            loading: y(l?.y || 0),
                            pixelHeight: 1314,
                            pixelWidth: 2336,
                            sizes: l?.width || `100vw`,
                            src: `../../assets/images/KjH1AUMaVZAjkdvYMTVBkTQaCA.png?width=2336&height=1314`,
                            srcSet: `../../assets/images/KjH1AUMaVZAjkdvYMTVBkTQaCA.png 512w,../../assets/images/KjH1AUMaVZAjkdvYMTVBkTQaCA.png?scale-down-to=1024&width=2336&height=1314 1024w,../../assets/images/KjH1AUMaVZAjkdvYMTVBkTQaCA.png?scale-down-to=2048&width=2336&height=1314 2048w,../../assets/images/KjH1AUMaVZAjkdvYMTVBkTQaCA.png?width=2336&height=1314 2336w`,
                          },
                        },
                      },
                      v,
                      C
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-YoIiN.framer-grhalj, .framer-YoIiN .framer-grhalj { display: block; }`,
          `.framer-YoIiN.framer-p27vta { height: 116px; overflow: var(--overflow-clip-fallback, clip); position: relative; text-decoration: none; width: 180px; will-change: var(--framer-will-change-filter-override, filter); }`,
        ],
        `framer-YoIiN`
      )),
      (G.displayName = `Lets Talk`),
      (G.defaultProps = { height: 116, width: 180 }),
      ae(G, {
        variant: {
          options: [`uIYtoWIo5`, `mWTLTUClK`, `DvQ6KmHfS`, `Ro563cjlM`, `Oeh5cuXKB`, `dK4JUQnnX`],
          optionTitles: [
            `Variant 1`,
            `Variant 2`,
            `Variant 3`,
            `Variant 4`,
            `Variant 5`,
            `Variant 6`,
          ],
          title: `Variant`,
          type: M.Enum,
        },
      }),
      P(G, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Ee,
  De,
  Oe,
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
  ze,
  Be,
  K,
  q,
  Ve,
  J,
  Y,
  X,
  Z,
  He,
  Ue,
  We,
  Q,
  $;
e(() => {
  (l(),
    v(),
    m(),
    n(),
    ce(),
    me(),
    se(),
    Te(),
    ue(),
    (Ee = g(L)),
    (De = D(O)),
    (Oe = g(G)),
    (ke = D(d.div)),
    (Ae = C(d.div)),
    (je = g(R)),
    (Me = C(O)),
    (Ne = g(W)),
    (Pe = { joTBKHYNW: `(max-width: 1199.98px)`, jUMpJZIhT: `(min-width: 1200px)` }),
    (Fe = []),
    (Ie = `framer-WVmGm`),
    (Le = { joTBKHYNW: `framer-v-i8obdg`, jUMpJZIhT: `framer-v-1u92q99` }),
    (Re = (e, t, n) => (e && t ? `position` : n)),
    (ze = {
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
    (Be = {
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
    (K = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (q = {
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
    (Ve = {
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
    (Z = { Desktop: `jUMpJZIhT`, Phone: `joTBKHYNW` }),
    (He = ({ value: e }) =>
      h()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ue = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `jUMpJZIhT`,
    })),
    (We = {
      alignment: `start`,
      component: W,
      offset: { x: 0, y: 0 },
      placement: `bottom`,
      transition: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` },
      variant: `Z966rfO2Y`,
    }),
    (Q = A(
      o(function (e, n) {
        let o = r(null),
          l = n ?? o,
          m = u(),
          { activeLocale: h, setLocale: g } = w(),
          v = _(),
          { style: y, className: S, layoutId: C, variant: ne, ...D } = Ue(e);
        ie(t(() => le({}, h), [h]));
        let [k, A] = te(ne, Pe, !1),
          j = b(Ie),
          M = s(x)?.isLayoutTemplate,
          re = !!s(f)?.transition?.layout,
          P = Re(M, re);
        return (
          ee({ yexux0: We }),
          a(x.Provider, {
            value: {
              activeVariantId: k,
              humanReadableVariantMap: Z,
              primaryVariantId: `jUMpJZIhT`,
              variantClassNames: Le,
            },
            children: c(p, {
              id: C ?? m,
              children: [
                a(He, { value: `html body { background: rgb(255, 255, 255); }` }),
                c(d.div, {
                  ...D,
                  className: b(j, `framer-1u92q99`, S),
                  ref: l,
                  style: { ...y },
                  children: [
                    a(T, {
                      breakpoint: k,
                      overrides: { joTBKHYNW: { y: void 0 } },
                      children: a(N, {
                        height: 59,
                        width: v?.width || `100vw`,
                        y: (v?.y || 0) + 0 + 0,
                        children: a(De, {
                          animate: ze,
                          className: `framer-y71c3k-container`,
                          "data-framer-appear-id": `y71c3k`,
                          initial: Be,
                          layout: P,
                          nodeId: `ks67TroOD`,
                          optimized: !0,
                          rendersWithMotion: !0,
                          scopeId: `c30CApP2Y`,
                          children: a(T, {
                            breakpoint: k,
                            overrides: { joTBKHYNW: { variant: K(`tnNrPT_eu`) } },
                            children: a(L, {
                              height: `100%`,
                              id: `ks67TroOD`,
                              layoutId: `ks67TroOD`,
                              style: { width: `100%` },
                              variant: K(`N1Y2xUv_c`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    a(ke, {
                      animate: q,
                      className: `framer-1wlud2g`,
                      "data-framer-appear-id": `1wlud2g`,
                      initial: Ve,
                      layout: P,
                      optimized: !0,
                      children: c(`div`, {
                        className: `framer-1wuz4pg`,
                        children: [
                          a(T, {
                            breakpoint: k,
                            overrides: {
                              joTBKHYNW: {
                                children: a(i, {
                                  children: a(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      "--framer-font-size": `151px`,
                                      "--framer-text-alignment": `center`,
                                    },
                                    children: `Let's`,
                                  }),
                                }),
                                viewBox: `0 0 324 181`,
                              },
                            },
                            children: a(E, {
                              __fromCanvasComponent: !0,
                              children: a(i, {
                                children: a(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                    "--framer-font-size": `279.49118424528604px`,
                                  },
                                  children: `Let's`,
                                }),
                              }),
                              className: `framer-1kzdie0`,
                              fonts: [`BI;Amiamie/Regular/v0`],
                              verticalAlignment: `top`,
                              viewBox: `0 0 600 335`,
                              withExternalLayout: !0,
                            }),
                          }),
                          a(T, {
                            breakpoint: k,
                            overrides: {
                              joTBKHYNW: {
                                height: 234,
                                width: `calc(${v?.width || `100vw`} - 40px)`,
                                y: void 0,
                              },
                            },
                            children: a(N, {
                              height: 116.0107,
                              width: `calc((${v?.width || `100vw`} - 40px) * 0.155)`,
                              y: (v?.y || 0) + 0 + 59 + 0 + 0 + 58.4947,
                              children: a(O, {
                                className: `framer-1wvfrv6-container`,
                                "data-framer-cursor": `yexux0`,
                                nodeId: `xNZwJ9bhp`,
                                scopeId: `c30CApP2Y`,
                                children: a(G, {
                                  height: `100%`,
                                  id: `xNZwJ9bhp`,
                                  layoutId: `xNZwJ9bhp`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: K(`uIYtoWIo5`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          a(T, {
                            breakpoint: k,
                            overrides: {
                              joTBKHYNW: {
                                children: a(i, {
                                  children: a(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                      "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                      "--framer-font-size": `151px`,
                                      "--framer-text-alignment": `center`,
                                    },
                                    children: `talk.`,
                                  }),
                                }),
                                viewBox: `0 0 291 181`,
                              },
                            },
                            children: a(E, {
                              __fromCanvasComponent: !0,
                              children: a(i, {
                                children: a(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Qkk7QW1pYW1pZS9SZWd1bGFyL3Yw`,
                                    "--framer-font-family": `"Amiamie", "Amiamie Placeholder", sans-serif`,
                                    "--framer-font-size": `312.07020385478546px`,
                                  },
                                  children: `talk.`,
                                }),
                              }),
                              className: `framer-1acyv3v`,
                              fonts: [`BI;Amiamie/Regular/v0`],
                              verticalAlignment: `top`,
                              viewBox: `0 0 600 374`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    a(Ae, {
                      __framer__animate: { transition: Y },
                      __framer__animateOnce: !0,
                      __framer__enter: J,
                      __framer__exit: X,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.12,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-1ukw90h`,
                      "data-framer-name": `Botom`,
                      layout: P,
                      children: a(`footer`, {
                        className: `framer-awnrpr`,
                        "data-framer-name": `Section/Footer`,
                        children: a(`div`, {
                          className: `framer-vufyt1`,
                          "data-framer-name": `Content container`,
                          children: a(`div`, {
                            className: `framer-13wvhyr`,
                            "data-framer-name": `Content bottom`,
                            children: a(`div`, {
                              className: `framer-1lj0aum`,
                              "data-framer-name": `Line`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    a(T, {
                      breakpoint: k,
                      overrides: { joTBKHYNW: { y: void 0 } },
                      children: a(N, {
                        height: 390,
                        width: v?.width || `100vw`,
                        y: (v?.y || 0) + 0 + 293,
                        children: a(Me, {
                          __framer__animate: { transition: Y },
                          __framer__animateOnce: !0,
                          __framer__enter: J,
                          __framer__exit: X,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.12,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-uu8dhp-container`,
                          layout: P,
                          nodeId: `zJ8BRybVW`,
                          rendersWithMotion: !0,
                          scopeId: `c30CApP2Y`,
                          children: a(T, {
                            breakpoint: k,
                            overrides: { joTBKHYNW: { variant: K(`bC5BwOq5u`) } },
                            children: a(R, {
                              height: `100%`,
                              id: `zJ8BRybVW`,
                              layoutId: `zJ8BRybVW`,
                              style: { width: `100%` },
                              variant: K(`Q4FA0ndjW`),
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
        `.framer-WVmGm.framer-1jp4egf, .framer-WVmGm .framer-1jp4egf { display: block; }`,
        `.framer-WVmGm.framer-1u92q99 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-WVmGm .framer-y71c3k-container { flex: none; height: auto; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-WVmGm .framer-1wlud2g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-WVmGm .framer-1wuz4pg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: 233px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-WVmGm .framer-1kzdie0, .framer-WVmGm .framer-1acyv3v { flex: 1 0 0px; height: auto; position: relative; white-space: pre; width: 1px; }`,
        `.framer-WVmGm .framer-1wvfrv6-container { flex: none; height: 50%; position: relative; width: 16%; }`,
        `.framer-WVmGm .framer-1ukw90h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-WVmGm .framer-awnrpr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: 1px; }`,
        `.framer-WVmGm .framer-vufyt1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-WVmGm .framer-13wvhyr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-WVmGm .framer-1lj0aum { background-color: var(--token-760b2224-5d53-4ceb-988b-26f083436f3c, rgba(236, 232, 223, 0.12)); flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-WVmGm .framer-uu8dhp-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (max-width: 1199.98px) { .framer-WVmGm.framer-1u92q99 { width: 390px; } .framer-WVmGm .framer-1wuz4pg { flex-direction: column; gap: 20px; height: min-content; } .framer-WVmGm .framer-1kzdie0, .framer-WVmGm .framer-1acyv3v, .framer-WVmGm .framer-awnrpr { flex: none; width: 100%; } .framer-WVmGm .framer-1wvfrv6-container { height: 234px; width: 100%; } .framer-WVmGm .framer-1ukw90h { flex-direction: column; }}`,
      ],
      `framer-WVmGm`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 683, width: 1200 }),
    P(
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
        ...Ee,
        ...Oe,
        ...je,
        ...Ne,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) => (t.locale, Promise.allSettled([F(L, {}, t), F(G, {}, t), F(R, {}, t)])),
    }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `Framerc30CApP2Y`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"joTBKHYNW":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `683`,
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerContractVersion: `1`,
            framerScrollSections: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerImmutableVariables: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, Fe as queryParamNames };
//# sourceMappingURL=dZ_9rYNclTEqWtyVLY7txrgKXfeBJaHxbNLc7MfUtAs.Dxouratj.mjs.map
