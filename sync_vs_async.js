// Synchronus vs Asynchronus

// Synchronus
const second = () => {
  console.log('How are you doing?');
};

const first = () => {
  console.log('Hey there');
  second();
  console.log('The end');
};

first();

// Asynchronus
const second = () => {
  setTimeout(() => {
    console.log('Async Hey there');
  }, 2000);
};

const first = () => {
  console.log('Hey there');
  second();
  console.log('The end');
};

first();