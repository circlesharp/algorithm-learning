const fs = require('fs');

const output = fs.readFileSync(`${__dirname}/data.txt`, 'utf8')
  .trim()
  .split('\n')
  .map(line => line.replace(/\r/g, '').split('  '))
  .reduce((result, item) => {
    result[item[0]] = result[item[0]] || [];
    result[item[0]].push({
      name: item[1],
      price: item[2],
      quantity: item[3],
    })
    return result;
  }, {})

console.log(JSON.stringify(output, null, 2)); // 小技巧

/* 路径相关的方法
console.log(process.cwd());
console.log(__dirname);*/
