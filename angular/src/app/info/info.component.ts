import { Component } from '@angular/core';
import { GameService } from '../game.service'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  constructor(public game: GameService) { }

}
