const atTheOldToad = {
    potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
    removePotion(potionName) {
        //  Пиши код ниже этой строки
        const indexPotion = this.potions.indexOf(potionName);
        this.potions.splice(indexPotion, 1);
      
        return this.potions
        // 🔥 Оставляем три пустые строки для студента
        // Пиши код выше этой строки
    },
};

// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad.removePotion('Зелье скорости'));