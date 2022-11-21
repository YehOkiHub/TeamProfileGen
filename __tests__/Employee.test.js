const Employee = require("../lib/Employee.js")

describe('employee', () => {
    describe('Initialization', () => {
      // Positive test
      it("should be a type of employee", () => {
        let obj = new Employee()
        expect(obj instanceof Employee).toEqual(true)
        
      });
  
      
      
    });
  });