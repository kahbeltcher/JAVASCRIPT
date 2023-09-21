function sortNumbers() {
  let sortButton = document.getElementById("sortButton");

  let numberList = document.getElementById("numberList");
  numberList.innerText = "";

  let winningNumbers = [2, 5, 8, 16, 29, 36];
  let numbers = [];
  while (numbers.length < 6) {
    let randomNumber = Math.floor(Math.random() * 30) + 1;
    if (
      (winningNumbers.includes(randomNumber) &&
        !numbers.includes(randomNumber)) ||
      (!winningNumbers.includes(randomNumber) &&
        !numbers.includes(randomNumber))
    ) {
      numbers.push(randomNumber);
      if (winningNumbers.includes(randomNumber)) {
        numberList.innerHTML += `<span class="winning">${randomNumber}</span>-`;
      } else {
        numberList.innerHTML += `${randomNumber}-`;
      }
    }
  }

  // Remover o traço ("-") do último número sorteado
  numberList.innerHTML = numberList.innerHTML.slice(0, -1);

  // Verificar se todos os números são iguais e exibir mensagem
  if (numbers.every((num) => num === numbers[0])) {
    numberList.innerText = "Você acertou todos os números!";
  }
}

let sortButton = document.getElementById("sortButton");
sortButton.addEventListener("click", sortNumbers);
