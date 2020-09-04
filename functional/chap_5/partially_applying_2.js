const partial = (fun, ...pargs) =>
  (...args) =>
    fun(...pargs, ...args);

const div = (n, d) => n / d;

const over10Partial = partial(div, 10);

console.log(
  over10Partial(2),
);
