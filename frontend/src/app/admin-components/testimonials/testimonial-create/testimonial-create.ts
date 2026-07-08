import { Component, inject } from '@angular/core';
import * as alertifyjs from 'alertifyjs';
import { TestimonialService } from '../../../services/testimonial-service';
import { Router } from '@angular/router';
import { Testimonial } from '../../../models/testimonial';
@Component({
  selector: 'app-testimonial-create',
  standalone: false,
  templateUrl: './testimonial-create.html',
  styleUrl: './testimonial-create.css',
})
export class TestimonialCreate {
  private testimonialService = inject(TestimonialService);
  private router = inject(Router);

  testimonial: Testimonial = new Testimonial();
  stars = [1, 2, 3, 4, 5];
  create() {
    this.testimonialService.createTestimonial(this.testimonial).subscribe({
      complete: () => {
        alertifyjs.success('Yorum başarıyla eklendi.');
        this.router.navigate(['/admin/testimonials']);
      },
      error: (err) => {
        alertifyjs.error('Bir hata meydana geldi.');
        console.log(err);
      },
    });
  }
}
