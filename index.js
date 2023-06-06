

// Question:
// Почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?

// Answer:
// Можно выразиться, что массивы в Javascript "неправильные", так как посути массивы должны быть неизменны, а в JS, в отличие от классических массивов, они имеют динамическую длину и включают в себя данные разных типов.
// Так например динамическая типизация массивов, может быть как удобной, так и наоборот усложнить анализ кода и привести к потенциальным проблемам, связанным с типами, если работать с ними неосторожно.
// Говоря же о динамической длинне массива, то мы можем добавлять или удалять элементы по любому индексу в процессе выполнения кода без явного изменения размера массива. И хоть такое поведение может быть опять же удобным, оно также может привести к снижению производительности при работе с большими массивами или при необходимости предсказуемого выделения памяти.
// Массивы в Javascript совмещают в себе несколько структур данных, т.к. унаследованы от объекта и объединяют в себя стек и очередь.





// Привязка контекств объекта к функции logger

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

// call()
logger.call(obj);

// apply()
logger.apply(obj);

// bind()
logger.bind(obj)();
//или
const bindedLogger = logger.bind(obj);
bindedLogger();





// полифил метода bind()

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

Function.prototype.myBind = function (context, ...args) {
  const func = this; // фиксирую ссылку на исх. экземп. функции
  return function () {
    func.apply(context, [...args]);
  };
};

logger.myBind(obj)();
//или
const bindedLogger = logger.myBind(obj);
bindedLogger(); //  I output only external context: some value
