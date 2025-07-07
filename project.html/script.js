const btnE1 = document.getElementById("calculate");
const Billinput = document.getElementById("bill");
const Tipinput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function totalcalculater() {
  const BillValue = Billinput.value;
  const TipValue = Tipinput.value;
  const totalValue = BillValue * (1 + TipValue / 100);
  totalSpan.innerText = totalValue.toFixed(2);
}
btnE1.addEventListener("click", totalcalculater);