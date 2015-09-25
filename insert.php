<html>
<body>
<p>This php page sends the data collected in the form.html file and inserts it into the MySQL database</p>

<?php
$database = "webforms";
$table = "studentform";

$db_handle = mysql_connect("localhost","root","millshaven32");
$db_found = mysql_select_db($database);

//If the database is found, then this inserts values from the form.html 
//into the database, otherwise it prints "Database NOT Found
if ($db_found){
   print "Database Found <br />";
   mysql_query("INSERT INTO $table (FirstName, LastName, Major)
   VALUES ('$_POST[firstname]','$_POST[lastname]','$_POST[major]')");
   print "One record added";
}

else {
   print "Database NOT Found";
}

mysql_close($db_handle);

//As a challenge you can try and have it check if the records were actually added
//and if not, have it send an error message instead of the "One record added" message
?> 

</body>
</html>