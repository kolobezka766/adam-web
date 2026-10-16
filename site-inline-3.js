
// Native submission uses the existing FormSubmit recipient and bot verification.
document.getElementById('kontakt-form').addEventListener('submit', function (event) {
  var trap = this.querySelector('[name="_honey"]');
  if ((trap && trap.value) || !this.reportValidity()) {
    event.preventDefault();
    return;
  }
  if (!document.getElementById('gdpr').checked) {
    event.preventDefault();
    alert('Prosím, potvrďte seznámení se zpracováním osobních údajů.');
  }
});
