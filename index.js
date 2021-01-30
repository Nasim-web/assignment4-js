// Event handler on Click on Plus-Minus button
function handleTicket(isIncrease, classSelection) {
  var ticketCount = parseFloat(document.getElementById(classSelection).value)
  var ticketNewCount = 0;
  if (isIncrease == true) {
    ticketNewCount = ticketCount + 1;
  }
  else if (isIncrease == false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
  }
  document.getElementById(classSelection).value = ticketNewCount;

  calculateTotal();

}

// function of calculating total cost for Ticket

function calculateTotal() {
  const firstClassCount = parseInt(document.getElementById("firstClass-count").value)
  const firstClassCost = firstClassCount * 150;
  const economyCount = parseInt(document.getElementById("economyClass-count").value)
  const economyCost = economyCount * 100;



  const totalCost = firstClassCost + economyCost;
  document.getElementById("sub-total").innerText ='$'+ totalCost;

  const vatCost =Math.round(totalCost * 0.1) ;
  document.getElementById("vat").innerText = '$'+ vatCost;

  const grandTotal = totalCost + vatCost;
  document.getElementById("grand-total").innerText ='$'+  grandTotal; 

}
// Confriming Tickets 

document.getElementById("book-now").addEventListener("click",function(){

  document.getElementById("booking-form").style.display="none";
  document.getElementById("booking-confirm").style.display="block"

  const firstClassCount = parseInt(document.getElementById("firstClass-count").value)
  const economyCount = parseInt(document.getElementById("economyClass-count").value)
  const totalTicket= firstClassCount+economyCount ;
  
 
  document.getElementById("firstClass-ticket").innerText=firstClassCount
  document.getElementById("economy-ticket").innerText=economyCount
 


})