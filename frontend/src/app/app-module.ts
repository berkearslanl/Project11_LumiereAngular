import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductList } from './admin-components/products/product-list/product-list';
import { CategoryList } from './admin-components/categories/category-list/category-list';
import { provideHttpClient } from '@angular/common/http';
import { CategoryUpdate } from './admin-components/categories/category-update/category-update';
import { FormsModule } from '@angular/forms';
import { CategoryCreate } from './admin-components/categories/category-create/category-create';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Home } from './main-components/home/home';
import { MainAbout } from './main-components/main-about/main-about';
import { MainProduct } from './main-components/main-product/main-product';
import { MainBanner } from './main-components/main-banner/main-banner';
import { MainTestimonial } from './main-components/main-testimonial/main-testimonial';
import { ProductCreate } from './admin-components/products/product-create/product-create';
import { ProductUpdate } from './admin-components/products/product-update/product-update';
import { AboutCreate } from './admin-components/abouts/about-create/about-create';
import { AboutList } from './admin-components/abouts/about-list/about-list';
import { AboutUpdate } from './admin-components/abouts/about-update/about-update';
import { ContactInfoCreate } from './admin-components/contact-infoes/contact-info-create/contact-info-create';
import { ContactInfoList } from './admin-components/contact-infoes/contact-info-list/contact-info-list';
import { ContactInfoUpdate } from './admin-components/contact-infoes/contact-info-update/contact-info-update';
import { FeatureList } from './admin-components/features/feature-list/feature-list';
import { FeatureCreate } from './admin-components/features/feature-create/feature-create';
import { FeatureUpdate } from './admin-components/features/feature-update/feature-update';
import { ContactMessageList } from './admin-components/contact-messages/contact-message-list/contact-message-list';
import { ContactMessageCreate } from './admin-components/contact-messages/contact-message-create/contact-message-create';
import { ContactMessageUpdate } from './admin-components/contact-messages/contact-message-update/contact-message-update';
import { TestimonialList } from './admin-components/testimonials/testimonial-list/testimonial-list';
import { TestimonialCreate } from './admin-components/testimonials/testimonial-create/testimonial-create';
import { TestimonialUpdate } from './admin-components/testimonials/testimonial-update/testimonial-update';
import { MainContactForm } from './main-components/main-contact-form/main-contact-form';
import { MainContactInfo } from './main-components/main-contact-info/main-contact-info';
import { MainAllProducts } from './main-components/main-all-products/main-all-products';

@NgModule({
  declarations: [
    App,
    ProductList,
    CategoryList,
    CategoryUpdate,
    CategoryCreate,
    AdminLayout,
    MainLayout,
    Home,
    MainAbout,
    MainProduct,
    MainBanner,
    MainTestimonial,
    ProductCreate,
    ProductUpdate,
    AboutCreate,
    AboutList,
    AboutUpdate,
    ContactInfoCreate,
    ContactInfoList,
    ContactInfoUpdate,
    FeatureList,
    FeatureCreate,
    FeatureUpdate,
    ContactMessageList,
    ContactMessageCreate,
    ContactMessageUpdate,
    TestimonialList,
    TestimonialCreate,
    TestimonialUpdate,
    MainContactForm,
    MainContactInfo,
    MainAllProducts,
  ], //oluşturulan tüm componentler'in buraya eklenmesi gerekiyor. biz terminalden oluşturduğumuz için otomatik ekleniyor
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()], //httpclient'i buraya eklememiz gerekiyor
  bootstrap: [App],
})
export class AppModule {}
