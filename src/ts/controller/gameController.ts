import gameView from '../views/gameView';
import { pushDisc } from '../model';
import * as model from '../model.ts';

class GameController {
  constructor() {}

  init() {
    gameView.addHandlerClickBoard(this.dropDisc);
  }

  dropDisc(e: MouseEvent) {
    pushDisc({ coord: [7, 7], player: 1, id: 1 });
    gameView.render({ data: model.state });
  }
}

export default new GameController();
