import { Content } from './types';

export const content: Record<'en' | 'ja', Content> = {
  en: {
    nav: {
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Transform Your Business with AI',
      subtitle: 'Expert consulting to help you leverage artificial intelligence for sustainable growth',
      cta: 'Get Started',
    },
    services: {
      title: 'Our Services',
      items: [
        {
          title: 'AI Strategy Development',
          description: 'Custom AI roadmaps aligned with your business objectives',
        },
        {
          title: 'Implementation Support',
          description: 'Expert guidance throughout your AI transformation journey',
        },
        {
          title: 'AI Training & Education',
          description: 'Comprehensive training programs for your team',
        },
      ],
    },
    about: {
      title: 'About Us',
      description: 'We are a team of AI experts dedicated to helping businesses navigate the complex landscape of artificial intelligence. With years of experience in both technical implementation and strategic planning, we ensure your AI initiatives deliver real value.',
    },
    contact: {
      title: 'Contact Us',
      description: 'Ready to start your AI journey? Get in touch with us today.',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
      },
    },
  },
  ja: {
    nav: {
      services: 'サービス',
      about: '会社概要',
      contact: 'お問い合わせ',
    },
    hero: {
      title: 'AIで企業変革を実現',
      subtitle: '持続可能な成長のための人工知能活用コンサルティング',
      cta: 'お問い合わせ',
    },
    services: {
      title: 'サービス内容',
      items: [
        {
          title: 'AI戦略立案',
          description: 'ビジネス目標に沿ったAIロードマップの作成',
        },
        {
          title: '導入支援',
          description: 'AI変革の過程における専門家によるガイダンス',
        },
        {
          title: 'AI研修・教育',
          description: 'チーム向けの包括的なトレーニングプログラム',
        },
      ],
    },
    about: {
      title: '会社概要',
      description: '私たちは、企業が人工知能の複雑な領域をナビゲートするのを支援するAIの専門家チームです。技術実装と戦略的計画の両方における長年の経験を活かし、お客様のAIイニシアチブが確実な価値を生み出すようサポートいたします。',
    },
    contact: {
      title: 'お問い合わせ',
      description: 'AIの導入についてご相談をお考えですか？お気軽にお問い合わせください。',
      form: {
        name: 'お名前',
        email: 'メールアドレス',
        message: 'メッセージ',
        submit: '送信',
      },
    },
  },
}