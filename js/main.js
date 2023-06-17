const logIn = document.getElementById("log-in");
const signUp = document.getElementById("sign-up");
const addPRJ = document.getElementById("add-prj");

let currPop;

function OpenLogIn() {
    document.body.classList.add("blocked");
    logIn.classList.add("active");
    currPop = logIn;
}

function OpenSignUp() {
    document.body.classList.add("blocked");
    signUp.classList.add("active");
    currPop = signUp;
}

function OpenAddPRJ() {
    document.body.classList.add("blocked");
    addPRJ.classList.add("active");
    currPop = addPRJ;
}

function closePop() {
    if (currPop) {
        currPop.classList.remove("active");
        document.body.classList.remove('blocked');
        currPop = null;
    } else console.log("error");
}

function Login() {
    closePop();
}

let currBtn = "btn-1",
    currPage = "page-1"

function SetTab(btn, page) {document.getElementById(currBtn).classList.remove("active");
    document.getElementById(currPage).classList.remove("active");
    document.getElementById(btn).classList.add("active");
    document.getElementById(page).classList.add("active");
    
    currBtn = btn;
    currPage = page;
}
