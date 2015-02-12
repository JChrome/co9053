var FizzBuzz = {
  generate: function(count,suckit){
      var results = [];
      for (var i=1; i <= count; i++){
        if(i % 15 == 0)
            results.push("FizzBuzz");
        if(i % 5 == 0)
            results.push("Buzz");
        if(i % 3 == 0)
            results.push("Fizz")
        else
            results.push(i);
      };
      return results;
  }  
    
};

describe("Fizzbuzz", function(){
    it("exists", function(){
        expect(FizzBuzz).toBeDefined();
    });
    
    describe("generate", function(){
        it("exists", function(){
           expect(FizzBuzz.generate).toBeDefined(); 
        });
        
        it("generate(3) returns", function(){
           expect(FizzBuzz.generate(3)).toEqual([1,2,"Fizz"]);
            
        });
    });
})
