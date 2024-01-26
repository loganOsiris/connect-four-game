import dialogRulesView from '../views/dialogRulesView';
import mainMenuView from '../views/mainMenuView';
import gameView from '../views/gameView';
import modalMenuView from '../views/modalMenuView';

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
    modalMenuView.render(false);
    modalMenuView.initDomElements(this._handlerQuitGame.bind(this));
    gameView.addHandlerClickMenu(this._handleGameMenuRender.bind(this));
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
