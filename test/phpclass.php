
<?php require_once('../php/mobiledetection.php'); ?>

<!doctype html>
<html class="no-js" lang="en">
<head>
	<meta charset="utf-8">

	<title>RocketPower Mobile Detection Test</title>

	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	
	
</head>

<body>
	
	<?php 
	
		// initialize the Class
		$mobile = new MobileDetection();
		
		echo '<p>iOS 7: '; var_dump($mobile -> iOS('7')); echo '</p>';
		echo '<p>Retina: '; var_dump($mobile -> retina()); echo '</p>';
		
		$mobile -> simulateRetina();
		
		echo '<p>Retina after enable simulateRetina: '; var_dump($mobile -> retina()); echo '</p>';
		
		$mobile -> simulateRetina(false);
		
		echo '<p>Retina after disable simulateRetina: '; var_dump($mobile -> retina()); echo '</p>';
		
		// vardump
		echo '<p>******************************************</p>';
		var_dump($mobile);
		
	?>
  
</body>
</html>