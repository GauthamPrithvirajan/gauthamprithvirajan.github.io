var gallery_item = document.getElementsByClassName("gallery_item");

function dialog_toggle(show_box){
    document.getElementById(show_box.toString()).style.display = "flex";
}

function dialog_hide(hide_box){
    document.getElementById(hide_box.toString()).style.display = "none";
}

function hover(element,num) {
   // alert(num.toString());
  element.setAttribute('src', 'images/skill_'+num.toString()+'.gif');
}

function unhover(element,num) {
  element.setAttribute('src', 'images/skill_'+num.toString()+'.png');
}