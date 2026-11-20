export const textosFotos = {
  es: {
    titulo: 'Galería', descripcion: 'Álbumes de fotos de las fiestas de La Blanchett.',
    vacio: 'Pronto vas a encontrar acá las fotos de nuestras fiestas.',
    volver: 'Volver a la galería', una: 'foto', varias: 'fotos',
    lista: 'Fotos del álbum', abrir: 'Abrir foto', visor: 'Visor de fotos',
    cerrar: 'Cerrar', anterior: 'Foto anterior', siguiente: 'Foto siguiente',
    descargar: 'Descargar foto',
    fotoDelAlbum: (numero: number) => `Foto ${numero} del álbum`,
  },
  ca: {
    titulo: 'Galeria', descripcion: 'Àlbums de fotos de les festes de La Blanchett.',
    vacio: 'Aviat trobaràs aquí les fotos de les nostres festes.',
    volver: 'Tornar a la galeria', una: 'foto', varias: 'fotos',
    lista: 'Fotos de l’àlbum', abrir: 'Obrir foto', visor: 'Visor de fotos',
    cerrar: 'Tancar', anterior: 'Foto anterior', siguiente: 'Foto següent',
    descargar: 'Descarregar foto',
    fotoDelAlbum: (numero: number) => `Foto ${numero} de l’àlbum`,
  },
  en: {
    titulo: 'Gallery', descripcion: 'Photo albums from La Blanchett parties.',
    vacio: 'Photos from our parties will be here soon.',
    volver: 'Back to the gallery', una: 'photo', varias: 'photos',
    lista: 'Album photos', abrir: 'Open photo', visor: 'Photo viewer',
    cerrar: 'Close', anterior: 'Previous photo', siguiente: 'Next photo',
    descargar: 'Download photo',
    fotoDelAlbum: (numero: number) => `Photo ${numero} from the album`,
  },
};
