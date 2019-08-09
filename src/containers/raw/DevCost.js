export const DEV_COST_BASE = "dev-cost-base";
export const DEV_COST_MOD_CLASS = "dev-cost-mod-class";
export const DEV_COST_MOD_FEATURE = "dev-cost-mod-feature";

export const devCostBase = (value, source, note) => ({
    type: DEV_COST_BASE,
    value,
    source,
    note
});

export const devCostClassMod = (value, source, note) => ({
    type: DEV_COST_MOD_CLASS,
    value,
    source,
    note
});

export const devCostFeaturesMod = (value, source, note) => ({
    type: DEV_COST_MOD_FEATURE,
    value,
    source,
    note
});