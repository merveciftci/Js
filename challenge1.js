let paragraph = document.getElementById("my-paragraph");
paragraph.style.textAlign = "center"
paragraph.style.paddingTop = "4px"

//the year
function changeColor() {
  let year = document.getElementById("year")
  let colors = ["red", "blue", "green", "orange", "purple"]
  let randomColor = colors[Math.floor(Math.random() * colors.length)]
  year.style.color = randomColor
}
setInterval(changeColor, 1000)



//30daysofjaavscriptchallenge

let other = document.getElementById("other");
other.style.textAlign = "center"

//change  color  and timing of rectangle

let rect = document.getElementById("rectangle");
let colors = ["red", "yellow", "#C66EC6", "blue", "purple", "gray", "cyan"];
let i = 0;
setInterval(function () {
  rect.style.backgroundColor = colors[i % colors.length];
  let currentDate = new Date();
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false
  };
  let dateString = currentDate.toLocaleString("en-US", options);
  rect.innerText = dateString;
  i++;
}, 1000);
rect.style.display = "flex";
rect.style.alignItems = "center";
rect.style.justifyContent = "center";
rect.style.fontFamily = "Tahoma";

//lists
let list1 = document.querySelectorAll(".title")
for (let i = 0; i < list1.length; i++) {
  list1[i].style.background = "red"
  list1[i].style.width = "700px"
  list1[i].style.height = "20px"
  list1[i].style.fontSize = "16px";
  list1[i].style.fontFamily = "Tahoma"
  list1[i].style.padding = "20px"
  list1[i].style.margin = "0 auto"
  list1[i].style.listStyle = "none"
  list1[i].style.marginBottom = "3px"
}


const listItems = document.querySelectorAll(".title");
listItems.forEach(item => {
  if (item.textContent.includes("HTML")) {
    item.style.backgroundColor = "#2E8B57";
  } else if (item.textContent.includes("JavaScript")) {
    item.style.backgroundColor = "#FFFF33";
  } else if (item.textContent.includes("CSS")) {
    item.style.backgroundColor = "#FF6347";
  } else if (item.textContent.includes("React")) {
    item.style.backgroundColor = "#FF6347";
  } else if (item.textContent.includes("Fullstack")) {
    item.style.backgroundColor = "#FF6347";
  } else if (item.textContent.includes("ReactNative")) {
    item.style.backgroundColor = "#FF6347";
  } else if (item.textContent.includes("MachineLearning")) {
    item.style.backgroundColor = "#FF6347";
  }
})