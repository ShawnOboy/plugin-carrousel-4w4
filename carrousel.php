
<?php
/**
 * Plugin Name: Carrousel
 * Author: Shawn Roggero
 * Author uri: https://github.com/shawnoboy
 * Description: Une extension qui permet d'afficher les images d'une galerie dans une boîte modale.
 * Version: 1.0.0
 */

function enfiler_script_css()
{
   $version_css =  filemtime(plugin_dir_path(__FILE__) . 'style.css');
   $version_js = filemtime(plugin_dir_path(__FILE__) . 'js/carrousel.js');
   wp_enqueue_style('style_carrousel',
        plugin_dir_url(__FILE__) . 'style.css',
        array(),
        $version_css
);
    wp_enqueue_script('js_carrousel',
            plugin_dir_url(__FILE__) . 'js/carrousel.js',
            array(),
            $version_js,
            true // ajoute le script carrousel.js à la fin de la page
    );

}
add_action('wp_enqueue_scripts', 'enfiler_script_css' );

function genere_boite()
{
    return '<button class="carrousel__ouvrir">Ouvrir Carrousel</button>
            <div class="carrousel">
                <button class="carrousel__x">X</button>
                <figure class="carrousel__figure"></figure>
                <div class="flch_G"><</div>
                <div class="flch_D">></div>
                <form class="carrousel__form"></form>
            </div>';
}
add_shortcode('carrousel', 'genere_boite');