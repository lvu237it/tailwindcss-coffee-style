//Author: vulv

const topMenu = document.getElementById('vulv-top-menu')
const topMenuToggleIcon = document.getElementById('vulv-top-menu-toggle-icon')

document.addEventListener('click', (event) => {
  if(topMenuToggleIcon.contains(event.target)){//clicked to toggle menu icon
    //khi click với icon menu
    topMenu.classList.toggle('vulv-top-menu-expanded') //khi click vào button icon menu => hiện menu => class hidden bị remove
    topMenu.classList.toggle('hidden') //nếu đang expand rồi thì sẽ chuyển thành hidden
  }else{//clicked outside menu icon
    //click bên ngoài icon menu 
    if(topMenu.classList.contains('vulv-top-menu-expanded')){//top menu is expanded
      //nếu đã toggle sang top menu expanded
      topMenu.classList.remove('vulv-top-menu-expanded')//thì remove class expanded
      topMenu.classList.add('hidden')//trả lại class hidden cho top menu
    }
  }
});