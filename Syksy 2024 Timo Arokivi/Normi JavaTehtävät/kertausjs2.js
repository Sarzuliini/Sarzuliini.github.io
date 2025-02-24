const weekday = ["Tänään on Sunnuntai","Tänään on Maanantai","Tänään on Tiistai","Tänään on Keskiviikko","Tänään on Torstai","Tänään on Perjantai","Tänään on Lauantai"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("viikonpaiva").innerHTML = day;
