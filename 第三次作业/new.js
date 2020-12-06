
// LV0
let A = 10;
let arr1 = [1,5,6,7,"8",10];
function getSum(arr1){
let sum = arr1[0] + arr1[1] + parseFloat(arr1[4]) + arr1[3] + arr1[2] + arr1[5];
return sum;
}
console.log(getSum(arr1));


// LV1
let str = "can-enter-volunteer-organization"
function change(str){
  let fif = str.split("-");
  for(let i=1;i<fif.length;i++)
     fif[i]=fif[i][0].toUpperCase()+fif[i].slice(1);
     fif= fif.join("");
     document.write(fif);
}
change(str)
/*
var str="border-bottom-color";
function stringToCamel(str){
      var temp=str.split("-");
      for(var i=1;i<temp.length;i++){
           temp[i]=temp[i][0].toUpperCase()+temp[i].slice(1);
       }
        return temp.join("");
    }

    document.write(stringToCamel(str));
*/


 
// LV2
let arr = [ [1,2] , 3,[4,[5,[6]] , 7] ]
function even(arr){
  let lv2 = [arr[0][0] ,arr[0][1] ,arr[1] ,arr[2][0] ,arr[2][1][0] ,arr[2][1][1][0] ,arr[2][2] ];
  console.log(lv2);
}
even(arr)   


// LV3

/*let arr4 = [{ id: 10, name: 'kc' }, { id: 8, name: 'hy' }, { id: 15, name: 'pipi' }, { id: 2, name: 'mama' }]
const sortNumber = (p) => (m, n) => m[p] - n[p];
console.log(arr4.sort(sortNumber('id')));
*/

let arr4 = [{ id: 10, name: 'kc' }, { id: 8, name: 'hy' }, { id: 15, name: 'pipi' }, { id: 2, name: 'mama' }]
function compare(property){
  return function(a,b){
      var value1 = a[property];
      var value2 = b[property];
      return value1 - value2;
  }
}
console.log(arr4.sort(compare('id')));