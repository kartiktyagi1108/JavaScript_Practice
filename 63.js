  // some method

  const numbers = [3,5,6,9];

  // kya ek bhi number aisa h jo even h etc

  const ans = numbers.some((Number)=>Number%2===0);
  console.log(ans);


  const products = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 3000},
    {productId: 3, productName: "p3", price: 200},
    {productId: 4, productName: "p4", price: 80000},
    {productId: 5, productName: "p5", price: 500},
  ];

  const myProduct = products.some((product)=>product.price > 50000);
  console.log(myProduct);

