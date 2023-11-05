import data from './fotos';
const { fotos } = data;

export default {
        categorias:[
            {id: 'primavera', nombre:'Primavera', numeroFotos: fotos['primavera'].length, imagenPortada: './img/primavera.jpg' },
            {id: 'verano', nombre:'Verano', numeroFotos: fotos['verano'].length, imagenPortada: './img/verano.jpg' },
            {id: 'invierno', nombre:'Invierno', numeroFotos: fotos['invierno'].length, imagenPortada: './img/invierno.jpg' },
            {id: 'otono', nombre:'Otoño', numeroFotos: fotos['otono'].length, imagenPortada: './img/otono.jpg' },
            {id: 'primver', nombre:'Prim-Ver', numeroFotos: fotos['primver'].length, imagenPortada: './img/prim.jpg'},
            {id: 'otoinvi', nombre:'Oto-Invi', numeroFotos: fotos['otoinvi'].length, imagenPortada: './img/oto.jpg'},

	],
};
