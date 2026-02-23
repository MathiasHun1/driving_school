import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface TrainingPackage {
  name: string;
  description: string;
  price: string;
  duration: string;
  level: string;
  isRecommended?: boolean;
}

interface Testimonial {
  name: string;
  result: string;
  message: string;
}

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly features: Feature[] = [
    {
      title: 'CERTIFIED_INSTRUCTORS' ,
      description:
        'LEARN_FROM_PATIENT_INSTRUCTORS',
      icon: '🎓',
    },
    {
      title: 'MODERN_TRAINING_BIKES',
      description:
        'TRAIN_ON_WELL_MAINTAINED_BIKES',
      icon: '🏍️',
    },
    {
      title: 'FLEXIBLE_SCHEDULES',
      description:
        '',
      icon: '⏰',
    },
  ];

  readonly trainingPackages: TrainingPackage[] = [
    {
      name: 'Starter Basics',
      description:
        'Perfect introduction to motorcycle controls, balance, and low-speed maneuvering.',
      price: '€149',
      duration: '4 hours total',
      level: 'Complete beginners',
    },
    {
      name: 'Road-Ready License',
      description:
        'Our most popular course, guiding you from first ride to test-ready confidence.',
      price: '€299',
      duration: '10 hours total',
      level: 'Beginners to test-ready',
      isRecommended: true,
    },
    {
      name: 'Confidence Booster',
      description:
        'Refine advanced skills: emergency braking, cornering, and real traffic scenarios.',
      price: '€189',
      duration: '6 hours total',
      level: 'Post-license / refresher',
    },
  ];

  readonly testimonials: Testimonial[] = [
    {
      name: 'Anna, 27',
      result: 'Passed on the first attempt',
      message:
        'I was nervous about riding, but the instructors broke everything down into simple, clear steps. I felt safe and supported the entire time.',
    },
    {
      name: 'Mark, 34',
      result: 'From zero to confident rider',
      message:
        'I had never been on a motorcycle before. By the final lesson I was riding confidently in traffic and actually enjoying it.',
    },
    {
      name: 'Sara, 22',
      result: 'Flexible around my schedule',
      message:
        'The evening and weekend lessons made it easy to fit training around my job. The school handled everything to get me test-ready.',
    },
  ];
}

