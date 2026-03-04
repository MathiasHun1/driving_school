import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { contactData, infoNav, primaryNav } from '../../content/site-content';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly year = new Date().getFullYear();
  readonly contact = contactData;
  readonly nav = primaryNav;
  readonly info = infoNav;
}
