export const state: GameState = {
  discs: [
    // {
    //   id: 1,
    //   coord: [7, 7],
    //   player: 1,
    // },
  ],
};

export function pushDisc({ coord, player, id }: Disc) {
  const disc: Disc = { coord, player, id };
  state.discs.push(disc);
}
