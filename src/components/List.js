import React from "react";
import "./css/List.css";
function List(props){
    const displayEventList = props.listData.displayEventList;
    const months = props.listData.months;
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const displayDate = (obj) => {
        const start = new Date(obj["event_start_date"]);
        const end = new Date(obj["event_end_date"]);
        if(obj["event_start_date"] === obj["event_end_date"]){
            return `${start.getDate()} ${months[start.getMonth()]}` ;
        }else{
            return `${start.getDate()} - ${end.getDate()} ${months[end.getMonth()]}`;
        }
    }
    const displayDayOfWeek = (obj) => {
        const start = new Date(obj["event_start_date"]);
        const end = new Date(obj["event_end_date"]);
        if(obj["event_start_date"] === obj["event_end_date"]){
            return `${days[start.getDay()]}` ;
        }else{
            return `${days[start.getDay()]} - ${days[end.getDay()]}`;
        }
    }
    const renderEventList = () => {
        if(displayEventList.length === 0){
            return <div className="no-events">No events this month.</div>;
        }else{
            return displayEventList.map(obj => {
                return(
                    <button className="event-block" id={obj["id"]}>
                        <div className="block-container">
                            <div className="date-container">
                                <p className="event-date">
                                    {displayDate(obj)}
                                </p>
                                <p className="week-day">
                                    {displayDayOfWeek(obj)}
                                </p>
                            </div>
                            <div className="text-container">
                                <p className="event-name">
                                    {obj["event_name"]}
                                </p>
                                <p className="venue">
                                    {obj["venue"]}
                                </p>
                            </div>
                        </div>
                    </button>
                )
            })
        }
    }
    return (
        <React.Fragment>
            {renderEventList()}
        </React.Fragment>
    )
}

export default List;