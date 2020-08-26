/**
 * fnull:
 * a function to guard against nonexistence
 */

const existy = x =>
  x != null;

/**
 * just return the origin function,
 * but enhance with some default args,
 * in case the origin function encounters null & undefined
 * as its argument.
 * 
 * @param {function} fun the origin function
 * @param  {...any} defs some args, in case
 */
const fnull = (fun, ...defs) =>
  (..._args) => {
    const args = _args.map(
      (e, i) => existy(e) ? e : defs[i]
    );
    return fun(...args);
  };

/* example 01: deal with null & undefined */
const safeMult = fnull((total, n) => total * n, 1, 1);

/* example 02: deal with the configuration object problem */

/**
 * return a function,
 * that takes obj & key and return the value,
 * if the obj does not have the key, return the defConf[k]
 * @param {Object} defConf the default configuration
 */
const defaults = defConf =>
  (o, k) => {
    const val = fnull(n => n, defConf[k]);
    return o && val(o[k]);
  };

const doSomething = config =>
  defaults({critical: 108})(config, 'critical');

console.log(
  [1, 2, 3, null, 4].reduce(safeMult),
  doSomething({}),
  defaults({critical: 108})({name: 'Tom'}, 'name'),
);
