export function Average(list){
    let Sum = 0;
    const listLength = list.length;
    list.forEach(element =>{
       Sum += element;
      });
   const Total = Sum / listLength;
   return {Sum, listLength, Total}
//     // return Math.round(Sum / list.length);
}
// console.log(Average([1,2,3,4,5]));

export function Mediana(list){
   // Se organiza la lista de menor a mayor
    const organized = list.sort((a, b) => {
        return a - b;
    })
   /* Si el length de la lista es par me quedara dos datos en el centro, por lo que tomo el primer dato del centro
    con el length de la lista dividido entre dos y restadole uno, y luego tomo en segundo con el length de la lista 
    dividido entre dos y luego esos dos datos los divido entre dos.*/
     if((organized.length % 2) == 0){
      //   return (organized[organized.length / 2 - 1] + organized[organized.length / 2]) / 2;
      const firstIndice = organized.length / 2 - 1;
      const secondIndice = organized.length / 2;
      const sumIndex = organized[firstIndice] + organized[secondIndice];
        const mediana = (organized[organized.length / 2 - 1] + organized[organized.length / 2]) / 2;
        return {organized, mediana, firstIndice, secondIndice, sumIndex};
     }
     else{
        const indice = Math.round((organized.length / 2) - 1);
        const mediana = organized[Math.round((organized.length / 2) - 1)];
        return {organized, mediana, indice};
     }
}
// console.log(Mediana([1, 1, 1, 2, 2, 5, 5, 23, 23, 23, 23, 23, 34, 52, 88]));

export function Moda(list){
   // Convertimos la lista en un cojunto
   const arrSet = Array.from(new Set(list));
   // En repetidos guardo la cantidad de vece que se repite el numero de la lista Set.
   const repetidos = [];
   // En este for cuento la cantidad de veces que se repite un numero en la lista como parametro.
   for(let i = 0; i < arrSet.length; i++){
      const filter = list.filter((valor) =>{
         return valor == arrSet[i];
      })
      repetidos.push(filter.length);
   }
   // En mayor guardo el numero mas grande de la lista.
   const mayor = Math.max(...Array.from(new Set(repetidos)));

   // Aqui obtemos los indices de los numeros correspondiente a la moda
   const indices = [];
   let idx = repetidos.indexOf(mayor);
   while (idx != -1) {
     indices.push(idx);
     idx = repetidos.indexOf(mayor, idx + 1);
   }
   const moda = [];
   indices.forEach(indices =>{
      moda.push(arrSet[indices])
  });

  const indexModa = [];

  for(let x = 0; x < moda.length; x++){
   let idy = list.indexOf(moda[x]);
   while (idy != -1) {
      indexModa.push(idy);
       idy = list.indexOf(moda[x], idy + 1);
     }
}

   return {arrSet, repetidos, mayor, indices, moda, indexModa}
}
// console.log(Moda([1,1,1,2,3,4,3,5,3]));