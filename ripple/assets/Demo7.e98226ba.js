import {
  x as e,
  y as t,
  V as r,
  d as i,
  S as n,
  z as s,
  D as a,
  N as o,
  G as h,
  J as l,
  K as d,
  Q as u,
  X as f,
  Y as p,
  A as m,
  f as c,
  h as v,
  i as g,
  j as x,
  Z as y,
  _ as D,
  q as w,
} from "./trois.module.b64db74f.js"
import { t as M } from "./tweakpane.53af3c4b.js"
import {
  f as b,
  n as S,
  z as C,
  r as U,
  o as q,
  c as F,
  w as H,
  b as P,
} from "./app.c4cbb42c.js"
function _(e) {
  ;(this.renderer = e),
    (this.width = 512),
    (this.height = 512),
    (this.delta = new r(1 / this.width, 1 / this.height))
  const t = { minFilter: o, magFilter: o, type: h, format: l, depthBuffer: !1 }
  ;(this.hMap = new i(this.width, this.height, t)),
    (this.hMap1 = new i(this.width, this.height, t)),
    (this.fsQuad = new z()),
    this.initShaders()
}
;(_.prototype.initShaders = function () {
  const e =
    "\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n  "
  ;(this.copyMat = new n({
    uniforms: { tDiffuse: { value: null } },
    vertexShader: e,
    fragmentShader:
      "\n      uniform sampler2D tDiffuse;\n      varying vec2 vUv;\n      void main() {\n        gl_FragColor = texture2D(tDiffuse, vUv);\n      }\n    ",
  })),
    (this.updateMat = new n({
      uniforms: { tDiffuse: { value: null }, delta: new s(this.delta) },
      vertexShader: e,
      fragmentShader:
        "\n      uniform sampler2D tDiffuse;\n      uniform vec2 delta;\n      varying vec2 vUv;\n      void main() {\n        vec4 texel = texture2D(tDiffuse, vUv);\n\n        vec2 dx = vec2(delta.x, 0.0);\n        vec2 dy = vec2(0.0, delta.y);\n        float average = (\n          texture2D(tDiffuse, vUv - dx).r +\n          texture2D(tDiffuse, vUv - dy).r +\n          texture2D(tDiffuse, vUv + dx).r +\n          texture2D(tDiffuse, vUv + dy).r\n        ) * 0.25;\n        texel.g += (average - texel.r) * 2.0;\n        texel.g *= 0.995;\n        texel.r += texel.g;\n\n        gl_FragColor = texel;\n      }\n    ",
    })),
    (this.normalsMat = new n({
      uniforms: { tDiffuse: { value: null }, delta: new s(this.delta) },
      vertexShader: e,
      fragmentShader:
        "\n      uniform sampler2D tDiffuse;\n      uniform vec2 delta;\n      varying vec2 vUv;\n      void main() {\n        vec4 texel = texture2D(tDiffuse, vUv);\n        vec3 dx = vec3(delta.x, texture2D(tDiffuse, vec2(vUv.x + delta.x, vUv.y)).r - texel.r, 0.0);\n        vec3 dy = vec3(0.0, texture2D(tDiffuse, vec2(vUv.x, vUv.y + delta.y)).r - texel.r, delta.y);\n        texel.ba = normalize(cross(dy, dx)).xz;\n        gl_FragColor = texel;\n      }\n    ",
    })),
    (this.dropMat = new n({
      uniforms: {
        tDiffuse: { value: null },
        center: new s(new r()),
        radius: { value: 0.05 },
        strength: { value: 0.5 },
      },
      vertexShader: e,
      fragmentShader:
        "\n      const float PI = 3.1415926535897932384626433832795;\n      uniform sampler2D tDiffuse;\n      uniform vec2 center;\n      uniform float radius;\n      uniform float strength;\n      varying vec2 vUv;\n      void main() {\n        vec4 texel = texture2D(tDiffuse, vUv);\n        float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - vUv) / radius);\n        drop = 0.5 - cos(drop * PI) * 0.5;\n        texel.r += drop * strength;\n        // texel.r = clamp(texel.r, -2.0, 2.0);\n        gl_FragColor = texel;\n      }\n    ",
    }))
}),
  (_.prototype.update = function () {
    this.updateHMap(), this.updateHMapNormals()
  }),
  (_.prototype.updateHMap = function () {
    ;(this.updateMat.uniforms.tDiffuse.value = this.hMap.texture),
      this.renderShaderMat(this.updateMat, this.hMap1),
      this.swapBuffers()
  }),
  (_.prototype.updateHMapNormals = function () {
    ;(this.normalsMat.uniforms.tDiffuse.value = this.hMap.texture),
      this.renderShaderMat(this.normalsMat, this.hMap1),
      this.swapBuffers()
  }),
  (_.prototype.addDrop = function (e, t, r, i) {
    ;(this.dropMat.uniforms.tDiffuse.value = this.hMap.texture),
      this.dropMat.uniforms.center.value.set(e, t),
      (this.dropMat.uniforms.radius.value = r),
      (this.dropMat.uniforms.strength.value = i),
      this.renderShaderMat(this.dropMat, this.hMap1),
      this.swapBuffers()
  }),
  (_.prototype.renderShaderMat = function (e, t) {
    this.fsQuad.material = e
    const r = this.renderer.getRenderTarget()
    this.renderer.setRenderTarget(t),
      this.fsQuad.render(this.renderer),
      this.renderer.setRenderTarget(r)
  }),
  (_.prototype.swapBuffers = function () {
    const e = this.hMap
    ;(this.hMap = this.hMap1), (this.hMap1 = e)
  })
const z = (function () {
  const r = new e(-1, 1, 1, -1, 0, 1),
    i = new t(2, 2),
    n = function (e) {
      this._mesh = new a(i, e)
    }
  return (
    Object.defineProperty(n.prototype, "material", {
      get: function () {
        return this._mesh.material
      },
      set: function (e) {
        this._mesh.material = e
      },
    }),
    Object.assign(n.prototype, {
      render: function (e) {
        e.render(this._mesh, r)
      },
    }),
    n
  )
})()
const E = {
  components: {
    AmbientLight: m,
    Camera: c,
    LiquidPlane: b({
      extends: d,
      props: {
        width: { type: Number, default: 10 },
        height: { type: Number, default: 10 },
        widthSegments: { type: Number, default: 200 },
        heightSegments: { type: Number, default: 200 },
        color: { type: [Number, String], default: "#ffffff" },
        metalness: { type: Number, default: 0.75 },
        roughness: { type: Number, default: 0.25 },
      },
      mounted() {
        ;(this.liquidEffect = new _(this.renderer.renderer)),
          this.renderer.onMounted(() => {
            ;(this.liquidEffect.renderer = this.renderer.renderer),
              this.renderer.onBeforeRender(this.update)
          }),
          (this.material = new u({
            color: this.color,
            side: f,
            metalness: this.metalness,
            roughness: this.roughness,
            onBeforeCompile: (e) => {
              ;(e.uniforms.hmap = { value: this.liquidEffect.hMap.texture }),
                (e.vertexShader = "uniform sampler2D hmap;\n" + e.vertexShader)
              e.vertexShader = e.vertexShader.replace(
                "#include <begin_vertex>",
                "\n          vec3 transformed = vec3(position);\n          vec4 info = texture2D(hmap, uv);\n          vNormal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a).xzy;\n          transformed.z = 20. * info.r;\n        "
              )
            },
          })),
          p(this, ["metalness", "roughness"], this.material),
          S(
            () => this.color,
            (e) => this.material.color.set(e)
          ),
          (this.geometry = new t(
            this.width,
            this.height,
            this.widthSegments,
            this.heightSegments
          )),
          (this.mesh = new a(this.geometry, this.material)),
          this.initObject3D(this.mesh)
      },
      unmounted() {
        this.renderer.offBeforeRender(this.update)
      },
      methods: {
        update() {
          this.liquidEffect.update()
        },
      },
    }),
    PointLight: v,
    Renderer: g,
    Scene: x,
  },
  setup: () => ({ WIDTH: 30, HEIGHT: 30 }),
  data: () => ({
    color: "#ffffff",
    metalness: 1,
    roughness: 0.2,
    light1Color: "#FFFF80",
    light2Color: "#DE3578",
    light3Color: "#FF4040",
    light4Color: "#0d25bb",
  }),
  mounted() {
    ;(this.pointer = this.$refs.renderer.three.pointer),
      (this.liquidEffect = this.$refs.liquid.liquidEffect),
      this.liquidEffect.addDrop(0, 0, 0.05, 0.05),
      (this.raycaster = new y()),
      (this.pointerPlane = new D(new w(0, 0, 1), 0)),
      (this.pointerV3 = new w()),
      (this.pane = new M()),
      this.pane.addInput(this, "color"),
      this.pane.addInput(this, "metalness", { min: 0, max: 1 }),
      this.pane.addInput(this, "roughness", { min: 0, max: 1 }),
      this.pane
        .addButton({ title: "Random lights" })
        .on("click", this.randomColors)
  },
  unmounted() {
    this.pane.dispose()
  },
  methods: {
    onPointerMove() {
      this.raycaster.setFromCamera(
        this.pointer.positionN,
        this.$refs.renderer.three.camera
      ),
        this.raycaster.ray.intersectPlane(this.pointerPlane, this.pointerV3)
      const e = (2 * this.pointerV3.x) / this.WIDTH,
        t = (2 * this.pointerV3.y) / this.HEIGHT
      this.liquidEffect.addDrop(e, t, 0.025, 0.005)
    },
    randomColors() {
      ;(this.light1Color = C.random().hex()),
        (this.light2Color = C.random().hex()),
        (this.light3Color = C.random().hex()),
        (this.light4Color = C.random().hex())
    },
  },
}
E.render = function (e, t, r, i, n, s) {
  const a = U("Camera"),
    o = U("AmbientLight"),
    h = U("PointLight"),
    l = U("LiquidPlane"),
    d = U("Scene"),
    u = U("Renderer")
  return (
    q(),
    F(
      u,
      {
        ref: "renderer",
        antialias: "",
        pointer: { onMove: s.onPointerMove },
        resize: "",
        "orbit-ctrl": { enableDamping: !0 },
      },
      {
        default: H(() => [
          P(a, { position: { x: 0, y: 0, z: 20 } }),
          P(
            d,
            { ref: "scene" },
            {
              default: H(() => [
                P(o),
                P(
                  h,
                  { color: n.light1Color, position: { x: 50, y: 50, z: 50 } },
                  null,
                  8,
                  ["color"]
                ),
                P(
                  h,
                  { color: n.light2Color, position: { x: -50, y: 50, z: 50 } },
                  null,
                  8,
                  ["color"]
                ),
                P(
                  h,
                  { color: n.light3Color, position: { x: -50, y: -50, z: 50 } },
                  null,
                  8,
                  ["color"]
                ),
                P(
                  h,
                  { color: n.light4Color, position: { x: 50, y: -50, z: 50 } },
                  null,
                  8,
                  ["color"]
                ),
                P(
                  l,
                  {
                    ref: "liquid",
                    width: i.WIDTH,
                    height: i.HEIGHT,
                    "width-segments": 512,
                    "height-segments": 512,
                    color: n.color,
                    metalness: n.metalness,
                    roughness: n.roughness,
                  },
                  null,
                  8,
                  ["width", "height", "color", "metalness", "roughness"]
                ),
              ]),
              _: 1,
            },
            512
          ),
        ]),
        _: 1,
      },
      8,
      ["pointer"]
    )
  )
}
export default E
