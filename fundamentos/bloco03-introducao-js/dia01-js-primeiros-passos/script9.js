const custoProduto = '5';
const valorVenda = '-1';

if (custoProduto >= 0 && valorVenda >= 0) {
    const custoTotal = custoProduto * 1.20;
    const lucro = valorVenda - custoTotal;
    const lucroMil = lucro * 1000;
    console.log('seu lucro foi de ' + lucroMil);
}
else {
    console.log('erro! digite valor válido!')
}