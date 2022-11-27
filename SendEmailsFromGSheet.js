
function main() {
  var reservations = GetThedata()
  reservations.forEach(function(reservation){
   if (reservation.to =="florent.sarat@gmail.com"){
     Logger.log("Send email for "+ reservation.to)
     sendEmail(reservation.to,reservation.creneau, reservation.enfant )
   }
  }
  )
}


function GetThedata() {
  var spread = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Copy Flo")
  var values = spread.getRange("A2:F39").getValues();
  var reservations = [];
  values.forEach(function(value) {
    var reservation = {};
    reservation.to = value[1];
    reservation.enfant = value[2];
    reservation.creneau = value[4];
    reservations.push(reservation);
  })
  return reservations;

}




/**
 * Send an email
 *
 * @to
 * @creneau The input multiplied by 2.
 * @enfant
 */
function sendEmail(to,creneau,enfant) {

  MailApp.sendEmail({
    to: "florent.sarat@gmail.com",
    subject: "Subject,
    htmlBody: "Bonjour,<br />"+
     "<br />blablabla" +
     "<br /><br />Merci",
  });
}
