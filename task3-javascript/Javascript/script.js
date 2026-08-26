const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const jobInput = document.querySelector("#job");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", function () {

    const name = nameInput.value;
    const age = ageInput.value;
    const job = jobInput.value;

    if (name === "" , age === "" , job === "") {
        alert("Please fill all fields");
    } else {

        console.log("Name: ", name);
        console.log("Age: ", age);
        console.log("Job: ", job);
    }
        if (age < 18) {
            alert("You are under age");
        } else {
            alert("Registration Completed");
        }
    }
);