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

  public names: Array<string>;

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
    this.names = [
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
  public set DeficientSkill(val: string) {
    this._deficientSkill = val;
    this[val] = -1;
  }

  public get Force(): number {
    return this._force;
  }
  public set Force(val: number) {
    this._force = val;
  }
  public get Traversal(): number {
    return this._traversal;
  }
  public set Traversal(val: number) {
    this._traversal = val;
  }
  public get Survival(): number {
    return this._survival;
  }
  public set Survival(val: number) {
    this._survival = val;
  }
  public get Finesse(): number {
    return this._finesse;
  }
  public set Finesse(val: number) {
    this._finesse = val;
  }
  public get Focus(): number {
    return this._focus;
  }
  public set Focus(val: number) {
    this._focus = val;
  }
  public get Covertness(): number {
    return this._covertness;
  }
  public set Covertness(val: number) {
    this._covertness = val;
  }
  public get Presence(): number {
    return this._presence;
  }
  public set Presence(val: number) {
    this._presence = val;
  }
  public get Insight(): number {
    return this._insight;
  }
  public set Insight(val: number) {
    this._insight = val;
  }
  public get Sway(): number {
    return this._sway;
  }
  public set Sway(val: number) {
    this._sway = val;
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
}

export default Skills;
