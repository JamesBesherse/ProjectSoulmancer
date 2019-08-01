function closeStatPanel() {
  // Array.From(document.getElementsByClassName("StatPanel"));
  var StatPanel = Array.from(document.getElementsByClassName("StatPanel"));
  // var StatPanel = document.getElementsByClassName("StatPanel");
  StatPanel.map(element => element.style.display = "none");
  // Panel.style.display = "none"
  // console.log(StatPanel);
}

function openStatPanel(id) {
  console.log(StatPanel);
  var StatPanel = document.getElementById(id);
  StatPanel.style.display = "block";
}
