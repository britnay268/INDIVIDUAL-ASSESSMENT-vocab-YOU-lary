import { getLanguage } from '../api/languageData';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

// SHOWS The filter buttons and cards
// May need to change this because it will be a merged data set to get language
const showVocab = async (array, uid) => {
  clearDom();

  const filterBtnStr = `
  <button type="button" class="btn btn-outline-dark" id="all-vocabCards">All Cards</button>
  <button type="button" class="btn btn-outline-dark" id="filter-html">HTML</button>
  <button type="button" class="btn btn-outline-dark" id="filter-css">CSS</button>
  <button type="button" class="btn btn-outline-dark" id="filter-js">JavaScript</button>
  <button type="button" class="btn btn-outline-dark" id="filter-py">Python</button>`;
  renderToDom('#filterBtns', filterBtnStr);

  let domStr = '';
  const languages = await getLanguage(uid);

  array.forEach((item) => {
    const singleLang = languages.find((lang) => lang.firebaseKey === item.language_id);
    domStr += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Language: ${singleLang.language}</h6>
        <p class="card-text">${item.definition}</p>
        <a href="#" class="card-link" id="vocab-edit--${item.firebaseKey}">Edit</a>
        <a href="#" class="card-link" id="vocab-delete--${item.firebaseKey}">Delete</a>
      </div>
    </div>`;
  });

  renderToDom('#vocab-container', domStr);
};

export default showVocab;
