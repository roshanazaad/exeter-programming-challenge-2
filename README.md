# exeter-programming-challenge-2
## Endpoints
### POST /add
This endpoint is used to add new records to the students object. 
```js
Request Data:{ 
                'studentName': name of the student ,
                'studentID': some unique ID,
                'subject1' : mark 1,
                'subject2' : mark 2,
                'subject3' : mark 3,
                'subject4' : mark 4,
                'subject4' : mark 5 
                }
```

### POST /update
This endpoint is used to update the mark of a particular student.
```js
Request Data:{ 
                'studentID': some unique ID,
                'subject1' : mark 1,
                'subject2' : mark 2,
                'subject3' : mark 3,
                'subject4' : mark 4,
                'subject4' : mark 5 
                }
```

### DELETE /delete
This endpoint is used to delete the details of a student. 
```js
Request Data:{ 'studentID': some unique ID }
```
### GET /report
This endpoint is used to get a report for all the students. 
