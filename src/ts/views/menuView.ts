import View from './View';

class MenuView extends View {
  //TODO: renommer ce composant

  // TODO: Utiliser _parentElement
  _dialog: HTMLDialogElement | null;
  _continueBtn: HTMLButtonElement | null;
  constructor() {
    super();
    this._dialog = null;
    this._continueBtn = null;
  }

  initDomElements() {
    this._dialog = document.querySelector('.game-menu-dialog');

    if (this._dialog) {
      this._continueBtn = this._dialog.querySelector('.button-continue');
      this.addHandlerClickContinue();
    } else {
      console.error('Modal game menu doesnt exist');
    }
  }

  // TODO: Ajouter un event listener uniquement sur le dialog et faire de l'event delegation
  addHandlerClickContinue() {
    console.log('handler click', this);
    this._continueBtn?.addEventListener('click', this.closeDialog);
  }

  showDialog() {
    console.log('close', this);
    this._dialog?.showModal();
  }

  closeDialog() {
    this._dialog?.close();
  }

  _generateMarkup() {
    return `
    <dialog class="game-menu-dialog">
      <h1>PAUSE</h1>
      <div class="custom-button button-continue"><h2>CONTINUE GAME</h2></div>
      <div class="custom-button button-restart">
        <h2>RESTART</h2>
      </div>
      <div class="custom-button button-quit"><h2>QUIT GAME</h2></div>
    </dialog>
      `;
  }
}

export default new MenuView();
