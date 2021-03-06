function Rectangle(e, t) {
  var r = Number(e)
    , n = Number(t);
  function i(e, t) {
    return Math.round(e * Math.pow(10, t)) / Math.pow(10, t)

  }
  this.area = function() {
    return i(r * n, 2)

  }
  ,
    this.perimeter = function() {
      return i(2 * (r + n), 2)
    }

}
function validate(e) {
  var t = {
    isOK: !1,
    reason: ""
  };
  return "" === e ? t.reason = "不能为空！" : /^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(e) ? Number(e) < 0 ? t.reason = "必须大于零" : t.isOK = !0 : t.reason = "必须是数值",
         t
}
function isLegalKey(e, t, r) {
  if (/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(e))
    return !1;
  if ("." === e) {
    if (0 === r || -1 !== t.indexOf("."))
      return !1;
    if (1 === r && "-" === t.substring(0, 1))
      return !1
  }
  if ("e" === e) {
    if (0 === r || -1 !== t.indexOf("e") || -1 !== t.indexOf("E"))
      return !1;
    if (1 === r && "-" === t.substring(0, 1))
      return !1
  }
  if ("E" === e) {
    if (0 === r || -1 !== t.indexOf("e") || -1 !== t.indexOf("E"))
      return !1;
    if (1 === r && "-" === t.substring(0, 1))
      return !1
  }
  return !0
}
$(function() {
  var t = $("#width")
  , r = $("#height")
  , e = $("#calculate")
  , n = $("#perimeter")
  , i = $("#area")
  , a = $("#width-validate")
  , u = $("#height-validate")
  , s = !1;
t.focusout(function() {
  var e = validate(t.val());
  s = e.isOK,
  e.isOK ? a.html("") : (a.html("宽度" + e.reason),
    t.select())
}),
t.keypress(function(e) {
  isLegalKey(e.key, e.target.value, e.target.selectionStart) || e.preventDefault()
}),
r.focusout(function() {
  var e = validate(r.val());
  s = e.isOK,
e.isOK ? u.html("") : (u.html("高度" + e.reason),
  r.select())
}),
  r.keypress(function(e) {
    isLegalKey(e.key, e.target.value, e.target.selectionStart) || e.preventDefault()
  }),
  e.click(function() {
    if (s) {
      var e = new Rectangle(t.val(),r.val());
      n.val(e.perimeter()),
  i.val(e.area())
    }
  })
});
")"']`])}
