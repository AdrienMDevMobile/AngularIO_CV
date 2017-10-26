//Directive that defines the action when the users scrolls.
import { Directive, Output, HostListener, EventEmitter, OnInit } from '@angular/core';
import { ListPagesService } from './listPages/listPages.service'

@Directive({ selector: '[mouseWheel]', providers: [ListPagesService]  })
export class MouseWheelDirective implements OnInit{
    @Output() mouseWheelUp = new EventEmitter();
    @Output() mouseWheelDown = new EventEmitter();
  
    //Initialisation
    currentPage : number; //sauvegarde sur quelle page est l'utilisateur.
    listPages : string[];
    constructor(private listPagesService: ListPagesService) { }
    
    getListPages(): void {
        this.listPagesService.getListPages().then(listPages => this.listPages = listPages);
    }

    ngOnInit(): void {
        this.currentPage = 0;
        this.getListPages();
    } 

    //Definition des evenements du scroll.
    //Il creer trois hostlistener differents pour les differents navigateurs.
    @HostListener('mousewheel', ['$event']) onMouseWheelChrome(event: any) {
        this.mouseWheelFunc(event);
    }
    @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
        this.mouseWheelFunc(event);
    }
    @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
        this.mouseWheelFunc(event);
    }
  
    //Methode appelé par les HostListener
    mouseWheelFunc(event: any) {
  
        var event = window.event || event; // old IE support
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    
        //Recupère si l'utilisateur scroll vers le haut ou vers le bas.
        if(delta > 0) {
            this.currentPage--;
            this.currentPage = this.changeCurrentPage(this.currentPage);
        
        } else if(delta < 0) {
            this.currentPage++;
            this.currentPage = this.changeCurrentPage(this.currentPage);
        }
    
        // for IE
        event.returnValue = false;
        // for Chrome and Firefox
        if(event.preventDefault) {
            event.preventDefault();
        }
    
    }
  
  //Change le numéro de page sur lequel est l'utilisateur et clique sur le lien pour changer de page.
  changeCurrentPage(numPage : number ):number{
    this.getListPages();
  
    if(numPage >= this.listPages.length){
        numPage = this.listPages.length -1;
    } else if (numPage < 0) {
        numPage = 0;
    }
    
    var toClick = document.getElementById(this.listPages[numPage]);
    toClick.click();
    
    return numPage;
  }
  
  
}