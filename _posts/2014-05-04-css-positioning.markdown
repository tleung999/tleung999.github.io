---
layout: blog-post
title:  "CSS Positioning"
date:   2014-05-04 12:00:00
categories: Technical
name: Tony Leung
image: /img/csspos.jpg 
snippet: "So this week I would like to talk about CSS absolute, relative, and fixed positioning.  I figured that since this was the toughest technique I had to learn, describing it would be the best learning tool."
---

So this week I would like to talk about CSS absolute, relative, and fixed positioning.  I figured that since this was the toughest technique I had to learn, describing it would be the best learning tool.

* * *

####Positioning is broken up into 4 parts

1. Static - The default position (Will rarely need to use since its default).  This is where the element normally positions itself based on the flow of the other elements on the page.

2. Relative - This position starts off in the same position as the default(static) position and can use top, right, left or bottom to move the element. If you do not specify any positioning attributes, it will look just like a static positioned element.   If you put in a positioning attribute such as <span class="css">bottom: 10px;</span>, it will shift the position of the element you are working on up 10px.

3. Absolute - This position can use top, right, left, or bottom to place the element anywhere on the screen.   The start location of the element is the tricky part.  The element will start next to a parent element if one of them we're declared as absolute or relative. If there are no parent elements declared as absolute or relative, it will move all the way up to the &lt;HTML&gt; element and position itself to the page. After it moves to its' starting position, it will move to its new location based on the top, right, left, and bottom attributes you entered.

4. Fixed - This type of positioning will lock your element in place on a spot on the screen. Even if you scroll, the position will stay fixed and not flow with the document. I personally think of this position as the "I dont care" positioning since using fixed will place it where you want but also stay on top of other elements blocking them from view. You have to be careful using this.

###Lets try some examples:

Start with the base HTML & CSS code

{% highlight html linenos %}
<!DOCTYPE html>
<html>
  <head>
    <style>
    #bluebox {
      margin-left: 200px;
      width: 100px;
      height: 100px;
      background-color: : blue;
    }

    #redbox {
      width: 50px;
      height: 50px;
      background-color: red;
    }
  </style>
</head>
  <body>
    <div id="bluebox"><div id="redbox"></div></div>
  </body>
</html>
{% endhighlight %}

What it looks like on the browser

![]({{ site.baseurl }}/img/htmlposbasebr.png)

* * *

###Relative Positioning

Lets move the red box to the left by 100px relative to the blue box.  Add **position: relative; & right: 100px;** to #redbox. 

Code Changes
{% highlight html linenos %}
<!DOCTYPE html>
<html>
  <head>
    <style>
    #bluebox {
      margin-left: 200px;
      width: 100px;
      height: 100px;
      background-color: : blue;
    }

    #redbox {
      width: 50px;
      height: 50px;
      background-color: red;
      position: relative;
      right: 100px;
    }
  </style>
</head>
  <body>
    <div id="bluebox"><div id="redbox"></div></div>
  </body>
</html>
{% endhighlight %}
What it looks like on the browser. The red box is now moved over to the left by 100px relative to the blue box.

![]({{ site.baseurl }}/img/htmlrel100br.png)

* * *

### Absolute Positioning

Lets move the red box to right by 100px of the blue box. Add **position: absolute; & left:100px;** to #redbox to move it over to the right 100px.

Code Changes
{% highlight html linenos %}
<!DOCTYPE html>
<html>
  <head>
    <style>
    #bluebox {
      margin-left: 200px;
      width: 100px;
      height: 100px;
      background-color: : blue;
    }

    #redbox {
      width: 50px;
      height: 50px;
      background-color: red;
      position: absolute;
      left: 100px;
    }
  </style>
</head>
  <body>
    <div id="bluebox"><div id="redbox"></div></div>
  </body>
</html>
{% endhighlight %}

Hey wait a sec!  Why did it not move to the right by 100px so it sits next to the blue box?. By not declaring blue box as a relative or absolute position, the red box is moving right 100px from the edge of page not from the blue box.  

![]({{ site.baseurl }}/img/htmlposabserrbr.png)

We need to make sure that the parent element is either absolute or relative positioned. Add **position: relative;** to #bluebox.

Code Changes
{% highlight html linenos %}
<!DOCTYPE html>
<html>
  <head>
    <style>
    #bluebox {
      margin-left: 200px;
      width: 100px;
      height: 100px;
      background-color: : blue;
      position: relative;
    }

    #redbox {
      width: 50px;
      height: 50px;
      background-color: red;
      position: absolute;
      right: 100px;
    }
  </style>
</head>
  <body>
    <div id="bluebox"><div id="redbox"></div></div>
  </body>
</html>
{% endhighlight %}

Now it looks the way we want it

![]({{ site.baseurl }}/img/htmlposabsrtbr.png)

* * *

### Fixed Positioning

Lets force our red box to the upper left hand corner ignoring all other elements.  Add **position: fixed; & top: 0; & left: 0;** to #redbox.  This will start the redbox at the very top and very left of the page. I also added a &lt;p&gt; paragraph and put a sentence in there to show how the fixed positioning can overshadow elements. 

Code Changes
{% highlight html linenos %}
<!DOCTYPE html>
<html>
  <head>
    <style>
    #bluebox {
      margin-left: 200px;
      width: 100px;
      height: 100px;
      background-color: : blue;
    }

    #redbox {
      width: 50px;
      height: 50px;
      background-color: red;
      position: fixed;
      left: 0px;
      top: 0px;
    }
  </style>
</head>
  <body>
    <p>Can you read this sentence??</p>
    <div id="bluebox"><div id="redbox"></div></div>
  </body>
</html>
{% endhighlight %}

How it looks on the browser.  The red box is now shoved to the upper left hand corner of the page, locked in that position.  Notice that my sentence was covered up by the red box. If you had more content, you'll see the content go underneath the red box as you scrolled up and down. 

![]({{ site.baseurl }}/img/htmlposfixbr.png)

* * *

Positioning your elements is great for lining up your content based on the wireframe you created.   As long as you're careful about which container you are positioning, and what position type is in the parents.

Thanks to Chris Coyier @CSS-Tricks for his article on [Absolute, Relative, Fixed Positioning: How Do They Differ?"](http://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/) 

Also another good hands-on resource on learning how to position your elements [Code Academy HTML & CSS Course](www.codeacademy.com)