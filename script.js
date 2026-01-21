let btn = document.getElementById("GeneratorBtn");
let marksInput = document.getElementById("marks");
let marksValue = document.getElementById("marksvalue");

//marks value show

marksInput.addEventListener("input", function () {
    marksvalue.innerText = marksInput.value;
});

//get value

btn.addEventListener("click", function (){
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    //gender
    let gender = document.querySelector('input[name="gender"]:checked');
    gender = gender ? gender.value : "--";

    //course
    let selectedCourses = document.querySelectorAll
    ('input[type="checkbox"]:checked');

    let course = [];
    selectedCourses.forEach((c) => course.push(c.value));

//marks

let marks = marksInput.value;

//show card
document.getElementById("cardname").innerText = name || "student Name";
document.getElementById("cardroll").innerText = roll
    ? "Roll No:" + roll
    : "Roll No: --";

document.getElementById("cardEmail").innerText = email
    ? "Email:" + email
    : "Email: --";

document.getElementById("cardAge").innerText = age ? +age :"Age: --";
document.getElementById("cardGender").innerText = "Gender:" + gender;
 document.getElementById("cardcourse").innerText=course.length
    ? "course:" + course.join(",")
    : "course: --";

document.getElementById("cardmarks").innerText ="Marks:" + marks + "/100";

 //image

 const photoInput =document.getElementById("photo");
 const cardImage =document.getElementById("cardimage")

 if(photoInput.files && photoInput.file[0]){
    const reder = new FileReader();
    reder.onload= function(e){
        cardImage.src = e.target.result;
    };
    reder.readAsDataURL(photoInput.files[0]);
 }else{
    cardImage.src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D";

 }
});