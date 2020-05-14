branches = [
    {
        active: true,
        employees: 10,
        Revenue: 20000,
        Expenses: 12000,
        district: "north"
    },
    {
        active: false,
        employees: 6,
        Revenue: 1500,
        Expenses: 1700,
        district: "center"
    },
    {
        active: true,
        employees: 10,
        Revenue: 10000,
        Expenses: 5000,
        district: "Tel-Aviv"
    }
]

managers = [
    {
        employeeId: "111",
        rank: 2
    },
    {
        employeeId: "116",
        rank: 3
    }
  
]

clients = [
    {
        clientId: "111",
        isVIP: false,
        lastVisit: "10/10/10"
    },
    {
        clientId: "116",
        isVIP: true,
        lastVisit: "12/13/14"
    }
  
]

suppliers = [
    {
        supplierId: "110",
        oweUs: false,
        oweHim: false
    },
    {
        supplierId: "112",
        oweUs: true,
        oweHim: false
    }
  
]

employees = [
    {
        employeeId: "111",
        branchNum: 101,
        UserName: "emp1",
        password: "1234",
        isManager: true,
        age: 55,
        Experience: 3
    },
    {
        employeeId: "112",
        branchNum: 101,
        UserName: "emp2",
        password: "5678",
        isManager: false,
        age: 21,
        Experience: 5
    },  {
        employeeId: "113",
        branchNum: 103,
        UserName: "emp3",
        password: "9876",
        isManager: false,
        age: 18,
        Experience: 5
    },  {
        employeeId: "114",
        branchNum: 104,
        UserName: "emp4",
        password: "5432",
        isManager: false,
        age: 36,
        Experience: 21
    },  {
        employeeId: "115",
        branchNum: 105,
        UserName: "emp5",
        password: "4444",
        isManager: false,
        age: 22,
        Experience: 0
    },  {
        employeeId: "116",
        branchNum: 105,
        UserName: "emp6",
        password: "1100",
        isManager: true,
        age: 58,
        Experience: 12
    }
    
]
 
users = [
    employees,
    managers,
    clients,
    suppliers
]

flowers = [
    {
        name: "sun",
        color: "blue",
        price: 12.99,
        image:"/../../..image"
    },
    {
        name: "sig",
        color: "yellow",
        price: 10.99,
        image:"/../../..image"
    },
    {
        name: "song",
        color: "red",
        price: 15.99,
        image:"/../../..image"
    }
  
]

// if no such user or incorrect password => return none. else returns the role
function isAuthenticated(username, password){
    console.log("user:  " + username);
    console.log("pas: " + password);

    // const result = employees.filter(obj => {
    //     return obj.UserName === "em1"
    //   })

    const user = employees.find(aUser => {
       return aUser.UserName === username
    });

    console.log("user2 is:  " + user);


    if(user && user.password === password){
      return user.isManager ? "manager" : "employee";
    }
    return null;
}

module.exports = {
     isAuthenticated : isAuthenticated,
     somethingElse : "somethingElse" 
    }