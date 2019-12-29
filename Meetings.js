let myMeetings = {
    day: 'Monday',
    meets:  0,
    meetDone: 0,
}

let addMeeting = function(meeting,meet=0){
    meeting.meets = meeting.meets + meet
}

let meetingDone = function(meeting, meet=0){
    meeting.meetDone = meeting.meetDone + meet
}

let summaryOfDay = function(meeting){
    let meetingLeft = meeting.meets - meeting.meetDone
    return `Today is ${meeting.day}, and you have ${meetingLeft} meeting(s) left`
}

addMeeting(myMeetings,5)
addMeeting(myMeetings,2)

meetingDone(myMeetings,3)

console.log(summaryOfDay(myMeetings))