var d = new Date();

if ((d.getMonth() == 11) && (d.getDate() == 25)) {
    document.getElementById("answer").innerHTML = "YES.";
    document.getElementById("answer").style.color = "rgb(0, 179, 44)";
    document.querySelector(".container").style.backgroundColor = "rgb(179, 0, 12)";
    document.querySelector("#answer").style.backgroundColor = "rgb(179, 0, 12)";
}