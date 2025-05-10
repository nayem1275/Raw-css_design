let question=[{question:'What is you name',
                 answer:[{text:'nayem',value:'true'},
                    {text:'nadim',value:'false'},
                    {text:'najim',value:'false'},
                    {text:'nazib',value:'false'}
                 ]
}]

function show(){
                  question.forEach(element => {
                     console.log (element.question)
                     console.log(element.answer[0].text)
                     console.log(element.answer[0].value)
                       console.log(element)
                  });
}

show()