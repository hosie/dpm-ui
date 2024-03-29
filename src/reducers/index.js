import { combineReducers } from 'redux'


function padBank(state = {
  activePadId: null
}, action) {
  switch (action.type) {
    case 'ACTIVATE_PAD':
      return Object.assign({}, state, {
            activePadId: action.id
          })
    default:
      return state
  }
}

function samples(state = {
  directories:[],
  files:[]
}, action) {
  switch (action.type) {
    case 'FETCH_SAMPLES':
      return {
        ...state,
        files:action.samples.files,
        directories:action.samples.directories
      }
    default:
      return state
  }
}

function pads(state = [], action) {
  switch (action.type) {
    case 'SUBMIT_PAD_DATA':
      console.log('SUBMIT_PAD_DATA')
      let copy = state.map(pad=>{return {...pad}})
      copy[Number(action.padId)]=action.padData
      return copy
    default:
      return state
  }
}

let initialPadConfig = {
  pending:false,
  mode:'one-shot'
}

function padConfig(state=initialPadConfig,action){
  switch (action.type) {
    case 'CHANGE_PAD_MODE':
      return {
        ...state,
        pending: true,
        mode: action.newMode
      }
    case 'CHANGE_SAMPLE_DIRECTORY':
      return {
        ...state,
        currentDirectory:action.id
      }
    case 'SELECT_FILE':
      console.log('SELECT_FILE')
      return {
        ...state,
        pending: true,
        selectedFile:action.id
      }
    case 'SUBMIT_PAD_DATA':
    case 'ACTIVATE_PAD':
    case 'CANCEL_PENDING_CHANGES':
      return {
        ...initialPadConfig,
        currentDirectory:state.currentDirectory
      }
    default:
    return state
  }
}

export default combineReducers(
  {
    padBank,
    padConfig,
    pads,
    samples
  }
)
