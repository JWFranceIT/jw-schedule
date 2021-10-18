import moment from "moment";

export default function TimeCalcul(date, sortedEvents, time, startHourPlanning, startMinutePlanning, endHourPlanning, endMinutePlanning) {
    const rangeSlots = [];
    
  for (let i = 0; i < sortedEvents.length; i++) {
    var a = moment(sortedEvents[i].end);
    var b = moment(sortedEvents[i + 1]?.start);
    const toto = b.diff(a, "minutes");
    
    if (toto < time && toto > 0) {
      rangeSlots.push(moment(a).toDate());
    }

    // var startEventSlot = moment(sortedEvents[i].start);
    // var startPlanning = moment(date).set('hours', startHourPlanning).set("minute", startMinutePlanning)
    // const diffBetweenStart = moment(startEventSlot).diff(startPlanning, "minutes")
    // var endEventSlot = moment(sortedEvents[i].end);
    // var endPlanning = moment(date).set('hours', endHourPlanning ).set("minute", endMinutePlanning)
    // const diffBetweenEnd = moment(endPlanning).diff(endEventSlot, "minutes")
    //   if(diffBetweenStart < time && diffBetweenStart > 0) {
    //     rangeSlots.push(moment(startPlanning).toDate())
    //   }
    //   if(diffBetweenEnd < time && diffBetweenEnd > 0){
    //   rangeSlots.push(moment(endPlanning).toDate())
    //   }
    //   if(rangeSlots.find(element => moment(element.toString() === moment(endPlanning).toString() !== undefined))){
    //     rangeSlots.push(moment(endPlanning).toDate())
    //   }
}
  return rangeSlots;
}
