import { Component, OnInit } from '@angular/core';
import { IpFetchService } from '../ip-fetch.service';
import { Observable } from 'rxjs';
import { fadeIn, fadeInOut, fadeOut } from '../animations';

@Component({
  selector: 'app-ip-display',
  templateUrl: './ip-display.component.html',
  styleUrls: ['./ip-display.component.scss'],
  animations: [fadeIn, fadeOut, fadeInOut],
})
export class IpDisplayComponent implements OnInit {
  constructor(private ipService: IpFetchService) {}

  ipUser$: Observable<any>;
  display: boolean = true;
  error: boolean = false;

  ngOnInit(): void {}

  getIp() {
    this.ipService.fetchIp().subscribe(
      (result) => {
        this.ipUser$ = result['ip'];
        this.display = false;
      },
      () => {
        this.error = true;
        setTimeout(() => {
          this.error=false;
        }, 5000);
      }
    );
  }
}
