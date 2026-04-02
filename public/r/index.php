<?php

$input = $_GET;

if (isset($input['to'])) {
    $to = $input['to'];
    unset($input['to']);
} else {
    $to = "home";
}

if (isset($input['from'])) {
    $from = $input['from'];
    unset($input['from']);
} else {
    $from = "unknown";
}

$url = match ($to) {
    'home' => "/",
    'inscription-2026' => "https://docs.google.com/forms/d/e/1FAIpQLSe_aajcQLGWmIsqdwB4gDiJhp4OEMVJ1UAS0Z1zCLud65s5Fw/viewform",
    'sponsoring-2026' => "https://docs.google.com/forms/d/e/1FAIpQLSd2U0JIYajQPo55VNRjh38kyuWsSOaHxF_w78dZYui4emYuFw/viewform",
    default => $to,
};

$items = [date("Y-m-d H:i:s"), $to, $from];

if (!empty($input)) {
    $items[] = json_encode($input);
}

$log = implode(' | ', $items);

file_put_contents("visits.log", $log . PHP_EOL, FILE_APPEND | LOCK_EX);

header("Location: $url");
