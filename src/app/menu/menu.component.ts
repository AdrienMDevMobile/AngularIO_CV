import { Component, OnInit } from '@angular/core';
import { ListPagesService } from '../listPages/listPages.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ListPagesService] 
})
export class MenuComponent implements OnInit {
    listPages : string[]; 
    count = 0;

    constructor(private listPagesService: ListPagesService) { }

    ngOnInit() {
        this.getListPages();
    }


    getListPages(): void {
        this.listPagesService.getListPages().then(listPages => this.listPages = listPages);
    };


    hoverIn(){
        var toShow = document.getElementById('menu_advice');
        toShow.style.visibility = 'visible';
        //console.log("mouse enter : " );
    };

    hoverOut(){
        var toShow = document.getElementById('menu_advice');
        toShow.style.visibility = 'hidden';
    };
}
