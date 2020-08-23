import { store } from '@/store';

class Ability {
  private _action: string;
  private _effect: string;
  private _frequency: string;
  private _keywords: string;
  private _name: string;
  private _targets: string;
  private _timestamp: string;
  private _trigger: string;
  private _uses: number;

  public constructor() {
    this._action = '';
    this._effect = '';
    this._frequency = '';
    this._keywords = '';
    this._name = '';
    this._targets = '';
    this._timestamp = '';
    this._trigger = '';
    this._uses = this.MaxUses;
  }

  public get Action() {
    return this._action;
  }
  public get Effect() {
    return this._effect;
  }
  public get Frequency() {
    return this._frequency;
  }
  public get Keywords() {
    return this._keywords;
  }
  public get Name() {
    return this._name;
  }
  public get Targets() {
    return this._targets;
  }
  public get Timestamp() {
    return this._timestamp;
  }
  public get Trigger() {
    return this._trigger;
  }
  public get Uses() {
    return this._uses;
  }
  public set Uses(use: number) {
    this._uses = use;
  }

  // ==========================================================
  // UTILITY
  // ==========================================================
  public get EffectText() {
    return '**Effect:** ' + this._effect;
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
  public static Serialize(a: Ability): IAbilityData {
    return {
      action: a.Action,
      effect: a.Effect,
      frequency: a.Frequency,
      keywords: a.Keywords,
      name: a.Name,
      targets: a.Targets,
      timestamp: a.Timestamp,
      trigger: a.Trigger,
      uses: a.Uses,
    };
  }

  public static Deserialize(abilityData: IAbilityData): Ability {
    const a = new Ability();
    a.setAbilityData(abilityData);
    return a;
  }

  public setAbilityData(data: IAbilityData): void {
    this._action = data.action || '';
    this._effect = data.effect || '';
    this._frequency = data.frequency || '';
    this._keywords = data.keywords || '';
    this._name = data.name || '';
    this._targets = data.targets || '';
    this._timestamp = data.timestamp || '';
    this._trigger = data.trigger || '';
    this._uses = data.uses == undefined ? this.MaxUses : data.uses;
  }
}
export default Ability;
