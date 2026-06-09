const regions = {
  'moscow': { name: 'Москва', coefficient: 1.3 },
  'spb': { name: 'Санкт-Петербург', coefficient: 1.2 },
  'million': { name: 'Города-миллионники', coefficient: 1.1 },
  'regional': { name: 'Областные центры', coefficient: 1.0 },
  'small': { name: 'Малые города', coefficient: 0.85 }
};

const urgency = {
  'standard': { name: 'Стандартный срок', coefficient: 1.0 },
  'accelerated': { name: 'Ускоренный (3-5 дней) (+20%)', coefficient: 1.2 },
  'urgent': { name: 'Срочно (завтра) (+30%)', coefficient: 1.3 },
  'emergency': { name: 'Экстренно (сегодня) (+40%)', coefficient: 1.4 }
};

const subscriptionDiscounts = {
  '1': { months: 1, discount: 0 },
  '3': { months: 3, discount: 0.10 },
  '6': { months: 6, discount: 0.15 },
  '12': { months: 12, discount: 0.25 }
};

const stateFees = {
  'registration_ip': { name: 'Регистрация ИП', amount: 800 },
  'registration_ooo': { name: 'Регистрация ООО', amount: 4000 },
  'changes_egryul': { name: 'Внесение изменений', amount: 800 },
  'liquidation_ip': { name: 'Ликвидация ИП', amount: 160 },
  'liquidation_ooo': { name: 'Ликвидация ООО', amount: 800 },
  'reorganization': { name: 'Реорганизация', amount: 4000 },
  'trademark': { name: 'Товарный знак', amount: 11500 }
};

const packages = {
  'start': { title: 'ПАКЕТ "СТАРТ"', price: 22000, desc: 'До 12 часов консультаций' },
  'business': { title: 'ПАКЕТ "БИЗНЕС"', price: 45000, desc: 'До 30 часов консультаций' },
  'premium': { title: 'ПАКЕТ "ПРЕМИУМ"', price: 80000, desc: 'Безлимит консультаций' },
  'corporate': { title: 'ПАКЕТ "КОРПОРАТИВ"', price: 120000, desc: 'Полный безлимит' }
};

const extras = {
  'tax': { name: 'Налоговый консалтинг', price: 25000 },
  'litigation': { name: 'Судебное представительство', price: 35000 },
  'corporate': { name: 'Корпоративное право', price: 20000 },
  'ip': { name: 'Интеллектуальная собственность', price: 15000 },
  'international': { name: 'Международное право и ВЭД', price: 30000 }
};

const oneoffCategories = {
  'registration': { title: 'Регистрация и ликвидация', services: {} },
  'tax': { title: 'Документы для налоговой', services: {} },
  'contracts': { title: 'Договорная работа', services: {} },
  'litigation': { title: 'Судебные услуги', services: {} },
  'corporate': { title: 'Корпоративное право', services: {} },
  'ip': { title: 'Интеллектуальная собственность', services: {} },
  'labor': { title: 'Трудовое право', services: {} },
  'consulting': { title: 'Консультации', services: {} }
};

const oneoffServices = {
  'reg_ip': { name: 'Регистрация ИП', price: 3500, category: 'registration', fee: 800 },
  'reg_ooo': { name: 'Регистрация ООО', price: 9900, category: 'registration', fee: 4000 },
  'changes_egryul': { name: 'Внесение изменений в ЕГРЮЛ/ЕГРИП', price: 4900, category: 'registration', fee: 800 },
  'liquidation_ip': { name: 'Ликвидация ИП', price: 7900, category: 'registration', fee: 160 },
  'liquidation_ooo': { name: 'Ликвидация ООО', price: 29900, category: 'registration', fee: 800 },
  'reorganization': { name: 'Реорганизация компании', price: 49900, category: 'registration', fee: 4000 },
  'decl_usn_income': { name: 'Декларация УСН (Доходы)', price: 2500, category: 'tax' },
  'decl_usn_profit': { name: 'Декларация УСН (Доходы-Расходы)', price: 3500, category: 'tax' },
  'decl_osn': { name: 'Декларация ОСН (НДС + Прибыль)', price: 7900, category: 'tax' },
  'decl_patent': { name: 'Декларация по патенту', price: 1500, category: 'tax' },
  'fns_response': { name: 'Ответ на требование ФНС', price: 3900, category: 'tax' },
  'audit_act': { name: 'Возражения на акт налоговой проверки', price: 9900, category: 'tax' },
  'fns_appeal': { name: 'Жалоба в ФНС', price: 5900, category: 'tax' },
  'restore_accounting_1yr': { name: 'Восстановление учета (до 1 года)', price: 15000, category: 'tax' },
  'restore_accounting_3yr': { name: 'Восстановление учета (1-3 года)', price: 35000, category: 'tax' },
  'restore_accounting_3plus': { name: 'Восстановление учета (более 3 лет)', price: 60000, category: 'tax' },
  'zero_report': { name: 'Нулевая отчетность', price: 1500, category: 'tax' },
  'contract_rent': { name: 'Договор аренды', price: 3500, category: 'contracts' },
  'contract_sale': { name: 'Договор купли-продажи', price: 3500, category: 'contracts' },
  'contract_service': { name: 'Договор оказания услуг', price: 3500, category: 'contracts' },
  'contract_work': { name: 'Договор подряда', price: 4500, category: 'contracts' },
  'contract_employment': { name: 'Трудовой договор', price: 2500, category: 'contracts' },
  'contract_complex': { name: 'Сложный договор', price: 7900, category: 'contracts' },
  'contract_check': { name: 'Правовая экспертиза договора', price: 2500, category: 'contracts' },
  'additional_agreement': { name: 'Допсоглашение', price: 2000, category: 'contracts' },
  'protocol_disputes': { name: 'Протокол разногласий', price: 2500, category: 'contracts' },
  'claim_work': { name: 'Претензионная работа', price: 4900, category: 'contracts' },
  'claim_prep': { name: 'Подготовка искового заявления', price: 9900, category: 'litigation' },
  'response_prep': { name: 'Подготовка отзыва на иск', price: 7900, category: 'litigation' },
  'court_simple': { name: 'Представительство в суде (простые)', price: 35000, category: 'litigation' },
  'court_medium': { name: 'Представительство в суде (средняя)', price: 60000, category: 'litigation' },
  'court_complex': { name: 'Представительство в суде (сложные)', price: 100000, category: 'litigation' },
  'appeal': { name: 'Апелляционное обжалование', price: 25000, category: 'litigation' },
  'cassation': { name: 'Кассационное обжалование', price: 30000, category: 'litigation' },
  'execution': { name: 'Исполнительное производство', price: 15000, category: 'litigation' },
  'charter': { name: 'Разработка устава ООО', price: 9900, category: 'corporate' },
  'corp_agreement': { name: 'Корпоративный договор', price: 14900, category: 'corporate' },
  'meeting_protocol': { name: 'Протокол общего собрания', price: 4500, category: 'corporate' },
  'single_decision': { name: 'Решение участника', price: 2500, category: 'corporate' },
  'due_diligence_quick': { name: 'Due Diligence (экспресс)', price: 25000, category: 'corporate' },
  'due_diligence_full': { name: 'Due Diligence (полная)', price: 60000, category: 'corporate' },
  'ma_support': { name: 'Сопровождение M&A', price: 99900, category: 'corporate' },
  'trademark': { name: 'Регистрация товарного знака', price: 29900, category: 'ip', fee: 11500 },
  'license_agreement': { name: 'Лицензионный договор', price: 9900, category: 'ip' },
  'franchise': { name: 'Франшиза договор', price: 19900, category: 'ip' },
  'copyright_protection': { name: 'Защита авторских прав', price: 19900, category: 'ip' },
  'labor_contract': { name: 'Трудовой договор', price: 2500, category: 'labor' },
  'internal_regs': { name: 'Правила внутреннего распорядка', price: 7900, category: 'labor' },
  'secrecy_policy': { name: 'Политика коммерческой тайны', price: 5900, category: 'labor' },
  'job_description': { name: 'Должностная инструкция', price: 1500, category: 'labor' },
  'order': { name: 'Приказ', price: 1000, category: 'labor' },
  'dismissal_support': { name: 'Увольнение (сопровождение)', price: 4900, category: 'labor' },
  'labor_inspection': { name: 'Защита при трудовой проверке', price: 15000, category: 'labor' },
  'consultation_hour': { name: 'Консультация (1 час)', price: 3900, category: 'consulting' },
  'consultation_written': { name: 'Письменная консультация', price: 5900, category: 'consulting' },
  'legal_analysis': { name: 'Правовой анализ документов', price: 4900, category: 'consulting' },
  'audit_express': { name: 'Экспресс-аудит компании', price: 15000, category: 'consulting' }
};

Object.entries(oneoffServices).forEach(([k,s])=>{
  if(oneoffCategories[s.category]) oneoffCategories[s.category].services[k] = s;
});

/* Utilities */
const el = id => document.getElementById(id);
const fmt = v => {
  if(typeof v !== 'number') return '0 ₽';
  return Math.round(v).toLocaleString('ru-RU') + ' ₽';
};
const animateCounter = (elem, start, end, duration=500) => {
  const step = (end - start) / (duration / 16);
  let current = start;
  const timer = setInterval(()=>{
    current += step;
    if((step > 0 && current >= end) || (step < 0 && current <= end)){
      current = end;
      clearInterval(timer);
    }
    elem.textContent = fmt(current);
  }, 16);
};

function populateSelectors(){
  const region = el('region');
  const regionOne = el('region-oneoff');
  Object.entries(regions).forEach(([key, r])=>{
    const o = document.createElement('option'); o.value = key; o.textContent = `${r.name}`; region.appendChild(o);
    const o2 = o.cloneNode(true); regionOne.appendChild(o2);
  });
  region.value = 'regional'; regionOne.value = 'regional';

  const packagesDiv = el('packages');
  Object.entries(packages).forEach(([k,p])=>{
    const wrapper = document.createElement('label'); wrapper.className='package';
    wrapper.innerHTML = `<input type="radio" name="package" value="${k}" ${k==='start'?'checked':''}> <strong>${p.title}</strong> — ${fmt(p.price)}<div class="muted">${p.desc}</div>`;
    packagesDiv.appendChild(wrapper);
  });

  const extrasDiv = el('extras');
  Object.entries(extras).forEach(([k,e])=>{
    const wrapper = document.createElement('label'); wrapper.className='extra';
    wrapper.innerHTML = `<input type="checkbox" name="extra" value="${k}"> ${e.name} — ${fmt(e.price)}`;
    extrasDiv.appendChild(wrapper);
  });

  const urgencyDiv = el('urgency');
  Object.entries(urgency).forEach(([k,u])=>{
    const r = document.createElement('label'); r.className='radio';
    r.innerHTML = `<input type="radio" name="urgency" value="${k}" ${k==='standard'?'checked':''}> ${u.name}`;
    urgencyDiv.appendChild(r);
  });

  const vatDiv = el('vat');
  ['no','inc','sep'].forEach((v)=>{
    const items = {no:'Без НДС', inc:'С НДС 20% (включен)', sep:'С НДС 20% (выделяется)'};
    const r = document.createElement('label'); r.className='radio';
    r.innerHTML = `<input type="radio" name="vat" value="${v}" ${v==='no'?'checked':''}> ${items[v]}`;
    vatDiv.appendChild(r);
  });

  const oneoffDiv = el('oneoff-services');
  Object.entries(oneoffCategories).forEach(([catKey,cat])=>{
    const accDiv = document.createElement('div'); accDiv.className='accordion';
    const accBtn = document.createElement('button'); accBtn.type='button'; accBtn.className='accordion-btn';
    accBtn.textContent = `▼ ${cat.title}`; 
    accBtn.addEventListener('click', (e)=>{
      e.preventDefault(); 
      accContent.style.display = accContent.style.display==='none'?'block':'none';
      accBtn.textContent = accContent.style.display==='none'?`▶ ${cat.title}`:`▼ ${cat.title}`;
    });
    const accContent = document.createElement('div'); accContent.className='accordion-content';
    Object.entries(cat.services).forEach(([k,s])=>{
      const wrapper = document.createElement('label'); wrapper.className='extra';
      wrapper.innerHTML = `<input type="checkbox" name="oneoff" value="${k}"> ${s.name} — ${fmt(s.price)} ${s.fee?`(госпошлина ${fmt(s.fee)})`:''}`;  
      accContent.appendChild(wrapper);
    });
    accDiv.appendChild(accBtn); accDiv.appendChild(accContent);
    oneoffDiv.appendChild(accDiv);
  });

  const urgencyOne = el('urgency-oneoff');
  Object.entries(urgency).forEach(([k,u])=>{
    const r = document.createElement('label'); r.className='radio';
    r.innerHTML = `<input type="radio" name="urgency-oneoff" value="${k}" ${k==='standard'?'checked':''}> ${u.name}`;
    urgencyOne.appendChild(r);
  });

  const vatOne = el('vat-oneoff');
  ['no','inc','sep'].forEach((v)=>{
    const items = {no:'Без НДС', inc:'С НДС 20% (включен)', sep:'С НДС 20% (выделяется)'};
    const r = document.createElement('label'); r.className='radio';
    r.innerHTML = `<input type="radio" name="vat-oneoff" value="${v}" ${v==='no'?'checked':''}> ${items[v]}`;
    vatOne.appendChild(r);
  });
}

function getSelectedPackage(){
  const p = document.querySelector('input[name=package]:checked');
  return p?packages[p.value]:null;
}

function getUrgencyFor(type='subscription'){
  const sel = type==='subscription'?document.querySelector('input[name=urgency]:checked'):document.querySelector('input[name=urgency-oneoff]:checked');
  return sel?urgency[sel.value]:urgency.standard;
}

function getRegionFor(type='subscription'){
  const id = type==='subscription'?'region':'region-oneoff';
  const v = el(id).value; return regions[v];
}

function getVatFor(type='subscription'){
  const name = type==='subscription'?'vat':'vat-oneoff';
  const v = document.querySelector(`input[name=${name}]:checked`).value; return v;
}

// ✅ ИСПРАВЛЕННАЯ ФУНКЦИЯ - умножает на количество месяцев
function calcSubscription(){
  const pkg = getSelectedPackage();
  if(!pkg) return {error:'Выберите пакет обслуживания'};
  const extrasKeys = Array.from(document.querySelectorAll('input[name=extra]:checked')).map(i=>i.value);
  const extrasSel = extrasKeys.map(k=>extras[k]);
  const base = pkg.price + extrasSel.reduce((s,e)=>s+e.price,0);
  const region = getRegionFor('subscription');
  const afterRegion = Math.round(base * region.coefficient);
  const urg = getUrgencyFor('subscription');
  const afterUrg = Math.round(afterRegion * urg.coefficient);
  const period = el('period').value;
  const periodMonths = parseInt(period);
  const discountPct = subscriptionDiscounts[period].discount;
  
  // ✅ УМНОЖАЕМ НА КОЛИЧЕСТВО МЕСЯЦЕВ
  const monthlyCost = afterUrg;
  const totalForPeriod = monthlyCost * periodMonths;
  const discount = Math.round(totalForPeriod * discountPct);
  const afterDiscount = totalForPeriod - discount;
  
  const includeFees = el('include-fees').checked;
  const extraFeeMap = { ip: ['trademark'] };
  let fees = 0;
  if(includeFees){
    extrasKeys.forEach(exKey=>{
      const feeKeys = extraFeeMap[exKey] || [];
      feeKeys.forEach(fk=>{ if(stateFees[fk]) fees += stateFees[fk].amount; });
    });
  }
  let total = afterDiscount + fees;
  const vatMode = getVatFor('subscription');
  let vatAmount = 0;
  if(vatMode==='sep') vatAmount = Math.round(total * 0.2);
  const final = total + vatAmount;

  return {
    base, afterRegion, afterUrg, discount, afterDiscount, fees, vatAmount, total: final, 
    period, periodMonths, pkg, extrasSel, region, urg,
    monthlyCost: monthlyCost,
    totalForPeriod: totalForPeriod
  };
}

function calcOneoff(){
  const selectedKeys = Array.from(document.querySelectorAll('input[name=oneoff]:checked')).map(i=>i.value);
  if(selectedKeys.length===0) return {error:'Выберите хотя бы одну разовую услугу'};
  const services = selectedKeys.map(k=>({ key: k, ...oneoffServices[k] }));
  const base = services.reduce((s,sr)=>s+sr.price,0);
  const region = getRegionFor('oneoff');
  const afterRegion = Math.round(base * region.coefficient);
  const urg = getUrgencyFor('oneoff');
  const afterUrg = Math.round(afterRegion * urg.coefficient);
  const includeFees = el('include-fees-oneoff').checked;
  const fees = includeFees? selectedKeys.reduce((s,k)=> s + (oneoffServices[k].fee || (stateFees[k]?.amount || 0)), 0) : 0;
  let total = afterUrg + fees;
  let discount = 0;
  if(total >= 50000){ discount = Math.round(total * 0.10); total = total - discount; }
  const vatMode = getVatFor('oneoff');
  let vatAmount = 0;
  if(vatMode==='sep') vatAmount = Math.round(total * 0.2);
  const final = total + vatAmount;
  return {services, base, afterRegion, afterUrg, fees, discount, total: final, vatAmount, region, urg};
}

// ✅ ИСПРАВЛЕННАЯ ФУНКЦИЯ - показывает разбивку по месяцам
function renderDetailsSub(r){
  if(r.error) return el('details-lines').textContent = r.error;
  const lines = [];
  lines.push(`${r.pkg.title}         ${fmt(r.pkg.price)}/мес`);
  r.extrasSel.forEach(e=>lines.push(`${e.name}         +${fmt(e.price)}/мес`));
  lines.push('─────────────────────────────────');
  lines.push(`Базовая стоимость/мес  ${fmt(r.base)}`);
  lines.push(`Регион: ${r.region.name} (×${r.region.coefficient})    ${fmt(r.afterRegion - r.base)}`);
  lines.push(`Срочность: ${r.urg.name}    ×${r.urg.coefficient}`);
  lines.push('─────────────────────────────────');
  lines.push(`Стоимость/мес          ${fmt(r.monthlyCost)}`);
  lines.push(`Период: ${r.periodMonths} мес.          ×${r.periodMonths}`);
  lines.push(`За весь период:        ${fmt(r.totalForPeriod)}`);
  if(r.discount>0) lines.push(`Скидка ${r.period} мес (-${Math.round(r.discount/r.totalForPeriod*100)}%)   -${fmt(r.discount)}`);
  if(r.fees>0) lines.push(`Госпошлины и расходы     +${fmt(r.fees)}`);
  lines.push('─────────────────────────────────');
  lines.push(`Итого без НДС          ${fmt(r.afterDiscount + r.fees)}`);
  lines.push(`НДС: ${getVatFor('subscription')==='no'?'не облагается': getVatFor('subscription')==='sep'?fmt(r.vatAmount):'включен'}`);
  lines.push('═════════════════════════════════');
  lines.push(`ИТОГО:                 ${fmt(r.total)}`);
  lines.push(`(за ${r.periodMonths} мес. = ${fmt(r.total/r.periodMonths)}/мес)`);
  el('details-lines').textContent = lines.join('\n');
  el('summary-price').textContent = fmt(r.total);
  el('summary-period').textContent = `/за ${r.periodMonths} мес.`;
}

function renderDetailsOne(r){
  if(r.error) return el('details-lines').textContent = r.error;
  const lines = [];
  r.services.forEach(s=>{
    const feeAmount = s.fee || (stateFees[s.key] ? stateFees[s.key].amount : 0);
    lines.push(`${s.name}         ${fmt(s.price)}${feeAmount?` (госпошлина ${fmt(feeAmount)})`:''}`);
  });
  lines.push('─────────────────────────────────');
  lines.push(`Базовая стоимость        ${fmt(r.base)}`);
  lines.push(`Регион: ${r.region.name} (×${r.region.coefficient})    +${fmt(Math.round(r.afterRegion - r.base))}`);
  lines.push(`Срочность: ${r.urg.name}    ×${r.urg.coefficient}`);
  lines.push('─────────────────────────────────');
  if(r.fees>0) lines.push(`Госпошлины и расходы     +${fmt(r.fees)}`);
  if(r.discount>0) lines.push(`Скидка                  -${fmt(r.discount)}`);
  lines.push('─────────────────────────────────');
  lines.push(`Итого без НДС            ${fmt(Math.round(r.afterUrg + r.fees - r.discount))}`);
  lines.push(`НДС: ${getVatFor('oneoff')==='no'?'не облагается': getVatFor('oneoff')==='sep'?fmt(r.vatAmount):'включен'}`);
  lines.push('─────────────────────────────────');
  lines.push(`ИТОГО:                   ${fmt(r.total)}`);
  el('details-lines').textContent = lines.join('\n');
  el('summary-price').textContent = fmt(r.total);
  el('summary-period').textContent = 'единоразово';
}

function showToast(msg='', timeout=3000){
  let t = document.createElement('div'); t.className='toast no-print'; t.textContent = msg;
  t.style.position='fixed'; t.style.right='20px'; t.style.top='20px'; t.style.background='var(--green)'; t.style.color='#fff'; t.style.padding='10px 14px'; t.style.borderRadius='8px'; t.style.zIndex=9999; document.body.appendChild(t);
  setTimeout(()=>{t.remove()},timeout);
}

function generateLink(){
  const params = new URLSearchParams();
  const type = document.querySelector('input[name=serviceType]:checked').value;
  params.set('type',type);
  if(type==='subscription'){
    const pkg = document.querySelector('input[name=package]:checked').value; params.set('package',pkg);
    params.set('region', el('region').value);
    params.set('period', el('period').value);
    const extrasSel = Array.from(document.querySelectorAll('input[name=extra]:checked')).map(i=>i.value); params.set('extras',extrasSel.join(','));
    params.set('urgency', document.querySelector('input[name=urgency]:checked').value);
    params.set('vat', document.querySelector('input[name=vat]:checked').value);
  } else {
    const services = Array.from(document.querySelectorAll('input[name=oneoff]:checked')).map(i=>i.value); params.set('services',services.join(','));
    params.set('region', el('region-oneoff').value);
    params.set('urgency', document.querySelector('input[name=urgency-oneoff]:checked').value);
    params.set('vat', document.querySelector('input[name=vat-oneoff]:checked').value);
  }
  return `${location.origin}${location.pathname}?${params.toString()}`;
}

/* Event wiring */
function attach(){
  document.querySelectorAll('.radio-card').forEach(card=>{
    card.addEventListener('click', ()=>{
      document.querySelectorAll('.radio-card').forEach(c=>c.classList.remove('selected')); card.classList.add('selected');
      card.querySelector('input').checked = true;
      const val = card.querySelector('input').value;
      document.getElementById('subscription-block').style.display = val==='subscription'?'block':'none';
      document.getElementById('oneoff-block').style.display = val==='oneoff'?'block':'none';
    });
  });

  el('calcBtn').addEventListener('click', ()=>{
    const type = document.querySelector('input[name=serviceType]:checked').value;
    if(type==='subscription'){
      const r = calcSubscription();
      if(r.error){ showToast('⚠️ ' + r.error); return; }
      const urg = getUrgencyFor('subscription');
      if(urg.coefficient > 1.2){
        showToast('️ Некоторые услуги не могут быть выполнены экстренно');
      }
      const oldPrice = parseInt(el('summary-price').textContent.replace(/[^0-9]/g, '')) || 0;
      renderDetailsSub(r);
      animateCounter(el('summary-price'), oldPrice || r.total * 0.5, r.total, 400);
    } else {
      const r = calcOneoff();
      if(r.error){ showToast('⚠️ ' + r.error); return; }
      const oldPrice = parseInt(el('summary-price').textContent.replace(/[^0-9]/g, '')) || 0;
      renderDetailsOne(r);
      animateCounter(el('summary-price'), oldPrice || r.total * 0.5, r.total, 400);
    }
  });

  // ✅ УБРАНА кнопка pdfBtn, оставлена только proposalBtn
  el('proposalBtn').addEventListener('click', ()=>{
    generateAndOpenPDF();
  });

  el('whatsappBtn').addEventListener('click', ()=>{
    const s = document.querySelector('input[name=serviceType]:checked').value==='subscription'?'Абонентское':'Разовое';
    const msg = `Здравствуйте! Я рассчитал стоимость юридических услуг:\nТип: ${s}\nСсылка: ${generateLink()}`;
    const url = `https://wa.me/?text=${encodeURIComponent(msg)}`; 
    window.open(url,'_blank');
  });

  el('telegramBtn').addEventListener('click', ()=>{
    const s = document.querySelector('input[name=serviceType]:checked').value==='subscription'?'Абонентское':'Разовое';
    const msg = `Здравствуйте! Я рассчитал стоимость юридических услуг:\nТип: ${s}\nСсылка: ${generateLink()}`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(generateLink())}&text=${encodeURIComponent(msg)}`; 
    window.open(url,'_blank');
  });
}

// ✅ ИСПРАВЛЕННАЯ ФУНКЦИЯ - правильный расчет за период
function generateInvoiceHTML(){
  const type = document.querySelector('input[name=serviceType]:checked').value;
  const id = `КП-${Math.random().toString(36).substr(2,6).toUpperCase()}-2026`;
  const date = new Date().toLocaleDateString('ru-RU');
  
  let servicesRows = '';
  let calculationDetails = '';
  
  if(type==='subscription'){
    const calc = calcSubscription();
    if(!calc.error){
      const pkg = calc.pkg;
      const extras = calc.extrasSel;
      
      servicesRows += `<tr><td>${pkg.title} (в месяц)</td><td style="text-align:right;">${fmt(pkg.price)}</td></tr>`;
      extras.forEach(e=>{
        servicesRows += `<tr><td>${e.name} (в месяц)</td><td style="text-align:right;">${fmt(e.price)}</td></tr>`;
      });
      
      // ✅ ИСПРАВЛЕННАЯ детализация с умножением на период
      calculationDetails = `
        <h3>Детализация расчёта:</h3>
        <table>
          <tr><td>Базовая стоимость пакета и опций (в месяц)</td><td style="text-align:right;font-weight:bold;">${fmt(calc.base)}</td></tr>
          <tr><td>Региональный коэффициент: ${calc.region.name} (×${calc.region.coefficient})</td><td style="text-align:right;">+${fmt(Math.round(calc.afterRegion - calc.base))}</td></tr>
          <tr><td>Коэффициент срочности: ${calc.urg.name} (×${calc.urg.coefficient})</td><td style="text-align:right;">×${calc.urg.coefficient}</td></tr>
          <tr style="background:#f9f9f9;"><td style="font-weight:bold;">Стоимость в месяц</td><td style="text-align:right;font-weight:bold;">${fmt(calc.monthlyCost)}</td></tr>
          <tr><td>Период договора: ${calc.periodMonths} мес.</td><td style="text-align:right;">×${calc.periodMonths}</td></tr>
          <tr style="background:#f9f9f9;"><td style="font-weight:bold;">За весь период (${calc.periodMonths} мес.)</td><td style="text-align:right;font-weight:bold;">${fmt(calc.totalForPeriod)}</td></tr>
          ${calc.discount>0?`<tr><td>Скидка за ${calc.period} мес. (-${Math.round(calc.discount/calc.totalForPeriod*100)}%)</td><td style="text-align:right;">-${fmt(calc.discount)}</td></tr>`:''}
          ${calc.fees>0?`<tr><td>Госпошлины и расходы</td><td style="text-align:right;">+${fmt(calc.fees)}</td></tr>`:''}
          <tr style="background:#f0f0f0;"><td style="font-weight:bold;">Итого без НДС</td><td style="text-align:right;font-weight:bold;">${fmt(calc.afterDiscount + calc.fees)}</td></tr>
          ${calc.vatAmount>0?`<tr><td>НДС 20% (выделяется отдельно)</td><td style="text-align:right;">+${fmt(calc.vatAmount)}</td></tr>`:'<tr><td>НДС</td><td style="text-align:right;">не облагается</td></tr>'}
          <tr style="background:#3D7A5F;color:white;"><td style="font-weight:bold;font-size:14px;">ИТОГО за ${calc.periodMonths} месяц(а)</td><td style="text-align:right;font-weight:bold;font-size:14px;">${fmt(calc.total)}</td></tr>
          <tr style="background:#f0f0f0;"><td style="font-size:11px;">Средняя стоимость в месяц</td><td style="text-align:right;font-size:11px;">${fmt(calc.total/calc.periodMonths)}</td></tr>
        </table>
      `;
    }
  } else {
    const calc = calcOneoff();
    if(!calc.error){
      calc.services.forEach(s=>{
        const feeAmount = s.fee || (stateFees[s.key] ? stateFees[s.key].amount : 0);
        servicesRows += `<tr><td>${s.name}</td><td style="text-align:right;">${fmt(s.price)}</td></tr>`;
        if(feeAmount){
          servicesRows += `<tr style="background:#f9f9f9;"><td style="font-size:12px;color:#666;padding-left:20px;">  - Госпошлина</td><td style="text-align:right;font-size:12px;color:#666;">${fmt(feeAmount)}</td></tr>`;
        }
      });
      
      calculationDetails = `
        <h3>Детализация расчёта:</h3>
        <table>
          <tr><td>Базовая стоимость услуг</td><td style="text-align:right;font-weight:bold;">${fmt(calc.base)}</td></tr>
          <tr><td>Региональный коэффициент: ${calc.region.name} (×${calc.region.coefficient})</td><td style="text-align:right;">+${fmt(Math.round(calc.afterRegion - calc.base))}</td></tr>
          <tr><td>Коэффициент срочности: ${calc.urg.name} (×${calc.urg.coefficient})</td><td style="text-align:right;">×${calc.urg.coefficient}</td></tr>
          <tr style="background:#f9f9f9;"><td style="font-weight:bold;">С учётом коэффициентов</td><td style="text-align:right;font-weight:bold;">${fmt(calc.afterUrg)}</td></tr>
          ${calc.fees>0?`<tr><td>Госпошлины и расходы</td><td style="text-align:right;">+${fmt(calc.fees)}</td></tr>`:''}
          ${calc.discount>0?`<tr><td>Скидка (сумма ≥ 50 000 ₽)</td><td style="text-align:right;">-${fmt(calc.discount)}</td></tr>`:''}
          <tr style="background:#f0f0f0;"><td style="font-weight:bold;">Итого без НДС</td><td style="text-align:right;font-weight:bold;">${fmt(Math.round(calc.afterUrg + calc.fees - calc.discount))}</td></tr>
          ${calc.vatAmount>0?`<tr><td>НДС 20% (выделяется отдельно)</td><td style="text-align:right;">+${fmt(calc.vatAmount)}</td></tr>`:'<tr><td>НДС</td><td style="text-align:right;">не облагается</td></tr>'}
          <tr style="background:#3D7A5F;color:white;"><td style="font-weight:bold;font-size:14px;">ИТОГО (разовое)</td><td style="text-align:right;font-weight:bold;font-size:14px;">${fmt(calc.total)}</td></tr>
        </table>
      `;
    }
  }

  const totalPrice = el('summary-price').textContent;
  
  return `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Коммерческое предложение ${id}</title>
  <style>
    @media print {
      body { margin: 0; padding: 15mm; }
      .no-print { display: none !important; }
    }
    body { 
      font-family: 'Times New Roman', Times, serif; 
      margin: 25px; 
      color: #1a1a1a; 
      line-height: 1.5;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 { 
      font-size: 18px; 
      text-align: center; 
      margin: 5px 0;
      color: #3D7A5F;
    }
    h3 { 
      font-size: 13px; 
      margin: 20px 0 10px 0;
      color: #3D7A5F;
      border-bottom: 2px solid #3D7A5F;
      padding-bottom: 5px;
    }
    table { 
      width: 100%; 
      border-collapse: collapse; 
      margin: 15px 0;
    }
    th, td { 
      padding: 8px 10px; 
      text-align: left; 
      border: 1px solid #999;
    }
    th { 
      background: #3D7A5F; 
      color: white; 
      font-weight: bold;
    }
    td { 
      font-size: 12px;
    }
    .header { 
      text-align: center; 
      margin-bottom: 25px; 
      border-bottom: 2px solid #3D7A5F; 
      padding-bottom: 15px;
    }
    .company-info { 
      margin: 20px 0; 
      font-size: 12px; 
      line-height: 1.6;
      background: #f9f9f9;
      padding: 15px;
      border-left: 3px solid #3D7A5F;
    }
    .sig { 
      margin-top: 50px; 
      display: flex; 
      justify-content: space-between;
      gap: 20px;
    }
    .sig .box { 
      width: 48%; 
      font-size: 11px;
      border: 1px solid #ddd;
      padding: 15px;
    }
    .requisites { 
      font-size: 11px; 
      margin-top: 20px; 
      border: 1px solid #ddd; 
      padding: 12px; 
      line-height: 1.5;
      background: #f9f9f9;
    }
    .terms { 
      font-size: 11px; 
      margin-top: 20px; 
      color: #555;
      line-height: 1.6;
    }
    .footer { 
      font-size: 10px; 
      margin-top: 20px; 
      text-align: center; 
      color: #999;
      border-top: 1px solid #ddd;
      padding-top: 10px;
    }
    .print-btn {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 30px;
      background: #3D7A5F;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      z-index: 9999;
    }
    .print-btn:hover {
      background: #2D6A4F;
    }
    .info-box {
      position: fixed;
      top: 80px;
      right: 20px;
      background: #fff3cd;
      border: 1px solid #ffc107;
      border-radius: 8px;
      padding: 15px;
      font-size: 13px;
      max-width: 250px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <button class="print-btn no-print" onclick="window.print()">️ СОХРАНИТЬ КАК PDF</button>
  <div class="info-box no-print">
    <strong>💡 Как сохранить PDF:</strong><br>
    Нажмите кнопку выше или Ctrl+P, затем выберите "Сохранить как PDF"
  </div>
  
  <div class="header">
    <h1>КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</h1>
    <p style="margin:5px 0;">№ ${id} от ${date}</p>
  </div>
  
  <div class="company-info">
    <strong>ИСПОЛНИТЕЛЬ:</strong><br>
    ООО "Юридическое Бюро"<br>
    ИНН: 7700000000 | КПП: 770000000 | ОГРН: 1127700000000<br>
    Банк: ПАО "Сбербанк" БИК: 044525000<br>
    р/с: 40702810900000000000<br>
    Адрес: 119991, г. Москва, ул. Ленина, д. 1<br>
    Телефон: +7 (495) 123-45-67<br>
    Email: info@company.ru
  </div>
  
  <h3>1. СОСТАВ ПРЕДЛОЖЕНИЯ:</h3>
  <table>
    <thead>
      <tr>
        <th style="width:70%;">Наименование услуги</th>
        <th style="width:30%;text-align:right;">Стоимость</th>
      </tr>
    </thead>
    <tbody>
      ${servicesRows}
      <tr style="font-weight:bold;background:#e8e8e8;">
        <td>ИТОГО за услуги</td>
        <td style="text-align:right;">${totalPrice}</td>
      </tr>
    </tbody>
  </table>
  
  ${calculationDetails}
  
  <h3>2. УСЛОВИЯ ПРЕДЛОЖЕНИЯ:</h3>
  <p class="terms">
    • Предложение действительно 30 календарных дней с даты формирования.<br>
    • Сроки выполнения согласовываются дополнительно.<br>
    • Окончательная стоимость будет зафиксирована в договоре.<br>
    • Оплата: по счёту-фактуре в течение 7 дней с момента подписания договора.<br>
    • Гарантии: фиксированная цена, возврат 100% при неудовлетворенности.
  </p>
  
  <h3>3. РЕКВИЗИТЫ ДЛЯ ОПЛАТЫ:</h3>
  <div class="requisites">
    <strong>ООО "Юридическое Бюро"</strong><br>
    ИНН: 7700000000, КПП: 770000000, ОГРН: 1127700000000<br>
    Банк: ПАО "Сбербанк"<br>
    БИК: 044525000 | Кор. счёт: 30101810900000000000<br>
    Расчетный счёт: 40702810900000000000<br>
    Назначение платежа: Оплата по счёту-фактуре ${id}
  </div>
  
  <h3>4. ПОДПИСИ СТОРОН:</h3>
  <div class="sig">
    <div class="box">
      <p><strong>От исполнителя:</strong></p>
      <p style="margin-top:30px;">___________________________</p>
      <p style="font-size:10px;">(Подпись руководителя)</p>
      <p style="margin-top:20px;">___________________________</p>
      <p style="font-size:10px;">(М.П. печать)</p>
      <p style="margin-top:15px;">"___" ____________ 2026 г.</p>
    </div>
    <div class="box">
      <p><strong>От заказчика:</strong></p>
      <p style="margin-top:30px;">___________________________</p>
      <p style="font-size:10px;">(Подпись и расшифровка)</p>
      <p style="margin-top:20px;">___________________________</p>
      <p style="font-size:10px;">(М.П. печать)</p>
      <p style="margin-top:15px;">"___" ____________ 2026 г.</p>
    </div>
  </div>
  
  <div class="footer">
    <p>Документ сформирован автоматически ${new Date().toLocaleString('ru-RU')}</p>
    <p>Для сохранения в PDF нажмите Ctrl+P или кнопку выше</p>
  </div>
</body>
</html>`;
}

function generateAndOpenPDF(){
  try {
    const html = generateInvoiceHTML();
    
    const printWindow = window.open('', '_blank');
    if(!printWindow){
      showToast('⚠️ Разрешите всплывающие окна');
      return;
    }
    
    printWindow.document.write(html);
    printWindow.document.close();
    
    showToast('✅ Документ открыт. Нажмите Ctrl+P для сохранения PDF');
    
    setTimeout(() => {
      printWindow.focus();
    }, 500);
    
  } catch(err){
    console.error('Ошибка:', err);
    showToast(' Ошибка при создании документа');
  }
}

// Restore from URL
function restoreFromParams(){
  const params = new URLSearchParams(location.search);
  const type = params.get('type') || 'subscription';
  document.querySelector(`input[name=serviceType][value="${type}"]`).checked = true;
  document.querySelectorAll('.radio-card').forEach(r=>r.classList.remove('selected'));
  document.querySelectorAll('.radio-card').forEach((r,i)=>{
    if(r.querySelector('input').value === type) r.classList.add('selected');
  });
  document.getElementById('subscription-block').style.display = type==='subscription'?'block':'none';
  document.getElementById('oneoff-block').style.display = type==='oneoff'?'block':'none';
  
  if(type==='subscription'){
    if(params.has('package')) document.querySelector(`input[name=package][value="${params.get('package')}"]`).checked = true;
    if(params.has('region')) el('region').value = params.get('region');
    if(params.has('period')) el('period').value = params.get('period');
    if(params.has('extras')){
      params.get('extras').split(',').forEach(ex=>{
        const cb = document.querySelector(`input[name=extra][value="${ex}"]`);
        if(cb) cb.checked = true;
      });
    }
    if(params.has('urgency')) document.querySelector(`input[name=urgency][value="${params.get('urgency')}"]`).checked = true;
    if(params.has('vat')) document.querySelector(`input[name=vat][value="${params.get('vat')}"]`).checked = true;
  } else {
    if(params.has('services')){
      params.get('services').split(',').forEach(svc=>{
        const cb = document.querySelector(`input[name=oneoff][value="${svc}"]`);
        if(cb) cb.checked = true;
      });
    }
    if(params.has('region')) el('region-oneoff').value = params.get('region');
    if(params.has('urgency')) document.querySelector(`input[name=urgency-oneoff][value="${params.get('urgency')}"]`).checked = true;
    if(params.has('vat')) document.querySelector(`input[name=vat-oneoff][value="${params.get('vat')}"]`).checked = true;
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  populateSelectors();
  attach();
  restoreFromParams();
});