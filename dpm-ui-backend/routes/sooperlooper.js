let fs = require('fs')
let mustache = require('mustache')
let template = fs.readFileSync(`${__dirname}/sessionTemplate.slsess`,{encoding:'utf-8'})

module.exports.write = function(dirpath,pads) {
  let data={
    loops:[]
  }
  pads.forEach( (pad,index) =>{
    if(pad===null){
      data.loops.push({
        number:index,
        filename: ''
      })
    }else {
      data.loops.push({
        number:index,
        filename: pad.path
      })
    }

  })
  let output=mustache.render(template,data)
  let filepath = `${dirpath}/session1.slsess`
  fs.writeFileSync(filepath,output,{encoding:'utf-8'})

}
