function countProps(object) {
    // Пиши код ниже этой строки
    let propCount = 0;
    const keys = Object.keys(object);
  
    for (const key of keys) {
      propCount += 1;
    }
  
    return propCount;
    // Пиши код выше этой строки
  }

// variant 2

//   function countProps(object) {
//     // Пиши код ниже этой строки

//     return Object.keys(object).length;;
//     // Пиши код выше этой строки
//   }

// variant 3 with hasOwnProperty(key)

// function countProps(object) {
//     // Пиши код ниже этой строки
//     let propCount = 0;
//     const allPropCount = Object.keys(object);
  
//     for (const key of allPropCount) {
//       if (object.hasOwnProperty(key)) {
//         propCount += 1;
//       }
//     }
  
//     return propCount;
//     // Пиши код выше этой строки
//   }

// variant 3 with hasOwnProperty(key)

// function countProps(object) {
//     // Пиши код ниже этой строки
//     let propCount = 0;
//     propCount = Object.keys(object).length;
  
//     for (const key in object) {
//       if (!object.hasOwnProperty(key)) {
//         propCount -= 1;
//       }
//     }
  
//     return propCount;
//     // Пиши код выше этой строки
//   }

  console.log(countProps({}));
  console.log(countProps({ name: 'Mango', age: 2 }));
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));