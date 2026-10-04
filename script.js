const sidebar = document.getElementById("sidebar");
const collapseBtn = document.querySelectorAll(".collapseBtn");
const settingsBtn = document.getElementById("settingsBtn");
const myTutorialsBtn = document.getElementById("myTutorialsBtn");
const dashboardBtn = document.getElementById("dashboardBtn")
const gamesBtn = document.getElementById("gamesBtn")
const hr1 = document.getElementById("hr1")
const homeLinkBtn = document.querySelectorAll(".homeLinkBtn")
const courseBtn = document.getElementById("coursesBtn")
//collapse button
collapseBtn.forEach(function(collapse) {
  collapse.addEventListener("click",function() {
    sidebar.classList.toggle("hidden");
    if (sidebar.classList.contains("hidden")) {
      hr1.style.width = "94vw"
    } else {
      hr1.style.width = "89vw"
    }
  });
});
//my tutorials button
myTutorialsBtn.addEventListener("click", function() {
  window.location.href = "myTutorials.html";
});
//settings button
settingsBtn.addEventListener("click",function() {
  window.location.href = "settings.html";
});
//games button
gamesBtn.addEventListener("click",function() {
  window.location.href = "games.html"
})
//courses button
courseBtn.addEventListener("click",function() {
  window.location.href = "courses.html"
})
//Homelink Button
homeLinkBtn.forEach(function(hlBtn) {
  hlBtn.addEventListener("click",function() {
    window.location.href = "index.html"
  })
})