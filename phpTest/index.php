<?php 
set_time_limit(10000);
	$sum = 0;
	$response = "başlangıç zamanı " . date("h:i:sa");
	for ($i = 0; $i< 10000000000; $i++) {
		$sum += $i * 23;
	}
	$response .= " bitiş zamanı : " . date("h:i:sa");
	echo $response;
?>