import React from 'react'
import { useContext } from 'react'
import { Context } from './Context.jsx'

export default function Tangier() {
  const { theme, lang } = useContext(Context)

  const content = {
    en: {
      title: 'Tangier — Gateway to Two Continents',
      desc: `Tangier, nestled where the Mediterranean Sea meets the Atlantic Ocean, is a city rich in history and cultural significance. This vibrant port city has been shaped by Phoenician, Roman, Arab, Portuguese, Spanish, and French influences, creating a unique blend of traditions and modern sophistication. From the charming alleys of the medina to the breathtaking coastal promenades, Tangier offers unforgettable experiences.`,
      tips: ['Explore the enchanting kasbah with panoramic views', 'Wander through the traditional souks and medina', 'Visit the Strait of Gibraltar for stunning coastal views', 'Dine on fresh Mediterranean and Atlantic seafood']
    },
    fr: {
      title: 'Tanger — Porte entre Deux Continents',
      desc: `Tanger, nichée où la Méditerranée rencontre l'Atlantique, est une ville riche d'histoire et d'importance culturelle. Cette ville portuaire vibrante a été façonnée par les influences phénicienne, romaine, arabe, portugaise, espagnole et française, créant un mélange unique de traditions et de sophistication moderne.`,
      tips: ['Explorez la kasbah enchanteresse avec des vues panoramiques', 'Flânez dans les souks traditionnels et la médina', 'Visitez le détroit de Gibraltar pour des vues côtières époustouflantes', 'Dégustez les fruits de mer frais de la Méditerranée et de l\'Atlantique']
    },
    es: {
      title: 'Tánger — Puerta entre Dos Continentes',
      desc: `Tánger, ubicada donde el Mediterráneo se encuentra con el Atlántico, es una ciudad rica en historia e importancia cultural. Esta vibrante ciudad portuaria ha sido moldeada por influencias fenicias, romanas, árabes, portuguesas, españolas y francesas, creando una mezcla única de tradiciones y sofisticación moderna.`,
      tips: ['Explore la encantadora kasbah con vistas panorámicas', 'Pasee por los zocos tradicionales y la medina', 'Visite el Estrecho de Gibraltar para vistas costeras impresionantes', 'Disfrute de mariscos frescos del Mediterráneo y el Atlántico']
    },
    ar: {
      title: 'طنجة — بوابة بين قارتين',
      desc: `طنجة، الموقعة حيث يلتقي البحر الأبيض المتوسط بالمحيط الأطلسي، هي مدينة غنية بالتاريخ والأهمية الثقافية. لقد تشكلت هذه المدينة الساحلية النابضة بالحياة من خلال التأثيرات الفينيقية والرومانية والعربية والبرتغالية والإسبانية والفرنسية، مما أنشأ مزيجًا فريدًا من التقاليد والرقي الحديث.`,
      tips: ['استكشف القصبة الساحرة مع الإطلالات البانورامية', 'تجول في الأسواق التقليدية والمدينة القديمة', 'زر مضيق جبل طارق للحصول على إطلالات ساحلية مذهلة', 'استمتع بالمأكولات البحرية الطازجة من البحر الأبيض المتوسط والأطلسي']
    }
  }

  const page = content[lang] || content.en

  return (
    <article className={`page page--${theme ? 'dark' : 'light'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <h1>{page.title}</h1>
      <p className="lead">{page.desc}</p>
      <ul className="tips">
        {page.tips.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </article>
  )
}
