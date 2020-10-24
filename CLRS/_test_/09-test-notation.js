function preSolve(str) {
  return str.split(' ');
}

function notation() {
  const item = notations.shift();
  switch (item) {
    case '+': return notation() + notation();
    case '-': return notation() - notation();
    case '*': return notation() * notation();
    case '/': return notation() / notation();
    default: return +item;
  }
}

const notations = preSolve('* / + 12 36 + 1 3 - 15 8');
console.log(notation());

// function isOperator

// console.log(preSolve('+ 1 2'));
