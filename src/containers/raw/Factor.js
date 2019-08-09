// PERMANENT
export const INNATE_FACTOR = "innate-factor";
export const NATURAL_FACTOR = "natural-factor";
export const INVEST_FACTOR = "invest-factor";

// TEMPORARY
export const ALL_ACTION_FACTOR = "all-action-factor";
export const DEED_FACTOR = "deed-factor";
export const QUALITY_FACTOR = "quality-factor";
export const POWER_FACTOR = "power-factor";

export const innateFactor = (value, source, note) => ({
    type: INNATE_FACTOR,
    value,
    source,
    note
});

export const naturalFactor = (value, source, note) => ({
    type: NATURAL_FACTOR,
    value,
    source,
    note
});

export const investFactor = (value, source, note) => ({
    type: INVEST_FACTOR,
    value: Math.abs(value),
    source,
    note
});

export const allActionFactor = (value, source, note) => ({
    type: ALL_ACTION_FACTOR,
    value,
    source,
    note
});

export const deedFactor = (value, source, note) => ({
    type: DEED_FACTOR,
    value,
    source,
    note
});

export const qualityFactor = (value, source, note) => ({
    type: QUALITY_FACTOR,
    value,
    source,
    note
});

export const powerFactor = (value, source, note) => ({
    type: POWER_FACTOR,
    value,
    source,
    note
});

export function sumByFactor(factorName, factorList) {
    return sumFactors(factorList.map((f) => f.type === factorName));
}

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
            case INNATE_FACTOR:
                innateSum += factor.value;
                break;
            case NATURAL_FACTOR:
                naturalSum += factor.value;
                break;
            case INVEST_FACTOR:
                investSum += factor.value;
                break;
            case ALL_ACTION_FACTOR:
                allActionSum = factor.value;
                break;
            case DEED_FACTOR:
                deedSum = factor.value;
                break;
            case QUALITY_FACTOR:
                if (factor.value > 0) {
                    qualityBonus = qualityBonus > factor.value ? qualityBonus : factor.value;
                } else {
                    qualityPenalty = qualityPenalty < factor.value ? qualityPenalty : factor.value;
                }
                break;
            case POWER_FACTOR:
                if (factor.value > 0) {
                    powerBonus = powerBonus > factor.value ? powerBonus : factor.value;
                } else {
                    powerPenalty = powerPenalty < factor.value ? powerPenalty : factor.value;
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
