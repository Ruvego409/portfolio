import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { A as t, C as n, I as r, L as i, M as a } from "./react.D20wc1Tc.mjs";
import { L as o, Q as s, m as c, r as l } from "./framer.jQONGl1Q.mjs";
var u,
  d,
  f = e(() => {
    (o(),
      (u = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...u },
      (d = {
        onClick: { type: l.EventHandler },
        onMouseEnter: { type: l.EventHandler },
        onMouseLeave: { type: l.EventHandler },
      }),
      l.Number,
      l.Boolean,
      l.String,
      l.Enum);
  });
function p(e, t) {
  return h(!0, e, t);
}
function m(e, t) {
  return h(!1, e, t);
}
function h(e, t, n = !0) {
  let r = s();
  a(() => {
    n && r === e && t();
  }, [r]);
}
var g = e(() => {
    (o(), n());
  }),
  _ = e(() => {
    n();
  }),
  v = e(() => {
    o();
  }),
  y = e(() => {
    o();
  }),
  b = e(() => {
    n();
  }),
  x = e(() => {
    o();
  }),
  S,
  C,
  w = e(() => {
    (r(),
      n(),
      (S = () => {
        if (i !== void 0) {
          let e = i.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        } else return !1;
      }),
      (C = () => t(() => S(), [])));
  }),
  T = e(() => {
    (n(), y());
  }),
  E = e(() => {
    (n(), o(), y(), _());
  }),
  D = e(() => {
    (o(), n(), f());
  });
function O() {
  return t(() => c.current(), []);
}
function k() {
  return t(() => c.current() === c.canvas, []);
}
var A = e(() => {
    (n(), o());
  }),
  j = e(() => {
    n();
  });
function M(e) {
  let {
    borderRadius: n,
    isMixedBorderRadius: r,
    topLeftRadius: i,
    topRightRadius: a,
    bottomRightRadius: o,
    bottomLeftRadius: s,
  } = e;
  return t(() => (r ? `${i}px ${a}px ${o}px ${s}px` : `${n}px`), [n, r, i, a, o, s]);
}
var N,
  P = e(() => {
    (n(),
      o(),
      (N = {
        borderRadius: {
          title: `Radius`,
          type: l.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      l.FusedNumber);
  }),
  F = e(() => {
    (f(), g(), _(), v(), y(), b(), x(), w(), T(), E(), D(), A(), j(), P());
  });
export {
  A as a,
  w as c,
  p as d,
  m as f,
  M as i,
  C as l,
  f as m,
  N as n,
  k as o,
  d as p,
  P as r,
  O as s,
  F as t,
  g as u,
};
//# sourceMappingURL=OIjZRBmWDcIE2B6qgG1j.CjKmj2_P.mjs.map
