---
layout: blog-post
title:  "Setting Up and Understanding Jekyll"
date:   2014-06-13 13:00:00
categories: Technical
name: Tony Leung
image: /img/jekyll.jpg 
snippet: "Though I havent mastered using Jekyll yet, I wanted to spend some time today to build a quick how to on setting and using Jekyll."
---

Though I havent mastered using Jekyll yet, I wanted to spend some time today to build a quick how to on setting and using Jekyll.

####Prerequisites for using Jekyll

1. Install Ruby

2. Install RubyGems

####Before we get started working with Jekyll, you need to install it.   

1.Open up terminal and install Jekyll with the following command.
{% highlight ruby %}
gem install jekyll
{% endhighlight %}
![]({{ site.baseurl }}/img/jekyllinstall.png)
 
<br />

2.Create a new site using jekyll

{% highlight ruby %}
jekyll new testsite
{% endhighlight %}

![]({{ site.baseurl }}/img/jekyllnewsite.png)
 
<br />

3.Change directory to the new site and show its content.
{% highlight ruby %}
cd testsite
ls -a
{% endhighlight %}

![]({{ site.baseurl }}/img/jekyllcdlist.png)

<br />

####The directory listing is the root of your new site using jekyll.   Let me explain what each directory and file is.

#####.gitignore
This file is used for git so you can exclude directories or files from getting pushed to GitHub.  If you look in the file now, it will shoe _site.   When you run the jekyll web service, it will compile your blog postings and dump everything into the _site directory.   GitHub doesnt need this directory since the site is assembled on the GitHub server automatically.   

* * *

#####_config.yml
This is the configuration file.  You use this file to add customizations, such as what type of syntax highlighting to use, number of blogs to paginate per page, and may other options.  [Click here](http://jekyllrb.com/docs/configuration/) for more information about this page.

* * *

#####_includes
This directory is used to place any type of HTML code you think all your pages will need.  When I say HTML code, these files can be the header, footer, head, comment.   So if your pages are going to have the same navigational bars, build a HTML file that contains the header tags, nav tags, and maybe an ordered list of navigation links.

Example
{% highlight html %}
<header>
  <nav>
    <ul class="navbar">
      <li><a href="{{ site.baseurl }}/bloglist/">Blogs</a>
      </li>
      <li><a href="{{ site.baseurl }}/work/">Work</a>
      </li>
      <li><a href="{{ site.baseurl }}/index.html">About</a>
      </li>
      <li><a href="{{ site.baseurl }}/index.html" >Contact</a>
      </li>
    </ul>
  </nav>
</header>
{% endhighlight %}

Now include this file in your main template so that every single page will automatically have this header. (I will get into how to include the file in a bit)

What is that {{ site.baseurl}} syntax?  This is the Liquid syntax that you can use to generate you pages.   Reason I am using this is so that I can move back up to the root of the site and then point to the right html files for my links. The variable "site" is a reserved word for Jekyll.  When you call site, Jekyll will look in the _config.yml file and find the appropriate word that matches.   If you look in the _config.yml file, what do you see?

![]({{ site.baseurl }}/img/configyml.png)

Notice that baseurl is "".  So now using site.baseurl will bring me back to the root.  [Click here](http://jekyllrb.com/docs/variables/) if you like to read up about Jekyll variables.

* * *

#####_layouts
This directory is where you place all your Jekyll templates.  CD to the _layout directory and open up default.html.  

![]({{ site.baseurl }}/img/defaulthtml.png)

Notice that there isn't a lot of HTML tags on the page.   But there are three include sytax. If you want to include a file from the _include directory such as the head.html file, simply type in "include head.html" between the curly brace and percentage signs.

Doing this will include all the HTML markup from the head.html file.   The other 2 includes are self explanatory.

Now open up the post.html file.

![]({{ site.baseurl }}/img/posthtml.png)

At the top of the page you'll see 
{% highlight ruby %}
---
layout: default
---
{% endhighlight %}

Jekyll uses this header to determine which layout template to use.   So for this example, default.html is the template for this post.

Next when you look more you see
{% highlight ruby %}
page.title 
page.date
page.author
page.meta
content
{% endhighlight %}

The variable "page" is also a reserved word for Jekyll.  The page refers to the Markdown files you create in the _post directory (explain later).   When you type page.date, Jekyll will look at the page passed to the post.html file look at the title tag for example, and display the title information in place of the Liquid markup.  

The variable "content" is also another reserved word.  The content contains the rendered content of the post you pass to the page.

* * *

##### _posts
This directory is your main directory for posting your blogs via Markdown.  If you CD into the _posts directory you will see a sample markdown file.    Open it up.  You will see the following file.   

![]({{ site.baseurl }}/img/samplemarkdown.png)

You'll notice up top 
{% highlight ruby %}
---
layout: post
title:  "Welcome to Jekyll!"
date:   2014-06-14 14:48:49
categories: jekyll update
---
{% endhighlight %}

Again the layout tells Jekyll which layout file to use which is the post.html file in the _layout directory.   The title is the string "Welcome to Jekyll!" that you pass into post.html (Remember post.html had page.title).   The variable date and categories are also availble to use in the post.html layout file.  Everything underneath the '---' will be part of the "content" variable in post.html.   You'll also notice the "highlight ruby" markup. That is the Pygment based syntax highlighting that is suppose to work with Jekyll (I'll save this for another post).   Everything else in the content is just plain markdown.  Here's a [link to some markdown](http://daringfireball.net/projects/markdown/) help if you need further understanding.

* * *

#####about.md
Not really necessary. Its just a generic theme

* * *

#####css
save your css files here

* * *

#####feed.xml
RSS feed file generated by Jekyll

* * * 

#####index.html
Main home page sample that uses the default layout and provides an index of the post you created in the _posts directory.

* * *

**IMPORTANT**
If you make any new directories on your site and want to use Liquid syntax.  Jekyll wont recognize it unless you create a new directory and write the Liquid syntax in an index.html file.   From my experience, Jekyll did not work when I used a different name other than index.html.  If I'm wrong, someone please let me know.

Now that I've gone through all the files and directories on a Jekyll web site, I hope this will help you start customizing your pages.   My recommendation is to first build a few blogs using the generic templates first.  Then afterwards, build your own custom layout or use a front-end framework such as [Bootstrap](http://getbootstrap.com/).   

I hope this blog helps and have fun using Jekyll.







