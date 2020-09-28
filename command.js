const fs = require('fs');

const add = (item,price) => {

  let itemlist = [];
try{
    itemlist = JSON.parse(fs.readFileSync("itemlist.json"))
}catch(e){
  console.log(e);
}

   let index = itemlist.findIndex( (x) => x.item === item );
   console.log(index);
   if(index = -1){
       itemlist.push({item,price});
       console.log(itemlist);
   } else {
       itemlist[index].price = price;
   }
    
     fs.writeFileSync("itemlist.json",JSON.stringify(itemlist));
    
}

const remove = (item) => {
   let itemlist = [];
   try{
   itemlist = JSON.parse(fs.readFileSync("itemlist.json"))
}catch(e){
    console.log(e);
}

let removedlist = itemlist.filter((x) => x.item !== item)
console.log(removedlist);

}

const print = () => {

    let itemlist = [];
   try{
   itemlist = JSON.parse(fs.readFileSync("itemlist.json"))
}catch(e){
    console.log(e);
}

console.log(itemlist);

}


module.exports = {
    add,remove,print
}