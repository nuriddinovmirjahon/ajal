var list =[]
// list[0]='sardor';
list.push('sardor');
list.push('akram');
list.push('ilhom');

list.splice(1,2,'bekzod');
console.log(list);

console.log(list.indexOf('akram'));
console.log(list.length);

var oxirgiIism =list.pop();
console.log(oxirgiIsm);
console.log(list);

list.splice(1,1);

console.log(list);

list.push('12',12,'salom',{})

console.log(list);
console.log(list.join());

console.log(list.join(','));

var list2 =['bekzod','ziyod','mahmud','akram']

list2.sort();
list2.reverse();
console.log(list2);



