---
render_macros: true
---

# Send to Device Widget {: #sendtodevice }

The *Send to Device* widget is a single form which facilitates the sending of a download link from a desktop browser to a mobile device. The form allows sending via email.

!!! important
    This widget should only be shown to a limited set of locales who are set up to receive the emails. For those locales not in the list, direct links to the respective app stores should be shown instead. If a user is on iOS or Android, `CTA (Call To Action)`{.interpreted-text role="abbr"} buttons should also link directly to respective app stores instead of showing the widget. This logic should be handled on a page-by-page basis to cover individual needs.


!!! note
    A full list of supported locales can be found in `settings/base.py` under `SEND_TO_DEVICE_LOCALES`, which can be used in the template logic for each page to show the form.


## Usage

1.  Make sure necessary files are in your CSS/JS bundles:

    - `'css/protocol/components/send-to-device.scss'`
    - `'js/base/send-to-device.es6.js'`

2.  Include the macro in your page template:

        {{ send_to_device() }}

3.  Initialize the widget:

    In your page JS, initialize the widget using:

        import SendToDevice from '/media/js/base/send-to-device.es6';

        const form = new SendToDevice();
        form.init();

    By default the `init()` function will look for a form with an HTML id of `send-to-device`. If you need to pass another id, you can do so directly:

        const form = new SendToDevice('my-custom-form-id');
        form.init();

### Configuration

The Jinja macro supports parameters as follows (* indicates a required parameter)

| Parameter name   | Definition                                                         | Format            | Example                                                    |
| ------------------ | -------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------ |
| platform*       | Platform ID for the receiving device. Defaults to 'all'.           | String              | 'all', 'android', 'ios'                                |
| message_set*    | ID for the email that should be received. Defaults to 'default'.   | String              | 'default', 'fx-mobile-download-desktop', 'fx-whatsnew' |
| dom_id*         | HTML form ID. Defaults to 'send-to-device'.                        | String              | 'send-to-device'                                           |
| class_name       | CSS class name for form orientation. Defaults to 'vertical'        | String              | 'horizontal', 'vertical'                                 |
| include_title    | Should the widget contain a title. Defaults to 'True'.             | Boolean             | 'True', 'False'                                          |
| title_text       | Provides a custom string for the form title, overriding the default. | Localizable string  | 'Send Firefox Lite to your smartphone or tablet' .         |
| input_label      | Provides a custom label for the input field, overriding the default. | Localizable string  | 'Enter your email' .                                       |
| legal_note_email | Provides a custom legal note for email use.                          | Localizable String. | 'The intended recipient of the email must have consented.' |
| spinner_color    | Hex color for the form spinner. Defaults to '#000'.                | String              | '#fff'                                                     |
| button_class     | Optional button CSS class string. Defaults to 'mzp-t-product'      | String              | 'mzp-t-product mzp-t-dark'                                 |
