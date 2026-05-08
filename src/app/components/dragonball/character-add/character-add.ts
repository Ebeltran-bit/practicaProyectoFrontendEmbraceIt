import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = signal('');
  powerLevel = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.powerLevel() || this.powerLevel() <= 0) {
      return;
    } 

    const newCharacter :Character ={

      id: Math.floor(Math.random() * 1000), // Generate a random ID for demonstration
      name: this.name(),
      powerLevel: this.powerLevel()
    };
      this.newCharacter.emit(newCharacter);
      this.resetFiles();
    }

    resetFiles(){
      this.name.set('');
      this.powerLevel.set(0);
    }
}
