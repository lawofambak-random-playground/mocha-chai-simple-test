// Template for Employee object
class Employee {
    constructor(name, age, gender, tasks) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.atWork = false;
        this.tasks = tasks;
    }

    goToWork() {
        this.atWork = true;
    }

    completeTask() {
        if (this.tasks > 0) {
            console.log('Completing 1 task...');
            this.tasks --;
        } else {
            console.log('Completed all the tasks!');
        }
    }
}

// Creating a new instance of Employee object
let employee1 = new Employee("Bob", 35, "male", 5);

module.exports = employee1;