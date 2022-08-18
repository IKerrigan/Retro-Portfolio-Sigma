jQuery(document).ready(function ($) {

    $('#retro-mail-form').on("submit", function (e) {

        e.preventDefault();

        var form = $(this),
            fields = form.find("input[name='name'], input[name='email'], input[name='subject'], input[name='human'], textarea"),
            send = {
                data: {
                    name: fields.filter("[name=name]").val(),
                    email: fields.filter("[name=email]").val(),
                    subject: fields.filter("[name=subject]").val(),
                    message: fields.filter("[name=message]").val(),

                },
            },
            name_error = form.find("#contact-form-name-error"),
            email_error = form.find("#contact-form-email-error"),
            subject_error = form.find("#contact-form-subject-error"),
            message_error = form.find("#contact-form-message-error"),
            human_error = form.find("#contact-form-human-error"),
            success_message = form.find("#contact-form-success"),
            error = form.find("span");

        error.hide();
        error = false;
        
        fields.each(function () {

            val = this.value;

            if (this.name == "name" && !/^[A-Z][a-z]+$/.test(val)) {
                this.focus();
                error = name_error;
            } else if (this.name == "email" && !is_email(val)) {
                this.focus();
                error = email_error;
            } else if (this.name == "message" && val.length < 1) {
                this.focus();
                error = message_error;
            } else if (this.name == "subject" && !/^[A-Za-zА-ЩЬЮЯҐЄІЇа-щьюяґєії ]+$/.test(val)) {
                this.focus();
                error = subject_error;
            } else {
                localStorage.setItem(this.name, val);
            }

        });

        if (!error) {
            success_message.show();

            if(send.data.subject.includes("зробити замовлення")) {
                alert("Замовлення оформлено успішно! З вами скоро зв'яжуться!");
            }
        } else {
            error.show();
        }

    });
    function is_email(address) {
        return address.match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    }
});
