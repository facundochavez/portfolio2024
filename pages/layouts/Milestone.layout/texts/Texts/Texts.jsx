import { useGlobalContext } from '@/context/global.context';
import useIsMobile from '@/hooks/useIsMobile';
import { ExportOutlined } from '@ant-design/icons';

const BrandsTopText = () => {
  const { lenguage } = useGlobalContext();
  //// COMPONENT
  return (
    <>
      {lenguage === 'en' ? (
        <p>
          For years, I focused on studying and crafting graphic brands with a pragmatic approach. I
          came to realize that analyzing the market and building a robust strategy form the
          cornerstone for achieving a high&ndash;performance brand.
        </p>
      ) : (
        <p>
          Durante años, me dediqué al estudio y diseño de marcas gráficas con un enfoque pragmático.
          Comprendí que analizar el mercado y desarrollar una sólida estrategia son la base para
          lograr una marca de alto rendimiento.
        </p>
      )}
    </>
  );
};

const YoutubeTopText = () => {
  const { lenguage } = useGlobalContext();
  //// COMPONENT
  return (
    <>
      {lenguage === 'en' ? (
        <p>
          When I founded my design studio, I&nbsp;set up a{' '}
          <a
            href='https://www.youtube.com/marcaoptimizada'
            target='_blank'
            onclick='return false'
            style={{ color: 'var(--color-7)' }}>
            YouTube&nbsp;channel
          </a>{' '}
          to discuss branding and design approaches. That was also my initial foray into{' '}
          <a
            href='http://www.marcaoptimizada.com'
            target='_blank'
            onclick='return false'
            style={{ color: 'var(--color-7)' }}>
            web&nbsp;development.
          </a>{' '}
          <br />
          <span>Margin, padding...</span> okay, got it.
        </p>
      ) : (
        <p>
          Al fundar mi estudio de diseño creé un{' '}
          <a
            href='https://www.youtube.com/marcaoptimizada'
            target='_blank'
            style={{ color: 'var(--color-7)' }}>
            canal de YouTube
          </a>{' '}
          para hablar sobre <span>branding</span> y enfoques de diseño. Ese también fue mi primer
          acercamiento al{' '}
          <a
            href='http://www.marcaoptimizada.com'
            target='_blank'
            style={{ color: 'var(--color-7)' }}>
            desarrollo web.
          </a>{' '}
          <br />
          <span>Margin, padding...</span> okay, lo tengo.
        </p>
      )}
    </>
  );
};

const PrototypesBottomText = () => {
  const { lenguage } = useGlobalContext();
  //// COMPONENT
  return (
    <>
      {lenguage === 'en' ? (
        <p>
          Sometimes for work, sometimes for fun. I&nbsp;learned that less is less and more is more, you
          just need to understand how much is necessary.
        </p>
      ) : (
        <p>
          A veces por trabajo, a veces por diversión. Aprendí que menos es menos y más es más, sólo
          necesitas entender cuánto se necesita.
        </p>
      )}
    </>
  );
};

const StartCodingTopText = () => {
  const { lenguage } = useGlobalContext();
  //// COMPONENT
  return (
    <>
      {lenguage === 'en' ? (
        <p>
          Design may be quite simple, but being responsive was my challenge. Over time, layouts and{' '}
          <span>media queries</span> became my newfound hobby.
        </p>
      ) : (
        <p>
          El diseño puede resultar simple, pero ser <span>responsive</span> era mi desafío. De a
          poco, los <span>layouts</span> y <span>media queries</span> se convirtieron en mi nuevo
          hobbie.
        </p>
      )}
    </>
  );
};

const StartCodingBottomText = () => {
  const { lenguage } = useGlobalContext();

  //// COMPONENT
  return (
    <>
      {lenguage === 'en' ? (
        <p>
          I created this, building upon the work of Anna Misiuda, Paweł Bartosz, Iwona Tryka, Patryk
          Liberda and Tomasz Krol:{' '}
          <a
            href='https://www.behance.net/gallery/123745661/The-Atrium-Project-Collaboration-Platform?tracking_source=search_projects_recommended%7CAtrium+Design'
            target='_blank'
            style={{ color: 'var(--color-8)' }}>
            The&nbsp;Atrium
          </a>
        </p>
      ) : (
        <p>
          Para crear esto me basé en el trabajo de Anna Misiuda, Paweł Bartosz, Iwona Tryka, Patryk
          Liberda y Tomasz Krol:{' '}
          <a
            href='https://www.behance.net/gallery/123745661/The-Atrium-Project-Collaboration-Platform?tracking_source=search_projects_recommended%7CAtrium+Design'
            target='_blank'
            style={{ color: 'var(--color-8)' }}>
            The&nbsp;Atrium
          </a>{' '}
        </p>
      )}
    </>
  );
};

const FrontendTopText = () => {
  const { lenguage } = useGlobalContext();
  //// COMPONENT
  return (
    <>
      {lenguage === 'en' ? (
        <p>
          Alright, things just got serious. This is a personal project and a work in progress. I'll
          be able to share more soon.
        </p>
      ) : (
        <p>
          Okay, esto se puso serio. Este es un proyecto propio y un trabajo en proceso. Pronto podré
          compartir más.
        </p>
      )}
    </>
  );
};

const BackendTopText = () => {
  const { lenguage } = useGlobalContext();
  //// COMPONENT
  return (
    <>
      {lenguage === 'en' ? (
        <p>
          An app I'm proud of. I'd love for you to{' '}
          <a href='http://www.petpath.app' target='_blank' style={{ color: 'var(--color-7)' }}>
            give it a try!
          </a>{' '}
          Just one thing: if you're more of a dog person, you'll need to{' '}
          <a href='http://www.petpath.app' target='_blank' style={{ color: 'var(--color-7)' }}>
            register
          </a>{' '}
          and I'll let you know when the pups are ready.
        </p>
      ) : (
        <p>
          Una aplicación de la que estoy orgulloso. ¡Me encantaría que{' '}
          <a href='http://www.petpath.app' target='_blank' style={{ color: 'var(--color-7)' }}>
            la probaras!
          </a>{' '}
          Eso sí: si te gustan más los perros, deberás{' '}
          <a href='http://www.petpath.app' target='_blank' style={{ color: 'var(--color-7)' }}>
            registrarte
          </a>{' '}
          y te avisaré cuando los canes estén listos.
        </p>
      )}
    </>
  );
};

const BackendBottomText = () => {
  const { lenguage } = useGlobalContext();
  //// COMPONENT
  return (
    <>
      {lenguage === 'en' ? (
        <p>
          This work was made possible by the team at{' '}
          <a href='https://thatapicompany.com/' target='_blank' style={{ color: 'var(--color-7)' }}>
            That API Company
          </a>{' '}
          <br />
          Used API:{' '}
          <a href='https://www.thecatapi.com/' target='_blank' style={{ color: 'var(--color-7)' }}>
            The Cat API
          </a>{' '}
        </p>
      ) : (
        <p>
          Este trabajo fue posible gracias al equipo de{' '}
          <a href='https://thatapicompany.com/' target='_blank' style={{ color: 'var(--color-7)' }}>
            That API Company
          </a>{' '}
          <br />
          API utilizada:{' '}
          <a href='https://www.thecatapi.com/' target='_blank' style={{ color: 'var(--color-7)' }}>
            The Cat API
          </a>{' '}
        </p>
      )}
    </>
  );
};

const texts = {
  brands: {
    topText: <BrandsTopText />,
    bottomText: ''
  },
  youtube: {
    topText: <YoutubeTopText />,
    bottomText: ''
  },
  prototypes: {
    topText: '',
    bottomText: <PrototypesBottomText />
  },
  'start-coding': {
    topText: <StartCodingTopText />,
    bottomText: <StartCodingBottomText />
  },
  'front-end': {
    topText: <FrontendTopText />,
    bottomText: ''
  },
  'back-end': {
    topText: <BackendTopText />,
    bottomText: <BackendBottomText />
  }
};

export default texts;
