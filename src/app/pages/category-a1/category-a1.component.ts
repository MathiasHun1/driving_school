import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-category-a1',
  templateUrl: './category-a1.component.html',
  styleUrl: './category-a1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryA1Component {}
