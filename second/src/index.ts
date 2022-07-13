
interface isInformation{
    title: string;
    status: boolean;
    id:number;
}

let info:isInformation={
    title: "swapnil",
    status: true,
    id: 4,
}

interface userInformation{
    first_name: string;
    last_name?: string;

}

const funUser=({first_name,last_name}:userInformation):void=>{
    if(first_name!==undefined && last_name!==undefined){
        console.log(first_name+" "+last_name);
    }else{
        console.log(first_name)
    }
}
let student:userInformation={
    first_name:"swapnil",
    last_name:"ramteke",
};

funUser(student)


interface Address{
    houseNumber:number;
    street:string;
    city:string;
    state:string;
    postalCode:number;
    country:string;
}


interface PresonDetails {
    Prefix?: string;
    phone: number;
    addresses: string;
    email: string | number;
    firstname: string;
    lastname: string;
    middlename?: string;
  }



  let arrofPerson  =[];
  let Person:PresonDetails={
    phone:1245632,
    addresses:"noida",
    email:"adss58@gmail.com",
    firstname:"swapnil",
    lastname:"ramteke"
  }
  arrofPerson.push(Person)
  
  
  console.log(arrofPerson);