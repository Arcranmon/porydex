class Role {
  private _ability1: string;
  private _ability1effect: string;
  private _ability2: string;
  private _ability2effect: string;
  private _ability3: string;
  private _ability3effect: string;
  private _ability4: string;
  private _ability4effect: string;
  private _def1: number;
  private _def2: number;
  private _def3: number;
  private _hp: string;
  private _init: number;
  private _name: string;
  private _role: string;
  private _summary: string;
  private _timestamp: string;

  public constructor() {
    this._ability1 = '';
    this._ability1effect = '';
    this._ability2 = '';
    this._ability2effect = '';
    this._ability3 = '';
    this._ability3effect = '';
    this._ability4 = '';
    this._ability4effect = '';
    this._def1 = 0;
    this._def2 = 0;
    this._def3 = 0;
    this._hp = '';
    this._init = 0;
    this._name = '';
    this._role = '';
    this._summary = '';
    this._timestamp = '';
  }

  // ==========================================================
  // RAW GETTERS
  // ==========================================================
  public get Ability1() {
    return this._ability1;
  }
  public get Ability1Effect() {
    return this._ability1effect;
  }
  public get Ability2() {
    return this._ability2;
  }
  public get Ability2Effect() {
    return this._ability2effect;
  }
  public get Ability3() {
    return this._ability3;
  }
  public get Ability3Effect() {
    return this._ability3effect;
  }
  public get Ability4() {
    return this._ability4;
  }
  public get Ability4Effect() {
    return this._ability4effect;
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
  public get HP() {
    return this._hp;
  }
  public get Init() {
    return this._init;
  }
  public get Name() {
    return this._name;
  }
  public get Role() {
    return this._role;
  }
  public get Summary() {
    return this._summary;
  }
  public get Timestamp() {
    return this._timestamp;
  }

  // ==========================================================
  // UTILITY
  // ==========================================================
  public get NumAbilities() {
    if (this.Ability4 != '') {
      return 4;
    }
    if (this.Ability3 != '') {
      return 3;
    }
    if (this.Ability2 != '') {
      return 2;
    }
    if (this.Ability1 != '') {
      return 1;
    }
    return 0;
  }
  public get Image() {
    return require('@/assets/' + this.Role + '.png');
  }

  // ==========================================================
  // SAVING AND LOADING DATA
  // ==========================================================
  public static Serialize(r: Role): IRoleData {
    return {
      ability1: r.Ability1,
      ability1effect: r.Ability1Effect,
      ability2: r.Ability2,
      ability2effect: r.Ability2Effect,
      ability3: r.Ability3,
      ability3effect: r.Ability3Effect,
      ability4: r.Ability4,
      ability4effect: r.Ability4Effect,
      def1: r.Def1,
      def2: r.Def2,
      def3: r.Def3,
      init: r.Init,
      hp: r.HP,
      name: r.Name,
      role: r.Role,
      summary: r.Summary,
      timestamp: r.Timestamp,
    };
  }

  public static Deserialize(roleData: IRoleData): Role {
    const r = new Role();
    r.setRoleData(roleData);
    return r;
  }

  public setRoleData(data: IRoleData): void {
    this._ability1 = data.ability1 || '';
    this._ability1effect = data.ability1effect || '';
    this._ability2 = data.ability2 || '';
    this._ability2effect = data.ability2effect || '';
    this._ability3 = data.ability3 || '';
    this._ability3effect = data.ability3effect || '';
    this._ability4 = data.ability4 || '';
    this._ability4effect = data.ability4effect || '';
    this._def1 = data.def1 || 0;
    this._def2 = data.def2 || 0;
    this._def3 = data.def3 || 0;
    this._hp = data.hp || '';
    this._init = data.init || 0;
    this._name = data.name || '';
    this._role = data.role || '';
    this._summary = data.summary || '';
    this._timestamp = data.timestamp || '';
  }
}
export default Role;
