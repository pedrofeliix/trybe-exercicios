// 3 -
// Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em 
// consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 


const player1 = 'pedra';
const player2 = 'papel';

if (player1 === player2) {
    console.log('empate');
} else if (player1 === 'pedra' && player2 === 'tesoura' || 
            player1 === 'papel' && player2 === 'pedra' ||
            player1 === 'tesoura' && player2 === 'papel') {
        console.log('player1 vitória!');    
} else {
    console.log('player2 vitória!');
}
