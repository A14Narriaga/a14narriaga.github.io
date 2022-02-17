import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})

export class SkillComponent {

  @Input() skill: any = [];

  styles = {
    "fill": "var(--primary-color)",
    "width": "1.5rem",
    "height": "1.5rem",
  }

}
