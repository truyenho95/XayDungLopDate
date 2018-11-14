let MyDate = function(day, month, year) {

  this.day  = day;
  this.month = month;
  this.year = year;

  this.setDay = function(day) {
    this.day  = day;
  }
  this.setMonth = function(month) {
    this.month  = month;
  }
  this.setYear = function(year) {
    this.year  = year;
  }

  this.getDay = function() {
    return this.day;
  }
  this.getMonth = function() {
    return this.month;
  }
  this.getYear = function() {
    return this.year;
  }

};

let date = new MyDate(2, 2, 2007);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();

alert(`${day}/${month}/${year}`);

date.setDay(10);
day = date.getDay();
alert(`${day}/${month}/${year}`);

MyDate.prototype.setDate = function(day, month, year) {
  this.day  = day;
  this.month = month;
  this.year = year;
  return `${day}/${month}/${year}`;
};

alert(date.setDate(14, 11, 2018));
