const contenedor = document.querySelector(".contenedor");
const inputSearch = document.querySelector("#input-search");
const btnSearch = document.querySelector("#btn-search");
const btnLimpiar = document.querySelector("#btn-limpiar");
function createCards(arrayDeDatos){
    contenedor.innerHTML = "";
    inputSearch.value = "";
    if (arrayDeDatos.length === 0) {
        contenedor.innerHTML = "<h2>No se encontro resultados</h2>";
        // recurden que el return detiene la ejecuion de la funcion
        return;
    }
    arrayDeDatos.map((celular) =>{
        contenedor.innerHTML +=
        `
        <div class="card">
              <img
                src=${celular.imagen}
                alt=""
              />
              <div class="hr"></div>
              <div class="descripcion">
                <p class="marca">${celular.marca}</p>
                <p class="modelo">${celular.modelo}</p>
                <p class="proveedor">${celular.proveedor}</p>
                <div class="precio">
                    <p>S/ ${celular.precio}</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5k-L2qca-lsLiavmMTxaSFEKqtSof-LdPgCFpP66N_baLTIHc-sul5rrXSuCesex86Q&usqp=CAU" alt="">
                </div>
                <p class="precio-oferta">S/ ${celular.precioOferta} (Oferta)</p>
                <p class="precio-real">S/ ${celular.precioReal}</p>
                <div class="beneficios">
                    <img src="https://seeklogo.com/images/G/google-material-design-check-logo-B26F6F7B81-seeklogo.com.png" alt="">
                    <p>Retiro en tienda</p>
                </div>
                <div class="beneficios">
                    <img src="https://seeklogo.com/images/G/google-material-design-check-logo-B26F6F7B81-seeklogo.com.png" alt="">
                    <p>Despacho a Domicilio</p>
                </div>
                <button class="btn-buy">Agregar al Carrito</button>
              </div>
              
            </div>
        `
    });
}
createCards(celulares);
btnSearch.onclick = function (){
    const textSearch = inputSearch.value;
    if (textSearch === ""){
        alert("Debe escribir un texto para iniciar la busqueda");
        return;
    }
    const filtro = celulares.filter(
        (celular) => 
        celular.marca.toLowerCase().includes(textSearch.toLowerCase()) ||
        celular.modelo.toLowerCase().includes(textSearch.toLowerCase())       
    );
    createCards(filtro);
};
btnLimpiar.onclick = () => createCards(celulares);