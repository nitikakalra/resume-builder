import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req,res,cb)=> {
        cb(null,"uploads/")
    },
});

//FILE FILTER

const fileFilter = (req,file,cb) => {
    const allowedTypes = ["image/jpeg","image/png","image/jpg"];

    if(allowedTypes.includes(file.mimetype)){
        cb(null,true)
    }
    else{
        cb(new Error("only .jpeg, .jpg, .png are allowed formats"),false)
    }
}

const upload = multer({storage,fileFilter})
export default upload;