// Пиши код ниже этой строки
function add(...args) {
    let sum = 0;
    
    for (let arg of args) {
      sum += arg;
    }
    
    return sum;
    // Пиши код выше этой строки
}
  
console.log('sum: ', add(15, 27));
console.log('sum: ', add(12, 4, 11, 48));
console.log('sum: ', add(32, 6, 13, 19, 8));
console.log('sum: ', add(74, 11, 62, 46, 12, 36));
  