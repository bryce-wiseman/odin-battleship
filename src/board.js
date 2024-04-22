const Ship = require('./ship')

class Gameboard {
    constructor() {
        this.rows = [
            ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
            ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
            ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
            ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
            ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
            ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
            ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
            ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
            ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
            ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']
        ], 
        this.fleet = [new Ship('pilot', 2), new Ship('sub', 3), new Ship('battleship', 3), new Ship('destroyer', 4), new Ship('carrier', 5)]
    }
 
 
    placeShip(ship, position, alignment) {
        ship.position = position
        ship.alignment = alignment
        this.checkShipPlacement(ship, position, alignment)
    }
 
    checkShipPlacement(ship, position, alignment) {
        if (alignment == 'horizontal') {
            if ((ship.length + position[1]) > 10) {
                this.placeShip(ship, this.randomShipPoint(), this.randomShipOrientation())
                return
            } else {
                for (let i = 0; i < ship.length; i++) {
                    if (this.rows[position[0]][position[1] + i] == 's' || this.rows[position[0]][position[1] + i] == 'b') {
                        this.placeShip(ship, this.randomShipPoint(), this.randomShipOrientation())
                        return 
                    }
                }
                for (let i = 0; i < ship.length; i++) {
                    this.rows[position[0]][position[1] + i] = 's'
                    if (this.rows[position[0]+1]) {
                        this.rows[position[0]+1][position[1] + i] = 'b'
                    }
                    if (this.rows[position[0]-1]) {
                        this.rows[position[0]-1][position[1] + i] = 'b'
                    }
                }
                if (this.rows[position[1]+ship.length]) {
                    this.rows[position[0]][position[1]+ship.length] = 'b'
                }
                if (this.rows[position[1]-1]) {
                    this.rows[position[0]][position[1]-1] = 'b'
                }
                return 'ship placed'
            }
        } else if (alignment == 'vertical') {
            if ((ship.length + position[0]) > 10) {
                this.placeShip(ship, this.randomShipPoint(), this.randomShipOrientation())
                return 
            } else {
                for (let i = 0; i < ship.length; i++) {
                    if (this.rows[(position[0] + i)][position[1]] == 's' || this.rows[(position[0] + i)][position[1]] == 'b') {
                        this.placeShip(ship, this.randomShipPoint(), this.randomShipOrientation())
                        return 
                    } 
                }
                for (let i = 0; i < ship.length; i++) {
                    this.rows[position[0] + i][position[1]] = 's'
                    if (this.rows[position[1]+1]) {
                        this.rows[position[0] + i][position[1] + 1] = 'b'
                    }
                    if (this.rows[position[1]-1]) {
                        this.rows[position[0] + i][position[1] - 1] = 'b'
                    }
                }
                if (this.rows[position[0]+ship.length]) {
                    this.rows[position[0] + ship.length][position[1]] = 'b'
                }
                if (this.rows[position[0] - 1]) {
                    this.rows[position[0] - 1][position[1]] = 'b'
                }
                return 'ship placed'
            }
        } else {
            return 'Alignment must be vertical or horizontal and position must be between [0, 0] and [9, 9]'
        }
    }

    randomShipPoint() {
        let row = Math.floor(Math.random() * 10)
        let col = Math.floor(Math.random() * 10)
        let point = [row, col]
        return point
    }

    randomShipOrientation() {
        let orientation1 = 'vertical'
        let orientation2 = 'horizontal'
        let decider = Math.random() * 10
        if (decider > 5) {
            let decision = orientation1
            return decision
        } else {
            let decision = orientation2
            return decision
        }
    }

    placeAllShips() {
        this.placeShip(this.fleet[0], this.randomShipPoint(), this.randomShipOrientation())
        this.placeShip(this.fleet[1], this.randomShipPoint(), this.randomShipOrientation())
        this.placeShip(this.fleet[2], this.randomShipPoint(), this.randomShipOrientation())
        this.placeShip(this.fleet[3], this.randomShipPoint(), this.randomShipOrientation())
        this.placeShip(this.fleet[4], this.randomShipPoint(), this.randomShipOrientation())
    }
 
    receiveAttack(position, enemy) {
        if (this.rows[position[0]][position[1]] == 'e' || this.rows[position[0]][position[1]] == 'b') {
            this.rows[position[0]][position[1]] = 'm'
            this.updateTileToMiss(position, enemy)
            return 'miss'
        } else if (this.rows[position[0]][position[1]] == 's') {
            this.rows[position[0]][position[1]] = 'h'
            this.updateTileToHit(position, enemy)
            return 'hit'
        } else if (this.rows[position[0]][position[1]] == 'h') {
            return 'already hit'
        } else if (this.rows[position[0]][position[1]] == 'm') {
            return 'already missed'
        }
 }

    updateTileToMiss(point, enemy) {
        let getID = enemy.name + point.join('')
        let tile = document.getElementById(getID)
        tile.classList += " miss"
    }

    updateTileToHit(point, enemy) {
        let getID = enemy.name + point.join('')
        let tile = document.getElementById(getID)
        tile.classList += " hit"
        this.allShipsSunk(enemy)
    }

    updateTileToShip() {
        for (let r = 0; r < 10; r++) {
            for (let i = 0; i < 10; i++) {
                if (this.rows[r][i] == 's') {
                    let getID = 'Player' + r + i
                    let tile = document.getElementById(getID)
                    tile.classList += " ship"
                } 
            }
        }
    }
 
    allShipsSunk(enemy) {
        for (let r = 0; r < 10; r++) {
            for (let i = 0; i < 10; i++) {
                if (this.rows[r][i] == 's') {
                    return 'ships still afloat'
                }
            }
        }
        console.log(this.gameOver(enemy))
        return 'all ships sunk'
    }
 
    gameOver(enemy) {
        let resultDiv = document.getElementById('results')
        resultDiv.classList.remove('hidden')
        if (enemy.name == 'Computer') {
            let winner = 'PLAYER'
            resultDiv.innerHTML = `${winner} WINS!`
            return 
        } else {
            let winner = 'COMPUTER'
            resultDiv.innerHTML = `${winner} WINS!`
            return 
        }
    }
 }

 module.exports = Gameboard