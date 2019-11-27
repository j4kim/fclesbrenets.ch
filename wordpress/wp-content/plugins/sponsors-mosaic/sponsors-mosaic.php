<?php
/**
 * Plugin Name: FCB Sponsors Mosaic
 */

add_action('init', function(){
    $options = [
        'label' => 'Sponsors',
        'public' => true,
        'show_in_rest' => true
    ];
    register_post_type('sponsors', $options);
});
