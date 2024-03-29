import View from './View';

class MainMenuView extends View {
  addHandlerPlayPvpClick(handler: () => void) {
    this._parentElement
      .querySelector('.button-pvp')
      ?.addEventListener('click', handler);
  }

  _generateMarkup(): string {
    return `
    <div class="container-main-menu grid place-center">
        <div class="container grid place-center">
          <svg
            class="icon-two-player"
            width="52px"
            height="52px"
            viewBox="0 0 58 61"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Designs"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="assets" transform="translate(-432.000000, -742.000000)">
                <g id="Group-24" transform="translate(211.000000, 160.000000)">
                  <g id="logo" transform="translate(221.000000, 582.000000)">
                    <g id="Group-23" fill="#000000">
                      <circle id="Oval-Copy-47" cx="13" cy="13" r="13"></circle>
                      <circle id="Oval-Copy-51" cx="45" cy="13" r="13"></circle>
                      <circle id="Oval-Copy-53" cx="13" cy="45" r="13"></circle>
                      <circle id="Oval-Copy-52" cx="45" cy="45" r="13"></circle>
                    </g>
                    <g
                      id="Group-23-Copy"
                      transform="translate(0.000000, 3.000000)"
                      fill="#000000"
                    >
                      <circle id="Oval-Copy-47" cx="13" cy="13" r="13"></circle>
                      <circle id="Oval-Copy-51" cx="45" cy="13" r="13"></circle>
                      <circle id="Oval-Copy-53" cx="13" cy="45" r="13"></circle>
                      <circle id="Oval-Copy-52" cx="45" cy="45" r="13"></circle>
                    </g>
                    <circle
                      id="Oval-Copy-11"
                      fill="#FD6687"
                      cx="13"
                      cy="13"
                      r="10"
                    ></circle>
                    <circle
                      id="Oval-Copy-25"
                      fill="#FD6687"
                      cx="45"
                      cy="45"
                      r="10"
                    ></circle>
                    <circle
                      id="Oval-Copy-23"
                      fill="#FFCE67"
                      cx="45"
                      cy="13"
                      r="10"
                    ></circle>
                    <circle
                      id="Oval-Copy-24"
                      fill="#FFCE67"
                      cx="13"
                      cy="45"
                      r="10"
                    ></circle>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <div class="full-width bg-yellow custom-button button-pvp">
            <div class="container flex justify-between">
              <h2>PLAY PVP</h2>
              <svg
                width="82px"
                height="46px"
                viewBox="0 0 82 46"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Designs"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g id="player-vs-player">
                    <circle
                      id="Oval-Copy-17"
                      fill="#000000"
                      cx="59"
                      cy="23"
                      r="23"
                    ></circle>
                    <circle
                      id="Oval-Copy-11"
                      fill="#FFCE67"
                      cx="59"
                      cy="23"
                      r="20"
                    ></circle>
                    <g
                      id="Group-8"
                      transform="translate(52.333333, 14.666667)"
                      stroke="#000000"
                      stroke-width="3"
                    >
                      <path
                        d="M5,22.2916667 C10.5228475,22.2916667 15,17.8145142 15,12.2916667 C15,6.76881917 10.5228475,2.29166667 5,2.29166667"
                        id="Oval-Copy-11"
                        transform="translate(10.000000, 12.291667) rotate(90.000000) translate(-10.000000, -12.291667) "
                      ></path>
                      <g
                        id="Group-7"
                        transform="translate(8.125000, -0.000000)"
                      >
                        <line
                          x1="0.416666667"
                          y1="0"
                          x2="0.416666667"
                          y2="4.98700291"
                          id="Path"
                        ></line>
                        <line
                          x1="8.75"
                          y1="0"
                          x2="8.75"
                          y2="4.98700291"
                          id="Path-Copy"
                        ></line>
                      </g>
                    </g>
                    <circle
                      id="Oval-Copy-18"
                      fill="#000000"
                      cx="23"
                      cy="23"
                      r="23"
                    ></circle>
                    <g id="Group-2" transform="translate(3.000000, 3.000000)">
                      <circle
                        id="Oval-Copy-11"
                        fill="#FFCE67"
                        cx="20"
                        cy="20"
                        r="20"
                      ></circle>
                      <g
                        id="Group-8"
                        transform="translate(13.333333, 11.666667)"
                        stroke="#000000"
                        stroke-width="3"
                      >
                        <path
                          d="M5,22.2916667 C10.5228475,22.2916667 15,17.8145142 15,12.2916667 C15,6.76881917 10.5228475,2.29166667 5,2.29166667"
                          id="Oval-Copy-11"
                          transform="translate(10.000000, 12.291667) rotate(90.000000) translate(-10.000000, -12.291667) "
                        ></path>
                        <g
                          id="Group-7"
                          transform="translate(8.125000, 0.000000)"
                        >
                          <line
                            x1="0.416666667"
                            y1="0"
                            x2="0.416666667"
                            y2="4.98700291"
                            id="Path"
                          ></line>
                          <line
                            x1="8.75"
                            y1="0"
                            x2="8.75"
                            y2="4.98700291"
                            id="Path-Copy"
                          ></line>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div class="bg-white full-width custom-button btn-game-rules">
            <h2 class="container">GAME RULES</h2>
          </div>
        </div>
      </div>
      <dialog class="dialog-rules">
        <div class="wrapper-dialog">
          <h1 class="text-center">RULES</h1>
          <h3 class="title-dialog text-purple">OBJECTIVE</h3>
          <p>
            Be the first player to connect 4 of the same colored discs in a row
            (either vertically, horizontally, or diagonally).
          </p>
          <h3 class="title-dialog text-purple text">HOW TO PLAY</h3>
          <ol>
            <li class="list-rule">
              <h4 class="bold">1</h4>
              <span>Red goes first in the first game.</span>
            </li>
            <li class="list-rule">
              <h4>2</h4>
              <span
                >Players must alternate turns, and only one disc can be dropped
                in each turn.
              </span>
            </li>
            <li class="list-rule">
              <h4>3</h4>
              <span
                >The game ends when there is a 4-in-a-row or a stalemate.
              </span>
            </li>
            <li class="list-rule">
              <h4>4</h4>
              <span
                >The starter of the previous game goes second on the next game.
              </span>
            </li>
          </ol>
          <button class="btn-ok-dialog">
            <svg
              class=""
              width="70px"
              height="75px"
              viewBox="0 0 70 75"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="Designs"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="icon-check">
                  <circle
                    id="Oval-Copy-37"
                    fill="#000000"
                    cx="35"
                    cy="35"
                    r="35"
                  ></circle>
                  <circle
                    id="Oval-Copy-38"
                    fill="#000000"
                    cx="35"
                    cy="40"
                    r="35"
                  ></circle>
                  <circle
                    id="Oval-Copy-39"
                    fill="#FD6687"
                    cx="35"
                    cy="35"
                    r="32"
                  ></circle>
                  <polyline
                    id="Path"
                    stroke="#FFFFFF"
                    stroke-width="3"
                    points="20 34.5819497 30.2640104 44.84596 50.1099704 25"
                  ></polyline>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </dialog>
    `;
  }
}

export default new MainMenuView();
