import React from "react";
import "./css/Months.css";
function Months(props){
    const monthNotSelected = { "background": "#4F5454" };    
    const monthSelected = { "background": "#181A1C" };
    const selectedMonth = props.monthData.selectedMonth;
    const months = props.monthData.months;
    return (
        <React.Fragment>
            <div className="month-container">
                {months.map((month, index) => {
                    return  <button className="month-button"
                                    id={index}
                                    onClick={props.handleMonth}
                                    style={selectedMonth == index ? monthSelected : monthNotSelected}>
                                {month}
                            </button>
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default Months;