import SkillList from "../containers/raw/SkillList";
import {
    allActionFactor,
    deedFactor,
    innateFactor,
    naturalFactor,
    powerFactor,
    qualityFactor
} from "../containers/raw/Factor";
import {devCostBase, devCostClassMod} from "../containers/raw/DevCost";
import {INNATE_BONUS_CLASS, INNATE_BONUS_FEATURE} from "../actions/innate-bonus-actions";
import {LEVEL_UP} from "../actions/level-actions";
import {REDUCE_DEV_COST, SET_DEV_COST} from "../actions/dev-cost-actions";
import {
    ADD_ALL_ACTION_FACTOR,
    ADD_BASE_VALUE,
    ADD_DEED_FACTOR,
    ADD_INNATE_FACTOR,
    ADD_NATURAL_FACTOR,
    ADD_POWER_FACTOR,
    ADD_QUALITY_FACTOR,
    SUPER_TYPE_SKILL
} from "../actions/super-types";

export function skills(state = new SkillList(), action) {
    if (!action.key || action.superType !== SUPER_TYPE_SKILL) {
        return state;
    }

    let key = action.key;
    let newState = Object.assign(state);

    switch (action.type) {
        case LEVEL_UP:
            console.log("level ", action.newLevel);

            newState.getSkillGroup("all").forEach((skill) => skill.updateRollingInnate(action.newLevel));
            return newState;
        case ADD_BASE_VALUE:
            switch (key) {
                case "martial":
                case "magic":
                case "manifest":
                case "creative":
                case "exertion":
                case "intellectual":
                case "perception":
                case "social":
                case "subterfuge":
                case "vigor":
                case "all":
                case "primary":
                case "secondary":
                    let group = newState.getSkillGroup(key);
                    group.forEach((skill) => {
                        skill.baseValue += action.value;
                    });
                    break;
                default:
                    if (newState.hasOwnProperty(key)) {
                        newState[key].baseValue += action.value;
                    } else {
                        console.log("could not find skill ", key);
                        return state;
                    }
                    break;
            }

            console.log("added Base Skill Value to", action.key);
            return newState;
        case ADD_INNATE_FACTOR:
            switch (key) {
                case "martial":
                case "magic":
                case "manifest":
                case "creative":
                case "exertion":
                case "intellectual":
                case "perception":
                case "social":
                case "subterfuge":
                case "vigor":
                case "all":
                case "primary":
                case "secondary":
                    let group = newState.getSkillGroup(key);
                    group.forEach((skill) => {
                        skill.factors.push(new innateFactor(action.value, action.source, action.note));
                    });
                    break;
                default:
                    if (newState.hasOwnProperty(key)) {
                        newState[key].factors.push(new innateFactor(action.value, action.source, action.note));
                    } else {
                        console.log("could not find skill ", key);
                        return state;
                    }
                    break;
            }

            console.log("added innate factor to", action.key);
            return newState;
        case ADD_NATURAL_FACTOR:
            switch (key) {
                case "martial":
                case "magic":
                case "manifest":
                case "creative":
                case "exertion":
                case "intellectual":
                case "perception":
                case "social":
                case "subterfuge":
                case "vigor":
                case "all":
                case "primary":
                case "secondary":
                    let group = newState.getSkillGroup(key);
                    group.forEach((skill) => {
                        console.log("natural skill", skill)
                        skill.factors.push(new naturalFactor(action.value, action.source, action.note));
                    });
                    break;
                default:
                    if (newState.hasOwnProperty(key)) {
                        newState[key].factors.push(new naturalFactor(action.value, action.source, action.note));
                    } else {
                        console.log("could not find skill ", key);
                        return state;
                    }
                    break;
            }
            console.log("added natural factor to", action.key);
            return newState;
        case ADD_ALL_ACTION_FACTOR:
            switch (key) {
                case "martial":
                case "magic":
                case "manifest":
                case "creative":
                case "exertion":
                case "intellectual":
                case "perception":
                case "social":
                case "subterfuge":
                case "vigor":
                case "all":
                case "primary":
                case "secondary":
                    let group = newState.getSkillGroup(key);
                    group.forEach((skill) => {
                        skill.factors.push(new allActionFactor(action.value, action.source, action.note));
                    });
                    break;
                default:
                    if (newState.hasOwnProperty(key)) {
                        newState[key].factors.push(new allActionFactor(action.value, action.source, action.note));
                    } else {
                        console.log("could not find skill ", key);
                        return state;
                    }
                    break;
            }

            console.log("added all-action factor to", action.key);
            return newState;
        case ADD_DEED_FACTOR:
            switch (key) {
                case "martial":
                case "magic":
                case "manifest":
                case "creative":
                case "exertion":
                case "intellectual":
                case "perception":
                case "social":
                case "subterfuge":
                case "vigor":
                case "all":
                case "primary":
                case "secondary":
                    let group = newState.getSkillGroup(key);
                    group.forEach((skill) => {
                        skill.factors.push(new deedFactor(action.value, action.source, action.note));
                    });
                    break;
                default:
                    if (newState.hasOwnProperty(key)) {
                        newState[key].factors.push(new deedFactor(action.value, action.source, action.note));
                    } else {
                        console.log("could not find skill ", key);
                        return state;
                    }
                    break;
            }

            console.log("added deed factor to", action.key);
            return newState;
        case ADD_QUALITY_FACTOR:
            switch (key) {
                case "martial":
                case "magic":
                case "manifest":
                case "creative":
                case "exertion":
                case "intellectual":
                case "perception":
                case "social":
                case "subterfuge":
                case "vigor":
                case "all":
                case "primary":
                case "secondary":
                    let group = newState.getSkillGroup(key);
                    group.forEach((skill) => {
                        skill.factors.push(new qualityFactor(action.value, action.source, action.note));
                    });
                    break;
                default:
                    if (newState.hasOwnProperty(key)) {
                        newState[key].factors.push(new qualityFactor(action.value, action.source, action.note));
                    } else {
                        console.log("could not find skill ", key);
                        return state;
                    }
                    break;
            }

            console.log("added quality factor to", action.key);
            return newState;
        case ADD_POWER_FACTOR:
            switch (key) {
                case "martial":
                case "magic":
                case "manifest":
                case "creative":
                case "exertion":
                case "intellectual":
                case "perception":
                case "social":
                case "subterfuge":
                case "vigor":
                case "all":
                case "primary":
                case "secondary":
                    let group = newState.getSkillGroup(key);
                    group.forEach((skill) => {
                        skill.factors.push(new powerFactor(action.value, action.source, action.note));
                    });
                    break;
                default:
                    if (newState.hasOwnProperty(key)) {
                        newState[key].factors.push(new powerFactor(action.value, action.source, action.note));
                    } else {
                        console.log("could not find skill ", key);
                        return state;
                    }
                    break;
            }

            console.log("added power factor to", action.key);
            return newState;
        case SET_DEV_COST:
            switch (key) {
                case "martial":
                case "magic":
                case "manifest":
                case "creative":
                case "exertion":
                case "intellectual":
                case "perception":
                case "social":
                case "subterfuge":
                case "vigor":
                case "all":
                case "primary":
                case "secondary":
                    let group = newState.getSkillGroup(key);
                    group.forEach((skill) => {
                        skill.devCostMod.push(new devCostBase(action.value, action.source, action.note));
                    });
                    break;
                default:
                    if (newState.hasOwnProperty(key)) {
                        newState[key].devCostMod.push(new devCostBase(action.value, action.source, action.note));
                    } else {
                        console.log("could not find skill ", key);
                        return state;
                    }
                    break;
            }

            console.log("set new dev cost to ", action.key);
            return newState;
        case REDUCE_DEV_COST:
            switch (key) {
                case "martial":
                case "magic":
                case "manifest":
                case "creative":
                case "exertion":
                case "intellectual":
                case "perception":
                case "social":
                case "subterfuge":
                case "vigor":
                case "all":
                case "primary":
                case "secondary":
                    let group = newState.getSkillGroup(key);
                    group.forEach((skill) => {
                        skill.devCostMod.push(new devCostClassMod(action.value, action.source, action.note));
                    });
                    break;
                default:
                    newState[key].devCostMod.push(new devCostClassMod(action.value, action.source, action.note));
                    break;
            }

            console.log("reduced dev cost to ", action.key);
            return newState;
        case INNATE_BONUS_CLASS:
        case INNATE_BONUS_FEATURE:
            switch (key) {
                case "martial":
                case "magic":
                case "manifest":
                case "creative":
                case "exertion":
                case "intellectual":
                case "perception":
                case "social":
                case "subterfuge":
                case "vigor":
                case "all":
                case "primary":
                case "secondary":
                    let group = newState.getSkillGroup(key);
                    group.forEach((skill) => {
                        skill.rollingInnate.push(action);
                    });
                    break;
                default:
                    newState[key].rollingInnate.push(action);
                    break;
            }

            console.log("add innate to ", action.key, action);
            return newState;
        default:
            return state;
    }
}