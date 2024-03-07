import { getVocab } from '../api/vocabData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import showVocab from '../pages/vocab';

const startApp = (uid) => {
  domBuilder();
  domEvents(); // DOM EVENTS GO HERE
  formEvents(uid); // FORM EVENTS GO HERE
  navBar();
  logoutButton();
  navEvents(uid); // NAVBAR EVENTLISTENERS GO HERE

  // Put the cards on the DOM on app load
  getVocab(uid).then((vocab) => showVocab(vocab, uid));
};

export default startApp;
