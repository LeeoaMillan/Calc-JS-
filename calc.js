

function insert(num){
    const par = ["/", "*", "-", "+"];
    var number = document.getElementById("result").innerHTML;
    if (number.valor == par){
        /*A IDEIA E VER SER O PROXIMO INPUT VAI SER UM NUMERO
            OU UM OPERADO. SE FOR UM OPERADOR, ELE NAO ENTRA NO
            CAMPO, SE FOR UM NUMERO, CONTINUA NORMAL.
            */
    };
    document.getElementById('result').innerHTML += num;
    
}

function clean(){
    document.getElementById('result').innerHTML = "";
}

function calc(){
    var result = document.getElementById("result").innerHTML;
        if(result){
            document.getElementById('result').innerHTML = eval(result);
        }
    }

function del(){
    document.getElementById('result').innerHTML;
}