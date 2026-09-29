//collapse button
const sidebar = document.getElementById("sidebar");
const collapseBtn = document.getElementById("collapseBtn");
collapseBtn.addEventListener("click",function() {
  sidebar.classList.toggle("hidden");
});
//my tutorials button
const myTutorialsBtn = document.getElementById("myTutorialsBtn");
myTutorialsBtn.addEventListener("click", function() {
  window.location.href = "myTutorials.html";
});
//settings button
const settingsBtn = document.getElementById("settingsBtn");
settingsBtn.addEventListener("click",function() {
  window.location.href = "settings.html";
});
//dashboard button
const dashboardBtn = document.getElementById("dashboardBtn")
dashboardBtn.addEventListener("click",function() {
  window.location.href = "index.html";
});