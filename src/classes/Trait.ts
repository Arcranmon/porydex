class Trait {
  private _armor: boolean;
  private _damage: boolean;
  private _effect: string;
  private _increment: number;
  private _name: string;
  private _physical: boolean;
  private _special: boolean;
  private _timestamp: string;
  private _value: number;

  public constructor() {
    this._armor = false;
    this._damage = false;
    this._effect = '';
    this._increment = 0;
    this._name = '';
    this._physical = false;
    this._special = false;
    this._timestamp = '';
    this._value = 0;
  }

  // ==========================================================
  // RAW GETTERS
  // ==========================================================
  public get Armor() {
    return this._armor;
  }
  public get Damage() {
    return this._damage;
  }
  public get Effect() {
    return this._effect;
  }
  public get Increment() {
    return this._increment;
  }
  public get Name() {
    return this._name;
  }
  public get Physical() {
    return this._physical;
  }
  public get Special() {
    return this._special;
  }
  public get Timestamp() {
    return this._timestamp;
  }
  public get Value() {
    return this._value;
  }

  // ==========================================================
  // DAMAGE
  // ==========================================================
  public PhysicalDamage(tier: number): number {
    if (this.Physical && this.Damage) {
      return this.Value + this.Increment * (tier - 1);
    }
    return 0;
  }
  public SpecialDamage(tier: number): number {
    if (this.Special && this.Damage) {
      return this.Value + this.Increment * (tier - 1);
    }
    return 0;
  }

  // ==========================================================
  // ARMOR
  // ==========================================================
  public PhysicalArmor(tier: number): number {
    if (this.Physical && this.Armor) {
      return this.Value + this.Increment * (tier - 1);
    }
    return 0;
  }
  public SpecialArmor(tier: number): number {
    if (this.Special && this.Armor) {
      return this.Value + this.Increment * (tier - 1);
    }
    return 0;
  }

  // ==========================================================
  // ERROR HANDLING
  // ==========================================================
  public ErrorTrait(name: string) {
    this._name = name;
    this._effect = 'Trait not found!';
  }

  // ==========================================================
  // SAVING AND LOADING DATA
  // ==========================================================
  public static Serialize(t: Trait): ITraitData {
    return {
      armor: t.Armor,
      damage: t.Damage,
      effect: t.Effect,
      increment: t.Increment,
      name: t.Name,
      physical: t.Physical,
      special: t.Special,
      timestamp: t.Timestamp,
      value: t.Value,
    };
  }

  public static Deserialize(traitData: ITraitData): Trait {
    const t = new Trait();
    t.setTraitData(traitData);
    return t;
  }

  public setTraitData(data: ITraitData): void {
    this._armor = data.armor || false;
    this._damage = data.damage || false;
    this._effect = data.effect || '';
    this._increment = data.increment || 0;
    this._name = data.name || '';
    this._physical = data.physical || false;
    this._special = data.special || false;
    this._timestamp = data.timestamp || '';
    this._value = data.value || 0;
  }
}
export default Trait;
