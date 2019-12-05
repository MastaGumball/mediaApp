import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'media-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  myText:string = "Ibrahim, Welcome to MediaApp";
  imageUrl:string = "https://image.shutterstock.com/image-vector/welcome-poster-spectrum-brush-strokes-260nw-1146069941.jpg";
  buttonLabel:string = "Bamboozle me";
  isActive:boolean = true;



  onClick(){
    if (this.myText=="Ibrahim, Welcome to MediaApp"){
      this.buttonLabel="Unbamboozle me"
      this.myText="You got Bamboozled";
      this.imageUrl="https://cdn-media.rtl.fr/cache/fD9C_VCzsaP9vTQDBw4tjg/880v587-0/online/image/2012/0604/7749057167_trololo-man-alias-eduard-khil-un-baryton-russe-est-decede-lundi-a-l-age-de-77-ans.jpg";
      this.isActive=false;

   
    } else{
      this.buttonLabel="Bamboozle me"
      this.myText="Ibrahim, Welcome to MediaApp";
      this.imageUrl="https://image.shutterstock.com/image-vector/welcome-poster-spectrum-brush-strokes-260nw-1146069941.jpg";
      this.isActive=true;

    }
      
  }
  
  constructor() { }

  ngOnInit() {
  }

}
