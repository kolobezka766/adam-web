
function toggleExtra(btn) {
  btn.classList.toggle('open');
  var extra = btn.nextElementSibling;
  extra.classList.toggle('open');
}
