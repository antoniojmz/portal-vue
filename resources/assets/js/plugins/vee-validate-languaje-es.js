! function(e, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (e.__vee_validate_locale__es = e.__vee_validate_locale__es || {}, e.__vee_validate_locale__es.js = n())
}(this, function() {
    "use strict";
    var e = {
        name: "es",
        messages: {
            _default: function(e) {
                return "El campo " + e + " no es válido."
            },
            after: function(e, n) {
                var o = n[0];
                return "El campo " + e + " debe ser posterior " + (n[1] ? "o igual " : "") + "a " + o + "."
            },
            alpha_dash: function(e) {
                return "El campo " + e + " solo debe contener letras, números y guiones."
            },
            alpha_num: function(e) {
                return "El campo " + e + " solo debe contener letras y números."
            },
            alpha_spaces: function(e) {
                return "El campo " + e + " solo debe contener letras y espacios."
            },
            alpha: function(e) {
                return "El campo " + e + " solo debe contener letras."
            },
            before: function(e, n) {
                var o = n[0];
                return "El campo " + e + " debe ser anterior " + (n[1] ? "o igual " : "") + "a " + o + "."
            },
            between: function(e, n) {
                return "El campo " + e + " debe estar entre " + n[0] + " y " + n[1] + "."
            },
            confirmed: function(e) {
                return "El campo " + e + " no coincide."
            },
            credit_card: function(e) {
                return "El campo " + e + " es inválido."
            },
            date_between: function(e, n) {
                return "El campo " + e + " debe estar entre " + n[0] + " y " + n[1] + "."
            },
            date_format: function(e, n) {
                return "El campo " + e + " debe tener formato formato " + n[0] + "."
            },
            decimal: function(e, n) {
                void 0 === n && (n = []);
                var o = n[0];
                return void 0 === o && (o = "*"), "El campo " + e + " debe ser númerico y contener " + ("*" === o ? "" : o) + " puntos decimales."
            },
            digits: function(e, n) {
                return "El campo " + e + " debe ser númerico y contener exactamente " + n[0] + " dígitos."
            },
            dimensions: function(e, n) {
                return "El campo " + e + " debe ser de " + n[0] + " pixeles por " + n[1] + " pixeles."
            },
            email: function(e) {
                return "El campo " + e + " debe ser un correo electrónico válido."
            },
            ext: function(e) {
                return "El campo " + e + " debe ser un archivo válido."
            },
            image: function(e) {
                return "El campo " + e + " debe ser una imagen."
            },
            in: function(e) {
                return "El campo " + e + " debe ser un valor válido."
            },
            integer: function(e) {
                return "El campo " + e + " debe ser un entero."
            },
            ip: function(e) {
                return "El campo " + e + " debe ser una dirección ip válida."
            },
            length: function(e, n) {
                var o = n[0],
                    r = n[1];
                return r ? "El largo del campo " + e + " debe estar entre " + o + " y " + r + "." : "El largo del campo " + e + " debe ser " + o + "."
            },
            max: function(e, n) {
                return "El campo " + e + " no debe ser mayor a " + n[0] + " caracteres."
            },
            max_value: function(e, n) {
                return "El campo " + e + " debe de ser " + n[0] + " o menor."
            },
            mimes: function(e) {
                return "El campo " + e + " debe ser un tipo de archivo válido."
            },
            min: function(e, n) {
                return "El campo " + e + " debe tener al menos " + n[0] + " caracteres."
            },
            min_value: function(e, n) {
                return "El campo " + e + " debe ser " + n[0] + " o superior."
            },
            not_in: function(e) {
                return "El campo " + e + " debe ser un valor válido."
            },
            numeric: function(e) {
                return "El campo " + e + " debe contener solo caracteres númericos."
            },
            regex: function(e) {
                return "El formato del campo " + e + " no es válido."
            },
            required: function(e) {
                return "El campo " + e + " es obligatorio."
            },
            size: function(e, n) {
                return "El campo " + e + " debe ser menor a " + function(e) {
                    var n = 0 == (e = 1024 * Number(e)) ? 0 : Math.floor(Math.log(e) / Math.log(1024));
                    return 1 * (e / Math.pow(1024, n)).toFixed(2) + " " + ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][n]
                }(n[0]) + "."
            },
            url: function(e) {
                return "El campo " + e + " no es una URL válida."
            }
        },
        attributes: {}
    };
    return "undefined" != typeof VeeValidate && VeeValidate.Validator.addLocale(e), e
});