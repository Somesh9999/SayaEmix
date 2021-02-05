const multer=require('multer');
const path=require('path');

const MIME_TYPE_MAP={
  "video/mp4":"mp4",
  "video/quicktime":"mov",
  "video/x-msvideo":"avi",
  "video/x-ms-wmv":"wmv",
  "video/3gpp":"3gp",
  "video/MP2T":"ts",
  "application/x-mpegURL":"m3u8"
}

const uploadPath= path.join(__dirname,"../","upload");

const storage= multer.diskStorage({
  destination: (req,file,cb)=>{     //cb is a callback functions that returns the values to multer
    typeCheck= MIME_TYPE_MAP[file.mimetype];
    error= new Error("Invalid Mime Type");
    if(typeCheck){
      error=null;
    }
    cb(error,"backend/upload");  //This path is relative to the server.js file
  },
  filename: (req,file,cb)=>{
    const filename= file.originalname.toLowerCase().split(" ").join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null,Date.now()+filename);
  }
});

module.exports=multer({storage:storage}).single("video");
