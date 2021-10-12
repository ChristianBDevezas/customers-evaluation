const number1 = document.getElementById("number1");
const circles = document.querySelectorAll("circle");
const btn = document.getElementById("btn");
let counter1 = 0;
let counting1;
let btnClicked = false;

const number2 = document.getElementById("number2");
let counter2 = 0;
let counting2;

btn.addEventListener(("click"), () => {
    const max1 = number1.getAttribute("data-set");
    const max2 = number2.getAttribute("data-set");

    if(btnClicked == false) {
        counting1 = setInterval(() => {
            if(counter1 == max1) {
                clearInterval(counting1);
            }
            else {
                counter1++;
                number1.textContent = `${counter1}%`;
            }
        }, 23);

        counting2 = setInterval(() => {
            if(counter2 == max2) {
                clearInterval(counting2);
            }
            else {
                counter2++;
                number2.textContent = `${counter2}`;
            }
        }, 10);
    }

    circles.forEach((circle) => {
        if(!circle.classList.contains("show")) {
            circle.classList.add("show");
            btn.innerHTML = "Hide Info";
            btnClicked = true;
        }
        else {
            circle.classList.remove("show");
            number1.textContent = "0%";
            counter1 = 0;
            clearInterval(counting1);
            btn.innerHTML = "Show Info";
            btnClicked = false;

            number2.textContent = "0";
            counter2 = 0;
            clearInterval(counting2);
        }
    });
});