import styles from './ContactForm.module.scss';
import { Button, ConfigProvider, theme, Form, Input, message } from 'antd';
import useIsMobile from '@/hooks/useIsMobile';
import { useEffect, useState, useRef } from 'react';
import IconLinks from '../IconLinks/IconLinks';
import { motion, useAnimation } from 'framer-motion';
import { useGlobalContext } from '@/context/global.context';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

const ContactForm = ({ icons = false, colorOne, colorTwo, colorThree, overlaid = false }) => {
  const { lenguage } = useGlobalContext();
  const { viewportWidth, viewportHeight } = useIsMobile();
  const [form] = Form.useForm();
  const [messageRows, setMessageRows] = useState(5);
  const recaptchaControls = useAnimation();
  const recaptchaRef = useRef();
  const emailjsFormRef = useRef();
  const [loading, setLoading] = useState(false);

  //VALORES PARA EMAILJS
  const [userName, setUserName] = useState('');
  const [userCompany, setUserCompany] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const childrenAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  //// ANT MESSAGES
  const [messageApi, contextHolder] = message.useMessage();
  function successAntMessage() {
    messageApi.open({
      type: 'success',
      content: lenguage === 'en' ? 'Message sended!' : '¡Mensaje enviado!',
    });
  }

  function errorAntMessage() {
    messageApi.open({
      type: 'error',
      content: lenguage === 'en' ? 'Message not sended!' : '¡Mensaje no enviado!',
    });
  }

  const onFinish = (values) => {
    recaptchaControls.start('visible');
  };

  const onFinishFailed = () => {
    errorAntMessage();
  };

  const sendEmail = () => {
    setLoading(true);
    emailjs
      .sendForm('service_ypcahma', 'template_du3ymvo', emailjsFormRef.current, '-CnEHK3O5IogwMNGA')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    recaptchaControls.start('hidden');
    recaptchaRef.current.reset();
    form.resetFields();
    setLoading(false);
    successAntMessage();
  };

  useEffect(() => {
    const handleMessageRows = () => {
      const message = document.querySelector(`.${styles.contact_form__header__message}`);
      if (message) {
        const messageHeight = message.clientHeight;
        const newRows = Math.floor(
          (messageHeight - (window.innerWidth < 900 ? 14 : 16) - 15) /
            (window.innerWidth < 900 ? 25.14 : 28.28)
        );
        setMessageRows(newRows);
      }
    };
    setTimeout(() => {
      handleMessageRows();
    }, 350);
  }, [viewportWidth, viewportHeight]);

  //// COMPONENT
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm
      }}>
      {contextHolder}
      <motion.div
        className={styles.wrapper}
        initial={{ width: '30px', height: '30px', opacity: 0 }}
        animate={{ width: '100%', height: '100%', opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: 'spring',
          mass: 0.2
        }}>
        <form ref={emailjsFormRef} className={styles.wrapper__emailjs_form}>
          <input name='user_name' value={userName} />
          <input name='user_company' value={userCompany} />
          <input name='user_email' value={userEmail} />
          <textarea name='user_message' value={userMessage} />
        </form>
        <motion.div
          transition={{
            staggerChildren: 0.1,
            delayChildren: 0.2
          }}
          initial='hidden'
          animate='show'
          className={styles.wrapper__subcontainer}>
          <Form
            form={form}
            name='contactForm'
            className={styles.contact_form}
            style={{
              borderColor: `var(${colorOne})`,
              background: overlaid
                ? 'linear-gradient(to top, var(--color-dark-background) 0, var(--color-dark-background) 30%, transparent 50%)'
                : null
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'>
            <motion.header className={styles.contact_form__header}>
              <motion.div
                className={styles.contact_form__header__name_and_company}
                variants={childrenAnimation}>
                <Form.Item
                  name='user_name'
                  style={{ width: '100%' }}
                  rules={[
                    {
                      required: true,
                      message:
                        lenguage === 'en'
                          ? 'Please input your name.'
                          : 'Por favor, ingresa tu nombre.'
                    }
                  ]}>
                  <Input
                    placeholder={lenguage === 'en' ? 'Name' : 'Nombre'}
                    size='large'
                    bordered={false}
                    onChange={(e) => setUserName(e.target.value)}
                    onFocus={() => {
                      recaptchaControls.start('hidden');
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name='user_company'
                  style={{ width: '100%' }}
                  rules={[
                    {
                      required: true,
                      message:
                        lenguage === 'en'
                          ? 'Please input your company.'
                          : 'Por favor, ingresa tu empresa.'
                    }
                  ]}>
                  <Input
                    placeholder={lenguage === 'en' ? 'Company' : 'Empresa'}
                    size='large'
                    bordered={false}
                    onChange={(e) => setUserCompany(e.target.value)}
                    onFocus={() => {
                      recaptchaControls.start('hidden');
                    }}
                  />
                </Form.Item>
              </motion.div>
              <motion.div className={styles.contact_form__email} variants={childrenAnimation}>
                <Form.Item
                  name='user_email'
                  rules={[
                    {
                      required: true,
                      message:
                        lenguage === 'en'
                          ? 'Please input your E-mail.'
                          : 'Por favor, ingresa tu E-mail.'
                    },
                    {
                      type: 'email',
                      message:
                        lenguage === 'en'
                          ? 'Please input a valid E-mail.'
                          : 'Por favor, ingresa un E-mail válido.'
                    }
                  ]}>
                  <Input
                    placeholder='E-mail'
                    size='large'
                    bordered={false}
                    onChange={(e) => setUserEmail(e.target.value)}
                    onFocus={() => {
                      recaptchaControls.start('hidden');
                    }}
                  />
                </Form.Item>
              </motion.div>
              <motion.div
                className={styles.contact_form__header__message}
                variants={childrenAnimation}>
                <div className={styles.contact_form__header__message__wrapper}>
                  <Form.Item
                    name='user_message'
                    rules={[
                      {
                        required: true,
                        message:
                          lenguage === 'en'
                            ? 'Please write your message.'
                            : 'Por favor, escribe tu mensaje.'
                      }
                    ]}>
                    <Input.TextArea
                      placeholder={lenguage === 'en' ? 'Message' : 'Mensaje'}
                      size='large'
                      bordered={false}
                      rows={messageRows}
                      style={{
                        resize: 'none'
                      }}
                      onChange={(e) => setUserMessage(e.target.value)}
                      onFocus={() => {
                        recaptchaControls.start('hidden');
                      }}
                    />
                  </Form.Item>
                </div>
              </motion.div>
            </motion.header>
            <motion.footer
              className={styles.contact_form__footer}
              variants={childrenAnimation}
              style={{ '--align-items': !icons ? 'center' : 'flex-end' }}>
              <div className={styles.contact_form__footer__left}>
                {icons && <IconLinks />}
                <a
                  href='mailto:facundochavez.dev@gmail.com'
                  className={styles.contact_form__footer__left__link}
                  style={{ color: `var(${colorThree})` }}>
                  {lenguage === 'en' ? 'Or send an E-mail' : 'O envía un E-mail'}
                </a>
              </div>
              <Button
                type='text'
                htmlType='submit'
                size='large'
                className={styles.contact_form__footer__button}
                loading={loading}>
                {lenguage === 'en' ? 'Send' : 'Enviar'}
              </Button>
              <motion.div
                className={styles.contact_form__footer__recaptcha}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: {
                    opacity: 1,
                    scale: viewportWidth < 370 ? 0.85 : viewportWidth < 900 ? 0.94 : 1
                  }
                }}
                initial='hidden'
                animate={recaptchaControls}
                exit={recaptchaControls}>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                  theme='dark'
                  onChange={sendEmail}
                />
              </motion.div>
            </motion.footer>
          </Form>
        </motion.div>
        <div
          className={styles.wrapper__gradient_border}
          style={{ borderColor: `var(${colorTwo})` }}
        />
      </motion.div>
    </ConfigProvider>
  );
};

export default ContactForm;
