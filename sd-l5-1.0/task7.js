export function rubricPerfect(score) {
    if (Number(score) === 11){
        return "Perfect"
    }
    else if (Number(score) > 8){
        return "Excellent"
    }
    else if (Number(score) >= 5 ){
        return "Pass"
    }
    else{
        return "Fail"
    }
}