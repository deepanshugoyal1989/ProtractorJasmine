let homepage =  function() {
    
    //object repository
    const firstNumber = element(by.model('first'));
    const secondNumber = element(by.model('second'));
    const goButton = element(by.id('gobutton'));
    const result = element(by.cssContainingText('.ng-binding','5'));

    //methods

    this.setFirstNumber = function(num1) {
        firstNumber.sendKeys(num1);
    } 

    this.setSecondNumber = function(num2){
        secondNumber.sendKeys(num2);
    }

    this.clickGoButton = function() {
        goButton.click();
    }

    this.verifyResult= function(expectedResult) {
        expect(result.getText()).toEqual(expectedResult.toString());
    }


}

module.exports= new homepage();