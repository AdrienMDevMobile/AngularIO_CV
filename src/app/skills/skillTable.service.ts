import { SkillTable } from  "./skillTable";
import { Skill } from './skill';
import { Injectable } from '@angular/core';

@Injectable()
export class SkillTableService {
  getListPages(): Promise<Skill[]> {
    
    return Promise.resolve(SkillTable);
  }
}