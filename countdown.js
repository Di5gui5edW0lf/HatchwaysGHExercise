function countdown(num) {
    const timer = setInterval(() => {
      num--;
      if (num === 0) {
        console.log("DONE!");
        clearInterval(timer);
      } else {
        console.log(num);
      }
    }, 1000);
  } 



countdown(7)