import { store } from '@/store';

class Move {
  private _action: string;
  private _always: string;
  private _boost: string;
  private _boostdmg: string;
  private _category: string;
  private _critical: string;
  private _damage: string;
  private _damagetype: string;
  private _defense: string;
  private _frequency: string;
  private _hit: string;
  private _keywords: string;
  private _miss: string;
  private _name: string;
  private _special: string;
  private _target: string;
  private _tier: number;
  private _timestamp: string;
  private _type: string;
  private _uses: number;

  // ==========================================================
  // CONSTRUCTOR
  // ==========================================================
  public constructor() {
    this._action = '';
    this._always = '';
    this._boost = '';
    this._boostdmg = '';
    this._category = '';
    this._critical = '';
    this._damage = '';
    this._damagetype = '';
    this._defense = '';
    this._frequency = '';
    this._hit = '';
    this._keywords = '';
    this._miss = '';
    this._name = '';
    this._special = '';
    this._target = '';
    this._tier = 1;
    this._timestamp = '';
    this._type = '';
    this._uses = this.MaxUses;
  }

  // ==========================================================
  // RAW GETTERS/SETTERS
  // ==========================================================
  public get Action(): string {
    return this._action;
  }
  public get Always(): string {
    return this._always;
  }
  public get Boost(): string {
    return this._boost;
  }
  public get BoostDamage(): string {
    return this._boostdmg;
  }
  public get Category(): string {
    return this._category;
  }
  public get Critical(): string {
    return this._critical;
  }
  public get Damage(): string {
    return this._damage;
  }
  public get DamageType(): string {
    return this._damagetype;
  }
  public set DamageType(type: string) {
    this._damagetype = type;
  }
  public get Defense(): string {
    return this._defense;
  }
  public get Frequency(): string {
    return this._frequency;
  }
  public get Hit(): string {
    return this._hit;
  }
  public get Keywords(): string {
    return this._keywords;
  }
  public get Name(): string {
    return this._name;
  }
  public get Miss(): string {
    return this._miss;
  }
  public get Special(): string {
    return this._special;
  }
  public get Target(): string {
    return this._target;
  }
  public get Tier(): number {
    return this._tier;
  }
  public get Timestamp(): string {
    return this._timestamp;
  }
  public get Type(): string {
    return this._type;
  }
  public set Type(type: string) {
    this._type = type;
  }
  public get Uses() {
    return this._uses;
  }
  public set Uses(use: number) {
    this._uses = use;
  }

  // ==========================================================
  // GENERAL UTILITY
  // ==========================================================
  public get HasKeywords(): boolean {
    return this._keywords != '';
  }
  public get HasAlways(): boolean {
    return this._always != '';
  }
  public get HasBoost(): boolean {
    return this._boost != '';
  }
  public get HasBoostDamage(): boolean {
    return this._boostdmg != '';
  }
  public get HasCritical(): boolean {
    return this._critical != '';
  }
  public get HasHit(): boolean {
    return this._hit != '';
  }
  public get HasMiss(): boolean {
    return this._miss != '';
  }
  public get HasSpecial(): boolean {
    return this._special != '';
  }
  public get TargetsDefense(): boolean {
    return this._defense != '';
  }
  public get DamageDealing(): boolean {
    return this._damage != '';
  }

  // ==========================================================
  // UTILITY AND DISPLAY FUNCTIONS
  // ==========================================================
  public get IsRanged(): boolean {
    return (
      this.Target.includes('Range') ||
      this.Target.includes('Line') ||
      this.Target.includes('Blast')
    );
  }
  public get IsMelee(): boolean {
    return (
      this.Target.includes('Melee') ||
      this.Target.includes('Pass') ||
      this.Target.includes('Burst')
    );
  }
  public ErrorMove(moveName: string): void {
    this._name = moveName + ' not found.';
  }
  public get TierImage() {
    return require('@/assets/tier' + this.Tier + '.png');
  }
  public get MaxUses() {
    if (this.Frequency.includes('Scene')) {
      return parseInt(this.Frequency.slice(-1));
    }
    return 0;
  }
  public DecrementUses() {
    if (this.Uses > 0) {
      this.Uses -= 1;
      this.save();
    }
  }
  public IncrementUses() {
    if (this.Uses < this.MaxUses) {
      this.Uses += 1;
      this.save();
    }
  }
  public ResetUses() {
    this.Uses = this.MaxUses;
  }
  protected save(): void {
    store.dispatch('SavePokemons');
  }

  // ==========================================================
  // SAVING AND LOADING DATA
  // ==========================================================
  public static Serialize(m: Move): IMoveData {
    return {
      action: m.Action,
      always: m.Always,
      boost: m.Boost,
      boostdmg: m.BoostDamage,
      category: m.Category,
      critical: m.Critical,
      damage: m.Damage,
      damagetype: m.DamageType,
      name: m.Name,
      frequency: m.Frequency,
      defense: m.Defense,
      hit: m.Hit,
      miss: m.Miss,
      keywords: m.Keywords,
      special: m.Special,
      target: m.Target,
      type: m.Type,
      tier: m.Tier,
      timestamp: m.Timestamp,
      uses: m.Uses,
    };
  }

  public static Deserialize(moveData: IMoveData): Move {
    const m = new Move();
    m.setMoveData(moveData);
    return m;
  }

  private setMoveData(data: IMoveData): void {
    this._action = data.action || '';
    this._always = data.always || '';
    this._boost = data.boost || '';
    this._boostdmg = data.boostdmg || '';
    this._category = data.category || '';
    this._critical = data.critical || '';
    this._damage = data.damage || '';
    this._damagetype = data.damagetype || '';
    this._defense = data.defense || '';
    this._frequency = data.frequency || '';
    this._hit = data.hit || '';
    this._keywords = data.keywords || '';
    this._miss = data.miss || '';
    this._name = data.name || '';
    this._special = data.special || '';
    this._target = data.target || '';
    this._tier = data.tier || 1;
    this._timestamp = data.timestamp || '';
    this._type = data.type || '';
    this._uses = data.uses == undefined ? this.MaxUses : data.uses;
  }
}
export default Move;
