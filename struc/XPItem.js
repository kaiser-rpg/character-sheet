export default class XPItem {

    constructor(groupId, key, count = 1, note = "") {
        this.groupId = groupId;
        this.key = key;
        this.count = count;
        this.note = note;
    }
}