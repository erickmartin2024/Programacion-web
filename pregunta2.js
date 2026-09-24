const btnAplicar = document.getElementById("btn-apply");
const cupon = document.getElementById("coupon-input");
const total = document.getElementById("total-price");
const desc = (codigo)=>{
    total.classList.remove("total-price")
    let s = "DESC20"
  if (codigo == s ){
    total.textContent = 100- 20
  }
};