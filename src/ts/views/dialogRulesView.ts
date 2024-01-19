import View from "./View";

class DialogRulesView extends View {
  _dialog = document.querySelector('.dialog-rules') as HTMLDialogElement;
  _btnOpen = document.querySelector('.btn-game-rules');
  _btnClose = this._dialog.querySelector('.btn-ok-dialog');

  constructor() {
    super();
  }

  addHandlerCloseDialog(handler: () => void) {
    this._btnClose?.addEventListener('click', handler);
  }

  addHandlerOpenDialog(handler: () => void) {
    this._btnOpen?.addEventListener('click', handler);
  }

  showDialog() {
    this._dialog.show();
  }

  closeDialog() {
    this._dialog.close();
  }

  _generateMarkup() { return '' }
}

export default new DialogRulesView();
