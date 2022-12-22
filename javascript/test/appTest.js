const expect = require('chai').expect;
const assert = require('chai').assert;
const Employee = require('../app');

describe('Employee test', function() {

    let employee1 = Employee;

    describe('Initialization', function() {
        it('Employee name should be correctly initialized', function() {
            expect(employee1.name).to.equal('Bob');
            assert.isString(employee1.name);
        });

        it('Employee age should be correctly initialized', function() {
            expect(employee1.age).to.equal(35);
            assert.isNumber(employee1.age);
        });

        it('Employee gender should be correctly initialized', function() {
            expect(employee1.gender).to.equal('male');
            assert.isString(employee1.gender);
        });

        it('Employee should be not be at work when initialized', function() {
            expect(employee1.atWork).to.equal(false);
            assert.isBoolean(employee1.atWork);
        });

        it('Employee should have correct number of tasks initialized', function() {
            expect(employee1.tasks).to.equal(5);
            assert.isNumber(employee1.tasks);
        })
    });

    describe('Functionality', function() {
        it('Check if employee went to work', function() {
            employee1.goToWork();
            expect(employee1.atWork).to.equal(true);
        });

        it('Check if employee tasks are being correctly shown when completed', function() {
            let tasksToComplete = employee1.tasks; // 5 tasks

            for (let i = 0; i < tasksToComplete; i++) {
                let currentTasks = employee1.tasks;

                employee1.completeTask();

                expect(employee1.tasks).to.equal(currentTasks - 1);
            }
        });
    });
});