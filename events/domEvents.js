const domEvents = () => {
  document.querySelector('#container').addEventListener('click', (e) => {
    if (e.target.id.includes('vocab-edit')) {
      console.warn('CLICKED EDIT');
    }
    if (e.target.id.includes('vocab-delete')) {
      console.warn('CLICKED DELETE');
    }
    if (e.target.id.includes('filter-html')) {
      console.warn('FILTERED by HTML');
    }
  });
};

export default domEvents;
