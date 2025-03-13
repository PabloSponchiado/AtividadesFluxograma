let teclado = require (`prompt-sync`)();
let tot_pessoas: number = 0

do{

    let idade : number = 0;
    let salario: number = 0;
    let cond_pessoas: number = 0

    idade = parseInt(teclado(`Digite a idade:`));
    salario = parseInt(teclado(`Digite o salario:`));
    
    if (idade < 30 && salario > 3000){
        cond_pessoas ++;
        tot_pessoas ++;
    }
    else {
        tot_pessoas++;
    }   
}while (tot_pessoas <= 50)
    console.log(`Fim`)