import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'device/:id/masterdata', loadChildren: () => import('./device/master-data/master-data.module').then(m => m.MasterDataModule) },
  { path: 'device/:id/monitoring', loadChildren: () => import('./device/monitoring/monitoring.module').then(m => m.MonitoringModule) },
  { path: '',   redirectTo: '/device/1/monitoring', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
