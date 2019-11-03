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

function padConfig(state = {
  pads:[
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
  ]
}, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers(
  {
    padBank,
    padConfig,
    samples
  }
)
