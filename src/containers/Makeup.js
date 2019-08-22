import SkillList from "./raw/SkillList";
import Info from "./raw/Info";
import AbilityList from "./raw/AbilityList";
import CharList from "./raw/CharList";

export default class Makeup {
    constructor() {
        this.info = new Info();

        this.characteristics = new CharList();

        this.skills = new SkillList();

        this.abilities = new AbilityList();

        this.settings = {};
    }

    get xp() {
        let maximum = this.info.currentLevel > 0 ? (this.info.currentLevel * 10 + 50) : 40;
        let skillInvest = this.skills.xp;
        let abilityInvest = this.abilities.xp;

        let generalCost = skillInvest.general.reduce((sum, curr) => sum + curr.value, 0)
            + abilityInvest.general.reduce((sum, curr) => sum + curr.value, 0);

        let martialCost = skillInvest.martial.reduce((sum, curr) => sum + curr.value, 0)
            + abilityInvest.martial.reduce((sum, curr) => sum + curr.value, 0);

        let magicCost = skillInvest.magic.reduce((sum, curr) => sum + curr.value, 0)
            + abilityInvest.magic.reduce((sum, curr) => sum + curr.value, 0);

        let manifestCost = skillInvest.manifest.reduce((sum, curr) => sum + curr.value, 0)
            + abilityInvest.manifest.reduce((sum, curr) => sum + curr.value, 0);

        console.log("costs", generalCost, martialCost, magicCost, manifestCost);

        return {
            maximum,
            total: generalCost + martialCost + magicCost + manifestCost,
            general: {cost: generalCost},
            martial: {cost: martialCost, limit: this.info.martialLimit / 100 * maximum},
            magic: {cost: magicCost, limit: this.info.magicLimit / 100 * maximum},
            manifest: {cost: manifestCost, limit: this.info.manifestLimit / 100 * maximum},
            skillInvest,
            abilityInvest
        }
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
