import { types } from 'mobx-state-tree';
const CountModel = types.model('CountModel', {
    count: types.number
}).actions(self => ({
    increase() {
        self.count += 1;
    }
}));

const store = CountModel.create({
    count: 0
});

export default store;
