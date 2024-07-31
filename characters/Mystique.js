const Character = require('./Character');// Importa a classe Character

class Mystique extends Character {// Classe Mystique que herda de Character
    constructor() {
        super('Mystique', 'metamorfose');// Chama o construtor da classe Character
    }
}

module.exports = Mystique;
