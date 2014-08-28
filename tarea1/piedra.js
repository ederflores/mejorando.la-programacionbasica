//genera un numero aleatorio
function patito(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var piedra 	= 0;
var papel 	= 1;
var tijera 	= 2;
var lagarto = 3;
var spock	= 4;

var opciones = ["Piedra","Papel","Tijera", "Lagarto", "Spock"];

var opcionUsuario;
var opcionMaquina = patito(0,4);

opcionUsuario = prompt("Que eliges? \n Piedra:0 \n Papel:1 \n tijera:2 \n lagarto:3 \n spock:4",0);
alert("eliges " +opciones[opcionUsuario]);
alert("Javascript elige "+opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
    if(opcionMaquina == piedra)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == papel )
    {
        alert("Papel cubre Piedra \n Perdiste :( ");
    }
    else if(opcionMaquina == spock )
    {
        alert("Spock vaporiza Piedra \n Perdiste :( ");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Piedra chanca Tijera \n Ganaste!");
    }
    else if(opcionMaquina == lagarto)
    {
        alert("Piedra aplasta Lagarto \n Ganaste!");
    }
}

else if(opcionUsuario == papel)
{
    if(opcionMaquina == papel)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == piedra )
    {
        alert("Papel cubre Piedra \n Ganaste!");
    }
    else if(opcionMaquina == spock )
    {
        alert("Papel desautoriza a Spock \n Ganaste :( ");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Tijera corta Papel \n Perdiste :(");
    }
    else if(opcionMaquina == lagarto)
    {
        alert("Largarto se come al Papel \n Perdiste :(");
    }
}

else if(opcionUsuario == tijera)
{
    if(opcionMaquina == tijera)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == papel )
    {
        alert("Tijera corta Papel \n Ganaste!");
    }
    else if(opcionMaquina == lagarto )
    {
        alert("Tijera decapita Largarto \n Ganaste :( ");
    }
    else if(opcionMaquina == spock)
    {
        alert("Spock rompe Tijera \n Perdiste :(");
    }
    else if(opcionMaquina == piedra)
    {
        alert("Piedra chanca Tijera \n Perdiste :(");
    }
}

else if(opcionUsuario == lagarto)
{
    if(opcionMaquina == lagarto)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == spock )
    {
        alert("Largarto envenena a Spock \n Ganaste!");
    }
    else if(opcionMaquina == papel )
    {
        alert("Lagarto come Papel \n Ganaste :( ");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Tijera decapita a Lagarto \n Perdiste :(");
    }
    else if(opcionMaquina == piedra)
    {
        alert("Piedra chanca Lagarto \n Perdiste :(");
    }
}

else if(opcionUsuario == spock)
{
    if(opcionMaquina == spock)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == tijera )
    {
        alert("Spock Rompe Tijera \n Ganaste!");
    }
    else if(opcionMaquina == piedra )
    {
        alert("Spock Vaporiza Piedra \n Ganaste :( ");
    }
    else if(opcionMaquina == papel)
    {
        alert("Papel desautoriza a Spock \n Perdiste :(");
    }
    else if(opcionMaquina == lagarto)
    {
        alert("Lagarto envenena a Spock \n Perdiste :(");
    }
}

else
{
    alert("¿Pos qué carajo?");
}