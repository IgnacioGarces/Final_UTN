const multer = require ('multer');
// const upload = multer({ dest:'./images'}) --> Si no configuro el doc a cargar (su extension) y otras configs.

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
       const pathStorage = './images' 
       cb(null,pathStorage)    
    },
    filename: (req,file,cb)=>{
        const ext = file.originalname.split('.').pop();
        const filename = `img-${Date.now()}.${ext}`
        cb(null, filename)
    }
})

const upload = multer({storage})




module.exports= upload;