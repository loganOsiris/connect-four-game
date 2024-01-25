import View from './View';

class ModalMenuView extends View {
  private _dialog: HTMLDialogElement | null;
  constructor() {
    super();
    this._dialog = null;
  }

  initDomElements(handlerQuit: () => void) {
    this._dialog = document.querySelector('.game-menu-dialog');

    if (this._dialog) {
      this.addHandlerClickModal(handlerQuit);
    } else {
      console.error('Modal game menu doesnt exist');
    }
  }

  addHandlerClickModal(handlerQuit: () => void) {
    this._dialog?.addEventListener('click', (e) =>
      this._handleClickDialog(e, handlerQuit)
    );
  }

  private _handleClickDialog(e: MouseEvent, handlerQuit: () => void) {
    const button: HTMLElement | null = (e.target as HTMLElement).closest(
      '.custom-button'
    );
    if (!button) return;

    enum buttonsClassName {
      Continue = 'button-continue',
      Restart = 'button-restart',
      Quit = 'button-quit',
    }

    switch (button.classList[1]) {
      case buttonsClassName.Continue:
        this._clickContinue();
        break;
      case buttonsClassName.Restart:
        this._clickRestart();
        break;
      case buttonsClassName.Quit:
        handlerQuit();
        break;
      default:
        console.error('Unrecognized button');
    }
  }

  private _clickContinue() {
    this.closeDialog();
  }

  private _clickRestart() {
    //
  }

  showDialog() {
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

export default new ModalMenuView();
