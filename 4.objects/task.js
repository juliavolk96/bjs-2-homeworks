function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks){
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if(this.marks === undefined) {
    return 0;
  }
  
  if(this.marks.length === 0) {
    return 0;
  }
  
  return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}