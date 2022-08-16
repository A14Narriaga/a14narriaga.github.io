import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotComponent } from './common/components/bot/bot.component';
import { LoaderComponent } from './common/components/loader/loader.component';
import { CodeComponent } from './common/components/code/code.component';
import { NavbarComponent } from './containers/website/components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from './common/icons/icons.module';
import { WebsiteComponent } from './containers/website/website.component';

@NgModule({
  declarations: [
    AppComponent,
    BotComponent,
    LoaderComponent,
    CodeComponent,
    NavbarComponent,
    WebsiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
