import { connect } from 'react-redux'
import { changePadMode, changeSampleDirectory, fileSelected, cancelPendingChanges, submitPadData } from './actions'

import PadConfig from './PadConfig.js'

const mapStateToProps = (state,ownProps) => {
  let mode = 'one-shot'
  let samplePath = []
  let selectedFile = {}
  let isActive=false

  let childDirs = []

  let allFiles=[]
  let padId=0
  let currentDirectory=null
  let isConfigPending = state.padConfig.pending
  if(state.padBank.activePadId !== null){
    padId=state.padBank.activePadId
    isActive = true
    let currentPadConfig = state.pads[padId]
    if(typeof currentPadConfig !== 'undefined') {

      if(typeof currentPadConfig.mode !== 'undefined'){
          mode = currentPadConfig.mode
      }

      if(typeof currentPadConfig.sampleId !== 'undefined'){
        selectedFile = state.samples.files[currentPadConfig.sampleId]
        let parentDirId = selectedFile.dir
        samplePath=[]
        while (parentDirId !== null){
          let parentDir = state.samples.directories[parentDirId]
          samplePath.push(parentDir)
          parentDirId = parentDir.parent
        }
        if(samplePath.length>0){
          currentDirectory=samplePath[0]
        }
        samplePath = samplePath.reverse()

        allFiles = state.samples.files.filter(file => {
          return file.dir === selectedFile.dir
        })
      }
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

      currentDirectory = state.padConfig.currentDirectory

    }

    if(isConfigPending){
      if(typeof state.padConfig.mode !== 'undefined'){
        mode = state.padConfig.mode
      }
      if(typeof state.padConfig.selectedFile !== 'undefined') {
        selectedFile = state.samples.files.find(file => {
          return file.id === state.padConfig.selectedFile
        })
      }


    }

    allFiles = state.samples.files.filter(file => {
      return file.dir === currentDirectory
    })
    childDirs = state.samples.directories.filter(dir=>{
      return dir.parent === currentDirectory
    }).map(dir => {
      return {
        id: dir.id,
        name: dir.name
      }
    })
  }
  return {
    isConfigPending,
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
    changeMode: function (newMode){
      console.log(`change mode to ${newMode}`)
      dispatch(changePadMode(newMode))
    },
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
