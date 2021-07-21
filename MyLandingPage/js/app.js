// Initiation of variables
const NavBar = document.querySelector('.nav_bar');
const ContentBody = document.querySelector('.content');
const NavPath = document.querySelector('.nav_bar_path');
var stop = false;

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
    else{
        stop = true;
    }
}
// A Function to return the Nav Bar to Original Position
NavReturn = function (Pixels){
    if (NavBar.style.left !== '-165px')
    {
        Pixels = Pixels.replace('px','');
        Pixels = parseInt(Pixels);
        Pixels -= 1;
        NavBar.style.left = String(Pixels)+'px';
    }
    else{
        stop = false;
    }
}
// Even listener to invoke NavBar Offsetting and highlighting of content
const EventsArray2 = ['scroll','touchmove']
for (let i of EventsArray2){


document.addEventListener('scroll',function(){
    // NavBar Movement
    // An Interval to invoke the NavMove Fn*
    const NavRight = setInterval(function(){
        if (stop === false){
            NavMove(NavBar.style.left);
        }
        else if (stop === true){
            const Toggler = setTimeout(function(){
                const NavLeft = setInterval(function(){
                    if (stop === true){
                        NavReturn(NavBar.style.left);
                    }
                    else if (stop === false){
                        clearInterval(NavLeft);
                        clearTimeout(Toggler);
                    }
                },0.8);
            },3000);
            clearInterval(NavRight);
        }
    })
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
}
const EventsArray = ['mouseover','touchstart'];
for (let i of EventsArray){
    NavPath.addEventListener(i,function(){
    // NavBar Movement
   // NavBar Movement
    // An Interval to invoke the NavMove Fn*
    const NavRight = setInterval(function(){
        if (stop === false){
            NavMove(NavBar.style.left);
        }
        else if (stop === true){
            const Toggler = setTimeout(function(){
                const NavLeft = setInterval(function(){
                    if (stop === true){
                        NavReturn(NavBar.style.left);
                    }
                    else if (stop === false){
                        clearInterval(NavLeft);
                        clearTimeout(Toggler);
                    }
                },0.8);
            },3000);
            clearInterval(NavRight);
        }
    })
});
}


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

// Event listener to hide inner content body

ContentBody.addEventListener('click',function(event){
    const HeaderTarget = event.target;
    const InnerHeaders = document.querySelectorAll('.inner_header');
    const InnerBodies = document.querySelectorAll('.inner_paragraph');
    const BodyIndex = Array.from(InnerHeaders).indexOf(HeaderTarget);
    const BodyOfHeader = InnerBodies[BodyIndex];
    const BodyDisplay = BodyOfHeader.style.display;
    if (BodyDisplay !== 'none')
    {
        BodyOfHeader.style.display = 'none';
    }
    else {
        BodyOfHeader.style.display = '';
    }

})
