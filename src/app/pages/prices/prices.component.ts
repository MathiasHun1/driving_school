import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PriceRow {
  category: string;
  theoryAdmin: number;
  practice: number;
  total: number;
}

@Component({
  standalone: true,
  selector: 'app-prices',
  imports: [CommonModule],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricesComponent {
  readonly rows: PriceRow[] = [
    { category: 'AM', theoryAdmin: 55000, practice: 121000, total: 176000 },
    { category: 'A1', theoryAdmin: 55000, practice: 187000, total: 242000 },
    { category: 'A1 (B-vel)', theoryAdmin: 55000, practice: 33000, total: 88000 },
    { category: 'A2', theoryAdmin: 55000, practice: 187000, total: 242000 },
    {
      category: 'A2 (A1-el 2 éven belül)',
      theoryAdmin: 20000,
      practice: 143000,
      total: 163000,
    },
    {
      category: 'A2 (A1-el 2 éven túl)',
      theoryAdmin: 55000,
      practice: 99000,
      total: 154000,
    },
    { category: 'A (+24)', theoryAdmin: 55000, practice: 297000, total: 352000 },
    {
      category: 'A (Ak, A2 2 éven belül)',
      theoryAdmin: 20000,
      practice: 143000,
      total: 163000,
    },
    {
      category: 'A (Ak, A2 2 éven túl)',
      theoryAdmin: 55000,
      practice: 99000,
      total: 154000,
    },
    {
      category: 'A (A1 2 éven belül)',
      theoryAdmin: 20000,
      practice: 187000,
      total: 207000,
    },
    {
      category: 'A (A1 2 éven túl)',
      theoryAdmin: 55000,
      practice: 121000,
      total: 176000,
    },
    { category: 'B', theoryAdmin: 55000, practice: 360000, total: 415000 },
  ];

  formatHuf(value: number): string {
    return `${new Intl.NumberFormat('hu-HU').format(value)} Ft`;
  }
}
