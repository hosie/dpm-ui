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

function padConfig(state = {
  pads:[
    {
      mode:"one-shot",
      samplePath:[
        "samples",
        "foo",
        "bar"
      ],
      sampleFileName: "bang.wav"
    },
    {
      mode:"loop",
      samplePath:[
        "samples",
        "quz",
        "baz"
      ],
      sampleFileName: "bleep.wav"
    },
    {
      mode:"one-shot",
      samplePath:[
        "samples",
        "foo",
        "bar"
      ],
      sampleFileName: "4bars.wav"
    },
    {
      mode:"one-shot",
      samplePath:[
        "samples",
        "foo",
        "bar"
      ],
      sampleFileName: "4bars.wav"
    },
    {
      mode:"one-shot",
      samplePath:[
        "samples",
        "foo",
        "bar"
      ],
      sampleFileName: "4bars.wav"
    },
    {
      mode:"one-shot",
      samplePath:[
        "samples",
        "foo",
        "bar"
      ],
      sampleFileName: "4bars.wav"
    },
    {
      mode:"one-shot",
      samplePath:[
        "samples",
        "foo",
        "bar"
      ],
      sampleFileName: "4bars.wav"
    },
    {
      mode:"one-shot",
      samplePath:[
        "samples",
        "foo",
        "bar"
      ],
      sampleFileName: "4bars.wav"
    },
    {
      mode:"one-shot",
      samplePath:[
        "samples",
        "foo",
        "bar"
      ],
      sampleFileName: "4bars.wav"
    },
    {
      mode:"one-shot",
      samplePath:[
        "samples",
        "foo",
        "bar"
      ],
      sampleFileName: "4bars.wav"
    },
    {
      mode:"one-shot",
      samplePath:[
        "samples",
        "foo",
        "bar"
      ],
      sampleFileName: "4bars.wav"
    },
    {
      mode:"one-shot",
      samplePath:[
        "samples",
        "foo",
        "bar"
      ],
      sampleFileName: "4bars.wav"
    },
    {
      mode:"one-shot",
      samplePath:[
        "samples",
        "foo",
        "bar"
      ],
      sampleFileName: "4bars.wav"
    },
    {
      mode:"one-shot",
      samplePath:[
        "samples",
        "foo",
        "bar"
      ],
      sampleFileName: "4bars.wav"
    },
    {
      mode:"one-shot",
      samplePath:[
        "samples",
        "foo",
        "bar"
      ],
      sampleFileName: "4bars.wav"
    },
    {
      mode:"one-shot",
      samplePath:[
        "samples",
        "foo",
        "bar"
      ],
      sampleFileName: "4bars.wav"
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
    padConfig
  }
)
