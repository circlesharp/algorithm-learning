const csv = 'name,age,hair\n  Merble    , 35      , red\nBob,64,blonde\nTo,222, yellow\nAmy,1,red';

const lameCSV = (csv) => {
  return csv
    .split('\n')
    .reduce((table, row) => {
      table.push(
        row
          .split(',')
          .map(cell => cell.trim())
      );
      return table;
    }, [])
}

const peopleTable = lameCSV(csv);

console.log(peopleTable);

/**
 * 
 */

const selectNames = (table) => {
  return table
    .slice(1)
    .map(row => row[0])
}
const selectAges = (table) => {
  return table
    .slice(1)
    .map(row => row[1])
}
const selectColor = (table) => {
  return table
    .slice(1)
    .map(row => row[2])
}

console.log(selectNames(peopleTable));
console.log(selectAges(peopleTable));
console.log(selectColor(peopleTable));

/**
 * 
 */

function zip() {
  const args = Array.from(arguments);
  let res = [];
  args.forEach((row) => {
    row.forEach((cell, cellIdx) => {
      res[cellIdx] = res[cellIdx] || [];
      res[cellIdx].push(cell);
    })
  })
  return res;
}

console.log(
  zip(selectNames(peopleTable), selectAges(peopleTable))
);
