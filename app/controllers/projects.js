var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Project = mongoose.model('Project');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/projects', function (req, res, next) {
  Project.find(function (err, projects) {
      if (err) return next(err);
      console.log(projects);
    res.render('projects/index', {
      title: 'What\'s NX Projects',
      projects: projects
    });
  });
});

router.get('/project/view/:projectId', function (req, res, next) {
  Project.findById(req.params.projectId, function (err, project) {
    if (err) return next(err);
    res.render('projects/view', {
      title: project.title+" - "+project.tagLine,
      project: project
    });
  });
});

router.get('/project/new', function (req, res, next) {
  Project.create({
        title: "Online Training",
        tagLine: "Learn when you want!",
        headerImage: "/img/someimage.jpg",
        logoImage: "/img/someimage.jpg",
        description: "Some description about LMS",
        campaign: "Some marketing fluff about LMS",
        tags: ["keyword", "lms", "training", "learning"]
    }, 
    function (err, small) {
    if (err) return handleError(err);
        if (err) return next(err);
            res.render('projects/view', {
            title: 'Saved'
        });
  })
});
