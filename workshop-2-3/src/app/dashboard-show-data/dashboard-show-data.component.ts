import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ApiDataService } from '../service/api-data.service';
import { JsonPipe, NgFor } from '@angular/common';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-dashboard-show-data',
  standalone: true,
  imports: [HttpClientModule, JsonPipe, NgFor],
  providers: [ApiDataService],
  templateUrl: './dashboard-show-data.component.html',
  styleUrl: './dashboard-show-data.component.css'
})
export class DashboardShowDataComponent {
  @Input() data!: Object;
  constructor(private apiDataService: ApiDataService) { }

}