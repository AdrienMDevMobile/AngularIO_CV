import { Component, OnInit } from '@angular/core';
import { HeaderInfo } from './headerInfo';
import { HeaderInfoService } from './headerInfo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [HeaderInfoService] 
})
export class HeaderComponent implements OnInit {

   myheaderInfo : HeaderInfo;
   constructor(private headerInfoService: HeaderInfoService) { }

    ngOnInit() {
        this.headerInfoService.getHeaderInfo().then(myheaderInfo => this.myheaderInfo = myheaderInfo);
    }

}
