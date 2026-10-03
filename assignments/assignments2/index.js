const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const studentSchema = new mongoose.Schema({
  rollNo: String,
  name: String,
  branch: String,
  year: Number,
  marks: Number,
  email: String
});

const Student = mongoose.model('Student', studentSchema);

async function main() {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), { dbName: 'collegeDB' });
  console.log('Connected to collegeDB successfully.');

  // 1. Insert records
  await Student.insertMany([
    { rollNo: "23CM001", name: "Ravi Kumar", branch: "CSE-AIML", year: 3, marks: 85, email: "ravi@example.com" },
    { rollNo: "23CM002", name: "Priya Sharma", branch: "CSE", year: 2, marks: 92, email: "priya@example.com" },
    { rollNo: "23CM003", name: "Amit Patel", branch: "ECE", year: 3, marks: 72, email: "amit@example.com" },
    { rollNo: "23CM004", name: "Neha Singh", branch: "CSE-AIML", year: 1, marks: 45, email: "neha@example.com" },
    { rollNo: "23CM005", name: "Rahul Verma", branch: "EEE", year: 4, marks: 88, email: "rahul@example.com" }
  ]);
  console.log('\n[✓] Inserted 5 initial student records');

  // 2. Display all students
  console.log('\n--- 1. All Students ---');
  console.log(await Student.find({}, { _id: 0, __v: 0 }));

  // 3. Display students of a particular branch
  console.log('\n--- 2. Branch: CSE-AIML ---');
  console.log(await Student.find({ branch: 'CSE-AIML' }, { _id: 0, __v: 0 }));

  // 4. Display students scoring > 75
  console.log('\n--- 3. Students with Marks > 75 ---');
  console.log(await Student.find({ marks: { $gt: 75 } }, { _id: 0, __v: 0 }));

  // 5. Search using rollNo
  console.log('\n--- 4. Search by rollNo 23CM001 ---');
  console.log(await Student.findOne({ rollNo: '23CM001' }, { _id: 0, __v: 0 }));

  // 6. Search based on condition (year = 3)
  console.log('\n--- 5. Search by Year 3 ---');
  console.log(await Student.find({ year: 3 }, { _id: 0, __v: 0 }));

  // 7. Update marks
  await Student.updateOne({ rollNo: '23CM001' }, { $set: { marks: 90 } });
  console.log('\n[✓] Updated marks for 23CM001 to 90');

  // 8. Update email
  await Student.updateOne({ rollNo: '23CM002' }, { $set: { email: 'priya_new@example.com' } });
  console.log('[✓] Updated email for 23CM002');

  // 9. Delete student
  await Student.deleteOne({ rollNo: '23CM005' });
  console.log('[✓] Deleted record for rollNo 23CM005');

  // 10. Display in descending order of marks
  console.log('\n--- 6. Students Sorted by Marks (Descending) ---');
  console.log(await Student.find({}, { _id: 0, __v: 0 }).sort({ marks: -1 }));

  // 11. Create index on rollNo & demonstration
  await Student.collection.createIndex({ rollNo: 1 });
  console.log('\n[✓] Created index on rollNo field.');
  const explainInfo = await Student.find({ rollNo: '23CM001' }).explain('executionStats');
  console.log('Query Winning Plan Stage:', explainInfo.queryPlanner.winningPlan.stage);
  console.log('Explanation: Indexing creates an index tree structure on rollNo for O(log N) direct lookup (IXSCAN), skipping collection scan (COLLSCAN).');

  // Real-Time Extension Queries
  console.log('\n===== REAL-TIME EXTENSION =====');
  console.log('a) Marks > 80:', await Student.find({ marks: { $gt: 80 } }, { _id: 0, __v: 0 }));
  console.log('b) Marks < 50:', await Student.find({ marks: { $lt: 50 } }, { _id: 0, __v: 0 }));
  console.log('c) Highest-scoring student:', await Student.find({}, { _id: 0, __v: 0 }).sort({ marks: -1 }).limit(1));
  console.log('d) Branch CSE-AIML:', await Student.find({ branch: 'CSE-AIML' }, { _id: 0, __v: 0 }));
  console.log('e) Sorted by Marks:', await Student.find({}, { _id: 0, __v: 0 }).sort({ marks: -1 }));

  await mongoose.disconnect();
  await mongoServer.stop();
  console.log('\nDone!');
}

main().catch(console.error);
