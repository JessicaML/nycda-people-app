//People Merge App

//1- Read in a file, named "people1.json", which contains a list of people.
//2 - Read in another file, named "people2.json", which contains another list of people.
//3 - After both of these files have been read, write a new file called
//"peopleComplete.txt" which contains a sorted list of all the people from the first two files.

//### BONUS
// - Read in N files from a people directory, and merge all of the files in the directory into a
//peopleComplete.json file

const fs = require('fs');

fs.readFile('./people1.json', function (err, data) {
  if (err) {
    throw err;
  }

	console.log(JSON.parse(data));
  var people = (JSON.parse(data));
  console.log(people);

  fs.readFile('./people2.json', function (err, data) {
    if (err) {
    throw err;
  }

    console.log(JSON.parse(data));
    people.push(JSON.parse(data));
    console.log(people);



    people = people.sort();

    people = JSON.stringify(people);

    fs.writeFile('peopleComplete.json', people, (err) => {
      if (err) {
        throw err;
      }

      console.log(people);
    });
  });
});
