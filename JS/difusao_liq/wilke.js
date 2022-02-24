function calcular(){
    // DADOS DE INPUT
    // dados gerais
    let temperatura = document.getElementById('temp').value;
    let assoc = document.getElementById('assoc').value;
    // dados de A
    let vol_a = document.getElementById('vol_a').value;

    // dados de B
    let mass_b = document.getElementById('mass_b').value;
    let visc_b = document.getElementById('visc_b').value;

    let Coef_dif_ab = ((1.173*10**-16)*((assoc*mass_b)**(1/2))*temperatura)/(visc_b*vol_a**0.6);

    if(vol_a < 0.5){
        alert('Volume molar de A incorreto, não respeita a condição de Va > 0,5. CORRIGA O VALOR AGORA');
    }else{
        console.log(Coef_dif_ab);
        let resposta = Coef_dif_ab.toString();
        document.getElementById('final').textContent = resposta +" m2/s";  
    }
      

}