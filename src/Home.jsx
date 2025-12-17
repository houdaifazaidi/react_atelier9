import React from 'react'
import {useContext} from 'react'
import {Context} from './Context.jsx'

export default function Home() {
    const {theme, lang} = useContext(Context);
    const content = {
        'en' : {
            'title': 'Welcome to Tangier',
            'text': 'Discover the vibrant gateway where the Mediterranean and Atlantic meet. Tangier stands as a cultural crossroads, blending centuries of history with modern hospitality. Experience the enchanting medina, stunning coastal views, and world-class attractions.',
            'subtitle': 'Explore our guide to make the most of your visit to this magnificent city.'
        },
        'ar': {
            'title': 'أهلاً بك في طنجة',
            'text' : 'اكتشف البوابة النابضة بالحياة حيث يلتقي البحر الأبيض المتوسط والمحيط الأطلسي. تقف طنجة كملتقى ثقافي، تمزج قرونًا من التاريخ مع الضيافة الحديثة. اختبر المدينة الساحرة والمناظر الساحلية المذهلة والمعالم السياحية عالمية المستوى.',
            'subtitle': 'استكشف دليلنا لتحقيق أقصى استفادة من زيارتك لهذه المدينة الرائعة.'
        },
        'fr': {
            'title': "Bienvenue à Tanger",
            'text' : "Découvrez la porte vibrante où la Méditerranée et l'Atlantique se rencontrent. Tanger se dresse comme un carrefour culturel, mélangeant des siècles d'histoire avec l'hospitalité moderne. Explorez la médina enchanteresse, les vues côtières époustouflantes et les attractions de classe mondiale.",
            'subtitle': 'Explorez notre guide pour tirer le meilleur parti de votre visite à cette magnifique ville.'
        },
        'es': {
            'title' : '¡Bienvenido a Tánger',
            'text' : 'Descubre la vibrante puerta donde se encuentran el Mediterráneo y el Atlántico. Tánger se presenta como una encrucijada cultural, que mezcla siglos de historia con hospitalidad moderna. Experimenta la encantadora medina, las vistas costeras impresionantes y las atracciones de clase mundial.',
            'subtitle': 'Explora nuestra guía para aprovechar al máximo tu visita a esta magnífica ciudad.'
        }
    }
    const page = content[lang] || content.en

    return (
        <section className={`page page--${theme ? 'dark' : 'light'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <h1>{page.title}</h1>
          <p className="lead">{page.text}</p>
          <p className="small">{page.subtitle}</p>
        </section>
    )
}
