import dialogRulesView from '../views/dialogRulesView';
import mainMenuView from '../views/mainMenuView';
import gameView from '../views/gameView';
import modalMenuView from '../views/modalMenuView';
import gameController from './gameController';

class ViewController {
  constructor() {
    this.initMainMenu();
  }

  initMainMenu() {
    mainMenuView.render();
    mainMenuView.addHandlerPlayPvpClick(this._playPvpClick.bind(this));
    dialogRulesView.initDomElements();
    this._setupDialogHandlers();
  }

  private _setupDialogHandlers() {
    dialogRulesView.addHandlerOpenDialog(() => dialogRulesView.showDialog());
    dialogRulesView.addHandlerCloseDialog(() => dialogRulesView.closeDialog());
  }

  private _playPvpClick() {
    gameView.render();
    gameView.initDomElements();
    modalMenuView.initDomElements(this._handlerQuitGame.bind(this));
    gameView.addHandlerClickMenu(this._handleGameMenuRender.bind(this));

    gameController.init();
    // TODO: Initialize gameplay logic here
  }

  private _handleGameMenuRender() {
    modalMenuView.showDialog();
  }

  private _handlerQuitGame() {
    this.initMainMenu();
    //TODO: Add logic to finish the game
    //TODO: ask confirmation before leaving
  }
}

export default ViewController;
