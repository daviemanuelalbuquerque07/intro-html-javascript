function calcular(){
    var a = 150
    var b = 3
    var calculo = (a * b) / 2

    alert("Resultado: " +  calculo )
}

function calcularConta(){
    var Energia = 10
    var Agual = 20
    var internet = 30

    var calculo = Energia + Agual + internet

    alert("Resultado: " +  calculo )
}

/** Calculo Uber
 *  ? nome do motorista
 *  ? corridas do dia   15
 *  ? rebi em dinheiro 250
 *  ? rebi conta 350
 *  
 * 
 *  # valor do combustivel 1.78
 * 
 *  1. calcular dinheiro por litro valorDinheiro / 1.78
 *  calcular entradas dinheiro + conta
 * 
*/

var nome             = document.getElementById('nome')
var n_corridas       = document.getElementById('n_corridas')
var valor_abastecido = document.getElementById('valor_abastecido')
var km_rodado        = document.getElementById('km_rodado')
var rc_dinheiro      = document.getElementById('rc_dinheiro')
var rc_conta         = document.getElementById('rc_conta')
var Btn              = document.getElementById('btn_validar')

function validarCampos(){

    if(nome.value == '') { alert('Por favor digite seu nome');  return false; }

    if(n_corridas.value == '') { alert('Por favor digite o numero de corridas'); return false; }

    if(valor_abastecido.value == '') { alert('Por favor digite o valor abastecido'); return false; }

    if(km_rodado.value == '') { alert('Por favor digite o km rodado do dia'); return false; }

    if(rc_dinheiro.value == '') { alert('Por favor digite o dinheiro recebido'); return false; }

    if(rc_conta.value == '') { alert('Por favor digite saldo recebido em conta'); return false; }

    /** 
        alert(nome.value)
        alert(n_corridas.value)
        alert(valor_abastecido.value)
        
        alert(km_rodado.value)
        alert(rc_dinheiro.value)
        alert(rc_conta.value)
    */

    /**  */
        console.log("Nome: " + nome.value)
        console.log("N. Corridas: " + n_corridas.value)
        console.log("Valor Abastecido: " + valor_abastecido.value)

        console.log("Km rodadoe: " + km_rodado.value)
        console.log("Recebi em dinheiro: " + rc_dinheiro.value)
        console.log("Recebi em conta: " + rc_conta.value)
}      

function calcularCombustivel( valorCombustivel = 1.88 , valorDinheiro = 100 ){
    valorCombustivel = 1.88
    valorDinheiro = 100

    rs = ( valorDinheiro / valorCombustivel )

    alert('Numero de licros: ' + rs.toFixed(2))
    console.log('Numero de licros: ' + rs.toFixed(2))
}


// chama as funções
Btn.addEventListener("click", function(e) {
    e.preventDefault()
    
    validarCampos()
    calcularCombustivel()
})  