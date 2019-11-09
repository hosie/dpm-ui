import fetch from 'cross-fetch'

export const activatePad = id => ({
  type: 'ACTIVATE_PAD',
  id
})

export const changePadMode = newMode => ({
  type: 'CHANGE_PAD_MODE',
  newMode
})
export const changeSampleDirectory = id => ({
  type: 'CHANGE_SAMPLE_DIRECTORY',
  id
})

export const fileSelected = id => ({
  type: 'SELECT_FILE',
  id
})

export const cancelPendingChanges = () => ({
  type: 'CANCEL_PENDING_CHANGES'
})

export const requestSamples = () => ({
  type: 'REQUEST_SAMPLES'
})

export const receiveSamples = (json) => ({
  type: 'FETCH_SAMPLES',
  samples: json
})

export const submitPadData = (padId, padData) => ({
  type: 'SUBMIT_PAD_DATA',
  padId,
  padData
})

export const postPreset = () => ({
  type: 'POST_PRESET'
})

export const presetSaved = (json) => ({
  type: 'PRESET_SAVED',
  json
})


export function fetchSamples() {

  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestSamples())

    return fetch(`/samples`)
      .then(
        response => {
          console.log(`received samples ${response}`)

          return response.json()
        }
      )
      .then(json => {
          console.log(`received samples ${JSON.stringify(json)}`)
          dispatch(receiveSamples(json))

        }
      )
      .catch(err=>{
        console.log('An error occurred.', err)
      })
  }
}

export function savePreset(preset) {
  console.log("save preset")
  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    console.log("save preset")


    dispatch(postPreset())

    return fetch(`/presets/1`,
      {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

        //make sure to serialize your JSON body
        body: JSON.stringify(preset)
      })
      .then(
        response => {
          console.log(`posted preset ${response}`)

          return response.json()
        }
      )
      .then(json => {
          console.log(`posted preset ${JSON.stringify(json)}`)
          dispatch(presetSaved(json))

        }
      )
      .catch(err=>{
        console.log('An error occurred.', err)
      })
  }
}
