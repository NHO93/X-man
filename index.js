const prompt = require('prompt-sync')();

const Xavier = require('./characters/Xavier');
const Wolverine = require('./characters/Wolverine');
const Storm = require('./characters/Storm');
const Cyclops = require('./characters/Cyclops');
const Mystique = require('./characters/Mystique');

const xavier = new Xavier();
const wolverine = new Wolverine();
const storm = new Storm();
const cyclops = new Cyclops();
const mystique = new Mystique();

// Função para iniciar a história
function startStory() {
    console.log(`
        Bem-vindo à Mansão X!
        ${xavier.display()}
        ${wolverine.display()}
        ${storm.display()}
        ${cyclops.display()}
        ${mystique.display()}
    `);
    chooseAction();
}

// Função para escolher a próxima ação
function chooseAction() {
    console.log(`
        Você deve escolher a próxima ação:
        1. Investigar um sinal de mutante
        2. Treinar na Sala de Perigo
    `);
    const choice = prompt('Escolha uma ação (1 ou 2): ');

    if (choice === '1') { // Estrutura de decisão
        investigate();
    } else if (choice === '2') {
        train();
    } else {
        console.log('Escolha inválida.');
        chooseAction();
    }
}

// Função para investigar um sinal de mutante
function investigate() {
    // Estrutura de decisão
    const foundMystique = Math.random() > 0.5; // Simulação de uma decisão aleatória
    if (foundMystique) { // Estrutura de decisão
        console.log(`
            Você encontrou Mystique! 
            ${mystique.display()}
        `);
        console.log(`
            O que você vai fazer?
            1. Capturar Mystique
            2. Deixar Mystique escapar
        `);
        const choice = prompt('Escolha uma ação (1 ou 2): ');

        if (choice === '1') {
            captureMystique();
        } else if (choice === '2') {
            letMystiqueGo();
        } else {
            console.log('Escolha inválida.');
            investigate();
        }
    } else {
        console.log(`
            Você encontrou um mutante amigo. 
            O mutante se junta à equipe!
        `);
        chooseAction();
    }
}

// Função para treinar na Sala de Perigo
function train() {
    console.log(`
        Você está treinando na Sala de Perigo.
        Wolverine e Storm estão ajudando você a melhorar suas habilidades.
        Continue treinando para melhorar!
    `);
    chooseAction();
}

// Função para capturar Mystique
function captureMystique() {
    console.log(`
        Você capturou Mystique!
        ${mystique.display()}
        Ela será levada para a prisão de segurança máxima.
    `);
    chooseAction();
}

// Função para deixar Mystique escapar
function letMystiqueGo() {
    console.log(`
        Você deixou Mystique escapar.
        Isso pode causar problemas no futuro.
    `);
    chooseAction();
}

function continuar() {
    console.log(`
        Continuando...
    `);	
}

// Iniciar a história
startStory();
