import { store } from '@/store';
import { Ability, Role, Trait, Move, Skills } from '@/class';

class Pokemon {
  private _nickname: string;
  private _id: string;

  private _level: number;
  private _currentHP: number;

  private _role: Role;
  private _ability: Ability;
  private _skills: Skills;

  // Raw values from .json
  private _ability1: string;
  private _ability2: string;
  private _badskill: string;
  private _basicattack1: string;
  private _basicattack2: string;
  private _def1: string;
  private _def2: string;
  private _def3: string;
  private _defpriority: string;
  private _dexnumber: string;
  private _gift1: string;
  private _gift2: string;
  private _initiative: number;
  private _movement: number;
  private _movementtype1: string;
  private _name: string;
  private _role1: string;
  private _role2: string;
  private _role3: string;
  private _size: string;
  private _skill1: string;
  private _skill2: string;
  private _smove1: string;
  private _smove2: string;
  private _smove3: string;
  private _t1natmove1: string;
  private _t1natmove2: string;
  private _t1natmove3: string;
  private _t1tutmove1: string;
  private _t1tutmove2: string;
  private _timestamp: string;
  private _turf1: string;
  private _turf2: string;
  private _trait1: string;
  private _trait2: string;
  private _type1: string;
  private _type2: string;

  private _abilities: Array<Ability>;
  private _basicAttacks: Array<Move>;
  private _moves: Array<Move>;
  private _startingMoves: Array<Move>;
  private _tier1NaturalMoves: Array<Move>;
  private _tier1TutorMoves: Array<Move>;
  private _roles: Array<Role>;
  private _traits: Array<Trait>;

  // ==========================================================
  // CONSTRUCTOR
  // ==========================================================
  public constructor() {
    // Raw Pokemon Data
    this._ability1 = '';
    this._ability2 = '';
    this._badskill = '';
    this._basicattack1 = '';
    this._basicattack2 = '';
    this._def1 = '';
    this._def2 = '';
    this._def3 = '';
    this._defpriority = '';
    this._dexnumber = '';
    this._gift1 = '';
    this._gift2 = '';
    this._initiative = 0;
    this._movement = 0;
    this._movementtype1 = '';
    this._name = '';
    this._role1 = '';
    this._role2 = '';
    this._role3 = '';
    this._size = '';
    this._skill1 = '';
    this._skill2 = '';
    this._smove1 = '';
    this._smove2 = '';
    this._smove3 = '';
    this._t1natmove1 = '';
    this._t1natmove2 = '';
    this._t1natmove3 = '';
    this._t1tutmove1 = '';
    this._t1tutmove2 = '';
    this._timestamp = '';
    this._trait1 = '';
    this._trait2 = '';
    this._turf1 = '';
    this._turf2 = '';
    this._type1 = '';
    this._type2 = '';

    // Pokemon Info Values
    this._abilities = [];
    this._ability = new Ability();
    this._basicAttacks = [];
    this._currentHP = 0;
    this._level = 1;
    this._moves = [];
    this._nickname = '';
    this._role = new Role();
    this._roles = [];
    this._startingMoves = [];
    this._skills = new Skills();
    this._tier1NaturalMoves = [];
    this._tier1TutorMoves = [];
    this._traits = [];
  }
  public get HasSpecies(): boolean {
    return this._name.length > 0;
  }
  // ==========================================================
  // RAW GETTERS
  // ==========================================================
  public get Ability1() {
    return this._ability1;
  }
  public get Ability2() {
    return this._ability2;
  }
  public get BadSkill() {
    return this._badskill;
  }
  public get BasicAttack1() {
    return this._basicattack1;
  }
  public get BasicAttack2() {
    return this._basicattack2;
  }
  public get Def1() {
    return this._def1;
  }
  public get Def2() {
    return this._def2;
  }
  public get Def3() {
    return this._def3;
  }
  public get DefPriority() {
    return this._defpriority;
  }
  public get DexNumber() {
    return this._dexnumber;
  }
  public get Gift1() {
    return this._gift1;
  }
  public get Gift2() {
    return this._gift2;
  }
  public get Initiative() {
    return this._initiative;
  }
  public get Movement() {
    return this._movement;
  }
  public get MovementType1() {
    return this._movementtype1;
  }
  public get Name() {
    return this._name;
  }
  public get Role1() {
    return this._role1;
  }
  public get Role2() {
    return this._role2;
  }
  public get Role3() {
    return this._role3;
  }
  public get Skill1() {
    return this._skill1;
  }
  public get Skill2() {
    return this._skill2;
  }
  public get SMove1() {
    return this._smove1;
  }
  public get SMove2() {
    return this._smove2;
  }
  public get SMove3() {
    return this._smove3;
  }
  public get Size() {
    return this._size;
  }
  public get T1NatMove1() {
    return this._t1natmove1;
  }
  public get T1NatMove2() {
    return this._t1natmove2;
  }
  public get T1TutMove1() {
    return this._t1tutmove1;
  }
  public get T1TutMove2() {
    return this._t1tutmove2;
  }
  public get T1NatMove3() {
    return this._t1natmove3;
  }
  public get Timestamp() {
    return this._timestamp;
  }
  public get Trait1() {
    return this._trait1;
  }
  public get Trait2() {
    return this._trait2;
  }
  public get Turf1() {
    return this._turf1;
  }
  public get Turf2() {
    return this._turf2;
  }
  public get Type1() {
    return this._type1;
  }
  public get Type2() {
    return this._type2;
  }

  // ==========================================================
  // SAVED POKEMON DATA GETTERS/SETTERS
  // ==========================================================
  public get Abilities() {
    return this._abilities;
  }
  public get Ability(): Ability {
    return this._ability;
  }
  public set Ability(newAbility: Ability) {
    this._ability = newAbility;
  }
  public get BasicAttacks() {
    return this._basicAttacks;
  }
  public get CurrentHP() {
    return this._currentHP;
  }
  public set CurrentHP(hp: number) {
    this._currentHP = hp;
    this.save();
  }
  public get ID() {
    return this._id;
  }
  public set ID(id: string) {
    this._id = id;
  }
  public get Level() {
    return this._level;
  }
  public get Moves() {
    return this._moves;
  }
  public get Nickname() {
    return this._nickname;
  }
  public set Nickname(name: string) {
    this._nickname = name;
  }
  public get Role(): Role {
    return this._role;
  }
  public set Role(newRole: Role) {
    this._role = newRole;
  }
  public get Roles() {
    return this._roles;
  }
  public get Skills() {
    return this._skills;
  }
  public set Skills(new_skills: Skills) {
    this._skills = new_skills;
  }
  public get StartingMoves() {
    return this._startingMoves;
  }
  public get Tier1NaturalMoves() {
    return this._tier1NaturalMoves;
  }
  public get Tier1TutorMoves() {
    return this._tier1TutorMoves;
  }
  public get Traits() {
    return this._traits;
  }

  // ==========================================================
  // ABILITY FUNCTIONS
  // ==========================================================
  public get HasAbility(): boolean {
    return this.Ability.Name.length > 0;
  }
  public get AbilityList(): Array<String> {
    if (this._ability2 != '') {
      return [this._ability1, this._ability2];
    } else {
      return [this._ability1];
    }
  }
  private SetAbilities(): void {
    this._abilities.push(store.getters.getAbilityByName(this.Ability1));
    if (this.Ability2.length > 0) {
      this._abilities.push(store.getters.getAbilityByName(this.Ability2));
    }
  }

  // ==========================================================
  // ROLE FUNCTIONS
  // ==========================================================
  public get HasRole(): boolean {
    return this.Role.Name.length > 0;
  }
  public get RoleList(): Array<String> {
    return [this._role1, this._role2, this._role3];
  }
  private SetRoles(): void {
    this._roles.push(store.getters.getRoleByName(this.Role1));
    this._roles.push(store.getters.getRoleByName(this.Role2));
    this._roles.push(store.getters.getRoleByName(this.Role3));
  }

  // ==========================================================
  // MOVE FUNCTIONS
  // ==========================================================
  public get HasStartingMove(): boolean {
    return this.Moves.length > 3;
  }
  private SetRawMoves(): void {
    this.AddMoveByName('Starting', this._smove1);
    this.AddMoveByName('Starting', this._smove2);
    this.AddMoveByName('Starting', this._smove3);
    this.AddMoveByName('T1Natural', this._t1natmove1);
    this.AddMoveByName('T1Natural', this._t1natmove2);
    this.AddMoveByName('T1Natural', this._t1natmove3);
    this.AddMoveByName('T1Tutor', this._t1tutmove1);
    this.AddMoveByName('T1Tutor', this._t1tutmove2);
  }
  private SetMoves(): void {
    this.AddMoveByName('Moves', this._smove1);
    this.AddMoveByName('Moves', this._smove2);
    this.AddMoveByName('Moves', this._smove3);
  }
  public AddStartingMove(newMove: Move): void {
    if (this.Moves.includes(newMove)) {
      return;
    }
    if (this.Moves.length > 3) {
      this.Moves.pop();
    }
    this._moves.push(newMove);
  }
  private AddMoveByName(array: string, name: string) {
    if (name == '') {
      return;
    }
    if (array == 'Moves') {
      this._moves.push(store.getters.getMoveByName(name));
    }
    if (array == 'Starting') {
      this._startingMoves.push(store.getters.getMoveByName(name));
    }
    if (array == 'T1Natural') {
      this._tier1NaturalMoves.push(store.getters.getMoveByName(name));
    }
    if (array == 'T1Tutor') {
      this._tier1TutorMoves.push(store.getters.getMoveByName(name));
    }
  }
  public AddMove(newMove: Move) {
    this._moves.push(newMove);
  }

  public RemoveMove(axeMove: Move) {
    for (let ii in this._moves) {
      if (this._moves[ii] == axeMove) {
        this.Moves.splice(Number(ii), 1);
        return;
      }
    }
  }

  public get UnknownNaturalMoves() {
    var movelist = [];
    for (let move of this.StartingMoves) {
      if (!this.IsMoveKnown(move.Name)) {
        movelist.push(move);
      }
    }
    for (let move of this.Tier1NaturalMoves) {
      if (!this.IsMoveKnown(move.Name)) {
        movelist.push(move);
      }
    }
    return movelist;
  }
  public get UnknownTutorMoves() {
    var movelist = [];
    for (let move of this.Tier1TutorMoves) {
      if (!this.IsMoveKnown(move.Name)) {
        movelist.push(move);
      }
    }
    return movelist;
  }

  private IsMoveKnown(name: string) {
    for (let move of this.Moves) {
      if (move.Name == name) {
        return true;
      }
    }
    return false;
  }

  public ValidMoveNumber(): boolean {
    if (this.Moves.length > 0 && this.Moves.length <= 6) {
      return true;
    }
    return false;
  }

  public ValidTutorMoves(): boolean {
    var numTut = 0;
    for (var move of this.Tier1TutorMoves) {
      if (!this.Moves.includes(move)) {
        numTut += 1;
      }
    }

    return numTut <= 2;
  }

  public MovesValid(): boolean {
    return this.ValidMoveNumber() && this.ValidTutorMoves();
  }

  public MovesErrorMessage(): string {
    if (!this.ValidMoveNumber()) {
      return 'Invalid number of moves; maximum is 6, minimum is 1.';
    }
    if (!this.ValidTutorMoves()) {
      return 'Too many tutor moves known; maximum is 2.';
    }
    return '\n';
  }

  // ==========================================================
  // BASIC ATTACKS
  // ==========================================================
  public get BasicAttackText() {
    if (this.BasicAttack2 != '') {
      return this.BasicAttack1 + ', ' + this.BasicAttack2;
    } else {
      return this.BasicAttack1;
    }
  }

  private SetBasicAttacks(): void {
    if (this.BasicAttack1 != '') {
      this.AddBasicAttack(this.BasicAttack1);
    }
    if (this.BasicAttack2 != '') {
      this.AddBasicAttack(this.BasicAttack2);
    }
  }

  private AddBasicAttack(basicName: string) {
    var attackName = '';
    var attackType = '';
    var attackDamage = '';
    if (basicName.includes('Melee')) {
      attackName = 'Melee Basic Attack';
    } else {
      attackName = 'Ranged Basic Attack';
    }
    if (basicName.includes('Physical')) {
      attackDamage = 'Physical';
    } else {
      attackDamage = 'Special';
    }
    if (basicName.includes('Innate')) {
      attackType = this._type1;
      this._basicAttacks.push(
        store.getters.getBasicAttackByName(attackName, attackType, attackDamage)
      );
      attackType = 'Normal';
    } else {
      attackType = basicName.substring(
        basicName.indexOf(' ') + 1,
        basicName.lastIndexOf(' ')
      );
    }
    this._basicAttacks.push(
      store.getters.getBasicAttackByName(attackName, attackType, attackDamage)
    );
  }

  // ==========================================================
  // SKILL FUNCTIONS
  // ==========================================================
  public get SkillPoints() {
    return this._level + 1 - this._skills.TotalPoints;
  }

  public get HasNoSkillPoints() {
    return this.SkillPoints == 0;
  }

  public get FavoredSkillPoints() {
    return this.Skills[this.Skill1] + this.Skills[this.Skill2];
  }

  public IsFavored(skillName: string): boolean {
    if (skillName == this.Skill1 || skillName == this.Skill2) {
      return true;
    }
    return false;
  }

  public IsDeficient(skillName: string): boolean {
    if (skillName == this.BadSkill) {
      return true;
    }
    return false;
  }

  // ==========================================================
  // GENERAL UTILITY
  // ==========================================================
  public get Monotype(): boolean {
    return this._type2 == '';
  }

  public get Tier() {
    return 1;
  }

  public get TurfList(): Array<String> {
    if (this._turf2 != '') {
      return [this._turf1, this._turf2];
    } else {
      return [this._turf1];
    }
  }

  public get GiftList(): Array<String> {
    if (this._gift2 != '') {
      return [this._gift1, this._gift2];
    } else {
      return [this._gift1];
    }
  }

  public get TraitList(): Array<String> {
    if (this._trait2 != '') {
      return [this._trait1, this._trait2];
    } else {
      return [this._trait1];
    }
  }

  public get DefenseOrder(): string {
    return this._def1 + ' > ' + this._def2 + ' > ' + this._def3;
  }

  public get Summary(): string {
    return 'Level ' + String(this._level) + ' ' + this._name;
  }

  private SetTraits() {
    if (this.Trait1.length > 0) {
      this._traits.push(store.getters.getTraitByName(this.Trait1));
    }
    if (this.Trait2.length > 0) {
      this._traits.push(store.getters.getTraitByName(this.Trait2));
    }
  }
  public get Image() {
    return require('@/assets/pokemon/' + this.DexNumber + '.png');
  }

  // ==========================================================
  // COMBAT STATS
  // ==========================================================
  public get MaxHP(): number {
    if (this.Role.HP == 'Low') {
      return Number(35) + Number(3 * Math.floor(this._level / 2));
    }
    if (this.Role.HP == 'Medium') {
      return Number(40) + Number(4 * Math.floor(this._level / 2));
    }
    if (this.Role.HP == 'High') {
      return Number(45) + Number(5 * Math.floor(this._level / 2));
    }
  }

  public get Init(): number {
    return Number(this._initiative) + Number(this.Role.Init);
  }

  public DefenseStat(stat: string): number {
    if (this.Def1 == stat) {
      return this.Role.Def1;
    }
    if (this.Def2 == stat) {
      return this.Role.Def2;
    }
    return this.Role.Def3;
  }

  public MeleeDamageDie(): number {
    if (this.Role.Ability1 == 'Melee Attacker') {
      return 10;
    } else if (this.Role.Ability1 == 'Versatile Attacker') {
      return 8;
    }
    return 6;
  }

  public RangedDamageDie(): number {
    if (this.Role.Ability1 == 'Ranged Attacker') {
      return 8;
    } else if (this.Role.Ability1 == 'Versatile Attacker') {
      return 8;
    }
    return 6;
  }

  public PhysicalDamage(): number {
    var physdamage = 0;
    for (let trait of this.Traits) {
      physdamage += trait.PhysicalDamage(this.Tier);
    }
    return physdamage;
  }
  public SpecialDamage(tier: number): number {
    var specdamage = 0;
    for (let trait of this.Traits) {
      specdamage += trait.SpecialDamage(this.Tier);
    }
    return specdamage;
  }

  public PhysicalArmor(tier: number): number {
    var physarmor = 0;
    for (let trait of this.Traits) {
      physarmor += trait.PhysicalArmor(this.Tier);
    }
    return physarmor;
  }
  public SpecialArmor(tier: number): number {
    var specarmor = 0;
    for (let trait of this.Traits) {
      specarmor += trait.SpecialArmor(this.Tier);
    }
    return specarmor;
  }

  public AddTrait(name: Trait) {
    this._traits.push(name);
  }

  // ==========================================================
  // SAVING AND LOADING DATA
  // ==========================================================
  protected save(): void {
    store.dispatch('SavePokemons');
  }

  public static Serialize(p: Pokemon): IPokemonData {
    return {
      // Raw data
      ability1: p.Ability1,
      ability2: p.Ability2,
      badskill: p.BadSkill,
      basicattack1: p.BasicAttack1,
      basicattack2: p.BasicAttack2,
      def1: p.Def1,
      def2: p.Def2,
      def3: p.Def3,
      defpriority: p.DefPriority,
      dexnumber: p.DexNumber,
      gift1: p.Gift1,
      gift2: p.Gift2,
      initiative: p.Initiative,
      movement: p.Movement,
      movementtype1: p.MovementType1,
      name: p.Name,
      role1: p.Role1,
      role2: p.Role2,
      role3: p.Role3,
      size: p.Size,
      skill1: p.Skill1,
      skill2: p.Skill2,
      smove1: p.SMove1,
      smove2: p.SMove2,
      smove3: p.SMove3,
      t1natmove1: p.T1NatMove1,
      t1natmove2: p.T1NatMove2,
      t1natmove3: p.T1NatMove3,
      t1tutmove1: p.T1TutMove1,
      t1tutmove2: p.T1TutMove2,
      timestamp: p.Timestamp,
      trait1: p.Trait1,
      trait2: p.Trait2,
      turf1: p.Turf1,
      turf2: p.Turf2,
      type1: p.Type1,
      type2: p.Type2,

      //Pokemon Save Data
      nickname: p.Nickname,
      currentHP: p.CurrentHP,
      id: p.ID,
      level: p.Level,
      role: Role.Serialize(p.Role),
      ability: Ability.Serialize(p.Ability),
      skills: Skills.Serialize(p.Skills),
      abilities: p.Abilities.map((x) => Ability.Serialize(x)),
      basicAttacks: p.BasicAttacks.map((x) => Move.Serialize(x)),
      moves: p.Moves.map((x) => Move.Serialize(x)),
      startingMoves: p.StartingMoves.map((x) => Move.Serialize(x)),
      tier1NaturalMoves: p.Tier1NaturalMoves.map((x) => Move.Serialize(x)),
      tier1TutorMoves: p.Tier1TutorMoves.map((x) => Move.Serialize(x)),
      roles: p.Roles.map((x) => Role.Serialize(x)),
      traits: p.Traits.map((x) => Trait.Serialize(x)),
    };
  }

  public static Deserialize(pokemonData: IPokemonData): Pokemon {
    const p = new Pokemon();
    p.setPokemonData(pokemonData);
    return p;
  }

  private setPokemonData(data: IPokemonData): void {
    this._ability1 = data.ability1 || '';
    this._ability2 = data.ability2 || '';
    this._badskill = data.badskill || '';
    this._basicattack1 = data.basicattack1 || '';
    this._basicattack2 = data.basicattack2 || '';
    this._def1 = data.def1 || '';
    this._def2 = data.def2 || '';
    this._def3 = data.def3 || '';
    this._defpriority = data.defpriority || '';
    this._dexnumber = data.dexnumber || '';
    this._gift1 = data.gift1 || '';
    this._gift2 = data.gift2 || '';
    this._initiative = data.initiative || 0;
    this._movement = data.movement || 0;
    this._movementtype1 = data.movementtype1 || '';
    this._name = data.name || '';
    this._role1 = data.role1 || '';
    this._role2 = data.role2 || '';
    this._role3 = data.role3 || '';
    this._size = data.size || '';
    this._skill1 = data.skill1 || '';
    this._skill2 = data.skill2 || '';
    this._smove1 = data.smove1 || '';
    this._smove2 = data.smove2 || '';
    this._smove3 = data.smove3 || '';
    this._t1natmove1 = data.t1natmove1 || '';
    this._t1natmove2 = data.t1natmove2 || '';
    this._t1natmove3 = data.t1natmove3 || '';
    this._t1tutmove1 = data.t1tutmove1 || '';
    this._t1tutmove2 = data.t1tutmove2 || '';
    this._timestamp = data.timestamp || '';
    this._trait1 = data.trait1 || '';
    this._trait2 = data.trait2 || '';
    this._turf1 = data.turf1 || '';
    this._turf2 = data.turf2 || '';
    this._type1 = data.type1 || '';
    this._type2 = data.type2 || '';

    // Only set saved values if Pokemon has them
    if ('nickname' in data) {
      this._nickname = data.nickname;
      this._id = data.id;
      this._level = data.level;
      this._role = Role.Deserialize(data.role);
      this._skills = Skills.Deserialize(data.skills);
      this._ability = Ability.Deserialize(data.ability);
      this._abilities = data.abilities.map((x) => Ability.Deserialize(x));
      this._basicAttacks = data.basicAttacks.map((x) => Move.Deserialize(x));
      this._moves = data.moves.map((x) => Move.Deserialize(x));
      this._startingMoves = data.startingMoves.map((x) => Move.Deserialize(x));
      this._tier1NaturalMoves = data.tier1NaturalMoves.map((x) =>
        Move.Deserialize(x)
      );
      this._tier1TutorMoves = data.tier1TutorMoves.map((x) =>
        Move.Deserialize(x)
      );
      this._roles = data.roles.map((x) => Role.Deserialize(x));
      this._traits = data.traits.map((x) => Trait.Deserialize(x));
    } else {
      this.SetBasicAttacks();
      this.SetRawMoves();
      this.SetMoves();
      this.SetRoles();
      this.SetAbilities();
      this.SetTraits();
      this.Skills.DeficientSkill = this.BadSkill;
    }

    this._currentHP = data.currentHP == undefined ? this.MaxHP : data.currentHP;
  }
}

export default Pokemon;
