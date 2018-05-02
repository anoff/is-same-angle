module.exports = (val1, val2, opts) => {
  opts = opts || {}
  let tolerance = typeof opts.tolerance === 'number' ? Math.abs(opts.tolerance) : 0.1
  let diff = val2 - val1
  if (opts.isDegree) {
    diff *= Math.PI / 180
    tolerance *= Math.PI / 180
  }
  const mod = (Math.abs(diff) % (2 * Math.PI))
  return Math.abs(mod) <= tolerance
}
