
function calcular(){
    // DADOS DE INPUT
    // dados gerais
    let temperatura = document.getElementById('temp').value;
    let pressao = document.getElementById('pressao').value;
    // dados de A
    let massa_a = document.getElementById('mass_a').value;
    let temp_crit_a = document.getElementById('temp_a').value;
    let press_crit_a = document.getElementById('press_a').value;
    let sigma_a = sigma_i(temp_crit_a,press_crit_a);
    let e_a = e_k(temp_crit_a);
    // dados de B
    let massa_b = document.getElementById('mass_b').value;
    let temp_crit_b = document.getElementById('temp_b').value;
    let press_crit_b = document.getElementById('press_b').value;
    let sigma_b = sigma_i(temp_crit_b,press_crit_b);
    let e_b = e_k(temp_crit_b);
    
    // Diametro de colisao A e B
    let sigma_ab = (sigma_a+sigma_b)/2;
    
    // Eab/k
    let E_ab = (e_a*e_b)**(1/2);

    // omega A B
    let euler = Math.E;
    let fator_de_omega = (1/E_ab)*temperatura;
    let omega_ab = (1.06036/(fator_de_omega**0.15610))+(0.19300/(euler**(0.47635*fator_de_omega))) +(1.03587/(euler**(1.52996*fator_de_omega))) +(1.76474/(euler**(3.89411*fator_de_omega)));

    let Coef_dif_ab = (((1.8583*(10**-7))*temperatura**(3/2))/(pressao*(sigma_ab**2)*omega_ab))*((1/massa_a)+(1/massa_b))**(1/2);
    
    let coef_2 = (((1.8583*(10**-7))*temperatura**(3/2))/(pressao*(sigma_ab**2)*fator_de_omega))*((1/massa_a)+(1/massa_b))**(1/2);
    console.log(Coef_dif_ab);
    console.log(coef_2);

}

function sigma_i(temp_c,press_c){
    let sigma = 2.44*((temp_c/press_c)**(1/3));
    return sigma;
}

function e_k(temp_c){
   let resposta = 0.77*temp_c;
   return resposta;
}