---
layout: blog-post
title:  "Site Redesign V3"
date:   2014-06-10 12:00:00
categories: Technical
name: Tony Leung
image: /img/responsive.jpg 
snippet: "As I now reach week 8 of my prep phase for Dev Bootcamp, I felt it was time to finally give my page a new makeover before class begins. "
---

### Launching site redesign version 3

As I now reach week 8 of my prep phase for Dev Bootcamp, I felt it was time to finally give my page a new makeover before class begins.  

Before I start on my redesign, I created the following checklist of things I want implemented:

1. Create a responsive site that will work for all device types.  

2. Find an easy way to manage my personal site and apply changes quickly and easily.

3. Add a comments section to allow readers to leave feedbacks.

4. Register my GitHub site to my own domain name. 

* * *

###Bootstrap
So tackling the first task on my list, I started looking into a front-end framework such as [Bootstrap](http://getbootstrap.com/).  Bootstrap has some amazing templates and components that you can quickly add to your pages.  It uses responsive design and takes a mobile first perspective.   

Installation of Bootstrap was simple.   They have many options to either download the files, link via CDN, or install using Bower.  All the instructions are [here](http://getbootstrap.com/getting-started/).  The Getting Started guide also has templates and samples you can use to get your site running.

###Jekyll
Next I needed to find an easy way to manage my personal site.   Since the number of my blogs were increasing, I decided to convert my HTML pages over to Markdown and use [Jekyll](http://jekyllrb.com/) to generate the pages for me using GitHub. 

Jekyll was probably the harder piece of the redesign. Installation was really easy, just follow this [guide](http://jekyllrb.com/docs/quickstart/).  But I had to learn a new syntax since Jekyll uses [Liquid](http://liquidmarkup.org/) to auto generate your pages.  Shopify has a great tutorial on [Liquid basics](http://docs.shopify.com/themes/liquid-basics)

Also Jekyll uses [Pygments](http://pygments.org/) for code syntax highlighting.  I was a little confused in the beginning on why Pygments is an installer package instead of just a css file.   Turns out you run the "pygmentize" script to generate a css file to add to your site.   Here's the [Introduction and Quickstart guide](http://pygments.org/docs/quickstart/)

###Disqus
My third task, I wanted to add a comment system on my blog pages.   So looking at a lot of other bloggers sites, turns out many of them we're using [Disqus](http://disqus.com/).   The comment system was really easy to implement.   You sign up for an account, click "Add Discus to Your Site", fill out the form, and add the code snippet from their instructions on to your web pages. Since I already had Jekyll setup, I added Disqus to my single blog template and Jekyll put a comment section on all my blogs automatically.  Awesome!

###GoDaddy.com
My final task was to push my new site up to GitHub and link my personal GitHub page to my own domain name on GoDaddy.  To push my new site, I first backed up all of my old webpages that was stored locally on my system.   Then I deleted all the pages and replaced them with my new Jekyll pages.   Jekyll automatically adds a .gitignore to the _site directory so it wont upload that directory to GitHub when you run Git.  The _site directory is just the generated pages that isn't necessary on GitHub since GitHub uses Jekyll and will auto generate the pages on its server.  

Once the pages we're uploaded via git, I doubled checked the site and everything was displaying properly using my standard GitHub username address http://tleung999.github.io.  So now its time to add my domain name http://tonykleung.info to GitHub.   

On GoDaddy, I had to add 2 A records and add in a CNAME Alias to my DNS Zone File.  

The 2 A records needs to have the following:

Host: IP

@   : 192.30.252.154

@   : 192.30.252.153

The CNAME Host needs to have the following:

Host:Points To:TTL

www:tleung999.github.io:600 seconds  

Click save and now go to my website on my local drive.   On my site in the root, create a file called CNAME.  In the CNAME file, I just typed in my domain name "tonykleung.info" (no quotes). Use git to upload the CNAME file to GitHub.   Wait 10 mins and now type in http://tonykleung.info and see if it will take you to your GitHub site.

If you like more information about setting up GitHub with a custom domain name, [click here](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages)

Hope you enjoy the new site redesign.   Send me a note and let me know what you think!

Cheers!
Tony