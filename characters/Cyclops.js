const Character = require('./Character');// Importa a classe Character

class Cyclops extends Character {// Classe Cyclops que herda de Character
    constructor() {
        super('Cyclops', 'raios ópticos de energia');
    }
}

module.exports = Cyclops;
