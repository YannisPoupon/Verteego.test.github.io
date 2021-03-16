import { Component, OnInit } from '@angular/core';
import { IpFetchService } from '../ip-fetch.service';
import { Observable } from 'rxjs';
import { fadeIn, fadeOut } from '../animations';

@Component({
  selector: 'app-ip-display',
  templateUrl: './ip-display.component.html',
  styleUrls: ['./ip-display.component.scss'],
  animations : [
    fadeIn,
    fadeOut
  ]
})
export class IpDisplayComponent implements OnInit {

  constructor(private ipService : IpFetchService) { }

  ipUser$ : Observable<any>;
  display : boolean = true;

  ngOnInit(): void {}

  getIp(){
    this.ipService.fetchIp().subscribe((result) => {
      this.ipUser$=result['ip']
      console.log(this.ipUser$)
      this.display = false;
    })
  }

}
