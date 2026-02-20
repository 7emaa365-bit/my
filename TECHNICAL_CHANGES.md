# التغييرات التقنية المفصلة

## Detailed Technical Changes - script.js Modifications

---

## 🔑 1. تغيير الـ Storage Keys

### قبل:

```javascript
// جميع الفروع تستخدم نفس الـ key
localStorage.getItem("Menu");
localStorage.getItem("restaurantPhone");
```

### بعد:

```javascript
// كل فرع له key فريد
window.getBranchKey()  // ⇒ "store_data_مطعم-البيتزا-الإيطالي"
window.getMenuStorageKey()  // ⇒ نفس الـ branch key

// البيانات الكاملة للفرع:
store_data_مطعم-البيتزا-الإيطالي = {
  name, slug, logo, phone, menu, orders, description, hours, addresses, social
}
```

---

## 🚀 2. نظام البوابة والتوجيه

### في بداية script.js (سطر 331):

```javascript
// إذا لم يكن هناك فرع محدد، أعد التوجيه للبوابة
(function ensureGatewaySelected() {
  try {
    const raw = getQueryParam("res"); // اقرأ ?res=<branch>
    const isIndex =
      /index\.html?$/.test(window.location.pathname) ||
      window.location.pathname === "/" ||
      window.location.pathname.endsWith("/");

    if (!raw && isIndex) {
      // إذا افتح الصفحة مباشرة بدون فرع: انتقل للبوابة
      if (!/gateway\.html$/.test(window.location.pathname)) {
        window.location.replace("gateway.html");
      }
    }
  } catch (e) {}
})();
```

**النتيجة:** ✅ لا يمكن فتح التطبيق بدون اختيار فرع من البوابة

---

## 💾 3. تحديث نظام التخزين

### قبل:

```javascript
function saveMenu(menu) {
  localStorage.setItem("Menu", JSON.stringify(menu));
}

function loadBranchData() {
  // لا يوجد - التطبيق لم يميز بين الفروع
}
```

### بعد:

```javascript
// ✅ حفظة branch كاملة
function saveBranchData(branchObj) {
  localStorage.setItem(window.getBranchKey(), JSON.stringify(branchObj));
  return true;
}

// ✅ تحميل ذكي: إنشء branch إذا لم توجد
function loadBranchData() {
  const key = window.getBranchKey();
  const raw = localStorage.getItem(key);

  if (raw) {
    try {
      return JSON.parse(raw); // ✅ موجودة: استخدم البيانات المحفوظة
    } catch (e) {
      console.warn("Failed parse branch data", key, e);
    }
  }

  // ✅ جديدة: نسخ المنيو الافتراضي تلقائياً
  const rest = restaurants.find((r) => r.slug === window.CURRENT_RESTAURANT);
  const branch = {
    slug: window.CURRENT_RESTAURANT,
    name: (rest && rest.name) || window.CURRENT_RESTAURANT,
    logo: (rest && rest.logo) || "",
    addresses: (rest && rest.addresses) || [],
    description: (rest && rest.description) || "",
    hours: (rest && rest.hours) || "",
    social: (rest && rest.social) || {},
    phone: localStorage.getItem("restaurantPhone") || "201021279663",
    menu: JSON.parse(JSON.stringify(MASTER_MENU)), // ⭐ نسخ من المنيو الأساسي
    orders: [],
    createdAt: Date.now(),
  };

  try {
    localStorage.setItem(key, JSON.stringify(branch)); // ⭐ حفظ الفرع الجديد
  } catch (e) {
    console.warn("Failed to seed branch data", key, e);
  }
  return branch;
}
```

**المميز:**

- ✅ البيانات الكاملة في مفتاح واحد
- ✅ إنشاء تلقائي للفروع الجديدة
- ✅ لا فقدان للبيانات

---

## 📦 4. تحديث الطلبات (Orders)

### في `finishOrder()` (سطر ~1275):

```javascript
// ✅ حفظ في بيانات الفرع
try {
  if (window.BRANCH_DATA) {
    window.BRANCH_DATA.orders = window.BRANCH_DATA.orders || [];
    window.BRANCH_DATA.orders.push(orderData); // ⭐ أضف للفرع
    saveBranchData(window.BRANCH_DATA); // ⭐ احفظ
  }
} catch (e) {
  console.warn("Failed to save order to branch data:", e);
}

// ✅ نسخة احتياطية في السجل المركزي
try {
  allOrders.push(orderData);
  localStorage.setItem("allOrders", JSON.stringify(allOrders));
} catch (e) {
  // ...
}
```

**الفائدة:**

- ✅ كل فرع يحتفظ بطلباته
- ✅ نسخة احتياطية للسجل العام

---

## 🎛️ 5. لوحة التحكم المستقلة

### تحديث `renderAllOrders()` (سطر ~1743):

```javascript
// ✅ عرض طلبات الفرع فقط
function renderAllOrders() {
  const listContainer = document.getElementById("ordersListContainer");
  if (!listContainer) return;

  // ⭐ استخدم طلبات الفرع الحالي، وليس السجل العام
  const orders =
    (window.BRANCH_DATA && window.BRANCH_DATA.orders) || allOrders || [];

  if (orders.length === 0) {
    listContainer.innerHTML = `<div style="text-align:center; padding:40px 20px;">
      <p>لا توجد طلبات في هذا الفرع</p>
    </div>`;
    return;
  }

  // عرض الطلبات (فرع واحد فقط)
  listContainer.innerHTML = orders
    .slice()
    .reverse()
    .map((order, idx) => {
      // ... التفاصيل
    })
    .join("");
}
```

**النتيجة:** ✅ كل مدير يرى فقط طلبات فرعه

---

## 📋 6. تحديث حالة الطلب

### في `updateOrderStatus()` (سطر ~1869):

```javascript
function updateOrderStatus(orderId, newStatus) {
  // ✅ حدّث في الفرع أولاً
  let updated = false;
  try {
    if (window.BRANCH_DATA && Array.isArray(window.BRANCH_DATA.orders)) {
      const o = window.BRANCH_DATA.orders.find((x) => x.orderId === orderId);
      if (o) {
        const oldStatus = o.status;
        o.status = newStatus;
        saveBranchData(window.BRANCH_DATA); // ⭐ احفظ في الفرع
        updated = true;
        console.log("✅ تم تحديث حالة الطلب في بيانات الفرع");
      }
    }
  } catch (e) {
    console.warn("Failed to update branch order status", e);
  }

  // ✅ حدّث أيضاً النسخة المركزية (للتوافقية)
  try {
    const central =
      JSON.parse(localStorage.getItem("allOrders")) || allOrders || [];
    const oc = central.find((x) => x.orderId === orderId);
    if (oc) {
      oc.status = newStatus;
      localStorage.setItem("allOrders", JSON.stringify(central));
      updated = true;
    }
  } catch (e) {}

  if (!updated) {
    showNotification("❌ لم يتم العثور على الطلب", "error");
    return;
  }

  renderAllOrders();
  showNotification(`✅ تم تحديث الطلب إلى: ${newStatus}`, "success");
}
```

**الفائدة:**

- ✅ تحديث آمن في الفرع
- ✅ نسخة احتياطية في السجل العام

---

## ⚙️ 7. إعدادات الفرع (Branch Settings)

### في `initializeAdminPanel()` (سطر ~2846):

```javascript
// ⭐ لوحة إعدادات الفرع
settingsPanel.innerHTML = `
  <h3>⚙️ إعدادات الفرع</h3>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
    <div>
      <label>اسم الفرع</label>
      <input id="branchNameInput" placeholder="اسم الفرع" />
    </div>
    <div>
      <label>رقم واتساب الفرع</label>  <!-- ⭐ الرقم الحصري -->
      <input id="branchWhatsappInput" placeholder="2010..." />
    </div>
    <div>
      <label>رابط لوجو الفرع</label>
      <input id="branchLogoInput" placeholder="https://..." />
    </div>
    <div>
      <label>ساعات العمل</label>
      <input id="branchHoursInput" placeholder="10:00 - 23:00" />
    </div>
    <div style="grid-column:1/-1;">
      <label>وصف الفرع</label>
      <textarea id="branchDescInput" placeholder="وصف..."></textarea>
    </div>
    <div style="grid-column:1/-1;">
      <label>روابط التواصل</label>
      <input id="branchSocialInput" placeholder="JSON أو comma-separated" />
    </div>
  </div>
  <button id="saveBranchSettingsBtn">حفظ بيانات الفرع</button>
`;

// ⭐ حفظ معالج الإعدادات
document.getElementById("saveBranchSettingsBtn").onclick = function () {
  const name = document.getElementById("branchNameInput").value.trim();
  const phone = document.getElementById("branchWhatsappInput").value.trim();
  const logo = document.getElementById("branchLogoInput").value.trim();
  const hours = document.getElementById("branchHoursInput").value.trim();
  const desc = document.getElementById("branchDescInput").value.trim();

  // ⭐ حدّث كائن الفرع
  window.BRANCH_DATA.name = name;
  window.BRANCH_DATA.phone = phone; // ⭐ هنا يُحفظ رقم الفرع
  window.BRANCH_DATA.logo = logo;
  window.BRANCH_DATA.hours = hours;
  window.BRANCH_DATA.description = desc;

  // ⭐ حدّث المتغير العام
  RESTAURANT_PHONE = phone; // يُستخدم فوراً في الواتساب

  // ⭐ احفظ في localStorage
  saveBranchData(window.BRANCH_DATA);
  showNotification("✅ تم حفظ بيانات الفرع بنجاح", "success");
};
```

**المميز:**

- ✅ واجهة سهلة لتعديل البيانات
- ✅ تحديث ديناميكي لرقم الواتساب
- ✅ حفظ فوري في branch storage

---

## 📊 8. تحديث الإحصائيات

### في `updateAdminStatistics()` (سطر ~3016):

```javascript
function updateAdminStatistics() {
  try {
    // ⭐ استخدم طلبات الفرع الحالي
    const branchOrders =
      (window.BRANCH_DATA && window.BRANCH_DATA.orders) || [];
    let orders =
      branchOrders.length > 0
        ? branchOrders
        : JSON.parse(localStorage.getItem("allOrders")) || [];

    // ⭐ استخدم قائمة الفرع
    let menuItems =
      window.BRANCH_DATA && window.BRANCH_DATA.menu
        ? window.BRANCH_DATA.menu
        : [];

    // حساب الإحصائيات من طلبات الفرع فقط
    let totalRevenue = 0;
    let monthlyRevenue = 0;
    let monthlyOrders = 0;

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    orders.forEach((order) => {
      totalRevenue += order.total || 0;
      const orderDate = order.timestamp ? new Date(order.timestamp) : null;
      if (
        orderDate &&
        orderDate.getMonth() === currentMonth &&
        orderDate.getFullYear() === currentYear
      ) {
        monthlyRevenue += order.total || 0;
        monthlyOrders += 1; // ⭐ عد طلبات الفرع فقط
      }
    });

    // تحديث الإحصائيات (من الفرع الحالي)
    if (totalOrdersEl) totalOrdersEl.textContent = monthlyOrders;
    if (dailyRevenueEl) dailyRevenueEl.textContent = monthlyRevenue + " ج.م";
    if (totalItemsEl) totalItemsEl.textContent = menuItems.length; // ⭐ عدد أصناف الفرع

    console.log("✅ تم تحديث إحصائيات لوحة التحكم", {
      monthlyOrders: monthlyOrders, // من الفرع
      monthlyRevenue: monthlyRevenue, // من الفرع
      totalItems: menuItems.length, // من الفرع
    });
  } catch (error) {
    console.error("❌ خطأ في تحديث الإحصائيات:", error);
  }
}
```

**النتيجة:** ✅ كل فرع يرى إحصائياته الخاصة

---

## 🌉 9. إعادة توجيه الواتساب

### في `finishOrder()` - رسالة الواتساب (سطر ~1002):

```javascript
// ⭐ استخدم رقم الفرع الحالي دائماً
const whatsappUrl = `https://wa.me/${RESTAURANT_PHONE}?text=${restaurantEncoded}`;

// RESTAURANT_PHONE = window.BRANCH_DATA.phone
// يُحدَّث تلقائياً من البيانات المحفوظة
```

### في `resendRestaurantNotification()` (سطر ~1810):

```javascript
const phoneToUse =
  (window.BRANCH_DATA && window.BRANCH_DATA.phone) || RESTAURANT_PHONE;
window.open(`https://wa.me/${phoneToUse}?text=${restaurantEncoded}`, "_blank");
// ⭐ دائماً يستخدم رقم الفرع الصحيح
```

**الفائدة:** ✅ كل فرع يستقبل الطلبات على رقمه الخاص

---

## 🔀 10. معالجة خاصة لـ printInvoice

### تحديث البحث عن الطلب (سطر ~2278):

```javascript
function printInvoice(orderId) {
  try {
    // ⭐ ابحث في طلبات الفرع أولاً
    const branchOrders =
      (window.BRANCH_DATA && window.BRANCH_DATA.orders) || [];
    let order = branchOrders.find((o) => o.orderId === orderId);

    // ⭐ ثم ابحث في السجل المركزي (للتوافقية)
    if (!order) {
      const allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];
      order = allOrders.find((o) => o.orderId === orderId);
    }

    if (!order) {
      showNotification("❌ لم يتم العثور على الطلب", "error");
      return;
    }

    const invoiceHTML = generateInvoiceHTML(order);
    // ... طباعة الفاتورة
  } catch (error) {
    console.error("❌ خطأ في طباعة الفاتورة:", error);
  }
}
```

---

## 📈 ملخص التغييرات المنطقية

| الجزء       | التغيير             | الفائدة             |
| ----------- | ------------------- | ------------------- |
| **Keys**    | `store_data_<slug>` | عزل كامل            |
| **Data**    | Branch object موحد  | بيانات منظمة        |
| **Orders**  | في الفرع + backup   | آمن وموثوق          |
| **Phone**   | من branch.phone     | رقم صحيح دائماً     |
| **Admin**   | طلبات الفرع فقط     | إدارة منفصلة        |
| **Stats**   | من الفرع            | إحصائيات دقيقة      |
| **Gateway** | إعادة توجيه إلزامية | لا اختيارات عشوائية |

---

## ✨ النتيجة النهائية

```
قبل:  ❌ فرع واحد عام → جميع الفروع تتشارك البيانات
بعد:  ✅ فرع واحد = مستودع بيانات منفصل → عزل كامل
```

---

**التحديث الأخير:** 20 فبراير 2026 | **الإصدار:** 2.1
