import { connect } from 'react-redux'
import PadConfig from './PadConfig.js'
const mapStateToProps = (state,ownProps) => {
  let mode = 'one-shot'
  let samplePath = []
  let sampleFileName = ''
  let isActive=false

  let allFiles=[]
  if(state.padBank.activePadId !== null){
    isActive = true
    mode = state.padConfig.pads[state.padBank.activePadId].mode
    let activePadId = state.padBank.activePadId
    let currentPadConfig = state.padConfig.pads[activePadId]
    let sample = state.samples.files[currentPadConfig.sampleId]
    let parentDirId = sample.dir
    while (parentDirId !== null){
      let parentDir = state.samples.directories[parentDirId]
      samplePath.push(parentDir.name)
      parentDirId = parentDir.parent
    }
    samplePath = samplePath.reverse()
    sampleFileName = sample.filename
    allFiles = state.samples.files.filter(file => {
      return file.dir === sample.dir
    })
    .map(file => {
      return file.filename
    })
  }
  return {
    isActive,
    mode,
    samplePath,
    sampleFileName,
    allFiles
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
  }
}

const PadConfigContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PadConfig)

export default PadConfigContainer
