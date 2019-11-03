import { connect } from 'react-redux'
import { changeSampleDirectory, fileSelected, cancelPendingChanges, submitPadData } from './actions'

import PadConfig from './PadConfig.js'
const mapStateToProps = (state,ownProps) => {
  let mode = 'one-shot'
  let samplePath = []
  let selectedFile = {}
  let isActive=false

  let childDirs = []

  let allFiles=[]
  let padId=0
  if(state.padBank.activePadId !== null){
    padId=state.padBank.activePadId
    isActive = true
    mode = state.pads[padId].mode
    let activePadId = state.padBank.activePadId
    let currentPadConfig = state.pads[activePadId]

    selectedFile = state.samples.files[currentPadConfig.sampleId]
    let parentDirId = selectedFile.dir
    while (parentDirId !== null){
      let parentDir = state.samples.directories[parentDirId]
      samplePath.push(parentDir)
      parentDirId = parentDir.parent
    }
    samplePath = samplePath.reverse()
    allFiles = state.samples.files.filter(file => {
      return file.dir === selectedFile.dir
    })

    if(state.padConfig.pending ){
      if(typeof state.padConfig.selectedFile !== 'undefined') {
        selectedFile = state.samples.files.find(file => {
          return file.id === state.padConfig.selectedFile
        })
      }
      if(typeof state.padConfig.currentDirectory !== 'undefined') {
        samplePath = []
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
        childDirs = state.samples.directories.filter(dir=>{
          return dir.parent === state.padConfig.currentDirectory
        }).map(dir => {
          return {
            id: dir.id,
            name: dir.name
          }
        })
      }

    }
  }
  return {
    isActive,
    mode,
    samplePath,
    selectedFile,
    allFiles,
    childDirs,
    padId
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    changeSampleDirectory: function(directoryId){
      console.log("changeSampleDirectory")
      dispatch(changeSampleDirectory(directoryId))
    },
    fileSelected: function(fileId) {
      console.log("select file")
      dispatch(fileSelected(fileId))
    },
    onCancel: function() {
      console.log("cancel")
      dispatch(cancelPendingChanges())
    },
    onSubmit: function(padId, padData) {
      console.log("submit")
      dispatch(submitPadData(padId, padData))
    }
  }
}

const PadConfigContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PadConfig)

export default PadConfigContainer
