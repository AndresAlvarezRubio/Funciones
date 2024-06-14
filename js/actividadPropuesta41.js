/*

Escribe una función que reciba como parámetros un precio y un porcentaje de descuento y devuelva el precio nuevo.


*/

let mapaProductos = new Map([["Camiseta 1" , 30],["Camiseta 2" , 35],["Camiseta 3" , 81],["Camiseta 4" , 49],["Camiseta 5" , 25]]);
let mapaDescuentos = new Map([["aSFvca57",10],["aSFvca575237",5],["caaSFvc57",30],["zpou852",49],["tutut20251a",25]]);
let select = document.querySelector("#productos");
let inputDescuento = document.querySelector("#cuponDescuento")




principalFuncion(mapaProductos);

function principalFuncion(mapaProductos) {
    
    seleccionProducto(mapaProductos);
    
}



function seleccionProducto(mapaProductos) {
    
    
    //Creación de options
    for (let[productos,precio] of mapaProductos) {
        
        let productOption=document.createElement("option");
        productOption.innerHTML = productos;
        productOption.setAttribute("id",productos);
        select.appendChild(productOption);
        
    }
    
    //Mirar que el option cambie
    select.addEventListener("change",function() {
        
        let precios = mapaProductos.get(select.value) 

        if (!precios) {

            document.querySelector("#respuesta").innerHTML = "";

        } else if (precios != "")  {

            document.querySelector("#respuesta").innerHTML = `El precio de ${select.value} es de ${precios}€`;
            descuentoCupon(mapaProductos,mapaDescuentos);
        }
    
    })
}


function descuentoCupon(mapaProductos,mapaDescuentos) {

    inputDescuento.addEventListener("keyup",function() { //Verificación en el momento

        let precios = mapaProductos.get(select.value)
 
        for (let[tagDescuento,descuentoPorcentaje] of mapaDescuentos) {

            if (tagDescuento != inputDescuento.value) {
                
                document.querySelector("#descuento").innerHTML = ``;
                
            } else if (tagDescuento == inputDescuento.value){
                
                document.querySelector("#respuesta").innerHTML = "";
                calculo = precios/descuentoPorcentaje*100;

                document.querySelector("#descuento").innerHTML = `Tienes un descuento del ${descuentoPorcentaje}% y el nuevo precio es de ${(precios * (100 - descuentoPorcentaje)) / 100}€`;
                
                break;
                //Si cumple opción para de recorrer
            }
        }
    })

    select.addEventListener("change",function() {
        
        let precios = mapaProductos.get(select.value)
 
        for (let[tagDescuento,descuentoPorcentaje] of mapaDescuentos) {

            if (tagDescuento != inputDescuento.value) {
                
                document.querySelector("#descuento").innerHTML = ``;
                
            } else if (tagDescuento == inputDescuento.value && precios){
                
                document.querySelector("#respuesta").innerHTML = "";

                document.querySelector("#descuento").innerHTML = `Tienes un descuento del ${descuentoPorcentaje}% y el nuevo precio es de ${(precios * (100 - descuentoPorcentaje)) / 100}€`;
                
                break;
            }
        }
    })

}