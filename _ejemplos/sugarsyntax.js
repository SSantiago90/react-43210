function sum(x, y, z) {
  return x + y + z;
}

const nums = [1, 5, 10, 100, 30];

/* console.log(sum(...nums)); */

const copiaNums = [...nums];
copiaNums.push(29);
copiaNums.push(29);
copiaNums.push(29);
copiaNums.push(29);

console.log(nums, copiaNums);
