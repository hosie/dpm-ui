var express = require('express');
var router = express.Router();
var midibinding = require('./midibinding.js')
var sooperlooper = require('./sooperlooper.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let directories=[];
let files=[];

let baseDirPath = process.env['SAMPLES_PATH']
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
            filename:filename,
            url:`/files${childPath.substring(baseDirPath.length)}`,
            path: `${childPath}/${filename}`
          })
          console.log(`added file ${fileId} => ${childPath}`)

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

router.use('/files',express.static(process.env['SAMPLES_PATH']))

router.post('/presets/:presetId', function(req, res, next) {
  console.log(JSON.stringify(req.body))
  let sessiondir=process.env['SESSION_DIR']
  midibinding.write(sessiondir,req.body.pads)
  let pads=req.body.pads.map(pad => {
    if(pad === null){
      return null
    }

    let matchingFile = files.find(file => {
      return file.id===pad.sampleId
    })
    if(matchingFile) {
      return {
        path: matchingFile.path
      }
    }
    console.log(`no file found for ${pad.sampleId}`)
    return null

  })

  sooperlooper.write(sessiondir,pads)

  res.status(200).send()

});
module.exports = router;
