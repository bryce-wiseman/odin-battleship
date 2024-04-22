class Ship {
    constructor(name, length) {
        this.name = name
        this.length = length
        this.position = null
        this.alignment = null
        this.hitNum = 0
        this.sunk = false
    }
 
 
    hit() {
        this.hitNum++
        this.isSunk()
    }
 
 
    isSunk() {
        if (this.hitNum == this.length) {
            this.sunk = true
        }
        return this.sunk
    }
 } 

 module.exports = Ship