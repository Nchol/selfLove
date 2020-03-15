function login() {
    const name = $("#userName").val()
    if (name) {
        localStorage.setItem('name', name)
        window.location.href = "./index.html"
    }
  }
  
  
  
  function handleOnChange() {
    console.log('called')
    const name = $("#userName").val()
    const pass = $("#password").val()
    setTimeout(function () {
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
    console.log(window.location.pathname)
    const isHomepage = window.location.pathname === '/'
    const isLoginPage = window.location.pathname === '/masuk.html'
    // auth guard
    if (isHomepage) {
        if (name) {
            $("#greet").text(`Halo ${name}!`)
        } else {
            window.location.href = 'masuk.html'
        }
    } else if (isLoginPage) {
        if (name) {
            window.location.href = '/'
        }
    }
  })