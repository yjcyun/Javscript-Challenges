const combine = (cb, operation, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += num;
    } else {
      sum -= num;
    }
  }
  cb(sum);
}

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
}

combine(showResult.bind(this, 'The result after adding all numbers is: '), 'ADD', 3, 1, 6, 9, 30);
combine(showResult.bind(this, 'The result after subtracting all numbers is: '), 'SUBSTRACT', 3, 1, 6, 9, 30);