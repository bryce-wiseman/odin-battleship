/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nclass Gameboard {\n  constructor() {\n    this.rows = [['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'], ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'], ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'], ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'], ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'], ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'], ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'], ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'], ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'], ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']], this.fleet = [new Ship('pilot', 2), new Ship('sub', 3), new Ship('battleship', 3), new Ship('destroyer', 4), new Ship('carrier', 5)];\n  }\n  placeShip(ship, position, alignment) {\n    ship.position = position;\n    ship.alignment = alignment;\n    this.checkShipPlacement(ship, position, alignment);\n  }\n  checkShipPlacement(ship, position, alignment) {\n    if (alignment == 'horizontal') {\n      if (ship.length + position[1] > 10) {\n        this.placeShip(ship, this.randomShipPoint(), this.randomShipOrientation());\n        return;\n      } else {\n        for (let i = 0; i < ship.length; i++) {\n          if (this.rows[position[0]][position[1] + i] == 's' || this.rows[position[0]][position[1] + i] == 'b') {\n            this.placeShip(ship, this.randomShipPoint(), this.randomShipOrientation());\n            return;\n          }\n        }\n        for (let i = 0; i < ship.length; i++) {\n          this.rows[position[0]][position[1] + i] = 's';\n          if (this.rows[position[0] + 1]) {\n            this.rows[position[0] + 1][position[1] + i] = 'b';\n          }\n          if (this.rows[position[0] - 1]) {\n            this.rows[position[0] - 1][position[1] + i] = 'b';\n          }\n        }\n        if (this.rows[position[1] + ship.length]) {\n          this.rows[position[0]][position[1] + ship.length] = 'b';\n        }\n        if (this.rows[position[1] - 1]) {\n          this.rows[position[0]][position[1] - 1] = 'b';\n        }\n        return 'ship placed';\n      }\n    } else if (alignment == 'vertical') {\n      if (ship.length + position[0] > 10) {\n        this.placeShip(ship, this.randomShipPoint(), this.randomShipOrientation());\n        return;\n      } else {\n        for (let i = 0; i < ship.length; i++) {\n          if (this.rows[position[0] + i][position[1]] == 's' || this.rows[position[0] + i][position[1]] == 'b') {\n            this.placeShip(ship, this.randomShipPoint(), this.randomShipOrientation());\n            return;\n          }\n        }\n        for (let i = 0; i < ship.length; i++) {\n          this.rows[position[0] + i][position[1]] = 's';\n          if (this.rows[position[1] + 1]) {\n            this.rows[position[0] + i][position[1] + 1] = 'b';\n          }\n          if (this.rows[position[1] - 1]) {\n            this.rows[position[0] + i][position[1] - 1] = 'b';\n          }\n        }\n        if (this.rows[position[0] + ship.length]) {\n          this.rows[position[0] + ship.length][position[1]] = 'b';\n        }\n        if (this.rows[position[0] - 1]) {\n          this.rows[position[0] - 1][position[1]] = 'b';\n        }\n        return 'ship placed';\n      }\n    } else {\n      return 'Alignment must be vertical or horizontal and position must be between [0, 0] and [9, 9]';\n    }\n  }\n  randomShipPoint() {\n    let row = Math.floor(Math.random() * 10);\n    let col = Math.floor(Math.random() * 10);\n    let point = [row, col];\n    return point;\n  }\n  randomShipOrientation() {\n    let orientation1 = 'vertical';\n    let orientation2 = 'horizontal';\n    let decider = Math.random() * 10;\n    if (decider > 5) {\n      let decision = orientation1;\n      return decision;\n    } else {\n      let decision = orientation2;\n      return decision;\n    }\n  }\n  placeAllShips() {\n    this.placeShip(this.fleet[0], this.randomShipPoint(), this.randomShipOrientation());\n    this.placeShip(this.fleet[1], this.randomShipPoint(), this.randomShipOrientation());\n    this.placeShip(this.fleet[2], this.randomShipPoint(), this.randomShipOrientation());\n    this.placeShip(this.fleet[3], this.randomShipPoint(), this.randomShipOrientation());\n    this.placeShip(this.fleet[4], this.randomShipPoint(), this.randomShipOrientation());\n  }\n  receiveAttack(position, enemy) {\n    if (this.rows[position[0]][position[1]] == 'e' || this.rows[position[0]][position[1]] == 'b') {\n      this.rows[position[0]][position[1]] = 'm';\n      this.updateTileToMiss(position, enemy);\n      return 'miss';\n    } else if (this.rows[position[0]][position[1]] == 's') {\n      this.rows[position[0]][position[1]] = 'h';\n      this.updateTileToHit(position, enemy);\n      return 'hit';\n    } else if (this.rows[position[0]][position[1]] == 'h') {\n      return 'already hit';\n    } else if (this.rows[position[0]][position[1]] == 'm') {\n      return 'already missed';\n    }\n  }\n  updateTileToMiss(point, enemy) {\n    let getID = enemy.name + point.join('');\n    let tile = document.getElementById(getID);\n    tile.classList += \" miss\";\n  }\n  updateTileToHit(point, enemy) {\n    let getID = enemy.name + point.join('');\n    let tile = document.getElementById(getID);\n    tile.classList += \" hit\";\n    this.allShipsSunk(enemy);\n  }\n  updateTileToShip() {\n    for (let r = 0; r < 10; r++) {\n      for (let i = 0; i < 10; i++) {\n        if (this.rows[r][i] == 's') {\n          let getID = 'Player' + r + i;\n          let tile = document.getElementById(getID);\n          tile.classList += \" ship\";\n        }\n      }\n    }\n  }\n  allShipsSunk(enemy) {\n    for (let r = 0; r < 10; r++) {\n      for (let i = 0; i < 10; i++) {\n        if (this.rows[r][i] == 's') {\n          return 'ships still afloat';\n        }\n      }\n    }\n    console.log(this.gameOver(enemy));\n    return 'all ships sunk';\n  }\n  gameOver(enemy) {\n    let resultDiv = document.getElementById('results');\n    resultDiv.classList.remove('hidden');\n    if (enemy.name == 'Computer') {\n      let winner = 'PLAYER';\n      resultDiv.innerHTML = `${winner} WINS!`;\n      return;\n    } else {\n      let winner = 'COMPUTER';\n      resultDiv.innerHTML = `${winner} WINS!`;\n      return;\n    }\n  }\n}\nmodule.exports = Gameboard;\n\n//# sourceURL=webpack://odin-battleship/./src/board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\nconst Gameboard = __webpack_require__(/*! ./board */ \"./src/board.js\");\nconst playerDiv = document.getElementById('playerBoard');\nconst computerDiv = document.getElementById('computerBoard');\nconst resetShips = document.getElementById('resetShips');\nlet player = new Player('Player', new Gameboard());\nlet computer = new Player('Computer', new Gameboard());\nconsole.log(player);\nconsole.log(computer);\nmakeTiles();\nplayer.board.placeAllShips();\nplayer.board.updateTileToShip();\ncomputer.board.placeAllShips();\nresetShips.onclick = function () {\n  while (playerDiv.firstChild) {\n    playerDiv.removeChild(playerDiv.firstChild);\n  }\n  while (computerDiv.firstChild) {\n    computerDiv.removeChild(computerDiv.firstChild);\n  }\n  player.board = new Gameboard();\n  computer.board = new Gameboard();\n  makeTiles();\n  player.board.placeAllShips();\n  player.board.updateTileToShip();\n  computer.board.placeAllShips();\n};\nfunction makeTiles() {\n  //for player\n  for (let y = 0; y < 10; y++) {\n    for (let x = 0; x < 10; x++) {\n      let tile = document.createElement('button');\n      tile.type = 'button';\n      tile.className = 'boardTile';\n      tile.id = \"Player\" + y + \"\" + x;\n      playerDiv.append(tile);\n    }\n  }\n  //for CPU\n  for (let y = 0; y < 10; y++) {\n    for (let x = 0; x < 10; x++) {\n      let tile = document.createElement('button');\n      tile.type = 'button';\n      tile.className = 'boardTile';\n      tile.id = \"Computer\" + y + \"\" + x;\n      tile.onclick = function () {\n        let ranNum = Math.floor(Math.random() * 100);\n        let numStr = String(ranNum);\n        player.attack(tile.id, computer);\n        computer.attack('Player' + numStr, player);\n      };\n      computerDiv.append(tile);\n    }\n  }\n}\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nclass Player {\n  constructor(name, board) {\n    this.name = name;\n    this.alive = true;\n    this.board = board;\n  }\n  attack(point, enemy) {\n    let letters = /[^0-9]/g;\n    let onlyNum = point.replace(letters, '');\n    let stringArr = onlyNum.split('');\n    let num1 = Number(stringArr[0]);\n    let num2 = Number(stringArr[1]);\n    let fixedPoint = [num1, num2];\n    this.validMove(fixedPoint, enemy);\n  }\n  validMove(point, enemy) {\n    let thisMove = enemy.board.receiveAttack(point, enemy);\n    if (thisMove == 'miss' || thisMove == 'hit') {\n      return;\n    } else {\n      let newPoint = this.chooseRandomPoint();\n      this.validMove(newPoint, enemy);\n    }\n  }\n  chooseRandomPoint() {\n    let row = Math.floor(Math.random() * 10);\n    let col = Math.floor(Math.random() * 10);\n    let point = [row, col];\n    return point;\n  }\n}\nmodule.exports = Player;\n\n//# sourceURL=webpack://odin-battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("class Ship {\n  constructor(name, length) {\n    this.name = name;\n    this.length = length;\n    this.position = null;\n    this.alignment = null;\n    this.hitNum = 0;\n    this.sunk = false;\n  }\n  hit() {\n    this.hitNum++;\n    this.isSunk();\n  }\n  isSunk() {\n    if (this.hitNum == this.length) {\n      this.sunk = true;\n    }\n    return this.sunk;\n  }\n}\nmodule.exports = Ship;\n\n//# sourceURL=webpack://odin-battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;