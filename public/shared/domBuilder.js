import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domStr = `
    <div id="navbar">
    <div id="container">
      <div id="filterBtns"></div>
      <div id="vocab-container"></div>
      <div id="language-container"></div>
    </div>
    </div>`;

  renderToDom('#app', domStr);
};

export default domBuilder;
