import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-first-steps',
  imports: [CommonModule],
  templateUrl: './first-steps.component.html',
  styleUrl: './first-steps.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstStepsComponent {
  readonly steps = [
    'Kapcsolatfelvétel és rövid konzultáció',
    'Kategória kiválasztása (A1/A2/A)',
    'Elméleti felkészülés és adminisztráció',
    'Rutin + forgalmi gyakorlat ütemezése',
    'Vizsga előtti célzott ismétlés',
  ];
}
