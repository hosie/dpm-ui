import { connect } from 'react-redux'
import { changeSampleDirectory } from './actions'

import PadConfig from './PadConfig.js'
const mapStateToProps = (state,ownProps) => {
  let mode = 'one-shot'
  let samplePath = []
  let sampleFileName = ''
  let isActive=false

  let childDirs = []

  let allFiles=[]
  if(state.padBank.activePadId !== null){

    isActive = true
    mode = state.pads[state.padBank.activePadId].mode
    let activePadId = state.padBank.activePadId
    let currentPadConfig = state.pads[activePadId]

    if(state.padConfig.pending && typeof state.padConfig.currentDirectory !== 'undefined'){
      let parentDirId = state.padConfig.currentDirectory
      while (parentDirId !== null){
        let parentDir = state.samples.directories[parentDirId]
        samplePath.push(parentDir)
        parentDirId = parentDir.parent
      }
      samplePath = samplePath.reverse()
      allFiles = state.samples.files.filter(file => {
        return file.dir === state.padConfig.currentDirectory
      })
      .map(file => {
        return file.filename
      })
      childDirs = state.samples.directories.filter(dir=>{
        return dir.parent === state.padConfig.currentDirectory
      }).map(dir => {
        return {
          id: dir.id,
          name: dir.name
        }
      })
    } else {
      let sample = state.samples.files[currentPadConfig.sampleId]
      let parentDirId = sample.dir
      while (parentDirId !== null){
        let parentDir = state.samples.directories[parentDirId]
        samplePath.push(parentDir)
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
  }
  return {
    isActive,
    mode,
    samplePath,
    sampleFileName,
    allFiles,
    childDirs
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    changeSampleDirectory: function(directoryId){
      console.log("changeSampleDirectory")
      dispatch(changeSampleDirectory(directoryId))
    }
  }
}

const PadConfigContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PadConfig)

export default PadConfigContainer
