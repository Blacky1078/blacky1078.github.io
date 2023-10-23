let user_login = [];

const button = () => {
  const crfullname = document.getElementById("CRfullname").value;
  const cruservalue = document.getElementById("CRusername").value;
  const crpassvalue = document.getElementById("CRpassword").value;

  const existing_user = user_login.find(
    (user) => user.Username === cruservalue
  );
  console.log();
  if (existing_user) {
    alert("Existing User");
  } else {
    user_login.push({
      Key: user_login.length,
      FullName: crfullname,
      Username: cruservalue,
      Password: crpassvalue,
    });

    localStorage.setItem("user_login", JSON.stringify(user_login));
    document.getElementById("Create_modal").style.display = "block";
    document.getElementById("CRFN").append(" " + crfullname + ",");
    document.getElementById("u").append(" " + cruservalue);
    document.getElementById("p").append(" " + crpassvalue);
  }
};

const Storeddata = JSON.parse(localStorage.getItem("user_login"));

let n;
const button2 = () => {
  const login_user = Storeddata.find(
    (user) =>
      user.Username === document.getElementById("Username").value &&
      user.Password === document.getElementById("Password").value
  );
  console.log(login_user);
  if (login_user) {
    document.getElementById("Login_modal").style.display = "block";
  } else {
    alert("Invalid Credentials");
  }
};
const close1 = () => {
  document.getElementById("Login_modal").style.display = "none";
};
const close2 = () => {
  document.getElementById("Create_modal").style.display = "none";
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
  todoing.push(document.getElementById("TODOing").value);
  localStorage.setItem("TODOing", JSON.stringify(todoing));
};
// localStorage.setItem("TODOing", JSON.stringify(todoing));
const local2 = JSON.parse(localStorage.getItem("TODOing"));
local1.forEach((element) => {
  const tododiv = document.getElementById("todo_div");
  let item = element;
  tododiv.innerHTML += `<li>${item}</li>`;
});

local2.forEach((element) => {
  const todoingdiv = document.getElementById("todoing_div");
  let item = element;
  todoingdiv.innerHTML += `<li>${item}</li>`;
});
