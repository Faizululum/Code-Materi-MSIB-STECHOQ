// syncronous programming
function firstTask() {
    console.log("First task");
}

function secondTask() {
    console.log("Second task");
}

function thirdTask() {
    console.log("Third task");
}

firstTask();
secondTask();
thirdTask();

// Asynchronous programming
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    } 
    console.log(data);
});

// Callback Function
// function fetchData(callback) {
//     // Melakukan operasi asynchronous, seperti mengambil data dari server
//     setTimeout(() => {
//         const data = { name: "Faizul Ulum", age: 25 };
//         callback(data);
//     }, 3000);
// }

// function displayData(data) {
//     console.log(data);
// }

// fetchData(displayData);

// // Nested Callback Function
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = "ini data dari server";
//         callback(data);
//     }, 3000)
// }

// function processData(data, callback) {
//     setTimeout(() => {
//         const processedData = data.toUpperCase();
//         callback(processedData);
//     }, 2000)
// }

// function displayData(processData) {
//     console.log(processData);
// }

// fetchData((data) => {
//     processData(data, (processedData) => {
//         displayData(processedData);
//     });
// });

// Promise
// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const data = { name: "Faizul Ulum", age: 25 };
//         resolve(data);
//     }, 3000);
// });

// fetchData.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

// Promise Then Catch
// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { name: "Faizul Ulum", age: 25 };
//             resolve(data);
//         }, 3000);
//     });
// }

// const processData = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.location = "Jakarta";
//             resolve(data);
//         }, 2000);
//     });
// };

// fetchData()
// .then(processData)
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// });

// Promise All
const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { name: "Faizul Ulum", age: 25 };
            resolve(user);
        }, 3000);
    });
};

const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = [
                { id: 1, title: "Post 1" },
                { id: 2, title: "Post 2" },
                { id: 3, title: "Post 3" }
            ];
            resolve(posts);
        }, 2000);
    });
};

const fetchComments = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const comments = [
                { id: 1, content: "Comment 1" },
                { id: 2, content: "Comment 2" },
                { id: 3, content: "Comment 3" }
            ];
            resolve(comments);
        }, 1000);
    });
};

Promise.all([fetchUser(), fetchPosts(), fetchComments()])
.then(([user, posts, comments]) => {
    console.log(user);
    console.log(posts);
    console.log(comments);
})
.catch((err) => {
    console.log(err);
});

// async/await
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "Faizul Ulum", age: 25 };
            resolve(data);
        }, 3000);
    });
}

async function displayData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

displayData();