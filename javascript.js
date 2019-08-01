function closeStatPanel() {
  console.log(StatPanel);
  var StatPanel = Array.from(document.getElementsByClassName("StatPanel"));
  StatPanel.map(element => element.style.display = "none");
}

function openStatPanel(id) {
  console.log(StatPanel);
  var StatPanel = document.getElementById(id);
  StatPanel.style.display = "block";
}
