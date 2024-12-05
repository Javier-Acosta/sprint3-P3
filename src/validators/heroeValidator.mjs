import { body } from "express-validator";

export const heroeValidator=()=>[
    body ('nombreSuperHeroe').notEmpty().withMessage ('el nombre del superheroe es requerido').trim().isLength({min:3, max: 60}).withMessage('El nombre del superheroe debe ener como minimo 3 caracteres y un máximo de 60'),
    body ('nombreReal').notEmpty().withMessage ('el nombre real es requerido').trim().isLength({ max: 3}).withMessage('El nombre real debe ener como minimo 3 caracteres y un máximo de 60'),
    body ('edad').notEmpty().withMessage ('la edad del superheroe es requerido').trim().isInt({min:0}).withMessage('la edad del superheroe debe ser mayor o igual a 0'),
    body ('poderes').notEmpty().withMessage ('debe indicar al menos un poder').isArray({min:1}).withMessage('debe ingresar un array de al menos un poder'),
    body ('poderes.*').notEmpty().withMessage ('debe indicar al menos un poder').isLength({min:3, max:60}).withMessage('el poder debe tener como minimo 3 caracteres y un máximo de 60').isString().withMessage('el poder debe ser un string ').trim()
]