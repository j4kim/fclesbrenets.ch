<?php

$log = date("Y-m-d H:i:s") . ' | ' . json_encode($_GET);

file_put_contents("visits.log", $log . PHP_EOL, FILE_APPEND | LOCK_EX);

header("Location: https://fclesbrenets.ch/tournoi/?file=Tournoi%20des%20Brenets%202025%20-%20vendredi.json");