var e = Object.assign
function t(e, t) {
  const n = Object.create(null),
    r = e.split(",")
  for (let o = 0; o < r.length; o++) n[r[o]] = !0
  return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e]
}
!(function (e = ".", t = "__import__") {
  try {
    self[t] = new Function("u", "return import(u)")
  } catch (n) {
    const r = new URL(e, location),
      o = (e) => {
        URL.revokeObjectURL(e.src), e.remove()
      }
    ;(self[t] = (e) =>
      new Promise((n, a) => {
        const s = new URL(e, r)
        if (self[t].moduleMap[s]) return n(self[t].moduleMap[s])
        const l = new Blob(
            [`import * as m from '${s}';`, `${t}.moduleMap['${s}']=m;`],
            { type: "text/javascript" }
          ),
          i = Object.assign(document.createElement("script"), {
            type: "module",
            src: URL.createObjectURL(l),
            onerror() {
              a(new Error(`Failed to import: ${e}`)), o(i)
            },
            onload() {
              n(self[t].moduleMap[s]), o(i)
            },
          })
        document.head.appendChild(i)
      })),
      (self[t].moduleMap = {})
  }
})("/ripple/assets/")
const n = t(
    "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"
  ),
  r = t(
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  )
function o(e) {
  if (w(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        a = o(M(r) ? l(r) : r)
      if (a) for (const e in a) t[e] = a[e]
    }
    return t
  }
  if (S(e)) return e
}
const a = /;(?![^(]*\))/g,
  s = /:(.+)/
function l(e) {
  const t = {}
  return (
    e.split(a).forEach((e) => {
      if (e) {
        const n = e.split(s)
        n.length > 1 && (t[n[0].trim()] = n[1].trim())
      }
    }),
    t
  )
}
function i(e) {
  let t = ""
  if (M(e)) t = e
  else if (w(e))
    for (let n = 0; n < e.length; n++) {
      const r = i(e[n])
      r && (t += r + " ")
    }
  else if (S(e)) for (const n in e) e[n] && (t += n + " ")
  return t.trim()
}
const c = (e) => (null == e ? "" : S(e) ? JSON.stringify(e, u, 2) : String(e)),
  u = (e, t) =>
    k(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (e, [t, n]) => ((e[`${t} =>`] = n), e),
            {}
          ),
        }
      : E(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : !S(t) || w(t) || R(t)
      ? t
      : String(t),
  f = {},
  d = [],
  p = () => {},
  h = () => !1,
  m = /^on[^a-z]/,
  v = (e) => m.test(e),
  g = (e) => e.startsWith("onUpdate:"),
  b = Object.assign,
  y = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  _ = Object.prototype.hasOwnProperty,
  x = (e, t) => _.call(e, t),
  w = Array.isArray,
  k = (e) => "[object Map]" === P(e),
  E = (e) => "[object Set]" === P(e),
  C = (e) => "function" == typeof e,
  M = (e) => "string" == typeof e,
  $ = (e) => "symbol" == typeof e,
  S = (e) => null !== e && "object" == typeof e,
  L = (e) => S(e) && C(e.then) && C(e.catch),
  A = Object.prototype.toString,
  P = (e) => A.call(e),
  R = (e) => "[object Object]" === P(e),
  O = (e) => M(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
  T = t(
    ",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  j = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  N = /-(\w)/g,
  D = j((e) => e.replace(N, (e, t) => (t ? t.toUpperCase() : ""))),
  F = /\B([A-Z])/g,
  I = j((e) => e.replace(F, "-$1").toLowerCase()),
  V = j((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  B = j((e) => (e ? `on${V(e)}` : "")),
  U = (e, t) => e !== t && (e == e || t == t),
  q = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  H = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  W = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  G = new WeakMap(),
  z = []
let Y
const K = Symbol(""),
  X = Symbol("")
function J(e, t = f) {
  ;(function (e) {
    return e && !0 === e._isEffect
  })(e) && (e = e.raw)
  const n = (function (e, t) {
    const n = function () {
      if (!n.active) return t.scheduler ? void 0 : e()
      if (!z.includes(n)) {
        ee(n)
        try {
          return ne.push(te), (te = !0), z.push(n), (Y = n), e()
        } finally {
          z.pop(), oe(), (Y = z[z.length - 1])
        }
      }
    }
    return (
      (n.id = Q++),
      (n.allowRecurse = !!t.allowRecurse),
      (n._isEffect = !0),
      (n.active = !0),
      (n.raw = e),
      (n.deps = []),
      (n.options = t),
      n
    )
  })(e, t)
  return t.lazy || n(), n
}
function Z(e) {
  e.active && (ee(e), e.options.onStop && e.options.onStop(), (e.active = !1))
}
let Q = 0
function ee(e) {
  const { deps: t } = e
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e)
    t.length = 0
  }
}
let te = !0
const ne = []
function re() {
  ne.push(te), (te = !1)
}
function oe() {
  const e = ne.pop()
  te = void 0 === e || e
}
function ae(e, t, n) {
  if (!te || void 0 === Y) return
  let r = G.get(e)
  r || G.set(e, (r = new Map()))
  let o = r.get(n)
  o || r.set(n, (o = new Set())), o.has(Y) || (o.add(Y), Y.deps.push(o))
}
function se(e, t, n, r, o, a) {
  const s = G.get(e)
  if (!s) return
  const l = new Set(),
    i = (e) => {
      e &&
        e.forEach((e) => {
          ;(e !== Y || e.allowRecurse) && l.add(e)
        })
    }
  if ("clear" === t) s.forEach(i)
  else if ("length" === n && w(e))
    s.forEach((e, t) => {
      ;("length" === t || t >= r) && i(e)
    })
  else
    switch ((void 0 !== n && i(s.get(n)), t)) {
      case "add":
        w(e) ? O(n) && i(s.get("length")) : (i(s.get(K)), k(e) && i(s.get(X)))
        break
      case "delete":
        w(e) || (i(s.get(K)), k(e) && i(s.get(X)))
        break
      case "set":
        k(e) && i(s.get(K))
    }
  l.forEach((e) => {
    e.options.scheduler ? e.options.scheduler(e) : e()
  })
}
const le = t("__proto__,__v_isRef,__isVue"),
  ie = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((e) => Symbol[e])
      .filter($)
  ),
  ce = he(),
  ue = he(!1, !0),
  fe = he(!0),
  de = he(!0, !0),
  pe = {}
function he(e = !1, t = !1) {
  return function (n, r, o) {
    if ("__v_isReactive" === r) return !e
    if ("__v_isReadonly" === r) return e
    if ("__v_raw" === r && o === (e ? Be : Ve).get(n)) return n
    const a = w(n)
    if (!e && a && x(pe, r)) return Reflect.get(pe, r, o)
    const s = Reflect.get(n, r, o)
    if ($(r) ? ie.has(r) : le(r)) return s
    if ((e || ae(n, 0, r), t)) return s
    if (Ze(s)) {
      return !a || !O(r) ? s.value : s
    }
    return S(s) ? (e ? He(s) : qe(s)) : s
  }
}
;["includes", "indexOf", "lastIndexOf"].forEach((e) => {
  const t = Array.prototype[e]
  pe[e] = function (...e) {
    const n = Ke(this)
    for (let t = 0, o = this.length; t < o; t++) ae(n, 0, t + "")
    const r = t.apply(n, e)
    return -1 === r || !1 === r ? t.apply(n, e.map(Ke)) : r
  }
}),
  ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    const t = Array.prototype[e]
    pe[e] = function (...e) {
      re()
      const n = t.apply(this, e)
      return oe(), n
    }
  })
function me(e = !1) {
  return function (t, n, r, o) {
    const a = t[n]
    if (!e && ((r = Ke(r)), !w(t) && Ze(a) && !Ze(r))) return (a.value = r), !0
    const s = w(t) && O(n) ? Number(n) < t.length : x(t, n),
      l = Reflect.set(t, n, r, o)
    return (
      t === Ke(o) && (s ? U(r, a) && se(t, "set", n, r) : se(t, "add", n, r)), l
    )
  }
}
const ve = {
    get: ce,
    set: me(),
    deleteProperty: function (e, t) {
      const n = x(e, t)
      e[t]
      const r = Reflect.deleteProperty(e, t)
      return r && n && se(e, "delete", t, void 0), r
    },
    has: function (e, t) {
      const n = Reflect.has(e, t)
      return ($(t) && ie.has(t)) || ae(e, 0, t), n
    },
    ownKeys: function (e) {
      return ae(e, 0, w(e) ? "length" : K), Reflect.ownKeys(e)
    },
  },
  ge = { get: fe, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
  be = b({}, ve, { get: ue, set: me(!0) })
b({}, ge, { get: de })
const ye = (e) => (S(e) ? qe(e) : e),
  _e = (e) => (S(e) ? He(e) : e),
  xe = (e) => e,
  we = (e) => Reflect.getPrototypeOf(e)
function ke(e, t, n = !1, r = !1) {
  const o = Ke((e = e.__v_raw)),
    a = Ke(t)
  t !== a && !n && ae(o, 0, t), !n && ae(o, 0, a)
  const { has: s } = we(o),
    l = n ? _e : r ? xe : ye
  return s.call(o, t) ? l(e.get(t)) : s.call(o, a) ? l(e.get(a)) : void 0
}
function Ee(e, t = !1) {
  const n = this.__v_raw,
    r = Ke(n),
    o = Ke(e)
  return (
    e !== o && !t && ae(r, 0, e),
    !t && ae(r, 0, o),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  )
}
function Ce(e, t = !1) {
  return (e = e.__v_raw), !t && ae(Ke(e), 0, K), Reflect.get(e, "size", e)
}
function Me(e) {
  e = Ke(e)
  const t = Ke(this),
    n = we(t).has.call(t, e)
  return t.add(e), n || se(t, "add", e, e), this
}
function $e(e, t) {
  t = Ke(t)
  const n = Ke(this),
    { has: r, get: o } = we(n)
  let a = r.call(n, e)
  a || ((e = Ke(e)), (a = r.call(n, e)))
  const s = o.call(n, e)
  return (
    n.set(e, t), a ? U(t, s) && se(n, "set", e, t) : se(n, "add", e, t), this
  )
}
function Se(e) {
  const t = Ke(this),
    { has: n, get: r } = we(t)
  let o = n.call(t, e)
  o || ((e = Ke(e)), (o = n.call(t, e))), r && r.call(t, e)
  const a = t.delete(e)
  return o && se(t, "delete", e, void 0), a
}
function Le() {
  const e = Ke(this),
    t = 0 !== e.size,
    n = e.clear()
  return t && se(e, "clear", void 0, void 0), n
}
function Ae(e, t) {
  return function (n, r) {
    const o = this,
      a = o.__v_raw,
      s = Ke(a),
      l = e ? _e : t ? xe : ye
    return !e && ae(s, 0, K), a.forEach((e, t) => n.call(r, l(e), l(t), o))
  }
}
function Pe(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      a = Ke(o),
      s = k(a),
      l = "entries" === e || (e === Symbol.iterator && s),
      i = "keys" === e && s,
      c = o[e](...r),
      u = t ? _e : n ? xe : ye
    return (
      !t && ae(a, 0, i ? X : K),
      {
        next() {
          const { value: e, done: t } = c.next()
          return t
            ? { value: e, done: t }
            : { value: l ? [u(e[0]), u(e[1])] : u(e), done: t }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function Re(e) {
  return function (...t) {
    return "delete" !== e && this
  }
}
const Oe = {
    get(e) {
      return ke(this, e)
    },
    get size() {
      return Ce(this)
    },
    has: Ee,
    add: Me,
    set: $e,
    delete: Se,
    clear: Le,
    forEach: Ae(!1, !1),
  },
  Te = {
    get(e) {
      return ke(this, e, !1, !0)
    },
    get size() {
      return Ce(this)
    },
    has: Ee,
    add: Me,
    set: $e,
    delete: Se,
    clear: Le,
    forEach: Ae(!1, !0),
  },
  je = {
    get(e) {
      return ke(this, e, !0)
    },
    get size() {
      return Ce(this, !0)
    },
    has(e) {
      return Ee.call(this, e, !0)
    },
    add: Re("add"),
    set: Re("set"),
    delete: Re("delete"),
    clear: Re("clear"),
    forEach: Ae(!0, !1),
  }
function Ne(e, t) {
  const n = t ? Te : e ? je : Oe
  return (t, r, o) =>
    "__v_isReactive" === r
      ? !e
      : "__v_isReadonly" === r
      ? e
      : "__v_raw" === r
      ? t
      : Reflect.get(x(n, r) && r in t ? n : t, r, o)
}
;["keys", "values", "entries", Symbol.iterator].forEach((e) => {
  ;(Oe[e] = Pe(e, !1, !1)), (je[e] = Pe(e, !0, !1)), (Te[e] = Pe(e, !1, !0))
})
const De = { get: Ne(!1, !1) },
  Fe = { get: Ne(!1, !0) },
  Ie = { get: Ne(!0, !1) },
  Ve = new WeakMap(),
  Be = new WeakMap()
function Ue(e) {
  return e.__v_skip || !Object.isExtensible(e)
    ? 0
    : (function (e) {
        switch (e) {
          case "Object":
          case "Array":
            return 1
          case "Map":
          case "Set":
          case "WeakMap":
          case "WeakSet":
            return 2
          default:
            return 0
        }
      })(((e) => P(e).slice(8, -1))(e))
}
function qe(e) {
  return e && e.__v_isReadonly ? e : We(e, !1, ve, De)
}
function He(e) {
  return We(e, !0, ge, Ie)
}
function We(e, t, n, r) {
  if (!S(e)) return e
  if (e.__v_raw && (!t || !e.__v_isReactive)) return e
  const o = t ? Be : Ve,
    a = o.get(e)
  if (a) return a
  const s = Ue(e)
  if (0 === s) return e
  const l = new Proxy(e, 2 === s ? r : n)
  return o.set(e, l), l
}
function Ge(e) {
  return ze(e) ? Ge(e.__v_raw) : !(!e || !e.__v_isReactive)
}
function ze(e) {
  return !(!e || !e.__v_isReadonly)
}
function Ye(e) {
  return Ge(e) || ze(e)
}
function Ke(e) {
  return (e && Ke(e.__v_raw)) || e
}
function Xe(e) {
  return H(e, "__v_skip", !0), e
}
const Je = (e) => (S(e) ? qe(e) : e)
function Ze(e) {
  return Boolean(e && !0 === e.__v_isRef)
}
function Qe(e) {
  return (function (e, t = !1) {
    if (Ze(e)) return e
    return new et(e, t)
  })(e)
}
class et {
  constructor(e, t = !1) {
    ;(this._rawValue = e),
      (this._shallow = t),
      (this.__v_isRef = !0),
      (this._value = t ? e : Je(e))
  }
  get value() {
    return ae(Ke(this), 0, "value"), this._value
  }
  set value(e) {
    U(Ke(e), this._rawValue) &&
      ((this._rawValue = e),
      (this._value = this._shallow ? e : Je(e)),
      se(Ke(this), "set", "value", e))
  }
}
function tt(e) {
  return Ze(e) ? e.value : e
}
const nt = {
  get: (e, t, n) => tt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t]
    return Ze(o) && !Ze(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r)
  },
}
function rt(e) {
  return Ge(e) ? e : new Proxy(e, nt)
}
function ot(e) {
  const t = w(e) ? new Array(e.length) : {}
  for (const n in e) t[n] = st(e, n)
  return t
}
class at {
  constructor(e, t) {
    ;(this._object = e), (this._key = t), (this.__v_isRef = !0)
  }
  get value() {
    return this._object[this._key]
  }
  set value(e) {
    this._object[this._key] = e
  }
}
function st(e, t) {
  return Ze(e[t]) ? e[t] : new at(e, t)
}
class lt {
  constructor(e, t, n) {
    ;(this._setter = t),
      (this._dirty = !0),
      (this.__v_isRef = !0),
      (this.effect = J(e, {
        lazy: !0,
        scheduler: () => {
          this._dirty || ((this._dirty = !0), se(Ke(this), "set", "value"))
        },
      })),
      (this.__v_isReadonly = n)
  }
  get value() {
    return (
      this._dirty && ((this._value = this.effect()), (this._dirty = !1)),
      ae(Ke(this), 0, "value"),
      this._value
    )
  }
  set value(e) {
    this._setter(e)
  }
}
function it(e, t, n, r) {
  let o
  try {
    o = r ? e(...r) : e()
  } catch (a) {
    ut(a, t, n)
  }
  return o
}
function ct(e, t, n, r) {
  if (C(e)) {
    const o = it(e, t, n, r)
    return (
      o &&
        L(o) &&
        o.catch((e) => {
          ut(e, t, n)
        }),
      o
    )
  }
  const o = []
  for (let a = 0; a < e.length; a++) o.push(ct(e[a], t, n, r))
  return o
}
function ut(e, t, n, r = !0) {
  t && t.vnode
  if (t) {
    let r = t.parent
    const o = t.proxy,
      a = n
    for (; r; ) {
      const t = r.ec
      if (t) for (let n = 0; n < t.length; n++) if (!1 === t[n](e, o, a)) return
      r = r.parent
    }
    const s = t.appContext.config.errorHandler
    if (s) return void it(s, null, 10, [e, o, a])
  }
  !(function (e, t, n, r = !0) {
    console.error(e)
  })(e, 0, 0, r)
}
let ft = !1,
  dt = !1
const pt = []
let ht = 0
const mt = []
let vt = null,
  gt = 0
const bt = []
let yt = null,
  _t = 0
const xt = Promise.resolve()
let wt = null,
  kt = null
function Et(e) {
  const t = wt || xt
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Ct(e) {
  ;(pt.length && pt.includes(e, ft && e.allowRecurse ? ht + 1 : ht)) ||
    e === kt ||
    (pt.push(e), Mt())
}
function Mt() {
  ft || dt || ((dt = !0), (wt = xt.then(Pt)))
}
function $t(e, t, n, r) {
  w(e)
    ? n.push(...e)
    : (t && t.includes(e, e.allowRecurse ? r + 1 : r)) || n.push(e),
    Mt()
}
function St(e, t = null) {
  if (mt.length) {
    for (
      kt = t, vt = [...new Set(mt)], mt.length = 0, gt = 0;
      gt < vt.length;
      gt++
    )
      vt[gt]()
    ;(vt = null), (gt = 0), (kt = null), St(e, t)
  }
}
function Lt(e) {
  if (bt.length) {
    const e = [...new Set(bt)]
    if (((bt.length = 0), yt)) return void yt.push(...e)
    for (yt = e, yt.sort((e, t) => At(e) - At(t)), _t = 0; _t < yt.length; _t++)
      yt[_t]()
    ;(yt = null), (_t = 0)
  }
}
const At = (e) => (null == e.id ? 1 / 0 : e.id)
function Pt(e) {
  ;(dt = !1), (ft = !0), St(e), pt.sort((e, t) => At(e) - At(t))
  try {
    for (ht = 0; ht < pt.length; ht++) {
      const e = pt[ht]
      e && it(e, null, 14)
    }
  } finally {
    ;(ht = 0),
      (pt.length = 0),
      Lt(),
      (ft = !1),
      (wt = null),
      (pt.length || bt.length) && Pt(e)
  }
}
function Rt(e, t, ...n) {
  const r = e.vnode.props || f
  let o = n
  const a = t.startsWith("update:"),
    s = a && t.slice(7)
  if (s && s in r) {
    const e = `${"modelValue" === s ? "model" : s}Modifiers`,
      { number: t, trim: a } = r[e] || f
    a ? (o = n.map((e) => e.trim())) : t && (o = n.map(W))
  }
  let l = B(D(t)),
    i = r[l]
  !i && a && ((l = B(I(t))), (i = r[l])), i && ct(i, e, 6, o)
  const c = r[l + "Once"]
  if (c) {
    if (e.emitted) {
      if (e.emitted[l]) return
    } else (e.emitted = {})[l] = !0
    ct(c, e, 6, o)
  }
}
function Ot(e, t, n = !1) {
  if (!t.deopt && void 0 !== e.__emits) return e.__emits
  const r = e.emits
  let o = {},
    a = !1
  if (!C(e)) {
    const r = (e) => {
      ;(a = !0), b(o, Ot(e, t, !0))
    }
    !n && t.mixins.length && t.mixins.forEach(r),
      e.extends && r(e.extends),
      e.mixins && e.mixins.forEach(r)
  }
  return r || a
    ? (w(r) ? r.forEach((e) => (o[e] = null)) : b(o, r), (e.__emits = o))
    : (e.__emits = null)
}
function Tt(e, t) {
  return (
    !(!e || !v(t)) &&
    ((t = t.slice(2).replace(/Once$/, "")),
    x(e, t[0].toLowerCase() + t.slice(1)) || x(e, I(t)) || x(e, t))
  )
}
let jt = null
function Nt(e) {
  jt = e
}
function Dt(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: a,
    propsOptions: [s],
    slots: l,
    attrs: i,
    emit: c,
    render: u,
    renderCache: f,
    data: d,
    setupState: p,
    ctx: h,
  } = e
  let m
  jt = e
  try {
    let e
    if (4 & n.shapeFlag) {
      const t = o || r
      ;(m = _r(u.call(t, t, f, a, p, d, h))), (e = i)
    } else {
      const n = t
      0,
        (m = _r(
          n.length > 1 ? n(a, { attrs: i, slots: l, emit: c }) : n(a, null)
        )),
        (e = t.props ? i : It(i))
    }
    let v = m
    if (!1 !== t.inheritAttrs && e) {
      const t = Object.keys(e),
        { shapeFlag: n } = v
      t.length &&
        (1 & n || 6 & n) &&
        (s && t.some(g) && (e = Vt(e, s)), (v = vr(v, e)))
    }
    n.dirs && (v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs),
      n.transition && (v.transition = n.transition),
      (m = v)
  } catch (v) {
    ut(v, e, 1), (m = mr(rr))
  }
  return (jt = null), m
}
function Ft(e) {
  let t
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    if (!ur(r)) return
    if (r.type !== rr || "v-if" === r.children) {
      if (t) return
      t = r
    }
  }
  return t
}
const It = (e) => {
    let t
    for (const n in e)
      ("class" === n || "style" === n || v(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Vt = (e, t) => {
    const n = {}
    for (const r in e) (g(r) && r.slice(9) in t) || (n[r] = e[r])
    return n
  }
function Bt(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let o = 0; o < r.length; o++) {
    const a = r[o]
    if (t[a] !== e[a] && !Tt(n, a)) return !0
  }
  return !1
}
function Ut(e) {
  if ((C(e) && (e = e()), w(e))) {
    e = Ft(e)
  }
  return _r(e)
}
function qt(e, t) {
  t && t.pendingBranch
    ? w(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : $t(e, yt, bt, _t)
}
let Ht = 0
const Wt = (e) => (Ht += e)
function Gt(e, t, n = {}, r) {
  let o = e[t]
  Ht++, lr()
  const a = o && zt(o(n)),
    s = cr(
      tr,
      { key: n.key || `_${t}` },
      a || (r ? r() : []),
      a && 1 === e._ ? 64 : -2
    )
  return Ht--, s
}
function zt(e) {
  return e.some(
    (e) => !ur(e) || (e.type !== rr && !(e.type === tr && !zt(e.children)))
  )
    ? e
    : null
}
function Yt(e, t = jt) {
  if (!t) return e
  const n = (...n) => {
    Ht || lr(!0)
    const r = jt
    Nt(t)
    const o = e(...n)
    return Nt(r), Ht || ir(), o
  }
  return (n._c = !0), n
}
let Kt = null
const Xt = []
function Jt(e) {
  Xt.push((Kt = e))
}
function Zt() {
  Xt.pop(), (Kt = Xt[Xt.length - 1] || null)
}
function Qt(e) {
  return (t) =>
    Yt(function () {
      Jt(e)
      const n = t.apply(this, arguments)
      return Zt(), n
    })
}
function en(e, t, n, r = !1) {
  const o = {},
    a = {}
  H(a, dr, 1),
    tn(e, t, o, a),
    n
      ? (e.props = r ? o : We(o, !1, be, Fe))
      : e.type.props
      ? (e.props = o)
      : (e.props = a),
    (e.attrs = a)
}
function tn(e, t, n, r) {
  const [o, a] = e.propsOptions
  if (t)
    for (const s in t) {
      const a = t[s]
      if (T(s)) continue
      let l
      o && x(o, (l = D(s))) ? (n[l] = a) : Tt(e.emitsOptions, s) || (r[s] = a)
    }
  if (a) {
    const t = Ke(n)
    for (let r = 0; r < a.length; r++) {
      const s = a[r]
      n[s] = nn(o, t, s, t[s], e)
    }
  }
}
function nn(e, t, n, r, o) {
  const a = e[n]
  if (null != a) {
    const e = x(a, "default")
    if (e && void 0 === r) {
      const e = a.default
      a.type !== Function && C(e) ? (Ur(o), (r = e(t)), Ur(null)) : (r = e)
    }
    a[0] &&
      (x(t, n) || e ? !a[1] || ("" !== r && r !== I(n)) || (r = !0) : (r = !1))
  }
  return r
}
function rn(e, t, n = !1) {
  if (!t.deopt && e.__props) return e.__props
  const r = e.props,
    o = {},
    a = []
  let s = !1
  if (!C(e)) {
    const r = (e) => {
      s = !0
      const [n, r] = rn(e, t, !0)
      b(o, n), r && a.push(...r)
    }
    !n && t.mixins.length && t.mixins.forEach(r),
      e.extends && r(e.extends),
      e.mixins && e.mixins.forEach(r)
  }
  if (!r && !s) return (e.__props = d)
  if (w(r))
    for (let l = 0; l < r.length; l++) {
      const e = D(r[l])
      on(e) && (o[e] = f)
    }
  else if (r)
    for (const l in r) {
      const e = D(l)
      if (on(e)) {
        const t = r[l],
          n = (o[e] = w(t) || C(t) ? { type: t } : t)
        if (n) {
          const t = ln(Boolean, n.type),
            r = ln(String, n.type)
          ;(n[0] = t > -1),
            (n[1] = r < 0 || t < r),
            (t > -1 || x(n, "default")) && a.push(e)
        }
      }
    }
  return (e.__props = [o, a])
}
function on(e) {
  return "$" !== e[0]
}
function an(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/)
  return t ? t[1] : ""
}
function sn(e, t) {
  return an(e) === an(t)
}
function ln(e, t) {
  if (w(t)) {
    for (let n = 0, r = t.length; n < r; n++) if (sn(t[n], e)) return n
  } else if (C(t)) return sn(t, e) ? 0 : -1
  return -1
}
function cn(e, t, n = Br, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      a =
        t.__weh ||
        (t.__weh = (...r) => {
          if (n.isUnmounted) return
          re(), Ur(n)
          const o = ct(t, n, e, r)
          return Ur(null), oe(), o
        })
    return r ? o.unshift(a) : o.push(a), a
  }
}
const un =
    (e) =>
    (t, n = Br) =>
      !Hr && cn(e, t, n),
  fn = un("bm"),
  dn = un("m"),
  pn = un("bu"),
  hn = un("u"),
  mn = un("bum"),
  vn = un("um"),
  gn = un("rtg"),
  bn = un("rtc")
const yn = {}
function _n(e, t, n) {
  return xn(e, t, n)
}
function xn(
  e,
  t,
  { immediate: n, deep: r, flush: o, onTrack: a, onTrigger: s } = f,
  l = Br
) {
  let i,
    c,
    u = !1
  if (
    (Ze(e)
      ? ((i = () => e.value), (u = !!e._shallow))
      : Ge(e)
      ? ((i = () => e), (r = !0))
      : (i = w(e)
          ? () =>
              e.map((e) =>
                Ze(e)
                  ? e.value
                  : Ge(e)
                  ? kn(e)
                  : C(e)
                  ? it(e, l, 2, [l && l.proxy])
                  : void 0
              )
          : C(e)
          ? t
            ? () => it(e, l, 2, [l && l.proxy])
            : () => {
                if (!l || !l.isUnmounted) return c && c(), it(e, l, 3, [d])
              }
          : p),
    t && r)
  ) {
    const e = i
    i = () => kn(e())
  }
  const d = (e) => {
    c = g.options.onStop = () => {
      it(e, l, 4)
    }
  }
  let h = w(e) ? [] : yn
  const m = () => {
    if (g.active)
      if (t) {
        const e = g()
        ;(r || u || U(e, h)) &&
          (c && c(), ct(t, l, 3, [e, h === yn ? void 0 : h, d]), (h = e))
      } else g()
  }
  let v
  ;(m.allowRecurse = !!t),
    (v =
      "sync" === o
        ? m
        : "post" === o
        ? () => Hn(m, l && l.suspense)
        : () => {
            !l || l.isMounted
              ? (function (e) {
                  $t(e, vt, mt, gt)
                })(m)
              : m()
          })
  const g = J(i, { lazy: !0, onTrack: a, onTrigger: s, scheduler: v })
  return (
    zr(g, l),
    t ? (n ? m() : (h = g())) : "post" === o ? Hn(g, l && l.suspense) : g(),
    () => {
      Z(g), l && y(l.effects, g)
    }
  )
}
function wn(e, t, n) {
  const r = this.proxy
  return xn(M(e) ? () => r[e] : e.bind(r), t.bind(r), n, this)
}
function kn(e, t = new Set()) {
  if (!S(e) || t.has(e)) return e
  if ((t.add(e), Ze(e))) kn(e.value, t)
  else if (w(e)) for (let n = 0; n < e.length; n++) kn(e[n], t)
  else if (E(e) || k(e))
    e.forEach((e) => {
      kn(e, t)
    })
  else for (const n in e) kn(e[n], t)
  return e
}
const En = (e) => e.type.__isKeepAlive
function Cn(e, t, n = Br) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let t = n
      for (; t; ) {
        if (t.isDeactivated) return
        t = t.parent
      }
      e()
    })
  if ((cn(t, r, n), n)) {
    let e = n.parent
    for (; e && e.parent; ) En(e.parent.vnode) && Mn(r, t, n, e), (e = e.parent)
  }
}
function Mn(e, t, n, r) {
  const o = cn(t, e, r, !0)
  vn(() => {
    y(r[t], o)
  }, n)
}
const $n = (e) => "_" === e[0] || "$stable" === e,
  Sn = (e) => (w(e) ? e.map(_r) : [_r(e)]),
  Ln = (e, t, n) => Yt((e) => Sn(t(e)), n),
  An = (e, t) => {
    const n = e._ctx
    for (const r in e) {
      if ($n(r)) continue
      const o = e[r]
      if (C(o)) t[r] = Ln(0, o, n)
      else if (null != o) {
        const e = Sn(o)
        t[r] = () => e
      }
    }
  },
  Pn = (e, t) => {
    const n = Sn(t)
    e.slots.default = () => n
  }
function Rn(e, t, n, r) {
  const o = e.dirs,
    a = t && t.dirs
  for (let s = 0; s < o.length; s++) {
    const l = o[s]
    a && (l.oldValue = a[s].value)
    const i = l.dir[r]
    i && ct(i, n, 8, [e.el, l, e, t])
  }
}
function On() {
  return {
    app: null,
    config: {
      isNativeTag: h,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      isCustomElement: h,
      errorHandler: void 0,
      warnHandler: void 0,
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
  }
}
let Tn = 0
function jn(e, t) {
  return function (n, r = null) {
    null == r || S(r) || (r = null)
    const o = On(),
      a = new Set()
    let s = !1
    const l = (o.app = {
      _uid: Tn++,
      _component: n,
      _props: r,
      _container: null,
      _context: o,
      version: Zr,
      get config() {
        return o.config
      },
      set config(e) {},
      use: (e, ...t) => (
        a.has(e) ||
          (e && C(e.install)
            ? (a.add(e), e.install(l, ...t))
            : C(e) && (a.add(e), e(l, ...t))),
        l
      ),
      mixin: (e) => (
        o.mixins.includes(e) ||
          (o.mixins.push(e), (e.props || e.emits) && (o.deopt = !0)),
        l
      ),
      component: (e, t) => (t ? ((o.components[e] = t), l) : o.components[e]),
      directive: (e, t) => (t ? ((o.directives[e] = t), l) : o.directives[e]),
      mount(a, i) {
        if (!s) {
          const c = mr(n, r)
          return (
            (c.appContext = o),
            i && t ? t(c, a) : e(c, a),
            (s = !0),
            (l._container = a),
            (a.__vue_app__ = l),
            c.component.proxy
          )
        }
      },
      unmount() {
        s && (e(null, l._container), delete l._container.__vue_app__)
      },
      provide: (e, t) => ((o.provides[e] = t), l),
    })
    return l
  }
}
let Nn = !1
const Dn = (e) => /svg/.test(e.namespaceURI) && "foreignObject" !== e.tagName,
  Fn = (e) => 8 === e.nodeType
function In(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        nextSibling: o,
        parentNode: a,
        remove: s,
        insert: l,
        createComment: i,
      },
    } = e,
    c = (n, r, s, l, i = !1) => {
      const m = Fn(n) && "[" === n.data,
        v = () => p(n, r, s, l, m),
        { type: g, ref: b, shapeFlag: y } = r,
        _ = n.nodeType
      r.el = n
      let x = null
      switch (g) {
        case nr:
          3 !== _
            ? (x = v())
            : (n.data !== r.children && ((Nn = !0), (n.data = r.children)),
              (x = o(n)))
          break
        case rr:
          x = 8 !== _ || m ? v() : o(n)
          break
        case or:
          if (1 === _) {
            x = n
            const e = !r.children.length
            for (let t = 0; t < r.staticCount; t++)
              e && (r.children += x.outerHTML),
                t === r.staticCount - 1 && (r.anchor = x),
                (x = o(x))
            return x
          }
          x = v()
          break
        case tr:
          x = m ? d(n, r, s, l, i) : v()
          break
        default:
          if (1 & y)
            x =
              1 !== _ || r.type !== n.tagName.toLowerCase()
                ? v()
                : u(n, r, s, l, i)
          else if (6 & y) {
            const e = a(n),
              c = () => {
                t(r, e, null, s, l, Dn(e), i)
              },
              u = r.type.__asyncLoader
            u ? u().then(c) : c(), (x = m ? h(n) : o(n))
          } else
            64 & y
              ? (x = 8 !== _ ? v() : r.type.hydrate(n, r, s, l, i, e, f))
              : 128 & y && (x = r.type.hydrate(n, r, s, l, Dn(a(n)), i, e, c))
      }
      return null != b && Wn(b, null, l, r), x
    },
    u = (e, t, n, o, a) => {
      a = a || !!t.dynamicChildren
      const { props: l, patchFlag: i, shapeFlag: c, dirs: u } = t
      if (-1 !== i) {
        if ((u && Rn(t, null, n, "created"), l))
          if (!a || 16 & i || 32 & i)
            for (const t in l) !T(t) && v(t) && r(e, t, null, l[t])
          else l.onClick && r(e, "onClick", null, l.onClick)
        let d
        if (
          ((d = l && l.onVnodeBeforeMount) && zn(d, n, t),
          u && Rn(t, null, n, "beforeMount"),
          ((d = l && l.onVnodeMounted) || u) &&
            qt(() => {
              d && zn(d, n, t), u && Rn(t, null, n, "mounted")
            }, o),
          16 & c && (!l || (!l.innerHTML && !l.textContent)))
        ) {
          let r = f(e.firstChild, t, e, n, o, a)
          for (; r; ) {
            Nn = !0
            const e = r
            ;(r = r.nextSibling), s(e)
          }
        } else
          8 & c &&
            e.textContent !== t.children &&
            ((Nn = !0), (e.textContent = t.children))
      }
      return e.nextSibling
    },
    f = (e, t, r, o, a, s) => {
      s = s || !!t.dynamicChildren
      const l = t.children,
        i = l.length
      for (let u = 0; u < i; u++) {
        const t = s ? l[u] : (l[u] = _r(l[u]))
        e
          ? (e = c(e, t, o, a, s))
          : ((Nn = !0), n(null, t, r, null, o, a, Dn(r)))
      }
      return e
    },
    d = (e, t, n, r, s) => {
      const c = a(e),
        u = f(o(e), t, c, n, r, s)
      return u && Fn(u) && "]" === u.data
        ? o((t.anchor = u))
        : ((Nn = !0), l((t.anchor = i("]")), c, u), u)
    },
    p = (e, t, r, l, i) => {
      if (((Nn = !0), (t.el = null), i)) {
        const t = h(e)
        for (;;) {
          const n = o(e)
          if (!n || n === t) break
          s(n)
        }
      }
      const c = o(e),
        u = a(e)
      return s(e), n(null, t, u, c, r, l, Dn(u)), c
    },
    h = (e) => {
      let t = 0
      for (; e; )
        if ((e = o(e)) && Fn(e) && ("[" === e.data && t++, "]" === e.data)) {
          if (0 === t) return o(e)
          t--
        }
      return e
    }
  return [
    (e, t) => {
      ;(Nn = !1),
        c(t.firstChild, e, null, null),
        Lt(),
        Nn && console.error("Hydration completed but contains mismatches.")
    },
    c,
  ]
}
function Vn(e) {
  return C(e) ? { setup: e, name: e.name } : e
}
function Bn(e) {
  C(e) && (e = { loader: e })
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: o = 200,
    timeout: a,
    suspensible: s = !0,
    onError: l,
  } = e
  let i,
    c = null,
    u = 0
  const f = () => {
    let e
    return (
      c ||
      (e = c =
        t()
          .catch((e) => {
            if (((e = e instanceof Error ? e : new Error(String(e))), l))
              return new Promise((t, n) => {
                l(
                  e,
                  () => t((u++, (c = null), f())),
                  () => n(e),
                  u + 1
                )
              })
            throw e
          })
          .then((t) =>
            e !== c && c
              ? c
              : (t &&
                  (t.__esModule || "Module" === t[Symbol.toStringTag]) &&
                  (t = t.default),
                (i = t),
                t)
          ))
    )
  }
  return Vn({
    __asyncLoader: f,
    name: "AsyncComponentWrapper",
    setup() {
      const e = Br
      if (i) return () => Un(i, e)
      const t = (t) => {
        ;(c = null), ut(t, e, 13, !r)
      }
      if (s && e.suspense)
        return f()
          .then((t) => () => Un(t, e))
          .catch((e) => (t(e), () => (r ? mr(r, { error: e }) : null)))
      const l = Qe(!1),
        u = Qe(),
        d = Qe(!!o)
      return (
        o &&
          setTimeout(() => {
            d.value = !1
          }, o),
        null != a &&
          setTimeout(() => {
            if (!l.value && !u.value) {
              const e = new Error(`Async component timed out after ${a}ms.`)
              t(e), (u.value = e)
            }
          }, a),
        f()
          .then(() => {
            l.value = !0
          })
          .catch((e) => {
            t(e), (u.value = e)
          }),
        () =>
          l.value && i
            ? Un(i, e)
            : u.value && r
            ? mr(r, { error: u.value })
            : n && !d.value
            ? mr(n)
            : void 0
      )
    },
  })
}
function Un(e, { vnode: { ref: t, props: n, children: r } }) {
  const o = mr(e, n, r)
  return (o.ref = t), o
}
const qn = { scheduler: Ct, allowRecurse: !0 },
  Hn = qt,
  Wn = (e, t, n, r) => {
    if (w(e))
      return void e.forEach((e, o) => Wn(e, t && (w(t) ? t[o] : t), n, r))
    let o
    o =
      !r || r.type.__asyncLoader
        ? null
        : 4 & r.shapeFlag
        ? r.component.exposed || r.component.proxy
        : r.el
    const { i: a, r: s } = e,
      l = t && t.r,
      i = a.refs === f ? (a.refs = {}) : a.refs,
      c = a.setupState
    if (
      (null != l &&
        l !== s &&
        (M(l)
          ? ((i[l] = null), x(c, l) && (c[l] = null))
          : Ze(l) && (l.value = null)),
      M(s))
    ) {
      const e = () => {
        ;(i[s] = o), x(c, s) && (c[s] = o)
      }
      o ? ((e.id = -1), Hn(e, n)) : e()
    } else if (Ze(s)) {
      const e = () => {
        s.value = o
      }
      o ? ((e.id = -1), Hn(e, n)) : e()
    } else C(s) && it(s, a, 12, [o, i])
  }
function Gn(e) {
  return (function (e, t) {
    const {
        insert: n,
        remove: r,
        patchProp: o,
        forcePatchProp: a,
        createElement: s,
        createText: l,
        createComment: i,
        setText: c,
        setElementText: u,
        parentNode: h,
        nextSibling: m,
        setScopeId: v = p,
        cloneNode: g,
        insertStaticContent: y,
      } = e,
      _ = (e, t, n, r = null, o = null, a = null, s = !1, l = !1) => {
        e && !fr(e, t) && ((r = ae(e)), X(e, o, a, !0), (e = null)),
          -2 === t.patchFlag && ((l = !1), (t.dynamicChildren = null))
        const { type: i, ref: c, shapeFlag: u } = t
        switch (i) {
          case nr:
            w(e, t, n, r)
            break
          case rr:
            k(e, t, n, r)
            break
          case or:
            null == e && E(t, n, r, s)
            break
          case tr:
            N(e, t, n, r, o, a, s, l)
            break
          default:
            1 & u
              ? $(e, t, n, r, o, a, s, l)
              : 6 & u
              ? F(e, t, n, r, o, a, s, l)
              : (64 & u || 128 & u) && i.process(e, t, n, r, o, a, s, l, ie)
        }
        null != c && o && Wn(c, e && e.ref, a, t)
      },
      w = (e, t, r, o) => {
        if (null == e) n((t.el = l(t.children)), r, o)
        else {
          const n = (t.el = e.el)
          t.children !== e.children && c(n, t.children)
        }
      },
      k = (e, t, r, o) => {
        null == e ? n((t.el = i(t.children || "")), r, o) : (t.el = e.el)
      },
      E = (e, t, n, r) => {
        ;[e.el, e.anchor] = y(e.children, t, n, r)
      },
      C = ({ el: e, anchor: t }, r, o) => {
        let a
        for (; e && e !== t; ) (a = m(e)), n(e, r, o), (e = a)
        n(t, r, o)
      },
      M = ({ el: e, anchor: t }) => {
        let n
        for (; e && e !== t; ) (n = m(e)), r(e), (e = n)
        r(t)
      },
      $ = (e, t, n, r, o, a, s, l) => {
        ;(s = s || "svg" === t.type),
          null == e ? S(t, n, r, o, a, s, l) : R(e, t, o, a, s, l)
      },
      S = (e, t, r, a, l, i, c) => {
        let f, d
        const {
          type: p,
          props: h,
          shapeFlag: m,
          transition: v,
          scopeId: b,
          patchFlag: y,
          dirs: _,
        } = e
        if (e.el && void 0 !== g && -1 === y) f = e.el = g(e.el)
        else {
          if (
            ((f = e.el = s(e.type, i, h && h.is)),
            8 & m
              ? u(f, e.children)
              : 16 & m &&
                P(
                  e.children,
                  f,
                  null,
                  a,
                  l,
                  i && "foreignObject" !== p,
                  c || !!e.dynamicChildren
                ),
            _ && Rn(e, null, a, "created"),
            h)
          ) {
            for (const t in h)
              T(t) || o(f, t, null, h[t], i, e.children, a, l, ne)
            ;(d = h.onVnodeBeforeMount) && zn(d, a, e)
          }
          A(f, b, e, a)
        }
        _ && Rn(e, null, a, "beforeMount")
        const x = (!l || (l && !l.pendingBranch)) && v && !v.persisted
        x && v.beforeEnter(f),
          n(f, t, r),
          ((d = h && h.onVnodeMounted) || x || _) &&
            Hn(() => {
              d && zn(d, a, e), x && v.enter(f), _ && Rn(e, null, a, "mounted")
            }, l)
      },
      A = (e, t, n, r) => {
        if ((t && v(e, t), r)) {
          const o = r.type.__scopeId
          o && o !== t && v(e, o + "-s"),
            n === r.subTree && A(e, r.vnode.scopeId, r.vnode, r.parent)
        }
      },
      P = (e, t, n, r, o, a, s, l = 0) => {
        for (let i = l; i < e.length; i++) {
          const l = (e[i] = s ? xr(e[i]) : _r(e[i]))
          _(null, l, t, n, r, o, a, s)
        }
      },
      R = (e, t, n, r, s, l) => {
        const i = (t.el = e.el)
        let { patchFlag: c, dynamicChildren: d, dirs: p } = t
        c |= 16 & e.patchFlag
        const h = e.props || f,
          m = t.props || f
        let v
        if (
          ((v = m.onVnodeBeforeUpdate) && zn(v, n, t, e),
          p && Rn(t, e, n, "beforeUpdate"),
          c > 0)
        ) {
          if (16 & c) j(i, t, h, m, n, r, s)
          else if (
            (2 & c && h.class !== m.class && o(i, "class", null, m.class, s),
            4 & c && o(i, "style", h.style, m.style, s),
            8 & c)
          ) {
            const l = t.dynamicProps
            for (let t = 0; t < l.length; t++) {
              const c = l[t],
                u = h[c],
                f = m[c]
              ;(f !== u || (a && a(i, c))) &&
                o(i, c, u, f, s, e.children, n, r, ne)
            }
          }
          1 & c && e.children !== t.children && u(i, t.children)
        } else l || null != d || j(i, t, h, m, n, r, s)
        const g = s && "foreignObject" !== t.type
        d
          ? O(e.dynamicChildren, d, i, n, r, g)
          : l || G(e, t, i, null, n, r, g),
          ((v = m.onVnodeUpdated) || p) &&
            Hn(() => {
              v && zn(v, n, t, e), p && Rn(t, e, n, "updated")
            }, r)
      },
      O = (e, t, n, r, o, a) => {
        for (let s = 0; s < t.length; s++) {
          const l = e[s],
            i = t[s],
            c =
              l.type === tr || !fr(l, i) || 6 & l.shapeFlag || 64 & l.shapeFlag
                ? h(l.el)
                : n
          _(l, i, c, null, r, o, a, !0)
        }
      },
      j = (e, t, n, r, s, l, i) => {
        if (n !== r) {
          for (const c in r) {
            if (T(c)) continue
            const u = r[c],
              f = n[c]
            ;(u !== f || (a && a(e, c))) &&
              o(e, c, f, u, i, t.children, s, l, ne)
          }
          if (n !== f)
            for (const a in n)
              T(a) || a in r || o(e, a, n[a], null, i, t.children, s, l, ne)
        }
      },
      N = (e, t, r, o, a, s, i, c) => {
        const u = (t.el = e ? e.el : l("")),
          f = (t.anchor = e ? e.anchor : l(""))
        let { patchFlag: d, dynamicChildren: p } = t
        d > 0 && (c = !0),
          null == e
            ? (n(u, r, o), n(f, r, o), P(t.children, r, f, a, s, i, c))
            : d > 0 && 64 & d && p && e.dynamicChildren
            ? (O(e.dynamicChildren, p, r, a, s, i),
              (null != t.key || (a && t === a.subTree)) && Yn(e, t, !0))
            : G(e, t, r, f, a, s, i, c)
      },
      F = (e, t, n, r, o, a, s, l) => {
        null == e
          ? 512 & t.shapeFlag
            ? o.ctx.activate(t, n, r, s, l)
            : V(t, n, r, o, a, s, l)
          : B(e, t, l)
      },
      V = (e, t, n, r, o, a, s) => {
        const l = (e.component = (function (e, t, n) {
          const r = e.type,
            o = (t ? t.appContext : e.appContext) || Ir,
            a = {
              uid: Vr++,
              vnode: e,
              type: r,
              parent: t,
              appContext: o,
              root: null,
              next: null,
              subTree: null,
              update: null,
              render: null,
              proxy: null,
              exposed: null,
              withProxy: null,
              effects: null,
              provides: t ? t.provides : Object.create(o.provides),
              accessCache: null,
              renderCache: [],
              components: null,
              directives: null,
              propsOptions: rn(r, o),
              emitsOptions: Ot(r, o),
              emit: null,
              emitted: null,
              ctx: f,
              data: f,
              props: f,
              attrs: f,
              slots: f,
              refs: f,
              setupState: f,
              setupContext: null,
              suspense: n,
              suspenseId: n ? n.pendingId : 0,
              asyncDep: null,
              asyncResolved: !1,
              isMounted: !1,
              isUnmounted: !1,
              isDeactivated: !1,
              bc: null,
              c: null,
              bm: null,
              m: null,
              bu: null,
              u: null,
              um: null,
              bum: null,
              da: null,
              a: null,
              rtg: null,
              rtc: null,
              ec: null,
            }
          return (
            (a.ctx = { _: a }),
            (a.root = t ? t.root : a),
            (a.emit = Rt.bind(null, a)),
            a
          )
        })(e, r, o))
        if (
          (En(e) && (l.ctx.renderer = ie),
          (function (e, t = !1) {
            Hr = t
            const { props: n, children: r } = e.vnode,
              o = qr(e)
            en(e, n, o, t),
              ((e, t) => {
                if (32 & e.vnode.shapeFlag) {
                  const n = t._
                  n ? ((e.slots = t), H(t, "_", n)) : An(t, (e.slots = {}))
                } else (e.slots = {}), t && Pn(e, t)
                H(e.slots, dr, 1)
              })(e, r)
            const a = o
              ? (function (e, t) {
                  const n = e.type
                  ;(e.accessCache = Object.create(null)),
                    (e.proxy = new Proxy(e.ctx, Dr))
                  const { setup: r } = n
                  if (r) {
                    const n = (e.setupContext =
                      r.length > 1
                        ? (function (e) {
                            const t = (t) => {
                              e.exposed = rt(t)
                            }
                            return {
                              attrs: e.attrs,
                              slots: e.slots,
                              emit: e.emit,
                              expose: t,
                            }
                          })(e)
                        : null)
                    ;(Br = e), re()
                    const o = it(r, e, 0, [e.props, n])
                    if ((oe(), (Br = null), L(o))) {
                      if (t)
                        return o.then((t) => {
                          Wr(e, t)
                        })
                      e.asyncDep = o
                    } else Wr(e, o)
                  } else Gr(e)
                })(e, t)
              : void 0
            Hr = !1
          })(l),
          l.asyncDep)
        ) {
          if ((o && o.registerDep(l, U), !e.el)) {
            const e = (l.subTree = mr(rr))
            k(null, e, t, n)
          }
        } else U(l, e, t, n, o, a, s)
      },
      B = (e, t, n) => {
        const r = (t.component = e.component)
        if (
          (function (e, t, n) {
            const { props: r, children: o, component: a } = e,
              { props: s, children: l, patchFlag: i } = t,
              c = a.emitsOptions
            if (t.dirs || t.transition) return !0
            if (!(n && i >= 0))
              return (
                !((!o && !l) || (l && l.$stable)) ||
                (r !== s && (r ? !s || Bt(r, s, c) : !!s))
              )
            if (1024 & i) return !0
            if (16 & i) return r ? Bt(r, s, c) : !!s
            if (8 & i) {
              const e = t.dynamicProps
              for (let t = 0; t < e.length; t++) {
                const n = e[t]
                if (s[n] !== r[n] && !Tt(c, n)) return !0
              }
            }
            return !1
          })(e, t, n)
        ) {
          if (r.asyncDep && !r.asyncResolved) return void W(r, t, n)
          ;(r.next = t),
            (function (e) {
              const t = pt.indexOf(e)
              t > -1 && pt.splice(t, 1)
            })(r.update),
            r.update()
        } else (t.component = e.component), (t.el = e.el), (r.vnode = t)
      },
      U = (e, t, n, r, o, a, s) => {
        e.update = J(function () {
          if (e.isMounted) {
            let t,
              { next: n, bu: r, u: l, parent: i, vnode: c } = e,
              u = n
            n ? ((n.el = c.el), W(e, n, s)) : (n = c),
              r && q(r),
              (t = n.props && n.props.onVnodeBeforeUpdate) && zn(t, i, n, c)
            const f = Dt(e),
              d = e.subTree
            ;(e.subTree = f),
              _(d, f, h(d.el), ae(d), e, o, a),
              (n.el = f.el),
              null === u &&
                (function ({ vnode: e, parent: t }, n) {
                  for (; t && t.subTree === e; )
                    ((e = t.vnode).el = n), (t = t.parent)
                })(e, f.el),
              l && Hn(l, o),
              (t = n.props && n.props.onVnodeUpdated) &&
                Hn(() => {
                  zn(t, i, n, c)
                }, o)
          } else {
            let s
            const { el: l, props: i } = t,
              { bm: c, m: u, parent: f } = e
            c && q(c), (s = i && i.onVnodeBeforeMount) && zn(s, f, t)
            const d = (e.subTree = Dt(e))
            if (
              (l && ue
                ? ue(t.el, d, e, o)
                : (_(null, d, n, r, e, o, a), (t.el = d.el)),
              u && Hn(u, o),
              (s = i && i.onVnodeMounted))
            ) {
              const e = t
              Hn(() => {
                zn(s, f, e)
              }, o)
            }
            const { a: p } = e
            p && 256 & t.shapeFlag && Hn(p, o),
              (e.isMounted = !0),
              (t = n = r = null)
          }
        }, qn)
      },
      W = (e, t, n) => {
        t.component = e
        const r = e.vnode.props
        ;(e.vnode = t),
          (e.next = null),
          (function (e, t, n, r) {
            const {
                props: o,
                attrs: a,
                vnode: { patchFlag: s },
              } = e,
              l = Ke(o),
              [i] = e.propsOptions
            if (!(r || s > 0) || 16 & s) {
              let r
              tn(e, t, o, a)
              for (const a in l)
                (t && (x(t, a) || ((r = I(a)) !== a && x(t, r)))) ||
                  (i
                    ? !n ||
                      (void 0 === n[a] && void 0 === n[r]) ||
                      (o[a] = nn(i, t || f, a, void 0, e))
                    : delete o[a])
              if (a !== l) for (const e in a) (t && x(t, e)) || delete a[e]
            } else if (8 & s) {
              const n = e.vnode.dynamicProps
              for (let r = 0; r < n.length; r++) {
                const s = n[r],
                  c = t[s]
                if (i)
                  if (x(a, s)) a[s] = c
                  else {
                    const t = D(s)
                    o[t] = nn(i, l, t, c, e)
                  }
                else a[s] = c
              }
            }
            se(e, "set", "$attrs")
          })(e, t.props, r, n),
          ((e, t) => {
            const { vnode: n, slots: r } = e
            let o = !0,
              a = f
            if (32 & n.shapeFlag) {
              const e = t._
              e ? (1 === e ? (o = !1) : b(r, t)) : ((o = !t.$stable), An(t, r)),
                (a = t)
            } else t && (Pn(e, t), (a = { default: 1 }))
            if (o) for (const s in r) $n(s) || s in a || delete r[s]
          })(e, t.children),
          St(void 0, e.update)
      },
      G = (e, t, n, r, o, a, s, l = !1) => {
        const i = e && e.children,
          c = e ? e.shapeFlag : 0,
          f = t.children,
          { patchFlag: d, shapeFlag: p } = t
        if (d > 0) {
          if (128 & d) return void Y(i, f, n, r, o, a, s, l)
          if (256 & d) return void z(i, f, n, r, o, a, s, l)
        }
        8 & p
          ? (16 & c && ne(i, o, a), f !== i && u(n, f))
          : 16 & c
          ? 16 & p
            ? Y(i, f, n, r, o, a, s, l)
            : ne(i, o, a, !0)
          : (8 & c && u(n, ""), 16 & p && P(f, n, r, o, a, s, l))
      },
      z = (e, t, n, r, o, a, s, l) => {
        t = t || d
        const i = (e = e || d).length,
          c = t.length,
          u = Math.min(i, c)
        let f
        for (f = 0; f < u; f++) {
          const r = (t[f] = l ? xr(t[f]) : _r(t[f]))
          _(e[f], r, n, null, o, a, s, l)
        }
        i > c ? ne(e, o, a, !0, !1, u) : P(t, n, r, o, a, s, l, u)
      },
      Y = (e, t, n, r, o, a, s, l) => {
        let i = 0
        const c = t.length
        let u = e.length - 1,
          f = c - 1
        for (; i <= u && i <= f; ) {
          const r = e[i],
            c = (t[i] = l ? xr(t[i]) : _r(t[i]))
          if (!fr(r, c)) break
          _(r, c, n, null, o, a, s, l), i++
        }
        for (; i <= u && i <= f; ) {
          const r = e[u],
            i = (t[f] = l ? xr(t[f]) : _r(t[f]))
          if (!fr(r, i)) break
          _(r, i, n, null, o, a, s, l), u--, f--
        }
        if (i > u) {
          if (i <= f) {
            const e = f + 1,
              u = e < c ? t[e].el : r
            for (; i <= f; )
              _(null, (t[i] = l ? xr(t[i]) : _r(t[i])), n, u, o, a, s), i++
          }
        } else if (i > f) for (; i <= u; ) X(e[i], o, a, !0), i++
        else {
          const p = i,
            h = i,
            m = new Map()
          for (i = h; i <= f; i++) {
            const e = (t[i] = l ? xr(t[i]) : _r(t[i]))
            null != e.key && m.set(e.key, i)
          }
          let v,
            g = 0
          const b = f - h + 1
          let y = !1,
            x = 0
          const w = new Array(b)
          for (i = 0; i < b; i++) w[i] = 0
          for (i = p; i <= u; i++) {
            const r = e[i]
            if (g >= b) {
              X(r, o, a, !0)
              continue
            }
            let c
            if (null != r.key) c = m.get(r.key)
            else
              for (v = h; v <= f; v++)
                if (0 === w[v - h] && fr(r, t[v])) {
                  c = v
                  break
                }
            void 0 === c
              ? X(r, o, a, !0)
              : ((w[c - h] = i + 1),
                c >= x ? (x = c) : (y = !0),
                _(r, t[c], n, null, o, a, s, l),
                g++)
          }
          const k = y
            ? (function (e) {
                const t = e.slice(),
                  n = [0]
                let r, o, a, s, l
                const i = e.length
                for (r = 0; r < i; r++) {
                  const i = e[r]
                  if (0 !== i) {
                    if (((o = n[n.length - 1]), e[o] < i)) {
                      ;(t[r] = o), n.push(r)
                      continue
                    }
                    for (a = 0, s = n.length - 1; a < s; )
                      (l = ((a + s) / 2) | 0),
                        e[n[l]] < i ? (a = l + 1) : (s = l)
                    i < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), (n[a] = r))
                  }
                }
                ;(a = n.length), (s = n[a - 1])
                for (; a-- > 0; ) (n[a] = s), (s = t[s])
                return n
              })(w)
            : d
          for (v = k.length - 1, i = b - 1; i >= 0; i--) {
            const e = h + i,
              l = t[e],
              u = e + 1 < c ? t[e + 1].el : r
            0 === w[i]
              ? _(null, l, n, u, o, a, s)
              : y && (v < 0 || i !== k[v] ? K(l, n, u, 2) : v--)
          }
        }
      },
      K = (e, t, r, o, a = null) => {
        const { el: s, type: l, transition: i, children: c, shapeFlag: u } = e
        if (6 & u) return void K(e.component.subTree, t, r, o)
        if (128 & u) return void e.suspense.move(t, r, o)
        if (64 & u) return void l.move(e, t, r, ie)
        if (l === tr) {
          n(s, t, r)
          for (let e = 0; e < c.length; e++) K(c[e], t, r, o)
          return void n(e.anchor, t, r)
        }
        if (l === or) return void C(e, t, r)
        if (2 !== o && 1 & u && i)
          if (0 === o) i.beforeEnter(s), n(s, t, r), Hn(() => i.enter(s), a)
          else {
            const { leave: e, delayLeave: o, afterLeave: a } = i,
              l = () => n(s, t, r),
              c = () => {
                e(s, () => {
                  l(), a && a()
                })
              }
            o ? o(s, l, c) : c()
          }
        else n(s, t, r)
      },
      X = (e, t, n, r = !1, o = !1) => {
        const {
          type: a,
          props: s,
          ref: l,
          children: i,
          dynamicChildren: c,
          shapeFlag: u,
          patchFlag: f,
          dirs: d,
        } = e
        if ((null != l && Wn(l, null, n, null), 256 & u))
          return void t.ctx.deactivate(e)
        const p = 1 & u && d
        let h
        if (((h = s && s.onVnodeBeforeUnmount) && zn(h, t, e), 6 & u))
          te(e.component, n, r)
        else {
          if (128 & u) return void e.suspense.unmount(n, r)
          p && Rn(e, null, t, "beforeUnmount"),
            c && (a !== tr || (f > 0 && 64 & f))
              ? ne(c, t, n, !1, !0)
              : ((a === tr && (128 & f || 256 & f)) || (!o && 16 & u)) &&
                ne(i, t, n),
            64 & u && (r || !Kn(e.props)) && e.type.remove(e, ie),
            r && Q(e)
        }
        ;((h = s && s.onVnodeUnmounted) || p) &&
          Hn(() => {
            h && zn(h, t, e), p && Rn(e, null, t, "unmounted")
          }, n)
      },
      Q = (e) => {
        const { type: t, el: n, anchor: o, transition: a } = e
        if (t === tr) return void ee(n, o)
        if (t === or) return void M(e)
        const s = () => {
          r(n), a && !a.persisted && a.afterLeave && a.afterLeave()
        }
        if (1 & e.shapeFlag && a && !a.persisted) {
          const { leave: t, delayLeave: r } = a,
            o = () => t(n, s)
          r ? r(e.el, s, o) : o()
        } else s()
      },
      ee = (e, t) => {
        let n
        for (; e !== t; ) (n = m(e)), r(e), (e = n)
        r(t)
      },
      te = (e, t, n) => {
        const { bum: r, effects: o, update: a, subTree: s, um: l } = e
        if ((r && q(r), o)) for (let i = 0; i < o.length; i++) Z(o[i])
        a && (Z(a), X(s, e, t, n)),
          l && Hn(l, t),
          Hn(() => {
            e.isUnmounted = !0
          }, t),
          t &&
            t.pendingBranch &&
            !t.isUnmounted &&
            e.asyncDep &&
            !e.asyncResolved &&
            e.suspenseId === t.pendingId &&
            (t.deps--, 0 === t.deps && t.resolve())
      },
      ne = (e, t, n, r = !1, o = !1, a = 0) => {
        for (let s = a; s < e.length; s++) X(e[s], t, n, r, o)
      },
      ae = (e) =>
        6 & e.shapeFlag
          ? ae(e.component.subTree)
          : 128 & e.shapeFlag
          ? e.suspense.next()
          : m(e.anchor || e.el),
      le = (e, t) => {
        null == e
          ? t._vnode && X(t._vnode, null, null, !0)
          : _(t._vnode || null, e, t),
          Lt(),
          (t._vnode = e)
      },
      ie = { p: _, um: X, m: K, r: Q, mt: V, mc: P, pc: G, pbc: O, n: ae, o: e }
    let ce, ue
    t && ([ce, ue] = t(ie))
    return { render: le, hydrate: ce, createApp: jn(le, ce) }
  })(e, In)
}
function zn(e, t, n, r = null) {
  ct(e, t, 7, [n, r])
}
function Yn(e, t, n = !1) {
  const r = e.children,
    o = t.children
  if (w(r) && w(o))
    for (let a = 0; a < r.length; a++) {
      const e = r[a]
      let t = o[a]
      1 & t.shapeFlag &&
        !t.dynamicChildren &&
        ((t.patchFlag <= 0 || 32 === t.patchFlag) &&
          ((t = o[a] = xr(o[a])), (t.el = e.el)),
        n || Yn(e, t))
    }
}
const Kn = (e) => e && (e.disabled || "" === e.disabled)
function Xn(e) {
  return Qn("components", e) || e
}
const Jn = Symbol()
function Zn(e) {
  return M(e) ? Qn("components", e, !1) || e : e || Jn
}
function Qn(e, t, n = !0) {
  const r = jt || Br
  if (r) {
    const n = r.type
    if ("components" === e) {
      if ("_self" === t) return n
      const e = Yr(n)
      if (e && (e === t || e === D(t) || e === V(D(t)))) return n
    }
    return er(r[e] || n[e], t) || er(r.appContext[e], t)
  }
}
function er(e, t) {
  return e && (e[t] || e[D(t)] || e[V(D(t))])
}
const tr = Symbol(void 0),
  nr = Symbol(void 0),
  rr = Symbol(void 0),
  or = Symbol(void 0),
  ar = []
let sr = null
function lr(e = !1) {
  ar.push((sr = e ? null : []))
}
function ir() {
  ar.pop(), (sr = ar[ar.length - 1] || null)
}
function cr(e, t, n, r, o) {
  const a = mr(e, t, n, r, o, !0)
  return (a.dynamicChildren = sr || d), ir(), sr && sr.push(a), a
}
function ur(e) {
  return !!e && !0 === e.__v_isVNode
}
function fr(e, t) {
  return e.type === t.type && e.key === t.key
}
const dr = "__vInternal",
  pr = ({ key: e }) => (null != e ? e : null),
  hr = ({ ref: e }) =>
    null != e ? (M(e) || Ze(e) || C(e) ? { i: jt, r: e } : e) : null,
  mr = function (e, t = null, n = null, r = 0, a = null, s = !1) {
    ;(e && e !== Jn) || (e = rr)
    if (ur(e)) {
      const r = vr(e, t, !0)
      return n && wr(r, n), r
    }
    ;(l = e), C(l) && "__vccOpts" in l && (e = e.__vccOpts)
    var l
    if (t) {
      ;(Ye(t) || dr in t) && (t = b({}, t))
      let { class: e, style: n } = t
      e && !M(e) && (t.class = i(e)),
        S(n) && (Ye(n) && !w(n) && (n = b({}, n)), (t.style = o(n)))
    }
    const c = M(e)
        ? 1
        : ((e) => e.__isSuspense)(e)
        ? 128
        : ((e) => e.__isTeleport)(e)
        ? 64
        : S(e)
        ? 4
        : C(e)
        ? 2
        : 0,
      u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && pr(t),
        ref: t && hr(t),
        scopeId: Kt,
        children: null,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: c,
        patchFlag: r,
        dynamicProps: a,
        dynamicChildren: null,
        appContext: null,
      }
    if ((wr(u, n), 128 & c)) {
      const { content: e, fallback: t } = (function (e) {
        const { shapeFlag: t, children: n } = e
        let r, o
        return (
          32 & t
            ? ((r = Ut(n.default)), (o = Ut(n.fallback)))
            : ((r = Ut(n)), (o = _r(null))),
          { content: r, fallback: o }
        )
      })(u)
      ;(u.ssContent = e), (u.ssFallback = t)
    }
    !s && sr && (r > 0 || 6 & c) && 32 !== r && sr.push(u)
    return u
  }
function vr(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: a, children: s } = e,
    l = t ? kr(r || {}, t) : r
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && pr(l),
    ref:
      t && t.ref ? (n && o ? (w(o) ? o.concat(hr(t)) : [o, hr(t)]) : hr(t)) : o,
    scopeId: e.scopeId,
    children: s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== tr ? (-1 === a ? 16 : 16 | a) : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && vr(e.ssContent),
    ssFallback: e.ssFallback && vr(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  }
}
function gr(e = " ", t = 0) {
  return mr(nr, null, e, t)
}
function br(e, t) {
  const n = mr(or, null, e)
  return (n.staticCount = t), n
}
function yr(e = "", t = !1) {
  return t ? (lr(), cr(rr, null, e)) : mr(rr, null, e)
}
function _r(e) {
  return null == e || "boolean" == typeof e
    ? mr(rr)
    : w(e)
    ? mr(tr, null, e)
    : "object" == typeof e
    ? null === e.el
      ? e
      : vr(e)
    : mr(nr, null, String(e))
}
function xr(e) {
  return null === e.el ? e : vr(e)
}
function wr(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (null == t) t = null
  else if (w(t)) n = 16
  else if ("object" == typeof t) {
    if (1 & r || 64 & r) {
      const n = t.default
      return void (n && (n._c && Wt(1), wr(e, n()), n._c && Wt(-1)))
    }
    {
      n = 32
      const r = t._
      r || dr in t
        ? 3 === r &&
          jt &&
          (1024 & jt.vnode.patchFlag
            ? ((t._ = 2), (e.patchFlag |= 1024))
            : (t._ = 1))
        : (t._ctx = jt)
    }
  } else
    C(t)
      ? ((t = { default: t, _ctx: jt }), (n = 32))
      : ((t = String(t)), 64 & r ? ((n = 16), (t = [gr(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function kr(...e) {
  const t = b({}, e[0])
  for (let n = 1; n < e.length; n++) {
    const r = e[n]
    for (const e in r)
      if ("class" === e)
        t.class !== r.class && (t.class = i([t.class, r.class]))
      else if ("style" === e) t.style = o([t.style, r.style])
      else if (v(e)) {
        const n = t[e],
          o = r[e]
        n !== o && (t[e] = n ? [].concat(n, r[e]) : o)
      } else "" !== e && (t[e] = r[e])
  }
  return t
}
function Er(e, t) {
  if (Br) {
    let n = Br.provides
    const r = Br.parent && Br.parent.provides
    r === n && (n = Br.provides = Object.create(r)), (n[e] = t)
  } else;
}
function Cr(e, t, n = !1) {
  const r = Br || jt
  if (r) {
    const o =
      null == r.parent
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
    if (o && e in o) return o[e]
    if (arguments.length > 1) return n && C(t) ? t() : t
  }
}
let Mr = !1
function $r(e, t, n = [], r = [], o = [], a = !1) {
  const {
      mixins: s,
      extends: l,
      data: i,
      computed: c,
      methods: u,
      watch: d,
      provide: h,
      inject: m,
      components: v,
      directives: g,
      beforeMount: y,
      mounted: _,
      beforeUpdate: x,
      updated: k,
      activated: E,
      deactivated: M,
      beforeDestroy: $,
      beforeUnmount: L,
      destroyed: A,
      unmounted: P,
      render: R,
      renderTracked: O,
      renderTriggered: T,
      errorCaptured: j,
      expose: N,
    } = t,
    D = e.proxy,
    F = e.ctx,
    I = e.appContext.mixins
  if (
    (a && R && e.render === p && (e.render = R),
    a ||
      ((Mr = !0),
      Sr("beforeCreate", "bc", t, e, I),
      (Mr = !1),
      Pr(e, I, n, r, o)),
    l && $r(e, l, n, r, o, !0),
    s && Pr(e, s, n, r, o),
    m)
  )
    if (w(m))
      for (let f = 0; f < m.length; f++) {
        const e = m[f]
        F[e] = Cr(e)
      }
    else
      for (const f in m) {
        const e = m[f]
        S(e) ? (F[f] = Cr(e.from || f, e.default, !0)) : (F[f] = Cr(e))
      }
  if (u)
    for (const f in u) {
      const e = u[f]
      C(e) && (F[f] = e.bind(D))
    }
  if (
    (a
      ? i && n.push(i)
      : (n.length && n.forEach((t) => Rr(e, t, D)), i && Rr(e, i, D)),
    c)
  )
    for (const f in c) {
      const e = c[f],
        t = Kr({
          get: C(e) ? e.bind(D, D) : C(e.get) ? e.get.bind(D, D) : p,
          set: !C(e) && C(e.set) ? e.set.bind(D) : p,
        })
      Object.defineProperty(F, f, {
        enumerable: !0,
        configurable: !0,
        get: () => t.value,
        set: (e) => (t.value = e),
      })
    }
  var V
  if (
    (d && r.push(d),
    !a &&
      r.length &&
      r.forEach((e) => {
        for (const t in e) Or(e[t], F, D, t)
      }),
    h && o.push(h),
    !a &&
      o.length &&
      o.forEach((e) => {
        const t = C(e) ? e.call(D) : e
        Reflect.ownKeys(t).forEach((e) => {
          Er(e, t[e])
        })
      }),
    a &&
      (v && b(e.components || (e.components = b({}, e.type.components)), v),
      g && b(e.directives || (e.directives = b({}, e.type.directives)), g)),
    a || Sr("created", "c", t, e, I),
    y && fn(y.bind(D)),
    _ && dn(_.bind(D)),
    x && pn(x.bind(D)),
    k && hn(k.bind(D)),
    E && Cn(E.bind(D), "a", V),
    M &&
      (function (e, t) {
        Cn(e, "da", t)
      })(M.bind(D)),
    j &&
      ((e, t = Br) => {
        cn("ec", e, t)
      })(j.bind(D)),
    O && bn(O.bind(D)),
    T && gn(T.bind(D)),
    L && mn(L.bind(D)),
    P && vn(P.bind(D)),
    w(N) && !a)
  )
    if (N.length) {
      const t = e.exposed || (e.exposed = rt({}))
      N.forEach((e) => {
        t[e] = st(D, e)
      })
    } else e.exposed || (e.exposed = f)
}
function Sr(e, t, n, r, o) {
  Ar(e, t, o, r)
  const { extends: a, mixins: s } = n
  a && Lr(e, t, a, r), s && Ar(e, t, s, r)
  const l = n[e]
  l && ct(l.bind(r.proxy), r, t)
}
function Lr(e, t, n, r) {
  n.extends && Lr(e, t, n.extends, r)
  const o = n[e]
  o && ct(o.bind(r.proxy), r, t)
}
function Ar(e, t, n, r) {
  for (let o = 0; o < n.length; o++) {
    const a = n[o].mixins
    a && Ar(e, t, a, r)
    const s = n[o][e]
    s && ct(s.bind(r.proxy), r, t)
  }
}
function Pr(e, t, n, r, o) {
  for (let a = 0; a < t.length; a++) $r(e, t[a], n, r, o, !0)
}
function Rr(e, t, n) {
  const r = t.call(n, n)
  S(r) && (e.data === f ? (e.data = qe(r)) : b(e.data, r))
}
function Or(e, t, n, r) {
  const o = r.includes(".")
    ? (function (e, t) {
        const n = t.split(".")
        return () => {
          let t = e
          for (let e = 0; e < n.length && t; e++) t = t[n[e]]
          return t
        }
      })(n, r)
    : () => n[r]
  if (M(e)) {
    const n = t[e]
    C(n) && _n(o, n)
  } else if (C(e)) _n(o, e.bind(n))
  else if (S(e))
    if (w(e)) e.forEach((e) => Or(e, t, n, r))
    else {
      const r = C(e.handler) ? e.handler.bind(n) : t[e.handler]
      C(r) && _n(o, r, e)
    }
}
function Tr(e, t, n) {
  const r = n.appContext.config.optionMergeStrategies,
    { mixins: o, extends: a } = t
  a && Tr(e, a, n), o && o.forEach((t) => Tr(e, t, n))
  for (const s in t)
    r && x(r, s) ? (e[s] = r[s](e[s], t[s], n.proxy, s)) : (e[s] = t[s])
}
const jr = (e) =>
    e ? (qr(e) ? (e.exposed ? e.exposed : e.proxy) : jr(e.parent)) : null,
  Nr = b(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => jr(e.parent),
    $root: (e) => jr(e.root),
    $emit: (e) => e.emit,
    $options: (e) =>
      (function (e) {
        const t = e.type,
          { __merged: n, mixins: r, extends: o } = t
        if (n) return n
        const a = e.appContext.mixins
        if (!a.length && !r && !o) return t
        const s = {}
        return a.forEach((t) => Tr(s, t, e)), Tr(s, t, e), (t.__merged = s)
      })(e),
    $forceUpdate: (e) => () => Ct(e.update),
    $nextTick: (e) => Et.bind(e.proxy),
    $watch: (e) => wn.bind(e),
  }),
  Dr = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: o,
        props: a,
        accessCache: s,
        type: l,
        appContext: i,
      } = e
      if ("__v_skip" === t) return !0
      let c
      if ("$" !== t[0]) {
        const l = s[t]
        if (void 0 !== l)
          switch (l) {
            case 0:
              return r[t]
            case 1:
              return o[t]
            case 3:
              return n[t]
            case 2:
              return a[t]
          }
        else {
          if (r !== f && x(r, t)) return (s[t] = 0), r[t]
          if (o !== f && x(o, t)) return (s[t] = 1), o[t]
          if ((c = e.propsOptions[0]) && x(c, t)) return (s[t] = 2), a[t]
          if (n !== f && x(n, t)) return (s[t] = 3), n[t]
          Mr || (s[t] = 4)
        }
      }
      const u = Nr[t]
      let d, p
      return u
        ? ("$attrs" === t && ae(e, 0, t), u(e))
        : (d = l.__cssModules) && (d = d[t])
        ? d
        : n !== f && x(n, t)
        ? ((s[t] = 3), n[t])
        : ((p = i.config.globalProperties), x(p, t) ? p[t] : void 0)
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: a } = e
      if (o !== f && x(o, t)) o[t] = n
      else if (r !== f && x(r, t)) r[t] = n
      else if (x(e.props, t)) return !1
      return ("$" !== t[0] || !(t.slice(1) in e)) && ((a[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: o,
          propsOptions: a,
        },
      },
      s
    ) {
      let l
      return (
        void 0 !== n[s] ||
        (e !== f && x(e, s)) ||
        (t !== f && x(t, s)) ||
        ((l = a[0]) && x(l, s)) ||
        x(r, s) ||
        x(Nr, s) ||
        x(o.config.globalProperties, s)
      )
    },
  },
  Fr = b({}, Dr, {
    get(e, t) {
      if (t !== Symbol.unscopables) return Dr.get(e, t, e)
    },
    has: (e, t) => "_" !== t[0] && !n(t),
  }),
  Ir = On()
let Vr = 0
let Br = null
const Ur = (e) => {
  Br = e
}
function qr(e) {
  return 4 & e.vnode.shapeFlag
}
let Hr = !1
function Wr(e, t, n) {
  C(t) ? (e.render = t) : S(t) && (e.setupState = rt(t)), Gr(e)
}
function Gr(e, t) {
  const n = e.type
  e.render ||
    ((e.render = n.render || p),
    e.render._rc && (e.withProxy = new Proxy(e.ctx, Fr))),
    (Br = e),
    re(),
    $r(e, n),
    oe(),
    (Br = null)
}
function zr(e, t = Br) {
  t && (t.effects || (t.effects = [])).push(e)
}
function Yr(e) {
  return (C(e) && e.displayName) || e.name
}
function Kr(e) {
  const t = (function (e) {
    let t, n
    return (
      C(e) ? ((t = e), (n = p)) : ((t = e.get), (n = e.set)),
      new lt(t, n, C(e) || !e.set)
    )
  })(e)
  return zr(t.effect), t
}
function Xr(e, t, n) {
  const r = arguments.length
  return 2 === r
    ? S(t) && !w(t)
      ? ur(t)
        ? mr(e, null, [t])
        : mr(e, t)
      : mr(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : 3 === r && ur(n) && (n = [n]),
      mr(e, t, n))
}
function Jr(e, t) {
  let n
  if (w(e) || M(e)) {
    n = new Array(e.length)
    for (let r = 0, o = e.length; r < o; r++) n[r] = t(e[r], r)
  } else if ("number" == typeof e) {
    n = new Array(e)
    for (let r = 0; r < e; r++) n[r] = t(r + 1, r)
  } else if (S(e))
    if (e[Symbol.iterator]) n = Array.from(e, t)
    else {
      const r = Object.keys(e)
      n = new Array(r.length)
      for (let o = 0, a = r.length; o < a; o++) {
        const a = r[o]
        n[o] = t(e[a], a, o)
      }
    }
  else n = []
  return n
}
const Zr = "3.0.6",
  Qr = "http://www.w3.org/2000/svg",
  eo = "undefined" != typeof document ? document : null
let to, no
const ro = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null)
  },
  remove: (e) => {
    const t = e.parentNode
    t && t.removeChild(e)
  },
  createElement: (e, t, n) =>
    t ? eo.createElementNS(Qr, e) : eo.createElement(e, n ? { is: n } : void 0),
  createText: (e) => eo.createTextNode(e),
  createComment: (e) => eo.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t
  },
  setElementText: (e, t) => {
    e.textContent = t
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => eo.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "")
  },
  cloneNode: (e) => e.cloneNode(!0),
  insertStaticContent(e, t, n, r) {
    const o = r
      ? no || (no = eo.createElementNS(Qr, "svg"))
      : to || (to = eo.createElement("div"))
    o.innerHTML = e
    const a = o.firstChild
    let s = a,
      l = s
    for (; s; ) (l = s), ro.insert(s, t, n), (s = o.firstChild)
    return [a, l]
  },
}
const oo = /\s*!important$/
function ao(e, t, n) {
  if (w(n)) n.forEach((n) => ao(e, t, n))
  else if (t.startsWith("--")) e.setProperty(t, n)
  else {
    const r = (function (e, t) {
      const n = lo[t]
      if (n) return n
      let r = D(t)
      if ("filter" !== r && r in e) return (lo[t] = r)
      r = V(r)
      for (let o = 0; o < so.length; o++) {
        const n = so[o] + r
        if (n in e) return (lo[t] = n)
      }
      return t
    })(e, t)
    oo.test(n)
      ? e.setProperty(I(r), n.replace(oo, ""), "important")
      : (e[r] = n)
  }
}
const so = ["Webkit", "Moz", "ms"],
  lo = {}
const io = "http://www.w3.org/1999/xlink"
let co = Date.now
"undefined" != typeof document &&
  co() > document.createEvent("Event").timeStamp &&
  (co = () => performance.now())
let uo = 0
const fo = Promise.resolve(),
  po = () => {
    uo = 0
  }
function ho(e, t, n, r, o = null) {
  const a = e._vei || (e._vei = {}),
    s = a[t]
  if (r && s) s.value = r
  else {
    const [n, l] = (function (e) {
      let t
      if (mo.test(e)) {
        let n
        for (t = {}; (n = e.match(mo)); )
          (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0)
      }
      return [I(e.slice(2)), t]
    })(t)
    if (r) {
      !(function (e, t, n, r) {
        e.addEventListener(t, n, r)
      })(
        e,
        n,
        (a[t] = (function (e, t) {
          const n = (e) => {
            ;(e.timeStamp || co()) >= n.attached - 1 &&
              ct(
                (function (e, t) {
                  if (w(t)) {
                    const n = e.stopImmediatePropagation
                    return (
                      (e.stopImmediatePropagation = () => {
                        n.call(e), (e._stopped = !0)
                      }),
                      t.map((e) => (t) => !t._stopped && e(t))
                    )
                  }
                  return t
                })(e, n.value),
                t,
                5,
                [e]
              )
          }
          return (
            (n.value = e),
            (n.attached = (() => uo || (fo.then(po), (uo = co())))()),
            n
          )
        })(r, o)),
        l
      )
    } else
      s &&
        (!(function (e, t, n, r) {
          e.removeEventListener(t, n, r)
        })(e, n, s, l),
        (a[t] = void 0))
  }
}
const mo = /(?:Once|Passive|Capture)$/
const vo = /^on[a-z]/
const go = b(
  {
    patchProp: (e, t, n, o, a = !1, s, l, i, c) => {
      switch (t) {
        case "class":
          !(function (e, t, n) {
            if ((null == t && (t = ""), n)) e.setAttribute("class", t)
            else {
              const n = e._vtc
              n && (t = (t ? [t, ...n] : [...n]).join(" ")), (e.className = t)
            }
          })(e, o, a)
          break
        case "style":
          !(function (e, t, n) {
            const r = e.style
            if (n)
              if (M(n)) t !== n && (r.cssText = n)
              else {
                for (const e in n) ao(r, e, n[e])
                if (t && !M(t)) for (const e in t) null == n[e] && ao(r, e, "")
              }
            else e.removeAttribute("style")
          })(e, n, o)
          break
        default:
          v(t)
            ? g(t) || ho(e, t, 0, o, l)
            : (function (e, t, n, r) {
                if (r)
                  return "innerHTML" === t || !!(t in e && vo.test(t) && C(n))
                if ("spellcheck" === t || "draggable" === t) return !1
                if ("form" === t) return !1
                if ("list" === t && "INPUT" === e.tagName) return !1
                if ("type" === t && "TEXTAREA" === e.tagName) return !1
                if (vo.test(t) && M(n)) return !1
                return t in e
              })(e, t, o, a)
            ? (function (e, t, n, r, o, a, s) {
                if ("innerHTML" === t || "textContent" === t)
                  return r && s(r, o, a), void (e[t] = null == n ? "" : n)
                if ("value" !== t || "PROGRESS" === e.tagName) {
                  if ("" === n || null == n) {
                    const r = typeof e[t]
                    if ("" === n && "boolean" === r) return void (e[t] = !0)
                    if (null == n && "string" === r)
                      return (e[t] = ""), void e.removeAttribute(t)
                    if ("number" === r)
                      return (e[t] = 0), void e.removeAttribute(t)
                  }
                  try {
                    e[t] = n
                  } catch (l) {}
                } else {
                  e._value = n
                  const t = null == n ? "" : n
                  e.value !== t && (e.value = t)
                }
              })(e, t, o, s, l, i, c)
            : ("true-value" === t
                ? (e._trueValue = o)
                : "false-value" === t && (e._falseValue = o),
              (function (e, t, n, o) {
                if (o && t.startsWith("xlink:"))
                  null == n
                    ? e.removeAttributeNS(io, t.slice(6, t.length))
                    : e.setAttributeNS(io, t, n)
                else {
                  const o = r(t)
                  null == n || (o && !1 === n)
                    ? e.removeAttribute(t)
                    : e.setAttribute(t, o ? "" : n)
                }
              })(e, t, o, a))
      }
    },
    forcePatchProp: (e, t) => "value" === t,
  },
  ro
)
let bo,
  yo = !1
const _o = (...e) => {
  const t = ((bo = yo ? bo : Gn(go)), (yo = !0), bo).createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (e) => {
      const t = (function (e) {
        if (M(e)) {
          return document.querySelector(e)
        }
        return e
      })(e)
      if (t) return n(t, !0)
    }),
    t
  )
}
const xo = "undefined" != typeof window
function wo(e, t) {
  return `${e}${t}`.replace(/\/+/g, "/")
}
function ko(e) {
  let t = e.replace(/\.html$/, "")

  if (t.includes("ripple")) {
    t = '/examples/demos/7'
  }
  
  if ((t.endsWith("/") && (t += "index"), xo)) {
    const e = "/"
    t = t.slice(e.length).replace(/\//g, "_") + ".md"
    const n = __VP_HASH_MAP__[t.toLowerCase()]

    t = `${e}ripple/assets/${t}.${n}.js`
  } else t = `./${t.slice(1).replace(/\//g, "_")}.md.js`

  return t
}
const Eo = Symbol()
function Co() {
  return (function () {
    const e = Cr(Eo)
    if (!e) throw new Error("useRouter() is called without provider.")
    return e
  })().route
}
function Mo(e, t, n = !1) {
  const r = document.querySelector(".nav-bar").offsetHeight,
    o = e.classList.contains(".header-anchor")
      ? e
      : document.querySelector(decodeURIComponent(t))
  if (o) {
    const e = o.offsetTop - r - 15
    !n || Math.abs(e - window.scrollY) > window.innerHeight
      ? window.scrollTo(0, e)
      : window.scrollTo({ left: 0, top: e, behavior: "smooth" })
  }
}
const $o = Vn({
    name: "VitePressContent",
    setup() {
      const e = Co()
      return () => (e.component ? Xr(e.component) : null)
    },
  }),
  So = Vn({
    setup(e, { slots: t }) {
      const n = Qe(!1)
      return (
        dn(() => {
          n.value = !0
        }),
        () => (n.value && t.default ? t.default() : null)
      )
    },
  })
const Lo = Qe(
  ((Ao =
    '{"lang":"en-US","title":"TroisJS","description":"TroisJS examples and documentation","base":"/","head":[["meta",{"name":"author","content":"Kevin Levron"}],["meta",{"name":"keywords","content":"threejs, vuejs, vitejs, webgl, troisjs"}]],"themeConfig":{"repo":"troisjs/trois","docsRepo":"troisjs/troisjs.github.io","docsDir":"src","editLinks":true,"nav":[{"text":"Examples","link":"/examples/demos/1","activeMatch":"^/examples/"},{"text":"Documentation","link":"/guide/"},{"text":"CodePen","link":"https://codepen.io/collection/AxoWoz"},{"text":"GitHub","link":"https://github.com/troisjs/trois"}],"sidebar":{"/examples/":[{"text":"Demos","children":[{"link":"/examples/demos/1","text":"Demo 1"},{"link":"/examples/demos/2","text":"Demo 2"},{"link":"/examples/demos/3","text":"Demo 3"},{"link":"/examples/demos/4","text":"Demo 4"},{"link":"/examples/demos/5","text":"Demo 5"},{"link":"/examples/demos/6","text":"Demo 6"},{"link":"/examples/demos/7","text":"Demo 7"}]},{"text":"Lights","link":"/examples/lights"},{"text":"Materials","children":[{"link":"/examples/materials/1","text":"Textures"},{"link":"/examples/materials/2","text":"SubSurface"},{"link":"/examples/materials/3","text":"Matcap"}]},{"text":"Meshes","link":"/examples/meshes"},{"text":"Models","children":[{"link":"/examples/models/fbx","text":"FBX"},{"link":"/examples/models/gltf","text":"GLTF"}]},{"text":"Physics","children":[{"link":"/examples/physics/1","text":"Demo 1"},{"link":"/examples/physics/2","text":"Demo 2"}]},{"text":"Shadows","link":"/examples/shadows"},{"text":"Loop (v-for)","link":"/examples/loop"},{"text":"Events","link":"/examples/events"},{"text":"Sliders","children":[{"link":"/examples/sliders/1","text":"Slider 1"},{"link":"/examples/sliders/2","text":"Slider 2"}]}],"/guide/":[{"text":"Introduction","link":"/guide/","children":[{"link":"/guide/install","text":"Installation"},{"link":"/guide/cdn","text":"CDN"},{"link":"/guide/hmr","text":"HMR"},{"link":"/guide/faq","text":"FAQ"},{"link":"/guide/dev","text":"Contribute"}]},{"link":"/guide/core/","text":"Core","children":[{"link":"/guide/core/renderer","text":"Renderer"},{"link":"/guide/core/camera","text":"Camera"},{"link":"/guide/core/scene","text":"Scene"},{"link":"/guide/core/raf","text":"Render loop"}]},{"text":"Features","children":[{"link":"/guide/lights/","text":"Lights"},{"text":"Materials","link":"/guide/materials/","children":[{"link":"/guide/materials/basic-material","text":"BasicMaterial"},{"link":"/guide/materials/lambert-material","text":"LambertMaterial"},{"link":"/guide/materials/matcap-material","text":"MatcapMaterial"},{"link":"/guide/materials/phong-material","text":"PhongMaterial"},{"link":"/guide/materials/physical-material","text":"PhysicalMaterial"},{"link":"/guide/materials/shader-material","text":"ShaderMaterial"},{"link":"/guide/materials/standard-material","text":"StandardMaterial"},{"link":"/guide/materials/sub-surface-material","text":"SubSurfaceMaterial"},{"link":"/guide/materials/toon-material","text":"ToonMaterial"}]},{"text":"Meshes","link":"/guide/meshes/","children":[{"link":"/guide/meshes/events","text":"Events"},{"link":"/guide/meshes/geometries","text":"Geometries"},{"link":"/guide/meshes/groups","text":"Groups"},{"link":"/guide/meshes/instanced","text":"InstancedMesh"}]},{"text":"Models","link":"/guide/models/"},{"link":"/guide/postprocessing/","text":"Postprocessing"},{"link":"/guide/shadows","text":"Shadows"},{"text":"Textures","link":"/guide/textures/texture","children":[{"link":"/guide/textures/cube-texture","text":"CubeTexture"}]},{"text":"Directives","children":[{"link":"/guide/directives/v-for","text":"v-for"}]}]},{"link":"/guide/extras/","text":"Extras","children":[{"link":"/guide/extras/vrbutton","text":"VR-Button"}]}]}},"locales":{},"customData":{}}'),
  He(JSON.parse(Ao)))
)
var Ao
function Po() {
  return Lo
}
const Ro = "undefined" != typeof window
function Oo(e, t) {
  const n = (function (e, t) {
    t.sort((e, t) => {
      const n = t.split("/").length - e.split("/").length
      return 0 !== n ? n : t.length - e.length
    })
    for (const n of t) if (e.startsWith(n)) return n
  })(t, Object.keys(e))
  return n ? e[n] : void 0
}
function To(t, n) {
  n = (function (e, t) {
    if (!Ro) return t
    const n = e.base,
      r = n.endsWith("/") ? n.slice(0, -1) : n
    return t.slice(r.length)
  })(t, n)
  const r = Oo(t.locales || {}, n) || {},
    o = Oo((t.themeConfig && t.themeConfig.locales) || {}, n) || {}
  return e(e(e({}, t), r), {
    themeConfig: e(e(e({}, t.themeConfig), o), { locales: {} }),
    locales: {},
  })
}
function jo(e) {
  const t = e || Co()
  return Kr(() => To(Lo.value, t.path))
}
function No(e) {
  const t = e || Co()
  return Kr(() => t.data)
}
function Do(e, t) {
  const n = Array.from(document.querySelectorAll("meta"))
  let r = !0
  const o = (e) => {
    r
      ? (r = !1)
      : (n.forEach((e) => document.head.removeChild(e)),
        (n.length = 0),
        e &&
          e.length &&
          e.forEach((e) => {
            const t = (function ([e, t, n]) {
              const r = document.createElement(e)
              for (const o in t) r.setAttribute(o, t[o])
              n && (r.innerHTML = n)
              return r
            })(e)
            document.head.appendChild(t), n.push(t)
          }))
  }
  var a
  xn(
    () => {
      const n = e.data,
        r = t.value,
        a = n && n.title,
        s = n && n.description,
        l = n && n.frontmatter.head
      var i
      ;(document.title = (a ? a + " | " : "") + r.title),
        o([
          ["meta", { charset: "utf-8" }],
          [
            "meta",
            { name: "viewport", content: "width=device-width,initial-scale=1" },
          ],
          ["meta", { name: "description", content: s || r.description }],
          ...r.head,
          ...((l &&
            ((i = l),
            i.filter((e) => {
              return !(
                "meta" === (t = e)[0] &&
                t[1] &&
                "description" === t[1].name
              )
              var t
            }))) ||
            []),
        ])
    },
    null,
    a
  )
}
function Fo() {
  const e = No()
  return Kr(() => e.value.frontmatter)
}
const Io = Qt("data-v-6e0ba27d")
Jt("data-v-6e0ba27d")
const Vo = mr("p", { class: "title" }, "Debug", -1),
  Bo = { class: "block" },
  Uo = { class: "block" },
  qo = { class: "block" }
Zt()
Vn({
  expose: [],
  setup(e) {
    const t = Qe(null),
      n = Qe(!1)
    return (
      _n(n, (e) => {
        !1 === e && (t.value.scrollTop = 0)
      }),
      Io(
        (e, r) => (
          lr(),
          cr(
            "div",
            {
              class: ["debug", { open: n.value }],
              ref: t,
              onClick: r[1] || (r[1] = (e) => (n.value = !n.value)),
            },
            [
              Vo,
              mr("pre", Bo, "$page " + c(e.$page), 1),
              mr("pre", Uo, "$siteByRoute " + c(e.$siteByRoute), 1),
              mr("pre", qo, "$site " + c(e.$site), 1),
            ],
            2
          )
        )
      )
    )
  },
}).__scopeId = "data-v-6e0ba27d"
const Ho = /#.*$/,
  Wo = /(index)?\.(md|html)$/,
  Go = /\/$/,
  zo = /^[a-z]+:/i
function Yo(e) {
  return Array.isArray(e)
}
function Ko(e) {
  return zo.test(e)
}
function Xo(e) {
  return decodeURI(e).replace(Ho, "").replace(Wo, "")
}
function Jo(e) {
  return /^\//.test(e) ? e : `/${e}`
}
function Zo(e) {
  return e.replace(/(index)?(\.(md|html))?$/, "") || "/"
}
function Qo(e) {
  return Yo(e) ? 0 === e.length : !e
}
function ea(e, t) {
  if (
    (function (e) {
      return !1 === e || "auto" === e || Yo(e)
    })(e)
  )
    return e
  t = Jo(t)
  for (const n in e) if (t.startsWith(Jo(n))) return e[n]
  return "auto"
}
function ta(e) {
  return e.reduce(
    (e, t) => (
      t.link && e.push({ text: t.text, link: Zo(t.link) }),
      (function (e) {
        return void 0 !== e.children
      })(t) && (e = [...e, ...ta(t.children)]),
      e
    ),
    []
  )
}
const na = {},
  ra = Qt("data-v-76c79d52")(
    (e, t) => (
      lr(),
      cr(
        "a",
        {
          class: "nav-bar-title",
          href: e.$withBase(e.$localePath),
          "aria-label": `${e.$siteByRoute.title}, back to home`,
        },
        [
          e.$themeConfig.logo
            ? (lr(),
              cr(
                "img",
                {
                  key: 0,
                  class: "logo",
                  src: e.$withBase(e.$themeConfig.logo),
                  alt: "Logo",
                },
                null,
                8,
                ["src"]
              ))
            : yr("v-if", !0),
          gr(" " + c(e.$site.title), 1),
        ],
        8,
        ["href", "aria-label"]
      )
    )
  )
;(na.render = ra), (na.__scopeId = "data-v-76c79d52")
const oa = ["GitHub", "GitLab", "Bitbucket"].map((e) => [e, new RegExp(e, "i")])
function aa() {
  const e = jo()
  return Kr(() => {
    const t = e.value.themeConfig,
      n = t.docsRepo || t.repo
    if (!n) return null
    const r = /^https?:/.test((o = n)) ? o : `https://github.com/${o}`
    var o
    return {
      text: (function (e, t) {
        if (t) return t
        const n = e.match(/^https?:\/\/[^/]+/)
        if (!n) return "Source"
        const r = oa.find(([e, t]) => t.test(n[0]))
        if (r && r[0]) return r[0]
        return "Source"
      })(r, t.repoLabel),
      link: r,
    }
  })
}
function sa(e) {
  const t = Co(),
    { withBase: n } = (function () {
      const e = Po()
      return {
        withBase: function (t) {
          return wo(e.value.base, t)
        },
      }
    })(),
    r = Ko(e.value.link)
  return {
    props: Kr(() => {
      const o = la(`/${t.data.relativePath}`)
      let a = !1
      if (e.value.activeMatch) a = new RegExp(e.value.activeMatch).test(o)
      else {
        const t = la(n(e.value.link))
        a = "/" === t ? t === o : o.startsWith(t)
      }
      return {
        class: { active: a, isExternal: r },
        href: r ? e.value.link : n(e.value.link),
        target: e.value.target || r ? "_blank" : null,
        rel: e.value.rel || r ? "noopener noreferrer" : null,
        "aria-label": e.value.ariaLabel,
      }
    }),
    isExternal: r,
  }
}
function la(e) {
  return e
    .replace(/#.*$/, "")
    .replace(/\?.*$/, "")
    .replace(/\.(html|md)$/, "")
    .replace(/\/index$/, "/")
}
const ia = {},
  ca = {
    class: "icon outbound",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    width: "15",
    height: "15",
  },
  ua = mr(
    "path",
    {
      fill: "currentColor",
      d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z",
    },
    null,
    -1
  ),
  fa = mr(
    "polygon",
    {
      fill: "currentColor",
      points:
        "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9",
    },
    null,
    -1
  )
ia.render = function (e, t) {
  return lr(), cr("svg", ca, [ua, fa])
}
const da = Qt("data-v-99f6c566")
Jt("data-v-99f6c566")
const pa = { class: "nav-link" }
Zt()
var ha = Vn({
  expose: [],
  props: { item: { type: null, required: !0 } },
  setup(e) {
    const t = ot(e),
      { props: n, isExternal: r } = sa(t.item)
    return da(
      (t, o) => (
        lr(),
        cr("div", pa, [
          mr(
            "a",
            kr({ class: "item" }, tt(n)),
            [
              gr(c(e.item.text) + " ", 1),
              tt(r) ? (lr(), cr(ia, { key: 0 })) : yr("v-if", !0),
            ],
            16
          ),
        ])
      )
    )
  },
})
ha.__scopeId = "data-v-99f6c566"
const ma = Qt("data-v-d552fd76")
Jt("data-v-d552fd76")
const va = { class: "nav-dropdown-link-item" },
  ba = mr("span", { class: "arrow" }, null, -1),
  ya = { class: "text" },
  _a = { class: "icon" }
Zt()
var xa = Vn({
  expose: [],
  props: { item: { type: null, required: !0 } },
  setup(e) {
    const t = ot(e),
      { props: n, isExternal: r } = sa(t.item)
    return ma(
      (t, o) => (
        lr(),
        cr("div", va, [
          mr(
            "a",
            kr({ class: "item" }, tt(n)),
            [
              ba,
              mr("span", ya, c(e.item.text), 1),
              mr("span", _a, [
                tt(r) ? (lr(), cr(ia, { key: 0 })) : yr("v-if", !0),
              ]),
            ],
            16
          ),
        ])
      )
    )
  },
})
xa.__scopeId = "data-v-d552fd76"
const wa = Qt("data-v-517467a8")
Jt("data-v-517467a8")
const ka = { class: "button-text" },
  Ea = { class: "dialog" }
Zt()
var Ca = Vn({
  expose: [],
  props: { item: { type: null, required: !0 } },
  setup(e) {
    const t = Co(),
      n = Qe(!1)
    function r() {
      n.value = !n.value
    }
    return (
      _n(
        () => t.path,
        () => {
          n.value = !1
        }
      ),
      wa(
        (t, o) => (
          lr(),
          cr(
            "div",
            { class: ["nav-dropdown-link", { open: n.value }] },
            [
              mr(
                "button",
                { class: "button", "aria-label": e.item.ariaLabel, onClick: r },
                [
                  mr("span", ka, c(e.item.text), 1),
                  mr(
                    "span",
                    { class: ["button-arrow", n.value ? "down" : "right"] },
                    null,
                    2
                  ),
                ],
                8,
                ["aria-label"]
              ),
              mr("ul", Ea, [
                (lr(!0),
                cr(
                  tr,
                  null,
                  Jr(
                    e.item.items,
                    (e) => (
                      lr(),
                      cr("li", { key: e.text, class: "dialog-item" }, [
                        mr(xa, { item: e }, null, 8, ["item"]),
                      ])
                    )
                  ),
                  128
                )),
              ]),
            ],
            2
          )
        )
      )
    )
  },
})
Ca.__scopeId = "data-v-517467a8"
const Ma = Qt("data-v-f465d38e")
Jt("data-v-f465d38e")
const $a = { key: 0, class: "nav-links" },
  Sa = { key: 1, class: "item" },
  La = { key: 2, class: "item" }
Zt()
var Aa = Vn({
  expose: [],
  setup(e) {
    const t = jo(),
      n = (function () {
        const e = Co(),
          t = Po()
        return Kr(() => {
          const n = t.value.themeConfig.locales
          if (!n) return null
          const r = Object.keys(n)
          if (r.length <= 1) return null
          const o = xo ? t.value.base : "/",
            a = o.endsWith("/") ? o.slice(0, -1) : o,
            s = e.path.slice(a.length),
            l = r.find((e) => "/" !== e && s.startsWith(e)),
            i = l ? s.substring(l.length - 1) : s,
            c = r.map((e) => {
              const t = e.endsWith("/") ? e.slice(0, -1) : e
              return { text: n[e].label, link: `${t}${i}` }
            }),
            u = l || "/"
          return {
            text: n[u].selectText ? n[u].selectText : "Languages",
            items: c,
          }
        })
      })(),
      r = aa(),
      o = Kr(() => a.value || r.value),
      a = Kr(() => t.value.themeConfig.nav)
    return Ma((e, t) =>
      tt(o)
        ? (lr(),
          cr("nav", $a, [
            tt(a)
              ? (lr(!0),
                cr(
                  tr,
                  { key: 0 },
                  Jr(
                    tt(a),
                    (e) => (
                      lr(),
                      cr("div", { key: e.text, class: "item" }, [
                        e.items
                          ? (lr(),
                            cr(Ca, { key: 0, item: e }, null, 8, ["item"]))
                          : (lr(),
                            cr(ha, { key: 1, item: e }, null, 8, ["item"])),
                      ])
                    )
                  ),
                  128
                ))
              : yr("v-if", !0),
            tt(n)
              ? (lr(),
                cr("div", Sa, [mr(Ca, { item: tt(n) }, null, 8, ["item"])]))
              : yr("v-if", !0),
            tt(r)
              ? (lr(),
                cr("div", La, [mr(ha, { item: tt(r) }, null, 8, ["item"])]))
              : yr("v-if", !0),
          ]))
        : yr("v-if", !0)
    )
  },
})
Aa.__scopeId = "data-v-f465d38e"
const Pa = { emits: ["toggle"] },
  Ra = mr(
    "svg",
    {
      class: "icon",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      role: "img",
      viewBox: "0 0 448 512",
    },
    [
      mr("path", {
        fill: "currentColor",
        d: "M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",
        class: "",
      }),
    ],
    -1
  )
Pa.render = function (e, t, n, r, o, a) {
  return (
    lr(),
    cr(
      "div",
      {
        class: "sidebar-button",
        onClick: t[1] || (t[1] = (t) => e.$emit("toggle")),
      },
      [Ra]
    )
  )
}
const Oa = Qt("data-v-6e7c0b86")
Jt("data-v-6e7c0b86")
const Ta = { class: "nav-bar" },
  ja = mr("div", { class: "flex-grow" }, null, -1),
  Na = { class: "nav" }
Zt()
var Da = Vn({
  expose: [],
  emits: ["toggle"],
  setup: (e) =>
    Oa(
      (e, t) => (
        lr(),
        cr("header", Ta, [
          mr(Pa, { onToggle: t[1] || (t[1] = (t) => e.$emit("toggle")) }),
          mr(na),
          ja,
          mr("div", Na, [mr(Aa)]),
          Gt(e.$slots, "search"),
        ])
      )
    ),
})
function Fa() {
  let e = null,
    t = null
  const n = (function (e, t) {
    let n,
      r = !1
    return () => {
      n && clearTimeout(n),
        r
          ? (n = setTimeout(e, t))
          : (e(),
            (r = !0),
            setTimeout(() => {
              r = !1
            }, t))
    }
  })(r, 300)
  function r() {
    const e = (function (e) {
      return [].slice
        .call(document.querySelectorAll(".header-anchor"))
        .filter((t) => e.some((e) => e.hash === t.hash))
    })([].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item")))
    for (let t = 0; t < e.length; t++) {
      const n = e[t],
        r = e[t + 1],
        [a, s] = Va(t, n, r)
      if (a)
        return history.replaceState(null, document.title, s || " "), void o(s)
    }
  }
  function o(n) {
    if (
      (a(t), a(e), (t = document.querySelector(`.sidebar a[href="${n}"]`)), !t)
    )
      return
    t.classList.add("active")
    const r = t.closest(".sidebar-links > ul > li")
    r && r !== t.parentElement
      ? ((e = r.querySelector("a")), e && e.classList.add("active"))
      : (e = null)
  }
  function a(e) {
    e && e.classList.remove("active")
  }
  dn(() => {
    r(), window.addEventListener("scroll", n)
  }),
    hn(() => {
      o(decodeURIComponent(location.hash))
    }),
    vn(() => {
      window.removeEventListener("scroll", n)
    })
}
function Ia(e) {
  const t = document.querySelector(".nav-bar").offsetHeight
  return e.parentElement.offsetTop - t - 15
}
function Va(e, t, n) {
  const r = window.scrollY
  return 0 === e && 0 === r
    ? [!0, null]
    : r < Ia(t)
    ? [!1, null]
    : !n || r < Ia(n)
    ? [!0, decodeURIComponent(t.hash)]
    : [!1, null]
}
function Ba(e, t) {
  const n = []
  if (void 0 === e) return []
  let r
  return (
    e.forEach(({ level: e, title: o, slug: a }) => {
      if (e - 1 > t) return
      const s = { text: o, link: `#${a}` }
      2 === e
        ? ((r = s), n.push(s))
        : r && (r.children || (r.children = [])).push(s)
    }),
    n
  )
}
Da.__scopeId = "data-v-6e7c0b86"
const Ua = (e) => {
  const t = Co(),
    n = Po(),
    r = t.data.headers,
    o = e.item.text,
    a = (function (e, t) {
      if (void 0 === t) return t
      if (t.startsWith("#")) return t
      return (function (e, t) {
        const n = e.endsWith("/"),
          r = t.startsWith("/")
        return n && r ? e.slice(0, -1) + t : n || r ? e + t : `${e}/${t}`
      })(e, t)
    })(n.value.base, e.item.link),
    s = e.item.children,
    l = (function (e, t) {
      return void 0 !== t && Xo(`/${e.data.relativePath}`) === Xo(t)
    })(t, e.item.link),
    i = qa(l, s, r)
  return Xr("li", { class: "sidebar-link" }, [
    Xr(
      a ? "a" : "p",
      { class: { "sidebar-link-item": !0, active: l }, href: a },
      o
    ),
    i,
  ])
}
function qa(e, t, n) {
  return t && t.length > 0
    ? Xr(
        "ul",
        { class: "sidebar-links" },
        t.map((e) => Xr(Ua, { item: e }))
      )
    : e && n
    ? qa(
        !1,
        (function (e) {
          return Ha(
            (function (e) {
              let t
              return (
                (e = e.map((e) => Object.assign({}, e))).forEach((e) => {
                  2 === e.level
                    ? (t = e)
                    : t && (t.children || (t.children = [])).push(e)
                }),
                e.filter((e) => 2 === e.level)
              )
            })(e)
          )
        })(n)
      )
    : null
}
function Ha(e) {
  return e.map((e) => ({
    text: e.title,
    link: `#${e.slug}`,
    children: e.children ? Ha(e.children) : void 0,
  }))
}
const Wa = { key: 0, class: "sidebar-links" }
var Ga = Vn({
  expose: [],
  setup(e) {
    const t = (function () {
      const e = Co(),
        t = jo()
      return (
        Fa(),
        Kr(() => {
          const n = e.data.headers,
            r = e.data.frontmatter.sidebar,
            o = e.data.frontmatter.sidebarDepth
          if (!1 === r) return []
          if ("auto" === r) return Ba(n, o)
          const a = ea(t.value.themeConfig.sidebar, e.data.relativePath)
          return !1 === a ? [] : "auto" === a ? Ba(n, o) : a
        })
      )
    })()
    return (e, n) =>
      tt(t).length > 0
        ? (lr(),
          cr("ul", Wa, [
            (lr(!0),
            cr(
              tr,
              null,
              Jr(
                tt(t),
                (e) => (
                  lr(), cr(tt(Ua), { key: e.text, item: e }, null, 8, ["item"])
                )
              ),
              128
            )),
          ]))
        : yr("v-if", !0)
  },
})
const za = Qt("data-v-58e261f2")
var Ya = Vn({
  expose: [],
  props: { open: { type: Boolean, required: !0 } },
  setup: (e) =>
    za(
      (t, n) => (
        lr(),
        cr(
          "aside",
          { class: ["sidebar", { open: e.open }] },
          [
            mr(Aa, { class: "nav" }),
            Gt(t.$slots, "sidebar-top"),
            mr(Ga),
            Gt(t.$slots, "sidebar-bottom"),
          ],
          2
        )
      )
    ),
})
Ya.__scopeId = "data-v-58e261f2"
const Ka = /bitbucket.org/
function Xa() {
  const e = jo(),
    t = No()
  return {
    url: Kr(() => {
      const n =
        null == t.value.frontmatter.editLink
          ? e.value.themeConfig.editLinks
          : t.value.frontmatter.editLink
      const {
          repo: r,
          docsDir: o = "",
          docsBranch: a = "master",
          docsRepo: s = r,
        } = e.value.themeConfig,
        { relativePath: l } = t.value
      return n && l && r
        ? (function (e, t, n, r, o) {
            return Ka.test(e)
              ? (function (e, t, n, r, o) {
                  return (
                    (Ko(t) ? t : e).replace(Go, "") +
                    `/src/${r}/` +
                    (n ? n.replace(Go, "") + "/" : "") +
                    o +
                    `?mode=edit&spa=0&at=${r}&fileviewer=file-view-default`
                  )
                })(e, t, n, r, o)
              : (function (e, t, n, r, o) {
                  return (
                    (Ko(t) ? t : `https://github.com/${t}`).replace(Go, "") +
                    `/edit/${r}/` +
                    (n ? n.replace(Go, "") + "/" : "") +
                    o
                  )
                })(0, t, n, r, o)
          })(r, s, o, a, l)
        : null
    }),
    text: Kr(() => e.value.themeConfig.editLinkText || "Edit this page"),
  }
}
const Ja = Qt("data-v-fb0131f2")
Jt("data-v-fb0131f2")
const Za = { class: "edit-link" }
Zt()
var Qa = Vn({
  expose: [],
  setup(e) {
    const { url: t, text: n } = Xa()
    return Ja(
      (e, r) => (
        lr(),
        cr("div", Za, [
          tt(t)
            ? (lr(),
              cr(
                "a",
                {
                  key: 0,
                  class: "link",
                  href: tt(t),
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                [gr(c(tt(n)) + " ", 1), mr(ia, { class: "icon" })],
                8,
                ["href"]
              ))
            : yr("v-if", !0),
        ])
      )
    )
  },
})
Qa.__scopeId = "data-v-fb0131f2"
const es = Qt("data-v-52854a16")
Jt("data-v-52854a16")
const ts = { key: 0, class: "last-updated" },
  ns = { class: "prefix" },
  rs = { class: "datetime" }
Zt()
var os = Vn({
  expose: [],
  setup(e) {
    const t = jo(),
      n = No(),
      r = Kr(() => {
        const e = t.value.themeConfig.lastUpdated
        return void 0 !== e && !1 !== e
      }),
      o = Kr(() => {
        const e = t.value.themeConfig.lastUpdated
        return !0 === e ? "Last Updated" : e
      }),
      a = Qe("")
    return (
      dn(() => {
        a.value = new Date(n.value.lastUpdated).toLocaleString("en-US")
      }),
      es((e, t) =>
        tt(r)
          ? (lr(),
            cr("p", ts, [
              mr("span", ns, c(tt(o)) + ":", 1),
              mr("span", rs, c(a.value), 1),
            ]))
          : yr("v-if", !0)
      )
    )
  },
})
os.__scopeId = "data-v-52854a16"
const as = Qt("data-v-5a019cc9")
Jt("data-v-5a019cc9")
const ss = { class: "page-footer" },
  ls = { class: "edit" },
  is = { class: "updated" }
Zt()
var cs = Vn({
  expose: [],
  setup: (e) =>
    as(
      (e, t) => (
        lr(),
        cr("footer", ss, [mr("div", ls, [mr(Qa)]), mr("div", is, [mr(os)])])
      )
    ),
})
function us() {
  const e = jo(),
    t = No(),
    n = Kr(() => Zo(Jo(t.value.relativePath))),
    r = Kr(() => {
      const t = ea(e.value.themeConfig.sidebar, n.value)
      return Yo(t) ? ta(t) : []
    }),
    o = Kr(() => r.value.findIndex((e) => e.link === n.value)),
    a = Kr(() => {
      if (
        !1 !== e.value.themeConfig.nextLinks &&
        o.value > -1 &&
        o.value < r.value.length - 1
      )
        return r.value[o.value + 1]
    }),
    s = Kr(() => {
      if (!1 !== e.value.themeConfig.prevLinks && o.value > 0)
        return r.value[o.value - 1]
    }),
    l = Kr(() => !!a.value || !!s.value)
  return { next: a, prev: s, hasLinks: l }
}
cs.__scopeId = "data-v-5a019cc9"
const fs = {},
  ds = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  ps = mr(
    "path",
    {
      d: "M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z",
    },
    null,
    -1
  )
fs.render = function (e, t) {
  return lr(), cr("svg", ds, [ps])
}
const hs = {},
  ms = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  vs = mr(
    "path",
    {
      d: "M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z",
    },
    null,
    -1
  )
hs.render = function (e, t) {
  return lr(), cr("svg", ms, [vs])
}
const gs = Qt("data-v-6683615c")
Jt("data-v-6683615c")
const bs = { key: 0, class: "next-and-prev-link" },
  ys = { class: "container" },
  _s = { class: "prev" },
  xs = { class: "text" },
  ws = { class: "next" },
  ks = { class: "text" }
Zt()
var Es = Vn({
  expose: [],
  setup(e) {
    const { hasLinks: t, prev: n, next: r } = us()
    return gs((e, o) =>
      tt(t)
        ? (lr(),
          cr("div", bs, [
            mr("div", ys, [
              mr("div", _s, [
                tt(n)
                  ? (lr(),
                    cr(
                      "a",
                      { key: 0, class: "link", href: e.$withBase(tt(n).link) },
                      [
                        mr(fs, { class: "icon icon-prev" }),
                        mr("span", xs, c(tt(n).text), 1),
                      ],
                      8,
                      ["href"]
                    ))
                  : yr("v-if", !0),
              ]),
              mr("div", ws, [
                tt(r)
                  ? (lr(),
                    cr(
                      "a",
                      { key: 0, class: "link", href: e.$withBase(tt(r).link) },
                      [
                        mr("span", ks, c(tt(r).text), 1),
                        mr(hs, { class: "icon icon-next" }),
                      ],
                      8,
                      ["href"]
                    ))
                  : yr("v-if", !0),
              ]),
            ]),
          ]))
        : yr("v-if", !0)
    )
  },
})
Es.__scopeId = "data-v-6683615c"
const Cs = Qt("data-v-d36a7fda")
Jt("data-v-d36a7fda")
const Ms = { class: "page" },
  $s = { class: "container" },
  Ss = { class: "content" }
Zt()
var Ls = Vn({
  expose: [],
  setup: (e) =>
    Cs((e, t) => {
      const n = Xn("Content")
      return (
        lr(),
        cr("main", Ms, [
          mr("div", $s, [
            Gt(e.$slots, "top"),
            mr("div", Ss, [mr(n)]),
            mr(cs),
            mr(Es),
            Gt(e.$slots, "bottom"),
          ]),
        ])
      )
    }),
})
Ls.__scopeId = "data-v-d36a7fda"
const As = { key: 0, id: "ads-container" }
var Ps = Vn({
  expose: [],
  setup(e) {
    const t = Bn(() => __import__("./Home.4b3eaf94.js")),
      n = () => null,
      r = n,
      o = n,
      a = n,
      s = Co(),
      l = Po(),
      i = jo(),
      c = Kr(() => l.value.themeConfig),
      u = No(),
      f = Kr(() => !!s.data.frontmatter.customLayout),
      d = Kr(() => !!s.data.frontmatter.home),
      p = Kr(() => {
        const { themeConfig: e } = i.value,
          { frontmatter: t } = s.data
        return (
          !1 !== t.navbar &&
          !1 !== e.navbar &&
          (l.value.title || e.logo || e.repo || e.nav)
        )
      }),
      h = Qe(!1),
      m = Kr(() => {
        const { frontmatter: e } = s.data
        if (e.home || !1 === e.sidebar) return !1
        const { themeConfig: t } = i.value
        return !Qo(ea(t.sidebar, s.data.relativePath))
      }),
      v = (e) => {
        h.value = "boolean" == typeof e ? e : !h.value
      },
      g = v.bind(null, !1)
    _n(s, g)
    const b = Kr(() => [
      {
        "no-navbar": !p.value,
        "sidebar-open": h.value,
        "no-sidebar": !m.value,
      },
    ])
    return (e, n) => {
      const s = Xn("Content"),
        l = Xn("Debug")
      return (
        lr(),
        cr(
          tr,
          null,
          [
            mr(
              "div",
              { class: ["theme", tt(b)] },
              [
                tt(p)
                  ? (lr(),
                    cr(
                      Da,
                      { key: 0, onToggle: v },
                      {
                        search: Yt(() => [
                          Gt(e.$slots, "navbar-search", {}, () => [
                            tt(c).algolia
                              ? (lr(),
                                cr(
                                  tt(a),
                                  { key: 0, options: tt(c).algolia },
                                  null,
                                  8,
                                  ["options"]
                                ))
                              : yr("v-if", !0),
                          ]),
                        ]),
                        _: 1,
                      }
                    ))
                  : yr("v-if", !0),
                mr(
                  Ya,
                  { open: h.value },
                  {
                    "sidebar-top": Yt(() => [Gt(e.$slots, "sidebar-top")]),
                    "sidebar-bottom": Yt(() => [
                      Gt(e.$slots, "sidebar-bottom"),
                    ]),
                    _: 1,
                  },
                  8,
                  ["open"]
                ),
                yr(" TODO: make this button accessible "),
                mr("div", {
                  class: "sidebar-mask",
                  onClick: n[1] || (n[1] = (e) => v(!1)),
                }),
                tt(f)
                  ? (lr(), cr(s, { key: 1 }))
                  : tt(d)
                  ? (lr(),
                    cr(
                      tt(t),
                      { key: 2 },
                      {
                        hero: Yt(() => [Gt(e.$slots, "home-hero")]),
                        features: Yt(() => [Gt(e.$slots, "home-features")]),
                        footer: Yt(() => [Gt(e.$slots, "home-footer")]),
                        _: 1,
                      }
                    ))
                  : (lr(),
                    cr(
                      Ls,
                      { key: 3 },
                      {
                        top: Yt(() => [
                          Gt(e.$slots, "page-top-ads", {}, () => [
                            tt(c).carbonAds && tt(c).carbonAds.carbon
                              ? (lr(),
                                cr("div", As, [
                                  mr(
                                    tt(r),
                                    {
                                      key: "carbon" + tt(u).relativePath,
                                      code: tt(c).carbonAds.carbon,
                                      placement: tt(c).carbonAds.placement,
                                    },
                                    null,
                                    8,
                                    ["code", "placement"]
                                  ),
                                ]))
                              : yr("v-if", !0),
                          ]),
                          Gt(e.$slots, "page-top"),
                        ]),
                        bottom: Yt(() => [
                          Gt(e.$slots, "page-bottom"),
                          Gt(e.$slots, "page-bottom-ads", {}, () => [
                            tt(c).carbonAds && tt(c).carbonAds.custom
                              ? (lr(),
                                cr(
                                  tt(o),
                                  {
                                    key: "custom" + tt(u).relativePath,
                                    code: tt(c).carbonAds.custom,
                                    placement: tt(c).carbonAds.placement,
                                  },
                                  null,
                                  8,
                                  ["code", "placement"]
                                ))
                              : yr("v-if", !0),
                          ]),
                        ]),
                        _: 1,
                      }
                    )),
              ],
              2
            ),
            mr(l),
          ],
          64
        )
      )
    }
  },
})
const Rs = { class: "theme" },
  Os = mr("h1", null, "404", -1)
const Ts = {
  Layout: Ps,
  NotFound: Vn({
    expose: [],
    setup(e) {
      const t = [
        "There's nothing here.",
        "How did we get here?",
        "That's a Four-Oh-Four.",
        "Looks like we've got some broken links.",
      ]
      return (e, n) => (
        lr(),
        cr("div", Rs, [
          Os,
          mr("blockquote", null, c(t[Math.floor(Math.random() * t.length)]), 1),
          mr(
            "a",
            { href: e.$site.base, "aria-label": "go to home" },
            "Take me home.",
            8,
            ["href"]
          ),
        ])
      )
    },
  }),
}
let js
const Ns = {},
  Ds = function (e, t) {
    if (!t) return e()
    if (void 0 === js) {
      const e = document.createElement("link").relList
      js =
        e && e.supports && e.supports("modulepreload")
          ? "modulepreload"
          : "preload"
    }
    return Promise.all(
      t.map((e) => {
        if (e in Ns) return
        Ns[e] = !0
        const t = e.endsWith(".css"),
          n = t ? '[rel="stylesheet"]' : ""
        if (document.querySelector(`link[href="${e}"]${n}`)) return
        const r = document.createElement("link")
        return (
          (r.rel = t ? "stylesheet" : js),
          t || ((r.as = "script"), (r.crossOrigin = "")),
          (r.href = e),
          document.head.appendChild(r),
          t
            ? new Promise((e, t) => {
                r.addEventListener("load", e), r.addEventListener("error", t)
              })
            : void 0
        )
      })
    ).then(() => e())
  }
const Fs = mr("img", { src: "/ripple/assets/source.svg" }, null, -1)
var Is = Vn({
  expose: [],
  setup(e) {
    const t = Bn(() => Ds(() => __import__("./Home.4b3eaf94.js"), void 0)),
      n = Co(),
      r = Po(),
      o = jo()
    Kr(() => r.value.themeConfig), No()
    const a = Kr(() => !!n.data.frontmatter.customLayout),
      s = Kr(() => !!n.data.frontmatter.home),
      l = Kr(() => n.path.match(/examples/)),
      i = Kr(() => n.data.frontmatter.source),
      c = Kr(() => {
        const { themeConfig: e } = o.value,
          { frontmatter: t } = n.data
        return (
          !1 !== t.navbar &&
          !1 !== e.navbar &&
          (r.value.title || e.logo || e.repo || e.nav)
        )
      }),
      u = Qe(!1),
      f = Kr(() => {
        const { frontmatter: e } = n.data
        if (e.home || !1 === e.sidebar) return !1
        const { themeConfig: t } = o.value
        return !Qo(ea(t.sidebar, n.data.relativePath))
      }),
      d = (e) => {
        u.value = "boolean" == typeof e ? e : !u.value
      },
      p = d.bind(null, !1)
    _n(n, () => {
      p(), r.$ga("set", "page", n.path), r.$ga("send", "pageview")
    })
    const h = Kr(() => [
      {
        "no-navbar": !c.value,
        "sidebar-open": u.value,
        "no-sidebar": !f.value,
        custom: a,
      },
    ])
    return (e, n) => {
      const r = Xn("Content"),
        o = Xn("Debug")
      return (
        lr(),
        cr(
          tr,
          null,
          [
            mr(
              "div",
              { class: ["theme", tt(h)] },
              [
                tt(c)
                  ? (lr(), cr(Da, { key: 0, onToggle: d }))
                  : yr("v-if", !0),
                mr(
                  Ya,
                  { open: u.value },
                  {
                    "sidebar-top": Yt(() => [Gt(e.$slots, "sidebar-top")]),
                    "sidebar-bottom": Yt(() => [
                      Gt(e.$slots, "sidebar-bottom"),
                    ]),
                    _: 1,
                  },
                  8,
                  ["open"]
                ),
                mr("div", {
                  class: "sidebar-mask",
                  onClick: n[1] || (n[1] = (e) => d(!1)),
                }),
                tt(a)
                  ? (lr(), cr(r, { key: 1, class: "page" }))
                  : tt(s)
                  ? (lr(),
                    cr(
                      tt(t),
                      { key: 2 },
                      {
                        hero: Yt(() => [Gt(e.$slots, "home-hero")]),
                        features: Yt(() => [Gt(e.$slots, "home-features")]),
                        footer: Yt(() => [Gt(e.$slots, "home-footer")]),
                        _: 1,
                      }
                    ))
                  : (lr(),
                    cr(Ls, { key: 3, class: { examples: tt(l) } }, null, 8, [
                      "class",
                    ])),
                tt(i)
                  ? (lr(),
                    cr(
                      "a",
                      {
                        key: 4,
                        target: "_blank",
                        class: "btn-src",
                        href: tt(i),
                      },
                      [Fs],
                      8,
                      ["href"]
                    ))
                  : yr("v-if", !0),
              ],
              2
            ),
            mr(o),
          ],
          64
        )
      )
    }
  },
})
const Vs = {
  props: ["folder", "component"],
  setup: (e) => ({
    AsyncComponent: Bn(() =>
      (function (e) {
        switch (e) {
          case "./components/demos/Demo1.vue":
            return Ds(
              () => __import__("./Demo1.ea0cb3fb.js"),
              [
                "/ripple/assets/Demo1.ea0cb3fb.js",
                "/ripple/assets/trois.module.b64db74f.js",
                "/ripple/assets/snoise2.glsl.06b34688.js",
              ]
            )
          case "./components/demos/Demo2.vue":
            return Ds(
              () => __import__("./Demo2.836d891c.js"),
              [
                "/ripple/assets/Demo2.836d891c.js",
                "/ripple/assets/trois.module.b64db74f.js",
                "/ripple/assets/snoise2.glsl.06b34688.js",
              ]
            )
          case "./components/demos/Demo3.vue":
            return Ds(
              () => __import__("./Demo3.e1be2da1.js"),
              ["/ripple/assets/Demo3.e1be2da1.js", "/ripple/assets/trois.module.b64db74f.js"]
            )
          case "./components/demos/Demo4.vue":
            return Ds(
              () => __import__("./Demo4.ef5a6b30.js"),
              ["/ripple/assets/Demo4.ef5a6b30.js", "/ripple/assets/trois.module.b64db74f.js"]
            )
          case "./components/demos/Demo5.vue":
            return Ds(
              () => __import__("./Demo5.ee55b5a1.js"),
              [
                "/ripple/assets/Demo5.ee55b5a1.js",
                "/ripple/assets/trois.module.b64db74f.js",
                "/ripple/assets/simplex-noise.ac12df8c.js",
              ]
            )
          case "./components/demos/Demo6.vue":
            return Ds(
              () => __import__("./Demo6.7620ed17.js"),
              [
                "/ripple/assets/Demo6.7620ed17.js",
                "/ripple/assets/trois.module.b64db74f.js",
                "/ripple/assets/simplex-noise.ac12df8c.js",
              ]
            )
          case "./components/demos/Demo7.vue":
            return Ds(
              () => __import__("./Demo7.e98226ba.js"),
              [
                "/ripple/assets/Demo7.e98226ba.js",
                "/ripple/assets/trois.module.b64db74f.js",
                "/ripple/assets/tweakpane.53af3c4b.js",
              ]
            )
          case "./components/materials/Matcap.vue":
            return Ds(
              () => __import__("./Matcap.6ac6e810.js"),
              ["/ripple/assets/Matcap.6ac6e810.js", "/ripple/assets/trois.module.b64db74f.js"]
            )
          case "./components/materials/SubSurface.vue":
            return Ds(
              () => __import__("./SubSurface.1f1d6931.js"),
              [
                "/ripple/assets/SubSurface.1f1d6931.js",
                "/ripple/assets/trois.module.b64db74f.js",
              ]
            )
          case "./components/materials/Textures.vue":
            return Ds(
              () => __import__("./Textures.53c6bcc6.js"),
              [
                "/ripple/assets/Textures.53c6bcc6.js",
                "/ripple/assets/trois.module.b64db74f.js",
              ]
            )
          case "./components/misc/EventsExample.vue":
            return Ds(
              () => __import__("./EventsExample.38a707fd.js"),
              [
                "/ripple/assets/EventsExample.38a707fd.js",
                "/ripple/assets/trois.module.b64db74f.js",
              ]
            )
          case "./components/misc/LightExample.vue":
            return Ds(
              () => __import__("./LightExample.80edbe9a.js"),
              [
                "/ripple/assets/LightExample.80edbe9a.js",
                "/ripple/assets/trois.module.b64db74f.js",
              ]
            )
          case "./components/misc/LoopExample.vue":
            return Ds(
              () => __import__("./LoopExample.de5a1f3d.js"),
              [
                "/ripple/assets/LoopExample.de5a1f3d.js",
                "/ripple/assets/trois.module.b64db74f.js",
              ]
            )
          case "./components/misc/MeshesExample.vue":
            return Ds(
              () => __import__("./MeshesExample.dae2c1e3.js"),
              [
                "/ripple/assets/MeshesExample.dae2c1e3.js",
                "/ripple/assets/tweakpane.53af3c4b.js",
                "/ripple/assets/trois.module.b64db74f.js",
              ]
            )
          case "./components/misc/ShadowsExample.vue":
            return Ds(
              () => __import__("./ShadowsExample.b12b538f.js"),
              [
                "/ripple/assets/ShadowsExample.b12b538f.js",
                "/ripple/assets/trois.module.b64db74f.js",
                "/ripple/assets/simplex-noise.ac12df8c.js",
              ]
            )
          case "./components/models/FBXExample.vue":
            return Ds(
              () => __import__("./FBXExample.fa8c0303.js"),
              [
                "/ripple/assets/FBXExample.fa8c0303.js",
                "/ripple/assets/trois.module.b64db74f.js",
              ]
            )
          case "./components/models/GLTFExample.vue":
            return Ds(
              () => __import__("./GLTFExample.7b52cb2d.js"),
              [
                "/ripple/assets/GLTFExample.7b52cb2d.js",
                "/ripple/assets/trois.module.b64db74f.js",
              ]
            )
          case "./components/physics/Demo1.vue":
            return Ds(
              () => __import__("./Demo1.53120018.js"),
              [
                "/ripple/assets/Demo1.53120018.js",
                "/ripple/assets/trois.module.b64db74f.js",
                "/ripple/assets/100.06a4c9ea.js",
              ]
            )
          case "./components/physics/Demo2.vue":
            return Ds(
              () => __import__("./Demo2.1f91deb5.js"),
              [
                "/ripple/assets/Demo2.1f91deb5.js",
                "/ripple/assets/trois.module.b64db74f.js",
                "/ripple/assets/100.06a4c9ea.js",
              ]
            )
          case "./components/sliders/Slider1.vue":
            return Ds(
              () => __import__("./Slider1.c172becc.js"),
              [
                "/ripple/assets/Slider1.c172becc.js",
                "/ripple/assets/trois.module.b64db74f.js",
                "/ripple/assets/index.25f9ce66.js",
              ]
            )
          case "./components/sliders/Slider2.vue":
            return Ds(
              () => __import__("./Slider2.b00bdd98.js"),
              [
                "/ripple/assets/Slider2.b00bdd98.js",
                "/ripple/assets/trois.module.b64db74f.js",
                "/ripple/assets/index.25f9ce66.js",
              ]
            )
          default:
            return Promise.reject(
              new Error("Unknown variable dynamic import: " + e)
            )
        }
      })(`./components/${e.folder}/${e.component}.vue`)
    ),
  }),
}
Vs.render = function (e, t, n, r, o, a) {
  return lr(), cr(r.AsyncComponent)
}
var Bs =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : {}
function Us(e) {
  var t = { exports: {} }
  return e(t, t.exports), t.exports
}
function qs(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.'
  )
}
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */ var Hs = Us(function (e, t) {
    e.exports = (function () {
      for (
        var e = function (e, t, n) {
            return (
              void 0 === t && (t = 0),
              void 0 === n && (n = 1),
              e < t ? t : e > n ? n : e
            )
          },
          t = function (t) {
            ;(t._clipped = !1), (t._unclipped = t.slice(0))
            for (var n = 0; n <= 3; n++)
              n < 3
                ? ((t[n] < 0 || t[n] > 255) && (t._clipped = !0),
                  (t[n] = e(t[n], 0, 255)))
                : 3 === n && (t[n] = e(t[n], 0, 1))
            return t
          },
          n = {},
          r = 0,
          o = [
            "Boolean",
            "Number",
            "String",
            "Function",
            "Array",
            "Date",
            "RegExp",
            "Undefined",
            "Null",
          ];
        r < o.length;
        r += 1
      ) {
        var a = o[r]
        n["[object " + a + "]"] = a.toLowerCase()
      }
      var s = function (e) {
          return n[Object.prototype.toString.call(e)] || "object"
        },
        l = function (e, t) {
          return (
            void 0 === t && (t = null),
            e.length >= 3
              ? Array.prototype.slice.call(e)
              : "object" == s(e[0]) && t
              ? t
                  .split("")
                  .filter(function (t) {
                    return void 0 !== e[0][t]
                  })
                  .map(function (t) {
                    return e[0][t]
                  })
              : e[0]
          )
        },
        i = function (e) {
          if (e.length < 2) return null
          var t = e.length - 1
          return "string" == s(e[t]) ? e[t].toLowerCase() : null
        },
        c = Math.PI,
        u = {
          clip_rgb: t,
          limit: e,
          type: s,
          unpack: l,
          last: i,
          PI: c,
          TWOPI: 2 * c,
          PITHIRD: c / 3,
          DEG2RAD: c / 180,
          RAD2DEG: 180 / c,
        },
        f = { format: {}, autodetect: [] },
        d = u.last,
        p = u.clip_rgb,
        h = u.type,
        m = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n = this
          if (
            "object" === h(e[0]) &&
            e[0].constructor &&
            e[0].constructor === this.constructor
          )
            return e[0]
          var r = d(e),
            o = !1
          if (!r) {
            ;(o = !0),
              f.sorted ||
                ((f.autodetect = f.autodetect.sort(function (e, t) {
                  return t.p - e.p
                })),
                (f.sorted = !0))
            for (var a = 0, s = f.autodetect; a < s.length; a += 1) {
              var l = s[a]
              if ((r = l.test.apply(l, e))) break
            }
          }
          if (!f.format[r]) throw new Error("unknown format: " + e)
          var i = f.format[r].apply(null, o ? e : e.slice(0, -1))
          ;(n._rgb = p(i)), 3 === n._rgb.length && n._rgb.push(1)
        }
      m.prototype.toString = function () {
        return "function" == h(this.hex)
          ? this.hex()
          : "[" + this._rgb.join(",") + "]"
      }
      var v = m,
        g = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          return new (Function.prototype.bind.apply(
            g.Color,
            [null].concat(e)
          ))()
        }
      ;(g.Color = v), (g.version = "2.1.1")
      var b = g,
        y = u.unpack,
        _ = Math.max,
        x = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n = y(e, "rgb"),
            r = n[0],
            o = n[1],
            a = n[2],
            s = 1 - _((r /= 255), _((o /= 255), (a /= 255))),
            l = s < 1 ? 1 / (1 - s) : 0
          return [(1 - r - s) * l, (1 - o - s) * l, (1 - a - s) * l, s]
        },
        w = u.unpack,
        k = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n = (e = w(e, "cmyk"))[0],
            r = e[1],
            o = e[2],
            a = e[3],
            s = e.length > 4 ? e[4] : 1
          return 1 === a
            ? [0, 0, 0, s]
            : [
                n >= 1 ? 0 : 255 * (1 - n) * (1 - a),
                r >= 1 ? 0 : 255 * (1 - r) * (1 - a),
                o >= 1 ? 0 : 255 * (1 - o) * (1 - a),
                s,
              ]
        },
        E = u.unpack,
        C = u.type
      ;(v.prototype.cmyk = function () {
        return x(this._rgb)
      }),
        (b.cmyk = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          return new (Function.prototype.bind.apply(
            v,
            [null].concat(e, ["cmyk"])
          ))()
        }),
        (f.format.cmyk = k),
        f.autodetect.push({
          p: 2,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
            if (((e = E(e, "cmyk")), "array" === C(e) && 4 === e.length))
              return "cmyk"
          },
        })
      var M = u.unpack,
        $ = u.last,
        S = function (e) {
          return Math.round(100 * e) / 100
        },
        L = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n = M(e, "hsla"),
            r = $(e) || "lsa"
          return (
            (n[0] = S(n[0] || 0)),
            (n[1] = S(100 * n[1]) + "%"),
            (n[2] = S(100 * n[2]) + "%"),
            "hsla" === r || (n.length > 3 && n[3] < 1)
              ? ((n[3] = n.length > 3 ? n[3] : 1), (r = "hsla"))
              : (n.length = 3),
            r + "(" + n.join(",") + ")"
          )
        },
        A = u.unpack,
        P = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n = (e = A(e, "rgba"))[0],
            r = e[1],
            o = e[2]
          ;(n /= 255), (r /= 255), (o /= 255)
          var a,
            s,
            l = Math.min(n, r, o),
            i = Math.max(n, r, o),
            c = (i + l) / 2
          return (
            i === l
              ? ((a = 0), (s = Number.NaN))
              : (a = c < 0.5 ? (i - l) / (i + l) : (i - l) / (2 - i - l)),
            n == i
              ? (s = (r - o) / (i - l))
              : r == i
              ? (s = 2 + (o - n) / (i - l))
              : o == i && (s = 4 + (n - r) / (i - l)),
            (s *= 60) < 0 && (s += 360),
            e.length > 3 && void 0 !== e[3] ? [s, a, c, e[3]] : [s, a, c]
          )
        },
        R = u.unpack,
        O = u.last,
        T = Math.round,
        j = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n = R(e, "rgba"),
            r = O(e) || "rgb"
          return "hsl" == r.substr(0, 3)
            ? L(P(n), r)
            : ((n[0] = T(n[0])),
              (n[1] = T(n[1])),
              (n[2] = T(n[2])),
              ("rgba" === r || (n.length > 3 && n[3] < 1)) &&
                ((n[3] = n.length > 3 ? n[3] : 1), (r = "rgba")),
              r + "(" + n.slice(0, "rgb" === r ? 3 : 4).join(",") + ")")
        },
        N = u.unpack,
        D = Math.round,
        F = function () {
          for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n]
          var r,
            o,
            a,
            s = (t = N(t, "hsl"))[0],
            l = t[1],
            i = t[2]
          if (0 === l) r = o = a = 255 * i
          else {
            var c = [0, 0, 0],
              u = [0, 0, 0],
              f = i < 0.5 ? i * (1 + l) : i + l - i * l,
              d = 2 * i - f,
              p = s / 360
            ;(c[0] = p + 1 / 3), (c[1] = p), (c[2] = p - 1 / 3)
            for (var h = 0; h < 3; h++)
              c[h] < 0 && (c[h] += 1),
                c[h] > 1 && (c[h] -= 1),
                6 * c[h] < 1
                  ? (u[h] = d + 6 * (f - d) * c[h])
                  : 2 * c[h] < 1
                  ? (u[h] = f)
                  : 3 * c[h] < 2
                  ? (u[h] = d + (f - d) * (2 / 3 - c[h]) * 6)
                  : (u[h] = d)
            ;(r = (e = [D(255 * u[0]), D(255 * u[1]), D(255 * u[2])])[0]),
              (o = e[1]),
              (a = e[2])
          }
          return t.length > 3 ? [r, o, a, t[3]] : [r, o, a, 1]
        },
        I = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
        V =
          /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
        B =
          /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        U =
          /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        q =
          /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        H =
          /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        W = Math.round,
        G = function (e) {
          var t
          if (((e = e.toLowerCase().trim()), f.format.named))
            try {
              return f.format.named(e)
            } catch (m) {}
          if ((t = e.match(I))) {
            for (var n = t.slice(1, 4), r = 0; r < 3; r++) n[r] = +n[r]
            return (n[3] = 1), n
          }
          if ((t = e.match(V))) {
            for (var o = t.slice(1, 5), a = 0; a < 4; a++) o[a] = +o[a]
            return o
          }
          if ((t = e.match(B))) {
            for (var s = t.slice(1, 4), l = 0; l < 3; l++) s[l] = W(2.55 * s[l])
            return (s[3] = 1), s
          }
          if ((t = e.match(U))) {
            for (var i = t.slice(1, 5), c = 0; c < 3; c++) i[c] = W(2.55 * i[c])
            return (i[3] = +i[3]), i
          }
          if ((t = e.match(q))) {
            var u = t.slice(1, 4)
            ;(u[1] *= 0.01), (u[2] *= 0.01)
            var d = F(u)
            return (d[3] = 1), d
          }
          if ((t = e.match(H))) {
            var p = t.slice(1, 4)
            ;(p[1] *= 0.01), (p[2] *= 0.01)
            var h = F(p)
            return (h[3] = +t[4]), h
          }
        }
      G.test = function (e) {
        return (
          I.test(e) ||
          V.test(e) ||
          B.test(e) ||
          U.test(e) ||
          q.test(e) ||
          H.test(e)
        )
      }
      var z = G,
        Y = u.type
      ;(v.prototype.css = function (e) {
        return j(this._rgb, e)
      }),
        (b.css = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          return new (Function.prototype.bind.apply(
            v,
            [null].concat(e, ["css"])
          ))()
        }),
        (f.format.css = z),
        f.autodetect.push({
          p: 5,
          test: function (e) {
            for (var t = [], n = arguments.length - 1; n-- > 0; )
              t[n] = arguments[n + 1]
            if (!t.length && "string" === Y(e) && z.test(e)) return "css"
          },
        })
      var K = u.unpack
      ;(f.format.gl = function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
        var n = K(e, "rgba")
        return (n[0] *= 255), (n[1] *= 255), (n[2] *= 255), n
      }),
        (b.gl = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          return new (Function.prototype.bind.apply(
            v,
            [null].concat(e, ["gl"])
          ))()
        }),
        (v.prototype.gl = function () {
          var e = this._rgb
          return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]]
        })
      var X = u.unpack,
        J = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n,
            r = X(e, "rgb"),
            o = r[0],
            a = r[1],
            s = r[2],
            l = Math.min(o, a, s),
            i = Math.max(o, a, s),
            c = i - l,
            u = (100 * c) / 255,
            f = (l / (255 - c)) * 100
          return (
            0 === c
              ? (n = Number.NaN)
              : (o === i && (n = (a - s) / c),
                a === i && (n = 2 + (s - o) / c),
                s === i && (n = 4 + (o - a) / c),
                (n *= 60) < 0 && (n += 360)),
            [n, u, f]
          )
        },
        Z = u.unpack,
        Q = Math.floor,
        ee = function () {
          for (var e, t, n, r, o, a, s = [], l = arguments.length; l--; )
            s[l] = arguments[l]
          var i,
            c,
            u,
            f = (s = Z(s, "hcg"))[0],
            d = s[1],
            p = s[2]
          p *= 255
          var h = 255 * d
          if (0 === d) i = c = u = p
          else {
            360 === f && (f = 0), f > 360 && (f -= 360), f < 0 && (f += 360)
            var m = Q((f /= 60)),
              v = f - m,
              g = p * (1 - d),
              b = g + h * (1 - v),
              y = g + h * v,
              _ = g + h
            switch (m) {
              case 0:
                ;(i = (e = [_, y, g])[0]), (c = e[1]), (u = e[2])
                break
              case 1:
                ;(i = (t = [b, _, g])[0]), (c = t[1]), (u = t[2])
                break
              case 2:
                ;(i = (n = [g, _, y])[0]), (c = n[1]), (u = n[2])
                break
              case 3:
                ;(i = (r = [g, b, _])[0]), (c = r[1]), (u = r[2])
                break
              case 4:
                ;(i = (o = [y, g, _])[0]), (c = o[1]), (u = o[2])
                break
              case 5:
                ;(i = (a = [_, g, b])[0]), (c = a[1]), (u = a[2])
            }
          }
          return [i, c, u, s.length > 3 ? s[3] : 1]
        },
        te = u.unpack,
        ne = u.type
      ;(v.prototype.hcg = function () {
        return J(this._rgb)
      }),
        (b.hcg = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          return new (Function.prototype.bind.apply(
            v,
            [null].concat(e, ["hcg"])
          ))()
        }),
        (f.format.hcg = ee),
        f.autodetect.push({
          p: 1,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
            if (((e = te(e, "hcg")), "array" === ne(e) && 3 === e.length))
              return "hcg"
          },
        })
      var re = u.unpack,
        oe = u.last,
        ae = Math.round,
        se = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n = re(e, "rgba"),
            r = n[0],
            o = n[1],
            a = n[2],
            s = n[3],
            l = oe(e) || "auto"
          void 0 === s && (s = 1), "auto" === l && (l = s < 1 ? "rgba" : "rgb")
          var i =
            "000000" +
            (((r = ae(r)) << 16) | ((o = ae(o)) << 8) | (a = ae(a))).toString(
              16
            )
          i = i.substr(i.length - 6)
          var c = "0" + ae(255 * s).toString(16)
          switch (((c = c.substr(c.length - 2)), l.toLowerCase())) {
            case "rgba":
              return "#" + i + c
            case "argb":
              return "#" + c + i
            default:
              return "#" + i
          }
        },
        le = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
        ie = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
        ce = function (e) {
          if (e.match(le)) {
            ;(4 !== e.length && 7 !== e.length) || (e = e.substr(1)),
              3 === e.length &&
                (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2])
            var t = parseInt(e, 16)
            return [t >> 16, (t >> 8) & 255, 255 & t, 1]
          }
          if (e.match(ie)) {
            ;(5 !== e.length && 9 !== e.length) || (e = e.substr(1)),
              4 === e.length &&
                (e =
                  (e = e.split(""))[0] +
                  e[0] +
                  e[1] +
                  e[1] +
                  e[2] +
                  e[2] +
                  e[3] +
                  e[3])
            var n = parseInt(e, 16)
            return [
              (n >> 24) & 255,
              (n >> 16) & 255,
              (n >> 8) & 255,
              Math.round(((255 & n) / 255) * 100) / 100,
            ]
          }
          throw new Error("unknown hex color: " + e)
        },
        ue = u.type
      ;(v.prototype.hex = function (e) {
        return se(this._rgb, e)
      }),
        (b.hex = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          return new (Function.prototype.bind.apply(
            v,
            [null].concat(e, ["hex"])
          ))()
        }),
        (f.format.hex = ce),
        f.autodetect.push({
          p: 4,
          test: function (e) {
            for (var t = [], n = arguments.length - 1; n-- > 0; )
              t[n] = arguments[n + 1]
            if (
              !t.length &&
              "string" === ue(e) &&
              [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0
            )
              return "hex"
          },
        })
      var fe = u.unpack,
        de = u.TWOPI,
        pe = Math.min,
        he = Math.sqrt,
        me = Math.acos,
        ve = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n,
            r = fe(e, "rgb"),
            o = r[0],
            a = r[1],
            s = r[2],
            l = pe((o /= 255), (a /= 255), (s /= 255)),
            i = (o + a + s) / 3,
            c = i > 0 ? 1 - l / i : 0
          return (
            0 === c
              ? (n = NaN)
              : ((n = (o - a + (o - s)) / 2),
                (n /= he((o - a) * (o - a) + (o - s) * (a - s))),
                (n = me(n)),
                s > a && (n = de - n),
                (n /= de)),
            [360 * n, c, i]
          )
        },
        ge = u.unpack,
        be = u.limit,
        ye = u.TWOPI,
        _e = u.PITHIRD,
        xe = Math.cos,
        we = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n,
            r,
            o,
            a = (e = ge(e, "hsi"))[0],
            s = e[1],
            l = e[2]
          return (
            isNaN(a) && (a = 0),
            isNaN(s) && (s = 0),
            a > 360 && (a -= 360),
            a < 0 && (a += 360),
            (a /= 360) < 1 / 3
              ? (r =
                  1 -
                  ((o = (1 - s) / 3) +
                    (n = (1 + (s * xe(ye * a)) / xe(_e - ye * a)) / 3)))
              : a < 2 / 3
              ? (o =
                  1 -
                  ((n = (1 - s) / 3) +
                    (r =
                      (1 + (s * xe(ye * (a -= 1 / 3))) / xe(_e - ye * a)) / 3)))
              : (n =
                  1 -
                  ((r = (1 - s) / 3) +
                    (o =
                      (1 + (s * xe(ye * (a -= 2 / 3))) / xe(_e - ye * a)) /
                      3))),
            [
              255 * (n = be(l * n * 3)),
              255 * (r = be(l * r * 3)),
              255 * (o = be(l * o * 3)),
              e.length > 3 ? e[3] : 1,
            ]
          )
        },
        ke = u.unpack,
        Ee = u.type
      ;(v.prototype.hsi = function () {
        return ve(this._rgb)
      }),
        (b.hsi = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          return new (Function.prototype.bind.apply(
            v,
            [null].concat(e, ["hsi"])
          ))()
        }),
        (f.format.hsi = we),
        f.autodetect.push({
          p: 2,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
            if (((e = ke(e, "hsi")), "array" === Ee(e) && 3 === e.length))
              return "hsi"
          },
        })
      var Ce = u.unpack,
        Me = u.type
      ;(v.prototype.hsl = function () {
        return P(this._rgb)
      }),
        (b.hsl = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          return new (Function.prototype.bind.apply(
            v,
            [null].concat(e, ["hsl"])
          ))()
        }),
        (f.format.hsl = F),
        f.autodetect.push({
          p: 2,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
            if (((e = Ce(e, "hsl")), "array" === Me(e) && 3 === e.length))
              return "hsl"
          },
        })
      var $e = u.unpack,
        Se = Math.min,
        Le = Math.max,
        Ae = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n,
            r,
            o,
            a = (e = $e(e, "rgb"))[0],
            s = e[1],
            l = e[2],
            i = Se(a, s, l),
            c = Le(a, s, l),
            u = c - i
          return (
            (o = c / 255),
            0 === c
              ? ((n = Number.NaN), (r = 0))
              : ((r = u / c),
                a === c && (n = (s - l) / u),
                s === c && (n = 2 + (l - a) / u),
                l === c && (n = 4 + (a - s) / u),
                (n *= 60) < 0 && (n += 360)),
            [n, r, o]
          )
        },
        Pe = u.unpack,
        Re = Math.floor,
        Oe = function () {
          for (var e, t, n, r, o, a, s = [], l = arguments.length; l--; )
            s[l] = arguments[l]
          var i,
            c,
            u,
            f = (s = Pe(s, "hsv"))[0],
            d = s[1],
            p = s[2]
          if (((p *= 255), 0 === d)) i = c = u = p
          else {
            360 === f && (f = 0), f > 360 && (f -= 360), f < 0 && (f += 360)
            var h = Re((f /= 60)),
              m = f - h,
              v = p * (1 - d),
              g = p * (1 - d * m),
              b = p * (1 - d * (1 - m))
            switch (h) {
              case 0:
                ;(i = (e = [p, b, v])[0]), (c = e[1]), (u = e[2])
                break
              case 1:
                ;(i = (t = [g, p, v])[0]), (c = t[1]), (u = t[2])
                break
              case 2:
                ;(i = (n = [v, p, b])[0]), (c = n[1]), (u = n[2])
                break
              case 3:
                ;(i = (r = [v, g, p])[0]), (c = r[1]), (u = r[2])
                break
              case 4:
                ;(i = (o = [b, v, p])[0]), (c = o[1]), (u = o[2])
                break
              case 5:
                ;(i = (a = [p, v, g])[0]), (c = a[1]), (u = a[2])
            }
          }
          return [i, c, u, s.length > 3 ? s[3] : 1]
        },
        Te = u.unpack,
        je = u.type
      ;(v.prototype.hsv = function () {
        return Ae(this._rgb)
      }),
        (b.hsv = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          return new (Function.prototype.bind.apply(
            v,
            [null].concat(e, ["hsv"])
          ))()
        }),
        (f.format.hsv = Oe),
        f.autodetect.push({
          p: 2,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
            if (((e = Te(e, "hsv")), "array" === je(e) && 3 === e.length))
              return "hsv"
          },
        })
      var Ne = {
          Kn: 18,
          Xn: 0.95047,
          Yn: 1,
          Zn: 1.08883,
          t0: 0.137931034,
          t1: 0.206896552,
          t2: 0.12841855,
          t3: 0.008856452,
        },
        De = u.unpack,
        Fe = Math.pow,
        Ie = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n = De(e, "rgb"),
            r = n[0],
            o = n[1],
            a = n[2],
            s = Ue(r, o, a),
            l = s[0],
            i = s[1],
            c = 116 * i - 16
          return [c < 0 ? 0 : c, 500 * (l - i), 200 * (i - s[2])]
        },
        Ve = function (e) {
          return (e /= 255) <= 0.04045
            ? e / 12.92
            : Fe((e + 0.055) / 1.055, 2.4)
        },
        Be = function (e) {
          return e > Ne.t3 ? Fe(e, 1 / 3) : e / Ne.t2 + Ne.t0
        },
        Ue = function (e, t, n) {
          return (
            (e = Ve(e)),
            (t = Ve(t)),
            (n = Ve(n)),
            [
              Be((0.4124564 * e + 0.3575761 * t + 0.1804375 * n) / Ne.Xn),
              Be((0.2126729 * e + 0.7151522 * t + 0.072175 * n) / Ne.Yn),
              Be((0.0193339 * e + 0.119192 * t + 0.9503041 * n) / Ne.Zn),
            ]
          )
        },
        qe = Ie,
        He = u.unpack,
        We = Math.pow,
        Ge = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n,
            r,
            o,
            a = (e = He(e, "lab"))[0],
            s = e[1],
            l = e[2]
          return (
            (r = (a + 16) / 116),
            (n = isNaN(s) ? r : r + s / 500),
            (o = isNaN(l) ? r : r - l / 200),
            (r = Ne.Yn * Ye(r)),
            (n = Ne.Xn * Ye(n)),
            (o = Ne.Zn * Ye(o)),
            [
              ze(3.2404542 * n - 1.5371385 * r - 0.4985314 * o),
              ze(-0.969266 * n + 1.8760108 * r + 0.041556 * o),
              ze(0.0556434 * n - 0.2040259 * r + 1.0572252 * o),
              e.length > 3 ? e[3] : 1,
            ]
          )
        },
        ze = function (e) {
          return (
            255 * (e <= 0.00304 ? 12.92 * e : 1.055 * We(e, 1 / 2.4) - 0.055)
          )
        },
        Ye = function (e) {
          return e > Ne.t1 ? e * e * e : Ne.t2 * (e - Ne.t0)
        },
        Ke = Ge,
        Xe = u.unpack,
        Je = u.type
      ;(v.prototype.lab = function () {
        return qe(this._rgb)
      }),
        (b.lab = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          return new (Function.prototype.bind.apply(
            v,
            [null].concat(e, ["lab"])
          ))()
        }),
        (f.format.lab = Ke),
        f.autodetect.push({
          p: 2,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
            if (((e = Xe(e, "lab")), "array" === Je(e) && 3 === e.length))
              return "lab"
          },
        })
      var Ze = u.unpack,
        Qe = u.RAD2DEG,
        et = Math.sqrt,
        tt = Math.atan2,
        nt = Math.round,
        rt = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n = Ze(e, "lab"),
            r = n[0],
            o = n[1],
            a = n[2],
            s = et(o * o + a * a),
            l = (tt(a, o) * Qe + 360) % 360
          return 0 === nt(1e4 * s) && (l = Number.NaN), [r, s, l]
        },
        ot = u.unpack,
        at = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n = ot(e, "rgb"),
            r = n[0],
            o = n[1],
            a = n[2],
            s = qe(r, o, a),
            l = s[0],
            i = s[1],
            c = s[2]
          return rt(l, i, c)
        },
        st = u.unpack,
        lt = u.DEG2RAD,
        it = Math.sin,
        ct = Math.cos,
        ut = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n = st(e, "lch"),
            r = n[0],
            o = n[1],
            a = n[2]
          return isNaN(a) && (a = 0), [r, ct((a *= lt)) * o, it(a) * o]
        },
        ft = u.unpack,
        dt = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n = (e = ft(e, "lch"))[0],
            r = e[1],
            o = e[2],
            a = ut(n, r, o),
            s = a[0],
            l = a[1],
            i = a[2],
            c = Ke(s, l, i)
          return [c[0], c[1], c[2], e.length > 3 ? e[3] : 1]
        },
        pt = u.unpack,
        ht = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n = pt(e, "hcl").reverse()
          return dt.apply(void 0, n)
        },
        mt = u.unpack,
        vt = u.type
      ;(v.prototype.lch = function () {
        return at(this._rgb)
      }),
        (v.prototype.hcl = function () {
          return at(this._rgb).reverse()
        }),
        (b.lch = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          return new (Function.prototype.bind.apply(
            v,
            [null].concat(e, ["lch"])
          ))()
        }),
        (b.hcl = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          return new (Function.prototype.bind.apply(
            v,
            [null].concat(e, ["hcl"])
          ))()
        }),
        (f.format.lch = dt),
        (f.format.hcl = ht),
        ["lch", "hcl"].forEach(function (e) {
          return f.autodetect.push({
            p: 2,
            test: function () {
              for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n]
              if (((t = mt(t, e)), "array" === vt(t) && 3 === t.length))
                return e
            },
          })
        })
      var gt = {
          aliceblue: "#f0f8ff",
          antiquewhite: "#faebd7",
          aqua: "#00ffff",
          aquamarine: "#7fffd4",
          azure: "#f0ffff",
          beige: "#f5f5dc",
          bisque: "#ffe4c4",
          black: "#000000",
          blanchedalmond: "#ffebcd",
          blue: "#0000ff",
          blueviolet: "#8a2be2",
          brown: "#a52a2a",
          burlywood: "#deb887",
          cadetblue: "#5f9ea0",
          chartreuse: "#7fff00",
          chocolate: "#d2691e",
          coral: "#ff7f50",
          cornflower: "#6495ed",
          cornflowerblue: "#6495ed",
          cornsilk: "#fff8dc",
          crimson: "#dc143c",
          cyan: "#00ffff",
          darkblue: "#00008b",
          darkcyan: "#008b8b",
          darkgoldenrod: "#b8860b",
          darkgray: "#a9a9a9",
          darkgreen: "#006400",
          darkgrey: "#a9a9a9",
          darkkhaki: "#bdb76b",
          darkmagenta: "#8b008b",
          darkolivegreen: "#556b2f",
          darkorange: "#ff8c00",
          darkorchid: "#9932cc",
          darkred: "#8b0000",
          darksalmon: "#e9967a",
          darkseagreen: "#8fbc8f",
          darkslateblue: "#483d8b",
          darkslategray: "#2f4f4f",
          darkslategrey: "#2f4f4f",
          darkturquoise: "#00ced1",
          darkviolet: "#9400d3",
          deeppink: "#ff1493",
          deepskyblue: "#00bfff",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1e90ff",
          firebrick: "#b22222",
          floralwhite: "#fffaf0",
          forestgreen: "#228b22",
          fuchsia: "#ff00ff",
          gainsboro: "#dcdcdc",
          ghostwhite: "#f8f8ff",
          gold: "#ffd700",
          goldenrod: "#daa520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#adff2f",
          grey: "#808080",
          honeydew: "#f0fff0",
          hotpink: "#ff69b4",
          indianred: "#cd5c5c",
          indigo: "#4b0082",
          ivory: "#fffff0",
          khaki: "#f0e68c",
          laserlemon: "#ffff54",
          lavender: "#e6e6fa",
          lavenderblush: "#fff0f5",
          lawngreen: "#7cfc00",
          lemonchiffon: "#fffacd",
          lightblue: "#add8e6",
          lightcoral: "#f08080",
          lightcyan: "#e0ffff",
          lightgoldenrod: "#fafad2",
          lightgoldenrodyellow: "#fafad2",
          lightgray: "#d3d3d3",
          lightgreen: "#90ee90",
          lightgrey: "#d3d3d3",
          lightpink: "#ffb6c1",
          lightsalmon: "#ffa07a",
          lightseagreen: "#20b2aa",
          lightskyblue: "#87cefa",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#b0c4de",
          lightyellow: "#ffffe0",
          lime: "#00ff00",
          limegreen: "#32cd32",
          linen: "#faf0e6",
          magenta: "#ff00ff",
          maroon: "#800000",
          maroon2: "#7f0000",
          maroon3: "#b03060",
          mediumaquamarine: "#66cdaa",
          mediumblue: "#0000cd",
          mediumorchid: "#ba55d3",
          mediumpurple: "#9370db",
          mediumseagreen: "#3cb371",
          mediumslateblue: "#7b68ee",
          mediumspringgreen: "#00fa9a",
          mediumturquoise: "#48d1cc",
          mediumvioletred: "#c71585",
          midnightblue: "#191970",
          mintcream: "#f5fffa",
          mistyrose: "#ffe4e1",
          moccasin: "#ffe4b5",
          navajowhite: "#ffdead",
          navy: "#000080",
          oldlace: "#fdf5e6",
          olive: "#808000",
          olivedrab: "#6b8e23",
          orange: "#ffa500",
          orangered: "#ff4500",
          orchid: "#da70d6",
          palegoldenrod: "#eee8aa",
          palegreen: "#98fb98",
          paleturquoise: "#afeeee",
          palevioletred: "#db7093",
          papayawhip: "#ffefd5",
          peachpuff: "#ffdab9",
          peru: "#cd853f",
          pink: "#ffc0cb",
          plum: "#dda0dd",
          powderblue: "#b0e0e6",
          purple: "#800080",
          purple2: "#7f007f",
          purple3: "#a020f0",
          rebeccapurple: "#663399",
          red: "#ff0000",
          rosybrown: "#bc8f8f",
          royalblue: "#4169e1",
          saddlebrown: "#8b4513",
          salmon: "#fa8072",
          sandybrown: "#f4a460",
          seagreen: "#2e8b57",
          seashell: "#fff5ee",
          sienna: "#a0522d",
          silver: "#c0c0c0",
          skyblue: "#87ceeb",
          slateblue: "#6a5acd",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#fffafa",
          springgreen: "#00ff7f",
          steelblue: "#4682b4",
          tan: "#d2b48c",
          teal: "#008080",
          thistle: "#d8bfd8",
          tomato: "#ff6347",
          turquoise: "#40e0d0",
          violet: "#ee82ee",
          wheat: "#f5deb3",
          white: "#ffffff",
          whitesmoke: "#f5f5f5",
          yellow: "#ffff00",
          yellowgreen: "#9acd32",
        },
        bt = u.type
      ;(v.prototype.name = function () {
        for (
          var e = se(this._rgb, "rgb"), t = 0, n = Object.keys(gt);
          t < n.length;
          t += 1
        ) {
          var r = n[t]
          if (gt[r] === e) return r.toLowerCase()
        }
        return e
      }),
        (f.format.named = function (e) {
          if (((e = e.toLowerCase()), gt[e])) return ce(gt[e])
          throw new Error("unknown color name: " + e)
        }),
        f.autodetect.push({
          p: 5,
          test: function (e) {
            for (var t = [], n = arguments.length - 1; n-- > 0; )
              t[n] = arguments[n + 1]
            if (!t.length && "string" === bt(e) && gt[e.toLowerCase()])
              return "named"
          },
        })
      var yt = u.unpack,
        _t = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n = yt(e, "rgb")
          return (n[0] << 16) + (n[1] << 8) + n[2]
        },
        xt = u.type,
        wt = function (e) {
          if ("number" == xt(e) && e >= 0 && e <= 16777215)
            return [e >> 16, (e >> 8) & 255, 255 & e, 1]
          throw new Error("unknown num color: " + e)
        },
        kt = u.type
      ;(v.prototype.num = function () {
        return _t(this._rgb)
      }),
        (b.num = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          return new (Function.prototype.bind.apply(
            v,
            [null].concat(e, ["num"])
          ))()
        }),
        (f.format.num = wt),
        f.autodetect.push({
          p: 5,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
            if (
              1 === e.length &&
              "number" === kt(e[0]) &&
              e[0] >= 0 &&
              e[0] <= 16777215
            )
              return "num"
          },
        })
      var Et = u.unpack,
        Ct = u.type,
        Mt = Math.round
      ;(v.prototype.rgb = function (e) {
        return (
          void 0 === e && (e = !0),
          !1 === e ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Mt)
        )
      }),
        (v.prototype.rgba = function (e) {
          return (
            void 0 === e && (e = !0),
            this._rgb.slice(0, 4).map(function (t, n) {
              return n < 3 ? (!1 === e ? t : Mt(t)) : t
            })
          )
        }),
        (b.rgb = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          return new (Function.prototype.bind.apply(
            v,
            [null].concat(e, ["rgb"])
          ))()
        }),
        (f.format.rgb = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          var n = Et(e, "rgba")
          return void 0 === n[3] && (n[3] = 1), n
        }),
        f.autodetect.push({
          p: 3,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
            if (
              ((e = Et(e, "rgba")),
              "array" === Ct(e) &&
                (3 === e.length ||
                  (4 === e.length &&
                    "number" == Ct(e[3]) &&
                    e[3] >= 0 &&
                    e[3] <= 1)))
            )
              return "rgb"
          },
        })
      var $t = Math.log,
        St = function (e) {
          var t,
            n,
            r,
            o = e / 100
          return (
            o < 66
              ? ((t = 255),
                (n =
                  -155.25485562709179 -
                  0.44596950469579133 * (n = o - 2) +
                  104.49216199393888 * $t(n)),
                (r =
                  o < 20
                    ? 0
                    : 0.8274096064007395 * (r = o - 10) -
                      254.76935184120902 +
                      115.67994401066147 * $t(r)))
              : ((t =
                  351.97690566805693 +
                  0.114206453784165 * (t = o - 55) -
                  40.25366309332127 * $t(t)),
                (n =
                  325.4494125711974 +
                  0.07943456536662342 * (n = o - 50) -
                  28.0852963507957 * $t(n)),
                (r = 255)),
            [t, n, r, 1]
          )
        },
        Lt = u.unpack,
        At = Math.round,
        Pt = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
          for (
            var n,
              r = Lt(e, "rgb"),
              o = r[0],
              a = r[2],
              s = 1e3,
              l = 4e4,
              i = 0.4;
            l - s > i;

          ) {
            var c = St((n = 0.5 * (l + s)))
            c[2] / c[0] >= a / o ? (l = n) : (s = n)
          }
          return At(n)
        }
      ;(v.prototype.temp =
        v.prototype.kelvin =
        v.prototype.temperature =
          function () {
            return Pt(this._rgb)
          }),
        (b.temp =
          b.kelvin =
          b.temperature =
            function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
              return new (Function.prototype.bind.apply(
                v,
                [null].concat(e, ["temp"])
              ))()
            }),
        (f.format.temp = f.format.kelvin = f.format.temperature = St)
      var Rt = u.type
      ;(v.prototype.alpha = function (e, t) {
        return (
          void 0 === t && (t = !1),
          void 0 !== e && "number" === Rt(e)
            ? t
              ? ((this._rgb[3] = e), this)
              : new v([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb")
            : this._rgb[3]
        )
      }),
        (v.prototype.clipped = function () {
          return this._rgb._clipped || !1
        }),
        (v.prototype.darken = function (e) {
          void 0 === e && (e = 1)
          var t = this,
            n = t.lab()
          return (n[0] -= Ne.Kn * e), new v(n, "lab").alpha(t.alpha(), !0)
        }),
        (v.prototype.brighten = function (e) {
          return void 0 === e && (e = 1), this.darken(-e)
        }),
        (v.prototype.darker = v.prototype.darken),
        (v.prototype.brighter = v.prototype.brighten),
        (v.prototype.get = function (e) {
          var t = e.split("."),
            n = t[0],
            r = t[1],
            o = this[n]()
          if (r) {
            var a = n.indexOf(r)
            if (a > -1) return o[a]
            throw new Error("unknown channel " + r + " in mode " + n)
          }
          return o
        })
      var Ot = u.type,
        Tt = Math.pow,
        jt = 1e-7,
        Nt = 20
      v.prototype.luminance = function (e) {
        if (void 0 !== e && "number" === Ot(e)) {
          if (0 === e) return new v([0, 0, 0, this._rgb[3]], "rgb")
          if (1 === e) return new v([255, 255, 255, this._rgb[3]], "rgb")
          var t = this.luminance(),
            n = "rgb",
            r = Nt,
            o = function (t, a) {
              var s = t.interpolate(a, 0.5, n),
                l = s.luminance()
              return Math.abs(e - l) < jt || !r--
                ? s
                : l > e
                ? o(t, s)
                : o(s, a)
            },
            a = (
              t > e
                ? o(new v([0, 0, 0]), this)
                : o(this, new v([255, 255, 255]))
            ).rgb()
          return new v(a.concat([this._rgb[3]]))
        }
        return Dt.apply(void 0, this._rgb.slice(0, 3))
      }
      var Dt = function (e, t, n) {
          return (
            0.2126 * (e = Ft(e)) + 0.7152 * (t = Ft(t)) + 0.0722 * (n = Ft(n))
          )
        },
        Ft = function (e) {
          return (e /= 255) <= 0.03928
            ? e / 12.92
            : Tt((e + 0.055) / 1.055, 2.4)
        },
        It = {},
        Vt = u.type,
        Bt = function (e, t, n) {
          void 0 === n && (n = 0.5)
          for (var r = [], o = arguments.length - 3; o-- > 0; )
            r[o] = arguments[o + 3]
          var a = r[0] || "lrgb"
          if ((It[a] || r.length || (a = Object.keys(It)[0]), !It[a]))
            throw new Error("interpolation mode " + a + " is not defined")
          return (
            "object" !== Vt(e) && (e = new v(e)),
            "object" !== Vt(t) && (t = new v(t)),
            It[a](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
          )
        }
      ;(v.prototype.mix = v.prototype.interpolate =
        function (e, t) {
          void 0 === t && (t = 0.5)
          for (var n = [], r = arguments.length - 2; r-- > 0; )
            n[r] = arguments[r + 2]
          return Bt.apply(void 0, [this, e, t].concat(n))
        }),
        (v.prototype.premultiply = function (e) {
          void 0 === e && (e = !1)
          var t = this._rgb,
            n = t[3]
          return e
            ? ((this._rgb = [t[0] * n, t[1] * n, t[2] * n, n]), this)
            : new v([t[0] * n, t[1] * n, t[2] * n, n], "rgb")
        }),
        (v.prototype.saturate = function (e) {
          void 0 === e && (e = 1)
          var t = this,
            n = t.lch()
          return (
            (n[1] += Ne.Kn * e),
            n[1] < 0 && (n[1] = 0),
            new v(n, "lch").alpha(t.alpha(), !0)
          )
        }),
        (v.prototype.desaturate = function (e) {
          return void 0 === e && (e = 1), this.saturate(-e)
        })
      var Ut = u.type
      v.prototype.set = function (e, t, n) {
        void 0 === n && (n = !1)
        var r = e.split("."),
          o = r[0],
          a = r[1],
          s = this[o]()
        if (a) {
          var l = o.indexOf(a)
          if (l > -1) {
            if ("string" == Ut(t))
              switch (t.charAt(0)) {
                case "+":
                case "-":
                  s[l] += +t
                  break
                case "*":
                  s[l] *= +t.substr(1)
                  break
                case "/":
                  s[l] /= +t.substr(1)
                  break
                default:
                  s[l] = +t
              }
            else {
              if ("number" !== Ut(t))
                throw new Error("unsupported value for Color.set")
              s[l] = t
            }
            var i = new v(s, o)
            return n ? ((this._rgb = i._rgb), this) : i
          }
          throw new Error("unknown channel " + a + " in mode " + o)
        }
        return s
      }
      var qt = function (e, t, n) {
        var r = e._rgb,
          o = t._rgb
        return new v(
          r[0] + n * (o[0] - r[0]),
          r[1] + n * (o[1] - r[1]),
          r[2] + n * (o[2] - r[2]),
          "rgb"
        )
      }
      It.rgb = qt
      var Ht = Math.sqrt,
        Wt = Math.pow,
        Gt = function (e, t, n) {
          var r = e._rgb,
            o = r[0],
            a = r[1],
            s = r[2],
            l = t._rgb,
            i = l[0],
            c = l[1],
            u = l[2]
          return new v(
            Ht(Wt(o, 2) * (1 - n) + Wt(i, 2) * n),
            Ht(Wt(a, 2) * (1 - n) + Wt(c, 2) * n),
            Ht(Wt(s, 2) * (1 - n) + Wt(u, 2) * n),
            "rgb"
          )
        }
      It.lrgb = Gt
      var zt = function (e, t, n) {
        var r = e.lab(),
          o = t.lab()
        return new v(
          r[0] + n * (o[0] - r[0]),
          r[1] + n * (o[1] - r[1]),
          r[2] + n * (o[2] - r[2]),
          "lab"
        )
      }
      It.lab = zt
      var Yt = function (e, t, n, r) {
          var o, a, s, l, i, c, u, f, d, p, h, m
          return (
            "hsl" === r
              ? ((s = e.hsl()), (l = t.hsl()))
              : "hsv" === r
              ? ((s = e.hsv()), (l = t.hsv()))
              : "hcg" === r
              ? ((s = e.hcg()), (l = t.hcg()))
              : "hsi" === r
              ? ((s = e.hsi()), (l = t.hsi()))
              : ("lch" !== r && "hcl" !== r) ||
                ((r = "hcl"), (s = e.hcl()), (l = t.hcl())),
            "h" === r.substr(0, 1) &&
              ((i = (o = s)[0]),
              (u = o[1]),
              (d = o[2]),
              (c = (a = l)[0]),
              (f = a[1]),
              (p = a[2])),
            isNaN(i) || isNaN(c)
              ? isNaN(i)
                ? isNaN(c)
                  ? (m = Number.NaN)
                  : ((m = c), (1 != d && 0 != d) || "hsv" == r || (h = f))
                : ((m = i), (1 != p && 0 != p) || "hsv" == r || (h = u))
              : (m =
                  i +
                  n *
                    (c > i && c - i > 180
                      ? c - (i + 360)
                      : c < i && i - c > 180
                      ? c + 360 - i
                      : c - i)),
            void 0 === h && (h = u + n * (f - u)),
            new v([m, h, d + n * (p - d)], r)
          )
        },
        Kt = function (e, t, n) {
          return Yt(e, t, n, "lch")
        }
      ;(It.lch = Kt), (It.hcl = Kt)
      var Xt = function (e, t, n) {
        var r = e.num(),
          o = t.num()
        return new v(r + n * (o - r), "num")
      }
      It.num = Xt
      var Jt = function (e, t, n) {
        return Yt(e, t, n, "hcg")
      }
      It.hcg = Jt
      var Zt = function (e, t, n) {
        return Yt(e, t, n, "hsi")
      }
      It.hsi = Zt
      var Qt = function (e, t, n) {
        return Yt(e, t, n, "hsl")
      }
      It.hsl = Qt
      var en = function (e, t, n) {
        return Yt(e, t, n, "hsv")
      }
      It.hsv = en
      var tn = u.clip_rgb,
        nn = Math.pow,
        rn = Math.sqrt,
        on = Math.PI,
        an = Math.cos,
        sn = Math.sin,
        ln = Math.atan2,
        cn = function (e, t, n) {
          void 0 === t && (t = "lrgb"), void 0 === n && (n = null)
          var r = e.length
          n ||
            (n = Array.from(new Array(r)).map(function () {
              return 1
            }))
          var o =
            r /
            n.reduce(function (e, t) {
              return e + t
            })
          if (
            (n.forEach(function (e, t) {
              n[t] *= o
            }),
            (e = e.map(function (e) {
              return new v(e)
            })),
            "lrgb" === t)
          )
            return un(e, n)
          for (
            var a = e.shift(), s = a.get(t), l = [], i = 0, c = 0, u = 0;
            u < s.length;
            u++
          )
            if (
              ((s[u] = (s[u] || 0) * n[0]),
              l.push(isNaN(s[u]) ? 0 : n[0]),
              "h" === t.charAt(u) && !isNaN(s[u]))
            ) {
              var f = (s[u] / 180) * on
              ;(i += an(f) * n[0]), (c += sn(f) * n[0])
            }
          var d = a.alpha() * n[0]
          e.forEach(function (e, r) {
            var o = e.get(t)
            d += e.alpha() * n[r + 1]
            for (var a = 0; a < s.length; a++)
              if (!isNaN(o[a]))
                if (((l[a] += n[r + 1]), "h" === t.charAt(a))) {
                  var u = (o[a] / 180) * on
                  ;(i += an(u) * n[r + 1]), (c += sn(u) * n[r + 1])
                } else s[a] += o[a] * n[r + 1]
          })
          for (var p = 0; p < s.length; p++)
            if ("h" === t.charAt(p)) {
              for (var h = (ln(c / l[p], i / l[p]) / on) * 180; h < 0; )
                h += 360
              for (; h >= 360; ) h -= 360
              s[p] = h
            } else s[p] = s[p] / l[p]
          return (d /= r), new v(s, t).alpha(d > 0.99999 ? 1 : d, !0)
        },
        un = function (e, t) {
          for (var n = e.length, r = [0, 0, 0, 0], o = 0; o < e.length; o++) {
            var a = e[o],
              s = t[o] / n,
              l = a._rgb
            ;(r[0] += nn(l[0], 2) * s),
              (r[1] += nn(l[1], 2) * s),
              (r[2] += nn(l[2], 2) * s),
              (r[3] += l[3] * s)
          }
          return (
            (r[0] = rn(r[0])),
            (r[1] = rn(r[1])),
            (r[2] = rn(r[2])),
            r[3] > 0.9999999 && (r[3] = 1),
            new v(tn(r))
          )
        },
        fn = u.type,
        dn = Math.pow,
        pn = function (e) {
          var t = "rgb",
            n = b("#ccc"),
            r = 0,
            o = [0, 1],
            a = [],
            s = [0, 0],
            l = !1,
            i = [],
            c = !1,
            u = 0,
            f = 1,
            d = !1,
            p = {},
            h = !0,
            m = 1,
            v = function (e) {
              if (
                ((e = e || ["#fff", "#000"]) &&
                  "string" === fn(e) &&
                  b.brewer &&
                  b.brewer[e.toLowerCase()] &&
                  (e = b.brewer[e.toLowerCase()]),
                "array" === fn(e))
              ) {
                1 === e.length && (e = [e[0], e[0]]), (e = e.slice(0))
                for (var t = 0; t < e.length; t++) e[t] = b(e[t])
                a.length = 0
                for (var n = 0; n < e.length; n++) a.push(n / (e.length - 1))
              }
              return w(), (i = e)
            },
            g = function (e) {
              if (null != l) {
                for (var t = l.length - 1, n = 0; n < t && e >= l[n]; ) n++
                return n - 1
              }
              return 0
            },
            y = function (e) {
              return e
            },
            _ = function (e) {
              return e
            },
            x = function (e, r) {
              var o, c
              if ((null == r && (r = !1), isNaN(e) || null === e)) return n
              ;(c = r
                ? e
                : l && l.length > 2
                ? g(e) / (l.length - 2)
                : f !== u
                ? (e - u) / (f - u)
                : 1),
                (c = _(c)),
                r || (c = y(c)),
                1 !== m && (c = dn(c, m)),
                (c = s[0] + c * (1 - s[0] - s[1])),
                (c = Math.min(1, Math.max(0, c)))
              var d = Math.floor(1e4 * c)
              if (h && p[d]) o = p[d]
              else {
                if ("array" === fn(i))
                  for (var v = 0; v < a.length; v++) {
                    var x = a[v]
                    if (c <= x) {
                      o = i[v]
                      break
                    }
                    if (c >= x && v === a.length - 1) {
                      o = i[v]
                      break
                    }
                    if (c > x && c < a[v + 1]) {
                      ;(c = (c - x) / (a[v + 1] - x)),
                        (o = b.interpolate(i[v], i[v + 1], c, t))
                      break
                    }
                  }
                else "function" === fn(i) && (o = i(c))
                h && (p[d] = o)
              }
              return o
            },
            w = function () {
              return (p = {})
            }
          v(e)
          var k = function (e) {
            var t = b(x(e))
            return c && t[c] ? t[c]() : t
          }
          return (
            (k.classes = function (e) {
              if (null != e) {
                if ("array" === fn(e)) (l = e), (o = [e[0], e[e.length - 1]])
                else {
                  var t = b.analyze(o)
                  l = 0 === e ? [t.min, t.max] : b.limits(t, "e", e)
                }
                return k
              }
              return l
            }),
            (k.domain = function (e) {
              if (!arguments.length) return o
              ;(u = e[0]), (f = e[e.length - 1]), (a = [])
              var t = i.length
              if (e.length === t && u !== f)
                for (var n = 0, r = Array.from(e); n < r.length; n += 1) {
                  var s = r[n]
                  a.push((s - u) / (f - u))
                }
              else {
                for (var l = 0; l < t; l++) a.push(l / (t - 1))
                if (e.length > 2) {
                  var c = e.map(function (t, n) {
                      return n / (e.length - 1)
                    }),
                    d = e.map(function (e) {
                      return (e - u) / (f - u)
                    })
                  d.every(function (e, t) {
                    return c[t] === e
                  }) ||
                    (_ = function (e) {
                      if (e <= 0 || e >= 1) return e
                      for (var t = 0; e >= d[t + 1]; ) t++
                      var n = (e - d[t]) / (d[t + 1] - d[t])
                      return c[t] + n * (c[t + 1] - c[t])
                    })
                }
              }
              return (o = [u, f]), k
            }),
            (k.mode = function (e) {
              return arguments.length ? ((t = e), w(), k) : t
            }),
            (k.range = function (e, t) {
              return v(e), k
            }),
            (k.out = function (e) {
              return (c = e), k
            }),
            (k.spread = function (e) {
              return arguments.length ? ((r = e), k) : r
            }),
            (k.correctLightness = function (e) {
              return (
                null == e && (e = !0),
                (d = e),
                w(),
                (y = d
                  ? function (e) {
                      for (
                        var t = x(0, !0).lab()[0],
                          n = x(1, !0).lab()[0],
                          r = t > n,
                          o = x(e, !0).lab()[0],
                          a = t + (n - t) * e,
                          s = o - a,
                          l = 0,
                          i = 1,
                          c = 20;
                        Math.abs(s) > 0.01 && c-- > 0;

                      )
                        r && (s *= -1),
                          s < 0
                            ? ((l = e), (e += 0.5 * (i - e)))
                            : ((i = e), (e += 0.5 * (l - e))),
                          (o = x(e, !0).lab()[0]),
                          (s = o - a)
                      return e
                    }
                  : function (e) {
                      return e
                    }),
                k
              )
            }),
            (k.padding = function (e) {
              return null != e
                ? ("number" === fn(e) && (e = [e, e]), (s = e), k)
                : s
            }),
            (k.colors = function (t, n) {
              arguments.length < 2 && (n = "hex")
              var r = []
              if (0 === arguments.length) r = i.slice(0)
              else if (1 === t) r = [k(0.5)]
              else if (t > 1) {
                var a = o[0],
                  s = o[1] - a
                r = hn(0, t, !1).map(function (e) {
                  return k(a + (e / (t - 1)) * s)
                })
              } else {
                e = []
                var c = []
                if (l && l.length > 2)
                  for (
                    var u = 1, f = l.length, d = 1 <= f;
                    d ? u < f : u > f;
                    d ? u++ : u--
                  )
                    c.push(0.5 * (l[u - 1] + l[u]))
                else c = o
                r = c.map(function (e) {
                  return k(e)
                })
              }
              return (
                b[n] &&
                  (r = r.map(function (e) {
                    return e[n]()
                  })),
                r
              )
            }),
            (k.cache = function (e) {
              return null != e ? ((h = e), k) : h
            }),
            (k.gamma = function (e) {
              return null != e ? ((m = e), k) : m
            }),
            (k.nodata = function (e) {
              return null != e ? ((n = b(e)), k) : n
            }),
            k
          )
        }
      function hn(e, t, n) {
        for (
          var r = [], o = e < t, a = n ? (o ? t + 1 : t - 1) : t, s = e;
          o ? s < a : s > a;
          o ? s++ : s--
        )
          r.push(s)
        return r
      }
      var mn = function (e) {
          var t, n, r, o, a, s, l
          if (
            2 ===
            (e = e.map(function (e) {
              return new v(e)
            })).length
          )
            (t = e.map(function (e) {
              return e.lab()
            })),
              (a = t[0]),
              (s = t[1]),
              (o = function (e) {
                var t = [0, 1, 2].map(function (t) {
                  return a[t] + e * (s[t] - a[t])
                })
                return new v(t, "lab")
              })
          else if (3 === e.length)
            (n = e.map(function (e) {
              return e.lab()
            })),
              (a = n[0]),
              (s = n[1]),
              (l = n[2]),
              (o = function (e) {
                var t = [0, 1, 2].map(function (t) {
                  return (
                    (1 - e) * (1 - e) * a[t] +
                    2 * (1 - e) * e * s[t] +
                    e * e * l[t]
                  )
                })
                return new v(t, "lab")
              })
          else if (4 === e.length) {
            var i
            ;(r = e.map(function (e) {
              return e.lab()
            })),
              (a = r[0]),
              (s = r[1]),
              (l = r[2]),
              (i = r[3]),
              (o = function (e) {
                var t = [0, 1, 2].map(function (t) {
                  return (
                    (1 - e) * (1 - e) * (1 - e) * a[t] +
                    3 * (1 - e) * (1 - e) * e * s[t] +
                    3 * (1 - e) * e * e * l[t] +
                    e * e * e * i[t]
                  )
                })
                return new v(t, "lab")
              })
          } else if (5 === e.length) {
            var c = mn(e.slice(0, 3)),
              u = mn(e.slice(2, 5))
            o = function (e) {
              return e < 0.5 ? c(2 * e) : u(2 * (e - 0.5))
            }
          }
          return o
        },
        vn = function (e) {
          var t = mn(e)
          return (
            (t.scale = function () {
              return pn(t)
            }),
            t
          )
        },
        gn = function (e, t, n) {
          if (!gn[n]) throw new Error("unknown blend mode " + n)
          return gn[n](e, t)
        },
        bn = function (e) {
          return function (t, n) {
            var r = b(n).rgb(),
              o = b(t).rgb()
            return b.rgb(e(r, o))
          }
        },
        yn = function (e) {
          return function (t, n) {
            var r = []
            return (
              (r[0] = e(t[0], n[0])),
              (r[1] = e(t[1], n[1])),
              (r[2] = e(t[2], n[2])),
              r
            )
          }
        },
        _n = function (e) {
          return e
        },
        xn = function (e, t) {
          return (e * t) / 255
        },
        wn = function (e, t) {
          return e > t ? t : e
        },
        kn = function (e, t) {
          return e > t ? e : t
        },
        En = function (e, t) {
          return 255 * (1 - (1 - e / 255) * (1 - t / 255))
        },
        Cn = function (e, t) {
          return t < 128
            ? (2 * e * t) / 255
            : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255))
        },
        Mn = function (e, t) {
          return 255 * (1 - (1 - t / 255) / (e / 255))
        },
        $n = function (e, t) {
          return 255 === e || (e = ((t / 255) * 255) / (1 - e / 255)) > 255
            ? 255
            : e
        }
      ;(gn.normal = bn(yn(_n))),
        (gn.multiply = bn(yn(xn))),
        (gn.screen = bn(yn(En))),
        (gn.overlay = bn(yn(Cn))),
        (gn.darken = bn(yn(wn))),
        (gn.lighten = bn(yn(kn))),
        (gn.dodge = bn(yn($n))),
        (gn.burn = bn(yn(Mn)))
      for (
        var Sn = gn,
          Ln = u.type,
          An = u.clip_rgb,
          Pn = u.TWOPI,
          Rn = Math.pow,
          On = Math.sin,
          Tn = Math.cos,
          jn = function (e, t, n, r, o) {
            void 0 === e && (e = 300),
              void 0 === t && (t = -1.5),
              void 0 === n && (n = 1),
              void 0 === r && (r = 1),
              void 0 === o && (o = [0, 1])
            var a,
              s = 0
            "array" === Ln(o) ? (a = o[1] - o[0]) : ((a = 0), (o = [o, o]))
            var l = function (l) {
              var i = Pn * ((e + 120) / 360 + t * l),
                c = Rn(o[0] + a * l, r),
                u = ((0 !== s ? n[0] + l * s : n) * c * (1 - c)) / 2,
                f = Tn(i),
                d = On(i)
              return b(
                An([
                  255 * (c + u * (-0.14861 * f + 1.78277 * d)),
                  255 * (c + u * (-0.29227 * f - 0.90649 * d)),
                  255 * (c + u * (1.97294 * f)),
                  1,
                ])
              )
            }
            return (
              (l.start = function (t) {
                return null == t ? e : ((e = t), l)
              }),
              (l.rotations = function (e) {
                return null == e ? t : ((t = e), l)
              }),
              (l.gamma = function (e) {
                return null == e ? r : ((r = e), l)
              }),
              (l.hue = function (e) {
                return null == e
                  ? n
                  : ("array" === Ln((n = e))
                      ? 0 == (s = n[1] - n[0]) && (n = n[1])
                      : (s = 0),
                    l)
              }),
              (l.lightness = function (e) {
                return null == e
                  ? o
                  : ("array" === Ln(e)
                      ? ((o = e), (a = e[1] - e[0]))
                      : ((o = [e, e]), (a = 0)),
                    l)
              }),
              (l.scale = function () {
                return b.scale(l)
              }),
              l.hue(n),
              l
            )
          },
          Nn = "0123456789abcdef",
          Dn = Math.floor,
          Fn = Math.random,
          In = function () {
            for (var e = "#", t = 0; t < 6; t++) e += Nn.charAt(Dn(16 * Fn()))
            return new v(e, "hex")
          },
          Vn = Math.log,
          Bn = Math.pow,
          Un = Math.floor,
          qn = Math.abs,
          Hn = function (e, t) {
            void 0 === t && (t = null)
            var n = {
              min: Number.MAX_VALUE,
              max: -1 * Number.MAX_VALUE,
              sum: 0,
              values: [],
              count: 0,
            }
            return (
              "object" === s(e) && (e = Object.values(e)),
              e.forEach(function (e) {
                t && "object" === s(e) && (e = e[t]),
                  null == e ||
                    isNaN(e) ||
                    (n.values.push(e),
                    (n.sum += e),
                    e < n.min && (n.min = e),
                    e > n.max && (n.max = e),
                    (n.count += 1))
              }),
              (n.domain = [n.min, n.max]),
              (n.limits = function (e, t) {
                return Wn(n, e, t)
              }),
              n
            )
          },
          Wn = function (e, t, n) {
            void 0 === t && (t = "equal"),
              void 0 === n && (n = 7),
              "array" == s(e) && (e = Hn(e))
            var r = e.min,
              o = e.max,
              a = e.values.sort(function (e, t) {
                return e - t
              })
            if (1 === n) return [r, o]
            var l = []
            if (
              ("c" === t.substr(0, 1) && (l.push(r), l.push(o)),
              "e" === t.substr(0, 1))
            ) {
              l.push(r)
              for (var i = 1; i < n; i++) l.push(r + (i / n) * (o - r))
              l.push(o)
            } else if ("l" === t.substr(0, 1)) {
              if (r <= 0)
                throw new Error(
                  "Logarithmic scales are only possible for values > 0"
                )
              var c = Math.LOG10E * Vn(r),
                u = Math.LOG10E * Vn(o)
              l.push(r)
              for (var f = 1; f < n; f++) l.push(Bn(10, c + (f / n) * (u - c)))
              l.push(o)
            } else if ("q" === t.substr(0, 1)) {
              l.push(r)
              for (var d = 1; d < n; d++) {
                var p = ((a.length - 1) * d) / n,
                  h = Un(p)
                if (h === p) l.push(a[h])
                else {
                  var m = p - h
                  l.push(a[h] * (1 - m) + a[h + 1] * m)
                }
              }
              l.push(o)
            } else if ("k" === t.substr(0, 1)) {
              var v,
                g = a.length,
                b = new Array(g),
                y = new Array(n),
                _ = !0,
                x = 0,
                w = null
              ;(w = []).push(r)
              for (var k = 1; k < n; k++) w.push(r + (k / n) * (o - r))
              for (w.push(o); _; ) {
                for (var E = 0; E < n; E++) y[E] = 0
                for (var C = 0; C < g; C++)
                  for (
                    var M = a[C], $ = Number.MAX_VALUE, S = void 0, L = 0;
                    L < n;
                    L++
                  ) {
                    var A = qn(w[L] - M)
                    A < $ && (($ = A), (S = L)), y[S]++, (b[C] = S)
                  }
                for (var P = new Array(n), R = 0; R < n; R++) P[R] = null
                for (var O = 0; O < g; O++)
                  null === P[(v = b[O])] ? (P[v] = a[O]) : (P[v] += a[O])
                for (var T = 0; T < n; T++) P[T] *= 1 / y[T]
                _ = !1
                for (var j = 0; j < n; j++)
                  if (P[j] !== w[j]) {
                    _ = !0
                    break
                  }
                ;(w = P), ++x > 200 && (_ = !1)
              }
              for (var N = {}, D = 0; D < n; D++) N[D] = []
              for (var F = 0; F < g; F++) N[(v = b[F])].push(a[F])
              for (var I = [], V = 0; V < n; V++)
                I.push(N[V][0]), I.push(N[V][N[V].length - 1])
              ;(I = I.sort(function (e, t) {
                return e - t
              })),
                l.push(I[0])
              for (var B = 1; B < I.length; B += 2) {
                var U = I[B]
                isNaN(U) || -1 !== l.indexOf(U) || l.push(U)
              }
            }
            return l
          },
          Gn = { analyze: Hn, limits: Wn },
          zn = function (e, t) {
            ;(e = new v(e)), (t = new v(t))
            var n = e.luminance(),
              r = t.luminance()
            return n > r ? (n + 0.05) / (r + 0.05) : (r + 0.05) / (n + 0.05)
          },
          Yn = Math.sqrt,
          Kn = Math.atan2,
          Xn = Math.abs,
          Jn = Math.cos,
          Zn = Math.PI,
          Qn = function (e, t, n, r) {
            void 0 === n && (n = 1),
              void 0 === r && (r = 1),
              (e = new v(e)),
              (t = new v(t))
            for (
              var o = Array.from(e.lab()),
                a = o[0],
                s = o[1],
                l = o[2],
                i = Array.from(t.lab()),
                c = i[0],
                u = i[1],
                f = i[2],
                d = Yn(s * s + l * l),
                p = Yn(u * u + f * f),
                h = a < 16 ? 0.511 : (0.040975 * a) / (1 + 0.01765 * a),
                m = (0.0638 * d) / (1 + 0.0131 * d) + 0.638,
                g = d < 1e-6 ? 0 : (180 * Kn(l, s)) / Zn;
              g < 0;

            )
              g += 360
            for (; g >= 360; ) g -= 360
            var b =
                g >= 164 && g <= 345
                  ? 0.56 + Xn(0.2 * Jn((Zn * (g + 168)) / 180))
                  : 0.36 + Xn(0.4 * Jn((Zn * (g + 35)) / 180)),
              y = d * d * d * d,
              _ = Yn(y / (y + 1900)),
              x = m * (_ * b + 1 - _),
              w = d - p,
              k = s - u,
              E = l - f,
              C = (a - c) / (n * h),
              M = w / (r * m)
            return Yn(C * C + M * M + (k * k + E * E - w * w) / (x * x))
          },
          er = function (e, t, n) {
            void 0 === n && (n = "lab"), (e = new v(e)), (t = new v(t))
            var r = e.get(n),
              o = t.get(n),
              a = 0
            for (var s in r) {
              var l = (r[s] || 0) - (o[s] || 0)
              a += l * l
            }
            return Math.sqrt(a)
          },
          tr = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
            try {
              return (
                new (Function.prototype.bind.apply(v, [null].concat(e)))(), !0
              )
            } catch (n) {
              return !1
            }
          },
          nr = {
            cool: function () {
              return pn([b.hsl(180, 1, 0.9), b.hsl(250, 0.7, 0.4)])
            },
            hot: function () {
              return pn(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
            },
          },
          rr = {
            OrRd: [
              "#fff7ec",
              "#fee8c8",
              "#fdd49e",
              "#fdbb84",
              "#fc8d59",
              "#ef6548",
              "#d7301f",
              "#b30000",
              "#7f0000",
            ],
            PuBu: [
              "#fff7fb",
              "#ece7f2",
              "#d0d1e6",
              "#a6bddb",
              "#74a9cf",
              "#3690c0",
              "#0570b0",
              "#045a8d",
              "#023858",
            ],
            BuPu: [
              "#f7fcfd",
              "#e0ecf4",
              "#bfd3e6",
              "#9ebcda",
              "#8c96c6",
              "#8c6bb1",
              "#88419d",
              "#810f7c",
              "#4d004b",
            ],
            Oranges: [
              "#fff5eb",
              "#fee6ce",
              "#fdd0a2",
              "#fdae6b",
              "#fd8d3c",
              "#f16913",
              "#d94801",
              "#a63603",
              "#7f2704",
            ],
            BuGn: [
              "#f7fcfd",
              "#e5f5f9",
              "#ccece6",
              "#99d8c9",
              "#66c2a4",
              "#41ae76",
              "#238b45",
              "#006d2c",
              "#00441b",
            ],
            YlOrBr: [
              "#ffffe5",
              "#fff7bc",
              "#fee391",
              "#fec44f",
              "#fe9929",
              "#ec7014",
              "#cc4c02",
              "#993404",
              "#662506",
            ],
            YlGn: [
              "#ffffe5",
              "#f7fcb9",
              "#d9f0a3",
              "#addd8e",
              "#78c679",
              "#41ab5d",
              "#238443",
              "#006837",
              "#004529",
            ],
            Reds: [
              "#fff5f0",
              "#fee0d2",
              "#fcbba1",
              "#fc9272",
              "#fb6a4a",
              "#ef3b2c",
              "#cb181d",
              "#a50f15",
              "#67000d",
            ],
            RdPu: [
              "#fff7f3",
              "#fde0dd",
              "#fcc5c0",
              "#fa9fb5",
              "#f768a1",
              "#dd3497",
              "#ae017e",
              "#7a0177",
              "#49006a",
            ],
            Greens: [
              "#f7fcf5",
              "#e5f5e0",
              "#c7e9c0",
              "#a1d99b",
              "#74c476",
              "#41ab5d",
              "#238b45",
              "#006d2c",
              "#00441b",
            ],
            YlGnBu: [
              "#ffffd9",
              "#edf8b1",
              "#c7e9b4",
              "#7fcdbb",
              "#41b6c4",
              "#1d91c0",
              "#225ea8",
              "#253494",
              "#081d58",
            ],
            Purples: [
              "#fcfbfd",
              "#efedf5",
              "#dadaeb",
              "#bcbddc",
              "#9e9ac8",
              "#807dba",
              "#6a51a3",
              "#54278f",
              "#3f007d",
            ],
            GnBu: [
              "#f7fcf0",
              "#e0f3db",
              "#ccebc5",
              "#a8ddb5",
              "#7bccc4",
              "#4eb3d3",
              "#2b8cbe",
              "#0868ac",
              "#084081",
            ],
            Greys: [
              "#ffffff",
              "#f0f0f0",
              "#d9d9d9",
              "#bdbdbd",
              "#969696",
              "#737373",
              "#525252",
              "#252525",
              "#000000",
            ],
            YlOrRd: [
              "#ffffcc",
              "#ffeda0",
              "#fed976",
              "#feb24c",
              "#fd8d3c",
              "#fc4e2a",
              "#e31a1c",
              "#bd0026",
              "#800026",
            ],
            PuRd: [
              "#f7f4f9",
              "#e7e1ef",
              "#d4b9da",
              "#c994c7",
              "#df65b0",
              "#e7298a",
              "#ce1256",
              "#980043",
              "#67001f",
            ],
            Blues: [
              "#f7fbff",
              "#deebf7",
              "#c6dbef",
              "#9ecae1",
              "#6baed6",
              "#4292c6",
              "#2171b5",
              "#08519c",
              "#08306b",
            ],
            PuBuGn: [
              "#fff7fb",
              "#ece2f0",
              "#d0d1e6",
              "#a6bddb",
              "#67a9cf",
              "#3690c0",
              "#02818a",
              "#016c59",
              "#014636",
            ],
            Viridis: [
              "#440154",
              "#482777",
              "#3f4a8a",
              "#31678e",
              "#26838f",
              "#1f9d8a",
              "#6cce5a",
              "#b6de2b",
              "#fee825",
            ],
            Spectral: [
              "#9e0142",
              "#d53e4f",
              "#f46d43",
              "#fdae61",
              "#fee08b",
              "#ffffbf",
              "#e6f598",
              "#abdda4",
              "#66c2a5",
              "#3288bd",
              "#5e4fa2",
            ],
            RdYlGn: [
              "#a50026",
              "#d73027",
              "#f46d43",
              "#fdae61",
              "#fee08b",
              "#ffffbf",
              "#d9ef8b",
              "#a6d96a",
              "#66bd63",
              "#1a9850",
              "#006837",
            ],
            RdBu: [
              "#67001f",
              "#b2182b",
              "#d6604d",
              "#f4a582",
              "#fddbc7",
              "#f7f7f7",
              "#d1e5f0",
              "#92c5de",
              "#4393c3",
              "#2166ac",
              "#053061",
            ],
            PiYG: [
              "#8e0152",
              "#c51b7d",
              "#de77ae",
              "#f1b6da",
              "#fde0ef",
              "#f7f7f7",
              "#e6f5d0",
              "#b8e186",
              "#7fbc41",
              "#4d9221",
              "#276419",
            ],
            PRGn: [
              "#40004b",
              "#762a83",
              "#9970ab",
              "#c2a5cf",
              "#e7d4e8",
              "#f7f7f7",
              "#d9f0d3",
              "#a6dba0",
              "#5aae61",
              "#1b7837",
              "#00441b",
            ],
            RdYlBu: [
              "#a50026",
              "#d73027",
              "#f46d43",
              "#fdae61",
              "#fee090",
              "#ffffbf",
              "#e0f3f8",
              "#abd9e9",
              "#74add1",
              "#4575b4",
              "#313695",
            ],
            BrBG: [
              "#543005",
              "#8c510a",
              "#bf812d",
              "#dfc27d",
              "#f6e8c3",
              "#f5f5f5",
              "#c7eae5",
              "#80cdc1",
              "#35978f",
              "#01665e",
              "#003c30",
            ],
            RdGy: [
              "#67001f",
              "#b2182b",
              "#d6604d",
              "#f4a582",
              "#fddbc7",
              "#ffffff",
              "#e0e0e0",
              "#bababa",
              "#878787",
              "#4d4d4d",
              "#1a1a1a",
            ],
            PuOr: [
              "#7f3b08",
              "#b35806",
              "#e08214",
              "#fdb863",
              "#fee0b6",
              "#f7f7f7",
              "#d8daeb",
              "#b2abd2",
              "#8073ac",
              "#542788",
              "#2d004b",
            ],
            Set2: [
              "#66c2a5",
              "#fc8d62",
              "#8da0cb",
              "#e78ac3",
              "#a6d854",
              "#ffd92f",
              "#e5c494",
              "#b3b3b3",
            ],
            Accent: [
              "#7fc97f",
              "#beaed4",
              "#fdc086",
              "#ffff99",
              "#386cb0",
              "#f0027f",
              "#bf5b17",
              "#666666",
            ],
            Set1: [
              "#e41a1c",
              "#377eb8",
              "#4daf4a",
              "#984ea3",
              "#ff7f00",
              "#ffff33",
              "#a65628",
              "#f781bf",
              "#999999",
            ],
            Set3: [
              "#8dd3c7",
              "#ffffb3",
              "#bebada",
              "#fb8072",
              "#80b1d3",
              "#fdb462",
              "#b3de69",
              "#fccde5",
              "#d9d9d9",
              "#bc80bd",
              "#ccebc5",
              "#ffed6f",
            ],
            Dark2: [
              "#1b9e77",
              "#d95f02",
              "#7570b3",
              "#e7298a",
              "#66a61e",
              "#e6ab02",
              "#a6761d",
              "#666666",
            ],
            Paired: [
              "#a6cee3",
              "#1f78b4",
              "#b2df8a",
              "#33a02c",
              "#fb9a99",
              "#e31a1c",
              "#fdbf6f",
              "#ff7f00",
              "#cab2d6",
              "#6a3d9a",
              "#ffff99",
              "#b15928",
            ],
            Pastel2: [
              "#b3e2cd",
              "#fdcdac",
              "#cbd5e8",
              "#f4cae4",
              "#e6f5c9",
              "#fff2ae",
              "#f1e2cc",
              "#cccccc",
            ],
            Pastel1: [
              "#fbb4ae",
              "#b3cde3",
              "#ccebc5",
              "#decbe4",
              "#fed9a6",
              "#ffffcc",
              "#e5d8bd",
              "#fddaec",
              "#f2f2f2",
            ],
          },
          or = 0,
          ar = Object.keys(rr);
        or < ar.length;
        or += 1
      ) {
        var sr = ar[or]
        rr[sr.toLowerCase()] = rr[sr]
      }
      var lr = rr
      return (
        (b.average = cn),
        (b.bezier = vn),
        (b.blend = Sn),
        (b.cubehelix = jn),
        (b.mix = b.interpolate = Bt),
        (b.random = In),
        (b.scale = pn),
        (b.analyze = Gn.analyze),
        (b.contrast = zn),
        (b.deltaE = Qn),
        (b.distance = er),
        (b.limits = Gn.limits),
        (b.valid = tr),
        (b.scales = nr),
        (b.colors = gt),
        (b.brewer = lr),
        b
      )
    })()
  }),
  Ws = e(e({}, Ts), {
    Layout: Is,
    enhanceApp({ app: e, router: t, siteData: n }) {
      var r, o, a, s, l, i
      e.component("Dyn", Vs),
        "undefined" != typeof window &&
          ((r = window),
          (o = document),
          (a = "script"),
          (s = "ga"),
          (r.GoogleAnalyticsObject = s),
          (r.ga =
            r.ga ||
            function () {
              ;(r.ga.q = r.ga.q || []).push(arguments)
            }),
          (r.ga.l = 1 * new Date()),
          (l = o.createElement(a)),
          (i = o.getElementsByTagName(a)[0]),
          (l.async = 1),
          (l.src = "https://www.google-analytics.com/analytics.js"),
          i.parentNode.insertBefore(l, i),
          ga("create", "UA-178028522-1", "auto"),
          ga("send", "pageview"),
          (n.$ga = ga))
    },
  })
const Gs = new Set(),
  zs = () => document.createElement("link")
let Ys
const Ks =
  xo &&
  (Ys = zs()) &&
  Ys.relList &&
  Ys.relList.supports &&
  Ys.relList.supports("prefetch")
    ? (e) => {
        const t = zs()
        ;(t.rel = "prefetch"), (t.href = e), document.head.appendChild(t)
      }
    : (e) => {
        const t = new XMLHttpRequest()
        t.open("GET", e, (t.withCredentials = !0)), t.send()
      }
const Xs = Ws.NotFound || (() => "404 Not Found"),
  Js = {
    name: "VitePressApp",
    setup: () => (
      (function () {
        if (!xo) return
        if (!window.IntersectionObserver) return
        let e
        if (
          (e = navigator.connection) &&
          (e.saveData || /2g/.test(e.effectiveType))
        )
          return
        const t = window.requestIdleCallback || setTimeout
        let n = null
        const r = () => {
          n && n.disconnect(),
            (n = new IntersectionObserver((e) => {
              e.forEach((e) => {
                if (e.isIntersecting) {
                  const t = e.target
                  n.unobserve(t)
                  const { pathname: r } = t
                  if (!Gs.has(r)) {
                    Gs.add(r)
                    const e = ko(r)
                    Ks(e)
                  }
                }
              })
            })),
            t(() => {
              document.querySelectorAll("#app a").forEach((e) => {
                const { target: t, hostname: r, pathname: o } = e,
                  a = o.match(/\.\w+$/)
                ;(a && ".html" !== a[0]) ||
                  ("_blank" !== t &&
                    r === location.hostname &&
                    (o !== location.pathname ? n.observe(e) : Gs.add(o)))
              })
            })
        }
        dn(r)
        const o = Co()
        _n(() => o.path, r),
          vn(() => {
            n && n.disconnect()
          })
      })(),
      () => Xr(Ws.Layout)
    ),
  }
function Zs() {
  const e = (function () {
      let e,
        t = xo
      return (function (e, t) {
        const n = qe({ path: "/", component: null, data: null }),
          r = "undefined" != typeof window
        function o(e = r ? location.href : "/") {
          const t = new URL(e, "http://a.com")
          return (
            t.pathname.endsWith("/") ||
              t.pathname.endsWith(".html") ||
              ((t.pathname += ".html"), (e = t.pathname + t.search + t.hash)),
            r &&
              (history.replaceState(
                { scrollPosition: window.scrollY },
                document.title
              ),
              history.pushState(null, "", e)),
            s(e)
          )
        }
        let a = null
        async function s(o, s = 0) {
          const l = new URL(o, "http://a.com"),
            i = (a = l.pathname)
          try {
            let t = e(i)
            if (
              ("then" in t && "function" == typeof t.then && (t = await t),
              a === i)
            ) {
              a = null
              const { default: e, __pageData: o } = t
              if (!e) throw new Error(`Invalid route component: ${e}`)
              ;(n.path = i),
                (n.component = Xe(e)),
                (n.data = He(JSON.parse(o))),
                r &&
                  Et(() => {
                    if (l.hash && !s) {
                      const e = document.querySelector(
                        decodeURIComponent(l.hash)
                      )
                      if (e) return void Mo(e, l.hash)
                    }
                    window.scrollTo(0, s)
                  })
            }
          } catch (c) {
            c.message.match(/fetch/) || console.error(c),
              a === i &&
                ((a = null), (n.path = i), (n.component = t ? Xe(t) : null))
          }
        }
        return (
          r &&
            (window.addEventListener(
              "click",
              (e) => {
                const t = e.target.closest("a")
                if (t) {
                  const {
                      href: n,
                      protocol: r,
                      hostname: a,
                      pathname: s,
                      hash: l,
                      target: i,
                    } = t,
                    c = window.location,
                    u = s.match(/\.\w+$/)
                  e.ctrlKey ||
                    e.shiftKey ||
                    e.altKey ||
                    e.metaKey ||
                    "_blank" === i ||
                    r !== c.protocol ||
                    a !== c.hostname ||
                    (u && ".html" !== u[0]) ||
                    (e.preventDefault(),
                    s === c.pathname
                      ? l &&
                        l !== c.hash &&
                        (history.pushState(null, "", l),
                        Mo(t, l, t.classList.contains("header-anchor")))
                      : o(n))
                }
              },
              { capture: !0 }
            ),
            window.addEventListener("popstate", (e) => {
              s(location.href, (e.state && e.state.scrollPosition) || 0)
            }),
            window.addEventListener("hashchange", (e) => {
              e.preventDefault()
            })),
          { route: n, go: o }
        )
      })((n) => {
        let r = ko(n)
        return (
          t && (e = r),
          (t || e === r) && (r = r.replace(/\.js$/, ".lean.js")),
          xo ? ((t = !1), __import__(r)) : require(r)
        )
      }, Xs)
    })(),
    t = _o(Js)
  t.provide(Eo, e)
  const n = jo(e.route),
    r = No(e.route)
  return (
    xo && Do(e.route, n),
    (function (e, t, n, r) {
      Object.defineProperties(e.config.globalProperties, {
        $site: { get: () => t.value },
        $siteByRoute: { get: () => n.value },
        $themeConfig: { get: () => n.value.themeConfig },
        $page: { get: () => r.value },
        $frontmatter: { get: () => r.value.frontmatter },
        $lang: { get: () => n.value.lang },
        $localePath: {
          get() {
            const { locales: e } = t.value,
              { lang: r } = n.value,
              o = Object.keys(e).find((t) => e[t].lang === r)
            return (e && o) || "/"
          },
        },
        $title: {
          get: () =>
            r.value.title
              ? r.value.title + " | " + n.value.title
              : n.value.title,
        },
        $description: { get: () => r.value.description || n.value.description },
        $withBase: { value: (e) => wo(t.value.base, e) },
      })
    })(t, Lo, n, r),
    (function (e) {
      e.component("Content", $o),
        e.component("ClientOnly", So),
        e.component("Debug", () => null)
    })(t),
    Ws.enhanceApp && Ws.enhanceApp({ app: t, router: e, siteData: Lo }),
    { app: t, router: e }
  )
}
if (xo) {
  const { app: e, router: t } = Zs()
  t.go().then(() => {
    e.mount("#app")
  })
}
export {
  kr as A,
  Bs as B,
  Zn as C,
  qs as D,
  tr as F,
  ha as _,
  yr as a,
  mr as b,
  cr as c,
  Zs as createApp,
  br as d,
  gr as e,
  Vn as f,
  Fo as g,
  Kr as h,
  tt as i,
  Qt as j,
  Zt as k,
  Jr as l,
  Gt as m,
  _n as n,
  lr as o,
  Jt as p,
  Cr as q,
  Xn as r,
  Er as s,
  c as t,
  jo as u,
  vn as v,
  Yt as w,
  st as x,
  Us as y,
  Hs as z,
}
