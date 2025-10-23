import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  isMenuVisible = false;
  constructor(){

  }
  ngOnInit(): void {
  }
  title = 'Portfolio';

  downloadpdf(){
    const link = document.createElement('a')
    link.href = " images/Resume(4).pdf";
    link.download = 'Myfile.pdf';
    link.click();

  }
  toggleMenu(){
    this.isMenuVisible = !this.isMenuVisible

  }
  menubar(){
    this.isMenuVisible = !this.isMenuVisible;

  }
}
