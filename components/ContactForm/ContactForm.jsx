import styles from './ContactForm.module.scss';
import { Button, ConfigProvider, theme, Form, Input } from 'antd';
import useIsMobile from '@/hooks/useIsMobile';
import { useEffect, useState } from 'react';
import IconLinks from '../IconLinks/IconLinks';
import { motion } from 'framer-motion';

const ContactForm = ({ icons = false, colorOne, colorTwo, colorThree, overlaid = false }) => {
  const { viewportWidth, viewportHeight } = useIsMobile();
  const [form] = Form.useForm();
  const [messageRows, setMessageRows] = useState(5);

  const childrenAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  useEffect(() => {
    const handleMessageRows = () => {
      const message = document.querySelector(`.${styles.contact_form__header__message}`);
      if (message) {
        const messageHeight = message.clientHeight;
        const newRows = Math.floor(
          (messageHeight - (window.innerWidth < 900 ? 14 : 16) - 20) /
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
      <motion.div
        className={styles.wrapper}
        initial={{ width: '30px', height: '30px', opacity: 0 }}
        animate={{ width: '100%', height: '100%', opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: 'spring',
          mass: 0.2
        }}>
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
            /*   onFinish={onFinish} */
            /* onFinishFailed={onFinishFailed} */
            autoComplete='off'>
            <motion.header className={styles.contact_form__header}>
              <motion.div
                className={styles.contact_form__header__name_and_company}
                variants={childrenAnimation}>
                <Form.Item
                  name='name'
                  style={{ width: '100%' }}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your name.'
                    },
                    {
                      type: 'text',
                      message: 'Please input a valid name.'
                    }
                  ]}>
                  <Input placeholder='Name' size='large' bordered={false} />
                </Form.Item>
                <Form.Item
                  name='company'
                  style={{ width: '100%' }}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your company.'
                    },
                    {
                      type: 'text',
                      message: 'Please input a valid company.'
                    }
                  ]}>
                  <Input placeholder='Company' size='large' bordered={false} />
                </Form.Item>
              </motion.div>
              <motion.div className={styles.contact_form__email} variants={childrenAnimation}>
                <Form.Item
                  name='email'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your E-mail.'
                    },
                    {
                      type: 'email',
                      message: 'Please input a valid E-mail.'
                    }
                  ]}>
                  <Input placeholder='E-mail' size='large' bordered={false} />
                </Form.Item>
              </motion.div>
              <motion.div
                className={styles.contact_form__header__message}
                variants={childrenAnimation}>
                <div className={styles.contact_form__header__message__wrapper}>
                  <Form.Item
                    name='message'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your message.'
                      }
                    ]}>
                    <Input.TextArea
                      placeholder='Message'
                      size='large'
                      bordered={false}
                      rows={messageRows}
                      style={{
                        resize: 'none'
                      }}
                    />
                  </Form.Item>
                </div>
              </motion.div>
            </motion.header>
            <motion.footer className={styles.contact_form__footer} variants={childrenAnimation} style={{ '--align-items': !icons ? 'center' : 'flex-end' }} >
              <div className={styles.contact_form__footer__left}>
                {icons && <IconLinks />}
                <a
                  href='#'
                  className={styles.contact_form__footer__left__link}
                  style={{ color: `var(${colorThree})` }}>
                  Or send an E-mail
                </a>
              </div>
              <Button
                type='text'
                htmlType='submit'
                size='large'
                className={styles.contact_form__footer__button} /* loading={loading} */
              >
                Send
              </Button>
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
