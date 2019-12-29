let myMeetings = {
    day: 'Monday',
    meets: 0,
    meetDone: 0,

    addMeeting: function(num){
        this.meets = this.meets + num
    },

    doneMeeting: function(num){
        this.meetDone = this.meetDone + num
    },

    resetMeeting: function(){
        this.meets = 0
        this.meetDone = 0
    },

    summary: function(){
        let meetLeft = this.meets - this.meetDone
        return `Today is ${this.day}, and you have ${meetLeft} meeting(s) left`
    }
}

myMeetings.addMeeting(5)
myMeetings.addMeeting(3)
myMeetings.doneMeeting(2)

console.log(myMeetings.summary())

myMeetings.resetMeeting()
console.log(myMeetings.summary())