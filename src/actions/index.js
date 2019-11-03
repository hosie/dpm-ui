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
