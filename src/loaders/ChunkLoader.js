class ChunkLoader {
    constructor() {
        this.heritage = loadHeritage();
        this.modules = {};
        this.phenoms = {};
        this.spells = {};
        this.talents = {};
        this.martialArts = {};


    }
}

const loadHeritage = (fileName = "core.json") => {
    const data = require('../../data/heritage/' + fileName);
    const json = JSON.parse(data);

    let output = {};

    if (Array.isArray(json)) {
        json.forEach((item) => {
            if (item && item.name) {
                output[item.name] = item
            } else {
                console.log("unexpected data for item", item);
            }
        });
    } else {
        console.log("unexpected data for", fileName, json);
    }

    return output;
};

const loadModule = (fileName = "core.json") => {
    const data = require('../../data/module/' + fileName);
    const json = JSON.parse(data);

    let output = {};

    if (Array.isArray(json)) {
        json.forEach((item) => {
            if (item && item.name) {
                output[item.name] = item
            } else {
                console.log("unexpected data for item", item);
            }
        });
    } else {
        console.log("unexpected data for", fileName, json);
    }

    return output;
};


export default new ChunkLoader();