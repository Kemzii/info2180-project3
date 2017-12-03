 <?php
    if (isset($_GET['clicked'])) 
  

{
    $host = getenv('IP');
    $username = getenv('C9_USER');
    $password = '';
    $dbname = 'CheapoMail';
    
    try{
        //Create Connection With The Database
      
        $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
       
        $reader = $_GET['readerid'];
        $msg_id = $_GET['id'];
        
       	$sql = "INSERT INTO Messages_read (message_id, reader_id, date) VALUES ('$msg_id', '$reader' , CURDATE())";
			// use exec() because no results are returned
		$conn->exec($sql); 
		echo "<script type='text/javascript'>alert(\"Message Read!\");</script>";
		header('Location: home.html');
		
    }catch(PDOException $e)
	{	
		echo $sql . "<br>" . $e->getMessage();;
	}
}
 ?>