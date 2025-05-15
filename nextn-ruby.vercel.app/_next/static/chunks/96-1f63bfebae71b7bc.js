(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [96], {
        154: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(157).A)("Circle", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }]
            ])
        },
        157: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r(2115);
            let o = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                i = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return t.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()
                };
            var l = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let a = (0, n.forwardRef)((e, t) => {
                    let {
                        color: r = "currentColor",
                        size: o = 24,
                        strokeWidth: a = 2,
                        absoluteStrokeWidth: s,
                        className: u = "",
                        children: c,
                        iconNode: d,
                        ...f
                    } = e;
                    return (0, n.createElement)("svg", {
                        ref: t,
                        ...l,
                        width: o,
                        height: o,
                        stroke: r,
                        strokeWidth: s ? 24 * Number(a) / Number(o) : a,
                        className: i("lucide", u),
                        ...f
                    }, [...d.map(e => {
                        let [t, r] = e;
                        return (0, n.createElement)(t, r)
                    }), ...Array.isArray(c) ? c : [c]])
                }),
                s = (e, t) => {
                    let r = (0, n.forwardRef)((r, l) => {
                        let {
                            className: s,
                            ...u
                        } = r;
                        return (0, n.createElement)(a, {
                            ref: l,
                            iconNode: t,
                            className: i("lucide-".concat(o(e)), s),
                            ...u
                        })
                    });
                    return r.displayName = "".concat(e), r
                }
        },
        203: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(157).A)("ArrowUp", [
                ["path", {
                    d: "m5 12 7-7 7 7",
                    key: "hav0vg"
                }],
                ["path", {
                    d: "M12 19V5",
                    key: "x0mq9r"
                }]
            ])
        },
        518: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(157).A)("Check", [
                ["path", {
                    d: "M20 6 9 17l-5-5",
                    key: "1gmf2c"
                }]
            ])
        },
        901: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = r(8229)._(r(2115)).default.createContext(null)
        },
        1193: (e, t) => {
            "use strict";

            function r(e) {
                var t;
                let {
                    config: r,
                    src: n,
                    width: o,
                    quality: i
                } = e, l = i || (null == (t = r.qualities) ? void 0 : t.reduce((e, t) => Math.abs(t - 75) < Math.abs(e - 75) ? t : e)) || 75;
                return r.path + "?url=" + encodeURIComponent(n) + "&w=" + o + "&q=" + l + (n.startsWith("/_next/static/media/"), "")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r.__next_img_default = !0;
            let n = r
        },
        1275: (e, t, r) => {
            "use strict";
            r.d(t, {
                X: () => i
            });
            var n = r(2115),
                o = r(2712);

            function i(e) {
                let [t, r] = n.useState(void 0);
                return (0, o.N)(() => {
                    if (e) {
                        r({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t => {
                            let n, o;
                            if (!Array.isArray(t) || !t.length) return;
                            let i = t[0];
                            if ("borderBoxSize" in i) {
                                let e = i.borderBoxSize,
                                    t = Array.isArray(e) ? e[0] : e;
                                n = t.inlineSize, o = t.blockSize
                            } else n = e.offsetWidth, o = e.offsetHeight;
                            r({
                                width: n,
                                height: o
                            })
                        });
                        return t.observe(e, {
                            box: "border-box"
                        }), () => t.unobserve(e)
                    }
                    r(void 0)
                }, [e]), t
            }
        },
        1285: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => s
            });
            var n, o = r(2115),
                i = r(2712),
                l = (n || (n = r.t(o, 2)))["useId".toString()] || (() => void 0),
                a = 0;

            function s(e) {
                let [t, r] = o.useState(l());
                return (0, i.N)(() => {
                    e || r(e => e ? ? String(a++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
        },
        1469: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                default: function() {
                    return s
                },
                getImageProps: function() {
                    return a
                }
            });
            let n = r(8229),
                o = r(8883),
                i = r(3063),
                l = n._(r(1193));

            function a(e) {
                let {
                    props: t
                } = (0, o.getImgProps)(e, {
                    defaultLoader: l.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1
                    }
                });
                for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
                return {
                    props: t
                }
            }
            let s = i.Image
        },
        1721: (e, t, r) => {
            "use strict";
            r.d(t, {
                UC: () => r6,
                YJ: () => r9,
                In: () => r5,
                q7: () => r7,
                VF: () => nt,
                p4: () => ne,
                JU: () => r4,
                ZL: () => r3,
                bL: () => r0,
                wn: () => nn,
                PP: () => nr,
                wv: () => no,
                l9: () => r1,
                WT: () => r2,
                LM: () => r8
            });
            var n, o, i, l = r(2115),
                a = r(7650);

            function s(e, [t, r]) {
                return Math.min(r, Math.max(t, e))
            }
            var u = r(5185),
                c = r(2284),
                d = r(6101),
                f = r(6081),
                p = r(4315),
                m = r(3655),
                h = r(9033),
                v = r(5155),
                g = "dismissableLayer.update",
                y = l.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                b = l.forwardRef((e, t) => {
                    var r, n;
                    let {
                        disableOutsidePointerEvents: i = !1,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: s,
                        onFocusOutside: c,
                        onInteractOutside: f,
                        onDismiss: p,
                        ...b
                    } = e, S = l.useContext(y), [E, C] = l.useState(null), R = null != (n = null == E ? void 0 : E.ownerDocument) ? n : null == (r = globalThis) ? void 0 : r.document, [, _] = l.useState({}), k = (0, d.s)(t, e => C(e)), j = Array.from(S.layers), [A] = [...S.layersWithOutsidePointerEventsDisabled].slice(-1), P = j.indexOf(A), N = E ? j.indexOf(E) : -1, O = S.layersWithOutsidePointerEventsDisabled.size > 0, T = N >= P, M = function(e) {
                        var t;
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (t = globalThis) ? void 0 : t.document,
                            n = (0, h.c)(e),
                            o = l.useRef(!1),
                            i = l.useRef(() => {});
                        return l.useEffect(() => {
                            let e = e => {
                                    if (e.target && !o.current) {
                                        let t = function() {
                                                x("dismissableLayer.pointerDownOutside", n, o, {
                                                    discrete: !0
                                                })
                                            },
                                            o = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (r.removeEventListener("click", i.current), i.current = t, r.addEventListener("click", i.current, {
                                            once: !0
                                        })) : t()
                                    } else r.removeEventListener("click", i.current);
                                    o.current = !1
                                },
                                t = window.setTimeout(() => {
                                    r.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(t), r.removeEventListener("pointerdown", e), r.removeEventListener("click", i.current)
                            }
                        }, [r, n]), {
                            onPointerDownCapture: () => o.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            r = [...S.branches].some(e => e.contains(t));
                        T && !r && (null == s || s(e), null == f || f(e), e.defaultPrevented || null == p || p())
                    }, R), L = function(e) {
                        var t;
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (t = globalThis) ? void 0 : t.document,
                            n = (0, h.c)(e),
                            o = l.useRef(!1);
                        return l.useEffect(() => {
                            let e = e => {
                                e.target && !o.current && x("dismissableLayer.focusOutside", n, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return r.addEventListener("focusin", e), () => r.removeEventListener("focusin", e)
                        }, [r, n]), {
                            onFocusCapture: () => o.current = !0,
                            onBlurCapture: () => o.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        ![...S.branches].some(e => e.contains(t)) && (null == c || c(e), null == f || f(e), e.defaultPrevented || null == p || p())
                    }, R);
                    return ! function(e, t = globalThis ? .document) {
                        let r = (0, h.c)(e);
                        l.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && r(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [r, t])
                    }(e => {
                        N === S.layers.size - 1 && (null == a || a(e), !e.defaultPrevented && p && (e.preventDefault(), p()))
                    }, R), l.useEffect(() => {
                        if (E) return i && (0 === S.layersWithOutsidePointerEventsDisabled.size && (o = R.body.style.pointerEvents, R.body.style.pointerEvents = "none"), S.layersWithOutsidePointerEventsDisabled.add(E)), S.layers.add(E), w(), () => {
                            i && 1 === S.layersWithOutsidePointerEventsDisabled.size && (R.body.style.pointerEvents = o)
                        }
                    }, [E, R, i, S]), l.useEffect(() => () => {
                        E && (S.layers.delete(E), S.layersWithOutsidePointerEventsDisabled.delete(E), w())
                    }, [E, S]), l.useEffect(() => {
                        let e = () => _({});
                        return document.addEventListener(g, e), () => document.removeEventListener(g, e)
                    }, []), (0, v.jsx)(m.sG.div, { ...b,
                        ref: k,
                        style: {
                            pointerEvents: O ? T ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, u.m)(e.onFocusCapture, L.onFocusCapture),
                        onBlurCapture: (0, u.m)(e.onBlurCapture, L.onBlurCapture),
                        onPointerDownCapture: (0, u.m)(e.onPointerDownCapture, M.onPointerDownCapture)
                    })
                });

            function w() {
                let e = new CustomEvent(g);
                document.dispatchEvent(e)
            }

            function x(e, t, r, n) {
                let {
                    discrete: o
                } = n, i = r.originalEvent.target, l = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: r
                });
                t && i.addEventListener(e, t, {
                    once: !0
                }), o ? (0, m.hO)(i, l) : i.dispatchEvent(l)
            }
            b.displayName = "DismissableLayer", l.forwardRef((e, t) => {
                let r = l.useContext(y),
                    n = l.useRef(null),
                    o = (0, d.s)(t, n);
                return l.useEffect(() => {
                    let e = n.current;
                    if (e) return r.branches.add(e), () => {
                        r.branches.delete(e)
                    }
                }, [r.branches]), (0, v.jsx)(m.sG.div, { ...e,
                    ref: o
                })
            }).displayName = "DismissableLayerBranch";
            var S = 0;

            function E() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
            }
            var C = "focusScope.autoFocusOnMount",
                R = "focusScope.autoFocusOnUnmount",
                _ = {
                    bubbles: !1,
                    cancelable: !0
                },
                k = l.forwardRef((e, t) => {
                    let {
                        loop: r = !1,
                        trapped: n = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: i,
                        ...a
                    } = e, [s, u] = l.useState(null), c = (0, h.c)(o), f = (0, h.c)(i), p = l.useRef(null), g = (0, d.s)(t, e => u(e)), y = l.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    l.useEffect(() => {
                        if (n) {
                            let e = function(e) {
                                    if (y.paused || !s) return;
                                    let t = e.target;
                                    s.contains(t) ? p.current = t : P(p.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (y.paused || !s) return;
                                    let t = e.relatedTarget;
                                    null !== t && (s.contains(t) || P(p.current, {
                                        select: !0
                                    }))
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let r = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && P(s)
                            });
                            return s && r.observe(s, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
                            }
                        }
                    }, [n, s, y.paused]), l.useEffect(() => {
                        if (s) {
                            N.add(y);
                            let e = document.activeElement;
                            if (!s.contains(e)) {
                                let t = new CustomEvent(C, _);
                                s.addEventListener(C, c), s.dispatchEvent(t), t.defaultPrevented || (function(e) {
                                    let {
                                        select: t = !1
                                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = document.activeElement;
                                    for (let n of e)
                                        if (P(n, {
                                                select: t
                                            }), document.activeElement !== r) return
                                }(j(s).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && P(s))
                            }
                            return () => {
                                s.removeEventListener(C, c), setTimeout(() => {
                                    let t = new CustomEvent(R, _);
                                    s.addEventListener(R, f), s.dispatchEvent(t), t.defaultPrevented || P(null != e ? e : document.body, {
                                        select: !0
                                    }), s.removeEventListener(R, f), N.remove(y)
                                }, 0)
                            }
                        }
                    }, [s, c, f, y]);
                    let b = l.useCallback(e => {
                        if (!r && !n || y.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [n, i] = function(e) {
                                    let t = j(e);
                                    return [A(t, e), A(t.reverse(), e)]
                                }(t);
                            n && i ? e.shiftKey || o !== i ? e.shiftKey && o === n && (e.preventDefault(), r && P(i, {
                                select: !0
                            })) : (e.preventDefault(), r && P(n, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [r, n, y.paused]);
                    return (0, v.jsx)(m.sG.div, {
                        tabIndex: -1,
                        ...a,
                        ref: g,
                        onKeyDown: b
                    })
                });

            function j(e) {
                let t = [],
                    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; r.nextNode();) t.push(r.currentNode);
                return t
            }

            function A(e, t) {
                for (let r of e)
                    if (! function(e, t) {
                            let {
                                upTo: r
                            } = t;
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === r || e !== r);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(r, {
                            upTo: t
                        })) return r
            }

            function P(e) {
                let {
                    select: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e && e.focus) {
                    var r;
                    let n = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== n && (r = e) instanceof HTMLInputElement && "select" in r && t && e.select()
                }
            }
            k.displayName = "FocusScope";
            var N = function() {
                let e = [];
                return {
                    add(t) {
                        let r = e[0];
                        t !== r && (null == r || r.pause()), (e = O(e, t)).unshift(t)
                    },
                    remove(t) {
                        var r;
                        null == (r = (e = O(e, t))[0]) || r.resume()
                    }
                }
            }();

            function O(e, t) {
                let r = [...e],
                    n = r.indexOf(t);
                return -1 !== n && r.splice(n, 1), r
            }
            var T = r(1285);
            let M = ["top", "right", "bottom", "left"],
                L = Math.min,
                I = Math.max,
                z = Math.round,
                D = Math.floor,
                F = e => ({
                    x: e,
                    y: e
                }),
                W = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                B = {
                    start: "end",
                    end: "start"
                };

            function H(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function G(e) {
                return e.split("-")[0]
            }

            function U(e) {
                return e.split("-")[1]
            }

            function V(e) {
                return "x" === e ? "y" : "x"
            }

            function q(e) {
                return "y" === e ? "height" : "width"
            }

            function K(e) {
                return ["top", "bottom"].includes(G(e)) ? "y" : "x"
            }

            function X(e) {
                return e.replace(/start|end/g, e => B[e])
            }

            function $(e) {
                return e.replace(/left|right|bottom|top/g, e => W[e])
            }

            function Y(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function Z(e) {
                let {
                    x: t,
                    y: r,
                    width: n,
                    height: o
                } = e;
                return {
                    width: n,
                    height: o,
                    top: r,
                    left: t,
                    right: t + n,
                    bottom: r + o,
                    x: t,
                    y: r
                }
            }

            function J(e, t, r) {
                let n, {
                        reference: o,
                        floating: i
                    } = e,
                    l = K(t),
                    a = V(K(t)),
                    s = q(a),
                    u = G(t),
                    c = "y" === l,
                    d = o.x + o.width / 2 - i.width / 2,
                    f = o.y + o.height / 2 - i.height / 2,
                    p = o[s] / 2 - i[s] / 2;
                switch (u) {
                    case "top":
                        n = {
                            x: d,
                            y: o.y - i.height
                        };
                        break;
                    case "bottom":
                        n = {
                            x: d,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        n = {
                            x: o.x + o.width,
                            y: f
                        };
                        break;
                    case "left":
                        n = {
                            x: o.x - i.width,
                            y: f
                        };
                        break;
                    default:
                        n = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (U(t)) {
                    case "start":
                        n[a] -= p * (r && c ? -1 : 1);
                        break;
                    case "end":
                        n[a] += p * (r && c ? -1 : 1)
                }
                return n
            }
            let Q = async (e, t, r) => {
                let {
                    placement: n = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: l
                } = r, a = i.filter(Boolean), s = await (null == l.isRTL ? void 0 : l.isRTL(t)), u = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: c,
                    y: d
                } = J(u, n, s), f = n, p = {}, m = 0;
                for (let r = 0; r < a.length; r++) {
                    let {
                        name: i,
                        fn: h
                    } = a[r], {
                        x: v,
                        y: g,
                        data: y,
                        reset: b
                    } = await h({
                        x: c,
                        y: d,
                        initialPlacement: n,
                        placement: f,
                        strategy: o,
                        middlewareData: p,
                        rects: u,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    c = null != v ? v : c, d = null != g ? g : d, p = { ...p,
                        [i]: { ...p[i],
                            ...y
                        }
                    }, b && m <= 50 && (m++, "object" == typeof b && (b.placement && (f = b.placement), b.rects && (u = !0 === b.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : b.rects), {
                        x: c,
                        y: d
                    } = J(u, f, s)), r = -1)
                }
                return {
                    x: c,
                    y: d,
                    placement: f,
                    strategy: o,
                    middlewareData: p
                }
            };
            async function ee(e, t) {
                var r;
                void 0 === t && (t = {});
                let {
                    x: n,
                    y: o,
                    platform: i,
                    rects: l,
                    elements: a,
                    strategy: s
                } = e, {
                    boundary: u = "clippingAncestors",
                    rootBoundary: c = "viewport",
                    elementContext: d = "floating",
                    altBoundary: f = !1,
                    padding: p = 0
                } = H(t, e), m = Y(p), h = a[f ? "floating" === d ? "reference" : "floating" : d], v = Z(await i.getClippingRect({
                    element: null == (r = await (null == i.isElement ? void 0 : i.isElement(h))) || r ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                    boundary: u,
                    rootBoundary: c,
                    strategy: s
                })), g = "floating" === d ? {
                    x: n,
                    y: o,
                    width: l.floating.width,
                    height: l.floating.height
                } : l.reference, y = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), b = await (null == i.isElement ? void 0 : i.isElement(y)) && await (null == i.getScale ? void 0 : i.getScale(y)) || {
                    x: 1,
                    y: 1
                }, w = Z(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: a,
                    rect: g,
                    offsetParent: y,
                    strategy: s
                }) : g);
                return {
                    top: (v.top - w.top + m.top) / b.y,
                    bottom: (w.bottom - v.bottom + m.bottom) / b.y,
                    left: (v.left - w.left + m.left) / b.x,
                    right: (w.right - v.right + m.right) / b.x
                }
            }

            function et(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function er(e) {
                return M.some(t => e[t] >= 0)
            }
            async function en(e, t) {
                let {
                    placement: r,
                    platform: n,
                    elements: o
                } = e, i = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)), l = G(r), a = U(r), s = "y" === K(r), u = ["left", "top"].includes(l) ? -1 : 1, c = i && s ? -1 : 1, d = H(t, e), {
                    mainAxis: f,
                    crossAxis: p,
                    alignmentAxis: m
                } = "number" == typeof d ? {
                    mainAxis: d,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: d.mainAxis || 0,
                    crossAxis: d.crossAxis || 0,
                    alignmentAxis: d.alignmentAxis
                };
                return a && "number" == typeof m && (p = "end" === a ? -1 * m : m), s ? {
                    x: p * c,
                    y: f * u
                } : {
                    x: f * u,
                    y: p * c
                }
            }

            function eo() {
                return "undefined" != typeof window
            }

            function ei(e) {
                return es(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function el(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function ea(e) {
                var t;
                return null == (t = (es(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function es(e) {
                return !!eo() && (e instanceof Node || e instanceof el(e).Node)
            }

            function eu(e) {
                return !!eo() && (e instanceof Element || e instanceof el(e).Element)
            }

            function ec(e) {
                return !!eo() && (e instanceof HTMLElement || e instanceof el(e).HTMLElement)
            }

            function ed(e) {
                return !!eo() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof el(e).ShadowRoot)
            }

            function ef(e) {
                let {
                    overflow: t,
                    overflowX: r,
                    overflowY: n,
                    display: o
                } = eg(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o)
            }

            function ep(e) {
                return [":popover-open", ":modal"].some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }

            function em(e) {
                let t = eh(),
                    r = eu(e) ? eg(e) : e;
                return ["transform", "translate", "scale", "rotate", "perspective"].some(e => !!r[e] && "none" !== r[e]) || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(e => (r.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (r.contain || "").includes(e))
            }

            function eh() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function ev(e) {
                return ["html", "body", "#document"].includes(ei(e))
            }

            function eg(e) {
                return el(e).getComputedStyle(e)
            }

            function ey(e) {
                return eu(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function eb(e) {
                if ("html" === ei(e)) return e;
                let t = e.assignedSlot || e.parentNode || ed(e) && e.host || ea(e);
                return ed(t) ? t.host : t
            }

            function ew(e, t, r) {
                var n;
                void 0 === t && (t = []), void 0 === r && (r = !0);
                let o = function e(t) {
                        let r = eb(t);
                        return ev(r) ? t.ownerDocument ? t.ownerDocument.body : t.body : ec(r) && ef(r) ? r : e(r)
                    }(e),
                    i = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    l = el(o);
                if (i) {
                    let e = ex(l);
                    return t.concat(l, l.visualViewport || [], ef(o) ? o : [], e && r ? ew(e) : [])
                }
                return t.concat(o, ew(o, [], r))
            }

            function ex(e) {
                return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
            }

            function eS(e) {
                let t = eg(e),
                    r = parseFloat(t.width) || 0,
                    n = parseFloat(t.height) || 0,
                    o = ec(e),
                    i = o ? e.offsetWidth : r,
                    l = o ? e.offsetHeight : n,
                    a = z(r) !== i || z(n) !== l;
                return a && (r = i, n = l), {
                    width: r,
                    height: n,
                    $: a
                }
            }

            function eE(e) {
                return eu(e) ? e : e.contextElement
            }

            function eC(e) {
                let t = eE(e);
                if (!ec(t)) return F(1);
                let r = t.getBoundingClientRect(),
                    {
                        width: n,
                        height: o,
                        $: i
                    } = eS(t),
                    l = (i ? z(r.width) : r.width) / n,
                    a = (i ? z(r.height) : r.height) / o;
                return l && Number.isFinite(l) || (l = 1), a && Number.isFinite(a) || (a = 1), {
                    x: l,
                    y: a
                }
            }
            let eR = F(0);

            function e_(e) {
                let t = el(e);
                return eh() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : eR
            }

            function ek(e, t, r, n) {
                var o;
                void 0 === t && (t = !1), void 0 === r && (r = !1);
                let i = e.getBoundingClientRect(),
                    l = eE(e),
                    a = F(1);
                t && (n ? eu(n) && (a = eC(n)) : a = eC(e));
                let s = (void 0 === (o = r) && (o = !1), n && (!o || n === el(l)) && o) ? e_(l) : F(0),
                    u = (i.left + s.x) / a.x,
                    c = (i.top + s.y) / a.y,
                    d = i.width / a.x,
                    f = i.height / a.y;
                if (l) {
                    let e = el(l),
                        t = n && eu(n) ? el(n) : n,
                        r = e,
                        o = ex(r);
                    for (; o && n && t !== r;) {
                        let e = eC(o),
                            t = o.getBoundingClientRect(),
                            n = eg(o),
                            i = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x,
                            l = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
                        u *= e.x, c *= e.y, d *= e.x, f *= e.y, u += i, c += l, o = ex(r = el(o))
                    }
                }
                return Z({
                    width: d,
                    height: f,
                    x: u,
                    y: c
                })
            }

            function ej(e, t) {
                let r = ey(e).scrollLeft;
                return t ? t.left + r : ek(ea(e)).left + r
            }

            function eA(e, t, r) {
                void 0 === r && (r = !1);
                let n = e.getBoundingClientRect();
                return {
                    x: n.left + t.scrollLeft - (r ? 0 : ej(e, n)),
                    y: n.top + t.scrollTop
                }
            }

            function eP(e, t, r) {
                let n;
                if ("viewport" === t) n = function(e, t) {
                    let r = el(e),
                        n = ea(e),
                        o = r.visualViewport,
                        i = n.clientWidth,
                        l = n.clientHeight,
                        a = 0,
                        s = 0;
                    if (o) {
                        i = o.width, l = o.height;
                        let e = eh();
                        (!e || e && "fixed" === t) && (a = o.offsetLeft, s = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: a,
                        y: s
                    }
                }(e, r);
                else if ("document" === t) n = function(e) {
                    let t = ea(e),
                        r = ey(e),
                        n = e.ownerDocument.body,
                        o = I(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
                        i = I(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight),
                        l = -r.scrollLeft + ej(e),
                        a = -r.scrollTop;
                    return "rtl" === eg(n).direction && (l += I(t.clientWidth, n.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: l,
                        y: a
                    }
                }(ea(e));
                else if (eu(t)) n = function(e, t) {
                    let r = ek(e, !0, "fixed" === t),
                        n = r.top + e.clientTop,
                        o = r.left + e.clientLeft,
                        i = ec(e) ? eC(e) : F(1),
                        l = e.clientWidth * i.x,
                        a = e.clientHeight * i.y;
                    return {
                        width: l,
                        height: a,
                        x: o * i.x,
                        y: n * i.y
                    }
                }(t, r);
                else {
                    let r = e_(e);
                    n = {
                        x: t.x - r.x,
                        y: t.y - r.y,
                        width: t.width,
                        height: t.height
                    }
                }
                return Z(n)
            }

            function eN(e) {
                return "static" === eg(e).position
            }

            function eO(e, t) {
                if (!ec(e) || "fixed" === eg(e).position) return null;
                if (t) return t(e);
                let r = e.offsetParent;
                return ea(e) === r && (r = r.ownerDocument.body), r
            }

            function eT(e, t) {
                let r = el(e);
                if (ep(e)) return r;
                if (!ec(e)) {
                    let t = eb(e);
                    for (; t && !ev(t);) {
                        if (eu(t) && !eN(t)) return t;
                        t = eb(t)
                    }
                    return r
                }
                let n = eO(e, t);
                for (; n && ["table", "td", "th"].includes(ei(n)) && eN(n);) n = eO(n, t);
                return n && ev(n) && eN(n) && !em(n) ? r : n || function(e) {
                    let t = eb(e);
                    for (; ec(t) && !ev(t);) {
                        if (em(t)) return t;
                        if (ep(t)) break;
                        t = eb(t)
                    }
                    return null
                }(e) || r
            }
            let eM = async function(e) {
                    let t = this.getOffsetParent || eT,
                        r = this.getDimensions,
                        n = await r(e.floating);
                    return {
                        reference: function(e, t, r) {
                            let n = ec(t),
                                o = ea(t),
                                i = "fixed" === r,
                                l = ek(e, !0, i, t),
                                a = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                s = F(0);
                            if (n || !n && !i)
                                if (("body" !== ei(t) || ef(o)) && (a = ey(t)), n) {
                                    let e = ek(t, !0, i, t);
                                    s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop
                                } else o && (s.x = ej(o));
                            let u = !o || n || i ? F(0) : eA(o, a);
                            return {
                                x: l.left + a.scrollLeft - s.x - u.x,
                                y: l.top + a.scrollTop - s.y - u.y,
                                width: l.width,
                                height: l.height
                            }
                        }(e.reference, await t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: n.width,
                            height: n.height
                        }
                    }
                },
                eL = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            elements: t,
                            rect: r,
                            offsetParent: n,
                            strategy: o
                        } = e, i = "fixed" === o, l = ea(n), a = !!t && ep(t.floating);
                        if (n === l || a && i) return r;
                        let s = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            u = F(1),
                            c = F(0),
                            d = ec(n);
                        if ((d || !d && !i) && (("body" !== ei(n) || ef(l)) && (s = ey(n)), ec(n))) {
                            let e = ek(n);
                            u = eC(n), c.x = e.x + n.clientLeft, c.y = e.y + n.clientTop
                        }
                        let f = !l || d || i ? F(0) : eA(l, s, !0);
                        return {
                            width: r.width * u.x,
                            height: r.height * u.y,
                            x: r.x * u.x - s.scrollLeft * u.x + c.x + f.x,
                            y: r.y * u.y - s.scrollTop * u.y + c.y + f.y
                        }
                    },
                    getDocumentElement: ea,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: r,
                            rootBoundary: n,
                            strategy: o
                        } = e, i = [..."clippingAncestors" === r ? ep(t) ? [] : function(e, t) {
                            let r = t.get(e);
                            if (r) return r;
                            let n = ew(e, [], !1).filter(e => eu(e) && "body" !== ei(e)),
                                o = null,
                                i = "fixed" === eg(e).position,
                                l = i ? eb(e) : e;
                            for (; eu(l) && !ev(l);) {
                                let t = eg(l),
                                    r = em(l);
                                r || "fixed" !== t.position || (o = null), (i ? !r && !o : !r && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || ef(l) && !r && function e(t, r) {
                                    let n = eb(t);
                                    return !(n === r || !eu(n) || ev(n)) && ("fixed" === eg(n).position || e(n, r))
                                }(e, l)) ? n = n.filter(e => e !== l) : o = t, l = eb(l)
                            }
                            return t.set(e, n), n
                        }(t, this._c) : [].concat(r), n], l = i[0], a = i.reduce((e, r) => {
                            let n = eP(t, r, o);
                            return e.top = I(n.top, e.top), e.right = L(n.right, e.right), e.bottom = L(n.bottom, e.bottom), e.left = I(n.left, e.left), e
                        }, eP(t, l, o));
                        return {
                            width: a.right - a.left,
                            height: a.bottom - a.top,
                            x: a.left,
                            y: a.top
                        }
                    },
                    getOffsetParent: eT,
                    getElementRects: eM,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        let {
                            width: t,
                            height: r
                        } = eS(e);
                        return {
                            width: t,
                            height: r
                        }
                    },
                    getScale: eC,
                    isElement: eu,
                    isRTL: function(e) {
                        return "rtl" === eg(e).direction
                    }
                };

            function eI(e, t) {
                return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
            }
            let ez = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            x: r,
                            y: n,
                            placement: o,
                            rects: i,
                            platform: l,
                            elements: a,
                            middlewareData: s
                        } = t, {
                            element: u,
                            padding: c = 0
                        } = H(e, t) || {};
                        if (null == u) return {};
                        let d = Y(c),
                            f = {
                                x: r,
                                y: n
                            },
                            p = V(K(o)),
                            m = q(p),
                            h = await l.getDimensions(u),
                            v = "y" === p,
                            g = v ? "clientHeight" : "clientWidth",
                            y = i.reference[m] + i.reference[p] - f[p] - i.floating[m],
                            b = f[p] - i.reference[p],
                            w = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(u)),
                            x = w ? w[g] : 0;
                        x && await (null == l.isElement ? void 0 : l.isElement(w)) || (x = a.floating[g] || i.floating[m]);
                        let S = x / 2 - h[m] / 2 - 1,
                            E = L(d[v ? "top" : "left"], S),
                            C = L(d[v ? "bottom" : "right"], S),
                            R = x - h[m] - C,
                            _ = x / 2 - h[m] / 2 + (y / 2 - b / 2),
                            k = I(E, L(_, R)),
                            j = !s.arrow && null != U(o) && _ !== k && i.reference[m] / 2 - (_ < E ? E : C) - h[m] / 2 < 0,
                            A = j ? _ < E ? _ - E : _ - R : 0;
                        return {
                            [p]: f[p] + A,
                            data: {
                                [p]: k,
                                centerOffset: _ - k - A,
                                ...j && {
                                    alignmentOffset: A
                                }
                            },
                            reset: j
                        }
                    }
                }),
                eD = (e, t, r) => {
                    let n = new Map,
                        o = {
                            platform: eL,
                            ...r
                        },
                        i = { ...o.platform,
                            _c: n
                        };
                    return Q(e, t, { ...o,
                        platform: i
                    })
                };
            var eF = "undefined" != typeof document ? l.useLayoutEffect : l.useEffect;

            function eW(e, t) {
                let r, n, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((r = e.length) !== t.length) return !1;
                        for (n = r; 0 != n--;)
                            if (!eW(e[n], t[n])) return !1;
                        return !0
                    }
                    if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (n = r; 0 != n--;)
                        if (!({}).hasOwnProperty.call(t, o[n])) return !1;
                    for (n = r; 0 != n--;) {
                        let r = o[n];
                        if (("_owner" !== r || !e.$$typeof) && !eW(e[r], t[r])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function eB(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function eH(e, t) {
                let r = eB(e);
                return Math.round(t * r) / r
            }

            function eG(e) {
                let t = l.useRef(e);
                return eF(() => {
                    t.current = e
                }), t
            }
            let eU = e => ({
                    name: "arrow",
                    options: e,
                    fn(t) {
                        let {
                            element: r,
                            padding: n
                        } = "function" == typeof e ? e(t) : e;
                        return r && ({}).hasOwnProperty.call(r, "current") ? null != r.current ? ez({
                            element: r.current,
                            padding: n
                        }).fn(t) : {} : r ? ez({
                            element: r,
                            padding: n
                        }).fn(t) : {}
                    }
                }),
                eV = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = 0), {
                            name: "offset",
                            options: e,
                            async fn(t) {
                                var r, n;
                                let {
                                    x: o,
                                    y: i,
                                    placement: l,
                                    middlewareData: a
                                } = t, s = await en(t, e);
                                return l === (null == (r = a.offset) ? void 0 : r.placement) && null != (n = a.arrow) && n.alignmentOffset ? {} : {
                                    x: o + s.x,
                                    y: i + s.y,
                                    data: { ...s,
                                        placement: l
                                    }
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eq = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "shift",
                            options: e,
                            async fn(t) {
                                let {
                                    x: r,
                                    y: n,
                                    placement: o
                                } = t, {
                                    mainAxis: i = !0,
                                    crossAxis: l = !1,
                                    limiter: a = {
                                        fn: e => {
                                            let {
                                                x: t,
                                                y: r
                                            } = e;
                                            return {
                                                x: t,
                                                y: r
                                            }
                                        }
                                    },
                                    ...s
                                } = H(e, t), u = {
                                    x: r,
                                    y: n
                                }, c = await ee(t, s), d = K(G(o)), f = V(d), p = u[f], m = u[d];
                                if (i) {
                                    let e = "y" === f ? "top" : "left",
                                        t = "y" === f ? "bottom" : "right",
                                        r = p + c[e],
                                        n = p - c[t];
                                    p = I(r, L(p, n))
                                }
                                if (l) {
                                    let e = "y" === d ? "top" : "left",
                                        t = "y" === d ? "bottom" : "right",
                                        r = m + c[e],
                                        n = m - c[t];
                                    m = I(r, L(m, n))
                                }
                                let h = a.fn({ ...t,
                                    [f]: p,
                                    [d]: m
                                });
                                return { ...h,
                                    data: {
                                        x: h.x - r,
                                        y: h.y - n,
                                        enabled: {
                                            [f]: i,
                                            [d]: l
                                        }
                                    }
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eK = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            options: e,
                            fn(t) {
                                let {
                                    x: r,
                                    y: n,
                                    placement: o,
                                    rects: i,
                                    middlewareData: l
                                } = t, {
                                    offset: a = 0,
                                    mainAxis: s = !0,
                                    crossAxis: u = !0
                                } = H(e, t), c = {
                                    x: r,
                                    y: n
                                }, d = K(o), f = V(d), p = c[f], m = c[d], h = H(a, t), v = "number" == typeof h ? {
                                    mainAxis: h,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...h
                                };
                                if (s) {
                                    let e = "y" === f ? "height" : "width",
                                        t = i.reference[f] - i.floating[e] + v.mainAxis,
                                        r = i.reference[f] + i.reference[e] - v.mainAxis;
                                    p < t ? p = t : p > r && (p = r)
                                }
                                if (u) {
                                    var g, y;
                                    let e = "y" === f ? "width" : "height",
                                        t = ["top", "left"].includes(G(o)),
                                        r = i.reference[d] - i.floating[e] + (t && (null == (g = l.offset) ? void 0 : g[d]) || 0) + (t ? 0 : v.crossAxis),
                                        n = i.reference[d] + i.reference[e] + (t ? 0 : (null == (y = l.offset) ? void 0 : y[d]) || 0) - (t ? v.crossAxis : 0);
                                    m < r ? m = r : m > n && (m = n)
                                }
                                return {
                                    [f]: p,
                                    [d]: m
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eX = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "flip",
                            options: e,
                            async fn(t) {
                                var r, n, o, i, l;
                                let {
                                    placement: a,
                                    middlewareData: s,
                                    rects: u,
                                    initialPlacement: c,
                                    platform: d,
                                    elements: f
                                } = t, {
                                    mainAxis: p = !0,
                                    crossAxis: m = !0,
                                    fallbackPlacements: h,
                                    fallbackStrategy: v = "bestFit",
                                    fallbackAxisSideDirection: g = "none",
                                    flipAlignment: y = !0,
                                    ...b
                                } = H(e, t);
                                if (null != (r = s.arrow) && r.alignmentOffset) return {};
                                let w = G(a),
                                    x = K(c),
                                    S = G(c) === c,
                                    E = await (null == d.isRTL ? void 0 : d.isRTL(f.floating)),
                                    C = h || (S || !y ? [$(c)] : function(e) {
                                        let t = $(e);
                                        return [X(e), t, X(t)]
                                    }(c)),
                                    R = "none" !== g;
                                !h && R && C.push(... function(e, t, r, n) {
                                    let o = U(e),
                                        i = function(e, t, r) {
                                            let n = ["left", "right"],
                                                o = ["right", "left"];
                                            switch (e) {
                                                case "top":
                                                case "bottom":
                                                    if (r) return t ? o : n;
                                                    return t ? n : o;
                                                case "left":
                                                case "right":
                                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                                default:
                                                    return []
                                            }
                                        }(G(e), "start" === r, n);
                                    return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(X)))), i
                                }(c, y, g, E));
                                let _ = [c, ...C],
                                    k = await ee(t, b),
                                    j = [],
                                    A = (null == (n = s.flip) ? void 0 : n.overflows) || [];
                                if (p && j.push(k[w]), m) {
                                    let e = function(e, t, r) {
                                        void 0 === r && (r = !1);
                                        let n = U(e),
                                            o = V(K(e)),
                                            i = q(o),
                                            l = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                                        return t.reference[i] > t.floating[i] && (l = $(l)), [l, $(l)]
                                    }(a, u, E);
                                    j.push(k[e[0]], k[e[1]])
                                }
                                if (A = [...A, {
                                        placement: a,
                                        overflows: j
                                    }], !j.every(e => e <= 0)) {
                                    let e = ((null == (o = s.flip) ? void 0 : o.index) || 0) + 1,
                                        t = _[e];
                                    if (t) return {
                                        data: {
                                            index: e,
                                            overflows: A
                                        },
                                        reset: {
                                            placement: t
                                        }
                                    };
                                    let r = null == (i = A.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                                    if (!r) switch (v) {
                                        case "bestFit":
                                            {
                                                let e = null == (l = A.filter(e => {
                                                    if (R) {
                                                        let t = K(e.placement);
                                                        return t === x || "y" === t
                                                    }
                                                    return !0
                                                }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];e && (r = e);
                                                break
                                            }
                                        case "initialPlacement":
                                            r = c
                                    }
                                    if (a !== r) return {
                                        reset: {
                                            placement: r
                                        }
                                    }
                                }
                                return {}
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                e$ = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "size",
                            options: e,
                            async fn(t) {
                                var r, n;
                                let o, i, {
                                        placement: l,
                                        rects: a,
                                        platform: s,
                                        elements: u
                                    } = t,
                                    {
                                        apply: c = () => {},
                                        ...d
                                    } = H(e, t),
                                    f = await ee(t, d),
                                    p = G(l),
                                    m = U(l),
                                    h = "y" === K(l),
                                    {
                                        width: v,
                                        height: g
                                    } = a.floating;
                                "top" === p || "bottom" === p ? (o = p, i = m === (await (null == s.isRTL ? void 0 : s.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (i = p, o = "end" === m ? "top" : "bottom");
                                let y = g - f.top - f.bottom,
                                    b = v - f.left - f.right,
                                    w = L(g - f[o], y),
                                    x = L(v - f[i], b),
                                    S = !t.middlewareData.shift,
                                    E = w,
                                    C = x;
                                if (null != (r = t.middlewareData.shift) && r.enabled.x && (C = b), null != (n = t.middlewareData.shift) && n.enabled.y && (E = y), S && !m) {
                                    let e = I(f.left, 0),
                                        t = I(f.right, 0),
                                        r = I(f.top, 0),
                                        n = I(f.bottom, 0);
                                    h ? C = v - 2 * (0 !== e || 0 !== t ? e + t : I(f.left, f.right)) : E = g - 2 * (0 !== r || 0 !== n ? r + n : I(f.top, f.bottom))
                                }
                                await c({ ...t,
                                    availableWidth: C,
                                    availableHeight: E
                                });
                                let R = await s.getDimensions(u.floating);
                                return v !== R.width || g !== R.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eY = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "hide",
                            options: e,
                            async fn(t) {
                                let {
                                    rects: r
                                } = t, {
                                    strategy: n = "referenceHidden",
                                    ...o
                                } = H(e, t);
                                switch (n) {
                                    case "referenceHidden":
                                        {
                                            let e = et(await ee(t, { ...o,
                                                elementContext: "reference"
                                            }), r.reference);
                                            return {
                                                data: {
                                                    referenceHiddenOffsets: e,
                                                    referenceHidden: er(e)
                                                }
                                            }
                                        }
                                    case "escaped":
                                        {
                                            let e = et(await ee(t, { ...o,
                                                altBoundary: !0
                                            }), r.floating);
                                            return {
                                                data: {
                                                    escapedOffsets: e,
                                                    escaped: er(e)
                                                }
                                            }
                                        }
                                    default:
                                        return {}
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eZ = (e, t) => ({ ...eU(e),
                    options: [e, t]
                });
            var eJ = l.forwardRef((e, t) => {
                let {
                    children: r,
                    width: n = 10,
                    height: o = 5,
                    ...i
                } = e;
                return (0, v.jsx)(m.sG.svg, { ...i,
                    ref: t,
                    width: n,
                    height: o,
                    viewBox: "0 0 30 10",
                    preserveAspectRatio: "none",
                    children: e.asChild ? r : (0, v.jsx)("polygon", {
                        points: "0,0 30,0 15,10"
                    })
                })
            });
            eJ.displayName = "Arrow";
            var eQ = r(2712),
                e0 = r(1275),
                e1 = "Popper",
                [e2, e5] = (0, f.A)(e1),
                [e3, e6] = e2(e1),
                e8 = e => {
                    let {
                        __scopePopper: t,
                        children: r
                    } = e, [n, o] = l.useState(null);
                    return (0, v.jsx)(e3, {
                        scope: t,
                        anchor: n,
                        onAnchorChange: o,
                        children: r
                    })
                };
            e8.displayName = e1;
            var e9 = "PopperAnchor",
                e4 = l.forwardRef((e, t) => {
                    let {
                        __scopePopper: r,
                        virtualRef: n,
                        ...o
                    } = e, i = e6(e9, r), a = l.useRef(null), s = (0, d.s)(t, a);
                    return l.useEffect(() => {
                        i.onAnchorChange((null == n ? void 0 : n.current) || a.current)
                    }), n ? null : (0, v.jsx)(m.sG.div, { ...o,
                        ref: s
                    })
                });
            e4.displayName = e9;
            var e7 = "PopperContent",
                [te, tt] = e2(e7),
                tr = l.forwardRef((e, t) => {
                    var r, n, o, i, s, u, c, f;
                    let {
                        __scopePopper: p,
                        side: g = "bottom",
                        sideOffset: y = 0,
                        align: b = "center",
                        alignOffset: w = 0,
                        arrowPadding: x = 0,
                        avoidCollisions: S = !0,
                        collisionBoundary: E = [],
                        collisionPadding: C = 0,
                        sticky: R = "partial",
                        hideWhenDetached: _ = !1,
                        updatePositionStrategy: k = "optimized",
                        onPlaced: j,
                        ...A
                    } = e, P = e6(e7, p), [N, O] = l.useState(null), T = (0, d.s)(t, e => O(e)), [M, z] = l.useState(null), F = (0, e0.X)(M), W = null != (c = null == F ? void 0 : F.width) ? c : 0, B = null != (f = null == F ? void 0 : F.height) ? f : 0, H = "number" == typeof C ? C : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...C
                    }, G = Array.isArray(E) ? E : [E], U = G.length > 0, V = {
                        padding: H,
                        boundary: G.filter(tl),
                        altBoundary: U
                    }, {
                        refs: q,
                        floatingStyles: K,
                        placement: X,
                        isPositioned: $,
                        middlewareData: Y
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: r = "absolute",
                            middleware: n = [],
                            platform: o,
                            elements: {
                                reference: i,
                                floating: s
                            } = {},
                            transform: u = !0,
                            whileElementsMounted: c,
                            open: d
                        } = e, [f, p] = l.useState({
                            x: 0,
                            y: 0,
                            strategy: r,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [m, h] = l.useState(n);
                        eW(m, n) || h(n);
                        let [v, g] = l.useState(null), [y, b] = l.useState(null), w = l.useCallback(e => {
                            e !== C.current && (C.current = e, g(e))
                        }, []), x = l.useCallback(e => {
                            e !== R.current && (R.current = e, b(e))
                        }, []), S = i || v, E = s || y, C = l.useRef(null), R = l.useRef(null), _ = l.useRef(f), k = null != c, j = eG(c), A = eG(o), P = eG(d), N = l.useCallback(() => {
                            if (!C.current || !R.current) return;
                            let e = {
                                placement: t,
                                strategy: r,
                                middleware: m
                            };
                            A.current && (e.platform = A.current), eD(C.current, R.current, e).then(e => {
                                let t = { ...e,
                                    isPositioned: !1 !== P.current
                                };
                                O.current && !eW(_.current, t) && (_.current = t, a.flushSync(() => {
                                    p(t)
                                }))
                            })
                        }, [m, t, r, A, P]);
                        eF(() => {
                            !1 === d && _.current.isPositioned && (_.current.isPositioned = !1, p(e => ({ ...e,
                                isPositioned: !1
                            })))
                        }, [d]);
                        let O = l.useRef(!1);
                        eF(() => (O.current = !0, () => {
                            O.current = !1
                        }), []), eF(() => {
                            if (S && (C.current = S), E && (R.current = E), S && E) {
                                if (j.current) return j.current(S, E, N);
                                N()
                            }
                        }, [S, E, N, j, k]);
                        let T = l.useMemo(() => ({
                                reference: C,
                                floating: R,
                                setReference: w,
                                setFloating: x
                            }), [w, x]),
                            M = l.useMemo(() => ({
                                reference: S,
                                floating: E
                            }), [S, E]),
                            L = l.useMemo(() => {
                                let e = {
                                    position: r,
                                    left: 0,
                                    top: 0
                                };
                                if (!M.floating) return e;
                                let t = eH(M.floating, f.x),
                                    n = eH(M.floating, f.y);
                                return u ? { ...e,
                                    transform: "translate(" + t + "px, " + n + "px)",
                                    ...eB(M.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: r,
                                    left: t,
                                    top: n
                                }
                            }, [r, u, M.floating, f.x, f.y]);
                        return l.useMemo(() => ({ ...f,
                            update: N,
                            refs: T,
                            elements: M,
                            floatingStyles: L
                        }), [f, N, T, M, L])
                    }({
                        strategy: "fixed",
                        placement: g + ("center" !== b ? "-" + b : ""),
                        whileElementsMounted: function() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            return function(e, t, r, n) {
                                let o;
                                void 0 === n && (n = {});
                                let {
                                    ancestorScroll: i = !0,
                                    ancestorResize: l = !0,
                                    elementResize: a = "function" == typeof ResizeObserver,
                                    layoutShift: s = "function" == typeof IntersectionObserver,
                                    animationFrame: u = !1
                                } = n, c = eE(e), d = i || l ? [...c ? ew(c) : [], ...ew(t)] : [];
                                d.forEach(e => {
                                    i && e.addEventListener("scroll", r, {
                                        passive: !0
                                    }), l && e.addEventListener("resize", r)
                                });
                                let f = c && s ? function(e, t) {
                                        let r, n = null,
                                            o = ea(e);

                                        function i() {
                                            var e;
                                            clearTimeout(r), null == (e = n) || e.disconnect(), n = null
                                        }
                                        return ! function l(a, s) {
                                            void 0 === a && (a = !1), void 0 === s && (s = 1), i();
                                            let u = e.getBoundingClientRect(),
                                                {
                                                    left: c,
                                                    top: d,
                                                    width: f,
                                                    height: p
                                                } = u;
                                            if (a || t(), !f || !p) return;
                                            let m = D(d),
                                                h = D(o.clientWidth - (c + f)),
                                                v = {
                                                    rootMargin: -m + "px " + -h + "px " + -D(o.clientHeight - (d + p)) + "px " + -D(c) + "px",
                                                    threshold: I(0, L(1, s)) || 1
                                                },
                                                g = !0;

                                            function y(t) {
                                                let n = t[0].intersectionRatio;
                                                if (n !== s) {
                                                    if (!g) return l();
                                                    n ? l(!1, n) : r = setTimeout(() => {
                                                        l(!1, 1e-7)
                                                    }, 1e3)
                                                }
                                                1 !== n || eI(u, e.getBoundingClientRect()) || l(), g = !1
                                            }
                                            try {
                                                n = new IntersectionObserver(y, { ...v,
                                                    root: o.ownerDocument
                                                })
                                            } catch (e) {
                                                n = new IntersectionObserver(y, v)
                                            }
                                            n.observe(e)
                                        }(!0), i
                                    }(c, r) : null,
                                    p = -1,
                                    m = null;
                                a && (m = new ResizeObserver(e => {
                                    let [n] = e;
                                    n && n.target === c && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
                                        var e;
                                        null == (e = m) || e.observe(t)
                                    })), r()
                                }), c && !u && m.observe(c), m.observe(t));
                                let h = u ? ek(e) : null;
                                return u && function t() {
                                    let n = ek(e);
                                    h && !eI(h, n) && r(), h = n, o = requestAnimationFrame(t)
                                }(), r(), () => {
                                    var e;
                                    d.forEach(e => {
                                        i && e.removeEventListener("scroll", r), l && e.removeEventListener("resize", r)
                                    }), null == f || f(), null == (e = m) || e.disconnect(), m = null, u && cancelAnimationFrame(o)
                                }
                            }(...t, {
                                animationFrame: "always" === k
                            })
                        },
                        elements: {
                            reference: P.anchor
                        },
                        middleware: [eV({
                            mainAxis: y + B,
                            alignmentAxis: w
                        }), S && eq({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === R ? eK() : void 0,
                            ...V
                        }), S && eX({ ...V
                        }), e$({ ...V,
                            apply: e => {
                                let {
                                    elements: t,
                                    rects: r,
                                    availableWidth: n,
                                    availableHeight: o
                                } = e, {
                                    width: i,
                                    height: l
                                } = r.reference, a = t.floating.style;
                                a.setProperty("--radix-popper-available-width", "".concat(n, "px")), a.setProperty("--radix-popper-available-height", "".concat(o, "px")), a.setProperty("--radix-popper-anchor-width", "".concat(i, "px")), a.setProperty("--radix-popper-anchor-height", "".concat(l, "px"))
                            }
                        }), M && eZ({
                            element: M,
                            padding: x
                        }), ta({
                            arrowWidth: W,
                            arrowHeight: B
                        }), _ && eY({
                            strategy: "referenceHidden",
                            ...V
                        })]
                    }), [Z, J] = ts(X), Q = (0, h.c)(j);
                    (0, eQ.N)(() => {
                        $ && (null == Q || Q())
                    }, [$, Q]);
                    let ee = null == (r = Y.arrow) ? void 0 : r.x,
                        et = null == (n = Y.arrow) ? void 0 : n.y,
                        er = (null == (o = Y.arrow) ? void 0 : o.centerOffset) !== 0,
                        [en, eo] = l.useState();
                    return (0, eQ.N)(() => {
                        N && eo(window.getComputedStyle(N).zIndex)
                    }, [N]), (0, v.jsx)("div", {
                        ref: q.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...K,
                            transform: $ ? K.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: en,
                            "--radix-popper-transform-origin": [null == (i = Y.transformOrigin) ? void 0 : i.x, null == (s = Y.transformOrigin) ? void 0 : s.y].join(" "),
                            ...(null == (u = Y.hide) ? void 0 : u.referenceHidden) && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, v.jsx)(te, {
                            scope: p,
                            placedSide: Z,
                            onArrowChange: z,
                            arrowX: ee,
                            arrowY: et,
                            shouldHideArrow: er,
                            children: (0, v.jsx)(m.sG.div, {
                                "data-side": Z,
                                "data-align": J,
                                ...A,
                                ref: T,
                                style: { ...A.style,
                                    animation: $ ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            tr.displayName = e7;
            var tn = "PopperArrow",
                to = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                ti = l.forwardRef(function(e, t) {
                    let {
                        __scopePopper: r,
                        ...n
                    } = e, o = tt(tn, r), i = to[o.placedSide];
                    return (0, v.jsx)("span", {
                        ref: o.onArrowChange,
                        style: {
                            position: "absolute",
                            left: o.arrowX,
                            top: o.arrowY,
                            [i]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[o.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[o.placedSide],
                            visibility: o.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, v.jsx)(eJ, { ...n,
                            ref: t,
                            style: { ...n.style,
                                display: "block"
                            }
                        })
                    })
                });

            function tl(e) {
                return null !== e
            }
            ti.displayName = tn;
            var ta = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var r, n, o, i, l;
                    let {
                        placement: a,
                        rects: s,
                        middlewareData: u
                    } = t, c = (null == (r = u.arrow) ? void 0 : r.centerOffset) !== 0, d = c ? 0 : e.arrowWidth, f = c ? 0 : e.arrowHeight, [p, m] = ts(a), h = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[m], v = (null != (i = null == (n = u.arrow) ? void 0 : n.x) ? i : 0) + d / 2, g = (null != (l = null == (o = u.arrow) ? void 0 : o.y) ? l : 0) + f / 2, y = "", b = "";
                    return "bottom" === p ? (y = c ? h : "".concat(v, "px"), b = "".concat(-f, "px")) : "top" === p ? (y = c ? h : "".concat(v, "px"), b = "".concat(s.floating.height + f, "px")) : "right" === p ? (y = "".concat(-f, "px"), b = c ? h : "".concat(g, "px")) : "left" === p && (y = "".concat(s.floating.width + f, "px"), b = c ? h : "".concat(g, "px")), {
                        data: {
                            x: y,
                            y: b
                        }
                    }
                }
            });

            function ts(e) {
                let [t, r = "center"] = e.split("-");
                return [t, r]
            }
            var tu = l.forwardRef((e, t) => {
                var r, n;
                let {
                    container: o,
                    ...i
                } = e, [s, u] = l.useState(!1);
                (0, eQ.N)(() => u(!0), []);
                let c = o || s && (null == (n = globalThis) || null == (r = n.document) ? void 0 : r.body);
                return c ? a.createPortal((0, v.jsx)(m.sG.div, { ...i,
                    ref: t
                }), c) : null
            });
            tu.displayName = "Portal";
            var tc = r(9708),
                td = r(5845),
                tf = r(5503),
                tp = l.forwardRef((e, t) => (0, v.jsx)(m.sG.span, { ...e,
                    ref: t,
                    style: {
                        position: "absolute",
                        border: 0,
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        wordWrap: "normal",
                        ...e.style
                    }
                }));
            tp.displayName = "VisuallyHidden";
            var tm = function(e) {
                    return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
                },
                th = new WeakMap,
                tv = new WeakMap,
                tg = {},
                ty = 0,
                tb = function(e) {
                    return e && (e.host || tb(e.parentNode))
                },
                tw = function(e, t, r, n) {
                    var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (t.contains(e)) return e;
                        var r = tb(e);
                        return r && t.contains(r) ? r : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    tg[r] || (tg[r] = new WeakMap);
                    var i = tg[r],
                        l = [],
                        a = new Set,
                        s = new Set(o),
                        u = function(e) {
                            !e || a.has(e) || (a.add(e), u(e.parentNode))
                        };
                    o.forEach(u);
                    var c = function(e) {
                        !e || s.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                            if (a.has(e)) c(e);
                            else try {
                                var t = e.getAttribute(n),
                                    o = null !== t && "false" !== t,
                                    s = (th.get(e) || 0) + 1,
                                    u = (i.get(e) || 0) + 1;
                                th.set(e, s), i.set(e, u), l.push(e), 1 === s && o && tv.set(e, !0), 1 === u && e.setAttribute(r, "true"), o || e.setAttribute(n, "true")
                            } catch (t) {
                                console.error("aria-hidden: cannot operate on ", e, t)
                            }
                        })
                    };
                    return c(t), a.clear(), ty++,
                        function() {
                            l.forEach(function(e) {
                                var t = th.get(e) - 1,
                                    o = i.get(e) - 1;
                                th.set(e, t), i.set(e, o), t || (tv.has(e) || e.removeAttribute(n), tv.delete(e)), o || e.removeAttribute(r)
                            }), --ty || (th = new WeakMap, th = new WeakMap, tv = new WeakMap, tg = {})
                        }
                },
                tx = function(e, t, r) {
                    void 0 === r && (r = "data-aria-hidden");
                    var n = Array.from(Array.isArray(e) ? e : [e]),
                        o = t || tm(e);
                    return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), tw(n, o, r, "aria-hidden")) : function() {
                        return null
                    }
                },
                tS = function() {
                    return (tS = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

            function tE(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                return r
            }
            Object.create;
            Object.create;
            var tC = ("function" == typeof SuppressedError && SuppressedError, "right-scroll-bar-position"),
                tR = "width-before-scroll-bar";

            function t_(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e
            }
            var tk = "undefined" != typeof window ? l.useLayoutEffect : l.useEffect,
                tj = new WeakMap;

            function tA(e) {
                return e
            }
            var tP = function(e) {
                    void 0 === e && (e = {});
                    var t, r, n, o, i = (t = null, void 0 === r && (r = tA), n = [], o = !1, {
                        read: function() {
                            if (o) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                            return n.length ? n[n.length - 1] : null
                        },
                        useMedium: function(e) {
                            var t = r(e, o);
                            return n.push(t),
                                function() {
                                    n = n.filter(function(e) {
                                        return e !== t
                                    })
                                }
                        },
                        assignSyncMedium: function(e) {
                            for (o = !0; n.length;) {
                                var t = n;
                                n = [], t.forEach(e)
                            }
                            n = {
                                push: function(t) {
                                    return e(t)
                                },
                                filter: function() {
                                    return n
                                }
                            }
                        },
                        assignMedium: function(e) {
                            o = !0;
                            var t = [];
                            if (n.length) {
                                var r = n;
                                n = [], r.forEach(e), t = n
                            }
                            var i = function() {
                                    var r = t;
                                    t = [], r.forEach(e)
                                },
                                l = function() {
                                    return Promise.resolve().then(i)
                                };
                            l(), n = {
                                push: function(e) {
                                    t.push(e), l()
                                },
                                filter: function(e) {
                                    return t = t.filter(e), n
                                }
                            }
                        }
                    });
                    return i.options = tS({
                        async: !0,
                        ssr: !1
                    }, e), i
                }(),
                tN = function() {},
                tO = l.forwardRef(function(e, t) {
                    var r, n, o, i, a = l.useRef(null),
                        s = l.useState({
                            onScrollCapture: tN,
                            onWheelCapture: tN,
                            onTouchMoveCapture: tN
                        }),
                        u = s[0],
                        c = s[1],
                        d = e.forwardProps,
                        f = e.children,
                        p = e.className,
                        m = e.removeScrollBar,
                        h = e.enabled,
                        v = e.shards,
                        g = e.sideCar,
                        y = e.noIsolation,
                        b = e.inert,
                        w = e.allowPinchZoom,
                        x = e.as,
                        S = e.gapMode,
                        E = tE(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        C = (r = [a, t], n = function(e) {
                            return r.forEach(function(t) {
                                return t_(t, e)
                            })
                        }, (o = (0, l.useState)(function() {
                            return {
                                value: null,
                                callback: n,
                                facade: {
                                    get current() {
                                        return o.value
                                    },
                                    set current(value) {
                                        var e = o.value;
                                        e !== value && (o.value = value, o.callback(value, e))
                                    }
                                }
                            }
                        })[0]).callback = n, i = o.facade, tk(function() {
                            var e = tj.get(i);
                            if (e) {
                                var t = new Set(e),
                                    n = new Set(r),
                                    o = i.current;
                                t.forEach(function(e) {
                                    n.has(e) || t_(e, null)
                                }), n.forEach(function(e) {
                                    t.has(e) || t_(e, o)
                                })
                            }
                            tj.set(i, r)
                        }, [r]), i),
                        R = tS(tS({}, E), u);
                    return l.createElement(l.Fragment, null, h && l.createElement(g, {
                        sideCar: tP,
                        removeScrollBar: m,
                        shards: v,
                        noIsolation: y,
                        inert: b,
                        setCallbacks: c,
                        allowPinchZoom: !!w,
                        lockRef: a,
                        gapMode: S
                    }), d ? l.cloneElement(l.Children.only(f), tS(tS({}, R), {
                        ref: C
                    })) : l.createElement(void 0 === x ? "div" : x, tS({}, R, {
                        className: p,
                        ref: C
                    }), f))
                });
            tO.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, tO.classNames = {
                fullWidth: tR,
                zeroRight: tC
            };
            var tT = function(e) {
                var t = e.sideCar,
                    r = tE(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var n = t.read();
                if (!n) throw Error("Sidecar medium not found");
                return l.createElement(n, tS({}, r))
            };
            tT.isSideCarExport = !0;
            var tM = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(n) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = i || r.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var o, l;
                                (o = t).styleSheet ? o.styleSheet.cssText = n : o.appendChild(document.createTextNode(n)), l = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(l)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                tL = function() {
                    var e = tM();
                    return function(t, r) {
                        l.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && r])
                    }
                },
                tI = function() {
                    var e = tL();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                tz = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                tD = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                tF = function(e) {
                    var t = window.getComputedStyle(document.body),
                        r = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        n = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [tD(r), tD(n), tD(o)]
                },
                tW = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return tz;
                    var t = tF(e),
                        r = document.documentElement.clientWidth,
                        n = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, n - r + t[2] - t[0])
                    }
                },
                tB = tI(),
                tH = "data-scroll-locked",
                tG = function(e, t, r, n) {
                    var o = e.left,
                        i = e.top,
                        l = e.right,
                        a = e.gap;
                    return void 0 === r && (r = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(n, ";\n   padding-right: ").concat(a, "px ").concat(n, ";\n  }\n  body[").concat(tH, "] {\n    overflow: hidden ").concat(n, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(n, ";"), "margin" === r && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(n, ";\n    "), "padding" === r && "padding-right: ".concat(a, "px ").concat(n, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(tC, " {\n    right: ").concat(a, "px ").concat(n, ";\n  }\n  \n  .").concat(tR, " {\n    margin-right: ").concat(a, "px ").concat(n, ";\n  }\n  \n  .").concat(tC, " .").concat(tC, " {\n    right: 0 ").concat(n, ";\n  }\n  \n  .").concat(tR, " .").concat(tR, " {\n    margin-right: 0 ").concat(n, ";\n  }\n  \n  body[").concat(tH, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
                },
                tU = function() {
                    var e = parseInt(document.body.getAttribute(tH) || "0", 10);
                    return isFinite(e) ? e : 0
                },
                tV = function() {
                    l.useEffect(function() {
                        return document.body.setAttribute(tH, (tU() + 1).toString()),
                            function() {
                                var e = tU() - 1;
                                e <= 0 ? document.body.removeAttribute(tH) : document.body.setAttribute(tH, e.toString())
                            }
                    }, [])
                },
                tq = function(e) {
                    var t = e.noRelative,
                        r = e.noImportant,
                        n = e.gapMode,
                        o = void 0 === n ? "margin" : n;
                    tV();
                    var i = l.useMemo(function() {
                        return tW(o)
                    }, [o]);
                    return l.createElement(tB, {
                        styles: tG(i, !t, o, r ? "" : "!important")
                    })
                },
                tK = !1;
            if ("undefined" != typeof window) try {
                var tX = Object.defineProperty({}, "passive", {
                    get: function() {
                        return tK = !0, !0
                    }
                });
                window.addEventListener("test", tX, tX), window.removeEventListener("test", tX, tX)
            } catch (e) {
                tK = !1
            }
            var t$ = !!tK && {
                    passive: !1
                },
                tY = function(e, t) {
                    if (!(e instanceof Element)) return !1;
                    var r = window.getComputedStyle(e);
                    return "hidden" !== r[t] && (r.overflowY !== r.overflowX || "TEXTAREA" === e.tagName || "visible" !== r[t])
                },
                tZ = function(e, t) {
                    var r = t.ownerDocument,
                        n = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), tJ(e, n)) {
                            var o = tQ(e, n);
                            if (o[1] > o[2]) return !0
                        }
                        n = n.parentNode
                    } while (n && n !== r.body);
                    return !1
                },
                tJ = function(e, t) {
                    return "v" === e ? tY(t, "overflowY") : tY(t, "overflowX")
                },
                tQ = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                t0 = function(e, t, r, n, o) {
                    var i, l = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
                        a = l * n,
                        s = r.target,
                        u = t.contains(s),
                        c = !1,
                        d = a > 0,
                        f = 0,
                        p = 0;
                    do {
                        var m = tQ(e, s),
                            h = m[0],
                            v = m[1] - m[2] - l * h;
                        (h || v) && tJ(e, s) && (f += v, p += h), s = s instanceof ShadowRoot ? s.host : s.parentNode
                    } while (!u && s !== document.body || u && (t.contains(s) || t === s));
                    return d && (o && 1 > Math.abs(f) || !o && a > f) ? c = !0 : !d && (o && 1 > Math.abs(p) || !o && -a > p) && (c = !0), c
                },
                t1 = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                t2 = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                t5 = function(e) {
                    return e && "current" in e ? e.current : e
                },
                t3 = 0,
                t6 = [];
            let t8 = (n = function(e) {
                var t = l.useRef([]),
                    r = l.useRef([0, 0]),
                    n = l.useRef(),
                    o = l.useState(t3++)[0],
                    i = l.useState(tI)[0],
                    a = l.useRef(e);
                l.useEffect(function() {
                    a.current = e
                }, [e]), l.useEffect(function() {
                    if (e.inert) {
                        document.body.classList.add("block-interactivity-".concat(o));
                        var t = (function(e, t, r) {
                            if (r || 2 == arguments.length)
                                for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
                            return e.concat(n || Array.prototype.slice.call(t))
                        })([e.lockRef.current], (e.shards || []).map(t5), !0).filter(Boolean);
                        return t.forEach(function(e) {
                                return e.classList.add("allow-interactivity-".concat(o))
                            }),
                            function() {
                                document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                                    return e.classList.remove("allow-interactivity-".concat(o))
                                })
                            }
                    }
                }, [e.inert, e.lockRef.current, e.shards]);
                var s = l.useCallback(function(e, t) {
                        if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !a.current.allowPinchZoom;
                        var o, i = t1(e),
                            l = r.current,
                            s = "deltaX" in e ? e.deltaX : l[0] - i[0],
                            u = "deltaY" in e ? e.deltaY : l[1] - i[1],
                            c = e.target,
                            d = Math.abs(s) > Math.abs(u) ? "h" : "v";
                        if ("touches" in e && "h" === d && "range" === c.type) return !1;
                        var f = tZ(d, c);
                        if (!f) return !0;
                        if (f ? o = d : (o = "v" === d ? "h" : "v", f = tZ(d, c)), !f) return !1;
                        if (!n.current && "changedTouches" in e && (s || u) && (n.current = o), !o) return !0;
                        var p = n.current || o;
                        return t0(p, t, e, "h" === p ? s : u, !0)
                    }, []),
                    u = l.useCallback(function(e) {
                        if (t6.length && t6[t6.length - 1] === i) {
                            var r = "deltaY" in e ? t2(e) : t1(e),
                                n = t.current.filter(function(t) {
                                    var n;
                                    return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (n = t.delta, n[0] === r[0] && n[1] === r[1])
                                })[0];
                            if (n && n.should) {
                                e.cancelable && e.preventDefault();
                                return
                            }
                            if (!n) {
                                var o = (a.current.shards || []).map(t5).filter(Boolean).filter(function(t) {
                                    return t.contains(e.target)
                                });
                                (o.length > 0 ? s(e, o[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault()
                            }
                        }
                    }, []),
                    c = l.useCallback(function(e, r, n, o) {
                        var i = {
                            name: e,
                            delta: r,
                            target: n,
                            should: o,
                            shadowParent: function(e) {
                                for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                                return t
                            }(n)
                        };
                        t.current.push(i), setTimeout(function() {
                            t.current = t.current.filter(function(e) {
                                return e !== i
                            })
                        }, 1)
                    }, []),
                    d = l.useCallback(function(e) {
                        r.current = t1(e), n.current = void 0
                    }, []),
                    f = l.useCallback(function(t) {
                        c(t.type, t2(t), t.target, s(t, e.lockRef.current))
                    }, []),
                    p = l.useCallback(function(t) {
                        c(t.type, t1(t), t.target, s(t, e.lockRef.current))
                    }, []);
                l.useEffect(function() {
                    return t6.push(i), e.setCallbacks({
                            onScrollCapture: f,
                            onWheelCapture: f,
                            onTouchMoveCapture: p
                        }), document.addEventListener("wheel", u, t$), document.addEventListener("touchmove", u, t$), document.addEventListener("touchstart", d, t$),
                        function() {
                            t6 = t6.filter(function(e) {
                                return e !== i
                            }), document.removeEventListener("wheel", u, t$), document.removeEventListener("touchmove", u, t$), document.removeEventListener("touchstart", d, t$)
                        }
                }, []);
                var m = e.removeScrollBar,
                    h = e.inert;
                return l.createElement(l.Fragment, null, h ? l.createElement(i, {
                    styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                }) : null, m ? l.createElement(tq, {
                    gapMode: e.gapMode
                }) : null)
            }, tP.useMedium(n), tT);
            var t9 = l.forwardRef(function(e, t) {
                return l.createElement(tO, tS({}, e, {
                    ref: t,
                    sideCar: t8
                }))
            });
            t9.classNames = tO.classNames;
            var t4 = [" ", "Enter", "ArrowUp", "ArrowDown"],
                t7 = [" ", "Enter"],
                re = "Select",
                [rt, rr, rn] = (0, c.N)(re),
                [ro, ri] = (0, f.A)(re, [rn, e5]),
                rl = e5(),
                [ra, rs] = ro(re),
                [ru, rc] = ro(re),
                rd = e => {
                    let {
                        __scopeSelect: t,
                        children: r,
                        open: n,
                        defaultOpen: o,
                        onOpenChange: i,
                        value: a,
                        defaultValue: s,
                        onValueChange: u,
                        dir: c,
                        name: d,
                        autoComplete: f,
                        disabled: m,
                        required: h,
                        form: g
                    } = e, y = rl(t), [b, w] = l.useState(null), [x, S] = l.useState(null), [E, C] = l.useState(!1), R = (0, p.jH)(c), [_ = !1, k] = (0, td.i)({
                        prop: n,
                        defaultProp: o,
                        onChange: i
                    }), [j, A] = (0, td.i)({
                        prop: a,
                        defaultProp: s,
                        onChange: u
                    }), P = l.useRef(null), N = !b || g || !!b.closest("form"), [O, M] = l.useState(new Set), L = Array.from(O).map(e => e.props.value).join(";");
                    return (0, v.jsx)(e8, { ...y,
                        children: (0, v.jsxs)(ra, {
                            required: h,
                            scope: t,
                            trigger: b,
                            onTriggerChange: w,
                            valueNode: x,
                            onValueNodeChange: S,
                            valueNodeHasChildren: E,
                            onValueNodeHasChildrenChange: C,
                            contentId: (0, T.B)(),
                            value: j,
                            onValueChange: A,
                            open: _,
                            onOpenChange: k,
                            dir: R,
                            triggerPointerDownPosRef: P,
                            disabled: m,
                            children: [(0, v.jsx)(rt.Provider, {
                                scope: t,
                                children: (0, v.jsx)(ru, {
                                    scope: e.__scopeSelect,
                                    onNativeOptionAdd: l.useCallback(e => {
                                        M(t => new Set(t).add(e))
                                    }, []),
                                    onNativeOptionRemove: l.useCallback(e => {
                                        M(t => {
                                            let r = new Set(t);
                                            return r.delete(e), r
                                        })
                                    }, []),
                                    children: r
                                })
                            }), N ? (0, v.jsxs)(rZ, {
                                "aria-hidden": !0,
                                required: h,
                                tabIndex: -1,
                                name: d,
                                autoComplete: f,
                                value: j,
                                onChange: e => A(e.target.value),
                                disabled: m,
                                form: g,
                                children: [void 0 === j ? (0, v.jsx)("option", {
                                    value: ""
                                }) : null, Array.from(O)]
                            }, L) : null]
                        })
                    })
                };
            rd.displayName = re;
            var rf = "SelectTrigger",
                rp = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        disabled: n = !1,
                        ...o
                    } = e, i = rl(r), a = rs(rf, r), s = a.disabled || n, c = (0, d.s)(t, a.onTriggerChange), f = rr(r), p = l.useRef("touch"), [h, g, y] = rJ(e => {
                        let t = f().filter(e => !e.disabled),
                            r = t.find(e => e.value === a.value),
                            n = rQ(t, e, r);
                        void 0 !== n && a.onValueChange(n.value)
                    }), b = e => {
                        s || (a.onOpenChange(!0), y()), e && (a.triggerPointerDownPosRef.current = {
                            x: Math.round(e.pageX),
                            y: Math.round(e.pageY)
                        })
                    };
                    return (0, v.jsx)(e4, {
                        asChild: !0,
                        ...i,
                        children: (0, v.jsx)(m.sG.button, {
                            type: "button",
                            role: "combobox",
                            "aria-controls": a.contentId,
                            "aria-expanded": a.open,
                            "aria-required": a.required,
                            "aria-autocomplete": "none",
                            dir: a.dir,
                            "data-state": a.open ? "open" : "closed",
                            disabled: s,
                            "data-disabled": s ? "" : void 0,
                            "data-placeholder": rY(a.value) ? "" : void 0,
                            ...o,
                            ref: c,
                            onClick: (0, u.m)(o.onClick, e => {
                                e.currentTarget.focus(), "mouse" !== p.current && b(e)
                            }),
                            onPointerDown: (0, u.m)(o.onPointerDown, e => {
                                p.current = e.pointerType;
                                let t = e.target;
                                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (b(e), e.preventDefault())
                            }),
                            onKeyDown: (0, u.m)(o.onKeyDown, e => {
                                let t = "" !== h.current;
                                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || g(e.key), (!t || " " !== e.key) && t4.includes(e.key) && (b(), e.preventDefault())
                            })
                        })
                    })
                });
            rp.displayName = rf;
            var rm = "SelectValue",
                rh = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        className: n,
                        style: o,
                        children: i,
                        placeholder: l = "",
                        ...a
                    } = e, s = rs(rm, r), {
                        onValueNodeHasChildrenChange: u
                    } = s, c = void 0 !== i, f = (0, d.s)(t, s.onValueNodeChange);
                    return (0, eQ.N)(() => {
                        u(c)
                    }, [u, c]), (0, v.jsx)(m.sG.span, { ...a,
                        ref: f,
                        style: {
                            pointerEvents: "none"
                        },
                        children: rY(s.value) ? (0, v.jsx)(v.Fragment, {
                            children: l
                        }) : i
                    })
                });
            rh.displayName = rm;
            var rv = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    children: n,
                    ...o
                } = e;
                return (0, v.jsx)(m.sG.span, {
                    "aria-hidden": !0,
                    ...o,
                    ref: t,
                    children: n || "▼"
                })
            });
            rv.displayName = "SelectIcon";
            var rg = e => (0, v.jsx)(tu, {
                asChild: !0,
                ...e
            });
            rg.displayName = "SelectPortal";
            var ry = "SelectContent",
                rb = l.forwardRef((e, t) => {
                    let r = rs(ry, e.__scopeSelect),
                        [n, o] = l.useState();
                    return ((0, eQ.N)(() => {
                        o(new DocumentFragment)
                    }, []), r.open) ? (0, v.jsx)(rS, { ...e,
                        ref: t
                    }) : n ? a.createPortal((0, v.jsx)(rw, {
                        scope: e.__scopeSelect,
                        children: (0, v.jsx)(rt.Slot, {
                            scope: e.__scopeSelect,
                            children: (0, v.jsx)("div", {
                                children: e.children
                            })
                        })
                    }), n) : null
                });
            rb.displayName = ry;
            var [rw, rx] = ro(ry), rS = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    position: n = "item-aligned",
                    onCloseAutoFocus: o,
                    onEscapeKeyDown: i,
                    onPointerDownOutside: a,
                    side: s,
                    sideOffset: c,
                    align: f,
                    alignOffset: p,
                    arrowPadding: m,
                    collisionBoundary: h,
                    collisionPadding: g,
                    sticky: y,
                    hideWhenDetached: w,
                    avoidCollisions: x,
                    ...C
                } = e, R = rs(ry, r), [_, j] = l.useState(null), [A, P] = l.useState(null), N = (0, d.s)(t, e => j(e)), [O, T] = l.useState(null), [M, L] = l.useState(null), I = rr(r), [z, D] = l.useState(!1), F = l.useRef(!1);
                l.useEffect(() => {
                    if (_) return tx(_)
                }, [_]), l.useEffect(() => {
                    var e, t;
                    let r = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", null != (e = r[0]) ? e : E()), document.body.insertAdjacentElement("beforeend", null != (t = r[1]) ? t : E()), S++, () => {
                        1 === S && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), S--
                    }
                }, []);
                let W = l.useCallback(e => {
                        let [t, ...r] = I().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
                        for (let r of e)
                            if (r === o || (null == r || r.scrollIntoView({
                                    block: "nearest"
                                }), r === t && A && (A.scrollTop = 0), r === n && A && (A.scrollTop = A.scrollHeight), null == r || r.focus(), document.activeElement !== o)) return
                    }, [I, A]),
                    B = l.useCallback(() => W([O, _]), [W, O, _]);
                l.useEffect(() => {
                    z && B()
                }, [z, B]);
                let {
                    onOpenChange: H,
                    triggerPointerDownPosRef: G
                } = R;
                l.useEffect(() => {
                    if (_) {
                        let e = {
                                x: 0,
                                y: 0
                            },
                            t = t => {
                                var r, n, o, i;
                                e = {
                                    x: Math.abs(Math.round(t.pageX) - (null != (o = null == (r = G.current) ? void 0 : r.x) ? o : 0)),
                                    y: Math.abs(Math.round(t.pageY) - (null != (i = null == (n = G.current) ? void 0 : n.y) ? i : 0))
                                }
                            },
                            r = r => {
                                e.x <= 10 && e.y <= 10 ? r.preventDefault() : _.contains(r.target) || H(!1), document.removeEventListener("pointermove", t), G.current = null
                            };
                        return null !== G.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                            capture: !0,
                            once: !0
                        })), () => {
                            document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                                capture: !0
                            })
                        }
                    }
                }, [_, H, G]), l.useEffect(() => {
                    let e = () => H(!1);
                    return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                        window.removeEventListener("blur", e), window.removeEventListener("resize", e)
                    }
                }, [H]);
                let [U, V] = rJ(e => {
                    let t = I().filter(e => !e.disabled),
                        r = t.find(e => e.ref.current === document.activeElement),
                        n = rQ(t, e, r);
                    n && setTimeout(() => n.ref.current.focus())
                }), q = l.useCallback((e, t, r) => {
                    let n = !F.current && !r;
                    (void 0 !== R.value && R.value === t || n) && (T(e), n && (F.current = !0))
                }, [R.value]), K = l.useCallback(() => null == _ ? void 0 : _.focus(), [_]), X = l.useCallback((e, t, r) => {
                    let n = !F.current && !r;
                    (void 0 !== R.value && R.value === t || n) && L(e)
                }, [R.value]), $ = "popper" === n ? rC : rE, Y = $ === rC ? {
                    side: s,
                    sideOffset: c,
                    align: f,
                    alignOffset: p,
                    arrowPadding: m,
                    collisionBoundary: h,
                    collisionPadding: g,
                    sticky: y,
                    hideWhenDetached: w,
                    avoidCollisions: x
                } : {};
                return (0, v.jsx)(rw, {
                    scope: r,
                    content: _,
                    viewport: A,
                    onViewportChange: P,
                    itemRefCallback: q,
                    selectedItem: O,
                    onItemLeave: K,
                    itemTextRefCallback: X,
                    focusSelectedItem: B,
                    selectedItemText: M,
                    position: n,
                    isPositioned: z,
                    searchRef: U,
                    children: (0, v.jsx)(t9, {
                        as: tc.DX,
                        allowPinchZoom: !0,
                        children: (0, v.jsx)(k, {
                            asChild: !0,
                            trapped: R.open,
                            onMountAutoFocus: e => {
                                e.preventDefault()
                            },
                            onUnmountAutoFocus: (0, u.m)(o, e => {
                                var t;
                                null == (t = R.trigger) || t.focus({
                                    preventScroll: !0
                                }), e.preventDefault()
                            }),
                            children: (0, v.jsx)(b, {
                                asChild: !0,
                                disableOutsidePointerEvents: !0,
                                onEscapeKeyDown: i,
                                onPointerDownOutside: a,
                                onFocusOutside: e => e.preventDefault(),
                                onDismiss: () => R.onOpenChange(!1),
                                children: (0, v.jsx)($, {
                                    role: "listbox",
                                    id: R.contentId,
                                    "data-state": R.open ? "open" : "closed",
                                    dir: R.dir,
                                    onContextMenu: e => e.preventDefault(),
                                    ...C,
                                    ...Y,
                                    onPlaced: () => D(!0),
                                    ref: N,
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        outline: "none",
                                        ...C.style
                                    },
                                    onKeyDown: (0, u.m)(C.onKeyDown, e => {
                                        let t = e.ctrlKey || e.altKey || e.metaKey;
                                        if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || V(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                            let t = I().filter(e => !e.disabled).map(e => e.ref.current);
                                            if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                                let r = e.target,
                                                    n = t.indexOf(r);
                                                t = t.slice(n + 1)
                                            }
                                            setTimeout(() => W(t)), e.preventDefault()
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            });
            rS.displayName = "SelectContentImpl";
            var rE = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    onPlaced: n,
                    ...o
                } = e, i = rs(ry, r), a = rx(ry, r), [u, c] = l.useState(null), [f, p] = l.useState(null), h = (0, d.s)(t, e => p(e)), g = rr(r), y = l.useRef(!1), b = l.useRef(!0), {
                    viewport: w,
                    selectedItem: x,
                    selectedItemText: S,
                    focusSelectedItem: E
                } = a, C = l.useCallback(() => {
                    if (i.trigger && i.valueNode && u && f && w && x && S) {
                        let e = i.trigger.getBoundingClientRect(),
                            t = f.getBoundingClientRect(),
                            r = i.valueNode.getBoundingClientRect(),
                            o = S.getBoundingClientRect();
                        if ("rtl" !== i.dir) {
                            let n = o.left - t.left,
                                i = r.left - n,
                                l = e.left - i,
                                a = e.width + l,
                                c = Math.max(a, t.width),
                                d = s(i, [10, Math.max(10, window.innerWidth - 10 - c)]);
                            u.style.minWidth = a + "px", u.style.left = d + "px"
                        } else {
                            let n = t.right - o.right,
                                i = window.innerWidth - r.right - n,
                                l = window.innerWidth - e.right - i,
                                a = e.width + l,
                                c = Math.max(a, t.width),
                                d = s(i, [10, Math.max(10, window.innerWidth - 10 - c)]);
                            u.style.minWidth = a + "px", u.style.right = d + "px"
                        }
                        let l = g(),
                            a = window.innerHeight - 20,
                            c = w.scrollHeight,
                            d = window.getComputedStyle(f),
                            p = parseInt(d.borderTopWidth, 10),
                            m = parseInt(d.paddingTop, 10),
                            h = parseInt(d.borderBottomWidth, 10),
                            v = p + m + c + parseInt(d.paddingBottom, 10) + h,
                            b = Math.min(5 * x.offsetHeight, v),
                            E = window.getComputedStyle(w),
                            C = parseInt(E.paddingTop, 10),
                            R = parseInt(E.paddingBottom, 10),
                            _ = e.top + e.height / 2 - 10,
                            k = x.offsetHeight / 2,
                            j = p + m + (x.offsetTop + k);
                        if (j <= _) {
                            let e = l.length > 0 && x === l[l.length - 1].ref.current;
                            u.style.bottom = "0px";
                            let t = Math.max(a - _, k + (e ? R : 0) + (f.clientHeight - w.offsetTop - w.offsetHeight) + h);
                            u.style.height = j + t + "px"
                        } else {
                            let e = l.length > 0 && x === l[0].ref.current;
                            u.style.top = "0px";
                            let t = Math.max(_, p + w.offsetTop + (e ? C : 0) + k);
                            u.style.height = t + (v - j) + "px", w.scrollTop = j - _ + w.offsetTop
                        }
                        u.style.margin = "".concat(10, "px 0"), u.style.minHeight = b + "px", u.style.maxHeight = a + "px", null == n || n(), requestAnimationFrame(() => y.current = !0)
                    }
                }, [g, i.trigger, i.valueNode, u, f, w, x, S, i.dir, n]);
                (0, eQ.N)(() => C(), [C]);
                let [R, _] = l.useState();
                (0, eQ.N)(() => {
                    f && _(window.getComputedStyle(f).zIndex)
                }, [f]);
                let k = l.useCallback(e => {
                    e && !0 === b.current && (C(), null == E || E(), b.current = !1)
                }, [C, E]);
                return (0, v.jsx)(rR, {
                    scope: r,
                    contentWrapper: u,
                    shouldExpandOnScrollRef: y,
                    onScrollButtonChange: k,
                    children: (0, v.jsx)("div", {
                        ref: c,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "fixed",
                            zIndex: R
                        },
                        children: (0, v.jsx)(m.sG.div, { ...o,
                            ref: h,
                            style: {
                                boxSizing: "border-box",
                                maxHeight: "100%",
                                ...o.style
                            }
                        })
                    })
                })
            });
            rE.displayName = "SelectItemAlignedPosition";
            var rC = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    align: n = "start",
                    collisionPadding: o = 10,
                    ...i
                } = e, l = rl(r);
                return (0, v.jsx)(tr, { ...l,
                    ...i,
                    ref: t,
                    align: n,
                    collisionPadding: o,
                    style: {
                        boxSizing: "border-box",
                        ...i.style,
                        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            });
            rC.displayName = "SelectPopperPosition";
            var [rR, r_] = ro(ry, {}), rk = "SelectViewport", rj = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    nonce: n,
                    ...o
                } = e, i = rx(rk, r), a = r_(rk, r), s = (0, d.s)(t, i.onViewportChange), c = l.useRef(0);
                return (0, v.jsxs)(v.Fragment, {
                    children: [(0, v.jsx)("style", {
                        dangerouslySetInnerHTML: {
                            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                        },
                        nonce: n
                    }), (0, v.jsx)(rt.Slot, {
                        scope: r,
                        children: (0, v.jsx)(m.sG.div, {
                            "data-radix-select-viewport": "",
                            role: "presentation",
                            ...o,
                            ref: s,
                            style: {
                                position: "relative",
                                flex: 1,
                                overflow: "hidden auto",
                                ...o.style
                            },
                            onScroll: (0, u.m)(o.onScroll, e => {
                                let t = e.currentTarget,
                                    {
                                        contentWrapper: r,
                                        shouldExpandOnScrollRef: n
                                    } = a;
                                if ((null == n ? void 0 : n.current) && r) {
                                    let e = Math.abs(c.current - t.scrollTop);
                                    if (e > 0) {
                                        let n = window.innerHeight - 20,
                                            o = Math.max(parseFloat(r.style.minHeight), parseFloat(r.style.height));
                                        if (o < n) {
                                            let i = o + e,
                                                l = Math.min(n, i),
                                                a = i - l;
                                            r.style.height = l + "px", "0px" === r.style.bottom && (t.scrollTop = a > 0 ? a : 0, r.style.justifyContent = "flex-end")
                                        }
                                    }
                                }
                                c.current = t.scrollTop
                            })
                        })
                    })]
                })
            });
            rj.displayName = rk;
            var rA = "SelectGroup",
                [rP, rN] = ro(rA),
                rO = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        ...n
                    } = e, o = (0, T.B)();
                    return (0, v.jsx)(rP, {
                        scope: r,
                        id: o,
                        children: (0, v.jsx)(m.sG.div, {
                            role: "group",
                            "aria-labelledby": o,
                            ...n,
                            ref: t
                        })
                    })
                });
            rO.displayName = rA;
            var rT = "SelectLabel",
                rM = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        ...n
                    } = e, o = rN(rT, r);
                    return (0, v.jsx)(m.sG.div, {
                        id: o.id,
                        ...n,
                        ref: t
                    })
                });
            rM.displayName = rT;
            var rL = "SelectItem",
                [rI, rz] = ro(rL),
                rD = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        value: n,
                        disabled: o = !1,
                        textValue: i,
                        ...a
                    } = e, s = rs(rL, r), c = rx(rL, r), f = s.value === n, [p, h] = l.useState(null != i ? i : ""), [g, y] = l.useState(!1), b = (0, d.s)(t, e => {
                        var t;
                        return null == (t = c.itemRefCallback) ? void 0 : t.call(c, e, n, o)
                    }), w = (0, T.B)(), x = l.useRef("touch"), S = () => {
                        o || (s.onValueChange(n), s.onOpenChange(!1))
                    };
                    if ("" === n) throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
                    return (0, v.jsx)(rI, {
                        scope: r,
                        value: n,
                        disabled: o,
                        textId: w,
                        isSelected: f,
                        onItemTextChange: l.useCallback(e => {
                            h(t => {
                                var r;
                                return t || (null != (r = null == e ? void 0 : e.textContent) ? r : "").trim()
                            })
                        }, []),
                        children: (0, v.jsx)(rt.ItemSlot, {
                            scope: r,
                            value: n,
                            disabled: o,
                            textValue: p,
                            children: (0, v.jsx)(m.sG.div, {
                                role: "option",
                                "aria-labelledby": w,
                                "data-highlighted": g ? "" : void 0,
                                "aria-selected": f && g,
                                "data-state": f ? "checked" : "unchecked",
                                "aria-disabled": o || void 0,
                                "data-disabled": o ? "" : void 0,
                                tabIndex: o ? void 0 : -1,
                                ...a,
                                ref: b,
                                onFocus: (0, u.m)(a.onFocus, () => y(!0)),
                                onBlur: (0, u.m)(a.onBlur, () => y(!1)),
                                onClick: (0, u.m)(a.onClick, () => {
                                    "mouse" !== x.current && S()
                                }),
                                onPointerUp: (0, u.m)(a.onPointerUp, () => {
                                    "mouse" === x.current && S()
                                }),
                                onPointerDown: (0, u.m)(a.onPointerDown, e => {
                                    x.current = e.pointerType
                                }),
                                onPointerMove: (0, u.m)(a.onPointerMove, e => {
                                    if (x.current = e.pointerType, o) {
                                        var t;
                                        null == (t = c.onItemLeave) || t.call(c)
                                    } else "mouse" === x.current && e.currentTarget.focus({
                                        preventScroll: !0
                                    })
                                }),
                                onPointerLeave: (0, u.m)(a.onPointerLeave, e => {
                                    if (e.currentTarget === document.activeElement) {
                                        var t;
                                        null == (t = c.onItemLeave) || t.call(c)
                                    }
                                }),
                                onKeyDown: (0, u.m)(a.onKeyDown, e => {
                                    var t;
                                    ((null == (t = c.searchRef) ? void 0 : t.current) === "" || " " !== e.key) && (t7.includes(e.key) && S(), " " === e.key && e.preventDefault())
                                })
                            })
                        })
                    })
                });
            rD.displayName = rL;
            var rF = "SelectItemText",
                rW = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        className: n,
                        style: o,
                        ...i
                    } = e, s = rs(rF, r), u = rx(rF, r), c = rz(rF, r), f = rc(rF, r), [p, h] = l.useState(null), g = (0, d.s)(t, e => h(e), c.onItemTextChange, e => {
                        var t;
                        return null == (t = u.itemTextRefCallback) ? void 0 : t.call(u, e, c.value, c.disabled)
                    }), y = null == p ? void 0 : p.textContent, b = l.useMemo(() => (0, v.jsx)("option", {
                        value: c.value,
                        disabled: c.disabled,
                        children: y
                    }, c.value), [c.disabled, c.value, y]), {
                        onNativeOptionAdd: w,
                        onNativeOptionRemove: x
                    } = f;
                    return (0, eQ.N)(() => (w(b), () => x(b)), [w, x, b]), (0, v.jsxs)(v.Fragment, {
                        children: [(0, v.jsx)(m.sG.span, {
                            id: c.textId,
                            ...i,
                            ref: g
                        }), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? a.createPortal(i.children, s.valueNode) : null]
                    })
                });
            rW.displayName = rF;
            var rB = "SelectItemIndicator",
                rH = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        ...n
                    } = e;
                    return rz(rB, r).isSelected ? (0, v.jsx)(m.sG.span, {
                        "aria-hidden": !0,
                        ...n,
                        ref: t
                    }) : null
                });
            rH.displayName = rB;
            var rG = "SelectScrollUpButton",
                rU = l.forwardRef((e, t) => {
                    let r = rx(rG, e.__scopeSelect),
                        n = r_(rG, e.__scopeSelect),
                        [o, i] = l.useState(!1),
                        a = (0, d.s)(t, n.onScrollButtonChange);
                    return (0, eQ.N)(() => {
                        if (r.viewport && r.isPositioned) {
                            let e = function() {
                                    i(t.scrollTop > 0)
                                },
                                t = r.viewport;
                            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [r.viewport, r.isPositioned]), o ? (0, v.jsx)(rK, { ...e,
                        ref: a,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = r;
                            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                        }
                    }) : null
                });
            rU.displayName = rG;
            var rV = "SelectScrollDownButton",
                rq = l.forwardRef((e, t) => {
                    let r = rx(rV, e.__scopeSelect),
                        n = r_(rV, e.__scopeSelect),
                        [o, i] = l.useState(!1),
                        a = (0, d.s)(t, n.onScrollButtonChange);
                    return (0, eQ.N)(() => {
                        if (r.viewport && r.isPositioned) {
                            let e = function() {
                                    let e = t.scrollHeight - t.clientHeight;
                                    i(Math.ceil(t.scrollTop) < e)
                                },
                                t = r.viewport;
                            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [r.viewport, r.isPositioned]), o ? (0, v.jsx)(rK, { ...e,
                        ref: a,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = r;
                            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                        }
                    }) : null
                });
            rq.displayName = rV;
            var rK = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        onAutoScroll: n,
                        ...o
                    } = e, i = rx("SelectScrollButton", r), a = l.useRef(null), s = rr(r), c = l.useCallback(() => {
                        null !== a.current && (window.clearInterval(a.current), a.current = null)
                    }, []);
                    return l.useEffect(() => () => c(), [c]), (0, eQ.N)(() => {
                        var e;
                        let t = s().find(e => e.ref.current === document.activeElement);
                        null == t || null == (e = t.ref.current) || e.scrollIntoView({
                            block: "nearest"
                        })
                    }, [s]), (0, v.jsx)(m.sG.div, {
                        "aria-hidden": !0,
                        ...o,
                        ref: t,
                        style: {
                            flexShrink: 0,
                            ...o.style
                        },
                        onPointerDown: (0, u.m)(o.onPointerDown, () => {
                            null === a.current && (a.current = window.setInterval(n, 50))
                        }),
                        onPointerMove: (0, u.m)(o.onPointerMove, () => {
                            var e;
                            null == (e = i.onItemLeave) || e.call(i), null === a.current && (a.current = window.setInterval(n, 50))
                        }),
                        onPointerLeave: (0, u.m)(o.onPointerLeave, () => {
                            c()
                        })
                    })
                }),
                rX = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        ...n
                    } = e;
                    return (0, v.jsx)(m.sG.div, {
                        "aria-hidden": !0,
                        ...n,
                        ref: t
                    })
                });
            rX.displayName = "SelectSeparator";
            var r$ = "SelectArrow";

            function rY(e) {
                return "" === e || void 0 === e
            }
            l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e, o = rl(r), i = rs(r$, r), l = rx(r$, r);
                return i.open && "popper" === l.position ? (0, v.jsx)(ti, { ...o,
                    ...n,
                    ref: t
                }) : null
            }).displayName = r$;
            var rZ = l.forwardRef((e, t) => {
                let {
                    value: r,
                    ...n
                } = e, o = l.useRef(null), i = (0, d.s)(t, o), a = (0, tf.Z)(r);
                return l.useEffect(() => {
                    let e = o.current,
                        t = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set;
                    if (a !== r && t) {
                        let n = new Event("change", {
                            bubbles: !0
                        });
                        t.call(e, r), e.dispatchEvent(n)
                    }
                }, [a, r]), (0, v.jsx)(tp, {
                    asChild: !0,
                    children: (0, v.jsx)("select", { ...n,
                        ref: i,
                        defaultValue: r
                    })
                })
            });

            function rJ(e) {
                let t = (0, h.c)(e),
                    r = l.useRef(""),
                    n = l.useRef(0),
                    o = l.useCallback(e => {
                        let o = r.current + e;
                        t(o),
                            function e(t) {
                                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
                            }(o)
                    }, [t]),
                    i = l.useCallback(() => {
                        r.current = "", window.clearTimeout(n.current)
                    }, []);
                return l.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, i]
            }

            function rQ(e, t, r) {
                var n, o;
                let i = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                    l = r ? e.indexOf(r) : -1,
                    a = (n = e, o = Math.max(l, 0), n.map((e, t) => n[(o + t) % n.length]));
                1 === i.length && (a = a.filter(e => e !== r));
                let s = a.find(e => e.textValue.toLowerCase().startsWith(i.toLowerCase()));
                return s !== r ? s : void 0
            }
            rZ.displayName = "BubbleSelect";
            var r0 = rd,
                r1 = rp,
                r2 = rh,
                r5 = rv,
                r3 = rg,
                r6 = rb,
                r8 = rj,
                r9 = rO,
                r4 = rM,
                r7 = rD,
                ne = rW,
                nt = rH,
                nr = rU,
                nn = rq,
                no = rX
        },
        2085: (e, t, r) => {
            "use strict";
            r.d(t, {
                F: () => l
            });
            var n = r(2596);
            let o = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
                i = n.$,
                l = (e, t) => r => {
                    var n;
                    if ((null == t ? void 0 : t.variants) == null) return i(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
                    let {
                        variants: l,
                        defaultVariants: a
                    } = t, s = Object.keys(l).map(e => {
                        let t = null == r ? void 0 : r[e],
                            n = null == a ? void 0 : a[e];
                        if (null === t) return null;
                        let i = o(t) || o(n);
                        return l[e][i]
                    }), u = r && Object.entries(r).reduce((e, t) => {
                        let [r, n] = t;
                        return void 0 === n || (e[r] = n), e
                    }, {});
                    return i(e, s, null == t || null == (n = t.compoundVariants) ? void 0 : n.reduce((e, t) => {
                        let {
                            class: r,
                            className: n,
                            ...o
                        } = t;
                        return Object.entries(o).every(e => {
                            let [t, r] = e;
                            return Array.isArray(r) ? r.includes({ ...a,
                                ...u
                            }[t]) : ({ ...a,
                                ...u
                            })[t] === r
                        }) ? [...e, r, n] : e
                    }, []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
                }
        },
        2269: (e, t, r) => {
            "use strict";
            var n = r(9509);
            r(8375);
            var o = r(2115),
                i = function(e) {
                    return e && "object" == typeof e && "default" in e ? e : {
                        default: e
                    }
                }(o),
                l = void 0 !== n && n.env && !0,
                a = function(e) {
                    return "[object String]" === Object.prototype.toString.call(e)
                },
                s = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            r = t.name,
                            n = void 0 === r ? "stylesheet" : r,
                            o = t.optimizeForSpeed,
                            i = void 0 === o ? l : o;
                        u(a(n), "`name` must be a string"), this._name = n, this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}", u("boolean" == typeof i, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = i, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                        var s = "undefined" != typeof window && document.querySelector('meta[property="csp-nonce"]');
                        this._nonce = s ? s.getAttribute("content") : null
                    }
                    var t, r = e.prototype;
                    return r.setOptimizeForSpeed = function(e) {
                            u("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), u(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                        }, r.isOptimizeForSpeed = function() {
                            return this._optimizeForSpeed
                        }, r.inject = function() {
                            var e = this;
                            if (u(!this._injected, "sheet already injected"), this._injected = !0, "undefined" != typeof window && this._optimizeForSpeed) {
                                this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (l || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                                return
                            }
                            this._serverSheet = {
                                cssRules: [],
                                insertRule: function(t, r) {
                                    return "number" == typeof r ? e._serverSheet.cssRules[r] = {
                                        cssText: t
                                    } : e._serverSheet.cssRules.push({
                                        cssText: t
                                    }), r
                                },
                                deleteRule: function(t) {
                                    e._serverSheet.cssRules[t] = null
                                }
                            }
                        }, r.getSheetForTag = function(e) {
                            if (e.sheet) return e.sheet;
                            for (var t = 0; t < document.styleSheets.length; t++)
                                if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                        }, r.getSheet = function() {
                            return this.getSheetForTag(this._tags[this._tags.length - 1])
                        }, r.insertRule = function(e, t) {
                            if (u(a(e), "`insertRule` accepts only strings"), "undefined" == typeof window) return "number" != typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                            if (this._optimizeForSpeed) {
                                var r = this.getSheet();
                                "number" != typeof t && (t = r.cssRules.length);
                                try {
                                    r.insertRule(e, t)
                                } catch (t) {
                                    return l || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                                }
                            } else {
                                var n = this._tags[t];
                                this._tags.push(this.makeStyleTag(this._name, e, n))
                            }
                            return this._rulesCount++
                        }, r.replaceRule = function(e, t) {
                            if (this._optimizeForSpeed || "undefined" == typeof window) {
                                var r = "undefined" != typeof window ? this.getSheet() : this._serverSheet;
                                if (t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e]) return e;
                                r.deleteRule(e);
                                try {
                                    r.insertRule(t, e)
                                } catch (n) {
                                    l || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), r.insertRule(this._deletedRulePlaceholder, e)
                                }
                            } else {
                                var n = this._tags[e];
                                u(n, "old rule at index `" + e + "` not found"), n.textContent = t
                            }
                            return e
                        }, r.deleteRule = function(e) {
                            if ("undefined" == typeof window) return void this._serverSheet.deleteRule(e);
                            if (this._optimizeForSpeed) this.replaceRule(e, "");
                            else {
                                var t = this._tags[e];
                                u(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                            }
                        }, r.flush = function() {
                            this._injected = !1, this._rulesCount = 0, "undefined" != typeof window ? (this._tags.forEach(function(e) {
                                return e && e.parentNode.removeChild(e)
                            }), this._tags = []) : this._serverSheet.cssRules = []
                        }, r.cssRules = function() {
                            var e = this;
                            return "undefined" == typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(t, r) {
                                return r ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules, function(t) {
                                    return t.cssText === e._deletedRulePlaceholder ? null : t
                                })) : t.push(null), t
                            }, [])
                        }, r.makeStyleTag = function(e, t, r) {
                            t && u(a(t), "makeStyleTag accepts only strings as second parameter");
                            var n = document.createElement("style");
                            this._nonce && n.setAttribute("nonce", this._nonce), n.type = "text/css", n.setAttribute("data-" + e, ""), t && n.appendChild(document.createTextNode(t));
                            var o = document.head || document.getElementsByTagName("head")[0];
                            return r ? o.insertBefore(n, r) : o.appendChild(n), n
                        }, t = [{
                            key: "length",
                            get: function() {
                                return this._rulesCount
                            }
                        }],
                        function(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                            }
                        }(e.prototype, t), e
                }();

            function u(e, t) {
                if (!e) throw Error("StyleSheet: " + t + ".")
            }
            var c = function(e) {
                    for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
                    return t >>> 0
                },
                d = {};

            function f(e, t) {
                if (!t) return "jsx-" + e;
                var r = String(t),
                    n = e + r;
                return d[n] || (d[n] = "jsx-" + c(e + "-" + r)), d[n]
            }

            function p(e, t) {
                "undefined" == typeof window && (t = t.replace(/\/style/gi, "\\/style"));
                var r = e + t;
                return d[r] || (d[r] = t.replace(/__jsx-style-dynamic-selector/g, e)), d[r]
            }
            var m = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            r = t.styleSheet,
                            n = void 0 === r ? null : r,
                            o = t.optimizeForSpeed,
                            i = void 0 !== o && o;
                        this._sheet = n || new s({
                            name: "styled-jsx",
                            optimizeForSpeed: i
                        }), this._sheet.inject(), n && "boolean" == typeof i && (this._sheet.setOptimizeForSpeed(i), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }
                    var t = e.prototype;
                    return t.add = function(e) {
                        var t = this;
                        void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), "undefined" == typeof window || this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                            return e[t] = 0, e
                        }, {}));
                        var r = this.getIdAndRules(e),
                            n = r.styleId,
                            o = r.rules;
                        if (n in this._instancesCounts) {
                            this._instancesCounts[n] += 1;
                            return
                        }
                        var i = o.map(function(e) {
                            return t._sheet.insertRule(e)
                        }).filter(function(e) {
                            return -1 !== e
                        });
                        this._indices[n] = i, this._instancesCounts[n] = 1
                    }, t.remove = function(e) {
                        var t = this,
                            r = this.getIdAndRules(e).styleId;
                        if (function(e, t) {
                                if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                            }(r in this._instancesCounts, "styleId: `" + r + "` not found"), this._instancesCounts[r] -= 1, this._instancesCounts[r] < 1) {
                            var n = this._fromServer && this._fromServer[r];
                            n ? (n.parentNode.removeChild(n), delete this._fromServer[r]) : (this._indices[r].forEach(function(e) {
                                return t._sheet.deleteRule(e)
                            }), delete this._indices[r]), delete this._instancesCounts[r]
                        }
                    }, t.update = function(e, t) {
                        this.add(t), this.remove(e)
                    }, t.flush = function() {
                        this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }, t.cssRules = function() {
                        var e = this,
                            t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                                return [t, e._fromServer[t]]
                            }) : [],
                            r = this._sheet.cssRules();
                        return t.concat(Object.keys(this._indices).map(function(t) {
                            return [t, e._indices[t].map(function(e) {
                                return r[e].cssText
                            }).join(e._optimizeForSpeed ? "" : "\n")]
                        }).filter(function(e) {
                            return !!e[1]
                        }))
                    }, t.styles = function(e) {
                        var t, r;
                        return t = this.cssRules(), void 0 === (r = e) && (r = {}), t.map(function(e) {
                            var t = e[0],
                                n = e[1];
                            return i.default.createElement("style", {
                                id: "__" + t,
                                key: "__" + t,
                                nonce: r.nonce ? r.nonce : void 0,
                                dangerouslySetInnerHTML: {
                                    __html: n
                                }
                            })
                        })
                    }, t.getIdAndRules = function(e) {
                        var t = e.children,
                            r = e.dynamic,
                            n = e.id;
                        if (r) {
                            var o = f(n, r);
                            return {
                                styleId: o,
                                rules: Array.isArray(t) ? t.map(function(e) {
                                    return p(o, e)
                                }) : [p(o, t)]
                            }
                        }
                        return {
                            styleId: f(n),
                            rules: Array.isArray(t) ? t : [t]
                        }
                    }, t.selectFromServer = function() {
                        return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                            return e[t.id.slice(2)] = t, e
                        }, {})
                    }, e
                }(),
                h = o.createContext(null);
            h.displayName = "StyleSheetContext";
            var v = i.default.useInsertionEffect || i.default.useLayoutEffect,
                g = "undefined" != typeof window ? new m : void 0;

            function y(e) {
                var t = g || o.useContext(h);
                return t && ("undefined" == typeof window ? t.add(e) : v(function() {
                    return t.add(e),
                        function() {
                            t.remove(e)
                        }
                }, [e.id, String(e.dynamic)])), null
            }
            y.dynamic = function(e) {
                return e.map(function(e) {
                    return f(e[0], e[1])
                }).join(" ")
            }, t.style = y
        },
        2284: (e, t, r) => {
            "use strict";
            r.d(t, {
                N: () => s
            });
            var n = r(2115),
                o = r(6081),
                i = r(6101),
                l = r(9708),
                a = r(5155);

            function s(e) {
                let t = e + "CollectionProvider",
                    [r, s] = (0, o.A)(t),
                    [u, c] = r(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    d = e => {
                        let {
                            scope: t,
                            children: r
                        } = e, o = n.useRef(null), i = n.useRef(new Map).current;
                        return (0, a.jsx)(u, {
                            scope: t,
                            itemMap: i,
                            collectionRef: o,
                            children: r
                        })
                    };
                d.displayName = t;
                let f = e + "CollectionSlot",
                    p = n.forwardRef((e, t) => {
                        let {
                            scope: r,
                            children: n
                        } = e, o = c(f, r), s = (0, i.s)(t, o.collectionRef);
                        return (0, a.jsx)(l.DX, {
                            ref: s,
                            children: n
                        })
                    });
                p.displayName = f;
                let m = e + "CollectionItemSlot",
                    h = "data-radix-collection-item",
                    v = n.forwardRef((e, t) => {
                        let {
                            scope: r,
                            children: o,
                            ...s
                        } = e, u = n.useRef(null), d = (0, i.s)(t, u), f = c(m, r);
                        return n.useEffect(() => (f.itemMap.set(u, {
                            ref: u,
                            ...s
                        }), () => void f.itemMap.delete(u))), (0, a.jsx)(l.DX, { ...{
                                [h]: ""
                            },
                            ref: d,
                            children: o
                        })
                    });
                return v.displayName = m, [{
                    Provider: d,
                    Slot: p,
                    ItemSlot: v
                }, function(t) {
                    let r = c(e + "CollectionConsumer", t);
                    return n.useCallback(() => {
                        let e = r.collectionRef.current;
                        if (!e) return [];
                        let t = Array.from(e.querySelectorAll("[".concat(h, "]")));
                        return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
                    }, [r.collectionRef, r.itemMap])
                }, s]
            }
        },
        2464: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = r(8229)._(r(2115)).default.createContext({})
        },
        2596: (e, t, r) => {
            "use strict";

            function n() {
                for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)(e = arguments[r]) && (t = function e(t) {
                    var r, n, o = "";
                    if ("string" == typeof t || "number" == typeof t) o += t;
                    else if ("object" == typeof t)
                        if (Array.isArray(t)) {
                            var i = t.length;
                            for (r = 0; r < i; r++) t[r] && (n = e(t[r])) && (o && (o += " "), o += n)
                        } else
                            for (n in t) t[n] && (o && (o += " "), o += n);
                    return o
                }(e)) && (n && (n += " "), n += t);
                return n
            }
            r.d(t, {
                $: () => n
            })
        },
        2712: (e, t, r) => {
            "use strict";
            r.d(t, {
                N: () => o
            });
            var n = r(2115),
                o = globalThis ? .document ? n.useLayoutEffect : () => {}
        },
        3063: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Image", {
                enumerable: !0,
                get: function() {
                    return w
                }
            });
            let n = r(8229),
                o = r(6966),
                i = r(5155),
                l = o._(r(2115)),
                a = n._(r(7650)),
                s = n._(r(5564)),
                u = r(8883),
                c = r(5840),
                d = r(6752);
            r(3230);
            let f = r(901),
                p = n._(r(1193)),
                m = r(6654),
                h = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function v(e, t, r, n, o, i, l) {
                let a = null == e ? void 0 : e.src;
                e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && o(!0), null == r ? void 0 : r.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let n = !1,
                                o = !1;
                            r.current({ ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => o,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    o = !0, t.stopPropagation()
                                }
                            })
                        }(null == n ? void 0 : n.current) && n.current(e)
                    }
                }))
            }

            function g(e) {
                return l.use ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            let y = (0, l.forwardRef)((e, t) => {
                let {
                    src: r,
                    srcSet: n,
                    sizes: o,
                    height: a,
                    width: s,
                    decoding: u,
                    className: c,
                    style: d,
                    fetchPriority: f,
                    placeholder: p,
                    loading: h,
                    unoptimized: y,
                    fill: b,
                    onLoadRef: w,
                    onLoadingCompleteRef: x,
                    setBlurComplete: S,
                    setShowAltText: E,
                    sizesInput: C,
                    onLoad: R,
                    onError: _,
                    ...k
                } = e, j = (0, l.useCallback)(e => {
                    e && (_ && (e.src = e.src), e.complete && v(e, p, w, x, S, y, C))
                }, [r, p, w, x, S, _, y, C]), A = (0, m.useMergedRef)(t, j);
                return (0, i.jsx)("img", { ...k,
                    ...g(f),
                    loading: h,
                    width: s,
                    height: a,
                    decoding: u,
                    "data-nimg": b ? "fill" : "1",
                    className: c,
                    style: d,
                    sizes: o,
                    srcSet: n,
                    src: r,
                    ref: A,
                    onLoad: e => {
                        v(e.currentTarget, p, w, x, S, y, C)
                    },
                    onError: e => {
                        E(!0), "empty" !== p && S(!0), _ && _(e)
                    }
                })
            });

            function b(e) {
                let {
                    isAppRouter: t,
                    imgAttributes: r
                } = e, n = {
                    as: "image",
                    imageSrcSet: r.srcSet,
                    imageSizes: r.sizes,
                    crossOrigin: r.crossOrigin,
                    referrerPolicy: r.referrerPolicy,
                    ...g(r.fetchPriority)
                };
                return t && a.default.preload ? (a.default.preload(r.src, n), null) : (0, i.jsx)(s.default, {
                    children: (0, i.jsx)("link", {
                        rel: "preload",
                        href: r.srcSet ? void 0 : r.src,
                        ...n
                    }, "__nimg-" + r.src + r.srcSet + r.sizes)
                })
            }
            let w = (0, l.forwardRef)((e, t) => {
                let r = (0, l.useContext)(f.RouterContext),
                    n = (0, l.useContext)(d.ImageConfigContext),
                    o = (0, l.useMemo)(() => {
                        var e;
                        let t = h || n || c.imageConfigDefault,
                            r = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
                            o = t.deviceSizes.sort((e, t) => e - t),
                            i = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
                        return { ...t,
                            allSizes: r,
                            deviceSizes: o,
                            qualities: i
                        }
                    }, [n]),
                    {
                        onLoad: a,
                        onLoadingComplete: s
                    } = e,
                    m = (0, l.useRef)(a);
                (0, l.useEffect)(() => {
                    m.current = a
                }, [a]);
                let v = (0, l.useRef)(s);
                (0, l.useEffect)(() => {
                    v.current = s
                }, [s]);
                let [g, w] = (0, l.useState)(!1), [x, S] = (0, l.useState)(!1), {
                    props: E,
                    meta: C
                } = (0, u.getImgProps)(e, {
                    defaultLoader: p.default,
                    imgConf: o,
                    blurComplete: g,
                    showAltText: x
                });
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(y, { ...E,
                        unoptimized: C.unoptimized,
                        placeholder: C.placeholder,
                        fill: C.fill,
                        onLoadRef: m,
                        onLoadingCompleteRef: v,
                        setBlurComplete: w,
                        setShowAltText: S,
                        sizesInput: e.sizes,
                        ref: t
                    }), C.priority ? (0, i.jsx)(b, {
                        isAppRouter: !r,
                        imgAttributes: E
                    }) : null]
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        3655: (e, t, r) => {
            "use strict";
            r.d(t, {
                hO: () => s,
                sG: () => a
            });
            var n = r(2115),
                o = r(7650),
                i = r(9708),
                l = r(5155),
                a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let r = n.forwardRef((e, r) => {
                        let {
                            asChild: n,
                            ...o
                        } = e, a = n ? i.DX : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(a, { ...o,
                            ref: r
                        })
                    });
                    return r.displayName = `Primitive.${t}`, { ...e,
                        [t]: r
                    }
                }, {});

            function s(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t))
            }
        },
        3926: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(157).A)("ArrowDown", [
                ["path", {
                    d: "M12 5v14",
                    key: "s699le"
                }],
                ["path", {
                    d: "m19 12-7 7-7-7",
                    key: "1idqje"
                }]
            ])
        },
        4315: (e, t, r) => {
            "use strict";
            r.d(t, {
                jH: () => i
            });
            var n = r(2115);
            r(5155);
            var o = n.createContext(void 0);

            function i(e) {
                let t = n.useContext(o);
                return e || t || "ltr"
            }
        },
        4612: (e, t, r) => {
            "use strict";
            r.d(t, {
                C1: () => ei,
                q7: () => eo,
                bL: () => en
            });
            var n = r(2115),
                o = r(5185),
                i = r(6101),
                l = r(6081),
                a = r(3655),
                s = r(2284),
                u = r(1285),
                c = r(9033),
                d = r(5845),
                f = r(4315),
                p = r(5155),
                m = "rovingFocusGroup.onEntryFocus",
                h = {
                    bubbles: !1,
                    cancelable: !0
                },
                v = "RovingFocusGroup",
                [g, y, b] = (0, s.N)(v),
                [w, x] = (0, l.A)(v, [b]),
                [S, E] = w(v),
                C = n.forwardRef((e, t) => (0, p.jsx)(g.Provider, {
                    scope: e.__scopeRovingFocusGroup,
                    children: (0, p.jsx)(g.Slot, {
                        scope: e.__scopeRovingFocusGroup,
                        children: (0, p.jsx)(R, { ...e,
                            ref: t
                        })
                    })
                }));
            C.displayName = v;
            var R = n.forwardRef((e, t) => {
                    let {
                        __scopeRovingFocusGroup: r,
                        orientation: l,
                        loop: s = !1,
                        dir: u,
                        currentTabStopId: v,
                        defaultCurrentTabStopId: g,
                        onCurrentTabStopIdChange: b,
                        onEntryFocus: w,
                        preventScrollOnEntryFocus: x = !1,
                        ...E
                    } = e, C = n.useRef(null), R = (0, i.s)(t, C), _ = (0, f.jH)(u), [k = null, j] = (0, d.i)({
                        prop: v,
                        defaultProp: g,
                        onChange: b
                    }), [P, N] = n.useState(!1), O = (0, c.c)(w), T = y(r), M = n.useRef(!1), [L, I] = n.useState(0);
                    return n.useEffect(() => {
                        let e = C.current;
                        if (e) return e.addEventListener(m, O), () => e.removeEventListener(m, O)
                    }, [O]), (0, p.jsx)(S, {
                        scope: r,
                        orientation: l,
                        dir: _,
                        loop: s,
                        currentTabStopId: k,
                        onItemFocus: n.useCallback(e => j(e), [j]),
                        onItemShiftTab: n.useCallback(() => N(!0), []),
                        onFocusableItemAdd: n.useCallback(() => I(e => e + 1), []),
                        onFocusableItemRemove: n.useCallback(() => I(e => e - 1), []),
                        children: (0, p.jsx)(a.sG.div, {
                            tabIndex: P || 0 === L ? -1 : 0,
                            "data-orientation": l,
                            ...E,
                            ref: R,
                            style: {
                                outline: "none",
                                ...e.style
                            },
                            onMouseDown: (0, o.m)(e.onMouseDown, () => {
                                M.current = !0
                            }),
                            onFocus: (0, o.m)(e.onFocus, e => {
                                let t = !M.current;
                                if (e.target === e.currentTarget && t && !P) {
                                    let t = new CustomEvent(m, h);
                                    if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                                        let e = T().filter(e => e.focusable);
                                        A([e.find(e => e.active), e.find(e => e.id === k), ...e].filter(Boolean).map(e => e.ref.current), x)
                                    }
                                }
                                M.current = !1
                            }),
                            onBlur: (0, o.m)(e.onBlur, () => N(!1))
                        })
                    })
                }),
                _ = "RovingFocusGroupItem",
                k = n.forwardRef((e, t) => {
                    let {
                        __scopeRovingFocusGroup: r,
                        focusable: i = !0,
                        active: l = !1,
                        tabStopId: s,
                        ...c
                    } = e, d = (0, u.B)(), f = s || d, m = E(_, r), h = m.currentTabStopId === f, v = y(r), {
                        onFocusableItemAdd: b,
                        onFocusableItemRemove: w
                    } = m;
                    return n.useEffect(() => {
                        if (i) return b(), () => w()
                    }, [i, b, w]), (0, p.jsx)(g.ItemSlot, {
                        scope: r,
                        id: f,
                        focusable: i,
                        active: l,
                        children: (0, p.jsx)(a.sG.span, {
                            tabIndex: h ? 0 : -1,
                            "data-orientation": m.orientation,
                            ...c,
                            ref: t,
                            onMouseDown: (0, o.m)(e.onMouseDown, e => {
                                i ? m.onItemFocus(f) : e.preventDefault()
                            }),
                            onFocus: (0, o.m)(e.onFocus, () => m.onItemFocus(f)),
                            onKeyDown: (0, o.m)(e.onKeyDown, e => {
                                if ("Tab" === e.key && e.shiftKey) return void m.onItemShiftTab();
                                if (e.target !== e.currentTarget) return;
                                let t = function(e, t, r) {
                                    var n;
                                    let o = (n = e.key, "rtl" !== r ? n : "ArrowLeft" === n ? "ArrowRight" : "ArrowRight" === n ? "ArrowLeft" : n);
                                    if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))) return j[o]
                                }(e, m.orientation, m.dir);
                                if (void 0 !== t) {
                                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                                    e.preventDefault();
                                    let r = v().filter(e => e.focusable).map(e => e.ref.current);
                                    if ("last" === t) r.reverse();
                                    else if ("prev" === t || "next" === t) {
                                        "prev" === t && r.reverse();
                                        let n = r.indexOf(e.currentTarget);
                                        r = m.loop ? function(e, t) {
                                            return e.map((r, n) => e[(t + n) % e.length])
                                        }(r, n + 1) : r.slice(n + 1)
                                    }
                                    setTimeout(() => A(r))
                                }
                            })
                        })
                    })
                });
            k.displayName = _;
            var j = {
                ArrowLeft: "prev",
                ArrowUp: "prev",
                ArrowRight: "next",
                ArrowDown: "next",
                PageUp: "first",
                Home: "first",
                PageDown: "last",
                End: "last"
            };

            function A(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = document.activeElement;
                for (let n of e)
                    if (n === r || (n.focus({
                            preventScroll: t
                        }), document.activeElement !== r)) return
            }
            var P = r(1275),
                N = r(5503),
                O = r(2712),
                T = e => {
                    let {
                        present: t,
                        children: r
                    } = e, o = function(e) {
                        var t, r;
                        let [o, i] = n.useState(), l = n.useRef({}), a = n.useRef(e), s = n.useRef("none"), [u, c] = (t = e ? "mounted" : "unmounted", r = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, n.useReducer((e, t) => {
                            let n = r[e][t];
                            return null != n ? n : e
                        }, t));
                        return n.useEffect(() => {
                            let e = M(l.current);
                            s.current = "mounted" === u ? e : "none"
                        }, [u]), (0, O.N)(() => {
                            let t = l.current,
                                r = a.current;
                            if (r !== e) {
                                let n = s.current,
                                    o = M(t);
                                e ? c("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? c("UNMOUNT") : r && n !== o ? c("ANIMATION_OUT") : c("UNMOUNT"), a.current = e
                            }
                        }, [e, c]), (0, O.N)(() => {
                            if (o) {
                                var e;
                                let t, r = null != (e = o.ownerDocument.defaultView) ? e : window,
                                    n = e => {
                                        let n = M(l.current).includes(e.animationName);
                                        if (e.target === o && n && (c("ANIMATION_END"), !a.current)) {
                                            let e = o.style.animationFillMode;
                                            o.style.animationFillMode = "forwards", t = r.setTimeout(() => {
                                                "forwards" === o.style.animationFillMode && (o.style.animationFillMode = e)
                                            })
                                        }
                                    },
                                    i = e => {
                                        e.target === o && (s.current = M(l.current))
                                    };
                                return o.addEventListener("animationstart", i), o.addEventListener("animationcancel", n), o.addEventListener("animationend", n), () => {
                                    r.clearTimeout(t), o.removeEventListener("animationstart", i), o.removeEventListener("animationcancel", n), o.removeEventListener("animationend", n)
                                }
                            }
                            c("ANIMATION_END")
                        }, [o, c]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(u),
                            ref: n.useCallback(e => {
                                e && (l.current = getComputedStyle(e)), i(e)
                            }, [])
                        }
                    }(t), l = "function" == typeof r ? r({
                        present: o.isPresent
                    }) : n.Children.only(r), a = (0, i.s)(o.ref, function(e) {
                        var t, r;
                        let n = null == (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ? void 0 : t.get,
                            o = n && "isReactWarning" in n && n.isReactWarning;
                        return o ? e.ref : (o = (n = null == (r = Object.getOwnPropertyDescriptor(e, "ref")) ? void 0 : r.get) && "isReactWarning" in n && n.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                    }(l));
                    return "function" == typeof r || o.isPresent ? n.cloneElement(l, {
                        ref: a
                    }) : null
                };

            function M(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            T.displayName = "Presence";
            var L = "Radio",
                [I, z] = (0, l.A)(L),
                [D, F] = I(L),
                W = n.forwardRef((e, t) => {
                    let {
                        __scopeRadio: r,
                        name: l,
                        checked: s = !1,
                        required: u,
                        disabled: c,
                        value: d = "on",
                        onCheck: f,
                        form: m,
                        ...h
                    } = e, [v, g] = n.useState(null), y = (0, i.s)(t, e => g(e)), b = n.useRef(!1), w = !v || m || !!v.closest("form");
                    return (0, p.jsxs)(D, {
                        scope: r,
                        checked: s,
                        disabled: c,
                        children: [(0, p.jsx)(a.sG.button, {
                            type: "button",
                            role: "radio",
                            "aria-checked": s,
                            "data-state": U(s),
                            "data-disabled": c ? "" : void 0,
                            disabled: c,
                            value: d,
                            ...h,
                            ref: y,
                            onClick: (0, o.m)(e.onClick, e => {
                                s || null == f || f(), w && (b.current = e.isPropagationStopped(), b.current || e.stopPropagation())
                            })
                        }), w && (0, p.jsx)(G, {
                            control: v,
                            bubbles: !b.current,
                            name: l,
                            value: d,
                            checked: s,
                            required: u,
                            disabled: c,
                            form: m,
                            style: {
                                transform: "translateX(-100%)"
                            }
                        })]
                    })
                });
            W.displayName = L;
            var B = "RadioIndicator",
                H = n.forwardRef((e, t) => {
                    let {
                        __scopeRadio: r,
                        forceMount: n,
                        ...o
                    } = e, i = F(B, r);
                    return (0, p.jsx)(T, {
                        present: n || i.checked,
                        children: (0, p.jsx)(a.sG.span, {
                            "data-state": U(i.checked),
                            "data-disabled": i.disabled ? "" : void 0,
                            ...o,
                            ref: t
                        })
                    })
                });
            H.displayName = B;
            var G = e => {
                let {
                    control: t,
                    checked: r,
                    bubbles: o = !0,
                    ...i
                } = e, l = n.useRef(null), a = (0, N.Z)(r), s = (0, P.X)(t);
                return n.useEffect(() => {
                    let e = l.current,
                        t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                    if (a !== r && t) {
                        let n = new Event("click", {
                            bubbles: o
                        });
                        t.call(e, r), e.dispatchEvent(n)
                    }
                }, [a, r, o]), (0, p.jsx)("input", {
                    type: "radio",
                    "aria-hidden": !0,
                    defaultChecked: r,
                    ...i,
                    tabIndex: -1,
                    ref: l,
                    style: { ...e.style,
                        ...s,
                        position: "absolute",
                        pointerEvents: "none",
                        opacity: 0,
                        margin: 0
                    }
                })
            };

            function U(e) {
                return e ? "checked" : "unchecked"
            }
            var V = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
                q = "RadioGroup",
                [K, X] = (0, l.A)(q, [x, z]),
                $ = x(),
                Y = z(),
                [Z, J] = K(q),
                Q = n.forwardRef((e, t) => {
                    let {
                        __scopeRadioGroup: r,
                        name: n,
                        defaultValue: o,
                        value: i,
                        required: l = !1,
                        disabled: s = !1,
                        orientation: u,
                        dir: c,
                        loop: m = !0,
                        onValueChange: h,
                        ...v
                    } = e, g = $(r), y = (0, f.jH)(c), [b, w] = (0, d.i)({
                        prop: i,
                        defaultProp: o,
                        onChange: h
                    });
                    return (0, p.jsx)(Z, {
                        scope: r,
                        name: n,
                        required: l,
                        disabled: s,
                        value: b,
                        onValueChange: w,
                        children: (0, p.jsx)(C, {
                            asChild: !0,
                            ...g,
                            orientation: u,
                            dir: y,
                            loop: m,
                            children: (0, p.jsx)(a.sG.div, {
                                role: "radiogroup",
                                "aria-required": l,
                                "aria-orientation": u,
                                "data-disabled": s ? "" : void 0,
                                dir: y,
                                ...v,
                                ref: t
                            })
                        })
                    })
                });
            Q.displayName = q;
            var ee = "RadioGroupItem",
                et = n.forwardRef((e, t) => {
                    let {
                        __scopeRadioGroup: r,
                        disabled: l,
                        ...a
                    } = e, s = J(ee, r), u = s.disabled || l, c = $(r), d = Y(r), f = n.useRef(null), m = (0, i.s)(t, f), h = s.value === a.value, v = n.useRef(!1);
                    return n.useEffect(() => {
                        let e = e => {
                                V.includes(e.key) && (v.current = !0)
                            },
                            t = () => v.current = !1;
                        return document.addEventListener("keydown", e), document.addEventListener("keyup", t), () => {
                            document.removeEventListener("keydown", e), document.removeEventListener("keyup", t)
                        }
                    }, []), (0, p.jsx)(k, {
                        asChild: !0,
                        ...c,
                        focusable: !u,
                        active: h,
                        children: (0, p.jsx)(W, {
                            disabled: u,
                            required: s.required,
                            checked: h,
                            ...d,
                            ...a,
                            name: s.name,
                            ref: m,
                            onCheck: () => s.onValueChange(a.value),
                            onKeyDown: (0, o.m)(e => {
                                "Enter" === e.key && e.preventDefault()
                            }),
                            onFocus: (0, o.m)(a.onFocus, () => {
                                var e;
                                v.current && (null == (e = f.current) || e.click())
                            })
                        })
                    })
                });
            et.displayName = ee;
            var er = n.forwardRef((e, t) => {
                let {
                    __scopeRadioGroup: r,
                    ...n
                } = e, o = Y(r);
                return (0, p.jsx)(H, { ...o,
                    ...n,
                    ref: t
                })
            });
            er.displayName = "RadioGroupIndicator";
            var en = Q,
                eo = et,
                ei = er
        },
        5029: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let n = r(2115),
                o = n.useLayoutEffect,
                i = n.useEffect;

            function l(e) {
                let {
                    headManager: t,
                    reduceComponentsToState: r
                } = e;

                function l() {
                    if (t && t.mountedInstances) {
                        let o = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(r(o, e))
                    }
                }
                return o(() => {
                    var r;
                    return null == t || null == (r = t.mountedInstances) || r.add(e.children), () => {
                        var r;
                        null == t || null == (r = t.mountedInstances) || r.delete(e.children)
                    }
                }), o(() => (t && (t._pendingUpdate = l), () => {
                    t && (t._pendingUpdate = l)
                })), i(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
                    t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                })), null
            }
        },
        5100: (e, t) => {
            "use strict";

            function r(e) {
                let {
                    widthInt: t,
                    heightInt: r,
                    blurWidth: n,
                    blurHeight: o,
                    blurDataURL: i,
                    objectFit: l
                } = e, a = n ? 40 * n : t, s = o ? 40 * o : r, u = a && s ? "viewBox='0 0 " + a + " " + s + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === l ? "xMidYMid" : "cover" === l ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + i + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        5185: (e, t, r) => {
            "use strict";

            function n(e, t, {
                checkForDefaultPrevented: r = !0
            } = {}) {
                return function(n) {
                    if (e ? .(n), !1 === r || !n.defaultPrevented) return t ? .(n)
                }
            }
            r.d(t, {
                m: () => n
            })
        },
        5503: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => o
            });
            var n = r(2115);

            function o(e) {
                let t = n.useRef({
                    value: e,
                    previous: e
                });
                return n.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
            }
        },
        5564: (e, t, r) => {
            "use strict";
            var n = r(9509);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                default: function() {
                    return v
                },
                defaultHead: function() {
                    return f
                }
            });
            let o = r(8229),
                i = r(6966),
                l = r(5155),
                a = i._(r(2115)),
                s = o._(r(5029)),
                u = r(2464),
                c = r(2830),
                d = r(7544);

            function f(e) {
                void 0 === e && (e = !1);
                let t = [(0, l.jsx)("meta", {
                    charSet: "utf-8"
                }, "charset")];
                return e || t.push((0, l.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                }, "viewport")), t
            }

            function p(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
            }
            r(3230);
            let m = ["name", "httpEquiv", "charSet", "itemProp"];

            function h(e, t) {
                let {
                    inAmpMode: r
                } = t;
                return e.reduce(p, []).reverse().concat(f(r).reverse()).filter(function() {
                    let e = new Set,
                        t = new Set,
                        r = new Set,
                        n = {};
                    return o => {
                        let i = !0,
                            l = !1;
                        if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
                            l = !0;
                            let t = o.key.slice(o.key.indexOf("$") + 1);
                            e.has(t) ? i = !1 : e.add(t)
                        }
                        switch (o.type) {
                            case "title":
                            case "base":
                                t.has(o.type) ? i = !1 : t.add(o.type);
                                break;
                            case "meta":
                                for (let e = 0, t = m.length; e < t; e++) {
                                    let t = m[e];
                                    if (o.props.hasOwnProperty(t))
                                        if ("charSet" === t) r.has(t) ? i = !1 : r.add(t);
                                        else {
                                            let e = o.props[t],
                                                r = n[t] || new Set;
                                            ("name" !== t || !l) && r.has(e) ? i = !1 : (r.add(e), n[t] = r)
                                        }
                                }
                        }
                        return i
                    }
                }()).reverse().map((e, t) => {
                    let o = e.key || t;
                    if (n.env.__NEXT_OPTIMIZE_FONTS && !r && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                        let t = { ...e.props || {}
                        };
                        return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, a.default.cloneElement(e, t)
                    }
                    return a.default.cloneElement(e, {
                        key: o
                    })
                })
            }
            let v = function(e) {
                let {
                    children: t
                } = e, r = (0, a.useContext)(u.AmpStateContext), n = (0, a.useContext)(c.HeadManagerContext);
                return (0, l.jsx)(s.default, {
                    reduceComponentsToState: h,
                    headManager: n,
                    inAmpMode: (0, d.isInAmpMode)(r),
                    children: t
                })
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        5840: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                VALID_LOADERS: function() {
                    return r
                },
                imageConfigDefault: function() {
                    return n
                }
            });
            let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
                n = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "attachment",
                    localPatterns: void 0,
                    remotePatterns: [],
                    qualities: void 0,
                    unoptimized: !1
                }
        },
        5845: (e, t, r) => {
            "use strict";
            r.d(t, {
                i: () => i
            });
            var n = r(2115),
                o = r(9033);

            function i({
                prop: e,
                defaultProp: t,
                onChange: r = () => {}
            }) {
                let [i, l] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let r = n.useState(e),
                        [i] = r,
                        l = n.useRef(i),
                        a = (0, o.c)(t);
                    return n.useEffect(() => {
                        l.current !== i && (a(i), l.current = i)
                    }, [i, l, a]), r
                }({
                    defaultProp: t,
                    onChange: r
                }), a = void 0 !== e, s = a ? e : i, u = (0, o.c)(r);
                return [s, n.useCallback(t => {
                    if (a) {
                        let r = "function" == typeof t ? t(e) : t;
                        r !== e && u(r)
                    } else l(t)
                }, [a, e, l, u])]
            }
        },
        5863: (e, t, r) => {
            "use strict";
            r.d(t, {
                C1: () => x,
                bL: () => w
            });
            var n = r(2115),
                o = r(6081),
                i = r(3655),
                l = r(5155),
                a = "Progress",
                [s, u] = (0, o.A)(a),
                [c, d] = s(a),
                f = n.forwardRef((e, t) => {
                    var r, n, o, a;
                    let {
                        __scopeProgress: s,
                        value: u = null,
                        max: d,
                        getValueLabel: f = h,
                        ...p
                    } = e;
                    (d || 0 === d) && !y(d) && console.error((r = "".concat(d), n = "Progress", "Invalid prop `max` of value `".concat(r, "` supplied to `").concat(n, "`. Only numbers greater than 0 are valid max values. Defaulting to `").concat(100, "`.")));
                    let m = y(d) ? d : 100;
                    null === u || b(u, m) || console.error((o = "".concat(u), a = "Progress", "Invalid prop `value` of value `".concat(o, "` supplied to `").concat(a, "`. The `value` prop must be:\n  - a positive number\n  - less than the value passed to `max` (or ").concat(100, " if no `max` prop is set)\n  - `null` or `undefined` if the progress is indeterminate.\n\nDefaulting to `null`.")));
                    let w = b(u, m) ? u : null,
                        x = g(w) ? f(w, m) : void 0;
                    return (0, l.jsx)(c, {
                        scope: s,
                        value: w,
                        max: m,
                        children: (0, l.jsx)(i.sG.div, {
                            "aria-valuemax": m,
                            "aria-valuemin": 0,
                            "aria-valuenow": g(w) ? w : void 0,
                            "aria-valuetext": x,
                            role: "progressbar",
                            "data-state": v(w, m),
                            "data-value": null != w ? w : void 0,
                            "data-max": m,
                            ...p,
                            ref: t
                        })
                    })
                });
            f.displayName = a;
            var p = "ProgressIndicator",
                m = n.forwardRef((e, t) => {
                    var r;
                    let {
                        __scopeProgress: n,
                        ...o
                    } = e, a = d(p, n);
                    return (0, l.jsx)(i.sG.div, {
                        "data-state": v(a.value, a.max),
                        "data-value": null != (r = a.value) ? r : void 0,
                        "data-max": a.max,
                        ...o,
                        ref: t
                    })
                });

            function h(e, t) {
                return "".concat(Math.round(e / t * 100), "%")
            }

            function v(e, t) {
                return null == e ? "indeterminate" : e === t ? "complete" : "loading"
            }

            function g(e) {
                return "number" == typeof e
            }

            function y(e) {
                return g(e) && !isNaN(e) && e > 0
            }

            function b(e, t) {
                return g(e) && !isNaN(e) && e <= t && e >= 0
            }
            m.displayName = p;
            var w = f,
                x = m
        },
        6081: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r(2115),
                o = r(5155);

            function i(e, t = []) {
                let r = [],
                    l = () => {
                        let t = r.map(e => n.createContext(e));
                        return function(r) {
                            let o = r ? .[e] || t;
                            return n.useMemo(() => ({
                                [`__scope${e}`]: { ...r,
                                    [e]: o
                                }
                            }), [r, o])
                        }
                    };
                return l.scopeName = e, [function(t, i) {
                    let l = n.createContext(i),
                        a = r.length;
                    r = [...r, i];
                    let s = t => {
                        let {
                            scope: r,
                            children: i,
                            ...s
                        } = t, u = r ? .[e] ? .[a] || l, c = n.useMemo(() => s, Object.values(s));
                        return (0, o.jsx)(u.Provider, {
                            value: c,
                            children: i
                        })
                    };
                    return s.displayName = t + "Provider", [s, function(r, o) {
                        let s = o ? .[e] ? .[a] || l,
                            u = n.useContext(s);
                        if (u) return u;
                        if (void 0 !== i) return i;
                        throw Error(`\`${r}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let r = () => {
                        let r = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let o = r.reduce((t, {
                                useScope: r,
                                scopeName: n
                            }) => {
                                let o = r(e)[`__scope${n}`];
                                return { ...t,
                                    ...o
                                }
                            }, {});
                            return n.useMemo(() => ({
                                [`__scope${t.scopeName}`]: o
                            }), [o])
                        }
                    };
                    return r.scopeName = t.scopeName, r
                }(l, ...t)]
            }
        },
        6101: (e, t, r) => {
            "use strict";
            r.d(t, {
                s: () => l,
                t: () => i
            });
            var n = r(2115);

            function o(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }

            function i(...e) {
                return t => {
                    let r = !1,
                        n = e.map(e => {
                            let n = o(e, t);
                            return r || "function" != typeof n || (r = !0), n
                        });
                    if (r) return () => {
                        for (let t = 0; t < n.length; t++) {
                            let r = n[t];
                            "function" == typeof r ? r() : o(e[t], null)
                        }
                    }
                }
            }

            function l(...e) {
                return n.useCallback(i(...e), e)
            }
        },
        6654: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useMergedRef", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(2115);

            function o(e, t) {
                let r = (0, n.useRef)(null),
                    o = (0, n.useRef)(null);
                return (0, n.useCallback)(n => {
                    if (null === n) {
                        let e = r.current;
                        e && (r.current = null, e());
                        let t = o.current;
                        t && (o.current = null, t())
                    } else e && (r.current = i(e, n)), t && (o.current = i(t, n))
                }, [e, t])
            }

            function i(e, t) {
                if ("function" != typeof e) return e.current = t, () => {
                    e.current = null
                }; {
                    let r = e(t);
                    return "function" == typeof r ? r : () => e(null)
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        6752: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = r(8229)._(r(2115)),
                o = r(5840),
                i = n.default.createContext(o.imageConfigDefault)
        },
        6766: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => o.a
            });
            var n = r(1469),
                o = r.n(n)
        },
        7381: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(157).A)("ChevronUp", [
                ["path", {
                    d: "m18 15-6-6-6 6",
                    key: "153udz"
                }]
            ])
        },
        7544: (e, t) => {
            "use strict";

            function r(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: r = !1,
                    hasQuery: n = !1
                } = void 0 === e ? {} : e;
                return t || r && n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        8375: () => {},
        8883: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return s
                }
            }), r(3230);
            let n = r(5100),
                o = r(5840),
                i = ["-moz-initial", "fill", "none", "scale-down", void 0];

            function l(e) {
                return void 0 !== e.default
            }

            function a(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function s(e, t) {
                var r, s;
                let u, c, d, {
                        src: f,
                        sizes: p,
                        unoptimized: m = !1,
                        priority: h = !1,
                        loading: v,
                        className: g,
                        quality: y,
                        width: b,
                        height: w,
                        fill: x = !1,
                        style: S,
                        overrideSrc: E,
                        onLoad: C,
                        onLoadingComplete: R,
                        placeholder: _ = "empty",
                        blurDataURL: k,
                        fetchPriority: j,
                        decoding: A = "async",
                        layout: P,
                        objectFit: N,
                        objectPosition: O,
                        lazyBoundary: T,
                        lazyRoot: M,
                        ...L
                    } = e,
                    {
                        imgConf: I,
                        showAltText: z,
                        blurComplete: D,
                        defaultLoader: F
                    } = t,
                    W = I || o.imageConfigDefault;
                if ("allSizes" in W) u = W;
                else {
                    let e = [...W.deviceSizes, ...W.imageSizes].sort((e, t) => e - t),
                        t = W.deviceSizes.sort((e, t) => e - t),
                        n = null == (r = W.qualities) ? void 0 : r.sort((e, t) => e - t);
                    u = { ...W,
                        allSizes: e,
                        deviceSizes: t,
                        qualities: n
                    }
                }
                if (void 0 === F) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                    value: "E163",
                    enumerable: !1,
                    configurable: !0
                });
                let B = L.loader || F;
                delete L.loader, delete L.srcSet;
                let H = "__next_img_default" in B;
                if (H) {
                    if ("custom" === u.loader) throw Object.defineProperty(Error('Image with src "' + f + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'), "__NEXT_ERROR_CODE", {
                        value: "E252",
                        enumerable: !1,
                        configurable: !0
                    })
                } else {
                    let e = B;
                    B = t => {
                        let {
                            config: r,
                            ...n
                        } = t;
                        return e(n)
                    }
                }
                if (P) {
                    "fill" === P && (x = !0);
                    let e = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[P];
                    e && (S = { ...S,
                        ...e
                    });
                    let t = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[P];
                    t && !p && (p = t)
                }
                let G = "",
                    U = a(b),
                    V = a(w);
                if ((s = f) && "object" == typeof s && (l(s) || void 0 !== s.src)) {
                    let e = l(f) ? f.default : f;
                    if (!e.src) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e)), "__NEXT_ERROR_CODE", {
                        value: "E460",
                        enumerable: !1,
                        configurable: !0
                    });
                    if (!e.height || !e.width) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e)), "__NEXT_ERROR_CODE", {
                        value: "E48",
                        enumerable: !1,
                        configurable: !0
                    });
                    if (c = e.blurWidth, d = e.blurHeight, k = k || e.blurDataURL, G = e.src, !x)
                        if (U || V) {
                            if (U && !V) {
                                let t = U / e.width;
                                V = Math.round(e.height * t)
                            } else if (!U && V) {
                                let t = V / e.height;
                                U = Math.round(e.width * t)
                            }
                        } else U = e.width, V = e.height
                }
                let q = !h && ("lazy" === v || void 0 === v);
                (!(f = "string" == typeof f ? f : G) || f.startsWith("data:") || f.startsWith("blob:")) && (m = !0, q = !1), u.unoptimized && (m = !0), H && !u.dangerouslyAllowSVG && f.split("?", 1)[0].endsWith(".svg") && (m = !0);
                let K = a(y),
                    X = Object.assign(x ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: N,
                        objectPosition: O
                    } : {}, z ? {} : {
                        color: "transparent"
                    }, S),
                    $ = D || "empty" === _ ? null : "blur" === _ ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
                        widthInt: U,
                        heightInt: V,
                        blurWidth: c,
                        blurHeight: d,
                        blurDataURL: k || "",
                        objectFit: X.objectFit
                    }) + '")' : 'url("' + _ + '")',
                    Y = i.includes(X.objectFit) ? "fill" === X.objectFit ? "100% 100%" : "cover" : X.objectFit,
                    Z = $ ? {
                        backgroundSize: Y,
                        backgroundPosition: X.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: $
                    } : {},
                    J = function(e) {
                        let {
                            config: t,
                            src: r,
                            unoptimized: n,
                            width: o,
                            quality: i,
                            sizes: l,
                            loader: a
                        } = e;
                        if (n) return {
                            src: r,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: s,
                            kind: u
                        } = function(e, t, r) {
                            let {
                                deviceSizes: n,
                                allSizes: o
                            } = e;
                            if (r) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let n; n = e.exec(r);) t.push(parseInt(n[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: o.filter(t => t >= n[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: o,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof t ? {
                                widths: n,
                                kind: "w"
                            } : {
                                widths: [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))],
                                kind: "x"
                            }
                        }(t, o, l), c = s.length - 1;
                        return {
                            sizes: l || "w" !== u ? l : "100vw",
                            srcSet: s.map((e, n) => a({
                                config: t,
                                src: r,
                                quality: i,
                                width: e
                            }) + " " + ("w" === u ? e : n + 1) + u).join(", "),
                            src: a({
                                config: t,
                                src: r,
                                quality: i,
                                width: s[c]
                            })
                        }
                    }({
                        config: u,
                        src: f,
                        unoptimized: m,
                        width: U,
                        quality: K,
                        sizes: p,
                        loader: B
                    });
                return {
                    props: { ...L,
                        loading: q ? "lazy" : v,
                        fetchPriority: j,
                        width: U,
                        height: V,
                        decoding: A,
                        className: g,
                        style: { ...X,
                            ...Z
                        },
                        sizes: J.sizes,
                        srcSet: J.srcSet,
                        src: E || J.src
                    },
                    meta: {
                        unoptimized: m,
                        priority: h,
                        placeholder: _,
                        fill: x
                    }
                }
            }
        },
        9033: (e, t, r) => {
            "use strict";
            r.d(t, {
                c: () => o
            });
            var n = r(2115);

            function o(e) {
                let t = n.useRef(e);
                return n.useEffect(() => {
                    t.current = e
                }), n.useMemo(() => (...e) => t.current ? .(...e), [])
            }
        },
        9137: (e, t, r) => {
            "use strict";
            e.exports = r(2269).style
        },
        9556: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(157).A)("ChevronDown", [
                ["path", {
                    d: "m6 9 6 6 6-6",
                    key: "qrunsl"
                }]
            ])
        },
        9688: (e, t, r) => {
            "use strict";
            r.d(t, {
                QP: () => ed
            });
            let n = e => {
                    let t = a(e),
                        {
                            conflictingClassGroups: r,
                            conflictingClassGroupModifiers: n
                        } = e;
                    return {
                        getClassGroupId: e => {
                            let r = e.split("-");
                            return "" === r[0] && 1 !== r.length && r.shift(), o(r, t) || l(e)
                        },
                        getConflictingClassGroupIds: (e, t) => {
                            let o = r[e] || [];
                            return t && n[e] ? [...o, ...n[e]] : o
                        }
                    }
                },
                o = (e, t) => {
                    if (0 === e.length) return t.classGroupId;
                    let r = e[0],
                        n = t.nextPart.get(r),
                        i = n ? o(e.slice(1), n) : void 0;
                    if (i) return i;
                    if (0 === t.validators.length) return;
                    let l = e.join("-");
                    return t.validators.find(({
                        validator: e
                    }) => e(l)) ? .classGroupId
                },
                i = /^\[(.+)\]$/,
                l = e => {
                    if (i.test(e)) {
                        let t = i.exec(e)[1],
                            r = t ? .substring(0, t.indexOf(":"));
                        if (r) return "arbitrary.." + r
                    }
                },
                a = e => {
                    let {
                        theme: t,
                        classGroups: r
                    } = e, n = {
                        nextPart: new Map,
                        validators: []
                    };
                    for (let e in r) s(r[e], n, e, t);
                    return n
                },
                s = (e, t, r, n) => {
                    e.forEach(e => {
                        if ("string" == typeof e) {
                            ("" === e ? t : u(t, e)).classGroupId = r;
                            return
                        }
                        if ("function" == typeof e) return c(e) ? void s(e(n), t, r, n) : void t.validators.push({
                            validator: e,
                            classGroupId: r
                        });
                        Object.entries(e).forEach(([e, o]) => {
                            s(o, u(t, e), r, n)
                        })
                    })
                },
                u = (e, t) => {
                    let r = e;
                    return t.split("-").forEach(e => {
                        r.nextPart.has(e) || r.nextPart.set(e, {
                            nextPart: new Map,
                            validators: []
                        }), r = r.nextPart.get(e)
                    }), r
                },
                c = e => e.isThemeGetter,
                d = e => {
                    if (e < 1) return {
                        get: () => void 0,
                        set: () => {}
                    };
                    let t = 0,
                        r = new Map,
                        n = new Map,
                        o = (o, i) => {
                            r.set(o, i), ++t > e && (t = 0, n = r, r = new Map)
                        };
                    return {
                        get(e) {
                            let t = r.get(e);
                            return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t), t) : void 0
                        },
                        set(e, t) {
                            r.has(e) ? r.set(e, t) : o(e, t)
                        }
                    }
                },
                f = e => {
                    let {
                        prefix: t,
                        experimentalParseClassName: r
                    } = e, n = e => {
                        let t, r = [],
                            n = 0,
                            o = 0,
                            i = 0;
                        for (let l = 0; l < e.length; l++) {
                            let a = e[l];
                            if (0 === n && 0 === o) {
                                if (":" === a) {
                                    r.push(e.slice(i, l)), i = l + 1;
                                    continue
                                }
                                if ("/" === a) {
                                    t = l;
                                    continue
                                }
                            }
                            "[" === a ? n++ : "]" === a ? n-- : "(" === a ? o++ : ")" === a && o--
                        }
                        let l = 0 === r.length ? e : e.substring(i),
                            a = p(l);
                        return {
                            modifiers: r,
                            hasImportantModifier: a !== l,
                            baseClassName: a,
                            maybePostfixModifierPosition: t && t > i ? t - i : void 0
                        }
                    };
                    if (t) {
                        let e = t + ":",
                            r = n;
                        n = t => t.startsWith(e) ? r(t.substring(e.length)) : {
                            isExternal: !0,
                            modifiers: [],
                            hasImportantModifier: !1,
                            baseClassName: t,
                            maybePostfixModifierPosition: void 0
                        }
                    }
                    if (r) {
                        let e = n;
                        n = t => r({
                            className: t,
                            parseClassName: e
                        })
                    }
                    return n
                },
                p = e => e.endsWith("!") ? e.substring(0, e.length - 1) : e.startsWith("!") ? e.substring(1) : e,
                m = e => {
                    let t = Object.fromEntries(e.orderSensitiveModifiers.map(e => [e, !0]));
                    return e => {
                        if (e.length <= 1) return e;
                        let r = [],
                            n = [];
                        return e.forEach(e => {
                            "[" === e[0] || t[e] ? (r.push(...n.sort(), e), n = []) : n.push(e)
                        }), r.push(...n.sort()), r
                    }
                },
                h = e => ({
                    cache: d(e.cacheSize),
                    parseClassName: f(e),
                    sortModifiers: m(e),
                    ...n(e)
                }),
                v = /\s+/,
                g = (e, t) => {
                    let {
                        parseClassName: r,
                        getClassGroupId: n,
                        getConflictingClassGroupIds: o,
                        sortModifiers: i
                    } = t, l = [], a = e.trim().split(v), s = "";
                    for (let e = a.length - 1; e >= 0; e -= 1) {
                        let t = a[e],
                            {
                                isExternal: u,
                                modifiers: c,
                                hasImportantModifier: d,
                                baseClassName: f,
                                maybePostfixModifierPosition: p
                            } = r(t);
                        if (u) {
                            s = t + (s.length > 0 ? " " + s : s);
                            continue
                        }
                        let m = !!p,
                            h = n(m ? f.substring(0, p) : f);
                        if (!h) {
                            if (!m || !(h = n(f))) {
                                s = t + (s.length > 0 ? " " + s : s);
                                continue
                            }
                            m = !1
                        }
                        let v = i(c).join(":"),
                            g = d ? v + "!" : v,
                            y = g + h;
                        if (l.includes(y)) continue;
                        l.push(y);
                        let b = o(h, m);
                        for (let e = 0; e < b.length; ++e) {
                            let t = b[e];
                            l.push(g + t)
                        }
                        s = t + (s.length > 0 ? " " + s : s)
                    }
                    return s
                };

            function y() {
                let e, t, r = 0,
                    n = "";
                for (; r < arguments.length;)(e = arguments[r++]) && (t = b(e)) && (n && (n += " "), n += t);
                return n
            }
            let b = e => {
                    let t;
                    if ("string" == typeof e) return e;
                    let r = "";
                    for (let n = 0; n < e.length; n++) e[n] && (t = b(e[n])) && (r && (r += " "), r += t);
                    return r
                },
                w = e => {
                    let t = t => t[e] || [];
                    return t.isThemeGetter = !0, t
                },
                x = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
                S = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
                E = /^\d+\/\d+$/,
                C = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                R = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                _ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                k = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                j = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
                A = e => E.test(e),
                P = e => !!e && !Number.isNaN(Number(e)),
                N = e => !!e && Number.isInteger(Number(e)),
                O = e => e.endsWith("%") && P(e.slice(0, -1)),
                T = e => C.test(e),
                M = () => !0,
                L = e => R.test(e) && !_.test(e),
                I = () => !1,
                z = e => k.test(e),
                D = e => j.test(e),
                F = e => !B(e) && !K(e),
                W = e => ee(e, el, I),
                B = e => x.test(e),
                H = e => ee(e, ea, L),
                G = e => ee(e, es, P),
                U = e => ee(e, er, I),
                V = e => ee(e, eo, D),
                q = e => ee(e, I, z),
                K = e => S.test(e),
                X = e => et(e, ea),
                $ = e => et(e, eu),
                Y = e => et(e, er),
                Z = e => et(e, el),
                J = e => et(e, eo),
                Q = e => et(e, ec, !0),
                ee = (e, t, r) => {
                    let n = x.exec(e);
                    return !!n && (n[1] ? t(n[1]) : r(n[2]))
                },
                et = (e, t, r = !1) => {
                    let n = S.exec(e);
                    return !!n && (n[1] ? t(n[1]) : r)
                },
                er = e => "position" === e,
                en = new Set(["image", "url"]),
                eo = e => en.has(e),
                ei = new Set(["length", "size", "percentage"]),
                el = e => ei.has(e),
                ea = e => "length" === e,
                es = e => "number" === e,
                eu = e => "family-name" === e,
                ec = e => "shadow" === e;
            Symbol.toStringTag;
            let ed = function(e, ...t) {
                let r, n, o, i = function(a) {
                    return n = (r = h(t.reduce((e, t) => t(e), e()))).cache.get, o = r.cache.set, i = l, l(a)
                };

                function l(e) {
                    let t = n(e);
                    if (t) return t;
                    let i = g(e, r);
                    return o(e, i), i
                }
                return function() {
                    return i(y.apply(null, arguments))
                }
            }(() => {
                let e = w("color"),
                    t = w("font"),
                    r = w("text"),
                    n = w("font-weight"),
                    o = w("tracking"),
                    i = w("leading"),
                    l = w("breakpoint"),
                    a = w("container"),
                    s = w("spacing"),
                    u = w("radius"),
                    c = w("shadow"),
                    d = w("inset-shadow"),
                    f = w("drop-shadow"),
                    p = w("blur"),
                    m = w("perspective"),
                    h = w("aspect"),
                    v = w("ease"),
                    g = w("animate"),
                    y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    b = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                    x = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    S = () => ["auto", "contain", "none"],
                    E = () => [A, "px", "full", "auto", K, B, s],
                    C = () => [N, "none", "subgrid", K, B],
                    R = () => ["auto", {
                        span: ["full", N, K, B]
                    }, K, B],
                    _ = () => [N, "auto", K, B],
                    k = () => ["auto", "min", "max", "fr", K, B],
                    j = () => [K, B, s],
                    L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"],
                    I = () => ["start", "end", "center", "stretch"],
                    z = () => [K, B, s],
                    D = () => ["px", ...z()],
                    ee = () => ["px", "auto", ...z()],
                    et = () => [A, "auto", "px", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", K, B, s],
                    er = () => [e, K, B],
                    en = () => [O, H],
                    eo = () => ["", "none", "full", u, K, B],
                    ei = () => ["", P, X, H],
                    el = () => ["solid", "dashed", "dotted", "double"],
                    ea = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                    es = () => ["", "none", p, K, B],
                    eu = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", K, B],
                    ec = () => ["none", P, K, B],
                    ed = () => ["none", P, K, B],
                    ef = () => [P, K, B],
                    ep = () => [A, "full", "px", K, B, s];
                return {
                    cacheSize: 500,
                    theme: {
                        animate: ["spin", "ping", "pulse", "bounce"],
                        aspect: ["video"],
                        blur: [T],
                        breakpoint: [T],
                        color: [M],
                        container: [T],
                        "drop-shadow": [T],
                        ease: ["in", "out", "in-out"],
                        font: [F],
                        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                        "inset-shadow": [T],
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                        radius: [T],
                        shadow: [T],
                        spacing: [P],
                        text: [T],
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", A, B, K, h]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [P, B, K, a]
                        }],
                        "break-after": [{
                            "break-after": y()
                        }],
                        "break-before": [{
                            "break-before": y()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        sr: ["sr-only", "not-sr-only"],
                        float: [{
                            float: ["right", "left", "none", "start", "end"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none", "start", "end"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [...b(), B, K]
                        }],
                        overflow: [{
                            overflow: x()
                        }],
                        "overflow-x": [{
                            "overflow-x": x()
                        }],
                        "overflow-y": [{
                            "overflow-y": x()
                        }],
                        overscroll: [{
                            overscroll: S()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": S()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": S()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: E()
                        }],
                        "inset-x": [{
                            "inset-x": E()
                        }],
                        "inset-y": [{
                            "inset-y": E()
                        }],
                        start: [{
                            start: E()
                        }],
                        end: [{
                            end: E()
                        }],
                        top: [{
                            top: E()
                        }],
                        right: [{
                            right: E()
                        }],
                        bottom: [{
                            bottom: E()
                        }],
                        left: [{
                            left: E()
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: [N, "auto", K, B]
                        }],
                        basis: [{
                            basis: [A, "full", "auto", K, B, a, s]
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["nowrap", "wrap", "wrap-reverse"]
                        }],
                        flex: [{
                            flex: [P, A, "auto", "initial", "none", B]
                        }],
                        grow: [{
                            grow: ["", P, K, B]
                        }],
                        shrink: [{
                            shrink: ["", P, K, B]
                        }],
                        order: [{
                            order: [N, "first", "last", "none", K, B]
                        }],
                        "grid-cols": [{
                            "grid-cols": C()
                        }],
                        "col-start-end": [{
                            col: R()
                        }],
                        "col-start": [{
                            "col-start": _()
                        }],
                        "col-end": [{
                            "col-end": _()
                        }],
                        "grid-rows": [{
                            "grid-rows": C()
                        }],
                        "row-start-end": [{
                            row: R()
                        }],
                        "row-start": [{
                            "row-start": _()
                        }],
                        "row-end": [{
                            "row-end": _()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": k()
                        }],
                        "auto-rows": [{
                            "auto-rows": k()
                        }],
                        gap: [{
                            gap: j()
                        }],
                        "gap-x": [{
                            "gap-x": j()
                        }],
                        "gap-y": [{
                            "gap-y": j()
                        }],
                        "justify-content": [{
                            justify: [...L(), "normal"]
                        }],
                        "justify-items": [{
                            "justify-items": [...I(), "normal"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", ...I()]
                        }],
                        "align-content": [{
                            content: ["normal", ...L()]
                        }],
                        "align-items": [{
                            items: [...I(), "baseline"]
                        }],
                        "align-self": [{
                            self: ["auto", ...I(), "baseline"]
                        }],
                        "place-content": [{
                            "place-content": L()
                        }],
                        "place-items": [{
                            "place-items": [...I(), "baseline"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", ...I()]
                        }],
                        p: [{
                            p: D()
                        }],
                        px: [{
                            px: D()
                        }],
                        py: [{
                            py: D()
                        }],
                        ps: [{
                            ps: D()
                        }],
                        pe: [{
                            pe: D()
                        }],
                        pt: [{
                            pt: D()
                        }],
                        pr: [{
                            pr: D()
                        }],
                        pb: [{
                            pb: D()
                        }],
                        pl: [{
                            pl: D()
                        }],
                        m: [{
                            m: ee()
                        }],
                        mx: [{
                            mx: ee()
                        }],
                        my: [{
                            my: ee()
                        }],
                        ms: [{
                            ms: ee()
                        }],
                        me: [{
                            me: ee()
                        }],
                        mt: [{
                            mt: ee()
                        }],
                        mr: [{
                            mr: ee()
                        }],
                        mb: [{
                            mb: ee()
                        }],
                        ml: [{
                            ml: ee()
                        }],
                        "space-x": [{
                            "space-x": z()
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": z()
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        size: [{
                            size: et()
                        }],
                        w: [{
                            w: [a, "screen", ...et()]
                        }],
                        "min-w": [{
                            "min-w": [a, "screen", "none", ...et()]
                        }],
                        "max-w": [{
                            "max-w": [a, "screen", "none", "prose", {
                                screen: [l]
                            }, ...et()]
                        }],
                        h: [{
                            h: ["screen", ...et()]
                        }],
                        "min-h": [{
                            "min-h": ["screen", "none", ...et()]
                        }],
                        "max-h": [{
                            "max-h": ["screen", ...et()]
                        }],
                        "font-size": [{
                            text: ["base", r, X, H]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: [n, K, G]
                        }],
                        "font-stretch": [{
                            "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", O, B]
                        }],
                        "font-family": [{
                            font: [$, B, t]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                        tracking: [{
                            tracking: [o, K, B]
                        }],
                        "line-clamp": [{
                            "line-clamp": [P, "none", K, G]
                        }],
                        leading: [{
                            leading: [K, B, i, s]
                        }],
                        "list-image": [{
                            "list-image": ["none", K, B]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "list-style-type": [{
                            list: ["disc", "decimal", "none", K, B]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "placeholder-color": [{
                            placeholder: er()
                        }],
                        "text-color": [{
                            text: er()
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...el(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: [P, "from-font", "auto", K, H]
                        }],
                        "text-decoration-color": [{
                            decoration: er()
                        }],
                        "underline-offset": [{
                            "underline-offset": [P, "auto", K, B]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                            text: ["wrap", "nowrap", "balance", "pretty"]
                        }],
                        indent: [{
                            indent: ["px", ...z()]
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", K, B]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", K, B]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [...b(), Y, U]
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "space", "round"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", Z, W]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                linear: [{
                                    to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                                }, N, K, B],
                                radial: ["", K, B],
                                conic: [N, K, B]
                            }, J, V]
                        }],
                        "bg-color": [{
                            bg: er()
                        }],
                        "gradient-from-pos": [{
                            from: en()
                        }],
                        "gradient-via-pos": [{
                            via: en()
                        }],
                        "gradient-to-pos": [{
                            to: en()
                        }],
                        "gradient-from": [{
                            from: er()
                        }],
                        "gradient-via": [{
                            via: er()
                        }],
                        "gradient-to": [{
                            to: er()
                        }],
                        rounded: [{
                            rounded: eo()
                        }],
                        "rounded-s": [{
                            "rounded-s": eo()
                        }],
                        "rounded-e": [{
                            "rounded-e": eo()
                        }],
                        "rounded-t": [{
                            "rounded-t": eo()
                        }],
                        "rounded-r": [{
                            "rounded-r": eo()
                        }],
                        "rounded-b": [{
                            "rounded-b": eo()
                        }],
                        "rounded-l": [{
                            "rounded-l": eo()
                        }],
                        "rounded-ss": [{
                            "rounded-ss": eo()
                        }],
                        "rounded-se": [{
                            "rounded-se": eo()
                        }],
                        "rounded-ee": [{
                            "rounded-ee": eo()
                        }],
                        "rounded-es": [{
                            "rounded-es": eo()
                        }],
                        "rounded-tl": [{
                            "rounded-tl": eo()
                        }],
                        "rounded-tr": [{
                            "rounded-tr": eo()
                        }],
                        "rounded-br": [{
                            "rounded-br": eo()
                        }],
                        "rounded-bl": [{
                            "rounded-bl": eo()
                        }],
                        "border-w": [{
                            border: ei()
                        }],
                        "border-w-x": [{
                            "border-x": ei()
                        }],
                        "border-w-y": [{
                            "border-y": ei()
                        }],
                        "border-w-s": [{
                            "border-s": ei()
                        }],
                        "border-w-e": [{
                            "border-e": ei()
                        }],
                        "border-w-t": [{
                            "border-t": ei()
                        }],
                        "border-w-r": [{
                            "border-r": ei()
                        }],
                        "border-w-b": [{
                            "border-b": ei()
                        }],
                        "border-w-l": [{
                            "border-l": ei()
                        }],
                        "divide-x": [{
                            "divide-x": ei()
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": ei()
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "border-style": [{
                            border: [...el(), "hidden", "none"]
                        }],
                        "divide-style": [{
                            divide: [...el(), "hidden", "none"]
                        }],
                        "border-color": [{
                            border: er()
                        }],
                        "border-color-x": [{
                            "border-x": er()
                        }],
                        "border-color-y": [{
                            "border-y": er()
                        }],
                        "border-color-s": [{
                            "border-s": er()
                        }],
                        "border-color-e": [{
                            "border-e": er()
                        }],
                        "border-color-t": [{
                            "border-t": er()
                        }],
                        "border-color-r": [{
                            "border-r": er()
                        }],
                        "border-color-b": [{
                            "border-b": er()
                        }],
                        "border-color-l": [{
                            "border-l": er()
                        }],
                        "divide-color": [{
                            divide: er()
                        }],
                        "outline-style": [{
                            outline: [...el(), "none", "hidden"]
                        }],
                        "outline-offset": [{
                            "outline-offset": [P, K, B]
                        }],
                        "outline-w": [{
                            outline: ["", P, X, H]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        shadow: [{
                            shadow: ["", "none", c, Q, q]
                        }],
                        "shadow-color": [{
                            shadow: er()
                        }],
                        "inset-shadow": [{
                            "inset-shadow": ["none", K, B, d]
                        }],
                        "inset-shadow-color": [{
                            "inset-shadow": er()
                        }],
                        "ring-w": [{
                            ring: ei()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: er()
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [P, H]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": er()
                        }],
                        "inset-ring-w": [{
                            "inset-ring": ei()
                        }],
                        "inset-ring-color": [{
                            "inset-ring": er()
                        }],
                        opacity: [{
                            opacity: [P, K, B]
                        }],
                        "mix-blend": [{
                            "mix-blend": [...ea(), "plus-darker", "plus-lighter"]
                        }],
                        "bg-blend": [{
                            "bg-blend": ea()
                        }],
                        filter: [{
                            filter: ["", "none", K, B]
                        }],
                        blur: [{
                            blur: es()
                        }],
                        brightness: [{
                            brightness: [P, K, B]
                        }],
                        contrast: [{
                            contrast: [P, K, B]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", f, K, B]
                        }],
                        grayscale: [{
                            grayscale: ["", P, K, B]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [P, K, B]
                        }],
                        invert: [{
                            invert: ["", P, K, B]
                        }],
                        saturate: [{
                            saturate: [P, K, B]
                        }],
                        sepia: [{
                            sepia: ["", P, K, B]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none", K, B]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": es()
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [P, K, B]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [P, K, B]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": ["", P, K, B]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [P, K, B]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": ["", P, K, B]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [P, K, B]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [P, K, B]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": ["", P, K, B]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": z()
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": z()
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": z()
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", K, B]
                        }],
                        "transition-behavior": [{
                            transition: ["normal", "discrete"]
                        }],
                        duration: [{
                            duration: [P, "initial", K, B]
                        }],
                        ease: [{
                            ease: ["linear", "initial", v, K, B]
                        }],
                        delay: [{
                            delay: [P, K, B]
                        }],
                        animate: [{
                            animate: ["none", g, K, B]
                        }],
                        backface: [{
                            backface: ["hidden", "visible"]
                        }],
                        perspective: [{
                            perspective: [m, K, B]
                        }],
                        "perspective-origin": [{
                            "perspective-origin": eu()
                        }],
                        rotate: [{
                            rotate: ec()
                        }],
                        "rotate-x": [{
                            "rotate-x": ec()
                        }],
                        "rotate-y": [{
                            "rotate-y": ec()
                        }],
                        "rotate-z": [{
                            "rotate-z": ec()
                        }],
                        scale: [{
                            scale: ed()
                        }],
                        "scale-x": [{
                            "scale-x": ed()
                        }],
                        "scale-y": [{
                            "scale-y": ed()
                        }],
                        "scale-z": [{
                            "scale-z": ed()
                        }],
                        "scale-3d": ["scale-3d"],
                        skew: [{
                            skew: ef()
                        }],
                        "skew-x": [{
                            "skew-x": ef()
                        }],
                        "skew-y": [{
                            "skew-y": ef()
                        }],
                        transform: [{
                            transform: [K, B, "", "none", "gpu", "cpu"]
                        }],
                        "transform-origin": [{
                            origin: eu()
                        }],
                        "transform-style": [{
                            transform: ["3d", "flat"]
                        }],
                        translate: [{
                            translate: ep()
                        }],
                        "translate-x": [{
                            "translate-x": ep()
                        }],
                        "translate-y": [{
                            "translate-y": ep()
                        }],
                        "translate-z": [{
                            "translate-z": ep()
                        }],
                        "translate-none": ["translate-none"],
                        accent: [{
                            accent: er()
                        }],
                        appearance: [{
                            appearance: ["none", "auto"]
                        }],
                        "caret-color": [{
                            caret: er()
                        }],
                        "color-scheme": [{
                            scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                        }],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", K, B]
                        }],
                        "field-sizing": [{
                            "field-sizing": ["fixed", "content"]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["auto", "none"]
                        }],
                        resize: [{
                            resize: ["none", "", "y", "x"]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": z()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": z()
                        }],
                        "scroll-my": [{
                            "scroll-my": z()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": z()
                        }],
                        "scroll-me": [{
                            "scroll-me": z()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": z()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": z()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": z()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": z()
                        }],
                        "scroll-p": [{
                            "scroll-p": z()
                        }],
                        "scroll-px": [{
                            "scroll-px": z()
                        }],
                        "scroll-py": [{
                            "scroll-py": z()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": z()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": z()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": z()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": z()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": z()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": z()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", K, B]
                        }],
                        fill: [{
                            fill: ["none", ...er()]
                        }],
                        "stroke-w": [{
                            stroke: [P, X, H, G]
                        }],
                        stroke: [{
                            stroke: ["none", ...er()]
                        }],
                        "forced-color-adjust": [{
                            "forced-color-adjust": ["auto", "none"]
                        }]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        translate: ["translate-x", "translate-y", "translate-none"],
                        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    },
                    orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
                }
            })
        },
        9708: (e, t, r) => {
            "use strict";
            r.d(t, {
                DX: () => l
            });
            var n = r(2115),
                o = r(6101),
                i = r(5155),
                l = n.forwardRef((e, t) => {
                    let {
                        children: r,
                        ...o
                    } = e, l = n.Children.toArray(r), s = l.find(u);
                    if (s) {
                        let e = s.props.children,
                            r = l.map(t => t !== s ? t : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
                        return (0, i.jsx)(a, { ...o,
                            ref: t,
                            children: n.isValidElement(e) ? n.cloneElement(e, void 0, r) : null
                        })
                    }
                    return (0, i.jsx)(a, { ...o,
                        ref: t,
                        children: r
                    })
                });
            l.displayName = "Slot";
            var a = n.forwardRef((e, t) => {
                let {
                    children: r,
                    ...i
                } = e;
                if (n.isValidElement(r)) {
                    let e = function(e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
                                r = t && "isReactWarning" in t && t.isReactWarning;
                            return r ? e.ref : (r = (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                        }(r),
                        l = function(e, t) {
                            let r = { ...t
                            };
                            for (let n in t) {
                                let o = e[n],
                                    i = t[n];
                                /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                                    i(...e), o(...e)
                                } : o && (r[n] = o) : "style" === n ? r[n] = { ...o,
                                    ...i
                                } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...r
                            }
                        }(i, r.props);
                    return r.type !== n.Fragment && (l.ref = t ? (0, o.t)(t, e) : e), n.cloneElement(r, l)
                }
                return n.Children.count(r) > 1 ? n.Children.only(null) : null
            });
            a.displayName = "SlotClone";
            var s = ({
                children: e
            }) => (0, i.jsx)(i.Fragment, {
                children: e
            });

            function u(e) {
                return n.isValidElement(e) && e.type === s
            }
        }
    }
]);