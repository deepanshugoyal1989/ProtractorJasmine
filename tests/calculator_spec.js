const homepage = require('./../pages/homepage');


describe('Validate Calculator functionality', function () {

    it('Validate ADD functionality', function () {
        homepage.setFirstNumber(3);
        homepage.setSecondNumber(2);
        homepage.clickGoButton();
        homepage.verifyResult(5);

    });

});