import { Device } from './device.interface';

export class TemperatureSensor implements Device {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _manufacturer: string;
  private readonly _costs: number;

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }
  public get manufacturer(): string {
    return this._manufacturer;
  }

  public get costs(): number {
    return this._costs;
  }

  constructor(id: string, name: string, costs: number, manufacturer: string) {
    this._id = id;
    this._name = name;
    this._costs = costs;
    this._manufacturer = manufacturer;
  }
}

export class UnknownDevice implements Device {
  private readonly _id: string = 'unknown';
  private readonly _name: string = 'Unknown device';
  private readonly _manufacturer: string = 'Unknown manufacturer';
  private readonly _costs: number = 0.00;

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }
  public get manufacturer(): string {
    return this._manufacturer;
  }

  public get costs(): number {
    return this._costs;
  }
}
