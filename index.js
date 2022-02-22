var students = {};
const app = require("fastify")({
  logger: true,
});

app.get("/", (req, res) => {
  res.send({ status: "OK" });
});

app.get("/report", (req, res) => {
  res.send(students);
});

app.post("/add", (req, res) => {
  //   console.log(req);
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

  res.send({ msg: `Student ID ${studentID} is added` });
});

app.post("/update", (req, res) => {
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

  res.send({ msg: `Student ID ${studentID} is updated` });
});

app.delete("/delete", (req, res) => {
  const studentID = req.body.studentID;
  delete students[studentID];

  res.send({ msg: `Student ID ${studentID} is deleted` });
});

app.listen(3000, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
