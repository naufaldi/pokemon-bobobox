export type PokemonProps = {
  name: string;
  url: string;
};

export type PokeAPIProps = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonProps[];
};
