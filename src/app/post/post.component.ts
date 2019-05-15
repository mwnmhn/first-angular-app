import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title : string;
  @Input() content : string;
  @Input() loveIts : number;
  @Input() created_at : Date;

  post:
  {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  }

  constructor() { }

  ngOnInit() {
  }

  Love(){
    this.loveIts++;
  }

  dontLove(){
    this.loveIts--;
  }

}
