import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterdataService } from '../services/masterdata.service';
import { Device } from '../models/device.interface';
import {DeviceTemplate} from '../models/device.template';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.sass']
})
export class MasterDataComponent extends DeviceTemplate implements OnInit {

  public get title(): string {
    return this.device.id + ' | ' + this.device.name;
  }

  public get id(): string {
    return this.activatedRoute.snapshot.paramMap.get('id');
  }

  constructor(private activatedRoute: ActivatedRoute, protected masterdataService: MasterdataService) {
    super(masterdataService);
  }

  ngOnInit(): void {
    this.initTemplate();
  }
}
