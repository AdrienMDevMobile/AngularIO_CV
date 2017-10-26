import { ListPages } from  "./listPages";
import { Injectable } from '@angular/core';

@Injectable()
export class ListPagesService {
  getListPages(): Promise<string[]> {
    
    return Promise.resolve(ListPages);
  }
}