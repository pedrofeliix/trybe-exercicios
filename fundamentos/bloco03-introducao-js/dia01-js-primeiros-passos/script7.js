let nota = -90;

if (nota > 100 || nota < 0) {
    console.log('valor inválido! inserir nota entre 0 e 100');
}
else if (nota >= 90) {
    console.log('A');
}
else if (nota >= 80 && nota < 90) {
    console.log('B');
}
else if (nota >= 70 && nota < 80) {
    console.log('C');
}
else if (nota >= 60 && nota < 70) {
    console.log('D');
}
else if (nota >= 50 && nota < 60) {
    console.log('E');
}
else {
    console.log('F');
}
