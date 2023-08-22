import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./public/home/home.component";
import { ContactusComponent } from "./public/contactus/contactus.component";
import { AboutusComponent } from "./public/aboutus/aboutus.component";
import { TeamComponent } from "./public/team/team.component";
import { ProjectNewComponent } from "./admin/project/project-new/project-new.component";
import { UserNewComponent } from "./admin/user/user-new/user-new.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'team', component: TeamComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'admin/project/new', component: ProjectNewComponent },
    { path: 'admin/user/new', component: UserNewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}