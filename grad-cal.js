let grade= function(score,total){
  
    let percent=(score/total)*100

    if(percent>=90&&percent<=100)
    {
        console.log( `You got ${percent}% and GRADE IS A`)
    }
    else if (percent>=80&&percent<=89)
    {
        console.log( `You got ${percent}% and GRADE IS B`)

    }

    else if (percent>=70&&percent<=79)
    {
        console.log( `You got ${percent}% and GRADE IS C`)
        
    }
    else if (percent>=60&&percent<=69)
    {
        console.log( `You got ${percent}% and GRADE IS D`)
        
    }
    else
    {
        console.log( `You got ${percent}% and GRADE IS F`)
    }
    

}
grade(20,20)

