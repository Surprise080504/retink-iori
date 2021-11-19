import { Component, OnInit } from '@angular/core';
import { SevService } from 'src/app/core/services/sev.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: any[] = [];
  constructor(private serService: SevService) {}

  ngOnInit(): void {
    this.serService.getServices().subscribe((data) => {
      this.services = data;
    });
  }
}
