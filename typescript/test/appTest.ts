import 'mocha';
import { expect, assert } from 'chai';
import { UberDriver } from '../app';

describe('Uber Driver test', function() {
    let uberDriver: UberDriver;
    
    beforeEach(function() {
        uberDriver = new UberDriver();
    })

    it('Uber driver rating should be correctly initialized', function() {
        expect(uberDriver.averageRating).to.equal(0);
        assert.isNumber(uberDriver.averageRating);
    });

    it('Add 1 rating', function() {
        uberDriver.addRating({name: 'Bob', rating: 95});
        expect(uberDriver.averageRating).to.equal(95);
    });

    it('Add 5 ratings', function() {
        uberDriver.addRating({name: 'Bob', rating: 95});
        uberDriver.addRating({name: 'Alice', rating: 85});
        uberDriver.addRating({name: 'Tom', rating: 100});
        uberDriver.addRating({name: 'Frank', rating: 80});
        uberDriver.addRating({name: 'Ella', rating: 100});

        const currentAverageRating: number = (95 + 85 + 100 + 80 + 100) / 5;

        expect(uberDriver.averageRating).to.equal(currentAverageRating);
    });

    it('Correctly gets rating information of a certain person', function() {
        uberDriver.addRating({name: 'Bob', rating: 95});
        expect(uberDriver.ratingInfoOf(0).name).to.equal('Bob');
        assert.isString(uberDriver.ratingInfoOf(0).name);
        expect(uberDriver.ratingInfoOf(0).rating).to.equal(95);
        assert.isNumber(uberDriver.ratingInfoOf(0).rating);
    });
})