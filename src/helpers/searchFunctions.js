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

// const getProjectByCategory = (value) => {
//     return new Promise((resolve, reject) => {
//         db.collection('projects').where('category', '==',value ).get()
//             .then(docs => {
//                 let arr = [];
//                 docs.forEach(doc => {
//                     arr.push({ id: doc.id, data: doc.data() })
//                 })
//                 if(arr.length === 0) {
//                     resolve(0);
//                 } else {
//                     resolve(arr);
//                 }
//             })
//             .catch(e => console.log(e));
//     });
// };

const getProjectBy = (field, value) => {
    return new Promise((resolve, reject) => {
        db.collection('projects').where(field, '==', value).get()
            .then(docs => {
                let arr = [];
                docs.forEach(doc => {
                    arr.push({ id: doc.id, data: doc.data() })
                })
                if (arr.length === 0) {
                    resolve(0);
                } else {
                    resolve(arr);
                }
            })
            .catch(e => console.log(e));
    });
};

// const getHistoryBy = (collections, field, value) => {
//     return new Promise((resolve, reject) => {
//         db.collection(collections)
//             .where(field, "==", value).get()
//             .then(docs => {
//                 let arr = [];
//                 docs.forEach(doc => {
//                     arr.push({ id: doc.id, data: doc.data() })
//                 })
//                 if (arr.length === 0) {
//                     resolve(0);
//                 } else {
//                     resolve(arr);
//                 }
//             })
//             .catch(e => console.log(e));
//     });
// };

const getEducation = () => {
    return new Promise((resolve, reject) => {
        db.collection('education').get()
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

const getWorkExperience = () => {
    return new Promise((resolve, reject) => {
        db.collection('work-experience').get()
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



// const getWorkBy = (field, value) => {
//     return new Promise((resolve, reject) => {
//         db.collection('work-experience').where(field, '==', value).get()
//             .then(docs => {
//                 let arr = [];
//                 docs.forEach(doc => {
//                     arr.push({ id: doc.id, data: doc.data() })
//                 })
//                 resolve(arr);
//             })
//             .catch(e => console.log(e));
//     });
// };

export {
    getAllProjects,
    getWorkExperience,
    getProjectBy,
    getEducation,
}