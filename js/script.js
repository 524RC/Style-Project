/*close the other two panels*/
document.getElementById('jojoThings').style.display = 'none';
document.getElementById('baohThings').style.display = 'none';
/*highlight for what panel you are on*/
document.getElementById('eventsWeekTab').className = 'accordionPanelTab highlight';
/*hide the panels*/
function hidePanels() {
  document.getElementById('jojoThings').style.display = 'none';
  document.getElementById('baohThings').style.display = 'none';
  document.getElementById('theBottleThings').style.display = 'none';
  document.getElementById('Jojo').className = 'accordionPanelTab';
  document.getElementById('Baoh').className = 'accordionPanelTab';
  document.getElementById('theBottle').className = 'accordionPanelTab';
}
/*open one panel and close the other panels*/
function jojoContent() {
  hidePanels();
  document.getElementById('jojoThings').style.display = 'block';
  document.getElementById('jojo').className = 'accordionPanelTab highlight';
}
function baohContent() {
  hidePanels();
  document.getElementById('baohThings').style.display = 'block';
  document.getElementById('Baoh').className = 'accordionPanelTab highlight';
}
function theBottleContent() {
  hidePanels();
  document.getElementById('theBottleThings').style.display = 'block';
  document.getElementById('theBottle').className = 'accordionPanelTab highlight';
}
