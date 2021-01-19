// Пиши код ниже этой строки
function findMatches(firstArg, ...otherArgs) {
    const matches = []; // Не изменяй эту строку
    
    for (const arg of otherArgs) {
        if (firstArg.includes(arg)) {
            matches.push(arg);
        }
    }
  
    // Пиши код выше этой строки
    return matches;
}
  
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
  