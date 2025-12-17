import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './Context.jsx'

export default function NotFound() {
  const { theme, lang } = useContext(Context)

  const content = {
    en: {
      title: '404',
      subtitle: 'Page Not Found',
      message: 'Sorry, the page you\'re looking for doesn\'t exist or has been moved.',
      cta: 'Back to Home'
    },
    fr: {
      title: '404',
      subtitle: 'Page Non Trouvée',
      message: 'Désolé, la page que vous recherchez n\'existe pas ou a été déplacée.',
      cta: 'Retour à l\'accueil'
    },
    es: {
      title: '404',
      subtitle: 'Página No Encontrada',
      message: 'Lo sentimos, la página que buscas no existe o ha sido movida.',
      cta: 'Volver al inicio'
    },
    ar: {
      title: '404',
      subtitle: 'الصفحة غير موجودة',
      message: 'عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
      cta: 'العودة إلى الصفحة الرئيسية'
    }
  }

  const page = content[lang] || content.en

  return (
    <section className={`page page--${theme ? 'dark' : 'light'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>{page.title}</h1>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', opacity: 0.8 }}>{page.subtitle}</h2>
        <p className="lead" style={{ marginBottom: '2rem' }}>{page.message}</p>
        <Link 
          to="/" 
          style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            transition: 'all 0.25s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--color-primary-light)'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'var(--color-primary)'
            e.target.style.transform = 'translateY(0)'
          }}
        >
          {page.cta}
        </Link>
      </div>
    </section>
  )
}
