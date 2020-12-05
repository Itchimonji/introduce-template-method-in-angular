import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterdataService } from '../services/masterdata.service';
import {DeviceTemplate} from '../models/device.template';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.sass']
})
export class MonitoringComponent extends DeviceTemplate implements OnInit {

  public get title(): string {
    return this.device.name + ' | ' + this.device.manufacturer;
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
