<h2 style="text-decoration:underline;">My Landing Page Project</h2>

<ul>
<li><code>HTML</code></li>
<li><code>CSS</code></li>
<li><code>Javascript</code></li>
</ul>

<h3 id="html1" style="text-decoration:underline;">HTML</h3>
<p>Ive started my HTML page by dividing the page's grid, but Instead of using grid I went for flexbox since my elements are going to be fixed eitherway.
Ive drawn a map in my mind for how I want the page to be divided, an element for the main header and
an element for the Nav bar container and an element for the content container and last, but not least my footer. After my main elements were created I've started creating contained elements within my parent nodes, adding my first 5 static elements in both the Nav bar and the content container.</p>
<h3 id="css" style="text-decoration:underline;">CSS</h3>
<p>In this section I've started translating the dimensions of the elements I had in mind into CSS classes to minimize the effort of redundant inline properties. My main elements with dynamic interactions were the Nav bar and the content container. Adding other specs to my CSS classes to make my page more interactive, I've went ahead and created a hover class for most of my pre existing classes.</p>
<h3 id="javascript" style="text-decoration:underline;">Javscript</h3>
<p>Here comes the tricky part! I've began my Webpage's interaction programming with the Nav bar which was a tedious task to begin with, having to nest both setInterval and setTimeout functions was quite the challenge, having to understand how they function within the Event Loop and how they execute upon declaration and their inline function dependency made it abit hard to maintain my fast pace. Afterwards I started working with dynamically adding webpage content to both my NavBar and my Content Container by adding a form element and extracting the form values divided into a header and a paragraph to be added into a new Inner Content Element respectively and for the head value it was added into my Nav Bar Pointers aswell. Finally a quick delete button was added in order to remove any unnecessary Content off of the NavBar and the Content Container by doing the exact same procedure, but with a remove() function instead of appending. A quick trick was to turn a Selection By Class DOMArray into a normal Array to find a specific Elements index by using OfIndex() with my new acquired array in order to delete the required element. </p>