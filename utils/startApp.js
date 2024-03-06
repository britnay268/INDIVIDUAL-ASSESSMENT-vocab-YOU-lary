import { getVocab } from '../api/vocabData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import showVocab from '../pages/vocab';

const startApp = (uid) => {
  domBuilder();
  // DOM EVENTS GO HERE
  domEvents();
  // FORM EVENTS GO HERE
  navBar();
  logoutButton();
  // NAVBAR EVENTLISTENERS GO HERE
  navEvents();

  // Put the cards on the DOM on app load
  getVocab(uid).then(showVocab);
};

export default startApp;
