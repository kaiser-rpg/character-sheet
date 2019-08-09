import CharList from "./raw/CharList";
import SkillList from "./raw/SkillList";
import Info from "./raw/Info";
import AbilityList from "./raw/AbilityList";

export default class Makeup {

    constructor() {
        this.info = new Info();

        this.characteristics = new CharList();

        this.skills = new SkillList();

        this.abilities = new AbilityList();

        this.settings = {};
    }

}