const pecaEscolhida = 'peao';

switch (pecaEscolhida.toLowerCase()) {
    case 'rei':
        console.log('Rei - move uma casa para qualquer direção');
        break;
    case 'cavalo':
        console.log('Cavalo - se move em formato de L em qualquer direção que seja possível');
        break;
    case 'bispo':
        console.log('Bispo - se move nas diagonais, quantas casas quiser');
        break;
    case 'peao':
        console.log('Peão - caso seja a primeira jogada, pode avançar duas casas para frente. Caso seja a segunda ou posterior jogada, pode se mover uma casa para frente');
        break;
    case 'rainha':
        console.log('Rainha - pode se mover quantas casas quiser e em qualquer direção');
        break;
    case 'torre':
        console.log('Torre - pode se mover quantas casas quiser na horizontal ou vertical');
        break;
    default:
        console.log('digite uma peça válida!');
}