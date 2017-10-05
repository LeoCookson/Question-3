let fname = prompt("Please enter first name");
let lname = prompt("Please enter last name");
let salary = prompt("Please enter salary");




class Employee {
        //Constructor accepts the new object 
         constructor(fname, lname, salary){
          this._fname = fname;
          this._lname = lname;
          this._salary = salary;
        }
        //function
        displayEmployee() {
            
            console.log(`My first name is ${this.fname} and my last name is ${this.lname} and my yearly salary is ${this.salary}`); 
   }
}
    
    let user = new Employee(); {
    //set methods 
    user.fname = fname;
    user.lname = lname;
    user.salary = salary;
    // Calling function
    user.displayEmployee();
     }