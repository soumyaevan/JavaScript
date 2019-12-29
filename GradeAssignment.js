let calculateGrade = function(marksObtained, totalMarks){
    let percentage = (marksObtained * 100) / totalMarks
    if  (percentage >= 90) {
        return 'A'
    }else if (percentage >= 80){
        return 'B'
    }else if (percentage >=70){
        return 'C'
    }else if(percentage >=50){
        return 'D'
    }else{
        return 'F'
    }
}

//let grade = calculateGrade(48,60)
console.log(calculateGrade(48,60))