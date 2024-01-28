// Définition du type pour un disque
type Disc = {
  coord: [number, number]; // Un tuple de deux nombres
  player: number; // L'identifiant du joueur
  id: number; // L'identifiant du jeton
};

// Définition du type pour l'état
type GameState = {
  discs: Disc[]; // Un tableau de disques
};
