let addTaskBtn = document.getElementById('addTask');

let toDoContainer = document.getElementById('todo');

let count=0;
addTaskBtn.addEventListener("click",  ()=>{
   let parentCard=document.createElement('div');
   parentCard.style.backgroundColor="lightblue"
    let card = document.createElement('div');
    // card.className = 'card';
    card.id=`card-${++count}`
    //card.setAttribute("id",`card-${++count}`)
    card.setAttribute("class","card")//alternative of above comment if presend ingnored
    card.innerText = "Test Card"
    //iner text editables
    card.contentEditable=true;
    //toDoContainer.append(card)
     parentCard.append(card);
    card.addEventListener("click",(Event)=>{
      if(card.innerText=="Test Card")
        card.innerText="";
    })
    card.addEventListener("blur",()=>{
        if(card.innerText.trim()==""){
            parentCard.remove();
        }
    })

    const dropDown=document.createElement('select')
    dropDown.innerHTML=`
    <Option value="todo">ToDo</Option>
    <Option value="progress">Progress</Option>
    <Option value="done">Done</Option>
`
           parentCard.append(dropDown);
    dropDown.addEventListener("change",(event)=>{
          let selectValue=dropDown.value;
          let columTOBeMove=document.getElementById(selectValue);
          columTOBeMove.append(parentCard);
    })

    toDoContainer.append(parentCard)
})
