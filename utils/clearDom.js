const clearDom = () => {
  document.querySelector('#filterBtns').innerHTML = '';
  document.querySelector('#vocab-container').innerHTML = '';
  document.querySelector('#language-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
};

export default clearDom;
