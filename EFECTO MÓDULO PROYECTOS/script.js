/*  Funcionalidad Hover en el Módulo de Proyectos*/

<style>/* 
Product: Photographer Homepage Layout
Demo Link: https://demo.divi-den.com/photographer-homepage-layout-v3/
Author: Divi Den
Author Link: https://divi-den.com
*/

/* Header Slider */

.divi_den_pro_photographer_header .et_pb_slider .et_pb_slide .et_pb_container {
    height: auto !important;
      max-width: 100% !important;
}

/* Header Slider Images */
.divi_den_pro_photographer_header .et_pb_slider .et_pb_slide .et_pb_container .et_pb_slide_image img {
    max-height: none !important;
    display: block;
    width: 100%;
    animation: none !important;
}

.divi_den_pro_photographer_header .et_pb_slider .et_pb_slide {
    padding: 0 !important;
}

/* Header Slider Controllers */
.divi_den_pro_photographer_header .et-pb-controllers a {
    width: 20%;
    height: 2px;
    vertical-align: middle;
    transition: 0.5s;
    border-radius: 0;
    opacity: 1 !important;
    background-color: #9b9b9b;
    font-size: 30px;
}

/* Header Slider Arrows */
.divi_den_pro_photographer_header .et-pb-slider-arrows {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 999999;
    width: 442px;
}

.divi_den_pro_photographer_header .et-pb-slider-arrows a.et-pb-arrow-next {
    right: 63px !important;
    left: auto !important;
}

.divi_den_pro_photographer_header .et-pb-slider-arrows a.et-pb-arrow-next:before {
    content: "$";
}

.divi_den_pro_photographer_header .et-pb-slider-arrows a.et-pb-arrow-prev:before {
    content: "#";
}

/* Title Section */

.divi_den_pro_photographer_text_section_1 .et_pb_text p {
    padding-bottom: 26px;
}

.divi_den_pro_photographer_text_section_1 .et_pb_text p:last-child {
    padding-bottom: 0;
}

/* Call To Action Section */

.divi_den_pro_photographer_cta_section .et_pb_promo .et_pb_promo_description p strong {
    color: #000;
}

.divi_den_pro_photographer_cta_section .et_pb_promo .et_pb_promo_description p {
    padding-bottom: 6px;
}

.divi_den_pro_photographer_cta_section .et_pb_promo .et_pb_promo_description p:last-child {
    padding-bottom: 0;
}

/* Call To Action Titles */

.divi_den_pro_photographer_cta_section .et_pb_promo h2:before {
    counter-increment: section;
    content: "0" counter(section);
    display: inline-block;
    font-size: 16px;
    color: #9b9b9b;
    font-family: "Roboto";
    font-weight: 400;
    position: absolute;
    left: 0;
    top: -4px;
}

body:not(.et-fb) .divi_den_pro_photographer_cta_section .et_pb_column:hover .et_pb_promo {
    transform: translate(0px, 101%);
}

/* Gallery Section */
.divi_den_pro_photographer_gallery_section .et_post_gallery .et_pb_gallery_item:nth-child(3n+3) {
    margin-right: 0 !important;
}

/* Gallery Imeages Titles */
.divi_den_pro_photographer_gallery_section .et_post_gallery .et_pb_gallery_item:hover h3 {
    transform: translate(0%, 62px);
    opacity: 1;
}

.divi_den_pro_photographer_gallery_section .et_post_gallery .et_pb_gallery_item:hover .et_overlay {
    z-index: 3;
    opacity: 1;
}

.divi_den_pro_photographer_gallery_section .et_post_gallery .et_pb_gallery_item:hover .et_overlay:before {
    top: 50%;
}

/* Showreel Video Section */

.divi_den_pro_photographer_video_section .et_pb_blurb .et_pb_main_blurb_image,
.divi_den_pro_photographer_video_section .et_pb_blurb .et_pb_main_blurb_image .et_pb_image_wrap,
.divi_den_pro_photographer_video_section .et_pb_blurb .et_pb_main_blurb_image .et_pb_image_wrap img {
    display: block !important;
    width: 100% !important;
}

/* Testimonials Slider Section */

.divi_den_pro_photographer_testimonials .et_pb_slider .et_pb_slide .et_pb_container {
    height: auto !important;
}

.divi_den_pro_photographer_testimonials .et_pb_slider .et_pb_slide .et_pb_container .et_pb_slide_image img {
    max-height: none !important;
    display: block;
    width: 100%;
}

.divi_den_pro_photographer_testimonials .et_pb_slider .et_pb_slide .et_pb_slide_description {
    padding-bottom: 104px !important;
}

.divi_den_pro_photographer_testimonials .et_pb_slider .et_pb_slide {
    padding: 0 !important;
}

/* Testimonials Slider Controlers */
.divi_den_pro_photographer_testimonials .et-pb-controllers a {
    width: 20%;
    height: 2px;
    vertical-align: middle;
    transition: 0.5s;
    border-radius: 0;
    opacity: 1 !important;
    background-color: #9b9b9b;
    font-size: 30px;
}

/* Testimonials Slider Arrows */
.divi_den_pro_photographer_testimonials .et-pb-slider-arrows {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 999999;
    width: 442px;
    left: 0;
    margin: auto;
}

.divi_den_pro_photographer_testimonials .et-pb-slider-arrows a.et-pb-arrow-next {
    right: 63px !important;
    left: auto !important;
}

/* Testimonials Slider Arrows Icons */
.divi_den_pro_photographer_testimonials .et-pb-slider-arrows a.et-pb-arrow-next:before {
    content: "$";
}

.divi_den_pro_photographer_testimonials .et-pb-slider-arrows a.et-pb-arrow-prev:before {
    content: "#";
}

/* Pricing Tables Section */

.divi_den_pro_photographer_pricing_table_section .et_pb_pricing ul.et_pb_pricing li span:before {
    display: none;
}

.divi_den_pro_photographer_pricing_table_section .et_pb_pricing ul.et_pb_pricing li {
    padding: 0 0 16px !important;
}

.divi_den_pro_photographer_pricing_table_section .et_pb_pricing .et_pb_pricing_table {
    margin-top: 33px !important;
    padding: 57px 26px 59px;
}

.divi_den_pro_photographer_pricing_table_section .et_pb_pricing .et_pb_pricing_table.et_pb_featured_table {
    margin-top: 0 !important;
    padding: 71px 26px 72px;
}

/* Pricing Tables dollar sign font size */
.divi_den_pro_photographer_pricing_table_section .et_pb_pricing .et_pb_pricing_table.et_pb_featured_table .et_pb_dollar_sign {
    font-size: 80px;
}

/* Pricing Tables sum font size */
.divi_den_pro_photographer_pricing_table_section .et_pb_pricing .et_pb_pricing_table.et_pb_featured_table .et_pb_sum {
    font-size: 80px;
}

.divi_den_pro_photographer_pricing_table_section .et_pb_pricing .et_pb_pricing_table.et_pb_featured_table .et_pb_pricing_heading {
    padding: 0 0 33px !important;
}

/*Blog Section*/

.divi_den_pro_photographer_blog_section .et_pb_post:nth-child(1) {
    width: 74.3%;
    float: left;
    margin-right: 0;
    margin-bottom: 30px;
}

.divi_den_pro_photographer_blog_section .et_pb_post:nth-child(2) {
    width: 23.5%;
    float: right;
    margin-bottom: 30px;
}

.divi_den_pro_photographer_blog_section .et_pb_post:nth-child(3) {
    width: 23.5%;
    float: right;
    margin-bottom: 0;
    clear: right;
}

.divi_den_pro_photographer_blog_section .et_pb_post .entry-featured-image-url {
    overflow: hidden;
}

.divi_den_pro_photographer_blog_section .et_pb_post .entry-featured-image-url img {
    transition: 0.3s;
}

.divi_den_pro_photographer_blog_section .et_pb_post:hover .entry-featured-image-url img {
    transform: scale(1.1);
}

/*Blog Pagination Color*/
.divi_den_pro_photographer_blog_section .pagination a {
    color: #fff;
}

/*Footer Section*/

#page-container .divi_den_pro_photographer_footer_section .et_pb_newsletter_form p:last-of-type {
    width: 29% !important;
    margin-right: 0 !important;
}

#page-container .divi_den_pro_photographer_footer_section .et_pb_newsletter_form p {
    width: 65.5% !important;
    margin-right: 5.2%;
    position: relative;
    flex-basis: unset;
}

#page-container .divi_den_pro_photographer_footer_section .et_pb_newsletter form {
    width: 100%;
}

/* Columns */

#page-container .divi_den_pro_photographer_footer_section .et_pb_column_1_4.et-last-child,
#page-container .divi_den_pro_photographer_footer_section .et_pb_column_1_4:last-child {
    width: 33% !important;
}

#page-container .divi_den_pro_photographer_footer_section .et_pb_column_1_4 {
    width: 16% !important;
}

/*Responsive*/

@media only screen and (max-width: 1390px) {
    .divi_den_pro_photographer_text_section_1 {
        padding-top: 60px !important;
    }

    .divi_den_pro_photographer_text_section_1 .et_pb_text {
        margin-top: 0 !important;
    }

    #page-container .divi_den_pro_photographer_cta_section .et_pb_promo {
        padding: 40px 20px !important;
    }

    .divi_den_pro_photographer_pricing_table_section .et_pb_pricing_table .et_pb_button_wrapper {
        padding-left: 0;
        padding-right: 0;
    }

    body .divi_den_pro_photographer_video_section .et_pb_blurb {
        padding: 220px 40px 40px !important;
    }


}

@media only screen and (max-width: 980px) {
    .divi_den_pro_photographer_blog_section .et_pb_post:nth-child(1) {
        width: 100%;
    }

    .divi_den_pro_photographer_blog_section .et_pb_post:nth-child(2) {
        width: 48%;
        float: left;
        margin-bottom: 0;
        margin-right: 4%;
    }

    .divi_den_pro_photographer_blog_section .et_pb_post:nth-child(3) {
        width: 48%;
        float: left;

    }

    .divi_den_pro_photographer_footer_section .et_pb_subscribe .et_pb_newsletter_form {
        display: block !important;
        padding: 0 !important;
        width: 100% !important;
    }

    #page-container .divi_den_pro_photographer_footer_section .et_pb_column_1_4 {
        width: 23% !important;
        padding: 0;
    }

    #page-container .divi_den_pro_photographer_footer_section .et_pb_column_1_4.et-last-child, #page-container .divi_den_pro_photographer_footer_section .et_pb_column_1_4:last-child {
        width: 20% !important;
    }

    #page-container .divi_den_pro_photographer_gallery_section .et_pb_gallery .et_pb_gallery_item {
        width: 48% !important;
        margin-right: 4% !important;

    }

    #page-container .divi_den_pro_photographer_gallery_section .et_pb_gallery .et_pb_gallery_item:nth-child(2n+2) {
        margin-right: 0% !important;
    }
}

@media only screen and (max-width: 767px) {
    .divi_den_pro_photographer_header .et_pb_slider .et-pb-controllers {
        padding: 30px 70px !important;

        width: 350px !important;
    }

    .divi_den_pro_photographer_header .et-pb-slider-arrows {

        width: 350px;
    }

    .divi_den_pro_photographer_header .et_pb_slider .et-pb-slider-arrows a {
        left: 20px !important;
        bottom: 13px !important;
    }

    .divi_den_pro_photographer_header .et_pb_slider .et-pb-slider-arrows a.et-pb-arrow-next {
        right: 20px !important;
        left: auto !important;
    }

    .divi_den_pro_photographer_header ul.et_pb_social_media_follow:before {
        bottom: 10px !important;
    }

    #page-container .divi_den_pro_photographer_gallery_section .et_pb_gallery .et_pb_gallery_item {
        width: 100% !important;
        margin-right: 0 !important;
    }

    #page-container .divi_den_pro_photographer_gallery_section .et_pb_gallery .et_pb_gallery_item img {
        display: block;
        width: 100%;
    }

    #page-container .divi_den_pro_photographer_footer_section .et_pb_column_1_4 {
        width: 100% !important;
        margin-right: 0 !important;
        margin-bottom: 30px;
    }

    #page-container .divi_den_pro_photographer_footer_section .et_pb_column_1_4.et-last-child, #page-container .divi_den_pro_photographer_footer_section .et_pb_column_1_4:last-child {
        width: 100% !important;
    }

    body .divi_den_pro_photographer_video_section .et_pb_blurb {
        padding: 120px 40px 40px !important;
    }

    body .divi_den_pro_photographer_video_section .et_pb_blurb .et_pb_main_blurb_image {
        margin: 0 0 70px!important;
    }

}

@media only screen and (max-width: 480px) {
    .divi_den_pro_photographer_about_us_section .et_pb_column:first-child {
        width: 29% !important;
        margin-right: 2% !important;
    }

    .divi_den_pro_photographer_about_us_section .et_pb_column:nth-child(2) {
        width: 69% !important;
        margin-right: 0 !important;
    }

    .divi_den_pro_photographer_about_us_section .et_pb_column:last-child {
        width: 100% !important;
    }

    .divi_den_pro_photographer_blog_section .et_pb_post:nth-child(2) {
        width: 100%;
        margin-bottom: 30px;
        margin-right: 0;
    }

    .divi_den_pro_photographer_blog_section .et_pb_post:nth-child(3) {
        width: 100%;
        float: left;
    }

    #page-container .divi_den_pro_photographer_footer_section .et_pb_newsletter_form p {
        width: 100% !important;
        margin-right: 0;

    }

    #page-container .divi_den_pro_photographer_footer_section .et_pb_newsletter_form p:last-of-type {
        width: 100% !important;

    }

    .et_pb_slider_1.et_pb_slider .et-pb-controllers {
        padding: 57px 60px 20px !important;
        width: 250px !important;

    }

    .divi_den_pro_photographer_testimonials .et-pb-slider-arrows {
        width: 250px !important;
    }

    .divi_den_pro_photographer_testimonials .et_pb_slider .et-pb-slider-arrows a {
        left: 10px !important;
        bottom: 3px !important;
    }

    .divi_den_pro_photographer_testimonials .et_pb_slider .et-pb-slider-arrows a.et-pb-arrow-next {
        right: 10px !important;
        left: auto !important;
    }

    .divi_den_pro_photographer_header ul.et_pb_social_media_follow {
        display: none !important
    }

    .divi_den_pro_photographer_header .et_pb_slider .et-pb-controllers,
    .divi_den_pro_photographer_header .et-pb-slider-arrows {
        width: 280px !important;
    }

    body .divi_den_pro_photographer_video_section .et_pb_blurb {
        padding: 70px 30px 30px !important;
    }

    body .divi_den_pro_photographer_video_section .et_pb_blurb .et_pb_main_blurb_image {
        margin: 0 0 40px!important;
    }
}</style>