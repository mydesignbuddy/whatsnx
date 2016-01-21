var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  title: String,
  tagLine: String,
  headerImage: String,
  logoImage: String,
  description: String,
  campaign: String,
  tags: { type: [String], index: true } // field level
});

ProjectSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Project', ProjectSchema);

