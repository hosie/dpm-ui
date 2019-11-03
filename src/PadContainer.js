import { connect } from 'react-redux'
import Pad from './Pad.js'
import { activatePad } from './actions'
const mapStateToProps = (state,ownProps) => {
  return {
    isActive: state.padBank.activePadId === ownProps.padId
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onPadClick: () => {
      console.log('activatePad')
      debugger
      dispatch(activatePad(ownProps.padId))
    }
  }
}

const PadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pad)

export default PadContainer
