import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CareerComponent } from './pages/career/career.component';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditprofileComponent } from './pages/editprofile/editprofile.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomeComponent } from './pages/home/home.component';
import { MybookingComponent } from './pages/mybooking/mybooking.component';
import { OrderdetailsComponent } from './pages/orderdetails/orderdetails.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { RatingComponent } from './pages/rating/rating.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { TermsnconditionComponent } from './pages/termsncondition/termsncondition.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DigitalmarketingComponent } from './pages/digitalmarketing/digitalmarketing.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { AllfavouriteComponent } from './pages/allfavourite/allfavourite.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AllfavouritesComponent } from './pages/allfavourites/allfavourites.component';
import { BlogdetailComponent } from './pages/blogdetail/blogdetail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchlistComponent } from './pages/searchlist/searchlist.component';
import { SupportComponent } from './pages/support/support.component';
import { ApplicationformComponent } from './pages/applicationform/applicationform.component';
import { EnquiryformComponent } from './pages/enquiryform/enquiryform.component';
import { ReviewlistComponent } from './pages/reviewlist/reviewlist.component';
import { LandingreviewComponent } from './pages/landingreview/landingreview.component';
import { SearchComponent } from './pages/search/search.component';
import { ReviewdetailsComponent } from './pages/reviewdetails/reviewdetails.component';
import { MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule} from '@angular/material/button'
import { StepsformComponent } from './pages/stepsform/stepsform.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment} from '../environments/environment';
import { DropdownComponent } from './pages/dropdown/dropdown.component';
import {  ReactiveFormsModule,FormsModule, ControlContainer } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';


@NgModule({
 
  declarations: [
    
    AppComponent,
    CareerComponent,
    ChangepasswordComponent,
    DashboardComponent,
    EditprofileComponent,
    ErrorpageComponent,
    FeedbackComponent,
    HomeComponent,
    MybookingComponent,
    OrderdetailsComponent,
    PrivacypolicyComponent,
    RatingComponent,
    ReviewsComponent,
    TermsnconditionComponent,
    HeaderComponent,
    FooterComponent,
    DigitalmarketingComponent,
    LoginComponent,
    SignupComponent,
    FavouriteComponent,
    AllfavouriteComponent,
    AllfavouritesComponent,
    BlogComponent,
    BlogdetailComponent,
    SearchlistComponent,
    SupportComponent,
    ApplicationformComponent,
    EnquiryformComponent,
    ReviewlistComponent,
    LandingreviewComponent,
    SearchComponent,
    ReviewdetailsComponent,
    StepsformComponent,
    DropdownComponent,
    ForgetpasswordComponent,
    AboutusComponent,

    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatStepperModule,
    MatButtonModule,
    CarouselModule,
    MatCheckboxModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    
   
  ],
  
  bootstrap: [AppComponent]
  
})
export class AppModule { }
