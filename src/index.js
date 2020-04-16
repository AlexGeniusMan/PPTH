import {request, serverUpdatePosts, rerenderAll, serverUpdateTimetable} from "./redux/state";
import * as serviceWorker from './serviceWorker';

let url = 'http://localhost:3000/'

request(url + 'posts_data')
    .then(data => {
        serverUpdatePosts(data)

        request(url + 'timetable_1')
            .then(data => {
                serverUpdateTimetable(data)

                request(url + 'timetable_2')
                    .then(data => {
                        serverUpdateTimetable(data)

                        request(url + 'timetable_3')
                            .then(data => {
                                serverUpdateTimetable(data)

                                request(url + 'timetable_4')
                                    .then(data => {
                                        serverUpdateTimetable(data)

                                        request(url + 'timetable_5')
                                            .then(data => {
                                                serverUpdateTimetable(data)

                                                request(url + 'timetable_6')
                                                    .then(data => {
                                                        serverUpdateTimetable(data)
                                                        rerenderAll()
                                                    })
                                            })
                                    })
                            })
                    })
            })
    })

serviceWorker.unregister();
