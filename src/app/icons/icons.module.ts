import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconFolderComponent } from './components/IconFolder.component';
import { IconAngularComponent } from './components/IconAngular.component';
import { IconReactComponent } from './components/IconReact.component';
import { IconJavaScriptComponent } from './components/IconJavaScript.component';
import { IconTypeScriptComponent } from './components/IconTypeScript.component';
import { IconHTML5Component } from './components/IconHTML5.component';
import { IconPugComponent } from './components/IconPug.component';
import { IconCSS3Component } from './components/IconCSS3.component';
import { IconSASSComponent } from './components/IconSASS.component';
import { IconNodeJSComponent } from './components/IconNodeJS.component';
import { IconPHPComponent } from './components/IconPHP.component';
import { IconMySQLComponent } from './components/IconMySQL.component';
import { IconRedisComponent } from './components/IconRedis.component';
import { IconFigmaComponent } from './components/IconFigma.component';
import { IconAdobeXDComponent } from './components/IconAdobeXD.component';
import { IconVSCodeComponent } from './components/IconVSCode.component';
import { IconGitComponent } from './components/IconGit.component';
import { IconVimComponent } from './components/IconVim.component';
import { IconLaTeXComponent } from './components/IconLaTeX.component';
import { IconRustComponent } from './components/IconRust.component';
import { IconWebAssemblyComponent } from './components/IconWebAssembly.component';
import { IconMenuComponent } from './components/IconMenu.component';
import { IconThemeComponent } from './components/IconTheme.component';
import { IconLanguageComponent } from './components/IconLanguage.component';
import { IconSoundComponent } from './components/IconSound.component';
import { IconLogoComponent } from './components/IconLogo.component';
import { IconItemComponent } from './components/IconItem.component';
import { IconComponent } from './icon.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    IconFolderComponent,
    IconAngularComponent,
    IconReactComponent,
    IconJavaScriptComponent,
    IconTypeScriptComponent,
    IconHTML5Component,
    IconPugComponent,
    IconCSS3Component,
    IconSASSComponent,
    IconNodeJSComponent,
    IconPHPComponent,
    IconMySQLComponent,
    IconRedisComponent,
    IconFigmaComponent,
    IconAdobeXDComponent,
    IconVSCodeComponent,
    IconGitComponent,
    IconVimComponent,
    IconLaTeXComponent,
    IconRustComponent,
    IconWebAssemblyComponent,
    IconMenuComponent,
    IconThemeComponent,
    IconLanguageComponent,
    IconSoundComponent,
    IconLogoComponent,
    IconItemComponent,
    IconComponent
  ],
  exports: [
    IconMenuComponent,
    IconThemeComponent,
    IconLanguageComponent,
    IconSoundComponent,
    IconLogoComponent,
    IconItemComponent,
    IconComponent
  ]
})

export class IconsModule { }
