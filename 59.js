  // reduce method

  const numbers = [1,2,3,4,5];

  // aim : sum of all the numbers in array

  const sum = numbers.reduce((accumulator , currentValue)=>{
    return accumulator + currentValue;
  },0)

  console.log(sum);

  // accumulator           currentValue                   return
  //    1                       2                           3
  //    3                       3                           6
  //    6                       4                           10
  //    10                      5                           15

  const userCart = [
    {productId : 1001 , productName : "Mobile" , price : 12000},
    {productId : 1002 , productName : "Laptop" , price : 35000},
    {productId : 1003 , productName : "TV" , price : 20000}
  ]

  console.log(userCart.price);

  const totalAmount = userCart.reduce((totalPrice , currentProduct)=>{
    return totalPrice + currentProduct.price;
  },0)

  console.log(totalAmount);


   //  total price           currentValue               return
   //    0                        {}                    12000
   //   12000                   35000                   47000
   //   47000                   20000                   67000