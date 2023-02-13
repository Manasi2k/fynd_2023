const fs=require("fs");
//file is parameter
// @Desc
// @Params
function readUTF8File(filePath){
    //call back: paused will resume on 8th feb 2023
    //call back function: choise determining
    //2 choises: data=success
    //minimizes exception handling
    fs.readFile(filePath,"utf-8",(data,error) => {
        if(error) {
            console.error(error);
            return;
        }
        console.log(data);

    }); 
}
// fs.writeFile(filePath,"UTF-8",(data,error)=>{
//     if(error{
//         return;
//     }
//     console.log(data);
//     )
// })

//non existing file
readUTF8File("./abcd.txt");

//existing file
readUTF8File("./static/files/testFile.txt");

//file with different encoding. will read with missing characters
readUTF8File("./static/files/testFileDifferentEncoding.txt");



