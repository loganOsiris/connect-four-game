import View from './View';

class MenuView extends View {
  constructor() {
    super();
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
