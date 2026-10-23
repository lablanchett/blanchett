import type { Locale } from './i18n';

type Seccion = { id: string; titulo: string; parrafos: string[] };

export const presentacion: Record<Locale, Seccion[]> = {
  es: [
    { id: 'quienes-somos', titulo: 'Quiénes somos', parrafos: [
      'La Blanchett es un proyecto cultural y de ocio nocturno creado por y para mujeres lesbianas, bisexuales y la comunidad FLINTA, nacido en 2025 en Barcelona.',
      'Creamos espacios seguros, inclusivos y llenos de buena energía, donde celebramos la diversidad a través del arte, la música y la comunidad. Somos más que una fiesta: un punto de encuentro donde sentirse libre, cómoda y representada.',
    ] },
    { id: 'que-hacemos', titulo: 'Qué hacemos', parrafos: [
      'Tardeo / Fiesta — Una noche para bailar, brindar y conocer gente. Música latina, ambiente diverso y performances según la temática.',
      'Íntima e Interactiva — Un espacio cultural que da voz y visibilidad a mujeres lesbianas, bisexuales y FLINTA. Presentaciones artísticas, música, poesía, performance, tattoo, tarot, fotografía y más.',
    ] },
    { id: 'que-nos-diferencia', titulo: 'Qué nos diferencia', parrafos: [
      'Somos un proyecto hecho por y para el colectivo. Apostamos por la música latina y argentina y combinamos fiesta y cultura: entretenimiento, visibilidad y creación.',
      'Nuestra identidad es lúdica, llena de dobles sentidos y humor bollero. En nuestros encuentros el respeto es el punto de partida.',
    ] },
    { id: 'eventos-pasados', titulo: 'Eventos pasados', parrafos: [
      'El press kit recoge 6 ediciones de Tardeo / Fiesta en distintos espacios de Barcelona, con una asistencia de entre 120 y 170 personas por edición, y 3 ediciones de Íntima e Interactiva de alrededor de 65 personas.',
      'DJ sets, performances, shows acústicos y muestras de arte del colectivo forman parte de nuestros encuentros.',
    ] },
    { id: 'nuestro-publico', titulo: 'Nuestro público', parrafos: [
      'Nuestro público es mayoritariamente sáfico, de entre 25 y 45 años. Valora tanto el ocio como la posibilidad de encontrarse y vincularse en un espacio seguro, alegre y sin presiones.',
      'El ambiente es distendido, divertido y respetuoso: una propuesta de disfrute íntima y consciente que celebra la diversidad y la cultura LGTBIQ+.',
    ] },
    { id: 'que-buscamos', titulo: 'Qué buscamos', parrafos: [
      'Buscamos espacios que compartan nuestros valores y quieran formar parte de una propuesta cultural que mezcla música, deseo, visibilidad sáfica y humor bollero.',
      'Si creés que La Blanchett puede encajar en tu programación, nos encantaría hablarlo.',
    ] },
  ],
  ca: [
    { id: 'quienes-somos', titulo: 'Qui som', parrafos: [
      'La Blanchett és un projecte cultural i d’oci nocturn creat per i per a dones lesbianes, bisexuals i la comunitat FLINTA, nascut el 2025 a Barcelona.',
      'Creem espais segurs, inclusius i plens de bona energia, on celebrem la diversitat a través de l’art, la música i la comunitat. Som més que una festa: un punt de trobada on sentir-se lliure, còmoda i representada.',
    ] },
    { id: 'que-hacemos', titulo: 'Què fem', parrafos: [
      'Tardeo / Festa — Una nit per ballar, brindar i conèixer gent. Música llatina, ambient divers i performances segons la temàtica.',
      'Íntima i Interactiva — Un espai cultural que dona veu i visibilitat a dones lesbianes, bisexuals i FLINTA. Propostes artístiques, música, poesia, performance, tatuatge, tarot, fotografia i més.',
    ] },
    { id: 'que-nos-diferencia', titulo: 'Què ens diferencia', parrafos: [
      'Som un projecte fet per i per al col·lectiu. Apostem per la música llatina i argentina i combinem festa i cultura: entreteniment, visibilitat i creació.',
      'La nostra identitat és lúdica, plena de dobles sentits i humor lèsbic. A les nostres trobades el respecte és el punt de partida.',
    ] },
    { id: 'eventos-pasados', titulo: 'Esdeveniments passats', parrafos: [
      'El dossier de premsa recull 6 edicions de Tardeo / Festa en diferents espais de Barcelona, amb una assistència d’entre 120 i 170 persones per edició, i 3 edicions d’Íntima i Interactiva d’unes 65 persones.',
      'Sessions de DJ, performances, concerts acústics i mostres d’art del col·lectiu formen part de les nostres trobades.',
    ] },
    { id: 'nuestro-publico', titulo: 'El nostre públic', parrafos: [
      'El nostre públic és majoritàriament sàfic, d’entre 25 i 45 anys. Valora tant l’oci com la possibilitat de trobar-se i crear vincles en un espai segur, alegre i sense pressions.',
      'L’ambient és distès, divertit i respectuós: una proposta de gaudi íntima i conscient que celebra la diversitat i la cultura LGTBIQ+.',
    ] },
    { id: 'que-buscamos', titulo: 'Què busquem', parrafos: [
      'Busquem espais que comparteixin els nostres valors i vulguin formar part d’una proposta cultural que barreja música, desig, visibilitat sàfica i humor lèsbic.',
      'Si creus que La Blanchett pot encaixar en la teva programació, ens encantaria parlar-ne.',
    ] },
  ],
  en: [
    { id: 'quienes-somos', titulo: 'Who we are', parrafos: [
      'La Blanchett is a cultural and nightlife project created by and for lesbians, bisexual women and the FLINTA community, founded in Barcelona in 2025.',
      'We create safe, inclusive spaces full of good energy, celebrating diversity through art, music and community. More than a party, we are a meeting place where you can feel free, comfortable and represented.',
    ] },
    { id: 'que-hacemos', titulo: 'What we do', parrafos: [
      'Tardeo / Party — A night to dance, raise a glass and meet people. Latin music, a diverse crowd and performances inspired by each event’s theme.',
      'Intimate and Interactive — A cultural space giving a voice and visibility to lesbians, bisexual women and the FLINTA community. Art, music, poetry, performance, tattoos, tarot, photography and more.',
    ] },
    { id: 'que-nos-diferencia', titulo: 'What makes us different', parrafos: [
      'We are a project made by and for our community. We champion Latin and Argentine music, bringing parties and culture together through entertainment, visibility and creativity.',
      'Our identity is playful, full of double meanings and lesbian humour. Respect is the starting point for every gathering.',
    ] },
    { id: 'eventos-pasados', titulo: 'Past events', parrafos: [
      'Our press kit records 6 Tardeo / Party editions at venues across Barcelona, with 120–170 attendees per edition, and 3 Intimate and Interactive editions with around 65 attendees.',
      'DJ sets, performances, acoustic shows and exhibitions by artists from our community are part of our gatherings.',
    ] },
    { id: 'nuestro-publico', titulo: 'Our audience', parrafos: [
      'Our audience is predominantly sapphic, aged 25–45. They value both going out and the chance to meet and connect in a safe, joyful space without pressure.',
      'The atmosphere is relaxed, fun and respectful: an intimate, mindful way to come together and celebrate diversity and LGBTQ+ culture.',
    ] },
    { id: 'que-buscamos', titulo: 'Let’s collaborate', parrafos: [
      'We are looking for venues that share our values and want to be part of a cultural project combining music, desire, sapphic visibility and lesbian humour.',
      'If La Blanchett sounds like a fit for your programme, we would love to talk.',
    ] },
  ],
};
