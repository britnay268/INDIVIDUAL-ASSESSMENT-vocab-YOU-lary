import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';
import selectLanguage from './selectLanguage';

const addVocabEntry = (obj = {}) => {
  clearDom();
  const domStr = `
  <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-3">
   <div class="form-group">
     <label for="vocab-title" class="form-label">Title</label>
     <input type="text" class="form-control" id="vocab-title" placeholder="Enter a word or phrase" value="${obj.title || ''}" required>
   </div>
   <div class="form-group">
     <label for="vocab-definition" class="form-label">Definition</label>
     <textarea type="text" class="form-control" id="vocab-definition" style="height: 100px" placeholder="Enter a definition" value="${obj.definition || ''}" required></textarea>
  </div>
  <div class="form-group" id="select-language"></div>
  <button type="submit" class="btn btn-primary mt-3">${obj.firebaseKey ? 'Update Vocab' : 'Submit Form'}</button>
  </form>`;

  renderToDom('#form-container', domStr);
  // selectLanguage(); This for the person to select the language associated with the vocab term
  selectLanguage(`${obj.uid}`, `${obj.language_id}`);
};

export default addVocabEntry;
