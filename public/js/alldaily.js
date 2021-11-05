const notesList = document.querySelector('#allnotes-list')

function getDay(){
    fetch("/sessions", {
        method:'GET',
    }).then((res) => res.json())
    .then((res) => {
        const id = res.user.id;
        fetch(`api/users/${id}`, {
            method:"GET",
            headers:{"Content-Type": "application/json"}
        }).then((response) => response.json())
        .then((data) => {
            const userNotes = data.notes.map((note) => ({ day: note.day }));
            for(let i = 0; i < userNotes.length; i++) {
                const element = userNotes[i].day;
                const li = document.createElement('li')
                console.log(element);
                notesList.append(li);
                li.innerHTML = `<li><a href='/day/${element}'>Day ${element}</a></li>`
            }
        })
    })
};

getDay();