import { MasterdataService } from '../services/masterdata.service';
import {Device} from './device.interface';

export abstract class DeviceTemplate {
  private _device: Device;

  public get device(): Device {
    return this._device;
  }

  public abstract get id(): string;
  public abstract get title(): string;

  protected constructor(protected masterdataService: MasterdataService) { }

  protected initTemplate(): void {
    this._device = this.masterdataService.getById(this.id);
  }
}
