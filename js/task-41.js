const atTheOldToad = {
    potions: [
      { name: 'Зелье скорости', price: 460 },
      { name: 'Дыхание дракона', price: 780 },
      { name: 'Каменная кожа', price: 520 },
    ],
    // Пиши код ниже этой строки
    getPotions() {
      return this.potions;
    },
    addPotion(potionName) {
      for (const potion of this.potions) {
        if (Object.values(potion).includes(Object.values(potionName)[0])) {
          return `Зелье ${potionName} уже есть в инвентаре!`;
        }
      }
  
      this.potions.push(potionName);
      return this.potions;
    },
    removePotion(potionName) {
      for (const potion of this.potions) {
          for (const key in potion) {
            console.log(potionName === potion[key]);
          }
          console.log(Object.values(potion)[0] === potionName);
          console.log(Object.values(potion).includes(potionName));
        if (Object.values(potion)[0] === potionName) {
          return this.potions;
        }
      }
        return `Зелья ${potionName} нет в инвентаре!`;
        
    //   const potionIndex = this.potions.indexOf(potionName);
  
    //   if (potionIndex === -1) {
    //     return `Зелья ${potionName} нет в инвентаре!`;
    //   }
  
    //   this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
      const potionIndex = this.potions.indexOf(oldName);
  
      if (potionIndex === -1) {
        return `Зелья ${oldName} нет в инвентаре!`;
      }
  
      this.potions.splice(potionIndex, 1, newName);
    },
    // Пиши код выше этой строки
  };

//   console.table(atTheOldToad.getPotions());
//   console.table(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
//   console.table(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));
//   console.table(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
  console.table(atTheOldToad.removePotion('Дыхание драконa'));