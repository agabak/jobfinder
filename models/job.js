var  mongoose = require('mongoose');

var JobSchema = mongoose.Schema({
      title:{type:String},
     description:{type:String}
});

var Job =  mongoose.model('Job',JobSchema);

exports.seedJobs = function(){
    Job.find({}).exec(function(error,collection){
        if(collection.length === 0){
            Job.create({title:'Cook', description:'You will be making bageels'});
            Job.create({title:'Waiter', description:'You will be putting food on people tab'});
            Job.create({title:'Programmer', description:'You will be making bageels'});
            Job.create({title:'Axe Maker', description:'You will be making bageels'});
        }
    })
}