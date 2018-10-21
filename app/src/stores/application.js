import { observable, computed } from "mobx"
import * as mobx from "mobx"
export default class ApplicationStore {
  // Text
	@observable underConstruction = 'amandaroaf.me is under construction.';

	@observable description = '';

	@observable projects = [];

	@observable activeProject = {};

  constructor() {
      mobx.autorun(() => console.log(this.report));
  }

	@computed get report() {
		return this.underConstruction;
	}

	setState(key, value) {
    if (this[key] === undefined) {
      throw new Error(`This state variable does not exist: ${key}`)
    }
    this[key] = value;
  }
}
