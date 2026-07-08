import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './admin-components/products/product-list/product-list';
import { CategoryList } from './admin-components/categories/category-list/category-list';
import { CategoryUpdate } from './admin-components/categories/category-update/category-update';
import { CategoryCreate } from './admin-components/categories/category-create/category-create';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Home } from './main-components/home/home';
import { MainAbout } from './main-components/main-about/main-about';
import { ProductCreate } from './admin-components/products/product-create/product-create';
import { ProductUpdate } from './admin-components/products/product-update/product-update';
import { AboutList } from './admin-components/abouts/about-list/about-list';
import { AboutCreate } from './admin-components/abouts/about-create/about-create';
import { AboutUpdate } from './admin-components/abouts/about-update/about-update';
import { ContactInfoList } from './admin-components/contact-infoes/contact-info-list/contact-info-list';
import { ContactInfoUpdate } from './admin-components/contact-infoes/contact-info-update/contact-info-update';
import { ContactInfoCreate } from './admin-components/contact-infoes/contact-info-create/contact-info-create';
import { ContactMessageList } from './admin-components/contact-messages/contact-message-list/contact-message-list';
import { ContactMessageCreate } from './admin-components/contact-messages/contact-message-create/contact-message-create';
import { ContactMessageUpdate } from './admin-components/contact-messages/contact-message-update/contact-message-update';
import { FeatureList } from './admin-components/features/feature-list/feature-list';
import { FeatureCreate } from './admin-components/features/feature-create/feature-create';
import { FeatureUpdate } from './admin-components/features/feature-update/feature-update';
import { TestimonialList } from './admin-components/testimonials/testimonial-list/testimonial-list';
import { TestimonialCreate } from './admin-components/testimonials/testimonial-create/testimonial-create';
import { TestimonialUpdate } from './admin-components/testimonials/testimonial-update/testimonial-update';
import { MainAllProducts } from './main-components/main-all-products/main-all-products';

const routes: Routes = [
  //admin routes
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      { path: 'abouts', component: AboutList }, //localhost:4200/'in sonuna abouts yazdığımızda AboutList component'ine git.
      { path: 'abouts/create', component: AboutCreate },
      { path: 'abouts/update/:id', component: AboutUpdate },
      { path: 'categories', component: CategoryList },
      { path: 'categories/update/:id', component: CategoryUpdate },
      { path: 'categories/create', component: CategoryCreate },
      { path: 'contact-infoes', component: ContactInfoList },
      { path: 'contact-infoes/create', component: ContactInfoCreate },
      { path: 'contact-infoes/update/:id', component: ContactInfoUpdate },
      { path: 'contact-messages', component: ContactMessageList },
      { path: 'contact-messages/create', component: ContactMessageCreate },
      { path: 'contact-messages/update/:id', component: ContactMessageUpdate },
      { path: 'features', component: FeatureList },
      { path: 'features/create', component: FeatureCreate },
      { path: 'features/update/:id', component: FeatureUpdate },
      { path: 'products', component: ProductList },
      { path: 'products/create', component: ProductCreate },
      { path: 'products/update/:id', component: ProductUpdate },
      { path: 'testimonials', component: TestimonialList },
      { path: 'testimonials/create', component: TestimonialCreate },
      { path: 'testimonials/update/:id', component: TestimonialUpdate },
    ],
  },

  //main routes

  //localhost'tan proje ayağa kalktığında ana sayfa direkt çalışır
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'products', component: MainAllProducts },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })], //bindto : componentler'den gönderilen input değerlerine izin verir
  exports: [RouterModule],
})
export class AppRoutingModule {}
