import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  contentPhotoCover:string="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png";
  contentTittle:string="Tittle";
  contentDescription:string="description";
  private id:string | null = "0";


  constructor(private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValueComponent(this.id)
  }

  setValueComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.contentTittle = result.tittle;
    this.contentDescription = result.description;
    this.contentPhotoCover = result.photoCover;
  }

}
