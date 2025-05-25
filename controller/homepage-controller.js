const courseModel = require('../models/course-model');
const userModel = require("../models/user-model");

module.exports = {
  getLatestCourse: async (req, res) => {
    let listOfLatestCourse = [];
    let listOfMostViewedCourse = [];
    let listOfMostRegisteredCourse = [];
    let listOfHighlightCourses = [];
    try {
      listOfLatestCourse = await courseModel.getLatest();
      listOfMostViewedCourse = await courseModel.getMostViewed();
      listOfMostRegisteredCourse = await courseModel.getMostRegistered();
      listOfHighlightCourses = await courseModel.getHighlightCourses();
    } catch (e) {
      console.log(e);
    }
    //console.log(listOfHighlightCourses)
  
    //console.log("getHighlightCourses : ",listOfHighlightCourses)
    if(listOfHighlightCourses.length!=0)
    listOfHighlightCourses[0].isActive = true;
    let latestPage1 = listOfLatestCourse.slice(0, 5);
    let latestPage2 = listOfLatestCourse.slice(5 ,listOfLatestCourse.length);
    
    let mostViewedPage1 = listOfMostViewedCourse.slice(0,5);
    let mostViewedPage2 = listOfMostViewedCourse.slice(5 ,listOfMostViewedCourse.length);

    let mostRegisteredPage1 = listOfMostRegisteredCourse.slice(0,5);
    let mostRegisteredPage2 = listOfMostRegisteredCourse.slice(5 ,listOfMostRegisteredCourse.length);
    res.render("viewHomepage/homepage", {
      latestPage1: latestPage1,
      latestPage2: latestPage2,
      mostViewedPage1: mostViewedPage1,
      mostViewedPage2: mostViewedPage2,
      mostRegisteredPage1: mostRegisteredPage1,
      mostRegisteredPage2: mostRegisteredPage2,
      listOfHighlightCourses: listOfHighlightCourses,
    });
  },


  getLatestCourse2: async (req, res) => {


     console.log(req.body);
     
     const messageObject = {
      Name: req.body.name,
      Email: req.body.email,
      Message: req.body.message,
      Subject: req.body.subject,
      };
     let nmb= await userModel.delMessage(messageObject);
     let xncb = await userModel.createMessage(messageObject);
     

    let listOfLatestCourse = [];
    let listOfMostViewedCourse = [];
    let listOfMostRegisteredCourse = [];
    let listOfHighlightCourses = [];
    try {
      listOfLatestCourse = await courseModel.getLatest();
      listOfMostViewedCourse = await courseModel.getMostViewed();
      listOfMostRegisteredCourse = await courseModel.getMostRegistered();
      listOfHighlightCourses = await courseModel.getHighlightCourses();
    } catch (e) {
      console.log(e);
    }
    //console.log(listOfHighlightCourses)
  
    //console.log("getHighlightCourses : ",listOfHighlightCourses)
    if(listOfHighlightCourses.length!=0)
    listOfHighlightCourses[0].isActive = true;
    let latestPage1 = listOfLatestCourse.slice(0, 5);
    let latestPage2 = listOfLatestCourse.slice(5 ,listOfLatestCourse.length);
    
    let mostViewedPage1 = listOfMostViewedCourse.slice(0,5);
    let mostViewedPage2 = listOfMostViewedCourse.slice(5 ,listOfMostViewedCourse.length);

    let mostRegisteredPage1 = listOfMostRegisteredCourse.slice(0,5);
    let mostRegisteredPage2 = listOfMostRegisteredCourse.slice(5 ,listOfMostRegisteredCourse.length);
    res.redirect("/");
 
  },

};