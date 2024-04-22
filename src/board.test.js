const Gameboard = require('./board')
const Ship = require('./ship')


test('checks ship position', () => {
   let carrier = new Ship(5)
   let board = new Gameboard()
   let placement = board.placeShip(carrier, [8,1], 'vertical')
   expect(placement).toBe('Invalid Placement')
})


test('checks ship position', () => {
   let sub = new Ship(3)
   let board = new Gameboard()
   let placement = board.placeShip(sub, [4,4], 'horizontal')
   expect(placement).toBe('ship placed')
})


test('checks if missile hit (miss case)', () => {
   let board = new Gameboard()
   let missile = board.receiveAttack([4,4])
   expect(missile).toBe('miss')
})


test('checks if missile hit (hit case)', () => {
   let board = new Gameboard()
   let sub = new Ship(3)
   board.placeShip(sub, [3,3], 'vertical')
   let missile = board.receiveAttack([4,3])
   expect(missile).toBe('hit')
})


test('checks all ships sank (still alive case)', () => {
   let board = new Gameboard()
   let sub = new Ship(3)
   board.placeShip(sub, [3,3], 'vertical')
   let areSunk = board.allShipsSunk()
   expect(areSunk).toBe('ships still afloat')
})


test('checks all ships sank (sunk case)', () => {
   let board = new Gameboard()
   let sub = new Ship(3)
   board.placeShip(sub, [3,3], 'vertical')
   board.receiveAttack([3,3])
   board.receiveAttack([4,3])
   board.receiveAttack([5,3])
   let areSunk = board.allShipsSunk()
   expect(areSunk).toBe('all ships sunk')
})
