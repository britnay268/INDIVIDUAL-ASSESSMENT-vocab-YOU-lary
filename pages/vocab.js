import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const showVocab = (array) => {
  clearDom();

  const filterBtnStr = `
  <button type="button" class="btn btn-outline-dark" id="filter-html">HTML</button>
  <button type="button" class="btn btn-outline-dark" id="filter-css">CSS</button>
  <button type="button" class="btn btn-outline-dark" id="filter-js">JavaScript</button>
  <button type="button" class="btn btn-outline-dark" id="filter-py">Python</button>`;
  renderToDom('#filterBtns', filterBtnStr);

  let domStr = '';
  array.forEach((item) => {
    domStr += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title" id="vocab-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary" id="vocab-language">${item.language}</h6>
        <p class="card-text" id="vocab-definition">${item.definition}</p>
        <a href="#" class="card-link" id="vocab-edit">Edit</a>
        <a href="#" class="card-link" id="vocab-delete">Delete</a>
      </div>
    </div>`;
  });

  renderToDom('#vocab-container', domStr);
};

export default showVocab;
