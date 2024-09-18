import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'valeriatintin3e2';
  userName:string="";
  theme:string="";
  widthMenu:number=50;
  visibleMenu:boolean=true;

  alternateVisibility():void{
    this.visibleMenu=!this.visibleMenu;

  }
  setTheme(color:string):void{
    this.theme=color;

  }

}
