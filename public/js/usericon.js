const iconLink = document.getElementById('user-icon')
const hello = document.querySelector('#welcomeUser')

fetch('/sessions', {
    method: 'GET'
}).then((res) => res.json())
.then(async (res) => {
    if (res.user) {
        let username = res.user.username;
        iconLink.innerHTML = username.charAt(0)
        iconLink.setAttribute('style', 'visibility:visible;');
        hello.innerHTML = `Welcome back, ${username}`
    } 
});