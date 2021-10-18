import PropTypes from "prop-types";
import React from "react";
import Week from "react-big-calendar/lib/Week";
import moment from "moment-business-days";
import TimeGrid from "react-big-calendar/lib/TimeGrid";
import constants from "../utils/constants";

const now = moment().hours(0).minutes(0);

function workWeekRange(date) {
  const range = [];
  var firstOfWeek = moment(date).isBefore(now)
    ? moment(now).isBusinessDay()
      ? moment(now).toDate()
      : moment(now).nextBusinessDay().toDate()
    : moment(date).prevBusinessDay().toDate();
    
  for (let i = 0; i <= 4; i++) {
    const newDay = moment(firstOfWeek).businessAdd(i, "days").toDate();
    range.push(newDay);
  }
  
  return range;
}
const MyWorkWeek = (props) => {
  let { date } = props;

  let range = workWeekRange(date, props);

  return <TimeGrid {...props} range={range} eventOffset={15} />;
};

MyWorkWeek.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

MyWorkWeek.defaultProps = TimeGrid.defaultProps;

MyWorkWeek.range = workWeekRange;

MyWorkWeek.navigate = function (date, action) {
  switch (action) {
    case constants.navigate.PREVIOUS:
      if (!moment(date).isSameOrBefore(now)) {
        return moment(date).businessAdd(-1, "week");
      }
      
    case constants.navigate.NEXT:
      if(!moment(date).isBusinessDay()){
        return moment(date).businessAdd(1, "day");
      }else{

        return moment(date).businessAdd(1, "week");
      }
      
    default:
      return date;
  }
};

MyWorkWeek.title = function (date, _ref) {
  var localizer = _ref.localizer;

  var _workWeekRange = workWeekRange(date, {
      localizer: localizer,
    }),
    start = _workWeekRange[0],
    rest = _workWeekRange.slice(1);

  return (
    <span>
      {moment(start).format("DD-MMMM")} {"     "}
      {moment(rest.pop()).format("DD-MMMM")}
    </span>
  );
};
export default MyWorkWeek;



