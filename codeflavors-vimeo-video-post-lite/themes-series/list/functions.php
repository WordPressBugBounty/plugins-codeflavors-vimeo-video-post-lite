<?php

namespace Vimeotheque_Series\Theme_List;

use Vimeotheque_Series\Helper;
use Vimeotheque_Series\Series\Playlist;
use const Vimeotheque_Series\VERSION;

add_action(
    'vimeotheque-series/before-enqueue-script',
  function(){

      wp_enqueue_script(
          'vimeotheque-series-theme-list-editor',
          Helper::get_url() . 'themes-series/list/assets/js/editor.js',
          ['wp-element', 'wp-editor', 'lodash'],
          Helper::get_version()
      );

  }

);

add_action(
    'rest_api_init',
    function(){
        $fields = [
            'columns'   => 3,
            /**
             * Video playback type. Possible values:
             * modal: Video click plays video in modal window;
             * post: Video click opens the single video page.
             */
            'playback'  => 'modal',
        ];

        foreach ( $fields as $field => $default_value ) {
            register_rest_field(
                'series',
                $field,
                [
                    'get_callback' => function( $object ) use ($field, $default_value){
                        $meta = get_post_meta( $object['id'], $field, true );

                        // Cast numeric values to number to avoid issues in JavaScript.
                        if( is_numeric($default_value ) && $meta ){
                            $meta = (int) $meta;
                        }

                        /**
                         * If not already set, set the default value.
                         */
                        if( !$meta ){
                            update_post_meta($object['id'], $field, $default_value );
                        }

                        return $meta ?: $default_value;
                    },
                    /**
                     * @param array $value      The new value
                     * @param \WP_Post $object  The post object
                     * @param string $field_name The field name
                     */
                    'update_callback' => function( $value, \WP_Post $object, $field_name ) use ($field){
                        update_post_meta( $object->ID, $field_name, $value );
                    }
                ]
            );
        }

    }
);

/**
 * Outputs element classes.
 *
 * @param Playlist $playlist
 * @param string $class A given CSS class.
 * @param bool $echo Output the classes.
 * @return string
 */
function css_classes( Playlist $playlist, $class = '', $echo = true ) {

    $classes = [ $class ];

    $post = $playlist->post;

    $columns = get_post_meta($post->ID, 'columns', true);
    if( !$columns ){
        $columns = 3;
    }

    $classes[] = 'cols-' . $columns;

    $output = implode( ' ', $classes );

    if( $echo ){
        echo esc_attr( $output );
    }

    return $output;
}

/**
 * Output the video image.
 *
 * @param Playlist $playlist
 * @param $size
 * @return void
 */
function the_image( Playlist $playlist, $size = 'large' ){

    $post = $playlist->post;

    $playback = get_post_meta($post->ID, 'playback', true);

    if( !$playback ){
        $playback = 'modal';
    }

    $image = get_the_post_thumbnail( null, $size );

    if( 'post' == $playback ){
        $image = sprintf(
            '<a href="%s" title="%s">%s</a>',
            get_permalink(),
            the_title_attribute(['echo' => false]),
            $image
        );
    }

    echo $image;
}

/**
 * @param Playlist $playlist
 * @return bool
 */
function has_modal( Playlist $playlist ){
    $post = $playlist->post;

    $playback = get_post_meta($post->ID, 'playback', true);
    if( !$playback ){
        $playback = 'modal';
    }

    return 'modal' == $playback;
}
