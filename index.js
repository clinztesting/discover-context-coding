const unitList = [
  {
    unitNumber: 1,
    title: "Programming Fundamentals",
    description: "",
    length: "8 Weeks",
    timeCommittment: "17-20hrs / Week",
    lessons: [
      "Intro To This Class",
      "JS Front End DOM Examples",
      "JS Intro",
      "DOM intro",
      "Data Types",
      "Data Structures",
      "Expressions",
      "Conditionals",
      "Loops",
      "Functions Intro",
      "Scope & Context",
      "Functions Deep Dive",
      "Mutation",
      "Array Methods",
      "Timers",
    ]
  },
  {
    unitNumber: 2,
    title: "Front End Apps",
    description: "",
    length: "3 Weeks",
    timeCommittment: "17-20hrs / Week",
    lessons: [
      "Git 2",
      "DOM Focus",
      "counter-app",
      "Event Handling",
      "Forms",
      "Manipulating CSS",
      "CRUD",
      "OOP",
      "Modern Javascript",
      "App Challenge: Todo List",
    ]
  },
  {
    unitNumber: 3,
    title: "Back End Apps",
    description: "",
    length: "4 Weeks",
    timeCommittment: "17-20hrs / Week",
    lessons: [

    ]
  },
  {
    unitNumber: 4,
    title: "Full Stack Apps",
    description: "Learn how to connect all the pieces of the internet to create fully functional apps.",
    length: "4 Weeks",
    timeCommittment: "17-20hrs / Week",
    lessons: [
      "React Intro",
      "React Component State",
      "Effects",
      "Redux & Sagas",
      "Spacex Launches App",
    ]
  },
  {
    unitNumber: 5,
    title: "Custom App",
    description: "Your Own Custom App Idea",
    length: "2 Weeks",
    timeCommittment: "17-20hrs / Week",
    lessons: [

    ]
  },
  {
    unitNumber: 6,
    title: "Personal Website",
    description: "",
    length: "2 Weeks",
    timeCommittment: "17-20hrs / Week",
    lessons: [

    ]
  },
];

function renderUnitList() {
  for (const item of unitList) {
    let newLi = document.createElement("li");
    let titleNode = document.createTextNode(item.title);
    newLi.appendChild(titleNode);
    newLi.setAttribute("class", "some-class")

    let unitListOlNode = document.getElementById("unit-list");
    unitListOlNode.appendChild(newLi);
  }
}

renderUnitList();