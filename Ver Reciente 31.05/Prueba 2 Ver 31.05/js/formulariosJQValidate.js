$("#formulario_registro").validate({
	"rules": {
		"rut": {
			required: true,
			maxlength: 10
		},
		"nombres": {
			required: true,
			minlength: 4
		},
		"apellidos": {
			required: true,
			minlength: 4
		},
		"email": {
			required: true,
			email: true
		},
		"direccion": {
			required: true,
			minlength: 5
		},
		"password": {
			required: true,
			minlength: 8
		},
		"repetir_password": {
			required: true,
			equalTo: ("#password")
		}
	}
});
// formulario para ingresar como usuario
$("#formulario_ingresar").validate({
	"rules": {
		"email": {
			required: true,
			email: true
		},
		"password": {
			required: true,
			minlength: 8
		}
	}
});

// formulario para ingresar a bodega

$("#formulario_bodega").validate({
	"rules": {
		"categoria": {
			required: true
		},
		"nombre": {
			required: true
		},
		"cantidad": {
			required: true,
			minlength: 1,
			number: true
		}
	}
});


// Formulario del mantenedor de usuarios

$("#formulario_mantenedorusuarios").validate({
	"rules": {
		"id": {
			required: true,
			minlength: 1,
			maxlength: 2
		},
		"rut": {
			required: true
		},
		"nombre": {
			required: true,
			minlength : 4
		},
		"apellido": {
			required: true,
			minlength: 4
		},
		"email": {
			required: true,
			email: true
		},
		"direccion": {
			required: true,
			minlength: 5
		},
		"password": {
			required: true,
			minlength: 8
		}
	}
});


// Formulario de mantenedor de productos

$("#formularioMP").validate({
	"rules": {
		"id": {
			required: true,
			minlength: 1
		},
		"categoria": {
			required: true
		},
		"nombre": {
			required: true,
			minlength: 4
		},
		"descripcion": {
			required: true,
			minlength: 5
		},
		"precio": {
			required: true
		},
		"desc": {
			required: true
		},
		"descxoferta": {
			required: true
		}
	}
})

$("#formulario_misdatos").validate({
	"rules": {
		"rut": {
			required: true,
			maxlength: 10
		},
		"nombres": {
			required: true,
			minlength: 4
		},
		"apellidos": {
			required: true,
			minlength: 4
		},
		"email": {
			required: true,
			email: true
		},
		"direccion": {
			required: true,
			minlength: 5
		},
		"password": {
			required: true,
			minlength: 8
		},
		"repetir_password": {
			required: true,
			equalTo: ("#password")
		}
	}
})

//Para validar el email
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Valida el rut con su cadena completa "XXXXXXXX-X"
function validateRut(rutCompleto) {
    if (!/^[0-9]+-[0-9kK]{1}$/.test(rutCompleto))
        return false;
    var tmp = rutCompleto.split('-');
    var rut = tmp[0];
    var digv = tmp[1]; 
    if (digv == 'k') digv = 'K' ;
    return (dv(rut) == digv );
}

//Digito verificador
function dv(T) {
    var M=0,S=1;
    for(; T; T = Math.floor(T/10))
        S=(S + T % 10 * (9 - M++ %6))%11;
    return S?S-1:'k';
}

// Uso de la función validateRut
// alert( Fn.validateRut('16560241-2') ? 'válido' : 'inválido');

$.validator.addMethod(
    "validateemail",
    function(value, element, validate) {
        debugger
        if (validate) {
            return validateEmail(value);
        }
    },
    "Formato de correo incorrecto"
);

$.validator.addMethod(
    "onenumber",
    function(value, element, validate) {
        if (validate) {
            var re = new RegExp('.*[0-9].*');
            resp = re.test(value);
            return resp;
        }
    },
    "La contraseña debe contener al menos un número"
);

$.validator.addMethod(
    "onemayus",
    function(value, element, validate) {
        if (validate) {
            var re = new RegExp('.*[A-Z].*');
            resp = re.test(value);
            return resp;
        }
    },
    "La contraseña debe contener al menos una mayúscula"
);

$.validator.addMethod(
    "rut",
    function(value, element, validate) {
        if (validate) {
            return validateRut(value);
        }
    },
    "El formato del rut no es válido"
);

$("#rut").rules("add", { rut: true });
$("email").rules("add",{ validateemail: true});
$("password").rules("add",{ onemayus: true});
$("password").rules("add",{ onenumber: true});






