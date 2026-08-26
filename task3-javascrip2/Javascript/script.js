let students=[
    {
        id:1,
        name:"Mostafa Mohamed",
        age:28,
        city:"Cairo",
        grade:95,
        isGraduated:true,
        skills:["HTML","CSS","JS"]
    },
    {
        id:2,
        name:"Ali Hassan",
        age:17,
        city:"Alex",
        grade:60,
        isGraduated:false,
        skills:["HTML"]
    },
    {
        id:3,
        name:"Sara Ali",
        age:24,
        city:"Mansoura",
        grade:88,
        isGraduated:true,
        skills:["HTML","CSS","JS","React"]
    }
];

let studentsContainer=document.getElementById("studentsContainer");
let totalStudents=document.getElementById("totalStudents");
let averageGrade=document.getElementById("averageGrade");
let highestGrade=document.getElementById("highestGrade");
let graduatedStudents=document.getElementById("graduatedStudents");
let searchInput=document.getElementById("searchInput");
let studentForm=document.getElementById("studentForm");

function displayStudents(list){
    studentsContainer.innerHTML="";

    for(let i=0;i<list.length;i++){
        let student=list[i];
        let statusClass="";
        let statusText="";

        if(student.isGraduated===true){
            statusClass="graduated";
            statusText="Graduated";
        }else{
            statusClass="not-graduated";
            statusText="Not Graduated";
        }

        let skillsHTML="";

        for(let j=0;j<student.skills.length;j++){
            skillsHTML+=`<span class="skill">${student.skills[j]}</span>`;
        }

        let card=
            `<div class="student-card">
                <div class="student-top">
                   <div class="stat-icon">
                   <i class="fa-solid fa-user graduate"></i></div>
                    <span class="status ${statusClass}">${statusText}</span>
                </div>

                <h3>${student.name}</h3>

                <div class="student-info">
                    <span><strong>Age:</strong> ${student.age}</span>
                    <span><strong>City:</strong> ${student.city}</span>
                    <span><strong>ID:</strong> ${student.id}</span>
                </div>

                <div class="skills">
                    ${skillsHTML}
                </div>

                <div class="grade">
                    <span>Grade</span>
                    <span>${student.grade}%</span>
                </div>

                <button class="delete-btn" onclick="deleteStudent(${student.id})">
                    Delete Student
                </button>
            </div>`;
        studentsContainer.innerHTML+=card;
    }
}

function updateDashboard(){
    totalStudents.textContent=students.length;

    let total=0;

    for(let i=0;i<students.length;i++){
        total=total+students[i].grade;
    }

    let average=0;

    if(students.length>0){
        average=total/students.length;
    }

    averageGrade.textContent=average.toFixed(1);

    let highest=0;

    for(let i=0;i<students.length;i++){
        if(students[i].grade>highest){
            highest=students[i].grade;
        }
    }

    highestGrade.textContent=highest;

    let graduated=0;

    for(let i=0;i<students.length;i++){
        if(students[i].isGraduated===true){
            graduated++;
        }
    }

    graduatedStudents.textContent=graduated;
}

function deleteStudent(id){
    let newStudents=[];

    for(let i=0;i<students.length;i++){
        if(students[i].id!==id){
            newStudents.push(students[i]);
        }
    }

    students=newStudents;

    displayStudents(students);
    updateDashboard();
}

searchInput.addEventListener("input",function(){
    let searchValue=searchInput.value.toLowerCase();
    let searchResults=[];

    for(let i=0;i<students.length;i++){
        let studentName=students[i].name.toLowerCase();

        if(studentName.includes(searchValue)){
            searchResults.push(students[i]);
        }
    }

    displayStudents(searchResults);
});

studentForm.addEventListener("submit",function(event){
    event.preventDefault();
   
    let name=document.getElementById("studentName").value.trim();
    let age=document.getElementById("studentAge").value;
    let city=document.getElementById("studentCity").value.trim();
    let grade=document.getElementById("studentGrade").value;
    let skillsInput=document.getElementById("studentSkills").value.trim();
    let isGraduated=document.getElementById("studentGraduated").checked;

    if(name===""||age===""||city===""||grade===""||skillsInput===""){
        alert("Please fill all fields");
        return;
    }

    let skills=skillsInput.split(",");

    for(let i=0;i<skills.length;i++){
        skills[i]=skills[i].trim();
    }

    let newId=1;

    if(students.length>0){
        newId=students[students.length-1].id+1;
    }

    let newStudent={
        id:newId,
        name:name,
        age:Number(age),
        city:city,
        grade:Number(grade),
        isGraduated:isGraduated,
        skills:skills
    };

    students.push(newStudent);

    displayStudents(students);
    updateDashboard();

    studentForm.reset();

    alert("Student added successfully!");
});

displayStudents(students);
updateDashboard();