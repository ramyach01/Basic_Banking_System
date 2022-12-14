let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
   var sender=document.getElementById("enterName1").value;
   if (enterAmount > 10000) {
      alert("Insufficient Balance.")
   } else {
      var findUserBankAccount = enterName + "BankBalance";
      var findsender = sender + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById(findsender).innerText) - enterAmount
      document.getElementById(findsender).innerHTML= myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Successful Transaction !! from ${sender}@email.com  
      $${enterAmount} is sent to ${enterName}@email.com.`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`from ${sender}@email.com $${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}