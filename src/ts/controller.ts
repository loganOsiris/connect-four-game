import dialogRulesView from './views/dialogRulesView';

function setupDialogHandlers() {
  dialogRulesView.addHandlerOpenDialog(() => {
    dialogRulesView.showDialog();
  });

  dialogRulesView.addHandlerCloseDialog(() => {
    dialogRulesView.closeDialog();
  });
}

function init() {
  setupDialogHandlers();
}

document.addEventListener('DOMContentLoaded', init);

export default init;
