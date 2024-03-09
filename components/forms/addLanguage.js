import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addLanguageOp = (obj = {}) => {
  clearDom();
  const domStr = `
  <form id="${obj.firebaseKey ? `update-language--${obj.firebaseKey}` : 'submit-language'}" class="mb-4">
    <div class="form-group">
      <label for="image">Language</label>
      <input type="text" class="form-control" id="language" placeholder="Enter Coding Language" value="${obj.language || ''}" required>
    </div>
    <button type="submit" class="btn btn-primary mt-3">${obj.firebaseKey ? 'Update Language' : 'Submit Form'}</button>
  </form>`;

  renderToDom('#form-container', domStr);
};

export default addLanguageOp;
