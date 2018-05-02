import test from 'ava'
import fn from '.'

test('2 pi difference in radian format should be opposite', t => {
  t.true(fn(0, 2 * Math.PI))
})

test('argument order should not be important', t => {
  t.true(fn(2 * Math.PI, 0))
})

test('even multiples of pi difference in radian format should be opposite', t => {
  t.true(fn(0, 6 * Math.PI))
  t.true(fn(14 * Math.PI, 8 * Math.PI))
})

test('negative angles should also work', t => {
  t.true(fn(-2 * Math.PI, 4 * Math.PI))
  t.false(fn(-2 * Math.PI, 2.5 * Math.PI))
})

test('default tolerance should be <= 0.1', t => {
  t.true(fn(-2 * Math.PI, (4 * Math.PI) + 0.09999))
  t.false(fn(0, -0.2))
  t.false(fn(0, (2 * Math.PI) - 0.101))
})

test('calculation in degree should work', t => {
  const opts = {isDegree: true}
  t.true(fn(0, 4 * 180, opts))
  t.true(fn(12 * 180, 2 * 180, opts))
  t.true(fn(-2 * 180, 4 * 180, opts))
  t.false(fn(-3 * 180, 2 * 180, opts))
  t.true(fn(-2 * 180, (4 * 180) + 0.1, opts))
  t.false(fn(-2 * 180, (6 * 180) - 0.11, opts))
})
