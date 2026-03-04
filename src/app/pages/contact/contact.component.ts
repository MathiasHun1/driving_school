import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contactData } from '../../content/site-content';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  readonly contact = contactData;
}
