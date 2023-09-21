function Sorteio(array) {
    console.log(array.join('-'));
  }
  
  let array = [];
  for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 99) + 1;
    array.push(randomNum);
  }
  
  Sorteio(array);
  