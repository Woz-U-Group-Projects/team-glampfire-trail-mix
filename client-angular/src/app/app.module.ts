import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { SafeHtmlPipe } from './helpers/safe-html.pipe';
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
import { PostCreateComponent } from './admin/post-create/post-create.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from '@app/helpers/basic-auth.interceptors';
import { ErrorInterceptor } from '@app/helpers/error.interceptors';
import { SetupwizardComponent } from './setupwizard/setupwizard.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './admin/user/user.component';
import { RegisterComponent } from './register/register.component';
import { CacheInterceptor} from '@app/helpers/cache.interceptor';

@NgModule({
  declarations: [AppComponent, AboutMeComponent, HomeComponent, BlogComponent, ContactComponent, BlogDetailComponent, SafeHtmlPipe,
                 BlogLayoutComponent, AdminLayoutComponent, LoginComponent, SettingsComponent, PostsComponent, ProfileComponent,
                 ContactMeMessagesComponent, HomePageComponent, PostEditComponent, SocialMediaComponent, PostCreateComponent,
                 SetupwizardComponent,
                 LogoutComponent,
                 UserComponent,
                 RegisterComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
    providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
