export default (data, text,type) => {
  if (text !== null || text !== '') {
    const filteredList = data.filter(comic => {
      const searchText = text.toLowerCase();
      const currentTitle = comic[type].toLowerCase();
      return currentTitle.indexOf(searchText) > -1;
    });
    return filteredList;
  }
  return data;
};
