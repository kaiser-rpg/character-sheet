import {sheet} from "../reducers/SheetApp";
import {addNaturalFactor2Char, setBaseValueChar} from "../actions/char-actions";
import {increaseLevel} from "../actions/level-actions";
import {setDevCost2Skill} from "../actions/dev-cost-actions";
import {innateBonusClass} from "../actions/innate-bonus-actions";
import {addBaseValue2Skill, addInnateFactor2Skill, addNaturalFactor2Skill} from "../actions/skill-actions";
import {
    setCharacterName,
    setClassName,
    setMagicLimit,
    setManifestLimit,
    setMartialLimit
} from "../actions/info-actions";

const fs = window.require('fs');

export default function loadCharacterData(err, fileData) {
    if (err) throw err;

    let rawJson = JSON.parse(fileData);
    console.log(rawJson);

    sheet.dispatch(setCharacterName(rawJson.name));

    loadClassData("classA");
    loadCharacteristics(rawJson.characteristics);

    loadCharacterClass(rawJson.class);

    loadFactors(rawJson.natural, rawJson.invest);

    loadFeatures(rawJson.characterFeatures, rawJson.creatureFeatures);

}

const loadCharacteristics = (charData) => {

    charData.base.forEach((c) => {
        sheet.dispatch(setBaseValueChar(c.key, c.value, c.source, c.note))
    });

    charData.level.forEach((c) => {
        sheet.dispatch(addNaturalFactor2Char(c.key, c.value, c.source, c.note))
    });
};

const loadClassData = (className) => {
    let classData = JSON.parse(fs.readFileSync("data/" + className + ".json"));

    sheet.dispatch(setClassName(classData.name));
    sheet.dispatch(setMartialLimit(classData.martial.limit));
    sheet.dispatch(setMagicLimit(classData.magic.limit));
    sheet.dispatch(setManifestLimit(classData.manifest.limit));

    // Load secondary group
    let secondary = classData.secondary;
    sheet.dispatch(setDevCost2Skill("creative", secondary.creative, className));
    sheet.dispatch(setDevCost2Skill("exertion", secondary.exertion, className));
    sheet.dispatch(setDevCost2Skill("intellectual", secondary.intellectual, className));
    sheet.dispatch(setDevCost2Skill("perception", secondary.perception, className));
    sheet.dispatch(setDevCost2Skill("social", secondary.social, className));
    sheet.dispatch(setDevCost2Skill("subterfuge", secondary.subterfuge, className));
    sheet.dispatch(setDevCost2Skill("vigor", secondary.vigor, className));

    // Load reduced dev cost
    secondary.reduced.forEach((skill) => {
        console.log(skill);
        sheet.dispatch(setDevCost2Skill(skill.name, skill.cost, className, "class reduced"));
    });

    // Load innate
    secondary.innate.forEach((skill) => {
        sheet.dispatch(innateBonusClass(skill.superType, skill.name, skill.value, skill.level, className));
    });


    // Load Primary dev costs
    let martial = classData.martial;
    sheet.dispatch(setDevCost2Skill("strike", martial.strike, className));
    sheet.dispatch(setDevCost2Skill("block", martial.block, className));
    sheet.dispatch(setDevCost2Skill("dodge", martial.dodge, className));
    sheet.dispatch(setDevCost2Skill("wearArmor", martial.wearArmor, className));

    let magic = classData.magic;
    sheet.dispatch(setDevCost2Skill("spellProjection", magic.spellProjection, className));
    sheet.dispatch(setDevCost2Skill("summon", magic.summon, className));
    sheet.dispatch(setDevCost2Skill("control", magic.control, className));
    sheet.dispatch(setDevCost2Skill("banish", magic.banish, className));

    let manifest = classData.manifest;
    sheet.dispatch(setDevCost2Skill("phenomProjection", manifest.phenomProjection, className));

    // Load innate
    martial.innate.forEach((skill) => {
        sheet.dispatch(innateBonusClass(skill.name, skill.value, skill.level, className));
    });

    magic.innate.forEach((skill) => {
        sheet.dispatch(innateBonusClass(skill.name, skill.value, skill.level, className));
    });

    manifest.innate.forEach((skill) => {
        sheet.dispatch(innateBonusClass(skill.name, skill.value, skill.level, className));
    });


    sheet.dispatch(increaseLevel(3, "classA", "creation"))

};

const loadCharacterClass = (classData) => {

    // Load Martial
    classData.martialInvest.forEach((c) => {
        sheet.dispatch(addBaseValue2Skill(c.key, c.value, c.source, c.note))
    });

    // Load Magic
    classData.magicInvest.forEach((c) => {
        sheet.dispatch(addBaseValue2Skill(c.key, c.value, c.source, c.note))
    });

    // Load Manifest
    classData.manifestInvest.forEach((c) => {
        sheet.dispatch(addBaseValue2Skill(c.key, c.value, c.source, c.note))
    });

    // Load Secondary
    classData.secondaryInvest.forEach((c) => {
        sheet.dispatch(addBaseValue2Skill(c.key, c.value, c.source, c.note))
    });

};

const loadFactors = (natural = [], invest = []) => {
    natural.forEach((c) => {
        sheet.dispatch(addNaturalFactor2Skill(c.key, c.value, c.source, c.note))
    });

    invest.forEach((c) => {
        sheet.dispatch(addInnateFactor2Skill(c.key, c.value, c.source, c.note))
    });
};

const loadFeatures = (aFeatures = [], bFeatures = []) => {
    aFeatures.forEach((c = []) => {
        c.actions.forEach((a) => {
            let action = Object.assign(a);
            action.source = c.name + " (" + c.cost + ")";
            sheet.dispatch(action);
            console.log("feature action ", c.name, action);
        })
    });
};