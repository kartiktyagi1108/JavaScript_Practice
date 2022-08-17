  // spread operators in object

  const obj1 = {
    key1 : "value1",
    key2 : "value2"
  };

  const obj2 = {
    key3 : "value3",
    key4 : "value4"
  };

  const newObject = {...obj1,...obj2 , key5 : "value5"};
  console.log(newObject);