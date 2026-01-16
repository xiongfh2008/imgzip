import { Button, Divider, Dropdown, Flex, Space, Typography, Collapse, Row, Col, Card, Statistic } from "antd";
import style from "./index.module.scss";
import { observer } from "mobx-react-lite";
import { Logo } from "@/components/Logo";
import { MenuOutlined, ThunderboltOutlined, CheckCircleOutlined, SafetyCertificateOutlined, CloudDownloadOutlined } from "@ant-design/icons";
import { gstate } from "@/global";
import { changeLang, langList } from "@/locale";
import { homeState } from "@/states/home";
import { wait, getFilesFromClipboard, hasImageInClipboard } from "@/functions";
import { UploadCard } from "@/components/UploadCard";
import { useWorkerHandler } from "@/engines/transform";
import { createImageList } from "@/engines/transform";
import { Compare } from "@/components/Compare";
import { useResponse } from "@/media";
import { RightOption } from "./RightOption";
import { LeftContent } from "./LeftContent";
import { useEffect } from "react";

function getCurentLangStr(): string | undefined {
  const findLang = langList.find((item) => item?.key == gstate.lang);
  return (findLang as any)?.label;
}

const Header = observer(() => {
  const { isPC } = useResponse();

  return (
    <Flex align="center" justify="space-between" className={style.header}>
      <Logo title={gstate.locale?.logo} />
      <Space>
        <Dropdown
          menu={{
            items: langList,
            selectedKeys: [gstate.lang],
            async onClick({ key }) {
              await wait(300);
              changeLang(key);
            },
          }}
        >
          <Flex className={style.locale} align="center">
            <svg viewBox="0 0 1024 1024" style={{ color: "currentcolor" }}>
              <path d="M640 416h256c35.36 0 64 28.48 64 64v416c0 35.36-28.48 64-64 64H480c-35.36 0-64-28.48-64-64V640h128c53.312 0 96-42.976 96-96V416zM64 128c0-35.36 28.48-64 64-64h416c35.36 0 64 28.48 64 64v416c0 35.36-28.48 64-64 64H128c-35.36 0-64-28.48-64-64V128z m128 276.256h46.72v-24.768h67.392V497.76h49.504V379.488h68.768v20.64h50.88V243.36H355.616v-34.368c0-10.08 1.376-18.784 4.16-26.112a10.56 10.56 0 0 0 1.344-4.16c0-0.896-3.2-1.792-9.6-2.72h-46.816v67.36H192v160.896z m46.72-122.368h67.392v60.48h-67.36V281.92z m185.664 60.48h-68.768V281.92h68.768v60.48z m203.84 488l19.264-53.632h100.384l19.264 53.632h54.976L732.736 576h-64.64L576 830.4h52.256z m33.024-96.256l37.12-108.608h1.376l34.368 108.608h-72.864zM896 320h-64a128 128 0 0 0-128-128v-64a192 192 0 0 1 192 192zM128 704h64a128 128 0 0 0 128 128v64a192 192 0 0 1-192-192z" />
            </svg>
            <Typography.Text>{getCurentLangStr()}</Typography.Text>
          </Flex>
        </Dropdown>

        {/* If non-PC is determined, the menu button will be displayed */}
        {!isPC && homeState.list.size > 0 && (
          <>
            <Divider type="vertical" style={{ background: "#dfdfdf" }} />
            <Button
              icon={<MenuOutlined />}
              onClick={() => {
                homeState.showOption = !homeState.showOption;
              }}
            />
          </>
        )}
      </Space>
    </Flex>
  );
});

const FeaturesSection = () => {
  const t = gstate.locale?.home;

  const features = [
    {
      icon: <ThunderboltOutlined style={{ fontSize: '32px', color: '#722ED1' }} />,
      title: t?.feature1Title || 'Lightning Fast Compression',
      description: t?.feature1Desc || 'Compress images in seconds with our advanced algorithms that maintain quality while reducing file size.'
    },
    {
      icon: <SafetyCertificateOutlined style={{ fontSize: '32px', color: '#722ED1' }} />,
      title: t?.feature2Title || 'Privacy First',
      description: t?.feature2Desc || 'All image processing happens locally in your browser. No uploads to external servers - your images stay private.'
    },
    {
      icon: <CloudDownloadOutlined style={{ fontSize: '32px', color: '#722ED1' }} />,
      title: t?.feature3Title || 'Multiple Format Support',
      description: t?.feature3Desc || 'Supports JPG, PNG, WEBP, AVIF, SVG, GIF and more. Convert between formats as needed.'
    },
    {
      icon: <CheckCircleOutlined style={{ fontSize: '32px', color: '#722ED1' }} />,
      title: t?.feature4Title || 'Quality Control',
      description: t?.feature4Desc || 'Fine-tune compression settings to achieve the perfect balance between file size and image quality.'
    }
  ];

  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', marginBottom: '50px' }}>
        <Typography.Title level={2}>{t?.featuresTitle || 'Powerful Image Compression Made Simple'}</Typography.Title>
        <Typography.Paragraph style={{ fontSize: '18px', color: '#666' }}>
          {t?.featuresDesc || 'Reduce image file sizes without sacrificing quality. Perfect for websites, social media, and storage.'}
        </Typography.Paragraph>
      </div>
      
      <Row gutter={[24, 24]} justify="center">
        {features.map((feature, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card 
              hoverable 
              style={{ textAlign: 'center', borderRadius: 0, border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            >
              <div style={{ marginBottom: '16px' }}>{feature.icon}</div>
              <Typography.Title level={4}>{feature.title}</Typography.Title>
              <Typography.Paragraph type="secondary">{feature.description}</Typography.Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

const StatsSection = () => {
  const t = gstate.locale?.home;

  return (
    <section style={{ padding: '40px 20px', backgroundColor: '#f9f0ff', textAlign: 'center' }}>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={12} sm={6}>
          <Statistic 
            title={t?.statsTitle1 || "Average Size Reduction"} 
            value="60-80%" 
            prefix={<span style={{ color: '#722ED1', fontSize: '24px' }}>↓</span>} 
          />
        </Col>
        <Col xs={12} sm={6}>
          <Statistic 
            title={t?.statsTitle2 || "Supported Formats"} 
            value="6+" 
            prefix={<span style={{ color: '#722ED1', fontSize: '24px' }}>🖼️</span>} 
          />
        </Col>
        <Col xs={12} sm={6}>
          <Statistic 
            title={t?.statsTitle3 || "Privacy Guaranteed"} 
            value="100%" 
            prefix={<span style={{ color: '#722ED1', fontSize: '24px' }}>🔒</span>} 
          />
        </Col>
        <Col xs={12} sm={6}>
          <Statistic 
            title={t?.statsTitle4 || "No Registration"} 
            value="✓" 
            prefix={<span style={{ color: '#722ED1', fontSize: '24px' }}>🚀</span>} 
          />
        </Col>
      </Row>
    </section>
  );
};

const FAQSection = () => {
  const t = gstate.locale?.home;
  
  const faqs = [
    {
      key: '1',
      label: t?.faq1.label || 'How does Image Zip work?',
      children: t?.faq1.desc || 'Image Zip processes your images directly in your browser using advanced compression algorithms. No images are uploaded to any server, ensuring your privacy and security. The compression reduces file sizes while maintaining visual quality.'
    },
    {
      key: '2',
      label: t?.faq2.label || 'Is my privacy protected?',
      children: t?.faq2.desc || 'Yes, absolutely. All image processing happens locally in your browser. We never upload your images to any server, and no data is collected or stored. Your images remain completely private and secure.'
    },
    {
      key: '3',
      label: t?.faq3.label || 'What formats are supported?',
      children: t?.faq3.desc || 'We support JPG, PNG, WEBP, AVIF, SVG, and GIF formats. You can compress images in any of these formats and even convert between formats while compressing.'
    },
    {
      key: '4',
      label: t?.faq4.label || 'Will image quality be affected?',
      children: t?.faq4.desc || 'Our compression algorithms are designed to maintain visual quality while significantly reducing file sizes. You can adjust compression settings to find the perfect balance between file size and quality for your needs.'
    },
    {
      key: '5',
      label: t?.faq5.label || 'Is there a file size limit?',
      children: t?.faq5.desc || 'There are no strict limits - you can compress images of any size. However, processing very large images may take more time. The compression happens locally in your browser, so performance depends on your device capabilities.'
    }
  ];

  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>{t?.faqTitle || 'Frequently Asked Questions'}</Typography.Title>
        <Collapse accordion items={faqs} />
      </div>
    </section>
  );
};

const MainContent = observer(() => {
  const t = gstate.locale?.home;

  // Show introduction when no images are uploaded
  if (homeState.list.size === 0) {
    return (
      <div>
        <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#fafafa' }}>
          <Typography.Title level={1}>{t?.title || 'Compress Images Instantly'}</Typography.Title>
          <Typography.Paragraph style={{ fontSize: '18px', marginTop: '20px' }}>
            {t?.subtitle || 'Reduce image file sizes by up to 80% without losing quality. All processing happens in your browser - your images stay private.'}
          </Typography.Paragraph>
          <div style={{ marginTop: '40px' }}>
            <UploadCard />
          </div>
        </div>
        
        <FeaturesSection />
        <StatsSection />
        <FAQSection />
      </div>
    );
  } else {
    // Show original interface when images are uploaded
    return <Body />;
  }
});

const Body = observer(() => {
  return (
    <Flex align="stretch" className={style.main}>
      <LeftContent />
      <RightOption />
    </Flex>
  );
});

const Home = observer(() => {
  useWorkerHandler();

  // 全局粘贴事件处理
  useEffect(() => {
    const handlePaste = async (event: ClipboardEvent) => {
      if (hasImageInClipboard(event)) {
        event.preventDefault();
        const files = await getFilesFromClipboard(event);
        if (files.length > 0) {
          createImageList(files);
        }
      }
    };

    document.addEventListener("paste", handlePaste);

    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  return (
    <div className={style.container}>
      <Header />
      <MainContent />
      {homeState.compareId !== null && <Compare />}
    </div>
  );
});

export default Home;