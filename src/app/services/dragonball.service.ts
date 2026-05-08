import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {

    const characters = localStorage.getItem('characters');

    //If characters is drifferent from null, we parse the string and return the array of characters, otherwise we return an empty array.
    return characters ? JSON.parse(characters) : [];
}


@Injectable({providedIn: 'root'})
export class DragonballService {
    //We create an Object Array where we store the data of the characters, and we convert it into a signal, 
    // so that when we update the data, the view will be updated as well.
    characters = signal<Character[]>(loadFromLocalStorage());

    saveToLocalStorage = effect(() => {
        localStorage.setItem('characters', JSON.stringify(this.characters()));
    });

    addCharacter(character : Character) {
        this.characters.update((list) => [...list, character]);
    }
}