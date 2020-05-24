branchesList = [
    
    {
        name: "b1",
        active: true,
        employees: 10,
        Revenue: 20000,
        Expenses: 12000,
        district: "north"
    },
    {
        name: "b2",
        active: false,
        employees: 6,
        Revenue: 1500,
        Expenses: 1700,
        district: "center"
    },
    {
        name: "b3",
        active: true,
        employees: 10,
        Revenue: 10000,
        Expenses: 5000,
        district: "Tel-Aviv"
    }
]
branches = [
    {branches: branchesList}
];
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
        lastVisit: "10/10/10",
        password: 1234
    },
    {
        clientId: "116",
        isVIP: true,
        lastVisit: "12/13/14",
        password: 1235
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
    {employees: employees},
    {managers: managers},
    {clients: clients},
    {suppliers: suppliers}
]

flowersList = [
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
catalogue = [
    {catalogue: flowersList}
];
function getUsers(role){

    if(role === "employee" ){
        var myUsers = clients.map(a => ({...a})); // deep copy
        myUsers.map(user => delete user.password);
        return myUsers;
    }

    if(role === "manager" ){
        var myUsers = users.Fo
        var myUsers = users.map(a => ({...a}));
        return myUsers;
    }
    return [];
}
function getBranches(role){

    if(role === "manager" ){
        var myBranches = branches.map(a => ({...a}));
        return myBranches;
    }
}
function getCatalogue(){

    
        var myFlowers = catalogue.map(a => ({...a}));
        return myFlowers;
    
}
// if no such user or incorrect password => return none. else returns the role
function isAuthenticated(username, password){
    const user = employees.find(aUser => {
       return aUser.UserName === username
    });
    if(user && user.password === password){
      return user.isManager ? "manager" : "employee";
    }
    return null;
}

module.exports = {
     isAuthenticated : isAuthenticated,
     getUsers : getUsers,
     getBranches: getBranches,
     getCatalogue:getCatalogue
}