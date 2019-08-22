import {IEntry__firstOrder, IEntry__secondOrder, IEntry_fourthOrder} from "../core/CoreEntry";
import {setBaseValueChar} from "../../actions/char-actions";
import {present} from "../../reducers";

export class SkillEntry extends IEntry_fourthOrder {
    constructor(name, group, defaultChar, ...altNames) {
        super(name, group, "xp", defaultChar, altNames);
    }
}

export class Initiative extends IEntry__secondOrder {
    constructor(baseValue = 10) {
        super("initiative", "general", null, ["dex", "agi"], "init");
        this.name = "initiative";
        this.group = "general";
        this.baseValues = [setBaseValueChar(this.key, baseValue, "start")];
    }
}

export class SpiritSkillEntry extends IEntry__firstOrder {

    constructor(name, defaultSkill, ...altNames) {
        super(name, "spirit", null, "", altNames);
        this.skill = defaultSkill;
    }

    get base() {
        let sk = present().abilities.martialAbilities.spiritKnowledge.maximum;
        if (present().skills.hasOwnProperty(this.skill)) {
            let si = present().skills[this.skill].permanentTotal();
            return Math.floor((sk + si) / 2);
        }
        return Math.floor(sk / 2);
    }
}