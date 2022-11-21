const Manager = require("../lib/Manager.js")

describe('Manager', () => {
    describe('Initialization', () => {
      // Positive test
      it("should be a type of Manager", () => {
        let obj = new Manager()
        expect(obj instanceof Manager).toEqual(true)
        
      });
  
      
      
    });
  });