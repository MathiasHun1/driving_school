import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly instructor = {
    name: 'Zoltán Kovács',
    experienceYears: 14,
    description:
      'ZOLI_DESC',
    certifications: [
      'State-certified motorcycle driving instructor',
      'Advanced rider safety and defensive riding courses',
      'First aid and emergency response training',
    ],
    teachingStyle:
      'Calm, structured lessons with clear demonstrations, practical exercises and direct, helpful feedback after every ride.',
  };

  readonly categories = [
    {
      code: 'A1',
      title: 'A1_CAT',
      power: 'Up to 11 kW (125 cm³)',
      idealFor: 'A1_SUB',
      bikeDescription:
        'A1_DESC',
    },
    {
      code: 'A2',
      title: 'A2_CAT',
      power: 'Up to 35 kW',
      idealFor:
        'A2_SUB',
      bikeDescription:
        'A2_DESC',
    },
    {
      code: 'A',
      title: 'A_CAT',
      power: 'No power limit',
      idealFor:
        'A_SUB',
      bikeDescription:
        'A_DESC',
    },
  ];
}

