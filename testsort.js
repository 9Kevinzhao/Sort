const Sort=require('./Sort.js');

function main(){
  let list=[1,3,2,4,5,7,6,1]
  console.log(Sort.selection(list));
  console.log(Sort.insertion(list));
  console.log(Sort.merge(list));

}

main()
