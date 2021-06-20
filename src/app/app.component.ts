import { Component, Input } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading = false;
  constructor(private _wikipediaService: WikipediaService) {}
  pages = [];
  onTerm(term: string) {
    this.isLoading = true;
    this._wikipediaService.search(term).subscribe((res: any) => {
      this.pages = res.query.search;
      console.log(this.pages);
      this.isLoading = false;
    });
  }
}
