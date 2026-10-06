
/* ---------- language / i18n ---------- */

const I18N={
  fa:{
    dir:"rtl", locale:"fa-IR", font:'"Vazirmatn",Tahoma,"Segoe UI",sans-serif',
    days:["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه"],
    today:"امروز", planner:"برنامه‌ریز هفتگی", settings:"تنظیمات",
    close:"بستن", displayMode:"حالت نمایش", systemDesc:"«سیستم» یعنی هر چی گوشی یا کامپیوترت روشه",
    system:"سیستم", light:"روز", dark:"شب", themeColor:"رنگ تم",
    themeDesc:"رنگ دکمه‌ها، حلقه‌ها و پس‌زمینه عوض می‌شود",
    radius:"گردی گوشه‌ها", less:"کمتر", more:"بیشتر",
    data:"داده‌ها", noUndo:"این کار برگشت ندارد", clear:"پاک کردن همه‌ی کارها",
    clearConfirm:"مطمئنی؟ دوباره بزن تا پاک شود", cleared:"پاک شد ✓",
    newTask:"کار جدید بنویس…", hour:"ساعت", add:"افزودن",
    focus:"تایمر تمرکز", start:"شروع", reset:"ریست", resume:"ادامه", stop:"توقف",
    customMinutes:"دقیقه دلخواه:", example:"مثلاً ۳۰", minute:"دقیقه", minuteShort:"دقیقه",
    program:"برنامه", done:"انجام شد", delete:"حذف",
    empty:"هنوز کاری برای این روز ننوشتی. یکی اضافه کن",
    languageTitle:"زبان", languageDesc:"زبان کل برنامه را تغییر می‌دهد",
    creatorTitle:"سازنده", creatorName:"مهدی برخوردار", creatorDesc:"ساخته شده با دقت و عشق به جزئیات",
    title:"برنامه‌ریز هفتگی"
  },
  en:{
    dir:"ltr", locale:"en-US", font:'"Segoe UI",Arial,sans-serif',
    days:["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"],
    today:"Today", planner:"Weekly Planner", settings:"Settings",
    close:"Close", displayMode:"Display mode", systemDesc:"System follows your phone or computer",
    system:"System", light:"Light", dark:"Dark", themeColor:"Theme color",
    themeDesc:"Changes button, ring and background colors",
    radius:"Corner radius", less:"Less", more:"More",
    data:"Data", noUndo:"This action cannot be undone", clear:"Clear all tasks",
    clearConfirm:"Are you sure? Click again to clear", cleared:"Cleared ✓",
    newTask:"Write a new task…", hour:"Time", add:"Add",
    focus:"Focus timer", start:"Start", reset:"Reset", resume:"Resume", stop:"Stop",
    customMinutes:"Custom minutes:", example:"e.g. 30", minute:"min", minuteShort:"min",
    program:"Plan", done:"Done", delete:"Delete",
    empty:"No tasks for this day yet. Add one",
    languageTitle:"Language", languageDesc:"Changes the language of the whole app",
    creatorTitle:"Creator", creatorName:"Mahdi Barkhordar", creatorDesc:"Made with care and attention to detail",
    title:"Weekly Planner"
  },
  fr:{
    dir:"ltr", locale:"fr-FR", font:'"Segoe UI",Arial,sans-serif',
    days:["Samedi","Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi"],
    today:"Aujourd’hui", planner:"Planificateur hebdomadaire", settings:"Paramètres",
    close:"Fermer", displayMode:"Mode d’affichage", systemDesc:"« Système » suit votre appareil",
    system:"Système", light:"Clair", dark:"Sombre", themeColor:"Couleur du thème",
    themeDesc:"Change les couleurs des boutons, anneaux et arrière-plans",
    radius:"Rayon des coins", less:"Moins", more:"Plus",
    data:"Données", noUndo:"Cette action est irréversible", clear:"Effacer toutes les tâches",
    clearConfirm:"Confirmer ? Cliquez encore pour effacer", cleared:"Effacé ✓",
    newTask:"Écrire une nouvelle tâche…", hour:"Heure", add:"Ajouter",
    focus:"Minuteur de concentration", start:"Démarrer", reset:"Réinitialiser", resume:"Reprendre", stop:"Arrêter",
    customMinutes:"Minutes personnalisées :", example:"ex. 30", minute:"min", minuteShort:"min",
    program:"Programme", done:"Terminé", delete:"Supprimer",
    empty:"Aucune tâche pour ce jour. Ajoutez-en une",
    languageTitle:"Langue", languageDesc:"Change la langue de toute l’application",
    creatorTitle:"Créateur", creatorName:"Mahdi Barkhordar", creatorDesc:"Créé avec soin et attention aux détails",
    title:"Planificateur hebdomadaire"
  },
  ar:{
    dir:"rtl", locale:"ar-SA", font:'"Segoe UI",Tahoma,Arial,sans-serif',
    days:["السبت","الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة"],
    today:"اليوم", planner:"المخطط الأسبوعي", settings:"الإعدادات",
    close:"إغلاق", displayMode:"وضع العرض", systemDesc:"«النظام» يتبع إعداد جهازك",
    system:"النظام", light:"نهاري", dark:"ليلي", themeColor:"لون السمة",
    themeDesc:"يغيّر ألوان الأزرار والحلقات والخلفية",
    radius:"استدارة الزوايا", less:"أقل", more:"أكثر",
    data:"البيانات", noUndo:"لا يمكن التراجع عن هذا الإجراء", clear:"مسح جميع المهام",
    clearConfirm:"هل أنت متأكد؟ اضغط مرة أخرى للمسح", cleared:"تم المسح ✓",
    newTask:"اكتب مهمة جديدة…", hour:"الوقت", add:"إضافة",
    focus:"مؤقت التركيز", start:"ابدأ", reset:"إعادة ضبط", resume:"متابعة", stop:"إيقاف",
    customMinutes:"دقائق مخصصة:", example:"مثلاً 30", minute:"دقيقة", minuteShort:"دقيقة",
    program:"خطة", done:"تم", delete:"حذف",
    empty:"لا توجد مهام لهذا اليوم. أضف واحدة",
    languageTitle:"اللغة", languageDesc:"يغيّر لغة التطبيق بالكامل",
    creatorTitle:"المنشئ", creatorName:"Mahdi Barkhordar", creatorDesc:"صُنع بعناية واهتمام بالتفاصيل",
    title:"المخطط الأسبوعي"
  },
  ru:{
    dir:"ltr", locale:"ru-RU", font:'"Segoe UI",Arial,sans-serif',
    days:["Суббота","Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница"],
    today:"Сегодня", planner:"Недельный планировщик", settings:"Настройки",
    close:"Закрыть", displayMode:"Режим отображения", systemDesc:"«Система» использует настройки устройства",
    system:"Система", light:"Светлая", dark:"Тёмная", themeColor:"Цвет темы",
    themeDesc:"Меняет цвета кнопок, колец и фона",
    radius:"Скругление углов", less:"Меньше", more:"Больше",
    data:"Данные", noUndo:"Это действие нельзя отменить", clear:"Удалить все задачи",
    clearConfirm:"Уверены? Нажмите ещё раз для удаления", cleared:"Удалено ✓",
    newTask:"Напишите новую задачу…", hour:"Время", add:"Добавить",
    focus:"Таймер фокусировки", start:"Старт", reset:"Сброс", resume:"Продолжить", stop:"Стоп",
    customMinutes:"Свои минуты:", example:"например, 30", minute:"мин", minuteShort:"мин",
    program:"План", done:"Выполнено", delete:"Удалить",
    empty:"На этот день задач пока нет. Добавьте одну",
    languageTitle:"Язык", languageDesc:"Меняет язык всего приложения",
    creatorTitle:"Создатель", creatorName:"Mahdi Barkhordar", creatorDesc:"Создано с вниманием к деталям",
    title:"Недельный планировщик"
  },
  zh:{
    dir:"ltr", locale:"zh-CN", font:'"Segoe UI","Microsoft YaHei",Arial,sans-serif',
    days:["星期六","星期日","星期一","星期二","星期三","星期四","星期五"],
    today:"今天", planner:"每周计划", settings:"设置",
    close:"关闭", displayMode:"显示模式", systemDesc:"“系统”跟随你的设备设置",
    system:"系统", light:"浅色", dark:"深色", themeColor:"主题颜色",
    themeDesc:"更改按钮、环形进度和背景颜色",
    radius:"圆角", less:"小", more:"大",
    data:"数据", noUndo:"此操作无法撤销", clear:"清除所有任务",
    clearConfirm:"确定吗？再次点击即可清除", cleared:"已清除 ✓",
    newTask:"输入新任务…", hour:"时间", add:"添加",
    focus:"专注计时器", start:"开始", reset:"重置", resume:"继续", stop:"停止",
    customMinutes:"自定义分钟：", example:"例如 30", minute:"分钟", minuteShort:"分钟",
    program:"计划", done:"已完成", delete:"删除",
    empty:"这一天还没有任务。添加一个吧",
    languageTitle:"语言", languageDesc:"更改整个应用的语言",
    creatorTitle:"制作者", creatorName:"Mahdi Barkhordar", creatorDesc:"用心制作，注重细节",
    title:"每周计划"
  }
};

/* ---------- extra strings for personalization ---------- */
const I18N_EXTRA={
  fa:{
    fontSize:"اندازه نوشته‌ها", fontSizeDesc:"همه‌ی متن‌های برنامه بزرگ یا کوچک می‌شوند",
    density:"تراکم لیست", densityDesc:"فاصله‌ی بین کارها را کم یا زیاد کن", cozy:"راحت", compact:"فشرده",
    glass:"محوشدگی شیشه", glassDesc:"میزان تاری پشت کارت‌ها",
    firstDay:"شروع هفته", firstDayDesc:"هفته از کدام روز شروع شود",
    digits:"نوع اعداد", digitsDesc:"اعداد فارسی یا انگلیسی",
    hideDone:"مخفی کردن کارهای انجام‌شده", hideDoneDesc:"فقط کارهای باقی‌مانده دیده می‌شوند",
    sound:"صدای پایان تایمر", soundDesc:"وقتی زمان تمام شد بوق بزند",
    blobs:"حباب‌های پس‌زمینه", blobsDesc:"لکه‌های رنگی پشت صفحه",
    h12:"ساعت ۱۲ ساعته", h12Desc:"نمایش ساعت با صبح و عصر",
    showSec:"نمایش ثانیه", showSecDesc:"در ساعت بالای صفحه",
    dataDesc:"از کارها و تنظیماتت فایل پشتیبان بگیر یا برگردان",
    export:"دریافت فایل پشتیبان", import:"بازگردانی از فایل",
    resetPrefs:"بازنشانی ظاهر و تنظیمات", resetConfirm:"مطمئنی؟ دوباره بزن",
    prefsReset:"بازنشانی شد ✓", exported:"فایل ذخیره شد ✓", imported:"بازگردانی شد ✓",
    importFail:"فایل معتبر نیست", allDone:"همه‌ی کارهای این روز انجام شده ✓"
  },
  en:{
    fontSize:"Text size", fontSizeDesc:"Makes all text in the app bigger or smaller",
    density:"List density", densityDesc:"Tighten or loosen the space between tasks", cozy:"Cozy", compact:"Compact",
    glass:"Glass blur", glassDesc:"How blurry the cards are",
    firstDay:"Week starts on", firstDayDesc:"Choose the first day of your week",
    digits:"Digits", digitsDesc:"Local or Western digits",
    hideDone:"Hide completed tasks", hideDoneDesc:"Only tasks that are left are shown",
    sound:"Timer sound", soundDesc:"Beep when the timer ends",
    blobs:"Background blobs", blobsDesc:"Soft colored glows behind the page",
    h12:"12-hour clock", h12Desc:"Show the clock with AM/PM",
    showSec:"Show seconds", showSecDesc:"In the clock at the top",
    dataDesc:"Back up or restore your tasks and settings",
    export:"Download backup", import:"Restore from file",
    resetPrefs:"Reset look & settings", resetConfirm:"Sure? Click again",
    prefsReset:"Reset ✓", exported:"Saved ✓", imported:"Restored ✓",
    importFail:"Invalid file", allDone:"Everything is done for this day ✓"
  },
  fr:{
    fontSize:"Taille du texte", fontSizeDesc:"Agrandit ou réduit tout le texte de l’application",
    density:"Densité de la liste", densityDesc:"Resserre ou aère l’espace entre les tâches", cozy:"Aéré", compact:"Compact",
    glass:"Flou du verre", glassDesc:"Niveau de flou des cartes",
    firstDay:"Début de semaine", firstDayDesc:"Choisissez le premier jour de la semaine",
    digits:"Chiffres", digitsDesc:"Chiffres locaux ou occidentaux",
    hideDone:"Masquer les tâches terminées", hideDoneDesc:"Seules les tâches restantes sont affichées",
    sound:"Son du minuteur", soundDesc:"Bip à la fin du minuteur",
    blobs:"Halos d’arrière-plan", blobsDesc:"Lueurs colorées derrière la page",
    h12:"Horloge 12 heures", h12Desc:"Afficher l’heure avec AM/PM",
    showSec:"Afficher les secondes", showSecDesc:"Dans l’horloge en haut",
    dataDesc:"Sauvegardez ou restaurez vos tâches et réglages",
    export:"Télécharger la sauvegarde", import:"Restaurer depuis un fichier",
    resetPrefs:"Réinitialiser l’apparence", resetConfirm:"Sûr ? Cliquez encore",
    prefsReset:"Réinitialisé ✓", exported:"Enregistré ✓", imported:"Restauré ✓",
    importFail:"Fichier invalide", allDone:"Tout est terminé pour ce jour ✓"
  },
  ar:{
    fontSize:"حجم النص", fontSizeDesc:"يكبّر أو يصغّر كل النصوص في التطبيق",
    density:"كثافة القائمة", densityDesc:"قلّل أو زد المسافة بين المهام", cozy:"مريح", compact:"مضغوط",
    glass:"ضبابية الزجاج", glassDesc:"مقدار ضبابية البطاقات",
    firstDay:"بداية الأسبوع", firstDayDesc:"اختر أول يوم في الأسبوع",
    digits:"نوع الأرقام", digitsDesc:"أرقام عربية أو لاتينية",
    hideDone:"إخفاء المهام المنجزة", hideDoneDesc:"تظهر المهام المتبقية فقط",
    sound:"صوت المؤقت", soundDesc:"صافرة عند انتهاء المؤقت",
    blobs:"بقع الخلفية", blobsDesc:"توهجات ملونة خلف الصفحة",
    h12:"ساعة 12 ساعة", h12Desc:"عرض الوقت مع ص/م",
    showSec:"إظهار الثواني", showSecDesc:"في الساعة أعلى الصفحة",
    dataDesc:"انسخ مهامك وإعداداتك احتياطيًا أو استعدها",
    export:"تنزيل النسخة الاحتياطية", import:"استعادة من ملف",
    resetPrefs:"إعادة ضبط المظهر والإعدادات", resetConfirm:"هل أنت متأكد؟ اضغط مرة أخرى",
    prefsReset:"تمت إعادة الضبط ✓", exported:"تم الحفظ ✓", imported:"تمت الاستعادة ✓",
    importFail:"ملف غير صالح", allDone:"تم إنجاز كل شيء في هذا اليوم ✓"
  },
  ru:{
    fontSize:"Размер текста", fontSizeDesc:"Увеличивает или уменьшает весь текст в приложении",
    density:"Плотность списка", densityDesc:"Меньше или больше места между задачами", cozy:"Свободно", compact:"Компактно",
    glass:"Размытие стекла", glassDesc:"Насколько размыты карточки",
    firstDay:"Начало недели", firstDayDesc:"Выберите первый день недели",
    digits:"Цифры", digitsDesc:"Местные или западные цифры",
    hideDone:"Скрывать выполненные", hideDoneDesc:"Показываются только оставшиеся задачи",
    sound:"Звук таймера", soundDesc:"Сигнал по окончании таймера",
    blobs:"Фоновые пятна", blobsDesc:"Мягкие цветные отблески за страницей",
    h12:"12-часовые часы", h12Desc:"Показывать время с AM/PM",
    showSec:"Показывать секунды", showSecDesc:"В часах вверху страницы",
    dataDesc:"Сохраните или восстановите задачи и настройки",
    export:"Скачать резервную копию", import:"Восстановить из файла",
    resetPrefs:"Сбросить вид и настройки", resetConfirm:"Уверены? Нажмите ещё раз",
    prefsReset:"Сброшено ✓", exported:"Сохранено ✓", imported:"Восстановлено ✓",
    importFail:"Неверный файл", allDone:"На этот день всё выполнено ✓"
  },
  zh:{
    fontSize:"文字大小", fontSizeDesc:"放大或缩小应用内所有文字",
    density:"列表密度", densityDesc:"调整任务之间的间距", cozy:"宽松", compact:"紧凑",
    glass:"玻璃模糊度", glassDesc:"卡片背景的模糊程度",
    firstDay:"每周起始日", firstDayDesc:"选择一周的第一天",
    digits:"数字样式", digitsDesc:"本地数字或西方数字",
    hideDone:"隐藏已完成任务", hideDoneDesc:"只显示剩余的任务",
    sound:"计时器提示音", soundDesc:"计时结束时发出提示音",
    blobs:"背景光斑", blobsDesc:"页面后方柔和的彩色光晕",
    h12:"12 小时制", h12Desc:"时钟显示上午/下午",
    showSec:"显示秒数", showSecDesc:"在页面顶部的时钟中",
    dataDesc:"备份或恢复你的任务和设置",
    export:"下载备份", import:"从文件恢复",
    resetPrefs:"重置外观和设置", resetConfirm:"确定吗？再点一次",
    prefsReset:"已重置 ✓", exported:"已保存 ✓", imported:"已恢复 ✓",
    importFail:"文件无效", allDone:"这一天的任务都完成了 ✓"
  }
};
Object.assign(I18N_EXTRA.fa,{worldClock:"ساعت جهانی",worldClockDesc:"زمان شهرهای مختلف را همزمان ببین و شهرهای دلخواهت را انتخاب کن",yesterday:"دیروز",tomorrow:"فردا",noCities:"هنوز شهری انتخاب نکرده‌ای"});
Object.assign(I18N_EXTRA.en,{worldClock:"World clock",worldClockDesc:"See the time in several cities at once and pick your own",yesterday:"Yesterday",tomorrow:"Tomorrow",noCities:"No cities selected yet"});
Object.assign(I18N_EXTRA.fr,{worldClock:"Horloge mondiale",worldClockDesc:"Voyez l’heure de plusieurs villes à la fois et choisissez les vôtres",yesterday:"Hier",tomorrow:"Demain",noCities:"Aucune ville sélectionnée"});
Object.assign(I18N_EXTRA.ar,{worldClock:"الساعة العالمية",worldClockDesc:"شاهد الوقت في عدة مدن معًا واختر مدنك",yesterday:"أمس",tomorrow:"غدًا",noCities:"لم تختر أي مدينة بعد"});
Object.assign(I18N_EXTRA.ru,{worldClock:"Мировое время",worldClockDesc:"Смотрите время сразу в нескольких городах и выбирайте свои",yesterday:"Вчера",tomorrow:"Завтра",noCities:"Города пока не выбраны"});
Object.assign(I18N_EXTRA.zh,{worldClock:"世界时钟",worldClockDesc:"同时查看多个城市的时间，并自选城市",yesterday:"昨天",tomorrow:"明天",noCities:"尚未选择城市"});
Object.assign(I18N_EXTRA.fa,{worldClockDesc:"ساعت چند شهر را ببین. با دکمه‌ی سنجاق یکی را برای ساعت بالای صفحه انتخاب کن",localTime:"ساعت دستگاه",pinHeader:"نمایش در ساعت بالای صفحه"});
Object.assign(I18N_EXTRA.en,{worldClockDesc:"See the time in several cities. Use the pin to show one of them in the header clock",localTime:"Device time",pinHeader:"Show in header clock"});
Object.assign(I18N_EXTRA.fr,{worldClockDesc:"Voyez l’heure de plusieurs villes. Épinglez-en une pour l’afficher dans l’horloge de l’en-tête",localTime:"Heure de l’appareil",pinHeader:"Afficher dans l’horloge de l’en-tête"});
Object.assign(I18N_EXTRA.ar,{worldClockDesc:"شاهد الوقت في عدة مدن. ثبّت إحداها لتظهر في ساعة أعلى الصفحة",localTime:"وقت الجهاز",pinHeader:"عرض في ساعة أعلى الصفحة"});
Object.assign(I18N_EXTRA.ru,{worldClockDesc:"Смотрите время в нескольких городах. Закрепите один, чтобы он показывался в часах вверху страницы",localTime:"Время устройства",pinHeader:"Показать в часах вверху"});
Object.assign(I18N_EXTRA.zh,{worldClockDesc:"查看多个城市的时间，用图钉把其中一个显示在顶部时钟上",localTime:"设备时间",pinHeader:"显示在顶部时钟"});
Object.assign(I18N_EXTRA.fa,{tpMinute:"دقیقه",tpPeriod:"ق.ظ / ب.ظ",tpClear:"پاک کردن زمان",stepUp:"یک دقیقه بیشتر",stepDown:"یک دقیقه کمتر"});
Object.assign(I18N_EXTRA.en,{tpMinute:"Minute",tpPeriod:"AM / PM",tpClear:"Clear time",stepUp:"One minute more",stepDown:"One minute less"});
Object.assign(I18N_EXTRA.fr,{tpMinute:"Minute",tpPeriod:"AM / PM",tpClear:"Effacer l’heure",stepUp:"Une minute de plus",stepDown:"Une minute de moins"});
Object.assign(I18N_EXTRA.ar,{tpMinute:"الدقيقة",tpPeriod:"ص / م",tpClear:"مسح الوقت",stepUp:"دقيقة أكثر",stepDown:"دقيقة أقل"});
Object.assign(I18N_EXTRA.ru,{tpMinute:"Минута",tpPeriod:"AM / PM",tpClear:"Сбросить время",stepUp:"На минуту больше",stepDown:"На минуту меньше"});
Object.assign(I18N_EXTRA.zh,{tpMinute:"分钟",tpPeriod:"上午 / 下午",tpClear:"清除时间",stepUp:"增加一分钟",stepDown:"减少一分钟"});
Object.assign(I18N_EXTRA.fa,{dragHandle:"کشیدن برای جابه‌جایی (یا Alt و کلیدهای جهت‌دار)",sortTime:"مرتب‌سازی بر اساس ساعت",doneBottom:"انجام‌شده‌ها به پایین",moveTo:"انتقال به"});
Object.assign(I18N_EXTRA.en,{dragHandle:"Drag to reorder (or use the arrow keys)",sortTime:"Sort by time",doneBottom:"Move completed to bottom",moveTo:"Move to"});
Object.assign(I18N_EXTRA.fr,{dragHandle:"Glisser pour réordonner (ou flèches du clavier)",sortTime:"Trier par heure",doneBottom:"Terminées en bas",moveTo:"Déplacer vers"});
Object.assign(I18N_EXTRA.ar,{dragHandle:"اسحب لإعادة الترتيب (أو استخدم الأسهم)",sortTime:"ترتيب حسب الوقت",doneBottom:"المنجزة إلى الأسفل",moveTo:"نقل إلى"});
Object.assign(I18N_EXTRA.ru,{dragHandle:"Перетащите, чтобы изменить порядок (или стрелки)",sortTime:"Сортировать по времени",doneBottom:"Выполненные вниз",moveTo:"Перенести на"});
Object.assign(I18N_EXTRA.zh,{dragHandle:"拖动排序（或使用方向键）",sortTime:"按时间排序",doneBottom:"已完成移到底部",moveTo:"移到"});
Object.assign(I18N_EXTRA.fa,{editTask:"ویرایش کار",editSave:"ذخیره",editCancel:"انصراف",undo:"بازگردانی",deletedMsg:"کار حذف شد",removedN:"{n} کار حذف شد",movedN:"{n} کار به {day} منتقل شد",clearDone:"حذف انجام‌شده‌ها",carryOver:"انتقال ناتمام‌ها به روز بعد"});
Object.assign(I18N_EXTRA.en,{editTask:"Edit task",editSave:"Save",editCancel:"Cancel",undo:"Undo",deletedMsg:"Task deleted",removedN:"{n} tasks removed",movedN:"{n} tasks moved to {day}",clearDone:"Remove completed",carryOver:"Move unfinished to next day"});
Object.assign(I18N_EXTRA.fr,{editTask:"Modifier la tâche",editSave:"Enregistrer",editCancel:"Abandonner",undo:"Annuler",deletedMsg:"Tâche supprimée",removedN:"{n} tâches supprimées",movedN:"{n} tâches déplacées vers {day}",clearDone:"Supprimer les terminées",carryOver:"Reporter les non terminées au lendemain"});
Object.assign(I18N_EXTRA.ar,{editTask:"تعديل المهمة",editSave:"حفظ",editCancel:"إلغاء",undo:"تراجع",deletedMsg:"تم حذف المهمة",removedN:"تم حذف {n} مهام",movedN:"تم نقل {n} مهام إلى {day}",clearDone:"حذف المنجزة",carryOver:"نقل غير المنجزة لليوم التالي"});
Object.assign(I18N_EXTRA.ru,{editTask:"Изменить задачу",editSave:"Сохранить",editCancel:"Отмена",undo:"Отменить",deletedMsg:"Задача удалена",removedN:"Удалено задач: {n}",movedN:"Задач перенесено на {day}: {n}",clearDone:"Удалить выполненные",carryOver:"Перенести невыполненные на завтра"});
Object.assign(I18N_EXTRA.zh,{editTask:"编辑任务",editSave:"保存",editCancel:"取消",undo:"撤销",deletedMsg:"任务已删除",removedN:"已删除 {n} 项任务",movedN:"已将 {n} 项任务移到{day}",clearDone:"删除已完成",carryOver:"未完成顺延到明天"});
Object.assign(I18N_EXTRA.fa,{customColor:"دلخواه",fontTitle:"فونت برنامه",fontDesc:"ظاهر نوشته‌ها را عوض کن",fontAuto:"خودکار",fontSystem:"سیستم",fontRounded:"گرد",fontSerif:"کتابی",fontMono:"تایپ‌رایتر",bgTitle:"الگوی پس‌زمینه",bgDesc:"یک بافت ظریف پشت صفحه",bgNone:"ساده",bgDots:"نقطه‌ای",bgGrid:"شبکه‌ای",bgNoise:"دانه‌دار",rowTitle:"سبک ردیف‌ها",rowDesc:"ظاهر کارت هر کار",rowGlass:"شیشه‌ای",rowFlat:"تخت",rowOutline:"خطی",finishTitle:"جزئیات پایانی",finishDesc:"ظاهر کارهای انجام‌شده",doneStrike:"خط‌خورده",doneDim:"کم‌رنگ",confetti:"جشن پایان کارها",confettiDesc:"وقتی همه‌ی کارهای روز تیک خورد کاغذرنگی می‌پاشد"});
Object.assign(I18N_EXTRA.en,{customColor:"Custom",fontTitle:"App font",fontDesc:"Change how text looks",fontAuto:"Auto",fontSystem:"System",fontRounded:"Rounded",fontSerif:"Serif",fontMono:"Mono",bgTitle:"Background pattern",bgDesc:"A subtle texture behind the page",bgNone:"Plain",bgDots:"Dots",bgGrid:"Grid",bgNoise:"Grain",rowTitle:"Row style",rowDesc:"How each task card looks",rowGlass:"Glass",rowFlat:"Flat",rowOutline:"Outline",finishTitle:"Finishing touches",finishDesc:"How completed tasks look",doneStrike:"Strike",doneDim:"Dim",confetti:"Celebrate",confettiDesc:"Confetti when every task of the day is done"});
Object.assign(I18N_EXTRA.fr,{customColor:"Perso",fontTitle:"Police",fontDesc:"Change l’apparence du texte",fontAuto:"Auto",fontSystem:"Système",fontRounded:"Arrondie",fontSerif:"Serif",fontMono:"Mono",bgTitle:"Motif de fond",bgDesc:"Une texture discrète derrière la page",bgNone:"Uni",bgDots:"Points",bgGrid:"Grille",bgNoise:"Grain",rowTitle:"Style des lignes",rowDesc:"Apparence de chaque tâche",rowGlass:"Verre",rowFlat:"Plat",rowOutline:"Contour",finishTitle:"Finitions",finishDesc:"Apparence des tâches terminées",doneStrike:"Barré",doneDim:"Estompé",confetti:"Célébrer",confettiDesc:"Des confettis quand tout est fait"});
Object.assign(I18N_EXTRA.ar,{customColor:"مخصص",fontTitle:"خط التطبيق",fontDesc:"غيّر شكل النصوص",fontAuto:"تلقائي",fontSystem:"النظام",fontRounded:"مستدير",fontSerif:"سيريف",fontMono:"أحادي",bgTitle:"نمط الخلفية",bgDesc:"نسيج خفيف خلف الصفحة",bgNone:"سادة",bgDots:"نقاط",bgGrid:"شبكة",bgNoise:"حبيبات",rowTitle:"نمط الصفوف",rowDesc:"شكل بطاقة كل مهمة",rowGlass:"زجاجي",rowFlat:"مسطح",rowOutline:"إطار",finishTitle:"لمسات أخيرة",finishDesc:"شكل المهام المنجزة",doneStrike:"شطب",doneDim:"تعتيم",confetti:"احتفال",confettiDesc:"قصاصات ملونة عند إنجاز كل مهام اليوم"});
Object.assign(I18N_EXTRA.ru,{customColor:"Свой",fontTitle:"Шрифт",fontDesc:"Меняет вид текста",fontAuto:"Авто",fontSystem:"Системный",fontRounded:"Круглый",fontSerif:"С засечками",fontMono:"Моно",bgTitle:"Узор фона",bgDesc:"Тонкая текстура за страницей",bgNone:"Нет",bgDots:"Точки",bgGrid:"Сетка",bgNoise:"Зерно",rowTitle:"Стиль строк",rowDesc:"Как выглядит карточка задачи",rowGlass:"Стекло",rowFlat:"Плоский",rowOutline:"Контур",finishTitle:"Детали",finishDesc:"Как выглядят выполненные задачи",doneStrike:"Зачёркнуто",doneDim:"Приглушено",confetti:"Праздник",confettiDesc:"Конфетти, когда все задачи дня выполнены"});
Object.assign(I18N_EXTRA.zh,{customColor:"自定义",fontTitle:"字体",fontDesc:"更改文字外观",fontAuto:"自动",fontSystem:"系统",fontRounded:"圆体",fontSerif:"衬线",fontMono:"等宽",bgTitle:"背景图案",bgDesc:"页面后方的细腻纹理",bgNone:"无",bgDots:"圆点",bgGrid:"网格",bgNoise:"颗粒",rowTitle:"行样式",rowDesc:"每个任务卡片的外观",rowGlass:"玻璃",rowFlat:"扁平",rowOutline:"描边",finishTitle:"收尾细节",finishDesc:"已完成任务的外观",doneStrike:"删除线",doneDim:"淡化",confetti:"庆祝",confettiDesc:"当天任务全部完成时撒彩纸"});
Object.assign(I18N_EXTRA.fa,{planned:"برنامه‌ریزی‌شده",starred:"مهم‌ها",dayView:"روز",weekView:"هفته",starTip:"علامت مهم",durLabel:"مدت",clashTip:"با «{x}» تداخل دارد"});
Object.assign(I18N_EXTRA.en,{planned:"Planned",starred:"Starred",dayView:"Day",weekView:"Week",starTip:"Mark as important",durLabel:"Duration",clashTip:"Overlaps with “{x}”"});
Object.assign(I18N_EXTRA.fr,{planned:"Planifié",starred:"Importantes",dayView:"Jour",weekView:"Semaine",starTip:"Marquer comme importante",durLabel:"Durée",clashTip:"Chevauche « {x} »"});
Object.assign(I18N_EXTRA.ar,{planned:"المخطط",starred:"المهمة",dayView:"اليوم",weekView:"الأسبوع",starTip:"تمييز كمهمة",durLabel:"المدة",clashTip:"يتداخل مع «{x}»"});
Object.assign(I18N_EXTRA.ru,{planned:"Запланировано",starred:"Важные",dayView:"День",weekView:"Неделя",starTip:"Отметить как важное",durLabel:"Длительность",clashTip:"Пересекается с «{x}»"});
Object.assign(I18N_EXTRA.zh,{planned:"已计划",starred:"重要",dayView:"日",weekView:"周",starTip:"标记为重要",durLabel:"时长",clashTip:"与“{x}”重叠"});
Object.assign(I18N_EXTRA.fa,{starOnly:"فقط مهم‌ها"});
Object.assign(I18N_EXTRA.en,{starOnly:"Starred only"});
Object.assign(I18N_EXTRA.fr,{starOnly:"Seulement les importantes"});
Object.assign(I18N_EXTRA.ar,{starOnly:"المهمة فقط"});
Object.assign(I18N_EXTRA.ru,{starOnly:"Только важные"});
Object.assign(I18N_EXTRA.zh,{starOnly:"仅显示重要"});
Object.keys(I18N_EXTRA).forEach(k=>Object.assign(I18N[k],I18N_EXTRA[k]));

function tr(key){
  return (I18N[currentLang]&&I18N[currentLang][key])||I18N.fa[key]||key;
}

function num(n){
  if(typeof prefs!=="undefined"&&prefs.dig==="latin") return String(n);
  if(currentLang==="fa")
    return String(n).replace(/\d/g,d=>"۰۱۲۳۴۵۶۷۸۹"[d]);
  if(currentLang==="ar")
    return String(n).replace(/\d/g,d=>"٠١٢٣٤٥٦٧٨٩"[d]);
  return String(n);
}

function getLang(){
  return I18N[currentLang]||I18N.fa;
}

function applyLanguage(){
  const L=getLang();
  const root=document.documentElement;

  root.lang=currentLang;
  root.dir=L.dir;
  document.body.style.fontFamily=L.font;
  $("today").dir=L.dir;

  document.title=tr("title");

  const staticMap={
    ".planner-title span":"planner",
    "#gear":"settings",
    "#sw":"displayMode",
    "#dayTitle":null,
    "#addBtn":"add",
    ".timer h2":"focus",
    "#go":"start",
    "#rs":"reset",
    ".custom":"customMinutes",
    "#task":"newTask",
    "#cm":"example",
    "#drawerTitle":"settings",
    "#close":"close"
  };

  Object.entries(staticMap).forEach(([sel,key])=>{
    const el=document.querySelector(sel);
    if(!el||!key) return;
    if(sel==="#gear"||sel==="#sw"||sel==="#close"){
      el.setAttribute("aria-label",tr(key));
    }else if(sel===".custom"){
      const input=el.querySelector("input");
      el.childNodes.forEach(n=>{
        if(n.nodeType===3 && n.textContent.trim()) n.textContent=tr(key)+" ";
      });
      if(input) input.placeholder=tr("example");
    }else{
      el.textContent=tr(key);
    }
  });

  $("task").placeholder=tr("newTask");
  mainTP.labels();
  $("toastUndo").textContent=tr("undo");
  [["sortTime","sortTime"],["doneBottom","doneBottom"],["clearDone","clearDone"],["carryOver","carryOver"],["starFilter","starOnly"]].forEach(([id,k])=>{
    const b=$(id);b.title=tr(k);b.setAttribute("aria-label",tr(k));
  });
  document.querySelectorAll(".stp-b").forEach(b=>{
    const t=tr(+b.dataset.d>0?"stepUp":"stepDown");
    b.setAttribute("aria-label",t);b.title=t;
  });
  $("cm").placeholder=tr("example");

  const segLabels={
    system:tr("system"),light:tr("light"),dark:tr("dark")
  };
  document.querySelectorAll("#seg button").forEach(b=>{
    const icon=b.querySelector("svg");
    const label=segLabels[b.dataset.m]||"";
    Array.from(b.childNodes).forEach(n=>{
      if(n.nodeType===3) n.textContent="";
    });
    b.append(icon,document.createTextNode(" "+label));
  });

  document.querySelector('[data-m="system"]')?.setAttribute("aria-label",tr("system"));
  document.querySelector('[data-m="light"]')?.setAttribute("aria-label",tr("light"));
  document.querySelector('[data-m="dark"]')?.setAttribute("aria-label",tr("dark"));

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.textContent=tr(el.dataset.i18n);
  });

  /* first-day buttons use the day names */
  document.querySelectorAll("#fdSeg button").forEach(b=>{
    b.textContent=L.days[+b.dataset.v];
  });

  /* local-digit sample only makes sense for fa / ar */
  const hasLocal=currentLang==="fa"||currentLang==="ar";
  $("digSec").style.display=hasLocal?"":"none";
  $("digLocal").textContent=currentLang==="ar"?"١٢٣":"۱۲۳";

  disarmers.forEach(f=>f());

  $("creatorTitle").textContent=tr("creatorTitle");
  $("creatorName").textContent=tr("creatorName");
  $("creatorDesc").textContent=tr("creatorDesc");

  document.querySelectorAll("#langSeg button").forEach(b=>{
    b.classList.toggle("on",b.dataset.lang===currentLang);
  });

  buildWorldChips();
  applyPrefs();
  render();
  updateDate();
  updateClock();
  drawSw();
  drawPresets();
  draw();
  syncPresets();
  refreshGo();
}

function currentMinutes(){
  return Math.max(1,Math.round(total/60));
}

function setLanguage(lang){
  if(!I18N[lang]) return;
  currentLang=lang;
  store.set("pl_lang",lang);
  applyLanguage();
}

document.querySelectorAll("#langSeg button").forEach(b=>{
  b.onclick=()=>setLanguage(b.dataset.lang);
});

const DAYS_PROXY=()=>getLang().days;

/* ---------- core planner ---------- */

const $=id=>document.getElementById(id);

const store={
  del(k){try{localStorage.removeItem(k)}catch(e){}},
  get(k){try{return localStorage.getItem(k)}catch(e){return null}},
  set(k,v){try{localStorage.setItem(k,v)}catch(e){}}
};

let currentLang=I18N[store.get("pl_lang")]?store.get("pl_lang"):"fa";

function cleanData(d){
  const out={};
  for(let i=0;i<7;i++){
    const a=(d&&Array.isArray(d[i]))?d[i]:[];
    const seen=new Set();
    out[i]=a.slice(0,500)
      .filter(t=>t&&typeof t.text==="string"&&t.text.trim())
      .map((t,k)=>({
        id:(()=>{let id=Number.isFinite(+t.id)?+t.id:Date.now()+k;while(seen.has(id))id++;seen.add(id);return id})(),
        text:t.text.trim().slice(0,120),
        time:/^\d{2}:\d{2}$/.test(t.time||"")?t.time:"",
        dur:Number.isFinite(+t.dur)?Math.min(1440,Math.max(0,Math.round(+t.dur))):0,
        star:t.star===true,
        done:!!t.done
      }));
  }
  return out;
}

let data={};
try{data=cleanData(JSON.parse(store.get("pl_data")||"{}"))}catch(e){data=cleanData({})}

/* ---------- personalization prefs ---------- */
const CITIES=[
  ["tehran","Asia/Tehran",{fa:"تهران",en:"Tehran",fr:"Téhéran",ar:"طهران",ru:"Тегеран",zh:"德黑兰"}],
  ["washington","America/New_York",{fa:"واشنگتن",en:"Washington",fr:"Washington",ar:"واشنطن",ru:"Вашингтон",zh:"华盛顿"}],
  ["berlin","Europe/Berlin",{fa:"برلین",en:"Berlin",fr:"Berlin",ar:"برلين",ru:"Берлин",zh:"柏林"}],
  ["london","Europe/London",{fa:"لندن",en:"London",fr:"Londres",ar:"لندن",ru:"Лондон",zh:"伦敦"}],
  ["tokyo","Asia/Tokyo",{fa:"توکیو",en:"Tokyo",fr:"Tokyo",ar:"طوكيو",ru:"Токио",zh:"东京"}],
  ["baku","Asia/Baku",{fa:"باکو",en:"Baku",fr:"Bakou",ar:"باكو",ru:"Баку",zh:"巴库"}],
  ["istanbul","Europe/Istanbul",{fa:"استانبول",en:"Istanbul",fr:"Istanbul",ar:"إسطنبول",ru:"Стамбул",zh:"伊斯坦布尔"}],
  ["dubai","Asia/Dubai",{fa:"دبی",en:"Dubai",fr:"Dubaï",ar:"دبي",ru:"Дубай",zh:"迪拜"}],
  ["moscow","Europe/Moscow",{fa:"مسکو",en:"Moscow",fr:"Moscou",ar:"موسكو",ru:"Москва",zh:"莫斯科"}],
  ["cairo","Africa/Cairo",{fa:"قاهره",en:"Cairo",fr:"Le Caire",ar:"القاهرة",ru:"Каир",zh:"开罗"}],
  ["paris","Europe/Paris",{fa:"پاریس",en:"Paris",fr:"Paris",ar:"باريس",ru:"Париж",zh:"巴黎"}],
  ["delhi","Asia/Kolkata",{fa:"دهلی نو",en:"New Delhi",fr:"New Delhi",ar:"نيودلهي",ru:"Нью-Дели",zh:"新德里"}],
  ["beijing","Asia/Shanghai",{fa:"پکن",en:"Beijing",fr:"Pékin",ar:"بكين",ru:"Пекин",zh:"北京"}],
  ["seoul","Asia/Seoul",{fa:"سئول",en:"Seoul",fr:"Séoul",ar:"سول",ru:"Сеул",zh:"首尔"}],
  ["sydney","Australia/Sydney",{fa:"سیدنی",en:"Sydney",fr:"Sydney",ar:"سيدني",ru:"Сидней",zh:"悉尼"}],
  ["toronto","America/Toronto",{fa:"تورنتو",en:"Toronto",fr:"Toronto",ar:"تورونتو",ru:"Торонто",zh:"多伦多"}],
  ["losangeles","America/Los_Angeles",{fa:"لس‌آنجلس",en:"Los Angeles",fr:"Los Angeles",ar:"لوس أنجلوس",ru:"Лос-Анджелес",zh:"洛杉矶"}],
  ["saopaulo","America/Sao_Paulo",{fa:"سائوپائولو",en:"São Paulo",fr:"São Paulo",ar:"ساو باولو",ru:"Сан-Паулу",zh:"圣保罗"}]
];
const PREF_DEFAULT={fs:100,dens:"cozy",blur:22,fd:0,dig:"local",hideDone:false,sound:true,blobs:true,h12:false,sec:true,clockCity:"local",font:"auto",bg:"none",rowStyle:"glass",doneStyle:"strike",confetti:true,customColor:"#ff6b4a",
  cities:["tehran","washington","berlin","london","tokyo"]};

function cleanPrefs(p){
  const d=PREF_DEFAULT,o={...d,cities:d.cities.slice()};
  if(!p||typeof p!=="object") return o;
  const n=(v,a,b,def)=>{v=+v;return Number.isFinite(v)?Math.min(b,Math.max(a,v)):def};
  o.fs=n(p.fs,85,125,d.fs);
  o.blur=n(p.blur,0,40,d.blur);
  o.fd=[0,1,2].includes(+p.fd)?+p.fd:0;
  o.dens=p.dens==="compact"?"compact":"cozy";
  o.dig=p.dig==="latin"?"latin":"local";
  if(Array.isArray(p.cities)){
    o.cities=[...new Set(p.cities)].filter(id=>CITIES.some(c=>c[0]===id));
  }
  o.clockCity=o.cities.includes(p.clockCity)?p.clockCity:"local";
  o.font=["auto","system","rounded","serif","mono"].includes(p.font)?p.font:"auto";
  o.bg=["none","dots","grid","noise"].includes(p.bg)?p.bg:"none";
  o.rowStyle=["glass","flat","outline"].includes(p.rowStyle)?p.rowStyle:"glass";
  o.doneStyle=p.doneStyle==="dim"?"dim":"strike";
  o.customColor=/^#[0-9a-f]{6}$/i.test(p.customColor||"")?String(p.customColor).toLowerCase():d.customColor;
  ["hideDone","sound","blobs","h12","sec","confetti"].forEach(k=>{
    o[k]=typeof p[k]==="boolean"?p[k]:d[k];
  });
  return o;
}

let prefs;
try{prefs=cleanPrefs(JSON.parse(store.get("pl_prefs")||"{}"))}catch(e){prefs=cleanPrefs({})}
const savePrefs=()=>store.set("pl_prefs",JSON.stringify(prefs));
const esc=v=>String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const loc=()=>getLang().locale+(prefs.dig==="latin"?"-u-nu-latn":"");

const todayIdx=(new Date().getDay()+1)%7;
let sel=+(store.get("pl_sel")??todayIdx);
if(!Number.isInteger(sel)||sel<0||sel>6) sel=todayIdx;
const save=()=>store.set("pl_data",JSON.stringify(data));
const list=d=>data[d]||(data[d]=[]);

function renderWeek(){
  const days=DAYS_PROXY();
  const order=[0,1,2,3,4,5,6].map(k=>(k+prefs.fd)%7);
  $("week").innerHTML=order.map(i=>{
    const n=days[i];
    const l=list(i),dn=l.filter(t=>t.done).length,p=l.length?Math.round(dn/l.length*100):0;
    return `<button class="glass day ${i===sel?"sel":""}" data-i="${i}" aria-pressed="${i===sel}">
      <div class="n">${n}</div>
      <div class="tag">${i===todayIdx?tr("today"):""}</div>
      <div class="ring" style="--p:${p}"><span>${num(p)}%</span></div>
      <div class="cnt">${num(dn)}/${num(l.length)}</div>
    </button>`;
  }).join("");
  document.querySelectorAll(".day").forEach(b=>b.onclick=()=>{
    sel=+b.dataset.i; store.set("pl_sel",sel); render();
  });
}

const GRIP='<svg viewBox="0 0 12 16" aria-hidden="true"><circle cx="3" cy="3" r="1.5"/><circle cx="9" cy="3" r="1.5"/><circle cx="3" cy="8" r="1.5"/><circle cx="9" cy="8" r="1.5"/><circle cx="3" cy="13" r="1.5"/><circle cx="9" cy="13" r="1.5"/></svg>';
const rowsEl=$("rows");

/* FLIP: remember where rows are, change the DOM, then slide every row from the old place to the new one */
function captureRects(){
  const m=new Map();
  rowsEl.querySelectorAll(".row").forEach(r=>m.set(r.dataset.id,r.getBoundingClientRect()));
  return m;
}
function playFlip(old,skip){
  if(reduceMotion.matches) return;
  rowsEl.querySelectorAll(".row").forEach(r=>{
    if(r===skip||!r.animate) return;
    const o=old.get(r.dataset.id);
    if(!o) return;
    const n=r.getBoundingClientRect();
    const dx=o.left-n.left,dy=o.top-n.top;
    if(Math.abs(dx)<1&&Math.abs(dy)<1) return;
    r.animate([{transform:"translate("+dx+"px,"+dy+"px)"},{transform:"none"}],
      {duration:320,easing:"cubic-bezier(.2,.9,.3,1.12)"});
  });
}
function withFlip(fn){
  const old=captureRects();
  fn();
  playFlip(old);
}

/* write the DOM order of the visible rows back into the data (hidden rows keep their slots) */
function commitOrder(){
  const ids=[...rowsEl.querySelectorAll(".row")].map(r=>r.dataset.id);
  const l=list(sel),vis=new Set(ids),byId=new Map(l.map(t=>[String(t.id),t]));
  const q=ids.map(id=>byId.get(id)).filter(Boolean);
  if(q.length!==l.filter(t=>vis.has(String(t.id))).length) return;
  let k=0;
  data[sel]=l.map(t=>vis.has(String(t.id))?q[k++]:t);
  save();
}

/* ---------- undo toast ---------- */
let undoFn=null,toastT=0;
function hideToast(){
  const t=$("toast");
  t.classList.remove("on");
  undoFn=null;
  clearTimeout(toastT);
  setTimeout(()=>{if(!t.classList.contains("on")) t.hidden=true},320);
}
function showUndo(msg,fn){
  const t=$("toast");
  undoFn=fn;
  $("toastMsg").textContent=msg;
  $("toastUndo").textContent=tr("undo");
  t.hidden=false;
  void t.offsetWidth;
  t.classList.add("on");
  clearTimeout(toastT);
  toastT=setTimeout(hideToast,6500);
}
$("toastUndo").onclick=()=>{const f=undoFn;hideToast();if(f) f()};
window.addEventListener("keydown",e=>{
  if((e.ctrlKey||e.metaKey)&&!e.shiftKey&&e.key.toLowerCase()==="z"&&undoFn){
    const tag=(e.target.tagName||"").toUpperCase();
    if(tag==="INPUT"||tag==="TEXTAREA") return;     /* keep the browser's own undo while typing */
    e.preventDefault();
    const f=undoFn;hideToast();f();
  }
});

function pushUnique(day,t){
  const l=list(day);
  while(l.some(x=>x.id===t.id)) t.id++;
  l.push(t);
}
function restoreItems(day,items){
  const l=list(day);
  items.slice().sort((a,b)=>a.i-b.i).forEach(x=>{
    if(l.some(t=>t.id===x.t.id)) return;
    l.splice(Math.min(x.i,l.length),0,x.t);
  });
  save();
  withFlip(render);
}

/* ---------- time helpers, chips, clashes ---------- */
const toMin=str=>(+str.slice(0,2))*60+(+str.slice(3,5));
const clock24=m=>{m=((m%1440)+1440)%1440;return pad2(Math.floor(m/60))+":"+pad2(m%60)};
const UNITS={
  fa:{h:"ساعت",m:"دقیقه",sp:" "},en:{h:"h",m:"m",sp:""},fr:{h:"h",m:"min",sp:" "},
  ar:{h:"س",m:"د",sp:" "},ru:{h:"ч",m:"мин",sp:" "},zh:{h:"小时",m:"分钟",sp:""}
};
function fmtLong(m){
  const U=UNITS[currentLang]||UNITS.en,h=Math.floor(m/60),r=m%60,parts=[];
  if(h) parts.push(num(h)+U.sp+U.h);
  if(r||!h) parts.push(num(r)+U.sp+U.m);
  return parts.join(" ");
}
function findClashes(l){
  const iv=l.filter(t=>!t.done&&t.time&&t.dur)
    .map(t=>{const a=toMin(t.time);return {t,a,b:Math.min(1440,a+t.dur)}})
    .sort((x,y)=>x.a-y.a);
  const m=new Map();
  for(let i=0;i<iv.length;i++){
    for(let j=i+1;j<iv.length&&iv[j].a<iv[i].b;j++){
      m.set(iv[i].t.id,iv[j].t.text);
      m.set(iv[j].t.id,iv[i].t.text);
    }
  }
  return m;
}
function chipHTML(t,other){
  if(!t.time&&!t.dur) return "";
  let text,cls="time";
  if(t.time&&t.dur) text=t.time+"–"+clock24(toMin(t.time)+t.dur);
  else if(t.time) text=t.time;
  else{text=fmtDur(t.dur);cls+=" dur-only"}
  if(other!==undefined) cls+=" clash";
  const tip=[t.dur?tr("durLabel")+": "+fmtLong(t.dur):"",other!==undefined?tr("clashTip").replace("{x}",other):""].filter(Boolean).join(" · ");
  return `<span class="${cls}"${tip?` title="${esc(tip)}"`:""}>${esc(text)}</span>`;
}

/* ---------- starred-only filter ---------- */
let starFilter=false;

function syncStarFilterBtn(animate){
  const btn=$("starFilter"),has=list(sel).some(t=>t.star),was=!btn.hidden;
  btn.classList.toggle("on",starFilter);
  btn.setAttribute("aria-pressed",starFilter?"true":"false");
  if(has===was) return;
  const fx=animate&&!reduceMotion.matches&&btn.animate;
  if(has){
    btn.hidden=false;
    if(fx) btn.animate([
      {transform:"scale(.2) rotate(-120deg)",opacity:0},
      {transform:"scale(1.25) rotate(8deg)",opacity:1,offset:.6},
      {transform:"none",opacity:1}
    ],{duration:560,easing:"cubic-bezier(.3,1.3,.5,1)"});
  }else if(fx){
    btn.animate([{transform:"none",opacity:1},{transform:"scale(.2) rotate(90deg)",opacity:0}],
      {duration:220,easing:"ease-in"}).onfinish=()=>{btn.hidden=!list(sel).some(t=>t.star)};
  }else btn.hidden=true;
}

function setStarFilter(on){
  const leaving=on?[...rowsEl.querySelectorAll(".row:not(.starred)")]:[];
  const run=()=>withFlip(()=>{starFilter=on;render()});
  if(!leaving.length||reduceMotion.matches||!leaving[0].animate){run();return}
  leaving.forEach(r=>r.animate(
    [{opacity:1,transform:"none"},{opacity:0,transform:"scale(.94)"}],
    {duration:190,easing:"ease-in",fill:"forwards"}));
  setTimeout(run,195);
}
$("starFilter").onclick=()=>setStarFilter(!starFilter);

/* ---------- star ---------- */
function starFx(row,b,on){
  b.classList.remove("pop","off");
  void b.offsetWidth;
  b.classList.add(on?"pop":"off");
  if(!on||reduceMotion.matches||!b.animate) return;
  row.classList.remove("starflash");
  void row.offsetWidth;
  row.classList.add("starflash");
  setTimeout(()=>row.classList.remove("starflash"),1000);
  for(let i=0;i<8;i++){
    const sp=document.createElement("i");
    sp.className="sp";
    b.appendChild(sp);
    const a=(i/8)*Math.PI*2+Math.random()*.4,d=15+Math.random()*8;
    sp.animate([
      {transform:"translate(0,0) scale(1)",opacity:1},
      {transform:"translate("+Math.cos(a)*d+"px,"+Math.sin(a)*d+"px) scale(.2)",opacity:0}
    ],{duration:520+Math.random()*200,easing:"cubic-bezier(.2,.8,.3,1)",fill:"forwards"}).onfinish=()=>sp.remove();
    setTimeout(()=>sp.remove(),1100);              /* safety net if the animation never reports back */
  }
}

/* ---------- summary: planned / starred time for the day or the whole week ---------- */
let sumMode=store.get("pl_sum")==="week"?"week":"day",sumPrev={plan:0,star:0};

function dayStats(i){
  let plan=0,star=0;
  list(i).forEach(t=>{const d=t.dur||0;plan+=d;if(t.star) star+=d});
  return {plan,star};
}
function shortDay(i){                        /* shortest prefix that tells the 7 day names apart */
  const days=DAYS_PROXY(),name=days[i];
  for(let n=1;n<=name.length;n++){
    const p=name.slice(0,n);
    if(days.filter(x=>x.startsWith(p)).length===1) return p;
  }
  return name;
}
function tween(el,from,to){
  cancelAnimationFrame(el._r);
  if(from===to||reduceMotion.matches){el.textContent=fmtLong(to);return}
  const t0=performance.now();
  const step=now=>{
    const k=Math.min(1,(now-t0)/480),e=1-Math.pow(1-k,3);
    el.textContent=fmtLong(Math.round(from+(to-from)*e));
    if(k<1) el._r=requestAnimationFrame(step);
  };
  el._r=requestAnimationFrame(step);
}
function renderSum(){
  const box=$("sum"),wk=sumMode==="week";
  box.classList.toggle("wkmode",wk);
  document.querySelectorAll("#sumSeg button").forEach(b=>{
    const on=b.dataset.v===sumMode;
    b.classList.toggle("on",on);
    b.setAttribute("aria-pressed",on);
  });
  const per=[0,1,2,3,4,5,6].map(dayStats);
  let plan=0,star=0;
  if(wk) per.forEach(x=>{plan+=x.plan;star+=x.star}); else {plan=per[sel].plan;star=per[sel].star}
  tween($("sumPlanV"),sumPrev.plan,plan);
  tween($("sumStarV"),sumPrev.star,star);
  sumPrev={plan,star};
  $("shareG").style.width=(plan?star/plan*100:0)+"%";
  $("shareT").style.width=(plan?(plan-star)/plan*100:0)+"%";

  /* week bars: built once per language / week start, afterwards only their sizes change */
  const wkEl=$("wk"),order=[0,1,2,3,4,5,6].map(k=>(k+prefs.fd)%7),sig=currentLang+"|"+prefs.fd;
  if(wkEl.dataset.sig!==sig){
    wkEl.dataset.sig=sig;
    wkEl.innerHTML=order.map((i,k)=>`<button type="button" class="wk-d" data-i="${i}" style="--i:${k}"><span class="wk-v"></span><span class="wk-bar"><i class="a"></i><i class="s"></i></span><span class="wk-l">${esc(shortDay(i))}</span></button>`).join("");
    wkEl.querySelectorAll(".wk-d").forEach(b=>b.onclick=()=>{
      const d=document.querySelector('.day[data-i="'+b.dataset.i+'"]');
      if(d) d.click();
    });
  }
  const mx=Math.max(60,...per.map(x=>x.plan));
  wkEl.querySelectorAll(".wk-d").forEach(b=>{
    const i=+b.dataset.i,x=per[i];
    b.classList.toggle("sel",i===sel);
    b.querySelector(".wk-bar").style.height=(x.plan?Math.max(6,x.plan/mx*56):2)+"px";
    b.querySelector(".s").style.height=(x.plan?x.star/x.plan*100:0)+"%";
    b.querySelector(".wk-v").textContent=x.plan?fmtLong(x.plan):"";
    b.title=DAYS_PROXY()[i]+" · "+fmtLong(x.plan)+(x.star?" · ★ "+fmtLong(x.star):"");
  });
}
document.querySelectorAll("#sumSeg button").forEach(b=>b.onclick=()=>{
  if(sumMode===b.dataset.v) return;
  sumMode=b.dataset.v;
  store.set("pl_sum",sumMode);
  sumPrev={plan:0,star:0};
  const box=$("sum");
  if(sumMode==="week"&&!reduceMotion.matches){
    box.classList.add("opening");
    setTimeout(()=>box.classList.remove("opening"),1200);
  }
  renderSum();
});

function confettiBurst(x,y){
  if(!prefs.confetti||reduceMotion.matches) return;
  const m=(findTheme(colorKey)||[])[5];
  const cs=getComputedStyle(document.documentElement);
  const cols=m||[cs.getPropertyValue("--accent").trim(),cs.getPropertyValue("--accent2").trim(),cs.getPropertyValue("--b3").trim(),"#ffd60a","#ff4d8d"];
  const nodes=[];
  for(let i=0;i<44;i++){
    const p=document.createElement("i");
    p.className="cf";
    p.style.cssText="left:"+x+"px;top:"+y+"px;width:"+(6+Math.random()*6)+"px;height:"+(9+Math.random()*8)+"px;background:"+cols[i%cols.length];
    document.body.appendChild(p);nodes.push(p);
  }
  nodes.forEach(p=>{
    const ang=-Math.PI/2+(Math.random()-.5)*Math.PI*1.15,v=140+Math.random()*280;
    const dx=Math.cos(ang)*v,dy=Math.sin(ang)*v,rot=(Math.random()-.5)*900;
    const a=p.animate([
      {transform:"translate(0,0) rotate(0deg)",opacity:1},
      {transform:"translate("+dx*.7+"px,"+dy*.7+"px) rotate("+rot*.6+"deg)",opacity:1,offset:.42},
      {transform:"translate("+dx+"px,"+(dy+340)+"px) rotate("+rot+"deg)",opacity:0}
    ],{duration:1100+Math.random()*700,easing:"cubic-bezier(.2,.6,.4,1)",fill:"forwards"});
    a.onfinish=()=>p.remove();
  });
  setTimeout(()=>nodes.forEach(n=>n.remove()),2600);
}

function renderList(){
  if(dg) endDrag(false,true);
  if(editing) dropEdit();
  const l=list(sel),dn=l.filter(t=>t.done).length;
  $("dayTitle").textContent=tr("program")+" "+DAYS_PROXY()[sel];
  $("bar").style.width=(l.length?dn/l.length*100:0)+"%";
  if(!l.some(t=>t.star)) starFilter=false;           /* the filter only exists while the day has a star */
  const base=prefs.hideDone?l.filter(t=>!t.done):l;
  const vis=starFilter?base.filter(t=>t.star):base;
  const clash=findClashes(l);
  rowsEl.innerHTML=vis.length?vis.map(t=>`
    <div class="row ${t.done?"done":""} ${t.star?"starred":""}" data-id="${esc(t.id)}">
      <button type="button" class="grip" aria-label="${esc(tr("dragHandle"))}" title="${esc(tr("dragHandle"))}">${GRIP}</button>
      <input type="checkbox" class="chk" data-id="${esc(t.id)}" ${t.done?"checked":""} aria-label="${esc(tr("done"))}">
      <span class="txt"></span>
      ${chipHTML(t,clash.get(t.id))}
      <button type="button" class="star ${t.star?"on":""}" aria-pressed="${t.star?"true":"false"}" aria-label="${esc(tr("starTip"))}" title="${esc(tr("starTip"))}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8-4.2-4.1 5.8-.8L12 3.6Z"/></svg></button>
      <button type="button" class="pen" aria-label="${esc(tr("editTask"))}" title="${esc(tr("editTask"))}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z"/><path d="M13.5 6.5l4 4"/></svg></button>
      <button class="del" data-id="${esc(t.id)}" aria-label="${esc(tr("delete"))}">×</button>
    </div>`).join(""):`<div class="empty">${l.length&&prefs.hideDone?tr("allDone"):tr("empty")}
      <svg class="empty-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12h12"/><path d="m13 6 6 6-6 6"/>
      </svg></div>`;

  $("listTools").hidden=!l.length;
  syncStarFilterBtn(!!(renderList._prev&&renderList._prev.day===sel));
  $("sortTime").disabled=l.length<2;
  $("doneBottom").disabled=l.length<2;
  $("clearDone").disabled=!dn;
  $("carryOver").disabled=!l.some(t=>!t.done);

  rowsEl.querySelectorAll(".row .txt").forEach((el,i)=>el.textContent=vis[i].text);
  rowsEl.querySelectorAll(".chk").forEach(c=>c.onchange=()=>{
    const rc=c.getBoundingClientRect();
    withFlip(()=>{
      l.find(t=>t.id==c.dataset.id).done=c.checked; save(); render();
    });
    if(c.checked&&l.length&&l.every(t=>t.done)) confettiBurst(rc.left+rc.width/2,rc.top+rc.height/2);
  });
  rowsEl.querySelectorAll(".del").forEach(b=>b.onclick=()=>deleteTask(b));
  rowsEl.querySelectorAll(".pen").forEach(b=>b.onclick=()=>startEdit(b.closest(".row")));

  /* entrance animations: cascade when the day changes, glow for a brand-new task */
  const prev=renderList._prev,sameDay=prev&&prev.day===sel;
  const nodes=[...rowsEl.querySelectorAll(".row")];
  if(!reduceMotion.matches){
    if(!sameDay){
      nodes.slice(0,9).forEach((r,i)=>r.animate(
        [{opacity:0,transform:"translateY(16px) scale(.95)"},{opacity:1,transform:"none"}],
        {duration:420,delay:i*38,easing:"cubic-bezier(.2,.9,.3,1.15)",fill:"backwards"}));
    }else{
      nodes.forEach(r=>{
        if(prev.ids.has(r.dataset.id)) return;
        r.classList.add("fresh");
        setTimeout(()=>r.classList.remove("fresh"),1100);
        if(r.animate) r.animate(
          [{opacity:0,transform:"translateY(-16px) scale(.92)"},{opacity:1,transform:"none"}],
          {duration:420,easing:"cubic-bezier(.2,.9,.3,1.2)"});
      });
    }
  }
  renderList._prev={day:sel,ids:new Set(nodes.map(r=>r.dataset.id))};
}

function deleteTask(btn){
  const row=btn.closest(".row"),id=btn.dataset.id;
  const day=sel;
  const go=()=>withFlip(()=>{
    const l=list(day),idx=l.findIndex(t=>t.id==id),task=l[idx];
    data[day]=l.filter(t=>t.id!=id);
    save();render();
    if(task) showUndo(tr("deletedMsg"),()=>restoreItems(day,[{t:task,i:idx}]));
  });
  if(reduceMotion.matches||!row.animate){go();return;}
  row.style.pointerEvents="none";
  const sign=document.documentElement.dir==="rtl"?-1:1;
  const a=row.animate(
    [{opacity:1,transform:"none"},{opacity:0,transform:"translateX("+(sign*46)+"px) scale(.9)"}],
    {duration:210,easing:"ease-in",fill:"forwards"});
  a.onfinish=go;
  a.oncancel=go;
}

/* ---------- drag & drop (pointer based: mouse, pen and touch) ---------- */
let dg=null,pend=null;

function layoutRect(row){
  const rr=rowsEl.getBoundingClientRect();
  return {
    left:rr.left+rowsEl.clientLeft+row.offsetLeft-rowsEl.scrollLeft,
    top:rr.top+rowsEl.clientTop+row.offsetTop-rowsEl.scrollTop,
    width:row.offsetWidth,height:row.offsetHeight
  };
}

function cancelPend(){
  if(pend) clearTimeout(pend.timer);
  pend=null;
}

function beginDrag(cx,cy){
  if(!pend||dg) return;
  const p=pend;pend=null;clearTimeout(p.timer);
  const row=p.row;
  if(!row.isConnected) return;
  const rect=layoutRect(row);
  const clone=row.cloneNode(true);
  clone.classList.add("row-float");
  clone.removeAttribute("data-id");
  clone.setAttribute("aria-hidden","true");
  clone.querySelectorAll("button,input").forEach(x=>x.tabIndex=-1);
  clone.style.cssText="left:"+rect.left+"px;top:"+rect.top+"px;width:"+rect.width+"px;height:"+rect.height+"px;";
  document.body.appendChild(clone);

  const hint=document.createElement("div");
  hint.className="drag-hint";
  hint.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span></span>';
  document.body.appendChild(hint);

  row.classList.add("ph");
  document.documentElement.classList.add("dragging");
  rowsEl.style.scrollBehavior="auto";
  try{rowsEl.setPointerCapture(p.pid)}catch(e){}

  dg={row,clone,hint,rect,pid:p.pid,
      offX:p.x-rect.left,offY:p.y-rect.top,
      x:cx,y:cy,px:cx,tilt:0,sc:1,over:null,
      startNext:row.nextElementSibling,raf:0};
  dg.raf=requestAnimationFrame(dragFrame);
}

function slotFor(clientY){
  const rr=rowsEl.getBoundingClientRect();
  const y=clientY-rr.top-rowsEl.clientTop+rowsEl.scrollTop;
  for(const r of rowsEl.querySelectorAll(".row")){
    if(r===dg.row) continue;
    if(y<r.offsetTop+r.offsetHeight/2) return r;
  }
  return null;
}

function moveSlot(ref){
  const row=dg.row;
  if(ref===row.nextElementSibling) return;
  const old=captureRects();
  rowsEl.insertBefore(row,ref);
  playFlip(old,row);
}

function dragFrame(){
  if(!dg) return;
  dg.raf=requestAnimationFrame(dragFrame);

  /* edge auto-scroll while the pointer is over the list */
  const rr=rowsEl.getBoundingClientRect(),edge=56;
  if(dg.x>rr.left&&dg.x<rr.right&&dg.y>rr.top-30&&dg.y<rr.bottom+30){
    let sp=0;
    if(dg.y<rr.top+edge) sp=-(1-Math.max(0,dg.y-rr.top)/edge)*16;
    else if(dg.y>rr.bottom-edge) sp=(1-Math.max(0,rr.bottom-dg.y)/edge)*16;
    if(sp) rowsEl.scrollTop+=sp;
  }

  /* which day card (if any) is under the pointer? */
  const under=document.elementFromPoint(dg.x,dg.y);
  const dayEl=under&&under.closest?under.closest(".day"):null;
  const over=(dayEl&&+dayEl.dataset.i!==sel)?dayEl:null;
  if(over!==dg.over){
    if(dg.over) dg.over.classList.remove("drop-target");
    dg.over=over;
    if(over){
      over.classList.add("drop-target");
      dg.hint.lastChild.textContent=tr("moveTo")+" "+DAYS_PROXY()[+over.dataset.i];
    }
    dg.hint.classList.toggle("on",!!over);
  }

  /* reorder: the grey slot jumps to where the carried row's centre is */
  if(!dg.over) moveSlot(slotFor(dg.y-dg.offY+dg.rect.height/2));

  /* the carried row follows the pointer and leans into the movement */
  const dx=dg.x-dg.px;dg.px=dg.x;
  dg.tilt+=(Math.max(-9,Math.min(9,dx*.9))-dg.tilt)*.18;
  dg.sc+=((dg.over?.9:1.04)-dg.sc)*.2;
  const tx=dg.x-dg.offX-dg.rect.left,ty=dg.y-dg.offY-dg.rect.top;
  dg.clone.style.transform="translate("+tx+"px,"+ty+"px) rotate("+dg.tilt.toFixed(2)+"deg) scale("+dg.sc.toFixed(3)+")";
  dg.hint.style.transform="translate("+(dg.x+18)+"px,"+(dg.y+20)+"px)";
}

function landPulse(row){
  row.classList.remove("landed");
  void row.offsetWidth;
  row.classList.add("landed");
  setTimeout(()=>row.classList.remove("landed"),550);
}

function endDrag(commit,instant){
  const d=dg;
  if(!d) return;
  dg=null;
  cancelAnimationFrame(d.raf);
  document.documentElement.classList.remove("dragging");
  rowsEl.style.scrollBehavior="";
  try{rowsEl.releasePointerCapture(d.pid)}catch(e){}
  d.hint.remove();
  const over=d.over;
  if(over) over.classList.remove("drop-target");
  const startT=d.clone.style.transform;
  const noAnim=instant||reduceMotion.matches||!d.clone.animate;

  /* dropped on a day card: fly into it */
  if(commit&&over){
    const target=+over.dataset.i,id=d.row.dataset.id;
    const dr=over.getBoundingClientRect();
    const cx=dr.left+dr.width/2-(d.rect.left+d.rect.width/2);
    const cy=dr.top+dr.height/2-(d.rect.top+d.rect.height/2);
    if(!noAnim){
      const a=d.clone.animate(
        [{transform:startT,opacity:1},{transform:"translate("+cx+"px,"+cy+"px) rotate(0deg) scale(.12)",opacity:0}],
        {duration:380,easing:"cubic-bezier(.5,0,.8,.4)",fill:"forwards"});
      a.onfinish=a.oncancel=()=>d.clone.remove();
      setTimeout(()=>d.clone.remove(),900);
    }else d.clone.remove();

    const l=list(sel),t=l.find(x=>x.id==id);
    if(t){
      const old=captureRects();
      data[sel]=l.filter(x=>x.id!=id);
      pushUnique(target,t);
      save();
      render();
      playFlip(old);
      const nd=document.querySelector('.day[data-i="'+target+'"]');
      if(nd&&nd.animate&&!noAnim) nd.animate(
        [{transform:"scale(1)"},{transform:"scale(1.14)"},{transform:"scale(.96)"},{transform:"scale(1)"}],
        {duration:520,delay:260,easing:"ease-out"});
    }else render();
    return;
  }

  /* normal drop or cancel: put the row back to its (new / old) slot */
  if(!commit&&d.row.isConnected){
    const old=captureRects();
    rowsEl.insertBefore(d.row,d.startNext&&d.startNext.isConnected?d.startNext:null);
    if(!instant) playFlip(old,d.row);
  }
  let finished=false;
  const finish=()=>{
    if(finished) return;
    finished=true;
    d.clone.remove();
    d.row.classList.remove("ph");
    if(!noAnim) landPulse(d.row);
  };
  setTimeout(finish,900);                 /* safety net if the animation never reports back */
  if(commit) commitOrder();
  if(noAnim||!d.row.isConnected){finish();return}
  const r=layoutRect(d.row);
  const a=d.clone.animate(
    [{transform:startT},{transform:"translate("+(r.left-d.rect.left)+"px,"+(r.top-d.rect.top)+"px) rotate(0deg) scale(1)"}],
    {duration:320,easing:"cubic-bezier(.2,.9,.25,1.2)",fill:"forwards"});
  a.onfinish=a.oncancel=finish;
}

rowsEl.addEventListener("pointerdown",e=>{
  if(dg||pend) return;
  if(e.pointerType==="mouse"&&e.button!==0) return;
  const row=e.target.closest(".row");
  if(!row||e.target.closest(".chk,.del,.pen,.star")||row.classList.contains("editing")) return;
  pend={row,x:e.clientX,y:e.clientY,pid:e.pointerId,type:e.pointerType,
        grip:!!e.target.closest(".grip"),timer:0};
  /* finger on the row body: hold for a moment so normal scrolling still works */
  if(e.pointerType!=="mouse"&&!pend.grip){
    pend.timer=setTimeout(()=>{if(pend) beginDrag(pend.x,pend.y)},340);
  }
});
window.addEventListener("pointermove",e=>{
  if(dg){
    if(e.pointerId===dg.pid){dg.x=e.clientX;dg.y=e.clientY}
    return;
  }
  if(!pend||e.pointerId!==pend.pid) return;
  const dist=Math.hypot(e.clientX-pend.x,e.clientY-pend.y);
  if(pend.type==="mouse"||pend.grip){
    if(dist>4) beginDrag(e.clientX,e.clientY);
  }else if(dist>10) cancelPend();
},{passive:true});
let lastTap={row:null,t:0};
const dragUp=e=>{
  if(dg){
    if(e.pointerId===dg.pid) endDrag(e.type==="pointerup");
  }else if(pend&&e.pointerId===pend.pid){
    const p=pend;cancelPend();
    /* double-tap on touch screens opens the editor */
    if(e.type==="pointerup"&&p.type!=="mouse"&&!p.grip){
      const now=performance.now();
      if(lastTap.row===p.row&&now-lastTap.t<380){lastTap={row:null,t:0};startEdit(p.row)}
      else lastTap={row:p.row,t:now};
    }
  }
};
window.addEventListener("pointerup",dragUp);
window.addEventListener("pointercancel",dragUp);
window.addEventListener("blur",()=>{if(dg) endDrag(false)});
window.addEventListener("keydown",e=>{if(e.key==="Escape"&&dg) endDrag(false)});
document.addEventListener("touchmove",e=>{if(dg) e.preventDefault()},{passive:false});
rowsEl.addEventListener("contextmenu",e=>{if(dg||pend) e.preventDefault()});

/* keyboard: focus the grip, then use the arrow keys to move a task */
rowsEl.addEventListener("keydown",e=>{
  const g=e.target.closest?e.target.closest(".grip"):null;
  if(g&&e.key==="F2"){e.preventDefault();startEdit(g.closest(".row"));return}
  if(!g||(e.key!=="ArrowUp"&&e.key!=="ArrowDown")) return;
  e.preventDefault();
  const row=g.closest(".row");
  const sib=e.key==="ArrowUp"?row.previousElementSibling:row.nextElementSibling;
  if(!sib||!sib.classList.contains("row")) return;
  const old=captureRects();
  if(e.key==="ArrowUp") rowsEl.insertBefore(row,sib); else rowsEl.insertBefore(sib,row);
  playFlip(old);
  commitOrder();
  g.focus({preventScroll:true});
  row.scrollIntoView({block:"nearest"});
});

/* ---------- pointer spotlight on hover ---------- */
let spotRaf=0,spotEv=null;
rowsEl.addEventListener("pointermove",e=>{
  if(dg||e.pointerType!=="mouse") return;
  spotEv=e;
  if(spotRaf) return;
  spotRaf=requestAnimationFrame(()=>{
    spotRaf=0;
    const row=spotEv.target.closest?spotEv.target.closest(".row"):null;
    if(!row) return;
    const r=row.getBoundingClientRect();
    row.style.setProperty("--mx",(spotEv.clientX-r.left)+"px");
    row.style.setProperty("--my",(spotEv.clientY-r.top)+"px");
  });
},{passive:true});

/* ---------- double-click: edit text + time in place ---------- */
let editing=null;
const ICON_OK='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';
const ICON_NO='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>';

function outsideEdit(e){
  if(editing&&!editing.row.contains(e.target)) finishEdit("outside");
}
function dropEdit(){
  editing=null;
  document.removeEventListener("pointerdown",outsideEdit,true);
}

function startEdit(row){
  if(dg||!row||!row.isConnected) return;
  if(editing){
    if(editing.row===row) return;
    finishEdit("outside");
    if(!row.isConnected) return;
  }
  const id=row.dataset.id;
  const t=list(sel).find(x=>String(x.id)===id);
  if(!t) return;
  const old=captureRects();
  row.classList.add("editing");

  const inp=document.createElement("input");
  inp.type="text";inp.className="edit-txt";inp.maxLength=120;inp.value=t.text;
  inp.setAttribute("aria-label",tr("editTask"));
  row.querySelector(".txt").replaceWith(inp);
  const tm=row.querySelector(".time");
  if(tm) tm.remove();

  const bar=document.createElement("div");
  bar.className="edit-bar";
  const pk=TP_TPL.cloneNode(true);
  const ptp=makeTP(pk,()=>finishEdit("save"));
  ptp.labels();
  ptp.setFrom(t.time,t.dur);
  const acts=document.createElement("div");
  acts.className="edit-acts";
  acts.innerHTML='<button type="button" class="edit-btn edit-no">'+ICON_NO+'</button><button type="button" class="edit-btn edit-ok">'+ICON_OK+'</button>';
  acts.querySelector(".edit-no").title=tr("editCancel");
  acts.querySelector(".edit-ok").title=tr("editSave");
  acts.querySelector(".edit-no").setAttribute("aria-label",tr("editCancel"));
  acts.querySelector(".edit-ok").setAttribute("aria-label",tr("editSave"));
  acts.querySelector(".edit-no").onclick=()=>finishEdit("cancel");
  acts.querySelector(".edit-ok").onclick=()=>finishEdit("save");
  bar.append(pk,acts);
  row.appendChild(bar);

  editing={row,id,inp,ptp};
  inp.addEventListener("keydown",e=>{
    if(e.key==="Enter"){e.preventDefault();finishEdit("save")}
    else if(e.key==="Escape"){e.preventDefault();e.stopPropagation();finishEdit("cancel")}
  });
  pk.addEventListener("keydown",e=>{
    if(e.key==="Escape"){e.preventDefault();e.stopPropagation();finishEdit("cancel")}
  });
  document.addEventListener("pointerdown",outsideEdit,true);
  playFlip(old);
  inp.focus();
  inp.select();
}

function finishEdit(mode){
  const ed=editing;
  if(!ed) return;
  let saved=false;
  if(mode==="save"||mode==="outside"){
    const text=ed.inp.value.trim();
    if(!text){
      if(mode==="save"){                         /* empty title: shake and keep editing */
        ed.inp.classList.remove("shake");
        void ed.inp.offsetWidth;
        ed.inp.classList.add("shake");
        ed.inp.focus();
        return;
      }
    }else{
      const t=list(sel).find(x=>String(x.id)===ed.id);
      if(t){
        t.text=text.slice(0,120);
        t.time=ed.ptp.value();
        t.dur=ed.ptp.dur();
        save();
        saved=true;
      }
    }
  }
  dropEdit();
  const old=captureRects();
  render();
  playFlip(old);
  if(saved){
    const r=rowsEl.querySelector('.row[data-id="'+ed.id+'"]');
    if(r&&!reduceMotion.matches) landPulse(r);
  }
}

rowsEl.addEventListener("dblclick",e=>{
  const row=e.target.closest?e.target.closest(".row"):null;
  if(!row||row.classList.contains("editing")) return;
  if(e.target.closest(".chk,.del,.pen,.star,.grip,.edit-bar,.edit-txt")) return;
  e.preventDefault();
  const sel0=window.getSelection&&window.getSelection();
  if(sel0) sel0.removeAllRanges();
  startEdit(row);
});

rowsEl.addEventListener("click",e=>{
  const b=e.target.closest?e.target.closest(".star"):null;
  if(!b) return;
  const row=b.closest(".row");
  const t=list(sel).find(x=>String(x.id)===row.dataset.id);
  if(!t) return;
  t.star=!t.star;
  save();
  row.classList.toggle("starred",t.star);
  b.classList.toggle("on",t.star);
  b.setAttribute("aria-pressed",t.star?"true":"false");
  starFx(row,b,t.star);
  renderSum();
  if(e.detail>0) b.blur();                    /* a mouse click must not pin the "hovered" look */
  syncStarFilterBtn(true);
  if(!t.star&&starFilter){                    /* un-starred while filtered: the row leaves the list */
    setTimeout(()=>{
      if(row.animate&&!reduceMotion.matches) row.animate(
        [{opacity:1,transform:"none"},{opacity:0,transform:"scale(.94)"}],{duration:200,easing:"ease-in",fill:"forwards"});
    },260);
    setTimeout(()=>{
      if(!list(sel).some(x=>x.star)) starFilter=false;
      withFlip(()=>render());
    },480);
  }
});
rowsEl.addEventListener("click",e=>{
  if(e.detail>0){
    const b=e.target.closest?e.target.closest(".pen,.chk"):null;
    if(b) b.blur();
  }
});

/* ---------- more list tools (all undoable) ---------- */
$("clearDone").onclick=()=>{
  const day=sel,l=list(day);
  const gone=l.map((t,i)=>({t,i})).filter(x=>x.t.done);
  if(!gone.length) return;
  withFlip(()=>{
    data[day]=l.filter(t=>!t.done);
    save();render();
  });
  showUndo(tr("removedN").replace("{n}",num(gone.length)),()=>restoreItems(day,gone));
};
$("carryOver").onclick=()=>{
  const from=sel,to=(sel+1)%7,l=list(from);
  const moved=l.map((t,i)=>({t,i})).filter(x=>!x.t.done);
  if(!moved.length) return;
  withFlip(()=>{
    data[from]=l.filter(t=>t.done);
    moved.forEach(x=>pushUnique(to,x.t));
    save();render();
  });
  showUndo(tr("movedN").replace("{n}",num(moved.length)).replace("{day}",DAYS_PROXY()[to]),()=>{
    const set=new Set(moved.map(x=>x.t));
    data[to]=list(to).filter(t=>!set.has(t));
    restoreItems(from,moved);
  });
};

/* toolbar: sort by time / completed to the bottom (both keep the manual order otherwise) */
$("sortTime").onclick=()=>withFlip(()=>{
  const l=list(sel);
  data[sel]=l.map((t,i)=>[t,i])
    .sort((a,b)=>(a[0].time||"99:99").localeCompare(b[0].time||"99:99")||a[1]-b[1])
    .map(x=>x[0]);
  save();render();
});
$("doneBottom").onclick=()=>withFlip(()=>{
  const l=list(sel);
  data[sel]=[...l.filter(t=>!t.done),...l.filter(t=>t.done)];
  save();render();
});

function render(){renderWeek();renderList();renderSum();}


/* ---------- motion helper ---------- */
const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)");

/* ---------- time picker factory (add-row picker + inline editor share it) ---------- */
const pad2=n=>String(n).padStart(2,"0");

const TP_TPL=$("tp").cloneNode(true);
TP_TPL.removeAttribute("id");
TP_TPL.querySelectorAll("[id]").forEach(e=>e.removeAttribute("id"));
TP_TPL.querySelectorAll(".tp-win").forEach(w=>w.textContent="");
TP_TPL.classList.remove("set");TP_TPL.classList.add("unset");

/* digits roll like an odometer: old value leaves, new one enters from the other side */
function roll(win,text,dir){
  const cur=win.querySelector(".cur");
  if(cur&&cur.textContent===text) return;
  win.querySelectorAll(".old").forEach(x=>x.remove());
  const nu=document.createElement("span");
  nu.className="cur";nu.textContent=text;
  if(!cur||!dir||reduceMotion.matches||typeof nu.animate!=="function"){
    win.replaceChildren(nu);
    return;
  }
  cur.className="old";
  win.appendChild(nu);
  const d=dir>0?1:-1;
  const out=cur.animate([
    {transform:"translateY(0) scale(1)",opacity:1,filter:"blur(0px)"},
    {transform:"translateY("+(-d*105)+"%) scale(.7)",opacity:0,filter:"blur(3px)"}
  ],{duration:230,easing:"cubic-bezier(.4,0,.9,.6)",fill:"forwards"});
  out.onfinish=()=>cur.remove();
  nu.animate([
    {transform:"translateY("+(d*105)+"%) scale(.7)",opacity:0,filter:"blur(3px)"},
    {transform:"translateY(0) scale(1)",opacity:1,filter:"blur(0px)"}
  ],{duration:290,easing:"cubic-bezier(.2,.9,.25,1.12)"});
}

const DUR=[0,10,15,20,30,45,60,75,90,120,150,180,240,300,360,480];   /* minutes the 4th column can show */
function fmtDur(m){
  if(!m) return "0m";
  const h=Math.floor(m/60),r=m%60;
  return h?(r?h+"h "+r+"m":h+"h"):r+"m";
}

function makeTP(root,onEnter){
  const st={h:0,m:0,p:0,d:0};                   /* h=0 means "no time" (shown as 00:00 AM) */
  const cols={};
  root.querySelectorAll(".tp-col").forEach(c=>cols[c.dataset.k]=c);
  const xBtn=root.querySelector(".tp-x");

  function value(){
    if(!st.h) return "";
    const h24=(st.h%12)+(st.p?12:0);
    return pad2(h24)+":"+pad2(st.m);
  }

  function bump(k){
    const c=cols[k];
    c.classList.add("live");
    clearTimeout(c._lt);
    c._lt=setTimeout(()=>c.classList.remove("live"),260);
    if(!reduceMotion.matches&&c.animate)
      c.animate([{transform:"scale(1)"},{transform:"scale(1.1)"},{transform:"scale(1)"}],{duration:220,easing:"ease-out"});
  }

  function render(dirs){
    dirs=dirs||{};
    const txt={h:num(pad2(st.h)),m:num(pad2(st.m)),p:st.p?"PM":"AM",d:fmtDur(DUR[st.d]).replace(" ","")};
    ["h","m","p","d"].forEach(k=>{
      roll(cols[k].firstElementChild,txt[k],dirs[k]||0);
      cols[k].setAttribute("aria-valuenow",k==="h"?(st.h||0):st[k]);
      cols[k].setAttribute("aria-valuetext",txt[k]);
    });
    root.classList.toggle("set",!!st.h);
    root.classList.toggle("unset",!st.h);
    root.classList.toggle("dset",!!st.d);
    root.classList.toggle("any",!!(st.h||st.d));
    xBtn.tabIndex=(st.h||st.d)?0:-1;
    xBtn.setAttribute("aria-hidden",(st.h||st.d)?"false":"true");
  }

  function labels(){
    root.setAttribute("aria-label",tr("hour"));
    cols.h.setAttribute("aria-label",tr("hour"));
    cols.m.setAttribute("aria-label",tr("tpMinute"));
    cols.p.setAttribute("aria-label",tr("tpPeriod"));
    cols.d.setAttribute("aria-label",tr("durLabel"));
    xBtn.setAttribute("aria-label",tr("tpClear"));
    xBtn.title=tr("tpClear");
    render();
  }

  function stepBy(k,delta){
    if(!delta) return;
    const dir=delta>0?1:-1,dirs={};
    if(k==="d"){                                   /* duration walks a fixed ladder, no wrap-around */
      const n=Math.min(DUR.length-1,Math.max(0,st.d+delta));
      if(n!==st.d){st.d=n;render({d:dir})}
      bump(k);
      return;
    }
    if(k==="h"){
      const base=st.h===0?(delta>0?0:13):st.h;
      st.h=((((base-1+delta)%12)+12)%12)+1;
      dirs.h=dir;
    }else{
      if(!st.h){st.h=12;dirs.h=dir}           /* touching minutes / AM-PM switches the time on */
      if(k==="m"){st.m=(((st.m+delta)%60)+60)%60;dirs.m=dir}
      else{st.p=st.p?0:1;dirs.p=dir}
    }
    render(dirs);
    bump(k);
  }

  function setVal(k,v){
    const dirs={};
    if(!st.h&&k!=="h"){st.h=12;dirs.h=1}
    dirs[k]=v>=st[k]?1:-1;
    st[k]=v;
    render(dirs);
    bump(k);
  }

  function clear(){
    const had=st.h||st.m||st.p||st.d;
    st.h=st.m=st.p=st.d=0;
    render(had?{h:-1,m:-1,p:-1,d:-1}:null);
  }
  function clearTime(){
    const had=st.h||st.m||st.p;
    st.h=st.m=st.p=0;
    render(had?{h:-1,m:-1,p:-1}:null);
  }

  function setFrom(str,dur){
    let bi=0;
    DUR.forEach((v,i)=>{if(Math.abs(v-(dur||0))<Math.abs(DUR[bi]-(dur||0))) bi=i});
    st.d=bi;
    if(/^\d{2}:\d{2}$/.test(str||"")){
      const H=+str.slice(0,2);
      st.m=+str.slice(3,5);
      st.p=H>=12?1:0;
      st.h=(H%12)===0?12:H%12;
    }else st.h=st.m=st.p=0;
    render();
  }

  let tbuf="",tbT=0;
  function type(k,d){
    clearTimeout(tbT);tbT=setTimeout(()=>{tbuf=""},1200);
    const max=k==="h"?12:59,min=k==="h"?1:0;
    let b=(tbuf+d).slice(-2),v=+b;
    if(v>max){b=d;v=+d}
    tbuf=b;
    if(v<min) return;                          /* e.g. the first "0" of "05" in the hour column */
    setVal(k,v);
  }

  Object.entries(cols).forEach(([k,col])=>{

    /* mouse wheel: up = bigger. Fast spinning speeds the minutes up. */
    let acc=0,accT=0,lastWheel=0,fast=0;
    col.addEventListener("wheel",e=>{
      e.preventDefault();
      let dy=e.deltaY||e.deltaX;
      if(!dy) return;
      if(e.deltaMode===1) dy*=33; else if(e.deltaMode===2) dy*=400;
      const now=performance.now();
      fast=(now-lastWheel<70)?fast+1:0;
      lastWheel=now;
      acc+=dy;
      clearTimeout(accT);accT=setTimeout(()=>{acc=0;fast=0},250);
      const n=Math.min(6,Math.floor(Math.abs(acc)/90));
      if(!n) return;
      acc-=Math.sign(acc)*n*90;
      const boost=(k==="m"&&fast>=8)?5:1;
      stepBy(k,(dy<0?1:-1)*n*boost);
    },{passive:false});

    /* touch / mouse drag (up = bigger) and tap on top / bottom half */
    let drag=null;
    col.addEventListener("pointerdown",e=>{
      if(e.button>0) return;
      col.focus({preventScroll:true});
      col.setPointerCapture(e.pointerId);
      drag={y:e.clientY,done:0,moved:false};
    });
    col.addEventListener("pointermove",e=>{
      if(!drag) return;
      const dy=drag.y-e.clientY;
      if(Math.abs(dy)>5) drag.moved=true;
      const steps=Math.trunc(dy/16)-drag.done;
      if(steps){drag.done+=steps;stepBy(k,steps)}
    });
    const endDragCol=e=>{
      if(!drag) return;
      const d=drag;drag=null;
      if(e.type==="pointerup"&&!d.moved){
        const r=col.getBoundingClientRect();
        stepBy(k,e.clientY<r.top+r.height/2?1:-1);
      }
    };
    col.addEventListener("pointerup",endDragCol);
    col.addEventListener("pointercancel",endDragCol);

    col.addEventListener("keydown",e=>{
      const big=k==="m"?10:3;
      switch(e.key){
        case "ArrowUp":   stepBy(k,1);break;
        case "ArrowDown": stepBy(k,-1);break;
        case "PageUp":    stepBy(k,big);break;
        case "PageDown":  stepBy(k,-big);break;
        case "Backspace":
        case "Delete":    if(k==="d"){st.d=0;render({d:-1})}else clearTime();break;
        case "Enter":     if(onEnter) onEnter();break;
        case "a":case "A":if(st.p||!st.h) stepBy("p",1);break;
        case "p":case "P":if(!st.p||!st.h) stepBy("p",1);break;
        default:
          if(k!=="p"&&k!=="d"&&/^\d$/.test(e.key)) type(k,e.key);
          else return;                       /* let Tab / Escape etc. through */
      }
      e.preventDefault();
    });
  });

  xBtn.onclick=()=>{clear();cols.h.focus({preventScroll:true})};
  render();
  return {value,dur:()=>DUR[st.d],clear,setFrom,labels,render};
}

const mainTP=makeTP($("tp"),()=>add());

function add(){
  const v=$("task").value.trim();
  if(!v)return;
  const l=list(sel);
  let id=Date.now();
  while(l.some(t=>t.id===id)) id++;
  l.push({id,text:v,time:mainTP.value(),dur:mainTP.dur(),star:false,done:false});     /* new tasks go to the end; reorder by hand or with the sort button */
  $("task").value="";mainTP.clear();save();render();$("task").focus();
  requestAnimationFrame(()=>{
    const r=rowsEl.querySelector('.row[data-id="'+id+'"]');
    if(r&&r.scrollIntoView) r.scrollIntoView({block:"nearest",behavior:"smooth"});
  });
}
$("addBtn").onclick=add;
$("task").addEventListener("keydown",e=>{if(e.key==="Enter")add()});

function updateDate(){
  const L=getLang();
  $("today").textContent=new Intl.DateTimeFormat(loc(),{
    weekday:"long",day:"numeric",month:"long"
  }).format(new Date());
}

/* ---------- theme ---------- */

const THEMES=[
  ["blue",{fa:"آبی",en:"Blue",fr:"Bleu",ar:"أزرق",ru:"Синий",zh:"蓝色"},"#5b7cff","#22b8ff","#7be0c3"],
  ["red",{fa:"قرمز",en:"Red",fr:"Rouge",ar:"أحمر",ru:"Красный",zh:"红色"},"#ff4d5e","#ff8a5b","#ffb36b"],
  ["orange",{fa:"نارنجی",en:"Orange",fr:"Orange",ar:"برتقالي",ru:"Оранжевый",zh:"橙色"},"#ff8a1f","#ffc23d","#ff6b6b"],
  ["purple",{fa:"بنفش",en:"Purple",fr:"Violet",ar:"بنفسجي",ru:"Фиолетовый",zh:"紫色"},"#9b5cff","#ff5fd2","#5bb6ff"],
  ["green",{fa:"سبز",en:"Green",fr:"Vert",ar:"أخضر",ru:"Зелёный",zh:"绿色"},"#1fbf7a","#7be04a","#2fc7d6"],
  ["pink",{fa:"صورتی",en:"Pink",fr:"Rose",ar:"وردي",ru:"Розовый",zh:"粉色"},"#ff5fa2","#ff9ac4","#b57bff"],
  ["teal",{fa:"فیروزه‌ای",en:"Teal",fr:"Turquoise",ar:"فيروزي",ru:"Бирюзовый",zh:"青绿色"},"#14b8c4","#4d8bff","#7be0a6"],
  ["gold",{fa:"طلایی",en:"Gold",fr:"Or",ar:"ذهبي",ru:"Золотой",zh:"金色"},"#f5b400","#ff7a3d","#ff5f8f"],
  ["indigo",{fa:"نیلی",en:"Indigo",fr:"Indigo",ar:"نيلي",ru:"Индиго",zh:"靛蓝"},"#4c3fe0","#9b6bff","#3bb4ff"],
  ["lime",{fa:"لیمویی",en:"Lime",fr:"Citron vert",ar:"ليموني",ru:"Лайм",zh:"青柠"},"#63b30f","#b5d60f","#20c997"],
  ["mocha",{fa:"قهوه‌ای",en:"Mocha",fr:"Moka",ar:"بني",ru:"Мокко",zh:"摩卡"},"#b5713a","#e0a15e","#8b5a3c"],
  /* 6th item = the seven colours of the RGB theme (static, no animation) */
  ["rgb",{fa:"RGB",en:"RGB",fr:"RGB",ar:"RGB",ru:"RGB",zh:"RGB"},"#7a5cff","#00c8ff","#30d158",
    ["#ff2d55","#ff8a00","#ffd60a","#30d158","#00d4ff","#3b6bff","#b04dff"]]
];

let colorKey=store.get("pl_color")||"blue";

function hexToHsl(hex){
  const n=parseInt(hex.slice(1),16);
  const r=(n>>16&255)/255,g=(n>>8&255)/255,b=(n&255)/255;
  const mx=Math.max(r,g,b),mn=Math.min(r,g,b),d=mx-mn;
  let h=0,sa=0;const l=(mx+mn)/2;
  if(d){
    sa=l>.5?d/(2-mx-mn):d/(mx+mn);
    h=mx===r?((g-b)/d+(g<b?6:0)):mx===g?((b-r)/d+2):((r-g)/d+4);
    h*=60;
  }
  return [h,sa*100,l*100];
}
function hslToHex(h,sa,l){
  h=((h%360)+360)%360;sa/=100;l/=100;
  const k=n=>(n+h/30)%12,a=sa*Math.min(l,1-l);
  const f=n=>l-a*Math.max(-1,Math.min(k(n)-3,Math.min(9-k(n),1)));
  const x=v=>Math.round(v*255).toString(16).padStart(2,"0");
  return "#"+x(f(0))+x(f(8))+x(f(4));
}
/* one free colour -> three harmonious ones (kept readable under white button text) */
function customTheme(){
  const [h,sa,l]=hexToHsl(prefs.customColor);
  const S=Math.max(55,sa),L=Math.min(58,Math.max(40,l));
  return ["custom",{},hslToHex(h,S,L),hslToHex(h+38,S,Math.min(64,L+6)),hslToHex(h-45,S,L)];
}
const findTheme=k=>k==="custom"?customTheme():THEMES.find(x=>x[0]===k);
if(!findTheme(colorKey)) colorKey="blue";     /* also migrates old animated keys */

const DIAL_DEFAULT='<stop offset="0" style="stop-color:var(--accent)"/><stop offset="1" style="stop-color:var(--accent2)"/>';

function applyColor(){

  const t=findTheme(colorKey)||THEMES[0],
        r=document.documentElement.style,
        d=effTheme()==="dark",
        m=t[5];                       /* seven-colour list, only on the RGB theme */

  r.setProperty("--accent",t[2]);
  r.setProperty("--accent2",t[3]);

  /* background glows: the RGB theme uses red, cyan and green */
  const b1=m?m[0]:t[2], b2=m?m[4]:t[3], b3=m?m[3]:t[4];
  r.setProperty("--b1",b1);
  r.setProperty("--b2",b2);
  r.setProperty("--b3",b3);

  r.setProperty(
    "--bg1",
    `color-mix(in srgb,${b1} 15%,${d?"#0b0d1c":"#ffffff"})`
  );

  r.setProperty(
    "--bg2",
    `color-mix(in srgb,${b2} 15%,${d?"#12091d":"#ffffff"})`
  );

  /* every accent gradient (buttons, bars, toggles, scrollbar...) becomes a 7-colour sweep */
  ["90","135","145","180"].forEach(a=>{
    if(m) r.setProperty("--g"+a,`linear-gradient(${a}deg,${m.join(",")})`);
    else  r.removeProperty("--g"+a);
  });

  const grad=document.getElementById("g");
  if(grad) grad.innerHTML=m
    ? m.map((c,i)=>`<stop offset="${(i/(m.length-1)).toFixed(3)}" stop-color="${c}"/>`).join("")
    : DIAL_DEFAULT;
}

function syncSeg(){

  const m=store.get("pl_theme")||"system";

  document
    .querySelectorAll("#seg button")
    .forEach(b=>b.classList.toggle("on",b.dataset.m===m));
}

const mq=window.matchMedia("(prefers-color-scheme: dark)");

function effTheme(){

  const s=store.get("pl_theme");

  return s||(mq.matches?"dark":"light");
}

function sunSVG(){

  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/>
    </svg>
  `;
}

function moonSVG(){

  return `
    <svg style="stroke: none;" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
	<path d="M0 0h16v16H0z" fill="none" />
	<path fill="currentColor" d="M6 .278a.77.77 0 0 1 .08.858a7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316a.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
</svg>
  `;
}

function applyTheme(){

  const s=store.get("pl_theme"),
        e=effTheme(),
        r=document.documentElement;

  if(s)
    r.setAttribute("data-theme",s);
  else
    r.removeAttribute("data-theme");

  r.setAttribute("data-eff",e);

  const kn=$("knob"),changed=kn.dataset.eff&&kn.dataset.eff!==e;
  kn.dataset.eff=e;
  kn.innerHTML=e==="dark"
    ?moonSVG()
    :sunSVG();
  if(changed&&!reduceMotion.matches&&kn.firstElementChild&&kn.firstElementChild.animate){
    kn.firstElementChild.animate([
      {transform:"rotate(-110deg) scale(.3)",opacity:0},
      {transform:"rotate(0) scale(1)",opacity:1}
    ],{duration:480,easing:"cubic-bezier(.34,1.56,.64,1)"});
  }

  $("sw").setAttribute("aria-checked",e==="dark");

  applyColor();
  syncSeg();
}

$("sw").onclick=()=>{
  store.set(
    "pl_theme",
    effTheme()==="dark"?"light":"dark"
  );

  applyTheme();
};

mq.addEventListener&&mq.addEventListener("change",applyTheme);

applyTheme();

/* ---------- settings ---------- */

const dr=$("drawer"),
      ov=$("ov");

function openD(o){

  if(o===dr.classList.contains("open")) return;

  dr.classList.toggle("open",o);
  ov.classList.toggle("open",o);

  if(o)
    $("close").focus();
  else
    $("gear").focus();
}

$("gear").onclick=()=>openD(true);

$("close").onclick=()=>openD(false);

ov.onclick=()=>openD(false);

document.addEventListener("keydown",e=>{
  if(e.key==="Escape")
    openD(false);
});

document
  .querySelectorAll("#seg button")
  .forEach(b=>b.onclick=()=>{

    b.dataset.m==="system"
      ?store.del("pl_theme")
      :store.set("pl_theme",b.dataset.m);

    applyTheme();
  });

function drawSw(){

  $("sws").innerHTML=THEMES.map(t=>{
    const on=t[0]===colorKey;
    const bg=t[5]
      ?`linear-gradient(135deg,${t[5].join(",")})`
      :`linear-gradient(135deg,${t[2]},${t[3]})`;
    return `<button type="button" class="sw ${on?"on":""}" data-k="${t[0]}" aria-pressed="${on}"><i style="background:${bg}"></i>${esc(t[1][currentLang]||t[1].en)}</button>`;
  }).join("")+(()=>{
    const ct=customTheme(),on=colorKey==="custom";
    return `<label class="sw ${on?"on":""}" data-k="custom"><i style="background:linear-gradient(135deg,${ct[2]},${ct[3]})"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></i>${esc(tr("customColor"))}<input type="color" id="customInp" value="${prefs.customColor}" aria-label="${esc(tr("customColor"))}"></label>`;
  })();

  const mark=()=>document.querySelectorAll("#sws .sw").forEach(x=>{
    const on=x.dataset.k===colorKey;
    x.classList.toggle("on",on);
    x.setAttribute("aria-pressed",on);
  });

  document
    .querySelectorAll("#sws .sw")
    .forEach(b=>b.onclick=()=>{
      colorKey=b.dataset.k;
      store.set("pl_color",colorKey);
      applyColor();
      mark();
    });

  /* free colour: updates live while the picker is open, without rebuilding it */
  const inp=$("customInp");
  inp.addEventListener("input",()=>{
    prefs.customColor=inp.value.toLowerCase();
    savePrefs();
    colorKey="custom";
    store.set("pl_color","custom");
    const ct=customTheme();
    inp.parentElement.querySelector("i").style.background=`linear-gradient(135deg,${ct[2]},${ct[3]})`;
    applyColor();
    mark();
  });
}

function setR(v){

  document.documentElement.style.setProperty(
    "--r",
    v+"px"
  );

  $("rval").textContent=num(v);

  $("rr").value=v;
}

$("rr").oninput=e=>{

  setR(+e.target.value);

  store.set(
    "pl_r",
    e.target.value
  );
};

setR(+(store.get("pl_r")||28));

drawSw();

const disarmers=[];

function twoStep(btnId,labelId,idleKey,confirmKey,action){
  const b=$(btnId),lab=$(labelId);
  let armed=false,t=0;
  function disarm(){
    armed=false;clearTimeout(t);
    lab.textContent=tr(idleKey);
    b.removeAttribute("data-armed");
  }
  disarmers.push(disarm);
  b.onclick=()=>{
    if(!armed){
      armed=true;
      lab.textContent=tr(confirmKey);
      b.setAttribute("data-armed","1");
      clearTimeout(t);
      t=setTimeout(disarm,3500);
      return;
    }
    disarm();
    action();
  };
}

let flashT=0;
function flash(msg){
  $("dstat").textContent=msg;
  clearTimeout(flashT);
  flashT=setTimeout(()=>{$("dstat").textContent=""},2600);
}

twoStep("clr","clrL","clear","clearConfirm",()=>{
  data=cleanData({});
  save();
  render();
  flash(tr("cleared"));
});

/* ---------- world clocks ---------- */
const cityName=c=>c[2][currentLang]||c[2].en;
const wcFmts={},wcParts={};

function wcFmt(tz){
  const k=[tz,loc(),prefs.sec,prefs.h12].join("|");
  if(wcFmts[k]) return wcFmts[k];
  const o={timeZone:tz,hour:"2-digit",minute:"2-digit"};
  if(prefs.sec) o.second="2-digit";
  if(prefs.h12) o.hour12=true; else o.hourCycle="h23";
  return (wcFmts[k]=new Intl.DateTimeFormat(loc(),o));
}

function tzParts(tz,d){
  const f=wcParts[tz]||(wcParts[tz]=new Intl.DateTimeFormat("en-US",{
    timeZone:tz,year:"numeric",month:"numeric",day:"numeric",
    hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23"
  }));
  const o={};
  f.formatToParts(d).forEach(x=>{if(x.type!=="literal")o[x.type]=+x.value});
  return o;
}

const SUN='<svg class="si ic-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/></svg>';
const MOON='<svg class="si ic-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/></svg>';
const CHIP_ICONS='<svg class="si ic-off" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg><svg class="si ic-on" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';

const PIN='<svg class="si" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4h6l-1 6 3 3H7l3-3-1-6Z"/><path d="M12 13v7"/></svg>';
const localTz=(()=>{try{return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}catch(e){return "UTC"}})();

function buildWorldChips(){
  const box=$("wcChips");
  box.innerHTML="";
  CITIES.forEach(c=>{
    const b=document.createElement("button");
    b.type="button";b.className="chip";b.dataset.id=c[0];
    b.innerHTML=CHIP_ICONS+"<span></span>";
    b.lastChild.textContent=cityName(c);
    b.onclick=()=>{
      const has=prefs.cities.includes(c[0]);
      if(has&&prefs.clockCity===c[0]) prefs.clockCity="local";   /* removed city can't stay in the header */
      changePref("cities",has?prefs.cities.filter(x=>x!==c[0]):[...prefs.cities,c[0]]);
    };
    box.appendChild(b);
  });
}

function syncWorld(){
  document.querySelectorAll("#wcChips .chip").forEach(b=>{
    const on=prefs.cities.includes(b.dataset.id);
    b.classList.toggle("on",on);
    b.setAttribute("aria-pressed",on);
  });

  const list=$("wcList");
  const sig=currentLang+"|"+prefs.cities.join(",");

  /* rows are only rebuilt when the city list / language changes, so keyboard focus survives */
  if(list.dataset.sig!==sig){
    list.dataset.sig=sig;
    list.innerHTML="";

    const mk=(id,tz,name)=>{
      const r=document.createElement("div");
      r.className="wc-row";r.dataset.tz=tz;r.dataset.id=id;
      r.innerHTML=SUN+MOON+'<div class="wc-name"><b></b><small><span class="wd"></span> · <bdi class="wo"></bdi></small></div><span class="wt"></span><button type="button" class="pin">'+PIN+'</button>';
      r.querySelector("b").textContent=name;
      const pin=r.querySelector(".pin");
      pin.title=tr("pinHeader");
      pin.setAttribute("aria-label",tr("pinHeader")+": "+name);
      pin.onclick=()=>changePref("clockCity",(prefs.clockCity===id&&id!=="local")?"local":id);
      list.appendChild(r);
    };

    mk("local",localTz,tr("localTime"));
    prefs.cities.forEach(id=>{
      const c=CITIES.find(x=>x[0]===id);
      if(c) mk(id,c[1],cityName(c));
    });
    if(!prefs.cities.length){
      const e=document.createElement("div");
      e.className="wc-empty";e.textContent=tr("noCities");
      list.appendChild(e);
    }
  }

  list.querySelectorAll(".wc-row").forEach(r=>{
    const on=r.dataset.id===prefs.clockCity;
    const pin=r.querySelector(".pin");
    pin.classList.toggle("on",on);
    pin.setAttribute("aria-pressed",on);
  });

  tickWorld();
}

function tickWorld(){
  const rows=document.querySelectorAll("#wcList [data-tz]");
  if(!rows.length) return;
  const now=new Date();
  const localDay=Date.UTC(now.getFullYear(),now.getMonth(),now.getDate());
  rows.forEach(r=>{
    const tz=r.dataset.tz,p=tzParts(tz,now);
    r.querySelector(".wt").textContent=wcFmt(tz).format(now);
    const off=Math.round((Date.UTC(p.year,p.month-1,p.day,p.hour,p.minute,p.second)
      -Math.floor(now.getTime()/1000)*1000)/60000);
    const a=Math.abs(off);
    r.querySelector(".wo").textContent=
      "UTC"+(off<0?"-":"+")+String(Math.floor(a/60)).padStart(2,"0")+":"+String(a%60).padStart(2,"0");
    const diff=Math.round((Date.UTC(p.year,p.month-1,p.day)-localDay)/86400000);
    r.querySelector(".wd").textContent=diff===0?tr("today"):diff>0?tr("tomorrow"):tr("yesterday");
    r.classList.toggle("night",p.hour<6||p.hour>=18);
  });
}

/* ---------- personalization wiring ---------- */

function segOn(id,v){
  document.querySelectorAll("#"+id+" button").forEach(b=>{
    const on=b.dataset.v===String(v);
    b.classList.toggle("on",on);
    b.setAttribute("aria-pressed",on);
  });
}

const FONT_STACKS={
  auto:"",
  system:'system-ui,-apple-system,"Segoe UI",Roboto,',
  rounded:'ui-rounded,"SF Pro Rounded","Hiragino Maru Gothic ProN","Nunito","Varela Round","Quicksand","Comic Sans MS",',
  serif:'"Iowan Old Style","Palatino Linotype",Palatino,Georgia,"Times New Roman",',
  mono:'ui-monospace,"SF Mono","Cascadia Code",Consolas,Menlo,"Courier New",'
};
const fontStack=(v,base)=>(FONT_STACKS[v]||"")+base;

function applyPrefs(){
  const r=document.documentElement;
  r.dataset.bg=prefs.bg;
  r.dataset.rowstyle=prefs.rowStyle;
  r.dataset.done=prefs.doneStyle;
  const baseFont=getLang().font;
  document.body.style.fontFamily=fontStack(prefs.font,baseFont);
  document.querySelectorAll("#fontSeg button").forEach(b=>{b.style.fontFamily=fontStack(b.dataset.v,baseFont)});
  segOn("fontSeg",prefs.font);segOn("bgSeg",prefs.bg);segOn("rsSeg",prefs.rowStyle);segOn("dnSeg",prefs.doneStyle);
  $("tgConf").checked=prefs.confetti;
  r.style.fontSize=prefs.fs+"%";
  r.style.setProperty("--blur",prefs.blur+"px");
  r.dataset.density=prefs.dens;
  r.dataset.blobs=prefs.blobs?"on":"off";

  $("rval").textContent=num(+$("rr").value);
  $("fsr").value=prefs.fs;
  $("fsval").textContent=num(prefs.fs)+"%";
  $("blr").value=prefs.blur;
  $("blval").textContent=num(prefs.blur);

  segOn("densSeg",prefs.dens);
  segOn("fdSeg",prefs.fd);
  segOn("digSeg",prefs.dig);

  $("tgHide").checked=prefs.hideDone;
  $("tgSnd").checked=prefs.sound;
  $("tgBlobs").checked=prefs.blobs;
  $("tgH12").checked=prefs.h12;
  $("tgSec").checked=prefs.sec;

  syncWorld();
}

function changePref(k,v,full){
  prefs[k]=v;
  savePrefs();
  if(full){applyLanguage()}else{applyPrefs();updateClock();render()}
}

$("fsr").oninput=e=>changePref("fs",+e.target.value);
$("blr").oninput=e=>changePref("blur",+e.target.value);
document.querySelectorAll("#densSeg button").forEach(b=>b.onclick=()=>changePref("dens",b.dataset.v));
document.querySelectorAll("#fdSeg button").forEach(b=>b.onclick=()=>changePref("fd",+b.dataset.v));
document.querySelectorAll("#digSeg button").forEach(b=>b.onclick=()=>changePref("dig",b.dataset.v,true));
$("tgHide").onchange=e=>changePref("hideDone",e.target.checked);
$("tgSnd").onchange=e=>changePref("sound",e.target.checked);
$("tgBlobs").onchange=e=>changePref("blobs",e.target.checked);
$("tgH12").onchange=e=>changePref("h12",e.target.checked);
$("tgSec").onchange=e=>changePref("sec",e.target.checked);
$("tgConf").onchange=e=>changePref("confetti",e.target.checked);
[["fontSeg","font"],["bgSeg","bg"],["rsSeg","rowStyle"],["dnSeg","doneStyle"]].forEach(([id,k])=>{
  document.querySelectorAll("#"+id+" button").forEach(b=>b.onclick=()=>changePref(k,b.dataset.v));
});

/* ---------- backup / restore ---------- */

$("exp").onclick=()=>{
  const payload={
    app:"weekly-planner",v:1,exportedAt:new Date().toISOString(),
    data,prefs,
    radius:+(store.get("pl_r")||28),
    color:colorKey,
    theme:store.get("pl_theme")||"system",
    lang:currentLang
  };
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;
  a.download="weekly-planner-backup.json";
  document.body.appendChild(a);   /* Firefox needs the link in the DOM */
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1500);
  flash(tr("exported"));
};

$("imp").onclick=()=>$("impFile").click();

$("impFile").onchange=async e=>{
  const f=e.target.files&&e.target.files[0];
  e.target.value="";
  if(!f) return;
  try{
    if(f.size>1048576) throw new Error("big");
    const j=JSON.parse(await f.text());
    if(!j||j.app!=="weekly-planner"||typeof j.data!=="object") throw new Error("bad");

    data=cleanData(j.data);
    prefs=cleanPrefs(j.prefs);
    const r=Math.min(44,Math.max(12,+j.radius||28));
    if(findTheme(j.color)) colorKey=j.color;
    if(j.theme==="light"||j.theme==="dark") store.set("pl_theme",j.theme); else store.del("pl_theme");
    if(I18N[j.lang]) currentLang=j.lang;

    save();savePrefs();
    store.set("pl_color",colorKey);
    store.set("pl_r",r);
    store.set("pl_lang",currentLang);
    setR(r);
    applyTheme();
    applyLanguage();
    flash(tr("imported"));
  }catch(err){
    flash(tr("importFail"));
  }
};

twoStep("rstP","rstPL","resetPrefs","resetConfirm",()=>{
  ["pl_prefs","pl_r","pl_color","pl_theme"].forEach(k=>store.del(k));
  prefs=cleanPrefs({});
  colorKey="blue";
  setR(28);
  applyTheme();
  drawSw();
  applyLanguage();
  flash(tr("prefsReset"));
});

/* ---------- timer ---------- */

const C=2*Math.PI*52;

let total=25*60,
    left=total,
    iv=null,
    endAt=0;

const mm=s=>
  num(
    String(
      Math.floor(s/60)
    ).padStart(2,"0")
  )
  +
  ":"
  +
  num(
    String(
      s%60
    ).padStart(2,"0")
  );

function draw(){

  $("tt").textContent=
    mm(left);

  $("fg").style.strokeDashoffset=
    C*(1-left/total);

  document.title=
    iv
      ?mm(left)+" | "+tr("planner")
      :tr("title");
}

function syncPresets(){
  const m=currentMinutes();
  document.querySelectorAll("#presets .btn").forEach(b=>
    b.classList.toggle("on",+b.dataset.m===m));
}

function refreshGo(){
  $("go").textContent=iv?tr("stop"):(left<total&&left>0?tr("resume"):tr("start"));
}

function setMin(m,silent=false){

  if(!silent) stop();

  total=
    left=
      Math.max(
        1,
        Math.round(m)
      )*60;

  draw();

  document
    .querySelectorAll("#presets .btn")
    .forEach(b=>
      b.classList.toggle(
        "on",
        +b.dataset.m===m
      )
    );
}

function stop(){

  clearInterval(iv);

  iv=null;

  $("go").textContent=
    left<total&&left>0
      ?tr("resume")
      :tr("start");
}

function beep(){

  if(prefs.sound){
  try{

    const a=
      new (
        window.AudioContext||
        window.webkitAudioContext
      )();

    [0,.35,.7].forEach(t=>{

      const o=a.createOscillator(),
            g=a.createGain();

      o.frequency.value=880;

      o.connect(g);

      g.connect(a.destination);

      g.gain.setValueAtTime(
        .25,
        a.currentTime+t
      );

      g.gain.exponentialRampToValueAtTime(
        .001,
        a.currentTime+t+.3
      );

      o.start(
        a.currentTime+t
      );

      o.stop(
        a.currentTime+t+.3
      );
    });

    setTimeout(()=>{try{a.close()}catch(e){}},1400);

  }catch(e){}
  }

  if(navigator.vibrate)
    navigator.vibrate(
      [200,100,200]
    );
}

function tick(){

  left=
    Math.max(
      0,
      Math.round(
        (endAt-Date.now())/1000
      )
    );

  draw();

  if(left<=0){

    stop();

    $("go").textContent=tr("start");

    left=total;

    draw();

    beep();
  }
}

$("go").onclick=()=>{

  if(iv){

    stop();

    $("go").textContent=tr("resume");

    draw();

    return;
  }

  endAt=
    Date.now()+left*1000;

  iv=
    setInterval(
      tick,
      250
    );

  $("go").textContent=tr("stop");

  tick();
};

$("rs").onclick=()=>{

  stop();

  left=total;

  $("go").textContent=tr("start");

  draw();
};

function drawPresets(){
  $("presets").innerHTML=
    [15,25,45,60]
      .map(m=>`
        <button
          class="btn soft"
          data-m="${m}"
        >
          ${num(m)} ${tr("minuteShort")}
        </button>
      `)
      .join("");

  document
    .querySelectorAll("#presets .btn")
    .forEach(b=>
      b.onclick=()=>
        setMin(+b.dataset.m)
    );
}

$("cm").addEventListener(
  "change",
  e=>{
    const v=Math.min(600,Math.round(+e.target.value));

    if(v>0){
      e.target.value=v;
      setMin(v);
    }else{
      e.target.value="";
    }
  }
);


/* ---------- custom minutes: glass stepper ---------- */
(function(){
  const cm=$("cm");
  const clamp=v=>Math.min(600,Math.max(1,v));

  function bump(d){
    if(reduceMotion.matches||!cm.animate) return;
    cm.animate([
      {transform:"translateY("+(d>0?45:-45)+"%)",opacity:.2},
      {transform:"none",opacity:1}
    ],{duration:210,easing:"cubic-bezier(.2,.9,.3,1.15)"});
  }

  function step(d){
    const base=Math.round(+cm.value)||currentMinutes();
    const v=clamp(base+d);
    if(v===base&&cm.value!=="") return;
    cm.value=v;
    setMin(v);
    bump(d);
  }

  let holdT=0;
  function startHold(d){
    step(d);
    let n=0;
    holdT=setTimeout(function loop(){
      n++;
      step(d*(n>12?5:1));
      holdT=setTimeout(loop,n>12?70:110);
    },380);
  }
  const stopHold=()=>clearTimeout(holdT);

  document.querySelectorAll(".stp-b").forEach(b=>{
    const d=+b.dataset.d;
    b.addEventListener("pointerdown",e=>{
      if(e.button>0) return;
      e.preventDefault();
      startHold(d);
    });
    b.addEventListener("pointerup",stopHold);
    b.addEventListener("pointerleave",stopHold);
    b.addEventListener("pointercancel",stopHold);
    b.addEventListener("click",e=>{if(e.detail===0) step(d)});   /* keyboard / assistive tech */
  });
  window.addEventListener("blur",stopHold);

  cm.addEventListener("keydown",e=>{
    if(e.key==="ArrowUp"||e.key==="ArrowDown"){
      e.preventDefault();
      step((e.key==="ArrowUp"?1:-1)*(e.shiftKey?10:1));
    }
  });
  cm.addEventListener("wheel",e=>{
    if(document.activeElement!==cm) return;
    e.preventDefault();
    step(e.deltaY<0?1:-1);
  },{passive:false});
})();

drawPresets();
setMin(25);

function updateClock() {
  const c=CITIES.find(x=>x[0]===prefs.clockCity);
  const opt={hour:"2-digit",minute:"2-digit"};
  if(c) opt.timeZone=c[1];
  if(prefs.sec) opt.second="2-digit";
  if(prefs.h12) opt.hour12=true; else opt.hourCycle="h23";
  document.getElementById("clock").textContent=
    new Date().toLocaleTimeString(loc(),opt);
  const lab=document.getElementById("clockCity");
  lab.hidden=!c;
  if(c) lab.textContent=cityName(c);
  tickWorld();
}

applyLanguage();
updateDate();
updateClock();
setInterval(updateClock, 1000);


/* ---------- custom scrollbar (same look in Firefox, Chrome, Safari) ---------- */
function makeScroll(box,el,content){
  if(!box||!el) return;
  const track=box.querySelector(".sbx-track"),thumb=track.firstElementChild;
  let idleT=0,drag=null;

  function upd(){
    const sh=el.scrollHeight,ch=el.clientHeight,can=sh>ch+1;
    box.classList.toggle("scrollable",can);
    el.classList.toggle("can-up",can&&el.scrollTop>4);
    el.classList.toggle("can-down",can&&el.scrollTop+ch<sh-4);
    if(!can) return;
    const th=track.clientHeight,h=Math.max(36,th*ch/sh),max=th-h;
    thumb.style.height=h+"px";
    thumb.style.transform="translateY("+(max*el.scrollTop/(sh-ch))+"px)";
  }

  function poke(){
    box.classList.add("active");
    clearTimeout(idleT);
    idleT=setTimeout(()=>{if(!drag)box.classList.remove("active")},900);
  }

  el.addEventListener("scroll",()=>{upd();poke()},{passive:true});
  window.addEventListener("resize",upd);
  new MutationObserver(upd).observe(el,{childList:true});
  if(window.ResizeObserver){
    const ro=new ResizeObserver(upd);
    ro.observe(el);
    if(content) ro.observe(content);
  }
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(upd);

  thumb.addEventListener("pointerdown",e=>{
    e.preventDefault();
    thumb.setPointerCapture(e.pointerId);
    drag={y:e.clientY,top:el.scrollTop};
    box.classList.add("drag","active");
    el.style.scrollBehavior="auto";
  });
  thumb.addEventListener("pointermove",e=>{
    if(!drag) return;
    const th=track.clientHeight,h=thumb.offsetHeight,
          ratio=(el.scrollHeight-el.clientHeight)/Math.max(1,th-h);
    el.scrollTop=drag.top+(e.clientY-drag.y)*ratio;
  });
  function end(){
    if(!drag) return;
    drag=null;
    box.classList.remove("drag");
    el.style.scrollBehavior="";
    poke();
  }
  thumb.addEventListener("pointerup",end);
  thumb.addEventListener("pointercancel",end);

  track.addEventListener("pointerdown",e=>{
    if(e.target!==track) return;
    const r=thumb.getBoundingClientRect();
    el.scrollBy({top:(e.clientY<r.top?-1:1)*el.clientHeight*.85,behavior:"smooth"});
  });

  upd();
}
makeScroll($("rowsWrap"),$("rows"));
makeScroll($("drawerWrap"),$("dscroll"),$("dinner"));