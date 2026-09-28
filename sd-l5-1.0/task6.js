export function rubricExcellent(score) {
    if (Number(score) > 8){
        return "Excellent"
    }
    else if (Number(score) >= 5 ){
        return "Pass"
    }
    else{
        return "Fail"
    }
}