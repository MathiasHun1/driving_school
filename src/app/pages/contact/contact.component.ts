import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contactData } from '../../content/site-content';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  readonly contact = contactData;
  readonly form = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };
}
