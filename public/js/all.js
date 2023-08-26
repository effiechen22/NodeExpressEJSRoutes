//DOM元素
const ajaxTitleInput = document.querySelector('#ajaxTitleInput');
const ajaxContentInput = document.querySelector('#ajaxContentInput');
const ajaxSubmitBtn= document.querySelector('#ajaxSubmitBtn');


// AJAX技術 - 傳送'x-www-form-urlencoded'格式
// ajaxSubmitBtn.addEventListener('click',(e)=>{
//    e.preventDefault();
//    let titleInput = ajaxTitleInput.value;
//    let contentInput = ajaxContentInput.value;
//    // console.log(titleInput,contentInput);

//    var xhr = new XMLHttpRequest();
//    xhr.open('post','/search/searchAJAX');
//    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

//    // title=hello&content=world
//    let data = 'title='+titleInput+'&content='+contentInput;
//    xhr.send(data);

//    xhr.onload = ()=>{
//       alert(xhr.responseText);
//    }
// });

// AJAX技術 - 傳送'json'格式
ajaxSubmitBtn.addEventListener('click',(e)=>{
   e.preventDefault();
   let titleInput = ajaxTitleInput.value;
   let contentInput = ajaxContentInput.value;
   // console.log(titleInput,contentInput);

   var xhr = new XMLHttpRequest();
   xhr.open('post','/search/searchAJAX');
   xhr.setRequestHeader("Content-type","application/json");

   // {'title':titleInput,'content':contentInput,}
   let data = JSON.stringify({'title':titleInput,'content':contentInput,});
   xhr.send(data);

   xhr.onload = ()=>{
      alert(xhr.responseText);
   }
});
