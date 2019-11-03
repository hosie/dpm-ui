import { connect } from 'react-redux'
import PadConfig from './PadConfig.js'
const mapStateToProps = (state,ownProps) => {
  let mode = 'one-shot'
  let samplePath = []
  let sampleFileName = ''
  let isActive=false
  if(state.padBank.activePadId !== null){
    isActive = true
    mode = state.padConfig.pads[state.padBank.activePadId].mode
    samplePath = state.padConfig.pads[state.padBank.activePadId].samplePath
    sampleFileName = state.padConfig.pads[state.padBank.activePadId].sampleFileName
  }
  return {
    isActive,
    mode,
    samplePath,
    sampleFileName
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
