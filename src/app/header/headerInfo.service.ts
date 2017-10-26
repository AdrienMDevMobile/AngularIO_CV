import { HeaderInfo } from  "./headerInfo";
import { MyInfos } from '../../editable/myHeaderInfo';
import { Injectable } from '@angular/core';

@Injectable()
export class HeaderInfoService {
  getHeaderInfo(): Promise<HeaderInfo> {
    
    return Promise.resolve(MyInfos);
  }
}