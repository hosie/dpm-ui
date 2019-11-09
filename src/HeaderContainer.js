import { connect } from 'react-redux'
import Header from './Header.js'
import { savePreset } from './actions'
const mapStateToProps = (state,ownProps) => {
  return {

    presetConfig:{

      pads:state.pads
    }
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onSave: (body) => {
      dispatch(savePreset(body))
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    onSave: () => {
      dispatchProps.onSave(stateProps.presetConfig)
    }
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Header)

export default HeaderContainer
