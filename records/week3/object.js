// Student Course System in JavaScript (ES6 Class)

console.log("===== Student Management System =====");

class CourseManager {
    constructor() {
        this.courses = [];
    }

    addCourse(title, credits) {
        this.courses.push({ name: title, points: credits });
        console.log(`Course "${title}" enrolled successfully.`);
    }

    listCourses() {
        console.log("\nEnrolled Courses:");
        for (let i = 0; i < this.courses.length; i++) {
            console.log(`${i + 1}. ${this.courses[i].name} (${this.courses[i].points} Credits)`);
        }
    }

    totalCredits() {
        let total = 0;
        for (let i = 0; i < this.courses.length; i++) {
            total += this.courses[i].points;
        }
        return total;
    }

    removeLastCourse() {
        let dropped = this.courses.pop();
        console.log(`\nDropped Course: ${dropped.name}`);
    }
}

const manager = new CourseManager();
manager.addCourse("Full Stack Web Dev", 4);
manager.addCourse("Machine Learning", 3);
manager.addCourse("Database Systems", 3);

manager.listCourses();
console.log("\nTotal Credits:", manager.totalCredits());

manager.removeLastCourse();
console.log("\nUpdated List:");
manager.listCourses();
console.log("Updated Total Credits:", manager.totalCredits());