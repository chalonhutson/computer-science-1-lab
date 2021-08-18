function squareEveryDigit(number) {
    let counter = []
    let str = number.toString()
  
    for (i=0; i < str.length; i++){
      counter.push(parseInt(str[i])**2)
    }
  
    return counter.join("")
  
  };
  
  console.log(parseInt(squareEveryDigit(946)))