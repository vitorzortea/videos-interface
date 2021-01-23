import { Component, Input, OnInit } from '@angular/core';
import { JasonVideoService } from 'src/app/services/jason-video.service';

@Component({
  selector: 'app-box-video',
  templateUrl: './box-video.component.html',
  styleUrls: ['./box-video.component.styl']
})
export class BoxVideoComponent implements OnInit {

  @Input() videoSelect;

  constructor(
    public teste: JasonVideoService
  ) { }

  ngOnInit(){}

  addChild(){
    this.videoSelect.child.push( { title: '', button: '', url: '', child: [] } );
  }

  deleteMovie(){
    const senha = 'xN6SK8HT&7@6'
    this.videoSelect.button = senha;
    this.teste.deleteVideo(senha)
  }

}
