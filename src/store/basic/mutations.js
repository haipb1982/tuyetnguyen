export default {

    MUTATIONS_ADD_DATA_VIEW(state, payload) {
        state.status = 'loading';
        let newDataView = [...state.dataView]
        newDataView.push(payload)
        state.dataView = newDataView;
        state.status = 'loaded';
    },

};