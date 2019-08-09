import {toCamelCase, toTitleCase} from "../../util/StringHelper";
import {setDevCost} from "../../actions/dev-cost-actions";
import SkillList from "./SkillList";
import {skills} from "../../reducers/SkillsReducer";

// DO NOT USE
export default class ClassEntry_deprecated {

    constructor(className) {
        this.name = className;
        this.level = 0;
        this.skills = new SkillList();
        const fs = window.require('fs');
        let classData = JSON.parse(fs.readFileSync("data/" + this.key + ".json"));

        // Load secondary group
        let secondary = classData.secondary;
        this.update(setDevCost("skill.creative", secondary.creative, className));
        this.update(setDevCost("skill.exertion", secondary.exertion, className));
        this.update(setDevCost("skill.intellectual", secondary.intellectual, className));
        this.update(setDevCost("skill.perception", secondary.perception, className));
        this.update(setDevCost("skill.social", secondary.social, className));
        this.update(setDevCost("skill.subterfuge", secondary.subterfuge, className));
        this.update(setDevCost("skill.vigor", secondary.vigor, className));

        // Load reduced dev cost
        secondary.reduced.forEach((skill) => {
            this.update(setDevCost(skill.name, skill.cost, className));
        });

        // Load innate
        secondary.innate.forEach((skill) => {
            this.update(setDevCost(skill.name, skill.cost, className));
        });


        // Load Primary dev costs
        let martial = classData.martial;
        this.update(setDevCost("skill.strike", martial.strike, className));
        this.update(setDevCost("skill.block", martial.block, className));
        this.update(setDevCost("skill.dodge", martial.dodge, className));
        this.update(setDevCost("skill.wearArmor", martial.wearArmor, className));

        let magic = classData.magic;
        this.update(setDevCost("skill.spellProjection", magic.spellProjection, className));
        this.update(setDevCost("skill.summon", magic.summon, className));
        this.update(setDevCost("skill.control", magic.control, className));
        this.update(setDevCost("skill.banish", magic.banish, className));

        let manifest = classData.manifest;
        this.update(setDevCost("skill.phenomProjection", manifest.phenomProjection, className));

        // Load innate
        martial.innate.forEach((skill) => {
            this.update(setDevCost(skill.name, skill.cost, className));
        });

        magic.innate.forEach((skill) => {
            this.update(setDevCost(skill.name, skill.cost, className));
        });

        manifest.innate.forEach((skill) => {
            this.update(setDevCost(skill.name, skill.cost, className));
        });
    }

    get title() {
        toTitleCase(this.name);
    }

    get key() {
        toCamelCase(this.name);
    }

    update(action) {
        this.skills = skills(this.skills, action);
    }
}

class Group {
    constructor(name, innateList = [], limit = 100) {
        this.name = name;
        this.limit = limit;
    }

    get key() {
        return toCamelCase(this.name);
    }

    get title() {
        return toTitleCase(this.name);
    }
}