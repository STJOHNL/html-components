function openNav() {
    document.getElementById('side-nav').style.width = "250px"
    document.getElementById('main').style.marginLeft = "250px"
    document.getElementById('open-btn').style.opacity = '0'
}

function closeNav() {
    document.getElementById('side-nav').style.width = '0'
    document.getElementById('main').style.marginLeft = "0"
    document.getElementById('open-btn').style.opacity = '1'
}