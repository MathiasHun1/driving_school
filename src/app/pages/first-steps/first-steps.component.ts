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
  readonly equipment = [
    'Bukósisak',
    'Motoros kabát vagy protektor ing és vastag szövésű kabát',
    'Motoros kesztyű',
    'Motoros nadrág vagy térdvédő',
    'Motoros csizma vagy masszív bakancs, aminek a szára boka fölé ér',
  ];

  readonly examTasks = [
    'AM: AM, AM2',
    'A1B: M3, M4',
    'A1/A2: M2, M3, M4',
    'A (A2-vel): M2, M3, M4',
    'A: M1, M2, M3, M4',
  ];
}
