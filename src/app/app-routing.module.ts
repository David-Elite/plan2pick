import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllfavouriteComponent } from './pages/allfavourite/allfavourite.component';
import { AllfavouritesComponent } from './pages/allfavourites/allfavourites.component';
import { ApplicationformComponent } from './pages/applicationform/applicationform.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogdetailComponent } from './pages/blogdetail/blogdetail.component';
import { CareerComponent } from './pages/career/career.component';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DigitalmarketingComponent } from './pages/digitalmarketing/digitalmarketing.component';
import { EditprofileComponent } from './pages/editprofile/editprofile.component';
import { EnquiryformComponent } from './pages/enquiryform/enquiryform.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingreviewComponent } from './pages/landingreview/landingreview.component';
import { LoginComponent } from './pages/login/login.component';
import { MybookingComponent } from './pages/mybooking/mybooking.component';
import { OrderdetailsComponent } from './pages/orderdetails/orderdetails.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { RatingComponent } from './pages/rating/rating.component';
import { ReviewdetailsComponent } from './pages/reviewdetails/reviewdetails.component';
import { ReviewlistComponent } from './pages/reviewlist/reviewlist.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchlistComponent } from './pages/searchlist/searchlist.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SupportComponent } from './pages/support/support.component';
import { TermsnconditionComponent } from './pages/termsncondition/termsncondition.component';
import { StepsformComponent } from './pages/stepsform/stepsform.component';
import { DropdownComponent } from './pages/dropdown/dropdown.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component'
import { AboutusComponent } from './pages/aboutus/aboutus.component'

import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'editprofile',
    component: EditprofileComponent
  },
  {
    path: 'change-password',
    component:  ChangepasswordComponent
  },
  {
    path: 'my-booking',
    component: MybookingComponent
  },
  {
    path: 'order-details',
    component: OrderdetailsComponent
  },{
    path:'reviews',
    component: ReviewsComponent
  },
  {
    path: 'rating',
    component: RatingComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'privacypolicy',
    component: PrivacypolicyComponent
  },
  {
    path: 'termsncondition',
    component:  TermsnconditionComponent
  },
  {
    path: '404',
    component: ErrorpageComponent
  },
  {
    path: 'career',
    component: CareerComponent
  },
  {
    path: 'digital-marketing',
    component: DigitalmarketingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'favourite',
    component: AllfavouritesComponent
  },
  {
    path: 'favourite-1',
    component: FavouriteComponent
  },
  {
    path: 'favourite-2',
    component: AllfavouriteComponent
  },
  {
    path: 'blog',
    component:BlogComponent
  },
  {
    path: 'blogdetails',
    component:BlogdetailComponent
  },
  {
    path: 'search-list',
    component:SearchlistComponent
  },
  {
    path: 'support',
    component:SupportComponent
  },
  {
    path: 'application-form',
    component: ApplicationformComponent
  },
  {
    path: 'enquiry-form',
    component:EnquiryformComponent
  },
  {
    path: 'review-list',
    component: ReviewlistComponent
  },
  {
    path: 'landing-review',
    component: LandingreviewComponent
  },
  {
    path: 'search',
    component: SearchComponent,
  },
 
  {
    path: 'review-details',
    component: ReviewdetailsComponent
  },
  {
    path: 'dropdown',
    component: DropdownComponent
  },
  {
    path: 'forgetpassword',
    component: ForgetpasswordComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },

  {
    path: 'stepsform',
    component: StepsformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
