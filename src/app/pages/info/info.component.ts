import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { infoNav } from '../../content/site-content';

@Component({
  standalone: true,
  selector: 'app-info',
  imports: [CommonModule, RouterLink],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {
  readonly links = infoNav;
}
