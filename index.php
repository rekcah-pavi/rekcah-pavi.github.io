<!DOCTYPE html>
<html>
<head>
<title>Groot</title>
</head>
<body>
<h1><?php echo "Hello" ?></h1>

<?php
$host = 'google.com';
if($socket =@ fsockopen($host, 80, $errno, $errstr, 30)) {
echo 'online!';
fclose($socket);
} else {
echo 'offline.';
}
?>

</body>
</html>
