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
  directories:[
    {
      id:0,
      parent:null,
      name:"foo"
    },
    {
      id:1,
      parent:0,
      name:"bar"
    },
    {
      id:2,
      parent:0,
      name:"quz"
    }
  ],
  files:[
    {
      id:0,
      dir:1,
      filename:"bang.wav"
    },
    {
      id:1,
      dir:1,
      filename:"bleep.wav"
    },
    {
      id:2,
      dir:1,
      filename:"clap.wav"
    },


  ]
}, action) {
  switch (action.type) {
    default:
      return state
  }
}

function pads(state = [
    {
      mode:"one-shot",
      sampleId: 0
    },
    {
      mode:"loop",
      sampleId: 1

    },
    {
      mode:"one-shot",
      sampleId: 2

    },
    {
      mode:"one-shot",
      sampleId: 2

    },
    {
      mode:"one-shot",
      sampleId: 2

    },
    {
      mode:"one-shot",
      sampleId: 2

    },
    {
      mode:"one-shot",
      sampleId: 2

    },
    {
      mode:"one-shot",
      sampleId: 2

    },
    {
      mode:"one-shot",
      sampleId: 2

    },
    {
      mode:"one-shot",
      sampleId: 2

    },
    {
      mode:"one-shot",
      sampleId: 2

    },
    {
      mode:"one-shot",
      sampleId: 2

    },
    {
      mode:"one-shot",
      sampleId: 2

    },
    {
      mode:"one-shot",
      sampleId: 2

    },
    {
      mode:"one-shot",
      sampleId: 2

    },
    {
      mode:"one-shot",
      sampleId: 2

    }
  ], action) {
  switch (action.type) {
    default:
      return state
  }
}

let initialPadConfig = {
  pending:false
}

function padConfig(state=initialPadConfig,action){
  switch (action.type) {
    case 'CHANGE_SAMPLE_DIRECTORY':
      return {
        ...state,
        pending: true,
        currentDirectory:action.id
      }
    case 'SELECT_FILE':
      console.log('SELECT_FILE')
      return {
        ...state,
        pending: true,
        selectedFile:action.id
      }
    case 'ACTIVATE_PAD':
    case 'CANCEL_PENDING_CHANGES':
      return initialPadConfig
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
