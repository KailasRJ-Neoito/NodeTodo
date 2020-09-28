
const yargs  = require('yargs');
const command = require('./command')

let thecommand = yargs.argv._[0];
let item = yargs.argv.item;
let price = yargs.argv.price;

console.log(thecommand);

if(thecommand === "add"){
   if(item && price){
     command.add(item,price);
   }
}else if(thecommand === "remove"){
    if(item){
        command.remove(item);
    }

}else if (thecommand === "print"){

    command.print();

}

