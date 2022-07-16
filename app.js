//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función 
//.***includes*** de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
products.forEach((element)=>{
    /*En este caso estamos diciendo  que vas a recorrerme  cada Elemento de el array de" products" y luego
    en la segunda linea preguntamos si el elemento incluye "Camiseta"*/
 if(element.includes("Camiseta")){
     console.log(element);
 }
 
});

//**Iteración #2: Condicionales avanzados**

//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad 
//***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***. 
//( **Mirar abajo en pistas** ).
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
  alumns.forEach((element)=>{
      contador=0;
      for(key in element ){
          if(element[key]==true){
              contador++;             
          }
        }
          if(contador>=2){
              element.isApproved=true;
          }
          else{
              element.isApproved= false;
          }
      
  })
  console.log(alumns)



/* Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.

Puedes usar este array:*/
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for(let lugares of placesToTravel){
    console.log(lugares);
}
/***Iteración #4: Probando For...in**

Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:*/
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(key in alien){
    console.log(key +" : "+alien[key])
}