import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly instructor = {
    name: 'Zoltán Kovács',
    experienceYears: 14,
    description:
      'Zoltán is a patient, safety-focused instructor who has helped hundreds of beginners earn their motorcycle license. His approach breaks complex skills into simple, repeatable steps so you always know what to practice next.',
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
      title: 'Light motorcycles (A1)',
      power: 'Up to 11 kW (125 cm³)',
      idealFor: 'Young riders and commuters taking their first steps on two wheels.',
      bikeDescription:
        'We use lightweight, forgiving 125cc training bikes that are easy to balance and ideal for first-time riders.',
    },
    {
      code: 'A2',
      title: 'Mid-size motorcycles (A2)',
      power: 'Up to 35 kW',
      idealFor:
        'Riders who want more power and plan to ride on highways or longer distances.',
      bikeDescription:
        'Our A2 bikes are restricted mid-size motorcycles that offer real-world performance while remaining beginner-friendly.',
    },
    {
      code: 'A',
      title: 'Full power motorcycles (A)',
      power: 'No power limit',
      idealFor:
        'Experienced riders or upgrade courses for those who already hold A2 and want full access.',
      bikeDescription:
        'We provide well-balanced touring and naked bikes so you can safely experience full-power riding under supervision.',
    },
  ];
}

