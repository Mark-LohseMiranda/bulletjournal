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


saveBtn.addEventListener('click',(event) => {
    event.preventDefault();
    //update schedule
    const contentData = {
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
        body: JSON.stringify({content}),
        headers:{'Content-Type' : 'application/json'},
    }).catch(err=>console.log(err))
    // update todos
    // multiple tables or multiple content?
})


