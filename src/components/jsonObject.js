export const jsonObject = [
    {
        "id": 1,
        "event_host": "IBJJF",
        "event_name": "Rio Summer International Open IBJJF Jiu - Jitsu Championship 2022",
        "event_start_date": new Date(2022, 0, 29).toISOString() ,//the month is 0-indexed
        "event_end_date": new Date(2022, 0, 30).toISOString() ,//the month is 0-indexed
        "venue": "Arena Cel Wenceslau Malta - Parque Olímpico da Vila Militar, Rio de Janeiro",
        "category": "Gi"
    },
    {
        "id": 2,
        "event_host": "IBJJF",
        "event_name": "Rio Summer International Open No Gi IBJJF Jiu - Jitsu Championship 2022",
        "event_start_date": new Date(2022, 0, 29).toISOString() ,//the month is 0-indexed
        "event_end_date": new Date(2022, 0, 30).toISOString() ,//the month is 0-indexed
        "venue": "Arena Cel Wenceslau Malta - Parque Olímpico da Vila Militar, Rio de Janeiro",
        "category": "No Gi"
    },
    {
        "id": 3,
        "event_host": "IBJJF",
        "event_name": "Pan Pacific IBJJF Jiu - Jitsu Championship 2022",
        "event_start_date": new Date(2022, 9, 28).toISOString() ,//the month is 0-indexed
        "event_end_date": new Date(2022, 9, 29).toISOString() ,//the month is 0-indexed
        "venue": "Melbourne Sports and Aquatics Centre, Alberta Park",
        "category": "Gi"
    },
    {
        "id": 4,
        "event_host": "IBJJF",
        "event_name": "Pan Pacific Kids IBJJF Jiu-Jitsu Championship 2022",
        "event_start_date":  new Date(2022, 9, 29).toISOString() ,//the month is 0-indexed
        "event_end_date":  new Date(2022, 9, 29).toISOString() ,//the month is 0-indexed
        "venue": "Melbourne Sports and Aquatics Centre, Alberta Park",
        "category": "Gi"
    },
    {
        "id": 5,
        "event_host": "IBJJF",
        "event_name": "Pan Pacific IBJJF Jiu-Jitsu No-Gi Championship 2022",
        "event_start_date":  new Date(2022, 9, 30).toISOString() ,//the month is 0-indexed
        "event_end_date":  new Date(2022, 9, 30).toISOString() ,//the month is 0-indexed
        "venue": "Melbourne Sports and Aquatics Centre, Alberta Park",
        "category": "Gi"
    },
    {
        "id": 6,
        "event_host": "IBJJF",
        "event_name": "Orlando Summer International Open IBJJF Jiu-Jitsu Championship 2022",
        "event_start_date":  new Date(2022, 6, 21).toISOString() ,//the month is 0-indexed
        "event_end_date": new Date(2022, 6, 22).toISOString() ,//the month is 0-indexed
        "venue": "Osceola Heritage Park, Kissimmee",
        "category": "Gi"
    },
    {
        "id": 7,
        "event_host": "IBJJF",
        "event_name": "Orlando Summer International Open IBJJF Jiu-Jitsu No-Gi Championship 2022",
        "event_start_date":  new Date(2022, 6, 21).toISOString() ,//the month is 0-indexed
        "event_end_date": new Date(2022, 6, 22).toISOString() ,//the month is 0-indexed
        "venue": "Osceola Heritage Park, Kissimmee",
        "category": "No Gi"
    },
    {
        "id": 8,
        "event_host": "IBJJF",
        "event_name": "Austin Summer International Open IBJJF Jiu-Jitsu Championship 2022",
        "event_start_date": new Date(2022, 6, 16).toISOString() ,//the month is 0-indexed
        "event_end_date": new Date(2022, 6, 17).toISOString() ,//the month is 0-indexed
        "venue": "Round Rock Sports Center, Round Rock",
        "category": "Gi"
    },
    {
        "id": 9,
        "event_host": "IBJJF",
        "event_name": "Washington D.C. International Open IBJJF Jiu-Jitsu Championship 2022",
        "event_start_date": new Date(2022, 5, 25).toISOString() ,//the month is 0-indexed
        "event_end_date": new Date(2022, 5, 25).toISOString() ,//the month is 0-indexed
        "venue": "Prince George's Sports and Learning Complex, Landover",
        "category": "Gi"
    },
    {
        "id": 10,
        "event_host": "IBJJF",
        "event_name": "Washington D.C. International Open IBJJF Jiu-Jitsu No-Gi Championship 2022",
        "event_start_date": new Date(2022, 5, 25).toISOString() ,//the month is 0-indexed
        "event_end_date": new Date(2022, 5, 25).toISOString() ,//the month is 0-indexed
        "venue": "Prince George's Sports and Learning Complex, Landover",
        "category": "No Gi"
    }].sort((a,b) => {
        return new Date(a['event_start_date']).getTime() - new Date(b['event_start_date']).getTime();
    });
    export default {jsonObject};