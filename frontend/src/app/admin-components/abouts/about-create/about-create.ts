import { Component, inject } from '@angular/core';
import { AboutService } from '../../../services/about-service';
import { Router } from '@angular/router';
import { About } from '../../../models/about';
import * as alertifyjs from 'alertifyjs'; //alertify
@Component({
  selector: 'app-about-create',
  standalone: false,
  templateUrl: './about-create.html',
  styleUrl: './about-create.css',
})
export class AboutCreate {
  private aboutService = inject(AboutService);
  private router = inject(Router);

  about: About = new About();

  create() {
    this.aboutService.createAbout(this.about).subscribe({
      complete: () => {
        alertifyjs.success('Hakkımızda verisi başarıyla eklendi.');
        this.router.navigate(['/admin/abouts']);
      },
      error: (err) => {
        alertifyjs.error('Bir hata meydana geldi.');
        console.log(err);
      },
    });
  }
}
