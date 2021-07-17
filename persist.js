import { create } from 'mobx-persist';
import AsyncStorage from '@react-native-community/async-storage';
import TodosList from './store';


const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

class RootStore {
  TodosList = TodosList;

  constructor() {
    Promise.all([
      hydrate('list', this.TodosList),
    ])
      .then(() => console.log('loading finished'));
  }
};

export default new RootStore();