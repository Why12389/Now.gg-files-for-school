(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    5566: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSP: function() {
                return O
            },
            default: function() {
                return U
            }
        });
        var i = n(3021)
          , o = n(3626)
          , r = n(20)
          , a = n(5713)
          , d = n(1508)
          , l = n(9598)
          , c = n(4857)
          , s = n(4803)
          , u = function() {
            window.googletag = window.googletag || {
                cmd: []
            };
            var e = window.devicePixelRatio;
            window.googletag.cmd.push((function() {
                window.googletag.pubads().addEventListener("slotRequested", (function(t) {
                    var n, i, o = d.Z.getState().play.videoRef, r = (null === (n = null === o || void 0 === o ? void 0 : o.current) || void 0 === n ? void 0 : n.clientHeight) || 0, a = (null === (i = null === o || void 0 === o ? void 0 : o.current) || void 0 === i ? void 0 : i.clientWidth) || 0, c = t.slot.getSlotElementId();
                    -1 !== c.indexOf("leaderBoard") ? (0,
                    l.L9)("AdRequested", {
                        adContext: "Midroll",
                        adType: "Display",
                        adWidth: 720,
                        adHeight: 90,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: r,
                        androidHeight: a,
                        pixelRatio: e
                    }) : -1 !== c.indexOf("skyScrapper") ? (0,
                    l.L9)("AdRequested", {
                        adContext: "Midroll",
                        adType: "Display",
                        adWidth: 160,
                        adHeight: 600,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: r,
                        androidHeight: a,
                        pixelRatio: e
                    }) : -1 !== c.indexOf("pre-roll-gpt") ? (0,
                    l.L9)("AdRequested", {
                        adContext: "Preroll",
                        adType: "Display",
                        adWidth: 300,
                        adHeight: 250,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: r,
                        androidHeight: a,
                        pixelRatio: e
                    }) : -1 !== c.indexOf("div-gpt-ad-rewarded") ? (0,
                    l.L9)("AdRequested", {
                        adContext: "Ingame",
                        adType: "Display",
                        adWidth: 300,
                        adHeight: 250,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: r,
                        androidHeight: a,
                        pixelRatio: e
                    }) : (-1 !== c.indexOf("panelAdBottom_HTML") || -1 !== c.indexOf("div-gpt-ad-panelAdMega")) && (0,
                    l.L9)("AdRequested", {
                        adContext: "Midroll",
                        adType: "Display",
                        adWidth: 300,
                        adHeight: 250,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: r,
                        androidHeight: a,
                        pixelRatio: e
                    })
                }
                )),
                window.googletag.pubads().addEventListener("slotRenderEnded", (function(t) {
                    var n, i, o = t.slot.getSlotElementId(), r = d.Z.getState(), a = r.play.videoRef, u = (null === (n = null === a || void 0 === a ? void 0 : a.current) || void 0 === n ? void 0 : n.clientHeight) || 0, p = (null === (i = null === a || void 0 === a ? void 0 : a.current) || void 0 === i ? void 0 : i.clientWidth) || 0;
                    if (-1 !== o.indexOf("leaderBoard"))
                        t.isEmpty ? (0,
                        l.L9)("AdNotFilled", {
                            adContext: "Midroll",
                            adType: "Display",
                            adWidth: 720,
                            adHeight: 90,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: u,
                            androidHeight: p,
                            pixelRatio: e
                        }) : (0,
                        l.L9)("AdDisplayed", {
                            adContext: "Midroll",
                            adType: "Display",
                            adWidth: t.size[0],
                            adHeight: t.size[1],
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: u,
                            androidHeight: p,
                            pixelRatio: e
                        });
                    else if (-1 !== o.indexOf("skyScrapper"))
                        t.isEmpty ? (0,
                        l.L9)("AdNotFilled", {
                            adContext: "Midroll",
                            adType: "Display",
                            adWidth: 160,
                            adHeight: 600,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: u,
                            androidHeight: p,
                            pixelRatio: e
                        }) : (0,
                        l.L9)("AdDisplayed", {
                            adContext: "Midroll",
                            adType: "Display",
                            adWidth: t.size[0],
                            adHeight: t.size[1],
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: u,
                            androidHeight: p,
                            pixelRatio: e
                        });
                    else if (-1 !== o.indexOf("pre-roll-gpt"))
                        t.isEmpty ? (d.Z.dispatch({
                            type: c.Z.UPDATE_ADS_STATE,
                            payload: {
                                adsEnded: !0
                            }
                        }),
                        (0,
                        l.L9)("AdNotFilled", {
                            adContext: "Preroll",
                            adType: "Display",
                            adWidth: 300,
                            adHeight: 250,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: u,
                            androidHeight: p,
                            pixelRatio: e
                        })) : (setTimeout((function() {
                            d.Z.dispatch({
                                type: c.Z.UPDATE_ADS_STATE,
                                payload: {
                                    adsEnded: !0
                                }
                            })
                        }
                        ), 5e3),
                        (0,
                        l.L9)("AdDisplayed", {
                            adContext: "Preroll",
                            adType: "Display",
                            adWidth: t.size[0],
                            adHeight: t.size[1],
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: u,
                            androidHeight: p,
                            pixelRatio: e
                        }));
                    else if (-1 !== o.indexOf("div-gpt-ad-rewarded")) {
                        if (t.isEmpty)
                            (0,
                            l.L9)("AdNotFilled", {
                                adContext: "Ingame",
                                adType: "Display",
                                adWidth: 300,
                                adHeight: 250,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: u,
                                androidHeight: p,
                                pixelRatio: e
                            }),
                            (0,
                            s.f)("ADS::rewardedAdLoad::fail"),
                            d.Z.dispatch({
                                type: c.Z.UPDATE_REWARDED_SDK_STATE,
                                payload: {
                                    rewardedAdsSDK: !1,
                                    fallbackDisplayed: !1
                                }
                            }),
                            r.play.muted || a && a.current && (a.current.muted = !1);
                        else
                            (0,
                            l.L9)("AdDisplayed", {
                                adContext: "Ingame",
                                adType: "Display",
                                adWidth: t.size[0],
                                adHeight: t.size[1],
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: u,
                                androidHeight: p,
                                pixelRatio: e
                            }),
                            d.Z.dispatch({
                                type: c.Z.UPDATE_ADS_STATE,
                                payload: {
                                    fallbackDisplayed: !0
                                }
                            })
                    }
                }
                ))
            }
            ))
        }
          , p = n(8863)
          , f = n(5935)
          , h = n(5152)
          , g = n(9008)
          , w = n(8309)
          , y = n(5418)
          , v = n(1720)
          , m = n(8294)
          , P = n(5617)
          , x = n(8041)
          , b = n(4266)
          , Z = n(6971)
          , T = n(5522)
          , I = function(e) {
            var t = (0,
            v.useState)(e)
              , n = t[0]
              , i = t[1];
            return (0,
            v.useEffect)((function() {
                document.title = n
            }
            ), [n]),
            [n, i]
        }
          , E = n(942)
          , H = n(7020)
          , W = n(3145)
          , k = n(1739)
          , D = n(4298)
          , M = n(4003)
          , A = n(7997)
          , S = n(8764).Buffer
          , R = function(e, t, n, i) {
            return new (n || (n = Promise))((function(o, r) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (t) {
                        r(t)
                    }
                }
                function d(e) {
                    try {
                        l(i.throw(e))
                    } catch (t) {
                        r(t)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, d)
                }
                l((i = i.apply(e, t || [])).next())
            }
            ))
        }
          , L = function(e, t) {
            var n, i, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: d(0),
                throw: d(1),
                return: d(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function d(r) {
                return function(d) {
                    return function(r) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = t.call(e, a)
                            } catch (d) {
                                r = [6, d],
                                i = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, d])
                }
            }
        }
          , j = (0,
        h.default)((function() {
            return Promise.all([n.e(662), n.e(791), n.e(530), n.e(576), n.e(64), n.e(219), n.e(61)]).then(n.bind(n, 9735))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [9735]
                },
                modules: ["index.tsx -> @pages/play"]
            }
        })
          , _ = function(e) {
            (0,
            l.L9)("Uptime", {
                elapsedTime: (Date.now() - e) / 1e3,
                isTabVisible: "visible" === document.visibilityState,
                intervalDurationSecs: 30,
                isGameDisplayed: (0,
                l.hR)()
            })
        }
          , O = !0
          , U = function(e) {
            var t = e.appInfo
              , n = e.authServiceHost
              , d = e.pwaIconHost
              , s = e.pwaNudgeDelayMs
              , h = e.features
              , O = e.authUseThirdPartyFlow
              , U = e.prefix
              , N = e.authRedirectionUrl
              , X = e.playDomain
              , C = e.adsConfigUrl
              , Y = t.metaTags
              , q = void 0 === Y ? "" : Y
              , z = t.media
              , B = t.packageName
              , F = (z || {}).desktop
              , G = I("")
              , V = G[0]
              , K = G[1]
              , Q = !1
              , $ = (0,
            v.useRef)();
            (0,
            y.y)() || (Q = "true" === sessionStorage.getItem("isNewUser"));
            var J = (0,
            P.I0)()
              , ee = function(e) {
                return R(void 0, void 0, void 0, (function() {
                    var t, n, i;
                    return L(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return t = (new TextEncoder).encode(e),
                            [4, crypto.subtle.digest("SHA-1", t)];
                        case 1:
                            return n = o.sent(),
                            i = Array.from(new Uint8Array(n)),
                            [2, i.map((function(e) {
                                return e.toString(16).padStart(2, "0")
                            }
                            )).join("")]
                        }
                    }
                    ))
                }
                ))
            };
            (0,
            v.useEffect)((function() {
                var e;
                m.ZP.appInfo = t,
                m.ZP.prefix = U,
                (0,
                H.v)({
                    authServiceHost: n,
                    authUseThirdPartyFlow: O,
                    pwaIconHost: d,
                    pwaNudgeDelayMs: s
                }),
                "ropro" === (0,
                m.We)().utmCampaign.toLowerCase() && K("RoPro Cloud Play via now.gg"),
                "Html" === m.ZP.appInfo.appType && K("Play ".concat(m.ZP.appInfo.appName, " Online"));
                var i = sessionStorage.getItem(M.$3);
                i && parseInt(i, 10) && J({
                    type: Z.Z.SET_ROBLOX_EXPERIENCE_ID,
                    payload: {
                        robloxExperienceId: parseInt(i, 10),
                        currentRobloxExperienceTimer: Date.now()
                    }
                }),
                m.ZP.features = h,
                m.ZP.authRedirectionUrl = N,
                m.ZP.authUseThirdPartyFlow = O;
                R(void 0, void 0, void 0, (function() {
                    var e;
                    return L(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return m.ZP.appInfo.packageName && m.ZP.appInfo.packageName.length > 40 ? [4, ee(m.ZP.appInfo.packageName)] : [3, 2];
                        case 1:
                            e = t.sent(),
                            m.ZP.compressedPackage = e,
                            t.label = 2;
                        case 2:
                            return [2]
                        }
                    }
                    ))
                }
                )).then((function() {}
                )).catch((function(e) {}
                ));
                try {
                    var o = "IncognitoMode";
                    (0,
                    W.r)().then((function(e) {
                        e.isPrivate && (m.ZP.pwaSupported = !1,
                        (0,
                        l.L9)("".concat(o, "Detected")))
                    }
                    )).catch((function(e) {
                        (0,
                        l.L9)("".concat(o, "DetectionFailed"), {
                            error: e
                        })
                    }
                    ))
                } catch (c) {}
                (0,
                x.SR)() && "now.gg" === (0,
                m.We)().utmSource && (0,
                m.yS)(),
                (0,
                l.L9)(k.eu),
                m.ZP.playPageUpdate = !0,
                (0,
                m.Sf)("play-page");
                var r = Date.now();
                _(r),
                $.current = setInterval((function() {
                    _(r)
                }
                ), 3e4),
                sessionStorage.removeItem("isNewUserForExperiment"),
                J({
                    type: Z.Z.UPDATE_ORIENTATION,
                    payload: {
                        orientation: t.initialOrientation
                    }
                }),
                (0,
                E.i1)();
                var a = (0,
                w._B)();
                return J({
                    type: b.Z.GUEST_FLOW,
                    payload: {
                        guestFlow: a
                    }
                }),
                (null === (e = null === m.ZP || void 0 === m.ZP ? void 0 : m.ZP.features) || void 0 === e ? void 0 : e.ads) && u(),
                a && J({
                    type: b.Z.SET_LOGGED_IN,
                    payload: {
                        isLoggedIn: !1,
                        showPreloader: !1
                    }
                }),
                function() {
                    clearInterval($.current)
                }
            }
            ), []);
            return (0,
            A.BX)(a.Pw, {
                children: [(0,
                A.BX)(g.default, {
                    children: [(0,
                    A.tZ)("meta", {
                        httpEquiv: "Cache-control",
                        content: "no-cache, no-store, must-revalidate"
                    }), (0,
                    A.tZ)("meta", {
                        httpEquiv: "Pragma",
                        content: "no-cache"
                    }), (0,
                    A.tZ)("script", {
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            T.ZP)(t, B, U)
                        }
                    }), !(0,
                    y.y)() && !Q && !(0,
                    x.tq)() && !(0,
                    x.Em)() && !(0,
                    x.zc)() && (0,
                    A.BX)(A.HY, {
                        children: [(0,
                        A.tZ)("script", {
                            async: !0,
                            src: "https://fundingchoicesmessages.google.com/i/pub-9233878085988971?ers=1",
                            nonce: "qMzTqTjB9TkXzg695cx_KA"
                        }), (0,
                        A.tZ)("script", {
                            nonce: "qMzTqTjB9TkXzg695cx_KA",
                            dangerouslySetInnerHTML: {
                                __html: '(function () {\n                  function signalGooglefcPresent() {\n                    if (!window.frames["googlefcPresent"]) {\n                      if (document.body) {\n                        const iframe = document.createElement("iframe");\n                        iframe.style =\n                          "width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;";\n                        iframe.style.display = "none";\n                        iframe.name = "googlefcPresent";\n                        document.body.appendChild(iframe);\n                      } else {\n                        setTimeout(signalGooglefcPresent, 0);\n                      }\n                    }\n                  }\n                  signalGooglefcPresent();\n                })();'
                            }
                        }), (0,
                        A.tZ)("script", {
                            dangerouslySetInnerHTML: {
                                __html: (0,
                                T.Ci)()
                            }
                        })]
                    }), (0,
                    f.ZP)(q || ""), V && (0,
                    A.tZ)("title", {
                        children: V
                    }), (0,
                    A.tZ)("style", {
                        "data-type": "ng-fonts",
                        id: "".concat(S.from(X).toString("base64")),
                        children: "@font-face {\n            font-family: 'icomoon';\n            src: url('".concat(U, "/play/fonts/icomoon.eot?ow6spm');\n            src: url('").concat(U, "/play/fonts/icomoon.eot?ow6spm#iefix') format('embedded-opentype'),\n            url('").concat(U, "/play/fonts/icomoon.ttf?ow6spm') format('truetype'),\n            url('").concat(U, "/play/fonts/icomoon.woff?ow6spm') format('woff'),\n            url('").concat(U, "/play/fonts/icomoon.svg?ow6spm#icomoon') format('svg');\n            font-weight: normal;\n            font-style: normal;\n            font-display: block;\n          }")
                    })]
                }), (0,
                A.BX)(i.im, {
                    desktopBanner: null === F || void 0 === F ? void 0 : F.banner,
                    children: [(0,
                    A.tZ)(p.Z, {}), (0,
                    A.tZ)("noscript", {
                        style: {
                            margin: "auto",
                            borderRadius: "20px",
                            padding: "20px",
                            textAlign: "center",
                            fontSize: "x-large",
                            color: "#ffffff",
                            background: "rgba(0, 0, 0, 0.8)"
                        },
                        children: "You need to enable JavaScript to run this app."
                    }), (0,
                    A.tZ)(r.x.Provider, {
                        value: t,
                        children: (0,
                        A.BX)(o.Z, {
                            children: [(0,
                            A.tZ)(D.default, {
                                src: "https://dn0qt3r0xannq.cloudfront.net/nowgg-IZQznjkQaj/video/prebid-load.js",
                                onLoad: function() {
                                    J({
                                        type: c.Z.UPDATE_IMAERROR,
                                        payload: {
                                            imaError: !1
                                        }
                                    })
                                },
                                onError: function() {
                                    J({
                                        type: c.Z.UPDATE_IMAERROR,
                                        payload: {
                                            imaError: !0,
                                            adsEnded: !0
                                        }
                                    })
                                }
                            }), (0,
                            A.tZ)(D.default, {
                                src: "https://dn0qt3r0xannq.cloudfront.net/nowgg-IZQznjkQaj/display/prebid-load.js",
                                onError: function() {
                                    J({
                                        type: c.Z.UPDATE_IMAERROR,
                                        payload: {
                                            displayAdsError: !0
                                        }
                                    })
                                }
                            }), (0,
                            A.tZ)(j, {
                                manifest: !0,
                                adsConfigUrl: C
                            })]
                        })
                    })]
                })]
            })
        }
    },
    3021: function(e, t, n) {
        "use strict";
        n.d(t, {
            im: function() {
                return i.Z
            }
        });
        var i = n(9028);
        n(4359)
    },
    4359: function(e, t, n) {
        "use strict";
        n.d(t, {
            n: function() {
                return i.ZP
            },
            h: function() {
                return D
            }
        });
        var i = n(1339)
          , o = n(1508)
          , r = n(4003)
          , a = n(8041)
          , d = n(3493)
          , l = n.n(d)
          , c = n(2199)
          , s = n(8294)
          , u = n(1739)
          , p = n(5628)
          , f = n(3562)
          , h = n(3926)
          , g = n(5221)
          , w = function() {
            return (w = Object.assign || function(e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , y = function(e, t) {
            var n = new ArrayBuffer(2 * t.length + 2)
              , i = new Uint16Array(n);
            i[0] = e;
            for (var o = 0; o < t.length; o += 1)
                i[o + 1] = t[o];
            (0,
            r.fr)(n)
        }
          , v = function() {
            return o.Z.getState().play.orientation === p.cj.portrait
        }
          , m = function(e, t) {
            var n = e;
            return n["movement".concat(t)] || n["mozMovement".concat(t)] || n["webkitMovement".concat(t)] || 0
        }
          , P = function(e, t) {
            void 0 === t && (t = 0);
            var n = e.target.getBoundingClientRect()
              , i = e.offsetX
              , o = e.offsetY;
            if (c.ZP.pointerLock) {
                var r = m(e, "X")
                  , d = m(e, "Y");
                return c.ZP.mouseLockMoved.x += r,
                c.ZP.mouseLockMoved.y += d,
                [t, c.ZP.mouseLockMoved.x, c.ZP.mouseLockMoved.y]
            }
            return (0,
            a.tq)() ? window.innerHeight > window.innerWidth && !v() ? [t, Math.ceil(e.clientY - n.y), Math.ceil(n.right - e.clientX)] : window.innerHeight < window.innerWidth && v() ? [t, Math.ceil(n.bottom - e.clientY), Math.ceil(e.clientX - n.left)] : [t, Math.ceil(e.clientX - n.x), Math.ceil(e.clientY - n.y)] : ((0,
            a.tq)() || v() || (i = Math.ceil(e.clientX - n.x),
            o = Math.ceil(e.clientY - n.y)),
            "mousedown" === e.type && e.which && 1 === e.which && (g.fl.lastX = n.left + i,
            g.fl.lastY = n.top + o),
            [t, i, o])
        }
          , x = function() {
            g.fl.shouldTrackMove = Object.keys(g.fl.pressed).filter((function(e) {
                return g.fl.pressed[Number(e)]
            }
            )).length
        }
          , b = new Map
          , Z = []
          , T = l()((function(e) {
            if (e && e.target) {
                var t = e.target.getBoundingClientRect()
                  , n = e.offsetX
                  , i = e.offsetY;
                v() || (n = Math.ceil(e.clientX - t.x),
                i = Math.ceil(e.clientY - t.y));
                var o = e.deltaY ? 120 * -e.deltaY : 1.5 * -e.deltaX;
                c.ZP.mouseScroll(n, i, o)
            }
        }
        ), 30)
          , I = Date.now()
          , E = function(e) {
            if (e.preventDefault(),
            e.stopPropagation(),
            c.ZP.inUse() && !0 === e.ctrlKey)
                return T.cancel(),
                T(e),
                void (I = Date.now());
            if (!(Date.now() - I < 1e3)) {
                var t = P(e);
                if (g.fl.native)
                    (0,
                    h.xk)(e, t[1], t[2]);
                else if (!g.fl.shouldTrackMove) {
                    var n = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : 0 === e.deltaMode;
                    g.jp.started || y(f.hw.DOWN, t),
                    g.jp.started = !0;
                    var i = e.target.getBoundingClientRect()
                      , r = o.Z.getState().play.orientation;
                    if (n) {
                        var a = e.deltaY / 120 * f.$N
                          , d = e.deltaX / 120 * f.$N;
                        g.jp.y = Math.floor(g.jp.y + a),
                        g.jp.x = Math.floor(g.jp.x + d);
                        var l = [];
                        l = r === p.cj.landscape ? [0, Math.ceil(e.clientX - i.x) - g.jp.x, Math.ceil(e.clientY - i.y) - g.jp.y] : [0, e.offsetX - g.jp.x, e.offsetY - g.jp.y],
                        g.jp.lastX = l[1],
                        g.jp.lastY = l[2],
                        window.setTimeout((function() {
                            y(f.hw.MOVE, l)
                        }
                        ), 10)
                    } else {
                        (a = e.deltaY / 120 * f.$N) < 0 && a > -10 ? a = -10 : a > 0 && a < 10 && (a = 10),
                        g.jp.y = Math.floor(g.jp.y + a);
                        var s = [];
                        s = r === p.cj.landscape ? [0, Math.ceil(e.clientX - i.x), Math.ceil(e.clientY - i.y) - g.jp.y] : [0, e.offsetX, e.offsetY - g.jp.y],
                        g.jp.lastX = s[1],
                        g.jp.lastY = s[2],
                        window.setTimeout((function() {
                            y(f.hw.MOVE, s)
                        }
                        ), 10)
                    }
                    g.jp.timeout && clearTimeout(g.jp.timeout),
                    g.jp.timeout = window.setTimeout((function() {
                        var e = [0, g.jp.lastX, g.jp.lastY];
                        y(f.hw.UP, e),
                        g.jp.lastX = 0,
                        g.jp.lastY = 0,
                        g.jp.y = 0,
                        g.jp.x = 0,
                        g.jp.started = !1
                    }
                    ), 100),
                    e.preventDefault()
                }
            }
        }
          , H = E
          , W = l()(E, 16)
          , k = l()((function(e) {
            if (k.cancel(),
            "touch" === e.pointerType) {
                var t = b.get(e.pointerId);
                y(f.hw.MOVE, P(e, t))
            } else {
                var n = P(e);
                if (-1 !== e.button) {
                    if (o.Z.getState().play.shiftLockActive)
                        return;
                    g.fl.pressed[e.button] ? (g.fl.pressed[e.button] = !1,
                    c.ZP.inUse() && (g.fl.shouldTrackMove > 0 || c.ZP.pointerLock) ? c.ZP.mouseUp(e.button, n[1], n[2]) : g.fl.native ? (0,
                    h.xk)(w(w({}, e), {
                        type: u.Vy,
                        button: e.button,
                        target: e.target
                    }), n[1], n[2]) : g.fl.shouldTrackMove && y(f.hw.UP, n)) : (g.fl.pressed[e.button] = !0,
                    c.ZP.inUse() && (g.fl.shouldTrackMove > 0 || c.ZP.pointerLock) ? c.ZP.mouseDown(e.button, n[1], n[2]) : g.fl.native ? (0,
                    h.xk)(w(w({}, e), {
                        type: u.I6,
                        button: e.button,
                        target: e.target
                    }), n[1], n[2]) : g.fl.shouldTrackMove && y(f.hw.DOWN, n))
                } else
                    c.ZP.inUse() && (g.fl.shouldTrackMove > 0 || c.ZP.pointerLock) ? c.ZP.mouseMove(n[1], n[2]) : g.fl.native ? (h.bc.x = n[1],
                    h.bc.y = n[2],
                    (0,
                    h.xk)(e, n[1], n[2])) : g.fl.shouldTrackMove && y(f.hw.MOVE, n);
                x()
            }
        }
        ), 8)
          , D = {
            mouseDown: function(e) {
                var t = P(e);
                if ("touch" === e.pointerType) {
                    var n = function() {
                        for (var e = 0; e < 10; e += 1)
                            if (!Z[e])
                                return Z[e] = 1,
                                e;
                        return 0
                    }();
                    b.set(e.pointerId, n),
                    y(f.hw.DOWN, P(e, n))
                } else {
                    if (g.fl.pressed[e.button] = !0,
                    c.ZP.inUse())
                        c.ZP.mouseDown(e.button, t[1], t[2]);
                    else if (g.fl.native) {
                        var i = o.Z.getState().play.isFullscreen;
                        s.ZP.features.mouseLock ? (document.pointerLockElement ? s.ZP.features.enableAutoMouseLock && 1 === e.button && (0,
                        h.xk)(w(w({}, e), {
                            type: u.Vy,
                            button: 1,
                            target: e.target
                        }), t[1], t[2]) : (s.ZP.features.enableAutoMouseLock && ((0,
                        h.E4)(e.clientX, e.clientY),
                        (0,
                        h.xk)(w(w({}, e), {
                            type: u.I6,
                            button: 1,
                            target: e.target
                        }), h.bc.x, h.bc.y)),
                        i && (0,
                        h.E4)(e.clientX, e.clientY)),
                        (0,
                        h.xk)(e, t[1], t[2])) : (0,
                        h.xk)(e, t[1], t[2])
                    } else
                        y(f.hw.DOWN, t);
                    x()
                }
            },
            mouseUp: function(e) {
                var t = P(e);
                if ((3 === e.which || 2 === e.button) && o.Z.getState().play.shiftLockActive)
                    return;
                if ("touch" === e.pointerType) {
                    var n = b.get(e.pointerId);
                    "number" === typeof n && (y(f.hw.UP, P(e, n)),
                    b.delete(e.pointerId),
                    Z[n] = 0)
                } else
                    g.fl.pressed[e.button] && (g.fl.pressed[e.button] = !1,
                    c.ZP.inUse() ? c.ZP.mouseUp(e.button, t[1], t[2]) : g.fl.native ? ((0,
                    h.xk)(e, t[1], t[2]),
                    1 === e.button && document.pointerLockElement && e.target && (0,
                    h.xk)(w(w({}, e), {
                        type: u.I6,
                        button: 1,
                        target: e.target
                    }), h.bc.x, h.bc.y)) : y(f.hw.UP, t));
                x()
            },
            mouseMove: k,
            mouseCancel: function(e) {
                for (var t = Object.keys(g.fl.pressed), n = P(e), i = 0, o = t.length; i < o; i += 1)
                    g.fl.pressed[Number(t[i])] && (g.fl.native ? (0,
                    h.xk)(w(w({}, e), {
                        type: u.Vy,
                        button: Number(t[i]),
                        target: e.target
                    }), n[0], n[1]) : y(f.hw.UP, n),
                    g.fl.pressed[Number(t[i])] = !1)
            },
            mouseWheel: H,
            mouseWheelNative: W
        }
    },
    5279: function(e, t, n) {
        "use strict";
        var i = n(1720).default.createContext({});
        t.Z = i
    },
    20: function(e, t, n) {
        "use strict";
        n.d(t, {
            x: function() {
                return i.Z
            }
        });
        var i = n(5279)
    },
    5301: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return n(5566)
        }
        ])
    }
}, function(e) {
    e.O(0, [774, 675, 661, 333, 888, 179], (function() {
        return t = 5301,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
//# sourceMappingURL=index-3c3668938e77893f.js.map
