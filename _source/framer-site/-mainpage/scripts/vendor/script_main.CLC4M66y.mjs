import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  C as t,
  D as n,
  I as r,
  L as i,
  M as a,
  N as o,
  P as s,
  R as c,
  _ as l,
  a as u,
  h as d,
  i as f,
  j as p,
  m,
  n as h,
  p as g,
  r as _,
  t as v,
  u as y,
  x as b,
} from "./react.D20wc1Tc.mjs";
import {
  B as x,
  F as S,
  H as C,
  I as w,
  K as T,
  L as E,
  R as D,
  U as O,
  W as k,
  Y as A,
  c as j,
  d as M,
  dt as N,
  et as P,
  i as F,
  o as I,
  rt as L,
  u as R,
  ut as z,
} from "./framer.jQONGl1Q.mjs";
async function B({ routeId: e, pathVariables: t, localeId: r, collectionItemId: i }) {
  let l = U[e].page.preload();
  k({
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  });
  let u = y(R, {
    children: y(I, {
      children: y(M, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        routes: U,
        collectionUtils: G,
        framerSiteId: K,
        notFoundPage: D(() => import(`./SitesNotFoundPage.js@1.4.D1VDXmdr.mjs`)),
        isReducedMotion: void 0,
        localeId: r,
        locales: W,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://danylovasiur.framer.website`,
        EditorBar:
          c === void 0
            ? void 0
            : (() => {
                if (J) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return D(async () => {
                  c.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: A, useLocaleInfo: P, useRouter: L },
                    react: {
                      createElement: y,
                      Fragment: o,
                      memo: d,
                      useCallback: p,
                      useEffect: a,
                      useRef: n,
                      useState: s,
                      useLayoutEffect: b,
                    },
                    "react-dom": { createPortal: f },
                  };
                  let { createEditorBar: e } = await import(`init.mjs`);
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        loadSnippetsModule: new j(
          () => import(`./aohXcfCEH7eLshUz3Ru8hwERbjwVtxq5cCDnwgn579k.dObCGW41.mjs`)
        ),
        initialCollectionItemId: i,
      }),
    }),
    value: { routes: {} },
  });
  return (await l, u);
}
function V() {
  q && c.__framer_events.push(arguments);
}
async function H(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || c.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    V(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.framerHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = C(U, r)));
    else {
      C(U, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = S(U, decodeURIComponent(location.pathname), !0, W);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let u = B({ routeId: r, localeId: i, pathVariables: a, collectionItemId: s?.collectionItemId });
    c !== void 0 &&
      (async () => {
        let e = U[r],
          t = W.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && G) {
          let r = await G[e.collectionId]?.(),
            [i] = Object.values(a);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          l = o.timeZone,
          u = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          c.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: K,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: c.location.href,
              hostname: c.location.hostname || null,
              pathname: c.location.pathname || null,
              hash: c.location.hash || null,
              search: c.location.search || null,
              timezone: l,
              locale: u,
            },
            `eager`,
          ]),
          await N({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let d = await u;
    e
      ? (z(`framer-rewrite-breakpoints`, () => {
          (O(o), c.__framer_onRewriteBreakpoints?.(o));
        }),
        (J ? (e) => e() : l)(() => {
          (x(), T(), v(t, d, { onRecoverableError: n }));
        }))
      : _(t, { onRecoverableError: n }).render(d);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var U, W, G, K, q, J;
e(() => {
  if (
    (r(),
    E(),
    t(),
    u(),
    h(),
    (U = {
      augiA20Il: {
        elements: {},
        page: D(() => import(`./EM_7G-6E0Ppopepq0rP34Ak2-kqCCExBc2FboMnbbE0.no8sp6xb.mjs`)),
        path: `/`,
      },
      aCRbSljkl: {
        elements: {},
        page: D(() => import(`./vC8szpoftAaTUOJOi2PPYveMyzmz_kcVJpF_IH77VWc.BJB1PT9B.mjs`)),
        path: `/ubu`,
      },
      TwvfQk14J: {
        elements: {},
        page: D(() => import(`./MIT8YaFeh2icgirEix-LmlP8RzKlv8LUeEiBpq3e3uc.BeIAtf5j.mjs`)),
        path: `/mtrw`,
      },
      o9Tvh7Ah_: {
        elements: {},
        page: D(() => import(`./O_LBKVv_qwJkpBtDnv-MdhOX7jiqsr6rZ0T6I7llOPM.DJHQ5UT-.mjs`)),
        path: `/sheetsolved`,
      },
      M2JH_EIJa: {
        elements: {},
        page: D(() => import(`./sbgE6lN4jHN8l8guqpK_k1q8l28D3Bvbk6pycSUfDtg.BLu1AqB_.mjs`)),
        path: `/re:move`,
      },
      c30CApP2Y: {
        elements: {},
        page: D(() => import(`./dZ_9rYNclTEqWtyVLY7txrgKXfeBJaHxbNLc7MfUtAs.Dxouratj.mjs`)),
        path: `/contact-us`,
      },
      PlMaHNi_L: {
        elements: {},
        page: D(() => import(`./NHMudSqFaJbzVxx6WdKX6c9-j8MRzMGWpB5i1MK6Dow.C75vSsZp.mjs`)),
        path: `/lasowiak-cranberry-liqueur`,
      },
      YN_8Vp9ZG: {
        elements: {},
        page: D(() => import(`./OXfhZaxMjdrNEDZ_JbLYEZpXtz7A5vwCsV7y0PAqvis.Du7dNkMH.mjs`)),
        path: `/honored`,
      },
      CsfUvEijD: {
        elements: {},
        page: D(() => import(`./IFYhQfepVoGCP7JziTSUyeHnUs6Ryn0FPYSntpFc4mo.Dz2bULeT.mjs`)),
        path: `/about-me`,
      },
      d9Ci6hBOG: {
        elements: {},
        page: D(() => import(`./Ue-1dptCiKuH1W1LeHfd-VMJ5629tui5MtUdycKxVcw.38WqhwrR.mjs`)),
        path: `/aktan`,
      },
    }),
    (W = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (G = {}),
    (K = `eef03b206c3c3900406806686d18f4350371409fefb7a45f47dfb42d3acdf89d`),
    (q = typeof document < `u`),
    (J = q && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(i.userAgent)),
    q)
  ) {
    ((c.__framer_importFromPackage = (e, t) => () =>
      y(F, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (c.__framer_events = c.__framer_events || []),
      w());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? H(!0, e) : H(!1, e);
  }
  (function () {
    q &&
      l(() => {
        v(
          document.getElementById(`__framer-badge-container`),
          y(m, {}, y(g(() => import(`./PX9hIOIVM.BslH6ZUP.mjs`))))
        );
      });
  })();
})();
export { B as getPageRoot };
//# sourceMappingURL=script_main.CLC4M66y.mjs.map
