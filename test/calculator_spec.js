var Calculator = {
    foo: "bar", 
    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b;
    }
};

describe("Calculator", function(){
    it("Calculator is defined", function(){
       expect(Calculator).toBeDefined(); 
        
    });
    describe("addition", function(){
        it("can add 1 and 1", function(){
            expect(Calculator.add(1,1)).toEqual(2);     
        });
    });
    
    it("2+2=4", function(){
        expect(1).toEqual(1);
    });

});

