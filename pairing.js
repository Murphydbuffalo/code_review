// Take a list of names and shuffle it
let names = process.argv.slice(2);
let indexes = [];
let namesCount = names.length;
let swap = (array, i) => {
  let aValue = array[i];
  array[i] = array[i + 1];
  array[i + 1] = aValue;
};

for(let i = 0; i < namesCount; i++) {
  let index = Math.floor(Math.random() * namesCount * 100);
  indexes[i] = index;
}

for(let i = 0; i < namesCount; i++) {
  let indexA = indexes[i];
  let indexB = indexes[i + 1];

  if(indexA < indexB) {
    swap(names, i);
  }
}

// Split everyone into pairs, with potentially one trio
let needTrio = (namesCount % 2 !== 0);

for(let i = 0; i < namesCount; i++) {
  if(needTrio) {
    console.log(`${names[i]} will review ${names[i + 1]}'s code.`);
    console.log(`${names[i + 1]} will review ${names[i + 2]}'s code.`);
    console.log(`${names[2]} will review ${names[i]}'s code.`);

    needTrio = false;
    i += 2;

  } else {
    console.log(`${names[i]} and ${names[i + 1]} will review each other's code.`);

    i++;
  }
}
