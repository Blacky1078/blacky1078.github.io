var usernameData1 = [
  {
    key: "1",
    value: "Shivang",
  },
  {
    key: "2",
    value: "Shivansh",
  },
  {
    key: "3",
    value: "Priyangshu",
  },
  {
    key: "4",
    value: "Varun",
  },
];
var passwordData1 = [
  {
    key: "1p",
    value: "Shivang@123",
  },
  {
    key: "2p",
    value: "Shivansh@123",
  },
  {
    key: "3p",
    value: "Priyangshu@123",
  },
  {
    key: "4p",
    value: "Varun@123",
  },
];
for (var i = 1; i >= 4; i++) {
  localStorage.setItem(usernameData1[i], usernameData1[i]);
}
for (var i = 1; i >= 4; i++) {
  localStorage.setItem(passwordData1[i], passwordData1[i]);
}

const button1 = () => {
  const uservalue = document.getElementById("Username").value;
  const passvalue = document.getElementById("Password").value;
  if (
    uservalue === localStorage.getItem("1") &&
    passvalue === localStorage.getItem("1p")
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
    button.setAttribute("class", "btn btn-info");
    button.style.fontSize = "20px";
    button.style.marginLeft = "130px";
    button.style.marginTop = "100px";
    const a = document.createElement("a");
    a.href = "http://127.0.0.1:5500/todo_list_app/Users/Shivang.html";
    a.append("Click Here");

    button.append(a);
    page1.append(button);
  } else if (
    uservalue === localStorage.getItem("2") &&
    passvalue === localStorage.getItem("2p")
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
    button.setAttribute("class", "btn btn-info");
    button.style.fontSize = "20px";
    button.style.marginLeft = "130px";
    button.style.marginTop = "100px";
    const a = document.createElement("a");
    a.href = "http://127.0.0.1:5500/todo_list_app/Users/Shivansh.html";
    a.append("Click Here");

    button.append(a);
    page1.append(button);
  } else if (
    uservalue === localStorage.getItem("3") &&
    passvalue === localStorage.getItem("3p")
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
    button.setAttribute("class", "btn btn-info");
    button.style.fontSize = "20px";
    button.style.marginLeft = "130px";
    button.style.marginTop = "100px";
    const a = document.createElement("a");
    a.href = "http://127.0.0.1:5500/todo_list_app/Users/Priyangshu.html";
    a.append("Click Here");

    button.append(a);
    page1.append(button);
  } else if (
    uservalue === localStorage.getItem("4") &&
    passvalue === localStorage.getItem("4p")
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
    button.setAttribute("class", "btn btn-info");
    button.style.fontSize = "20px";
    button.style.marginLeft = "130px";
    button.style.marginTop = "100px";
    const a = document.createElement("a");
    a.href = "http://127.0.0.1:5500/todo_list_app/Users/Varun.html";
    a.append("Click Here");

    button.append(a);
    page1.append(button);

    document.getElementById(
      "head_user"
    ).innerHTML = `          <h4 style="font-family: 'pacifico', sans-serif">
    ${uservalue.value}
  </h4>`;
  } else {
    alert("Please Provide the Valid Credentials");
  }
};

const theme = (event) => {
  const value = event.target.value;
  document.querySelector("html").setAttribute("data-bs-theme", value);
};

const button2 = () => {
  const uservalue = document.getElementById("Username").value;
  const passvalue = document.getElementById("Password").value;
  if (
    uservalue === localStorage.getItem("1") &&
    passvalue === localStorage.getItem("1p")
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
    button.setAttribute("class", "btn btn-info");
    button.style.fontSize = "20px";
    button.style.marginLeft = "130px";
    button.style.marginTop = "100px";
    const a = document.createElement("a");
    a.href = "http://127.0.0.1:5500/todo_list_app/Users/main.html";
    a.append("Click Here");

    button.append(a);
    page1.append(button);
    document.getElementById(
      "head_user"
    ).append(<h4 style="font-family: 'pacifico', sans-serif">Hello Shivansh</h4>);
  } else if (
    uservalue === localStorage.getItem("2") &&
    passvalue === localStorage.getItem("2p")
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
    button.setAttribute("class", "btn btn-info");
    button.style.fontSize = "20px";
    button.style.marginLeft = "130px";
    button.style.marginTop = "100px";
    const a = document.createElement("a");
    a.href = "http://127.0.0.1:5500/todo_list_app/Users/main.html";
    a.append("Click Here");

    button.append(a);
    page1.append(button);
    document.getElementById(
      "head_user"
    ).innerHTML = `          <h4 style="font-family: 'pacifico', sans-serif">
    Hello ${uservalue}
  </h4>`;
  } else if (
    uservalue === localStorage.getItem("3") &&
    passvalue === localStorage.getItem("3p")
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
    button.setAttribute("class", "btn btn-info");
    button.style.fontSize = "20px";
    button.style.marginLeft = "130px";
    button.style.marginTop = "100px";
    const a = document.createElement("a");
    a.href = "http://127.0.0.1:5500/todo_list_app/Users/main.html";
    a.append("Click Here");

    button.append(a);
    page1.append(button);
    document.getElementById(
      "head_user"
    ).innerHTML = `          <h4 style="font-family: 'pacifico', sans-serif">
    Hello ${uservalue}
  </h4>`;
  } else if (
    uservalue === localStorage.getItem("4") &&
    passvalue === localStorage.getItem("4p")
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
    button.setAttribute("class", "btn btn-info");
    button.style.fontSize = "20px";
    button.style.marginLeft = "130px";
    button.style.marginTop = "100px";
    const a = document.createElement("a");
    a.href = "http://127.0.0.1:5500/todo_list_app/Users/main.html";
    a.append("Click Here");

    button.append(a);
    page1.append(button);
    document.getElementById(
      "head_user"
    ).innerHTML = `          <h4 style="font-family: 'pacifico', sans-serif">
    Hello ${uservalue}
  </h4>`;
  }
};
