import { action, computed, makeObservable, observable } from "mobx";

export default class CounterStore {
    @observable count = 0;

    constructor() {
        makeObservable(this)
    }

    @computed get isNegative() {
        return this.count < 0 ? 'Yes': 'No';
    }

    @action increase() {
        this.count++;
    }

    @action decrease() {
        this.count--;
    }
}