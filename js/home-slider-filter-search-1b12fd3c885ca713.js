(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4279], {
        45657: function (e, r, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/home/slider-filter-search", function () {
                return t(85133)
            }])
        },
        54623: function (e, r, t) {
            "use strict";
            t.d(r, {
                U: function () {
                    return o
                }
            });
            var n = t(85893),
                s = t(67294),
                l = t(9473),
                i = t(23038);
            let a = [{
                    name: "propertyStatus",
                    label: "Property Status",
                    size: "12",
                    options: ["Property Status", "For Rent", "For Sale"]
                }, {
                    name: "propertyType",
                    label: "Property Type",
                    size: "12",
                    options: ["Property Type", "Apartment", "Family House", "Cottage", "Condominium"]
                }, {
                    name: "maxRooms",
                    label: "Rooms",
                    size: "6",
                    options: ["Max Rooms", 1, 2, 3, 4, 5, 6]
                }, {
                    name: "bed",
                    label: "Bed",
                    size: "6",
                    options: ["Bed", 1, 2, 3, 4]
                }, {
                    name: "bath",
                    label: "Bath",
                    size: "6",
                    options: ["Bath", 1, 2, 3, 4]
                }, {
                    name: "agencies",
                    label: "Agencies",
                    size: "6",
                    options: ["Agencies", "Lincoln", "Blue Sky", "Zephry", "Premiere"]
                }],
                o = e => {
                    let {
                        label: r,
                        filterValues: t,
                        setFilterValues: o,
                        lg: c,
                        sm: d,
                        start: u,
                        end: h,
                        lastSm: p
                    } = e, m = (0, l.I0)(), [x, v] = (0, s.useState)("true"), j = (0, l.v9)(e => e.inputsReducer);
                    return (0, n.jsx)(n.Fragment, {
                        children: a.slice("".concat(u && u), "".concat(h && h)).map((e, s) => (0, n.jsx)(i.JX, {
                            lg: c || e.size,
                            sm: d || (p ? s > 1 && p : ""),
                            children: (0, n.jsxs)("div", {
                                className: "form-group",
                                children: [r && (0, n.jsx)("label", {
                                    children: e.label
                                }), (0, n.jsxs)(i.Lt, {
                                    isOpen: x === e.label,
                                    toggle: function () {
                                        v(e.label), x === e.label && v()
                                    },
                                    children: [(0, n.jsxs)(i.Z_, {
                                        className: "font-rubik",
                                        caret: !0,
                                        children: [j["".concat(e.name)] || e.label, (0, n.jsx)("i", {
                                            className: "fas fa-angle-down"
                                        })]
                                    }), (0, n.jsx)(i.h_, {
                                        children: e.options.map((r, s) => (0, n.jsx)("div", {
                                            onClick: () => {
                                                t = {
                                                    ...t,
                                                    ["".concat(e.name)]: "".concat(r)
                                                }, v()
                                            },
                                            children: (0, n.jsx)(i.hP, {
                                                onClick: () => {
                                                    o({
                                                        ...t,
                                                        ["".concat(e.name)]: r
                                                    }), m({
                                                        type: "".concat(e.name),
                                                        payload: r
                                                    })
                                                },
                                                children: r
                                            })
                                        }, s))
                                    })]
                                })]
                            })
                        }, s))
                    })
                }
        },
        56091: function (e, r, t) {
            "use strict";
            var n = t(85893),
                s = t(41664),
                l = t.n(s);
            t(67294);
            var i = t(18779);
            let a = () => (0, n.jsxs)("div", {
                className: "looking-icons",
                children: [(0, n.jsx)("h5", {
                    children: "What are you looking for?"
                }), (0, n.jsx)("ul", {
                    children: i.q.WhatAreYouLookingFor.map((e, r) => (0, n.jsx)("li", {
                        children: (0, n.jsxs)(l(), {
                            href: e.path,
                            className: "looking-icon",
                            children: [(0, n.jsx)("svg", {
                                className: "property-svg",
                                children: (0, n.jsx)("use", {
                                    xlinkHref: e.img
                                })
                            }), (0, n.jsx)("h6", {
                                children: e.title
                            })]
                        })
                    }, r))
                })]
            });
            r.Z = a
        },
        27685: function (e, r, t) {
            "use strict";
            t.d(r, {
                Z: function () {
                    return x
                }
            });
            var n = t(85893),
                s = t(67294),
                l = t(23038),
                i = t(3401),
                a = t(41664),
                o = t.n(a),
                c = t(24561),
                d = t(9473),
                u = t(47550),
                h = t(99008);
            let p = e => {
                    let {
                        data: r
                    } = e, [t, i] = (0, s.useState)(!0), {
                        symbol: a,
                        currencyValue: p
                    } = (0, d.v9)(e => e.currencyReducer);
                    return (0, n.jsx)(n.Fragment, {
                        children: t ? (0, n.jsxs)(c.ZP, {
                            className: "skeleton-svg",
                            children: [setTimeout(() => {
                                i(!1)
                            }, 3e3), (0, n.jsx)("rect", {
                                className: "skeleton-img"
                            }), (0, n.jsx)("rect", {
                                className: "skeleton-c1"
                            }), (0, n.jsx)("rect", {
                                className: "skeleton-c2"
                            }), (0, n.jsx)("rect", {
                                className: "skeleton-c3"
                            })]
                        }) : (0, n.jsx)("div", {
                            className: "property-box",
                            children: (0, n.jsxs)("div", {
                                className: "property-image",
                                children: [(0, n.jsxs)("a", {
                                    children: [(0, n.jsx)(u.Z, {
                                        src: null == r ? void 0 : r.img,
                                        className: "bg-img"
                                    }), (0, n.jsx)("div", {
                                        className: "labels-left",
                                        children: (0, n.jsx)(h.Z, {
                                            labels: null == r ? void 0 : r.label
                                        })
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "bottom-property",
                                    children: [(0, n.jsxs)("div", {
                                        className: "d-flex",
                                        children: [(0, n.jsxs)("div", {
                                            children: [(0, n.jsx)("h5", {
                                                children: (0, n.jsx)(o(), {
                                                    href: "/property/image-box/?id=".concat(r.id),
                                                    children: null == r ? void 0 : r.title
                                                })
                                            }), (0, n.jsxs)("h6", {
                                                children: [a, ((null == r ? void 0 : r.price) * p).toFixed(2), " ", (0, n.jsx)("small", {
                                                    children: "/ start from"
                                                })]
                                            })]
                                        }), (0, n.jsx)(o(), {
                                            href: "/property/image-box/?id=".concat(r.id),
                                            children: (0, n.jsx)(l.zx, {
                                                className: " btn-gradient mt-3",
                                                children: "Details"
                                            })
                                        })]
                                    }), (0, n.jsx)("div", {
                                        className: "overlay-option",
                                        children: (0, n.jsxs)("ul", {
                                            children: [(0, n.jsxs)("li", {
                                                children: [(0, n.jsx)("span", {
                                                    children: "Beds"
                                                }), (0, n.jsx)("h6", {
                                                    children: null == r ? void 0 : r.bed
                                                })]
                                            }), (0, n.jsxs)("li", {
                                                children: [(0, n.jsx)("span", {
                                                    children: "Baths"
                                                }), (0, n.jsx)("h6", {
                                                    children: null == r ? void 0 : r.bath
                                                })]
                                            }), (0, n.jsxs)("li", {
                                                children: [(0, n.jsx)("span", {
                                                    children: "Balcony"
                                                }), (0, n.jsx)("h6", {
                                                    children: null == r ? void 0 : r.balcony
                                                })]
                                            }), (0, n.jsxs)("li", {
                                                children: [(0, n.jsx)("span", {
                                                    children: "Area"
                                                }), (0, n.jsxs)("h6", {
                                                    children: [null == r ? void 0 : r.area, "m", (0, n.jsx)("sup", {
                                                        children: "2"
                                                    })]
                                                })]
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                m = e => {
                    let {
                        value: r
                    } = e;
                    return (0, n.jsx)("section", {
                        className: "property-section slick-between slick-shadow",
                        children: (0, n.jsx)(l.W2, {
                            children: (0, n.jsx)(l.X2, {
                                className: " ratio_landscape",
                                children: (0, n.jsxs)(l.JX, {
                                    children: [(0, n.jsxs)("div", {
                                        className: "title-1",
                                        children: [(0, n.jsx)("span", {
                                            className: "label label-gradient",
                                            children: i.r3
                                        }), (0, n.jsx)("h2", {
                                            children: i.BN
                                        }), (0, n.jsx)("hr", {})]
                                    }), (0, n.jsx)(l.X2, {
                                        className: "listing-hover-property",
                                        children: r && r.map((e, r) => (0, n.jsx)(l.JX, {
                                            xl: "4",
                                            md: "6",
                                            children: (0, n.jsx)(p, {
                                                data: e
                                            })
                                        }, r))
                                    })]
                                })
                            })
                        })
                    })
                };
            var x = m
        },
        63291: function (e, r, t) {
            "use strict";
            t.d(r, {
                Z: function () {
                    return x
                }
            });
            var n = t(85893),
                s = t(41664),
                l = t.n(s),
                i = t(67294),
                a = t(23038),
                o = t(8640),
                c = t(54623),
                d = t(94398),
                u = t(9473),
                h = t(20633);
            let p = e => {
                    let {
                        label: r,
                        name: t,
                        filterValues: s,
                        setFilterValues: l,
                        min: o,
                        max: c,
                        sm: p,
                        lg: m
                    } = e, {
                        symbol: x,
                        currencyValue: v
                    } = (0, u.v9)(e => e.currencyReducer), {
                        price: j,
                        area: f
                    } = (0, u.v9)(e => e.inputsReducer), g = (0, u.I0)();
                    var [y, b] = (0, i.useState)(o), [w, O] = (0, i.useState)(c);
                    return (0, i.useEffect)(() => {
                        b(o), O(c)
                    }, [c, o]), (0, n.jsx)(a.JX, {
                        lg: m || 12,
                        sm: p || 12,
                        children: (0, n.jsx)(h.Z, {
                            children: (0, n.jsx)(a.cw, {
                                children: (0, n.jsxs)("div", {
                                    className: "price-range",
                                    children: [(0, n.jsxs)(a.__, {
                                        children: [r, " : ", "Price" === r && "".concat(x), " ", ("Area" === r ? f[0] : j[0] * v).toFixed(2), " - ", "Price" === r && "".concat(x), " ", ("Area" === r ? f[1] : j[1] * v).toFixed(2), " ", "Area" === r && "sq ft"]
                                    }), (0, n.jsx)("div", {
                                        id: "Price" === r ? "slider-1" : "slider-2",
                                        className: "theme-range-3",
                                        children: (0, n.jsx)(d.Range, {
                                            values: "Price" === r ? j : f,
                                            step: 1,
                                            min: y || 1e3,
                                            max: w || 1e4,
                                            onChange: e => {
                                                l({
                                                    ...s,
                                                    ["".concat(t)]: e
                                                }), g({
                                                    type: r.toLowerCase(),
                                                    payload: e
                                                })
                                            },
                                            renderTrack: e => {
                                                let {
                                                    props: t,
                                                    children: s
                                                } = e;
                                                return (0, n.jsx)("div", {
                                                    onMouseDown: t.onMouseDown,
                                                    onTouchStart: t.onTouchStart,
                                                    style: {
                                                        ...t.style
                                                    },
                                                    children: (0, n.jsx)("div", {
                                                        ref: t.ref,
                                                        style: {
                                                            height: "5px",
                                                            width: "100%",
                                                            borderRadius: "4px",
                                                            background: (0, d.getTrackBackground)({
                                                                values: "Price" === r ? j : f,
                                                                colors: ["#ccc", "var(--theme-default2)", "#ccc"],
                                                                min: y,
                                                                max: w
                                                            }),
                                                            alignSelf: "center"
                                                        },
                                                        children: s
                                                    })
                                                })
                                            },
                                            renderThumb: e => {
                                                let {
                                                    props: r
                                                } = e;
                                                return (0, n.jsx)("div", {
                                                    ...r,
                                                    children: (0, n.jsx)("div", {
                                                        style: {
                                                            height: "16px",
                                                            width: "8px",
                                                            borderRadius: "30%",
                                                            backgroundColor: "var(--theme-default2)"
                                                        }
                                                    })
                                                })
                                            }
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                m = e => {
                    let {
                        label: r,
                        lg: t,
                        sm: s,
                        lastSm: d
                    } = e, [u, h] = (0, i.useState)({}), [m, x] = (0, i.useState)();
                    (0, i.useEffect)(() => {
                        (0, o.Y)("".concat("https://sheltos-react-sooty.vercel.app/api", "/property")).then(e => {
                            x(e.data && void 0 !== e.data && Object.keys(e.data).map(r => [e.data[r]]).flat(2).filter(e => Array.isArray(e.img)))
                        }).catch(e => console.log("Error", e))
                    }, []);
                    let v = (null == m ? void 0 : m.length) !== 0 && (null == m ? void 0 : m.reduce(function (e, r) {
                            return Math.round(null == r ? void 0 : r.price) < Math.round(null == e ? void 0 : e.price) ? r : e
                        })),
                        j = (null == m ? void 0 : m.length) !== 0 && (null == m ? void 0 : m.reduce(function (e, r) {
                            return Math.round(null == r ? void 0 : r.price) > Math.round(null == e ? void 0 : e.price) ? r : e
                        })),
                        f = (null == m ? void 0 : m.length) !== 0 && (null == m ? void 0 : m.reduce(function (e, r) {
                            return Math.round(null == r ? void 0 : r.sqft) < Math.round(null == e ? void 0 : e.sqft) ? r : e
                        })),
                        g = (null == m ? void 0 : m.length) !== 0 && (null == m ? void 0 : m.reduce(function (e, r) {
                            return Math.round(null == r ? void 0 : r.sqft) > Math.round(null == e ? void 0 : e.sqft) ? r : e
                        }));
                    return (0, n.jsxs)(a.X2, {
                        className: "gx-3",
                        children: [(0, n.jsx)(c.U, {
                            filterValues: u,
                            setFilterValues: h,
                            label: r,
                            start: 0,
                            end: 6,
                            lg: t,
                            sm: s,
                            lastSm: d
                        }), (0, n.jsx)(p, {
                            label: "Price",
                            name: "price",
                            filterValues: u,
                            setFilterValues: h,
                            min: Math.round(null == v ? void 0 : v.price),
                            max: Math.round(null == j ? void 0 : j.price),
                            lg: t,
                            sm: s
                        }), (0, n.jsx)(p, {
                            label: "Area",
                            name: "area",
                            filterValues: u,
                            setFilterValues: h,
                            min: Math.round(null == f ? void 0 : f.sqft),
                            max: Math.round(null == g ? void 0 : g.sqft),
                            lg: t,
                            sm: s
                        }), (0, n.jsx)(a.JX, {
                            lg: t || 12,
                            children: (0, n.jsx)(l(), {
                                href: "/listing/list-view/listing/left-sidebar",
                                className: "btn btn-gradient mt-3",
                                children: "Search"
                            })
                        })]
                    })
                };
            var x = m
        },
        85133: function (e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                __N_SSG: function () {
                    return T
                },
                default: function () {
                    return _
                }
            });
            var n = t(85893),
                s = t(67294),
                l = t(8640),
                i = t(18779),
                a = t(80404),
                o = t(5269),
                c = t(46066),
                d = t(23038),
                u = t(67739),
                h = t(20633);
            let p = () => (0, n.jsx)("section", {
                className: "small-section",
                children: (0, n.jsx)(d.W2, {
                    children: (0, n.jsx)(d.X2, {
                        children: (0, n.jsx)(d.JX, {
                            children: (0, n.jsx)(h.Z, {
                                children: (0, n.jsx)(c.Z, {
                                    className: "slide-1 brand-slider",
                                    ...u.xD,
                                    children: i.q.Brand1.map((e, r) => (0, n.jsx)("div", {
                                        children: (0, n.jsx)("a", {
                                            className: "logo-box",
                                            children: (0, n.jsx)("img", {
                                                src: e,
                                                alt: "",
                                                className: "img-fluid"
                                            })
                                        })
                                    }, r))
                                })
                            })
                        })
                    })
                })
            });
            var m = t(77675),
                x = t(38883),
                v = t(56091),
                j = t(41664),
                f = t.n(j),
                g = t(3401);
            let y = e => {
                let {
                    img: r,
                    mainTitle: t
                } = e;
                return (0, n.jsx)("div", {
                    children: (0, n.jsx)("div", {
                        className: "home-content",
                        children: (0, n.jsxs)("div", {
                            children: [(0, n.jsx)("img", {
                                src: r,
                                className: "img-fluid m-0",
                                alt: ""
                            }), (0, n.jsx)("h6", {
                                children: g.nD
                            }), (0, n.jsx)("h1", {
                                children: t
                            }), (0, n.jsx)(f(), {
                                href: "/agent/submit-property",
                                className: "btn btn-gradient",
                                children: g.Cu
                            })]
                        })
                    })
                })
            };
            var b = t(63291);
            let w = () => (0, n.jsx)("section", {
                className: "home-section layout-1 layout-6",
                children: (0, n.jsx)("div", {
                    className: "home-main",
                    children: (0, n.jsx)(d.W2, {
                        children: (0, n.jsxs)(d.X2, {
                            children: [(0, n.jsx)(d.JX, {
                                lg: "7",
                                children: (0, n.jsx)(d.W2, {
                                    children: (0, n.jsx)("div", {
                                        className: "home-left",
                                        children: (0, n.jsxs)("div", {
                                            children: [(0, n.jsx)(h.Z, {
                                                children: (0, n.jsxs)(c.Z, {
                                                    className: "home-slider-1 arrow-light slick-shadow",
                                                    ...u.bx,
                                                    children: [(0, n.jsx)(y, {
                                                        img: "/assets/images/signature/2.png",
                                                        mainTitle: "Reality Properties solve your problems"
                                                    }), (0, n.jsx)(y, {
                                                        img: "/assets/images/signature/1.png",
                                                        mainTitle: "Properties Seller"
                                                    })]
                                                })
                                            }), (0, n.jsx)(v.Z, {})]
                                        })
                                    })
                                })
                            }), (0, n.jsx)(d.JX, {
                                xl: "4",
                                lg: "5",
                                children: (0, n.jsx)("div", {
                                    className: "home-search-6",
                                    children: (0, n.jsx)("div", {
                                        className: "vertical-search",
                                        children: (0, n.jsx)("div", {
                                            className: "left-sidebar",
                                            children: (0, n.jsx)(b.Z, {
                                                lastSm: "6"
                                            })
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })
            });
            var O = t(83218),
                N = t(60179),
                k = t(27685),
                P = t(43409);
            let S = () => {
                let [e, r] = (0, s.useState)(), [t, c] = (0, s.useState)();
                return (0, s.useEffect)(() => {
                    (0, l.Y)("".concat("https://sheltos-react-sooty.vercel.app/api", "/property")).then(e => {
                        r(e.data)
                    }).catch(e => console.log("Error", e)), (0, l.Y)("".concat("https://sheltos-react-sooty.vercel.app/api", "/client-agent")).then(e => {
                        c(e.data)
                    }).catch(e => console.log("Error", e))
                }, []), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(w, {}), (0, n.jsx)(k.Z, {
                        value: null == e ? void 0 : e.LatestForSalePropertyData
                    }), (0, n.jsx)(x.Z, {
                        value: null == e ? void 0 : e.FeaturedProperty
                    }), (0, n.jsx)(N.Z, {
                        value: null == e ? void 0 : e.LatestPropertyData
                    }), (0, n.jsx)(O.Z, {
                        value: i.q.OurNewOffer
                    }), (0, n.jsx)(m.Z, {
                        value: null == e ? void 0 : e.FindPropertiesInTheseCities
                    }), (0, n.jsx)(o.Z, {}), (0, n.jsx)(a.Z, {
                        value: null == t ? void 0 : t.MeetOurAgent
                    }), (0, n.jsx)(P.Z, {
                        value: null == t ? void 0 : t.HappyClient,
                        normal: !0
                    }), (0, n.jsx)(p, {})]
                })
            };
            var E = t(99950),
                Z = t(80856),
                z = t(28357);
            let M = () => ((0, s.useEffect)(() => {
                setTimeout(() => {
                    E.Q.PrimaryColor || document.documentElement.style.setProperty("--theme-default", "#2c2e97"), E.Q.SecondaryColor || document.documentElement.style.setProperty("--theme-default2", "#4b55c4")
                }, .1)
            }, []), (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(z.Z, {}), (0, n.jsx)(S, {}), (0, n.jsx)(Z.Z, {})]
            }));
            var T = !0,
                _ = M
        },
        77424: function (e, r, t) {
            "use strict";
            var n = t(67294),
                s = t(45697),
                l = t.n(s);

            function i() {
                return (i = Object.assign || function (e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = (0, n.forwardRef)(function (e, r) {
                var t = e.color,
                    s = e.size,
                    l = void 0 === s ? 24 : s,
                    a = function (e, r) {
                        if (null == e) return {};
                        var t, n, s = function (e, r) {
                            if (null == e) return {};
                            var t, n, s = {},
                                l = Object.keys(e);
                            for (n = 0; n < l.length; n++) t = l[n], r.indexOf(t) >= 0 || (s[t] = e[t]);
                            return s
                        }(e, r);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < l.length; n++) t = l[n], !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (s[t] = e[t])
                        }
                        return s
                    }(e, ["color", "size"]);
                return n.createElement("svg", i({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: void 0 === t ? "currentColor" : t,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, a), n.createElement("path", {
                    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                }), n.createElement("path", {
                    d: "M13.73 21a2 2 0 0 1-3.46 0"
                }))
            });
            a.propTypes = {
                color: l().string,
                size: l().oneOfType([l().string, l().number])
            }, a.displayName = "Bell", r.Z = a
        },
        84693: function (e, r, t) {
            "use strict";
            var n = t(67294),
                s = t(45697),
                l = t.n(s);

            function i() {
                return (i = Object.assign || function (e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = (0, n.forwardRef)(function (e, r) {
                var t = e.color,
                    s = e.size,
                    l = void 0 === s ? 24 : s,
                    a = function (e, r) {
                        if (null == e) return {};
                        var t, n, s = function (e, r) {
                            if (null == e) return {};
                            var t, n, s = {},
                                l = Object.keys(e);
                            for (n = 0; n < l.length; n++) t = l[n], r.indexOf(t) >= 0 || (s[t] = e[t]);
                            return s
                        }(e, r);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < l.length; n++) t = l[n], !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (s[t] = e[t])
                        }
                        return s
                    }(e, ["color", "size"]);
                return n.createElement("svg", i({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: void 0 === t ? "currentColor" : t,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, a), n.createElement("path", {
                    d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
                }), n.createElement("path", {
                    d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                }))
            });
            a.propTypes = {
                color: l().string,
                size: l().oneOfType([l().string, l().number])
            }, a.displayName = "BookOpen", r.Z = a
        },
        12590: function (e, r, t) {
            "use strict";
            var n = t(67294),
                s = t(45697),
                l = t.n(s);

            function i() {
                return (i = Object.assign || function (e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = (0, n.forwardRef)(function (e, r) {
                var t = e.color,
                    s = e.size,
                    l = void 0 === s ? 24 : s,
                    a = function (e, r) {
                        if (null == e) return {};
                        var t, n, s = function (e, r) {
                            if (null == e) return {};
                            var t, n, s = {},
                                l = Object.keys(e);
                            for (n = 0; n < l.length; n++) t = l[n], r.indexOf(t) >= 0 || (s[t] = e[t]);
                            return s
                        }(e, r);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < l.length; n++) t = l[n], !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (s[t] = e[t])
                        }
                        return s
                    }(e, ["color", "size"]);
                return n.createElement("svg", i({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: void 0 === t ? "currentColor" : t,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, a), n.createElement("path", {
                    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                }), n.createElement("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }))
            });
            a.propTypes = {
                color: l().string,
                size: l().oneOfType([l().string, l().number])
            }, a.displayName = "Eye", r.Z = a
        },
        22774: function (e, r, t) {
            "use strict";
            var n = t(67294),
                s = t(45697),
                l = t.n(s);

            function i() {
                return (i = Object.assign || function (e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = (0, n.forwardRef)(function (e, r) {
                var t = e.color,
                    s = e.size,
                    l = void 0 === s ? 24 : s,
                    a = function (e, r) {
                        if (null == e) return {};
                        var t, n, s = function (e, r) {
                            if (null == e) return {};
                            var t, n, s = {},
                                l = Object.keys(e);
                            for (n = 0; n < l.length; n++) t = l[n], r.indexOf(t) >= 0 || (s[t] = e[t]);
                            return s
                        }(e, r);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < l.length; n++) t = l[n], !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (s[t] = e[t])
                        }
                        return s
                    }(e, ["color", "size"]);
                return n.createElement("svg", i({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: void 0 === t ? "currentColor" : t,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, a), n.createElement("path", {
                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                }), n.createElement("polyline", {
                    points: "22,6 12,13 2,6"
                }))
            });
            a.propTypes = {
                color: l().string,
                size: l().oneOfType([l().string, l().number])
            }, a.displayName = "Mail", r.Z = a
        }
    },
    function (e) {
        e.O(0, [1664, 7121, 9990, 4398, 7253, 4269, 7050, 675, 8306, 9774, 2888, 179], function () {
            return e(e.s = 45657)
        }), _N_E = e.O()
    }
]);