import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { instructors } from '../../content/site-content';

@Component({
  standalone: true,
  selector: 'app-instructors',
  imports: [CommonModule],
  templateUrl: './instructors.component.html',
  styleUrl: './instructors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstructorsComponent {
  readonly cards = instructors;
}
