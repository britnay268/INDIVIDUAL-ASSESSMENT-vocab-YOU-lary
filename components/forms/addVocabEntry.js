import renderToDom from '../../utils/renderToDom';

const addVocabEntry = (obj = {}) => {
  const domStr = `
  <form id="" class="mb-4">
   <div class="mb-3">
     <label for="vocab-title" class="form-label">Title</label>
     <input type="text" class="form-control" id="vocab-title" placeholder="Enter a word or phrase" alue="${obj.title || ''}">
   </div>
   <div class="mb-3">
     <label for="vocab-definition" class="form-label">Definition</label>
     <input type="text" class="form-control" id="vocab-definition" placeholder="Enter a definition" value="${obj.definition || ''}">
  </div>
  <div class="form-group" id="select-language"></div>
  <button type="submit" class="btn btn-primary mt-3">Submit</button>
  </form>`;

  renderToDom('#form-container', domStr);
  // selectLanguage(); This for the person to select the language associated with the vocab term
};

export default addVocabEntry;
