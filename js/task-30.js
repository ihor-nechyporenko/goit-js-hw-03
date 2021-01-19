function makeTask(data) {
    const completed = false;
    const category = 'Общее';
    const priority = 'Обычный';
    // Пиши код ниже этой строки
    const defaultSettings = {
        category,
        priority,
        completed,
    };

    const finalSettings = { ...defaultSettings, ...data };

    return finalSettings;
    // Пиши код выше этой строки
  }

  console.log(makeTask({}));
  console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }));
  console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }));
  console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }));
  console.log(makeTask({ text: 'Купить хлеб' }));