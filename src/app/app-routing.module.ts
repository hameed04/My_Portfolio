import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',  // Enables fragment scrolling (#section)
  scrollPositionRestoration: 'enabled' // Scrolls to the top on navigation
};

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:AppComponent},
  {
  path:'about',component:AboutmeComponent
},{
  path:'experience',component:ExperienceComponent
},{
  path:'project',component:ProjectsComponent
},
{
  path:'contact',component:ContactComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
