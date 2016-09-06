import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable()
export class AddRecipeService {
    constructor() {
    }

    public loadIngredients(): Observable<Array<Ingredient>> {
        return Observable.of([{
            "uniqueId": 1,
            "singleItemName": "Ananas",
            "multipeItemsName": "Ananassen"
        },
            {
                "uniqueId": 2,
                "singleItemName": "Appel",
                "multipeItemsName": "Appels"
            },
            {
                "uniqueId": 3,
                "singleItemName": "Peer",
                "multipeItemsName": "Peren"
            },
            {
                "uniqueId": 4,
                "singleItemName": "Mango",
                "multipeItemsName": "Mango's"
            },
            {
                "uniqueId": 5,
                "singleItemName": "Mineola",
                "multipeItemsName": "Mineola's"
            },
            {
                "uniqueId": 6,
                "singleItemName": "Citroen",
                "multipeItemsName": "Citroenen"
            },
            {
                "uniqueId": 7,
                "singleItemName": "Grapefruit",
                "multipeItemsName": "Grapefruits"
            },
            {
                "uniqueId": 8,
                "singleItemName": "Mandarijn",
                "multipeItemsName": "Mandarijnen"
            },
            {
                "uniqueId": 9,
                "singleItemName": "Perssinaasappel",
                "multipeItemsName": "Perssinaasappelen"
            },
            {
                "uniqueId": 10,
                "singleItemName": "Handsinaasappel",
                "multipeItemsName": "Handsinaasappelen"
            },
            {
                "uniqueId": 11,
                "singleItemName": "Galiameloen",
                "multipeItemsName": "Galiameloenen"
            },
            {
                "uniqueId": 12,
                "singleItemName": "Banaan",
                "multipeItemsName": "Bananen"
            },
            {
                "uniqueId": 13,
                "singleItemName": "Blauwe druiven tros",
                "multipeItemsName": "Blauwe druiven trossen"
            },
            {
                "uniqueId": 14,
                "singleItemName": "Witte pitloze druiven tros",
                "multipeItemsName": "Witte pitloze druiven trossen"
            },
            {
                "uniqueId": 15,
                "singleItemName": "Limoen",
                "multipeItemsName": "Limoenen"
            },
            {
                "uniqueId": 16,
                "singleItemName": "Kiwi (gold)",
                "multipeItemsName": "Kiwi's (gold)"
            },
            {
                "uniqueId": 17,
                "singleItemName": "Kiwi (green)",
                "multipeItemsName": "Kiwi's (green)"
            },
            {
                "uniqueId": 18,
                "singleItemName": "Passievrucht",
                "multipeItemsName": "Passievruchten"
            },
            {
                "uniqueId": 19,
                "singleItemName": "Papaja",
                "multipeItemsName": "Papaja's"
            },
            {
                "uniqueId": 20,
                "singleItemName": "Aalbes tros",
                "multipeItemsName": "Aalbes trossen"
            },
            {
                "uniqueId": 21,
                "singleItemName": "Aardbei",
                "multipeItemsName": "Aardbeien"
            },
            {
                "uniqueId": 22,
                "singleItemName": "Abrikoos",
                "multipeItemsName": "Abrikozen"
            },
            {
                "uniqueId": 23,
                "singleItemName": "Blauwe bessen tros",
                "multipeItemsName": "Blauwe bessen trossen"
            },
            {
                "uniqueId": 24,
                "singleItemName": "Bloedsinaasappel",
                "multipeItemsName": "Bloedsinaasappelen"
            },
            {
                "uniqueId": 25,
                "singleItemName": "Braam",
                "multipeItemsName": "Bramen"
            },
            {
                "uniqueId": 26,
                "singleItemName": "Carambola",
                "multipeItemsName": "Carambola's"
            },
            {
                "uniqueId": 27,
                "singleItemName": "Cranberry",
                "multipeItemsName": "Cranberry's"
            },
            {
                "uniqueId": 28,
                "singleItemName": "Dadel",
                "multipeItemsName": "Dadels"
            },
            {
                "uniqueId": 29,
                "singleItemName": "Framboos",
                "multipeItemsName": "Frambozen"
            },
            {
                "uniqueId": 30,
                "singleItemName": "Gandaria",
                "multipeItemsName": "Gandaria's"
            },
            {
                "uniqueId": 31,
                "singleItemName": "Granaatappel",
                "multipeItemsName": "Granaatappels"
            },
            {
                "uniqueId": 32,
                "singleItemName": "Abrikoos",
                "multipeItemsName": "Abrikozen"
            },
            {
                "uniqueId": 33,
                "singleItemName": "Kakivrucht",
                "multipeItemsName": "Kakivruchten"
            },
            {
                "uniqueId": 34,
                "singleItemName": "Kers",
                "multipeItemsName": "Kersen"
            },
            {
                "uniqueId": 35,
                "singleItemName": "Lychee",
                "multipeItemsName": "Lychees"
            },
            {
                "uniqueId": 36,
                "singleItemName": "Nectarine",
                "multipeItemsName": "Nectarines"
            },
            {
                "uniqueId": 37,
                "singleItemName": "Olijf",
                "multipeItemsName": "Olijven"
            },
            {
                "uniqueId": 38,
                "singleItemName": "Perzik",
                "multipeItemsName": "Perziken"
            },
            {
                "uniqueId": 39,
                "singleItemName": "Pruim",
                "multipeItemsName": "Pruimen"
            },
            {
                "uniqueId": 40,
                "singleItemName": "Rode bessen tros",
                "multipeItemsName": "Rode bessen trossen"
            },
            {
                "uniqueId": 41,
                "singleItemName": "Rozenbottel",
                "multipeItemsName": "Rozenbottels"
            },
            {
                "uniqueId": 42,
                "singleItemName": "Vijg",
                "multipeItemsName": "Vijgen"
            },
            {
                "uniqueId": 43,
                "singleItemName": "Vlierbessen tros",
                "multipeItemsName": "Vlierbessen trossen"
            },
            {
                "uniqueId": 44,
                "singleItemName": "Witte bessen tros",
                "multipeItemsName": "Witte bessen trossen"
            },
            {
                "uniqueId": 45,
                "singleItemName": "Watermeloen",
                "multipeItemsName": "Watermeloenen"
            },
            {
                "uniqueId": 46,
                "singleItemName": "Zwarte bessen tros",
                "multipeItemsName": "Zwarte bessen trossen"
            }]);
    }
}
