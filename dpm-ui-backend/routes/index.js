var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let directories=[];
let files=[];

let baseDirPath = '/Users/johnhosie/tmp/test'
var fs = require('fs')
function traverseDirectory(dirId, dirPath){
  fs.readdir(dirPath, function(err, children){
    if(err){
      console.error(err)
      process.exit()
    }
    children.forEach(filename => {
      let childPath = `${dirPath}/${filename}`
      console.log(`found ${childPath}`)
      fs.stat(childPath, function(err, stat){
        if(err){
          console.error(err)
          process.exit()
        }
        if(stat.isDirectory()){
          console.log(`adding dir ${childPath}`)

          let id =directories.length
          directories.push({
            id,
            parent:dirId,
            name:filename
          })
          console.log(`added dir ${childPath}`)

          traverseDirectory(id, childPath)

        } else {
          console.log(`adding file ${childPath}`)
          let fileId = files.length
          files.push({
            id:fileId,
            dir:dirId,
            filename:filename
          })
          console.log(`added file ${childPath}`)

        }
      })
    })
  })
}

traverseDirectory(null, baseDirPath)

router.get('/samples', function(req, res, next) {
  res.json({
    directories,
    files
  })

});

module.exports = router;