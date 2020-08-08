// recursion is when a function calls itself until it doesn't

const categories = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'chihuahua', parent: 'cats' },
  { id: 'labrador', parent: 'cats' },
  { id: 'persian', parent: 'dogs' },
  { id: 'siamese', parent: 'dogs' },
];

const makeTree = (categories, parent) => {
  const node = {};
  categories
    .filter(cate => cate.parent === parent)
    .forEach(cate => {
      node[cate.id] = makeTree(categories, cate.id);
    })
  return node;
};

console.log(
  JSON.stringify(
    makeTree(categories, null),
    null,
    2,
  )
)

/* 
{
  animals: {
    mammals: {
      cats：{
        ...
      },
      dogs:{
        ...
      }
    }
  }
}*/
