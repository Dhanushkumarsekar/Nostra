// const searchBox = document.getElementById("searchBox");
// const filterCategory = document.getElementById("filterCategory");
// const products = document.querySelectorAll("#productList .card");

// function filterProducts() {
//   const searchText = searchBox.value.toLowerCase();
//   const category = filterCategory.value;

//   products.forEach(product => {
//     const name = product.querySelector("h3").textContent.toLowerCase();
//     const productCategory = product.getAttribute("data-category");

//     if ((category === "all" || category === productCategory) && name.includes(searchText)) {
//       product.style.display = "block";
//     } else {
//       product.style.display = "none";
//     }
//   });
// }

// searchBox.addEventListener("keyup", filterProducts);
// filterCategory.addEventListener("change", filterProducts);


// Search + Filter
const searchBox=document.getElementById("searchBox");
const filterCategory=document.getElementById("filterCategory");
const products=document.querySelectorAll("#productList .card");

if(searchBox && filterCategory){
  function filterProducts(){
    const searchText=searchBox.value.toLowerCase();
    const category=filterCategory.value;
    products.forEach(p=>{
      const name=p.querySelector("h3").textContent.toLowerCase();
      const productCategory=p.getAttribute("data-category");
      p.style.display=((category==="all"||category===productCategory)&&name.includes(searchText))?"block":"none";
    });
  }
  searchBox.addEventListener("keyup",filterProducts);
  filterCategory.addEventListener("change",filterProducts);
}

// Dark Mode Toggle
const toggle=document.getElementById("darkToggle");
if(toggle){
  toggle.addEventListener("click",()=>document.body.classList.toggle("dark"));
}

// Auto Year in Footer
const year=document.getElementById("year");
if(year){year.textContent=new Date().getFullYear();}

// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Default Dark Mode
body.classList.remove("light-mode");
toggleBtn.textContent = "🌙 Dark";

// Click to toggle
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    toggleBtn.textContent = "☀️ Light";
  } else {
    toggleBtn.textContent = "🌙 Dark";
  }
});
