import { Component, inject } from '@angular/core';
import { TestimonialService } from '../../services/testimonial-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-main-testimonial',
  standalone: false,
  templateUrl: './main-testimonial.html',
  styleUrl: './main-testimonial.css',
})
export class MainTestimonial {
  private testimonialService = inject(TestimonialService);

  testimonials = toSignal(this.testimonialService.getTestimonials());

  stars = [1, 2, 3, 4, 5];
}
