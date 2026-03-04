import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-category-a',
  templateUrl: './category-a.component.html',
  styleUrl: './category-a.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryAComponent {}
