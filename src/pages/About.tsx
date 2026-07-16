import { useTranslation } from 'react-i18next'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/fx/ScrollReveal'
import { SectionHeading } from '../components/fx/SectionHeading'
import { GlassCard } from '../components/fx/GlassCard'
import { ParallaxLayer } from '../components/fx/ParallaxLayer'
import { Lightbulb, Eye, HandHeart, Trophy, Globe, Code2, Users, Rocket } from 'lucide-react'
import coloredLogo from '../assets/logos/colored-logo.png'

export function About() {
  const { t } = useTranslation()

  const values = [
    { key: 'innovation', icon: Lightbulb },
    { key: 'transparency', icon: Eye },
    { key: 'community', icon: HandHeart },
    { key: 'excellence', icon: Trophy },
  ]

  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 text-center">
          <SectionHeading title={t('about.title')} />
        </div>

        <div className="my-16 grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl" />
              <img
                src={coloredLogo}
                alt={t('brand.name')}
                className="relative mx-auto h-72 w-72 animate-float object-contain drop-shadow-2xl"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[var(--text)]">{t('about.vision')}</h2>
              <p className="text-lg leading-relaxed text-[var(--text-muted)]">
                {t('brand.mission')}
              </p>
              <p className="text-[var(--text-muted)]">{t('brand.note')}</p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mb-12 space-y-6 text-lg leading-relaxed text-[var(--text-muted)]">
            <p>
              CiviTech Global — legally registered as <strong className="text-[var(--text)]">Rayan Tamaddon Jahan Gostar</strong>{' '}
              (رایان تمدن جهان گستر) — is a privately held software company founded on a single, ambitious belief: that
              technology is the most powerful lever humanity has ever invented for lifting civilization forward. Our name
              carries that promise. <em>Rayan</em> speaks to wisdom and digital insight. <em>Tamaddon</em> is civilization
              itself — the accumulated knowledge, culture, and progress of generations. <em>Jahan Gostar</em> means
              world-spanning. Together, they describe our purpose: to spread thoughtful, human-centered technology across the
              globe.
            </p>
            <p>
              We do not build software for software’s sake. Every product we design, every line of code we write, and every
              community we cultivate is aimed at helping humanity become a more capable, more connected, and more
              intellectually mature species. We believe the future belongs to societies that treat technology not as a
              luxury, but as shared infrastructure — open, reliable, and accessible to all.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <GlassCard className="text-center" hover>
              <Globe className="mx-auto mb-4 text-cyan-500" size={32} />
              <h3 className="mb-2 text-lg font-semibold text-[var(--text)]">Open by Default</h3>
              <p className="text-sm text-[var(--text-muted)]">
                We prioritize open-source projects and public collaboration because the best solutions grow faster when
                everyone can contribute, inspect, and improve them.
              </p>
            </GlassCard>
            <GlassCard className="text-center" hover>
              <Code2 className="mx-auto mb-4 text-violet-500" size={32} />
              <h3 className="mb-2 text-lg font-semibold text-[var(--text)]">Cutting-Edge Craft</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Our teams work with modern architectures, rigorous engineering practices, and a relentless focus on quality
                to deliver software that meets global market standards.
              </p>
            </GlassCard>
            <GlassCard className="text-center" hover>
              <Users className="mx-auto mb-4 text-emerald-500" size={32} />
              <h3 className="mb-2 text-lg font-semibold text-[var(--text)]">People-First Growth</h3>
              <p className="text-sm text-[var(--text-muted)]">
                We design our culture around learning. Whether you are a curious beginner or a seasoned specialist, you will
                find mentors, challenges, and real responsibilities here.
              </p>
            </GlassCard>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-16 space-y-6 text-lg leading-relaxed text-[var(--text-muted)]">
            <h2 className="text-2xl font-semibold text-[var(--text)]">Why We Exist</h2>
            <p>
              The modern world faces a paradox. Technology has never been more abundant, yet meaningful opportunities to
              learn it deeply remain unevenly distributed. Companies ask for years of experience even from entry-level
              candidates. Internships often require prior internships. Career-changers face walls instead of doors. At
              CiviTech Global, we refuse to accept that this is normal.
            </p>
            <p>
              We exist to bridge three gaps at once: the gap between civilization and its technological potential; the gap
              between talented beginners and their first real-world experience; and the gap between proprietary software and
              the open communities that should own it. By working on open-source products with real users, real roadmaps,
              and real standards, we create an environment where contribution is the credential.
            </p>
            <p>
              Most of our contributors join in unpaid, part-time volunteer roles — but they leave with something far more
              valuable than a paycheck: official international work experience, documented contributions, mentorship, and
              the confidence that comes from shipping software that matters.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-16 space-y-6 text-lg leading-relaxed text-[var(--text-muted)]">
            <h2 className="text-2xl font-semibold text-[var(--text)]">What We Build</h2>
            <p>
              Our portfolio spans civic technology, productivity tools, data platforms, and developer infrastructure. We
              choose projects based on three criteria: they must solve a real problem, they must be teachable, and they must
              be maintainable by a distributed, multi-language team. This discipline keeps our work grounded while giving
              contributors exposure to product strategy, design, engineering, operations, marketing, and leadership.
            </p>
            <p>
              We are not a traditional outsourcing shop, nor are we a closed-door product studio. We are a learning
              laboratory — a place where ambitious software is built in public, where mistakes become documentation, and
              where every release is both a product milestone and an educational one.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-16 space-y-6 text-lg leading-relaxed text-[var(--text-muted)]">
            <h2 className="text-2xl font-semibold text-[var(--text)]">Our Culture</h2>
            <p>
              CiviTech Global is intentionally international. Our team members work across time zones, languages, and
              professional backgrounds. English is our primary working language, but Persian, French, German, and Spanish
              are woven into our daily conversations. We value clarity over jargon, questions over assumptions, and progress
              over perfection.
            </p>
            <p>
              We also believe that serious work does not require a serious face all the time. Our unofficial motto — “We
              like games as well” — is a reminder that play, curiosity, and humor are part of the creative process. The
              best engineers, designers, and strategists we know are the ones who still get excited by a clever mechanic, a
              beautiful interface, or an elegant solution.
            </p>
          </div>
        </ScrollReveal>

        <ParallaxLayer speed={0.15} className="py-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-[var(--text)]">
            {t('about.values')}
          </h2>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <StaggerItem key={item.key}>
                <GlassCard className="flex flex-col items-center gap-4 py-10 text-center" hover>
                  <item.icon className="text-cyan-500" size={32} />
                  <h3 className="text-xl font-semibold text-[var(--text)]">
                    {t(`about.valueItems.${item.key}`)}
                  </h3>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ParallaxLayer>

        <ScrollReveal>
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-cyan-600 to-violet-600 p-px">
            <div className="rounded-3xl bg-[var(--bg)] p-8 text-center md:p-12">
              <Rocket className="mx-auto mb-4 text-cyan-500" size={40} />
              <h2 className="mb-4 text-2xl font-bold text-[var(--text)]">Join the Mission</h2>
              <p className="mx-auto max-w-2xl text-[var(--text-muted)]">
                If you believe that technology should serve civilization, that knowledge should be shared, and that the
                next generation of builders deserves a real chance to prove themselves, we invite you to explore our teams,
                roles, and open call.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
