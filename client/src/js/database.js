import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not impemented');
  const db = await initdb();
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  await store.put({ data: content});
  await tx.done;
  console.log('Content added to database:')
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await initdb();
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const allData = await store.getAll();
  await tx.done;
  console.log('All content retrieved', allData);
  return allData;
};

initdb();
