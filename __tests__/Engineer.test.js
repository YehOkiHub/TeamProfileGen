const Engineer = require("../lib/Engineer.js")

describe('Engineer', () => {
    describe('Initialization', () => {
      // Positive test
      it("should be a type of Engineer", () => {
        let obj = new Engineer()
        expect(obj instanceof Engineer).toEqual(true)
        
      });
  
      
      
    });
  });