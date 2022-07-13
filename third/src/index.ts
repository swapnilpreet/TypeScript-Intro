
interface User {
    type: 'user';
    name: string;
    age: number;
    occupation?: string;
    role?: string;
  }
  
  interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role?: string;
  }
  
  const PrintAdminData=({...ags}:Admin | User):void=>{
    console.log(ags);
  
  }
  
  let admin1:Admin={
    type:"admin",
    name:"masai",
    age:3,
    role:"dev",
  }
  let user1:User={
    type:"user",
    name:"arun",
    age:18,
    occupation: "teacher",
    role:"dev",
  }
  PrintAdminData(admin1)
  PrintAdminData(user1)