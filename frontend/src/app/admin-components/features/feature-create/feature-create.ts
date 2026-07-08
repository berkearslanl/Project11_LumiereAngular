import { Component, inject } from '@angular/core';
import * as alertifyjs from 'alertifyjs';
import { FeatureService } from '../../../services/feature-service';
import { Router } from '@angular/router';
import { Feature } from '../../../models/feature';
@Component({
  selector: 'app-feature-create',
  standalone: false,
  templateUrl: './feature-create.html',
  styleUrl: './feature-create.css',
})
export class FeatureCreate {
  private featureService = inject(FeatureService);
  private router = inject(Router);

  feature: Feature = new Feature();

  create() {
    this.featureService.createFeature(this.feature).subscribe({
      complete: () => {
        alertifyjs.success('Öne çıkan alan başarıyla eklendi.');
        this.router.navigate(['/admin/features']);
      },
      error: (err) => {
        alertifyjs.error('Bir hata meydana geldi.');
        console.log(err);
      },
    });
  }
}
