export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state.profile')
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state.profile', serializedState)
  } catch (err) {
    // Ignore
  }
}

export default {
  loadState,
  saveState
}
