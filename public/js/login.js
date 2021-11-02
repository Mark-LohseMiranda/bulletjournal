const loginHandler = async (event)=> {
    event.preventDefault();

    const email = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if(password && email) {
        const resp = await fetch('/api/user/login', {
            method:'POST',
            body: JSON.stringify({email,password}),
            headers: {'Content-Type' : 'application/json'},
        });
        if(resp.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(resp.statusText);
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginHandler);