import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    imports:[UpperCasePipe],
    styles: [`
        button {
            padding: 5px;
            margin: 5px 10px;
            width: 75px;
        }
    `]
    
})

export class HeroPageComponent {

    name = signal('IronMan');   
    age = signal(45);

    heroDesctiption = computed(() => {
        return `${this.name()} - ${this.age()} `
    });

    getHeroDescription() {
        return `${this.name()} - ${this.age()} years old`;
    }

    changeHero() {
        this.name.set('Spider-Man');
        this.age.set(25);
    }

    resetForm() {
        this.name.set('IronMan');
        this.age.set(45);   
    }    

    changeAge() {
        this.age.set(50);
    }

}