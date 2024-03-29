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
          For years, I focused on studying and crafting graphic brands from a
          pragmatic approach. I realized that analyzing the market and building
          a solid strategy are the cornerstone of a high&ndash;performing brand.
        </p>
      ) : (
        <p>
          Durante años, me dediqué al estudio y diseño de marcas gráficas desde
          un enfoque pragmático. Comprendí que analizar el mercado y desarrollar
          una sólida estrategia son la piedra angular de una marca de alto
          rendimiento.
        </p>
      )}
    </>
  );
};

const YoutubeTopText = () => {
  const { lenguage } = useGlobalContext();
  const { isMobile } = useIsMobile();
  //// COMPONENT
  return (
    <>
      {lenguage === 'en' ? (
        <p>
          When I founded my design studio, I&nbsp;set up a{' '}
          <a
            href='https://www.youtube.com/marcaoptimizada'
            target='_blank'
            style={{ color: 'var(--color-7)' }}
          >
            YouTube&nbsp;channel&nbsp;
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-7)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
          </a>{' '}
          to discuss branding and design approaches. That was also my initial
          foray into web development.
          {/*  {" "}
          <a
            href="http://www.marcaoptimizada.com"
            target="_blank"
            style={{ color: "var(--color-7)" }}
          >
            web&nbsp;development&nbsp;
            <ExportOutlined
              style={{
                filter: "var(--filter-color-7)",
                fontSize: isMobile ? "14px" : "15px",
              }}
            />
            .
          </a>{" "} */}
          <br />
          <span>Margin, padding...</span> okay, got it.
        </p>
      ) : (
        <p>
          Al fundar mi estudio de diseño creé un{' '}
          <a
            href='https://www.youtube.com/marcaoptimizada'
            target='_blank'
            style={{ color: 'var(--color-7)' }}
          >
            canal de YouTube&nbsp;
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-7)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
          </a>{' '}
          para hablar sobre <span>branding</span> y enfoques de diseño. Ese
          también fue mi primer acercamiento al desarrollo web.
          {/* {" "}
          <a
            href="http://www.marcaoptimizada.com"
            target="_blank"
            style={{ color: "var(--color-7)" }}
          >
            desarrollo web&nbsp;
            <ExportOutlined
              style={{
                filter: "var(--filter-color-7)",
                fontSize: isMobile ? "14px" : "15px",
              }}
            />
            .
          </a>{" "} */}
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
          Sometimes for work, sometimes for fun. I&nbsp;learned that less is
          less and more is more, you just have to understand how much is
          necessary.
        </p>
      ) : (
        <p>
          A veces por trabajo, a veces por diversión. Aprendí que menos es menos
          y más es más, sólo debes entender cuánto se necesita.
        </p>
      )}
    </>
  );
};

const StoreTopText = () => {
  const { lenguage } = useGlobalContext();
  const { isMobile } = useIsMobile();
  //// COMPONENT
  return (
    <>
      {lenguage === 'en' ? (
        <p>
          <span>&quot;Drink, code, repeat&quot;...</span> A simple idea
          escalated quickly: mugs with three-word phrases and a touch of humor.
          From product design to marketing campaign, I enjoyed every step of
          creating{' '}
          <a
            href='https://threewordsmug.com/'
            target='_blank'
            style={{ color: 'var(--color-3)' }}
          >
            Three&nbsp;Words&nbsp;Mug™&nbsp;
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-3)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
            .
          </a>
        </p>
      ) : (
        <p>
          <span>&quot;Drink, code, repeat&quot;...</span> Un idea simple escaló
          rápidamente: tazas con frases de tres palabras y un toque de humor.
          Desde el diseño de productos hasta la campaña de{' '}
          <span>marketing,</span> disfruté cada paso de la creación de{' '}
          <a
            href='https://threewordsmug.com/'
            target='_blank'
            style={{ color: 'var(--color-3)' }}
          >
            Three&nbsp;Words&nbsp;Mug™&nbsp;
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-3)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
            .
          </a>
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
          Design may be quite simple, but being <span>responsive</span> was my
          challenge. Over time, <span>layouts</span> and{' '}
          <span>media queries</span> became my newfound hobby.
        </p>
      ) : (
        <p>
          El diseño puede resultar simple, pero ser <span>responsive</span> era
          mi desafío. De a poco, los <span>layouts</span> y{' '}
          <span>media queries</span> se convirtieron en mi nuevo{' '}
          <span>hobby.</span>
        </p>
      )}
    </>
  );
};

const StartCodingBottomText = () => {
  const { lenguage } = useGlobalContext();
  const { isMobile } = useIsMobile();

  //// COMPONENT
  return (
    <>
      {lenguage === 'en' ? (
        <p>
          I created this, building upon the work of Anna Misiuda, Paweł Bartosz,
          Iwona Tryka, Patryk Liberda and Tomasz Krol:{' '}
          <a
            href='https://www.behance.net/gallery/123745661/The-Atrium-Project-Collaboration-Platform?tracking_source=search_projects_recommended%7CAtrium+Design'
            target='_blank'
            style={{ color: 'var(--color-8)' }}
          >
            The&nbsp;Atrium&nbsp;
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-8)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
          </a>
        </p>
      ) : (
        <p>
          Para crear esto me basé en el trabajo de Anna Misiuda, Paweł Bartosz,
          Iwona Tryka, Patryk Liberda y Tomasz Krol:{' '}
          <a
            href='https://www.behance.net/gallery/123745661/The-Atrium-Project-Collaboration-Platform?tracking_source=search_projects_recommended%7CAtrium+Design'
            target='_blank'
            style={{ color: 'var(--color-8)' }}
          >
            The&nbsp;Atrium&nbsp;
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-8)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
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
          Alright, things just got serious. This is a personal project and a
          work in progress. I&apos;ll be able to share more soon.
        </p>
      ) : (
        <p>
          Okay, esto se puso serio. Este es un proyecto propio y un trabajo en
          proceso. Pronto podré compartir más.
        </p>
      )}
    </>
  );
};

const BackendTopText = () => {
  const { lenguage } = useGlobalContext();
  const { isMobile } = useIsMobile();
  //// COMPONENT
  return (
    <>
      {lenguage === 'en' ? (
        <p>
          An app I&apos;m proud of. I&apos;d love for you to{' '}
          <a
            href='https://petpath.vercel.app/'
            target='_blank'
            style={{ color: 'var(--color-7)' }}
          >
            give it a try!&nbsp;
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-7)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
          </a>{' '}
          Just one thing: if you&apos;re more of a dog person, you&apos;ll need
          to{' '}
          <a
            href='https://petpath.vercel.app/'
            target='_blank'
            style={{ color: 'var(--color-7)' }}
          >
            register&nbsp;
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-7)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
          </a>{' '}
          and I&apos;ll let you know when the pups are ready.
        </p>
      ) : (
        <p>
          Una aplicación de la cual estoy orgulloso. ¡Me encantaría que{' '}
          <a
            href='https://petpath.vercel.app/'
            target='_blank'
            style={{ color: 'var(--color-7)' }}
          >
            la probaras!&nbsp;
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-7)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
          </a>{' '}
          Eso sí: si te gustan más los perros, deberás{' '}
          <a
            href='https://petpath.vercel.app/'
            target='_blank'
            style={{ color: 'var(--color-7)' }}
          >
            registrarte&nbsp;
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-7)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
          </a>{' '}
          y te avisaré cuando los canes estén listos.
        </p>
      )}
    </>
  );
};

const BackendBottomText = () => {
  const { lenguage } = useGlobalContext();
  const { isMobile, viewportWidth } = useIsMobile();
  //// COMPONENT
  return (
    <>
      {lenguage === 'en' ? (
        <p>
          This work was made possible by the team at{' '}
          {viewportWidth > 400 && viewportWidth < 600 && <br />}
          <a
            href='https://thatapicompany.com/'
            target='_blank'
            style={{ color: 'var(--color-7)' }}
          >
            That&nbsp;API&nbsp;Company&nbsp;
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-7)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
          </a>{' '}
          <br />
          Used API:{' '}
          <a
            href='https://www.thecatapi.com/'
            target='_blank'
            style={{ color: 'var(--color-7)' }}
          >
            The&nbsp;Cat&nbsp;API&nbsp;
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-7)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
          </a>{' '}
        </p>
      ) : (
        <p>
          Este trabajo fue posible gracias al equipo de{' '}
          <a
            href='https://thatapicompany.com/'
            target='_blank'
            style={{ color: 'var(--color-7)' }}
          >
            That&nbsp;API&nbsp;Company&nbsp;
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-7)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
          </a>{' '}
          <br />
          API utilizada:{' '}
          <a
            href='https://www.thecatapi.com/'
            target='_blank'
            style={{ color: 'var(--color-7)' }}
          >
            The&nbsp;Cat&nbsp;API&nbsp;
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-7)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
          </a>{' '}
        </p>
      )}
    </>
  );
};

const GradientBorderTopText = () => {
  const { lenguage } = useGlobalContext();
  const { isMobile } = useIsMobile();
  //// COMPONENT
  return (
    <>
      {lenguage === 'en' ? (
        <p>
          While CSS has undergone impressive evolution, creating gradient
          borders remains somewhat complex. Inspired by this same portfolio, I
          built a tool to streamline this task.
          {/* <a
            href='https://gradientborder.vercel.app/'
            target='_blank'
            style={{ color: 'var(--color-7)' }}
          >
            Gradient Border CSS & Tailwind{' '}
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-7)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
          </a> */}
        </p>
      ) : (
        <p>
          Si bien CSS ha experimentado una evolución impresionante, la creación
          de bordes con gradientes sigue siendo un tanto compleja. Inspirado por
          este mismo portafolio, construí una herramienta para agilizar esta
          tarea.
          {/* <a
            href='https://gradientborder.vercel.app/'
            target='_blank'
            style={{ color: 'var(--color-7)' }}
          >
            Gradient Border CSS & Tailwind{' '}
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-7)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
          </a> */}
        </p>
      )}
    </>
  );
};

const GradientBorderBottomText = () => {
  const { lenguage } = useGlobalContext();
  const { isMobile, viewportWidth } = useIsMobile();

  //// COMPONENT
  return (
    <>
      {lenguage === 'en' ? (
        <p>
          Take a look: {viewportWidth < 500 && <br />}
          <a
            href='https://gradientborder.vercel.app/'
            target='_blank'
            style={{ color: 'var(--color-2)' }}
          >
            Gradient&nbsp;Border&nbsp;CSS&nbsp;&&nbsp;Tailwind&nbsp;{' '}
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-2)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
          </a>
        </p>
      ) : (
        <p>
          Dale un vistazo:{' '}
          <a
            href='https://gradientborder.vercel.app/'
            target='_blank'
            style={{ color: 'var(--color-2)' }}
          >
            Gradient&nbsp;Border&nbsp;CSS&nbsp;&&nbsp;Tailwind&nbsp;{' '}
            <ExportOutlined
              style={{
                filter: 'var(--filter-color-2)',
                fontSize: isMobile ? '14px' : '15px',
              }}
            />
          </a>
        </p>
      )}
    </>
  );
};

const texts = {
  brands: {
    topText: <BrandsTopText />,
  },
  youtube: {
    topText: <YoutubeTopText />,
  },
  prototypes: {
    bottomText: <PrototypesBottomText />,
  },
  store: {
    topText: <StoreTopText />,
  },
  'start-coding': {
    topText: <StartCodingTopText />,
    bottomText: <StartCodingBottomText />,
  },
  'front-end': {
    topText: <FrontendTopText />,
  },
  'back-end': {
    topText: <BackendTopText />,
    bottomText: <BackendBottomText />,
  },
  'gradient-border': {
    topText: <GradientBorderTopText />,
    bottomText: <GradientBorderBottomText />,
  },
};

export default BrandsTopText;
export { texts };
