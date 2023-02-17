document.getElementById('Jojo1Content').style.display = 'none';
document.getElementById('Jojo2Content').style.display = 'none';
document.getElementById('Jojo3Content').className = 'accordionPanelTab highlight';

function hidePanels(){
    document.getElementById('Jojo1Content').style.display = 'none';
    document.getElementById('Jojo2Content').style.display = 'none';
    document.getElementById('Jojo3Content').style.display = 'none';
    document.getElementById('Jojo1').className = 'accordionPanelTab';
    document.getElementById('Jojo2').className = 'accordionPanelTab';
    document.getElementById('Jojo3').className = 'accordionPanelTab';
}
function showComingUp() {
    hidePanels();
    document.getElementById('Jojo1Content').style.display = 'block';
    document.getElementById('Jojo1').className = 'accordionPanelTab highlight';
}
function showPastEvents() {
    hidePanels();
    document.getElementById('Jojo2Content').style.display = 'block';
    document.getElementById('Jojo2').className = 'accordionPanelTab highlight';
}
function showWeekContent() {
    hidePanels();
    document.getElementById('Jojo3Content').style.display = 'block';
    document.getElementById('Jojo3').className = 'accordionPanelTab highlight';
}