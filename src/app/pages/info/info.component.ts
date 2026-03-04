import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InfoDoc {
  title: string;
  file: string;
}

@Component({
  standalone: true,
  selector: 'app-info',
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {
  readonly docs: InfoDoc[] = [
    { title: 'AM', file: 'AM-23.doc-1.pdf' },
    { title: 'A1B', file: 'A-1-B-vel-23.doc-1.pdf' },
    { title: 'A1', file: 'A-1-23.doc-1.pdf' },
    { title: 'A2(A1-2 év)', file: 'A-2-A1-23.doc-1.pdf' },
    { title: 'A2(A1+2év)', file: 'A-2-A123.doc-1.pdf' },
    { title: 'A2', file: 'A-2-23.doc-1.pdf' },
    { title: 'A(A1-2év)', file: 'A-A1-23.doc-1.pdf' },
    { title: 'A(A1+2év)', file: 'A-A123.doc-1.pdf' },
    { title: 'A(A2-2év)', file: 'A-A2-23.doc-1.pdf' },
    { title: 'A(A2+2év)', file: 'A-A223.doc-1.pdf' },
    { title: 'A', file: 'A-23.doc-1.pdf' },
    { title: 'B', file: 'B-23.doc-1.pdf' },
  ];

  pdfPath(file: string): string {
    return `/pdf/${file}`;
  }
}
