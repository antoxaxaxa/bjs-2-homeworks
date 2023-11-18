function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];

}

Student.prototype.setSubject = function (subjectName) {
    if (!this.excluded)
    {
        this.subject = subjectName;
    }
    
}

Student.prototype.addMarks = function (...marks) {
    if (!this.excluded && this.marks) {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0 || this.excluded) {
        return 0;
    }
    
    let result = this.marks.reduce(function (a, b) {
        return a + b;
    });
    result = result / this.marks.length;
    return result;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}
