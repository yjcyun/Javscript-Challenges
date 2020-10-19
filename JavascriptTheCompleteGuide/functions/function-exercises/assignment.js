// 1) Arrow function
const sayHello = name => console.log('Hi' + name);

sayHello();

// 2) 
const sayHello2 = (msg, name) => console.log(msg + name);
const sayHello3 = () => console.log('Hi Mars');
const sayHello4 = name => 'Hi ' + name;

sayHello();

// 3)
const sayHello = (msg = 'Hi', name) => console.log(msg + name);

// 4)
const checkInput = (cb, ...arg) => {
  let hasEmptyText = false;
  for (const text of arg) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}
checkInput(()=>{
  console.log('All not empty');
},'hello', '12', '', 'asedf');

