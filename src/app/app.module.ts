import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { environment } from 'environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/page-content/about-me/about-me.component';
import { MyStackComponent } from './components/page-content/my-stack/my-stack.component';
import { SpareTimeComponent } from './components/page-content/spare-time/spare-time.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/page-content/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { GraduateComponent } from './components/page-content/graduate/graduate.component';
import { ActivityComponent } from './shared/components/activity/activity.component';
import { RemoteWorkComponent } from './components/page-content/remote-work/remote-work.component';
import { ReversePipe } from './shared/pipes/reverse-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MyStackComponent,
    SpareTimeComponent,
    HeaderComponent,
    ProjectsComponent,
    FooterComponent,
    GraduateComponent,
    ActivityComponent,
    RemoteWorkComponent,
    ReversePipe
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
