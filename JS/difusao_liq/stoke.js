function calcular(){
    // DADOS DE INPUT
    // dados gerais
    let temperatura = document.getElementById('temp').value;
    let visco = document.getElementById('visco').value;
    // dados de A
    let vol_a = document.getElementById('vol_a').value;

    let Coef_dif_ab = ((9.96*10**-16)*temperatura)/(visco*vol_a**(1/3));

    if(vol_a < 0.5){
        alert('Volume molar de A incorreto, não respeita a condição de Va > 0,5. CORRIGA O VALOR AGORA');
    }else{
        console.log(Coef_dif_ab);
        let resposta = Coef_dif_ab.toString();
        document.getElementById('final').textContent = resposta +" m2/s";  
    }
      

}