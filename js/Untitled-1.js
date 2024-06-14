
let mapa = new Map([["España","Madrid"],["Francia","París"],["Italia","Roma"],["Portugal","Lisboa"]]);

let select = document.querySelector("#productos");


for (let[productos,precio] of mapa) {

    let productOption=document.createElement("option");
    productOption.textContent = productos;
    productOption.setAttribute("id",productos);
    select.appendChild(productOption);

}

select.addEventListener("change",function() {

    console.log(select.value);

})