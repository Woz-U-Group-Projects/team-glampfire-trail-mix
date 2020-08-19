import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaskDisplayComponent } from "./task-display/task-display.component";
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { BlogLayoutComponent } from './layout/blog-layout/blog-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { PostsComponent } from './admin/posts/posts.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { ContactMeMessagesComponent } from './admin/contact-me-messages/contact-me-messages.component';
import { HomePageComponent } from './admin/home-page/home-page.component';
import { PostEditComponent } from './admin/post-edit/post-edit.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@NgModule({
  declarations: [AppComponent, TaskDisplayComponent, AboutMeComponent, HomeComponent, BlogComponent, ContactComponent,
                 BlogDetailComponent, SafeHtmlPipe, BlogLayoutComponent, AdminLayoutComponent, LoginComponent, SettingsComponent, PostsComponent, ProfileComponent, ContactMeMessagesComponent, HomePageComponent, PostEditComponent, SocialMediaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
