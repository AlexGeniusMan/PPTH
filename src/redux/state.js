import {rerenderEntireTree} from "../render"
import image_1 from './Images/1.jpg'
import image_2 from './Images/2.jpg'
import image_3 from './Images/3.jpg'
import image_4 from './Images/4.jpg'
import image_5 from './Images/5.jpg'
import image_6 from './Images/6.jpg'

let state = {
    realAdminCode: 888,
    PostsCounter: 3,
    PostsData: [
        {
            id: 1,
            header: 'Для всех, кто подал заявку на вступление в лабораторию',
            date: '22.03.2020',
            content: 'Для всех, кто подал заявку на вступление в лабораторию будет проведено собрание в понедельник, 23.03.2019 в 18:00. Будет проведена онлайн трансляция, подробности сообщим ближе к 18.\n' +
                'Важно помнить, что в лабораторию могут попасть только студенты Института Информационных Технологий.\n' +
                '\n' +
                'Для того, чтобы стать членом лаборатории необходимо выполнить тестовые задания, о них мы подробно расскажем на собрании и опубликуем в группе.\n' +
                '\n' +
                'На стриме представители лаборатории расскажут о ее работе, чем конкретно занимаются студенты, как можно развиваться. Вопросы приветствуются!'
        },
        {
            id: 2,
            header: 'Для всех, кто подал заявку на вступление в лабораторию',
            date: '22.03.2020',
            content: 'Для всех, кто подал заявку на вступление в лабораторию будет проведено собрание в понедельник, 23.03.2019 в 18:00. Будет проведена онлайн трансляция, подробности сообщим ближе к 18.\n' +
                'Важно помнить, что в лабораторию могут попасть только студенты Института Информационных Технологий.\n' +
                '\n' +
                'Для того, чтобы стать членом лаборатории необходимо выполнить тестовые задания, о них мы подробно расскажем на собрании и опубликуем в группе.\n' +
                '\n' +
                'На стриме представители лаборатории расскажут о ее работе, чем конкретно занимаются студенты, как можно развиваться. Вопросы приветствуются!'
        },
        {
            id: 3,
            header: 'Для всех, кто подал заявку на вступление в лабораторию',
            date: '22.03.2020',
            content: 'Для всех, кто подал заявку на вступление в лабораторию будет проведено собрание в понедельник, 23.03.2019 в 18:00. Будет проведена онлайн трансляция, подробности сообщим ближе к 18.\n' +
                'Важно помнить, что в лабораторию могут попасть только студенты Института Информационных Технологий.\n' +
                '\n' +
                'Для того, чтобы стать членом лаборатории необходимо выполнить тестовые задания, о них мы подробно расскажем на собрании и опубликуем в группе.\n' +
                '\n' +
                'На стриме представители лаборатории расскажут о ее работе, чем конкретно занимаются студенты, как можно развиваться. Вопросы приветствуются!'
        }
    ],
    TimeTableData: [
        [
            {
                coupleName: '1',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '2',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '3',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '4',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '5',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '6',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
        ],
        [
            {
                coupleName: '1',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '2',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '3',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '4',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '5',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '6',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
        ],
        [
            {
                coupleName: '1',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '2',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '3',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '4',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '5',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '6',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
        ],
        [
            {
                coupleName: '1',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '2',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '3',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '4',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '5',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '6',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
        ],
        [
            {
                coupleName: '1',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '2',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '3',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '4',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '5',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '6',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
        ],
        [
            {
                coupleName: '1',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '2',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '3',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '4',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '5',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
            {
                coupleName: '6',
                subjectName: 'Subject Name',
                teacherName: 'Teacher Name',
                placeName: 'Place Name'
            },
        ],
    ],
    AboutData: [
        {
            id: 1,
            name: 'Gregory House',
            image: image_1,
            desc: '"It’s a basic truth of the human condition that everybody lies. The only variable is about what."'
        },
        {
            id: 2,
            name: 'Lisa Cuddy',
            image: image_2,
            desc: '"When things go run, I don\'t wanna hope I\'m not alone, I wanna know it."'
        },
        {
            id: 3,
            name: 'James Wilson',
            image: image_3,
            desc: '"My watch must have stopped. Must be a quarter to never."'
        },
        {
            id: 4,
            name: 'Eric Foreman',
            image: image_4,
            desc: '"I\'d stand outside your apartment all night and hold a boom box, except you told me you hate 80\'s music."'
        },
        {
            id: 5,
            name: 'Allison Cameron',
            image: image_5,
            desc: '"We need to get away from Princeton-Plainsboro."'
        },
        {
            id: 6,
            name: 'Robert Chase',
            image: image_6,
            desc: '"Getting knifed doesn\'t get me an extension?"'
        }
    ]
}

export let updateTimeTableData = (AdminCode, day, couple, newSubject, newTeacher, newPlace) => {
    if (AdminCode == state.realAdminCode) {
        let dayId = String(+day - 1)
        let coupleId = String(+couple - 1)
        state.TimeTableData[dayId][coupleId].subjectName = newSubject;
        state.TimeTableData[dayId][coupleId].teacherName = newTeacher;
        state.TimeTableData[dayId][coupleId].placeName = newPlace;
    } else {
        alert('False AdminCode!')
    }

    rerenderEntireTree(state)
}

export let updateAboutName = (AdminCode4Name, newNameId, newName) => {
    if (AdminCode4Name == state.realAdminCode) {
        let Id = String(+newNameId - 1)
        state.AboutData[Id].name = newName

        rerenderEntireTree(state)
    } else {
        alert('False AdminCode!')
    }
}

export let updateAboutDesc = (AdminCode4Desc, newDescId, newDesc) => {
    if (AdminCode4Desc == state.realAdminCode) {
        let Id = String(+newDescId - 1)
        state.AboutData[Id].desc = newDesc

        rerenderEntireTree(state)
    } else {
        alert('False AdminCode!')
    }
}

export let updateAboutImage = (newImage) => {
    // debugger
    // if (AdminCode4Desc == state.realAdminCode) {
    debugger
    // let Id = String(+newImageId - 1)
    debugger
    state.AboutData[0].image = newImage
    debugger
    rerenderEntireTree(state)
    // } else {
    //     alert('False AdminCode!')
    // }
}

export let addPost = (AdminCode, tempHeader, tempContent) => {
    if (AdminCode == state.realAdminCode) {
        let d = new Date();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        let newPost = {
            id: undefined,
            header: tempHeader,
            date: day + "." + month + "." + year,
            content: tempContent
        }
        state.PostsData.unshift(newPost)
        rerenderEntireTree(state)
    } else {
        alert('False AdminCode!')
    }
}

export default state;