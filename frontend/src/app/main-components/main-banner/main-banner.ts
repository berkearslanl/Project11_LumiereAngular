import { Component, inject } from '@angular/core';
import { FeatureService } from '../../services/feature-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-main-banner',
  standalone: false,
  templateUrl: './main-banner.html',
  styleUrl: './main-banner.css',
})
export class MainBanner {
  private featureService = inject(FeatureService);

  features = toSignal(this.featureService.getFeatures());
}
