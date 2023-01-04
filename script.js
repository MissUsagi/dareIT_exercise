const candidates = [
   {
      "id": 1,
      "name": "Alice Smith",
      "position": "Software Engineer",
      "skills": ["Java", "Python", "Javascript"],
      "experience": 3,
      "education": "Bachelor's degree in Computer Science",
      "email": "alice.smith@example.com",
      "phone": "(123) 456-7890"
   },
   {
      "id": 2,
      "name": "Bob Johnson",
      "position": "Data Scientist",
      "skills": ["R", "Python", "SQL"],
      "experience": 5,
      "education": "Master's degree in Data Science",
      "email": "bob.johnson@example.com",
      "phone": "(098) 765-4321"
   },
   {
      "id": 3,
      "name": "Charlie Williams",
      "position": "Product Manager",
      "skills": ["Product management", "Agile development", "User research"],
      "experience": 2,
      "education": "Bachelor's degree in Business Administration",
      "email": "charlie.williams@example.com",
      "phone": "(111) 222-3333"
   },
   {
      "id": 4,
      "name": "Diana Brown",
      "position": "UX Designer",
      "skills": ["User experience design", "Interaction design", "Usability testing"],
      "experience": 4,
      "education": "Master's degree in Human-Computer Interaction",
      "email": "diana.brown@example.com",
      "phone": "(222) 333-4444"
   },
   {
      "id": 5,
      "name": "Eve Davis",
      "position": "Marketing Manager",
      "skills": ["Digital marketing", "Social media", "Content creation"],
      "experience": 3,
      "education": "Bachelor's degree in Marketing",
      "email": "eve.davis@example.com",
      "phone": "(333) 444-5555"
   },
   {
      "id": 6,
      "name": "Frank Thompson",
      "position": "DevOps Engineer",
      "skills": ["Cloud infrastructure", "Continuous delivery", "Configuration management"],
      "experience": 4,
      "education": "Bachelor's degree in Computer Science",
      "email": "frank.thompson@example.com",
      "phone": "(444) 555-6666"
   },
   {
      "id": 7,
      "name": "John Doe",
      "position": "Software Engineer",
      "skills": ["Java", "Python", "Javascript", "React "],
      "experience": 1,
      "education": "Bachelor's degree in Computer Science",
      "email": "John.doe@example.com",
      "phone": "(147) 256-7110"
   },
];

const openPositions = [{
   company: "Acme Inc.",
   position: "Software Engineer",
   location: "New York, NY",
   skills: ["Java", "Spring", "Agile development"],
   experience: 3
},
{
   company: "TechCorp",
   position: "DevOps Engineer",
   location: "San Francisco, CA",
   skills: ["AWS", "Terraform", "Docker"],
   experience: 5
},
{
   company: "XYZ Inc.",
   position: "Data Scientist",
   location: "Chicago, IL",
   skills: ["Python", "R", "Machine learning"],
   experience: 2
},
{
   company: "Abc Solutions",
   position: "Product Manager",
   location: "Boston, MA",
   skills: ["Product management", "Agile development", "User research"],
   experience: 1
},
{
   company: "Def Company",
   position: "UX Designer",
   location: "Seattle, WA",
   skills: ["User experience design", "Interaction design", "Usability testing"],
   experience: 2
},
{
   company: "Lemon Inc.",
   position: "UX Designer",
   location: "Chicago, IL",
   skills: ["User experience design", "Interaction design"],
   experience: 4
},

{
   company: "Test Inc.",
   position: "UX Designer",
   location: "Chicago, IL",
   skills: ["Javascript", "Python"],
   experience: 4
},
];


// Write a function that takes as a param list of objects (e.g. candidates) and returns an object that is a record - for a key that is equal to id of a candidate, the value will be the candidate (without id).
const listOfCandidates = candidates.reduce((candidatesObj, person) => {
   let [key, value] = [person.id, person.name];
   candidatesObj[key] = value;
   return candidatesObj;
}, {})
console.log(listOfCandidates)


//Write a function that will return an array of candidates’ emails
const getEmails = candidates.map(candidate => candidate.email);
console.log("Candidates' Emails", getEmails);


//Write a function that will sort candidates by experience (ascending).
const candidatesSorted = [...candidates];
candidatesSorted.sort((a, b) => a.experience - b.experience);
console.log("Sorted Candidates: ", candidatesSorted)


//Write a function that will return companies from the specific location passed as a parameter to that function.
function companiesByLocation(location) {
   return openPositions.filter(company => company.location === location);
}
console.log("Companies from the specific location: ", companiesByLocation("Chicago, IL"))



//Write a function that for takes an array of skills as an parameter and will return list of candidates that have required skills
function candidatesWithRequiredSkills(requiredSkills) {
   return candidates.filter(candidate => requiredSkills.every(skill => candidate.skills.includes(skill)));
}
console.log(candidatesWithRequiredSkills(["Continuous delivery", "Cloud infrastructure", "Configuration management"]));
console.log(candidatesWithRequiredSkills(["Java", "Python", "Javascript"]));
console.log(candidatesWithRequiredSkills(["Python", "Javascript", "React"]));



//Write a function that returns the first candidate that has at least 2 skills required for the position and required experience.
function perfectCandidate() {
   openPositions.forEach(position => {
      candidates.find(candidate => {
         const newArray = candidate.skills.filter(skill => {
            return position.skills.includes(skill);
         })
         if (candidate.experience >= position.experience && newArray.length >= 2)
            return console.log(`${position.company} -> ${candidate.name}`)
      })
   })
}

console.log(perfectCandidate());


/***************************OTHER SOLUTIONS*/

// const candidatesObject = candidates.map(element => {
//    const object = JSON.stringify(element);
//    return JSON.parse(object);
// });
// console.log(candidatesObject);


// function candidatesWithRequiredSkills(requiredSkills) {
//    return candidates.filter(({ skills: candidatesSkills }) =>
//       requiredSkills.sort().toString() === candidatesSkills.sort().toString())
// }


/* SOLUTION 1 */
// function candidatesList(inputArray) {
//    const listOfCandidates = {};
//    inputArray.forEach(element => {
//       let [key, value] = [element.id, element.name];
//       listOfCandidates[key] = value;
//    })
//    return listOfCandidates;
// }
// console.log(candidatesList(candidates));