const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 9 },
  ];
  
  function getAllPropValues(propName) {
    // Пиши код ниже этой строки
    const propValues = [];
    
    for (const product of products) {
        if (Object.keys(product).includes(propName)) {

        propValues.push(product[propName]);
      }
    }
     
    return propValues;
    // Пиши код выше этой строки
  }
  
  console.log(getAllPropValues('name'));
  console.log(getAllPropValues('quantity'));
  console.log(getAllPropValues('price'));
  console.log(getAllPropValues('category'));
  