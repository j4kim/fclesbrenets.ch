<?php

$log = date("Y-m-d H:i:s") . ' | ' . json_encode($_GET);

file_put_contents("visits.log", $log . PHP_EOL, FILE_APPEND | LOCK_EX);

header("Location: https://docs.google.com/forms/d/e/1FAIpQLScxDLK_1BOLCwkx8IWLEY3iy2uteUSn25zKfDdimbh6o8C8mA/viewform");