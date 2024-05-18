import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

export const EmailTemplate = (formData) => (
  <Html>
    <Head />
    <Preview>New Message From Your Website</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={heading}>WEBSITE MESSAGE DETAILS</Text>
          {/* <Text style={paragraph}>
            <b> Sender's Email: {formData.email}</b>
          </Text> */}
          <Text style={paragraph}>
            <b>{`Sender's Full Name: ${formData.full_name}`}</b>
          </Text>
          <Text style={paragraph}>
            <b>{`Sender's Phone Number: ${formData.phone_number}`}</b>
          </Text>
          <Text style={paragraph}>
            <b> Service Required: {formData.phone_number}</b>
          </Text>
          <Text style={heading}>MESSAGE</Text>
          {formData.message !== '' ? (
            <Text style={paragraph}>{formData.message}</Text>
          ) : (
            <Text style={paragraph}>No Message...</Text>
          )}
        </Section>

        <Section style={paragraphContent}>
          <Text style={paragraph}>Brought To You By,</Text>
          <Text style={{ ...paragraph, fontSize: '20px' }}>
            The AE Websites Team
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: '#dbddde',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const sectionLogo = {
  padding: '0 40px',
};

const headerBlue = {
  marginTop: '-1px',
};

const container = {
  margin: '30px auto',
  backgroundColor: '#fff',
  borderRadius: 5,
  overflow: 'hidden',
};

const containerContact = {
  backgroundColor: '#f0fcff',
  width: '90%',
  borderRadius: '5px',
  overflow: 'hidden',
  paddingLeft: '20px',
};

const heading = {
  fontSize: '14px',
  lineHeight: '26px',
  fontWeight: '700',
  color: '#004dcf',
};

const paragraphContent = {
  padding: '0 40px',
};

const paragraphList = {
  paddingLeft: 40,
};

const paragraph = {
  fontSize: '14px',
  lineHeight: '22px',
  color: '#3c4043',
};

const link = {
  ...paragraph,
  color: '#004dcf',
};

const hr = {
  borderColor: '#e8eaed',
  margin: '20px 0',
};

const footer = {
  maxWidth: '100%',
};
