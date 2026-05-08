import { Component, signal } from "@angular/core";
import { NgStyle } from "@angular/common";

interface Character{
    id: number;
    name: string;
    powerLevel: number;
}

@Component({
    templateUrl: './dragonball-page.component.html',
    imports: [NgStyle],

})


export class DragonBallPageComponent {

    //We must create signals for each property that we want to update in the view
    name = signal('');
    powerLevel = signal(0);

    //We create an Object Array where we store the data of the characters, and we convert it into a signal, 
    // so that when we update the data, the view will be updated as well.
    characters = signal<Character[]>([
        { id: 1, name: 'Goku', powerLevel: 9002 },
        // { id: 2, name: 'Vegeta', powerLevel: 8500 },
        // { id: 3, name: 'Gohan', powerLevel: 7000 },
        // { id: 4, name: 'Yamcha', powerLevel: 500 },

    ]);

    addCharacter() {
        if (!this.name() || !this.powerLevel() || this.powerLevel() <= 0) {
            return;
        }

        const newCharacter :Character ={

            id: this.characters().length + 1,
            name: this.name(),
            powerLevel: this.powerLevel()
        };
        this.characters.update((list) => [...list, newCharacter]);
        this.resetFiles();
    }

    resetFiles(){
        this.name.set('');
        this.powerLevel.set(0);
    }

}