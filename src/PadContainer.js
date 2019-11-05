import { connect } from 'react-redux'
import Pad from './Pad.js'
import { activatePad } from './actions'
const mapStateToProps = (state,ownProps) => {
  let padId = ownProps.padId
  let mode
  let sample
  if(typeof state.pads[padId] !== 'undefined') {
    mode = state.pads[padId].mode
    let sampleId = state.pads[padId].sampleId
    if (typeof sampleId !== 'undefined'){
      if(typeof state.samples.files[sampleId] !== 'undefined') {
        sample=state.samples.files[sampleId].filename
      } else {
        console.error(`undefined sampleId ${sampleId} for pad ${padId}`)
      }
    }
  }
  return {
    isActive: state.padBank.activePadId === padId,
    mode,
    sample
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onPadClick: () => {
      console.log('activatePad')
      dispatch(activatePad(ownProps.padId))
    }
  }
}

const PadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pad)

export default PadContainer
