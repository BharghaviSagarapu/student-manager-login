const students = [];

function addStudent(event)
{
    event.preventDefault();
    const name = document.getElementById("nameInput").value;
    const age = parseInt(document.getElementById("ageInput").value);
    const course = document.getElementById("courseInput").value;

    if(!name || !age || !course){
        alert("Please enter all fields");
        return;
    }

    const student = { name : name , age : age , course : course };

    students.push(student);
    displayStudents();
}

function displayStudents(){
    const list = document.getElementById("studentList");
    list.innerHTML= "";
    
    students.forEach((student,index) => { 
        const div = document.createElement("div");
        
        div.textContent = `${index+1}.${student.name}- Age:${student.age}-course:${student.course}`;
        list.appendChild(div);
        });
}