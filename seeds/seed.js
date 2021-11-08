const sequelize = require("../config/connection");
const {User,Note, Braindump, Goal, Inspiration, Post_it, Schedule, Todo} = require("../models")

const seed = async () => {
    const userData = await User.bulkCreate([
        {
            username:"joe",
            password:"password",
            email:"joe@joe.joe"
        },
        {
            username:"bob",
            password:"password",
            email:"bob@bob.bob"
        },
        {
            username:"carl",
            password:"password",
            email:"carl@carl.carl"
        }
    ],{
        individualHooks:true
    })
    const noteData = await Note.bulkCreate([
        {
            day:1112021,
            user_id:1
        },
        {
            day:1112021,
            user_id:2
        },
        {
            day:1112021,
            user_id:3
        },
        {
            day:1132021,
            user_id:1
        },
        {
            day:1132021,
            user_id:2
        },
        {
            day:1132021,
            user_id:3
        },
        {
            day:1142021,
            user_id:1
        },
        {
            day:1142021,
            user_id:2
        },
        {
            day:1142021,
            user_id:3
        },
        {
            day:1152021,
            user_id:1
        },
        {
            day:1152021,
            user_id:2
        },
        {
            day:1152021,
            user_id:3
        },
        {
            day:1162021,
            user_id:1
        },
        {
            day:1162021,
            user_id:2
        },
        {
            day:1162021,
            user_id:3
        },
        
        
    ])
    const braindumpData = await Braindump.bulkCreate([
        {
            content:"This is my content and I like it",
            note_id:1            
        },
        {
            content:"Wowowow I don't like this",
            note_id:2            
        },
        {
            content:"hello helloooooo",
            note_id:3            
        },
        {
            content:"This is my content and I like it",
            note_id:4            
        },
        {
            content:"Wowowow I don't like this",
            note_id:5            
        },
        {
            content:"hello helloooooo",
            note_id:6            
        },
        {
            content:"This is my content and I like it",
            note_id:7            
        },
        {
            content:"Wowowow I don't like this",
            note_id:8            
        },
        {
            content:"hello helloooooo",
            note_id:9            
        },
        {
            content:"This is my content and I like it",
            note_id:10            
        },
        {
            content:"Wowowow I don't like this",
            note_id:11           
        },
        {
            content:"hello helloooooo",
            note_id:12            
        },
        {
            content:"This is my content and I like it",
            note_id:13           
        },
        {
            content:"Wowowow I don't like this",
            note_id:14            
        },
        {
            content:"hello helloooooo",
            note_id:15            
        },
    ])  
    const goalData = await Goal.bulkCreate([
        {
            content1:"This is my goal and I like it",
            note_id: 1
        },
        {
            content1:"what is a goal",
            note_id: 2
        },
        {
            content1:"my baddd",
            note_id: 3
        },
        {
            content1:"This is my goal and I like it",
            note_id: 4
        },
        {
            content1:"what is a goal",
            note_id: 5
        },
        {
            content1:"my baddd",
            note_id: 6
        },
        {
            content1:"This is my goal and I like it",
            note_id: 7
        },
        {
            content1:"what is a goal",
            note_id: 8
        },
        {
            content1:"my baddd",
            note_id: 9
        },
        {
            content1:"This is my goal and I like it",
            note_id: 10
        },
        {
            content1:"what is a goal",
            note_id: 11
        },
        {
            content1:"my baddd",
            note_id: 12
        },
        {
            content1:"This is my goal and I like it",
            note_id: 13
        },
        {
            content1:"what is a goal",
            note_id: 14
        },
        {
            content1:"my baddd",
            note_id: 15
        },
    ])  
    const inspirationData = await Inspiration.bulkCreate([
        {
           content:"This is my inspirational content",
           note_id: 1 
        },
        {
           content:"quotes on quotes",
           note_id: 2 
        },
        {
           content:"my inspo",
           note_id: 3
        },
    ])
    const post_itData = await Post_it.bulkCreate([
        {
           content:"This is a post-it",
           note_id: 1 
        },
        {
           content:"This is a post-it",
           note_id: 2
        },
        {
           content:"This is a post-it",
           note_id: 3
        },
        {
            content:"This is a post-it",
            note_id: 4 
         },
         {
            content:"This is a post-it",
            note_id: 5
         },
         {
            content:"This is a post-it",
            note_id: 6
         },
         {
            content:"This is a post-it",
            note_id: 7 
         },
         {
            content:"This is a post-it",
            note_id: 8
         },
         {
            content:"This is a post-it",
            note_id: 9
         },
         {
            content:"This is a post-it",
            note_id: 10
         },
         {
            content:"This is a post-it",
            note_id: 11
         },
         {
            content:"This is a post-it",
            note_id: 12
         },
         {
            content:"This is a post-it",
            note_id: 13 
         },
         {
            content:"This is a post-it",
            note_id: 14
         },
         {
            content:"This is a post-it",
            note_id: 15
         },
    ])
    const scheduleData = await Schedule.bulkCreate([
        {
           content8am: "8am", 
           content9am: "9am",
           content10am: "10am",
           content11am: "11am",
           content12pm: "12pm",
           content1pm: "1pm",
           content2pm: "2pm",
           content3pm: "3pm",
           content4pm: "4pm",
           content5pm: "5pm",
           content6pm: "6pm",
           content7pm: "7pm",
           content8pm: "8pm",
           note_id:1
        },
        {
            content8am: "adsf;j", 
            content9am: "wea w",
            content10am: " wae",
            content11am: " yj",
            content12pm: "tyh",
            content1pm: "1pmyum",
            content2pm: "myutyu",
            content3pm: "rytn",
            content4pm: "rety56",
            content5pm: "345w4",
            content6pm: "xdfge",
            content7pm: "sert",
            content8pm: "4brtsh",
            note_id:2
         },
         {
            content8am: "w4t", 
            content9am: "xbrgd",
            content10am: "erg",
            content11am: "hret",
            content12pm: "q324t",
            content1pm: "q43t",
            content2pm: "34tq",
            content3pm: "qt34",
            content4pm: "tq34",
            content5pm: "t4q3",
            content6pm: "t43q",
            content7pm: "34",
            content8pm: "8pqt34m",
            note_id:3
         },
         {
            content8am: "8am", 
            content9am: "9am",
            content10am: "10am",
            content11am: "11am",
            content12pm: "12pm",
            content1pm: "1pm",
            content2pm: "2pm",
            content3pm: "3pm",
            content4pm: "4pm",
            content5pm: "5pm",
            content6pm: "6pm",
            content7pm: "7pm",
            content8pm: "8pm",
            note_id:4
         },
         {
             content8am: "adsf;j", 
             content9am: "wea w",
             content10am: " wae",
             content11am: " yj",
             content12pm: "tyh",
             content1pm: "1pmyum",
             content2pm: "myutyu",
             content3pm: "rytn",
             content4pm: "rety56",
             content5pm: "345w4",
             content6pm: "xdfge",
             content7pm: "sert",
             content8pm: "4brtsh",
             note_id:5
          },
          {
             content8am: "w4t", 
             content9am: "xbrgd",
             content10am: "erg",
             content11am: "hret",
             content12pm: "q324t",
             content1pm: "q43t",
             content2pm: "34tq",
             content3pm: "qt34",
             content4pm: "tq34",
             content5pm: "t4q3",
             content6pm: "t43q",
             content7pm: "34",
             content8pm: "8pqt34m",
             note_id:6
          },
          {
            content8am: "8am", 
            content9am: "9am",
            content10am: "10am",
            content11am: "11am",
            content12pm: "12pm",
            content1pm: "1pm",
            content2pm: "2pm",
            content3pm: "3pm",
            content4pm: "4pm",
            content5pm: "5pm",
            content6pm: "6pm",
            content7pm: "7pm",
            content8pm: "8pm",
            note_id:7
         },
         {
             content8am: "adsf;j", 
             content9am: "wea w",
             content10am: " wae",
             content11am: " yj",
             content12pm: "tyh",
             content1pm: "1pmyum",
             content2pm: "myutyu",
             content3pm: "rytn",
             content4pm: "rety56",
             content5pm: "345w4",
             content6pm: "xdfge",
             content7pm: "sert",
             content8pm: "4brtsh",
             note_id:8
          },
          {
             content8am: "w4t", 
             content9am: "xbrgd",
             content10am: "erg",
             content11am: "hret",
             content12pm: "q324t",
             content1pm: "q43t",
             content2pm: "34tq",
             content3pm: "qt34",
             content4pm: "tq34",
             content5pm: "t4q3",
             content6pm: "t43q",
             content7pm: "34",
             content8pm: "8pqt34m",
             note_id:9
          },
          {
            content8am: "8am", 
            content9am: "9am",
            content10am: "10am",
            content11am: "11am",
            content12pm: "12pm",
            content1pm: "1pm",
            content2pm: "2pm",
            content3pm: "3pm",
            content4pm: "4pm",
            content5pm: "5pm",
            content6pm: "6pm",
            content7pm: "7pm",
            content8pm: "8pm",
            note_id:10
         },
         {
             content8am: "adsf;j", 
             content9am: "wea w",
             content10am: " wae",
             content11am: " yj",
             content12pm: "tyh",
             content1pm: "1pmyum",
             content2pm: "myutyu",
             content3pm: "rytn",
             content4pm: "rety56",
             content5pm: "345w4",
             content6pm: "xdfge",
             content7pm: "sert",
             content8pm: "4brtsh",
             note_id:11
          },
          {
             content8am: "w4t", 
             content9am: "xbrgd",
             content10am: "erg",
             content11am: "hret",
             content12pm: "q324t",
             content1pm: "q43t",
             content2pm: "34tq",
             content3pm: "qt34",
             content4pm: "tq34",
             content5pm: "t4q3",
             content6pm: "t43q",
             content7pm: "34",
             content8pm: "8pqt34m",
             note_id:12
          },
          {
            content8am: "8am", 
            content9am: "9am",
            content10am: "10am",
            content11am: "11am",
            content12pm: "12pm",
            content1pm: "1pm",
            content2pm: "2pm",
            content3pm: "3pm",
            content4pm: "4pm",
            content5pm: "5pm",
            content6pm: "6pm",
            content7pm: "7pm",
            content8pm: "8pm",
            note_id:13
         },
         {
             content8am: "adsf;j", 
             content9am: "wea w",
             content10am: " wae",
             content11am: " yj",
             content12pm: "tyh",
             content1pm: "1pmyum",
             content2pm: "myutyu",
             content3pm: "rytn",
             content4pm: "rety56",
             content5pm: "345w4",
             content6pm: "xdfge",
             content7pm: "sert",
             content8pm: "4brtsh",
             note_id:14
          },
          {
             content8am: "w4t", 
             content9am: "xbrgd",
             content10am: "erg",
             content11am: "hret",
             content12pm: "q324t",
             content1pm: "q43t",
             content2pm: "34tq",
             content3pm: "qt34",
             content4pm: "tq34",
             content5pm: "t4q3",
             content6pm: "t43q",
             content7pm: "34",
             content8pm: "8pqt34m",
             note_id:15
          },
    ])
    const todoData = await Todo.bulkCreate([
        {
            content1: "This is todo content1",
            content1IsChecked: 0,
            content2: "This is todo content2",
            content2IsChecked: 0,
            content3: "This is todo content3",
            content3IsChecked: 0,
            content4: "This is todo content4",
            content4IsChecked: 0,
            content5: "This is todo content5",
            content5IsChecked: 0,
            content6: "This is todo content6",
            content6IsChecked: 0,
            content7: "This is todo content7",
            content7IsChecked: 0,
            content8: "This is todo content8",
            content8IsChecked: 0,
            content9: "This is todo content9",
            content9IsChecked: 0,
            content10: "This is todo content10",
            content10IsChecked: 0,
            note_id: 1
        },
        {
            content1: "take out the dog",
            content1IsChecked: 0,
            content2: "take out the trash",
            content2IsChecked: 0,
            content3: "give mom flowers",
            content3IsChecked: 0,
            content4: "bake cookies",
            content4IsChecked: 0,
            content5: "buy dads birthday present",
            content5IsChecked: 0,
            content6: "fix the pipes",
            content6IsChecked: 0,
            content7: "call grandma",
            content7IsChecked: 0,
            content8: "homework?",
            content8IsChecked: 0,
            content9: "study???",
            content9IsChecked: 0,
            content10: "ask joe for help?????",
            content10IsChecked: 0,
            note_id: 2
        },
        {
            content1: "whatasd f",
            content1IsChecked: 0,
            content2: "This is todo content2",
            content2IsChecked: 0,
            content3: "This is todo content3",
            content3IsChecked: 0,
            content4: "This is todo content4",
            content4IsChecked: 0,
            content5: "This is todo content5",
            content5IsChecked: 0,
            content6: "This is todo content6",
            content6IsChecked: 0,
            content7: "This is todo content7",
            content7IsChecked: 0,
            content8: "This is todo content8",
            content8IsChecked: 0,
            content9: "This is todo content9",
            content9IsChecked: 0,
            content10: "whatasd f0",
            content10IsChecked: 0,
            note_id: 3
        },
        {
            content1: "This is todo content1",
            content1IsChecked: 0,
            content2: "This is todo content2",
            content2IsChecked: 0,
            content3: "This is todo content3",
            content3IsChecked: 0,
            content4: "This is todo content4",
            content4IsChecked: 0,
            content5: "This is todo content5",
            content5IsChecked: 0,
            content6: "This is todo content6",
            content6IsChecked: 0,
            content7: "This is todo content7",
            content7IsChecked: 0,
            content8: "This is todo content8",
            content8IsChecked: 0,
            content9: "This is todo content9",
            content9IsChecked: 0,
            content10: "This is todo content10",
            content10IsChecked: 0,
            note_id: 4
        },
        {
            content1: "take out the dog",
            content1IsChecked: 0,
            content2: "take out the trash",
            content2IsChecked: 0,
            content3: "give mom flowers",
            content3IsChecked: 0,
            content4: "bake cookies",
            content4IsChecked: 0,
            content5: "buy dads birthday present",
            content5IsChecked: 0,
            content6: "fix the pipes",
            content6IsChecked: 0,
            content7: "call grandma",
            content7IsChecked: 0,
            content8: "homework?",
            content8IsChecked: 0,
            content9: "study???",
            content9IsChecked: 0,
            content10: "ask joe for help?????",
            content10IsChecked: 0,
            note_id: 5
        },
        {
            content1: "whatasd f",
            content1IsChecked: 0,
            content2: "This is todo content2",
            content2IsChecked: 0,
            content3: "This is todo content3",
            content3IsChecked: 0,
            content4: "This is todo content4",
            content4IsChecked: 0,
            content5: "This is todo content5",
            content5IsChecked: 0,
            content6: "This is todo content6",
            content6IsChecked: 0,
            content7: "This is todo content7",
            content7IsChecked: 0,
            content8: "This is todo content8",
            content8IsChecked: 0,
            content9: "This is todo content9",
            content9IsChecked: 0,
            content10: "whatasd f0",
            content10IsChecked: 0,
            note_id: 6
        },
        {
            content1: "This is todo content1",
            content1IsChecked: 0,
            content2: "This is todo content2",
            content2IsChecked: 0,
            content3: "This is todo content3",
            content3IsChecked: 0,
            content4: "This is todo content4",
            content4IsChecked: 0,
            content5: "This is todo content5",
            content5IsChecked: 0,
            content6: "This is todo content6",
            content6IsChecked: 0,
            content7: "This is todo content7",
            content7IsChecked: 0,
            content8: "This is todo content8",
            content8IsChecked: 0,
            content9: "This is todo content9",
            content9IsChecked: 0,
            content10: "This is todo content10",
            content10IsChecked: 0,
            note_id: 7
        },
        {
            content1: "take out the dog",
            content1IsChecked: 0,
            content2: "take out the trash",
            content2IsChecked: 0,
            content3: "give mom flowers",
            content3IsChecked: 0,
            content4: "bake cookies",
            content4IsChecked: 0,
            content5: "buy dads birthday present",
            content5IsChecked: 0,
            content6: "fix the pipes",
            content6IsChecked: 0,
            content7: "call grandma",
            content7IsChecked: 0,
            content8: "homework?",
            content8IsChecked: 0,
            content9: "study???",
            content9IsChecked: 0,
            content10: "ask joe for help?????",
            content10IsChecked: 0,
            note_id: 8
        },
        {
            content1: "whatasd f",
            content1IsChecked: 0,
            content2: "This is todo content2",
            content2IsChecked: 0,
            content3: "This is todo content3",
            content3IsChecked: 0,
            content4: "This is todo content4",
            content4IsChecked: 0,
            content5: "This is todo content5",
            content5IsChecked: 0,
            content6: "This is todo content6",
            content6IsChecked: 0,
            content7: "This is todo content7",
            content7IsChecked: 0,
            content8: "This is todo content8",
            content8IsChecked: 0,
            content9: "This is todo content9",
            content9IsChecked: 0,
            content10: "whatasd f0",
            content10IsChecked: 0,
            note_id: 9
        },
        {
            content1: "This is todo content1",
            content1IsChecked: 0,
            content2: "This is todo content2",
            content2IsChecked: 0,
            content3: "This is todo content3",
            content3IsChecked: 0,
            content4: "This is todo content4",
            content4IsChecked: 0,
            content5: "This is todo content5",
            content5IsChecked: 0,
            content6: "This is todo content6",
            content6IsChecked: 0,
            content7: "This is todo content7",
            content7IsChecked: 0,
            content8: "This is todo content8",
            content8IsChecked: 0,
            content9: "This is todo content9",
            content9IsChecked: 0,
            content10: "This is todo content10",
            content10IsChecked: 0,
            note_id: 10
        },
        {
            content1: "take out the dog",
            content1IsChecked: 0,
            content2: "take out the trash",
            content2IsChecked: 0,
            content3: "give mom flowers",
            content3IsChecked: 0,
            content4: "bake cookies",
            content4IsChecked: 0,
            content5: "buy dads birthday present",
            content5IsChecked: 0,
            content6: "fix the pipes",
            content6IsChecked: 0,
            content7: "call grandma",
            content7IsChecked: 0,
            content8: "homework?",
            content8IsChecked: 0,
            content9: "study???",
            content9IsChecked: 0,
            content10: "ask joe for help?????",
            content10IsChecked: 0,
            note_id: 11
        },
        {
            content1: "whatasd f",
            content1IsChecked: 0,
            content2: "This is todo content2",
            content2IsChecked: 0,
            content3: "This is todo content3",
            content3IsChecked: 0,
            content4: "This is todo content4",
            content4IsChecked: 0,
            content5: "This is todo content5",
            content5IsChecked: 0,
            content6: "This is todo content6",
            content6IsChecked: 0,
            content7: "This is todo content7",
            content7IsChecked: 0,
            content8: "This is todo content8",
            content8IsChecked: 0,
            content9: "This is todo content9",
            content9IsChecked: 0,
            content10: "whatasd f0",
            content10IsChecked: 0,
            note_id: 12
        },
        {
            content1: "This is todo content1",
            content1IsChecked: 0,
            content2: "This is todo content2",
            content2IsChecked: 0,
            content3: "This is todo content3",
            content3IsChecked: 0,
            content4: "This is todo content4",
            content4IsChecked: 0,
            content5: "This is todo content5",
            content5IsChecked: 0,
            content6: "This is todo content6",
            content6IsChecked: 0,
            content7: "This is todo content7",
            content7IsChecked: 0,
            content8: "This is todo content8",
            content8IsChecked: 0,
            content9: "This is todo content9",
            content9IsChecked: 0,
            content10: "This is todo content10",
            content10IsChecked: 0,
            note_id: 13
        },
        {
            content1: "take out the dog",
            content1IsChecked: 0,
            content2: "take out the trash",
            content2IsChecked: 0,
            content3: "give mom flowers",
            content3IsChecked: 0,
            content4: "bake cookies",
            content4IsChecked: 0,
            content5: "buy dads birthday present",
            content5IsChecked: 0,
            content6: "fix the pipes",
            content6IsChecked: 0,
            content7: "call grandma",
            content7IsChecked: 0,
            content8: "homework?",
            content8IsChecked: 0,
            content9: "study???",
            content9IsChecked: 0,
            content10: "ask joe for help?????",
            content10IsChecked: 0,
            note_id: 14
        },
        {
            content1: "whatasd f",
            content1IsChecked: 0,
            content2: "This is todo content2",
            content2IsChecked: 0,
            content3: "This is todo content3",
            content3IsChecked: 0,
            content4: "This is todo content4",
            content4IsChecked: 0,
            content5: "This is todo content5",
            content5IsChecked: 0,
            content6: "This is todo content6",
            content6IsChecked: 0,
            content7: "This is todo content7",
            content7IsChecked: 0,
            content8: "This is todo content8",
            content8IsChecked: 0,
            content9: "This is todo content9",
            content9IsChecked: 0,
            content10: "whatasd f0",
            content10IsChecked: 0,
            note_id: 15
        },
    ])
}

sequelize.sync({force:true}).then(()=>{
    seed();
})