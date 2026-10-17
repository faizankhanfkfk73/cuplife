import Icon, { Logo } from "@/components/Icon";
import { Accordion, Btn, DayTabs, Nav, RegisterForm, Reveal } from "@/components/Interactive";
import {
  approach, audience, bonuses, clientHandling, days, details, disclaimer, faqs, fee, finale, hero,
  includes, invest, marketing, nav, objective, questions, reasons, selfEmployment, trainer, whatsappLink,
} from "@/content/site";

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag"><Icon name="leaf" />{children}</span>;
}

const audienceIcons = ["seed", "stethoscope", "rocket", "book", "heart"];
const handlingIcons = ["talk", "clipboardList", "hand", "heart"];
const detailIcons = ["book", "users", "calendar", "pin", "clock", "users", "award"];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* Hero — Phyco hero */}
        <section className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="container">
            <div className="hero-inner">
              <Reveal><span className="seat-pill"><span className="dot" />{hero.badge}</span></Reveal>
              <Reveal delay={80}><p className="eyebrow">{hero.eyebrow}</p></Reveal>
              <Reveal delay={140}><h1>{hero.title[0]}<em>{hero.title[1]}</em></h1></Reveal>
              <Reveal delay={220}><p className="sub">{hero.sub}</p></Reveal>
              <Reveal delay={300}>
                <div className="btn-row">
                  <Btn href="#fee">{hero.cta}</Btn>
                  <Btn href={whatsappLink()} variant="ghost wa" icon="whatsapp">WhatsApp To Register</Btn>
                </div>
              </Reveal>
            </div>
            <ul className="hero-chips">
              {hero.chips.map((c, k) => (
                <Reveal as="li" key={c} delay={360 + k * 60}><Icon name="checkCircle" />{c}</Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Questions — Coursify "struggle" grid in Phyco style */}
        <section className="section">
          <div className="container">
            <Reveal className="head center">
              <Tag>{questions.tag}</Tag>
              <h2 className="h2">{questions.title}</h2>
              <p className="lead">{questions.lead}</p>
            </Reveal>
            <div className="q-grid">
              {questions.items.map((q, k) => (
                <Reveal key={q} delay={k * 80} className="q-card">
                  <span className="num">0{k + 1}</span>
                  <p>&ldquo;{q}&rdquo;</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="q-close">
              <p>{questions.close}</p>
              <Btn href="#curriculum">Dekhiye Curriculum</Btn>
            </Reveal>
          </div>
        </section>

        <div className="container"><hr className="rule" /></div>

        {/* Approach — Phyco about */}
        <section className="section">
          <div className="container about">
            <Reveal className="about-left">
              <Tag>{approach.tag}</Tag>
              <p className="lead">{hero.body}</p>
            </Reveal>
            <div className="about-right">
              <Reveal><h2>{approach.title}. <em>{approach.body}</em></h2></Reveal>
              <Reveal delay={120}>
                <ol className="flow" aria-label="Learning flow">
                  {approach.steps.map((s, k) => (
                    <li key={s}>
                      <span className="step">{s}</span>
                      {k < approach.steps.length - 1 && <Icon name="arrow" className="arrow" />}
                    </li>
                  ))}
                </ol>
              </Reveal>
              <Reveal delay={200} className="about-imgs">
                <img src="/assets/images/assess.jpg" alt="Trainer guiding a learner during an assessment" />
                <img src="/assets/images/leg.jpg" alt="Hands-on practical technique" />
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3-Day curriculum — Yogaz schedule tabs + Coursify modules */}
        <section className="section cream" id="curriculum">
          <div className="container">
            <Reveal className="head center">
              <Tag>3-Day Curriculum</Tag>
              <h2 className="h2">3 Days mein kya seekhenge?</h2>
              <p className="lead">Har din ka ek clear focus — fundamentals se anatomy, aur phir supervised practical workflow tak.</p>
            </Reveal>
            <Reveal><DayTabs days={days} /></Reveal>
          </div>
        </section>

        {/* Client handling — Phyco expertise accordion */}
        <section className="section">
          <div className="container ch-grid">
            <Reveal className="ch-left">
              <Tag>{clientHandling.tag}</Tag>
              <h2 className="h2">{clientHandling.title}</h2>
              <p className="lead">{clientHandling.body} {clientHandling.lead}</p>
              <img src="/assets/images/supervised.jpg" alt="Trainer supervising a learner's technique" />
            </Reveal>
            <Reveal delay={120}>
              <Accordion
                className="ch"
                items={clientHandling.groups.map((g, k) => ({
                  title: g.name,
                  icon: handlingIcons[k],
                  body: <ul>{g.items.map((i) => <li key={i}><Icon name="check" />{i}</li>)}</ul>,
                }))}
              />
            </Reveal>
          </div>
        </section>

        {/* Self-employment — Phyco "why choose" mosaic */}
        <section className="section cream">
          <div className="container">
            <Reveal className="head split">
              <div><Tag>{selfEmployment.tag}</Tag><h2 className="h2">{selfEmployment.title}</h2></div>
              <p className="lead">{selfEmployment.body}</p>
            </Reveal>
            <Reveal className="mosaic">
              <div className="tile olive-t"><Icon name="briefcase" className="ico" /><h3>Service ko professionally structure kijiye</h3><p>Home-visit model, packages aur pricing ka basic framework.</p></div>
              <div className="tile tall"><img src="/assets/images/table.jpg" alt="Therapy setup with a client on the table" /></div>
              <div className="tile"><img src="/assets/images/hands.jpg" alt="Gentle hands-on therapy" /></div>
              <div className="tile"><img src="/assets/images/session.jpg" alt="Practitioner working with a client" /></div>
              <div className="tile butter-t"><Icon name="users" className="ico" /><h3>Clients, referrals aur repeat bookings</h3><p>WhatsApp, Instagram aur local marketing se lead ko booking mein convert karna.</p></div>
            </Reveal>
            <Reveal><p className="lead" style={{ marginTop: 56 }}>{selfEmployment.lead}</p></Reveal>
            <ol className="se-list" style={{ marginTop: 16 }}>
              {selfEmployment.items.map((i, k) => <Reveal as="li" key={i} delay={(k % 3) * 60}>{i}</Reveal>)}
            </ol>
            <Reveal>
              <ol className="path" aria-label="Career path">
                {selfEmployment.path.map((p, k) => <li key={p}><small>Step {k + 1}</small><b>{p}</b></li>)}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* Digital marketing */}
        <section className="section olive">
          <div className="container">
            <Reveal className="head split">
              <div><Tag>{marketing.tag}</Tag><h2 className="h2">{marketing.title}</h2></div>
              <p className="lead">{marketing.body}</p>
            </Reveal>
            <div className="mk-grid">
              {marketing.channels.map((c, k) => (
                <Reveal key={c.name} delay={k * 90} className="mk-card">
                  <span className="ic"><Icon name={c.icon} /></span>
                  <h3>{c.name}</h3>
                  <ul>{c.items.map((i) => <li key={i}><Icon name="check" />{i}</li>)}</ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Trainer — Phyco team card + Coursify instructor */}
        <section className="section" id="trainer">
          <div className="container trainer">
            <Reveal className="t-card">
              <span className="monogram" aria-hidden="true">FK</span>
              <span className="ring" aria-hidden="true">FK</span>
              <span className="xp">{trainer.experience}</span>
              <h3>{trainer.name}</h3>
              <p className="creds">{trainer.creds}</p>
              <p className="role">{trainer.role}</p>
            </Reveal>
            <Reveal delay={120} className="t-info">
              <Tag>{trainer.tag}</Tag>
              <h2 className="h2">{trainer.title}</h2>
              <p className="lead">{trainer.name} — {trainer.role}, {trainer.experience}. {trainer.focusLead}</p>
              <ul className="t-focus">
                {trainer.focus.map((f, k) => <li key={f}><span>0{k + 1}</span><b>{f}</b></li>)}
              </ul>
            </Reveal>
          </div>
        </section>

        <div className="container"><hr className="rule" /></div>

        {/* What you get + bonuses — Phyco pricing features + Coursify bonuses */}
        <section className="section">
          <div className="container">
            <Reveal className="head split">
              <div><Tag>What You Get</Tag><h2 className="h2">Course mein aapko kya milega?</h2></div>
              <p className="lead">Training, practice, guidance aur support — sab ek structured offline program mein.</p>
            </Reveal>
            <ul className="inc-grid">
              {includes.map((i, k) => <Reveal as="li" key={i} delay={(k % 3) * 60}><Icon name="checkCircle" />{i}</Reveal>)}
            </ul>
            <div className="bonus-grid">
              {bonuses.map((b, k) => (
                <Reveal key={b.name} delay={(k % 3) * 80} className="bonus">
                  <div className="top"><span className="ic"><Icon name={b.icon} /></span><span className="no">Bonus #{k + 1}</span></div>
                  <h3>{b.name}</h3>
                  <p>{b.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Audience */}
        <section className="section cream">
          <div className="container">
            <Reveal className="head center">
              <Tag>Who It&apos;s For</Tag>
              <h2 className="h2">Ye course kiske liye hai?</h2>
            </Reveal>
            <div className="aud-grid">
              {audience.map((a, k) => (
                <Reveal key={a.name} delay={k * 70} className="aud">
                  <span className="ic"><Icon name={audienceIcons[k]} /></span>
                  <h3>{a.name}</h3>
                  <p>{a.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Objective — vertical flow */}
        <section className="section olive">
          <div className="container obj">
            <Reveal>
              <div className="head" style={{ marginBottom: 0 }}>
                <Tag>{objective.tag}</Tag>
                <h2 className="h2">{objective.title}</h2>
                <p className="lead">{objective.body} {objective.lead}</p>
                <div className="obj-big"><span>Skill</span><span>Practical Knowledge</span><span>Confidence</span></div>
              </div>
            </Reveal>
            <ol className="obj-steps">
              {objective.steps.map((s, k) => (
                <Reveal as="li" key={s} delay={k * 90} className="obj-li">
                  <span>0{k + 1}</span>{s}
                </Reveal>
              )).flatMap((el, k) => k === 0 ? [el] : [<li key={`d${k}`} className="down" aria-hidden="true" style={{ background: "none", border: 0, padding: 0 }}><Icon name="down" /></li>, el])}
            </ol>
          </div>
        </section>

        {/* Why choose — numbered grid */}
        <section className="section">
          <div className="container">
            <Reveal className="head split">
              <div><Tag>Why Choose Us</Tag><h2 className="h2">Why choose this training?</h2></div>
              <p className="lead">Face-to-face learning, practical focus aur safety-first approach — limited batch ke saath.</p>
            </Reveal>
            <div className="why-grid">
              {reasons.map((r, k) => (
                <Reveal key={r.name} delay={(k % 4) * 70} className="why">
                  <span className="n">0{k + 1}</span>
                  <h3>{r.name}</h3>
                  <p>{r.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Course details + fee + registration — Phyco contact section */}
        <section className="section cream" id="fee">
          <div className="container">
            <Reveal className="head center">
              <Tag>{fee.tag}</Tag>
              <h2 className="h2">Course details &amp; registration</h2>
            </Reveal>
            <div className="reg">
              <Reveal className="details-card">
                <h3 style={{ fontSize: 32 }}>Course Details</h3>
                <dl>
                  {details.map((d, k) => (
                    <div key={d.k}>
                      <dt><Icon name={detailIcons[k]} />{d.k}</dt>
                      <dd className={d.v.startsWith("[") ? "ph" : ""}>{d.v}</dd>
                    </div>
                  ))}
                  <div>
                    <dt><Icon name="talk" />Language</dt>
                    <dd>Hindi / Hinglish</dd>
                  </div>
                </dl>
                <p className="details-note"><Icon name="shield" />Course completion certificate medical license ya independent practice authorization nahi hai — neeche disclaimer padhein.</p>
              </Reveal>
              <Reveal delay={120} className="fee-card">
                <span className="badge">{fee.label}</span>
                <div className="price">{fee.price}<small>/ 3-Day Program</small></div>
                <p className="seats"><span className="dot" />{fee.note}</p>
                <RegisterForm />
                <Btn href={whatsappLink()} variant="ghost wa" block icon="whatsapp">{fee.secondary}</Btn>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Invest band — Eventixx stats strip */}
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="container">
            <Reveal className="invest">
              <div>
                <h2>{invest.title}</h2>
                <p>{invest.body}</p>
              </div>
              <div className="invest-side">
                <div className="invest-stats">
                  <div><b>3</b><small>Days Offline</small></div>
                  <div><b>44+</b><small>Topics Covered</small></div>
                  <div><b>5</b><small>Special Bonuses</small></div>
                </div>
                <span className="tag dark"><Icon name="leaf" />{invest.badge}</span>
                <div className="btn-row">
                  <Btn href="#fee">{invest.primary}</Btn>
                  <Btn href={whatsappLink()} variant="ghost wa" icon="whatsapp">{invest.secondary}</Btn>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ — Phyco FAQ */}
        <section className="section faq" id="faq">
          <div className="container">
            <Reveal className="head center">
              <Tag>FAQ&apos;s</Tag>
              <h2 className="h2">Frequently asked questions</h2>
            </Reveal>
            <div className="faq-grid">
              <Reveal className="faq-img"><img src="/assets/images/positioning.jpg" alt="Trainer demonstrating client positioning" /></Reveal>
              <Reveal delay={120}>
                <Accordion className="faq" numbered items={faqs.map((f) => ({ title: f.q, body: <p>{f.a}</p> }))} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal className="disc">
              <span className="ic"><Icon name="shield" /></span>
              <div>
                <h3>Important Disclaimer</h3>
                <ul>{disclaimer.map((d) => <li key={d}>{d}</li>)}</ul>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Final CTA + footer — Phyco newsletter band + footer */}
      <footer className="footer">
        <div className="container">
          <Reveal className="finale">
            <div>
              <span className="tag"><Icon name="leaf" />{finale.tag}</span>
              <h2>{finale.title}</h2>
              <p>{finale.body}</p>
              <div className="finale-ask">
                <h3>{finale.ask}</h3>
                <div className="btn-row">
                  <Btn href="#fee" variant="dark">{finale.cta}</Btn>
                  <Btn href={whatsappLink()} variant="white wa" icon="whatsapp">{finale.whatsapp}</Btn>
                </div>
                <small>{finale.meta}</small>
              </div>
            </div>
            <ul>{finale.list.map((l) => <li key={l}><Icon name="checkCircle" />{l}</li>)}</ul>
          </Reveal>
          <div className="foot-grid">
            <div className="about-f">
              <a href="#top" className="logo"><Logo /><b>Cupheal</b></a>
              <p>3-Day Offline Hijama Training Program — practical training, real guidance, aur safety-first learning.</p>
            </div>
            <div>
              <h4>Program</h4>
              <ul>{nav.map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}</ul>
            </div>
            <div>
              <h4>Batch Details</h4>
              <ul>
                <li>Offline / Classroom Training</li>
                <li>[INSERT CITY &amp; VENUE]</li>
                <li>[INSERT DATE] · [INSERT TIMING]</li>
              </ul>
            </div>
            <div>
              <h4>Register</h4>
              <ul>
                <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a href="#fee">Reserve My Seat</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© {new Date().getFullYear()} Cupheal. All Rights Reserved.</span>
            <span>Course certificate medical license ya practice authorization nahi hai.</span>
          </div>
        </div>
      </footer>

      <a className="wa-float" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp to register"><Icon name="whatsapp" /></a>
    </>
  );
}
