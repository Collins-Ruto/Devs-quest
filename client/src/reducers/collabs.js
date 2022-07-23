// eslint-disable-next-line import/no-anonymous-default-export
export default (collabs = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...collabs, action.payload];
    default:
      return collabs;
  }
};
