import { labelsValues_2018 } from "../datasets/ImmigrationData2018";
import { labelsValues_2019 } from "../datasets/ImmigrationData2019";
import { labelsValues_2020 } from "../datasets/ImmigrationData2020";


export const returnDataToBeUsed = (selectedIdx: number) => {
    if (selectedIdx === 0) {
        return labelsValues_2018;
    }
    else if (selectedIdx === 1) {
        return labelsValues_2019;
    }
    else if (selectedIdx === 2) {
        return labelsValues_2020;
    }
}