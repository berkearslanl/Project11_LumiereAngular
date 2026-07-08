import { Component, inject } from '@angular/core';
import { AboutService } from '../../services/about-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-main-about',
  standalone: false,
  templateUrl: './main-about.html',
  styleUrl: './main-about.css',
})
export class MainAbout {
  private aboutService = inject(AboutService);

  abouts = toSignal(this.aboutService.getAbouts());
}
