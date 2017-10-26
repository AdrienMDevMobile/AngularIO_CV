import { Component, OnInit } from '@angular/core';
import { SkillTableService } from './skillTable.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [SkillTableService]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
