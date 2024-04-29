interface Ability {
  name: string
  url: string
}

interface Version {
  name: string
  url: string
}

interface VersionDetail {
  rarity: number
  version: Version
}

interface HeldItem {
  item: Ability
  version_details: VersionDetail[]
}

interface Move {
  name: string
  url: string
}

interface MoveLearnMethod {
  name: string
  url: string
}

interface VersionGroup {
  name: string
  url: string
}

interface MoveVersionGroupDetail {
  level_learned_at: number
  move_learn_method: MoveLearnMethod
  version_group: VersionGroup
}

interface Form {
  name: string
  url: string
}

interface Sprite {
  back_default: string
  back_female: string | null
  back_shiny: string
  back_shiny_female: string | null
  front_default: string
  front_female: string | null
  front_shiny: string
  front_shiny_female: string | null
  other: {
    'dream_world': {
      front_default: string
      front_female: string | null
    }
    'home': {
      front_default: string
      front_female: string | null
      front_shiny: string
      front_shiny_female: string | null
    }
    'official-artwork': {
      front_default: string
      front_shiny: string
    }
    'showdown': {
      back_default: string
      back_female: string | null
      back_shiny: string
      back_shiny_female: string | null
      front_default: string
      front_female: string | null
      front_shiny: string
      front_shiny_female: string | null
    }
  }
}

interface VersionSprites {
  generation_i: {
    'red-blue': {
      back_default: string
      back_gray: string
      back_transparent: string
      front_default: string
      front_gray: string
      front_transparent: string
    }
    'yellow': {
      back_default: string
      back_gray: string
      back_transparent: string
      front_default: string
      front_gray: string
      front_transparent: string
    }
  }
  generation_ii: {
    crystal: {
      back_default: string
      back_shiny: string
      back_shiny_transparent: string
      back_transparent: string
      front_default: string
      front_shiny: string
      front_shiny_transparent: string
      front_transparent: string
    }
    gold: {
      back_default: string
      back_shiny: string
      front_default: string
      front_shiny: string
      front_transparent: string
    }
    silver: {
      back_default: string
      back_shiny: string
      front_default: string
      front_shiny: string
      front_transparent: string
    }
  }
  generation_iii: {
    'emerald': {
      front_default: string
      front_shiny: string
    }
    'firered-leafgreen': {
      back_default: string
      back_shiny: string
      front_default: string
      front_shiny: string
    }
    'ruby-sapphire': {
      back_default: string
      back_shiny: string
      front_default: string
      front_shiny: string
    }
  }
  generation_iv: {
    'diamond-pearl': {
      back_default: string
      back_female: string | null
      back_shiny: string
      back_shiny_female: string | null
      front_default: string
      front_female: string | null
      front_shiny: string
      front_shiny_female: string | null
    }
    'heartgold-soulsilver': {
      back_default: string
      back_female: string | null
      back_shiny: string
      back_shiny_female: string | null
      front_default: string
      front_female: string | null
      front_shiny: string
      front_shiny_female: string | null
    }
    'platinum': {
      back_default: string
      back_female: string | null
      back_shiny: string
      back_shiny_female: string | null
      front_default: string
      front_female: string | null
      front_shiny: string
      front_shiny_female: string | null
    }
  }
  generation_v: {
    'black-white': {
      animated: {
        back_default: string
        back_female: string | null
        back_shiny: string
        back_shiny_female: string | null
        front_default: string
        front_female: string | null
        front_shiny: string
        front_shiny_female: string | null
      }
      back_default: string
      back_female: string | null
      back_shiny: string
      back_shiny_female: string | null
      front_default: string
      front_female: string | null
      front_shiny: string
      front_shiny_female: string | null
    }
  }
  generation_vi: {
    'omegaruby-alphasapphire': {
      front_default: string
      front_female: string | null
      front_shiny: string
      front_shiny_female: string | null
    }
    'x-y': {
      front_default: string
      front_female: string | null
      front_shiny: string
      front_shiny_female: string | null
    }
  }
  generation_vii: {
    'icons': {
      front_default: string
      front_female: string | null
    }
    'ultra-sun-ultra-moon': {
      front_default: string
      front_female: string | null
      front_shiny: string
      front_shiny_female: string | null
    }
  }
  generation_viii: {
    icons: {
      front_default: string
      front_female: string | null
    }
  }
}

interface Stat {
  base_stat: number
  effort: number
  stat: Ability
}

interface Type {
  slot: number
  type: Ability
}

interface Pokemon {
  abilities: {
    ability: Ability
    is_hidden: boolean
    slot: number
  }[]
  base_experience: number
  cries: {
    latest: string
    legacy: string
  }
  forms: Form[]
  game_indices: {
    game_index: number
    version: Version
  }[]
  height: number
  held_items: HeldItem[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: {
    move: Move
    version_group_details: MoveVersionGroupDetail[]
  }[]
  name: string
  order: number
  past_abilities: any[]
  past_types: any[]
  species: Ability
  sprites: Sprite
  versions: VersionSprites
  stats: Stat[]
  types: Type[]
  weight: number
}
