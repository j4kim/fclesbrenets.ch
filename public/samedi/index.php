<?php

$log = date("Y-m-d H:i:s") . ' | ' . json_encode($_GET);

file_put_contents("visits.log", $log . PHP_EOL, FILE_APPEND | LOCK_EX);

header("Location: https://fclesbrenets.ch/tournoi/?file=Tournoi%20populaire%2021%20juin%202025%20v2.json");