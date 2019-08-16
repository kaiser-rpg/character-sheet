import {Initiative, SkillEntry, SpiritSkillEntry} from "./Entry";
import {addTie2Skill} from "../../actions/tied-actions";
import {investXpSkill} from "../../actions/invest-actions";

export function martialSkills() {
    return [
        new SkillEntry("strike", "martial", "dex"),
        new SkillEntry("block", "martial", "dex"),
        new SkillEntry("dodge", "martial", "agi"),
        new SkillEntry("wear armor", "martial", "str")
    ];
}

export function magicSkills() {
    return [
        new SkillEntry("spell projection", "magic", "per"),
        new SkillEntry("summon", "magic", "foc"),
        new SkillEntry("control", "magic", "wp"),
        new SkillEntry("banish", "magic", "foc")
    ];
}

export function manifestSkills() {
    return [
        new SkillEntry("phenom projection", "manifest", "per")
    ];
}

export function creativeSkills() {
    return [
        new SkillEntry("art", "creative", "foc"),
        new SkillEntry("dance", "creative", "agi"),
        new SkillEntry("music", "creative", "wp"),
        new SkillEntry("sleight of hand", "creative", "dex")
    ];
}

export function exertionSkills() {
    return [
        new SkillEntry("acrobatics", "exertion", "agi"),
        new SkillEntry("athletics", "exertion", "con"),
        new SkillEntry("feats of strength", "exertion", "str"),
        new SkillEntry("ride", "exertion", "dex")
    ];
}

export function intellectualSkills() {
    return [
        new SkillEntry("animals", "intellectual", "apt"),
        new SkillEntry("appraisal", "intellectual", "apt"),
        new SkillEntry("engineering", "intellectual", "apt"),
        new SkillEntry("herbal lore", "intellectual", "apt"),
        new SkillEntry("history", "intellectual", "apt"),
        new SkillEntry("magic appraisal", "intellectual", "foc"),
        new SkillEntry("medicine", "intellectual", "apt"),
        new SkillEntry("navigation", "intellectual", "apt"),
        new SkillEntry("occult", "intellectual", "apt"),
        new SkillEntry("science", "intellectual", "apt")
    ];
}

export function perceptionSkills() {
    return [
        new SkillEntry("notice", "perception", "per"),
        new SkillEntry("search", "perception", "per"),
        new SkillEntry("intuition", "perception", "per")
    ];
}

export function socialSkills() {
    return [
        new SkillEntry("intimidate", "social", "wp"),
        new SkillEntry("leadership", "social", "wp"),
        new SkillEntry("persuasion", "social", "apt"),
        new SkillEntry("streetwise", "social", "per"),
        new SkillEntry("style", "social", "wp")
    ];
}

export function subterfugeSkills() {
    return [
        new SkillEntry("theft", "subterfuge", "dex"),
        new SkillEntry("disguise", "subterfuge", "apt"),
        new SkillEntry("stealth", "subterfuge", "agi"),
        new SkillEntry("lock picking", "subterfuge", "dex")
    ];
}

export function vigorSkills() {
    return [
        new SkillEntry("composure", "vigor", "foc"),
        new SkillEntry("withstand pain", "vigor", "foc")
    ];
}

export function miscSkills() {
    return [
        new Initiative(["dex", "agi"]),
        new SpiritSkillEntry("conceal spirit", "stealth"),
        new SpiritSkillEntry("detect spirit", "notice")
    ];
}

export function skillList() {
    return [].concat(
        martialSkills(),
        magicSkills(),
        manifestSkills(),
        creativeSkills(),
        exertionSkills(),
        intellectualSkills(),
        perceptionSkills(),
        socialSkills(),
        subterfugeSkills(),
        vigorSkills(),
        miscSkills()
    );
}

export default class ClassSkills {

    constructor() {
        skillList().forEach(skill => this[skill.key] = skill);

        if (this.hasOwnProperty("block") && this.hasOwnProperty("dodge")) {
            this.block.tieValues.push(addTie2Skill("block", "dodge", 6, "start"));
            this.dodge.tieValues.push(addTie2Skill("dodge", "block", 6, "start"));
        }
    }

    get primarySkills() {
        return [
            this.getSkillGroup("martial"),
            this.getSkillGroup("magic"),
            this.getSkillGroup("manifest")
        ]
    }

    get secondarySkills() {
        return [
            this.getSkillGroup("creative"),
            this.getSkillGroup("exertion"),
            this.getSkillGroup("intellectual"),
            this.getSkillGroup("perception"),
            this.getSkillGroup("social"),
            this.getSkillGroup("subterfuge"),
            this.getSkillGroup("vigor"),
        ]
    }

    get miscSkills() {
        return [
            this.initiative,
            this.concealSpirit,
            this.detectSpirit
        ]
    }

    get xp() {
        return {
            general: this.getSkillGroup("secondary").map(skill => investXpSkill(skill.key, skill.cost, "skill")),
            martial: this.getSkillGroup("martial").map(skill => investXpSkill(skill.key, skill.cost, "skill")),
            magic: this.getSkillGroup("magic").map(skill => investXpSkill(skill.key, skill.cost, "skill")),
            manifest: this.getSkillGroup("manifest").map(skill => investXpSkill(skill.key, skill.cost, "skill"))
        };
    }

    getSkillGroup(name = "all") {
        if (name === "primary") return this.primarySkills.map((arr, curr) => arr.concat(curr), []);
        if (name === "secondary") return this.secondarySkills.reduce((arr, curr) => arr.concat(curr), []);

        let arr = [];
        for (let skill in this) {
            if (this.hasOwnProperty(skill) && (this[skill].group === name || name === "all")) {
                arr.push(this[skill])
            }
        }

        return arr;
    }

    updateRollingInnate(newLevel) {
        this.getSkillGroup().forEach((skill) => skill.updateRollingInnate(newLevel));
    }

    removeBySource(sourceName) {
        this.getSkillGroup().forEach(skill => skill.removeBySource(sourceName));
    }

    removeById(id) {
        this.getSkillGroup().forEach(skill => skill.removeById(id));
    }
}
