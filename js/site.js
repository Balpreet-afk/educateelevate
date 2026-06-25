// Shared site script — header, footer, country data, timeline, form
(function(){
  const NAV_ITEMS = [
    {href:'index.html', label:'Home'},
    {href:'services.html', label:'Services'},
    {href:'about.html', label:'About'},
    {href:'countries.html', label:'Countries'},
    {href:'contact.html', label:'Contact'},
  ];
  const SOCIAL = {
    ig:'https://www.instagram.com/educateandelevates/',
    fb:'https://www.facebook.com/educateandelevate.in/',
    ln:'https://www.linkedin.com/company/educate-and-elevates/?originalSubdomain=in'
  };
  const PHONE='+91 8287771612', EMAIL='contact@educateandelevate.in';

  const icon = (n)=>({
    star:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 8.5 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 9 8.5 12 2"/></svg>',
    book:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/></svg>',
    shield:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    lock:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    brief:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
    trophy:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v3a3 3 0 0 1-3 3M7 5H4v3a3 3 0 0 0 3 3"/></svg>',
    plane:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.2.6-.6.5-1.1z"/></svg>',
    map:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/></svg>',
    chev:'<svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
    ig:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    fb:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5C13 6.5 13.5 6 14.6 6H17V2.2C16.6 2.1 15.4 2 14 2c-3 0-5 1.8-5 5v3H6v4h3v8z"/></svg>',
    ln:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22zM8.27 8h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 7v7.44h-4.56v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H8.27z"/></svg>',
    phone:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>',
  }[n]||'');

  function buildNav(active){
    const wrap = document.getElementById('site-nav');
    if(!wrap) return;
    wrap.innerHTML = `
      <nav class="nav"><div class="nav-inner">
        <a class="brand" href="index.html">
          <img src="assets/logo.jpeg" alt="Educate & Elevate logo"/>
          <div><div class="brand-name">Educate & Elevate</div><div class="brand-sub">Grow with us</div></div>
        </a>
        <div class="nav-links" id="navLinks">
          ${NAV_ITEMS.map(i=>`<a href="${i.href}" class="${i.href===active?'active':''}">${i.label}</a>`).join('')}
        </div>
        <a href="index.html#lead-form" class="btn btn-primary nav-cta">Get Started ${icon('plane')}</a>
        <button class="menu-btn" id="menuBtn" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div></nav>`;
    const b=document.getElementById('menuBtn'),l=document.getElementById('navLinks');
    b&&b.addEventListener('click',()=>l.classList.toggle('open'));
  }

  function buildFooter(){
    const wrap=document.getElementById('site-footer');
    if(!wrap) return;
    wrap.innerHTML=`<footer><div class="container"><div class="foot">
      <div>
        <div class="foot-brand"><img src="assets/logo.jpeg" alt=""/><strong>Educate & Elevate</strong></div>
        <p style="color:#9bb8cd;font-size:14px;max-width:300px">Your Hassle-Free Path to Studying Abroad.</p>
        <div class="social">
          <a href="${SOCIAL.ig}" target="_blank" aria-label="Instagram">${icon('ig')}</a>
          <a href="${SOCIAL.fb}" target="_blank" aria-label="Facebook">${icon('fb')}</a>
          <a href="${SOCIAL.ln}" target="_blank" aria-label="LinkedIn">${icon('ln')}</a>
        </div>
      </div>
      <div><h5>Explore</h5>${NAV_ITEMS.map(i=>`<a href="${i.href}">${i.label}</a>`).join('')}</div>
      <div><h5>Services</h5>
        <a href="services.html">Permanent Residency</a>
        <a href="services.html">Student Visa</a>
        <a href="services.html">Work Permit</a>
        <a href="services.html">Skilled Migration</a>
        <a href="services.html">IELTS Coaching</a>
      </div>
      <div><h5>Contact</h5>
        <a href="tel:${PHONE.replace(/\s/g,'')}">${icon('phone')} ${PHONE}</a>
        <a href="mailto:${EMAIL}">${icon('mail')} ${EMAIL}</a>
      </div>
    </div><div class="copy">© ${new Date().getFullYear()} Educate & Elevate. All rights reserved.</div></div></footer>`;
  }

  // Reveal on scroll
  function initReveal(){
    const els=document.querySelectorAll('.reveal');
    const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
    els.forEach(el=>io.observe(el));
  }

  // Country data
  const countryData = {
    usa:{name:'USA',flag:'US',why:["Modern teaching methods with first-rate facilities","Top Universities renowned worldwide","Excellent and comfortable boarding facilities","Advanced information technology"],edu:"The U.S. provides some of world's finest higher education, especially in the field of technology. U.S. degrees are recognized all over the world and are considered to be one of the best in the world. The U.S. is the right choice for research professionals. There are many opportunities to do research in any field. The funding for most of the research projects are sponsored by the U.S. Government or by corporations. Also, many companies provide projects for the students in the neighboring universities to gain practical experience during their studies."},
    australia:{name:'Australia',flag:'AU',whyList:[
      ["Globally Recognized Degrees","Australian Universities ranks among top universities and comes under QS World rankings. The degrees from Australian Universities & Colleges are internationally recognized and admired in over the world due to their quality and extreme worth."],
      ["Innovative Teaching Methods","The Education System of Australia is based on practical approach rather than following theoretical methods. Apart from this, the qualified faculties at Australian Universities are another advantage that uses innovative methods of teaching so as to make students more intellectual."],
      ["Cultural Diversity","The multicultural living environment of Australia is cannot be denied as many Indian families are already settled there along with people from another countries. So, international students would love the friendly and forthcoming atmosphere of Australia towards international students. From amazing food to festivals, you can enjoy everything at the fullest."],
      ["High Standard of Living","The Australia is appreciated for high living standards and every tourist once wants to visit Australia to enjoy the life. Thus, becoming an international student in Australia introduces with an amazing lifestyle and luxurious life."],
      ["Affordable compared to Quality","We are not committing that the education in Australia is feasible but comparing the education quality to its price then there is no comparison. The education in Australia is affordable due to its worth as it will get you attractive salary packages on completion."]],
      unis:["University of Melbourne","University of Queensland","Australian National University","Monash University","University of Adelaide","University of Sydney"],
      courses:["Business & Management","Hospitality & Tourism","Mathematics & Computing","Health & Science","Engineering & Technology","Agricultural"],
      tuition:"the tuition fees in Australia is quite high and thus starts around $20,000 per year. This fee might change according to the course. The cost of living in Australia is $2,835 per month which can fluctuate as per your living standard and facilities.",
      income:"the average income from part time work in Australia is also very attractive as it is nearly $2,835 per month."},
    canada:{name:'Canada',flag:'CA',whyList:[
      ["Quality Education","The Education System of Canada is highly admired across the world as it has huge number of top-ranked universities which are based on latest education system. The degrees from Canadian Universities are globally trusted and provide excellent career opportunities to the students."],
      ["Affordable that falls in budget","With the exceptional infrastructure, education quality and living standard, Canada is considered as quite affordable study destination when compared to other countries like UK, US, Australia and etc. So, just relax as Canada fits in your budget very well."],
      ["Multicultural Environment","In Canada, you will find the most welcoming and friendly living environment as there is extremely well organized cultural diversity which will provide you comfortable living. Canada is also known as second Punjab due to considerable Indian population residing there."],
      ["Vibrant Campus Life","Canada Universities and Colleges offers vibrant life to students as they regularly conducts events, outings, fests and other cultural activities to keep students engaged. This also helps students to grow their international network."],
      ["Permanent Residency Options","Canada offers an excellent permanent residency opportunity as completing you education there, the lot of points will be added to your PR eligibility. Thus, go and study in Canada and you can become the permanent resident."]],
      unis:["University of Toronto","University of Alberta","University of Waterloo","McGill University","Humber College","Centennial College","Algonquin College","Seneca College"],
      courses:["Engineering & Technology","Business & Management","Media & Communication","Telecommunications","Computer Science & IT","Animation & Graphic Designing"],
      tuition:"The tuition fees for Canadian bachelor degree starts from 7 lacs/year and goes as high you wants. The post graduate diplomas and certificates costs you around 8-9 lacs/year. The overall monthly living expenses in Canada will come up to CAD$1,000.18 which includes your food, accommodation and other expenses.",
      income:"The average wage rate in Canada is CAD $27 per hour... students can work up to 20hrs/week."},
    uk:{name:'United Kingdom',flag:'UK',whyList:[
      ["Give Perfection to English Skills","While living in a global world, English is must known language for the students. Thus, with studying in UK, students can hone their English speaking skills and further talk like native speakers. Perfection in English skills can build up overall confidence to your personality."],
      ["International Reputation","UK enjoys a distinct reputation across the world as compared to other countries. The degrees acquired from UK are globally accepted and admired. This is the key reasons that students ant to grab a UK degree."],
      ["Cultural Multiplicity","Nearly all the religions and communities are residing in UK and therefore it is a multicultural society which gives equal respect to every creed. International students will get a warm and welcoming environment throughout their education in UK."],
      ["Affordable than US","UK is quite affordable to study than US. The quality of education provided by UK universities and colleges cannot be compared with its cost. Both the countries have equal in terms of reputation, education and lifestyle but you find UK affordable than US in every manner."],
      ["Scholarship Opportunities","International Students with outstanding academic scores can look ahead to scholarship opportunities in the to-ranked universities and colleges as these universities demand quality and crème students from different parts of the world."]],
      unis:["University of Oxford","King's College London (KCL)","University of Cambridge","Imperial College London","University of Manchester"],
      courses:["Accounting & Finance","Aeronautical & Manufacturing Engineering","Architecture","Art & Design","Business & Management Studies","Hospitality Leisure Recreation & Tourism","Medicine","Psychology"],
      tuition:"The tuition fees for undergraduate programs in UK begin from €13358.30 and postgraduate programs costs around 14292.42. London: €1000-1200/month, Rest of UK: €700-900/month.",
      income:"international students in UK can earn up to GBP £6-8 per hour."},
    newzealand:{name:'New Zealand',flag:'NZ',whyList:[
      ["World-Ranked Universities","Based on the pragmatic approach and innovative teaching methods, Education system of New Zealand is world-wide recognized. The universities and colleges of New Zealand are government approved and provide high quality education to the national as well as international students."],
      ["Flexible Entry Requirements","New Zealand offers you flexible living environment as the universities and colleges provide equivalent opportunities to the students. Thus, international students can easily apply in top-ranked universities of New Zealand. Although, these requirements depends upon the university and program you choose."],
      ["Easy Visa Process","In order to avoid any challenges and hassles, New Zealand has prepared a much rationalized process that assures smooth and easy visa processing. Many New Zealand universities and colleges help students in meeting post arrival formalities and even help in visa renewal and extension services as well."],
      ["Cost-Effective Option","The Education System of New Zealand is entirely based on British Education and you can attain it at very affordable cost. The education in New Zealand is comparatively cheaper than US, UK and other countries."],
      ["Welcoming Living Environment","New Zealand has extremely welcoming environment for international students as there is multicultural living environment. Students from different parts of the world are studying and living in New Zealand."]],
      unis:["Auckland University of Technology","University of Canterbury","Lincoln University","University of Otago","University of Auckland","Massey University","University of Waikato","Victoria University of Wellington"],
      courses:["Animation","Engineering & Technology","Medicine","Business & Management","Engineering Forestry","Hospitality & Tourism","IT and Computer Science","Agriculture","Art and design","Health care","Sports Management"],
      tuition:"The tuition fees for bachelor degree in New Zealand start from NZ $22,000 and a master degree from NZ $26,000. Average Living expenses in New Zealand is NZ$1250 per month.",
      income:"The average wage rate is quite good as compared to other countries which are $14.75 per hour."},
    europe:{
      germany:{name:'Germany',flag:'DE',desc:"Germany, one of the highly preferred European countries with exceptional education quality and economic stability has also conquered the top position as the best study abroad destination. According to the world university rankings, Germany constitutes some of the top world ranking universities which are admired for high quality education across the world. There are public universities in Germany that provide free education to both EU and Non EU students on merit basis. Apart from this, private universities & colleges in German offer English-Taught programs at very minimal tuition fee.",unis:["Heidelberg University","Technical University of Munich","Macromedia University of Applied Sciences","Ruprecht-Karls-Universität Heidelberg","KIT Karlsruher Institut für Technologie","Humboldt-Universität zu Berlin","Gisma Business School","Berlin School of Business and Innovation"],courses:["Engineering & Technology","Business Management","Humanities","Physical Sciences","Fine and Applied Arts"],tuition:"in public universities, the tuition fee is very nominal which is 1000 EUR per year but the fee in paid universities comes around 6000 EUR to 20,000 EUR per year. 700-1000 EUR would make your life easier and smoother in Germany."},
      france:{name:'France',flag:'FR',desc:"France holds one of the prestigious educational systems of the world which has resulted in increased the number of international students in France. Study in France will definitely be a life changing experience for you as the universities and colleges are globally recognized and have well worth in different parts of the world. Some of the other major reasons to choose France are its language and job opportunities. French is widely spoken in different parts of world and produces good number of job options for international students.",unis:["University of Paris","Pierre and Marie Curie University","Strasbourg University","College De Paris","EM Normandie Business School","Paris School of Business"],courses:["Business & Management","Environment & Technology","Art & Culture","IT & Computer Science","Healthcare & Management"],tuition:"Bachelors in France will be around 4000 EUR and 5000 EUR for a master degree. Students in France require minimum of 800 EUR per month to live a basic life."},
      sweden:{name:'Sweden',flag:'SE',desc:"Considered as the home country to top-ranked universities, Sweden offers quality education along with many other surprising benefits. Study in Sweden will introduce you with the academic excellence and the world's best universities which are considerably adaptable for international students. The wonderful thing about Swedish Education is its scholarship facilities benefits and numerous opportunities. The education given in Swedish Universities is specifically designed to train students to tackle difficult situations and equipped problem solving skills. The unusual benefit of Studying in Sweden lies with the work flexibility as Swedish government has no restriction on work limit of international students.",unis:["Lund University","KTH Royal Institute of Technology","Uppsala University","Linnaeus University","University College West","University of Skovde"],courses:["Business & Management","Engineering & Technology","Art & Architecture","Public Health","Mathematics"],tuition:"A bachelor degree in Sweden will cost you around 8000 EUR per year and a master degree around 9500 EUR. The living expenses in Sweden is quite affordable as it is only 500-800 EUR per month."},
      malta:{name:'Malta',flag:'MT',desc:"Malta, one of the smallest and densely populated countries is also known as hidden gem of EU countries. Along with the famous tourist destination, Malta is gaining huge popularity among international students to pursue their higher education. The official language of Malta is English which makes it very compatible and friendly country for international students. Education in Malta is totally as per the European standards and has excellent universities and colleges that offer medicine, business, tourism and engineering programs. Most of the Maltese Universities are located in the capital city Valletta which is also preferred by students to live.",unis:["University of Malta","European Graduate School","Malta College of Arts, Science & Technology"],courses:["Business & Management","Engineering & Technology","Business Law & Legal Studies","Hospitality & Tourism Management","Health & Medicine"],tuition:"The degrees in Malta starts from 2000 EUR to 800 EUR which is definitely a lightening deal for any international student. Cost of living in Malta is similarly very affordable as it is only 500-700 EUR per month."},
      ireland:{name:'Ireland',flag:'IE',desc:"Ireland is one of the English Speaking countries of Europe and also has highest quality education system which played a significant role in rapid growth of Ireland's economy. Irish Universities and colleges are greatly admired for specialized courses and vocational programs. International students can study hospitality, business, engineering, pharmacy, textile, marketing and other creative programs. Ireland has exceptional wage rate system for international students that make it quite easier for students to bear their day to day living expenses. Most of the programs in Ireland are accompanied with internships and paid training which is highly beneficial for international students in regards to financial terms.",unis:["University College Cork","Dublin City University","Trinity College Dublin","Dublin Business School","Griffith College Ireland"],courses:["Information Technology","Management","Finance/Accounting","Engineering","Biotechnology and Pharmacy","Applied Science and Hospitality"],tuition:"Undergraduate or Bachelor degree in Ireland is somewhere around 9000 EUR to 20000 EUR per year but a master degree is approximately around 12000 EUR to 30000 EUR per year. Ireland has very less living expenses which is only around 600-900 EUR per month."},
      latvia:{name:'Latvia',flag:'LV',desc:"Study in Latvia will be the most amazing experience for the international students who want to enjoy their student life along with globally accepted degrees. Latvia is a small yet beautiful country that gives place to world best technical as well as management universities. Students from different backgrounds and interests can easily apply in Latvia with flexible entry requirements. Latvian Universities have world class faculty members and has intricate architecture which is the second attraction for international students.",unis:["University of Latvia","Riga Technical University","Turiba University","Riga Stradins University","Latvia University of Life Sciences & Technologies"],courses:["Business & Management","Hospitality & Tourism","Engineering & Technology","Health Sciences","Food & Agriculture"],tuition:"the bachelor degree in Latvia begins from 2100 EUR per year and a master degree from 2300 EUR per year. The living cost in Latvia... approximate living cost comes up to 500-700 EUR (covered with part-time work, 20hr/week permitted)."},
      lithuania:{name:'Lithuania',flag:'LT',desc:"Lithuanian Universities and colleges have abundant list of English-taught programs in different fields such as business, engineering and technology, environmental science and etc. International students need to understand the quite complex requirements of Lithuanian universities which need to be met for successfully getting visa.",unis:["Vilnius Gediminas Technical University","Vilnius University","Kaunas University of Technology","Vytautas Magnus University","Lithuanian University of Health Sciences","Klaipeda University"],courses:["Engineering & Technology","Business & Management","Healthcare & Management","Agriculture & Food Science","Environment Management"],tuition:"a Bachelor degree at 2700 EUR per year and a master degree in 3000 EUR per year. Living Cost in Lithuania... you can live a decent life in 500-700 EUR per month."},
      italy:{name:'Italy',flag:'IT',desc:"Historic treasures and enriching culture of Italy are the major factors that are attracting international students to choose Italy as their study abroad destination. Italy has numerous public and private universities that are specialized in offering high quality education along with an option of free education. Italian Universities are top-ranked and known for offering cheaper education as compared to other European countries. Italy offers comprehensive program list in creative and specialized programs such as fashion designing, graphic designing, photography, architecture and etc.",unis:["Università Cattolica del Sacro Cuore","Istituto Europeo Di Design (IED)","European School of Economics","University of Verona","University of Siena","Lorenzo de' Medici"],courses:["Business & Administration","Art, Design & Architecture","Fashion/Interior Designing","Engineering & Technology","Social Sciences"],tuition:"Degrees in Italy start on 6000 EUR and goes up to 20,000 EUR per year. To live in a beautiful and rich cultured country, you need to have minimum of 700 EUR per month to maintain a basic lifestyle in Italy."},
      denmark:{name:'Denmark',flag:'DK',desc:"The Nordic Country 'Denmark' has substantially occupied a leading position in offering world-class education to international students. Being a well-developed and economically established nation, Denmark has high living standard to offer. Denmark is also considered as one of the safest and peaceful countries of Europe which makes it happiest countries of the world. Danish Universities offer English-taught programs and uses innovating teaching methods to certainly improve the quality of education. Many Danish Universities are also accredited to top UK universities that uplift the values of degree at affordable cost. Another major benefit of Study in Denmark is that it doesn't include any show money at the time of visa processing. International students only need to pay their tuition fees. Also, Denmark allows international students to take their spouse and kids along with them on the duration of their studies.",unis:["University College Absalon","VIA University College","University of Copenhagen","Copenhagen Business School","Aalborg University","Roskilde University"],courses:["Business & Management","Engineering & Technology","Information & Communication","Agriculture & Forestry","Medicine & Health","Hospitality Leisure & Sports"],tuition:"On average a degree in Denmark starts from DKK 45,000 and goes up to DKK 120,000 per year. Cost of Living in Denmark... we can estimate it as 5000 DKK to 10000 DKK per month."},
      poland:{name:'Poland',flag:'PL',desc:"Poland is a well-known European country with rich heritage and culture. Students from different parts of the world are already studying there and taking benefit of Polish education system which is globally renowned. Study in Poland provides some surprising benefits to international students as the universities and colleges located in Poland follows high standard of teaching and educating students. Polish Universities have English-taught programs in almost every field whether it is business, technology or tourism. The education in Poland is available at very modest fee which could be easily afforded by middle class families. Poland share its borders with leading countries like Germany, Czech Republic, Ukraine and etc.",unis:["Lodz University of Technology","University of Lodz","Warsaw University of Technology","Poznan University of Technology","Jagiellonian University","AGH University of Science and Technology"],courses:["MBBS","Engineering & Technology","MBA & Management","Business & Economics","Aviation"],tuition:"Bachelor degree in Poland begins with 2000 EUR/year and a master degree starts from 3000 EUR/year. The living expenses in Poland are also very affordable... approximately 400-500 EUR."}
    }
  };

  function renderCountryBlock(c){
    let html = `<div class="country-block reveal"><h3><span class="flag">${c.flag}</span>${c.name}</h3>`;
    if(c.desc) html += `<p>${c.desc}</p>`;
    if(c.why){ html += `<div class="sub">Why Study</div><ul>${c.why.map(w=>`<li>${w}</li>`).join('')}</ul>`; }
    if(c.whyList){ html += `<div class="sub">Why Study</div><div class="kv">${c.whyList.map(([t,d])=>`<div class="kv-item"><div class="k">${t}</div><div class="v">${d}</div></div>`).join('')}</div>`; }
    if(c.edu){ html += `<div class="sub">Education System</div><p>${c.edu}</p>`; }
    if(c.unis){ html += `<div class="sub">Top Universities</div><ul>${c.unis.map(u=>`<li>${u}</li>`).join('')}</ul>`; }
    if(c.courses){ html += `<div class="sub">Popular Courses</div><ul>${c.courses.map(u=>`<li>${u}</li>`).join('')}</ul>`; }
    if(c.tuition||c.income){
      html += `<div class="kv" style="margin-top:14px">`;
      if(c.tuition) html += `<div class="kv-item"><div class="k">Tuition & Living</div><div class="v">${c.tuition}</div></div>`;
      if(c.income)  html += `<div class="kv-item"><div class="k">Average Income</div><div class="v">${c.income}</div></div>`;
      html += `</div>`;
    }
    html += `</div>`;
    return html;
  }

  function renderCountry(key, subkey, scroll=false){
    const target = document.getElementById('country-info-target');
    if(!target) return;
    let html='';
    if(key==='europe'){
      html += `<div class="region" id="cnt"><h2>Europe <span class="region-tag">10 countries</span></h2></div>`;
      const subs = countryData.europe;
      const list = subkey ? [subkey] : Object.keys(subs);
      list.forEach(k=>{ if(subs[k]) html += renderCountryBlock(subs[k]); });
    } else if(countryData[key]){
      html = renderCountryBlock(countryData[key]);
    }
    target.innerHTML = html;
    target.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
    if(scroll){
      target.scrollIntoView({behavior:'smooth',block:'start'});
    }
  }


  function renderAllCountries(targetId){
    const target = document.getElementById(targetId);
    if(!target) return;
    let html='';
    ['usa','australia','canada','uk','newzealand'].forEach(k=>{ html += renderCountryBlock(countryData[k]); });
    html += `<div class="region" style="margin-top:36px"><h2>Europe <span class="region-tag">10 countries</span></h2></div>`;
    Object.values(countryData.europe).forEach(c=> html += renderCountryBlock(c));
    target.innerHTML = html;
    target.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
    target.scrollIntoView({behavior:'smooth',block:'start'});

  }

  // Progressive form
  function initForm(formId){
    const form = document.getElementById(formId);
    if(!form) return;
    const fields = form.querySelectorAll('.field');
    const europeField = form.querySelector('[data-field="europeSub"]');
    const progress = form.querySelectorAll('.form-progress span');
    const submit = form.querySelector('button[type="submit"]');
    submit.style.display='none';

    function reveal(i){
      if(fields[i]) fields[i].classList.add('show');
      if(progress[i]) progress[i].classList.add('on');
    }
    reveal(0);

    function valOf(name){ const el=form.querySelector(`[name="${name}"]`); return el?el.value.trim():''; }
    function check(){
      const order = ['name','email','phone','country','purpose','qualification'];
      let lastFilled = -1;
      for(let i=0;i<order.length;i++){ if(valOf(order[i])) lastFilled=i; else break; }
      for(let i=0;i<=lastFilled+1 && i<order.length;i++){
        const f = form.querySelector(`[data-field="${order[i]}"]`);
        if(f) f.classList.add('show');
        if(progress[i]&&i<=lastFilled) progress[i].classList.add('on');
      }
      // europe sub
      if(valOf('country')==='europe'){ europeField && europeField.classList.add('show'); }
      else { europeField && europeField.classList.remove('show'); }
      // country info live update
      const c = valOf('country');
      if(c){
        const sub = valOf('europeSub');
        renderCountry(c, sub||null);
      }
      if(valOf('qualification')) submit.style.display='inline-flex';
    }
    form.addEventListener('input', check);
    form.addEventListener('change', check);

    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = {
        Name: valOf('name'), Email: valOf('email'), Phone: valOf('phone'),
        Country: valOf('country')==='europe'? `Europe — ${valOf('europeSub')||'(any)'}` : valOf('country').toUpperCase(),
        Purpose: valOf('purpose'), Qualification: valOf('qualification')
      };
      const recap = form.parentElement.querySelector('.recap');
      const thanks = form.parentElement.querySelector('.thanks');
      if(recap){
        recap.innerHTML = `<h4>Here's what you told us</h4><dl>${Object.entries(data).map(([k,v])=>`<dt>${k}</dt><dd>${v||'—'}</dd>`).join('')}</dl>`;
        recap.classList.add('show');
      }
      if(thanks){ thanks.classList.add('show'); }
      // NOTE: Replace action URL above to enable real submission.
      form.submit(); // uncomment once an endpoint URL is set.
      const target = document.getElementById("ctn");
      target.scrollIntoView({behavior:'smooth',block:'start'});
    });
    
  }

  // Timeline interactions
  const stages = [
    ["Profile Assessment","The first step towards your study abroad and immigration journey is profile assessment which scrutinizes your eligibility to apply or analyze the chances of success. This assessment is conducted by our professional counselors who have extensive knowledge about different countries and their rules & regulations to accept the profile."],
    ["Career Counseling","Counseling is necessary part of the entire process as it helps students to design their journey in their own way and collect relevant information. Through this, counselors get idea about the actual area of interest and provide options accordingly. The profile of a student is considered while career counseling to help out with the best solution. Considering each factor like academic background, English proficiency, interest and budget, the right option is provided."],
    ["Course Shortlisting","Once counseling is done, students want to choose the course which can get them job opportunities. But it is very crucial to understand that course relevancy to your previous academic background plays a major role in admission and visa process. But if you genuinely interested in switching you field, then our counselors will guide you to prepare effectual plus informative SOP that can help you to nail the entire process and finally attain success."],
    ["Country & University Selection","With the growing trend of studying in abroad, the confusion to choose the right destination has also become quite difficult. Most of the countries have now attractive benefits for international students and thus it puts students in dilemma to choose the right country and university. Our experts will provide you end to end information and guidance about countries and universities. Apart from this, they will introduce you with the comparison chart where you can find out the best country as per your area of attractions. When it comes to university selection then we have a broad range of partner universities that not only provides practical knowledge but also helps students to grab internship opportunities. Thence, just walk to us and will adjoin your all bridges towards success."],
    ["Admission Guidance","Following all the above steps, admission guidance is another important step to study abroad but most of the consultants pass over this step. We, at Educate & Elevate give special guidance to student before initiating the process and depict a short brief about entire admission and visa process and also the challenges that could occur during the process."],
    ["SOP Assistance","SOP is the Statement of Purpose or motivation letter that intends your genuine intentions to study abroad. Universities consider this statement as the key element to assess your overall profile. We have professional SOP writers that understand your case and analyze your skills and accordingly write the most effectual set of your profile which can be used as SOP. Otherwise, our professionals could also provide guidance on this part if student can write it on their own."],
    ["Education Loans","As huge cost incurs while planning for study abroad, most of the students are opting education loans to pursue their higher education. We have our own tie-up with loan agents and thus we can assist you on the part of education loan. For this, student must have financial documents of sponsor which could justify their financial status."],
    ["Interview Preparation","After making an application in the desired college or university, there is another step which is Skype interview and we provide comprehensive training to successfully pass the interview. We have set questionnaire that helps students to easily crack the interviews and get offer or admission letter from the desired programs at reputed universities."],
    ["Accommodation and Travel","Most of the visa officer asks for accommodation while filing your visa thus accommodation and travel arrangements are done prior to the visa process. However, we are associated with travel agents that provide all facilities at very nominal costs to our students. Apart from this, we provide accommodation as per the requirement and budget of the student."],
    ["Visa Guidance & Support","Completing the entire admission process, next step towards the final success is visa. Our Visa experts have full-fledged knowledge about the key factors that can affect your profile. Hence, they make sure 100% accuracy in the Visa process both in terms of documentation and depiction. Our team has years of experience in handling critical cases and therefore we provide full support to our students in every manner. We create awareness about the steps which students should take wisely at the tie of visa interview or filing."],
    ["Visa Filing","Once everything is done, Visa filing is the last step away from getting Visa. Yes, our team helps you in the whole documentation process and guides you to prepare an effectual and visa-worth file. Our experts proof-read every student's file before handing over to the student for final submission."],
    ["Pre-Departure Briefing","After winning the battle and successfully acquiring visa, Educate and Elevate organizes pre-departure briefing sessions to assist students about the hassles and challenges of visiting in new country. We guide students about the accommodation, travel and food in the new country and also provide contacts of our previous students in the same destination. This helps students to communicate and interact easily in new nation. Also, we introduce students with the basic laws and regulation of the country and prepare them to adjust in metamorphic environment."]
  ];

  function buildJourney(){
    const wrap = document.getElementById('journey-wrap');
    if(!wrap) return;
    wrap.innerHTML = `
      <div class="progress-rail"><div class="progress-fill" id="progressFill"></div></div>
      ${stages.map((s,i)=>`
        <div class="stage ${i===0?'open':''}" data-i="${i}">
          <div class="dot-num">${String(i+1).padStart(2,'0')}</div>
          <div class="stage-card">
            <h4>${s[0]} ${icon('chev')}</h4>
            <div class="desc">${s[1]}</div>
          </div>
        </div>${i===0 ? `
      <div class="journey-actions" id="journeyActions">
        <button class="btn btn-ghost" id="prevStage">← Previous step</button>
        <button class="btn btn-primary" id="nextStage">Next step →</button>
        <a href="#lead-form" class="btn btn-primary">Start your journey ${icon('plane')}</a>
      </div>` : ''}`).join('')}
    `;

    const stageEls = wrap.querySelectorAll('.stage');
    stageEls.forEach(el=>{
      el.querySelector('.stage-card').addEventListener('click',()=>{
        el.classList.toggle('open');
      });
    });

    // Sticky journey actions (JS-driven for reliability)
    const actions = document.getElementById('journeyActions');
    if (actions) {
      const updateSticky = () => {
        const wrapRect = wrap.getBoundingClientRect();
        const vh = window.innerHeight;
        const actionsH = actions.offsetHeight;
        // Stick when the wrap is in view and there's room below the last stage
        const wrapTop = wrapRect.top;
        const wrapBottom = wrapRect.bottom;
        const shouldStick = wrapTop < (vh - actionsH - 16) && wrapBottom > (vh - 16);
        if (shouldStick) {
          if (!actions.classList.contains('is-sticky')) {
            actions.classList.add('is-sticky');
          }
        } else {
          actions.classList.remove('is-sticky');
        }
      };
      window.addEventListener('scroll', updateSticky, { passive: true });
      window.addEventListener('resize', updateSticky);
      updateSticky();
    }
    // reveal on scroll + progress fill
    const io = new IntersectionObserver((es)=>{
      es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); }});
    },{threshold:.2});
    stageEls.forEach(el=>io.observe(el));

    const fill = document.getElementById('progressFill');
    window.addEventListener('scroll', ()=>{
      const rect = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight;
      const top = -rect.top + window.innerHeight*0.4;
      const pct = Math.max(0, Math.min(100, (top/total)*100));
      fill.style.height = pct + '%';
    });

    function activeIndex(){
      let active=0;
      stageEls.forEach((el,i)=>{
        const r=el.getBoundingClientRect();
        if(r.top < window.innerHeight*0.5) active=i;
      });
      return active;
    }
    document.getElementById('nextStage').addEventListener('click',()=>{
      const i = Math.min(stages.length-1, activeIndex()+1);
      stageEls[i].scrollIntoView({behavior:'smooth',block:'center'});
      stageEls[i].classList.add('open');
    });
    document.getElementById('prevStage').addEventListener('click',()=>{
      const i = Math.max(0, activeIndex()-1);
      stageEls[i].scrollIntoView({behavior:'smooth',block:'center'});
    });
  }

  window.EE = { buildNav, buildFooter, initReveal, buildJourney, initForm, renderCountry, renderAllCountries, icon, countryData };
})();
