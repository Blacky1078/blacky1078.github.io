let userdetails = [];
const button = () => {
  const crfullname = document.getElementById("CRfullname").value;
  const cruservalue = document.getElementById("CRusername").value;
  const crpassvalue = document.getElementById("CRpassword").value;

  userdetails.push({
    FullName: crfullname,
    Username: cruservalue,
    Password: crpassvalue,
  });

  localStorage.setItem("USERS", JSON.stringify(userdetails));
};

const Storeddata = JSON.parse(localStorage.getItem("USERS"));
const len = userdetails.length;

const Passwords = Storeddata.forEach((element) => {});
// console.log(Usernames)
const button2 = () => {
  Storeddata.forEach((element) => {
    if (
      document.getElementById("Username").value == element.Username &&
      document.getElementById("Password").value == element.Password
    ) {
      const page1 = document.getElementById("loading");
      page1.style.display = "block";

      const page0 = document.getElementById("Login_page");
      page0.style.display = "none";

      const loading = document.getElementById("progress");
      loading.style.animationName = "Loading";
      loading.style.animationDuration = "4s";
      loading.style.animationIterationCount = "infinite";

      const button = document.createElement("button");
      button.setAttribute("class", "btn btn-danger");
      button.style.fontSize = "20px";
      button.style.marginLeft = "100px";
      button.style.marginTop = "100px";
      const a = document.createElement("a");
      a.href = "https://blacky1078.github.io/Users/user.html";
      a.append("Click Here");

      button.append(a);
      page1.append(button);
    }
  });
};

const theme = (event) => {
  const value = event.target.value;
  document.querySelector("html").setAttribute("data-bs-theme", value);
};

const todo = [];
todo.push(
  "Shave the Brush",
  "Complete the Lectures 23 & 24 for DE",
  "Play Games"
);
const button_4 = () => {
  todo.push(document.getElementById("TODO").value);
  localStorage.setItem("TODO", JSON.stringify(todo));
};
// localStorage.setItem("TODO", JSON.stringify(todo));
const local1 = JSON.parse(localStorage.getItem("TODO"));
const todoing = [];
todoing.push(
  "Shaving the Brush",
  "Completing the Lectures 23 & 24 for DE",
  "Playing Games"
);
const button_5 = () => {
  todo.push(document.getElementById("TODOing").value);
  localStorage.setItem("TODOing", JSON.stringify(todoing));
};
// localStorage.setItem("TODOing", JSON.stringify(todoing));
const local2 = JSON.parse(localStorage.getItem("TODOing"));
local1.forEach((element) => {
  const tododiv = document.getElementById("todo_div");
  const item = element;
  tododiv.innerHTML += `<li>${item}</li>`;
});

local2.forEach((element) => {
  const todoingdiv = document.getElementById("todoing_div");
  const item = element;
  todoingdiv.innerHTML += `<li>${item}</li>`;
});
