class Character { // classe Character
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }

    display() {
        return `${this.name} tem o poder de ${this.power}.`; // Cyclops tem o poder de raios ópticos de energia.    
    }
}

module.exports = Character; // exporta a classe Character para ser utilizada em outros arquivos.
