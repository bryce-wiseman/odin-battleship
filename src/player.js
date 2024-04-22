const Ship = require('./ship')


class Player {
   constructor (name, board) {
       this.name = name
       this.alive = true
       this.board = board
       
   }


   attack (point, enemy) {
    let letters = /[^0-9]/g
    let onlyNum = point.replace(letters, '')
    let stringArr = onlyNum.split('')
    let num1 = Number(stringArr[0])
    let num2 = Number(stringArr[1])
    let fixedPoint = [num1, num2]

    this.validMove(fixedPoint, enemy)

   }

    validMove(point, enemy) {
        let thisMove = enemy.board.receiveAttack(point, enemy)
        if (thisMove == 'miss' || thisMove == 'hit') {
            return
       } else {
            let newPoint = this.chooseRandomPoint()
            this.validMove(newPoint, enemy)
       } 
    }

    chooseRandomPoint () {
        let row = Math.floor(Math.random() * 10)
        let col = Math.floor(Math.random() * 10)
        let point = [row, col]
        return point
    }
   
}

module.exports = Player