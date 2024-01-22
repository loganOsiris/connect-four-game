import dialogRulesView from './views/dialogRulesView';
import mainMenuView from './views/mainMenuView';
import gameView from './views/gameView';

(document.querySelector('.game-menu-dialog') as HTMLDialogElement).showModal()

function setupDialogHandlers() {
  dialogRulesView.addHandlerOpenDialog(() => {
    dialogRulesView.showDialog();
  });

  dialogRulesView.addHandlerCloseDialog(() => {
    dialogRulesView.closeDialog();
  });
}

function playPvpClick() {
  gameView.render()
  gameView.addHandlerClickMenu(() => { })
}

function init() {
  mainMenuView.render()
  dialogRulesView.initDomElements()
  setupDialogHandlers();
  mainMenuView.addHandlerPlayPvpClick(playPvpClick)

  console.log('app initialized')
}

// document.addEventListener('DOMContentLoaded', init);

