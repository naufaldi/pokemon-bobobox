//  type checking for pokemon
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

export type PokemonTypesProps = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
export type PokemonDetailsProps = {
  name: string;
  id: number;
  height: number;
  weight: number;
  base_experience: number;
  types: PokemonTypesProps[];

  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    };
  }[];
  sprites: {
    front_default: string;
    back_default: string;
    other: {
      dream_world: {
        front_default: string;
        front_female: string | null;
      };
      home: {
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_femaley: string;
      };
      'official-artwork': {
        front_default: string;
      };
    };
  };
  species: {
    name: string;
    url: string;
  };
  stats: StatsProps[];
  abilities: AbilityProps[];
};

export type StatsProps = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type AbilityProps = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};
