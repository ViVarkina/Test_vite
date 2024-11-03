import { ReactNode } from 'react';
import { Flex, Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  height: '80px',
  padding: '24px',
  backgroundColor: '#6b83ab',
};

const contentStyle: React.CSSProperties = {
  backgroundColor: '#edf6ff',
  overflow: 'auto',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#b0ccfa',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#6b83ab',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  height: '100vh',
};

interface Props {
  outlet: ReactNode;
  header: ReactNode;
  sideBar: ReactNode;
}

export const BaseLeaut = ({ outlet, header, sideBar }: Props) => {
  return (
    <Flex>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>{header}</Header>
        <Layout>
          <Sider width="25%" style={siderStyle}>
            {sideBar}
          </Sider>
          <Content style={contentStyle}>{outlet}</Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Flex>
  );
};
