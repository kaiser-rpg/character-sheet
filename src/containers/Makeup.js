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

    updateRollingInnate(newLevel) {
        this.info.currentLevel = newLevel;
        this.skills.updateRollingInnate(newLevel);
        this.abilities.updateRollingInnate(newLevel);
    }

    removeBySource(sourceName) {
        this.characteristics.removeBySource(sourceName);
        this.skills.removeBySource(sourceName);
        this.abilities.removeBySource(sourceName);
    }

    removeById(id) {
        this.characteristics.removeById(id);
        this.skills.removeById(id);
        this.abilities.removeById(id);
    }

}