const Ship = require('./ship')


test('returns ship', () => {
   expect(new Ship(3)).toEqual( {
       length: 3,
       position: null,
       alignment: null,
       hitNum: 0,
       sunk: false
   })
})


test('returns number of hits', () => {
   let pilot = new Ship(2)
   pilot.hit()
   expect(pilot.hitNum).toBe(1)
})


test('check if sunk', () => {
   let sub = new Ship(3)
   sub.hit()
   sub.hit()
   sub.hit()
   expect(sub.isSunk()).toBe(true)
})