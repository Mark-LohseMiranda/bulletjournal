const saveBtn = document.querySelector('#saveData');
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
const moment = require('moment');
const toDoValue = document.querySelector('.toDoValue');

saveBtn.addEventListener('click',(event) => {
    event.preventDefault();
    //update schedule
    const day = moment().format('D');
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
    fetch('/api/schedules', {
        method:'PUT',
        body: JSON.stringify(contentData),
        headers:{'Content-Type' : 'application/json'},
    }).catch(err => console.log(err))
    // update braindump
    let content = braindumpText.value();
    fetch('/api/braindumps', {
        method:'PUT',
        body: JSON.stringify({content,day}),
        headers:{'Content-Type' : 'application/json'},
    }).catch(err=>console.log(err))
    // update todos
    // multiple tables or multiple content?
    const content1 = toDoValue[0].value() || " ";
    const content2 = toDoValue[1].value() || " ";
    const content3 = toDoValue[2].value() || " ";
    const content4 = toDoValue[3].value() || " ";
    const content5 = toDoValue[4].value() || " ";
    const content6 = toDoValue[5].value() || " ";
    const content7 = toDoValue[6].value() || " ";
    const content8 = toDoValue[7].value() || " ";
    const content9 = toDoValue[8].value() || " ";
    const content10 = toDoValue[9].value() || " ";
    fetch('/api/todos', {
        method:'PUT',
        body: JSON.stringify({content1,content2,content3,content4,content5,content6,content7,content8,content9,content10,day}),
        headers:{'Content-Type' : 'application/json'},
    }).catch(err=>console.log(err))
})





