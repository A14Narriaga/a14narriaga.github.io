import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})

export class SkillComponent {

  @Input() name: string = "name";
  @Input() level: number = 10;
  @Input() icon: string = "fas fa-smile-beam";

}