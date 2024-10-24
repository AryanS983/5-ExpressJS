

const fs = require ("fs")
const path =  require("path")

const exe = path.join(__dirname,"exe")
const pdf = path.join(__dirname,"pdf")
const ppt = path.join(__dirname,"ppt")
const jpg = path.join(__dirname,"jpg")
const zip = path.join(__dirname,"zip")

// const type = [exe,pdf,ppt,jpg]

fs.readdir(__dirname,(err,files)=>{
    files.forEach(file => {
        fordir(exe,".exe",file)
        fordir(pdf,".pdf",file)
        fordir(ppt,".pptx",file)
        fordir(jpg,".jpg",file)
        fordir(zip,".zip",file)
    });
    
})

const fordir = (newdir,ext,file)=>{
    if(path.extname(path.join(__dirname,file))==ext){
        if(!fs.existsSync(newdir)){
            fs.mkdirSync(newdir,{recursive:true})
        }
        fs.rename(path.join(__dirname,file),path.join(newdir,file),(err)=>{
            if(err){
                console.log(err);
            }
        })
    }

}
