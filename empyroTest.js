// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const arr = [1, 2, 3, 3, 4, 4, 4];

const arrMap = {};

for (let i = 0; i < arr.length; i++) {
    if(arr[i] in arrMap ){
        arrMap[arr[i]] += 1;
    }
    else{
    arrMap[arr[i]] =  1;
    }
}

// console.log(arrMap)
// callstack execution
for (let i = 0; i < 3; i++) { setTimeout(function() { alert(i); }, 1000 + i)};

//  setTimeout(function() { alert(i); }, 1000 + i
//   setTimeout(function() { alert(i); }, 1000 + i
//   setTimeout(function() { alert(i); }, 1000 + i
   
//   event queue:
//   setTimeout(function() { alert(i); }, 1000 + i
   
// 1 (2 sec gap) 2 (3 sec gap) 3 (4 gap sec ) 4

// after 1 sec = > 1 
// after 2 sec = > 2
// after 3 secs => 3
// 1=>3=>6=>10=>15
let n = 0;
for (let i = 1; i <= 4; i++) { 
    n+=i;
    // console.log(n)
    setTimeout(function() { 
    alert(i); }, 1000 * n)
};





   
   


