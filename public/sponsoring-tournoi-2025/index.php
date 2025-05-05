<?php

$log = date("Y-m-d H:i:s") . ' | ' . json_encode($_GET);

file_put_contents("visits.log", $log . PHP_EOL, FILE_APPEND | LOCK_EX);

header("Location: https://docs.google.com/forms/d/e/1FAIpQLSdzaqENeWWO8C3XO9-9n-PmQ0I5qxVaCK-vDDcSCf9XIOw7Tw/viewform");