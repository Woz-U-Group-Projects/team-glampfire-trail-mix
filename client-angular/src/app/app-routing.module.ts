import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogLayoutComponent } from './layout/blog-layout/blog-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { PostsComponent } from './admin/posts/posts.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { ContactMeMessagesComponent } from './admin/contact-me-messages/contact-me-messages.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PostEditComponent } from './admin/post-edit/post-edit.component';
import { AuthGuard } from '@app/_helpers/auth.guard';
import { PostCreateComponent } from './admin/post-create/post-create.component';

const routes: Routes = [

  // Blog
  {
    path: '',
    component: BlogLayoutComponent,
    children: [
      { path: '', component: BlogComponent, pathMatch: 'full' },
      { path: 'blog/:id', component: BlogDetailComponent },
      { path: 'about', component: AboutMeComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: 'settings', component: SettingsComponent },
      { path: 'blog/:id', component: PostEditComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'messages', component: ContactMeMessagesComponent},
      { path: 'posts/create', component: PostCreateComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
