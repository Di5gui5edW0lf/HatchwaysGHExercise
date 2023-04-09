function randomGame() {
    let counter = 0;
    const timer = setInterval(() => {
      const randNum = Math.random();
      counter++;
      if (randNum > 0.75) {
        console.log(`It took ${counter} tries to find a number greater than 0.75.`);
        clearInterval(timer);
      }
    }, 1000);
  }

  randomGame()