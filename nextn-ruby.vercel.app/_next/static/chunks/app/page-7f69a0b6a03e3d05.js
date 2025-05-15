(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        7253: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => z
            });
            var r = a(5155),
                s = a(9137),
                l = a.n(s),
                n = a(2115),
                o = a(2596),
                i = a(9688);

            function c() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, i.QP)((0, o.$)(t))
            }
            let d = n.forwardRef((e, t) => {
                let {
                    className: a,
                    type: s,
                    ...l
                } = e;
                return (0, r.jsx)("input", {
                    type: s,
                    className: c("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", a),
                    ref: t,
                    ...l
                })
            });
            d.displayName = "Input";
            var m = a(9708);
            let u = (0, a(2085).F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline"
                        },
                        size: {
                            default: "h-10 px-4 py-2",
                            sm: "h-9 rounded-md px-3",
                            lg: "h-11 rounded-md px-8",
                            icon: "h-10 w-10"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                f = n.forwardRef((e, t) => {
                    let {
                        className: a,
                        variant: s,
                        size: l,
                        asChild: n = !1,
                        ...o
                    } = e, i = n ? m.DX : "button";
                    return (0, r.jsx)(i, {
                        className: c(u({
                            variant: s,
                            size: l,
                            className: a
                        })),
                        ref: t,
                        ...o
                    })
                });
            f.displayName = "Button";
            var x = a(5863);
            let h = n.forwardRef((e, t) => {
                let {
                    className: a,
                    value: s,
                    ...l
                } = e;
                return (0, r.jsx)(x.bL, {
                    ref: t,
                    className: c("relative h-4 w-full overflow-hidden rounded-full bg-secondary", a),
                    ...l,
                    children: (0, r.jsx)(x.C1, {
                        className: "h-full w-full flex-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all",
                        style: {
                            transform: "translateX(-".concat(100 - (s || 0), "%)")
                        }
                    })
                })
            });
            h.displayName = x.bL.displayName;
            var b = a(1721),
                p = a(9556),
                y = a(7381),
                j = a(518);
            let g = b.bL;
            b.YJ;
            let v = b.WT,
                w = n.forwardRef((e, t) => {
                    let {
                        className: a,
                        children: s,
                        ...l
                    } = e;
                    return (0, r.jsxs)(b.l9, {
                        ref: t,
                        className: c("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", a),
                        ...l,
                        children: [s, (0, r.jsx)(b.In, {
                            asChild: !0,
                            children: (0, r.jsx)(p.A, {
                                className: "h-4 w-4 opacity-50"
                            })
                        })]
                    })
                });
            w.displayName = b.l9.displayName;
            let N = n.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsx)(b.PP, {
                    ref: t,
                    className: c("flex cursor-default items-center justify-center py-1", a),
                    ...s,
                    children: (0, r.jsx)(y.A, {
                        className: "h-4 w-4"
                    })
                })
            });
            N.displayName = b.PP.displayName;
            let k = n.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsx)(b.wn, {
                    ref: t,
                    className: c("flex cursor-default items-center justify-center py-1", a),
                    ...s,
                    children: (0, r.jsx)(p.A, {
                        className: "h-4 w-4"
                    })
                })
            });
            k.displayName = b.wn.displayName;
            let S = n.forwardRef((e, t) => {
                let {
                    className: a,
                    children: s,
                    position: l = "popper",
                    ...n
                } = e;
                return (0, r.jsx)(b.ZL, {
                    children: (0, r.jsxs)(b.UC, {
                        ref: t,
                        className: c("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === l && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", a),
                        position: l,
                        ...n,
                        children: [(0, r.jsx)(N, {}), (0, r.jsx)(b.LM, {
                            className: c("p-1", "popper" === l && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                            children: s
                        }), (0, r.jsx)(k, {})]
                    })
                })
            });
            S.displayName = b.UC.displayName, n.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsx)(b.JU, {
                    ref: t,
                    className: c("py-1.5 pl-8 pr-2 text-sm font-semibold", a),
                    ...s
                })
            }).displayName = b.JU.displayName;
            let M = n.forwardRef((e, t) => {
                let {
                    className: a,
                    children: s,
                    ...l
                } = e;
                return (0, r.jsxs)(b.q7, {
                    ref: t,
                    className: c("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a),
                    ...l,
                    children: [(0, r.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, r.jsx)(b.VF, {
                            children: (0, r.jsx)(j.A, {
                                className: "h-4 w-4"
                            })
                        })
                    }), (0, r.jsx)(b.p4, {
                        children: s
                    })]
                })
            });
            M.displayName = b.q7.displayName, n.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsx)(b.wv, {
                    ref: t,
                    className: c("-mx-1 my-1 h-px bg-muted", a),
                    ...s
                })
            }).displayName = b.wv.displayName;
            var R = a(4612),
                T = a(154);
            let A = n.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsx)(R.bL, {
                    className: c("grid gap-2", a),
                    ...s,
                    ref: t
                })
            });
            A.displayName = R.bL.displayName;
            let E = n.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsx)(R.q7, {
                    ref: t,
                    className: c("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", a),
                    ...s,
                    children: (0, r.jsx)(R.C1, {
                        className: "flex items-center justify-center",
                        children: (0, r.jsx)(T.A, {
                            className: "h-2.5 w-2.5 fill-current text-current"
                        })
                    })
                })
            });
            E.displayName = R.q7.displayName;
            var I = a(203),
                C = a(3926),
                P = a(6766);

            function z() {
                let [e, t] = (0, n.useState)(""), [a, s] = (0, n.useState)(null), [o, i] = (0, n.useState)([]), [c, m] = (0, n.useState)(!1), [u, x] = (0, n.useState)(!1), [b, p] = (0, n.useState)(0), [y, j] = (0, n.useState)("Quotex Broker"), [N, k] = (0, n.useState)("EURUSD (OTC)"), [R, T] = (0, n.useState)("1M"), [z, B] = (0, n.useState)(null), [U, O] = (0, n.useState)(!1), [L, D] = (0, n.useState)(!0), [F, _] = (0, n.useState)(0), [V, J] = (0, n.useState)([]), [Q, W] = (0, n.useState)({
                    price: 0,
                    high: 0,
                    low: 0,
                    open: 0,
                    close: 0,
                    timestamp: Date.now()
                }), [Y, q] = (0, n.useState)(""), [H, G] = (0, n.useState)(0), [X, K] = (0, n.useState)(1.086), [Z, $] = (0, n.useState)(-1), [ee, et] = (0, n.useState)(!1), [ea, er] = (0, n.useState)(null), [es, el] = (0, n.useState)(null), [en, eo] = (0, n.useState)(""), [ei, ec] = (0, n.useState)(!1), [ed, em] = (0, n.useState)(""), [eu, ef] = (0, n.useState)(null), [ex, eh] = (0, n.useState)(null), [eb, ep] = (0, n.useState)(null), [ey, ej] = (0, n.useState)(!1), [eg, ev] = (0, n.useState)("80%"), [ew, eN] = (0, n.useState)(!1), [ek, eS] = (0, n.useState)(!1), [eM, eR] = (0, n.useState)(""), [eT, eA] = (0, n.useState)("none"), [eE, eI] = (0, n.useState)(0), [eC, eP] = (0, n.useState)(0), [ez, eB] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    let e = () => (function(e) {
                        let t = [];
                        for (let e = 0; e < 100; e++) t.push({
                            id: e,
                            x: 100 * Math.random(),
                            y: 100 * Math.random(),
                            size: 3 * Math.random() + 1,
                            animationDuration: 3 * Math.random() + 2
                        });
                        return t
                    })(0);
                    i(e());
                    let t = setInterval(() => {
                        i(e())
                    }, 3e4);
                    return () => clearInterval(t)
                }, []), (0, n.useEffect)(() => {
                    let e;
                    return c && (s("Please wait..."), p(0), e = setInterval(() => {
                        p(t => t >= 100 ? (clearInterval(e), 100) : t + 10)
                    }, 200)), () => clearInterval(e)
                }, [c]), (0, n.useEffect)(() => {
                    100 === b && c && setTimeout(() => {
                        m(!1), D(!1), x(!0), s(null)
                    }, 1e3)
                }, [b, c]);
                let eU = async () => {
                    "legendkey" === e ? (eA("premium"), m(!0), D(!0), s("Please wait..."), setTimeout(() => {
                        m(!1), D(!1), x(!0), s(null), p(0)
                    }, 2e3)) : "wael" === e ? (eA("trial"), m(!0), D(!0), s("Trial mode: 1 free analysis every 10 minutes"), setTimeout(() => {
                        m(!1), D(!1), x(!0), s(null), p(0)
                    }, 2e3)) : s("Wrong Password ❌")
                };
                (0, n.useEffect)(() => {
                    let e;
                    return U ? (_(0), e = setInterval(() => {
                        _(t => t >= 100 ? (clearInterval(e), 100) : t + 10)
                    }, 1e3)) : _(0), () => clearInterval(e)
                }, [U]);
                let eO = async () => {
                        ec(!0), em("");
                        try {
                            let e = await fetch("/api/proxy");
                            if (!e.ok) throw Error("Server error");
                            let t = await e.json();
                            return ef(t), t
                        } catch (e) {
                            return em(e.message || "Unknown error"), null
                        } finally {
                            ec(!1)
                        }
                    },
                    eL = async () => {
                        if (!y || !N || !R) return void alert("Please select all options!");
                        if ("trial" === eT) {
                            let e = await fetch("/api/proxy/check-trial", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        ip: eM
                                    })
                                }),
                                t = await e.json();
                            if (t.allowed) await fetch("/api/proxy/check-trial", {
                                method: "PUT",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    ip: eM
                                })
                            });
                            else {
                                eI(t.wait), eP(Math.ceil(t.wait / 1e3)), ez && clearInterval(ez);
                                let e = setInterval(() => {
                                    eP(t => t <= 1 ? (clearInterval(e), eP(0), eI(0), 0) : t - 1)
                                }, 1e3);
                                eB(e);
                                return
                            }
                        }
                        O(!0), B(null), eh(null), ep(null), ef(null), ej(!0), eN(!1), eS(!1), await new Promise(e => {
                            let t = (55 - new Date().getSeconds() + 60) % 60;
                            0 === t && (t = 60);
                            let a = 100 / (10 * t),
                                r = 0,
                                s = setInterval(() => {
                                    _(Math.min(r += a, 100)), r >= 100 && clearInterval(s)
                                }, 100);
                            setTimeout(() => {
                                clearInterval(s), e()
                            }, 1e3 * t)
                        });
                        let e = await eO();
                        ej(!1);
                        let t = "BUY",
                            a = 60,
                            r = N.replace(" (OTC)", "");
                        if (e && e[r]) {
                            let s = e[r],
                                l = "5M-TR";
                            "5M" === R ? l = "15M-TR" : "15M" === R && (l = "4H-TR");
                            let n = s[l];
                            "up" === n ? t = "BUY" : "down" === n && (t = "SELL"), ["1M", "1M-TR", "5M", "5M-TR", "15M", "15M-TR", "4H", "4H-TR"].forEach(e => {
                                s[e] === n && (a += 5)
                            })
                        }
                        B(t), eh(a), O(!1);
                        let s = parseInt(eg.replace("%", ""), 10);
                        if (a < s) {
                            eN(!0), setTimeout(() => {
                                eN(!1), B(null), eh(null), eS(!0)
                            }, 1e4), O(!1);
                            return
                        }
                        eS(!1);
                        let l = [];
                        for (let e = 0; e < 50; e++) l.push({
                            id: e,
                            x: 100 * Math.random(),
                            animationDelay: 5 * Math.random()
                        });
                        J(l)
                    };
                return (0, n.useEffect)(() => {
                    z && setTimeout(() => {
                        J([])
                    }, 6e4)
                }, [z]), (0, n.useEffect)(() => {
                    ef(null), B(null), eh(null), ep(null)
                }, [N, R]), (0, n.useEffect)(() => {
                    fetch("https://api.ipify.org?format=json").then(e => e.json()).then(e => eR(e.ip)).catch(() => eR("Unable to fetch IP"))
                }, []), (0, n.useEffect)(() => {
                    "trial" === eT && eC > 0 && (ef(null), B(null), eh(null), ep(null))
                }, [eT, eC]), (0, r.jsxs)("div", {
                    className: "jsx-4225c15b3266b003 relative h-screen w-screen overflow-hidden",
                    children: [(0, r.jsx)("div", {
                        className: "jsx-4225c15b3266b003 absolute inset-0 overflow-hidden",
                        children: o.map(e => (0, r.jsx)("div", {
                            style: {
                                left: "".concat(100 * Math.random(), "vw"),
                                bottom: "".concat(100 * Math.random(), "vh"),
                                width: "".concat(3 * Math.random() + 1, "px"),
                                height: "".concat(3 * Math.random() + 1, "px"),
                                animation: "float ".concat(3 * Math.random() + 2, "s linear infinite")
                            },
                            className: "jsx-4225c15b3266b003 particle absolute rounded-full bg-gray-400 opacity-70"
                        }, e.id))
                    }), (0, r.jsxs)("div", {
                        style: {
                            background: "linear-gradient(to right, gold, pink)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            animation: "gradientAnimation 5s linear infinite"
                        },
                        className: "jsx-4225c15b3266b003 absolute top-10 w-full text-5xl font-bold text-center flex items-center justify-center",
                        children: [(0, r.jsx)(P.default, {
                            src: "/Weather.png",
                            alt: "Storm Icon",
                            width: 40,
                            height: 40,
                            className: "ml-2"
                        }), "STORM", (0, r.jsx)(P.default, {
                            src: "/Weather.png",
                            alt: "Storm Icon",
                            width: 40,
                            height: 40,
                            className: "mr-2"
                        })]
                    }), L && (0, r.jsxs)("div", {
                        className: "jsx-4225c15b3266b003 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-6 rounded-[2%] bg-gray-900/[0.9] backdrop-blur-sm w-80 flex flex-col items-center justify-center border border-cyan-500 shadow-lg shadow-cyan-500/50",
                        children: [(0, r.jsx)("h2", {
                            className: "jsx-4225c15b3266b003 text-lg font-semibold mb-4 text-green-500 glow text-center animate-pulse",
                            children: "Live Signals"
                        }), (0, r.jsx)(d, {
                            type: "password",
                            placeholder: "Enter The Password",
                            value: e,
                            onChange: e => t(e.target.value),
                            className: "mb-4 text-center",
                            disabled: c,
                            onKeyDown: e => {
                                "Enter" === e.key && eU()
                            }
                        }), (0, r.jsx)(f, {
                            onClick: eU,
                            className: "w-full bg-gradient-to-r from-blue-500 to-purple-500 text-primary-foreground hover:opacity-80 transition-opacity text-center font-bold",
                            disabled: c,
                            children: "Let's Go"
                        }), a && (0, r.jsx)("div", {
                            className: "jsx-4225c15b3266b003 " + "mt-4 text-center ".concat(c ? "text-green-500" : "text-destructive"),
                            children: a
                        })]
                    }), u && (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)("div", {
                            className: "jsx-4225c15b3266b003 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center gap-4",
                            children: [(0, r.jsxs)("div", {
                                className: "jsx-4225c15b3266b003 p-4 rounded-[2%] bg-black/[0.5] backdrop-blur-sm w-80 flex flex-col items-center justify-center border border-cyan-500 shadow-lg shadow-cyan-500/50",
                                children: [ei && (0, r.jsx)("div", {
                                    className: "jsx-4225c15b3266b003 text-gray-400 text-center",
                                    children: "Loading..."
                                }), ed && (0, r.jsxs)("div", {
                                    className: "jsx-4225c15b3266b003 text-red-400 text-center",
                                    children: ["Error: ", ed]
                                }), eu && eu[N.replace(" (OTC)", "")] ? (0, r.jsxs)("div", {
                                    className: "jsx-4225c15b3266b003",
                                    children: [(0, r.jsx)("div", {
                                        className: "jsx-4225c15b3266b003 flex gap-4 mt-1 justify-center",
                                        children: ["1M", "5M", "15M", "4H"].map(e => {
                                            let t = eu[N.replace(" (OTC)", "")][e];
                                            return (0, r.jsxs)("div", {
                                                className: "jsx-4225c15b3266b003 flex flex-col items-center justify-center",
                                                children: [(0, r.jsx)("span", {
                                                    className: "jsx-4225c15b3266b003 text-blue-300 font-semibold",
                                                    children: e
                                                }), "up" === t ? (0, r.jsx)(I.A, {
                                                    className: "text-green-500 w-5 h-5"
                                                }) : "down" === t ? (0, r.jsx)(C.A, {
                                                    className: "text-red-500 w-5 h-5"
                                                }) : (0, r.jsx)("span", {
                                                    className: "jsx-4225c15b3266b003",
                                                    children: t
                                                })]
                                            }, e)
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "jsx-4225c15b3266b003 flex gap-4 mt-2 justify-center",
                                        children: ["1M-TR", "5M-TR", "15M-TR", "4H-TR"].map((e, t) => {
                                            let a = eu[N.replace(" (OTC)", "")][e];
                                            return (0, r.jsxs)("div", {
                                                className: "jsx-4225c15b3266b003 flex flex-col items-center justify-center",
                                                children: [(0, r.jsx)("span", {
                                                    className: "jsx-4225c15b3266b003 text-purple-300 font-semibold",
                                                    children: "TR"
                                                }), "up" === a ? (0, r.jsx)(I.A, {
                                                    className: "text-green-500 w-5 h-5 mt-1"
                                                }) : "down" === a ? (0, r.jsx)(C.A, {
                                                    className: "text-red-500 w-5 h-5 mt-1"
                                                }) : (0, r.jsx)("span", {
                                                    className: "jsx-4225c15b3266b003 ml-1",
                                                    children: a
                                                })]
                                            }, e)
                                        })
                                    })]
                                }) : ei || ed ? null : (0, r.jsx)("div", {
                                    className: "jsx-4225c15b3266b003 text-gray-400 text-center",
                                    children: U || ey ? "Let's Go" : "Ready For Ai Analysis"
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "jsx-4225c15b3266b003 p-6 rounded-[2%] bg-gray-900/[0.9] backdrop-blur-sm w-80 flex flex-col items-center justify-center border border-cyan-500 shadow-lg shadow-cyan-500/50",
                                children: [(0, r.jsxs)("div", {
                                    className: "jsx-4225c15b3266b003 flex flex-col w-full",
                                    children: [(0, r.jsxs)(g, {
                                        value: y,
                                        onValueChange: j,
                                        children: [(0, r.jsx)(w, {
                                            className: "w-full text-center bg-black/[0.2] backdrop-blur-sm border border-cyan-800 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200",
                                            children: (0, r.jsx)(v, {
                                                placeholder: "Brokers"
                                            })
                                        }), (0, r.jsx)(S, {
                                            children: ["Quotex Broker", "Binolla Broker", "Expert Option", "Pocket Option"].map(e => (0, r.jsxs)(M, {
                                                value: e,
                                                className: "flex items-center",
                                                children: ["Quotex Broker" === e && (0, r.jsx)(P.default, {
                                                    src: "/Qx.webp",
                                                    alt: "Quotex Icon",
                                                    width: 20,
                                                    height: 20,
                                                    className: "mr-2 inline-block"
                                                }), "Binolla Broker" === e && (0, r.jsx)(P.default, {
                                                    src: "/Bi.png",
                                                    alt: "Binolla Icon",
                                                    width: 20,
                                                    height: 20,
                                                    className: "mr-2 inline-block"
                                                }), "Expert Option" === e && (0, r.jsx)(P.default, {
                                                    src: "/Eo.png",
                                                    alt: "Expert Option Icon",
                                                    width: 20,
                                                    height: 20,
                                                    className: "mr-2 inline-block"
                                                }), "Pocket Option" === e && (0, r.jsx)(P.default, {
                                                    src: "/Po.png",
                                                    alt: "Pocket Option Icon",
                                                    width: 20,
                                                    height: 20,
                                                    className: "mr-2 inline-block"
                                                }), e]
                                            }, e))
                                        })]
                                    }), (0, r.jsxs)(g, {
                                        onValueChange: k,
                                        defaultValue: "EURUSD",
                                        children: [(0, r.jsx)(w, {
                                            className: "w-full mt-4 bg-black/[0.2] backdrop-blur-sm border border-cyan-800 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200",
                                            children: (0, r.jsx)(v, {
                                                placeholder: "Assets"
                                            })
                                        }), (0, r.jsx)(S, {
                                            children: ["EURUSD", "EURJPY", "EURGBP"].map(e => (0, r.jsxs)(M, {
                                                value: e,
                                                className: "flex items-center",
                                                children: [(0, r.jsx)(P.default, {
                                                    src: "/asset.png",
                                                    alt: "Asset Icon",
                                                    width: 20,
                                                    height: 20,
                                                    className: "mr-2 inline-block"
                                                }), e]
                                            }, e))
                                        })]
                                    }), (0, r.jsxs)(g, {
                                        value: eg,
                                        onValueChange: ev,
                                        children: [(0, r.jsx)(w, {
                                            className: "w-full mt-4 bg-black/[0.2] backdrop-blur-sm border border-cyan-800 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200",
                                            children: (0, r.jsx)(v, {
                                                placeholder: "Minimum Percent"
                                            })
                                        }), (0, r.jsx)(S, {
                                            children: ["80%", "85%", "90%", "95%", "100%"].map(e => (0, r.jsx)(M, {
                                                value: e,
                                                children: "Minimum ".concat(e)
                                            }, e))
                                        })]
                                    }), (0, r.jsxs)(A, {
                                        defaultValue: "1M",
                                        className: "flex justify-around mt-4",
                                        onValueChange: T,
                                        children: [(0, r.jsx)(E, {
                                            value: "1M",
                                            id: "time-frame-1m",
                                            className: "opacity-0 peer sr-only"
                                        }), (0, r.jsx)("label", {
                                            htmlFor: "time-frame-1m",
                                            className: "jsx-4225c15b3266b003 " + "cursor-pointer rounded-[10%] border-2 border-muted p-2 text-center peer-checked:border-blue-500 peer-checked:shadow-lg peer-checked:shadow-blue-500/50 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 ".concat("1M" === R ? "bg-green-500 text-white" : ""),
                                            children: "⏰ 1M"
                                        }), (0, r.jsx)(E, {
                                            value: "5M",
                                            id: "time-frame-5m",
                                            className: "opacity-0 peer sr-only"
                                        }), (0, r.jsx)("label", {
                                            htmlFor: "time-frame-5m",
                                            className: "jsx-4225c15b3266b003 " + "cursor-pointer rounded-[10%] border-2 border-muted p-2 text-center peer-checked:border-blue-500 peer-checked:shadow-lg peer-checked:shadow-blue-500/50 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 ".concat("5M" === R ? "bg-green-500 text-white" : ""),
                                            children: "⏰ 5M"
                                        }), (0, r.jsx)(E, {
                                            value: "15M",
                                            id: "time-frame-15m",
                                            className: "opacity-0 peer sr-only"
                                        }), (0, r.jsx)("label", {
                                            htmlFor: "time-frame-15m",
                                            className: "jsx-4225c15b3266b003 " + "cursor-pointer rounded-[10%] border-2 border-muted p-2 text-center peer-checked:border-blue-500 peer-checked:shadow-lg peer-checked:shadow-blue-500/50 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 ".concat("15M" === R ? "bg-green-500 text-white" : ""),
                                            children: "⏰ 15M"
                                        })]
                                    })]
                                }), (0, r.jsx)(f, {
                                    onClick: eL,
                                    className: "w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-primary-foreground hover:opacity-80 transition-opacity text-center font-bold",
                                    disabled: U || "trial" === eT && eC > 0,
                                    children: "Ai Analysis v3"
                                }), "trial" === eT && eC > 0 && (0, r.jsxs)("div", {
                                    className: "jsx-4225c15b3266b003 mt-2 text-center font-bold",
                                    children: ["Trial Version", (0, r.jsx)("br", {
                                        className: "jsx-4225c15b3266b003"
                                    }), (0, r.jsx)("span", {
                                        className: "jsx-4225c15b3266b003 text-lime-400",
                                        children: "Next Free Analysis:"
                                    }), " ", (0, r.jsxs)("span", {
                                        className: "jsx-4225c15b3266b003 text-cyan-400",
                                        children: [eC, "s"]
                                    })]
                                }), U && (0, r.jsx)(h, {
                                    value: F,
                                    className: "mt-4"
                                }), !U && z && !ew && !ek && (0, r.jsxs)("div", {
                                    className: "jsx-4225c15b3266b003 mt-4 text-center flex items-center justify-center gap-2",
                                    children: [(0, r.jsx)("span", {
                                        className: "jsx-4225c15b3266b003 " + "text-2xl font-bold ".concat("BUY" === z ? "text-lime-500" : "text-red-500"),
                                        children: z
                                    }), null !== ex && (0, r.jsxs)("span", {
                                        className: "jsx-4225c15b3266b003 " + "text-3xl font-bold ".concat(ex > 95 ? "text-lime-400" : "text-cyan-400"),
                                        children: [ex, "%"]
                                    })]
                                }), ew && (0, r.jsxs)("div", {
                                    className: "jsx-4225c15b3266b003 mt-4 text-center text-yellow-400 font-bold",
                                    children: ["Recommendations Failed (", ex, "%)"]
                                }), ek && (0, r.jsx)("div", {
                                    className: "jsx-4225c15b3266b003 mt-4 text-center text-gray-400 font-bold",
                                    children: "Ready For Ai Analysis"
                                })]
                            })]
                        })
                    }), "BUY" === z && V.map(e => (0, r.jsx)(I.A, {
                        className: "absolute text-green-500",
                        style: {
                            left: "".concat(e.x, "vw"),
                            bottom: "0",
                            animation: "arrowAnimation 5s linear forwards ".concat(e.animationDelay, "s")
                        }
                    }, e.id)), "SELL" === z && V.map(e => (0, r.jsx)(C.A, {
                        className: "absolute text-red-500",
                        style: {
                            left: "".concat(e.x, "vw"),
                            top: "0",
                            animation: "arrowAnimationReverse 5s linear forwards ".concat(e.animationDelay, "s")
                        }
                    }, e.id)), (0, r.jsx)(l(), {
                        id: "4225c15b3266b003",
                        children: "@-webkit-keyframes arrowAnimation{0%{-webkit-transform:translatey(0);transform:translatey(0);opacity:0}20%{opacity:1}100%{-webkit-transform:translatey(-100vh);transform:translatey(-100vh);opacity:0}}@-moz-keyframes arrowAnimation{0%{-moz-transform:translatey(0);transform:translatey(0);opacity:0}20%{opacity:1}100%{-moz-transform:translatey(-100vh);transform:translatey(-100vh);opacity:0}}@-o-keyframes arrowAnimation{0%{-o-transform:translatey(0);transform:translatey(0);opacity:0}20%{opacity:1}100%{-o-transform:translatey(-100vh);transform:translatey(-100vh);opacity:0}}@keyframes arrowAnimation{0%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0);opacity:0}20%{opacity:1}100%{-webkit-transform:translatey(-100vh);-moz-transform:translatey(-100vh);-o-transform:translatey(-100vh);transform:translatey(-100vh);opacity:0}}@-webkit-keyframes arrowAnimationReverse{0%{-webkit-transform:translatey(0);transform:translatey(0);opacity:0}20%{opacity:1}100%{-webkit-transform:translatey(100vh);transform:translatey(100vh);opacity:0}}@-moz-keyframes arrowAnimationReverse{0%{-moz-transform:translatey(0);transform:translatey(0);opacity:0}20%{opacity:1}100%{-moz-transform:translatey(100vh);transform:translatey(100vh);opacity:0}}@-o-keyframes arrowAnimationReverse{0%{-o-transform:translatey(0);transform:translatey(0);opacity:0}20%{opacity:1}100%{-o-transform:translatey(100vh);transform:translatey(100vh);opacity:0}}@keyframes arrowAnimationReverse{0%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0);opacity:0}20%{opacity:1}100%{-webkit-transform:translatey(100vh);-moz-transform:translatey(100vh);-o-transform:translatey(100vh);transform:translatey(100vh);opacity:0}}.peer-checked:shadow-blue-500/50 {-webkit-box-shadow:0 0 0 3px#0000ff80;-moz-box-shadow:0 0 0 3px#0000ff80;box-shadow:0 0 0 3px#0000ff80}"
                    }), (0, r.jsxs)("footer", {
                        className: "jsx-4225c15b3266b003 absolute bottom-0 w-full text-center text-sm py-2 bg-gray-800 text-white flex items-center justify-center opacity-80",
                        children: [(0, r.jsx)(P.default, {
                            src: "/img.png",
                            alt: "Footer Icon",
                            width: 20,
                            height: 20,
                            className: "mr-2"
                        }), (0, r.jsx)("a", {
                            href: "https://t.me/TeleBinary",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "jsx-4225c15b3266b003 text-cyan-500 hover:underline",
                            children: "Developed By TeleBinary Team"
                        })]
                    })]
                })
            }
        },
        7676: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 7253))
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [96, 441, 684, 358], () => t(7676)), _N_E = e.O()
    }
]);