// tab bds
var subTabLinks = document.querySelectorAll(".subTablinks");
var subTabContent =document.querySelectorAll(".subTabcontent");

subTabLinks.forEach(function(el) {
   el.addEventListener("click", openSubTabs);
});

function openSubTabs(el) {
   var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
   var electronic = btn.dataset.electronic; // lấy giá trị trong data-electronic
 
   subTabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   subTabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + electronic).classList.add("active");
   
   btn.classList.add("active");
}