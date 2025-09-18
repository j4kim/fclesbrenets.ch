<?php

$log = date("Y-m-d H:i:s") . ' | ' . json_encode($_GET);

file_put_contents("visits.log", $log . PHP_EOL, FILE_APPEND | LOCK_EX);

header("Location: https://docs.google.com/forms/d/e/1FAIpQLSfDR4XtOszdv18D7NJ4xBrorwL3EW7ylOLBk1-fuvzp5gHDdA/viewform?usp=header");