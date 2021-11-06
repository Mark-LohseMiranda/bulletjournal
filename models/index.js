const User = require('./User');
const Goal = require('./Goal');
const Braindump = require('./Braindump');
// const Month = require('./Month');
const Note = require('./Note');
const Post_it = require('./Post_it');
const Reminder = require('./Reminder');
const Schedule = require('./Schedule');
const Todo = require('./Todo');
const Inspiration = require('./Inspiration');
const List = require('./List');

// User.hasMany(Month, {
//     foreignKey: 'user_id',
//     onDelete:'CASCADE'
// });

// Month.belongsTo(User, {
//     foreignKey:'user_id'
// });

User.hasMany(List, {
    foreignKey:'user_id',
    onDelete:'CASCADE'
});

List.belongsTo(User, {
    foreignKey:'user_id'
})

User.hasMany(Note, {
    foreignKey: 'user_id',
    onDelete:'CASCADE'
});

Note.belongsTo(User, {
    foreignKey:'user_id'
});

// Month.hasMany(Note, {
//     foreignKey: 'month_id',
//     onDelete:'CASCADE'
// });

// Note.belongsTo(Month, {
//     foreignKey:'month_id'
// });

Note.hasMany(Goal, {
    foreignKey: 'note_id',
    onDelete:'CASCADE'
});

Goal.belongsTo(Note, {
    foreignKey:'note_id'
});

Note.hasMany(Braindump, {
    foreignKey: 'note_id',
    onDelete:'CASCADE'
});

Braindump.belongsTo(Note, {
    foreignKey:'note_id'
});

Note.hasMany(Post_it, {
    foreignKey: 'note_id',
    onDelete:'CASCADE'
});

Post_it.belongsTo(Note, {
    foreignKey:'note_id'
});

Note.hasMany(Reminder, {
    foreignKey: 'note_id',
    onDelete:'CASCADE'
});

Reminder.belongsTo(Note, {
    foreignKey:'note_id'
});

Note.hasMany(Schedule, {
    foreignKey: 'note_id',
    onDelete:'CASCADE'
});

Schedule.belongsTo(Note, {
    foreignKey:'note_id'
});

Note.hasMany(Todo, {
    foreignKey: 'note_id',
    onDelete:'CASCADE'
});

Todo.belongsTo(Note, {
    foreignKey:'note_id'
});
Note.hasMany(Inspiration, {
    foreignKey: 'note_id',
    onDelete:'CASCADE'
});

Inspiration.belongsTo(Note, {
    foreignKey:'note_id'
});

module.exports = {User,Note,Schedule,Reminder,Todo,Post_it,Goal, Braindump,Inspiration, List};