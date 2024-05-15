const { Schema, default: mongoose } = require("mongoose");

let comments;


if (mongoose.models.comments) {
  comments = mongoose.models.comments; // Use the existing model
} else {
 
  const CommentSchema = new Schema({

  BlogId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Blog'

  },
    comment: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
  

  }, { timestamps: true });

  comments = mongoose.model('comments', CommentSchema); 
}

export default comments;
