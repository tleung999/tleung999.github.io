---
layout: blog-post
title:  "SQL Injection"
date:   2014-06-3 12:00:00
categories: Technical
name: Tony Leung
image: /img/sql.png 
snippet: "A SQL injection is a type of security vulnerability in which an attacker can submit database SQL commands to the web application exposing the back end database.  This attack on the application layer allows the hacker to steal data from an organization, or even completely destroy the database."
---

### What is SQL injection?

A SQL injection is a type of security vulnerability in which an attacker can submit database SQL commands to the web application exposing the back end database.  This attack on the application layer allows the hacker to steal data from an organization, or even completely destroy the database. 

### Example of an Attack

One of the most common examples I found on SQL injections is where someone manipulates the username and password on a web site login screen.  This potential attack works because the SQL query requires a user input where you take in the username and password on a form.

Here's what the query would look like. 

{% highlight sql linenos %}
Query = "SELECT Username, Password 
FROM users 
WHERE Username = '" + Username + "'
  AND Password = '" + Password + "'";
{% endhighlight %}

Username and Password are the variables created from the form.  If the attacker provides ' OR 0=0' as the username and password, then the query will look as follows.

{% highlight sql linenos %}
Query = "SELECT Username, Password 
FROM users 
WHERE Username ='' OR 0=0""'
 AND Password ='' OR 0=0" "'";   
{% endhighlight %}


Since Username = '' OR 0=0 (which is TRUE) AND Password = '' OR 0=0 (which is also TRUE).   The attacker just bypassed the login and now allowed into the database.  

### What impact does a SQL injection has?

When an attacker finds the vulnerability, he/she can inject SQL queries through an input form field.   Once this happens, you are basically giving your attacker the whole database.   Depending on your data, he/she can look up credit card numbers, social security numbers, bank accounts, any type of data stored in the database.

Another possible outcome, he/she can maliciously destroy your database by corrupting the records using INSERT to pass in bad data or even worse, running a DROP TABLE!

Lastly if your database houses data for more than one web site, then depending on the permission of the account, it can compromise all the other data from the other web sites.  

### What can you do to prevent SQL injection attacks?

1.  Adopt an input validation technique such as length, type, and syntax.
2.  Account that access the database has the least privileges
3.  Never use the system administrator account
4.  Create application specific database user accounts.
5.  Remove all stored procedures not in use
6.  User strongly typed parameterized query APIs with placeholder substitution markers, even when calling stored procedures.

* * *

Resources

[Veracode.com - SQL Injection Tutorial](http://www.veracode.com/security/sql-injection)

[Acunetix.com - SQL Injection: What is it?](https://www.acunetix.com/websitesecurity/sql-injection/)
