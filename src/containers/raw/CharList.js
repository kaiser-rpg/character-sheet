import {Agility, Aptitude, Constitution, Dexterity, Focus, Perception, Strength, Willpower} from "./CharEntry";

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
            return name.reduce((arr, curr) => arr.concat(this.lookupChar(curr)), []);
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
        return this.strength;
    }
}