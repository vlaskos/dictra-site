/* Dictra site — client-side EN/UK language toggle. Self-contained, no external
   requests, to match the product's privacy stance. English lives in the HTML;
   this file holds the Ukrainian strings and swaps them in on demand, remembering
   the choice in localStorage and honouring the browser language on first visit. */
(function () {
  "use strict";

  var UK = {
    // Header + footer (every page)
    "nav.privacy": "Приватність",
    "nav.support": "Підтримка",
    "foot.home": "Головна",
    "foot.privacy": "Політика приватності",
    "foot.support": "Підтримка",

    // index.html — title + hero
    "title.index": "Dictra — Говори, друкуй, перекладай",
    "hero.tag": "<span class=\"tr\">dic</span>tate <span class=\"amp\">&amp;</span> <span class=\"tr\">tra</span>nslate",
    "hero.lede": "Говори — і слова одразу стають текстом у будь-якому застосунку, а за потреби й перекладом. Усе працює просто на iPhone.",
    "hero.pill": "Скоро в App Store",
    "hero.pills": "Безкоштовна диктовка · На пристрої · Переклад · Без акаунта",

    // index.html — feature 1 (the idea)
    "f1.kicker": "Ідея",
    "f1.h2": "Клавіатура, яка друкує те, що ти кажеш",
    "f1.p": "Dictra перетворює голос на текст у будь-якому застосунку й може одразу його перекласти. Налаштування — п’ять коротких кроків, а далі диктовка й переклад працюють повністю на iPhone.",
    "f1.s1": "Вітання — голос у текст, просто на телефоні.",
    "f1.s2": "Дозволь мікрофон.",
    "f1.s3": "Додай клавіатуру й увімкни Повний доступ.",
    "f1.s4": "Завантаж мовну модель — і працюй офлайн.",
    "f1.s5": "Тисни мікрофон і говори.",

    // index.html — feature 2 (private by design)
    "f2.kicker": "Приватна від початку",
    "f2.h2": "Усе лишається на твоєму iPhone",
    "f2.p": "Диктуй у будь-який застосунок — і кожне слово стає текстом просто на пристрої. Історія лишається тільки на iPhone: без акаунта, без хмари, нічого нікуди не йде. Очисти одним дотиком, коли захочеш.",

    // index.html — feature 3 (four languages)
    "f3.kicker": "Чотири мови, будь-який напрям",
    "f3.h2": "Говори українською, вставляй англійською",
    "f3.p": "Говори однією мовою — клавіатура вставить іншу, у будь-якому напрямку між українською, російською, польською та англійською. Переклад теж працює на пристрої, тож усе сказане лишається в телефоні.",
    "f3.e1": "Українська <b>→</b> англійська",
    "f3.e2": "Польська <b>→</b> українська",
    "f3.e3": "Російська <b>→</b> польська",
    "f3.e4": "Англійська <b>→</b> українська",

    // index.html — feature 4 (themes)
    "f4.kicker": "Гарно виглядає всюди",
    "f4.h2": "Світла чи темна. Тобі вирішувати.",
    "f4.p": "Dictra підлаштовується під тему системи й має обидві — світлу й темну. Акценти підібрані так, щоб добре читалися в кожній. А сам застосунок доступний англійською та українською.",

    // index.html — how it works
    "ht.kicker": "Як це працює",
    "ht.h2": "Від голосу до тексту за три дотики",
    "ht.p": "Dictra — це клавіатура-розширення, тож працює в будь-якому застосунку: повідомлення, нотатки, пошта, пошук. Перемкнися на неї, як на будь-яку іншу клавіатуру, і говори.",
    "ht.s1": "Додай клавіатуру Dictra в Налаштуваннях і дозволь Повний доступ, щоб вона тебе чула.",
    "ht.s2": "Відкрий будь-який застосунок, перемкнися на Dictra й тисни мікрофон. Говори, як говориш завжди.",
    "ht.s3": "Слова одразу стають текстом. А ввімкнеш Переклад — замість них вставиться інша мова.",
    "ht.muted": "Під час першого запуску завантажиться одна мовна модель. Далі диктовка й переклад працюють офлайн.",

    // privacy.html
    "title.privacy": "Політика приватності — Dictra",
    "pr.h1": "Політика приватності",
    "pr.updated": "Останнє оновлення: 16 листопада 2026",
    "pr.intro": "Dictra не збирає твоїх персональних даних. Ось що це означає.",
    "pr.h.nodata": "Жодного збору даних",
    "pr.p.nodata": "У Dictra немає акаунтів, аналітики чи реклами. Ми не збираємо, не зберігаємо й не передаємо твоїх персональних даних. Ми ніколи не отримуємо ні твого голосу, ні розшифровок, ні перекладів.",
    "pr.h.ondevice": "Обробка на пристрої",
    "pr.p.ondevice": "Коли ти диктуєш, звук із мікрофона перетворюється на текст просто на iPhone, а потім зникає. Розпізнавання мовлення й переклад працюють локально, на самому пристрої. Ні звук, ні текст не йдуть ні до нас, ні до когось стороннього.",
    "pr.h.history": "Твоя історія диктовок",
    "pr.p.history": "Dictra може зберігати історію диктовок, щоб ти міг повертатися до них. Вона лежить тільки на твоєму пристрої — у приватному сховищі застосунку, спільному з клавіатурою Dictra. Очистити її можна будь-коли в застосунку, а видалиш застосунок — зникне й вона.",
    "pr.h.mic": "Мікрофон і Повний доступ",
    "pr.p.mic": "Клавіатурі потрібен «Повний доступ», щоб дотягнутися до мікрофона й чути твою диктовку. Повний доступ потрібен лише для цього. Клавіатура не стежить за натисканнями клавіш і нічого не надсилає в мережу.",
    "pr.h.models": "Мовні моделі",
    "pr.p.models": "Коли ти вперше запускаєш Dictra, вона завантажує модель розпізнавання мовлення від постачальника (Hugging Face — для моделей WhisperKit і Parakeet), щоб далі розпізнавати офлайн. Це завантаження тягне лише саму модель і не надсилає ні звук, ні текст, ні дані про тебе.",
    "pr.h.translation": "Переклад",
    "pr.p.translation": "Переклад працює через вбудований переклад Apple — просто на iPhone. Apple може завантажувати мовні пакети на пристрій; як вона з цим поводиться, дивись у політиці приватності Apple. А на власні сервери Dictra твого тексту не надсилає.",
    "pr.h.sharing": "Жодної передачі даних",
    "pr.p.sharing": "Dictra не збирає персональних даних, тож продавати, передавати чи розкривати нема чого.",
    "pr.h.children": "Діти",
    "pr.p.children": "Dictra безпечна в будь-якому віці й ні від кого не збирає даних — зокрема від дітей.",
    "pr.h.changes": "Зміни",
    "pr.p.changes": "Якщо політика зміниться, ми оновимо цю сторінку й дату вгорі.",
    "pr.h.contact": "Контакти",
    "pr.p.contact": "Питання? Пиши на <a href=\"mailto:kosyi.vlad@gmail.com\">kosyi.vlad@gmail.com</a>.",

    // support.html
    "title.support": "Підтримка — Dictra",
    "sp.h1": "Підтримка",
    "sp.updated": "Налаштуй Dictra або напиши нам.",
    "sp.q1": "Як додати клавіатуру Dictra?",
    "sp.a1": "Відкрий Налаштування → Основні → Клавіатура → Клавіатури → Додати клавіатуру і вибери Dictra. Далі перемикайся на неї глобусом у будь-якому застосунку.",
    "sp.q2": "Навіщо їй Повний доступ?",
    "sp.a2": "Повний доступ дає клавіатурі дотягнутися до мікрофона й чути твою диктовку. Тільки для цього. Dictra не стежить за натисканнями клавіш і нічого не надсилає в мережу.",
    "sp.q3": "Чи працює офлайн?",
    "sp.a3": "Так. Під час першого запуску Dictra завантажує одну мовну модель. Далі диктовка й переклад працюють на iPhone без інтернету.",
    "sp.q4": "Які мови підтримуються?",
    "sp.a4": "Диктовка українською, російською, польською та англійською. Переклад — у будь-якому напрямку між ними: говори однією мовою, а вставляй іншою.",
    "sp.q5": "Де зберігається моя історія диктовок?",
    "sp.a5": "Тільки на твоєму пристрої. Очистити можна будь-коли в застосунку, а видалиш застосунок — зникне й вона. Нікуди нічого не йде.",
    "sp.q6": "Клавіатура мене не чує",
    "sp.a6": "Перевір, чи ввімкнено для Dictra Повний доступ у Налаштування → Основні → Клавіатура → Клавіатури → Dictra, і чи дозволено застосунку доступ до Мікрофона.",
    "sp.contact.label": "Контакти",
    "sp.contact.muted": "Питання, баги чи відгуки — надсилай сюди."
  };

  var EN = {};      // English originals captured from the HTML, keyed like UK
  var nodes = [];   // [{ key, el }]

  function collect() {
    var list = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      var key = el.getAttribute("data-i18n");
      if (!(key in EN)) EN[key] = el.innerHTML;
      nodes.push({ key: key, el: el });
    }
  }

  function apply(lang) {
    var isUK = lang === "uk";
    document.documentElement.setAttribute("lang", isUK ? "uk" : "en");
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var val = isUK && (n.key in UK) ? UK[n.key] : EN[n.key];
      if (n.el.innerHTML !== val) n.el.innerHTML = val;
    }
    var btns = document.querySelectorAll("[data-setlang]");
    for (var j = 0; j < btns.length; j++) {
      var pressed = btns[j].getAttribute("data-setlang") === lang;
      btns[j].setAttribute("aria-pressed", pressed ? "true" : "false");
    }
    try { localStorage.setItem("dictra-lang", lang); } catch (e) {}
  }

  function initial() {
    var saved = null;
    try { saved = localStorage.getItem("dictra-lang"); } catch (e) {}
    if (saved === "uk" || saved === "en") return saved;
    var nav = (navigator.language || navigator.userLanguage || "").toLowerCase();
    return nav.indexOf("uk") === 0 ? "uk" : "en";
  }

  function start() {
    collect();
    var btns = document.querySelectorAll("[data-setlang]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        apply(this.getAttribute("data-setlang"));
      });
    }
    apply(initial());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
