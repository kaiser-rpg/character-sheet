import Investments from "../containers/Investments";
import {
    INVEST_MK_PRINCIPLE,
    INVEST_PP_DEGREE,
    INVEST_PP_DISCIPLINE,
    INVEST_SK_TALENT,
    INVEST_SK_TECH,
    INVEST_XP_ABILITY,
    INVEST_XP_SKILL
} from "../actions/invest-actions";

export function investments(state = new Investments(), action) {
    switch (action.type) {
        case INVEST_XP_SKILL:
        case INVEST_XP_ABILITY:

        case INVEST_SK_TALENT:
        case INVEST_SK_TECH:


        case INVEST_MK_PRINCIPLE:
        case INVEST_PP_DISCIPLINE:
        case INVEST_PP_DEGREE:
        default:
            return state;

    }
} 