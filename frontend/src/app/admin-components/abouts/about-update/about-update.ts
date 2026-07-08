import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import * as alertifyjs from 'alertifyjs';
import { AboutService } from '../../../services/about-service';
import { Router } from '@angular/router';
import { About } from '../../../models/about';
@Component({
  selector: 'app-about-update',
  standalone: false,
  templateUrl: './about-update.html',
  styleUrl: './about-update.css',
})
export class AboutUpdate implements OnInit {
  private aboutService = inject(AboutService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  about: About = new About();

  @Input() id: string;

  ngOnInit(): void {
    this.aboutService.getAboutById(this.id).subscribe({
      next: (data) => {
        ((this.about = data), this.cdr.detectChanges());
      },
    });
  }

  update() {
    this.aboutService.updateAbout(this.about.id, this.about).subscribe({
      complete: () => {
        alertifyjs.success('Güncelleme işlemi başarılı.');
        this.router.navigate(['/admin/abouts']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
