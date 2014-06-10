---
layout: blog-post
title:  "Enumerable#map"
date:   2014-05-17 12:00:00
categories: Technical
name: Tony Leung
image: /img/ruby.jpg 
snippet: "In the Enumerable class, map is probably one of the most widely used method.   The method takes an enumerable object and a block (of code), then runs through the block for every element and returning an array back to the caller. "
---
###Enumerable Map Method

In the Enumerable class, map is probably one of the most widely used method.   The method takes an enumerable object and a block (of code), then runs through the block for every element and returning an **array** back to the caller.  There are two versions of map, map is a non destructive version which exist in the Enumerable class that will not tamper with your original array you're passing to the method. While map!, which exist in the Array class is destructive and will alter your original array.  I originally didn't want to talk about map! since its not part of the Enumerable class but I felt it was very important to know the difference between the two.

So lets show an example of passing in an array of integers to the map and map! methods.

Using map on an array of integers
{% highlight ruby linenos %}
#Lets try to manipulate an array of integers
myarray = [2,4,6] #Create a new array containing the integers 1,2,3.

#Take the array, pass it to the map method and iterate through the array elements.
#Multiply by 2 for each element
#Return the results to the variable mappedarray
mappedarray = myarray.map {|element| element * 2}

p mappedarray #prints out the mappedarray contents
p myarray     #prints out the original myarray contents. (non-destructive)
{% endhighlight %}

Results from using map on integers

![]({{ site.baseurl }}/img/mapnumr.png)

* * *

Using map! on an array of integers
{% highlight ruby linenos %}
#Lets try to manipulate an array of integers
myarray = [2,4,6] #Create a new array containing the integers 1,2,3.

#Take the array, pass it to the map method and iterate through the array elements.
#Multiply by 2 for each element
#Return the results to the variable mappedarray
mappedarray = myarray.map! {|element| element * 2}

p mappedarray #prints out the mappedarray contents
p myarray     #prints out the original myarray contents. (destructive)
{% endhighlight %}

Results from using map! on integers

![]({{ site.baseurl }}/img/mapnumdesr.png)

* * *

Now lets show an example of passing in an array of strings to the map method.

Using map on an array of strings
{% highlight ruby linenos %}
#Lets try to manipulate an array and return an array of strings all caps.
myarray = ["Cow", "Dog", "Cat"] #Create a new array

#Take the array, pass it to the map method and make the string all caps
#Return the results to the variable mappedarray
mappedarray = myarray.map {|element| element.upcase}

p mappedarray #prints out the mappedarray contents
p myarray     #prints out the original myarray contents. (non-destructive)
{% endhighlight %}

Results from using map on strings

![]({{ site.baseurl }}/img/mapnum2r.png)

* * *

Lastly lets show an example of passing a hash to the map method. (You can't use map! on hashes)
{% highlight ruby linenos %}
#Lets try to manipulate a hash and return an array of key value pairs
myhash = {"a" => 10, "b" => 12, "c" => 14} #Create a new hash

#Take the hash, pass it to the map method and iterate through the hash keys and values.
#Multiply by 2 for each element
#Return the results to the variable mappedarray
mappedarray = myhash.map {|key, value| [key, value * 2]}

p mappedarray #prints out the mappedarray contents
p myarray     #prints out the original hash contents.
{% endhighlight %}

Results from using map on a hash

![]({{ site.baseurl }}/img/hashnumr.png)

* * *

The map method is a quick and easy way to take a collection of elements whether its an array, range, or hash, and transform the value to whatever you need.   Just remember to be careful with the destructive map! version that works for arrays only vs the non destructive map version.   

* * *

Resources

[Ruby Doc Enumerable map method](http://www.ruby-doc.org/core-1.9.3/Enumerable.html#method-i-map)

[Stackoverflow.com - What does the map method do in ruby?](http://stackoverflow.com/questions/12084507/what-does-the-map-method-do-in-ruby)

[APIDock.com - Enumerable map](http://apidock.com/ruby/Enumerable/map)