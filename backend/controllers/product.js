const path= require('path');
const sharp = require('sharp');
//const imagemin = require("imagemin");
//const imageminPngquant = require("imagemin-pngquant");
const Product= require('../models/product');

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

exports.addProduct=(req,res,next)=>{

  const compressedImagePath=path.join(__dirname,"../","compressed",new Date().getTime()+".jpeg");

  sharp(req.files[0].path).jpeg({
    quality:60,
    chromaSubsampling:"4:4:4"
  }).toFile(compressedImagePath).then(info=>{
  });

  const compressedVideoPath=path.join(__dirname,"../","compressed",new Date().getTime()+".mp4");
  ffmpeg().input(req.files[1].path).videoCodec('libx264').audioCodec('libmp3lame').videoBitrate('1000k', true).fps(25).format('mp4')
  .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
  })
  .on('end', function() {
    console.log('Processing finished !');
  })
  .save(compressedVideoPath);

  const url= req.protocol + "://" + req.get('host');
  const product= new Product({
    name:req.body.name,
    description: req.body.description,
    image:url+"/images/"+req.files[0].filename,
    video:url+"/videos/"+req.files[1].filename
  });

  product.save().then(createdProduct=>{
    res.status(201).json({
      message:"Prduct Added Successfully",
      product:createdProduct
    })
  }).catch(err=>{
    res.status(500).json({
      message:err
    })
  });

};

exports.compressVideo=(req,res,next)=>{
  const compressedPath=path.join(__dirname,"../","compressed",new Date().getTime()+".mp4");
  ffmpeg().input(req.file.path).videoCodec('libx264').audioCodec('libmp3lame').videoBitrate('1000k', true).fps(25).format('mp4')
  .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
  })
  .on('end', function() {
    console.log('Processing finished !');
    res.send("Success");
  })
  .save(compressedPath);
}
