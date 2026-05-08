import { Component, inject} from "@angular/core";
import { ChararterList } from "../../components/dragonball/chararter-list/chararter-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from "../../services/dragonball.service";

@Component({
    templateUrl: './dragonball-super-page.component.html',
    imports: [ChararterList, CharacterAdd],
    selector: 'dragonball-super',

})

export class DragonBallSuperPageComponent {

    public dragonballService = inject(DragonballService);


}   