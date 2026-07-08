import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import * as alertifyjs from 'alertifyjs';
import { TestimonialService } from '../../../services/testimonial-service';
import { Router } from '@angular/router';
import { Testimonial } from '../../../models/testimonial';
@Component({
  selector: 'app-testimonial-update',
  standalone: false,
  templateUrl: './testimonial-update.html',
  styleUrl: './testimonial-update.css',
})
export class TestimonialUpdate implements OnInit {
  private testimonialService = inject(TestimonialService);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);

  testimonial: Testimonial = new Testimonial();
  stars = [1, 2, 3, 4, 5];
  @Input() id: string;

  ngOnInit(): void {
    this.testimonialService.getTestimonialById(this.id).subscribe({
      next: (data) => {
        this.testimonial = data;
        this.cdr.detectChanges();
      },
    });
  }

  update() {
    this.testimonialService.updateTestimonial(this.testimonial.id, this.testimonial).subscribe({
      complete: () => {
        alertifyjs.success('Güncelleme işlemi başarılı.');
        this.router.navigate(['/admin/testimonials']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
