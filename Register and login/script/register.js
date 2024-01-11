function fn() {
    var c = 0;
    var f = document.getElementById("fn");
    var l = document.getElementById("ln");
    var u = document.getElementById("user");
    var p = document.getElementById("pass");

    var e1 = document.getElementById("e1");
    var e2 = document.getElementById("e2");
    var e3 = document.getElementById("e3");
    var e4 = document.getElementById("e4");

    var l1 = document.getElementById("l1");
    var l2 = document.getElementById("l2");

    if (f.value == "") {
        e1.style.display = "";
        e1.style.color = "red";
        f.style.border = "1px solid red";
        f.style.marginBottom = "0px";
        l1.style.display = "none";
        c = 1;
    }
    else {
        e1.style.display = "none";
        f.style.border = "";
    }
    if (l.value == "") {
        e2.style.display = "";
        l.style.marginBottom = "0px";
        e2.style.color = "red";
        l.style.border = "1px solid red";
        l2.style.display = "none";
        c = 1;
    }
    else {
        e2.style.display = "none";
        l.style.border = "";
    }
    if (u.value == "") {
        e3.style.display = "";
        u.style.marginBottom = "0px";
        e3.style.color = "red";
        u.style.border = "1px solid red";
        c = 1;
    }
    else {
        e3.style.display = "none";
        u.style.border = "";
    }
    if (p.value == "") {
        e4.style.display = "";
        p.style.marginBottom = "0px";
        e4.style.color = "red";
        p.style.border = "1px solid red";
        l4.style.display = "none";
        c = 1;
    }
    else {
        e4.style.display = "none";
        p.style.border = "";
    }

    if (f.value != "") {
        if (f.value.length == 1 || f.value.length == 2) {
            l1.style.display = "";
            l1.style.color = "red";
            f.style.border = "1px solid red";
            f.style.marginBottom = "0px";
            c = 1;
        }
        else {
            l1.style.display = "none";
            f.style.border = "";
        }
    }
    if (l.value != "") {
        if (l.value.length == 1 || l.value.length == 2) {
            l2.style.display = "";
            l2.style.color = "red";
            l.style.border = "1px solid red";
            l.style.marginBottom = "0px";
            c = 1;
        }
        else {
            l2.style.display = "none";
            l.style.border = "";
        }
    }
    if (p.value != "") {
        if (p.value.length > 0 && p.value.length < 8) {
            l4.style.display = "";
            l4.style.color = "red";
            p.style.border = "1px solid red";
            p.style.marginBottom = "0px";
            c = 1;
        }
        else {
            l4.style.display = "none";
            p.style.border = "";
        }
    }
    if (c == 0) {
        localStorage.setItem("first_name", f.value);
        localStorage.setItem("last_name", l.value);
        localStorage.setItem("user_name", u.value);
        localStorage.setItem("password", p.value);
        window.location.href = "login.html";
    }
}
function avoidNumberAndSpace(event) {
    var a = event.which;
    if (a != 46 && a != 32 && a > 31 && (a < 48 || a > 57)) {
        return true;
    }
    else {
        return false;
    }
}