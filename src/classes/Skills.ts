import { store } from '@/store';

class Skills {
  private _force: number;
  private _traversal: number;
  private _survival: number;
  private _finesse: number;
  private _focus: number;
  private _covertness: number;
  private _presence: number;
  private _insight: number;
  private _sway: number;

  private _deficientSkill: string;

  public constructor() {
    this._force = 0;
    this._traversal = 0;
    this._survival = 0;
    this._finesse = 0;
    this._focus = 0;
    this._covertness = 0;
    this._presence = 0;
    this._insight = 0;
    this._sway = 0;
    this._deficientSkill = '';
  }
  public set DeficientSkill(val: string) {
    if (this._deficientSkill != val) {
      this._deficientSkill = val;
      this[val] = -1;
    }
  }

  public get Names(): Array<string> {
    return [
      'Force',
      'Traversal',
      'Survival',
      'Finesse',
      'Focus',
      'Covertness',
      'Presence',
      'Insight',
      'Sway',
    ];
  }

  public get Force(): number {
    return this._force;
  }
  public set Force(input: number) {
    this._force = input;
  }
  public get Traversal(): number {
    return this._traversal;
  }
  public set Traversal(input: number) {
    this._traversal = input;
  }
  public get Survival(): number {
    return this._survival;
  }
  public set Survival(input: number) {
    this._survival = input;
  }
  public get Finesse(): number {
    return this._finesse;
  }
  public set Finesse(input: number) {
    this._finesse = input;
  }
  public get Focus(): number {
    return this._focus;
  }
  public set Focus(input: number) {
    this._focus = input;
  }
  public get Covertness(): number {
    return this._covertness;
  }
  public set Covertness(input: number) {
    this._covertness = input;
  }
  public get Presence(): number {
    return this._presence;
  }
  public set Presence(input: number) {
    this._presence = input;
  }
  public get Insight(): number {
    return this._insight;
  }
  public set Insight(input: number) {
    this._insight = input;
  }
  public get Sway(): number {
    return this._sway;
  }
  public set Sway(input: number) {
    this._sway = input;
  }

  public get TotalPoints(): number {
    return (
      this.Force +
      this.Traversal +
      this.Survival +
      this.Finesse +
      this.Focus +
      this.Covertness +
      this.Presence +
      this.Insight +
      this.Sway
    );
  }

  public Increment(field: string): void {
    this[field] += 1;
  }

  public Decrement(field: string): void {
    if (field == this._deficientSkill && this[field] > -1) {
      this[field] -= 1;
    } else if (this[field] > 0) {
      this[field] -= 1;
    }
  }

  // ==========================================================
  // SAVING AND LOADING DATA
  // ==========================================================
  public static Serialize(s: Skills): ISkillData {
    return {
      force: s.Force,
      traversal: s.Traversal,
      survival: s.Survival,
      finesse: s.Finesse,
      focus: s.Focus,
      covertness: s.Covertness,
      presence: s.Presence,
      insight: s.Insight,
      sway: s.Sway,
      deficientSkill: s.DeficientSkill,
    };
  }

  public static Deserialize(skillData: ISkillData): Skills {
    const s = new Skills();
    s.setSkillData(skillData);
    return s;
  }

  public setSkillData(data: ISkillData): void {
    this._force = data.force || 0;
    this._traversal = data.traversal || 0;
    this._survival = data.survival || 0;
    this._finesse = data.finesse || 0;
    this._focus = data.focus || 0;
    this._covertness = data.covertness || 0;
    this._presence = data.presence || 0;
    this._insight = data.insight || 0;
    this._sway = data.sway || 0;
    this._deficientSkill = data.deficientSkill || '';
  }
}

export default Skills;
