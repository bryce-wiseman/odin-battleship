const Player = require('./player')
const Gameboard = require('./board')

const playerDiv = document.getElementById('playerBoard')
const computerDiv = document.getElementById('computerBoard')
const resetShips = document.getElementById('resetShips')


let player = new Player('Player', new Gameboard())
let computer = new Player('Computer', new Gameboard())

console.log(player)
console.log(computer)

makeTiles()
player.board.placeAllShips()
player.board.updateTileToShip()
computer.board.placeAllShips()

resetShips.onclick = function() {
    while (playerDiv.firstChild) {
        playerDiv.removeChild(playerDiv.firstChild)
    } 
    while (computerDiv.firstChild) {
        computerDiv.removeChild(computerDiv.firstChild)
    } 
    player.board = new Gameboard()
    computer.board = new Gameboard()
    makeTiles()
    player.board.placeAllShips()
    player.board.updateTileToShip()
    computer.board.placeAllShips()
}

function makeTiles() {
    //for player
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            let tile = document.createElement('button')
            tile.type = 'button'
            tile.className = 'boardTile'
            tile.id = "Player" + y + "" + x
            playerDiv.append(tile)
        }
    }
    //for CPU
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            let tile = document.createElement('button')
            tile.type = 'button'
            tile.className = 'boardTile'
            tile.id = "Computer" + y + "" + x
            tile.onclick = function() {
                let ranNum = Math.floor(Math.random() * 100)
                let numStr = String(ranNum)
                player.attack(tile.id, computer)
                computer.attack('Player' + numStr, player)
            }
            computerDiv.append(tile)
        }
    }
}

