  // object destructuring

  const address = {
    Village : "Rastam",
    Town : "Deoband",
    District : "saharanpur",
    Country : "India",
    Continent : "Asia"
  };

// const Village = address.Village;
// const Town = address.Town;
// console.log(Village,Town);

// let {Village,Town} = address;
// Village = "Bastam";
// console.log(Village);


let {Village, Town, ...restaddress} = address;
console.log(Village);
console.log(restaddress);