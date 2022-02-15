var sa = [];

function submit() {

    for(s = 1; s <= 4; s++) {
        var sn = document.getElementById("name_of_the_student_"+s).value
        sa.push(sn)
    }


    for(e = 0; e <= 3; e++) {
        document.getElementById("display_name_without_commas").innerHTML += sa[e]+"<br>"
    }

    document.getElementById("submit_button").style.display = "none"
    document.getElementById("sort_button").style.display = "inline-block"

}

function sorting() {
    
    sa.sort()
    
    for(e = 0; e <= 3; e++) {
        document.getElementById("display_name_with_commas").innerHTML += sa[e]+"<br>"
    }

}