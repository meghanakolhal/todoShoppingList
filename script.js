let items = document.getElementById("getItems");
let arrItems = [];
function addFunc() {
  let item = items.value;
  // console.log(item)
  let alertMsg = document.getElementById("alertmsg")
  let i = 0;
  if (item == "") {
    alertMsg.style.color = 'red'
    alertMsg.style.fontSize = "13px"
    alertMsg.style.marginTop = "0"
    return alertMsg.innerText = '!!Kindly add products';
  }
  else {
    alertMsg.innerText = ""
    let i = arrItems.length;
    arrItems.push({ id: i, item: item, status: false });
    items.value = ""
    renderShoppingList();
  }
}
let div = document.getElementById("list");
let divDone = document.getElementById("done")
let divNotDone = document.getElementById("notdone")
let checkedArr = [];
let uncheckedArr = [];

function renderShoppingList() {
  // console.log(arrItems)
  div.innerHTML = ""
  
  for (let i = 0; i < arrItems.length; i++) {
    
    let innerDiv = document.createElement("div");
    let itemsSpan = document.createElement("span");
    itemsSpan.innerText = arrItems[i].item;
    if (arrItems[i].status===true){
      itemsSpan.style.textDecoration="line-through"
    }
    let check = document.createElement("input")
    check.setAttribute("type", "checkbox")
    if(arrItems[i].status===true){
      check.checked=true;
    }
    let edit = document.createElement("button")
    edit.innerHTML = "Edit"
    let dlt = document.createElement("button")
    dlt.innerHTML = "Delete"
    innerDiv.append(itemsSpan, check, edit, dlt)
    div.append(innerDiv)
    dlt.addEventListener('click', () => {
      // console.log(arrItems[i])
      // debugger; 
      arrItems.splice(arrItems.id, 1)
      renderShoppingList()
    })
    edit.addEventListener('click', () => {
      // console.log(arrItems[i].item)
      items.value = arrItems[i].item
    })
    check.addEventListener('change', () => {
      if (check.checked) {
        // console.log(arrItems[i])
        arrItems[i].status = true;
        itemsSpan.style.textDecoration = "line-through";
      }
      let doneBtn = document.getElementById("doneList");
      doneBtn.addEventListener('click', () => {
        div.style.display = "none"
          divNotDone.style.display = "none"
          divDone.style.display = "block"
      let liDone = document.createElement("li")
       for (let i=0;i< arrItems.length;i++){
        console.log(arrItems[i].status)
        if (arrItems[i].status === true) {
          console.log(arrItems)
         liDone.innerText = arrItems[i].item;
        }    
           divDone.append(liDone)

       }
      })
      let liNotDone = document.createElement("li")
      let notDoneBtn = document.getElementById("notDoneList")
  
      notDoneBtn.addEventListener('click', () => {
          div.style.display = "none"
          divDone.style.display = "none"
          divNotDone.style.display = "block"
        for(i=0;i<arrItems.length;i++){
          // console.log(arrItems[i].status)
          if (arrItems[i].status === false) {
          // console.log(arrItems[i])         
          liNotDone.innerText = arrItems[i].item;
          console.log(liNotDone)
          divNotDone.append(liNotDone)
        }
        }
        
      })
    })
     allBtn = document.getElementById("All");
    allBtn.addEventListener('click', () => {
      console.log("clicked")
      divDone.style.display = "none";
      divNotDone.style.display = "none";
      div.style.display = 'block';
      renderShoppingList();
    })
  }
   let dltAll = document.getElementById("deleteAll")
    dltAll.addEventListener('click', () => {
      // console.log("clicked")
      // console.log(arrItems)
      arrItems.splice(0, arrItems.length)
      renderShoppingList();
      // localStorage.setItem(key, arr[i])
    })
}

// let checkedArr = [];
// let uncheckedArr = [];
// let div = document.getElementById("list");
// let divDone = document.getElementById("done")
// let divNotDone = document.getElementById("notdone")
// function renderShoppingList() {
//   // console.log(arrItems)
//   div.innerHTML = ""
//   for (let i = 0; i < arrItems.length; i++) {
//     let key = i;
//     // localStorage.setItem(key, JSON.stringify(arrItems[i]))
//     let innerDiv = document.createElement("div");
//     let itemsSpan = document.createElement("span");
//     itemsSpan.innerText = arrItems[i];
//     let check = document.createElement("input")
//     check.setAttribute("type", "checkbox")
//     let edit = document.createElement("button")
//     edit.innerHTML = "Edit"
//     let dlt = document.createElement("button")
//     dlt.innerHTML = "Delete"
//     innerDiv.append(itemsSpan, check, edit, dlt)
//     div.append(innerDiv)


//     dlt.addEventListener('click', () => {
//       console.log(arrItems[i])
//       // debugger;
//       if (arrItems[i]) {
//         arrItems.splice(i, 1)
//         renderShoppingList();
//       }
//     })
//     edit.addEventListener('click', () => {
//       // console.log(arrItems[i])
//       if (arrItems[i]) {
//         items.value = arrItems[i]
//         // itemsSpan.innerText= items.value;
//       }

//     })
//     check.addEventListener('change', () => {
//       if (check.checked) {

//         itemsSpan.style.textDecoration = "line-through";
//         checkedArr.push(itemsSpan.innerText)
//       }
//       else {
//         itemsSpan.style.textDecoration = "none";
//         checkedArr.pop(itemsSpan.innerText)
//       }
//       for (let j=0;j<arrItems.length;j++){
//       if (arrItems[j] != checkedArr[j]) {
//         uncheckedArr.push(arrItems[j]) 
//       }
//       }
//       // console.log(checkedArr)

// // console.log(uncheckedArr[i])
//       let liDone = document.createElement("li")
//       let doneBtn = document.getElementById("doneList");
//       doneBtn.addEventListener('click', () => {
//         div.style.display = "none"
//         divNotDone.style.display = "none"
//         divDone.style.display = "block"
//         liDone.innerText = checkedArr[i]
//         divDone.append(liDone)
//       })
//       let liNotDone = document.createElement("li")
//       let notDoneBtn = document.getElementById("notDoneList")
//         notDoneBtn.addEventListener('click', () => {
//           console.log(uncheckedArr[i])
//           div.style.display = "none"
//           divDone.style.display = "none"
//           divNotDone.style.display = "block"
//           liNotDone.innerHTML =uncheckedArr[i]
//           divNotDone.append(liNotDone)
//         })

//     })

//     allBtn = document.getElementById("All");
//     allBtn.addEventListener('click', () => {
//       console.log("clicked")
//       console.log(arrItems)
//       divDone.style.display = "none"
//       divNotDone.style.display = "none"
//       div.style.display = 'block'
//       renderShoppingList();
//     })
//     let dltAll = document.getElementById("deleteAll")
//     dltAll.addEventListener('click', () => {
//       // console.log("clicked")
//       console.log(arrItems)
//       arrItems.splice(0, arrItems.length)
//       renderShoppingList();
//       localStorage.setItem(key, arr[i])
//     })
//   }
// }








