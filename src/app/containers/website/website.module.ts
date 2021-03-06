import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { MatrixComponent } from './components/matrix/matrix.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CardExperienceComponent } from './components/card-experience/card-experience.component';
import { IconsModule } from '../../icons/icons.module';
import { CardBlogComponent } from './components/card-blog/card-blog.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { CardCertificationComponent } from './components/card-certification/card-certification.component';
import { SkillComponent } from './components/skill/skill.component';
import { SkillOrbitComponent } from './components/skill-orbit/skill-orbit.component';

@NgModule({
  declarations: [
    MatrixComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    CertificationsComponent,
    ExperienceComponent,
    BlogsComponent,
    CardExperienceComponent,
    CardBlogComponent,
    CardProjectComponent,
    CardCertificationComponent,
    SkillComponent,
    SkillOrbitComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    IconsModule
  ]
})

export class WebsiteModule { }
