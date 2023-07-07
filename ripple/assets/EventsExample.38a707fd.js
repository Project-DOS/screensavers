import {
  $ as o,
  f as r,
  a5 as e,
  h as t,
  i as a,
  j as i,
} from "./trois.module.b64db74f.js"
import { r as n, o as l, c as f, w as s, b as c } from "./app.c4cbb42c.js"
const b = {
  components: {
    Box: o,
    Camera: r,
    LambertMaterial: e,
    PointLight: t,
    Renderer: a,
    Scene: i,
  },
  data: () => ({ boxColor: "#ffffff" }),
  methods: {
    boxOver({ over: o }) {
      this.boxColor = o ? "#ff0000" : "#ffffff"
    },
    boxClick(o) {
      alert("Click"), console.log(o)
    },
  },
}
b.render = function (o, r, e, t, a, i) {
  const b = n("Camera"),
    d = n("PointLight"),
    m = n("LambertMaterial"),
    x = n("Box"),
    p = n("Scene"),
    u = n("Renderer")
  return (
    l(),
    f(
      u,
      {
        ref: "renderer",
        antialias: "",
        resize: "",
        "orbit-ctrl": {
          autoRotate: !0,
          enableDamping: !0,
          dampingFactor: 0.05,
        },
      },
      {
        default: s(() => [
          c(b, { position: { z: 10 } }),
          c(p, null, {
            default: s(() => [
              c(d, { position: { y: 50, z: 50 } }),
              c(
                x,
                {
                  ref: "box",
                  onPointerOver: i.boxOver,
                  onClick: i.boxClick,
                  rotation: { y: Math.PI / 4, z: Math.PI / 4 },
                },
                {
                  default: s(() => [
                    c(m, { color: a.boxColor }, null, 8, ["color"]),
                  ]),
                  _: 1,
                },
                8,
                ["onPointerOver", "onClick", "rotation"]
              ),
            ]),
            _: 1,
          }),
        ]),
        _: 1,
      },
      8,
      ["orbit-ctrl"]
    )
  )
}
export default b
