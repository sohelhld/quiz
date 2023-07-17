

const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({

    "quiz": {
        "creator": {type:String,require:true},
        "title": {type:String,require:true},
        "description": {type:String,require:true},
        "questions": [
          {
            "title": {type:String,require:true},
            "answerOptions":[{type:String,require:true}],
            "correctOptions": [{type:Number,require:true}]
          }]

        },
        "leaderboard":[ {
            "email":{type:String,require:true},
            "score":{type:Number,require:true}
        }]
 
});

const quizModel = mongoose.model('quiz', quizSchema);

module.exports = {
    quizModel
};
