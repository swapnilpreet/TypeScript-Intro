

let first_name:string = "swapnil";

let age:number =21;

let isFetching:boolean = false;

let array:number[] = [1,2,3,4,5,6];

let arrayofstring:string[] = ["swapnil","ramteke"];

let tuple:[string,boolean]
tuple=["swapnil",true]

console.log(tuple);

enum swapnil{
    User, 
    SuperUser, 
    Admin, 
    SuperAdmin,
}
console.log(swapnil)

function product(x:number,y:number):number{
    return x*y;
}
console.log(product(2,8))


function Div(x:number,y:number):number{
    return x/y;
}
console.log(Div(7,14))



function PrintName(Query:string){
    console.log(Query);

}
PrintName("swapnil");