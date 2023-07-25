import Head from 'next/head';
import Image from 'next/image';
import styles from './TheAtrium.module.scss';
import { useEffect, useRef, useState } from 'react';

const TheAtriumSectionsOneAndTwo = ({ fatherWidth, scale }) => {
  const firstLimit = 400 * scale;
  const secondLimit = 600 * scale;
  const thirdLimit = 800 * scale;
  const fourthLimit = 840 * scale;
  const fifthLimit = 1070 * scale;

  return (
    <div
      className={styles.father_container}
      style={{ transform: `scale(${scale})`, width: `${fatherWidth}px` }}>
      <header className={styles.header}>
        <nav className={styles.header_container}>
          <div className={styles.header_container__left}>
            <a href='#'>
              <img src='the-atrium/images/LogoTheAtrium.svg' className={styles.header_logo} />
            </a>

            <ul
              className={styles.main_nav}
              style={
                fatherWidth < fourthLimit
                  ? {
                      display: 'none'
                    }
                  : { display: 'flex' }
              }>
              <a
                href='#'
                className={`${styles.secondary_button} ${styles.main_nav__secondary_button} ${styles.log_in}`}
                style={fatherWidth < fourthLimit ? { overflow: 'hidden' } : null}>
                Log In
              </a>

              <li
                className={`${styles.main_nav__item} ${styles.main_nav__item_show}`}
                style={fatherWidth < fourthLimit ? { backgroundColor: 'var(--background)' } : null}>
                <a
                  href='#'
                  className={styles.main_nav__item_anchor}
                  style={
                    fatherWidth < fourthLimit
                      ? {
                          paddingTop: '25px',
                          paddingLeft: '30px',
                          display: 'flex',
                          height: 'auto',
                          borderRadius: '0'
                        }
                      : null
                  }>
                  Learn
                  <img
                    src='the-atrium/icons/arrow-down.svg'
                    className={styles.main_nav__item_arrow}
                    style={
                      fatherWidth < fourthLimit ? { marginLeft: 'auto', marginRight: '30px' } : null
                    }
                  />
                </a>

                <ul
                  className={styles.sub_nav}
                  style={
                    fatherWidth < fourthLimit
                      ? {
                          backgroundColor: '#f1f1f1',
                          position: 'unset',
                          display: 'grid',
                          width: '100%',
                          transform: 'translateY(0)',
                          border: 'none',
                          borderRadius: '0',
                          height: '0',
                          transition: 'height 0.2s'
                        }
                      : null
                  }>
                  <li className={styles.sub_nav__item}>
                    <a
                      href='#'
                      className={styles.sub_nav__item_anchor}
                      style={
                        fatherWidth < fourthLimit
                          ? { paddingLeft: '30px', borderRadius: '0' }
                          : null
                      }>
                      About Us
                    </a>
                  </li>
                  <li className={styles.sub_nav__item}>
                    <a href='#' className={styles.sub_nav__item_anchor}>
                      About our projects
                    </a>
                  </li>
                  <li className={styles.sub_nav__item}>
                    <a href='#' className={styles.sub_nav__item_anchor}>
                      Contact us
                    </a>
                  </li>
                </ul>
              </li>

              <li className={`${styles.main_nav__item} ${styles.main_nav__item_show}`}>
                <a href='#' className={styles.main_nav__item_anchor}>
                  Projects
                  <img
                    src='the-atrium/icons/arrow-down.svg'
                    className={styles.main_nav__item_arrow}
                  />
                </a>

                <ul className={styles.sub_nav}>
                  <li className={styles.sub_nav__item}>
                    <a href='#' className={styles.sub_nav__item_anchor}>
                      See projects
                    </a>
                  </li>
                  <li className={styles.sub_nav__item}>
                    <a href='#' className={styles.sub_nav__item_anchor}>
                      Start a project
                    </a>
                  </li>
                </ul>
              </li>

              <li className={styles.main_nav__item}>
                <a href='#' className={styles.main_nav__item_anchor}>
                  Forum
                </a>
              </li>

              <li className={`${styles.main_nav__item} ${styles.main_nav__item_show}`}>
                <a href='#' className={styles.main_nav__item_anchor}>
                  What's new
                  <img
                    src='the-atrium/icons/arrow-down.svg'
                    className={styles.main_nav__item_arrow}
                  />
                </a>

                <ul className={styles.sub_nav}>
                  <li className={styles.sub_nav__item}>
                    <a href='#' className={styles.sub_nav__item_anchor}>
                      Our posts
                    </a>
                  </li>
                  <li className={styles.sub_nav__item}>
                    <a href='#' className={styles.sub_nav__item_anchor}>
                      Newletters
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={styles.header_container__right}>
            <a href='#' className={`${styles.main_button} ${styles.join_us}`}>
              Join Us
            </a>
            <a
              href='#'
              className={`${styles.secondary_button} ${styles.log_in}`}
              style={fatherWidth >= 840 ? { display: 'none' } : null}>
              Log In
            </a>
            <div
              className={styles.hamburguer}
              style={fatherWidth < fourthLimit ? { display: 'flex' } : { display: 'none' }}>
              <img src='the-atrium/icons/menu.svg' />
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div
          className={styles.section1}
          style={
            fatherWidth >= fifthLimit
              ? { width: '1000px', padding: '20px 0', flexDirection: 'row-reverse' }
              : fatherWidth >= secondLimit
              ? { padding: '20px 0', flexDirection: 'row-reverse' }
              : null
          }>
          <div
            className={styles.section1__image}
            style={
              fatherWidth >= secondLimit
                ? { paddingLeft: '5%', paddingRight: '0', width: '55%' }
                : null
            }>
            <img
              src='the-atrium/images/Collaboration.svg'
              style={
                fatherWidth >= secondLimit
                  ? { width: 'auto' }
                  : fatherWidth >= firstLimit
                  ? { width: '350px' }
                  : null
              }
            />
          </div>
          <div
            className={styles.section1__description}
            style={fatherWidth >= secondLimit ? { width: '40%' } : null}>
            <h2>Where collaboration happens</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem praesentium magnam
              tempora officiis esse dignissimos deserunt doloribus voluptatum maiores iste aut,
              quas, distinctio dolore animi rerum eaque quod quia quo?
            </p>
            <div>
              <a
                href='#'
                className={`${styles.main_button} ${styles.join_us}`}
                style={fatherWidth >= secondLimit ? { width: 'auto' } : null}>
                Join Us
              </a>
              <div></div>
              <a
                href='#'
                className={`${styles.secondary_button} ${styles.log_in}`}
                style={fatherWidth >= secondLimit ? { width: 'auto' } : null}>
                Log In
              </a>
            </div>
          </div>
        </div>

        <h3 className={styles.title}>Why should I join The Atrium?</h3>

        <div
          className={styles.section2}
          style={
            fatherWidth >= fifthLimit
              ? { width: '1000px', flexDirection: 'row-reverse', paddingBottom: '30px' }
              : fatherWidth >= thirdLimit
              ? { flexDirection: 'row-reverse', paddingBottom: '75px' }
              : fatherWidth >= secondLimit
              ? { flexDirection: 'row-reverse', paddingBottom: '120px' }
              : null
          }>
          <div
            className={styles.section2__image}
            style={fatherWidth >= secondLimit ? { width: '50%' } : null}>
            <img
              src='the-atrium/images/Chating.svg'
              style={
                fatherWidth >= secondLimit
                  ? { width: 'auto' }
                  : fatherWidth >= firstLimit
                  ? { width: '350px' }
                  : null
              }
            />
          </div>
          <div
            className={styles.section2__description}
            style={fatherWidth >= secondLimit ? { width: '50%', paddingRight: '4%' } : null}>
            <h4>ACCELERATE</h4>
            <h3>Have you ever wondered how your entity could apply blockchain?</h3>
            <p
              style={
                fatherWidth >= secondLimit
                  ? {
                      fontSize: '10px',
                      paddingLeft: '15px',
                      paddingRight: '15px',
                      paddingTop: '15px',
                      paddingBottom: '30px',
                      marginTop: '15px',
                      border: '1px solid black',
                      borderRadius: '3px'
                    }
                  : null
              }>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem praesentium magnam
              tempora officiis esse dignissimos deserunt doloribus voluptatum maiores iste aut,
              quas, distinctio dolore animi rerum eaque quod quia quo? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quidem praesentium magnam tempora officiis esse
              dignissimos deserunt doloribus voluptatum maiores iste aut, quas, distinctio dolore
              animi rerum eaque quod quia quo?
            </p>
            <a
              href='#'
              className={styles.main_button}
              style={
                fatherWidth >= secondLimit
                  ? { position: 'relative', left: '15px', bottom: '8px' }
                  : null
              }>
              See Projects
            </a>
          </div>
        </div>

        <div className={styles.background__light_green}>
          <div
            className={styles.section3}
            style={fatherWidth >= fifthLimit ? { width: '1000px' } : null}>
            <div
              className={styles.section3__image}
              style={fatherWidth >= secondLimit ? { width: '50%' } : null}>
              <img
                src='the-atrium/images/Nature.svg'
                style={
                  fatherWidth >= secondLimit
                    ? { width: 'auto' }
                    : fatherWidth >= firstLimit
                    ? { width: '350px' }
                    : null
                }
              />
            </div>
            <div
              className={styles.section3__description}
              style={fatherWidth >= secondLimit ? { width: '50%', paddingLeft: '4%' } : null}>
              <h4>COMMUNITY</h4>
              <h3>The Atrium is built with collaboration and community in-mind.</h3>
              <p
                style={
                  fatherWidth >= secondLimit
                    ? {
                        backgroundColor: 'white',
                        fontSize: '10px',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        paddingTop: '15px',
                        paddingBottom: '30px',
                        marginTop: '15px',
                        border: '1px solid black',
                        borderRadius: '3px'
                      }
                    : null
                }>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem praesentium magnam
                tempora officiis esse dignissimos deserunt doloribus voluptatum maiores iste aut,
                quas, distinctio dolore animi rerum eaque quod quia quo? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Quidem praesentium magnam tempora officiis esse
                dignissimos?
              </p>
              <a
                href='#'
                className={styles.main_button}
                style={
                  fatherWidth >= secondLimit
                    ? { position: 'relative', left: '15px', bottom: '8px' }
                    : null
                }>
                See Forum
              </a>
            </div>
          </div>
        </div>

        <div
          className={styles.section2}
          style={
            fatherWidth >= fifthLimit
              ? { width: '1000px', flexDirection: 'row-reverse', paddingBottom: '80px' }
              : fatherWidth >= thirdLimit
              ? { flexDirection: 'row-reverse', paddingBottom: '100px' }
              : fatherWidth >= secondLimit
              ? { flexDirection: 'row-reverse', paddingBottom: '120px' }
              : null
          }>
          <div
            className={styles.section2__image}
            style={fatherWidth >= secondLimit ? { width: '50%' } : null}>
            <img
              src='the-atrium/images/Ideas.svg'
              style={
                fatherWidth >= secondLimit
                  ? { width: 'auto' }
                  : fatherWidth >= firstLimit
                  ? { width: '350px' }
                  : null
              }
            />
          </div>
          <div
            className={styles.section2__description}
            style={fatherWidth >= secondLimit ? { width: '50%', paddingRight: '4%' } : null}>
            <h4>BUILD ON BLOCKCHAIN</h4>
            <h3>The Atrium is a platform, enabled blockchain</h3>
            <p
              style={
                fatherWidth >= secondLimit
                  ? {
                      fontSize: '10px',
                      paddingLeft: '15px',
                      paddingRight: '15px',
                      paddingTop: '15px',
                      paddingBottom: '30px',
                      marginTop: '15px',
                      border: '1px solid black',
                      borderRadius: '3px'
                    }
                  : null
              }>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem praesentium magnam
              tempora officiis esse dignissimos deserunt doloribus voluptatum maiores iste aut,
              quas, distinctio dolore animi rerum eaque quod quia quo? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quidem praesentium magnam tempora officiis esse
              dignissimos deserunt doloribus?
            </p>
            <a
              href='#'
              className={styles.main_button}
              style={
                fatherWidth >= secondLimit
                  ? { position: 'relative', left: '15px', bottom: '8px' }
                  : null
              }>
              Start learning
            </a>
          </div>
        </div>

        <div className={styles.background__light_green}>
          <div
            className={styles.section5}
            style={fatherWidth >= fifthLimit ? { width: '1000px' } : null}>
            <div
              className={styles.section5__title}
              style={
                fatherWidth >= secondLimit ? { width: '50%', maxWidth: 'firstLimitpx' } : null
              }>
              <img
                src='the-atrium/images/Book.svg'
                style={
                  fatherWidth >= thirdLimit
                    ? {
                        float: 'right',
                        width: '450px',
                        position: 'relative',
                        right: '0',
                        transform: 'translateY(-120px)'
                      }
                    : fatherWidth >= secondLimit
                    ? {
                        float: 'right',
                        width: '370px',
                        position: 'relative',
                        right: '0',
                        transform: 'translateY(-100px)'
                      }
                    : null
                }
              />
              <div>
                <h4>BLOCKCHAIN ESSENTIALS</h4>
                <h2>We have created an easy-to-use, practical guide</h2>
              </div>
            </div>
            <div
              className={styles.section5__description}
              style={
                fatherWidth >= secondLimit
                  ? { width: '50%', paddingLeft: '4%', display: 'flex', flexDirection: 'column' }
                  : null
              }>
              <p
                style={
                  fatherWidth >= secondLimit
                    ? {
                        backgroundColor: 'white',
                        fontSize: '10px',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        paddingTop: '30px',
                        paddingBottom: '80px',
                        marginTop: '50px',
                        border: '1px solid black',
                        borderRadius: '3px'
                      }
                    : null
                }>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem praesentium magnam
                tempora officiis esse dignissimos deserunt doloribus voluptatum maiores iste aut,
                quas, distinctio dolore animi rerum eaque quod quia quo? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Quidem praesentium magnam tempora officiis esse
                dignissimos?
              </p>
              <a
                href='#'
                className={styles.main_button}
                style={
                  fatherWidth >= secondLimit
                    ? {
                        width: '90%',
                        marginLeft: '0',
                        position: 'relative',
                        left: '15px',
                        bottom: '70px'
                      }
                    : null
                }>
                View document (PDF, 456 KB)
              </a>
            </div>
          </div>
        </div>

        <div className={styles.map_background}>
          <div
            className={styles.section6}
            style={
              fatherWidth >= fifthLimit
                ? {
                    width: '1000px',
                    display: 'flex',
                    paddingTop: '20px',
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    width: '1000px'
                  }
                : fatherWidth >= secondLimit
                ? {
                    display: 'flex',
                    paddingTop: '20px',
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    width: '100vw'
                  }
                : null
            }>
            <div
              className={styles.section6__image}
              style={
                fatherWidth >= thirdLimit
                  ? { width: '50%', marginTop: 'auto' }
                  : fatherWidth >= secondLimit
                  ? { marginTop: 'auto', width: '60%' }
                  : null
              }>
              <img
                src='the-atrium/images/Logos.svg'
                style={
                  fatherWidth >= secondLimit
                    ? { width: 'auto', transform: 'none', transform: 'translateY(2px)' }
                    : null
                }
              />
            </div>
            <div
              className={styles.section6__description}
              style={
                fatherWidth >= thirdLimit
                  ? { width: '50%', paddingRight: '5%' }
                  : fatherWidth >= secondLimit
                  ? { paddingRight: 0, width: '40%' }
                  : null
              }>
              <h3>Build it together</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem praesentium magnam
                tempora officiis esse dignissimos deserunt doloribus voluptatum maiores iste aut,
                quas, distinctio dolore animi rerum eaque quod quia quo? Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>

        <div
          className={styles.section7}
          style={
            fatherWidth >= secondLimit
              ? { overflow: 'hidden', width: '100vw', flexDirection: 'row', alignItems: 'center' }
              : null
          }>
          <div
            className={styles.section7__one}
            style={
              fatherWidth >= fifthLimit
                ? {
                    backgroundSize: 'contain',
                    backgroundPosition: 'left',
                    marginRight: '15px',
                    height: '500px',
                    backgroundImage: 'url("the-atrium/images/Desktop-one.svg")',
                    width: 'auto',
                    flexGrow: '1',
                    padding: '0'
                  }
                : fatherWidth >= secondLimit
                ? {
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    marginRight: '15px',
                    height: '500px',
                    backgroundImage: 'url("the-atrium/images/Desktop-one.svg")',
                    width: 'auto',
                    flexGrow: '1',
                    padding: '0'
                  }
                : null
            }
          />
          <div
            className={styles.section7__two}
            style={
              fatherWidth >= secondLimit
                ? {
                    width: '500px',
                    padding: '30px 0'
                  }
                : null
            }>
            <h3>Join The Atrium Now</h3>
            <form>
              <input
                type='email'
                id='e-mail__join'
                placeholder='Provide your e-mail'
                autocomplete='email'
              />
              <button type='submit' id='section7__two_submit_button'>
                submit
              </button>
            </form>
            <div className={styles.section7__two_separator}>
              <div></div>
              <p>OR</p>
              <div></div>
            </div>
            <a href='#' className={styles.section7__two_button}>
              Contact us
            </a>
            <p className={styles.section7__two_text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem praesentium magnam
              tempora officiis esse dignissimos deserunt doloribus voluptatum maiores iste aut.
            </p>
          </div>
          <div
            className={styles.section7__three}
            style={
              fatherWidth >= fifthLimit
                ? {
                    backgroundSize: 'contain',
                    backgroundPosition: 'right',
                    marginLeft: '15px',
                    height: '500px',
                    backgroundImage: 'url("the-atrium/images/Desktop-two.svg")',
                    width: 'auto',
                    flexGrow: '1',
                    padding: '0'
                  }
                : fatherWidth >= secondLimit
                ? {
                    backgroundSize: 'cover',
                    backgroundPosition: 'left',
                    marginLeft: '15px',
                    height: '500px',
                    backgroundImage: 'url("the-atrium/images/Desktop-two.svg")',
                    width: 'auto',
                    flexGrow: '1',
                    padding: '0'
                  }
                : null
            }></div>
        </div>

        <div
          className={styles.section8}
          style={
            fatherWidth >= secondLimit
              ? {
                  maxWidth: 'secondLimitpx',
                  margin: 'auto',
                  padding: '40px 0'
                }
              : null
          }>
          <h3>Want more information?</h3>
          <h5>Here are some of our Frequently Asked Questions</h5>

          <div className={styles.box}>
            <div className={styles.box__title}>
              <img src='the-atrium/icons/arrow-up.svg' className={styles.box__title_arrow} />
              <p className={styles.box__title_text}>
                What kind of projects can I share on The Atrium?
              </p>
            </div>
            <div className={styles.box__description}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aut praesentium
                commodi laudantium, saepe cumque? Tenetur aliquam est inventore facilis, sed
                asperiores, quasi quidem quibusdam ducimus distinctio reprehenderit praesentium
                maiores!
              </p>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.box__title}>
              <img src='the-atrium/icons/arrow-up.svg' className={styles.box__title_arrow} />
              <p className={styles.box__title_text}>
                I am working in a project that is not public-facing. How secure is The Atrium to
                host my project?
              </p>
            </div>
            <div className={styles.box__description}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aut praesentium
                commodi laudantium, saepe cumque? Tenetur aliquam est inventore facilis, sed
                asperiores, quasi quidem quibusdam ducimus distinctio reprehenderit praesentium
                maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aut
                praesentium commodi laudantium, saepe cumque? Tenetur aliquam est inventore facilis,
                sed asperiores, quasi quidem quibusdam ducimus distinctio reprehenderit praesentium
                maiores!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const TheAtriumSectionsTwoAndThree = ({ fatherWidth, scale }) => {};

const TheAtriumSectionsFourAndFive = ({ fatherWidth, scale }) => {};

const TheAtriumSectionsSixAndSeven = ({ fatherWidth, scale }) => {};

export {
  TheAtriumSectionsOneAndTwo,
  TheAtriumSectionsTwoAndThree,
  TheAtriumSectionsFourAndFive,
  TheAtriumSectionsSixAndSeven
};
