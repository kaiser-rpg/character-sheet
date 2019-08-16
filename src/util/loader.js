import {sheet} from "../reducers/SheetApp";
import {addNaturalFactor2Char, setBaseValueChar} from "../actions/char-actions";
import {increaseLevel} from "../actions/level-actions";
import {setDevCost} from "../actions/dev-cost-actions";
import {innateBonusClass} from "../actions/innate-bonus-actions";
import {
    setCharacterName,
    setClassName,
    setMagicLimit,
    setManifestLimit,
    setMartialLimit
} from "../actions/info-actions";
import {
    SUPER_TYPE_GENERAL,
    SUPER_TYPE_MAGIC,
    SUPER_TYPE_MANIFEST,
    SUPER_TYPE_MARTIAL,
    SUPER_TYPE_SKILL
} from "../actions/super-types";
import {add2Base, add2Innate, add2Natural} from "../actions/factor-actions";

const fs = window.require('fs');

export default function loadCharacterData(err, fileData) {
    if (err) throw err;

    let rawJson = JSON.parse(fileData);
    console.log(rawJson);

    let className = rawJson.class.name;

    sheet.dispatch(setCharacterName(rawJson.name));
    sheet.dispatch(setClassName(className));

    loadClassData(className.replace(" ", "-"));
    loadCharacteristics(rawJson.characteristics);

    loadCharacterClass(rawJson.class);

    loadFactors(rawJson.natural, rawJson.invest);

    loadFeatures(rawJson.characterFeatures, rawJson.creatureFeatures);

    sheet.dispatch(increaseLevel(5, className));
}

const loadCharacteristics = (charData) => {

    charData.base.forEach((c) => {
        sheet.dispatch(setBaseValueChar(c.key, c.value, c.source, c.note))
    });

    charData.level.forEach((c) => {
        sheet.dispatch(addNaturalFactor2Char(c.key, c.value, c.source, c.note))
    });
};

const loadClassData = (fileName) => {
    let classData = JSON.parse(fs.readFileSync("data/class/" + fileName + ".json"));
    let className = classData.name;

    sheet.dispatch(setClassName(classData.key));


    /* Load Secondary */

    let secondary = classData.secondary;
    sheet.dispatch(setDevCost(SUPER_TYPE_SKILL, "creative", secondary.creative, className, "group"));
    sheet.dispatch(setDevCost(SUPER_TYPE_SKILL, "exertion", secondary.exertion, className, "group"));
    sheet.dispatch(setDevCost(SUPER_TYPE_SKILL, "intellectual", secondary.intellectual, className, "group"));
    sheet.dispatch(setDevCost(SUPER_TYPE_SKILL, "perception", secondary.perception, className, "group"));
    sheet.dispatch(setDevCost(SUPER_TYPE_SKILL, "social", secondary.social, className, "group"));
    sheet.dispatch(setDevCost(SUPER_TYPE_SKILL, "subterfuge", secondary.subterfuge, className, "group"));
    sheet.dispatch(setDevCost(SUPER_TYPE_SKILL, "vigor", secondary.vigor, className, "group"));

    // Load reduced dev cost
    secondary.reduced.forEach((skill) => {
        console.log(skill);
        sheet.dispatch(setDevCost(SUPER_TYPE_SKILL, skill.key, skill.cost, className, "class reduced"));
    });

    // Load innate
    secondary.innate.forEach((skill) => {
        sheet.dispatch(innateBonusClass(skill.superType, skill.key, skill.value, skill.level, className));
    });


    /* Load Primary */

    // Load General
    let general = classData.general;
    sheet.dispatch(setDevCost(SUPER_TYPE_GENERAL, "lifePoints", general.lifePoints, className));

    general.innate.forEach((e) => {
        sheet.dispatch(innateBonusClass(e.superType, e.key, e.value, e.level, className));
    });

    // Load Martial
    let martial = classData.martial;
    sheet.dispatch(setMartialLimit(martial.limit));
    sheet.dispatch(setDevCost(SUPER_TYPE_SKILL, "strike", martial.strike, className));
    sheet.dispatch(setDevCost(SUPER_TYPE_SKILL, "block", martial.block, className));
    sheet.dispatch(setDevCost(SUPER_TYPE_SKILL, "dodge", martial.dodge, className));
    sheet.dispatch(setDevCost(SUPER_TYPE_SKILL, "wearArmor", martial.wearArmor, className));
    sheet.dispatch(setDevCost(SUPER_TYPE_MARTIAL, "kiReserve", martial.kiReserve, className));
    sheet.dispatch(setDevCost(SUPER_TYPE_MARTIAL, "chakra", martial.chakra, className));

    martial.innate.forEach((e) => {
        sheet.dispatch(innateBonusClass(e.superType, e.key, e.value, e.level, className));
    });

    // Load Magic
    let magic = classData.magic;
    sheet.dispatch(setMagicLimit(magic.limit));
    sheet.dispatch(setDevCost(SUPER_TYPE_MAGIC, "manaPool", magic.manaPool, className));
    sheet.dispatch(setDevCost(SUPER_TYPE_MAGIC, "manaAccumulation", magic.manaAccumulation, className));
    sheet.dispatch(setDevCost(SUPER_TYPE_MAGIC, "manaRecovery", magic.manaRecovery, className));
    sheet.dispatch(setDevCost(SUPER_TYPE_SKILL, "spellProjection", magic.spellProjection, className));
    sheet.dispatch(setDevCost(SUPER_TYPE_SKILL, "summon", magic.summon, className));
    sheet.dispatch(setDevCost(SUPER_TYPE_SKILL, "control", magic.control, className));
    sheet.dispatch(setDevCost(SUPER_TYPE_SKILL, "banish", magic.banish, className));

    magic.innate.forEach((e) => {
        sheet.dispatch(innateBonusClass(e.superType, e.key, e.value, e.level, className));
    });

    // Load Manifest
    let manifest = classData.manifest;
    sheet.dispatch(setManifestLimit(manifest.limit));
    sheet.dispatch(setDevCost(SUPER_TYPE_MANIFEST, "phenomStock", magic.phenomStock, className));
    sheet.dispatch(setDevCost(SUPER_TYPE_SKILL, "phenomProjection", manifest.phenomProjection, className));

    manifest.innate.forEach((e) => {
        sheet.dispatch(innateBonusClass(e.superType, e.key, e.value, e.level, className));
    });
};

const loadCharacterClass = (classData) => {

    // Load Martial
    classData.martialInvest.forEach((c) => {
        sheet.dispatch(add2Base(c.superType, c.key, c.value, classData.name, c.note));
    });

    // Load Magic
    classData.magicInvest.forEach((c) => {
        sheet.dispatch(add2Base(c.superType, c.key, c.value, classData.name, c.note));
    });

    // Load Manifest
    classData.manifestInvest.forEach((c) => {
        sheet.dispatch(add2Base(c.superType, c.key, c.value, classData.name, c.note));
    });

    // Load Secondary
    classData.secondaryInvest.forEach((c) => {
        sheet.dispatch(add2Base(c.superType, c.key, c.value, classData.name, c.note));
    });

};

const loadFactors = (natural = [], invest = []) => {
    natural.forEach((c) => {
        sheet.dispatch(add2Natural(c.superType, c.key, c.value, c.source, c.note));
    });

    invest.forEach((c) => {
        sheet.dispatch(add2Innate(c.superType, c.key, c.value, c.source, c.note));
    });
};

const loadFeatures = (aFeatures = [], bFeatures = []) => {
    aFeatures.forEach((c = []) => {
        c.actions.forEach((a) => {
            let action = Object.assign(a, {
                source: c.name + " (" + c.cost + ")"
            });
            sheet.dispatch(action);
            console.log("feature action ", c.name, action);
        })
    });
};