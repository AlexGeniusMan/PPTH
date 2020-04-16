import {rerenderEntireTree} from "../render"

let realAdminCode = "888"
let state = {
    posts_data: [],
    timetable_1: [],
    timetable_2: [],
    timetable_3: [],
    timetable_4: [],
    timetable_5: [],
    timetable_6: []
}

export let serverUpdatePosts = (newData) => {
    state.posts_data.length = 0
    state.posts_data = newData
}

export let serverUpdateTimetable = (newData) => {
    let tempTTid = 'timetable_' + newData[6].dayId
    state[tempTTid].length = 0
    state[tempTTid] = newData
}

export let rerenderAll = () => {
    rerenderEntireTree(state)
}

export async function request(url, method = 'GET', data = null) {
    try {
        const headers = {}
        let body

        if (data) {
            headers['Content-Type'] = 'application/json'
            body = JSON.stringify(data)
        }

        const response = await fetch(url, {
            method,
            headers,
            body
        })

        return await response.json()
    } catch (e) {
        console.warn('Error:', e.message)
    }
}


export let addPost = (AdminCode, tempHeader, tempContent) => {
    if (AdminCode === realAdminCode) {
        let d = new Date();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        let newPost = {
            header: tempHeader,
            date: day + "." + month + "." + year,
            content: tempContent
        }
        let url = 'http://localhost:3000/posts_data/'
        request(url, "POST", newPost)
            .then(data => {
                request(url)
                    .then(data => {
                        serverUpdatePosts(data)
                        rerenderAll()
                    })
            })
    } else {
        alert('False AdminCode!')
    }
}

export let deletePost = (AdminCode, PostId) => {
    if (AdminCode === realAdminCode) {
        let url = 'http://localhost:3000/posts_data/'
        request(url + PostId, "DELETE")
            .then(data => {
                request(url)
                    .then(data => {
                        serverUpdatePosts(data)
                        rerenderAll()
                    })
            })
    } else {
        alert('False AdminCode!')
    }
}

export let updateTimeTableData = (AdminCode, day, couple, newSubject, newTeacher, newPlace) => {
    if (AdminCode === realAdminCode) {
        let url = 'http://localhost:3000/'
        let coupleId = String(+couple)
        let dayId = String(+day)

        let newCoupleData = {
            subject: newSubject,
            teacher: newTeacher,
            place: newPlace
        }
        if (Number(dayId) > 0 && Number(dayId) < 7) {
            if (Number(coupleId) > 0 && Number(coupleId) < 7) {
                request(url + 'timetable_' + dayId + '/' + coupleId, 'PUT', newCoupleData)
                    .then(data => {
                        request(url + 'timetable_' + dayId)
                            .then(data => {
                                serverUpdateTimetable(data)
                                rerenderAll()
                            })
                    })
            } else {
                alert('False Couple Id!')
            }
        } else {
            alert('False Day Id!')
        }
    } else {
        alert('False AdminCode!')
    }

    rerenderEntireTree(state)
}

export default state;