declare interface IMoveData {
  action: string;
  always: string;
  boost: string;
  boostdmg: string;
  category: string;
  critical: string;
  damage: string;
  damagetype: string;
  keywords: string;
  name: string;
  frequency: string;
  defense: string;
  hit: string;
  miss: string;
  special: string;
  target: string;
  type: string;
  tier: number;
  timestamp: string;
  uses: number;
}

declare interface IPokemonData {
  ability1: string;
  ability2: string;
  badskill: string;
  basicattack1: string;
  basicattack2: string;
  def1: string;
  def2: string;
  def3: string;
  defpriority: string;
  dexnumber: string;
  gift1: string;
  gift2: string;
  initiative: number;
  movement: number;
  movementtype1: string;
  name: string;
  role1: string;
  role2: string;
  role3: string;
  size: string;
  skill1: string;
  skill2: string;
  smove1: string;
  smove2: string;
  smove3: string;
  t1natmove1: string;
  t1natmove2: string;
  t1natmove3: string;
  t1tutmove1: string;
  t1tutmove2: string;
  timestamp: string;
  trait1: string;
  trait2: string;
  turf1: string;
  turf2: string;
  type1: string;
  type2: string;

  // Computed Pokemon data
  nickname: string;
  id: string;
  level: number;
  currentHP: number;
  role: IRoleData;
  ability: IAbilityData;
  skills: ISkillData;
  abilities: IAbilityData[];
  basicAttacks: IMoveData[];
  moves: IMoveData[];
  startingMoves: IMoveData[];
  tier1NaturalMoves: IMoveData[];
  tier1TutorMoves: IMoveData[];
  roles: IRoleData[];
  traits: ITraitData[];
}

declare interface IRoleData {
  ability1: string;
  ability1effect: string;
  ability2: string;
  ability2effect: string;
  ability3: string;
  ability3effect: string;
  ability4: string;
  ability4effect: string;
  def1: number;
  def2: number;
  def3: number;
  init: number;
  hp: string;
  name: string;
  role: string;
  summary: string;
  timestamp: string;
}

declare interface IAbilityData {
  action: string;
  effect: string;
  frequency: string;
  keywords: string;
  name: string;
  targets: string;
  timestamp: string;
  trigger: string;
  uses: number;
}

declare interface ISkillData {
  force: number;
  traversal: number;
  survival: number;
  finesse: number;
  focus: number;
  covertness: number;
  presence: number;
  insight: number;
  sway: number;
  deficientSkill: string;
}

declare interface ITraitData {
  armor: boolean;
  damage: boolean;
  effect: string;
  increment: number;
  name: string;
  physical: boolean;
  special: boolean;
  timestamp: string;
  value: number;
}
