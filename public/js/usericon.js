const iconLink = document.getElementById('user-icon')

fetch('/sessions', {
    method: 'GET'
}).then((res) => res.json())
.then(async (res) => {
    if (res.user) {
        let username = res.user.username;
        iconLink.innerHTML = username.charAt(0)
        iconLink.setAttribute('style', 'visibility:visible;')
    } 
})