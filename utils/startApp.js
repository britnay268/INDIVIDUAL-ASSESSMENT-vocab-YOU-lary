import getVocab from '../api/vocabData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import showVocab from '../pages/vocab';

const startApp = () => {
  domBuilder();
  // DOM EVENTS GO HERE
  // FORM EVENTS GO HERE
  navBar();
  logoutButton();
  // NAVBAR EVENTLISTENERS GO HERE

  // Put the cards on the DOM on app load
  getVocab().then(showVocab);
};

export default startApp;
