const rst = [];

// 这个本质上是递推
function _dec2bin(n) {
  if (parseInt(n / 2) === 0) {
    rst.unshift(1);
    return;
  };
  rst.unshift(n % 2);
  dec2bin(parseInt(n / 2));
  return;
}

// 这样看着舒服多了
function dec2bin(n) {
  rst.unshift(n % 2);
  const shang = parseInt(n / 2);
  if (shang) dec2bin(shang);
}

dec2bin(0);
console.log(rst);
