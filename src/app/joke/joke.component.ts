import { Output, Input, EventEmitter, Component } from "@angular/core";
import { Joke } from "../joke";


@Component({
  selector: 'joke',
  templateUrl: 'joke.component.html'
})

export class JokeComponent {
  @Input('joke')data: Joke;
  
  @Output() jokeDeleted = new EventEmitter<Joke>();
  
  deleteJoke(joke) {
    this.jokeDeleted.emit(this.data);
  }
  
}
