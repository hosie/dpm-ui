let fs = require('fs')

module.exports.write = function(sessiondir,pads){
  let filepath = `${sessiondir}/midi.slb`
  let midiBindings = ''
  pads.forEach( (pad,index) =>{
    if(pad !== null){
      let padNumber = 36 + index
      let oneShot= pad.mode==='one-shot'
      midiBindings = midiBindings +`9 n ${padNumber}  note ${oneShot?'oneshot':'pause'} ${index}  0 1  norm 0 127` + "\n"
    }

  })

  fs.writeFileSync(filepath,midiBindings,{encoding:'utf-8'})

}
