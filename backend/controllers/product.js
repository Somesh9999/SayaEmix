const path= require('path');
const sharp = require('sharp');
const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

exports.addProduct=(req,res,next)=>{
  const url= req.protocol + "://" + req.get('host');

  const compressedPath=path.join(__dirname,"../","compressed",new Date().getTime()+".jpeg");

  sharp(req.file.path).jpeg({
    quality:60,
    chromaSubsampling:"4:4:4"
  }).toFile(compressedPath).then(info=>{
      res.send(info);
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
