import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CategoryLink {
  title: string;
  path: string;
  subtitle: string;
}

@Component({
  standalone: true,
  selector: 'app-categories',
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  readonly links: CategoryLink[] = [
    { title: 'AM kategória', path: '/am-kategoria', subtitle: 'Segédmotoros járművek' },
    { title: 'A1 kategória B-vel', path: '/a1-kategoria-b-vel', subtitle: 'Gyorsított bővítés B jogsival' },
    { title: 'A1 kategória', path: '/a1-kategoria', subtitle: '125 cm3-ig, max 11 kW' },
    { title: 'A2 kategória', path: '/a2-kategoria', subtitle: 'Max 35 kW' },
    { title: 'A kategória', path: '/a-kategoria', subtitle: 'Korlátozás nélkül' },
  ];
}
