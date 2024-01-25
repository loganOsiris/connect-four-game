import dialogRulesView from './views/dialogRulesView';
import mainMenuView from './views/mainMenuView';
import gameView from './views/gameView';
import modalMenuView from './views/modalMenuView';

function setupDialogHandlers() {
  dialogRulesView.addHandlerOpenDialog(() => dialogRulesView.showDialog());
  dialogRulesView.addHandlerCloseDialog(() => dialogRulesView.closeDialog());
}

function handleGameMenuRender() {
  modalMenuView.showDialog();
}

function initMainMenu() {
  mainMenuView.render();
  mainMenuView.addHandlerPlayPvpClick(playPvpClick);
  dialogRulesView.initDomElements();
  setupDialogHandlers();
}

function handlerQuitGame() {
  initMainMenu();
  //TODO: Add some logic to finish a game
  //TODO: ask confirmation before leaving
}

function playPvpClick() {
  gameView.render();

  modalMenuView.render(false);
  modalMenuView.initDomElements(handlerQuitGame);

  gameView.addHandlerClickMenu(handleGameMenuRender);
}

function init() {
  initMainMenu();

  console.log('app initialized');
}

document.addEventListener('DOMContentLoaded', init);
