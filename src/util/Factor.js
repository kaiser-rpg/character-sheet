import {
    ADD_ALL_ACTION_FACTOR,
    ADD_DEED_FACTOR,
    ADD_INNATE_FACTOR,
    ADD_INVEST_FACTOR,
    ADD_NATURAL_FACTOR,
    ADD_POWER_FACTOR,
    ADD_QUALITY_FACTOR
} from "../actions/super-types";


export function sumFactors(factorList) {
    let innateSum = 0;
    let naturalSum = 0;
    let investSum = 0;
    let allActionSum = 0;
    let deedSum = 0;
    let qualityBonus = 0;
    let qualityPenalty = 0;
    let powerBonus = 0;
    let powerPenalty = 0;

    for (let i in factorList) {
        if (!factorList.hasOwnProperty(i))
            continue;

        let factor = factorList[i];
        switch (factor.type) {
            case ADD_INNATE_FACTOR:
                innateSum += factor.value;
                break;
            case ADD_NATURAL_FACTOR:
                naturalSum += factor.value;
                break;
            case ADD_INVEST_FACTOR:
                investSum += factor.value;
                break;
            case ADD_ALL_ACTION_FACTOR:
                allActionSum = factor.value;
                break;
            case ADD_DEED_FACTOR:
                deedSum = factor.value;
                break;
            case ADD_QUALITY_FACTOR:
                if (factor.value > 0) {
                    qualityBonus = Math.max(qualityBonus, factor.value);
                } else {
                    qualityPenalty = Math.min(qualityPenalty, factor.value);
                }
                break;
            case ADD_POWER_FACTOR:
                if (factor.value > 0) {
                    powerBonus = Math.max(powerBonus, factor.value);
                } else {
                    powerPenalty = Math.min(powerPenalty, factor.value);
                }
                break;
            default:
                break;

        }
    }


    let permanent = innateSum + naturalSum - investSum;

    let temporary = allActionSum
        + deedSum
        + qualityBonus + qualityPenalty
        + powerBonus + powerPenalty;

    let total = permanent + temporary;

    return {
        total,
        permanent,
        temporary,
        innate: innateSum,
        natural: naturalSum,
        invest: investSum,
        allAction: allActionSum,
        deed: deedSum,
        quality: qualityBonus + qualityPenalty,
        power: powerBonus + powerPenalty
    }
}
