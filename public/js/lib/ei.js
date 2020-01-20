! function(e) {
    var t = {};

    function r(n) {
        if(t[n]) return t[n].exports;
        var a = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if(1 & t && (e = r(e)), 8 & t) return e;
        if(4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if(r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for(var a in e) r.d(n, a, function(t) {
                return e[t]
            }.bind(null, a));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "https://static.codepen.io/assets/packs/", r(r.s = 432)
}({
    432: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = {
                _HTML_TYPES: ["html", "xml", "haml", "markdown", "slim", "pug", "application/x-slim"],
                _CSS_TYPES: ["css", "less", "scss", "sass", "stylus", "postcss", "text/css", "text/x-sass", "text/x-scss", "text/x-less", "text/x-styl"],
                _JS_TYPES: ["js", "javascript", "coffeescript", "livescript", "typescript", "babel", "text/javascript", "text/x-coffeescript", "text/x-livescript", "text/typescript"],
                cmModeToType: function(e) {
                    var t = this._getSafeInputMode(e);
                    return this._getType(t)
                },
                _getSafeInputMode: function(e) {
                    return("string" == typeof e ? e : e.name).toLowerCase()
                },
                syntaxToType: function(e) {
                    return this._getType(e)
                },
                _getType: function(e) {
                    return -1 !== this._HTML_TYPES.indexOf(e) ? "html" : -1 !== this._CSS_TYPES.indexOf(e) ? "css" : -1 !== this._JS_TYPES.indexOf(e) ? "js" : "unknown"
                }
            },
            a = function e(t) {
                "loading" === document.readyState ? setTimeout((function() {
                    e(t)
                }), 9) : t()
            },
            i = function() {
                "function" == typeof __CodePenIFrameAddedToPage && __CodePenIFrameAddedToPage()
            },
            o = ["title", "description", "tags", "html_classes", "head", "stylesheets", "scripts"],
            s = function(e) {
                for(var t = {}, r = e.attributes, n = 0, a = r.length; n < a; n++) {
                    var i = r[n].name;
                    0 === i.indexOf("data-") && (t[i.replace("data-", "")] = r[n].value)
                }
                return t = c(t), l(t) ? (t.user = u(t, e), t) : null
            },
            u = function(e, t) {
                if("string" == typeof e.user) return e.user;
                for(var r = 0, n = t.children.length; r < n; r++) {
                    var a = (t.children[r].href || "").match(/codepen\.(io|dev)\/(\w+)\/pen\//i);
                    if(a) return a[2]
                }
                return "anon"
            },
            l = function(e) {
                return "prefill" in e || e["slug-hash"]
            },
            c = function(e) {
                return e.href && (e["slug-hash"] = e.href), e.type && (e["default-tab"] = e.type), e.safe && ("true" === e.safe ? e.animations = "run" : e.animations = "stop-after-5"), e
            },
            p = function(e) {
                return e.host ? d(e.host) : "https://codepen.io"
            },
            d = function(e) {
                return e.match(/^\/\//) || !e.match(/https?:/) ? document.location.protocol + "//" + e : e
            },
            f = function(e) {
                var t = "";
                for(var r in e) "prefill" !== r && ("" !== t && (t += "&"), t += r + "=" + encodeURIComponent(e[r]));
                return t
            },
            m = function(e) {
                return e.height ? e.height : 300
            },
            h = function(e, t) {
                var r, n = document.createDocumentFragment();
                n.appendChild(y(e)), "prefill" in e && (r = v(e, t), n.appendChild(r)), g(t, n), r && r.submit()
            },
            _ = function(e, t) {
                var r = document.createElement(e);
                for(var n in t) Object.prototype.hasOwnProperty.call(t, n) && r.setAttribute(n, t[n]);
                return r
            },
            v = function(e, t) {
                var r = p(e),
                    a = _("form", {
                        class: "cp_embed_form",
                        style: "display: none;",
                        method: "post",
                        action: r + "/embed/prefill/",
                        target: e.name
                    });
                for(var i in e.data = function(e) {
                        if(e.hasAttribute("data-prefill")) {
                            var t = {},
                                r = e.getAttribute("data-prefill");
                            for(var a in r = JSON.parse(decodeURI(r) || "{}")) o.indexOf(a) > -1 && (t[a] = r[a]);
                            for(var i = e.querySelectorAll("[data-lang]"), s = 0; s < i.length; s++) {
                                var u = i[s],
                                    l = u.getAttribute("data-lang");
                                u.getAttribute("data-options-autoprefixer") && (t.css_prefix = "autoprefixer");
                                var c = n.syntaxToType(l);
                                t[c] = u.innerText, l !== c && (t[c + "_pre_processor"] = l)
                            }
                            return JSON.stringify(t)
                        }
                    }(t), e) "prefill" !== i && a.appendChild(_("input", {
                    type: "hidden",
                    name: i,
                    value: e[i]
                }));
                return a
            },
            y = function(e) {
                var t, r = function(e) {
                    var t = p(e);
                    if("prefill" in e) return t + "/embed/prefill/";
                    var r = f(e);
                    return [t, e.user ? e.user : "anon", e.preview && "true" === e.preview ? "embed/preview" : "embed", e["slug-hash"] + "?" + r].join("/").replace(/\/\//g, "//")
                }(e);
                t = e["pen-title"] ? e["pen-title"] : "CodePen Embed";
                var n = {
                    name: e.name || "CodePen Embed",
                    src: r,
                    scrolling: "no",
                    frameborder: "0",
                    height: m(e),
                    allowTransparency: "true",
                    allowfullscreen: "true",
                    allowpaymentrequest: "true",
                    title: t,
                    class: "cp_embed_iframe " + (e.class ? e.class : ""),
                    style: "width: 100%; overflow:hidden; display:block;"
                };
                return e["slug-hash"] && (n.id = "cp_embed_" + e["slug-hash"].replace("/", "_")), _("iframe", n)
            },
            g = function(e, t) {
                if(e.parentNode) {
                    var r = document.createElement("div");
                    return r.className = "cp_embed_wrapper", r.appendChild(t), e.parentNode.replaceChild(r, e), r
                }
                return e.appendChild(t), e
            };
        var b = 1;

        function x(e) {
            e = "string" == typeof e ? e : ".codepen";
            for(var t = document.querySelectorAll(e), r = 0, n = t.length; r < n; r++) {
                var a = t[r],
                    o = s(a);
                o && (o.name = "cp_embed_" + b++, h(o, a))
            }
            i()
        }
        x.readme = "2019-01-18 - added version number back in.", window.__cp_eijs_version = "3.1.0", window.__cp_domReady = a, window.__CPEmbed = x, a(x)
    }
});