import { Injectable } from '@angular/core';
import { Device } from '../models/device.interface';
import {listDevice} from '../models/device-list.model';
import { UnknownDevice} from '../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class MasterdataService {

  getById(id: string): Device {
    const result: Device = listDevice.find(x => x.id === id);
    if (result == null) {
      return new UnknownDevice();
    }
    return result;
  }
}
