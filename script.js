/* JavaScript code here */
//task 1
console.log("External JS");

//task 2

function sum(arr) {
  var sum=0;
        arr.forEach(function(value, index){
          sum+=value;

        });
        return sum;
        }

        console.log(sum([1,2,3,4,5]));
     

//Task 3

function ValidateEmail(email){
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  var match = emailFormat.test(email);
  return match;
}

console.log(ValidateEmail("parsia@gmail.com"));


//Task 4

var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];

function getReadingStatus(index){
  return library[index].readingStatus;
}

console.log(getReadingStatus(2));

