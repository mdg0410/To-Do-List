const db = {};

const localStorageMock = {
  saveToLocal: (key, data) => {
    db[key] = data;
  },
  getFromLocal: (key) => db[key],

};

export default localStorageMock;