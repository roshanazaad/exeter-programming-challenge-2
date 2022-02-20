// data store
var students = {
  1 : {
    studentName: "student1",
    studentID: 1,
    subject1: 100,
    subject2: 98,
    subject3: 76,
    subject4: 82,
    subject5: 92,
  },
};

const getReports = async (req, res) => {
  return JSON.stringify(students);
};


const addReport = async (req, res) => {
  const studentID = req.body.studentID;
  const newReport = {
    studentID,
    studentName: req.body.studentName,
    subject1: req.body.subject1,
    subject2: req.body.subject2,
    subject3: req.body.subject3,
    subject4: req.body.subject4,
    subject5: req.body.subject5,
  };

  students[studentID] = newReport;
  return { msg: `Student ID ${studentID} is added` };
};

const updateReport = async (req, res) => {
  const studentID = req.body.studentID;
  const newReport = {
    ...students[studentID],
    subject1: req.body.subject1,
    subject2: req.body.subject2,
    subject3: req.body.subject3,
    subject4: req.body.subject4,
    subject5: req.body.subject5,
  };
  students[studentID] = newReport;

  return {
    msg: `Student ID ${studentID} is updated`
  };
};

const deleteReport = async (req, res) => {
  const studentID = req.body.studentID;
  delete students[studentID];

  return { msg: `Student ID ${studentID} is deleted` };
};

module.exports = {
  getReports,
  addReport,
  updateReport,
  deleteReport,
};
