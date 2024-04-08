import { labelsValues_2018 } from "../datasets/ImmigrationData2018";
import { labelsValues_2019 } from "../datasets/ImmigrationData2019";
import { labelsValues_2020 } from "../datasets/ImmigrationData2020";

const mergeDatasets = () => {
    const resultantJSON = labelsValues_2018;
    labelsValues_2019.features.forEach((datapoint: any) => {
        resultantJSON.features.push(datapoint);
    })
    return resultantJSON;
}

export const returnDataToBeUsed = (selectedIdx: number) => {
    if (selectedIdx === 0) {
        return labelsValues_2018;
    }
    else if (selectedIdx === 1) {
        return labelsValues_2019;
    }
    else if (selectedIdx === 2) {
        return mergeDatasets();
    }
    else if (selectedIdx === 3) {
        return labelsValues_2020;
    }
}