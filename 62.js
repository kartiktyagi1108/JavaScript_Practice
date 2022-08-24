  // every method   ------> it checks condition on every element of the array then give true or false

  const numbers = [2,4,6,8,10];

  const ans = numbers.every((Number)=>Number%2===0);
  console.log(ans);


  const products = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 3000},
    {productId: 3, productName: "p3", price: 200},
    {productId: 4, productName: "p4", price: 8000},
    {productId: 5, productName: "p5", price: 500},
  ];


  // check every product < 10000

  const ans1 = products.every((product)=>product.price < 10000);
  console.log(ans1);