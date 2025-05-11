function loanqualification (){
    let age = parseInt(document.getElementById("age").value);

    let salary = parseFloat(document.getElementById("salary").value);

    let result = document.getElementById("result")
    
    if (age>=18 && age <=60) {
        if (salary>=5000) {
            let loanamount= salary*3;
            if (loanamount>=60000) {
                loanamount=60000;
            }
            result.textContent=(
                `congratulation you are eligible for ${loanamount} EGP loan `
            )
        } else {
            result.textContent=("Applicant is rejected because they do not meet the minimum requirements")
        }
    } else {
        result.textContent=("Applicant is rejected because they do not meet the minimum requirements")
    }
}