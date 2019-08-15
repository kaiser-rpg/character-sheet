import {Agility, Aptitude, Constitution, Dexterity, Focus, Perception, Strength, Willpower} from "./Entry/CharEntry";

export default class CharList {
    constructor(str = 5, con = 5, dex = 5, agi = 5, per = 5, apt = 5, foc = 5, wp = 5) {
        this.strength = new Strength(str);
        this.constitution = new Constitution(con);
        this.dexterity = new Dexterity(dex);
        this.agility = new Agility(agi);
        this.perception = new Perception(per);
        this.aptitude = new Aptitude(apt);
        this.focus = new Focus(foc);
        this.willpower = new Willpower(wp);

    }

    lookupChar(name) {
        if (Array.isArray(name)) {
            return name.map(curr => this.lookupChar(curr));
        }

        if (this.strength.isName(name)) {
            return this.strength;
        }

        if (this.constitution.isName(name)) {
            return this.constitution;
        }

        if (this.dexterity.isName(name)) {
            return this.dexterity;
        }

        if (this.agility.isName(name)) {
            return this.agility;
        }

        if (this.perception.isName(name)) {
            return this.perception;
        }

        if (this.aptitude.isName(name)) {
            return this.aptitude;
        }

        if (this.focus.isName(name)) {
            return this.focus;
        }

        if (this.willpower.isName(name)) {
            return this.willpower;
        }

        console.log("found no proper characteristic for " + name);
        return null;
    }

    lookupCharValue(name, valueKey) {
        let char = this.lookupChar(name);
        if (!char) return 0;
        if (Array.isArray(char)) {
            if (!char[0].hasOwnProperty(valueKey)) return 0;
            return char.reduce((sum, curr) => sum + curr[valueKey]);
        } else {
            if (!char.hasOwnProperty(valueKey)) return 0;
            return char[valueKey];
        }
    }

    removeBySource(sourceName) {
        this.strength.removeBySource(sourceName);
        this.constitution.removeBySource(sourceName);
        this.dexterity.removeBySource(sourceName);
        this.agility.removeBySource(sourceName);
        this.perception.removeBySource(sourceName);
        this.aptitude.removeBySource(sourceName);
        this.focus.removeBySource(sourceName);
        this.willpower.removeBySource(sourceName);
    }

    removeById(id) {
        this.strength.removeById(id);
        this.constitution.removeById(id);
        this.dexterity.removeById(id);
        this.agility.removeById(id);
        this.perception.removeById(id);
        this.aptitude.removeById(id);
        this.focus.removeById(id);
        this.willpower.removeById(id);
    }
}