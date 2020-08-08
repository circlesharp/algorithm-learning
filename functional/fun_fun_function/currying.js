/* the dragon example
const dragon = (name, size, element) =>
  `${name} is a ${size} dragon that breathes ${element}!`;

const curryDragon =
  name =>
    size =>
      element =>
        `${name} is a ${size} dragon that breathes ${element}!`;

console.log(dragon('Tom', 'tiny', 'slightly'));
console.log(curryDragon('Tom')('tiny')('slightly'));*/

// also, lodash has a methods call curry

const dragons = [
  { name: 'tom', element: 'lightning' },
  { name: 'amy', element: 'lightning' },
  { name: 'luc', element: 'fire' },
  { name: 'joh', element: 'timewarp' },
];

/*
const hasElement =
  (element, obj) => obj.element === element;

const lightningDragons =
  dragons.filter(item => hasElement('lightning', item));*/

const curryHasElement =
  element =>
    obj =>
      obj.element === element;

const lightningDragons = dragons.filter(curryHasElement('lightning'));

console.log(lightningDragons);
