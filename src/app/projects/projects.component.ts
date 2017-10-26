import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    //Pour le zoom, l'element à l'id "zoom" est fixé au millieu de la page, mais invisible.
    //Au moment où l'utilisateur clique, cet element récupère l'image qui l'a cliquée
    zoom_in(photo : string){
        var import_html = "<img class='big' src='assets/img/Projects/PostIt.png'>" ;

        var component = document.getElementById("zoom_picture");
        component.style.visibility="visible";
        component.innerHTML = import_html;
    };

    //Cache l'element zoom
    return(){
        var component = document.getElementById("zoom_picture");
        component.style.visibility="hidden";
    };

    constructor() { }

    ngOnInit() {
    }

}
