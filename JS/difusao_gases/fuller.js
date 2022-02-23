function calcular(){
    // DADOS DE INPUT
    // dados gerais
    let temperatura = document.getElementById('temp').value;
    let pressao = document.getElementById('pressao').value;

    // dados de A
    let massa_a = document.getElementById('mass_a').value;
    let vol_a = document.getElementById('vol_a').value;

    // dados de B
    let massa_b = document.getElementById('mass_b').value;
    let vol_b = document.getElementById('vol_b').value;

    let coef_ab = (((1.00*10**-7)*temperatura**1.75)/(pressao*((vol_a**(1/3))+(vol_b**(1/3)))**2))*(((1/massa_a)+(1/massa_b))**(1/2))
    console.log(coef_ab);
    let resposta = coef_ab.toString();
    document.getElementById('final').textContent = resposta +" m2/s";
}