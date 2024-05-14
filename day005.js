import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { stdout } from "node:process";

class MetaObject {
  #ultraSecretProp;
  static #meta = 43;

  constructor(list = []) {
    this.list = list;
    this.#ultraSecretProp = randomUUID();
  }

  get id() {
    return this.#ultraSecretProp;
  }

  static #log(message) {
    stdout.write(message);
  }

  static printMeta() {
    this.#log(this.#meta);
  }
}
const sharedList = ["starscream", "querty", "robotech"];
const nestedList = [sharedList];
const meta1 = new MetaObject(sharedList);
const meta2 = new MetaObject(sharedList);
assert.deepEqual(nestedList, [...nestedList]);
assert.equal(meta1.list, meta2.list);
assert.notEqual(meta1, meta2);
assert.notDeepEqual([[1, 2, 3]], [[1, "2", 3]]);
