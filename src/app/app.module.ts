import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {RatingModule} from "ng-starrating";
import {SearchComponent} from './search/search.component';
import {FormsModule} from '@angular/forms';
import {TagsComponent} from './tags/tags.component';
import {ClothPageComponent} from './cloth-page/cloth-page.component';
import {CartPageComponent} from './cart-page/cart-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {FooterComponent} from './footer/footer.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';




@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        SearchComponent,
        TagsComponent,
        ClothPageComponent,
        CartPageComponent,
        NotFoundComponent,
        FooterComponent,
        ScrollToTopComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RatingModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
