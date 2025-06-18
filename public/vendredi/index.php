<?php

$log = date("Y-m-d H:i:s") . ' | ' . json_encode($_GET);

file_put_contents("visits.log", $log . PHP_EOL, FILE_APPEND | LOCK_EX);

header("Location: https://fclesbrenets.ch/tournoi/?file=Tournoi%20v%C3%A9t%C3%A9rans%2020%20juin%202025%20v1.json");