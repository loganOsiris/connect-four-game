import dialogRulesView from './views/dialogRulesView';
import mainMenuView from './views/mainMenuView';
import gameView from './views/gameView';
import menuView from './views/menuView';
// (document.querySelector('.game-menu-dialog') as HTMLDialogElement).showModal()

function setupDialogHandlers() {
  dialogRulesView.addHandlerOpenDialog(() => {
    dialogRulesView.showDialog();
  });

  dialogRulesView.addHandlerCloseDialog(() => {
    dialogRulesView.closeDialog();
  });
}

function playPvpClick() {
  gameView.render();
  gameView.addHandlerClickMenu(menuView.render);
}

function init() {
  mainMenuView.render();
  dialogRulesView.initDomElements();
  setupDialogHandlers();
  mainMenuView.addHandlerPlayPvpClick(playPvpClick);

  console.log('app initialized');
}

document.addEventListener('DOMContentLoaded', init);

/* 

Le problème est que `mainMenuView.addHandlerPlayPvpClick(playPvpClick)` 
fait le rendu du jeu et également du dialog en y ajoutant 
un event listener via Callback et tout ça au rendu de l’app.
Mais ça ne marche pas car le menu n’existe pas.

# SOLUTION:
`gameView.addHandlerClickMenu(menuView.render)` ne doit plus être appelé à l’initialisation.
*/
