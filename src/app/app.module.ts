import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'primeng/carousel';
import { DatePipe } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { JwtModule } from '@auth0/angular-jwt';
import { GecoDialogModule } from 'angular-dynamic-dialog';
import {AccordionModule} from 'primeng/accordion';
import {DropdownModule} from 'primeng/dropdown';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';



import { LoginGuard } from './guard/login.guard';
import { AppComponent } from './app.component';
import { CarComponent } from './component/car/car.component';
import { BrandComponent } from './component/brand/brand.component';
import { NaviComponent } from './component/navi/navi.component';
import { RentalComponent } from './component/rental/rental.component';
import { CustomerComponent } from './component/customer/customer.component';
import { BrandCategoryComponent } from './component/brand-category/brand-category.component';
import { ColorComponent } from './component/color/color.component';
import { CarDetailComponent } from './component/car/car-detail/car-detail.component';
import { FilterCarPipePipe } from './pipes/filter-car-pipe.pipe';
import { FilterBrandPipePipe } from './pipes/filter-brand-pipe.pipe';
import { FilterColorPipePipe } from './pipes/filter-color-pipe.pipe';
import { CreditCardPaymentComponent } from './component/credit-card-payment/credit-card-payment.component';
import { CarFilterComponent } from './component/car-filter/car-filter.component';
import { CarAddComponent } from './component/car-add/car-add.component';
import { BrandAddComponent } from './component/brand-add/brand-add.component';
import { ColorAddComponent } from './component/color-add/color-add.component';
import { CarUpdateComponent } from './component/car-update/car-update.component';
import { BrandUpdateComponent } from './component/brand-update/brand-update.component';
import { ColorUpdateComponent } from './component/color-update/color-update.component';
import { ColorListComponent } from './component/color-list/color-list.component';
import { LoginComponent } from './component/login/login.component'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './component/register/register.component';
import { ProfilComponent } from './component/profil/profil.component';
import { ProfilUpdateComponent } from './component/profil/profil-update/profil-update.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { HoldableDirective } from './directives/holdable.directive';



@NgModule({
  declarations: [
    AppComponent,

    CarComponent,
    BrandComponent,
    NaviComponent,
    CustomerComponent,
    RentalComponent,
    BrandCategoryComponent,
    ColorComponent,
    CarDetailComponent,
    FilterCarPipePipe,
    FilterBrandPipePipe,
    FilterColorPipePipe,
    CreditCardPaymentComponent,
    CarFilterComponent,
    CreditCardPaymentComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarUpdateComponent,
    BrandUpdateComponent,
    ColorUpdateComponent,
    ColorListComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
    ProfilUpdateComponent,
    FooterComponent,
    HomeComponent,
    HoldableDirective

    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    JwtModule,
    GecoDialogModule,
    AccordionModule,
    CarouselModule,
    MenuModule,
    ConfirmDialogModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    TableModule,
    CardModule,
    SplitButtonModule,
    InputTextModule,
    DynamicDialogModule,
  

    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true},
    DatePipe,
    ConfirmationService,
    DialogService,
    LoginGuard
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
