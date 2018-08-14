const Sequelize = require('sequelize');

const sequelize = new Sequelize('workoutlog', 'postgres', 'oz1oz2oz3oz4', {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate().then(
    function(){
        console.log('Connected to workoutlog postgres database');
    }, 
    function(err){
        console.log(err);
    }
)

module.exports = sequelize;