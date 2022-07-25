const products = [
    {
      name: "Laptop HP",
      price: 1300,
      brand: "HP",
    },
    {
      name: "Laptop Gamer",
      price: 2100,
      brand: "Lenovo",
    },
    {
      name: "Laptop Super Poderosa",
      price: 5300,
      brand: "Alien Ware",
    },
    {
      name: "Laptop/Tablet",
      price: 2400,
      brand: "ASUS",
    },
  ];
// users.forEach(user)
// movies.forEach(movie)

// products.forEach((product, index) => {});

// * forEach

const productsIterForEach = products.forEach((product) => {
    // Recurden que product es cada elemento de mi array
    // console.log(product.name);
    return product.price - 100;
  });
  
  //* map
  // queremos agregar un nuevo campo al array de objetos
  // ese campo se llamara descuente que sera el precio - 100 soles
  
  // En este caso estamos calculado el campo discount y lo estamos
  // guardando en productsIterMap
  
  // Los valores que esta capturando nuestro map los esta guardando en
  // la varable productsIterMap y esto sera un arreglo de los
  // resultados
  const productsIterMap = products.map((product) => {
    // 1200
    // 2000
    // 5200
    // 2300
    return product.price - 100;
  });
  
  // Resument: Siempre el map retorna un array de elementos
  
  console.log("forEach", productsIterForEach);
  console.log("map", productsIterMap);
  // Cuando decimos que forEach no retorna nada quiere decir que no se
  // puede guardar dentro de una variable

  const edades = [23, 21, 34, 45, 28, 30];


// const edadesAlCuadrado = edades.map((edad) =>{
//     return Math.pow(edad, 2);
// });
// Lo hacemos en forma arroy function inline

const edadesAlCuadrado = edades.map((edad) => Math.pow(edad, 2));

console.log(edadesAlCuadrado);

let arrayEdad = [];
edades.forEach((edad) => arrayEdad.push(Math.pow(edad, 2)));
console.log(arrayEdad);

let arrayEdad2 = [];
for (let edad of edades){
    arrayEdad2.push(Math.pow(edad, 2));
}
console.log(arrayEdad2);

const clothes = [
    {
      brand: "Mango",
      type: "Shirt",
      price: 200,
      store: "Falabella",
      rating: 4.3,
      features: {
        color: "green",
        size: "small",
      },
    },
    {
      brand: "Zara",
      type: "Pants",
      price: 300,
      store: "Zara",
      rating: 3.9,
      features: {
        color: "black",
        size: 32,
      },
    },
    {
      brand: "Tommy",
      type: "T-shirt",
      price: 120,
      store: "Tommy",
      rating: 4.3,
      features: {
        color: "blue",
        size: "M",
      },
    },
  ];
  // filtrar las prendas que sean mayor a 150
  const filtro = clothes.filter((clothe) => clothe.price > 150);

  console.log(filtro);

  // filtrar precio > 150 y rating > 4

  const filtro2 = clothes.filter(
    (clothe) => clothe.price > 150 && clothe.rating > 4
  );
  console.log(filtro2);



  const filterShirt = clothes.filter(
    (clothe) => clothe.type.toLowerCase().includes("shirt")
  );
  console.log(filterShirt);

  const numbers = [10, 20, 30, 40, 50, 60, 70];

  const numerosMayores = numbers.filter((number) => number > 30);
  console.log(numerosMayores);

  const numerosMayores2 = numbers.find((number) => number > 30);
  console.log(numerosMayores2);