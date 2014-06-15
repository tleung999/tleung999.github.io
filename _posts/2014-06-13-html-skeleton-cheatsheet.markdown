---
layout: cheat-post
title:  "HTML Skeletal Structure - Cheatsheet"
date:   2014-06-13 12:00:00
categories: Cheatsheet
name: Tony Leung
image: /img/html.jpg 
snippet: "My HTML Cheatsheet for quick reference - Basic tag structure"
---
Skeletal Structure of a web page

{% highlight html linenos %}
<!DOCTYPE html>
<html>
  <head>
    <!--link a css file to your webpage-->
    <link type="text/css" rel="stylesheet" href="stylesheet.css" />
    <!-- you can also directly add css in between the style tag-->
    <style type="text/css">
      /* All css information here*/
    </style>
    <!-- title of your web page-->
    <title>
      Sample Title
    </title>
  </head>
  <!--main body of webpage-->
  <body bgcolor="orange">
    <!-- header container tag -->
    <header>
      <!-- Nav container tag to build a nav bar -->
      <nav>
        <ul>
          <li><a href="../index.html"><i class="fa fa-home"></i> Home</a></li>
          <li><a href="work.html"><i class="fa fa-desktop"></i> Work</a></li>
          <li><a href="about.html"><i class="fa fa-user"></i> About</a></li>
          <li><a href="contact.html"><i class="fa fa-comment-o"></i> Contact</a></li>
        </ul>
      </nav>
    </header>
    <!-- section tag to wrap into a container -->
    <section>
      <!-- container to wrap article -->
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur   adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>        
      </article>
    </section>
    <!-- use this tag to name a side well -->
    <aside>
      <p>My side well</p>
    </aside>
    <!-- footer container tag -->
    <footer>
      <div>
        Social networking links
      </div>
    </footer>
    <!--You can use Header tags from h1 to h6 - Largest to smallest-->
    <h1 id="hih1">Hi</h1>
    <h2 class="hih2">Hi</h2>
    <h3>Hi</h3>
    <h4>Hi</h4>
    <h5>Hi</h5>
    <h6>Hi</h6>
    <!--ordered list-->
    <ol>
      <li>list 1</li>
      <ol>
        <li>inner list</li>
      </ol>
      <li>list 2</li>
    </ol>
    <!--unordered list-->
    <ul>
      <li>list 1</li>
      <li>list 2</li>
    </ul>
    <!--standard paragraph -->
    <p>
      I am in the paragraph
      <!--hyperlink using bold and italized-->
      <a href="http://www.pcworld.com"><strong><em>Link to PCWorld</em></strong></a>
    </p>
    <!--add an image-->
    <img src="http://www.w3schools.com/images/compatible_chrome.gif"/>
    <!-- table example-->
    <table>
      <!-- Table header to put titles on your tables-->
      <thead>
        <!-- table row = how man rows you want-->
        <tr>
          <!-- table header data - might have bold or heavier weight -->
          <th style="color: blue; font-family: Arial">
            Table <span style="color: red">Head 1</span>
          </th>
          <th>
            <span>Table Head 2</span>
          </th>
        </tr>
      </thead>
      <!-- Main table body-->
      <tbody>
        <tr>
          <!-- table data - plain text table data-->
          <td>
            Tdata 1
          </td>
          <td>
            Tdata 2
          </td>
        </tr>
        <tr>
          <td>
            Tdata 1
          </td>
          <td>
            Tdata 2
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Div - a container to divide your content set it in the middle of the page-->
    <a href="http://www.pcworld.com">Link here</a>
    <div>Div 1</div>
    <div>Div 2</div>
    <center><p>This is some paragraph text</p></center>
    <!--line break-->
    <hr>
    <p>blah blah</p>
  </body>
</html>
{% endhighlight %}

