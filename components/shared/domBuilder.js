import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domStr = `
    <div id="navbar"></div>
    <div id="container">
      <div id="filterBtns"></div>
      <div id="sort-entries"></div>
      <div id="vocab-container"></div>
      <div id="language-container"></div>
      <div id="form-container"></div>
    </div>`;

  renderToDom('#app', domStr);
};

export default domBuilder;
