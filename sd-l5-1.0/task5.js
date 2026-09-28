export function rubricPassFail(score) {
    if(Number(score) >= 5 ){
        return "Pass"
    }
    else{
        return "Fail"
    }
}