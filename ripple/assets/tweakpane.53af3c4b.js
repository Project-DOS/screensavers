import { y as t, B as e } from "./app.c4cbb42c.js"
/*! Tweakpane 2.4.3 (c) 2016 cocopon, licensed under the MIT license. */ var n =
  t(function (t, e) {
    t.exports = (function () {
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
          })(e, n)
      }
      function e(e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          )
        function r() {
          this.constructor = e
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()))
      }
      var n = function () {
        return (n =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            return t
          }).apply(this, arguments)
      }
      function r() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length
        var r = Array(t),
          i = 0
        for (e = 0; e < n; e++)
          for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++)
            r[i] = o[a]
        return r
      }
      function i(t) {
        return t
      }
      function o(t) {
        return null == t
      }
      function a(t, e) {
        if (t.length !== e.length) return !1
        for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1
        return !0
      }
      var s = {
          alreadydisposed: function () {
            return "View has been already disposed"
          },
          invalidparams: function (t) {
            return "Invalid parameters for '" + t.name + "'"
          },
          nomatchingcontroller: function (t) {
            return "No matching controller for '" + t.key + "'"
          },
          nomatchingview: function (t) {
            return "No matching view for '" + JSON.stringify(t.params) + "'"
          },
          notbindable: function () {
            return "Value is not bindable"
          },
          propertynotfound: function (t) {
            return "Property '" + t.name + "' not found"
          },
          shouldneverhappen: function () {
            return "This error should never happen"
          },
        },
        l = (function () {
          function t(t) {
            var e
            ;(this.message =
              null !== (e = s[t.type](i(t.context))) && void 0 !== e
                ? e
                : "Unexpected error"),
              (this.name = this.constructor.name),
              (this.stack = new Error(this.message).stack),
              (this.type = t.type)
          }
          return (
            (t.alreadyDisposed = function () {
              return new t({ type: "alreadydisposed" })
            }),
            (t.notBindable = function () {
              return new t({ type: "notbindable" })
            }),
            (t.propertyNotFound = function (e) {
              return new t({ type: "propertynotfound", context: { name: e } })
            }),
            (t.shouldNeverHappen = function () {
              return new t({ type: "shouldneverhappen" })
            }),
            t
          )
        })()
      ;(l.prototype = Object.create(Error.prototype)),
        (l.prototype.constructor = l)
      var p = (function () {
          function t() {
            this.observers_ = {}
          }
          return (
            (t.prototype.on = function (t, e) {
              var n = this.observers_[t]
              return (
                n || (n = this.observers_[t] = []), n.push({ handler: e }), this
              )
            }),
            (t.prototype.off = function (t, e) {
              var n = this.observers_[t]
              return (
                n &&
                  (this.observers_[t] = n.filter(function (t) {
                    return t.handler !== e
                  })),
                this
              )
            }),
            (t.prototype.emit = function (t, e) {
              var n = this.observers_[t]
              n &&
                n.forEach(function (t) {
                  t.handler(e)
                })
            }),
            t
          )
        })(),
        u = (function () {
          function t(t, e) {
            var n
            ;(this.constraint_ = null == e ? void 0 : e.constraint),
              (this.equals_ =
                null !== (n = null == e ? void 0 : e.equals) && void 0 !== n
                  ? n
                  : function (t, e) {
                      return t === e
                    }),
              (this.emitter = new p()),
              (this.rawValue_ = t)
          }
          return (
            Object.defineProperty(t.prototype, "constraint", {
              get: function () {
                return this.constraint_
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "rawValue", {
              get: function () {
                return this.rawValue_
              },
              set: function (t) {
                var e = this.constraint_ ? this.constraint_.constrain(t) : t
                !this.equals_(this.rawValue_, e) &&
                  (this.emitter.emit("beforechange", { sender: this }),
                  (this.rawValue_ = e),
                  this.emitter.emit("change", { rawValue: e, sender: this }))
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          )
        })(),
        d = (function () {
          function t(t) {
            ;(this.emitter = new p()), (this.value_ = t)
          }
          return (
            Object.defineProperty(t.prototype, "rawValue", {
              get: function () {
                return this.value_
              },
              set: function (t) {
                this.value_ !== t &&
                  (this.emitter.emit("beforechange", { sender: this }),
                  (this.value_ = t),
                  this.emitter.emit("change", {
                    sender: this,
                    rawValue: this.value_,
                  }))
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          )
        })()
      function c(t, e) {
        var n = null == e ? void 0 : e.constraint,
          r = null == e ? void 0 : e.equals
        return n || r ? new u(t, e) : new d(t)
      }
      var h = (function () {
        function t(t) {
          var e = this
          ;(this.emitter = new p()), (this.valMap_ = t)
          var n = function (t) {
              r.valMap_[t].emitter.on("change", function () {
                e.emitter.emit("change", { key: t, sender: e })
              })
            },
            r = this
          for (var i in this.valMap_) n(i)
        }
        return (
          (t.createCore = function (t) {
            return Object.keys(t).reduce(function (e, n) {
              var r
              return Object.assign(e, (((r = {})[n] = c(t[n])), r))
            }, {})
          }),
          (t.fromObject = function (e) {
            return new t(this.createCore(e))
          }),
          (t.prototype.get = function (t) {
            return this.valMap_[t].rawValue
          }),
          (t.prototype.set = function (t, e) {
            this.valMap_[t].rawValue = e
          }),
          (t.prototype.value = function (t) {
            return this.valMap_[t]
          }),
          (t.prototype.valueEmitter = function (t) {
            return (
              console.warn(
                "ValueMap.valueEmitter is deprecated. Use ValueMap.value.emitter instead.\nThis polyfill will be removed in the next major version."
              ),
              this.valMap_[t].emitter
            )
          }),
          t
        )
      })()
      function v() {
        return new h({ positions: c([], { equals: a }) })
      }
      function f(t) {
        return t && t.parentElement && t.parentElement.removeChild(t), null
      }
      var m = "tp"
      function b(t) {
        return function (e, n) {
          return [m, "-", t, "v", e ? "_" + e : "", n ? "-" + n : ""].join("")
        }
      }
      function g() {
        return ["veryfirst", "first", "last", "verylast"]
      }
      var _ = b(""),
        w = { veryfirst: "vfst", first: "fst", last: "lst", verylast: "vlst" },
        y = (function () {
          function t(t) {
            var e = this
            ;(this.parent_ = null),
              (this.blade = t.blade),
              (this.view = t.view),
              (this.viewProps = t.viewProps)
            var n = this.view.element
            this.blade.value("positions").emitter.on("change", function () {
              g().forEach(function (t) {
                n.classList.remove(_(void 0, w[t]))
              }),
                e.blade.get("positions").forEach(function (t) {
                  n.classList.add(_(void 0, w[t]))
                })
            }),
              this.viewProps.handleDispose(function () {
                e.view.onDispose &&
                  (console.warn(
                    "View.onDispose is deprecated. Use ViewProps.value('disposed').emitter instead."
                  ),
                  e.view.onDispose()),
                  f(n)
              })
          }
          return (
            Object.defineProperty(t.prototype, "parent", {
              get: function () {
                return this.parent_
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          )
        })(),
        x = "http://www.w3.org/2000/svg"
      function C(t) {
        t.offsetHeight
      }
      function P(t, e) {
        var n = t.style.transition
        ;(t.style.transition = "none"), e(), (t.style.transition = n)
      }
      function k(t) {
        return void 0 !== t.ontouchstart
      }
      function E() {
        return new Function("return this")()
      }
      function V() {
        return i(E()).document
      }
      function L() {
        return "document" in E()
      }
      function S(t) {
        return L() ? t.getContext("2d") : null
      }
      var M = {
        check: '<path d="M2 8l4 4l8 -8"/>',
        dropdown: '<path d="M5 7h6l-3 3 z"/>',
        p2dpad:
          '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>',
      }
      function j(t, e) {
        var n = t.createElementNS(x, "svg")
        return (n.innerHTML = M[e]), n
      }
      function A(t, e, n) {
        t.insertBefore(e, t.children[n])
      }
      function D(t) {
        t.parentElement && t.parentElement.removeChild(t)
      }
      function O(t) {
        for (; t.children.length > 0; ) t.removeChild(t.children[0])
      }
      function N(t) {
        for (; t.childNodes.length > 0; ) t.removeChild(t.childNodes[0])
      }
      function I(t) {
        return t.relatedTarget
          ? i(t.relatedTarget)
          : "explicitOriginalTarget" in t
          ? t.explicitOriginalTarget
          : null
      }
      function B(t, e) {
        return function (n) {
          return e(t(n))
        }
      }
      function K(t) {
        return t.rawValue
      }
      function R(t, e) {
        t.emitter.on("change", B(K, e)), e(t.rawValue)
      }
      function U(t, e, n) {
        R(t.value(e), n)
      }
      var T = b("lbl")
      function F(t, e) {
        var n = t.createDocumentFragment()
        return (
          e
            .split("\n")
            .map(function (e) {
              return t.createTextNode(e)
            })
            .forEach(function (e, r) {
              r > 0 && n.appendChild(t.createElement("br")), n.appendChild(e)
            }),
          n
        )
      }
      var H = (function () {
          function t(t, e) {
            var n = this
            ;(this.element = t.createElement("div")),
              this.element.classList.add(T()),
              e.viewProps.bindClassModifiers(this.element)
            var r = t.createElement("div")
            r.classList.add(T("l")),
              U(e.props, "label", function (e) {
                o(e)
                  ? n.element.classList.add(T(void 0, "nol"))
                  : (n.element.classList.remove(T(void 0, "nol")),
                    N(r),
                    r.appendChild(F(t, e)))
              }),
              this.element.appendChild(r),
              (this.labelElement = r)
            var i = t.createElement("div")
            i.classList.add(T("v")),
              this.element.appendChild(i),
              (this.valueElement = i)
          }
          return t
        })(),
        z = (function (t) {
          function r(e, r) {
            var i = this,
              o = r.valueController.viewProps
            return (
              ((i =
                t.call(
                  this,
                  n(n({}, r), {
                    view: new H(e, { props: r.props, viewProps: o }),
                    viewProps: o,
                  })
                ) || this).props = r.props),
              (i.valueController = r.valueController),
              i.view.valueElement.appendChild(i.valueController.view.element),
              i.viewProps.handleDispose(function () {
                var t = i.valueController
                t.onDispose &&
                  (console.warn(
                    "Controller.onDispose is deprecated. Use ViewProps.value('disposed').emitter instead."
                  ),
                  t.onDispose()),
                  t.view.onDispose &&
                    (console.warn(
                      "View.onDispose is deprecated. Use ViewProps.value('disposed').emitter instead."
                    ),
                    t.view.onDispose())
              }),
              i
            )
          }
          return e(r, t), r
        })(y),
        q = (function (t) {
          function n(e, n) {
            var r = t.call(this, e, n) || this
            return (r.binding = n.binding), r
          }
          return e(n, t), n
        })(z),
        G = (function () {
          function t(t) {
            ;(this.onValueChange_ = this.onValueChange_.bind(this)),
              (this.reader = t.reader),
              (this.writer = t.writer),
              (this.emitter = new p()),
              (this.value = t.value),
              this.value.emitter.on("change", this.onValueChange_),
              (this.target = t.target),
              this.read()
          }
          return (
            (t.prototype.read = function () {
              var t = this.target.read()
              void 0 !== t && (this.value.rawValue = this.reader(t))
            }),
            (t.prototype.write_ = function (t) {
              this.writer(this.target, t)
            }),
            (t.prototype.onValueChange_ = function (t) {
              this.write_(t.rawValue),
                this.emitter.emit("change", {
                  rawValue: t.rawValue,
                  sender: this,
                })
            }),
            t
          )
        })()
      function Y(t, e, n) {
        n ? t.classList.add(e) : t.classList.remove(e)
      }
      function $(t, e) {
        return function (n) {
          Y(t, e, n)
        }
      }
      function X(t, e) {
        R(t, function (t) {
          e.textContent = null != t ? t : ""
        })
      }
      var Q = b("")
      function J(t, e) {
        return $(t, Q(void 0, e))
      }
      var W = (function (t) {
          function n(e) {
            return t.call(this, e) || this
          }
          return (
            e(n, t),
            (n.create = function (t) {
              var e,
                r,
                i = null != t ? t : {},
                o = {
                  disabled: null !== (e = i.disabled) && void 0 !== e && e,
                  disposed: !1,
                  hidden: null !== (r = i.hidden) && void 0 !== r && r,
                }
              return new n(h.createCore(o))
            }),
            (n.prototype.bindClassModifiers = function (t) {
              U(this, "disabled", J(t, "disabled")),
                U(this, "hidden", J(t, "hidden"))
            }),
            (n.prototype.bindDisabled = function (t) {
              U(this, "disabled", function (e) {
                t.disabled = e
              })
            }),
            (n.prototype.bindTabIndex = function (t) {
              U(this, "disabled", function (e) {
                t.tabIndex = e ? -1 : 0
              })
            }),
            (n.prototype.handleDispose = function (t) {
              this.value("disposed").emitter.on("change", function (e) {
                e && t()
              })
            }),
            n
          )
        })(h),
        Z = (function () {
          function t(t) {
            this.constraints = t
          }
          return (
            (t.prototype.constrain = function (t) {
              return this.constraints.reduce(function (t, e) {
                return e.constrain(t)
              }, t)
            }),
            t
          )
        })()
      function tt(t, e) {
        if (t instanceof e) return t
        if (t instanceof Z) {
          var n = t.constraints.reduce(function (t, n) {
            return t || (n instanceof e ? n : null)
          }, null)
          if (n) return n
        }
        return null
      }
      var et = (function () {
          function t(t) {
            this.options = t
          }
          return (
            (t.prototype.constrain = function (t) {
              var e = this.options
              return 0 === e.length ||
                e.filter(function (e) {
                  return e.value === t
                }).length > 0
                ? t
                : e[0].value
            }),
            t
          )
        })(),
        nt = (function () {
          function t(t) {
            this.step = t
          }
          return (
            (t.prototype.constrain = function (t) {
              return (
                (t < 0
                  ? -Math.round(-t / this.step)
                  : Math.round(t / this.step)) * this.step
              )
            }),
            t
          )
        })()
      function rt(t, e, n, r, i) {
        return r + ((t - e) / (n - e)) * (i - r)
      }
      function it(t) {
        return String(t.toFixed(10)).split(".")[1].replace(/0+$/, "").length
      }
      function ot(t, e, n) {
        return Math.min(Math.max(t, e), n)
      }
      function at(t, e) {
        return ((t % e) + e) % e
      }
      function st(t) {
        if (Array.isArray(t)) return t
        var e = []
        return (
          Object.keys(t).forEach(function (n) {
            e.push({ text: n, value: t[n] })
          }),
          e
        )
      }
      function lt(t) {
        return "options" in t && void 0 !== t.options
          ? new et(st(i(t.options)))
          : null
      }
      function pt(t) {
        var e = t ? tt(t, et) : null
        return e ? e.options : null
      }
      function ut(t) {
        var e = t ? tt(t, nt) : null
        return e ? e.step : null
      }
      function dt(t, e) {
        var n = t && tt(t, nt)
        return n ? it(n.step) : Math.max(it(e), 2)
      }
      function ct(t) {
        var e = ut(t)
        return null != e ? e : 1
      }
      function ht(t, e) {
        var n,
          r = t && tt(t, nt),
          i = Math.abs(
            null !== (n = null == r ? void 0 : r.step) && void 0 !== n ? n : e
          )
        return 0 === i ? 0.1 : Math.pow(10, Math.floor(Math.log10(i)) - 1)
      }
      function vt(t, e) {
        t.viewProps ||
          ((t.viewProps = W.create()),
          console.warn(
            "Missing controller.viewProps (plugin: '" +
              e +
              "')\nThis polyfill will be removed in the next major version."
          ))
      }
      function ft(t, e) {
        var n = t.accept(e.target.read(), e.params)
        if (null === n) return null
        var r = { target: e.target, initialValue: n, params: e.params },
          i = t.binding.reader(r),
          o = t.binding.constraint ? t.binding.constraint(r) : void 0,
          a = c(i(n), { constraint: o, equals: t.binding.equals }),
          s = new G({
            reader: i,
            target: e.target,
            value: a,
            writer: t.binding.writer(r),
          }),
          l = t.controller({
            constraint: o,
            document: e.document,
            initialValue: n,
            params: e.params,
            value: s.value,
            viewProps: W.create({
              disabled: e.params.disabled,
              hidden: e.params.hidden,
            }),
          })
        return (
          vt(l, t.id),
          new q(e.document, {
            binding: s,
            blade: v(),
            props: h.fromObject({ label: e.params.label || e.target.key }),
            valueController: l,
          })
        )
      }
      var mt = (function (t) {
        function n(e, n) {
          var r = t.call(this, e, n) || this
          return (
            (r.binding = n.binding),
            r.viewProps.bindDisabled(r.binding.ticker),
            r.viewProps.handleDispose(function () {
              r.binding.dispose()
            }),
            r
          )
        }
        return e(n, t), n
      })(z)
      function bt(t, e) {
        for (; t.length < e; ) t.push(void 0)
      }
      function gt(t) {
        var e = []
        return bt(e, t), c(e)
      }
      function _t(t) {
        var e = t.indexOf(void 0)
        return i(e < 0 ? t : t.slice(0, e))
      }
      function wt(t, e) {
        var n = r(_t(t), [e])
        return (
          n.length > t.length
            ? n.splice(0, n.length - t.length)
            : bt(n, t.length),
          n
        )
      }
      var yt = (function () {
          function t(t) {
            ;(this.onTick_ = this.onTick_.bind(this)),
              (this.reader_ = t.reader),
              (this.target = t.target),
              (this.emitter = new p()),
              (this.value = t.value),
              (this.ticker = t.ticker),
              this.ticker.emitter.on("tick", this.onTick_),
              this.read()
          }
          return (
            (t.prototype.dispose = function () {
              this.ticker.dispose()
            }),
            (t.prototype.read = function () {
              var t = this.target.read()
              if (void 0 !== t) {
                var e = this.value.rawValue,
                  n = this.reader_(t)
                ;(this.value.rawValue = wt(e, n)),
                  this.emitter.emit("update", { rawValue: n, sender: this })
              }
            }),
            (t.prototype.onTick_ = function (t) {
              this.read()
            }),
            t
          )
        })(),
        xt = (function () {
          function t(t, e) {
            ;(this.disabled_ = !1),
              (this.timerId_ = null),
              (this.onTick_ = this.onTick_.bind(this)),
              (this.doc_ = t),
              (this.emitter = new p()),
              (this.interval_ = e),
              this.setTimer_()
          }
          return (
            Object.defineProperty(t.prototype, "disabled", {
              get: function () {
                return this.disabled_
              },
              set: function (t) {
                ;(this.disabled_ = t),
                  this.disabled_ ? this.clearTimer_() : this.setTimer_()
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.dispose = function () {
              this.clearTimer_()
            }),
            (t.prototype.clearTimer_ = function () {
              if (null !== this.timerId_) {
                var t = this.doc_.defaultView
                t && t.clearInterval(this.timerId_), (this.timerId_ = null)
              }
            }),
            (t.prototype.setTimer_ = function () {
              if ((this.clearTimer_(), !(this.interval_ <= 0))) {
                var t = this.doc_.defaultView
                t &&
                  (this.timerId_ = t.setInterval(this.onTick_, this.interval_))
              }
            }),
            (t.prototype.onTick_ = function () {
              this.disabled_ || this.emitter.emit("tick", { sender: this })
            }),
            t
          )
        })(),
        Ct = (function () {
          function t() {
            ;(this.disabled = !1), (this.emitter = new p())
          }
          return (
            (t.prototype.dispose = function () {}),
            (t.prototype.tick = function () {
              this.disabled || this.emitter.emit("tick", { sender: this })
            }),
            t
          )
        })(),
        Pt = { monitor: { defaultInterval: 200, defaultLineCount: 3 } }
      function kt(t, e) {
        return 0 === e
          ? new Ct()
          : new xt(t, null != e ? e : Pt.monitor.defaultInterval)
      }
      function Et(t, e) {
        var n,
          r,
          i = t.accept(e.target.read(), e.params)
        if (null === i) return null
        var o = { target: e.target, initialValue: i, params: e.params },
          a = t.binding.reader(o),
          s =
            null !==
              (r =
                null !== (n = e.params.bufferSize) && void 0 !== n
                  ? n
                  : t.binding.defaultBufferSize &&
                    t.binding.defaultBufferSize(e.params)) && void 0 !== r
              ? r
              : 1,
          l = new yt({
            reader: a,
            target: e.target,
            ticker: kt(e.document, e.params.interval),
            value: gt(s),
          }),
          p = t.controller({
            document: e.document,
            params: e.params,
            value: l.value,
            viewProps: W.create({
              disabled: e.params.disabled,
              hidden: e.params.hidden,
            }),
          })
        return (
          vt(p, t.id),
          new mt(e.document, {
            binding: l,
            blade: v(),
            props: h.fromObject({ label: e.params.label || e.target.key }),
            valueController: p,
          })
        )
      }
      var Vt = (function () {
          function t(t) {
            this.controller_ = t
          }
          return (
            Object.defineProperty(t.prototype, "disabled", {
              get: function () {
                return this.controller_.viewProps.get("disabled")
              },
              set: function (t) {
                this.controller_.viewProps.set("disabled", t)
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "hidden", {
              get: function () {
                return this.controller_.viewProps.get("hidden")
              },
              set: function (t) {
                this.controller_.viewProps.set("hidden", t)
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.dispose = function () {
              this.controller_.viewProps.set("disposed", !0)
            }),
            t
          )
        })(),
        Lt = (function () {
          function t(t) {
            this.target = t
          }
          return t
        })(),
        St = (function (t) {
          function n(e, n, r) {
            var i = t.call(this, e) || this
            return (i.value = n), (i.presetKey = r), i
          }
          return e(n, t), n
        })(Lt),
        Mt = (function (t) {
          function n(e, n, r) {
            var i = t.call(this, e) || this
            return (i.value = n), (i.presetKey = r), i
          }
          return e(n, t), n
        })(Lt),
        jt = (function (t) {
          function n(e, n) {
            var r = t.call(this, e) || this
            return (r.expanded = n), r
          }
          return e(n, t), n
        })(Lt),
        At = (function (t) {
          function n(e) {
            var n = t.call(this, e) || this
            return (
              (n.onBindingChange_ = n.onBindingChange_.bind(n)),
              (n.emitter_ = new p()),
              n.controller_.binding.emitter.on("change", n.onBindingChange_),
              n
            )
          }
          return (
            e(n, t),
            (n.prototype.on = function (t, e) {
              var n = e.bind(this)
              return (
                this.emitter_.on(t, function (t) {
                  n(t.event)
                }),
                this
              )
            }),
            (n.prototype.refresh = function () {
              this.controller_.binding.read()
            }),
            (n.prototype.onBindingChange_ = function (t) {
              var e = t.sender.target.read()
              this.emitter_.emit("change", {
                event: new St(
                  this,
                  i(e),
                  this.controller_.binding.target.presetKey
                ),
              })
            }),
            n
          )
        })(Vt),
        Dt = (function (t) {
          function n(e) {
            var n = t.call(this, e) || this
            return (
              (n.onBindingUpdate_ = n.onBindingUpdate_.bind(n)),
              (n.emitter_ = new p()),
              n.controller_.binding.emitter.on("update", n.onBindingUpdate_),
              n
            )
          }
          return (
            e(n, t),
            (n.prototype.on = function (t, e) {
              var n = e.bind(this)
              return (
                this.emitter_.on(t, function (t) {
                  n(t.event)
                }),
                this
              )
            }),
            (n.prototype.refresh = function () {
              this.controller_.binding.read()
            }),
            (n.prototype.onBindingUpdate_ = function (t) {
              var e = t.sender.target.read()
              this.emitter_.emit("update", {
                event: new Mt(
                  this,
                  i(e),
                  this.controller_.binding.target.presetKey
                ),
              })
            }),
            n
          )
        })(Vt)
      function Ot(t, e) {
        return i(
          Object.keys(e).reduce(function (r, i) {
            var o
            if (void 0 !== r) {
              var a = (0, e[i])(t[i])
              return a.succeeded
                ? n(n({}, r), (((o = {})[i] = a.value), o))
                : void 0
            }
          }, {})
        )
      }
      function Nt(t, e) {
        return t.reduce(function (t, n) {
          if (void 0 !== t) {
            var i = e(n)
            if (i.succeeded && void 0 !== i.value) return r(t, [i.value])
          }
        }, [])
      }
      function It(t) {
        return null !== t && "object" == typeof t
      }
      function Bt(t) {
        return function (e) {
          return function (n) {
            if (!e && void 0 === n) return { succeeded: !1, value: void 0 }
            if (e && void 0 === n) return { succeeded: !0, value: void 0 }
            var r = t(n)
            return void 0 !== r
              ? { succeeded: !0, value: r }
              : { succeeded: !1, value: void 0 }
          }
        }
      }
      function Kt(t) {
        return {
          custom: function (e) {
            return Bt(e)(t)
          },
          boolean: Bt(function (t) {
            return "boolean" == typeof t ? t : void 0
          })(t),
          number: Bt(function (t) {
            return "number" == typeof t ? t : void 0
          })(t),
          string: Bt(function (t) {
            return "string" == typeof t ? t : void 0
          })(t),
          function: Bt(function (t) {
            return "function" == typeof t ? t : void 0
          })(t),
          constant: function (e) {
            return Bt(function (t) {
              return t === e ? e : void 0
            })(t)
          },
          raw: Bt(function (t) {
            return t
          })(t),
          object: function (e) {
            return Bt(function (t) {
              if (It(t)) return Ot(t, e)
            })(t)
          },
          array: function (e) {
            return Bt(function (t) {
              if (Array.isArray(t)) return Nt(t, e)
            })(t)
          },
        }
      }
      var Rt = { optional: Kt(!0), required: Kt(!1) }
      function Ut(t, e) {
        var n = Rt.required.object(e)(t)
        return n.succeeded ? n.value : void 0
      }
      function Tt(t, e) {
        var r = t.accept(e.params)
        if (!r) return null
        var o = Rt.optional.boolean(e.params.disabled).value,
          a = Rt.optional.boolean(e.params.hidden).value
        return t.controller({
          blade: v(),
          document: e.document,
          params: i(n(n({}, r.params), { disabled: o, hidden: a })),
          viewProps: W.create({ disabled: o, hidden: a }),
        })
      }
      function Ft(t, e) {
        return t.addBlade_v3_(n(n({}, e), { view: "button" }))
      }
      function Ht(t, e) {
        return t.addBlade_v3_(n(n({}, e), { view: "folder" }))
      }
      function zt(t, e) {
        var r = e || {}
        return t.addBlade_v3_(n(n({}, r), { view: "separator" }))
      }
      function qt(t, e) {
        return t.addBlade_v3_(n(n({}, e), { view: "tab" }))
      }
      var Gt = (function (t) {
          function n(e, n) {
            var r = t.call(this, e) || this
            return (r.rackApi_ = n), r
          }
          return e(n, t), n
        })(Vt),
        Yt = (function () {
          function t(t, e, n) {
            ;(this.obj_ = t),
              (this.key_ = e),
              (this.presetKey_ = null != n ? n : e)
          }
          return (
            (t.isBindable = function (t) {
              return null !== t && "object" == typeof t
            }),
            Object.defineProperty(t.prototype, "key", {
              get: function () {
                return this.key_
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "presetKey", {
              get: function () {
                return this.presetKey_
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.read = function () {
              return this.obj_[this.key_]
            }),
            (t.prototype.write = function (t) {
              this.obj_[this.key_] = t
            }),
            (t.prototype.writeProperty = function (e, n) {
              var r = this.read()
              if (!t.isBindable(r)) throw l.notBindable()
              if (!(e in r)) throw l.propertyNotFound(e)
              r[e] = n
            }),
            t
          )
        })()
      function $t(t, e, n) {
        if (!Yt.isBindable(t)) throw l.notBindable()
        return new Yt(t, e, n)
      }
      function Xt(t) {
        "blade" === t.type
          ? le.blades.unshift(t.plugin)
          : "input" === t.type
          ? le.inputs.unshift(t.plugin)
          : "monitor" === t.type && le.monitors.unshift(t.plugin)
      }
      var Qt = (function () {
        function t(t) {
          ;(this.emitter = new p()),
            (this.items_ = []),
            (this.cache_ = new Set()),
            (this.onSubListAdd_ = this.onSubListAdd_.bind(this)),
            (this.onSubListRemove_ = this.onSubListRemove_.bind(this)),
            (this.extract_ = t)
        }
        return (
          Object.defineProperty(t.prototype, "items", {
            get: function () {
              return this.items_
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.allItems = function () {
            return Array.from(this.cache_)
          }),
          (t.prototype.find = function (t) {
            for (var e = 0, n = this.allItems(); e < n.length; e++) {
              var r = n[e]
              if (t(r)) return r
            }
            return null
          }),
          (t.prototype.includes = function (t) {
            return this.cache_.has(t)
          }),
          (t.prototype.add = function (t, e) {
            var n = this
            if (this.includes(t)) throw l.shouldNeverHappen()
            var r = void 0 !== e ? e : this.items_.length
            this.items_.splice(r, 0, t), this.cache_.add(t)
            var i = this.extract_(t)
            i &&
              (i.emitter.on("add", this.onSubListAdd_),
              i.emitter.on("remove", this.onSubListRemove_),
              i.allItems().forEach(function (t) {
                n.cache_.add(t)
              })),
              this.emitter.emit("add", {
                index: r,
                item: t,
                root: this,
                target: this,
              })
          }),
          (t.prototype.remove = function (t) {
            var e = this.items_.indexOf(t)
            if (!(e < 0)) {
              this.items_.splice(e, 1), this.cache_.delete(t)
              var n = this.extract_(t)
              n &&
                (n.emitter.off("add", this.onSubListAdd_),
                n.emitter.off("remove", this.onSubListRemove_)),
                this.emitter.emit("remove", {
                  index: e,
                  item: t,
                  root: this,
                  target: this,
                })
            }
          }),
          (t.prototype.onSubListAdd_ = function (t) {
            this.cache_.add(t.item),
              this.emitter.emit("add", {
                index: t.index,
                item: t.item,
                root: this,
                target: t.target,
              })
          }),
          (t.prototype.onSubListRemove_ = function (t) {
            this.cache_.delete(t.item),
              this.emitter.emit("remove", {
                index: t.index,
                item: t.item,
                root: this,
                target: t.target,
              })
          }),
          t
        )
      })()
      function Jt(t) {
        return t instanceof Zt
          ? t.apiSet_
          : t instanceof Gt
          ? t.rackApi_.apiSet_
          : null
      }
      function Wt(t, e) {
        var n = t.find(function (t) {
          return t.controller_ === e
        })
        if (!n) throw l.shouldNeverHappen()
        return n
      }
      var Zt = (function (t) {
          function n(e) {
            var n = t.call(this, e) || this
            ;(n.onRackAdd_ = n.onRackAdd_.bind(n)),
              (n.onRackRemove_ = n.onRackRemove_.bind(n)),
              (n.onRackInputChange_ = n.onRackInputChange_.bind(n)),
              (n.onRackMonitorUpdate_ = n.onRackMonitorUpdate_.bind(n)),
              (n.emitter_ = new p()),
              (n.apiSet_ = new Qt(Jt))
            var r = n.controller_.rack
            return (
              r.emitter.on("add", n.onRackAdd_),
              r.emitter.on("remove", n.onRackRemove_),
              r.emitter.on("inputchange", n.onRackInputChange_),
              r.emitter.on("monitorupdate", n.onRackMonitorUpdate_),
              r.children.forEach(function (t) {
                n.setUpApi_(t)
              }),
              n
            )
          }
          return (
            e(n, t),
            Object.defineProperty(n.prototype, "children", {
              get: function () {
                var t = this
                return this.controller_.rack.children.map(function (e) {
                  return Wt(t.apiSet_, e)
                })
              },
              enumerable: !1,
              configurable: !0,
            }),
            (n.prototype.addInput = function (t, e, n) {
              var r = n || {},
                i = ue(
                  this.controller_.view.element.ownerDocument,
                  $t(t, e, r.presetKey),
                  r
                ),
                o = new At(i)
              return this.add(o, r.index)
            }),
            (n.prototype.addMonitor = function (t, e, n) {
              var r = n || {},
                o = de(
                  this.controller_.view.element.ownerDocument,
                  $t(t, e),
                  r
                ),
                a = new Dt(o)
              return i(this.add(a, r.index))
            }),
            (n.prototype.addFolder = function (t) {
              return Ht(this, t)
            }),
            (n.prototype.addButton = function (t) {
              return Ft(this, t)
            }),
            (n.prototype.addSeparator = function (t) {
              return zt(this, t)
            }),
            (n.prototype.addTab = function (t) {
              return qt(this, t)
            }),
            (n.prototype.add = function (t, e) {
              this.controller_.rack.add(t.controller_, e)
              var n = this.apiSet_.find(function (e) {
                return e.controller_ === t.controller_
              })
              return n && this.apiSet_.remove(n), this.apiSet_.add(t), t
            }),
            (n.prototype.remove = function (t) {
              this.controller_.rack.remove(t.controller_)
            }),
            (n.prototype.addBlade_v3_ = function (t) {
              var e = null != t ? t : {},
                n = he(ce(this.controller_.view.element.ownerDocument, e))
              return this.add(n, e.index)
            }),
            (n.prototype.on = function (t, e) {
              var n = e.bind(this)
              return (
                this.emitter_.on(t, function (t) {
                  n(t.event)
                }),
                this
              )
            }),
            (n.prototype.setUpApi_ = function (t) {
              this.apiSet_.find(function (e) {
                return e.controller_ === t
              }) || this.apiSet_.add(he(t))
            }),
            (n.prototype.onRackAdd_ = function (t) {
              this.setUpApi_(t.bladeController)
            }),
            (n.prototype.onRackRemove_ = function (t) {
              if (t.isRoot) {
                var e = Wt(this.apiSet_, t.bladeController)
                this.apiSet_.remove(e)
              }
            }),
            (n.prototype.onRackInputChange_ = function (t) {
              var e = Wt(this.apiSet_, t.bindingController),
                n = t.bindingController.binding
              this.emitter_.emit("change", {
                event: new St(e, i(n.target.read()), n.target.presetKey),
              })
            }),
            (n.prototype.onRackMonitorUpdate_ = function (t) {
              var e = Wt(this.apiSet_, t.bindingController),
                n = t.bindingController.binding
              this.emitter_.emit("update", {
                event: new Mt(e, i(n.target.read()), n.target.presetKey),
              })
            }),
            n
          )
        })(Vt),
        te = (function () {
          function t(t, e) {
            var n = b(e.viewName)
            ;(this.element = t.createElement("div")),
              this.element.classList.add(n()),
              e.viewProps.bindClassModifiers(this.element)
          }
          return t
        })(),
        ee = (function (t) {
          function n(e) {
            var n =
              t.call(this, {
                blade: e.blade,
                view: e.view,
                viewProps: e.rackController.viewProps,
              }) || this
            return (n.rackController = e.rackController), n
          }
          return e(n, t), n
        })(y)
      function ne(t, e) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          if (r instanceof q && r.binding === e) return r
        }
        return null
      }
      function re(t, e) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          if (r instanceof mt && r.binding === e) return r
        }
        return null
      }
      function ie(t) {
        return t instanceof se
          ? t.rack
          : t instanceof ee
          ? t.rackController.rack
          : null
      }
      function oe(t) {
        var e = ie(t)
        return e ? e.bcSet_ : null
      }
      var ae = (function () {
          function t(t) {
            var e
            ;(this.onBladePositionsChange_ =
              this.onBladePositionsChange_.bind(this)),
              (this.onSetAdd_ = this.onSetAdd_.bind(this)),
              (this.onSetRemove_ = this.onSetRemove_.bind(this)),
              (this.onChildDispose_ = this.onChildDispose_.bind(this)),
              (this.onChildPositionsChange_ =
                this.onChildPositionsChange_.bind(this)),
              (this.onChildInputChange_ = this.onChildInputChange_.bind(this)),
              (this.onChildMonitorUpdate_ =
                this.onChildMonitorUpdate_.bind(this)),
              (this.onChildViewPropsChange_ =
                this.onChildViewPropsChange_.bind(this)),
              (this.onDescendantLayout_ = this.onDescendantLayout_.bind(this)),
              (this.onDescendantInputChange_ =
                this.onDescendantInputChange_.bind(this)),
              (this.onDescendaantMonitorUpdate_ =
                this.onDescendaantMonitorUpdate_.bind(this)),
              (this.emitter = new p()),
              (this.blade_ = null != t ? t : null),
              null === (e = this.blade_) ||
                void 0 === e ||
                e
                  .value("positions")
                  .emitter.on("change", this.onBladePositionsChange_),
              (this.bcSet_ = new Qt(oe)),
              this.bcSet_.emitter.on("add", this.onSetAdd_),
              this.bcSet_.emitter.on("remove", this.onSetRemove_)
          }
          return (
            Object.defineProperty(t.prototype, "children", {
              get: function () {
                return this.bcSet_.items
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.add = function (t, e) {
              t.parent && t.parent.remove(t),
                (t.parent_ = this),
                this.bcSet_.add(t, e)
            }),
            (t.prototype.remove = function (t) {
              ;(t.parent_ = null), this.bcSet_.remove(t)
            }),
            (t.prototype.find = function (t) {
              return i(
                this.bcSet_.allItems().filter(function (e) {
                  return e instanceof t
                })
              )
            }),
            (t.prototype.onSetAdd_ = function (t) {
              this.updatePositions_()
              var e = t.target === t.root
              if (
                (this.emitter.emit("add", {
                  bladeController: t.item,
                  index: t.index,
                  isRoot: e,
                  sender: this,
                }),
                e)
              ) {
                var n = t.item
                if (
                  (n.viewProps.emitter.on(
                    "change",
                    this.onChildViewPropsChange_
                  ),
                  n.blade
                    .value("positions")
                    .emitter.on("change", this.onChildPositionsChange_),
                  n.viewProps.handleDispose(this.onChildDispose_),
                  n instanceof q)
                )
                  n.binding.emitter.on("change", this.onChildInputChange_)
                else if (n instanceof mt)
                  n.binding.emitter.on("update", this.onChildMonitorUpdate_)
                else {
                  var r = ie(n)
                  if (r) {
                    var i = r.emitter
                    i.on("layout", this.onDescendantLayout_),
                      i.on("inputchange", this.onDescendantInputChange_),
                      i.on("monitorupdate", this.onDescendaantMonitorUpdate_)
                  }
                }
              }
            }),
            (t.prototype.onSetRemove_ = function (t) {
              this.updatePositions_()
              var e = t.target === t.root
              if (
                (this.emitter.emit("remove", {
                  bladeController: t.item,
                  isRoot: e,
                  sender: this,
                }),
                e)
              ) {
                var n = t.item
                if (n instanceof q)
                  n.binding.emitter.off("change", this.onChildInputChange_)
                else if (n instanceof mt)
                  n.binding.emitter.off("update", this.onChildMonitorUpdate_)
                else {
                  var r = ie(n)
                  if (r) {
                    var i = r.emitter
                    i.off("layout", this.onDescendantLayout_),
                      i.off("inputchange", this.onDescendantInputChange_),
                      i.off("monitorupdate", this.onDescendaantMonitorUpdate_)
                  }
                }
              }
            }),
            (t.prototype.updatePositions_ = function () {
              var t = this,
                e = this.bcSet_.items.filter(function (t) {
                  return !t.viewProps.get("hidden")
                }),
                n = e[0],
                r = e[e.length - 1]
              this.bcSet_.items.forEach(function (e) {
                var i = []
                e === n &&
                  (i.push("first"),
                  (t.blade_ &&
                    !t.blade_.get("positions").includes("veryfirst")) ||
                    i.push("veryfirst")),
                  e === r &&
                    (i.push("last"),
                    (t.blade_ &&
                      !t.blade_.get("positions").includes("verylast")) ||
                      i.push("verylast")),
                  e.blade.set("positions", i)
              })
            }),
            (t.prototype.onChildPositionsChange_ = function () {
              this.updatePositions_(),
                this.emitter.emit("layout", { sender: this })
            }),
            (t.prototype.onChildViewPropsChange_ = function (t) {
              this.updatePositions_(),
                this.emitter.emit("layout", { sender: this })
            }),
            (t.prototype.onChildDispose_ = function () {
              var t = this
              this.bcSet_.items
                .filter(function (t) {
                  return t.viewProps.get("disposed")
                })
                .forEach(function (e) {
                  t.bcSet_.remove(e)
                })
            }),
            (t.prototype.onChildInputChange_ = function (t) {
              var e = ne(this.find(q), t.sender)
              if (!e) throw l.shouldNeverHappen()
              this.emitter.emit("inputchange", {
                bindingController: e,
                sender: this,
              })
            }),
            (t.prototype.onChildMonitorUpdate_ = function (t) {
              var e = re(this.find(mt), t.sender)
              if (!e) throw l.shouldNeverHappen()
              this.emitter.emit("monitorupdate", {
                bindingController: e,
                sender: this,
              })
            }),
            (t.prototype.onDescendantLayout_ = function (t) {
              this.updatePositions_(),
                this.emitter.emit("layout", { sender: this })
            }),
            (t.prototype.onDescendantInputChange_ = function (t) {
              this.emitter.emit("inputchange", {
                bindingController: t.bindingController,
                sender: this,
              })
            }),
            (t.prototype.onDescendaantMonitorUpdate_ = function (t) {
              this.emitter.emit("monitorupdate", {
                bindingController: t.bindingController,
                sender: this,
              })
            }),
            (t.prototype.onBladePositionsChange_ = function () {
              this.updatePositions_()
            }),
            t
          )
        })(),
        se = (function (t) {
          function r(e, r) {
            var i =
              t.call(
                this,
                n(n({}, r), {
                  view: new te(e, { viewName: "brk", viewProps: r.viewProps }),
                })
              ) || this
            ;(i.onRackAdd_ = i.onRackAdd_.bind(i)),
              (i.onRackRemove_ = i.onRackRemove_.bind(i))
            var o = new ae(r.root ? void 0 : r.blade)
            return (
              o.emitter.on("add", i.onRackAdd_),
              o.emitter.on("remove", i.onRackRemove_),
              (i.rack = o),
              i.viewProps.handleDispose(function () {
                for (var t = i.rack.children.length - 1; t >= 0; t--)
                  i.rack.children[t].viewProps.set("disposed", !0)
              }),
              i
            )
          }
          return (
            e(r, t),
            (r.prototype.onRackAdd_ = function (t) {
              t.isRoot &&
                A(this.view.element, t.bladeController.view.element, t.index)
            }),
            (r.prototype.onRackRemove_ = function (t) {
              t.isRoot && D(t.bladeController.view.element)
            }),
            r
          )
        })(y),
        le = { blades: [], inputs: [], monitors: [] }
      function pe() {
        return r(le.blades, le.inputs, le.monitors)
      }
      function ue(t, e, n) {
        if (o(e.read()))
          throw new l({ context: { key: e.key }, type: "nomatchingcontroller" })
        var r = le.inputs.reduce(function (r, i) {
          return r || ft(i, { document: t, target: e, params: n })
        }, null)
        if (r) return r
        throw new l({ context: { key: e.key }, type: "nomatchingcontroller" })
      }
      function de(t, e, n) {
        var r = le.monitors.reduce(function (r, i) {
          return r || Et(i, { document: t, params: n, target: e })
        }, null)
        if (r) return r
        throw new l({ context: { key: e.key }, type: "nomatchingcontroller" })
      }
      function ce(t, e) {
        var n = le.blades.reduce(function (n, r) {
          return n || Tt(r, { document: t, params: e })
        }, null)
        if (!n) throw new l({ type: "nomatchingview", context: { params: e } })
        return n
      }
      function he(t) {
        if (t instanceof q) return new At(t)
        if (t instanceof mt) return new Dt(t)
        if (t instanceof se) return new Zt(t)
        var e = le.blades.reduce(function (e, n) {
          return e || n.api(t)
        }, null)
        if (!e) throw l.shouldNeverHappen()
        return e
      }
      var ve = b("lst"),
        fe = (function () {
          function t(t, e) {
            ;(this.onValueChange_ = this.onValueChange_.bind(this)),
              (this.props_ = e.props),
              (this.element = t.createElement("div")),
              this.element.classList.add(ve()),
              e.viewProps.bindClassModifiers(this.element)
            var n = t.createElement("select")
            n.classList.add(ve("s")),
              U(this.props_, "options", function (e) {
                O(n),
                  e.forEach(function (e, r) {
                    var i = t.createElement("option")
                    ;(i.dataset.index = String(r)),
                      (i.textContent = e.text),
                      (i.value = String(e.value)),
                      n.appendChild(i)
                  })
              }),
              e.viewProps.bindDisabled(n),
              this.element.appendChild(n),
              (this.selectElement = n)
            var r = t.createElement("div")
            r.classList.add(ve("m")),
              r.appendChild(j(t, "dropdown")),
              this.element.appendChild(r),
              e.value.emitter.on("change", this.onValueChange_),
              (this.value_ = e.value),
              this.update_()
          }
          return (
            (t.prototype.update_ = function () {
              this.selectElement.value = String(this.value_.rawValue)
            }),
            (t.prototype.onValueChange_ = function () {
              this.update_()
            }),
            t
          )
        })(),
        me = (function () {
          function t(t, e) {
            ;(this.onSelectChange_ = this.onSelectChange_.bind(this)),
              (this.props = e.props),
              (this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.view = new fe(t, {
                props: this.props,
                value: this.value,
                viewProps: this.viewProps,
              })),
              this.view.selectElement.addEventListener(
                "change",
                this.onSelectChange_
              )
          }
          return (
            (t.prototype.onSelectChange_ = function (t) {
              var e = i(t.currentTarget).selectedOptions.item(0)
              if (e) {
                var n = Number(e.dataset.index)
                this.value.rawValue = this.props.get("options")[n].value
              }
            }),
            t
          )
        })(),
        be = (function (t) {
          function n(e) {
            var n = t.call(this, e) || this
            return (
              (n.emitter_ = new p()),
              n.controller_.valueController.value.emitter.on(
                "change",
                function (t) {
                  n.emitter_.emit("change", { event: new St(n, t.rawValue) })
                }
              ),
              n
            )
          }
          return (
            e(n, t),
            Object.defineProperty(n.prototype, "label", {
              get: function () {
                return this.controller_.props.get("label")
              },
              set: function (t) {
                this.controller_.props.set("label", t)
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "options", {
              get: function () {
                return this.controller_.valueController.props.get("options")
              },
              set: function (t) {
                this.controller_.valueController.props.set("options", t)
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "value", {
              get: function () {
                return this.controller_.valueController.value.rawValue
              },
              set: function (t) {
                this.controller_.valueController.value.rawValue = t
              },
              enumerable: !1,
              configurable: !0,
            }),
            (n.prototype.on = function (t, e) {
              var n = e.bind(this)
              return (
                this.emitter_.on(t, function (t) {
                  n(t.event)
                }),
                this
              )
            }),
            n
          )
        })(Vt)
      function ge(t) {
        var e = Rt
        return Array.isArray(t)
          ? e.required.array(
              e.required.object({
                text: e.required.string,
                value: e.required.raw,
              })
            )(t).value
          : "object" == typeof t
          ? e.required.raw(t).value
          : void 0
      }
      var _e = {
          id: "list",
          accept: function (t) {
            var e = Rt,
              n = Ut(t, {
                options: e.required.custom(ge),
                value: e.required.raw,
                view: e.required.constant("list"),
                label: e.optional.string,
              })
            return n ? { params: n } : null
          },
          controller: function (t) {
            var e = new me(t.document, {
              props: h.fromObject({ options: st(t.params.options) }),
              value: c(t.params.value),
              viewProps: t.viewProps,
            })
            return new z(t.document, {
              blade: t.blade,
              props: h.fromObject({ label: t.params.label }),
              valueController: e,
            })
          },
          api: function (t) {
            return t instanceof z && t.valueController instanceof me
              ? new be(t)
              : null
          },
        },
        we = (function (t) {
          function n() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            e(n, t),
            Object.defineProperty(n.prototype, "disabled", {
              get: function () {
                return this.controller_.viewProps.get("disabled")
              },
              set: function (t) {
                this.controller_.viewProps.set("disabled", t)
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "hidden", {
              get: function () {
                return this.controller_.viewProps.get("hidden")
              },
              set: function (t) {
                this.controller_.viewProps.set("hidden", t)
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "label", {
              get: function () {
                return this.controller_.props.get("label")
              },
              set: function (t) {
                this.controller_.props.set("label", t)
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "title", {
              get: function () {
                var t
                return null !==
                  (t = this.controller_.valueController.props.get("title")) &&
                  void 0 !== t
                  ? t
                  : ""
              },
              set: function (t) {
                this.controller_.valueController.props.set("title", t)
              },
              enumerable: !1,
              configurable: !0,
            }),
            (n.prototype.on = function (t, e) {
              return (
                this.controller_.valueController.emitter.on(t, i(e.bind(this))),
                this
              )
            }),
            n
          )
        })(Vt),
        ye = b("btn"),
        xe = (function () {
          function t(t, e) {
            ;(this.element = t.createElement("div")),
              this.element.classList.add(ye()),
              e.viewProps.bindClassModifiers(this.element)
            var n = t.createElement("button")
            n.classList.add(ye("b")),
              e.viewProps.bindDisabled(n),
              X(e.props.value("title"), n),
              this.element.appendChild(n),
              (this.buttonElement = n)
          }
          return t
        })(),
        Ce = (function () {
          function t(t, e) {
            ;(this.emitter = new p()),
              (this.onClick_ = this.onClick_.bind(this)),
              (this.props = e.props),
              (this.viewProps = e.viewProps),
              (this.view = new xe(t, {
                props: this.props,
                viewProps: this.viewProps,
              })),
              this.view.buttonElement.addEventListener("click", this.onClick_)
          }
          return (
            (t.prototype.onClick_ = function () {
              this.emitter.emit("click", { sender: this })
            }),
            t
          )
        })(),
        Pe = {
          id: "button",
          accept: function (t) {
            var e = Rt,
              n = Ut(t, {
                title: e.required.string,
                view: e.required.constant("button"),
                label: e.optional.string,
              })
            return n ? { params: n } : null
          },
          controller: function (t) {
            return new z(t.document, {
              blade: t.blade,
              props: h.fromObject({ label: t.params.label }),
              valueController: new Ce(t.document, {
                props: h.fromObject({ title: t.params.title }),
                viewProps: t.viewProps,
              }),
            })
          },
          api: function (t) {
            return t instanceof z && t.valueController instanceof Ce
              ? new we(t)
              : null
          },
        },
        ke = (function (t) {
          function n(e) {
            var n = t.call(this, e, new Zt(e.rackController)) || this
            return (
              (n.emitter_ = new p()),
              n.controller_.foldable
                .value("expanded")
                .emitter.on("change", function (t) {
                  n.emitter_.emit("fold", {
                    event: new jt(n, t.sender.rawValue),
                  })
                }),
              n.rackApi_.on("change", function (t) {
                n.emitter_.emit("change", { event: t })
              }),
              n.rackApi_.on("update", function (t) {
                n.emitter_.emit("update", { event: t })
              }),
              n
            )
          }
          return (
            e(n, t),
            Object.defineProperty(n.prototype, "expanded", {
              get: function () {
                return this.controller_.foldable.get("expanded")
              },
              set: function (t) {
                this.controller_.foldable.set("expanded", t)
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "title", {
              get: function () {
                return this.controller_.props.get("title")
              },
              set: function (t) {
                this.controller_.props.set("title", t)
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "children", {
              get: function () {
                return this.rackApi_.children
              },
              enumerable: !1,
              configurable: !0,
            }),
            (n.prototype.addInput = function (t, e, n) {
              return this.rackApi_.addInput(t, e, n)
            }),
            (n.prototype.addMonitor = function (t, e, n) {
              return this.rackApi_.addMonitor(t, e, n)
            }),
            (n.prototype.addFolder = function (t) {
              return this.rackApi_.addFolder(t)
            }),
            (n.prototype.addButton = function (t) {
              return this.rackApi_.addButton(t)
            }),
            (n.prototype.addSeparator = function (t) {
              return this.rackApi_.addSeparator(t)
            }),
            (n.prototype.addTab = function (t) {
              return this.rackApi_.addTab(t)
            }),
            (n.prototype.add = function (t, e) {
              return this.rackApi_.add(t, e)
            }),
            (n.prototype.remove = function (t) {
              this.rackApi_.remove(t)
            }),
            (n.prototype.addBlade_v3_ = function (t) {
              return this.rackApi_.addBlade_v3_(t)
            }),
            (n.prototype.on = function (t, e) {
              var n = e.bind(this)
              return (
                this.emitter_.on(t, function (t) {
                  n(t.event)
                }),
                this
              )
            }),
            n
          )
        })(Gt)
      function Ee(t) {
        return h.fromObject({
          expanded: t,
          expandedHeight: null,
          shouldFixHeight: !1,
          temporaryExpanded: null,
        })
      }
      function Ve(t, e) {
        var n = 0
        return (
          P(e, function () {
            t.set("expandedHeight", null),
              t.set("temporaryExpanded", !0),
              C(e),
              (n = e.clientHeight),
              t.set("temporaryExpanded", null),
              C(e)
          }),
          n
        )
      }
      function Le(t) {
        var e
        return null !== (e = t.get("temporaryExpanded")) && void 0 !== e
          ? e
          : t.get("expanded")
      }
      function Se(t) {
        if (!Le(t)) return "0"
        var e = t.get("expandedHeight")
        return t.get("shouldFixHeight") && !o(e) ? e + "px" : "auto"
      }
      function Me(t, e) {
        e.style.height = Se(t)
      }
      function je(t, e) {
        t.value("expanded").emitter.on("beforechange", function () {
          o(t.get("expandedHeight")) && t.set("expandedHeight", Ve(t, e)),
            t.set("shouldFixHeight", !0),
            C(e)
        }),
          t.emitter.on("change", function () {
            Me(t, e)
          }),
          Me(t, e),
          e.addEventListener("transitionend", function (e) {
            "height" === e.propertyName &&
              (t.set("shouldFixHeight", !1), t.set("expandedHeight", null))
          })
      }
      var Ae = b("cnt"),
        De = (function () {
          function t(t, e) {
            var n = this
            ;(this.onFoldableExpandedChange_ =
              this.onFoldableExpandedChange_.bind(this)),
              (this.className_ = b(e.viewName || "fld")),
              (this.element = t.createElement("div")),
              this.element.classList.add(this.className_(), Ae()),
              e.viewProps.bindClassModifiers(this.element),
              (this.foldable_ = e.foldable),
              U(this.foldable_, "expanded", this.onFoldableExpandedChange_)
            var r = t.createElement("button")
            r.classList.add(this.className_("b")),
              U(e.props, "title", function (t) {
                o(t)
                  ? n.element.classList.add(n.className_(void 0, "not"))
                  : n.element.classList.remove(n.className_(void 0, "not"))
              }),
              e.viewProps.bindDisabled(r),
              this.element.appendChild(r),
              (this.buttonElement = r)
            var i = t.createElement("div")
            i.classList.add(this.className_("t")),
              X(e.props.value("title"), i),
              this.buttonElement.appendChild(i),
              (this.titleElement = i)
            var a = t.createElement("div")
            a.classList.add(this.className_("m")),
              this.buttonElement.appendChild(a)
            var s = e.containerElement
            s.classList.add(this.className_("c")),
              this.element.appendChild(s),
              (this.containerElement = s)
          }
          return (
            (t.prototype.onFoldableExpandedChange_ = function () {
              var t = Le(this.foldable_),
                e = this.className_(void 0, "expanded")
              t
                ? this.element.classList.add(e)
                : this.element.classList.remove(e)
            }),
            t
          )
        })(),
        Oe = (function (t) {
          function r(e, r) {
            var i,
              o = this,
              a = Ee(null === (i = r.expanded) || void 0 === i || i),
              s = new se(e, {
                blade: r.blade,
                root: r.root,
                viewProps: r.viewProps,
              })
            return (
              ((o =
                t.call(
                  this,
                  n(n({}, r), {
                    rackController: s,
                    view: new De(e, {
                      containerElement: s.view.element,
                      foldable: a,
                      props: r.props,
                      viewName: r.root ? "rot" : void 0,
                      viewProps: r.viewProps,
                    }),
                  })
                ) || this).onTitleClick_ = o.onTitleClick_.bind(o)),
              (o.props = r.props),
              (o.foldable = a),
              je(o.foldable, o.view.containerElement),
              o.view.buttonElement.addEventListener("click", o.onTitleClick_),
              o
            )
          }
          return (
            e(r, t),
            Object.defineProperty(r.prototype, "document", {
              get: function () {
                return this.view.element.ownerDocument
              },
              enumerable: !1,
              configurable: !0,
            }),
            (r.prototype.onTitleClick_ = function () {
              this.foldable.set("expanded", !this.foldable.get("expanded"))
            }),
            r
          )
        })(ee),
        Ne = {
          id: "button",
          accept: function (t) {
            var e = Rt,
              n = Ut(t, {
                title: e.required.string,
                view: e.required.constant("folder"),
                expanded: e.optional.boolean,
              })
            return n ? { params: n } : null
          },
          controller: function (t) {
            return new Oe(t.document, {
              blade: t.blade,
              expanded: t.params.expanded,
              props: h.fromObject({ title: t.params.title }),
              viewProps: t.viewProps,
            })
          },
          api: function (t) {
            return t instanceof Oe ? new ke(t) : null
          },
        },
        Ie = (function (t) {
          function n() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return e(n, t), n
        })(Vt),
        Be = b("spr"),
        Ke = (function () {
          function t(t, e) {
            ;(this.element = t.createElement("div")),
              this.element.classList.add(Be()),
              e.viewProps.bindClassModifiers(this.element)
            var n = t.createElement("hr")
            n.classList.add(Be("r")), this.element.appendChild(n)
          }
          return t
        })(),
        Re = (function (t) {
          function r(e, r) {
            return (
              t.call(
                this,
                n(n({}, r), { view: new Ke(e, { viewProps: r.viewProps }) })
              ) || this
            )
          }
          return e(r, t), r
        })(y),
        Ue = {
          id: "separator",
          accept: function (t) {
            var e = Ut(t, { view: Rt.required.constant("separator") })
            return e ? { params: e } : null
          },
          controller: function (t) {
            return new Re(t.document, {
              blade: t.blade,
              viewProps: t.viewProps,
            })
          },
          api: function (t) {
            return t instanceof Re ? new Ie(t) : null
          },
        }
      function Te(t) {
        return t.reduce(function (t, e) {
          var n
          return Object.assign(t, (((n = {})[e.presetKey] = e.read()), n))
        }, {})
      }
      function Fe(t, e) {
        t.forEach(function (t) {
          var n = e[t.presetKey]
          void 0 !== n && t.write(n)
        })
      }
      var He = (function (t) {
        function n(e) {
          return t.call(this, e) || this
        }
        return (
          e(n, t),
          (n.registerPlugin = function (t) {
            Xt(t)
          }),
          Object.defineProperty(n.prototype, "element", {
            get: function () {
              return this.controller_.view.element
            },
            enumerable: !1,
            configurable: !0,
          }),
          (n.prototype.importPreset = function (t) {
            Fe(
              this.controller_.rackController.rack.find(q).map(function (t) {
                return t.binding.target
              }),
              t
            ),
              this.refresh()
          }),
          (n.prototype.exportPreset = function () {
            return Te(
              this.controller_.rackController.rack.find(q).map(function (t) {
                return t.binding.target
              })
            )
          }),
          (n.prototype.refresh = function () {
            this.controller_.rackController.rack.find(q).forEach(function (t) {
              t.binding.read()
            }),
              this.controller_.rackController.rack
                .find(mt)
                .forEach(function (t) {
                  t.binding.read()
                })
          }),
          n
        )
      })(ke)
      function ze() {
        ;[Pe, Ne, Ue].forEach(function (t) {
          Xt({ type: "blade", plugin: t })
        })
      }
      ze()
      var qe = (function (t) {
          function n(e, n) {
            return (
              t.call(this, e, {
                expanded: n.expanded,
                blade: n.blade,
                props: n.props,
                root: !0,
                viewProps: n.viewProps,
              }) || this
            )
          }
          return e(n, t), n
        })(Oe),
        Ge = (function () {
          function t(t) {
            this.text = t
          }
          return (
            (t.prototype.evaluate = function () {
              return Number(this.text)
            }),
            (t.prototype.toString = function () {
              return this.text
            }),
            t
          )
        })(),
        Ye = {
          "**": function (t, e) {
            return Math.pow(t, e)
          },
          "*": function (t, e) {
            return t * e
          },
          "/": function (t, e) {
            return t / e
          },
          "%": function (t, e) {
            return t % e
          },
          "+": function (t, e) {
            return t + e
          },
          "-": function (t, e) {
            return t - e
          },
          "<<": function (t, e) {
            return t << e
          },
          ">>": function (t, e) {
            return t >> e
          },
          ">>>": function (t, e) {
            return t >>> e
          },
          "&": function (t, e) {
            return t & e
          },
          "^": function (t, e) {
            return t ^ e
          },
          "|": function (t, e) {
            return t | e
          },
        },
        $e = (function () {
          function t(t, e, n) {
            ;(this.left = e), (this.operator = t), (this.right = n)
          }
          return (
            (t.prototype.evaluate = function () {
              var t = Ye[this.operator]
              if (!t)
                throw new Error("unexpected binary operator: '" + this.operator)
              return t(this.left.evaluate(), this.right.evaluate())
            }),
            (t.prototype.toString = function () {
              return [
                "b(",
                this.left.toString(),
                this.operator,
                this.right.toString(),
                ")",
              ].join(" ")
            }),
            t
          )
        })(),
        Xe = {
          "+": function (t) {
            return t
          },
          "-": function (t) {
            return -t
          },
          "~": function (t) {
            return ~t
          },
        },
        Qe = (function () {
          function t(t, e) {
            ;(this.operator = t), (this.expression = e)
          }
          return (
            (t.prototype.evaluate = function () {
              var t = Xe[this.operator]
              if (!t)
                throw new Error("unexpected unary operator: '" + this.operator)
              return t(this.expression.evaluate())
            }),
            (t.prototype.toString = function () {
              return [
                "u(",
                this.operator,
                this.expression.toString(),
                ")",
              ].join(" ")
            }),
            t
          )
        })()
      function Je(t) {
        return function (e, n) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r](e, n)
            if ("" !== i) return i
          }
          return ""
        }
      }
      function We(t, e) {
        var n,
          r = t.substr(e).match(/^\s+/)
        return null !== (n = r && r[0]) && void 0 !== n ? n : ""
      }
      function Ze(t, e) {
        var n = t.substr(e, 1)
        return n.match(/^[1-9]$/) ? n : ""
      }
      function tn(t, e) {
        var n,
          r = t.substr(e).match(/^[0-9]+/)
        return null !== (n = r && r[0]) && void 0 !== n ? n : ""
      }
      function en(t, e) {
        var n = tn(t, e)
        if ("" !== n) return n
        var r = t.substr(e, 1)
        if ("-" !== r && "+" !== r) return ""
        var i = tn(t, (e += 1))
        return "" === i ? "" : r + i
      }
      function nn(t, e) {
        var n = t.substr(e, 1)
        if (((e += 1), "e" !== n.toLowerCase())) return ""
        var r = en(t, e)
        return "" === r ? "" : n + r
      }
      function rn(t, e) {
        var n = t.substr(e, 1)
        if ("0" === n) return n
        var r = Ze(t, e)
        return (e += r.length), "" === r ? "" : r + tn(t, e)
      }
      function on(t, e) {
        var n = rn(t, e)
        if (((e += n.length), "" === n)) return ""
        var r = t.substr(e, 1)
        if (((e += r.length), "." !== r)) return ""
        var i = tn(t, e)
        return n + r + i + nn(t, (e += i.length))
      }
      function an(t, e) {
        var n = t.substr(e, 1)
        if (((e += n.length), "." !== n)) return ""
        var r = tn(t, e)
        return (e += r.length), "" === r ? "" : n + r + nn(t, e)
      }
      function sn(t, e) {
        var n = rn(t, e)
        return (e += n.length), "" === n ? "" : n + nn(t, e)
      }
      var ln = Je([on, an, sn])
      function pn(t, e) {
        var n,
          r = t.substr(e).match(/^[01]+/)
        return null !== (n = r && r[0]) && void 0 !== n ? n : ""
      }
      function un(t, e) {
        var n = t.substr(e, 2)
        if (((e += n.length), "0b" !== n.toLowerCase())) return ""
        var r = pn(t, e)
        return "" === r ? "" : n + r
      }
      function dn(t, e) {
        var n,
          r = t.substr(e).match(/^[0-7]+/)
        return null !== (n = r && r[0]) && void 0 !== n ? n : ""
      }
      function cn(t, e) {
        var n = t.substr(e, 2)
        if (((e += n.length), "0o" !== n.toLowerCase())) return ""
        var r = dn(t, e)
        return "" === r ? "" : n + r
      }
      function hn(t, e) {
        var n,
          r = t.substr(e).match(/^[0-9a-f]+/i)
        return null !== (n = r && r[0]) && void 0 !== n ? n : ""
      }
      function vn(t, e) {
        var n = t.substr(e, 2)
        if (((e += n.length), "0x" !== n.toLowerCase())) return ""
        var r = hn(t, e)
        return "" === r ? "" : n + r
      }
      var fn = Je([un, cn, vn]),
        mn = Je([fn, ln])
      function bn(t, e) {
        var n = mn(t, e)
        return (
          (e += n.length), "" === n ? null : { evaluable: new Ge(n), cursor: e }
        )
      }
      function gn(t, e) {
        var n = t.substr(e, 1)
        if (((e += n.length), "(" !== n)) return null
        var r = Pn(t, e)
        if (!r) return null
        ;(e = r.cursor), (e += We(t, e).length)
        var i = t.substr(e, 1)
        return (
          (e += i.length),
          ")" !== i ? null : { evaluable: r.evaluable, cursor: e }
        )
      }
      function _n(t, e) {
        return bn(t, e) || gn(t, e)
      }
      function wn(t, e) {
        var n = _n(t, e)
        if (n) return n
        var r = t.substr(e, 1)
        if (((e += r.length), "+" !== r && "-" !== r && "~" !== r)) return null
        var i = wn(t, e)
        return i
          ? { cursor: (e = i.cursor), evaluable: new Qe(r, i.evaluable) }
          : null
      }
      function yn(t, e, n) {
        n += We(e, n).length
        var r = t.filter(function (t) {
          return e.startsWith(t, n)
        })[0]
        return r
          ? ((n += r.length), { cursor: (n += We(e, n).length), operator: r })
          : null
      }
      function xn(t, e) {
        return function (n, r) {
          var i = t(n, r)
          if (!i) return null
          r = i.cursor
          for (var o = i.evaluable; ; ) {
            var a = yn(e, n, r)
            if (!a) break
            r = a.cursor
            var s = t(n, r)
            if (!s) return null
            ;(r = s.cursor), (o = new $e(a.operator, o, s.evaluable))
          }
          return o ? { cursor: r, evaluable: o } : null
        }
      }
      var Cn = [
        ["**"],
        ["*", "/", "%"],
        ["+", "-"],
        ["<<", ">>>", ">>"],
        ["&"],
        ["^"],
        ["|"],
      ].reduce(function (t, e) {
        return xn(t, e)
      }, wn)
      function Pn(t, e) {
        return (e += We(t, e).length), Cn(t, e)
      }
      function kn(t) {
        var e = Pn(t, 0)
        return e
          ? e.cursor + We(t, e.cursor).length !== t.length
            ? null
            : e.evaluable
          : null
      }
      function En(t) {
        var e,
          n = kn(t)
        return null !== (e = null == n ? void 0 : n.evaluate()) && void 0 !== e
          ? e
          : null
      }
      function Vn(t) {
        if ("number" == typeof t) return t
        if ("string" == typeof t) {
          var e = En(t)
          if (!o(e)) return e
        }
        return 0
      }
      function Ln(t) {
        return String(t)
      }
      function Sn(t) {
        return function (e) {
          return e.toFixed(Math.max(Math.min(t, 20), 0))
        }
      }
      var Mn = b("sldtxt"),
        jn = (function () {
          function t(t, e) {
            ;(this.element = t.createElement("div")),
              this.element.classList.add(Mn())
            var n = t.createElement("div")
            n.classList.add(Mn("s")),
              (this.sliderView_ = e.sliderView),
              n.appendChild(this.sliderView_.element),
              this.element.appendChild(n)
            var r = t.createElement("div")
            r.classList.add(Mn("t")),
              (this.textView_ = e.textView),
              r.appendChild(this.textView_.element),
              this.element.appendChild(r)
          }
          return t
        })()
      function An(t, e) {
        var n = t * (e.altKey ? 0.1 : 1) * (e.shiftKey ? 10 : 1)
        return e.upKey ? +n : e.downKey ? -n : 0
      }
      function Dn(t) {
        return {
          altKey: t.altKey,
          downKey: "ArrowDown" === t.key,
          shiftKey: t.shiftKey,
          upKey: "ArrowUp" === t.key,
        }
      }
      function On(t) {
        return {
          altKey: t.altKey,
          downKey: "ArrowLeft" === t.key,
          shiftKey: t.shiftKey,
          upKey: "ArrowRight" === t.key,
        }
      }
      function Nn(t) {
        return "ArrowUp" === t || "ArrowDown" === t
      }
      function In(t) {
        return Nn(t) || "ArrowLeft" === t || "ArrowRight" === t
      }
      function Bn(t, e) {
        var n = e.ownerDocument.defaultView,
          r = e.getBoundingClientRect()
        return {
          x: t.pageX - (((n && n.scrollX) || 0) + r.left),
          y: t.pageY - (((n && n.scrollY) || 0) + r.top),
        }
      }
      var Kn = (function () {
          function t(t) {
            ;(this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this)),
              (this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this)),
              (this.onMouseDown_ = this.onMouseDown_.bind(this)),
              (this.onTouchEnd_ = this.onTouchEnd_.bind(this)),
              (this.onTouchMove_ = this.onTouchMove_.bind(this)),
              (this.onTouchStart_ = this.onTouchStart_.bind(this)),
              (this.elem_ = t),
              (this.emitter = new p()),
              k(this.elem_.ownerDocument)
                ? (t.addEventListener("touchstart", this.onTouchStart_),
                  t.addEventListener("touchmove", this.onTouchMove_),
                  t.addEventListener("touchend", this.onTouchEnd_))
                : t.addEventListener("mousedown", this.onMouseDown_)
          }
          return (
            (t.prototype.computePosition_ = function (t) {
              var e = this.elem_.getBoundingClientRect()
              return {
                bounds: { width: e.width, height: e.height },
                point: t ? { x: t.x, y: t.y } : null,
              }
            }),
            (t.prototype.onMouseDown_ = function (t) {
              var e
              t.preventDefault(),
                null === (e = t.currentTarget) || void 0 === e || e.focus()
              var n = this.elem_.ownerDocument
              n.addEventListener("mousemove", this.onDocumentMouseMove_),
                n.addEventListener("mouseup", this.onDocumentMouseUp_),
                this.emitter.emit("down", {
                  altKey: t.altKey,
                  data: this.computePosition_(Bn(t, this.elem_)),
                  sender: this,
                  shiftKey: t.shiftKey,
                })
            }),
            (t.prototype.onDocumentMouseMove_ = function (t) {
              this.emitter.emit("move", {
                altKey: t.altKey,
                data: this.computePosition_(Bn(t, this.elem_)),
                sender: this,
                shiftKey: t.shiftKey,
              })
            }),
            (t.prototype.onDocumentMouseUp_ = function (t) {
              var e = this.elem_.ownerDocument
              e.removeEventListener("mousemove", this.onDocumentMouseMove_),
                e.removeEventListener("mouseup", this.onDocumentMouseUp_),
                this.emitter.emit("up", {
                  altKey: t.altKey,
                  data: this.computePosition_(Bn(t, this.elem_)),
                  sender: this,
                  shiftKey: t.shiftKey,
                })
            }),
            (t.prototype.onTouchStart_ = function (t) {
              t.preventDefault()
              var e = t.targetTouches.item(0),
                n = this.elem_.getBoundingClientRect()
              this.emitter.emit("down", {
                altKey: t.altKey,
                data: this.computePosition_(
                  e ? { x: e.clientX - n.left, y: e.clientY - n.top } : void 0
                ),
                sender: this,
                shiftKey: t.shiftKey,
              })
            }),
            (t.prototype.onTouchMove_ = function (t) {
              var e = t.targetTouches.item(0),
                n = this.elem_.getBoundingClientRect()
              this.emitter.emit("move", {
                altKey: t.altKey,
                data: this.computePosition_(
                  e ? { x: e.clientX - n.left, y: e.clientY - n.top } : void 0
                ),
                sender: this,
                shiftKey: t.shiftKey,
              })
            }),
            (t.prototype.onTouchEnd_ = function (t) {
              var e = t.targetTouches.item(0),
                n = this.elem_.getBoundingClientRect()
              this.emitter.emit("up", {
                altKey: t.altKey,
                data: this.computePosition_(
                  e ? { x: e.clientX - n.left, y: e.clientY - n.top } : void 0
                ),
                sender: this,
                shiftKey: t.shiftKey,
              })
            }),
            t
          )
        })(),
        Rn = b("txt"),
        Un = (function () {
          function t(t, e) {
            ;(this.onChange_ = this.onChange_.bind(this)),
              (this.props_ = e.props),
              this.props_.emitter.on("change", this.onChange_),
              (this.element = t.createElement("div")),
              this.element.classList.add(Rn(), Rn(void 0, "num")),
              e.arrayPosition &&
                this.element.classList.add(Rn(void 0, e.arrayPosition)),
              e.viewProps.bindClassModifiers(this.element)
            var n = t.createElement("input")
            n.classList.add(Rn("i")),
              (n.type = "text"),
              e.viewProps.bindDisabled(n),
              this.element.appendChild(n),
              (this.inputElement = n),
              (this.onDraggingChange_ = this.onDraggingChange_.bind(this)),
              (this.dragging_ = e.dragging),
              this.dragging_.emitter.on("change", this.onDraggingChange_),
              this.element.classList.add(Rn()),
              this.inputElement.classList.add(Rn("i"))
            var r = t.createElement("div")
            r.classList.add(Rn("k")),
              this.element.appendChild(r),
              (this.knobElement = r)
            var i = t.createElementNS(x, "svg")
            i.classList.add(Rn("g")), this.knobElement.appendChild(i)
            var o = t.createElementNS(x, "path")
            o.classList.add(Rn("gb")),
              i.appendChild(o),
              (this.guideBodyElem_ = o)
            var a = t.createElementNS(x, "path")
            a.classList.add(Rn("gh")),
              i.appendChild(a),
              (this.guideHeadElem_ = a)
            var s = t.createElement("div")
            s.classList.add(b("tt")()),
              this.knobElement.appendChild(s),
              (this.tooltipElem_ = s),
              e.value.emitter.on("change", this.onChange_),
              (this.value = e.value),
              this.refresh()
          }
          return (
            (t.prototype.onDraggingChange_ = function (t) {
              if (null !== t.rawValue) {
                this.element.classList.add(Rn(void 0, "drg"))
                var e = t.rawValue / this.props_.get("draggingScale"),
                  n = e + (e > 0 ? -1 : e < 0 ? 1 : 0),
                  r = ot(-n, -4, 4)
                this.guideHeadElem_.setAttributeNS(
                  null,
                  "d",
                  [
                    "M " + (n + r) + ",0 L" + n + ",4 L" + (n + r) + ",8",
                    "M " + e + ",-1 L" + e + ",9",
                  ].join(" ")
                ),
                  this.guideBodyElem_.setAttributeNS(
                    null,
                    "d",
                    "M 0,4 L" + e + ",4"
                  )
                var i = this.props_.get("formatter")
                ;(this.tooltipElem_.textContent = i(this.value.rawValue)),
                  (this.tooltipElem_.style.left = e + "px")
              } else this.element.classList.remove(Rn(void 0, "drg"))
            }),
            (t.prototype.refresh = function () {
              var t = this.props_.get("formatter")
              this.inputElement.value = t(this.value.rawValue)
            }),
            (t.prototype.onChange_ = function () {
              this.refresh()
            }),
            t
          )
        })(),
        Tn = (function () {
          function t(t, e) {
            ;(this.originRawValue_ = 0),
              (this.onInputChange_ = this.onInputChange_.bind(this)),
              (this.onInputKeyDown_ = this.onInputKeyDown_.bind(this)),
              (this.onPointerDown_ = this.onPointerDown_.bind(this)),
              (this.onPointerMove_ = this.onPointerMove_.bind(this)),
              (this.onPointerUp_ = this.onPointerUp_.bind(this)),
              (this.baseStep_ = e.baseStep),
              (this.parser_ = e.parser),
              (this.props = e.props),
              (this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.dragging_ = c(null)),
              (this.view = new Un(t, {
                arrayPosition: e.arrayPosition,
                dragging: this.dragging_,
                props: this.props,
                value: this.value,
                viewProps: this.viewProps,
              })),
              this.view.inputElement.addEventListener(
                "change",
                this.onInputChange_
              ),
              this.view.inputElement.addEventListener(
                "keydown",
                this.onInputKeyDown_
              )
            var n = new Kn(this.view.knobElement)
            n.emitter.on("down", this.onPointerDown_),
              n.emitter.on("move", this.onPointerMove_),
              n.emitter.on("up", this.onPointerUp_)
          }
          return (
            (t.prototype.onInputChange_ = function (t) {
              var e = i(t.currentTarget).value,
                n = this.parser_(e)
              o(n) || (this.value.rawValue = n), this.view.refresh()
            }),
            (t.prototype.onInputKeyDown_ = function (t) {
              var e = An(this.baseStep_, Dn(t))
              0 !== e && (this.value.rawValue += e)
            }),
            (t.prototype.onPointerDown_ = function () {
              ;(this.originRawValue_ = this.value.rawValue),
                (this.dragging_.rawValue = 0)
            }),
            (t.prototype.onPointerMove_ = function (t) {
              if (t.data.point) {
                var e = t.data.point.x - t.data.bounds.width / 2
                ;(this.value.rawValue =
                  this.originRawValue_ + e * this.props.get("draggingScale")),
                  (this.dragging_.rawValue =
                    this.value.rawValue - this.originRawValue_)
              }
            }),
            (t.prototype.onPointerUp_ = function () {
              this.dragging_.rawValue = null
            }),
            t
          )
        })(),
        Fn = b("sld"),
        Hn = (function () {
          function t(t, e) {
            ;(this.onChange_ = this.onChange_.bind(this)),
              (this.props_ = e.props),
              this.props_.emitter.on("change", this.onChange_),
              (this.element = t.createElement("div")),
              this.element.classList.add(Fn()),
              e.viewProps.bindClassModifiers(this.element)
            var n = t.createElement("div")
            n.classList.add(Fn("t")),
              e.viewProps.bindTabIndex(n),
              this.element.appendChild(n),
              (this.trackElement = n)
            var r = t.createElement("div")
            r.classList.add(Fn("k")),
              this.trackElement.appendChild(r),
              (this.knobElement = r),
              e.value.emitter.on("change", this.onChange_),
              (this.value = e.value),
              this.update_()
          }
          return (
            (t.prototype.update_ = function () {
              var t = ot(
                rt(
                  this.value.rawValue,
                  this.props_.get("minValue"),
                  this.props_.get("maxValue"),
                  0,
                  100
                ),
                0,
                100
              )
              this.knobElement.style.width = t + "%"
            }),
            (t.prototype.onChange_ = function () {
              this.update_()
            }),
            t
          )
        })(),
        zn = (function () {
          function t(t, e) {
            ;(this.onKeyDown_ = this.onKeyDown_.bind(this)),
              (this.onPoint_ = this.onPoint_.bind(this)),
              (this.baseStep_ = e.baseStep),
              (this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.props = e.props),
              (this.view = new Hn(t, {
                props: this.props,
                value: this.value,
                viewProps: this.viewProps,
              })),
              (this.ptHandler_ = new Kn(this.view.trackElement)),
              this.ptHandler_.emitter.on("down", this.onPoint_),
              this.ptHandler_.emitter.on("move", this.onPoint_),
              this.ptHandler_.emitter.on("up", this.onPoint_),
              this.view.trackElement.addEventListener(
                "keydown",
                this.onKeyDown_
              )
          }
          return (
            (t.prototype.handlePointerEvent_ = function (t) {
              t.point &&
                (this.value.rawValue = rt(
                  ot(t.point.x, 0, t.bounds.width),
                  0,
                  t.bounds.width,
                  this.props.get("minValue"),
                  this.props.get("maxValue")
                ))
            }),
            (t.prototype.onPoint_ = function (t) {
              this.handlePointerEvent_(t.data)
            }),
            (t.prototype.onKeyDown_ = function (t) {
              this.value.rawValue += An(this.baseStep_, On(t))
            }),
            t
          )
        })(),
        qn = (function () {
          function t(t, e) {
            ;(this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.sliderC_ = new zn(t, {
                baseStep: e.baseStep,
                props: e.sliderProps,
                value: e.value,
                viewProps: this.viewProps,
              })),
              (this.textC_ = new Tn(t, {
                baseStep: e.baseStep,
                parser: e.parser,
                props: e.textProps,
                value: e.value,
                viewProps: e.viewProps,
              })),
              (this.view = new jn(t, {
                sliderView: this.sliderC_.view,
                textView: this.textC_.view,
              }))
          }
          return (
            Object.defineProperty(t.prototype, "sliderController", {
              get: function () {
                return this.sliderC_
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "textController", {
              get: function () {
                return this.textC_
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          )
        })(),
        Gn = (function (t) {
          function n(e) {
            var n = t.call(this, e) || this
            return (
              (n.emitter_ = new p()),
              n.controller_.valueController.value.emitter.on(
                "change",
                function (t) {
                  n.emitter_.emit("change", { event: new St(n, t.rawValue) })
                }
              ),
              n
            )
          }
          return (
            e(n, t),
            Object.defineProperty(n.prototype, "label", {
              get: function () {
                return this.controller_.props.get("label")
              },
              set: function (t) {
                this.controller_.props.set("label", t)
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "maxValue", {
              get: function () {
                return this.controller_.valueController.sliderController.props.get(
                  "maxValue"
                )
              },
              set: function (t) {
                this.controller_.valueController.sliderController.props.set(
                  "maxValue",
                  t
                )
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "minValue", {
              get: function () {
                return this.controller_.valueController.sliderController.props.get(
                  "minValue"
                )
              },
              set: function (t) {
                this.controller_.valueController.sliderController.props.set(
                  "minValue",
                  t
                )
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "value", {
              get: function () {
                return this.controller_.valueController.value.rawValue
              },
              set: function (t) {
                this.controller_.valueController.value.rawValue = t
              },
              enumerable: !1,
              configurable: !0,
            }),
            (n.prototype.on = function (t, e) {
              var n = e.bind(this)
              return (
                this.emitter_.on(t, function (t) {
                  n(t.event)
                }),
                this
              )
            }),
            n
          )
        })(Vt),
        Yn = {
          id: "slider",
          accept: function (t) {
            var e = Rt,
              n = Ut(t, {
                max: e.required.number,
                min: e.required.number,
                view: e.required.constant("slider"),
                format: e.optional.function,
                label: e.optional.string,
                value: e.optional.number,
              })
            return n ? { params: n } : null
          },
          controller: function (t) {
            var e,
              n,
              r = null !== (e = t.params.value) && void 0 !== e ? e : 0,
              i = new qn(t.document, {
                baseStep: 1,
                parser: En,
                sliderProps: h.fromObject({
                  maxValue: t.params.max,
                  minValue: t.params.min,
                }),
                textProps: h.fromObject({
                  draggingScale: ht(void 0, r),
                  formatter:
                    null !== (n = t.params.format) && void 0 !== n ? n : Ln,
                }),
                value: c(r),
                viewProps: t.viewProps,
              })
            return new z(t.document, {
              blade: t.blade,
              props: h.fromObject({ label: t.params.label }),
              valueController: i,
            })
          },
          api: function (t) {
            return t instanceof z && t.valueController instanceof qn
              ? new Gn(t)
              : null
          },
        },
        $n = b("tbi"),
        Xn = (function () {
          function t(t, e) {
            var n = this
            ;(this.element = t.createElement("div")),
              this.element.classList.add($n()),
              e.viewProps.bindClassModifiers(this.element),
              U(e.props, "selected", function (t) {
                t
                  ? n.element.classList.add($n(void 0, "sel"))
                  : n.element.classList.remove($n(void 0, "sel"))
              })
            var r = t.createElement("button")
            r.classList.add($n("b")),
              e.viewProps.bindDisabled(r),
              this.element.appendChild(r),
              (this.buttonElement = r)
            var i = t.createElement("div")
            i.classList.add($n("t")),
              X(e.props.value("title"), i),
              this.buttonElement.appendChild(i),
              (this.titleElement = i)
          }
          return t
        })(),
        Qn = (function () {
          function t(t, e) {
            ;(this.emitter = new p()),
              (this.onClick_ = this.onClick_.bind(this)),
              (this.props = e.props),
              (this.viewProps = e.viewProps),
              (this.view = new Xn(t, {
                props: e.props,
                viewProps: e.viewProps,
              })),
              this.view.buttonElement.addEventListener("click", this.onClick_)
          }
          return (
            (t.prototype.onClick_ = function () {
              this.emitter.emit("click", { sender: this })
            }),
            t
          )
        })(),
        Jn = (function () {
          function t(t, e) {
            var n = this
            ;(this.onItemClick_ = this.onItemClick_.bind(this)),
              (this.ic_ = new Qn(t, {
                props: e.itemProps,
                viewProps: W.create(),
              })),
              this.ic_.emitter.on("click", this.onItemClick_),
              (this.cc_ = new se(t, { blade: v(), viewProps: W.create() })),
              (this.props = e.props),
              U(this.props, "selected", function (t) {
                n.itemController.props.set("selected", t),
                  n.contentController.viewProps.set("hidden", !t)
              })
          }
          return (
            Object.defineProperty(t.prototype, "itemController", {
              get: function () {
                return this.ic_
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "contentController", {
              get: function () {
                return this.cc_
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.onItemClick_ = function () {
              this.props.set("selected", !0)
            }),
            t
          )
        })(),
        Wn = (function () {
          function t(t, e) {
            ;(this.controller_ = t), (this.rackApi_ = e)
          }
          return (
            Object.defineProperty(t.prototype, "title", {
              get: function () {
                var t
                return null !==
                  (t = this.controller_.itemController.props.get("title")) &&
                  void 0 !== t
                  ? t
                  : ""
              },
              set: function (t) {
                this.controller_.itemController.props.set("title", t)
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "selected", {
              get: function () {
                return this.controller_.props.get("selected")
              },
              set: function (t) {
                this.controller_.props.set("selected", t)
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "children", {
              get: function () {
                return this.rackApi_.children
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.addButton = function (t) {
              return this.rackApi_.addButton(t)
            }),
            (t.prototype.addFolder = function (t) {
              return this.rackApi_.addFolder(t)
            }),
            (t.prototype.addSeparator = function (t) {
              return this.rackApi_.addSeparator(t)
            }),
            (t.prototype.addTab = function (t) {
              return this.rackApi_.addTab(t)
            }),
            (t.prototype.add = function (t, e) {
              this.rackApi_.add(t, e)
            }),
            (t.prototype.remove = function (t) {
              this.rackApi_.remove(t)
            }),
            (t.prototype.addInput = function (t, e, n) {
              return this.rackApi_.addInput(t, e, n)
            }),
            (t.prototype.addMonitor = function (t, e, n) {
              return this.rackApi_.addMonitor(t, e, n)
            }),
            (t.prototype.addBlade_v3_ = function (t) {
              return this.rackApi_.addBlade_v3_(t)
            }),
            t
          )
        })(),
        Zn = (function (t) {
          function n(e) {
            var n = t.call(this, e, new Zt(e.rackController)) || this
            return (
              (n.onPageAdd_ = n.onPageAdd_.bind(n)),
              (n.onPageRemove_ = n.onPageRemove_.bind(n)),
              (n.emitter_ = new p()),
              (n.pageApiMap_ = new Map()),
              n.rackApi_.on("change", function (t) {
                n.emitter_.emit("change", { event: t })
              }),
              n.rackApi_.on("update", function (t) {
                n.emitter_.emit("update", { event: t })
              }),
              n.controller_.pageSet.emitter.on("add", n.onPageAdd_),
              n.controller_.pageSet.emitter.on("remove", n.onPageRemove_),
              n.controller_.pageSet.items.forEach(function (t) {
                n.setUpPageApi_(t)
              }),
              n
            )
          }
          return (
            e(n, t),
            Object.defineProperty(n.prototype, "pages", {
              get: function () {
                var t = this
                return this.controller_.pageSet.items.map(function (e) {
                  var n = t.pageApiMap_.get(e)
                  if (!n) throw l.shouldNeverHappen()
                  return n
                })
              },
              enumerable: !1,
              configurable: !0,
            }),
            (n.prototype.addPage = function (t) {
              var e = this.controller_.view.element.ownerDocument,
                n = new Jn(e, {
                  itemProps: h.fromObject({ selected: !1, title: t.title }),
                  props: h.fromObject({ selected: !1 }),
                })
              this.controller_.add(n, t.index)
              var r = this.pageApiMap_.get(n)
              if (!r) throw l.shouldNeverHappen()
              return r
            }),
            (n.prototype.removePage = function (t) {
              this.controller_.remove(t)
            }),
            (n.prototype.on = function (t, e) {
              var n = e.bind(this)
              return (
                this.emitter_.on(t, function (t) {
                  n(t.event)
                }),
                this
              )
            }),
            (n.prototype.setUpPageApi_ = function (t) {
              var e = this.rackApi_.apiSet_.find(function (e) {
                return e.controller_ === t.contentController
              })
              if (!e) throw l.shouldNeverHappen()
              var n = new Wn(t, e)
              this.pageApiMap_.set(t, n)
            }),
            (n.prototype.onPageAdd_ = function (t) {
              this.setUpPageApi_(t.item)
            }),
            (n.prototype.onPageRemove_ = function (t) {
              if (!this.pageApiMap_.get(t.item)) throw l.shouldNeverHappen()
              this.pageApiMap_.delete(t.item)
            }),
            n
          )
        })(Gt),
        tr = b("tab"),
        er = (function () {
          function t(t, e) {
            ;(this.element = t.createElement("div")),
              this.element.classList.add(tr(), Ae()),
              e.viewProps.bindClassModifiers(this.element),
              R(e.empty, $(this.element, tr(void 0, "nop")))
            var n = t.createElement("div")
            n.classList.add(tr("i")),
              this.element.appendChild(n),
              (this.itemsElement = n)
            var r = e.contentsElement
            r.classList.add(tr("c")),
              this.element.appendChild(r),
              (this.contentsElement = r)
          }
          return t
        })(),
        nr = (function (t) {
          function n(e, n) {
            var r = this,
              i = new se(e, { blade: n.blade, viewProps: n.viewProps }),
              o = c(!0)
            return (
              ((r =
                t.call(this, {
                  blade: n.blade,
                  rackController: i,
                  view: new er(e, {
                    contentsElement: i.view.element,
                    empty: o,
                    viewProps: n.viewProps,
                  }),
                }) || this).onPageAdd_ = r.onPageAdd_.bind(r)),
              (r.onPageRemove_ = r.onPageRemove_.bind(r)),
              (r.onPageSelectedChange_ = r.onPageSelectedChange_.bind(r)),
              (r.pageSet_ = new Qt(function () {
                return null
              })),
              r.pageSet_.emitter.on("add", r.onPageAdd_),
              r.pageSet_.emitter.on("remove", r.onPageRemove_),
              (r.empty_ = o),
              r.applyPages_(),
              r
            )
          }
          return (
            e(n, t),
            Object.defineProperty(n.prototype, "pageSet", {
              get: function () {
                return this.pageSet_
              },
              enumerable: !1,
              configurable: !0,
            }),
            (n.prototype.add = function (t, e) {
              this.pageSet_.add(t, null != e ? e : this.pageSet_.items.length)
            }),
            (n.prototype.remove = function (t) {
              this.pageSet_.remove(this.pageSet_.items[t])
            }),
            (n.prototype.applyPages_ = function () {
              this.keepSelection_(),
                (this.empty_.rawValue = 0 === this.pageSet_.items.length)
            }),
            (n.prototype.onPageAdd_ = function (t) {
              var e = t.item
              A(this.view.itemsElement, e.itemController.view.element, t.index),
                this.rackController.rack.add(e.contentController, t.index),
                e.props
                  .value("selected")
                  .emitter.on("change", this.onPageSelectedChange_),
                this.applyPages_()
            }),
            (n.prototype.onPageRemove_ = function (t) {
              var e = t.item
              D(e.itemController.view.element),
                this.rackController.rack.remove(e.contentController),
                e.props
                  .value("selected")
                  .emitter.off("change", this.onPageSelectedChange_),
                this.applyPages_()
            }),
            (n.prototype.keepSelection_ = function () {
              if (0 !== this.pageSet_.items.length) {
                var t = this.pageSet_.items.findIndex(function (t) {
                  return t.props.get("selected")
                })
                t < 0
                  ? this.pageSet_.items.forEach(function (t, e) {
                      t.props.set("selected", 0 === e)
                    })
                  : this.pageSet_.items.forEach(function (e, n) {
                      e.props.set("selected", n === t)
                    })
              }
            }),
            (n.prototype.onPageSelectedChange_ = function (t) {
              if (t.rawValue) {
                var e = this.pageSet_.items.findIndex(function (e) {
                  return e.props.value("selected") === t.sender
                })
                this.pageSet_.items.forEach(function (t, n) {
                  t.props.set("selected", n === e)
                })
              } else this.keepSelection_()
            }),
            n
          )
        })(ee),
        rr = {
          id: "tab",
          accept: function (t) {
            var e = Rt,
              n = Ut(t, {
                pages: e.required.array(
                  e.required.object({ title: e.required.string })
                ),
                view: e.required.constant("tab"),
              })
            return n && 0 !== n.pages.length ? { params: n } : null
          },
          controller: function (t) {
            var e = new nr(t.document, {
              blade: t.blade,
              viewProps: t.viewProps,
            })
            return (
              t.params.pages.forEach(function (n) {
                var r = new Jn(t.document, {
                  itemProps: h.fromObject({ selected: !1, title: n.title }),
                  props: h.fromObject({ selected: !1 }),
                })
                e.add(r)
              }),
              e
            )
          },
          api: function (t) {
            return t instanceof nr ? new Zn(t) : null
          },
        },
        ir = b("txt"),
        or = (function () {
          function t(t, e) {
            ;(this.onChange_ = this.onChange_.bind(this)),
              (this.element = t.createElement("div")),
              this.element.classList.add(ir()),
              e.viewProps.bindClassModifiers(this.element),
              (this.props_ = e.props),
              this.props_.emitter.on("change", this.onChange_)
            var n = t.createElement("input")
            n.classList.add(ir("i")),
              (n.type = "text"),
              e.viewProps.bindDisabled(n),
              this.element.appendChild(n),
              (this.inputElement = n),
              e.value.emitter.on("change", this.onChange_),
              (this.value_ = e.value),
              this.refresh()
          }
          return (
            (t.prototype.refresh = function () {
              var t = this.props_.get("formatter")
              this.inputElement.value = t(this.value_.rawValue)
            }),
            (t.prototype.onChange_ = function () {
              this.refresh()
            }),
            t
          )
        })(),
        ar = (function () {
          function t(t, e) {
            ;(this.onInputChange_ = this.onInputChange_.bind(this)),
              (this.parser_ = e.parser),
              (this.props = e.props),
              (this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.view = new or(t, {
                props: e.props,
                value: this.value,
                viewProps: this.viewProps,
              })),
              this.view.inputElement.addEventListener(
                "change",
                this.onInputChange_
              )
          }
          return (
            (t.prototype.onInputChange_ = function (t) {
              var e = i(t.currentTarget).value,
                n = this.parser_(e)
              o(n) || (this.value.rawValue = n), this.view.refresh()
            }),
            t
          )
        })(),
        sr = (function (t) {
          function n(e) {
            var n = t.call(this, e) || this
            return (
              (n.emitter_ = new p()),
              n.controller_.valueController.value.emitter.on(
                "change",
                function (t) {
                  n.emitter_.emit("change", { event: new St(n, t.rawValue) })
                }
              ),
              n
            )
          }
          return (
            e(n, t),
            Object.defineProperty(n.prototype, "label", {
              get: function () {
                return this.controller_.props.get("label")
              },
              set: function (t) {
                this.controller_.props.set("label", t)
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "formatter", {
              get: function () {
                return this.controller_.valueController.props.get("formatter")
              },
              set: function (t) {
                this.controller_.valueController.props.set("formatter", t)
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "value", {
              get: function () {
                return this.controller_.valueController.value.rawValue
              },
              set: function (t) {
                this.controller_.valueController.value.rawValue = t
              },
              enumerable: !1,
              configurable: !0,
            }),
            (n.prototype.on = function (t, e) {
              var n = e.bind(this)
              return (
                this.emitter_.on(t, function (t) {
                  n(t.event)
                }),
                this
              )
            }),
            n
          )
        })(Vt),
        lr = {
          id: "text",
          accept: function (t) {
            var e = Rt,
              n = Ut(t, {
                parse: e.required.function,
                value: e.required.raw,
                view: e.required.constant("text"),
                format: e.optional.function,
                label: e.optional.string,
              })
            return n ? { params: n } : null
          },
          controller: function (t) {
            var e,
              n = new ar(t.document, {
                parser: t.params.parse,
                props: h.fromObject({
                  formatter:
                    null !== (e = t.params.format) && void 0 !== e
                      ? e
                      : function (t) {
                          return String(t)
                        },
                }),
                value: c(t.params.value),
                viewProps: t.viewProps,
              })
            return new z(t.document, {
              blade: t.blade,
              props: h.fromObject({ label: t.params.label }),
              valueController: n,
            })
          },
          api: function (t) {
            return t instanceof z && t.valueController instanceof ar
              ? new sr(t)
              : null
          },
        }
      function pr(t) {
        return String(t)
      }
      function ur(t) {
        return "false" !== t && !!t
      }
      function dr(t) {
        return pr(t)
      }
      function cr(t, e) {
        t.write(e)
      }
      var hr = b("ckb"),
        vr = (function () {
          function t(t, e) {
            ;(this.onValueChange_ = this.onValueChange_.bind(this)),
              (this.element = t.createElement("div")),
              this.element.classList.add(hr()),
              e.viewProps.bindClassModifiers(this.element)
            var n = t.createElement("label")
            n.classList.add(hr("l")), this.element.appendChild(n)
            var r = t.createElement("input")
            r.classList.add(hr("i")),
              (r.type = "checkbox"),
              n.appendChild(r),
              (this.inputElement = r),
              e.viewProps.bindDisabled(this.inputElement)
            var i = t.createElement("div")
            i.classList.add(hr("w")), n.appendChild(i)
            var o = j(t, "check")
            i.appendChild(o),
              e.value.emitter.on("change", this.onValueChange_),
              (this.value = e.value),
              this.update_()
          }
          return (
            (t.prototype.update_ = function () {
              this.inputElement.checked = this.value.rawValue
            }),
            (t.prototype.onValueChange_ = function () {
              this.update_()
            }),
            t
          )
        })(),
        fr = (function () {
          function t(t, e) {
            ;(this.onInputChange_ = this.onInputChange_.bind(this)),
              (this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.view = new vr(t, {
                value: this.value,
                viewProps: this.viewProps,
              })),
              this.view.inputElement.addEventListener(
                "change",
                this.onInputChange_
              )
          }
          return (
            (t.prototype.onInputChange_ = function (t) {
              var e = i(t.currentTarget)
              this.value.rawValue = e.checked
            }),
            t
          )
        })()
      function mr(t) {
        var e = [],
          n = lt(t)
        return n && e.push(n), new Z(e)
      }
      var br = {
          id: "input-bool",
          accept: function (t) {
            return "boolean" == typeof t ? t : null
          },
          binding: {
            reader: function (t) {
              return ur
            },
            constraint: function (t) {
              return mr(t.params)
            },
            writer: function (t) {
              return cr
            },
          },
          controller: function (t) {
            var e,
              n = t.document,
              r = t.value,
              i = t.constraint
            return i && tt(i, et)
              ? new me(n, {
                  props: h.fromObject({
                    options: null !== (e = pt(i)) && void 0 !== e ? e : [],
                  }),
                  value: r,
                  viewProps: t.viewProps,
                })
              : new fr(n, { value: r, viewProps: t.viewProps })
          },
        },
        gr = b("pop"),
        _r = (function () {
          function t(t, e) {
            ;(this.element = t.createElement("div")),
              this.element.classList.add(gr()),
              e.viewProps.bindClassModifiers(this.element),
              R(e.shows, $(this.element, gr(void 0, "v")))
          }
          return t
        })(),
        wr = (function () {
          function t(t, e) {
            ;(this.shows = c(!1)),
              (this.viewProps = e.viewProps),
              (this.view = new _r(t, {
                shows: this.shows,
                viewProps: this.viewProps,
              }))
          }
          return t
        })()
      function yr(t) {
        var e = t.primary,
          n = t.secondary,
          r = t.forward,
          i = t.backward,
          o = !1
        function a(t) {
          o || ((o = !0), t(), (o = !1))
        }
        e.emitter.on("change", function () {
          a(function () {
            n.rawValue = r(e, n)
          })
        }),
          n.emitter.on("change", function () {
            a(function () {
              e.rawValue = i(e, n)
            }),
              a(function () {
                n.rawValue = r(e, n)
              })
          }),
          a(function () {
            n.rawValue = r(e, n)
          })
      }
      var xr = b("col"),
        Cr = (function () {
          function t(t, e) {
            ;(this.element = t.createElement("div")),
              this.element.classList.add(xr()),
              R(e.expanded, $(this.element, xr(void 0, "expanded")))
            var n = t.createElement("div")
            n.classList.add(xr("h")), this.element.appendChild(n)
            var r = t.createElement("div")
            r.classList.add(xr("s")), n.appendChild(r), (this.swatchElement = r)
            var i = t.createElement("div")
            if (
              (i.classList.add(xr("t")),
              n.appendChild(i),
              (this.textElement = i),
              "inline" === e.pickerLayout)
            ) {
              var o = t.createElement("div")
              o.classList.add(xr("p")),
                this.element.appendChild(o),
                (this.pickerElement = o)
            } else this.pickerElement = null
          }
          return t
        })(),
        Pr = (function () {
          function t(t) {
            ;(this.maxValue = t.max), (this.minValue = t.min)
          }
          return (
            (t.prototype.constrain = function (t) {
              var e = t
              return (
                o(this.minValue) || (e = Math.max(e, this.minValue)),
                o(this.maxValue) || (e = Math.min(e, this.maxValue)),
                e
              )
            }),
            t
          )
        })()
      function kr(t, e, n) {
        var r = ot(t / 255, 0, 1),
          i = ot(e / 255, 0, 1),
          o = ot(n / 255, 0, 1),
          a = Math.max(r, i, o),
          s = Math.min(r, i, o),
          l = a - s,
          p = 0,
          u = 0,
          d = (s + a) / 2
        return (
          0 !== l &&
            ((u = l / (1 - Math.abs(a + s - 1))),
            (p =
              (p =
                r === a
                  ? (i - o) / l
                  : i === a
                  ? 2 + (o - r) / l
                  : 4 + (r - i) / l) /
                6 +
              (p < 0 ? 1 : 0))),
          [360 * p, 100 * u, 100 * d]
        )
      }
      function Er(t, e, n) {
        var r,
          i,
          o,
          a,
          s,
          l,
          p,
          u,
          d,
          c = ((t % 360) + 360) % 360,
          h = ot(e / 100, 0, 1),
          v = ot(n / 100, 0, 1),
          f = (1 - Math.abs(2 * v - 1)) * h,
          m = f * (1 - Math.abs(((c / 60) % 2) - 1)),
          b = v - f / 2
        return (
          c >= 0 && c < 60
            ? ((p = (r = [f, m, 0])[0]), (u = r[1]), (d = r[2]))
            : c >= 60 && c < 120
            ? ((p = (i = [m, f, 0])[0]), (u = i[1]), (d = i[2]))
            : c >= 120 && c < 180
            ? ((p = (o = [0, f, m])[0]), (u = o[1]), (d = o[2]))
            : c >= 180 && c < 240
            ? ((p = (a = [0, m, f])[0]), (u = a[1]), (d = a[2]))
            : c >= 240 && c < 300
            ? ((p = (s = [m, 0, f])[0]), (u = s[1]), (d = s[2]))
            : ((p = (l = [f, 0, m])[0]), (u = l[1]), (d = l[2])),
          [255 * (p + b), 255 * (u + b), 255 * (d + b)]
        )
      }
      function Vr(t, e, n) {
        var r = ot(t / 255, 0, 1),
          i = ot(e / 255, 0, 1),
          o = ot(n / 255, 0, 1),
          a = Math.max(r, i, o),
          s = a - Math.min(r, i, o)
        return [
          0 === s
            ? 0
            : a === r
            ? (((((i - o) / s) % 6) + 6) % 6) * 60
            : a === i
            ? 60 * ((o - r) / s + 2)
            : 60 * ((r - i) / s + 4),
          100 * (0 === a ? 0 : s / a),
          100 * a,
        ]
      }
      function Lr(t, e, n) {
        var r,
          i,
          o,
          a,
          s,
          l,
          p,
          u,
          d,
          c = at(t, 360),
          h = ot(e / 100, 0, 1),
          v = ot(n / 100, 0, 1),
          f = v * h,
          m = f * (1 - Math.abs(((c / 60) % 2) - 1)),
          b = v - f
        return (
          c >= 0 && c < 60
            ? ((p = (r = [f, m, 0])[0]), (u = r[1]), (d = r[2]))
            : c >= 60 && c < 120
            ? ((p = (i = [m, f, 0])[0]), (u = i[1]), (d = i[2]))
            : c >= 120 && c < 180
            ? ((p = (o = [0, f, m])[0]), (u = o[1]), (d = o[2]))
            : c >= 180 && c < 240
            ? ((p = (a = [0, m, f])[0]), (u = a[1]), (d = a[2]))
            : c >= 240 && c < 300
            ? ((p = (s = [m, 0, f])[0]), (u = s[1]), (d = s[2]))
            : ((p = (l = [f, 0, m])[0]), (u = l[1]), (d = l[2])),
          [255 * (p + b), 255 * (u + b), 255 * (d + b)]
        )
      }
      function Sr(t, e, n) {
        var r = n + (e * (100 - Math.abs(2 * n - 100))) / 200
        return [
          t,
          0 !== r ? (e * (100 - Math.abs(2 * n - 100))) / r : 0,
          n + (e * (100 - Math.abs(2 * n - 100))) / 200,
        ]
      }
      function Mr(t, e, n) {
        var r = 100 - Math.abs((n * (200 - e)) / 100 - 100)
        return [t, 0 !== r ? (e * n) / r : 0, (n * (200 - e)) / 200]
      }
      function jr(t) {
        return [t[0], t[1], t[2]]
      }
      function Ar(t, e) {
        return [t[0], t[1], t[2], e]
      }
      var Dr = {
        hsl: {
          hsl: function (t, e, n) {
            return [t, e, n]
          },
          hsv: Sr,
          rgb: Er,
        },
        hsv: {
          hsl: Mr,
          hsv: function (t, e, n) {
            return [t, e, n]
          },
          rgb: Lr,
        },
        rgb: {
          hsl: kr,
          hsv: Vr,
          rgb: function (t, e, n) {
            return [t, e, n]
          },
        },
      }
      function Or(t, e, n) {
        var r
        return (r = Dr[e])[n].apply(r, t)
      }
      var Nr = {
        hsl: function (t) {
          var e
          return [
            at(t[0], 360),
            ot(t[1], 0, 100),
            ot(t[2], 0, 100),
            ot(null !== (e = t[3]) && void 0 !== e ? e : 1, 0, 1),
          ]
        },
        hsv: function (t) {
          var e
          return [
            at(t[0], 360),
            ot(t[1], 0, 100),
            ot(t[2], 0, 100),
            ot(null !== (e = t[3]) && void 0 !== e ? e : 1, 0, 1),
          ]
        },
        rgb: function (t) {
          var e
          return [
            ot(t[0], 0, 255),
            ot(t[1], 0, 255),
            ot(t[2], 0, 255),
            ot(null !== (e = t[3]) && void 0 !== e ? e : 1, 0, 1),
          ]
        },
      }
      function Ir(t, e) {
        return (
          "object" == typeof t && !o(t) && e in t && "number" == typeof t[e]
        )
      }
      var Br = (function () {
          function t(t, e) {
            ;(this.mode_ = e), (this.comps_ = Nr[e](t))
          }
          return (
            (t.black = function () {
              return new t([0, 0, 0], "rgb")
            }),
            (t.fromObject = function (e) {
              return new t(
                "a" in e ? [e.r, e.g, e.b, e.a] : [e.r, e.g, e.b],
                "rgb"
              )
            }),
            (t.toRgbaObject = function (t) {
              return t.toRgbaObject()
            }),
            (t.isRgbColorObject = function (t) {
              return Ir(t, "r") && Ir(t, "g") && Ir(t, "b")
            }),
            (t.isRgbaColorObject = function (t) {
              return this.isRgbColorObject(t) && Ir(t, "a")
            }),
            (t.isColorObject = function (t) {
              return this.isRgbColorObject(t)
            }),
            (t.equals = function (t, e) {
              if (t.mode_ !== e.mode_) return !1
              for (var n = t.comps_, r = e.comps_, i = 0; i < n.length; i++)
                if (n[i] !== r[i]) return !1
              return !0
            }),
            Object.defineProperty(t.prototype, "mode", {
              get: function () {
                return this.mode_
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.getComponents = function (t) {
              return Ar(
                Or(jr(this.comps_), this.mode_, t || this.mode_),
                this.comps_[3]
              )
            }),
            (t.prototype.toRgbaObject = function () {
              var t = this.getComponents("rgb")
              return { r: t[0], g: t[1], b: t[2], a: t[3] }
            }),
            t
          )
        })(),
        Kr = b("colp"),
        Rr = (function () {
          function t(t, e) {
            ;(this.alphaViews_ = null),
              (this.element = t.createElement("div")),
              this.element.classList.add(Kr())
            var n = t.createElement("div")
            n.classList.add(Kr("hsv"))
            var r = t.createElement("div")
            r.classList.add(Kr("sv")),
              (this.svPaletteView_ = e.svPaletteView),
              r.appendChild(this.svPaletteView_.element),
              n.appendChild(r)
            var i = t.createElement("div")
            i.classList.add(Kr("h")),
              (this.hPaletteView_ = e.hPaletteView),
              i.appendChild(this.hPaletteView_.element),
              n.appendChild(i),
              this.element.appendChild(n)
            var o = t.createElement("div")
            if (
              (o.classList.add(Kr("rgb")),
              (this.textView_ = e.textView),
              o.appendChild(this.textView_.element),
              this.element.appendChild(o),
              e.alphaViews)
            ) {
              this.alphaViews_ = {
                palette: e.alphaViews.palette,
                text: e.alphaViews.text,
              }
              var a = t.createElement("div")
              a.classList.add(Kr("a"))
              var s = t.createElement("div")
              s.classList.add(Kr("ap")),
                s.appendChild(this.alphaViews_.palette.element),
                a.appendChild(s)
              var l = t.createElement("div")
              l.classList.add(Kr("at")),
                l.appendChild(this.alphaViews_.text.element),
                a.appendChild(l),
                this.element.appendChild(a)
            }
          }
          return (
            Object.defineProperty(t.prototype, "allFocusableElements", {
              get: function () {
                var t = r(
                  [
                    this.svPaletteView_.element,
                    this.hPaletteView_.element,
                    this.textView_.modeSelectElement,
                  ],
                  this.textView_.textViews.map(function (t) {
                    return t.inputElement
                  })
                )
                return (
                  this.alphaViews_ &&
                    t.push(
                      this.alphaViews_.palette.element,
                      this.alphaViews_.text.inputElement
                    ),
                  t
                )
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          )
        })()
      function Ur(t) {
        return t ? 0.1 : 1
      }
      var Tr = Sn(0)
      function Fr(t) {
        return Tr(t) + "%"
      }
      function Hr(t, e) {
        var n = t.match(/^(.+)%$/)
        return n
          ? Math.min(0.01 * parseFloat(n[1]) * e, e)
          : Math.min(parseFloat(t), e)
      }
      var zr = {
        deg: function (t) {
          return t
        },
        grad: function (t) {
          return (360 * t) / 400
        },
        rad: function (t) {
          return (360 * t) / (2 * Math.PI)
        },
        turn: function (t) {
          return 360 * t
        },
      }
      function qr(t) {
        var e = t.match(/^([0-9.]+?)(deg|grad|rad|turn)$/)
        if (!e) return parseFloat(t)
        var n = parseFloat(e[1]),
          r = e[2]
        return zr[r](n)
      }
      var Gr = {
        "func.rgb": function (t) {
          var e = t.match(
            /^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/
          )
          if (!e) return null
          var n = [Hr(e[1], 255), Hr(e[2], 255), Hr(e[3], 255)]
          return isNaN(n[0]) || isNaN(n[1]) || isNaN(n[2])
            ? null
            : new Br(n, "rgb")
        },
        "func.rgba": function (t) {
          var e = t.match(
            /^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/
          )
          if (!e) return null
          var n = [Hr(e[1], 255), Hr(e[2], 255), Hr(e[3], 255), Hr(e[4], 1)]
          return isNaN(n[0]) || isNaN(n[1]) || isNaN(n[2]) || isNaN(n[3])
            ? null
            : new Br(n, "rgb")
        },
        "func.hsl": function (t) {
          var e = t.match(
            /^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/
          )
          if (!e) return null
          var n = [qr(e[1]), Hr(e[2], 100), Hr(e[3], 100)]
          return isNaN(n[0]) || isNaN(n[1]) || isNaN(n[2])
            ? null
            : new Br(n, "hsl")
        },
        "func.hsla": function (t) {
          var e = t.match(
            /^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/
          )
          if (!e) return null
          var n = [qr(e[1]), Hr(e[2], 100), Hr(e[3], 100), Hr(e[4], 1)]
          return isNaN(n[0]) || isNaN(n[1]) || isNaN(n[2]) || isNaN(n[3])
            ? null
            : new Br(n, "hsl")
        },
        "hex.rgb": function (t) {
          var e = t.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/)
          if (e)
            return new Br(
              [
                parseInt(e[1] + e[1], 16),
                parseInt(e[2] + e[2], 16),
                parseInt(e[3] + e[3], 16),
              ],
              "rgb"
            )
          var n = t.match(/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/)
          return n
            ? new Br(
                [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)],
                "rgb"
              )
            : null
        },
        "hex.rgba": function (t) {
          var e = t.match(
            /^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/
          )
          if (e)
            return new Br(
              [
                parseInt(e[1] + e[1], 16),
                parseInt(e[2] + e[2], 16),
                parseInt(e[3] + e[3], 16),
                rt(parseInt(e[4] + e[4], 16), 0, 255, 0, 1),
              ],
              "rgb"
            )
          var n = t.match(
            /^#?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/
          )
          return n
            ? new Br(
                [
                  parseInt(n[1], 16),
                  parseInt(n[2], 16),
                  parseInt(n[3], 16),
                  rt(parseInt(n[4], 16), 0, 255, 0, 1),
                ],
                "rgb"
              )
            : null
        },
      }
      function Yr(t) {
        return Object.keys(Gr).reduce(function (e, n) {
          return e || ((0, Gr[n])(t) ? n : null)
        }, null)
      }
      var $r = function (t) {
        var e = Yr(t)
        return e ? Gr[e](t) : null
      }
      function Xr(t) {
        return "func.hsla" === t || "func.rgba" === t || "hex.rgba" === t
      }
      function Qr(t) {
        if ("string" == typeof t) {
          var e = $r(t)
          if (e) return e
        }
        return Br.black()
      }
      function Jr(t) {
        var e = ot(Math.floor(t), 0, 255).toString(16)
        return 1 === e.length ? "0" + e : e
      }
      function Wr(t) {
        return "#" + jr(t.getComponents("rgb")).map(Jr).join("")
      }
      function Zr(t) {
        var e = t.getComponents("rgb")
        return "#" + [e[0], e[1], e[2], 255 * e[3]].map(Jr).join("")
      }
      function ti(t) {
        var e = Sn(0)
        return (
          "rgb(" +
          jr(t.getComponents("rgb"))
            .map(function (t) {
              return e(t)
            })
            .join(", ") +
          ")"
        )
      }
      function ei(t) {
        var e = Sn(2),
          n = Sn(0)
        return (
          "rgba(" +
          t
            .getComponents("rgb")
            .map(function (t, r) {
              return (3 === r ? e : n)(t)
            })
            .join(", ") +
          ")"
        )
      }
      function ni(t) {
        var e = [Sn(0), Fr, Fr]
        return (
          "hsl(" +
          jr(t.getComponents("hsl"))
            .map(function (t, n) {
              return e[n](t)
            })
            .join(", ") +
          ")"
        )
      }
      function ri(t) {
        var e = [Sn(0), Fr, Fr, Sn(2)]
        return (
          "hsla(" +
          t
            .getComponents("hsl")
            .map(function (t, n) {
              return e[n](t)
            })
            .join(", ") +
          ")"
        )
      }
      var ii = {
        "func.hsl": ni,
        "func.hsla": ri,
        "func.rgb": ti,
        "func.rgba": ei,
        "hex.rgb": Wr,
        "hex.rgba": Zr,
      }
      function oi(t) {
        return ii[t]
      }
      var ai = b("apl"),
        si = (function () {
          function t(t, e) {
            ;(this.onValueChange_ = this.onValueChange_.bind(this)),
              (this.value = e.value),
              this.value.emitter.on("change", this.onValueChange_),
              (this.element = t.createElement("div")),
              this.element.classList.add(ai()),
              e.viewProps.bindTabIndex(this.element)
            var n = t.createElement("div")
            n.classList.add(ai("b")), this.element.appendChild(n)
            var r = t.createElement("div")
            r.classList.add(ai("c")), n.appendChild(r), (this.colorElem_ = r)
            var i = t.createElement("div")
            i.classList.add(ai("m")),
              this.element.appendChild(i),
              (this.markerElem_ = i)
            var o = t.createElement("div")
            o.classList.add(ai("p")),
              this.markerElem_.appendChild(o),
              (this.previewElem_ = o),
              this.update_()
          }
          return (
            (t.prototype.update_ = function () {
              var t = this.value.rawValue,
                e = t.getComponents("rgb"),
                n = new Br([e[0], e[1], e[2], 0], "rgb"),
                r = new Br([e[0], e[1], e[2], 255], "rgb"),
                i = ["to right", ei(n), ei(r)]
              ;(this.colorElem_.style.background =
                "linear-gradient(" + i.join(",") + ")"),
                (this.previewElem_.style.backgroundColor = ei(t))
              var o = rt(e[3], 0, 1, 0, 100)
              this.markerElem_.style.left = o + "%"
            }),
            (t.prototype.onValueChange_ = function () {
              this.update_()
            }),
            t
          )
        })(),
        li = (function () {
          function t(t, e) {
            ;(this.onKeyDown_ = this.onKeyDown_.bind(this)),
              (this.onPointerDown_ = this.onPointerDown_.bind(this)),
              (this.onPointerMove_ = this.onPointerMove_.bind(this)),
              (this.onPointerUp_ = this.onPointerUp_.bind(this)),
              (this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.view = new si(t, {
                value: this.value,
                viewProps: this.viewProps,
              })),
              (this.ptHandler_ = new Kn(this.view.element)),
              this.ptHandler_.emitter.on("down", this.onPointerDown_),
              this.ptHandler_.emitter.on("move", this.onPointerMove_),
              this.ptHandler_.emitter.on("up", this.onPointerUp_),
              this.view.element.addEventListener("keydown", this.onKeyDown_)
          }
          return (
            (t.prototype.handlePointerEvent_ = function (t) {
              if (t.point) {
                var e = t.point.x / t.bounds.width,
                  n = this.value.rawValue.getComponents("hsv"),
                  r = n[0],
                  i = n[1],
                  o = n[2]
                this.value.rawValue = new Br([r, i, o, e], "hsv")
              }
            }),
            (t.prototype.onPointerDown_ = function (t) {
              this.handlePointerEvent_(t.data)
            }),
            (t.prototype.onPointerMove_ = function (t) {
              this.handlePointerEvent_(t.data)
            }),
            (t.prototype.onPointerUp_ = function (t) {
              this.handlePointerEvent_(t.data)
            }),
            (t.prototype.onKeyDown_ = function (t) {
              var e = An(Ur(!0), On(t)),
                n = this.value.rawValue.getComponents("hsv"),
                r = n[0],
                i = n[1],
                o = n[2],
                a = n[3]
              this.value.rawValue = new Br([r, i, o, a + e], "hsv")
            }),
            t
          )
        })(),
        pi = b("coltxt")
      function ui(t) {
        var e = t.createElement("select"),
          n = [
            { text: "RGB", value: "rgb" },
            { text: "HSL", value: "hsl" },
            { text: "HSV", value: "hsv" },
          ]
        return (
          e.appendChild(
            n.reduce(function (e, n) {
              var r = t.createElement("option")
              return (
                (r.textContent = n.text),
                (r.value = n.value),
                e.appendChild(r),
                e
              )
            }, t.createDocumentFragment())
          ),
          e
        )
      }
      var di = (function () {
          function t(t, e) {
            var n = this
            ;(this.element = t.createElement("div")),
              this.element.classList.add(pi())
            var r = t.createElement("div")
            r.classList.add(pi("m")),
              (this.modeElem_ = ui(t)),
              this.modeElem_.classList.add(pi("ms")),
              r.appendChild(this.modeSelectElement)
            var i = t.createElement("div")
            i.classList.add(pi("mm")),
              i.appendChild(j(t, "dropdown")),
              r.appendChild(i),
              this.element.appendChild(r)
            var o = t.createElement("div")
            o.classList.add(pi("w")),
              this.element.appendChild(o),
              (this.textsElem_ = o),
              (this.textViews_ = e.textViews),
              this.applyTextViews_(),
              R(e.colorMode, function (t) {
                n.modeElem_.value = t
              })
          }
          return (
            Object.defineProperty(t.prototype, "modeSelectElement", {
              get: function () {
                return this.modeElem_
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "textViews", {
              get: function () {
                return this.textViews_
              },
              set: function (t) {
                ;(this.textViews_ = t), this.applyTextViews_()
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.applyTextViews_ = function () {
              var t = this
              O(this.textsElem_)
              var e = this.element.ownerDocument
              this.textViews_.forEach(function (n) {
                var r = e.createElement("div")
                r.classList.add(pi("c")),
                  r.appendChild(n.element),
                  t.textsElem_.appendChild(r)
              })
            }),
            t
          )
        })(),
        ci = Sn(0),
        hi = {
          rgb: function () {
            return new Pr({ min: 0, max: 255 })
          },
          hsl: function (t) {
            return new Pr(0 === t ? { min: 0, max: 360 } : { min: 0, max: 100 })
          },
          hsv: function (t) {
            return new Pr(0 === t ? { min: 0, max: 360 } : { min: 0, max: 100 })
          },
        }
      function vi(t, e, n) {
        return new Tn(t, {
          arrayPosition: 0 === n ? "fst" : 2 === n ? "lst" : "mid",
          baseStep: Ur(!1),
          parser: e.parser,
          props: h.fromObject({ draggingScale: 1, formatter: ci }),
          value: c(0, { constraint: hi[e.colorMode](n) }),
          viewProps: e.viewProps,
        })
      }
      var fi = (function () {
          function t(t, e) {
            ;(this.onModeSelectChange_ = this.onModeSelectChange_.bind(this)),
              (this.parser_ = e.parser),
              (this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.colorMode = c(this.value.rawValue.mode)),
              (this.ccs_ = this.createComponentControllers_(t)),
              (this.view = new di(t, {
                colorMode: this.colorMode,
                textViews: [
                  this.ccs_[0].view,
                  this.ccs_[1].view,
                  this.ccs_[2].view,
                ],
              })),
              this.view.modeSelectElement.addEventListener(
                "change",
                this.onModeSelectChange_
              )
          }
          return (
            (t.prototype.createComponentControllers_ = function (t) {
              var e = this,
                n = {
                  colorMode: this.colorMode.rawValue,
                  parser: this.parser_,
                  viewProps: this.viewProps,
                },
                r = [vi(t, n, 0), vi(t, n, 1), vi(t, n, 2)]
              return (
                r.forEach(function (t, n) {
                  yr({
                    primary: e.value,
                    secondary: t.value,
                    forward: function (t) {
                      return t.rawValue.getComponents(e.colorMode.rawValue)[n]
                    },
                    backward: function (t, r) {
                      var i = e.colorMode.rawValue,
                        o = t.rawValue.getComponents(i)
                      return (o[n] = r.rawValue), new Br(Ar(jr(o), o[3]), i)
                    },
                  })
                }),
                r
              )
            }),
            (t.prototype.onModeSelectChange_ = function (t) {
              var e = t.currentTarget
              ;(this.colorMode.rawValue = e.value),
                (this.ccs_ = this.createComponentControllers_(
                  this.view.element.ownerDocument
                )),
                (this.view.textViews = [
                  this.ccs_[0].view,
                  this.ccs_[1].view,
                  this.ccs_[2].view,
                ])
            }),
            t
          )
        })(),
        mi = b("hpl"),
        bi = (function () {
          function t(t, e) {
            ;(this.onValueChange_ = this.onValueChange_.bind(this)),
              (this.value = e.value),
              this.value.emitter.on("change", this.onValueChange_),
              (this.element = t.createElement("div")),
              this.element.classList.add(mi()),
              e.viewProps.bindTabIndex(this.element)
            var n = t.createElement("div")
            n.classList.add(mi("c")), this.element.appendChild(n)
            var r = t.createElement("div")
            r.classList.add(mi("m")),
              this.element.appendChild(r),
              (this.markerElem_ = r),
              this.update_()
          }
          return (
            (t.prototype.update_ = function () {
              var t = this.value.rawValue.getComponents("hsv")[0]
              this.markerElem_.style.backgroundColor = ti(
                new Br([t, 100, 100], "hsv")
              )
              var e = rt(t, 0, 360, 0, 100)
              this.markerElem_.style.left = e + "%"
            }),
            (t.prototype.onValueChange_ = function () {
              this.update_()
            }),
            t
          )
        })(),
        gi = (function () {
          function t(t, e) {
            ;(this.onKeyDown_ = this.onKeyDown_.bind(this)),
              (this.onPointerDown_ = this.onPointerDown_.bind(this)),
              (this.onPointerMove_ = this.onPointerMove_.bind(this)),
              (this.onPointerUp_ = this.onPointerUp_.bind(this)),
              (this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.view = new bi(t, {
                value: this.value,
                viewProps: this.viewProps,
              })),
              (this.ptHandler_ = new Kn(this.view.element)),
              this.ptHandler_.emitter.on("down", this.onPointerDown_),
              this.ptHandler_.emitter.on("move", this.onPointerMove_),
              this.ptHandler_.emitter.on("up", this.onPointerUp_),
              this.view.element.addEventListener("keydown", this.onKeyDown_)
          }
          return (
            (t.prototype.handlePointerEvent_ = function (t) {
              if (t.point) {
                var e = rt(t.point.x, 0, t.bounds.width, 0, 360),
                  n = this.value.rawValue.getComponents("hsv"),
                  r = n[1],
                  i = n[2],
                  o = n[3]
                this.value.rawValue = new Br([e, r, i, o], "hsv")
              }
            }),
            (t.prototype.onPointerDown_ = function (t) {
              this.handlePointerEvent_(t.data)
            }),
            (t.prototype.onPointerMove_ = function (t) {
              this.handlePointerEvent_(t.data)
            }),
            (t.prototype.onPointerUp_ = function (t) {
              this.handlePointerEvent_(t.data)
            }),
            (t.prototype.onKeyDown_ = function (t) {
              var e = An(Ur(!1), On(t)),
                n = this.value.rawValue.getComponents("hsv"),
                r = n[0],
                i = n[1],
                o = n[2],
                a = n[3]
              this.value.rawValue = new Br([r + e, i, o, a], "hsv")
            }),
            t
          )
        })(),
        _i = b("svp"),
        wi = 64,
        yi = (function () {
          function t(t, e) {
            ;(this.onValueChange_ = this.onValueChange_.bind(this)),
              (this.value = e.value),
              this.value.emitter.on("change", this.onValueChange_),
              (this.element = t.createElement("div")),
              this.element.classList.add(_i()),
              e.viewProps.bindTabIndex(this.element)
            var n = t.createElement("canvas")
            ;(n.height = wi),
              (n.width = wi),
              n.classList.add(_i("c")),
              this.element.appendChild(n),
              (this.canvasElement = n)
            var r = t.createElement("div")
            r.classList.add(_i("m")),
              this.element.appendChild(r),
              (this.markerElem_ = r),
              this.update_()
          }
          return (
            (t.prototype.update_ = function () {
              var t = S(this.canvasElement)
              if (t) {
                for (
                  var e = this.value.rawValue.getComponents("hsv"),
                    n = this.canvasElement.width,
                    r = this.canvasElement.height,
                    i = t.getImageData(0, 0, n, r),
                    o = i.data,
                    a = 0;
                  a < r;
                  a++
                )
                  for (var s = 0; s < n; s++) {
                    var l = rt(s, 0, n, 0, 100),
                      p = rt(a, 0, r, 100, 0),
                      u = Lr(e[0], l, p),
                      d = 4 * (a * n + s)
                    ;(o[d] = u[0]),
                      (o[d + 1] = u[1]),
                      (o[d + 2] = u[2]),
                      (o[d + 3] = 255)
                  }
                t.putImageData(i, 0, 0)
                var c = rt(e[1], 0, 100, 0, 100)
                this.markerElem_.style.left = c + "%"
                var h = rt(e[2], 0, 100, 100, 0)
                this.markerElem_.style.top = h + "%"
              }
            }),
            (t.prototype.onValueChange_ = function () {
              this.update_()
            }),
            t
          )
        })(),
        xi = (function () {
          function t(t, e) {
            ;(this.onKeyDown_ = this.onKeyDown_.bind(this)),
              (this.onPointerDown_ = this.onPointerDown_.bind(this)),
              (this.onPointerMove_ = this.onPointerMove_.bind(this)),
              (this.onPointerUp_ = this.onPointerUp_.bind(this)),
              (this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.view = new yi(t, {
                value: this.value,
                viewProps: this.viewProps,
              })),
              (this.ptHandler_ = new Kn(this.view.element)),
              this.ptHandler_.emitter.on("down", this.onPointerDown_),
              this.ptHandler_.emitter.on("move", this.onPointerMove_),
              this.ptHandler_.emitter.on("up", this.onPointerUp_),
              this.view.element.addEventListener("keydown", this.onKeyDown_)
          }
          return (
            (t.prototype.handlePointerEvent_ = function (t) {
              if (t.point) {
                var e = rt(t.point.x, 0, t.bounds.width, 0, 100),
                  n = rt(t.point.y, 0, t.bounds.height, 100, 0),
                  r = this.value.rawValue.getComponents("hsv"),
                  i = r[0],
                  o = r[3]
                this.value.rawValue = new Br([i, e, n, o], "hsv")
              }
            }),
            (t.prototype.onPointerDown_ = function (t) {
              this.handlePointerEvent_(t.data)
            }),
            (t.prototype.onPointerMove_ = function (t) {
              this.handlePointerEvent_(t.data)
            }),
            (t.prototype.onPointerUp_ = function (t) {
              this.handlePointerEvent_(t.data)
            }),
            (t.prototype.onKeyDown_ = function (t) {
              In(t.key) && t.preventDefault()
              var e = this.value.rawValue.getComponents("hsv"),
                n = e[0],
                r = e[1],
                i = e[2],
                o = e[3],
                a = Ur(!1)
              this.value.rawValue = new Br(
                [n, r + An(a, On(t)), i + An(a, Dn(t)), o],
                "hsv"
              )
            }),
            t
          )
        })(),
        Ci = (function () {
          function t(t, e) {
            ;(this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.hPaletteC_ = new gi(t, {
                value: this.value,
                viewProps: this.viewProps,
              })),
              (this.svPaletteC_ = new xi(t, {
                value: this.value,
                viewProps: this.viewProps,
              })),
              (this.alphaIcs_ = e.supportsAlpha
                ? {
                    palette: new li(t, {
                      value: this.value,
                      viewProps: this.viewProps,
                    }),
                    text: new Tn(t, {
                      parser: En,
                      baseStep: 0.1,
                      props: h.fromObject({
                        draggingScale: 0.01,
                        formatter: Sn(2),
                      }),
                      value: c(0, { constraint: new Pr({ min: 0, max: 1 }) }),
                      viewProps: this.viewProps,
                    }),
                  }
                : null),
              this.alphaIcs_ &&
                yr({
                  primary: this.value,
                  secondary: this.alphaIcs_.text.value,
                  forward: function (t) {
                    return t.rawValue.getComponents()[3]
                  },
                  backward: function (t, e) {
                    var n = t.rawValue.getComponents()
                    return (n[3] = e.rawValue), new Br(n, t.rawValue.mode)
                  },
                }),
              (this.textC_ = new fi(t, {
                parser: En,
                value: this.value,
                viewProps: this.viewProps,
              })),
              (this.view = new Rr(t, {
                alphaViews: this.alphaIcs_
                  ? {
                      palette: this.alphaIcs_.palette.view,
                      text: this.alphaIcs_.text.view,
                    }
                  : null,
                hPaletteView: this.hPaletteC_.view,
                supportsAlpha: e.supportsAlpha,
                svPaletteView: this.svPaletteC_.view,
                textView: this.textC_.view,
              }))
          }
          return (
            Object.defineProperty(t.prototype, "textController", {
              get: function () {
                return this.textC_
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          )
        })(),
        Pi = b("colsw"),
        ki = (function () {
          function t(t, e) {
            ;(this.onValueChange_ = this.onValueChange_.bind(this)),
              e.value.emitter.on("change", this.onValueChange_),
              (this.value = e.value),
              (this.element = t.createElement("div")),
              this.element.classList.add(Pi()),
              e.viewProps.bindClassModifiers(this.element)
            var n = t.createElement("div")
            n.classList.add(Pi("sw")),
              this.element.appendChild(n),
              (this.swatchElem_ = n)
            var r = t.createElement("button")
            r.classList.add(Pi("b")),
              e.viewProps.bindDisabled(r),
              this.element.appendChild(r),
              (this.buttonElement = r),
              this.update_()
          }
          return (
            (t.prototype.update_ = function () {
              var t = this.value.rawValue
              this.swatchElem_.style.backgroundColor = Zr(t)
            }),
            (t.prototype.onValueChange_ = function () {
              this.update_()
            }),
            t
          )
        })(),
        Ei = (function () {
          function t(t, e) {
            ;(this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.view = new ki(t, {
                value: this.value,
                viewProps: this.viewProps,
              }))
          }
          return t
        })(),
        Vi = (function () {
          function t(t, e) {
            var n = this
            ;(this.onButtonBlur_ = this.onButtonBlur_.bind(this)),
              (this.onButtonClick_ = this.onButtonClick_.bind(this)),
              (this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this)),
              (this.onPopupChildKeydown_ =
                this.onPopupChildKeydown_.bind(this)),
              (this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.foldable_ = Ee(e.expanded)),
              (this.swatchC_ = new Ei(t, {
                value: this.value,
                viewProps: this.viewProps,
              }))
            var r = this.swatchC_.view.buttonElement
            r.addEventListener("blur", this.onButtonBlur_),
              r.addEventListener("click", this.onButtonClick_),
              (this.textC_ = new ar(t, {
                parser: e.parser,
                props: h.fromObject({ formatter: e.formatter }),
                value: this.value,
                viewProps: this.viewProps,
              })),
              (this.view = new Cr(t, {
                expanded: this.foldable_.value("expanded"),
                pickerLayout: e.pickerLayout,
              })),
              this.view.swatchElement.appendChild(this.swatchC_.view.element),
              this.view.textElement.appendChild(this.textC_.view.element),
              (this.popC_ =
                "popup" === e.pickerLayout
                  ? new wr(t, { viewProps: this.viewProps })
                  : null)
            var i = new Ci(t, {
              supportsAlpha: e.supportsAlpha,
              value: this.value,
              viewProps: this.viewProps,
            })
            i.view.allFocusableElements.forEach(function (t) {
              t.addEventListener("blur", n.onPopupChildBlur_),
                t.addEventListener("keydown", n.onPopupChildKeydown_)
            }),
              (this.pickerC_ = i),
              this.popC_
                ? (this.view.element.appendChild(this.popC_.view.element),
                  this.popC_.view.element.appendChild(i.view.element),
                  yr({
                    primary: this.foldable_.value("expanded"),
                    secondary: this.popC_.shows,
                    forward: function (t) {
                      return t.rawValue
                    },
                    backward: function (t, e) {
                      return e.rawValue
                    },
                  }))
                : this.view.pickerElement &&
                  (this.view.pickerElement.appendChild(
                    this.pickerC_.view.element
                  ),
                  je(this.foldable_, this.view.pickerElement))
          }
          return (
            Object.defineProperty(t.prototype, "textController", {
              get: function () {
                return this.textC_
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.onButtonBlur_ = function (t) {
              if (this.popC_) {
                var e = this.view.element,
                  n = i(t.relatedTarget)
                ;(n && e.contains(n)) || (this.popC_.shows.rawValue = !1)
              }
            }),
            (t.prototype.onButtonClick_ = function () {
              this.foldable_.set("expanded", !this.foldable_.get("expanded")),
                this.foldable_.get("expanded") &&
                  this.pickerC_.view.allFocusableElements[0].focus()
            }),
            (t.prototype.onPopupChildBlur_ = function (t) {
              if (this.popC_) {
                var e = this.popC_.view.element,
                  n = I(t)
                ;(n && e.contains(n)) ||
                  (n &&
                    n === this.swatchC_.view.buttonElement &&
                    !k(e.ownerDocument)) ||
                  (this.popC_.shows.rawValue = !1)
              }
            }),
            (t.prototype.onPopupChildKeydown_ = function (t) {
              this.popC_
                ? "Escape" === t.key && (this.popC_.shows.rawValue = !1)
                : this.view.pickerElement &&
                  "Escape" === t.key &&
                  this.swatchC_.view.buttonElement.focus()
            }),
            t
          )
        })()
      function Li(t) {
        return Br.isColorObject(t) ? Br.fromObject(t) : Br.black()
      }
      function Si(t) {
        return jr(t.getComponents("rgb")).reduce(function (t, e) {
          return (t << 8) | (255 & Math.floor(e))
        }, 0)
      }
      function Mi(t) {
        return (
          t.getComponents("rgb").reduce(function (t, e, n) {
            return (t << 8) | (255 & Math.floor(3 === n ? 255 * e : e))
          }, 0) >>> 0
        )
      }
      function ji(t) {
        return new Br([(t >> 16) & 255, (t >> 8) & 255, 255 & t], "rgb")
      }
      function Ai(t) {
        return new Br(
          [
            (t >> 24) & 255,
            (t >> 16) & 255,
            (t >> 8) & 255,
            rt(255 & t, 0, 255, 0, 1),
          ],
          "rgb"
        )
      }
      function Di(t) {
        return "number" != typeof t ? Br.black() : ji(t)
      }
      function Oi(t) {
        return "number" != typeof t ? Br.black() : Ai(t)
      }
      function Ni(t) {
        var e = oi(t)
        return function (t, n) {
          cr(t, e(n))
        }
      }
      function Ii(t) {
        var e = t ? Mi : Si
        return function (t, n) {
          cr(t, e(n))
        }
      }
      function Bi(t, e) {
        var n = e.toRgbaObject()
        t.writeProperty("r", n.r),
          t.writeProperty("g", n.g),
          t.writeProperty("b", n.b),
          t.writeProperty("a", n.a)
      }
      function Ki(t, e) {
        var n = e.toRgbaObject()
        t.writeProperty("r", n.r),
          t.writeProperty("g", n.g),
          t.writeProperty("b", n.b)
      }
      function Ri(t) {
        return t ? Bi : Ki
      }
      function Ui(t) {
        return "input" in t && "color.rgba" === t.input
      }
      var Ti = {
        id: "input-color-number",
        accept: function (t, e) {
          return "number" != typeof t
            ? null
            : "input" in e
            ? "color" !== e.input &&
              "color.rgb" !== e.input &&
              "color.rgba" !== e.input
              ? null
              : t
            : null
        },
        binding: {
          reader: function (t) {
            return Ui(t.params) ? Oi : Di
          },
          equals: Br.equals,
          writer: function (t) {
            return Ii(Ui(t.params))
          },
        },
        controller: function (t) {
          var e = Ui(t.params),
            n = "expanded" in t.params ? t.params.expanded : void 0,
            r = "picker" in t.params ? t.params.picker : void 0,
            i = e ? Zr : Wr
          return new Vi(t.document, {
            expanded: null != n && n,
            formatter: i,
            parser: $r,
            pickerLayout: null != r ? r : "popup",
            supportsAlpha: e,
            value: t.value,
            viewProps: t.viewProps,
          })
        },
      }
      function Fi(t) {
        return Br.isRgbaColorObject(t)
      }
      var Hi = {
          id: "input-color-object",
          accept: function (t, e) {
            return Br.isColorObject(t) ? t : null
          },
          binding: {
            reader: function (t) {
              return Li
            },
            equals: Br.equals,
            writer: function (t) {
              return Ri(Fi(t.initialValue))
            },
          },
          controller: function (t) {
            var e = Br.isRgbaColorObject(t.initialValue),
              n = "expanded" in t.params ? t.params.expanded : void 0,
              r = "picker" in t.params ? t.params.picker : void 0,
              i = e ? Zr : Wr
            return new Vi(t.document, {
              expanded: null != n && n,
              formatter: i,
              parser: $r,
              pickerLayout: null != r ? r : "popup",
              supportsAlpha: e,
              value: t.value,
              viewProps: t.viewProps,
            })
          },
        },
        zi = {
          id: "input-color-string",
          accept: function (t, e) {
            return "string" != typeof t ||
              ("input" in e && "string" === e.input)
              ? null
              : Yr(t)
              ? t
              : null
          },
          binding: {
            reader: function (t) {
              return Qr
            },
            equals: Br.equals,
            writer: function (t) {
              var e = Yr(t.initialValue)
              if (!e) throw l.shouldNeverHappen()
              return Ni(e)
            },
          },
          controller: function (t) {
            var e = Yr(t.initialValue)
            if (!e) throw l.shouldNeverHappen()
            var n = oi(e),
              r = "expanded" in t.params ? t.params.expanded : void 0,
              i = "picker" in t.params ? t.params.picker : void 0
            return new Vi(t.document, {
              expanded: null != r && r,
              formatter: n,
              parser: $r,
              pickerLayout: null != i ? i : "popup",
              supportsAlpha: Xr(e),
              value: t.value,
              viewProps: t.viewProps,
            })
          },
        }
      function qi(t) {
        return "step" in t && !o(t.step) ? new nt(t.step) : null
      }
      function Gi(t) {
        return ("max" in t && !o(t.max)) || ("min" in t && !o(t.min))
          ? new Pr({ max: t.max, min: t.min })
          : null
      }
      function Yi(t) {
        var e = [],
          n = qi(t)
        n && e.push(n)
        var r = Gi(t)
        r && e.push(r)
        var i = lt(t)
        return i && e.push(i), new Z(e)
      }
      function $i(t) {
        var e = t ? tt(t, Pr) : null
        return e ? [e.minValue, e.maxValue] : [void 0, void 0]
      }
      function Xi(t) {
        var e = $i(t),
          n = e[0],
          r = e[1]
        return [null != n ? n : 0, null != r ? r : 100]
      }
      var Qi = {
          id: "input-number",
          accept: function (t) {
            return "number" == typeof t ? t : null
          },
          binding: {
            reader: function (t) {
              return Vn
            },
            constraint: function (t) {
              return Yi(t.params)
            },
            writer: function (t) {
              return cr
            },
          },
          controller: function (t) {
            var e,
              n,
              r = t.value,
              i = t.constraint
            if (i && tt(i, et))
              return new me(t.document, {
                props: h.fromObject({
                  options: null !== (e = pt(i)) && void 0 !== e ? e : [],
                }),
                value: r,
                viewProps: t.viewProps,
              })
            var o =
              null !== (n = "format" in t.params ? t.params.format : void 0) &&
              void 0 !== n
                ? n
                : Sn(dt(i, r.rawValue))
            if (i && tt(i, Pr)) {
              var a = Xi(i),
                s = a[0],
                l = a[1]
              return new qn(t.document, {
                baseStep: ct(i),
                parser: En,
                sliderProps: h.fromObject({ maxValue: l, minValue: s }),
                textProps: h.fromObject({
                  draggingScale: ht(i, r.rawValue),
                  formatter: o,
                }),
                value: r,
                viewProps: t.viewProps,
              })
            }
            return new Tn(t.document, {
              baseStep: ct(i),
              parser: En,
              props: h.fromObject({
                draggingScale: ht(i, r.rawValue),
                formatter: o,
              }),
              value: r,
              viewProps: t.viewProps,
            })
          },
        },
        Ji = (function () {
          function t(t) {
            ;(this.components = t.components), (this.asm_ = t.assembly)
          }
          return (
            (t.prototype.constrain = function (t) {
              var e = this,
                n = this.asm_.toComponents(t).map(function (t, n) {
                  var r, i
                  return null !==
                    (i =
                      null === (r = e.components[n]) || void 0 === r
                        ? void 0
                        : r.constrain(t)) && void 0 !== i
                    ? i
                    : t
                })
              return this.asm_.fromComponents(n)
            }),
            t
          )
        })(),
        Wi = b("pndtxt"),
        Zi = (function () {
          function t(t, e) {
            var n = this
            ;(this.textViews = e.textViews),
              (this.element = t.createElement("div")),
              this.element.classList.add(Wi()),
              this.textViews.forEach(function (e) {
                var r = t.createElement("div")
                r.classList.add(Wi("a")),
                  r.appendChild(e.element),
                  n.element.appendChild(r)
              })
          }
          return t
        })()
      function to(t, e, n) {
        return new Tn(t, {
          arrayPosition:
            0 === n ? "fst" : n === e.axes.length - 1 ? "lst" : "mid",
          baseStep: e.axes[n].baseStep,
          parser: e.parser,
          props: e.axes[n].textProps,
          value: c(0, { constraint: e.axes[n].constraint }),
          viewProps: e.viewProps,
        })
      }
      var eo = (function () {
          function t(t, e) {
            var n = this
            ;(this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.acs_ = e.axes.map(function (n, r) {
                return to(t, e, r)
              })),
              this.acs_.forEach(function (t, r) {
                yr({
                  primary: n.value,
                  secondary: t.value,
                  forward: function (t) {
                    return e.assembly.toComponents(t.rawValue)[r]
                  },
                  backward: function (t, n) {
                    var i = e.assembly.toComponents(t.rawValue)
                    return (i[r] = n.rawValue), e.assembly.fromComponents(i)
                  },
                })
              }),
              (this.view = new Zi(t, {
                textViews: this.acs_.map(function (t) {
                  return t.view
                }),
              }))
          }
          return t
        })(),
        no = (function () {
          function t(t, e) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              (this.x = t),
              (this.y = e)
          }
          return (
            (t.prototype.getComponents = function () {
              return [this.x, this.y]
            }),
            (t.isObject = function (t) {
              if (o(t)) return !1
              var e = t.x,
                n = t.y
              return "number" == typeof e && "number" == typeof n
            }),
            (t.equals = function (t, e) {
              return t.x === e.x && t.y === e.y
            }),
            (t.prototype.toObject = function () {
              return { x: this.x, y: this.y }
            }),
            t
          )
        })(),
        ro = {
          toComponents: function (t) {
            return t.getComponents()
          },
          fromComponents: function (t) {
            return new (no.bind.apply(no, r([void 0], t)))()
          },
        },
        io = b("p2d"),
        oo = (function () {
          function t(t, e) {
            ;(this.element = t.createElement("div")),
              this.element.classList.add(io()),
              e.viewProps.bindClassModifiers(this.element),
              R(e.expanded, $(this.element, io(void 0, "expanded")))
            var n = t.createElement("div")
            n.classList.add(io("h")), this.element.appendChild(n)
            var r = t.createElement("button")
            r.classList.add(io("b")),
              r.appendChild(j(t, "p2dpad")),
              e.viewProps.bindDisabled(r),
              n.appendChild(r),
              (this.buttonElement = r)
            var i = t.createElement("div")
            if (
              (i.classList.add(io("t")),
              n.appendChild(i),
              (this.textElement = i),
              "inline" === e.pickerLayout)
            ) {
              var o = t.createElement("div")
              o.classList.add(io("p")),
                this.element.appendChild(o),
                (this.pickerElement = o)
            } else this.pickerElement = null
          }
          return t
        })(),
        ao = b("p2dp"),
        so = (function () {
          function t(t, e) {
            ;(this.onFoldableChange_ = this.onFoldableChange_.bind(this)),
              (this.onValueChange_ = this.onValueChange_.bind(this)),
              (this.invertsY_ = e.invertsY),
              (this.maxValue_ = e.maxValue),
              (this.element = t.createElement("div")),
              this.element.classList.add(ao()),
              "popup" === e.layout &&
                this.element.classList.add(ao(void 0, "p"))
            var n = t.createElement("div")
            n.classList.add(ao("p")),
              e.viewProps.bindTabIndex(n),
              this.element.appendChild(n),
              (this.padElement = n)
            var r = t.createElementNS(x, "svg")
            r.classList.add(ao("g")),
              this.padElement.appendChild(r),
              (this.svgElem_ = r)
            var i = t.createElementNS(x, "line")
            i.classList.add(ao("ax")),
              i.setAttributeNS(null, "x1", "0"),
              i.setAttributeNS(null, "y1", "50%"),
              i.setAttributeNS(null, "x2", "100%"),
              i.setAttributeNS(null, "y2", "50%"),
              this.svgElem_.appendChild(i)
            var o = t.createElementNS(x, "line")
            o.classList.add(ao("ax")),
              o.setAttributeNS(null, "x1", "50%"),
              o.setAttributeNS(null, "y1", "0"),
              o.setAttributeNS(null, "x2", "50%"),
              o.setAttributeNS(null, "y2", "100%"),
              this.svgElem_.appendChild(o)
            var a = t.createElementNS(x, "line")
            a.classList.add(ao("l")),
              a.setAttributeNS(null, "x1", "50%"),
              a.setAttributeNS(null, "y1", "50%"),
              this.svgElem_.appendChild(a),
              (this.lineElem_ = a)
            var s = t.createElement("div")
            s.classList.add(ao("m")),
              this.padElement.appendChild(s),
              (this.markerElem_ = s),
              e.value.emitter.on("change", this.onValueChange_),
              (this.value = e.value),
              this.update_()
          }
          return (
            Object.defineProperty(t.prototype, "allFocusableElements", {
              get: function () {
                return [this.padElement]
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.update_ = function () {
              var t = this.value.rawValue.getComponents(),
                e = t[0],
                n = t[1],
                r = this.maxValue_,
                i = rt(e, -r, +r, 0, 100),
                o = rt(n, -r, +r, 0, 100),
                a = this.invertsY_ ? 100 - o : o
              this.lineElem_.setAttributeNS(null, "x2", i + "%"),
                this.lineElem_.setAttributeNS(null, "y2", a + "%"),
                (this.markerElem_.style.left = i + "%"),
                (this.markerElem_.style.top = a + "%")
            }),
            (t.prototype.onValueChange_ = function () {
              this.update_()
            }),
            (t.prototype.onFoldableChange_ = function () {
              this.update_()
            }),
            t
          )
        })(),
        lo = (function () {
          function t(t, e) {
            ;(this.onPadKeyDown_ = this.onPadKeyDown_.bind(this)),
              (this.onPointerDown_ = this.onPointerDown_.bind(this)),
              (this.onPointerMove_ = this.onPointerMove_.bind(this)),
              (this.onPointerUp_ = this.onPointerUp_.bind(this)),
              (this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.baseSteps_ = e.baseSteps),
              (this.maxValue_ = e.maxValue),
              (this.invertsY_ = e.invertsY),
              (this.view = new so(t, {
                invertsY: this.invertsY_,
                layout: e.layout,
                maxValue: this.maxValue_,
                value: this.value,
                viewProps: this.viewProps,
              })),
              (this.ptHandler_ = new Kn(this.view.padElement)),
              this.ptHandler_.emitter.on("down", this.onPointerDown_),
              this.ptHandler_.emitter.on("move", this.onPointerMove_),
              this.ptHandler_.emitter.on("up", this.onPointerUp_),
              this.view.padElement.addEventListener(
                "keydown",
                this.onPadKeyDown_
              )
          }
          return (
            (t.prototype.handlePointerEvent_ = function (t) {
              if (t.point) {
                var e = this.maxValue_,
                  n = rt(t.point.x, 0, t.bounds.width, -e, +e),
                  r = rt(
                    this.invertsY_ ? t.bounds.height - t.point.y : t.point.y,
                    0,
                    t.bounds.height,
                    -e,
                    +e
                  )
                this.value.rawValue = new no(n, r)
              }
            }),
            (t.prototype.onPointerDown_ = function (t) {
              this.handlePointerEvent_(t.data)
            }),
            (t.prototype.onPointerMove_ = function (t) {
              this.handlePointerEvent_(t.data)
            }),
            (t.prototype.onPointerUp_ = function (t) {
              this.handlePointerEvent_(t.data)
            }),
            (t.prototype.onPadKeyDown_ = function (t) {
              In(t.key) && t.preventDefault(),
                (this.value.rawValue = new no(
                  this.value.rawValue.x + An(this.baseSteps_[0], On(t)),
                  this.value.rawValue.y +
                    An(this.baseSteps_[1], Dn(t)) * (this.invertsY_ ? 1 : -1)
                ))
            }),
            t
          )
        })(),
        po = (function () {
          function t(t, e) {
            var n,
              r,
              i = this
            ;(this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this)),
              (this.onPopupChildKeydown_ =
                this.onPopupChildKeydown_.bind(this)),
              (this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this)),
              (this.onPadButtonClick_ = this.onPadButtonClick_.bind(this)),
              (this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.foldable_ = Ee(e.expanded)),
              (this.popC_ =
                "popup" === e.pickerLayout
                  ? new wr(t, { viewProps: this.viewProps })
                  : null)
            var o = new lo(t, {
              baseSteps: [e.axes[0].baseStep, e.axes[1].baseStep],
              invertsY: e.invertsY,
              layout: e.pickerLayout,
              maxValue: e.maxValue,
              value: this.value,
              viewProps: this.viewProps,
            })
            o.view.allFocusableElements.forEach(function (t) {
              t.addEventListener("blur", i.onPopupChildBlur_),
                t.addEventListener("keydown", i.onPopupChildKeydown_)
            }),
              (this.pickerC_ = o),
              (this.textC_ = new eo(t, {
                assembly: ro,
                axes: e.axes,
                parser: e.parser,
                value: this.value,
                viewProps: this.viewProps,
              })),
              (this.view = new oo(t, {
                expanded: this.foldable_.value("expanded"),
                pickerLayout: e.pickerLayout,
                viewProps: this.viewProps,
              })),
              this.view.textElement.appendChild(this.textC_.view.element),
              null === (n = this.view.buttonElement) ||
                void 0 === n ||
                n.addEventListener("blur", this.onPadButtonBlur_),
              null === (r = this.view.buttonElement) ||
                void 0 === r ||
                r.addEventListener("click", this.onPadButtonClick_),
              this.popC_
                ? (this.view.element.appendChild(this.popC_.view.element),
                  this.popC_.view.element.appendChild(
                    this.pickerC_.view.element
                  ),
                  yr({
                    primary: this.foldable_.value("expanded"),
                    secondary: this.popC_.shows,
                    forward: function (t) {
                      return t.rawValue
                    },
                    backward: function (t, e) {
                      return e.rawValue
                    },
                  }))
                : this.view.pickerElement &&
                  (this.view.pickerElement.appendChild(
                    this.pickerC_.view.element
                  ),
                  je(this.foldable_, this.view.pickerElement))
          }
          return (
            (t.prototype.onPadButtonBlur_ = function (t) {
              if (this.popC_) {
                var e = this.view.element,
                  n = i(t.relatedTarget)
                ;(n && e.contains(n)) || (this.popC_.shows.rawValue = !1)
              }
            }),
            (t.prototype.onPadButtonClick_ = function () {
              this.foldable_.set("expanded", !this.foldable_.get("expanded")),
                this.foldable_.get("expanded") &&
                  this.pickerC_.view.allFocusableElements[0].focus()
            }),
            (t.prototype.onPopupChildBlur_ = function (t) {
              if (this.popC_) {
                var e = this.popC_.view.element,
                  n = I(t)
                ;(n && e.contains(n)) ||
                  (n && n === this.view.buttonElement && !k(e.ownerDocument)) ||
                  (this.popC_.shows.rawValue = !1)
              }
            }),
            (t.prototype.onPopupChildKeydown_ = function (t) {
              this.popC_
                ? "Escape" === t.key && (this.popC_.shows.rawValue = !1)
                : this.view.pickerElement &&
                  "Escape" === t.key &&
                  this.view.buttonElement.focus()
            }),
            t
          )
        })()
      function uo(t) {
        return no.isObject(t) ? new no(t.x, t.y) : new no()
      }
      function co(t, e) {
        t.writeProperty("x", e.x), t.writeProperty("y", e.y)
      }
      function ho(t) {
        if (t) {
          var e = []
          return (
            o(t.step) || e.push(new nt(t.step)),
            (o(t.max) && o(t.min)) ||
              e.push(new Pr({ max: t.max, min: t.min })),
            new Z(e)
          )
        }
      }
      function vo(t) {
        return new Ji({
          assembly: ro,
          components: [
            ho("x" in t ? t.x : void 0),
            ho("y" in t ? t.y : void 0),
          ],
        })
      }
      function fo(t, e) {
        var n = t && tt(t, Pr)
        if (n)
          return Math.max(Math.abs(n.minValue || 0), Math.abs(n.maxValue || 0))
        var r = ct(t)
        return Math.max(10 * Math.abs(r), 10 * Math.abs(e))
      }
      function mo(t, e) {
        var n = e instanceof Ji ? e.components[0] : void 0,
          r = e instanceof Ji ? e.components[1] : void 0,
          i = fo(n, t.x),
          o = fo(r, t.y)
        return Math.max(i, o)
      }
      function bo(t, e) {
        return {
          baseStep: ct(e),
          constraint: e,
          textProps: h.fromObject({
            draggingScale: ht(e, t),
            formatter: Sn(dt(e, t)),
          }),
        }
      }
      function go(t) {
        if (!("y" in t)) return !1
        var e = t.y
        return !!e && "inverted" in e && !!e.inverted
      }
      var _o = {
          id: "input-point2d",
          accept: function (t, e) {
            return no.isObject(t) ? t : null
          },
          binding: {
            reader: function (t) {
              return uo
            },
            constraint: function (t) {
              return vo(t.params)
            },
            equals: no.equals,
            writer: function (t) {
              return co
            },
          },
          controller: function (t) {
            var e = t.document,
              n = t.value,
              r = t.constraint
            if (!(r instanceof Ji)) throw l.shouldNeverHappen()
            var i = "expanded" in t.params ? t.params.expanded : void 0,
              o = "picker" in t.params ? t.params.picker : void 0
            return new po(e, {
              axes: [
                bo(n.rawValue.x, r.components[0]),
                bo(n.rawValue.y, r.components[1]),
              ],
              expanded: null != i && i,
              invertsY: go(t.params),
              maxValue: mo(n.rawValue, r),
              parser: En,
              pickerLayout: null != o ? o : "popup",
              value: n,
              viewProps: t.viewProps,
            })
          },
        },
        wo = (function () {
          function t(t, e, n) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === n && (n = 0),
              (this.x = t),
              (this.y = e),
              (this.z = n)
          }
          return (
            (t.prototype.getComponents = function () {
              return [this.x, this.y, this.z]
            }),
            (t.isObject = function (t) {
              if (o(t)) return !1
              var e = t.x,
                n = t.y,
                r = t.z
              return (
                "number" == typeof e &&
                "number" == typeof n &&
                "number" == typeof r
              )
            }),
            (t.equals = function (t, e) {
              return t.x === e.x && t.y === e.y && t.z === e.z
            }),
            (t.prototype.toObject = function () {
              return { x: this.x, y: this.y, z: this.z }
            }),
            t
          )
        })(),
        yo = {
          toComponents: function (t) {
            return t.getComponents()
          },
          fromComponents: function (t) {
            return new (wo.bind.apply(wo, r([void 0], t)))()
          },
        }
      function xo(t) {
        return wo.isObject(t) ? new wo(t.x, t.y, t.z) : new wo()
      }
      function Co(t, e) {
        t.writeProperty("x", e.x),
          t.writeProperty("y", e.y),
          t.writeProperty("z", e.z)
      }
      function Po(t) {
        if (t) {
          var e = []
          return (
            o(t.step) || e.push(new nt(t.step)),
            (o(t.max) && o(t.min)) ||
              e.push(new Pr({ max: t.max, min: t.min })),
            new Z(e)
          )
        }
      }
      function ko(t) {
        return new Ji({
          assembly: yo,
          components: [
            Po("x" in t ? t.x : void 0),
            Po("y" in t ? t.y : void 0),
            Po("z" in t ? t.z : void 0),
          ],
        })
      }
      function Eo(t, e) {
        return {
          baseStep: ct(e),
          constraint: e,
          textProps: h.fromObject({
            draggingScale: ht(e, t),
            formatter: Sn(dt(e, t)),
          }),
        }
      }
      var Vo = {
          id: "input-point3d",
          accept: function (t, e) {
            return wo.isObject(t) ? t : null
          },
          binding: {
            reader: function (t) {
              return xo
            },
            constraint: function (t) {
              return ko(t.params)
            },
            equals: wo.equals,
            writer: function (t) {
              return Co
            },
          },
          controller: function (t) {
            var e = t.value,
              n = t.constraint
            if (!(n instanceof Ji)) throw l.shouldNeverHappen()
            return new eo(t.document, {
              assembly: yo,
              axes: [
                Eo(e.rawValue.x, n.components[0]),
                Eo(e.rawValue.y, n.components[1]),
                Eo(e.rawValue.z, n.components[2]),
              ],
              parser: En,
              value: e,
              viewProps: t.viewProps,
            })
          },
        },
        Lo = (function () {
          function t(t, e, n, r) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === n && (n = 0),
              void 0 === r && (r = 0),
              (this.x = t),
              (this.y = e),
              (this.z = n),
              (this.w = r)
          }
          return (
            (t.prototype.getComponents = function () {
              return [this.x, this.y, this.z, this.w]
            }),
            (t.isObject = function (t) {
              if (o(t)) return !1
              var e = t.x,
                n = t.y,
                r = t.z,
                i = t.w
              return (
                "number" == typeof e &&
                "number" == typeof n &&
                "number" == typeof r &&
                "number" == typeof i
              )
            }),
            (t.equals = function (t, e) {
              return t.x === e.x && t.y === e.y && t.z === e.z && t.w === e.w
            }),
            (t.prototype.toObject = function () {
              return { x: this.x, y: this.y, z: this.z, w: this.w }
            }),
            t
          )
        })(),
        So = {
          toComponents: function (t) {
            return t.getComponents()
          },
          fromComponents: function (t) {
            return new (Lo.bind.apply(Lo, r([void 0], t)))()
          },
        }
      function Mo(t) {
        return Lo.isObject(t) ? new Lo(t.x, t.y, t.z, t.w) : new Lo()
      }
      function jo(t, e) {
        t.writeProperty("x", e.x),
          t.writeProperty("y", e.y),
          t.writeProperty("z", e.z),
          t.writeProperty("w", e.w)
      }
      function Ao(t) {
        if (t) {
          var e = []
          return (
            o(t.step) || e.push(new nt(t.step)),
            (o(t.max) && o(t.min)) ||
              e.push(new Pr({ max: t.max, min: t.min })),
            new Z(e)
          )
        }
      }
      function Do(t) {
        return new Ji({
          assembly: So,
          components: [
            Ao("x" in t ? t.x : void 0),
            Ao("y" in t ? t.y : void 0),
            Ao("z" in t ? t.z : void 0),
            Ao("w" in t ? t.w : void 0),
          ],
        })
      }
      function Oo(t, e) {
        return {
          baseStep: ct(e),
          constraint: e,
          textProps: h.fromObject({
            draggingScale: ht(e, t),
            formatter: Sn(dt(e, t)),
          }),
        }
      }
      var No = {
        id: "input-point4d",
        accept: function (t, e) {
          return Lo.isObject(t) ? t : null
        },
        binding: {
          reader: function (t) {
            return Mo
          },
          constraint: function (t) {
            return Do(t.params)
          },
          equals: Lo.equals,
          writer: function (t) {
            return jo
          },
        },
        controller: function (t) {
          var e = t.value,
            n = t.constraint
          if (!(n instanceof Ji)) throw l.shouldNeverHappen()
          return new eo(t.document, {
            assembly: So,
            axes: e.rawValue.getComponents().map(function (t, e) {
              return Oo(t, n.components[e])
            }),
            parser: En,
            value: e,
            viewProps: t.viewProps,
          })
        },
      }
      function Io(t) {
        return String(t)
      }
      function Bo(t) {
        return t
      }
      function Ko(t) {
        var e = [],
          n = lt(t)
        return n && e.push(n), new Z(e)
      }
      var Ro = {
          id: "input-string",
          accept: function (t, e) {
            return "string" == typeof t ? t : null
          },
          binding: {
            reader: function (t) {
              return Io
            },
            constraint: function (t) {
              return Ko(t.params)
            },
            writer: function (t) {
              return cr
            },
          },
          controller: function (t) {
            var e,
              n = t.document,
              r = t.value,
              i = t.constraint
            return i && tt(i, et)
              ? new me(n, {
                  props: h.fromObject({
                    options: null !== (e = pt(i)) && void 0 !== e ? e : [],
                  }),
                  value: r,
                  viewProps: t.viewProps,
                })
              : new ar(n, {
                  parser: function (t) {
                    return t
                  },
                  props: h.fromObject({ formatter: Bo }),
                  value: r,
                  viewProps: t.viewProps,
                })
          },
        },
        Uo = (function () {
          function t(t) {
            var e = t.split("-"),
              n = e[0],
              r = e[1],
              i = n.split(".")
            ;(this.major = parseInt(i[0], 10)),
              (this.minor = parseInt(i[1], 10)),
              (this.patch = parseInt(i[2], 10)),
              (this.prerelease = null != r ? r : null)
          }
          return (
            (t.prototype.toString = function () {
              var t = [this.major, this.minor, this.patch].join(".")
              return null !== this.prerelease
                ? [t, this.prerelease].join("-")
                : t
            }),
            t
          )
        })(),
        To = b("mll"),
        Fo = (function () {
          function t(t, e) {
            ;(this.onValueUpdate_ = this.onValueUpdate_.bind(this)),
              (this.formatter_ = e.formatter),
              (this.element = t.createElement("div")),
              this.element.classList.add(To()),
              e.viewProps.bindClassModifiers(this.element)
            var n = t.createElement("textarea")
            n.classList.add(To("i")),
              (n.style.height = "calc(var(--bld-h) * " + e.lineCount + ")"),
              (n.readOnly = !0),
              e.viewProps.bindDisabled(n),
              this.element.appendChild(n),
              (this.textareaElem_ = n),
              e.value.emitter.on("change", this.onValueUpdate_),
              (this.value = e.value),
              this.update_()
          }
          return (
            (t.prototype.update_ = function () {
              var t = this,
                e = this.textareaElem_,
                n = e.scrollTop === e.scrollHeight - e.clientHeight,
                r = []
              this.value.rawValue.forEach(function (e) {
                void 0 !== e && r.push(t.formatter_(e))
              }),
                (e.textContent = r.join("\n")),
                n && (e.scrollTop = e.scrollHeight)
            }),
            (t.prototype.onValueUpdate_ = function () {
              this.update_()
            }),
            t
          )
        })(),
        Ho = (function () {
          function t(t, e) {
            ;(this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.view = new Fo(t, {
                formatter: e.formatter,
                lineCount: e.lineCount,
                value: this.value,
                viewProps: this.viewProps,
              }))
          }
          return t
        })(),
        zo = b("sgl"),
        qo = (function () {
          function t(t, e) {
            ;(this.onValueUpdate_ = this.onValueUpdate_.bind(this)),
              (this.formatter_ = e.formatter),
              (this.element = t.createElement("div")),
              this.element.classList.add(zo()),
              e.viewProps.bindClassModifiers(this.element)
            var n = t.createElement("input")
            n.classList.add(zo("i")),
              (n.readOnly = !0),
              (n.type = "text"),
              e.viewProps.bindDisabled(n),
              this.element.appendChild(n),
              (this.inputElem_ = n),
              e.value.emitter.on("change", this.onValueUpdate_),
              (this.value = e.value),
              this.update_()
          }
          return (
            (t.prototype.update_ = function () {
              var t = this.value.rawValue,
                e = t[t.length - 1]
              this.inputElem_.value = void 0 !== e ? this.formatter_(e) : ""
            }),
            (t.prototype.onValueUpdate_ = function () {
              this.update_()
            }),
            t
          )
        })(),
        Go = (function () {
          function t(t, e) {
            ;(this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.view = new qo(t, {
                formatter: e.formatter,
                value: this.value,
                viewProps: this.viewProps,
              }))
          }
          return t
        })(),
        Yo = {
          id: "monitor-bool",
          accept: function (t, e) {
            return "boolean" == typeof t ? t : null
          },
          binding: {
            reader: function (t) {
              return ur
            },
          },
          controller: function (t) {
            var e
            return 1 === t.value.rawValue.length
              ? new Go(t.document, {
                  formatter: dr,
                  value: t.value,
                  viewProps: t.viewProps,
                })
              : new Ho(t.document, {
                  formatter: dr,
                  lineCount:
                    null !== (e = t.params.lineCount) && void 0 !== e
                      ? e
                      : Pt.monitor.defaultLineCount,
                  value: t.value,
                  viewProps: t.viewProps,
                })
          },
        },
        $o = (function () {
          function t() {
            ;(this.emitter = new p()), (this.index_ = -1)
          }
          return (
            Object.defineProperty(t.prototype, "index", {
              get: function () {
                return this.index_
              },
              set: function (t) {
                this.index_ !== t &&
                  ((this.index_ = t),
                  this.emitter.emit("change", { index: t, sender: this }))
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          )
        })(),
        Xo = b("grl"),
        Qo = (function () {
          function t(t, e) {
            ;(this.onCursorChange_ = this.onCursorChange_.bind(this)),
              (this.onValueUpdate_ = this.onValueUpdate_.bind(this)),
              (this.element = t.createElement("div")),
              this.element.classList.add(Xo()),
              e.viewProps.bindClassModifiers(this.element),
              (this.formatter_ = e.formatter),
              (this.minValue_ = e.minValue),
              (this.maxValue_ = e.maxValue),
              (this.cursor_ = e.cursor),
              this.cursor_.emitter.on("change", this.onCursorChange_)
            var n = t.createElementNS(x, "svg")
            n.classList.add(Xo("g")),
              (n.style.height = "calc(var(--bld-h) * " + e.lineCount + ")"),
              this.element.appendChild(n),
              (this.svgElem_ = n)
            var r = t.createElementNS(x, "polyline")
            this.svgElem_.appendChild(r), (this.lineElem_ = r)
            var i = t.createElement("div")
            i.classList.add(Xo("t"), b("tt")()),
              this.element.appendChild(i),
              (this.tooltipElem_ = i),
              e.value.emitter.on("change", this.onValueUpdate_),
              (this.value = e.value),
              this.update_()
          }
          return (
            Object.defineProperty(t.prototype, "graphElement", {
              get: function () {
                return this.svgElem_
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.update_ = function () {
              var t = this.svgElem_.getBoundingClientRect(),
                e = this.value.rawValue.length - 1,
                n = this.minValue_,
                r = this.maxValue_,
                i = []
              this.value.rawValue.forEach(function (o, a) {
                if (void 0 !== o) {
                  var s = rt(a, 0, e, 0, t.width),
                    l = rt(o, n, r, t.height, 0)
                  i.push([s, l].join(","))
                }
              }),
                this.lineElem_.setAttributeNS(null, "points", i.join(" "))
              var o = this.tooltipElem_,
                a = this.value.rawValue[this.cursor_.index]
              if (void 0 !== a) {
                var s = rt(this.cursor_.index, 0, e, 0, t.width),
                  l = rt(a, n, r, t.height, 0)
                ;(o.style.left = s + "px"),
                  (o.style.top = l + "px"),
                  (o.textContent = "" + this.formatter_(a)),
                  o.classList.contains(Xo("t", "a")) ||
                    (o.classList.add(Xo("t", "a"), Xo("t", "in")),
                    C(o),
                    o.classList.remove(Xo("t", "in")))
              } else o.classList.remove(Xo("t", "a"))
            }),
            (t.prototype.onValueUpdate_ = function () {
              this.update_()
            }),
            (t.prototype.onCursorChange_ = function () {
              this.update_()
            }),
            t
          )
        })(),
        Jo = (function () {
          function t(t, e) {
            if (
              ((this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this)),
              (this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this)),
              (this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this)),
              (this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this)),
              (this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this)),
              (this.value = e.value),
              (this.viewProps = e.viewProps),
              (this.cursor_ = new $o()),
              (this.view = new Qo(t, {
                cursor: this.cursor_,
                formatter: e.formatter,
                lineCount: e.lineCount,
                maxValue: e.maxValue,
                minValue: e.minValue,
                value: this.value,
                viewProps: this.viewProps,
              })),
              k(t))
            ) {
              var n = new Kn(this.view.element)
              n.emitter.on("down", this.onGraphPointerDown_),
                n.emitter.on("move", this.onGraphPointerMove_),
                n.emitter.on("up", this.onGraphPointerUp_)
            } else
              this.view.element.addEventListener(
                "mousemove",
                this.onGraphMouseMove_
              ),
                this.view.element.addEventListener(
                  "mouseleave",
                  this.onGraphMouseLeave_
                )
          }
          return (
            (t.prototype.onGraphMouseLeave_ = function () {
              this.cursor_.index = -1
            }),
            (t.prototype.onGraphMouseMove_ = function (t) {
              var e = this.view.element.getBoundingClientRect()
              this.cursor_.index = Math.floor(
                rt(t.offsetX, 0, e.width, 0, this.value.rawValue.length)
              )
            }),
            (t.prototype.onGraphPointerDown_ = function (t) {
              this.onGraphPointerMove_(t)
            }),
            (t.prototype.onGraphPointerMove_ = function (t) {
              t.data.point
                ? (this.cursor_.index = Math.floor(
                    rt(
                      t.data.point.x,
                      0,
                      t.data.bounds.width,
                      0,
                      this.value.rawValue.length
                    )
                  ))
                : (this.cursor_.index = -1)
            }),
            (t.prototype.onGraphPointerUp_ = function () {
              this.cursor_.index = -1
            }),
            t
          )
        })()
      function Wo() {
        return Sn(2)
      }
      function Zo(t) {
        var e
        return 1 === t.value.rawValue.length
          ? new Go(t.document, {
              formatter: Wo(),
              value: t.value,
              viewProps: t.viewProps,
            })
          : new Ho(t.document, {
              formatter: Wo(),
              lineCount:
                null !== (e = t.params.lineCount) && void 0 !== e
                  ? e
                  : Pt.monitor.defaultLineCount,
              value: t.value,
              viewProps: t.viewProps,
            })
      }
      function ta(t) {
        var e, n, r
        return new Jo(t.document, {
          formatter: Wo(),
          lineCount:
            null !== (e = t.params.lineCount) && void 0 !== e
              ? e
              : Pt.monitor.defaultLineCount,
          maxValue:
            null !== (n = "max" in t.params ? t.params.max : null) &&
            void 0 !== n
              ? n
              : 100,
          minValue:
            null !== (r = "min" in t.params ? t.params.min : null) &&
            void 0 !== r
              ? r
              : 0,
          value: t.value,
          viewProps: t.viewProps,
        })
      }
      function ea(t) {
        return "view" in t && "graph" === t.view
      }
      var na = {
          id: "monitor-number",
          accept: function (t, e) {
            return "number" == typeof t ? t : null
          },
          binding: {
            defaultBufferSize: function (t) {
              return ea(t) ? 64 : 1
            },
            reader: function (t) {
              return Vn
            },
          },
          controller: function (t) {
            return ea(t.params) ? ta(t) : Zo(t)
          },
        },
        ra = {
          id: "monitor-string",
          accept: function (t, e) {
            return "string" == typeof t ? t : null
          },
          binding: {
            reader: function (t) {
              return Io
            },
          },
          controller: function (t) {
            var e,
              n = t.value
            return n.rawValue.length > 1 ||
              ("multiline" in t.params && t.params.multiline)
              ? new Ho(t.document, {
                  formatter: Bo,
                  lineCount:
                    null !== (e = t.params.lineCount) && void 0 !== e
                      ? e
                      : Pt.monitor.defaultLineCount,
                  value: n,
                  viewProps: t.viewProps,
                })
              : new Go(t.document, {
                  formatter: Bo,
                  value: n,
                  viewProps: t.viewProps,
                })
          },
        }
      function ia(t) {
        var e = t.createElement("div")
        return e.classList.add(b("dfw")()), t.body && t.body.appendChild(e), e
      }
      function oa(t, e, n) {
        if (!t.querySelector("style[data-tp-style=" + e + "]")) {
          var r = t.createElement("style")
          ;(r.dataset.tpStyle = e), (r.textContent = n), t.head.appendChild(r)
        }
      }
      function aa(t) {
        oa(
          t,
          "default",
          ".tp-lstv_s,.tp-btnv_b,.tp-p2dv_b,.tp-fldv_b,.tp-rotv_b,.tp-colswv_sw,.tp-p2dpv_p,.tp-txtv_i,.tp-grlv_g,.tp-sglv_i,.tp-mllv_i,.tp-ckbv_i,.tp-coltxtv_ms,.tp-tbiv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-fldv_c>.tp-cntv.tp-v-lst,.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst{margin-bottom:calc(-1 * var(--cnt-v-p))}.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-fldv_c>*:not(.tp-v-fst),.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-fldv_c>.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv{margin-left:4px}.tp-fldv_c>.tp-fldv>.tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-fldv_c .tp-fldv>.tp-fldv_c,.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-fldv_c>.tp-tabv>.tp-tabv_i,.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_i{border-top-left-radius:var(--elm-br)}.tp-fldv_c .tp-tabv>.tp-tabv_c,.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-lstv_s,.tp-btnv_b,.tp-p2dv_b{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-h);line-height:var(--bld-h);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-lstv_s:hover,.tp-btnv_b:hover,.tp-p2dv_b:hover{background-color:var(--btn-bg-h)}.tp-lstv_s:focus,.tp-btnv_b:focus,.tp-p2dv_b:focus{background-color:var(--btn-bg-f)}.tp-lstv_s:active,.tp-btnv_b:active,.tp-p2dv_b:active{background-color:var(--btn-bg-a)}.tp-lstv_s:disabled,.tp-btnv_b:disabled,.tp-p2dv_b:disabled{opacity:0.5}.tp-fldv_b,.tp-rotv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-h) + 4px);line-height:calc(var(--bld-h) + 4px);overflow:hidden;padding-left:calc(var(--cnt-h-p) + 8px);padding-right:calc(2px * 2 + var(--bld-h) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-fldv_b:hover,.tp-rotv_b:hover{background-color:var(--cnt-bg-h)}.tp-fldv_b:focus,.tp-rotv_b:focus{background-color:var(--cnt-bg-f)}.tp-fldv_b:active,.tp-rotv_b:active{background-color:var(--cnt-bg-a)}.tp-fldv_b:disabled,.tp-rotv_b:disabled{opacity:0.5}.tp-fldv_m,.tp-rotv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:'';display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-h) + 4px - 6px) / 2 - 2px);margin:auto;opacity:0.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m,.tp-rotv.tp-rotv-expanded .tp-rotv_m{transform:none}.tp-fldv_c,.tp-rotv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-fldv.tp-fldv-expanded>.tp-fldv_c,.tp-rotv.tp-rotv-expanded .tp-rotv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-colswv_sw,.tp-p2dpv_p,.tp-txtv_i{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-h);line-height:var(--bld-h);min-width:0;width:100%}.tp-colswv_sw:hover,.tp-p2dpv_p:hover,.tp-txtv_i:hover{background-color:var(--in-bg-h)}.tp-colswv_sw:focus,.tp-p2dpv_p:focus,.tp-txtv_i:focus{background-color:var(--in-bg-f)}.tp-colswv_sw:active,.tp-p2dpv_p:active,.tp-txtv_i:active{background-color:var(--in-bg-a)}.tp-colswv_sw:disabled,.tp-p2dpv_p:disabled,.tp-txtv_i:disabled{opacity:0.5}.tp-coltxtv_m,.tp-lstv{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-coltxtv_mm,.tp-lstv_m{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-coltxtv_mm svg,.tp-lstv_m svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-coltxtv_mm svg path,.tp-lstv_m svg path{fill:currentColor}.tp-grlv_g,.tp-sglv_i,.tp-mllv_i{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-h);width:100%}.tp-coltxtv_w,.tp-pndtxtv{display:flex}.tp-coltxtv_c,.tp-pndtxtv_a{width:100%}.tp-coltxtv_c+.tp-coltxtv_c,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-pndtxtv_a{margin-left:2px}.tp-btnv_b{width:100%}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-h);position:relative;width:var(--bld-h)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:0.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-h)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1 * var(--cnt-h-p));right:calc(-1 * var(--cnt-h-p));top:var(--bld-h)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a:before{background-color:var(--grv-fg);content:'';height:2px;left:calc(-1 * var(--cnt-h-p));position:absolute;right:calc(-1 * var(--cnt-h-p));top:0}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-h) * 4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,0.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0,0,0,0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-h);outline:none;position:relative}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,0.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,0.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-h);outline:none;position:relative;width:100%}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,0.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,0.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br)}.tp-colswv.tp-v-disabled{opacity:0.5}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:var(--bld-h);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-h)}.tp-colswv_b:focus::after{border:rgba(255,255,255,0.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:'';display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-h);line-height:var(--bld-h);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_c{border-left:var(--cnt-bg) solid 4px}.tp-fldv_b:hover+.tp-fldv_c{border-left-color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_c{border-left-color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_c{border-left-color:var(--cnt-bg-a)}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-h) * 3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left 0.05s, top 0.05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:0.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:0.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--value-width)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv.tp-v-disabled .tp-lstv_s{opacity:0.5}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:0.5}.tp-mllv_i{display:block;height:calc(var(--bld-h) * 3);line-height:var(--bld-h);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:0.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-h);margin-right:4px;position:relative;width:var(--bld-h)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1 * var(--cnt-h-p));right:calc(-1 * var(--cnt-h-p));top:var(--bld-h)}.tp-p2dpv{padding-left:calc(var(--bld-h) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:0.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:0.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono,Source Code Pro,Menlo,Courier,monospace);--bs-br: var(--tp-base-border-radius-v3, 6px);--cnt-h-p: var(--tp-container-horizontal-padding-v3, 4px);--cnt-v-p: var(--tp-container-vertical-padding-v3, 4px);--elm-br: var(--tp-element-border-radius-v3, 2px);--bld-h: var(--tp-blade-height-v3, 20px);--bld-s: var(--tp-blade-spacing-v3, 4px);--value-width: var(--tp-value-width-v3, 160px);--bs-bg: var(--tp-base-background-color, #2f3137);--bs-sh: var(--tp-base-shadow-color, rgba(0,0,0,0.2));--btn-bg: var(--tp-button-background-color, #adafb8);--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, #2f3137);--cnt-bg: var(--tp-container-background-color, var(--tp-folder-background-color, rgba(187,188,196,0.1)));--cnt-bg-a: var(--tp-container-background-color-active, var(--tp-folder-background-color-active, rgba(187,188,196,0.25)));--cnt-bg-f: var(--tp-container-background-color-focus, var(--tp-folder-background-color-focus, rgba(187,188,196,0.2)));--cnt-bg-h: var(--tp-container-background-color-hover, var(--tp-folder-background-color-hover, rgba(187,188,196,0.15)));--cnt-fg: var(--tp-container-foreground-color, var(--tp-folder-foreground-color, #bbbcc4));--in-bg: var(--tp-input-background-color, rgba(0,0,0,0.2));--in-bg-a: var(--tp-input-background-color-active, rgba(0,0,0,0.35));--in-bg-f: var(--tp-input-background-color-focus, rgba(0,0,0,0.3));--in-bg-h: var(--tp-input-background-color-hover, rgba(0,0,0,0.25));--in-fg: var(--tp-input-foreground-color, #bbbcc4);--lbl-fg: var(--tp-label-foreground-color, rgba(187,188,196,0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0,0,0,0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187,188,196,0.7));--grv-fg: var(--tp-groove-foreground-color, var(--tp-separator-color, rgba(0,0,0,0.2)));--button-background-color: var(--btn-bg);--button-background-color-active: var(--btn-bg-a);--button-background-color-focus: var(--btn-bg-f);--button-background-color-hover: var(--btn-bg-h);--button-foreground-color: var(--btn-fg);--folder-background-color: var(--cnt-bg);--folder-background-color-active: var(--cnt-bg-a);--folder-background-color-focus: var(--cnt-bg-f);--folder-background-color-hover: var(--cnt-bg-h);--folder-foreground-color: var(--cnt-fg);--input-background-color: var(--in-bg);--input-background-color-active: var(--in-bg-a);--input-background-color-focus: var(--in-bg-f);--input-background-color-hover: var(--in-bg-h);--input-foreground-color: var(--in-fg);--label-foregound-color: var(--lbl-fg);--monitor-background-color: var(--mo-bg);--monitor-foreground-color: var(--mo-fg);--separator-color: var(--grv-fg);--unit-size: var(--bld-h)}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(2px * 2 + var(--bld-h) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c,.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1 * var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1 * var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_i{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sldv.tp-v-disabled{opacity:0.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-h);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:'';display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:'';display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:'';display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv.tp-v-disabled{opacity:0.5}.tp-tabv_i{align-items:flex-end;display:flex;overflow:hidden}.tp-tabv.tp-tabv-nop .tp-tabv_i{height:calc(var(--bld-h) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_i::before{background-color:var(--cnt-bg);bottom:0;content:'';height:2px;left:0;position:absolute;right:0}.tp-tabv_c{border-left:var(--cnt-bg) solid 4px;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p)}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv::before{background-color:var(--cnt-bg);bottom:0;content:'';height:2px;left:-2px;position:absolute;width:2px}.tp-tbiv_b{background-color:var(--cnt-bg);display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);width:100%}.tp-tbiv_b:hover{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active{background-color:var(--cnt-bg-a)}.tp-tbiv_b:disabled{opacity:0.5}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-h) + 4px);line-height:calc(var(--bld-h) + 4px);opacity:0.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:0.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:'';height:calc(var(--bld-h) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:0.1;position:absolute;top:0;transition:border-radius 0.1s, height 0.1s, transform 0.1s, width 0.1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) transparent transparent transparent;border-style:solid;border-width:2px;box-sizing:border-box;content:'';font-size:0.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}"
        ),
          pe().forEach(function (e) {
            e.css && oa(t, "plugin-" + e.id, e.css)
          })
      }
      var sa = (function (t) {
        function n(e) {
          var n,
            r = this,
            i = e || {},
            o = null !== (n = i.document) && void 0 !== n ? n : V(),
            a = new qe(o, {
              expanded: i.expanded,
              blade: v(),
              props: h.fromObject({ title: i.title }),
              viewProps: W.create(),
            })
          return (
            ((r = t.call(this, a) || this).containerElem_ =
              i.container || ia(o)),
            r.containerElem_.appendChild(r.element),
            (r.doc_ = o),
            (r.usesDefaultWrapper_ = !i.container),
            aa(r.document),
            r
          )
        }
        return (
          e(n, t),
          Object.defineProperty(n.prototype, "document", {
            get: function () {
              if (!this.doc_) throw l.alreadyDisposed()
              return this.doc_
            },
            enumerable: !1,
            configurable: !0,
          }),
          (n.prototype.dispose = function () {
            var e = this.containerElem_
            if (!e) throw l.alreadyDisposed()
            if (this.usesDefaultWrapper_) {
              var n = e.parentElement
              n && n.removeChild(e)
            }
            ;(this.containerElem_ = null),
              (this.doc_ = null),
              t.prototype.dispose.call(this)
          }),
          (n.version = new Uo("2.4.3")),
          n
        )
      })(He)
      function la() {
        ;[_o, Vo, No, Ro, Qi, zi, Hi, Ti, br].forEach(function (t) {
          Xt({ type: "input", plugin: t })
        }),
          [Yo, ra, na].forEach(function (t) {
            Xt({ type: "monitor", plugin: t })
          }),
          [Yn, _e, rr, lr].forEach(function (t) {
            Xt({ type: "blade", plugin: t })
          })
      }
      return la(), sa
    })()
  })
export { n as t }
