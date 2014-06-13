---
layout: blog-post
title:  "ActiveRecord"
date:   2014-06-12 12:00:00
categories: Technical
name: Tony Leung
image: /img/rails.jpg 
snippet: "If you are looking for way to access database records in a relational database such as SQLite, MySQL, PostgreSQL, or Oracle, but you are only good at Ruby but not with writing SQL queries.   ActiveRecord is your savior."
---

### No SQL? No Problem

If you are looking for a way to access database records in a relational database such as SQLite, MySQL, PostgreSQL, or Oracle, but you are only good at Ruby but not with writing SQL queries.   ActiveRecord is your savior.

ActiveRecord is referred to as an Object-Relation Mapping (ORM).   It is a layer of Ruby code that helps translate your code into directions that the database can understand so you can create or retrieve data.   So instead of building your SQL query, passing that SQL query into the database API, running the query, and parsing the data, ActiveRecord will do all this for you easily. 

The ActiveRecord API has classes and modules that allows you to run standard SQL like commands such as the following:

* add_column
* add_index
* add_timestamps
* change_column
* change_table
* create_table
* drop_table
* remove_column
* remove_index
* remove_timestamps
* rename_column
* rename_index
* rename_table
* select
* find
* find_one
* first
* last
* joins
* includes
* having
* distinct
* offset
* order
* group

Here's a full list of methods available in the [ActiveRecord API](http://api.rubyonrails.org/classes/ActiveRecord.html)

ActiveRecord also offers validation so that your data is sane and clean before being saved to the database.  Validation is important since before inserting data into the database you can check for the presense of data in a field, whether the data is unique, whether specific data values does or doesn't exist in the field values, or the length of field will fit your data values.   

[Click here](http://edgeguides.rubyonrails.org/active_record_validations.html) if you like to read more about ActiveRecord Validation

* * *

###Resources

[Active Record: The Rails Database Bridge](http://code.tutsplus.com/tutorials/active-record-the-rails-database-bridge--net-30489)

[What is ActiveRecord?](http://ruby.about.com/od/rubyonrails/ss/What-Is-Activerecord.htm)