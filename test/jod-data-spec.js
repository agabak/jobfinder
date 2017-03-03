var assert = require('assert')
var expect = require('chai').expect;
var mongoose = require('mongoose');
var jobModel = require('../models/job');
var  mongooseLab = 'mongodb://agaba:gabby123@ds133328.mlab.com:33328/agabajob';

describe("get jobs",function(){
it("should never be  empty since are seeded",function(done){	
	mongoose.connect(mongooseLab, function () {
       mongoose.model('Job').find({}).exec(function (error, jobsList){
		expect(jobsList.length).to.be.least(1);
		   done();
		});
    });	
  })
})
