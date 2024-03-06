const domEvents = () => {
  document.querySelector('#container').addEventListener('click', (e) => {
    if (e.target.id.includes('vocab-edit')) {
      console.warn('CLICKED EDIT');
    }
  });
};

export default domEvents;
