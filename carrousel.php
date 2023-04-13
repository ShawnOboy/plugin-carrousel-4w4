<?php
/**
 * @package Carrousel
 * @version 1.0.0
 */
/*
Plugin Name: Carrousel
Description: Affiche les images d'une galerie avec un effet de carrousel.

Author: Shawn Roggero
Author URI: https://github.com/ShawnOboy

Version: 1.0.0
*/


function findcss() {

    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");
    wp_enqueue_style("style_carrousel",
        plugin_dir_url(__FILE__) . "style.css",
        array(),
        $version_css,
        true
    );
    
    wp_enqueue_script("js_carrousel",
        plugin_dir_url(__FILE__) . "js/carrousel.js",
        array(),
        $version_js,
        true
    );

}
add_action("wp_enqueue_scripts", "findcss");

function generation() {

    return "<button class='carrousel__ouvrir'>Ouvrir</button>
            <div class='carrousel'>
                <button class='carrousel__x'>X</button>
                <figure class='carrousel__figure'></figure>
                <form class='carrousel__form'></form>
            </div>";

}
add_shortcode("carrousel", "generation");