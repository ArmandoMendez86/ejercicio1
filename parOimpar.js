
function numerosAleatorios() {
    let plantilla = '';
    let numero;
    for (let i = 0; i < 5; i++) {
        numero = Math.floor(Math.random() * 100);
        if (numero === 0) {
            plantilla += `
            <tr>
                <td>${numero}</td>
                <td>El numero => ${numero} es Neutral</td>
            </tr>
            `;
        } else if (numero % 2 === 0) {
            plantilla += `
            <tr>
                <td>${numero}</td>
                <td>El numero => ${numero} es Par</td>
            </tr>
            `;
        } else {
            plantilla += `
            <tr>
                <td>${numero}</td>
                <td>El numero => ${numero} es Impar</td>
            </tr>
            `;
        }
    }

    document.querySelector('#tbody').innerHTML=plantilla;

}
