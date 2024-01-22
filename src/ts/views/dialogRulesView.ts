import View from "./View";

class DialogRulesView extends View {
  _dialog: HTMLDialogElement | null;
  _btnOpen: Element | null;
  _btnClose: Element | null;

  constructor() {
    super();
    this._dialog = null;
    this._btnOpen = null;
    this._btnClose = null;
  }

  initDomElements() {
    this._dialog = document.querySelector('.dialog-rules');
    this._btnOpen = document.querySelector('.btn-game-rules');
    this._btnClose = this._dialog?.querySelector('.btn-ok-dialog') || null;
  }

  addHandlerCloseDialog(handler: () => void) {
    this._btnClose?.addEventListener('click', handler);
  }

  addHandlerOpenDialog(handler: () => void) {
    this._btnOpen?.addEventListener('click', handler);
  }

  showDialog() {
    this._dialog?.show();
  }

  closeDialog() {
    this._dialog?.close();
  }


  _generateMarkup() { return '' }
}

export default new DialogRulesView();
