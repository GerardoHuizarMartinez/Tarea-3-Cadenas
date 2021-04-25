//Huizar Martinez Luis Gerardo

function cadena(info){

    //Creación de variables para jugar
    var nvowe=0, consonants=0;
    
    //variable indicadora para saber si es palindroma
    var flag = true;

    //Texto con la información para imprimir
    var textToPrint = "", text = "";

    //Convierto la frase a minusculas para que no existan problemas con mayusculas y minusculas
    var minus = info.toLowerCase();

    //Separo las palabras y las pongo dentro de un arreglo
    var arraySepare = minus.split(" ");

    //Cuento el numero de palabras
    var nwords = arraySepare.length;

    //Quito los espacios en blanco de la oración
    var woutSpace = info.replace(/ /g, "");

    //Cuento cuantas letas tiene la frase
    nlettets = woutSpace.length;

    //Se crea un arreglo para comparar  contar vocales y consonantes
    var vowels = ["a","e","i","o","u"];
    var conso = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]

    for (let step = 0; step < woutSpace.length; step++) {


        for (let step2 = 0; step2 < vowels.length; step2++) {
            
            if(woutSpace[step]==vowels[step2]){
                nvowe += 1;
                               
            }
            
        }
        
        for (let step3 = 0; step3 < conso.length; step3++) {
            
            if(woutSpace[step]==conso[step3]){
                consonants +=1;
            }
            
        }


        
    }//Fin del for


    //Se crea el arreglo a la inversa
    var wosr = "";
    var newArraRe = woutSpace;
    var arrayReverse =newArraRe.toString();
    
    //For para invertir la flase
    for(i in arrayReverse){
            wosr += arrayReverse[i]   
    }

    var xd = wosr.split("").reverse();
    var it=wosr.length-1;
    for(let j= 0 ; j < newArraRe.length ; j++){
        if(newArraRe[j]!=wosr[it]){
            flag = false;
            break;
        }
        it--
    
    }

    if(flag){
        text = "La cadena SI es palindromo"
    }else{
        text = "La cadena NO es palindromo"
    }

     


    textToPrint = "El numero de palabras son: " + nwords + 
                  "\nEl numero de letras son: " + nlettets +
                  "\nEl numero de vocales son: " + nvowe +
                  "\nEl numero de consonantes son: " + consonants + 
                  "\n" + text + 
                  "\n\n\n" +
                  "La frase normal frase es: " + newArraRe +"\n" +
                  "\n   La frase invertida es: " + xd +"\n";    

    return textToPrint;
}

module.exports.str = cadena;

//anita lava la tina qwertyuioplkjhgfdsazxcvbnm tiz taz tuz

/*
   ✅ Recibe una cadena                          

   ✅ Verifica si es palíndromo

   ✅ Cuenta el número de palabras en la cadena

   ✅Cuenta el número de letras (sin espacios)

   ✅Cuenta el número de vocales

   ✅Cuenta el número de consonantes

   ✅Imprime toda la información anterior en consola
*/