// eslint-disable-next-line import/no-anonymous-default-export
export default (forums = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...forums, action.payload];
        default:
            return forums;
}}