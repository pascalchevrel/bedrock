/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

;(function($) {

    'use strict';

    var $main = $('main');
    var $container = $('.tab-panel');

    $('.toggle > ul > li > a').on('click', function (e) {
        e.preventDefault();
        var href = e.target.href;

        // set the min height of the container should the newsletter
        // have been expanded to avoid content jump.
        $container.css('min-height', $container.height());

        if (href.indexOf('send-sms') !== -1) {
            $main.attr('data-active', 'sms');
        } else if (href.indexOf('send-email') !== -1) {
            $main.attr('data-active', 'email');
        }
    });

    $('#sms-form').on('submit', function (e) {
        e.preventDefault();
        var $form = $(e.target);
        var action = $form.attr('action');
        $.post(action, $form.serialize())
            .done(function (data) {
                // TODO make this fancier like email one
                if (data.success) {
                    $('#send-sms > .inner-wrapper > h3').addClass('hidden');
                    $form.addClass('hidden');
                    $('.sms-form-thank-you').removeClass('hidden');
                } else if (data.error) {
                    $form.find('.error').html(data.error).removeClass('hidden');
                }
            })
            .fail(function () {
                $form.find('.error').removeClass('hidden');
            });
    });

    $('.send-another').on('click', function (e) {
        e.preventDefault();
    });


})(window.jQuery);
