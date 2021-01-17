const UnionFindSet = require('./Set');

class ComputerNetwork {
  constructor(n) {
    this.set = new UnionFindSet(n);
  }

  c(a, b) {
    return (this.set.find(--a) === this.set.find(--b));
  }

  i(a, b) {
    if (this.c(a, b))
      return;
    
    this.set.union(this.set.find(--a), this.set.find(--b));
  }

  s() {
    let cnt = 0;
    this.set.setsData.forEach(i => {
      if (i < 0) cnt++;
    });

    console.log(cnt === 1);
  }
}

const test = new ComputerNetwork(5);

test.c(3, 2);
test.i(3, 2);
test.c(1, 5);
test.i(4, 5);
test.i(2, 4);
test.c(3, 5);
test.i(3, 1);
test.s();
