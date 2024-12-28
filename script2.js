function openNav() {
    document.getElementById("relid").style.width = "320px";
    document.getElementById("mySidenav").style.width = "285px";
    document.getElementById("main").style.marginLeft = "285px";
}

function closeNav() {
    document.getElementById("relid").style.width = "0px";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}