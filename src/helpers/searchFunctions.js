import { getFirestore } from '../data/importData';

const db = getFirestore();

const getAllProjects = () => {
    return new Promise((resolve, reject) => {
        db.collection('projects').get()
            .then(docs => {
                let arr = [];
                docs.forEach(doc => {
                    arr.push({ id: doc.id, data: doc.data() })
                })
                resolve(arr);
            })
            .catch(e => console.log(e));
    });
}

const getProjectByCategory = (value) => {
    return new Promise((resolve, reject) => {
        db.collection('projects').where('category', '==',value ).get()
            .then(docs => {
                let arr = [];
                docs.forEach(doc => {
                    arr.push({ id: doc.id, data: doc.data() })
                })
                resolve(arr);
            })
            .catch(e => console.log(e));
    });
};

export {
    getAllProjects,
    getProjectByCategory,

}