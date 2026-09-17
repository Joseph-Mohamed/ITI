# HTML Summary 📝

## 🌐 What is HTML?

HTML stands for **HyperText Markup Language**.

HTML هي اللغة اللي بنستخدمها علشان نعمل الـ structure بتاع الـ websites والـ web pages، ونقدر نضيف بيها حاجات كتير زي الـ text والـ images والـ links والـ forms والـ tables والـ media.

كمان من الحاجات المهمة فيها إننا نقدر نعمل links ونستخدمها علشان ننتقل من page لصفحة تانية أو من resource لـ resource تاني.

HTML مش Programming Language، دي **Markup Language**، وبتعتبر من أهم الحاجات في الـ Web Development.

### 🌐 HTML VS CSS VS JavaScript

* **HTML** → للـ structure والمحتوى.
* **CSS** → للـ styling والشكل.
* **JavaScript** → للـ interaction والـ behavior.

---

## 🏷️ أهم الـ Tags اللي اتعلمتها

من أشهر الـ tags واستخداماتها:

* `h1` لحد `h6` → للـ headings
* `p` → paragraph
* `a` → links
* `img` → images
* `form` → forms
* `label` → label بتاعة الـ input
* `input` → لإدخال البيانات
* `button` → buttons
* `select` → أختار حاجة من list
* `table` → tables
* `tr` → table row
* `th` → table header
* `td` → table data
* `thead` → رأس الجدول
* `tbody` → جسم الجدول
* `tfoot` → آخر الجدول
* `div` → container عادي
* `span` → inline container
* `br` → line break
* `hr` → horizontal line
* `ul` و `ol` و `li` → lists

---

## 🧩 Semantic Tags

في HTML في حاجة اسمها **Semantic Tags**، ودي tags بتوضح معنى الجزء اللي جواها.

من أهمها:

`header` - `nav` - `main` - `section` - `article` - `aside` - `footer`

وكمان:

`figure` - `figcaption` - `details` - `summary`

مثلاً `details` بستخدمها علشان أعمل جزء يقدر المستخدم يفتحه ويقفله، و `summary` بيكون العنوان اللي بضغط عليه.

---

## 🎬 Media

HTML بتخليني أضيف أنواع مختلفة من الـ media في الصفحة.

أهم الـ tags هنا:

* `img` → للصور
* `audio` → للصوت
* `video` → للفيديو
* `source` → بحدد بيه مصدر الـ audio أو video
* `track` → للـ subtitles أو captions
* `iframe` → أقدر أعرض بيه content من مكان تاني جوه الصفحة، زي YouTube أو Google Maps

---

## 🔽 Select VS Details VS Datalist

الـ `select` بستخدمه لما عايز المستخدم يختار option من list.

أما `details` فبستخدمه علشان أخلي جزء من الكلام يفتح ويتقفل وأعرض information إضافية.

و `datalist` بستخدمه علشان أقدم suggestions للمستخدم وهو بيكتب في input.

---

## 💬 P VS Q VS Blockquote

* `p` → للـ paragraph.
* `q` → للـ quotation القصير جوه الكلام.
* `blockquote` → للـ quotation الأطول.

---

## ⚙️ Attributes

الـ Attributes بتضيف information أو behavior للـ HTML elements.

من أهم الـ attributes اللي اتعلمتها:

`id` و `class` و `href` و `src` و `alt` و `title` و `name` و `value` و `type` و `placeholder` و `required` و `disabled` و `checked` و `selected` و `action` و `method` و `target`.

مثلاً:

* `href` → بستخدمها مع الـ links.
* `src` → بحدد بيها source بتاع image أو media.
* `alt` → alternative text للصورة.
* `id` → بستخدمه علشان أحدد element معين.
* `class` → بستخدمها علشان أجمع elements أو أستخدمها مع CSS.
* `type` → بيحدد نوع الـ input.

---

## ⌨️ Input Types

الـ `input` ليه types كتير حسب الحاجة اللي عايز المستخدم يدخلها.

من أهمهم:

`text` - `password` - `email` - `number` - `date` - `time` - `radio` - `checkbox` - `file` - `submit` - `reset` - `button` - `color` - `range` - `search` - `url` - `tel`

والـ `type` attribute هو اللي بيحدد نوع الـ input.

---

## 📝 Forms

الـ Forms مهمة علشان أقدر أخلي المستخدم يدخل data ويبعتها.

من أهم الـ tags اللي بستخدمها معاها:

`form` - `label` - `input` - `select` - `textarea` - `button`

والـ `form` عنده attributes مهمة زي:

* `action` → المكان اللي هتتبعتله البيانات.
* `method` → الطريقة اللي هتتبعت بيها البيانات زي `GET` أو `POST`.

### 📤 GET VS POST

* **GET** → البيانات بتظهر في الـ URL وبتستخدم غالبًا في طلب البيانات.
* **POST** → البيانات بتتبعت في request body ومناسبة أكتر لإرسال بيانات.

---

## 📄 HTML Document

في الأساس عندي:

* `html` → الـ root بتاع الصفحة.
* `head` → فيه information عن الصفحة.
* `body` → فيه المحتوى اللي بيظهر للمستخدم.
* `title` → اسم الصفحة اللي بيظهر في الـ browser tab.
* `meta` → information عن الصفحة.
* `link` → بستخدمه مثلاً علشان أوصل CSS file بالـ HTML.

---

## 🆔 ID VS Class

* **`id`** → بستخدمه علشان أحدد element معين، والـ `id` المفروض يكون unique في الصفحة.
* **`class`** → بستخدمها مع أكتر من element لما يكونوا واخدين نفس الـ style أو نفس التصنيف.

---

## 📊 Tables

الـ tables بستخدمها علشان أعرض البيانات في شكل جدول.

أهم الـ tags بتاعتها:

`table` - `thead` - `tbody` - `tfoot` - `tr` - `th` - `td`

* `tr` → row
* `th` → header cell
* `td` → data cell

---

## 📋 Lists

في HTML عندي أنواع مختلفة من الـ lists:

* `<ul>` → Unordered List
* `<ol>` → Ordered List
* `<li>` → List Item

الـ `ul` بتعمل list من غير ترتيب، والـ `ol` بتعمل list بترتيب أو أرقام.

---

## 🧱 Div VS Span

* **`div`** → container عادي وغالبًا بيستخدم مع block content.
* **`span`** → container صغير للـ inline content.

الاتنين ممكن أستخدمهم لتنظيم المحتوى، لكن كل واحد ليه استخدام مختلف حسب المكان اللي موجود فيه.

---

## 🖼️ Image VS Audio VS Video

* **`img`** → للصور.
* **`audio`** → للصوت.
* **`video`** → للفيديو.

وممكن أستخدم `source` مع الـ audio والـ video علشان أحدد مصدر الملف.

---

## 💡 Final Thoughts

HTML من أهم الحاجات في الـ Web Development، واتعلمت فيها إزاي أعمل structure للصفحة وأضيف text وlinks وimages وforms وtables وmedia وغيرها.
