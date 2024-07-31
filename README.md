# X-man

### Roteiro Resumido da Explicação do Projeto Interativo dos X-Men

---

**Introdução**

1. **Apresentação**
   - Olá! Hoje vou apresentar o projeto "X-Men Interactive Story".
   - Este projeto é uma história interativa no terminal, onde você pode tomar decisões como se fosse um membro dos X-Men.

---

**Parte 1: Configuração do Projeto**

2. **Estrutura e Inicialização**
   - Criamos a estrutura de pastas e arquivos do projeto.
   - Inicializamos o projeto Node.js e instalamos o módulo `prompt-sync` para lidar com entradas do usuário no terminal.

---

**Parte 2: Implementação das Classes dos Personagens**

3. **Classe Base Character**
   - Criamos a classe base `Character` com nome e poder dos personagens.
   - Cada personagem (Professor Xavier, Wolverine, Storm, Cyclops, Mystique) herda da classe `Character` e define seus próprios poderes.

---

**Parte 3: Implementação da História Interativa**

4. **Arquivo Principal index.js**
   - Importamos as classes dos personagens e criamos instâncias de cada um.
   - Implementamos a função `startStory` para apresentar os personagens e iniciar a história.
   - A função `chooseAction` permite ao usuário escolher entre investigar um sinal de mutante ou treinar na Sala de Perigo.
   - A função `investigate` simula uma investigação onde o usuário pode encontrar Mystique ou um mutante amigo.
   - A função `train` simula um treinamento na Sala de Perigo.
   - As funções `captureMystique` e `letMystiqueGo` lidam com as decisões do usuário sobre Mystique.

---

**Conclusão**

5. **Resumo Final**
   - Este foi o projeto "X-Men Interactive Story".
   - Implementamos uma história interativa no terminal utilizando classes para os personagens e o módulo `prompt-sync` para interagir com o usuário.
   - Obrigado por assistir e espero que tenham gostado!

---

Este roteiro resume as principais partes do projeto e sua funcionalidade de forma simples e coerente.
