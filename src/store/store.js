import {createStore} from 'vuex'

const restfulAPI_path = "http://192.168.0.156:3000"

export const store = createStore({
    state() {
        return {
            station1: {},
            station2: {},
            station3: {},
            station4: {},
            station5: {},
            station6: {},
            station7: {},
            station8: {}
        }
    },
    mutations: {
        setStation(state, value) {
            state["station"+value.stationNumber] = value.json
        },
        deleteStationEvent(state, payload) {
            console.log("deleting event...", payload.stationNumber, payload.day, payload.eventId)
            let scheduleEvents = state['station'+payload.stationNumber][payload.day]
            const filteredEvents = scheduleEvents.filter((scheduleEvent)=>{
                return payload.eventId!=scheduleEvent.id
            })
            state['station'+payload.stationNumber][payload.day] = filteredEvents
        },
        addStationEvent(state, payload) {
            let stationEvents = state["station"+payload.stationNumber][payload.day]
            stationEvents.push(payload.event)
            state["station"+payload.stationNumber][payload.day]=stationEvents
        }
    },
    getters: {
        getStation1(state) { return state.station1 },
        getStation2(state) { return state.station2 },
        getStation3(state) { return state.station3 },
        getStation4(state) { return state.station4 },
        getStation5(state) { return state.station5 },
        getStation6(state) { return state.station6 },
        getStation7(state) { return state.station7 },
        getStation8(state) { return state.station8 },
    },
    actions: {
        loadStation: (context, payload) => {
            const request = new Request(restfulAPI_path+"/schedule/station/"+payload.stationNumber, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            fetch(request)
                .then((res)=>{
                    return res.json()
                })
                .then(json => {
                    context.commit('setStation', {json, stationNumber:payload.stationNumber})
                })
                .catch((err)=>{
                    console.log(err)
                })
        },
        deleteStationEvent: (context, payload) => {
            fetch(restfulAPI_path+"/schedule/station/"+payload.stationNumber+"/day/"+payload.day+"/event/"+payload.eventId, {
                method: "DELETE"
            })
                .then((res)=>{
                    console.log("Success?", res.ok)
                })
                .catch((err)=>{
                    console.log(err)
                })
        },
        createStationEvent: (context, payload) => {
            fetch(restfulAPI_path+"/schedule/station/"+payload.stationNumber+"/day/"+payload.day, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({startTime: payload.startTime, duration: payload.duration})
            })
                .then((res)=>res.json())
                .then(json=>{
                    context.commit('addStationEvent', {event: {id: json.id, startTime: payload.startTime, duration: payload.duration}, stationNumber:payload.stationNumber, day: payload.day})
                })
                .catch((err)=>{
                    console.log(err)
                })
        }
    }

})
