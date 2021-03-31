export default {
  
  MUTATIONS_ADD_DATA_VIEW(state, payload) {
    let newDataView = [...state.dataView]
    newDataView.push(payload)
    state.dataView = newDataView;
  },
  
};
