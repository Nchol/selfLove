function login() {
    const name = $("#userName").val()
    if (name) {
        localStorage.setItem('name', name)
        window.location.href = "./homepage.html"
    }
}



function handleOnChange() {
    console.log('called')
    const name = $("#userName").val()
    const pass = $("#password").val()
    setTimeout(function () {
            console.log('kepanggil setelah 2  ms')
        if (name && pass) {
            $("#loginBtn").removeClass(['disabled'])
        } else if (!$("#loginBtn").hasClass('disabled')) {
            $("#loginBtn").addClass(['disabled'])
        } else {
            $("#loginBtn").addClass(['disabled'])
        }
    },200)
}

$(document).ready(function(){
    console.log('load')
    const name = localStorage.getItem('name')
    console.log(name);
    $("#greet").text(`Halo ${name}!`)
    
})