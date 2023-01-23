const a = 80;
const b = 60;
const c = 60;

if (a < 0 || b < 0 || c < 0) {
    console.log('valor dos ângulos deve ser positivo');
}
else if (a + b + c == 180) {
    console.log('true');
}
else {
    console.log('false');
}