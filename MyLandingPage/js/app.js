// Initiation of variables
const NavBar = document.querySelector('.nav_bar');
const ContentBody = document.querySelector('.content');
const NavPath = document.querySelector('.nav_bar_path');

// This is to initiate the Nav Bar upon first loading of the page
window.scroll(0,1);
// Animation for Nav Bar and Nav Content Highlight

// A Function to create the offset of the Nav Bar
NavMove = function (Pixels){
    if (NavBar.style.left !== '-30px')
    {
        Pixels = Pixels.replace('px','');
        Pixels = parseInt(Pixels);
        Pixels += 1;
        NavBar.style.left = String(Pixels)+'px';
    }
}
// A Function to return the Nav Bar to Original Position
NavReturn = function (Pixels){
    if (NavBar.style.left !== '-195px')
    {
        Pixels = Pixels.replace('px','');
        Pixels = parseInt(Pixels);
        Pixels -= 1;
        NavBar.style.left = String(Pixels)+'px';
    }
}
// Even listener to invoke NavBar Offsetting and highlighting of content
document.addEventListener('scroll',function(){
    // NavBar Movement
   if (NavBar.style.left === '-195px'){
       var NavRight = setInterval(function(){NavMove(NavBar.style.left)},0.8);
       var Toggler = setTimeout(function(){
           clearInterval(NavRight);
           clearTimeout(Toggler);
       },3000);
       var Toggler2 = setTimeout(function(){
           var NavLeft = setInterval(function(){NavReturn(NavBar.style.left)},0.8);
           var Toggler3 = setTimeout(function(){
           clearInterval(NavLeft);
           clearTimeout(Toggler2);
           clearTimeout(Toggler3);
       },1000);
       },3000);

   }
   // Content Highlighting
     const ScrolledTo = document.documentElement.scrollTop;
     const InnerContent = document.querySelectorAll('.inner_content');
     const InnerArray = Array.from(InnerContent);
     for (let singlecontent of InnerArray){
        if (ScrolledTo <= singlecontent.offsetTop){
            var index2 = InnerArray.indexOf(singlecontent);
            break;
        }
        else
        {
         const  index= 0;
        }
     }
    const ContentHighlighted = document.querySelectorAll('.nav_pointer');
     for (let i of ContentHighlighted){
         if (!(i.classList.contains('fixed'))){
             i.style.backgroundColor = 'mediumpurple';
         }
     }
     ContentHighlighted[index2].style.backgroundColor ='black';
});

NavPath.addEventListener('mouseover',function(){
    // NavBar Movement
   if (NavBar.style.left === '-195px'){
       var NavRight = setInterval(function(){NavMove(NavBar.style.left)},0.8);
       var Toggler = setTimeout(function(){
           clearInterval(NavRight);
           clearTimeout(Toggler);
       },3000);
       var Toggler2 = setTimeout(function(){
           var NavLeft = setInterval(function(){NavReturn(NavBar.style.left)},0.8);
           var Toggler3 = setTimeout(function(){
           clearInterval(NavLeft);
           clearTimeout(Toggler2);
           clearTimeout(Toggler3);
       },1000);
       },3000);

   }
})

// Scrolling to content

NavBar.addEventListener('click',function(event){
    const Target = event.target;
    if (Target.classList.contains('nav_pointer')){
        const NavChildren = NavBar.children;
        for (let i of NavChildren){
            if (!(i.classList.contains('fixed')))
            {
                i.style.backgroundColor = 'mediumpurple';
            }
        }
        Target.style.backgroundColor = 'Black';
        const NavChildrenArray = Array.from(NavBar.children);
        const index = NavChildrenArray.indexOf(Target);
        let ScrollToContent = document.body.querySelectorAll('.inner_content')[index-1];
        ScrollToContent.scrollIntoView(true);
    }
})

// Adding paragraphs via form

ContentBody.addEventListener('click',function (event){
    if (event.target.classList.contains('paragraph_submit'))
    {
        const fragment = document.createDocumentFragment();
        const headform = document.querySelector('#headform');
        const bodyform = document.querySelector('#bodyform');
        if (headform.value === '' || bodyform.value ==='')
        {
          alert('Please write a header and a paragraph');
        }
        else{
            const paragraph_form = document.querySelector('.paragraph_form');
        const innerContent_addition = document.createElement('div');
        const contentHeader_addition = document.createElement('div');
        const contentBody_addition = document.createElement('p');
        const nav_pointer = document.createElement('div');
        const delete_button = document.createElement('div');
        delete_button.classList.add('delete');
        delete_button.innerText = 'X';
        nav_pointer.classList.add('nav_pointer');
        nav_pointer.innerText = headform.value;
        innerContent_addition.classList.add('inner_content');
        contentHeader_addition.classList.add('inner_header');
        contentHeader_addition.innerText = headform.value;
        contentBody_addition.classList.add('inner_paragraph');
        contentBody_addition.innerText = bodyform.value;
        innerContent_addition.appendChild(contentHeader_addition);
        innerContent_addition.appendChild(contentBody_addition);
        innerContent_addition.appendChild(delete_button);
        ContentBody.insertBefore(innerContent_addition,paragraph_form);
        NavBar.appendChild(nav_pointer);
        }
    }
    else if(event.target.classList.contains('delete'))
    {
        const InnerContentFix = document.querySelectorAll('.inner_content');
        const NavPointer = document.querySelectorAll('.nav_pointer');
        const DeleteTarget = event.target;
        const ParentDelete = DeleteTarget.parentNode;
        const NavIndex = Array.from(InnerContentFix).indexOf(ParentDelete);
        NavPointer[NavIndex].remove();
        ParentDelete.remove();

    }
})