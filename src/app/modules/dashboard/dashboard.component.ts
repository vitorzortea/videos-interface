import { Component, OnInit } from '@angular/core';
import { JasonVideoService } from 'src/app/services/jason-video.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {

  constructor(
    public dataJson: JasonVideoService,
  ) { }

  ngOnInit() {
    this.dataJson.setVideo();
  }

}
