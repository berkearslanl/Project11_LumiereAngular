import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import * as alertifyjs from 'alertifyjs';
import { FeatureService } from '../../../services/feature-service';
import { Router } from '@angular/router';
import { Feature } from '../../../models/feature';
@Component({
  selector: 'app-feature-update',
  standalone: false,
  templateUrl: './feature-update.html',
  styleUrl: './feature-update.css',
})
export class FeatureUpdate implements OnInit {
  private featureService = inject(FeatureService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  feature: Feature = new Feature();

  @Input() id: string;

  ngOnInit(): void {
    this.featureService.getFeatureById(this.id).subscribe({
      next: (data) => {
        this.feature = data;
        this.cdr.detectChanges();
      },
    });
  }

  update() {
    this.featureService.updateFeature(this.feature.id, this.feature).subscribe({
      complete: () => {
        alertifyjs.success('Güncelleme işlemi başarılı.');
        this.router.navigate(['/admin/features']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
