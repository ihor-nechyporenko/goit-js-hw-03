function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Пиши код ниже этой строки
    const arrayOfSalaries = Object.values(salaries);
    
    for (const salary of arrayOfSalaries) {
      totalSalary += salary;
    }
    // Пиши код выше этой строки
    return totalSalary;
  }
  
  console.log(countTotalSalary({}));
  console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
  console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
  