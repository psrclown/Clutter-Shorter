import fs from "fs/promises";
import fsn from "fs";
import path from "path";

let basepath = "./clutters";

let files = await fs.readdir(basepath);
let extensions = [];
for (const items of files) {
    let ext = items.split(".")[items.split(".").length-1];
    console.log(ext);
    if(fsn.existsSync(path.join(basepath,ext))){
        // let mainPath = `/Users/anshsingh/codes/SIGMA 4.0/NodeJS/Codes/arange clutter /clutters/${ext}`;
        fs.rename(path.join(basepath, items), path.join(basepath,ext,items));
    }else{
        fs.mkdir(basepath+"/"+ext);

    }
}