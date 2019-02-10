<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$db = new PDO('sqlite:orders.sqlite3');

$db->exec("CREATE TABLE IF NOT EXISTS `order` (id INTEGER PRIMARY KEY AUTOINCREMENT, created TIMESTAMP)");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$json = json_decode(file_get_contents('php://input'), true);
	$timestamp = $json['timestamp'];
	$stmt = $db->prepare("INSERT INTO `order` (created) VALUES (:timestamp)");
	$stmt->bindParam(':timestamp', $timestamp);
	$stmt->execute();

	$order_id = $db->lastInsertId();
  
	header("HTTP/1.1 200 OK");
	header("Content-type:application/json");
	echo json_encode(array(
		'orderId' => $order_id,
		'timestamp' => $timestamp
	));
}