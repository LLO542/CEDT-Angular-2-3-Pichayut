import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiDataService } from '../service/api-data.service';
import { DashboardShowDataComponent } from "../dashboard-show-data/dashboard-show-data.component";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  providers: [ApiDataService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [HttpClientModule, FormsModule, DashboardShowDataComponent, JsonPipe]
})
export class DashboardComponent {
  url: string = 'https://www.boredapi.com/api/activity';
  data: Object = {};
  sendData(): void {
    // send data to subscribers via observable subject
    this.data = this.dataSharingService.getData(this.url);
  }
  constructor(private dataSharingService: ApiDataService) {
  }
}