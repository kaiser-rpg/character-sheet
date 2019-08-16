import SkillList from "../containers/raw/SkillList";
import {INNATE_BONUS_CLASS, INNATE_BONUS_FEATURE} from "../actions/innate-bonus-actions";
import {REDUCE_DEV_COST, SET_DEV_COST} from "../actions/dev-cost-actions";
import {
    ADD_ALL_ACTION_FACTOR,
    ADD_BASE_VALUE,
    ADD_DEED_FACTOR,
    ADD_INNATE_FACTOR,
    ADD_INVEST_FACTOR,
    ADD_NATURAL_FACTOR,
    ADD_POWER_FACTOR,
    ADD_QUALITY_FACTOR,
    SET_BASE_VALUE,
    SUPER_TYPE_SKILL
} from "../actions/super-types";

export function skills(state = new SkillList(), action) {
    if (!action.key || action.superType !== SUPER_TYPE_SKILL) {
        return state;
    }

    let newState = Object.assign(new SkillList(), state);
    let targetGroup = newState.getSkillGroup(action.key);

    if (targetGroup.length === 0) {
        if (!newState[action.key]) return state;
        targetGroup = [newState[action.key]];
    }

    console.log(action.type, action.key, action);

    targetGroup.forEach(skill => {
        switch (action.type) {
            case SET_BASE_VALUE:
                skill.baseValues = [action];
                break;
            case ADD_BASE_VALUE:
                skill.baseValues.push(action);
                break;
            case ADD_INNATE_FACTOR:
            case ADD_NATURAL_FACTOR:
            case ADD_INVEST_FACTOR:
            case ADD_ALL_ACTION_FACTOR:
            case ADD_DEED_FACTOR:
            case ADD_QUALITY_FACTOR:
            case ADD_POWER_FACTOR:
                skill.factorValues.push(action);
                break;
            case INNATE_BONUS_CLASS:
            case INNATE_BONUS_FEATURE:
                skill.rollingInnate.push(action);
                break;
            case SET_DEV_COST:
            case REDUCE_DEV_COST:
                skill.devCostMod.push(action);
                break;
            default:
                break;
        }
    });

    return newState;
}