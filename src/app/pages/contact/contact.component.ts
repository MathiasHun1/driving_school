import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { contactData } from '../../content/site-content';
import { EMAILJS_CONFIG } from '../../config/emailjs.config';

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
  readonly sending = signal(false);
  readonly submitStatus = signal<'idle' | 'success' | 'error'>('idle');

  async onSubmit(formRef: NgForm): Promise<void> {
    if (formRef.invalid || this.sending()) {
      return;
    }

    this.sending.set(true);
    this.submitStatus.set('idle');

    try {
      await this.sendViaEmailJs();
      this.submitStatus.set('success');
      formRef.resetForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS send failed', error);
      this.submitStatus.set('error');
    } finally {
      this.sending.set(false);
    }
  }

  private async sendViaEmailJs(): Promise<void> {
    const response = await fetch(EMAILJS_CONFIG.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: EMAILJS_CONFIG.serviceId,
        template_id: EMAILJS_CONFIG.templateId,
        user_id: EMAILJS_CONFIG.publicKey,
        template_params: {
          to_email: EMAILJS_CONFIG.toEmail,
          from_name: this.form.name.trim(),
          from_email: this.form.email.trim(),
          phone: this.form.phone.trim(),
          message: this.form.message.trim(),
          reply_to: this.form.email.trim(),
        },
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`EmailJS request failed: ${response.status} ${body}`);
    }
  }
}
