const Player = require('./player')
const Ship = require('./ship')


test('creates player and CPU, tests if hit works', () => {
   let player = new Player('player1')
   let CPU = new Player('CPU')
   let sub = new Ship(3)
   player.board.placeShip(sub, [2, 2], 'vertical')
   let CPUMove = CPU.attack([2,2], player.board)
   expect(CPUMove).toBe('hit')
})


test('creates player and CPU, tests if double hit prompts randomPoint', () => {
   let player = new Player('player1')
   let CPU = new Player('CPU')
   let sub = new Ship(3)
   player.board.placeShip(sub, [2, 2], 'vertical')
   CPU.attack([2,2], player.board)
   let CPUMove2 = CPU.attack([2,2], player.board)
   let validMoves = ['hit', 'miss']
   expect(validMoves).toContain(CPUMove2)
})
