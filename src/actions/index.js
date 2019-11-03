import fetch from 'cross-fetch'

export const activatePad = id => ({
  type: 'ACTIVATE_PAD',
  id
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

export function fetchSamples() {

  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestSamples())

    return fetch(`http://localhost:3001/samples`)
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
