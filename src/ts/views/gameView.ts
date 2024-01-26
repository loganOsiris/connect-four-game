import View from './View';

class GameView extends View {
  private _board: HTMLElement | null;

  constructor() {
    super();
    this._board = this._parentElement.querySelector('.container-board');
    console.log(this._board);
  }

  initDomElements() {
    // this._board = this._parentElement.querySelector('.')
  }

  addHandlerClickMenu(handler: () => void) {
    const button = this._parentElement.querySelector('.btn-game--menu');
    if (button) {
      button.addEventListener('click', () => {
        handler();
      });
    }
  }

  addHandlerClickBoard() {}

  _generateMarkup() {
    return `
        <div class="flex container justify-between container-btn-game">
        <button class="btn-game btn-game--menu">MENU</button>
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 58 61"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>logo</title>
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
        <button class="btn-game btn-game--restart">RESTART</button>
      </div>

      <div class="flex justify-between container-items-total-score">
        <div class="item-total-score relative">
          <h4>PLAYER 1</h4>
          <div class="score-1 score-total-player">0</div>
          <svg
            class="icon-total-score--1"
            width="54px"
            height="59px"
            viewBox="0 0 54 59"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>player-one</title>
            <g
              id="Designs"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="player-one">
                <circle
                  id="Oval-Copy-21"
                  fill="#000000"
                  cx="27"
                  cy="27"
                  r="27"
                ></circle>
                <circle
                  id="Oval-Copy-40"
                  fill="#000000"
                  cx="27"
                  cy="32"
                  r="27"
                ></circle>
                <circle
                  id="Oval-Copy-11"
                  fill="#FD6687"
                  cx="27"
                  cy="27"
                  r="24"
                ></circle>
                <g
                  id="Group-8"
                  transform="translate(19.000000, 17.000000)"
                  stroke="#000000"
                  stroke-width="3"
                >
                  <path
                    d="M6,26.75 C12.627417,26.75 18,21.377417 18,14.75 C18,8.122583 12.627417,2.75 6,2.75"
                    id="Oval-Copy-11"
                    transform="translate(12.000000, 14.750000) rotate(90.000000) translate(-12.000000, -14.750000) "
                  ></path>
                  <g id="Group-7" transform="translate(9.750000, 0.000000)">
                    <line
                      x1="0.5"
                      y1="0"
                      x2="0.5"
                      y2="5.9844035"
                      id="Path"
                    ></line>
                    <line
                      x1="10.5"
                      y1="0"
                      x2="10.5"
                      y2="5.9844035"
                      id="Path-Copy"
                    ></line>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="item-total-score relative">
          <h4>PLAYER 2</h4>
          <div class="score-2 score-total-player">0</div>
          <svg
            class="icon-total-score--2"
            width="54px"
            height="59px"
            viewBox="0 0 54 59"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>player-two</title>
            <g
              id="Designs"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="player-two"
                transform="translate(27.000000, 29.500000) scale(-1, 1) translate(-27.000000, -29.500000) "
              >
                <circle
                  id="Oval-Copy-21"
                  fill="#000000"
                  cx="27"
                  cy="27"
                  r="27"
                ></circle>
                <circle
                  id="Oval-Copy-40"
                  fill="#000000"
                  cx="27"
                  cy="32"
                  r="27"
                ></circle>
                <circle
                  id="Oval-Copy-11"
                  fill="#FFCE67"
                  cx="27"
                  cy="27"
                  r="24"
                ></circle>
                <g
                  id="Group-8"
                  transform="translate(19.000000, 17.000000)"
                  stroke="#000000"
                  stroke-width="3"
                >
                  <path
                    d="M6,26.75 C12.627417,26.75 18,21.377417 18,14.75 C18,8.122583 12.627417,2.75 6,2.75"
                    id="Oval-Copy-11"
                    transform="translate(12.000000, 14.750000) rotate(90.000000) translate(-12.000000, -14.750000) "
                  ></path>
                  <g id="Group-7" transform="translate(9.750000, 0.000000)">
                    <line
                      x1="0.5"
                      y1="0"
                      x2="0.5"
                      y2="5.9844035"
                      id="Path"
                    ></line>
                    <line
                      x1="10.5"
                      y1="0"
                      x2="10.5"
                      y2="5.9844035"
                      id="Path-Copy"
                    ></line>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <div class="relative container-board">
        <svg
          class="board-layer board-layer--black"
          width="335"
          height="320"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <filter
              x="-1.5%"
              y="-1.6%"
              width="103%"
              height="106.5%"
              filterUnits="objectBoundingBox"
              id="a"
            >
              <feOffset dy="10" in="SourceAlpha" result="shadowOffsetOuter1" />
              <feComposite
                in="shadowOffsetOuter1"
                in2="SourceAlpha"
                operator="out"
                result="shadowOffsetOuter1"
              />
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                in="shadowOffsetOuter1"
              />
            </filter>
            <path
              d="M355 148c11.046 0 20 8.954 20 20v270c0 11.046-8.954 20-20 20H60c-11.046 0-20-8.954-20-20V168c0-11.046 8.954-20 20-20h295Zm-7.563 244.178c-9.368 0-16.962 7.605-16.962 16.986 0 9.382 7.594 16.987 16.962 16.987 9.368 0 16.962-7.605 16.962-16.987 0-9.38-7.594-16.986-16.962-16.986Zm-46.646 0c-9.368 0-16.962 7.605-16.962 16.986 0 9.382 7.594 16.987 16.962 16.987 9.368 0 16.962-7.605 16.962-16.987 0-9.38-7.594-16.986-16.962-16.986Zm-46.645 0c-9.368 0-16.962 7.605-16.962 16.986 0 9.382 7.594 16.987 16.962 16.987 9.367 0 16.962-7.605 16.962-16.987 0-9.38-7.595-16.986-16.962-16.986Zm-93.292 0c-9.367 0-16.962 7.605-16.962 16.986 0 9.382 7.595 16.987 16.962 16.987 9.368 0 16.962-7.605 16.962-16.987 0-9.38-7.594-16.986-16.962-16.986Zm46.646 0c-9.368 0-16.962 7.605-16.962 16.986 0 9.382 7.594 16.987 16.962 16.987 9.368 0 16.962-7.605 16.962-16.987 0-9.38-7.594-16.986-16.962-16.986Zm-93.291 0c-9.368 0-16.962 7.605-16.962 16.986 0 9.382 7.594 16.987 16.962 16.987 9.368 0 16.962-7.605 16.962-16.987 0-9.273-7.42-16.81-16.64-16.983Zm-46.646 0c-9.368 0-16.962 7.605-16.962 16.986 0 9.382 7.594 16.987 16.962 16.987 9.368 0 16.962-7.605 16.962-16.987 0-9.38-7.594-16.986-16.962-16.986Zm279.874-46.712c-9.368 0-16.962 7.605-16.962 16.986s7.594 16.986 16.962 16.986c9.368 0 16.962-7.605 16.962-16.986s-7.594-16.986-16.962-16.986Zm-46.646 0c-9.368 0-16.962 7.605-16.962 16.986s7.594 16.986 16.962 16.986c9.368 0 16.962-7.605 16.962-16.986s-7.594-16.986-16.962-16.986Zm-46.645 0c-9.368 0-16.962 7.605-16.962 16.986s7.594 16.986 16.962 16.986c9.367 0 16.962-7.605 16.962-16.986s-7.595-16.986-16.962-16.986Zm-46.646 0c-9.368 0-16.962 7.605-16.962 16.986s7.594 16.986 16.962 16.986c9.368 0 16.962-7.605 16.962-16.986s-7.594-16.986-16.962-16.986Zm-46.646 0c-9.367 0-16.962 7.605-16.962 16.986s7.595 16.986 16.962 16.986c9.368 0 16.962-7.605 16.962-16.986s-7.594-16.986-16.962-16.986Zm-46.645 0c-9.368 0-16.962 7.605-16.962 16.986s7.594 16.986 16.962 16.986c9.368 0 16.962-7.605 16.962-16.986s-7.594-16.986-16.962-16.986Zm-46.646 0c-9.368 0-16.962 7.605-16.962 16.986s7.594 16.986 16.962 16.986c9.368 0 16.962-7.605 16.962-16.986s-7.594-16.986-16.962-16.986Zm0-46.713c-9.368 0-16.962 7.605-16.962 16.987 0 9.381 7.594 16.986 16.962 16.986 9.368 0 16.962-7.605 16.962-16.986 0-9.382-7.594-16.987-16.962-16.987Zm46.646 0c-9.368 0-16.962 7.605-16.962 16.987 0 9.381 7.594 16.986 16.962 16.986 9.368 0 16.962-7.605 16.962-16.986 0-9.382-7.594-16.987-16.962-16.987Zm46.645 0c-9.367 0-16.962 7.605-16.962 16.987 0 9.381 7.595 16.986 16.962 16.986 9.368 0 16.962-7.605 16.962-16.986 0-9.382-7.594-16.987-16.962-16.987Zm46.646 0c-9.368 0-16.962 7.605-16.962 16.987 0 9.381 7.594 16.986 16.962 16.986 9.368 0 16.962-7.605 16.962-16.986 0-9.382-7.594-16.987-16.962-16.987Zm46.646 0c-9.368 0-16.962 7.605-16.962 16.987 0 9.381 7.594 16.986 16.962 16.986 9.367 0 16.962-7.605 16.962-16.986 0-9.382-7.595-16.987-16.962-16.987Zm46.645 0c-9.368 0-16.962 7.605-16.962 16.987 0 9.381 7.594 16.986 16.962 16.986 9.368 0 16.962-7.605 16.962-16.986 0-9.382-7.594-16.987-16.962-16.987Zm46.646 0c-9.368 0-16.962 7.605-16.962 16.987 0 9.381 7.594 16.986 16.962 16.986 9.368 0 16.962-7.605 16.962-16.986 0-9.382-7.594-16.987-16.962-16.987Zm-233.228-46.712c-9.368 0-16.962 7.605-16.962 16.986 0 9.382 7.594 16.987 16.962 16.987 9.368 0 16.962-7.605 16.962-16.987 0-9.38-7.594-16.986-16.962-16.986Zm46.645 0c-9.367 0-16.962 7.605-16.962 16.986 0 9.382 7.595 16.987 16.962 16.987 9.368 0 16.962-7.605 16.962-16.987 0-9.38-7.594-16.986-16.962-16.986Zm46.646 0c-9.368 0-16.962 7.605-16.962 16.986 0 9.382 7.594 16.987 16.962 16.987 9.368 0 16.962-7.605 16.962-16.987 0-9.38-7.594-16.986-16.962-16.986Zm46.646 0c-9.368 0-16.962 7.605-16.962 16.986 0 9.382 7.594 16.987 16.962 16.987 9.367 0 16.962-7.605 16.962-16.987 0-9.38-7.595-16.986-16.962-16.986Zm46.645 0c-9.368 0-16.962 7.605-16.962 16.986 0 9.382 7.594 16.987 16.962 16.987 9.368 0 16.962-7.605 16.962-16.987 0-9.38-7.594-16.986-16.962-16.986Zm46.646 0c-9.368 0-16.962 7.605-16.962 16.986 0 9.382 7.594 16.987 16.962 16.987 9.368 0 16.962-7.605 16.962-16.987 0-9.38-7.594-16.986-16.962-16.986Zm-279.874 0c-9.368 0-16.962 7.605-16.962 16.986 0 9.382 7.594 16.987 16.962 16.987 9.368 0 16.962-7.605 16.962-16.987 0-9.38-7.594-16.986-16.962-16.986Zm279.874-46.712c-9.368 0-16.962 7.605-16.962 16.986s7.594 16.986 16.962 16.986c9.368 0 16.962-7.605 16.962-16.986s-7.594-16.986-16.962-16.986Zm-46.646 0c-9.368 0-16.962 7.605-16.962 16.986s7.594 16.986 16.962 16.986c9.368 0 16.962-7.605 16.962-16.986s-7.594-16.986-16.962-16.986Zm-46.645 0c-9.368 0-16.962 7.605-16.962 16.986s7.594 16.986 16.962 16.986c9.367 0 16.962-7.605 16.962-16.986s-7.595-16.986-16.962-16.986Zm-46.646 0c-9.368 0-16.962 7.605-16.962 16.986s7.594 16.986 16.962 16.986c9.368 0 16.962-7.605 16.962-16.986s-7.594-16.986-16.962-16.986Zm-46.646 0c-9.367 0-16.962 7.605-16.962 16.986s7.595 16.986 16.962 16.986c9.368 0 16.962-7.605 16.962-16.986s-7.594-16.986-16.962-16.986Zm-46.645 0c-9.368 0-16.962 7.605-16.962 16.986s7.594 16.986 16.962 16.986c9.368 0 16.962-7.605 16.962-16.986s-7.594-16.986-16.962-16.986Zm-46.646 0c-9.368 0-16.962 7.605-16.962 16.986s7.594 16.986 16.962 16.986c9.368 0 16.962-7.605 16.962-16.986s-7.594-16.986-16.962-16.986Zm279.874-46.713c-9.368 0-16.962 7.605-16.962 16.987 0 9.381 7.594 16.986 16.962 16.986 9.368 0 16.962-7.605 16.962-16.986 0-9.382-7.594-16.987-16.962-16.987Zm-46.646 0c-9.368 0-16.962 7.605-16.962 16.987 0 9.381 7.594 16.986 16.962 16.986 9.368 0 16.962-7.605 16.962-16.986 0-9.382-7.594-16.987-16.962-16.987Zm-46.645 0c-9.368 0-16.962 7.605-16.962 16.987 0 9.381 7.594 16.986 16.962 16.986 9.367 0 16.962-7.605 16.962-16.986 0-9.382-7.595-16.987-16.962-16.987Zm-46.646 0c-9.368 0-16.962 7.605-16.962 16.987 0 9.381 7.594 16.986 16.962 16.986 9.368 0 16.962-7.605 16.962-16.986 0-9.382-7.594-16.987-16.962-16.987Zm-46.646 0c-9.367 0-16.962 7.605-16.962 16.987 0 9.381 7.595 16.986 16.962 16.986 9.368 0 16.962-7.605 16.962-16.986 0-9.382-7.594-16.987-16.962-16.987Zm-46.645 0c-9.368 0-16.962 7.605-16.962 16.987 0 9.381 7.594 16.986 16.962 16.986 9.368 0 16.962-7.605 16.962-16.986 0-9.382-7.594-16.987-16.962-16.987Zm-46.646 0c-9.368 0-16.962 7.605-16.962 16.987 0 9.381 7.594 16.986 16.962 16.986 9.368 0 16.962-7.605 16.962-16.986 0-9.382-7.594-16.987-16.962-16.987Z"
              id="b"
            />
          </defs>
          <g transform="translate(-40 -148)" fill="#000" fill-rule="evenodd">
            <use filter="url(#a)" xlink:href="#b" />
            <path
              stroke="#000"
              stroke-width="3"
              d="M355 149.5c5.109 0 9.734 2.07 13.081 5.419A18.442 18.442 0 0 1 373.5 168v270c0 5.109-2.07 9.734-5.419 13.081A18.442 18.442 0 0 1 355 456.5H60c-5.109 0-9.734-2.07-13.081-5.419A18.442 18.442 0 0 1 41.5 438V168c0-5.109 2.07-9.734 5.419-13.081A18.442 18.442 0 0 1 60 149.5h295Zm-7.563 241.178c-5.099 0-9.715 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.416c5.098 0 9.714-2.07 13.055-5.416a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.416c5.099 0 9.714-2.07 13.056-5.416a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm-46.645 0c-5.099 0-9.715 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.416c5.098 0 9.714-2.07 13.055-5.416a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-93.292 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.416c5.099 0 9.715-2.07 13.056-5.416a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.416c5.098 0 9.714-2.07 13.055-5.416a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-93.291 0c-5.099 0-9.714 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.416c5.098 0 9.714-2.07 13.055-5.416a18.44 18.44 0 0 0 5.407-13.07c0-5.064-2.032-9.652-5.368-12.992-3.307-3.312-7.9-5.4-13.094-5.495Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.416c5.099 0 9.715-2.07 13.056-5.416a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm279.874-46.712c-5.099 0-9.715 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.069 13.055-5.415a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.714-2.069 13.056-5.415a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm-46.645 0c-5.099 0-9.715 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.069 13.055-5.415a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.415c5.098 0 9.714-2.069 13.055-5.415a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.715-2.069 13.056-5.415a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm-46.645 0c-5.099 0-9.714 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.069 13.055-5.415a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.715-2.069 13.056-5.415a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm0-46.713c-5.098 0-9.714 2.07-13.055 5.416a18.44 18.44 0 0 0-5.407 13.07 18.44 18.44 0 0 0 5.407 13.072 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.715-2.07 13.056-5.415a18.44 18.44 0 0 0 5.406-13.071 18.44 18.44 0 0 0-5.406-13.071 18.392 18.392 0 0 0-13.056-5.416Zm46.646 0c-5.099 0-9.714 2.07-13.056 5.416a18.44 18.44 0 0 0-5.406 13.07 18.44 18.44 0 0 0 5.406 13.072 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.07 13.055-5.415a18.44 18.44 0 0 0 5.407-13.071 18.44 18.44 0 0 0-5.407-13.071 18.392 18.392 0 0 0-13.055-5.416Zm46.645 0c-5.098 0-9.714 2.07-13.055 5.416a18.44 18.44 0 0 0-5.407 13.07 18.44 18.44 0 0 0 5.407 13.072 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.715-2.07 13.056-5.415a18.44 18.44 0 0 0 5.406-13.071 18.44 18.44 0 0 0-5.406-13.071 18.392 18.392 0 0 0-13.056-5.416Zm46.646 0c-5.098 0-9.714 2.07-13.055 5.416a18.44 18.44 0 0 0-5.407 13.07 18.44 18.44 0 0 0 5.407 13.072 18.392 18.392 0 0 0 13.055 5.415c5.098 0 9.714-2.07 13.055-5.415a18.44 18.44 0 0 0 5.407-13.071 18.44 18.44 0 0 0-5.407-13.071 18.392 18.392 0 0 0-13.055-5.416Zm46.646 0c-5.099 0-9.715 2.07-13.056 5.416a18.44 18.44 0 0 0-5.406 13.07 18.44 18.44 0 0 0 5.406 13.072 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.07 13.055-5.415a18.44 18.44 0 0 0 5.407-13.071 18.44 18.44 0 0 0-5.407-13.071 18.392 18.392 0 0 0-13.055-5.416Zm46.645 0c-5.098 0-9.714 2.07-13.055 5.416a18.44 18.44 0 0 0-5.407 13.07 18.44 18.44 0 0 0 5.407 13.072 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.714-2.07 13.056-5.415a18.44 18.44 0 0 0 5.406-13.071 18.44 18.44 0 0 0-5.406-13.071 18.392 18.392 0 0 0-13.056-5.416Zm46.646 0c-5.099 0-9.715 2.07-13.056 5.416a18.44 18.44 0 0 0-5.406 13.07 18.44 18.44 0 0 0 5.406 13.072 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.07 13.055-5.415a18.44 18.44 0 0 0 5.407-13.071 18.44 18.44 0 0 0-5.407-13.071 18.392 18.392 0 0 0-13.055-5.416Zm-233.228-46.712c-5.099 0-9.714 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.416c5.098 0 9.714-2.07 13.055-5.416a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm46.645 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.416c5.099 0 9.715-2.07 13.056-5.416a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.416c5.098 0 9.714-2.07 13.055-5.416a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm46.646 0c-5.099 0-9.715 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.416c5.098 0 9.714-2.07 13.055-5.416a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm46.645 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.416c5.099 0 9.714-2.07 13.056-5.416a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm46.646 0c-5.099 0-9.715 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.416c5.098 0 9.714-2.07 13.055-5.416a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-279.874 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.416c5.099 0 9.715-2.07 13.056-5.416a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm279.874-46.712c-5.099 0-9.715 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.069 13.055-5.415a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.714-2.069 13.056-5.415a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm-46.645 0c-5.099 0-9.715 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.069 13.055-5.415a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.415c5.098 0 9.714-2.069 13.055-5.415a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.715-2.069 13.056-5.415a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm-46.645 0c-5.099 0-9.714 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.069 13.055-5.415a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.715-2.069 13.056-5.415a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm279.874-46.713c-5.099 0-9.715 2.07-13.056 5.416a18.44 18.44 0 0 0-5.406 13.07 18.44 18.44 0 0 0 5.406 13.072 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.07 13.055-5.415a18.44 18.44 0 0 0 5.407-13.071 18.44 18.44 0 0 0-5.407-13.071 18.392 18.392 0 0 0-13.055-5.416Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.416a18.44 18.44 0 0 0-5.407 13.07 18.44 18.44 0 0 0 5.407 13.072 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.714-2.07 13.056-5.415a18.44 18.44 0 0 0 5.406-13.071 18.44 18.44 0 0 0-5.406-13.071 18.392 18.392 0 0 0-13.056-5.416Zm-46.645 0c-5.099 0-9.715 2.07-13.056 5.416a18.44 18.44 0 0 0-5.406 13.07 18.44 18.44 0 0 0 5.406 13.072 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.07 13.055-5.415a18.44 18.44 0 0 0 5.407-13.071 18.44 18.44 0 0 0-5.407-13.071 18.392 18.392 0 0 0-13.055-5.416Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.416a18.44 18.44 0 0 0-5.407 13.07 18.44 18.44 0 0 0 5.407 13.072 18.392 18.392 0 0 0 13.055 5.415c5.098 0 9.714-2.07 13.055-5.415a18.44 18.44 0 0 0 5.407-13.071 18.44 18.44 0 0 0-5.407-13.071 18.392 18.392 0 0 0-13.055-5.416Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.416a18.44 18.44 0 0 0-5.407 13.07 18.44 18.44 0 0 0 5.407 13.072 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.715-2.07 13.056-5.415a18.44 18.44 0 0 0 5.406-13.071 18.44 18.44 0 0 0-5.406-13.071 18.392 18.392 0 0 0-13.056-5.416Zm-46.645 0c-5.099 0-9.714 2.07-13.056 5.416a18.44 18.44 0 0 0-5.406 13.07 18.44 18.44 0 0 0 5.406 13.072 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.07 13.055-5.415a18.44 18.44 0 0 0 5.407-13.071 18.44 18.44 0 0 0-5.407-13.071 18.392 18.392 0 0 0-13.055-5.416Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.416a18.44 18.44 0 0 0-5.407 13.07 18.44 18.44 0 0 0 5.407 13.072 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.715-2.07 13.056-5.415a18.44 18.44 0 0 0 5.406-13.071 18.44 18.44 0 0 0-5.406-13.071 18.392 18.392 0 0 0-13.056-5.416Z"
              stroke-linejoin="square"
            />
          </g>
        </svg>
        <svg
          class="board-layer board-layer--white"
          width="335"
          height="310"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M315 1.5c5.109 0 9.734 2.07 13.081 5.419A18.442 18.442 0 0 1 333.5 20v270c0 5.109-2.07 9.734-5.419 13.081A18.442 18.442 0 0 1 315 308.5H20c-5.109 0-9.734-2.07-13.081-5.419A18.442 18.442 0 0 1 1.5 290V20c0-5.109 2.07-9.734 5.419-13.081A18.442 18.442 0 0 1 20 1.5h295Zm-7.563 241.178c-5.099 0-9.715 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.416c5.098 0 9.714-2.07 13.055-5.416a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.416c5.099 0 9.714-2.07 13.056-5.416a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm-46.645 0c-5.099 0-9.715 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.416c5.098 0 9.714-2.07 13.055-5.416a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-93.292 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.416c5.099 0 9.715-2.07 13.056-5.416a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.416c5.098 0 9.714-2.07 13.055-5.416a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-93.291 0c-5.099 0-9.714 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.416c5.098 0 9.714-2.07 13.055-5.416a18.44 18.44 0 0 0 5.407-13.07c0-5.064-2.032-9.652-5.368-12.992-3.307-3.312-7.9-5.4-13.094-5.495Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415A18.44 18.44 0 0 0 9.1 261.164a18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.416c5.099 0 9.715-2.07 13.056-5.416a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm279.874-46.712c-5.099 0-9.715 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.069 13.055-5.415a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.714-2.069 13.056-5.415a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm-46.645 0c-5.099 0-9.715 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.069 13.055-5.415a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.415c5.098 0 9.714-2.069 13.055-5.415a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.715-2.069 13.056-5.415a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm-46.645 0c-5.099 0-9.714 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.069 13.055-5.415a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415A18.44 18.44 0 0 0 9.1 214.452a18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.715-2.069 13.056-5.415a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm0-46.713c-5.098 0-9.714 2.07-13.055 5.416a18.44 18.44 0 0 0-5.407 13.07 18.44 18.44 0 0 0 5.407 13.072 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.715-2.07 13.056-5.415a18.44 18.44 0 0 0 5.406-13.071 18.44 18.44 0 0 0-5.406-13.071 18.392 18.392 0 0 0-13.056-5.416Zm46.646 0c-5.099 0-9.714 2.07-13.056 5.416a18.44 18.44 0 0 0-5.406 13.07 18.44 18.44 0 0 0 5.406 13.072 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.07 13.055-5.415a18.44 18.44 0 0 0 5.407-13.071 18.44 18.44 0 0 0-5.407-13.071 18.392 18.392 0 0 0-13.055-5.416Zm46.645 0c-5.098 0-9.714 2.07-13.055 5.416a18.44 18.44 0 0 0-5.407 13.07 18.44 18.44 0 0 0 5.407 13.072 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.715-2.07 13.056-5.415a18.44 18.44 0 0 0 5.406-13.071 18.44 18.44 0 0 0-5.406-13.071 18.392 18.392 0 0 0-13.056-5.416Zm46.646 0c-5.098 0-9.714 2.07-13.055 5.416a18.44 18.44 0 0 0-5.407 13.07 18.44 18.44 0 0 0 5.407 13.072 18.392 18.392 0 0 0 13.055 5.415c5.098 0 9.714-2.07 13.055-5.415a18.44 18.44 0 0 0 5.407-13.071 18.44 18.44 0 0 0-5.407-13.071 18.392 18.392 0 0 0-13.055-5.416Zm46.646 0c-5.099 0-9.715 2.07-13.056 5.416a18.44 18.44 0 0 0-5.406 13.07 18.44 18.44 0 0 0 5.406 13.072 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.07 13.055-5.415a18.44 18.44 0 0 0 5.407-13.071 18.44 18.44 0 0 0-5.407-13.071 18.392 18.392 0 0 0-13.055-5.416Zm46.645 0c-5.098 0-9.714 2.07-13.055 5.416a18.44 18.44 0 0 0-5.407 13.07 18.44 18.44 0 0 0 5.407 13.072 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.714-2.07 13.056-5.415a18.44 18.44 0 0 0 5.406-13.071 18.44 18.44 0 0 0-5.406-13.071 18.392 18.392 0 0 0-13.056-5.416Zm46.646 0c-5.099 0-9.715 2.07-13.056 5.416a18.44 18.44 0 0 0-5.406 13.07 18.44 18.44 0 0 0 5.406 13.072 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.07 13.055-5.415a18.44 18.44 0 0 0 5.407-13.071 18.44 18.44 0 0 0-5.407-13.071 18.392 18.392 0 0 0-13.055-5.416ZM74.209 102.541c-5.099 0-9.714 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.416c5.098 0 9.714-2.07 13.055-5.416a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm46.645 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.416c5.099 0 9.715-2.07 13.056-5.416a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.416c5.098 0 9.714-2.07 13.055-5.416a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm46.646 0c-5.099 0-9.715 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.416c5.098 0 9.714-2.07 13.055-5.416a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm46.645 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.416c5.099 0 9.714-2.07 13.056-5.416a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm46.646 0c-5.099 0-9.715 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.416c5.098 0 9.714-2.07 13.055-5.416a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-279.874 0c-5.098 0-9.714 2.07-13.055 5.415A18.44 18.44 0 0 0 9.1 121.027a18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.416c5.099 0 9.715-2.07 13.056-5.416a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415ZM307.437 55.83c-5.099 0-9.715 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.069 13.055-5.415a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.714-2.069 13.056-5.415a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm-46.645 0c-5.099 0-9.715 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.069 13.055-5.415a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.415c5.098 0 9.714-2.069 13.055-5.415a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415a18.44 18.44 0 0 0-5.407 13.071 18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.715-2.069 13.056-5.415a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415Zm-46.645 0c-5.099 0-9.714 2.07-13.056 5.415a18.44 18.44 0 0 0-5.406 13.071 18.44 18.44 0 0 0 5.406 13.071 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.069 13.055-5.415a18.44 18.44 0 0 0 5.407-13.07 18.44 18.44 0 0 0-5.407-13.072 18.392 18.392 0 0 0-13.055-5.415Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.415A18.44 18.44 0 0 0 9.1 74.315a18.44 18.44 0 0 0 5.407 13.071 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.715-2.069 13.056-5.415a18.44 18.44 0 0 0 5.406-13.07 18.44 18.44 0 0 0-5.406-13.072 18.392 18.392 0 0 0-13.056-5.415ZM307.437 9.116c-5.099 0-9.715 2.07-13.056 5.416a18.44 18.44 0 0 0-5.406 13.07 18.44 18.44 0 0 0 5.406 13.072 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.07 13.055-5.415a18.44 18.44 0 0 0 5.407-13.071 18.44 18.44 0 0 0-5.407-13.071 18.392 18.392 0 0 0-13.055-5.416Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.416a18.44 18.44 0 0 0-5.407 13.07 18.44 18.44 0 0 0 5.407 13.072 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.714-2.07 13.056-5.415a18.44 18.44 0 0 0 5.406-13.071 18.44 18.44 0 0 0-5.406-13.071 18.392 18.392 0 0 0-13.056-5.416Zm-46.645 0c-5.099 0-9.715 2.07-13.056 5.416a18.44 18.44 0 0 0-5.406 13.07 18.44 18.44 0 0 0 5.406 13.072 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.07 13.055-5.415a18.44 18.44 0 0 0 5.407-13.071 18.44 18.44 0 0 0-5.407-13.071 18.392 18.392 0 0 0-13.055-5.416Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.416a18.44 18.44 0 0 0-5.407 13.07 18.44 18.44 0 0 0 5.407 13.072 18.392 18.392 0 0 0 13.055 5.415c5.098 0 9.714-2.07 13.055-5.415a18.44 18.44 0 0 0 5.407-13.071 18.44 18.44 0 0 0-5.407-13.071A18.392 18.392 0 0 0 167.5 9.116Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.416a18.44 18.44 0 0 0-5.407 13.07 18.44 18.44 0 0 0 5.407 13.072 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.715-2.07 13.056-5.415a18.44 18.44 0 0 0 5.406-13.071 18.44 18.44 0 0 0-5.406-13.071 18.392 18.392 0 0 0-13.056-5.416Zm-46.645 0c-5.099 0-9.714 2.07-13.056 5.416a18.44 18.44 0 0 0-5.406 13.07 18.44 18.44 0 0 0 5.406 13.072 18.392 18.392 0 0 0 13.056 5.415c5.098 0 9.714-2.07 13.055-5.415a18.44 18.44 0 0 0 5.407-13.071 18.44 18.44 0 0 0-5.407-13.071A18.392 18.392 0 0 0 74.21 9.116Zm-46.646 0c-5.098 0-9.714 2.07-13.055 5.416A18.44 18.44 0 0 0 9.1 27.602a18.44 18.44 0 0 0 5.407 13.072 18.392 18.392 0 0 0 13.055 5.415c5.099 0 9.715-2.07 13.056-5.415a18.44 18.44 0 0 0 5.406-13.071 18.44 18.44 0 0 0-5.406-13.071 18.392 18.392 0 0 0-13.056-5.416Z"
            fill="#FFF"
            stroke="#000"
            stroke-width="3"
            fill-rule="evenodd"
          />
        </svg>
      </div>

      <div class="footer-rectangle"></div>
    `;
  }
}

export default new GameView();
