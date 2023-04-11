function randomGame() {
  let counter = 0;
  const resultElem = document.getElementById("result");
  const timer = setInterval(() => {
    const randNum = Math.random();
    counter++;
    if (randNum > 0.75) {
      resultElem.innerHTML = `It took ${counter} tries to find a number greater than 0.75.`;
      clearInterval(timer);
    }
  }, 1000);
} 