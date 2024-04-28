import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";

export const useCollectionStore = defineStore("collectionStore", () => {
  //* GET COLLECTION FUNCTION
  function getCollection(collection) {
    const documents = ref(null);
    const error = ref(null);

    let collectionRef = projectFirestore
      .collection(collection)
      .orderBy("createdAt");

    const unsub = collectionRef.onSnapshot(
      (snap) => {
        let results = [];
        snap.docs.forEach((doc) => {
          doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
        });
        documents.value = results;
        error.value = null;
      },
      (err) => {
        console.log(err.message);
        documents.value = null;
        error.value = "could not fetch data";
      },
    );

    watchEffect((onInvalidate) => {
      //unsubscribe from previous collection when watcher is stopped (component unmounted)
      onInvalidate(() => unsub());
    });

    return { documents, error };
  }

  //* USE COLLECTION FUNCTION
  function useCollection(collection) {
    const error = ref(null);

    const addDoc = async (doc) => {
      error.value = null;

      try {
        await projectFirestore.collection(collection).add(doc);
      } catch (err) {
        console.log(err.message);
        error.value = "could not send the message";
      }
    };
    return { error, addDoc };
  }

  return { getCollection, useCollection };
});
