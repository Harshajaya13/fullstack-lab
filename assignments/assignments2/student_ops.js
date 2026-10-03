// MongoDB Lab Assignment 2 - Student Database Operations
// Database: collegeDB | Collection: students

// 1. Create database and insert 5 student records
use collegeDB;

db.students.insertMany([
  { rollNo: "23CM001", name: "Ravi Kumar", branch: "CSE-AIML", year: 3, marks: 85, email: "ravi@example.com" },
  { rollNo: "23CM002", name: "Priya Sharma", branch: "CSE", year: 2, marks: 92, email: "priya@example.com" },
  { rollNo: "23CM003", name: "Amit Patel", branch: "ECE", year: 3, marks: 72, email: "amit@example.com" },
  { rollNo: "23CM004", name: "Neha Singh", branch: "CSE-AIML", year: 1, marks: 45, email: "neha@example.com" },
  { rollNo: "23CM005", name: "Rahul Verma", branch: "EEE", year: 4, marks: 88, email: "rahul@example.com" }
]);

// 2. Display all students
print("\n--- All Students ---");
db.students.find();

// 3. Display students of a particular branch
print("\n--- Students in CSE-AIML Branch ---");
db.students.find({ branch: "CSE-AIML" });

// 4. Display students who scored > 75 marks
print("\n--- Students with Marks > 75 ---");
db.students.find({ marks: { $gt: 75 } });

// 5. Search for a student using rollNo
print("\n--- Search Student by Roll No ---");
db.students.find({ rollNo: "23CM001" });

// 6. Search students based on year
print("\n--- Search Students by Year 3 ---");
db.students.find({ year: 3 });

// 7. Update marks of a student
db.students.updateOne({ rollNo: "23CM001" }, { $set: { marks: 90 } });

// 8. Update email of a student
db.students.updateOne({ rollNo: "23CM002" }, { $set: { email: "priya_new@example.com" } });

// 9. Delete a student record using rollNo
db.students.deleteOne({ rollNo: "23CM005" });

// 10. Display students in descending order of marks
print("\n--- Students Sorted by Marks (Descending) ---");
db.students.find().sort({ marks: -1 });

// 11. Create index on rollNo
db.students.createIndex({ rollNo: 1 });

// 12. Demonstrate indexing performance using explain
print("\n--- Query Execution Stats (Indexing Demo) ---");
db.students.find({ rollNo: "23CM001" }).explain("executionStats");

// --- Real-Time Extension Queries ---
print("\n--- Real-Time Extension: Scoring > 80 ---");
db.students.find({ marks: { $gt: 80 } });

print("\n--- Real-Time Extension: Scoring < 50 ---");
db.students.find({ marks: { $lt: 50 } });

print("\n--- Real-Time Extension: Highest-Scoring Student ---");
db.students.find().sort({ marks: -1 }).limit(1);
