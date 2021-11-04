const saveBtn = document.querySelector('#saveData');
const deleteBtn = document.querySelector('#deleteNote');
const timeEight = document.querySelector('#timeEight');
const timeNine = document.querySelector('#timeNine');
const timeTen = document.querySelector('#timeTen');
const timeEleven = document.querySelector('#timeEleven');
const timeTwelve = document.querySelector('#timeTwelve');
const timeThirteen = document.querySelector('#timeThirteen');
const timeFourteen = document.querySelector('#timeFourteen');
const timeFifteen = document.querySelector('#timeFifteen');
const timeSixteen = document.querySelector('#timeSixteen');
const timeSeventeen = document.querySelector('#timeSeventeen');
const timeEighteen = document.querySelector('#timeEighteen');
const timeTwenty = document.querySelector('#timeTwenty');
const timeNineteen = document.querySelector('#timeNineteen');
const braindumpText = document.querySelector('#braindumpText');
const toDoValue = document.querySelector('.toDoValue');
const randomQuote = document.querySelector('#randomQuote');
const goalValue = document.querySelector('.goalValue');

//gets associated note id from url

const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

//deletes the currently displayed note

deleteBtn.addEventListener('click',(event)=>{
    let result = confirm("Are you sure you wnat to delete this note?");
    if (result) {
        fetch(`/api/notes/${id}`,{
            method:"DELETE"
        }).then(res=>{
            if(res.ok){
                location.href = "/dashboard";
            } else {
                alert("uh oh, delete didn't go go")
            }
        })
    }
})

saveBtn.addEventListener('click',(event) => {
    event.preventDefault();
    //update schedule
    // const day = moment().format('D');
    fetch(path(`/note/${id}`), {
        method: 'GET',
        headers:{'Content-Type' : 'application/json'},
    }).then(response => response.json())
    .then(data => {
        const scheduleId = data.schedules.id
        const braindumpId = data.braindumps.id        
        const todoId = data.todos.id
        const inspoId = data.inspirations.id;
        
        const contentData = {
            day:day,
            content8am : timeEight.value(),
            content9am : timeNine.value(),
            content10am : timeTen.value(),
            content11am : timeEleven.value(),
            content12pm : timeTwelve.value(),
            content1pm : timeThirteen.value(),
            content2pm : timeFourteen.value(),
            content3pm : timeFifteen.value(),
            content4pm : timeSixteen.value(),
            content5pm : timeSeventeen.value(),
            content6pm : timeEighteen.value(),
            content7pm : timeNineteen.value(),
            content8pm : timeTwenty.value(),
        }
        fetch(join('/api/schedules/',scheduleId), {
            method:'PUT',
            body: JSON.stringify(contentData),
            headers:{'Content-Type' : 'application/json'},
        }).catch(err => console.log(err))
        // update braindump
        let content = braindumpText.value();
        fetch(join('/api/braindumps/',braindumpId), {
            method:'PUT',
            body: JSON.stringify({content,day}),
            headers:{'Content-Type' : 'application/json'},
        }).catch(err=>console.log(err))
        // update todos
        // multiple tables or multiple content?
        let content1 = toDoValue[0].value() || " ";
        let content2 = toDoValue[1].value() || " ";
        let content3 = toDoValue[2].value() || " ";
        let content4 = toDoValue[3].value() || " ";
        let content5 = toDoValue[4].value() || " ";
        let content6 = toDoValue[5].value() || " ";
        let content7 = toDoValue[6].value() || " ";
        let content8 = toDoValue[7].value() || " ";
        let content9 = toDoValue[8].value() || " ";
        let content10 = toDoValue[9].value() || " ";
        fetch(join('/api/todos/',todoId), {
            method:'PUT',
            body: JSON.stringify({content1,content2,content3,content4,content5,content6,content7,content8,content9,content10,day}),
            headers:{'Content-Type' : 'application/json'},
        }).catch(err=>console.log(err));
        content = randomQuote.value();
        fetch(join('/api/inspirations/',inspoId), {
            method: 'PUT',
            body:JSON.stringify({content}),
            headers:{'Content-Type' : 'application/json'},
        }).catch(err=>console.log(err));
        content1 = goalValue[0].value() || " ";
        content2 = goalValue[1].value() || " ";
        content3 = goalValue[2].value() || " ";
        content4 = goalValue[3].value() || " ";
        content5 = goalValue[4].value() || " ";
        content6 = goalValue[5].value() || " ";
        content7 = goalValue[6].value() || " ";
        content8 = goalValue[7].value() || " ";
        content9 = goalValue[8].value() || " ";
        content10 = goalValue[9].value() || " ";
        fetch(join('/api/goals/',todoId), {
            method:'PUT',
            body: JSON.stringify({content1,content2,content3,content4,content5,content6,content7,content8,content9,content10,day}),
            headers:{'Content-Type' : 'application/json'},
        }).catch(err=>console.log(err));
    })
})
    

