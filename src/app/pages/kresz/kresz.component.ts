import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-kresz',
  templateUrl: './kresz.component.html',
  styleUrl: './kresz.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KreszComponent {}
