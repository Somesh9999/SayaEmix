const mongoose= require('mongoose');

const productSchema= mongoose.Schema({
  name:{type: String, required: true},
  description:{type: String, required: true},
  image:{type: String, required: true},
  video:{type: String, required: false}
});

const productModel= mongoose.model("sayaProduct",productSchema);
module.exports=productModel;
