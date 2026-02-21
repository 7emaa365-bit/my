/* ==================================================
  My Order
  ================================================== 
    
    👨‍💻 Developer: Ibrahim Mohamed
    📧 Email: ibra7im.engineer@gmail.com
    📱 Instagram: @ibra7im_mo7amad
    💼 LinkedIn: Ibrahim Mohamed
    🌐 Contact: https://www.linkedin.com/in/ibra7im-mo7amed
    🌟 Quality: 5 Stars Professional Grade
    ⚡ Version: 2.0 - Fully Professional
    
    ================================================== */

/* ==================================================
    1. قاعدة البيانات (Menu Items Database)
    ================================================== */

(function () {
  "use strict";

  // API base (ضبط المنفذ/المجال هنا إذا كنت تستخدم خادم على منفذ مختلف)
  const API_BASE = window.API_BASE || "http://localhost:8080";

  // بيانات افتراضية احتياطية في حال عدم وجود بيانات في LocalStorage أو Firebase
  const defaultItems = [
    // --- قسم الأطعمة (Food) ---
    {
      id: 1,
      name: "برجر كنج كلاسيك",
      price: 120,
      cat: "food",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    },
    {
      id: 2,
      name: "بيتزا مارغريتا",
      price: 150,
      cat: "food",
      img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500",
    },
    {
      id: 3,
      name: "سباجيتي بولونيز",
      price: 110,
      cat: "food",
      img: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=500",
    },
    {
      id: 6,
      name: "برجر دبل تشيز",
      price: 160,
      cat: "food",
      img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500",
    },
    {
      id: 7,
      name: "فاهيتا دجاج",
      price: 130,
      cat: "food",
      img: "https://i.ytimg.com/vi/9rQ9sCsuhRE/maxresdefault.jpg",
    },
    {
      id: 8,
      name: "تشيكن سلايدر",
      price: 95,
      cat: "food",
      img: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638785302646390343",
    },
    {
      id: 9,
      name: "سلطة خضراء",
      price: 80,
      cat: "food",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
    },
    {
      id: 10,
      name: "سوشي سيت",
      price: 220,
      cat: "food",
      img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500",
    },
    {
      id: 16,
      name: "شاورما دجاج",
      price: 90,
      cat: "food",
      img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500",
    },
    {
      id: 17,
      name: "بطاطس مقلية",
      price: 50,
      cat: "food",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDvjHKJr-qPCjvGXYHS58a5JQeOo1nDTHtg&s",
    },

    // --- قسم المشروبات (Drinks) ---
    {
      id: 4,
      name: "عصير برتقال طبيعي",
      price: 30,
      cat: "drinks",
      img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=500",
    },
    {
      id: 11,
      name: "عصير مانجو طازج",
      price: 35,
      cat: "drinks",
      img: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=500",
    },
    {
      id: 12,
      name: "لاتيه بارد",
      price: 40,
      cat: "drinks",
      img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500",
    },
    {
      id: 13,
      name: "كابتشينو",
      price: 38,
      cat: "drinks",
      img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500",
    },
    {
      id: 19,
      name: "عصير تفاح فريش",
      price: 33,
      cat: "drinks",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgod5ahYgnGxjCQkZvC4NGvlJuZL97HaSYOA&s",
    },
    {
      id: 20,
      name: "سموذي التوت",
      price: 48,
      cat: "drinks",
      img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500",
    },

    // --- قسم الحلويات (Sweets) ---
    {
      id: 5,
      name: "كعكة الشوكولاتة",
      price: 70,
      cat: "sweets",
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
    },
    {
      id: 14,
      name: "تشيز كيك فراولة",
      price: 85,
      cat: "sweets",
      img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500",
    },
    {
      id: 15,
      name: "بسبوسة بالمكسرات",
      price: 45,
      cat: "sweets",
      img: "https://www.exception-group.com/wp-content/uploads/2024/08/1.webp",
    },
    {
      id: 18,
      name: "كريب نوتيلا",
      price: 60,
      cat: "sweets",
      img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500",
    },
    // --- أصناف إضافية (New Items) ---

    {
      id: 21,
      name: "مشويات مشكلة (كباب وكفتة)",
      price: 280,
      cat: "food",
      img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500",
    },
    {
      id: 22,
      name: "دجاج مقلي (بروستد)",
      price: 140,
      cat: "food",
      img: "https://cdn.arabsstock.com/uploads/images/180294/a-collection-of-crispy-fried-thumbnail-180294.webp",
    },
    {
      id: 23,
      name: "ستيك لحم ريب آي",
      price: 350,
      cat: "food",
      img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500",
    },
    {
      id: 24,
      name: "كلوب ساندوتش",
      price: 95,
      cat: "food",
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500",
    },
    {
      id: 25,
      name: "تاكو مكسيكي",
      price: 110,
      cat: "food",
      img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500",
    },
    {
      id: 26,
      name: "سلطة سيزر دجاج",
      price: 85,
      cat: "food",
      img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500",
    },
    {
      id: 27,
      name: "هوت دوج سبيشال",
      price: 65,
      cat: "food",
      img: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?w=500",
    },
    {
      id: 28,
      name: "جمبري مشوي",
      price: 220,
      cat: "food",
      img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500",
    },
    {
      id: 29,
      name: "لازانيا باللحم",
      price: 130,
      cat: "food",
      img: "https://images.arla.com/recordid/400FD751-4B22-4CC2-BE79C5E5B417A2F5/easy-beef-lasagna-with-bechamel-sauce.jpg",
    },
    {
      id: 30,
      name: "أجنحة دجاج حارة",
      price: 90,
      cat: "food",
      img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500",
    },
  ];

  // ----- إعداد بيانات المطاعم (Gateway) -----
  const restaurants = [
    {
      name: "مطعم البيتزا الإيطالي",
      slug: "مطعم-البيتزا-الإيطالي",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIJ-sXReSok67nDDw0imkkDdSCFZPtAbFA5Q&s",
      addresses: ["شارع النيل، القاهرة"],
    },
    {
      name: "برجر بازوكا",
      slug: "برجر-بازوكا",
      logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
      addresses: ["ميدان التحرير، وسط البلد"],
    },
    {
      name: "مطعم السوشي الياباني",
      slug: "مطعم-السوشي-الياباني",
      logo: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=500",
      addresses: ["الشارقة مول، التجمع الخامس"],
    },
    {
      name: "دجاج ستريت",
      slug: "دجاج-ستريت",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7wbWL7yM23ASrpOVqlwllQO4JHH47STzwg&s",
      addresses: ["شارع قصر النيل"],
    },
    {
      name: "كافيه الفن الحديث",
      slug: "كافيه-الفن-الحديث",
      logo: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=500",
      addresses: ["شارع الهرم، الجيزة"],
    },
  ];

  // Build default menu copy for each restaurant so each starts with same items
  const defaultMenus = {};
  restaurants.forEach((r) => {
    try {
      // deep clone MASTER_MENU to avoid shared references
      // MASTER_MENU is the master copy of the default menu items
      // (keeps original menu as requested)
      defaultMenus[r.slug] = JSON.parse(JSON.stringify(defaultItems));
    } catch (e) {
      defaultMenus[r.slug] = defaultItems.slice();
    }
  });

  // Master menu variable (explicit name requested)
  const MASTER_MENU = JSON.parse(JSON.stringify(defaultItems));

  // Helper: read URL param 'res' to detect active restaurant
  function getQueryParam(name) {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get(name);
    } catch (e) {
      return null;
    }
  }

  // Current restaurant identifier (slug or fallback 'main')
  window.CURRENT_RESTAURANT = (function () {
    const raw = getQueryParam("res");
    if (!raw) return "main";
    // normalize: remove spaces and encode as simple slug
    return raw
      .toString()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-\u0600-\u06FF]/g, "-");
  })();

  // storage key per restaurant (unique)
  window.getMenuStorageKey = function () {
    // Use a single branch object key so it contains menu, orders, settings
    return window.getBranchKey();
  };

  // Branch-level storage key (full branch object)
  window.getBranchKey = function () {
    // unified branch storage key required: stores menu, orders, settings
    return `store_data_${window.CURRENT_RESTAURANT}`;
  };

  // If no restaurant selected via gateway, redirect to gateway.html
  (function ensureGatewaySelected() {
    try {
      const raw = getQueryParam("res");
      // If current page is index and no res param, force gateway
      const isIndex =
        /index\.html?$/.test(window.location.pathname) ||
        window.location.pathname === "/" ||
        window.location.pathname.endsWith("/");
      if (!raw && isIndex) {
        // avoid infinite loop if already on gateway
        if (!/gateway\.html$/.test(window.location.pathname)) {
          window.location.replace("gateway.html");
        }
      }
    } catch (e) {}
  })();

  // Return global legacy menu raw (check new 'menuData' first, then old 'myMenuData')
  function getGlobalMenuRaw() {
    // Check the new global key `Menu`, then older `menuData`, then legacy `myMenuData`.
    return (
      localStorage.getItem("Menu") ||
      localStorage.getItem("menuData") ||
      localStorage.getItem("myMenuData") ||
      null
    );
  }

  // Save menu helper (saves per-restaurant)
  function saveMenu(menu) {
    try {
      // persist into branch object
      if (window.BRANCH_DATA) {
        window.BRANCH_DATA.menu = menu;
        saveBranchData(window.BRANCH_DATA);
        console.log(
          `✅ تم حفظ قائمة الفرع [${window.CURRENT_RESTAURANT}] في localStorage (branch object)`,
        );
        return;
      }
      // fallback: legacy menu key
      localStorage.setItem(window.getMenuStorageKey(), JSON.stringify(menu));
      console.log(
        `✅ تم حفظ القائمة (legacy key) [${window.CURRENT_RESTAURANT}]`,
      );
    } catch (e) {
      console.error("❌ خطأ في حفظ القائمة:", e);
    }
  }

  // Branch data helpers
  function loadBranchData() {
    const key = window.getBranchKey();
    const raw = localStorage.getItem(key);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        console.warn("Failed parse branch data", key, e);
      }
    }

    // If not present, seed from restaurants/master menu
    const rest = restaurants.find((r) => r.slug === window.CURRENT_RESTAURANT);
    const branch = {
      slug: window.CURRENT_RESTAURANT,
      name: (rest && rest.name) || window.CURRENT_RESTAURANT,
      logo: (rest && rest.logo) || "",
      addresses: (rest && rest.addresses) || [],
      description: (rest && rest.description) || "",
      hours: (rest && rest.hours) || "",
      social: (rest && rest.social) || {},
      email:
        localStorage.getItem("restaurantEmail") ||
        (rest && rest.email) ||
        "ibra7im.engineer@gmail.com",
      phone: localStorage.getItem("restaurant_phone") || "201021279663",
      menu:
        typeof MASTER_MENU !== "undefined"
          ? JSON.parse(JSON.stringify(MASTER_MENU))
          : JSON.parse(JSON.stringify(defaultItems)),
      orders: [],
      createdAt: Date.now(),
    };

    try {
      localStorage.setItem(key, JSON.stringify(branch));
    } catch (e) {
      console.warn("Failed to seed branch data", key, e);
    }
    return branch;
  }

  function saveBranchData(branchObj) {
    try {
      localStorage.setItem(window.getBranchKey(), JSON.stringify(branchObj));
      // also update legacy globals for compatibility
      try {
        localStorage.setItem("Menu", JSON.stringify(branchObj.menu));
      } catch (e) {}
      return true;
    } catch (e) {
      console.error("Failed to save branch data:", e);
      return false;
    }
  }

  // Apply current restaurant info into the UI (inject names, addresses, small branding)
  function applyRestaurantToUI() {
    try {
      const raw = getQueryParam("res");
      let selected = null;
      if (raw) {
        const decoded = decodeURIComponent(raw.toString());
        // try by name
        selected = restaurants.find((r) => r.name === decoded);
        if (!selected) {
          // try by slug
          const slug = decoded.trim().replace(/\s+/g, "-");
          selected = restaurants.find(
            (r) => r.slug === slug || r.slug === decoded,
          );
        }
      }

      if (!selected) selected = restaurants[0] || { name: "المطعم الافتراضي" };

      // Update small elements
      const logoSpan = document.querySelector(".logo span");
      if (logoSpan) logoSpan.textContent = `My Order — ${selected.name}`;

      // Update document title
      document.title = `${selected.name} — My Order`;

      // Update branches section to show active restaurant address only
      const branchesRow = document.querySelector(".branches-row");
      if (branchesRow) {
        branchesRow.innerHTML = `
          <div class="branch-card" style="background:linear-gradient(135deg,rgba(255,255,255,0.95),rgba(255,255,255,0.9)); padding:24px; border-radius:16px; box-shadow:0 8px 25px rgba(0,0,0,0.08); animation: fadeIn 0.6s ease-out;">
            <div style="display:flex; gap:16px; align-items:center;">
              <img src="${selected.logo || "https://via.placeholder.com/300x180?text=Logo"}" alt="logo" style="width:120px; height:90px; object-fit:cover; border-radius:10px;">
              <div>
                <h3 style="margin:0 0 8px; font-size:20px; font-weight:800;">${selected.name}</h3>
                <p style="color:#6B7280; margin:0 0 6px;">${selected.addresses ? selected.addresses.join("<br>") : ""}</p>
                <a href="gateway.html" style="display:inline-block; margin-top:10px; background:linear-gradient(135deg,#FF6B35,#FF8E5F); color:white; padding:8px 12px; border-radius:10px; text-decoration:none;">تغيير المطعم</a>
              </div>
            </div>
          </div>
        `;
      }

      // expose selected to global for other features
      window.SELECTED_RESTAURANT = selected;

      // Update contact links (if contact page present)
      try {
        const branchPhone =
          (window.BRANCH_DATA && window.BRANCH_DATA.phone) ||
          localStorage.getItem("restaurant_phone") ||
          "201021279663";
        const branchEmail =
          (window.BRANCH_DATA && window.BRANCH_DATA.email) ||
          localStorage.getItem("restaurantEmail") ||
          "ibra7im.engineer@gmail.com";

        const phoneAnchor = document.getElementById("contactPhoneLink");
        if (phoneAnchor) {
          phoneAnchor.href = `tel:+${branchPhone}`;
          phoneAnchor.textContent = "+20 " + branchPhone.replace(/^20/, "");
        }

        const emailAnchor = document.getElementById("contactEmailLink");
        if (emailAnchor) {
          emailAnchor.href = `mailto:${branchEmail}`;
          emailAnchor.textContent = branchEmail;
        }

        const waBtn = document.getElementById("contactWaButton");
        if (waBtn) waBtn.href = `https://wa.me/${branchPhone}`;

        const mailBtn = document.getElementById("contactMailButton");
        if (mailBtn) mailBtn.href = `mailto:${branchEmail}`;
      } catch (e) {
        console.warn("Failed to update contact links:", e);
      }

      // Inject admin badge showing current restaurant (if admin area exists)
      try {
        const phoneInput = document.getElementById("restaurantPhoneInput");
        if (phoneInput) {
          // find settings card container (closest parent with padding/border)
          const settingsCard =
            phoneInput.closest("div[style]") || phoneInput.parentElement;
          if (settingsCard) {
            let badge = document.getElementById("adminRestaurantBadge");
            if (!badge) {
              badge = document.createElement("div");
              badge.id = "adminRestaurantBadge";
              badge.style.cssText = `display:inline-block; background:linear-gradient(135deg,#FF6B35,#FF8E5F); color:white; padding:6px 10px; border-radius:10px; font-weight:800; margin-bottom:12px; float:left;`;
              settingsCard.insertBefore(badge, settingsCard.firstChild);
            }
            badge.textContent = `أنت تعدل الآن منيو مطعم: ${selected.name}`;
          }
        }
      } catch (e) {
        console.warn("Failed to inject admin badge", e);
      }
    } catch (e) {
      console.error("Error applying restaurant to UI:", e);
    }
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyRestaurantToUI);
  } else {
    applyRestaurantToUI();
  }

  // تحميل بيانات الفرع الحالي (branch object) ثم استخراج المنيو والبيانات منه
  window.BRANCH_DATA = loadBranchData();
  // menu Items come from branch data (isolated per branch)
  let menuItems =
    window.BRANCH_DATA && window.BRANCH_DATA.menu
      ? JSON.parse(JSON.stringify(window.BRANCH_DATA.menu))
      : typeof MASTER_MENU !== "undefined"
        ? JSON.parse(JSON.stringify(MASTER_MENU))
        : JSON.parse(JSON.stringify(defaultItems));

  // cart, reviews and global orders remain (orders per branch stored inside branchObj.orders)
  let cart = [];
  let reviews = JSON.parse(localStorage.getItem("myReviews")) || [];
  let allOrders = JSON.parse(localStorage.getItem("allOrders")) || []; // جميع الأوردرات من جميع العملاء
  const SHIPPING_FEE = 20; // قيمة التوصيل ثابتة
  // Telephone for the current branch
  // دالة مساعدة للحصول على رقم هاتف الفرع من localStorage بمفتاح فريد
  function getRestaurantPhoneKey() {
    return "res_phone_" + window.CURRENT_RESTAURANT;
  }

  function getRestaurantPhone() {
    // أولاً: حاول الحصول على الرقم من المفتاح الفريد للفرع الحالي
    const uniqueKey = getRestaurantPhoneKey();
    let phone = localStorage.getItem(uniqueKey);
    if (phone) return phone;

    // ثانياً: حاول الحصول على الرقم من بيانات الفرع
    if (window.BRANCH_DATA && window.BRANCH_DATA.phone) {
      return window.BRANCH_DATA.phone;
    }

    // ثالثاً: استخدم المفتاح القديم للتوافقية
    phone = localStorage.getItem("restaurant_phone");
    if (phone) return phone;

    // أخيراً: الرقم الافتراضي
    return "201021279663";
  }

  function saveRestaurantPhone(phone) {
    const uniqueKey = getRestaurantPhoneKey();
    // احفظ بالمفتاح الفريد للفرع
    localStorage.setItem(uniqueKey, phone);
    // احتفظ أيضاً بالمفتاح القديم للتوافقية
    localStorage.setItem("restaurant_phone", phone);
    // حدّث بيانات الفرع إن وُجدت
    if (window.BRANCH_DATA) {
      window.BRANCH_DATA.phone = phone;
      saveBranchData(window.BRANCH_DATA);
    }
    // حدّث المتغير العام
    RESTAURANT_PHONE = phone;
    return true;
  }

  // Telephone for the current branch
  let RESTAURANT_PHONE = getRestaurantPhone();
  // Email for the current branch
  let RESTAURANT_EMAIL =
    (window.BRANCH_DATA && window.BRANCH_DATA.email) ||
    localStorage.getItem("restaurantEmail") ||
    "ibra7im.engineer@gmail.com";

  // حساب المدير الافتراضي
  const ADMIN_ACCOUNT = {
    username: "admin",
    password: "12345",
    name: "مدير المطعم",
    email: "admin@myorder.com",
  };

  // =====================================================
  // نظام معالجة الأخطاء والتحقق والتحميل
  // =====================================================

  // نظام معالجة الأخطاء المركزي
  const ErrorHandler = {
    showError(message) {
      console.error("❌ خطأ:", message);
      showNotification(message, "error");
    },
    handle(error, context) {
      console.error(`❌ خطأ في ${context}:`, error);
      console.error("📋 تفاصيل الخطأ:", error.message || error);
      console.error("📍 Stack trace:", error.stack);
      showNotification(
        `❌ خطأ في ${context}: ${error.message || error}`,
        "error",
      );
    },
  };

  // نظام التحقق من صحة البيانات
  const Validator = {
    isValidName(name) {
      return name && name.length >= 3 && name.length <= 100;
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    isValidPhone(phone) {
      // صيغة مصرية: 201XXXXXXXXX (11 رقم)
      return /^201[0-9]{9}$/.test(phone.replace(/\D/g, ""));
    },
    isValidAddress(address) {
      return address && address.length >= 10 && address.length <= 300;
    },
    isValidPrice(price) {
      return price > 0 && price <= 10000;
    },
    isValidQuantity(qty) {
      return qty > 0 && qty <= 1000;
    },
  };

  // نظام إدارة شاشات التحميل
  const LoadingManager = {
    show(message = "جاري التحميل...") {
      let loader = document.getElementById("loading-overlay");
      if (!loader) {
        loader = document.createElement("div");
        loader.id = "loading-overlay";
        loader.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
          flex-direction: column;
          gap: 20px;
        `;
        document.body.appendChild(loader);
      }

      loader.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 12px; text-align: center; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
          <div style="width: 50px; height: 50px; border: 4px solid #F0F0F0; border-top-color: #FF6B35; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 15px;"></div>
          <p style="color: #333; font-size: 16px; font-weight: 600; margin: 0;">${message}</p>
        </div>
      `;

      loader.style.display = "flex";

      if (!document.querySelector("style[data-loader]")) {
        const style = document.createElement("style");
        style.setAttribute("data-loader", "true");
        style.textContent =
          "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }";
        document.head.appendChild(style);
      }
    },
    hide() {
      const loader = document.getElementById("loading-overlay");
      if (loader) loader.style.display = "none";
    },
  };

  // سجل التتبع عند بدء التحميل
  console.log("🚀===== تطبيق My Order بدأ التشغيل =====");
  console.log("📱 رقم المطعم المحفوظ:", RESTAURANT_PHONE);
  console.log("💾 عدد الأصناف المحملة:", menuItems.length);
  console.log("📦 عدد الأوردرات الكلي:", allOrders.length);
  console.log("🚀=====================================");

  // =====================================================
  // دوال مساعدة لتجنب أخطاء undefined
  // =====================================================

  // دالة مساعدة لتسجيل الأحداث (fallback إذا لم تكن Google Sheets مُكونة)
  function logEvent(eventName, eventData) {
    try {
      if (
        typeof window.GoogleSheetsLogger !== "undefined" &&
        window.GoogleSheetsLogger.logError
      ) {
        console.log(`📊 تسجيل حدث: ${eventName}`, eventData);
        // يمكن تسجيل الحدث في Google Sheets هنا إذا لزم الأمر
      } else {
        console.debug(`📊 حدث: ${eventName}`, eventData);
      }
    } catch (e) {
      console.debug(`📊 حدث: ${eventName}`);
    }
  }

  // تصدير logEvent للاستخدام العام
  window.logEvent = logEvent;

  /* ==================================================
   2. نظام التنقل والتحكم في الصفحات
   ================================================== */
  function showPage(pageId) {
    // حماية لوحة الإدارة - التحقق من تسجيل الدخول
    if (pageId === "admin" || pageId === "admin-page") {
      if (sessionStorage.getItem("isAdmin") !== "true") {
        alert("⛔ يجب تسجيل الدخول أولاً للوصول إلى لوحة الإدارة");
        showPage("login-page"); // إعادة توجيه إلى صفحة تسجيل الدخول
        return;
      }
    }

    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => {
      page.classList.remove("active");
      page.style.display = "none";
    });

    // التعامل مع الأسماء بدون '-page'
    let targetId = pageId;
    if (!pageId.endsWith("-page")) {
      targetId = pageId + "-page";
    }

    const activePage = document.getElementById(targetId);
    if (activePage) {
      activePage.classList.add("active");
      activePage.style.display = "block";
    }

    // تحديث البيانات بناءً على الصفحة المفتوحة
    if (pageId === "menu" || pageId === "menu-page") renderMenu(menuItems);
    if (pageId === "home" || pageId === "home-page") {
      initializeHomeMenu();
    }
    if (pageId === "admin" || pageId === "admin-page") {
      renderAdminList();
      initializeAdminPanel();
    }
    if (pageId === "contact" || pageId === "contact-page") renderReviews();
    if (pageId === "orders" || pageId === "orders-page") loadCustomerOrders();

    // العودة لأعلى الصفحة عند الانتقال
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ==================================================
   3. إدارة المنيو (العرض، البحث، الفلترة)
   ================================================== */
  function renderMenu(data) {
    const grid = document.getElementById("itemsGrid");
    if (!grid) return;

    grid.innerHTML = data
      .map(
        (item) => `
        <div class="res-card">
            <div class="card-img-container">
                <img class="interactive-img" src="${item.img}" alt="${item.name}" data-fullsrc="${item.img}" data-caption="${item.name.replace(/'/g, "\\'")}" onerror="this.onerror=null; this.src='https://via.placeholder.com/280x200?text=No+Image'; this.style.height='140px'; this.style.objectFit='cover';">
            </div>
            <div class="res-info" style="padding:15px; text-align:center;">
                <h4 style="font-size:18px; margin-bottom:8px;">${item.name}</h4>
                <p style="color:var(--primary); font-weight:bold; font-size:17px; margin-bottom:12px;">${item.price} ج.م</p>
                <button class="add-btn-card" data-action="add-to-cart" data-id="${item.id}" role="button" tabindex="0" aria-label="أضف ${item.name} للسلة"
                         style="width:100%; padding:12px; font-size:16px; background:var(--primary); color:white; border:none; border-radius:8px; font-weight:bold; cursor:pointer; transition: 0.3s;">
                    أضف للسلة <i class="fa fa-plus-circle"></i>
                </button>
            </div>
        </div>
    `,
      )
      .join("");
  }

  function searchFunction() {
    const term = document.getElementById("mainSearch").value.toLowerCase();
    const filtered = menuItems.filter((item) =>
      item.name.toLowerCase().includes(term),
    );
    renderMenu(filtered);
  }

  function filterItems(category) {
    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach((btn) => btn.classList.remove("active"));

    if (event && event.target) {
      event.target.classList.add("active");
    }

    if (category === "all") {
      renderMenu(menuItems);
    } else {
      renderMenu(menuItems.filter((i) => i.cat === category));
    }
  }

  // دوال قائمة المنزل
  function renderHomeMenu(data) {
    const grid = document.getElementById("homeMenuGrid");
    if (!grid) return;

    // عرض أول 8 منتجات فقط
    const limitedData = data.slice(0, 8);

    grid.innerHTML = limitedData
      .map(
        (item) => `
        <div class="res-card">
            <div class="card-img-container">
                <img class="interactive-img" src="${item.img}" alt="${item.name}" data-fullsrc="${item.img}" data-caption="${item.name.replace(/'/g, "\\'")}" onerror="this.onerror=null; this.src='https://via.placeholder.com/280x200?text=No+Image'; this.style.height='140px'; this.style.objectFit='cover';">
            </div>
            <div class="res-info" style="padding:15px; text-align:center;">
                <h4 style="font-size:18px; margin-bottom:8px;">${item.name}</h4>
                <p style="color:var(--primary); font-weight:bold; font-size:17px; margin-bottom:12px;">${item.price} ج.م</p>
                <button class="add-btn-card" data-action="add-to-cart" data-id="${item.id}" role="button" tabindex="0" aria-label="أضف ${item.name} للسلة"
                         style="width:100%; padding:12px; font-size:16px; background:var(--primary); color:white; border:none; border-radius:8px; font-weight:bold; cursor:pointer; transition: 0.3s;">
                    أضف للسلة <i class="fa fa-plus-circle"></i>
                </button>
            </div>
        </div>
    `,
      )
      .join("");
  }

  function searchHomeMenu() {
    const term = document.getElementById("homeSearch").value.toLowerCase();
    const filtered = menuItems.filter((item) =>
      item.name.toLowerCase().includes(term),
    );
    renderHomeMenu(filtered);
  }

  function filterHomeMenu(category) {
    const tabs = document.querySelectorAll(".filter-tabs .tab-btn");
    tabs.forEach((btn) => btn.classList.remove("active"));

    if (event && event.target) {
      event.target.classList.add("active");
    }

    if (category === "all") {
      renderHomeMenu(menuItems);
    } else {
      renderHomeMenu(menuItems.filter((i) => i.cat === category));
    }
  }

  // تحميل المنيو في الصفحة الرئيسية عند البدء
  function initializeHomeMenu() {
    renderHomeMenu(menuItems);
  }

  /* ==================================================
   4. نظام السلة المطور (إضافة، حذف، حساب إجمالي)
   ================================================== */
  function addToCart(id) {
    const item = menuItems.find((i) => i.id === id);
    if (item) {
      const existingItem = cart.find((i) => i.id === id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        cart.push({ ...item, quantity: 1, cartId: Date.now() });
      }
      updateCartCount();
      renderCartItems();
      showPage("cart-page");
      showNotification(`✅ تمت إضافة ${item.name} للسلة`, "success");
    }
  }

  function renderCartItems() {
    const cartItemsList = document.getElementById("cartItemsList");
    const orderSummary = document.getElementById("orderSummary");
    const totalPrice = document.getElementById("totalPrice");
    const subtotalPrice = document.getElementById("subtotalPrice");

    if (!cartItemsList) return;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
            <div style="text-align:center; padding:60px 20px;">
                <i class="fa fa-shopping-cart" style="font-size:64px; color:#BDC3C7; margin-bottom:20px;"></i>
                <h3 style="color:#7F8C8D; margin-bottom:10px;">السلة فارغة</h3>
                <p style="color:#BDC3C7; margin-bottom:30px;">لم تضف أي منتجات بعد</p>
                <button data-action="navigate" data-target="menu-page" role="button" tabindex="0" style="background:linear-gradient(135deg, #FF6B35, #FF8E5F); color:white; border:none; padding:12px 30px; border-radius:8px; cursor:pointer; font-weight:600;">
                    <i class="fa fa-arrow-right"></i> اذهب للقائمة
                </button>
            </div>
        `;
      if (orderSummary)
        orderSummary.innerHTML =
          '<p style="color:rgba(255,255,255,0.8); text-align:center;">لا توجد عناصر</p>';
      if (totalPrice) totalPrice.textContent = "0";
      return;
    }

    let total = 0;
    let html = "";
    let summaryHtml = "";

    cart.forEach((item, index) => {
      const quantity = item.quantity || 1;
      const itemTotal = item.price * quantity;
      total += itemTotal;

      html += `
            <div class="cart-item" style="background:white; border:1px solid #E8EAED; border-radius:12px; padding:20px; margin-bottom:15px; display:flex; gap:15px; align-items:center; transition:all 0.3s;">
                <div style="flex-shrink:0;">
                    <img src="${item.image || item.img}" alt="${item.name}" style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
                </div>
                <div style="flex-grow:1;">
                    <h4 style="margin:0 0 8px 0; color:#2C3E50; font-size:16px; font-weight:700;">${item.name}</h4>
                    <p style="margin:0; color:#7F8C8D; font-size:14px;">${item.cat || item.category}</p>
                    <div style="display:flex; align-items:center; gap:8px; margin-top:10px;">
                        <button data-action="decrease-qty" data-index="${index}" role="button" tabindex="0" style="width:32px; height:32px; background:#F0F0F0; border:1px solid #DDD; border-radius:6px; cursor:pointer; font-weight:600; transition:0.2s;">−</button>
                        <span style="width:40px; text-align:center; font-weight:700; color:#FF6B35;">${quantity}</span>
                        <button data-action="increase-qty" data-index="${index}" role="button" tabindex="0" style="width:32px; height:32px; background:#F0F0F0; border:1px solid #DDD; border-radius:6px; cursor:pointer; font-weight:600; transition:0.2s;">+</button>
                    </div>
                </div>
                <div style="text-align:right; flex-shrink:0;">
                    <p style="margin:0 0 8px 0; color:#FF6B35; font-size:16px; font-weight:700;">${itemTotal} ج.م</p>
                    <p style="margin:0; color:#7F8C8D; font-size:12px;">${item.price} ج.م × ${quantity}</p>
                    <button data-action="remove-item" data-index="${index}" role="button" tabindex="0" style="margin-top:10px; background:#FFE5DC; color:#FF6B35; border:none; padding:6px 12px; border-radius:6px; cursor:pointer; font-size:12px; font-weight:600; transition:all 0.3s;">
                        <i class="fa fa-trash"></i> حذف
                    </button>
                </div>
            </div>
        `;

      summaryHtml += `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; padding-bottom:8px; border-bottom:1px solid rgba(255,255,255,0.2); font-size:14px;">
                <span>${item.name} × ${quantity}</span>
                <strong>${itemTotal} ج.م</strong>
            </div>
        `;
    });

    cartItemsList.innerHTML = html;
    if (orderSummary) orderSummary.innerHTML = summaryHtml;

    const shipping = 20;
    const finalTotal = total + shipping;
    if (subtotalPrice) subtotalPrice.textContent = total;
    if (totalPrice) totalPrice.textContent = finalTotal;
  }

  function updateCartCount() {
    const countElement = document.getElementById("cart-count");
    if (countElement) countElement.innerText = cart.length;
  }

  function updateCartUI() {
    const list = document.getElementById("cartItemsList");
    if (!list) return;

    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const shipping = subtotal > 0 ? SHIPPING_FEE : 0;
    const total = subtotal + shipping;

    if (document.getElementById("totalPrice")) {
      document.getElementById("totalPrice").innerText = total;
    }

    // عرض عناصر السلة بتنسيق احترافي
    list.innerHTML = cart
      .map(
        (item, index) => `
        <div class="cart-item-row" style="display:flex; justify-content:space-between; align-items:center; background:white; padding:15px; margin-bottom:10px; border-radius:12px; box-shadow:var(--shadow); border-right:4px solid var(--primary);">
            <div>
                <span style="font-size:16px; font-weight:bold; display:block;">${item.name}</span>
                <span style="font-size:14px; color:var(--primary); font-weight:bold;">${item.price} ج.م</span>
            </div>
            <i class="fa-solid fa-trash-can" data-action="remove-item" data-index="${index}" role="button" tabindex="0" style="color:#ff4d4d; font-size:20px; cursor:pointer; padding:10px;"></i>
        </div>
    `,
      )
      .join("");

    // إضافة سطر التوصيل بشكل منفصل للوضوح
    if (subtotal > 0) {
      list.innerHTML += `
            <div class="delivery-row" style="display:flex; justify-content:space-between; padding:12px; background:#fff5f0; border-radius:10px; margin-top:10px; border:1px dashed #f55905;">
                <span style="font-weight:600;">تكلفة التوصيل:</span>
                <span style="font-weight:bold;">${shipping} ج.م</span>
            </div>
        `;
    } else {
      list.innerHTML = `<p style="text-align:center; padding:20px; color:#888;">السلة فارغة، ابدأ بإضافة وجباتك المفضلة!</p>`;
    }
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    updateCartUI();
  }

  function increaseQuantity(index) {
    if (cart[index]) {
      cart[index].quantity = (cart[index].quantity || 1) + 1;
      renderCartItems();
    }
  }

  function decreaseQuantity(index) {
    if (cart[index]) {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        removeFromCart(index);
        return;
      }
      renderCartItems();
    }
  }

  /* ==================================================
   5. إتمام الطلب وإرسال البيانات للعميل والمطعم
   ================================================== */

  // دالة مساعدة: توليد رقم طلب فريد وآمن
  function generateOrderId() {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substr(2, 5).toUpperCase();
    return `ORD-${timestamp}-${random}`;
  }

  // دالة لإرسال رسالة WhatsApp للمطعم (مع إعادة محاولة)
  function sendRestaurantNotification(restaurantMessage, orderId) {
    try {
      console.log("🔍===== بدء إرسال رسالة للمطعم =====");
      console.log("📱 رقم المطعم المحفوظ:", RESTAURANT_PHONE);
      console.log("📦 رقم الطلب:", orderId);
      console.log(
        "📄 محتوى الرسالة:",
        restaurantMessage.substring(0, 100) + "...",
      );

      const restaurantEncoded = encodeURIComponent(restaurantMessage);
      const phoneToUse = getRestaurantPhone();
      const whatsappUrl = `https://wa.me/${phoneToUse}?text=${restaurantEncoded}`;

      console.log(
        "✅ تم بناء رابط WhatsApp:",
        whatsappUrl.substring(0, 80) + "...",
      );

      // إرسال الرسالة بطرق متعددة
      // الطريقة 1: فتح في tab جديد
      const whatsappWindow = window.open(
        whatsappUrl,
        "whatsapp_restaurant",
        "noopener,noreferrer,width=800,height=600",
      );

      if (whatsappWindow) {
        console.log("✅ تم فتح النافذة بنجاح");
      } else {
        console.warn("⚠️ فتح النافذة في tab جديد فشل - محاولة الطريقة 2");
        // الطريقة 2: إعادة توجيه مباشر
        setTimeout(() => {
          window.location.href = whatsappUrl;
        }, 500);
      }

      // تسجيل محاولة الإرسال في localStorage
      const notificationAttempt = {
        orderId: orderId,
        timestamp: new Date().toISOString(),
        status: "sent",
        recipient: "restaurant",
        phone: phoneToUse,
        url: whatsappUrl,
        messageLength: restaurantMessage.length,
      };

      let attempts =
        JSON.parse(localStorage.getItem("notificationAttempts")) || [];
      attempts.push(notificationAttempt);
      localStorage.setItem("notificationAttempts", JSON.stringify(attempts));

      console.log("✅ تم تسجيل محاولة الإرسال بنجاح");
      console.log("🔍===== انتهى إرسال رسالة للمطعم =====");

      return true;
    } catch (error) {
      console.error("❌ خطأ في إرسال الإشعار للمطعم:", error);
      console.error("❌ Stack:", error.stack);
      return false;
    }
  }

  // دالة لإرسال رسالة WhatsApp للعميل
  function sendCustomerNotification(customerMessage, formattedPhone, orderId) {
    try {
      console.log("🔍===== بدء إرسال رسالة للعميل =====");
      console.log("📱 رقم العميل:", formattedPhone);
      console.log("📦 رقم الطلب:", orderId);

      const customerEncoded = encodeURIComponent(customerMessage);
      const whatsappUrl = `https://wa.me/${formattedPhone}?text=${customerEncoded}`;

      console.log("✅ تم بناء رابط WhatsApp للعميل");

      // فتح في tab جديد
      const whatsappWindow = window.open(
        whatsappUrl,
        "whatsapp_customer",
        "noopener,noreferrer,width=800,height=600",
      );

      if (whatsappWindow) {
        console.log("✅ تم فتح النافذة بنجاح");
      } else {
        console.warn("⚠️ فتح النافذة فشل - محاولة توجيه مباشر");
        setTimeout(() => {
          window.location.href = whatsappUrl;
        }, 500);
      }

      // تسجيل محاولة الإرسال
      const notificationAttempt = {
        orderId: orderId,
        timestamp: new Date().toISOString(),
        status: "sent",
        recipient: "customer",
        phone: formattedPhone,
        url: whatsappUrl,
        messageLength: customerMessage.length,
      };

      let attempts =
        JSON.parse(localStorage.getItem("notificationAttempts")) || [];
      attempts.push(notificationAttempt);
      localStorage.setItem("notificationAttempts", JSON.stringify(attempts));

      console.log("✅ تم تسجيل محاولة الإرسال بنجاح");
      console.log("🔍===== انتهى إرسال رسالة للعميل =====");

      return true;
    } catch (error) {
      console.error("❌ خطأ في إرسال التأكيد للعميل:", error);
      console.error("❌ Stack:", error.stack);
      return false;
    }
  }

  function finishOrder() {
    // التحقق من البيانات باستخدام Validator متقدم
    const name = document.getElementById("userName")?.value?.trim();
    const address = document.getElementById("userAddress")?.value?.trim();
    const phone = document.getElementById("userPhone")?.value?.trim();
    const totalPrice = document.getElementById("totalPrice").innerText;

    // Validation بسيطة أولاً
    if (!name || !address || !phone) {
      ErrorHandler.showError("الرجاء ملء جميع البيانات المطلوبة");
      return;
    }

    // Validation متقدمة للبيانات
    if (!Validator.isValidName(name)) {
      ErrorHandler.showError("اسم العميل يجب أن يكون بين 3 و 100 حرف");
      return;
    }

    // تنسيق رقم الهاتف بشكل صحيح
    let formattedPhone = phone.replace(/^0/, "20");
    if (!formattedPhone.startsWith("20")) {
      formattedPhone = "20" + phone;
    }
    formattedPhone = formattedPhone.replace(/\D/g, "");

    if (!Validator.isValidPhone(formattedPhone)) {
      ErrorHandler.showError("رقم الهاتف غير صحيح - استخدم صيغة مصرية صحيحة");
      return;
    }

    if (!Validator.isValidAddress(address)) {
      ErrorHandler.showError("العنوان يجب أن يكون بين 10 و 300 حرف");
      return;
    }

    if (cart.length === 0) {
      ErrorHandler.showError("السلة فارغة! أضف بعض المنتجات أولاً");
      return;
    }

    // توليد رقم طلب فريد
    const orderId = generateOrderId();

    // بناء نص الرسالة احترافي
    let itemsSummary = "";
    let subtotal = 0;

    cart.forEach((item, index) => {
      const quantity = item.quantity || 1;
      // Validation للسعر والكمية
      if (
        !Validator.isValidQuantity(quantity) ||
        !Validator.isValidPrice(item.price)
      ) {
        throw new Error("بيانات المنتج غير صحيحة");
      }
      const itemTotal = item.price * quantity;
      subtotal += itemTotal;
      itemsSummary += `\n${index + 1}️⃣ ${item.name} × ${quantity} = *${itemTotal} ج.م*`;
    });

    const shipping = SHIPPING_FEE;
    const finalTotal = subtotal + shipping;
    const timestamp = new Date().toLocaleString("ar-EG");

    // رسالة احترافية للمطعم باللغة العربية
    let restaurantMessage = `*◈ طلب جديد وارد للمطعم ◈*\n\n`;
    restaurantMessage += `رقم الطلب: *#${orderId}*\n\n`;
    restaurantMessage += `__________________________\n\n`;
    restaurantMessage += `◈ 👤 بيانات العميل:\n`;
    restaurantMessage += `الاسم: *${name}*\n`;
    restaurantMessage += `الهاتف: *+${formattedPhone}*\n`;
    restaurantMessage += `العنوان: *${address}*\n\n`;
    restaurantMessage += `__________________________\n\n`;
    restaurantMessage += `◈ 📦 تفاصيل الطلب:\n`;
    cart.forEach((item, index) => {
      const quantity = item.quantity || 1;
      const itemTotal = item.price * quantity;
      restaurantMessage += `${index + 1}. ${quantity} × ${item.name} = *${itemTotal} ج.م*\n`;
    });
    restaurantMessage += `\n__________________________\n\n`;
    restaurantMessage += `◈ 💰 ملخص الحساب:\n`;
    restaurantMessage += `المجموع الجزئي: *${subtotal} ج.م*\n`;
    restaurantMessage += `رسوم التوصيل: *${shipping} ج.م*\n\n`;
    restaurantMessage += `*◈ الإجمالي النهائي: ${finalTotal} ج.م*\n\n`;
    restaurantMessage += `⏱️ الموعد المتوقع: 30-45 دقيقة\n`;
    restaurantMessage += `⏰ التاريخ والوقت: ${timestamp}\n\n`;
    restaurantMessage += `👉 يرجى البدء في التحضير فوراً!`;

    // رسالة احترافية للعميل باللغة العربية (RTL)
    let customerMessage = `*◈ تأكيد طلبك من My Order ◈*\n\n`;
    customerMessage += `◈ مرحباً ${name}\n`;
    customerMessage += `تم استقبال طلبك برقم: #${orderId}\n\n`;
    customerMessage += `__________________________\n\n`;
    customerMessage += `◈ 📅 التاريخ والوقت:\n${timestamp}\n\n`;
    customerMessage += `__________________________\n\n`;
    customerMessage += `◈ 📍 عنوان التوصيل:\n${address}\n\n`;
    customerMessage += `__________________________\n\n`;
    customerMessage += `◈ 📦 تفاصيل طلبك:\n`;
    cart.forEach((item, index) => {
      const quantity = item.quantity || 1;
      const itemTotal = item.price * quantity;
      customerMessage += `${index + 1}. ${quantity} × ${item.name} = *${itemTotal} ج.م*\n`;
    });
    customerMessage += `\n__________________________\n\n`;
    customerMessage += `◈ 💰 ملخص الفاتورة:\n`;
    customerMessage += `المجموع الجزئي: *${subtotal} ج.م*\n`;
    customerMessage += `رسوم التوصيل: *${shipping} ج.م*\n\n`;
    customerMessage += `__________________________\n\n`;
    customerMessage += `*◈ الإجمالي النهائي: ${finalTotal} ج.م*\n\n`;
    customerMessage += `⏱️ وقت التوصيل المتوقع: 30-45 دقيقة\n\n`;
    customerMessage += `شكراً لاختيارك My Order 🙏\n`;
    customerMessage += `سيصل طلبك قريباً ⚡`;

    // عرض رسالة التحميل
    LoadingManager.show("⏳ جاري حفظ الطلب وإرسال الرسائل...");

    // حفظ الطلب في Firebase مع معلومات الإشعار
    const orderData = {
      orderId: orderId,
      customerName: name,
      customerPhone: formattedPhone,
      customerAddress: address,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1,
      })),
      subtotal: subtotal,
      shipping: shipping,
      total: finalTotal,
      timestamp: new Date().toISOString(),
      status: "جديد",
      restaurantNotified: false,
      customerNotified: false,
    };

    console.log("💾 حفظ الطلب:", orderData);

    // إرسال الطلب إلى باك-إند PHP/MySQL عبر REST API
    try {
      fetch(API_BASE + "/api/order.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      })
        .then((res) => res.json())
        .then((resp) => {
          if (resp && resp.success) {
            console.log("✅ الطلب محفوظ في الخادم, id:", resp.insertId);
            showNotification("✅ تم إرسال الطلب للخادم وحفظه بنجاح", "success");
            // وضع علم للحالة إن رغبت لوحة الإدارة بعمل مُزامنة
            orderData.serverSaved = true;
          } else {
            console.warn("⚠️ استجابة الخادم:", resp);
            showNotification(
              "⚠️ فشل حفظ الطلب على الخادم - محفوظ محلياً",
              "warning",
            );
          }
        })
        .catch((err) => {
          console.warn("⚠️ خطأ في إرسال الطلب للخادم:", err);
          showNotification(
            "⚠️ تعذر الوصول لخادم الحفظ. الطلب محفوظ محلياً",
            "warning",
          );
        });
    } catch (e) {
      console.warn("⚠️ خطأ غير متوقع عند محاولة إرسال الطلب:", e);
    }

    // حفظ محلي في localStorage بشكل مركزي
    try {
      allOrders.push(orderData);
      localStorage.setItem("allOrders", JSON.stringify(allOrders));
      console.log(
        "✅ تم حفظ الطلب في السجل المركزي بنجاح - إجمالي الأوردرات:",
        allOrders.length,
      );
      // حفظ نسخة من الطلب في سجل الفرع الحالي
      try {
        if (window.BRANCH_DATA) {
          window.BRANCH_DATA.orders = window.BRANCH_DATA.orders || [];
          window.BRANCH_DATA.orders.push(orderData);
          saveBranchData(window.BRANCH_DATA);
        }
      } catch (e) {
        console.warn("Failed to save order to branch data:", e);
      }

      // إرسال البيانات إلى Google Sheets
      const userEmail =
        document.getElementById("userEmail")?.value?.trim() || "";
      const orderField = document.getElementById("userOrder");
      if (orderField) {
        orderField.value = `طلب #${orderId}${itemsSummary}`;
      }

      const orderSummary = itemsSummary.replace(/\n/g, " | ");
      if (typeof submitOrderToGoogleSheets === "function") {
        submitOrderToGoogleSheets(name, userEmail, orderId, orderSummary);
      }
    } catch (e) {
      ErrorHandler.handle(e, "حفظ الطلب في السجل المركزي");
    }

    // محاولة حفظ في Firebase إذا كان متاحاً (خيار إضافي)
    if (typeof firebaseDB !== "undefined" && firebaseDB.saveOrderToFirebase) {
      try {
        firebaseDB.saveOrderToFirebase(orderData);
        console.log("✅ تم حفظ الطلب في Firebase");
      } catch (e) {
        console.warn("⚠️ لم يتم حفظ الطلب في Firebase:", e);
      }
    }

    setTimeout(() => {
      try {
        // إرسال رسالة المطعم أولاً
        console.log("🍔 بدء إرسال رسالة المطعم على الرقم:", RESTAURANT_PHONE);
        const restaurantSent = sendRestaurantNotification(
          restaurantMessage,
          orderId,
        );

        // بعد إرسال المطعم مباشرة، إرسال رسالة العميل
        setTimeout(() => {
          console.log("👤 إرسال رسالة تأكيد العميل على الرقم:", formattedPhone);
          const customerSent = sendCustomerNotification(
            customerMessage,
            formattedPhone,
            orderId,
          );

          // بعد إرسال الطلب
          setTimeout(() => {
            LoadingManager.hide();

            cart = [];
            updateCartCount();
            updateCartUI();

            // مسح حقول الإدخال
            document.getElementById("userName").value = "";
            document.getElementById("userAddress").value = "";
            document.getElementById("userPhone").value = "";
            const emailField = document.getElementById("userEmail");
            if (emailField) emailField.value = "";

            // تحديث الإحصائيات في لوحة التحكم
            if (typeof updateAdminStatistics === "function") {
              updateAdminStatistics();
            }

            let successMessage = "✨ تم إرسال الطلب بنجاح! شكراً لك 🙏";
            if (restaurantSent) {
              successMessage += "\n✅ تم إرسال إشعار المطعم عبر واتساب";
            }
            if (customerSent) {
              successMessage += "\n✅ تم إرسال تأكيد طلبك عبر واتساب";
            }

            showNotification(successMessage, "success");

            // العودة للصفحة الرئيسية بعد 2 ثانية
            setTimeout(() => showPage("home-page"), 2000);
          }, 500);
        }, 1000); // تأخير 1 ثانية بين إرسال المطعم والعميل
      } catch (error) {
        LoadingManager.hide();
        ErrorHandler.handle(error, "إرسال الطلب");
      }
    }, 500);
  }

  // دالة عرض إشعارات احترافية ومحسّنة

  // دالة عرض إشعارات احترافية ومحسّنة
  function showNotification(message, type = "info", duration = 4000) {
    const notification = document.createElement("div");
    const icons = {
      success: "✅",
      error: "❌",
      warning: "⚠️",
      info: "ℹ️",
    };

    const colors = {
      success: "#10B981",
      error: "#EF4444",
      warning: "#F59E0B",
      info: "#3B82F6",
    };

    const backgroundColor = {
      success: "rgba(16, 185, 129, 0.95)",
      error: "rgba(239, 68, 68, 0.95)",
      warning: "rgba(245, 158, 11, 0.95)",
      info: "rgba(59, 130, 246, 0.95)",
    };

    const icon = icons[type] || "📢";
    const color = colors[type] || "#3B82F6";

    const bgColor = backgroundColor[type] || "rgba(59, 130, 246, 0.95)";

    notification.style.cssText =
      "position: fixed; top: 20px; right: 20px; background: " +
      bgColor +
      "; color: white; padding: 16px 20px; border-radius: 12px; box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2); z-index: 9999; font-size: 14px; max-width: 350px; word-wrap: break-word; line-height: 1.5; border-left: 4px solid " +
      color +
      "; animation: slideInFromRight 0.4s cubic-bezier(0.4, 0, 0.2, 1); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);";

    notification.innerHTML = "<strong>" + icon + "</strong> " + message;

    // إضافة Close button
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "×";
    closeBtn.style.cssText =
      "background: none; border: none; color: white; font-size: 24px; cursor: pointer; padding: 0; margin: 0 0 0 12px; line-height: 1; opacity: 0.8; transition: opacity 0.2s;";
    closeBtn.onmouseover = () => (closeBtn.style.opacity = "1");
    closeBtn.onmouseout = () => (closeBtn.style.opacity = "0.8");
    closeBtn.onclick = () => {
      notification.style.animation = "slideOutToRight 0.3s ease-out";
      setTimeout(() => notification.remove(), 300);
    };

    notification.appendChild(closeBtn);
    document.body.appendChild(notification);

    // إضافة animation للـ fade out
    const style = document.createElement("style");
    style.textContent =
      "@keyframes slideInFromRight { from { opacity: 0; transform: translateX(400px); } to { opacity: 1; transform: translateX(0); } } @keyframes slideOutToRight { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(400px); } }";
    if (!document.querySelector("style[data-notifications]")) {
      style.setAttribute("data-notifications", "true");
      document.head.appendChild(style);
    }

    // إزالة الإشعار بعد المدة المحددة
    const timeout = setTimeout(() => {
      notification.style.animation = "slideOutToRight 0.3s ease-out";
      setTimeout(() => notification.remove(), 300);
    }, duration);

    // السماح بإزالة يدوية من خلال النقر على الزر
    notification.closeTimeout = timeout;

    return notification;
  }

  /* ==================================================
   6. لوحة التحكم (Admin Panel) والتقييمات
   ================================================== */
  async function addNewItemFromAdmin() {
    try {
      const name = document.getElementById("newItemName")?.value?.trim();
      const price = document.getElementById("newItemPrice")?.value?.trim();
      const cat = document.getElementById("newItemCat")?.value || "food";
      let img = document.getElementById("newItemImg")?.value?.trim() || "";
      const fileInput = document.getElementById("newItemFile");

      // Validation
      if (!name || name.length < 3) {
        ErrorHandler.showError("اسم المنتج يجب أن يكون 3 أحرف على الأقل");
        return;
      }

      if (!price) {
        ErrorHandler.showError("السعر مطلوب");
        return;
      }

      const numPrice = parseFloat(price);
      if (!Validator.isValidPrice(numPrice)) {
        ErrorHandler.showError("السعر يجب أن يكون بين 1 و 10000");
        return;
      }

      // Helper to read File -> dataURL
      function readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => reject(new Error("Failed to read file"));
          reader.readAsDataURL(file);
        });
      }

      // If a local file was selected, prefer it and convert to data URL (works without server)
      if (fileInput && fileInput.files && fileInput.files[0]) {
        try {
          img = await readFileAsDataURL(fileInput.files[0]);
        } catch (e) {
          ErrorHandler.handle(e, "قراءة ملف الصورة");
          showNotification(
            "لم نتمكن من قراءة ملف الصورة - سيتم استخدام صورة افتراضية",
            "warning",
          );
        }
      }

      const newItem = { id: Date.now(), name, price: numPrice, cat, img: "" };

      function finalizeAdd(resolvedImg) {
        newItem.img =
          resolvedImg || "https://via.placeholder.com/280x200?text=صورة+الطعام";
        menuItems.push(newItem);

        try {
          saveMenu(menuItems);
          console.log("✅ تم حفظ القائمة في localStorage (per-restaurant)");
          console.log(`   📊 عدد الأصناف الكلي: ${menuItems.length}`);
          console.log(
            `   📌 الصنف الجديد: ${newItem.name} (${newItem.price} ج.م)`,
          );
          showNotification("✨ تم إضافة الصنف بنجاح محلياً! 🎉", "success");
        } catch (e) {
          console.error("❌ خطأ في حفظ البيانات:", e);
          ErrorHandler.handle(e, "حفظ البيانات محلياً");
          return;
        }

        if (
          typeof window.firebaseDB !== "undefined" &&
          window.firebaseDB.syncMenuToFirebase
        ) {
          try {
            window.firebaseDB.syncMenuToFirebase();
            showNotification("🔄 جاري مزامنة القائمة مع Firebase...", "info");
          } catch (err) {
            console.warn("Firebase sync failed:", err);
          }
        }

        renderAdminList();
        renderMenu(menuItems);

        // تحديث الإحصائيات
        if (typeof updateAdminStatistics === "function") {
          updateAdminStatistics();
        }

        // مسح الخانات بعد الإضافة
        document.getElementById("newItemName").value = "";
        document.getElementById("newItemPrice").value = "";
        document.getElementById("newItemImg").value = "";
        if (fileInput) fileInput.value = "";

        try {
          if (typeof logEvent === "function")
            logEvent("ADMIN_ADD_ITEM", {
              id: newItem.id,
              name: newItem.name,
              price: newItem.price,
            });
        } catch (e) {}
      }

      if (!img) {
        finalizeAdd("https://via.placeholder.com/280x200?text=صورة+الطعام");
        return;
      }

      // Helper: try loading a single image URL, with timeout
      function tryLoadImage(url, timeout = 5000) {
        return new Promise((resolve) => {
          const i = new Image();
          let done = false;
          const to = setTimeout(() => {
            if (done) return;
            done = true;
            i.src = "";
            resolve(false);
          }, timeout);
          i.onload = () => {
            if (done) return;
            done = true;
            clearTimeout(to);
            resolve(true);
          };
          i.onerror = () => {
            if (done) return;
            done = true;
            clearTimeout(to);
            resolve(false);
          };
          try {
            i.src = url;
          } catch (e) {
            clearTimeout(to);
            if (!done) resolve(false);
          }
        });
      }

      // Build candidate URLs to try: if user entered full URL use it; otherwise try as-is and with images/ prefix
      const candidates = [];
      const raw = img;
      const isRemote = /^(https?:)?\/\//i.test(raw) || raw.startsWith("data:");
      const isFileLocal =
        /^[a-zA-Z]:\\|^file:\/\//.test(raw) || raw.startsWith("/");

      if (isRemote) {
        candidates.push(raw);
      } else if (isFileLocal) {
        // local absolute paths cannot be fetched by browser — ignore and show placeholder
        showNotification(
          "⚠️ يبدو أن الرابط يشير إلى مسار محلي على جهازك. ضع اسم الملف داخل مجلد images/ أو رابط كامل يبدأ بـ https://",
          "warning",
        );
      } else {
        // try the entered value, then images/ prefixed
        candidates.push(raw);
        if (!raw.startsWith("images/")) candidates.push("images/" + raw);
      }

      // Try candidates sequentially
      let found = null;
      for (const c of candidates) {
        const url = c;
        /* eslint-disable no-await-in-loop */
        const ok = await tryLoadImage(url, 4500);
        if (ok) {
          found = url;
          break;
        }
      }

      if (found) {
        finalizeAdd(found);
        return;
      }

      // No candidate worked — fallback to placeholder
      finalizeAdd("https://via.placeholder.com/280x200?text=صورة+الطعام");
      showNotification(
        "❌ لم يتم العثور على الصورة المدخلة. تم استخدام صورة بديلة. تأكد من رفعها داخل مجلد images/ أو استخدم رابط كامل.",
        "error",
      );
    } catch (error) {
      ErrorHandler.handle(error, "إضافة منتج جديد");
    }
  }

  // دالة لعرض جميع الطلبات والتحقق من إشعارات المطعم
  function renderAllOrders() {
    const listContainer = document.getElementById("ordersListContainer");
    if (!listContainer) return;

    // جلب الطلبات من سجل الفرع الحالي (مع دعم fallback للسجل المركزي)
    const orders =
      (window.BRANCH_DATA && window.BRANCH_DATA.orders) || allOrders || [];

    if (orders.length === 0) {
      listContainer.innerHTML = `
            <div style="text-align:center; padding:40px 20px;">
                <i class="fa-solid fa-inbox" style="font-size:48px; color:#BDC3C7; margin-bottom:15px;"></i>
                <h3 style="color:#7F8C8D; margin-bottom:10px;">لا توجد طلبات بعد</h3>
                <p style="color:#BDC3C7;">سيظهر الطلبات الجديدة هنا عند استقبالها</p>
            </div>
        `;
      return;
    }

    // عرض الطلبات بصيغة جديدة (الأحدث أولاً)
    listContainer.innerHTML = orders
      .slice()
      .reverse()
      .map((order, idx) => {
        const itemsList = order.items
          .map(
            (item, i) =>
              `<li style="padding:5px 0; font-size:13px; color:#2C3E50;">
                🔹 ${item.name} × ${item.quantity || 1} = ${item.price * (item.quantity || 1)} ج.م
            </li>`,
          )
          .join("");

        const orderTime = new Date(order.timestamp).toLocaleString("ar-EG");
        const statusColor =
          order.status === "جديد"
            ? "#FF6B35"
            : order.status === "جاري التحضير"
              ? "#FFC107"
              : "#27AE60";
        const statusBg =
          order.status === "جديد"
            ? "rgba(255,107,53,0.1)"
            : order.status === "جاري التحضير"
              ? "rgba(255,193,7,0.1)"
              : "rgba(39,174,96,0.1)";

        return `
            <div style="background:white; border-radius:12px; padding:18px; margin-bottom:15px; box-shadow:0 2px 8px rgba(0,0,0,0.1); border-left:5px solid ${statusColor}; transition:all 0.3s;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                    <div>
                        <h4 style="margin:0 0 4px 0; color:#2C3E50; font-size:16px;">📦 الطلب رقم: <strong>#${order.orderId}</strong></h4>
                        <p style="margin:0; font-size:12px; color:#7F8C8D;">⏰ ${orderTime}</p>
                    </div>
                    <div style="background:${statusBg}; padding:8px 16px; border-radius:6px; text-align:center;">
                        <span style="color:${statusColor}; font-weight:700; font-size:13px;">🔔 ${order.status}</span>
                    </div>
                </div>
                
                <div style="background:#F8F9FA; padding:12px; border-radius:8px; margin-bottom:12px;">
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:13px;">
                        <div><strong>👤 العميل:</strong><br><span style="color:#555;">${order.customerName}</span></div>
                        <div><strong>📱 الهاتف:</strong><br><span style="color:#555;">${order.customerPhone}</span></div>
                        <div><strong>📍 العنوان:</strong><br><span style="color:#555;">${order.customerAddress}</span></div>
                        <div><strong>💰 الإجمالي:</strong><br><span style="color:#FF6B35; font-weight:700;">${order.total} ج.م</span></div>
                    </div>
                </div>
                
                <div style="background:#FFF9E6; padding:12px; border-radius:8px; margin-bottom:12px; border:1px dashed #FFC107;">
                    <strong style="color:#F39C12; font-size:13px;">🍽️ تفاصيل الطلب:</strong>
                    <ul style="margin:8px 0 0 0; padding-left:20px; font-size:13px;">
                        ${itemsList}
                    </ul>
                </div>
                
                <div style="display:flex; gap:10px; margin-bottom:12px;">
                    <div style="flex:1; background:#E8F5E9; padding:10px; border-radius:6px; text-align:center; font-size:12px;">
                        <strong style="color:#27AE60;">✅ الإجمالي الجزئي</strong><br>
                        <span style="color:#27AE60; font-weight:700;">${order.subtotal} ج.م</span>
                    </div>
                    <div style="flex:1; background:#E3F2FD; padding:10px; border-radius:6px; text-align:center; font-size:12px;">
                        <strong style="color:#2196F3;">🚚 التوصيل</strong><br>
                        <span style="color:#2196F3; font-weight:700;">${order.shipping} ج.م</span>
                    </div>
                </div>
                
                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                    <button onclick="printInvoice('${order.orderId}')" style="background:linear-gradient(135deg, #8B5CF6, #A78BFA); color:white; border:none; padding:10px 16px; border-radius:6px; cursor:pointer; font-size:12px; font-weight:600; transition:0.3s;">
                        🖨️ طباعة الفاتورة
                    </button>
                    <button onclick="resendRestaurantNotification('${order.orderId}')" style="background:linear-gradient(135deg, #FF6B35, #FF8E5F); color:white; border:none; padding:10px 16px; border-radius:6px; cursor:pointer; font-size:12px; font-weight:600; transition:0.3s;">
                        📲 إعادة إرسال للمطعم
                    </button>
                    <button onclick="resendCustomerNotification('${order.orderId}')" style="background:linear-gradient(135deg, #10B981, #34D399); color:white; border:none; padding:10px 16px; border-radius:6px; cursor:pointer; font-size:12px; font-weight:600; transition:0.3s;">
                        💬 إعادة إرسال للعميل
                    </button>
                    <button onclick="updateOrderStatus('${order.orderId}', 'جاري التحضير')" style="background:linear-gradient(135deg, #FFC107, #FFD54F); color:white; border:none; padding:10px 16px; border-radius:6px; cursor:pointer; font-size:12px; font-weight:600; transition:0.3s;">
                        ⏳ جاري التحضير
                    </button>
                    <button onclick="updateOrderStatus('${order.orderId}', 'تم التسليم')" style="background:linear-gradient(135deg, #27AE60, #229954); color:white; border:none; padding:10px 16px; border-radius:6px; cursor:pointer; font-size:12px; font-weight:600; transition:0.3s;">
                        ✅ تم التسليم
                    </button>
                </div>
            </div>
        `;
      })
      .join("");
  }

  // دالة لإعادة إرسال الإشعار للمطعم
  function resendRestaurantNotification(orderId) {
    // حاول إيجاد الطلب داخل بيانات الفرع أولاً، ثم السجل المركزي
    const branchOrders =
      (window.BRANCH_DATA && window.BRANCH_DATA.orders) || [];
    let order = branchOrders.find((o) => o.orderId === orderId);
    if (!order) {
      const allOrdersLocal =
        JSON.parse(localStorage.getItem("allOrders")) || [];
      order = allOrdersLocal.find((o) => o.orderId === orderId);
    }

    if (!order) {
      showNotification("❌ لم يتم العثور على الطلب", "error");
      return;
    }

    // إعادة بناء رسالة المطعم بالتنسيق الجديد
    const timestamp = new Date(order.timestamp).toLocaleString("ar-EG");
    let restaurantMessage = `*◈ طلب جديد وارد للمطعم ◈*\n\n`;
    restaurantMessage += `رقم الطلب: *#${orderId}*\n\n`;
    restaurantMessage += `__________________________\n\n`;
    restaurantMessage += `◈ 👤 بيانات العميل:\n`;
    restaurantMessage += `الاسم: *${order.customerName}*\n`;
    restaurantMessage += `الهاتف: *${order.customerPhone}*\n`;
    restaurantMessage += `العنوان: *${order.customerAddress}*\n\n`;
    restaurantMessage += `__________________________\n\n`;
    restaurantMessage += `◈ 📦 تفاصيل الطلب:\n`;
    order.items.forEach((item, index) => {
      const quantity = item.quantity || 1;
      const itemTotal = item.price * quantity;
      restaurantMessage += `${index + 1}. ${quantity} × ${item.name} = *${itemTotal} ج.م*\n`;
    });
    restaurantMessage += `\n__________________________\n\n`;
    restaurantMessage += `◈ 💰 ملخص الحساب:\n`;
    restaurantMessage += `المجموع الجزئي: *${order.subtotal} ج.م*\n`;
    restaurantMessage += `رسوم التوصيل: *${order.shipping} ج.م*\n\n`;
    restaurantMessage += `*◈ الإجمالي النهائي: ${order.total} ج.م*\n\n`;
    restaurantMessage += `⏱️ الموعد المتوقع: 30-45 دقيقة\n`;
    restaurantMessage += `⏰ التاريخ والوقت: ${timestamp}\n\n`;
    restaurantMessage += `⚠️ *هذا إعادة إرسال للطلب*\n`;
    restaurantMessage += `👉 يرجى البدء في التحضير فوراً!`;

    // إرسال الرسالة باستخدام رقم الفرع الحالي
    const restaurantEncoded = encodeURIComponent(restaurantMessage);
    const phoneToUse =
      (window.BRANCH_DATA && window.BRANCH_DATA.phone) || RESTAURANT_PHONE;
    window.open(
      `https://wa.me/${phoneToUse}?text=${restaurantEncoded}`,
      "_blank",
    );
    showNotification("✅ تم إعادة إرسال الإشعار للمطعم", "success");
  }

  // دالة لإعادة إرسال تأكيد الطلب للعميل
  function resendCustomerNotification(orderId) {
    const branchOrders =
      (window.BRANCH_DATA && window.BRANCH_DATA.orders) || [];
    let order = branchOrders.find((o) => o.orderId === orderId);
    if (!order) {
      const allOrdersLocal =
        JSON.parse(localStorage.getItem("allOrders")) || [];
      order = allOrdersLocal.find((o) => o.orderId === orderId);
    }

    if (!order) {
      showNotification("❌ لم يتم العثور على الطلب", "error");
      return;
    }

    const timestamp = new Date(order.timestamp).toLocaleString("ar-EG");
    let subtotal = order.subtotal || 0;
    let shipping = order.shipping || 0;
    let finalTotal = order.total || 0;

    // بناء رسالة احترافية للعميل بنفس التنسيق
    let customerMessage = `*◈ تأكيد طلبك من My Order ◈*\n\n`;
    customerMessage += `◈ مرحباً ${order.customerName}\n`;
    customerMessage += `تم استقبال طلبك برقم: #${orderId}\n\n`;
    customerMessage += `__________________________\n\n`;
    customerMessage += `◈ 📅 التاريخ والوقت:\n${timestamp}\n\n`;
    customerMessage += `__________________________\n\n`;
    customerMessage += `◈ 📍 عنوان التوصيل:\n${order.customerAddress}\n\n`;
    customerMessage += `__________________________\n\n`;
    customerMessage += `◈ 📦 تفاصيل طلبك:\n`;
    order.items.forEach((item, index) => {
      const quantity = item.quantity || 1;
      const itemTotal = item.price * quantity;
      customerMessage += `${index + 1}. ${quantity} × ${item.name} = *${itemTotal} ج.م*\n`;
    });
    customerMessage += `\n__________________________\n\n`;
    customerMessage += `◈ 💰 ملخص الفاتورة:\n`;
    customerMessage += `المجموع الجزئي: *${subtotal} ج.م*\n`;
    customerMessage += `رسوم التوصيل: *${shipping} ج.م*\n\n`;
    customerMessage += `__________________________\n\n`;
    customerMessage += `*◈ الإجمالي النهائي: ${finalTotal} ج.م*\n\n`;
    customerMessage += `⏱️ وقت التوصيل المتوقع: 30-45 دقيقة\n\n`;
    customerMessage += `شكراً لاختيارك My Order 🙏\n`;
    customerMessage += `سيصل طلبك قريباً ⚡`;

    // إرسال الرسالة للعميل
    const customerEncoded = encodeURIComponent(customerMessage);
    window.open(
      `https://wa.me/${order.customerPhone}?text=${customerEncoded}`,
      "_blank",
    );
    showNotification("✅ تم إعادة إرسال التأكيد للعميل", "success");
  }

  // دالة لتحديث حالة الطلب
  function updateOrderStatus(orderId, newStatus) {
    // حاول تحديث داخل بيانات الفرع أولاً
    let updated = false;
    try {
      if (window.BRANCH_DATA && Array.isArray(window.BRANCH_DATA.orders)) {
        const o = window.BRANCH_DATA.orders.find((x) => x.orderId === orderId);
        if (o) {
          const oldStatus = o.status;
          o.status = newStatus;
          saveBranchData(window.BRANCH_DATA);
          updated = true;
          console.log("✅ تم تحديث حالة الطلب في بيانات الفرع");
          console.log(`   📦 رقم الطلب: #${orderId}`);
          console.log(`   🔄 الحالة: ${oldStatus} → ${newStatus}`);
        }
      }
    } catch (e) {
      console.warn("Failed to update branch order status", e);
    }

    // حاول أيضاً تحديث النسخة المركزية إن وجدت
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
    showNotification(`✅ تم تحديث حالة الطلب إلى: ${newStatus}`, "success");
  }

  // ========== دوال طباعة الفاتورة (Invoice Printing) ==========

  function generateInvoiceHTML(order) {
    const itemsList = order.items
      .map((item, index) => {
        const qty = item.quantity || 1;
        const total = item.price * qty;
        return `
            <tr style="border-bottom: 1px solid #E5E7EB;">
                <td style="padding: 12px; text-align: center; font-size: 14px;">${index + 1}</td>
                <td style="padding: 12px; text-align: right; font-size: 14px;">${item.name}</td>
                <td style="padding: 12px; text-align: center; font-size: 14px;">${qty}</td>
                <td style="padding: 12px; text-align: center; font-size: 14px;">${item.price} ج.م</td>
                <td style="padding: 12px; text-align: center; font-size: 14px; font-weight: 600;">${total} ج.م</td>
            </tr>
        `;
      })
      .join("");

    const invoiceDate = new Date(order.timestamp).toLocaleDateString("ar-EG");
    const invoiceTime = new Date(order.timestamp).toLocaleTimeString("ar-EG");

    return `
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>فاتورة الطلب #${order.orderId}</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: white;
                    color: #333;
                    line-height: 1.6;
                }
                
                .invoice-container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 40px 20px;
                }
                
                .header {
                    border-bottom: 3px solid #FF6B35;
                    margin-bottom: 30px;
                    padding-bottom: 20px;
                }
                
                .header h1 {
                    font-size: 32px;
                    color: #FF6B35;
                    margin-bottom: 10px;
                    text-align: center;
                }
                
                .header p {
                    text-align: center;
                    color: #666;
                    font-size: 14px;
                }
                
                .invoice-number {
                    background: #FFF0E6;
                    padding: 15px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    text-align: center;
                    border: 2px dashed #FF6B35;
                }
                
                .invoice-number h2 {
                    color: #FF6B35;
                    font-size: 20px;
                    margin: 0;
                }
                
                .invoice-details {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                    margin-bottom: 30px;
                    background: #F8F9FA;
                    padding: 20px;
                    border-radius: 8px;
                }
                
                .detail-section h3 {
                    color: #333;
                    font-size: 14px;
                    font-weight: 700;
                    margin-bottom: 12px;
                    border-bottom: 2px solid #FF6B35;
                    padding-bottom: 8px;
                }
                
                .detail-section p {
                    font-size: 13px;
                    margin-bottom: 6px;
                    color: #555;
                }
                
                .detail-section strong {
                    color: #FF6B35;
                    font-weight: 600;
                }
                
                .items-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                    background: white;
                    border: 2px solid #E5E7EB;
                    border-radius: 8px;
                    overflow: hidden;
                }
                
                .items-table thead {
                    background: linear-gradient(135deg, #FF6B35, #FF8E5F);
                    color: white;
                }
                
                .items-table thead th {
                    padding: 14px;
                    text-align: center;
                    font-weight: 700;
                    font-size: 14px;
                }
                
                .items-table th:first-child {
                    text-align: center;
                    width: 40px;
                }
                
                .items-table th:nth-child(2) {
                    text-align: right;
                }
                
                .items-table tbody tr:hover {
                    background: #F8F9FA;
                }
                
                .summary {
                    background: #F8F9FA;
                    padding: 20px;
                    border-radius: 8px;
                    margin-bottom: 30px;
                }
                
                .summary-row {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 12px;
                    font-size: 14px;
                }
                
                .summary-row span:first-child {
                    color: #666;
                    font-weight: 600;
                }
                
                .summary-row span:last-child {
                    color: #333;
                    font-weight: 600;
                }
                
                .total-row {
                    background: linear-gradient(135deg, #FF6B35, #FF8E5F);
                    color: white;
                    padding: 15px;
                    border-radius: 6px;
                    display: flex;
                    justify-content: space-between;
                    font-size: 18px;
                    font-weight: 700;
                    margin-bottom: 30px;
                }
                
                .footer {
                    border-top: 2px solid #E5E7EB;
                    padding-top: 20px;
                    text-align: center;
                    color: #999;
                    font-size: 12px;
                }
                
                .footer-text {
                    margin-bottom: 10px;
                }
                
                .status-badge {
                    display: inline-block;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-weight: 700;
                    font-size: 12px;
                    margin-top: 10px;
                }
                
                .status-new { background: rgba(255, 107, 53, 0.15); color: #FF6B35; }
                .status-preparing { background: rgba(255, 193, 7, 0.15); color: #FFC107; }
                .status-delivered { background: rgba(39, 174, 96, 0.15); color: #27AE60; }
                
                .print-footer {
                    text-align: center;
                    margin-top: 40px;
                    padding-top: 20px;
                    border-top: 1px solid #E5E7EB;
                    font-size: 12px;
                    color: #999;
                }
                
                @media print {
                    body {
                        background: white;
                        padding: 0;
                        margin: 0;
                    }
                    
                    .invoice-container {
                        padding: 0;
                        max-width: 100%;
                    }
                    
                    .no-print {
                        display: none;
                    }
                    
                    .invoice-container {
                        page-break-after: always;
                    }
                }
                
                .print-buttons {
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                    margin-bottom: 30px;
                    flex-wrap: wrap;
                }
                
                .print-btn {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 14px;
                    transition: all 0.3s;
                }
                
                .btn-print {
                    background: #FF6B35;
                    color: white;
                }
                
                .btn-print:hover {
                    background: #E85A1F;
                }
                
                .btn-close {
                    background: #95A5A6;
                    color: white;
                }
                
                .btn-close:hover {
                    background: #7F8C8D;
                }
                
                .qr-section {
                    text-align: center;
                    margin: 20px 0;
                    padding: 15px;
                    background: #F8F9FA;
                    border-radius: 8px;
                }
                
                .qr-section p {
                    color: #666;
                    font-size: 12px;
                    margin: 5px 0;
                }
            </style>
        </head>
        <body>
            <div class="invoice-container">
                <div class="print-buttons no-print">
                    <button class="print-btn print-btn" onclick="window.print()">🖨️ طباعة</button>
                    <button class="print-btn btn-close" onclick="window.close()">❌ إغلاق</button>
                </div>
                
                <div class="header">
                    <h1>🍽️ My Order</h1>
                    <p>منصة طلب الطعام الموثوقة</p>
                </div>
                
                <div class="invoice-number">
                    <h2>فاتورة الطلب #${order.orderId}</h2>
                </div>
                
                <div class="invoice-details">
                    <div class="detail-section">
                        <h3>📋 بيانات العميل</h3>
                        <p><strong>الاسم:</strong> ${order.customerName}</p>
                        <p><strong>الهاتف:</strong> ${order.customerPhone}</p>
                        <p><strong>العنوان:</strong> ${order.customerAddress}</p>
                    </div>
                    <div class="detail-section">
                        <h3>⏰ بيانات الطلب</h3>
                        <p><strong>التاريخ:</strong> ${invoiceDate}</p>
                        <p><strong>الوقت:</strong> ${invoiceTime}</p>
                        <p><strong>الحالة:</strong> <span class="status-badge status-${order.status === "جديد" ? "new" : order.status === "جاري التحضير" ? "preparing" : "delivered"}">${order.status}</span></p>
                    </div>
                </div>
                
                <h3 style="margin: 20px 0 10px 0; color: #333; font-size: 16px;">🍽️ تفاصيل الطلب</h3>
                
                <table class="items-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>اسم الوجبة</th>
                            <th>الكمية</th>
                            <th>السعر</th>
                            <th>الإجمالي</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itemsList}
                    </tbody>
                </table>
                
                <div class="summary">
                    <div class="summary-row">
                        <span>🛍️ المجموع الجزئي:</span>
                        <span>${order.subtotal} ج.م</span>
                    </div>
                    <div class="summary-row">
                        <span>🚚 رسوم التوصيل:</span>
                        <span>${order.shipping} ج.م</span>
                    </div>
                </div>
                
                <div class="total-row">
                    <span>💰 المبلغ النهائي:</span>
                    <span>${order.total} ج.م</span>
                </div>
                
                <div class="footer">
                    <div class="footer-text">شكراً لاستخدامك My Order</div>
                    <div class="footer-text">نسأل رضاك عن خدمتنا</div>
                    <div class="footer-text">📱 تابعنا: +20 101 2127 9663</div>
                </div>
                
                <div class="print-footer no-print">
                    <p>تم طباعة هذه الفاتورة من نظام My Order</p>
                    <p>الطباعة في: ${new Date().toLocaleString("ar-EG")}</p>
                </div>
            </div>
        </body>
        </html>
    `;
  }

  function printInvoice(orderId) {
    try {
      // جلب الطلب من بيانات الفرع أولاً ثم السجل المركزي
      const branchOrders =
        (window.BRANCH_DATA && window.BRANCH_DATA.orders) || [];
      let order = branchOrders.find((o) => o.orderId === orderId);
      if (!order) {
        const allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];
        order = allOrders.find((o) => o.orderId === orderId);
      }

      if (!order) {
        showNotification("❌ لم يتم العثور على الطلب", "error");
        return;
      }

      // توليد HTML الفاتورة
      const invoiceHTML = generateInvoiceHTML(order);

      // فتح نافذة جديدة
      const printWindow = window.open(
        "",
        "PrintWindow",
        "width=900,height=600",
      );

      if (!printWindow) {
        showNotification(
          "⚠️ تم حظر نافذة الطباعة. يرجى السماح بالنوافذ المنبثقة",
          "warning",
        );
        return;
      }

      // كتابة محتوى الفاتورة
      printWindow.document.write(invoiceHTML);
      printWindow.document.close();

      // الانتظار حتى يتم تحميل المستند
      printWindow.onload = function () {
        setTimeout(() => {
          printWindow.print();
        }, 250);
      };

      console.log("✅ تم فتح نافذة طباعة الفاتورة");
      console.log(`   📦 رقم الطلب: #${orderId}`);
      showNotification("✅ جارٍ فتح الفاتورة للطباعة...", "success");
    } catch (error) {
      console.error("❌ خطأ في طباعة الفاتورة:", error);
      showNotification("❌ حدث خطأ في توليد الفاتورة", "error");
    }
  }

  // ========== دوال سجل الطلبات للعميل ==========

  function loadCustomerOrders() {
    const container = document.getElementById("ordersHistoryContainer");
    if (!container) return;

    // عرض الأوردرات من بيانات الفرع أولاً ثم السجل المركزي (العميل يرى فقط طلبات هذا الفرع)
    const orders =
      (window.BRANCH_DATA && window.BRANCH_DATA.orders) || allOrders || [];

    if (orders.length === 0) {
      container.innerHTML = `
            <div style="text-align:center; padding:60px 20px;">
                <i class="fa-solid fa-inbox" style="font-size:64px; color:#BDC3C7; margin-bottom:15px;"></i>
                <h3 style="color:#7F8C8D; margin-bottom:10px; font-size:18px;">لا توجد طلبات بعد</h3>
                <p style="color:#BDC3C7; margin-bottom:20px;">ابدأ بطلب وجبتك المفضلة الآن!</p>
                <button onclick="showPage('menu')" style="background:linear-gradient(135deg, #FF6B35, #FF8E5F); color:white; border:none; padding:12px 30px; border-radius:8px; cursor:pointer; font-weight:600;">
                    🍔 تصفح المنيو
                </button>
            </div>
        `;
      return;
    }

    // عرض الطلبات (الأحدث أولاً)
    container.innerHTML = orders
      .slice()
      .reverse()
      .map((order, idx) => {
        const itemsList = order.items
          .map((item, i) => {
            const quantity = item.quantity || 1;
            const itemTotal = item.price * quantity;
            return `<li style="padding:6px 0; font-size:13px; color:#2C3E50; border-bottom:1px solid #F0F0F0;">
                🔹 ${item.name} × ${quantity} = ${itemTotal} ج.م
            </li>`;
          })
          .join("");

        const orderTime = new Date(order.timestamp).toLocaleString("ar-EG");
        const statusColor =
          order.status === "جديد"
            ? "#FF6B35"
            : order.status === "جاري التحضير"
              ? "#FFC107"
              : "#27AE60";
        const statusBg =
          order.status === "جديد"
            ? "rgba(255,107,53,0.1)"
            : order.status === "جاري التحضير"
              ? "rgba(255,193,7,0.1)"
              : "rgba(39,174,96,0.1)";
        const statusIcon =
          order.status === "جديد"
            ? "🔵"
            : order.status === "جاري التحضير"
              ? "🟡"
              : "🟢";

        return `
            <div style="background:white; border-radius:12px; padding:18px; margin-bottom:15px; box-shadow:0 2px 8px rgba(0,0,0,0.1); border-left:5px solid ${statusColor}; transition:all 0.3s;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:10px;">
                    <div>
                        <h4 style="margin:0 0 4px 0; color:#2C3E50; font-size:16px;">📦 الطلب رقم: <strong>#${order.orderId}</strong></h4>
                        <p style="margin:0; font-size:12px; color:#7F8C8D;">⏰ ${orderTime}</p>
                    </div>
                    <div style="background:${statusBg}; padding:8px 16px; border-radius:6px; text-align:center;">
                        <span style="color:${statusColor}; font-weight:700; font-size:13px;">${statusIcon} ${order.status}</span>
                    </div>
                </div>
                
                <div style="background:#F8F9FA; padding:12px; border-radius:8px; margin-bottom:12px;">
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:13px;">
                        <div><strong>👤 اسمك:</strong><br><span style="color:#555;">${order.customerName}</span></div>
                        <div><strong>📱 رقمك:</strong><br><span style="color:#555;">${order.customerPhone}</span></div>
                        <div style="grid-column:1/-1;"><strong>📍 عنوان التوصيل:</strong><br><span style="color:#555;">${order.customerAddress}</span></div>
                    </div>
                </div>
                
                <div style="background:#FFF9E6; padding:12px; border-radius:8px; margin-bottom:12px; border:1px dashed #FFC107;">
                    <strong style="color:#F39C12; font-size:13px;">🍽️ تفاصيل الطلب:</strong>
                    <ul style="margin:8px 0 0 0; padding-left:20px; list-style:none;">
                        ${itemsList}
                    </ul>
                </div>
                
                <div style="display:flex; gap:10px; margin-bottom:12px;">
                    <div style="flex:1; background:#E8F5E9; padding:10px; border-radius:6px; text-align:center; font-size:12px;">
                        <strong style="color:#27AE60;">المجموع الجزئي</strong><br>
                        <span style="color:#27AE60; font-weight:700;">${order.subtotal} ج.م</span>
                    </div>
                    <div style="flex:1; background:#E3F2FD; padding:10px; border-radius:6px; text-align:center; font-size:12px;">
                        <strong style="color:#2196F3;">🚚 التوصيل</strong><br>
                        <span style="color:#2196F3; font-weight:700;">${order.shipping} ج.م</span>
                    </div>
                    <div style="flex:1; background:#F3E5F5; padding:10px; border-radius:6px; text-align:center; font-size:12px;">
                        <strong style="color:#9C27B0;">💰 الإجمالي</strong><br>
                        <span style="color:#9C27B0; font-weight:700;">${order.total} ج.م</span>
                    </div>
                </div>
                
                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                    <button onclick="repeatOrderFromHistory('${order.orderId}')" style="background:linear-gradient(135deg, #FF6B35, #FF8E5F); color:white; border:none; padding:10px 16px; border-radius:6px; cursor:pointer; font-size:12px; font-weight:600; transition:0.3s;">
                        🔄 إعادة نفس الطلب
                    </button>
                    <button onclick="resendOrderToRestaurant('${order.orderId}')" style="background:linear-gradient(135deg, #27AE60, #229954); color:white; border:none; padding:10px 16px; border-radius:6px; cursor:pointer; font-size:12px; font-weight:600; transition:0.3s;">
                        📲 إعادة إرسال للمطعم
                    </button>
                </div>
            </div>
        `;
      })
      .join("");
  }

  // إعادة نفس الطلب
  function repeatOrderFromHistory(orderId) {
    // جلب الطلبات من السجل المركزي
    const orders =
      JSON.parse(localStorage.getItem("allOrders")) || allOrders || [];
    const order = orders.find((o) => o.orderId === orderId);

    if (!order) {
      showNotification("❌ لم يتم العثور على الطلب", "error");
      return;
    }

    // إضافة العناصر للسلة
    order.items.forEach((item) => {
      const existingItem = cart.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity =
          (existingItem.quantity || 1) + (item.quantity || 1);
      } else {
        cart.push({ ...item, quantity: item.quantity || 1 });
      }
    });

    updateCartCount();
    renderCartItems();
    showNotification("✅ تمت إضافة عناصر الطلب السابق للسلة", "success");
    showPage("cart-page");
  }

  // إعادة إرسال الطلب للمطعم
  function resendOrderToRestaurant(orderId) {
    // جلب الطلبات من السجل المركزي
    const orders =
      JSON.parse(localStorage.getItem("allOrders")) || allOrders || [];
    const order = orders.find((o) => o.orderId === orderId);

    if (!order) {
      showNotification("❌ لم يتم العثور على الطلب", "error");
      return;
    }

    // إعادة بناء رسالة المطعم
    let itemsSummary = "";
    order.items.forEach((item, index) => {
      const quantity = item.quantity || 1;
      const itemTotal = item.price * quantity;
      itemsSummary += `\n${index + 1}️⃣ ${item.name} × ${quantity} = *${itemTotal} ج.م*`;
    });

    const timestamp = new Date(order.timestamp).toLocaleString("ar-EG");
    let restaurantMessage = `*🛍️ 📝 إعادة طلب سابق من My Order*\n`;
    restaurantMessage += `*رقم الطلب الأصلي: #${orderId}*\n`;
    restaurantMessage += `${"═".repeat(40)}\n`;
    restaurantMessage += `*👤 اسم العميل:* ${order.customerName}\n`;
    restaurantMessage += `*📱 رقم العميل:* ${order.customerPhone}\n`;
    restaurantMessage += `*📍 عنوان التوصيل:* ${order.customerAddress}\n`;
    restaurantMessage += `*📅 الطلب الأصلي:* ${timestamp}\n`;
    restaurantMessage += `${"═".repeat(40)}\n`;
    restaurantMessage += `*🍽️ تفاصيل الطلب:*${itemsSummary}\n`;
    restaurantMessage += `${"═".repeat(40)}\n`;
    restaurantMessage += `*💰 الإجمالي:* *${order.total} ج.م*\n`;
    restaurantMessage += `${"═".repeat(40)}\n`;
    restaurantMessage += `⚠️ هذا طلب متكرر - العميل يريد نفس الطلب\n`;
    restaurantMessage += `📌 برجاء تحضير الطلب بسرعة`;

    // إرسال الرسالة
    console.log("📲 إرسال الطلب المتكرر للمطعم...");
    const restaurantEncoded = encodeURIComponent(restaurantMessage);
    const phoneToUse =
      (window.BRANCH_DATA && window.BRANCH_DATA.phone) ||
      localStorage.getItem("restaurant_phone") ||
      RESTAURANT_PHONE;
    const whatsappUrl = `https://wa.me/${phoneToUse}?text=${restaurantEncoded}`;

    console.log("🌐 رابط WhatsApp:", whatsappUrl);
    console.log("📱 رقم المطعم:", RESTAURANT_PHONE);

    const whatsappWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );

    if (
      !whatsappWindow ||
      whatsappWindow.closed ||
      typeof whatsappWindow.closed === "undefined"
    ) {
      console.warn("⚠️ فتح النافذة فشل - محاولة إعادة التوجيه");
      setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 1000);
    }

    showNotification("✅ تم إعادة إرسال الطلب للمطعم", "success");
  }

  function renderAdminList() {
    const list = document.getElementById("adminItemsList");
    if (!list) return;

    if (menuItems.length === 0) {
      list.innerHTML = `<p style="text-align:center; padding:30px; color:#7F8C8D; font-size:15px;">📭 لا توجد أصناف حالياً</p>`;
      return;
    }

    list.innerHTML = menuItems
      .map(
        (item) => `
        <div style="background:linear-gradient(135deg, rgba(255,107,53,0.05), rgba(255,142,95,0.05)); padding:16px; margin-bottom:12px; border-radius:12px; display:flex; justify-content:space-between; align-items:center; border-left:4px solid #FF6B35; transition:0.3s; hover:box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <div>
                <span style="font-weight:700; display:block; color:#2C3E50; font-size:15px;">📌 ${item.name}</span>
                <span style="font-size:13px; color:#7F8C8D; display:block; margin-top:4px;">💰 ${item.price} ج.م</span>
            </div>
            <div style="display:flex; gap:8px;">
                <button onclick="editItemFull(${item.id})" style="background:linear-gradient(135deg, #27AE60, #229954); color:white; border:none; padding:10px 16px; border-radius:8px; cursor:pointer; font-size:13px; font-weight:600; transition:0.3s; box-shadow:0 2px 8px rgba(39,174,96,0.2);">✏️ تعديل كامل</button>
                <button data-action="delete-item" data-id="${item.id}" style="background:linear-gradient(135deg, #E74C3C, #C0392B); color:white; border:none; padding:10px 18px; border-radius:8px; cursor:pointer; font-size:13px; font-weight:600; transition:0.3s; box-shadow:0 2px 8px rgba(231,76,60,0.2);">🗑️ حذف</button>
            </div>
        </div>
    `,
      )
      .join("");
  }

  function deleteItem(id) {
    if (confirm("⚠️ هل تريد فعلاً حذف هذا الصنف؟")) {
      const deletedItem = menuItems.find((i) => i.id === id);
      menuItems = menuItems.filter((i) => i.id !== id);
      saveMenu(menuItems);
      console.log("✅ تم حذف الصنف من localStorage (per-restaurant)");
      console.log(`   🗑️ الصنف المحذوف: ${deletedItem?.name}`);
      console.log(`   📊 عدد الأصناف المتبقية: ${menuItems.length}`);
      renderAdminList();
      renderMenu(menuItems);
      showNotification("✓ تم حذف الصنف بنجاح", "success");

      // تحديث الإحصائيات
      if (typeof updateAdminStatistics === "function") {
        updateAdminStatistics();
      }

      try {
        if (typeof logEvent === "function")
          logEvent("ADMIN_DELETE_ITEM", { id: id, name: deletedItem?.name });
      } catch (e) {}
    }
  }

  function editItemFull(id) {
    console.log("editItemFull called with id:", id);
    const item = menuItems.find((i) => i.id === id);
    if (!item) {
      console.log("Item not found");
      return;
    }

    const editModal = document.createElement("div");
    editModal.id = "editItemModal";
    editModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        direction: rtl;
    `;

    editModal.innerHTML = `
        <div style="background:white; padding:30px; border-radius:12px; max-width:500px; width:90%; max-height:90vh; overflow-y:auto; box-shadow:0 10px 40px rgba(0,0,0,0.3); direction:rtl;">
            <h2 style="color:#2C3E50; margin-bottom:20px; font-size:20px;">✏️ تعديل المنتج</h2>
            
            <div style="margin-bottom:16px;">
                <label style="display:block; color:#34495E; font-weight:600; margin-bottom:6px;">اسم المنتج:</label>
                <input type="text" id="editItemName" value="${item.name}" style="width:100%; padding:10px; border:2px solid #ECF0F1; border-radius:6px; font-size:14px; font-family:inherit; box-sizing:border-box;" />
            </div>
            
            <div style="margin-bottom:16px;">
                <label style="display:block; color:#34495E; font-weight:600; margin-bottom:6px;">السعر:</label>
                <input type="number" id="editItemPrice" value="${item.price}" min="1" step="0.01" style="width:100%; padding:10px; border:2px solid #ECF0F1; border-radius:6px; font-size:14px; box-sizing:border-box;" />
            </div>
            
            <div style="margin-bottom:16px;">
                <label style="display:block; color:#34495E; font-weight:600; margin-bottom:6px;">الفئة:</label>
                <select id="editItemCategory" style="width:100%; padding:10px; border:2px solid #ECF0F1; border-radius:6px; font-size:14px; font-family:inherit; box-sizing:border-box;">
                    <option value="food" ${item.cat === "food" ? "selected" : ""}>🍔 أطعمة</option>
                    <option value="drinks" ${item.cat === "drinks" ? "selected" : ""}>🥤 مشروبات</option>
                    <option value="sweets" ${item.cat === "sweets" ? "selected" : ""}>🍰 حلويات</option>
                </select>
            </div>
            
            <div style="margin-bottom:20px;">
                <label style="display:block; color:#34495E; font-weight:600; margin-bottom:6px;">رابط الصورة:</label>
                <textarea id="editItemImg" style="width:100%; padding:10px; border:2px solid #ECF0F1; border-radius:6px; font-size:12px; font-family:monospace; min-height:60px; box-sizing:border-box; resize:vertical;">${item.img}</textarea>
            </div>
            
            <div style="display:flex; gap:10px; justify-content:flex-end;">
                <button id="cancelEditBtn" style="background:#95A5A6; color:white; border:none; padding:10px 20px; border-radius:6px; cursor:pointer; font-weight:600; transition:0.3s; font-size:14px;">إلغاء</button>
                <button id="saveEditBtn" style="background:linear-gradient(135deg, #27AE60, #229954); color:white; border:none; padding:10px 20px; border-radius:6px; cursor:pointer; font-weight:600; transition:0.3s; font-size:14px;">حفظ التعديلات</button>
            </div>
        </div>
    `;

    document.body.appendChild(editModal);
    console.log("Modal appended to body");

    // Get buttons after they're added to the DOM
    const cancelBtn = document.getElementById("cancelEditBtn");
    const saveBtn = document.getElementById("saveEditBtn");

    if (!cancelBtn || !saveBtn) {
      console.log("Buttons not found:", { cancelBtn, saveBtn });
      return;
    }

    cancelBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      editModal.remove();
    });

    cancelBtn.addEventListener("mouseover", function () {
      this.style.background = "#7F8C8D";
    });
    cancelBtn.addEventListener("mouseout", function () {
      this.style.background = "#95A5A6";
    });

    saveBtn.addEventListener("mouseover", function () {
      this.style.background = "#1E8449";
    });
    saveBtn.addEventListener("mouseout", function () {
      this.style.background = "#27AE60";
    });

    saveBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const newName = document.getElementById("editItemName").value.trim();
      const newPrice = parseFloat(
        document.getElementById("editItemPrice").value,
      );
      const newCat = document.getElementById("editItemCategory").value;
      const newImg = document.getElementById("editItemImg").value.trim();

      console.log("Save clicked:", { newName, newPrice, newCat, newImg });

      if (!newName) {
        showNotification("⚠️ اسم المنتج لا يمكن أن يكون فارغاً", "warning");
        return;
      }
      if (isNaN(newPrice) || newPrice <= 0) {
        showNotification("⚠️ السعر يجب أن يكون رقماً موجباً", "warning");
        return;
      }
      if (!newImg) {
        showNotification("⚠️ رابط الصورة لا يمكن أن يكون فارغاً", "warning");
        return;
      }

      item.name = newName;
      item.price = newPrice;
      item.cat = newCat;
      item.img = newImg;

      saveMenu(menuItems);
      editModal.remove();
      renderAdminList();
      renderMenu(menuItems);
      renderHomeMenu(menuItems);
      showNotification("✅ تم تحديث المنتج بنجاح", "success");
      try {
        if (typeof logEvent === "function")
          logEvent("ADMIN_EDIT_ITEM", {
            id: item.id,
            name: newName,
            price: newPrice,
          });
      } catch (e) {}
    });

    editModal.addEventListener("click", (e) => {
      if (e.target === editModal) editModal.remove();
    });
  }

  function editItemPrice(id, currentPrice) {
    const newPrice = prompt(`أدخل السعر الجديد (الحالي: ${currentPrice} ج.م):`);
    if (newPrice === null) return; // cancelled

    const numPrice = parseFloat(newPrice);
    if (isNaN(numPrice) || numPrice <= 0) {
      showNotification("⚠️ السعر يجب أن يكون رقماً موجباً", "warning");
      return;
    }

    const item = menuItems.find((i) => i.id === id);
    if (item) {
      const oldPrice = item.price;
      item.price = numPrice;
      saveMenu(menuItems);
      console.log("✅ تم تعديل سعر الصنف في localStorage (per-restaurant)");
      console.log(`   📝 الصنف: ${item.name}`);
      console.log(
        `   💰 السعر القديم: ${oldPrice} ج.م → الجديد: ${numPrice} ج.م`,
      );
      renderAdminList();
      renderMenu(menuItems);
      showNotification(
        `✅ تم تحديث السعر من ${oldPrice} إلى ${numPrice} ج.م`,
        "success",
      );
      try {
        if (typeof logEvent === "function")
          logEvent("ADMIN_EDIT_PRICE", {
            id: item.id,
            name: item.name,
            oldPrice: oldPrice,
            newPrice: numPrice,
          });
      } catch (e) {}
    }
  }

  function updateRestaurantPhone() {
    console.log("🔍 بدء تحديث رقم المطعم...");
    const phoneInput = document.getElementById("restaurantPhoneInput");
    let phone = phoneInput.value.trim();

    console.log("📱 الرقم المدخل:", phone);

    if (!phone) {
      showNotification("⚠️ الرجاء إدخال رقم الهاتف", "warning");
      return;
    }

    // تنسيق رقم الهاتف
    let formattedPhone = phone.replace(/^0/, "20");
    if (!formattedPhone.startsWith("20")) {
      formattedPhone = "20" + phone;
    }
    formattedPhone = formattedPhone.replace(/\D/g, "");

    console.log("✅ الرقم بعد التنسيق:", formattedPhone);

    if (!/^201[0-9]{9}$/.test(formattedPhone)) {
      showNotification(
        "❌ رقم الهاتف غير صحيح. استخدم صيغة مصرية صحيحة",
        "error",
      );
      return;
    }

    // حفظ الرقم
    RESTAURANT_PHONE = formattedPhone;
    try {
      if (window.BRANCH_DATA) {
        window.BRANCH_DATA.phone = formattedPhone;
        saveBranchData(window.BRANCH_DATA);
      } else {
        localStorage.setItem("restaurant_phone", formattedPhone);
      }
      console.log("💾 تم حفظ الرقم في إعدادات الفرع بنجاح:", formattedPhone);
    } catch (e) {
      console.error("❌ خطأ في حفظ الرقم:", e);
    }

    // تحديث العرض
    if (document.getElementById("currentPhoneDisplay")) {
      document.getElementById("currentPhoneDisplay").textContent =
        formattedPhone;
      console.log("🖥️ تم تحديث عرض الرقم على الصفحة");
    }
    phoneInput.value = "";

    console.log("✅ انتهى تحديث رقم المطعم بنجاح");
    showNotification(
      "✅ تم تحديث رقم المطعم بنجاح: " + formattedPhone,
      "success",
    );
  }

  // تحديث رقم المطعم عند تحميل الصفحة
  function initializeAdminPanel() {
    // Ensure branch data is loaded
    if (!window.BRANCH_DATA) window.BRANCH_DATA = loadBranchData();

    const phoneDisplay = document.getElementById("currentPhoneDisplay");
    if (phoneDisplay) {
      phoneDisplay.textContent =
        (window.BRANCH_DATA && window.BRANCH_DATA.phone) || RESTAURANT_PHONE;
    }

    // Inject Branch Settings panel into admin area (if not already present)
    try {
      // Disabled per user request: do not inject '⚙️ إعدادات الفرع' UI
      if (false) {
        const adminRoot =
          document.getElementById("admin-page") ||
          document.querySelector(".page") ||
          document.body;
        let settingsPanel = document.getElementById("branchSettingsPanel");
        if (!settingsPanel) {
          settingsPanel = document.createElement("div");
          settingsPanel.id = "branchSettingsPanel";
          settingsPanel.style.cssText =
            "background:white; padding:16px; border-radius:12px; margin-bottom:16px; box-shadow:0 6px 18px rgba(0,0,0,0.06);";
          // Insert at top of admin root
          if (adminRoot && adminRoot.firstChild)
            adminRoot.insertBefore(settingsPanel, adminRoot.firstChild);
          else
            document.body.insertBefore(settingsPanel, document.body.firstChild);
        }

      //   // Build inner HTML for settings (simple, robust inputs)
      //   settingsPanel.innerHTML = `
      //   <h3 style="margin:0 0 10px; font-size:18px; color:#2C3E50;">⚙️ إعدادات الفرع</h3>
      //   <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:10px;">
      //     <div>
      //       <label style="font-weight:700; display:block; margin-bottom:6px;">اسم الفرع</label>
      //       <input id="branchNameInput" placeholder="اسم الفرع" style="width:100%; padding:8px; border-radius:8px; border:1px solid #E6E9EE;" />
      //     </div>
      //     <div>
      //       <label style="font-weight:700; display:block; margin-bottom:6px;">رقم واتساب الفرع</label>
      //       <input id="branchWhatsappInput" placeholder="2010..." style="width:100%; padding:8px; border-radius:8px; border:1px solid #E6E9EE;" oninput="saveRestaurantPhone(this.value)" />
      //     </div>
      //     <div>
      //       <label style="font-weight:700; display:block; margin-bottom:6px;">بريد التواصل للفرع</label>
      //       <input id="branchEmailInput" placeholder="you@domain.com" style="width:100%; padding:8px; border-radius:8px; border:1px solid #E6E9EE;" />
      //     </div>
      //     <div>
      //       <label style="font-weight:700; display:block; margin-bottom:6px;">رابط لوجو الفرع</label>
      //       <input id="branchLogoInput" placeholder="https://..." style="width:100%; padding:8px; border-radius:8px; border:1px solid #E6E9EE;" />
      //     </div>
      //     <div>
      //       <label style="font-weight:700; display:block; margin-bottom:6px;">ساعات العمل</label>
      //       <input id="branchHoursInput" placeholder="مثال: 10:00 - 23:00" style="width:100%; padding:8px; border-radius:8px; border:1px solid #E6E9EE;" />
      //     </div>
      //     <div style="grid-column:1/-1;">
      //       <label style="font-weight:700; display:block; margin-bottom:6px;">وصف الفرع</label>
      //       <textarea id="branchDescInput" placeholder="وصف قصير للفرع" style="width:100%; padding:8px; border-radius:8px; border:1px solid #E6E9EE; min-height:60px;"></textarea>
      //     </div>
      //     <div style="grid-column:1/-1;">
      //       <label style="font-weight:700; display:block; margin-bottom:6px;">روابط التواصل (JSON أو comma-separated)</label>
      //       <input id="branchSocialInput" placeholder='مثال: {"instagram":"https://...","facebook":"https://..."} أو instagram,facebook' style="width:100%; padding:8px; border-radius:8px; border:1px solid #E6E9EE;" />
      //     </div>
      //   </div>
      //   <div style="display:flex; gap:10px; margin-top:12px; justify-content:flex-end;">
      //     <button id="previewBranchSettingsBtn" style="background:#10B981; color:white; border:none; padding:10px 16px; border-radius:8px; cursor:pointer; font-weight:700;">عرض فوري</button>
      //     <button id="saveBranchSettingsBtn" style="background:linear-gradient(135deg,#FF6B35,#FF8E5F); color:white; border:none; padding:10px 16px; border-radius:8px; cursor:pointer; font-weight:700;">حفظ بيانات الفرع</button>
      //     <button id="resetBranchToMasterBtn" style="background:#F3F4F6; color:#333; border:1px solid #E6E9EE; padding:10px 14px; border-radius:8px; cursor:pointer; font-weight:600;">تهيئة المنيو الافتراضي</button>
      //   </div>
      //   <div id="branchReportsContainer" style="margin-top:14px;"></div>
      // `;

        // Populate the fields from BRANCH_DATA
        document.getElementById("branchNameInput").value =
          window.BRANCH_DATA.name || "";
        document.getElementById("branchWhatsappInput").value =
          window.BRANCH_DATA.phone || "";
        document.getElementById("branchEmailInput").value =
          window.BRANCH_DATA.email || "";
        document.getElementById("branchLogoInput").value =
          window.BRANCH_DATA.logo || "";
        document.getElementById("branchHoursInput").value =
          window.BRANCH_DATA.hours || "";
        document.getElementById("branchDescInput").value =
          window.BRANCH_DATA.description || "";
        document.getElementById("branchSocialInput").value =
          typeof window.BRANCH_DATA.social === "object"
            ? JSON.stringify(window.BRANCH_DATA.social)
            : window.BRANCH_DATA.social || "";

        // Save handler
        document.getElementById("saveBranchSettingsBtn").onclick = function () {
          const name =
            document.getElementById("branchNameInput").value.trim() ||
            window.BRANCH_DATA.name;
          let phone =
            document.getElementById("branchWhatsappInput").value.trim() ||
            window.BRANCH_DATA.phone ||
            "";
          const email =
            document.getElementById("branchEmailInput").value.trim() ||
            window.BRANCH_DATA.email ||
            "";
          const logo =
            document.getElementById("branchLogoInput").value.trim() ||
            window.BRANCH_DATA.logo;
          const hours =
            document.getElementById("branchHoursInput").value.trim() ||
            window.BRANCH_DATA.hours;
          const desc =
            document.getElementById("branchDescInput").value.trim() ||
            window.BRANCH_DATA.description;
          const socialRaw = document
            .getElementById("branchSocialInput")
            .value.trim();

          // --- Validation & normalization ---
          try {
            // Normalize phone to Egyptian international form without + (e.g. 2010########)
            let phoneDigits = (phone || "").replace(/\D/g, "");
            if (phoneDigits.startsWith("0") && phoneDigits.length === 11) {
              phoneDigits = "20" + phoneDigits.slice(1);
            } else if (
              phoneDigits.length === 9 &&
              phoneDigits.startsWith("1")
            ) {
              phoneDigits = "20" + phoneDigits;
            }
            // If still looks like local '2010...' accept, else try to leave as-is
            if (!Validator.isValidPhone(phoneDigits)) {
              showNotification(
                "⚠️ رقم واتساب الفرع غير صحيح. أدخل رقم مصري مثل 01012345678 أو 201012345678",
                "error",
              );
              return;
            }
            phone = phoneDigits;

            // Validate email if provided
            if (email && !Validator.isValidEmail(email)) {
              showNotification("⚠️ صيغة البريد الإلكتروني غير صحيحة", "error");
              return;
            }
          } catch (e) {
            console.warn("Validation error in branch settings:", e);
            showNotification(
              "❌ فشل التحقق من بيانات الفرع. حاول مرة أخرى.",
              "error",
            );
            return;
          }
          let social = window.BRANCH_DATA.social || {};
          if (socialRaw) {
            try {
              social = JSON.parse(socialRaw);
            } catch (e) {
              // try comma-separated
              social = {};
              socialRaw.split(",").forEach((s) => {
                const k = s.trim();
                if (k) social[k] = "";
              });
            }
          }

          window.BRANCH_DATA.name = name;
          window.BRANCH_DATA.phone = phone;
          window.BRANCH_DATA.email = email;
          window.BRANCH_DATA.logo = logo;
          window.BRANCH_DATA.hours = hours;
          window.BRANCH_DATA.description = desc;
          window.BRANCH_DATA.social = social;

          // update global RESTAURANT_PHONE and RESTAURANT_EMAIL for immediate effects
          RESTAURANT_PHONE = phone;
          RESTAURANT_EMAIL = email;

          saveBranchData(window.BRANCH_DATA);
          try {
            localStorage.setItem(
              "restaurantEmail",
              window.BRANCH_DATA.email || "",
            );
          } catch (e) {}
          try {
            localStorage.setItem("restaurant_phone", phone || "");
          } catch (e) {}
          showNotification("✅ تم حفظ بيانات الفرع بنجاح", "success");
          // refresh admin statistics & badge
          updateAdminStatistics();
          const badge = document.getElementById("adminRestaurantBadge");
          if (badge)
            badge.textContent = `أنت تعدل الآن منيو مطعم: ${window.BRANCH_DATA.name}`;
          // Update contact links on the page immediately
          try {
            if (window.applyRestaurantToUI) window.applyRestaurantToUI();
          } catch (e) {}
        };

        // Preview handler: save branch data and notify other windows via storage event
        document.getElementById("previewBranchSettingsBtn").onclick =
          function () {
            try {
              // reuse the same validation and save logic by invoking save handler
              document.getElementById("saveBranchSettingsBtn").click();
              // bump a preview key so other tabs/windows react via storage event
              try {
                const key = `branch_preview_${window.BRANCH_DATA && window.BRANCH_DATA.slug}`;
                localStorage.setItem(key, Date.now().toString());
              } catch (e) {}
              showNotification(
                "ℹ️ عرض التغييرات تم، سيتم تحديث البوابة تلقائياً",
                "info",
              );
            } catch (e) {
              console.warn("Preview failed", e);
              showNotification("❌ فشل العرض الفوري", "error");
            }
          };

        document.getElementById("resetBranchToMasterBtn").onclick =
          function () {
            if (
              !confirm(
                "⚠️ هل تريد تهيئة قائمة هذا الفرع إلى القائمة الافتراضية (سيحذف التعديلات المحلية)؟",
              )
            )
              return;
            window.BRANCH_DATA.menu = JSON.parse(
              JSON.stringify(MASTER_MENU || defaultItems),
            );
            saveBranchData(window.BRANCH_DATA);
            menuItems = JSON.parse(JSON.stringify(window.BRANCH_DATA.menu));
            renderMenu(menuItems);
            renderAdminList();
            showNotification(
              "✅ تم تهيئة قائمة الفرع إلى النسخة الافتراضية",
              "success",
            );
          };

        // Render branch reports (orders + revenue)
        renderBranchReports();
      }
    } catch (e) {
      console.warn("Failed to inject branch settings UI:", e);
    }

    // تحديث الإحصائيات العامة
    updateAdminStatistics();
  }

  function renderBranchReports() {
    try {
      const container = document.getElementById("branchReportsContainer");
      if (!container) return;
      const orders = (window.BRANCH_DATA && window.BRANCH_DATA.orders) || [];
      const totalOrders = orders.length;
      const totalRevenue = orders.reduce((s, o) => s + (o.total || 0), 0);
      const html = `
        <div style="display:flex; gap:12px; margin-top:12px;">
          <div style="background:#FFF8F0; padding:10px 12px; border-radius:8px; border:1px solid #FFE6D6; flex:1;">
            <div style="font-size:12px; color:#FF6B35; font-weight:700;">🧾 طلبات الفرع</div>
            <div style="font-size:18px; font-weight:900;">${totalOrders}</div>
          </div>
          <div style="background:#F0FFF4; padding:10px 12px; border-radius:8px; border:1px solid #E6F8EE; flex:1;">
            <div style="font-size:12px; color:#10B981; font-weight:700;">💰 إجمالي أرباح الفرع</div>
            <div style="font-size:18px; font-weight:900;">${totalRevenue} ج.م</div>
          </div>
        </div>
      `;
      container.innerHTML = html;
    } catch (e) {
      console.warn("Failed to render branch reports:", e);
    }
  }

  // دالة لتحديث الإحصائيات في لوحة التحكم
  function updateAdminStatistics() {
    try {
      // جلب البيانات: استخدم بيانات الفرع أولاً (للطلبات) ثم السجل المركزي (للتوافقية)
      const branchOrders =
        (window.BRANCH_DATA && window.BRANCH_DATA.orders) || [];
      let orders =
        branchOrders.length > 0
          ? branchOrders
          : JSON.parse(localStorage.getItem("allOrders")) || [];
      let customers = JSON.parse(localStorage.getItem("customers")) || [];
      // للمنيو: استخدم القائمة المحفوظة لهذا الفرع
      let menuItems =
        window.BRANCH_DATA && window.BRANCH_DATA.menu
          ? window.BRANCH_DATA.menu
          : menuItems || [];

      // حساب الإجماليات الشهرية
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
          monthlyOrders += 1;
        }
      });

      // حساب العملاء الذين سجلوا في الشهر الحالي
      let monthlyCustomers = 0;
      customers.forEach((c) => {
        const created = c && c.createdAt ? new Date(c.createdAt) : null;
        if (
          created &&
          created.getMonth() === currentMonth &&
          created.getFullYear() === currentYear
        ) {
          monthlyCustomers += 1;
        }
      });

      // تحديث عناصر الإحصائيات HTML
      const totalOrdersEl = document.getElementById("totalOrdersCount");
      const dailyRevenueEl = document.getElementById("dailyRevenueCount");
      const totalCustomersEl = document.getElementById("totalCustomersCount");
      const totalItemsEl = document.getElementById("totalItemsCount");
      const totalRevenueEl = document.getElementById("totalRevenueCount");

      if (totalOrdersEl) totalOrdersEl.textContent = monthlyOrders;
      if (dailyRevenueEl) dailyRevenueEl.textContent = monthlyRevenue + " ج.م";
      if (totalCustomersEl) totalCustomersEl.textContent = monthlyCustomers;
      if (totalItemsEl) totalItemsEl.textContent = menuItems.length;
      if (totalRevenueEl) totalRevenueEl.textContent = totalRevenue + " ج.م";

      console.log("✅ تم تحديث إحصائيات لوحة التحكم");
      console.log("📊 الإحصائيات:", {
        monthlyOrders: monthlyOrders,
        monthlyRevenue: monthlyRevenue,
        monthlyCustomers: monthlyCustomers,
        totalItems: menuItems.length,
        totalRevenue: totalRevenue,
      });
    } catch (error) {
      console.error("❌ خطأ في تحديث الإحصائيات:", error);
    }
  }

  // زر تهيئة من لوحة الإدارة: يهيئ Firebase إن أمكن وإلا يهيئ LocalStorage ويعيد تحميل القائمة
  function seedFromAdmin() {
    // إذا كانت دوال DBSeeder متاحة وFirebase متاح
    if (
      typeof DBSeeder !== "undefined" &&
      DBSeeder.seedAll &&
      typeof window.firebaseDB !== "undefined"
    ) {
      showNotification("⏳ جاري تهيئة البيانات في Firebase...", "info");
      DBSeeder.seedAll();
      // بعد التهيئة حاول مزامنة البيانات
      setTimeout(() => {
        if (window.firebaseDB && window.firebaseDB.initializeFirebaseSync) {
          window.firebaseDB.initializeFirebaseSync();
        }
        showNotification(
          "✅ تم تهيئة البيانات. تحقق من لوحة الإدارة.",
          "success",
        );
        renderMenu(menuItems);
        renderAdminList();
        try {
          if (typeof logEvent === "function")
            logEvent("ADMIN_SEED", { method: "firebase" });
        } catch (e) {}
      }, 1200);
      return;
    }

    // بخلاف ذلك، استبدال LocalStorage بالبيانات التجريبية إذا كانت متاحة
    if (typeof DBSeeder !== "undefined" && DBSeeder.sampleMenu) {
      menuItems = DBSeeder.sampleMenu.slice();
      saveMenu(menuItems);
      showNotification(
        "✅ تم تهيئة البيانات محلياً وحفظها في LocalStorage",
        "success",
      );
      renderMenu(menuItems);
      renderAdminList();
      try {
        if (typeof logEvent === "function")
          logEvent("ADMIN_SEED", { method: "local" });
      } catch (e) {}
      return;
    }

    showNotification(
      "⚠️ لا توجد بيانات تهيئة متاحة حالياً. افتح db-seed.js",
      "warning",
    );
  }

  // دالة لمسح جميع الأصناف (LocalStorage وFirebase إن وُجد)
  function clearAllItems() {
    if (
      !confirm(
        "⚠️ هل أنت متأكد من مسح جميع الأصناف؟ هذا الإجراء لا يمكن التراجع عنه.",
      )
    )
      return;

    // مسح القائمة محلياً
    menuItems = [];
    try {
      saveMenu(menuItems);
    } catch (e) {
      console.warn("Failed to clear localStorage menu:", e);
    }

    // محاولة مزامنة الحذف إلى Firebase إذا كانت الدوال متاحة
    if (
      typeof window.firebaseDB !== "undefined" &&
      window.firebaseDB.syncMenuToFirebase
    ) {
      try {
        window.firebaseDB.syncMenuToFirebase();
        showNotification(
          "🗑️ تم مسح جميع الأصناف ومزامنة التغييرات مع Firebase",
          "success",
        );
      } catch (err) {
        console.warn("Firebase sync failed after clear:", err);
        showNotification(
          "🗑️ تم مسح الأصناف محلياً، لكن مزامنة Firebase فشلت",
          "warning",
        );
      }
    } else {
      showNotification("🗑️ تم مسح جميع الأصناف محلياً", "success");
    }

    renderAdminList();
    renderMenu(menuItems);

    // تحديث الإحصائيات
    if (typeof updateAdminStatistics === "function") {
      updateAdminStatistics();
    }
  }

  function sendReview() {
    const text = document.getElementById("reviewText").value.trim();
    if (!text) {
      showNotification("⚠️ الرجاء كتابة تقييمك", "warning");
      return;
    }

    const reviewData = { text, date: new Date().toLocaleDateString("ar-EG") };
    reviews.push(reviewData);
    try {
      localStorage.setItem("myReviews", JSON.stringify(reviews));
      document.getElementById("reviewText").value = "";
      renderReviews();
      showNotification("✅ شكراً لتقييمك! تم حفظه بنجاح", "success");

      // 📊 تسجيل التقييم في Google Sheets
      if (
        typeof GoogleSheetsLogger !== "undefined" &&
        GoogleSheetsLogger.logReview
      ) {
        GoogleSheetsLogger.logReview({
          itemName: "تقييم عام على التطبيق",
          rating: 5,
          comment: text,
          customerName: localStorage.getItem("customerName") || "عميل",
        });
      }
    } catch (e) {
      console.error("Error saving review:", e);
      showNotification("❌ خطأ في حفظ التقييم", "error");
    }
  }

  function renderReviews() {
    const list = document.getElementById("reviewsList");
    if (!list) return;

    list.innerHTML = reviews
      .slice()
      .reverse()
      .map(
        (r) => `
        <div style="background:white; padding:15px; border-radius:12px; margin-bottom:10px; border-right:4px solid var(--primary); box-shadow:var(--shadow);">
            <p style="font-size:15px; margin-bottom:5px;">${r.text}</p>
            <small style="color:#999; font-size:12px;">نُشر في: ${r.date}</small>
        </div>
    `,
      )
      .join("");
  }

  // --- Export selected functions to global scope so inline handlers continue to work ---
  try {
    window.showPage = showPage;
    window.renderMenu = renderMenu;
    window.searchFunction = searchFunction;
    window.filterItems = filterItems;

    window.renderHomeMenu = renderHomeMenu;
    window.searchHomeMenu = searchHomeMenu;
    window.filterHomeMenu = filterHomeMenu;
    window.initializeHomeMenu = initializeHomeMenu;

    window.addToCart = addToCart;
    window.renderCartItems = renderCartItems;
    window.updateCartCount = updateCartCount;
    window.updateCartUI = updateCartUI;
    window.removeFromCart = removeFromCart;
    window.increaseQuantity = increaseQuantity;
    window.decreaseQuantity = decreaseQuantity;

    window.finishOrder = finishOrder;
    window.showNotification = showNotification;

    window.openImageModal = openImageModal;
    window.closeImageModal = closeImageModal;

    window.addNewItemFromAdmin = addNewItemFromAdmin;
    window.renderAdminList = renderAdminList;
    window.deleteItem = deleteItem;
    window.editItemPrice = editItemPrice;
    // expose the real function and provide a safe wrapper so stray calls won't error
    window._realEditItemFull = editItemFull;
    if (typeof window.editItemFull !== "function") {
      window.editItemFull = function (id) {
        if (id == null || isNaN(parseInt(id, 10))) {
          console.warn("editItemFull called with invalid id:", id);
          return;
        }
        try {
          return window._realEditItemFull(parseInt(id, 10));
        } catch (e) {
          console.error("editItemFull error:", e);
        }
      };
    }
    window.updateRestaurantPhone = updateRestaurantPhone;
    window.initializeAdminPanel = initializeAdminPanel;
    window.updateAdminStatistics = updateAdminStatistics;
    window.seedFromAdmin = seedFromAdmin;
    window.clearAllItems = clearAllItems;
    window.getBranchKey = window.getBranchKey;
    window.loadBranchData = loadBranchData;
    window.saveBranchData = saveBranchData;
    window.renderBranchReports = renderBranchReports;
    window.sendReview = sendReview;
    window.renderReviews = renderReviews;
    window.switchAdminTab = switchAdminTab;

    // Order management functions
    window.renderAllOrders = renderAllOrders;
    window.resendRestaurantNotification = resendRestaurantNotification;
    window.resendCustomerNotification = resendCustomerNotification;
    window.updateOrderStatus = updateOrderStatus;
    window.sendRestaurantNotification = sendRestaurantNotification;
    window.sendCustomerNotification = sendCustomerNotification;
    window.generateOrderId = generateOrderId;
    // Fallback: ensure sendRestaurantNotification exists and opens WhatsApp to the restaurant number
    if (typeof sendRestaurantNotification !== "function") {
      function sendRestaurantNotification(message, orderId) {
        try {
          // use configured RESTAURANT_PHONE if available, otherwise default
          let phone =
            typeof RESTAURANT_PHONE !== "undefined" && RESTAURANT_PHONE
              ? String(RESTAURANT_PHONE)
              : "201021279663";
          phone = phone.replace(/[^0-9]/g, ""); // strip + and non-digits
          if (!phone) phone = "201021279663";
          const url =
            "https://wa.me/" +
            phone +
            "?text=" +
            encodeURIComponent(message + "\n\nOrderID: " + (orderId || ""));
          window.open(url, "_blank");
          return true;
        } catch (e) {
          console.error("sendRestaurantNotification fallback error:", e);
          return false;
        }
      }
      window.sendRestaurantNotification = sendRestaurantNotification;
    }

    // Invoice printing functions
    window.printInvoice = printInvoice;
    window.generateInvoiceHTML = generateInvoiceHTML;

    // Customer order history functions
    window.loadCustomerOrders = loadCustomerOrders;
    window.repeatOrderFromHistory = repeatOrderFromHistory;
    window.resendOrderToRestaurant = resendOrderToRestaurant;

    window.switchCustomerTab = switchCustomerTab;
    // Expose admin account for global login helper
    window.ADMIN_ACCOUNT = ADMIN_ACCOUNT;
  } catch (e) {
    console.warn("Failed to export some functions to window:", e);
  }
})();

/* ==================================================
   7. تأثيرات بصرية (تأثير الثلج) وتجهيز الموقع
   ================================================== */
function createSnow() {
  const snowCount = 20;
  for (let i = 0; i < snowCount; i++) {
    const flake = document.createElement("div");
    flake.className = "snowflake";
    flake.innerHTML = "❄";
    flake.style.cssText = `
            position: fixed;
            top: -20px;
            color: white;
            z-index: 9999;
            pointer-events: none;
            left: ${Math.random() * 100}vw;
            animation: fall ${Math.random() * 4 + 4}s linear infinite;
            opacity: ${Math.random()};
            font-size: ${Math.random() * 20 + 10}px;
        `;
    document.body.appendChild(flake);
  }
}

/* ==================================================
   8. نظام تسجيل دخول الإدارة
   ================================================== */
function validateAdminLogin(evt) {
  try {
    if (evt && typeof evt.preventDefault === "function") evt.preventDefault();
  } catch (e) {
    /* ignore */
  }

  console.log("🔐 بدء عملية تسجيل الدخول للإدارة...");

  const usernameInput = document.getElementById("admin-username");
  const passwordInput = document.getElementById("admin-password");
  const errorDiv = document.getElementById("loginError");

  if (!usernameInput || !passwordInput || !errorDiv) {
    console.error("❌ الخطأ: لم يتم العثور على عناصر النموذج");
    alert("❌ خطأ في تحميل النموذج");
    return;
  }

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    errorDiv.textContent = "⚠️ الرجاء ملء جميع الحقول المطلوبة";
    errorDiv.style.display = "block";
    return;
  }

  // أولاً: محاولة المصادقة محلياً (المستخدم الافتراضي داخل التطبيق)
  if (
    username === (window.ADMIN_ACCOUNT && window.ADMIN_ACCOUNT.username) &&
    password === (window.ADMIN_ACCOUNT && window.ADMIN_ACCOUNT.password)
  ) {
    try {
      sessionStorage.setItem("isAdmin", "true");
      sessionStorage.setItem(
        "adminUser",
        JSON.stringify({
          username: window.ADMIN_ACCOUNT.username,
          name: window.ADMIN_ACCOUNT.name,
          email: window.ADMIN_ACCOUNT.email,
        }),
      );
    } catch (e) {
      console.error("❌ خطأ في حفظ بيانات الجلسة:", e);
    }

    errorDiv.style.display = "none";
    usernameInput.value = "";
    passwordInput.value = "";
    showNotification(
      `✨ أهلاً وسهلاً ${window.ADMIN_ACCOUNT.name}! تم تسجيل دخولك بنجاح 🎉`,
      "success",
    );
    try {
      if (typeof logEvent === "function")
        logEvent("ADMIN_LOGIN", {
          username: window.ADMIN_ACCOUNT.username,
          email: window.ADMIN_ACCOUNT.email,
        });
    } catch (e) {}
    try {
      if (typeof logCustomerActivity === "function")
        logCustomerActivity(
          "admin",
          "دخول إدارة",
          `دخول المدير ${window.ADMIN_ACCOUNT.username} إلى لوحة التحكم`,
        );
    } catch (e) {}

    // 📊 تسجيل دخول الإدارة في Google Sheets
    if (
      typeof GoogleSheetsLogger !== "undefined" &&
      GoogleSheetsLogger.logLogin
    ) {
      GoogleSheetsLogger.logLogin(window.ADMIN_ACCOUNT.username);
    }
    setTimeout(() => showPage("admin-page"), 500);
    return;
  }

  // إذا فشل التحقق المحلي وحقل username يبدو كبريد إلكتروني أو Firebase متاح، حاول تسجيل الدخول عبر Firebase
  if (
    window.firebaseDB &&
    typeof window.firebaseDB.firebaseAdminLogin === "function"
  ) {
    // استخدم اسم المستخدم كما هو (قد يكون البريد الإلكتروني في إعدادات Firebase)
    try {
      window.firebaseDB.firebaseAdminLogin(username, password);
      return; // firebaseAdminLogin ستقوم بالتوجيه أو عرض إشعار
    } catch (e) {
      console.warn("⚠️ firebaseAdminLogin فشل:", e);
    }
  }

  // أخيراً: إظهار رسالة خطأ محلية
  errorDiv.textContent = "❌ اسم المستخدم أو كلمة المرور غير صحيحة";
  errorDiv.style.display = "block";
  showNotification("❌ بيانات دخول خاطئة!", "error");
}

/* ==================================================
   9. نظام تسجيل دخول العميل
   ================================================== */

// Initialize customers storage
let customers = JSON.parse(localStorage.getItem("customers")) || [];
let currentCustomer =
  JSON.parse(sessionStorage.getItem("currentCustomer")) || null;

// Initialize with sample customers if none exist (for testing)
if (customers.length === 0) {
  customers = [
    {
      id: 1001,
      name: "محمد أحمد",
      email: "mohd@example.com",
      phone: "201001234567",
      password: "password123",
      createdAt: new Date().toISOString(),
    },
    {
      id: 1002,
      name: "فاطمة علي",
      email: "fatema@example.com",
      phone: "201101234567",
      password: "password123",
      createdAt: new Date().toISOString(),
    },
    {
      id: 1003,
      name: "حسن محمود",
      email: "hassan@example.com",
      phone: "201201234567",
      password: "password123",
      createdAt: new Date().toISOString(),
    },
    {
      id: 1004,
      name: "إبراهيم",
      email: "ibrahim555@example.com",
      phone: "201501234567",
      password: "ibrahim555",
      createdAt: new Date().toISOString(),
    },
  ];
  localStorage.setItem("customers", JSON.stringify(customers));
  console.log("✅ تم إضافة حسابات تجريبية للعملاء");
}

// Initialize sales log (سجل المبيعات)
let salesLog = JSON.parse(localStorage.getItem("salesLog")) || [];

// Initialize customer activities log (سجل أنشطة العملاء)
let customersActivityLog =
  JSON.parse(localStorage.getItem("customersActivityLog")) || [];

// Function to log customer registration
function logCustomerRegistration(customerData) {
  const logEntry = {
    id: Date.now(),
    customerId: customerData.id,
    name: customerData.name,
    email: customerData.email,
    phone: customerData.phone,
    registeredAt: new Date().toISOString(),
    timestamp: new Date().toLocaleString("ar-EG"),
    action: "تسجيل عميل جديد",
  };
  salesLog.push(logEntry);
  localStorage.setItem("salesLog", JSON.stringify(salesLog));
  console.log("📝 تم تسجيل البيان:", logEntry);
}

// Function to log customer activities
function logCustomerActivity(customerId, activityType, description) {
  const activityEntry = {
    id: Date.now(),
    customerId: customerId,
    activityType: activityType,
    description: description,
    timestamp: new Date().toISOString(),
    formattedTime: new Date().toLocaleString("ar-EG"),
    date: new Date().toLocaleDateString("ar-EG"),
  };
  customersActivityLog.push(activityEntry);
  localStorage.setItem(
    "customersActivityLog",
    JSON.stringify(customersActivityLog),
  );
  console.log("✅ تم تسجيل النشاط:", activityEntry);
}

// دالة لعرض سجل المبيعات (سجل تسجيل العملاء)
function renderSalesLog() {
  const container = document.getElementById("salesLogContainer");
  if (!container) return;

  let log = JSON.parse(localStorage.getItem("salesLog")) || [];

  if (log.length === 0) {
    container.innerHTML = `
            <div style="text-align:center; padding:60px 20px;">
                <i class="fa-solid fa-receipt" style="font-size:64px; color:#BDC3C7; margin-bottom:15px;"></i>
                <h3 style="color:#7F8C8D; margin-bottom:10px; font-size:20px;">سجل المبيعات فارغ</h3>
                <p style="color:#BDC3C7;">لم يتم تسجيل أي عملاء حتى الآن</p>
            </div>
        `;
    return;
  }

  // تنظيم العملاء حسب الشهر
  const monthlyData = {};
  log.forEach((entry) => {
    const date = new Date(entry.registeredAt);
    const monthKey = date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
    });
    if (!monthlyData[monthKey]) {
      monthlyData[monthKey] = [];
    }
    monthlyData[monthKey].push(entry);
  });

  // ترتيب الأشهر من الأحدث للأقدم
  const sortedMonths = Object.keys(monthlyData).reverse();

  // الإحصائيات العامة
  const totalCustomers = log.length;
  const monthsCount = sortedMonths.length;
  const avgPerMonth = Math.ceil(totalCustomers / monthsCount);

  const globalStatsHTML = `
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:15px; margin-bottom:30px;">
            <div style="background:linear-gradient(135deg, #667EEA, #764BA2); padding:20px; border-radius:12px; color:white; box-shadow:0 8px 25px rgba(102, 126, 234, 0.2);">
                <p style="font-size:13px; margin:0 0 8px 0; opacity:0.9;">👥 إجمالي العملاء</p>
                <h3 style="font-size:28px; font-weight:900; margin:0;">${totalCustomers}</h3>
            </div>
            <div style="background:linear-gradient(135deg, #F093FB, #F5576C); padding:20px; border-radius:12px; color:white; box-shadow:0 8px 25px rgba(245, 87, 108, 0.2);">
                <p style="font-size:13px; margin:0 0 8px 0; opacity:0.9;">📅 عدد الأشهر</p>
                <h3 style="font-size:28px; font-weight:900; margin:0;">${monthsCount}</h3>
            </div>
            <div style="background:linear-gradient(135deg, #43E97B, #38F9D7); padding:20px; border-radius:12px; color:white; box-shadow:0 8px 25px rgba(67, 233, 123, 0.2);">
                <p style="font-size:13px; margin:0 0 8px 0; opacity:0.9;">📊 المتوسط/شهر</p>
                <h3 style="font-size:28px; font-weight:900; margin:0;">${avgPerMonth}</h3>
            </div>
        </div>
    `;

  // أزرار التصدير
  const exportBtnsHTML = `
        <div style="margin-bottom:25px; display:flex; gap:12px; flex-wrap:wrap;">
            <button onclick="exportMonthlyReport()" style="background:linear-gradient(135deg, #27AE60, #229954); color:white; border:none; padding:12px 24px; border-radius:8px; cursor:pointer; font-weight:700; font-size:14px; transition:all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                📥 تحميل التقرير الشهري
            </button>
            <button onclick="printMonthlyReport()" style="background:linear-gradient(135deg, #8B5CF6, #A78BFA); color:white; border:none; padding:12px 24px; border-radius:8px; cursor:pointer; font-weight:700; font-size:14px; transition:all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                🖨️ طباعة التقرير
            </button>
            <button onclick="clearSalesLog()" style="background:linear-gradient(135deg, #E74C3C, #C0392B); color:white; border:none; padding:12px 24px; border-radius:8px; cursor:pointer; font-weight:700; font-size:14px; transition:all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                🗑️ مسح السجل
            </button>
        </div>
    `;

  // عرض كل شهر وعملاؤه
  const monthlyReportsHTML = sortedMonths
    .map((month, idx) => {
      const entries = monthlyData[month];
      const entriesCount = entries.length;

      const entriesTableHTML = entries
        .map((entry, entryIdx) => {
          const date = new Date(entry.registeredAt);
          const formattedDate = date.toLocaleDateString("ar-EG");
          const formattedTime = date.toLocaleTimeString("ar-EG");

          return `
                <tr style="border-bottom: 1px solid #e0e0e0;">
                    <td style="padding:12px; text-align:center; color:#333;">${entryIdx + 1}</td>
                    <td style="padding:12px; color:#333;"><strong>${entry.name}</strong></td>
                    <td style="padding:12px; color:#666; font-size:13px;">${entry.email}</td>
                    <td style="padding:12px; color:#666; font-size:13px;">${entry.phone}</td>
                    <td style="padding:12px; color:#666; font-size:12px;">${formattedDate}</td>
                    <td style="padding:12px; color:#666; font-size:12px;">${formattedTime}</td>
                </tr>
            `;
        })
        .join("");

      return `
            <div style="background:white; border-radius:14px; padding:25px; margin-bottom:25px; box-shadow:0 4px 15px rgba(0,0,0,0.08); border-top:5px solid #FF6B35;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:15px;">
                    <div>
                        <h3 style="margin:0; color:#2C3E50; font-size:20px; font-weight:900;">📆 ${month}</h3>
                        <p style="margin:5px 0 0 0; color:#7F8C8D; font-size:14px;">إجمالي العملاء: <strong style="color:#FF6B35;">${entriesCount}</strong></p>
                    </div>
                    <div style="background:linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 142, 95, 0.1)); padding:12px 20px; border-radius:8px; border-right:3px solid #FF6B35;">
                        <p style="margin:0; color:#FF6B35; font-size:13px; font-weight:700;">👥 عدد المسجلين</p>
                        <p style="margin:5px 0 0 0; color:#FF6B35; font-size:20px; font-weight:900;">${entriesCount}</p>
                    </div>
                </div>
                
                <div style="overflow-x:auto; border:1px solid #e0e0e0; border-radius:8px;">
                    <table style="width:100%; border-collapse:collapse;">
                        <thead>
                            <tr style="background:linear-gradient(135deg, #FF6B35, #FF8E5F); color:white;">
                                <th style="padding:12px; text-align:center; font-weight:700;">#</th>
                                <th style="padding:12px; font-weight:700;">الاسم</th>
                                <th style="padding:12px; font-weight:700;">البريد الإلكتروني</th>
                                <th style="padding:12px; font-weight:700;">الهاتف</th>
                                <th style="padding:12px; font-weight:700;">التاريخ</th>
                                <th style="padding:12px; font-weight:700;">الوقت</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${entriesTableHTML}
                        </tbody>
                    </table>
                </div>
                
                <div style="margin-top:15px; padding-top:15px; border-top:1px solid #e0e0e0; display:flex; gap:10px; flex-wrap:wrap;">
                    <button onclick="exportMonthData('${month}')" style="background:linear-gradient(135deg, #27AE60, #229954); color:white; border:none; padding:10px 18px; border-radius:6px; cursor:pointer; font-weight:600; font-size:12px; transition:all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                        📥 تحميل هذا الشهر
                    </button>
                    <button onclick="printMonthData('${month}')" style="background:linear-gradient(135deg, #8B5CF6, #A78BFA); color:white; border:none; padding:10px 18px; border-radius:6px; cursor:pointer; font-weight:600; font-size:12px; transition:all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                        🖨️ طباعة
                    </button>
                </div>
            </div>
        `;
    })
    .join("");

  container.innerHTML = globalStatsHTML + exportBtnsHTML + monthlyReportsHTML;
}

// دالة لتصدير التقرير الشهري الكامل
function exportMonthlyReport() {
  let log = JSON.parse(localStorage.getItem("salesLog")) || [];

  if (log.length === 0) {
    showNotification("⚠️ سجل المبيعات فارغ", "warning");
    return;
  }

  // إنشاء رؤوس الأعمدة
  let csv = "الشهر,الرقم,الاسم,البريد الإلكتروني,الهاتف,التاريخ,الوقت\n";

  // تنظيم حسب الشهر
  const monthlyData = {};
  log.forEach((entry) => {
    const date = new Date(entry.registeredAt);
    const monthKey = date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
    });
    if (!monthlyData[monthKey]) {
      monthlyData[monthKey] = [];
    }
    monthlyData[monthKey].push(entry);
  });

  // إضافة البيانات
  Object.keys(monthlyData)
    .reverse()
    .forEach((month) => {
      monthlyData[month].forEach((entry, idx) => {
        const date = new Date(entry.registeredAt);
        const formattedDate = date.toLocaleDateString("ar-EG");
        const formattedTime = date.toLocaleTimeString("ar-EG");
        csv += `"${month}",${idx + 1},"${entry.name}","${entry.email}","${entry.phone}","${formattedDate}","${formattedTime}"\n`;
      });
    });

  // Simple control API: update stored restaurant phone (used by admin panel)
  function updatePhone(newNumber) {
    try {
      const val = String(newNumber || "").trim();
      localStorage.setItem("restaurant_phone", val);
      // update in-memory variable for immediate effect
      RESTAURANT_PHONE = val || RESTAURANT_PHONE;
      // update any visible contact link
      try {
        const waBtn = document.getElementById("contactWaButton");
        if (waBtn) {
          const waPhone =
            (window.BRANCH_DATA && window.BRANCH_DATA.phone) ||
            localStorage.getItem("restaurant_phone") ||
            RESTAURANT_PHONE;
          waBtn.href = `https://wa.me/${waPhone}`;
        }
      } catch (e) {}
      console.log("✅ restaurant phone updated:", RESTAURANT_PHONE);
      return true;
    } catch (err) {
      console.error("Failed to update restaurant phone:", err);
      return false;
    }
  }

  window.updatePhone = updatePhone;

  // إنشاء ملف وتحميله
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `تقرير_المبيعات_الشهري_${new Date().toLocaleDateString("ar-EG")}.csv`;
  link.click();

  showNotification("✅ تم تحميل التقرير الشهري بنجاح", "success");
}

// دالة لتصدير بيانات شهر محدد
function exportMonthData(month) {
  let log = JSON.parse(localStorage.getItem("salesLog")) || [];
  const monthlyData = {};

  log.forEach((entry) => {
    const date = new Date(entry.registeredAt);
    const monthKey = date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
    });
    if (!monthlyData[monthKey]) {
      monthlyData[monthKey] = [];
    }
    monthlyData[monthKey].push(entry);
  });

  const entries = monthlyData[month] || [];
  if (entries.length === 0) {
    showNotification("⚠️ لا توجد بيانات لهذا الشهر", "warning");
    return;
  }

  let csv = "الرقم,الاسم,البريد الإلكتروني,الهاتف,التاريخ,الوقت\n";

  entries.forEach((entry, idx) => {
    const date = new Date(entry.registeredAt);
    const formattedDate = date.toLocaleDateString("ar-EG");
    const formattedTime = date.toLocaleTimeString("ar-EG");
    csv += `${idx + 1},"${entry.name}","${entry.email}","${entry.phone}","${formattedDate}","${formattedTime}"\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `شهر_${month}.csv`;
  link.click();

  showNotification("✅ تم تحميل بيانات الشهر بنجاح", "success");
}

// دالة لطباعة بيانات شهر محدد
function printMonthData(month) {
  let log = JSON.parse(localStorage.getItem("salesLog")) || [];
  const monthlyData = {};

  log.forEach((entry) => {
    const date = new Date(entry.registeredAt);
    const monthKey = date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
    });
    if (!monthlyData[monthKey]) {
      monthlyData[monthKey] = [];
    }
    monthlyData[monthKey].push(entry);
  });

  const entries = monthlyData[month] || [];
  if (entries.length === 0) {
    showNotification("⚠️ لا توجد بيانات لهذا الشهر", "warning");
    return;
  }

  const printWindow = window.open("", "", "height=600,width=900");
  let htmlContent = `
        <html dir="rtl" style="font-family: Arial, sans-serif;">
        <head>
            <title>سجل المبيعات - ${month}</title>
            <style>
                body { padding: 20px; background: white; }
                h1 { text-align: center; color: #FF6B35; margin-bottom: 10px; }
                .info { text-align: center; color: #666; margin-bottom: 20px; font-size: 14px; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th { background: #FF6B35; color: white; padding: 12px; text-align: right; border: 1px solid #ddd; font-weight: bold; }
                td { padding: 10px 12px; text-align: right; border: 1px solid #ddd; font-size: 13px; }
                tr:nth-child(even) { background: #f9f9f9; }
                .total-row { font-weight: bold; background: #FFE8DB; }
            </style>
        </head>
        <body>
            <h1>سجل المبيعات - ${month}</h1>
            <div class="info">
                <p>تاريخ الطباعة: ${new Date().toLocaleDateString("ar-EG")}</p>
                <p>إجمالي العملاء: ${entries.length}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>الاسم</th>
                        <th>البريد الإلكتروني</th>
                        <th>الهاتف</th>
                        <th>التاريخ</th>
                        <th>الوقت</th>
                    </tr>
                </thead>
                <tbody>
    `;

  entries.forEach((entry, idx) => {
    const date = new Date(entry.registeredAt);
    const formattedDate = date.toLocaleDateString("ar-EG");
    const formattedTime = date.toLocaleTimeString("ar-EG");
    htmlContent += `
            <tr>
                <td>${idx + 1}</td>
                <td><strong>${entry.name}</strong></td>
                <td>${entry.email}</td>
                <td>${entry.phone}</td>
                <td>${formattedDate}</td>
                <td>${formattedTime}</td>
            </tr>
        `;
  });

  htmlContent += `
                </tbody>
                <tfoot>
                    <tr class="total-row">
                        <td colspan="6" style="text-align:center;">إجمالي العملاء المسجلين: ${entries.length}</td>
                    </tr>
                </tfoot>
            </table>
        </body>
        </html>
    `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
  setTimeout(() => printWindow.print(), 250);
}

// دالة لطباعة التقرير الشهري الكامل
function printMonthlyReport() {
  let log = JSON.parse(localStorage.getItem("salesLog")) || [];

  if (log.length === 0) {
    showNotification("⚠️ سجل المبيعات فارغ", "warning");
    return;
  }

  const monthlyData = {};
  log.forEach((entry) => {
    const date = new Date(entry.registeredAt);
    const monthKey = date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
    });
    if (!monthlyData[monthKey]) {
      monthlyData[monthKey] = [];
    }
    monthlyData[monthKey].push(entry);
  });

  const printWindow = window.open("", "", "height=600,width=900");
  let htmlContent = `
        <html dir="rtl" style="font-family: Arial, sans-serif;">
        <head>
            <title>تقرير المبيعات الشهري</title>
            <style>
                body { padding: 20px; background: white; }
                h1 { text-align: center; color: #FF6B35; margin-bottom: 10px; }
                h2 { color: #FF6B35; border-bottom: 2px solid #FF6B35; padding-bottom: 10px; margin-top: 30px; }
                .info { text-align: center; color: #666; margin-bottom: 20px; font-size: 14px; }
                .month-summary { background: #FFE8DB; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
                table { width: 100%; border-collapse: collapse; margin-top: 15px; }
                th { background: #FF6B35; color: white; padding: 10px; text-align: right; border: 1px solid #ddd; font-weight: bold; font-size: 12px; }
                td { padding: 8px; text-align: right; border: 1px solid #ddd; font-size: 12px; }
                tr:nth-child(even) { background: #f9f9f9; }
                .page-break { page-break-after: always; }
            </style>
        </head>
        <body>
            <h1>تقرير المبيعات الشهري الشامل</h1>
            <div class="info">
                <p>تاريخ الطباعة: ${new Date().toLocaleDateString("ar-EG")}</p>
                <p>إجمالي العملاء المسجلين: ${log.length}</p>
            </div>
    `;

  Object.keys(monthlyData)
    .reverse()
    .forEach((month, idx) => {
      const entries = monthlyData[month];
      htmlContent += `
            <div${idx > 0 ? ' class="page-break"' : ""}>
                <h2>${month}</h2>
                <div class="month-summary">
                    <strong>عدد العملاء المسجلين:</strong> ${entries.length}
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>الاسم</th>
                            <th>البريد الإلكتروني</th>
                            <th>الهاتف</th>
                            <th>التاريخ</th>
                            <th>الوقت</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

      entries.forEach((entry, entryIdx) => {
        const date = new Date(entry.registeredAt);
        const formattedDate = date.toLocaleDateString("ar-EG");
        const formattedTime = date.toLocaleTimeString("ar-EG");
        htmlContent += `
                <tr>
                    <td>${entryIdx + 1}</td>
                    <td><strong>${entry.name}</strong></td>
                    <td>${entry.email}</td>
                    <td>${entry.phone}</td>
                    <td>${formattedDate}</td>
                    <td>${formattedTime}</td>
                </tr>
            `;
      });

      htmlContent += `
                    </tbody>
                </table>
            </div>
        `;
    });

  htmlContent += `
        </body>
        </html>
    `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
  setTimeout(() => printWindow.print(), 250);
}

// دالة لتصدير سجل المبيعات إلى Excel

// دالة لحذف سجل المبيعات
function clearSalesLog() {
  if (
    confirm(
      "⚠️ هل أنت متأكد من حذف سجل المبيعات بالكامل؟ لا يمكن التراجع عن هذا الإجراء",
    )
  ) {
    localStorage.removeItem("salesLog");
    salesLog = [];
    renderSalesLog();
    showNotification("✅ تم حذف السجل بنجاح", "success");
  }
}

// دالة للتبديل بين تبويبات لوحة الإدارة
function switchAdminTab(tabName) {
  const itemsContent = document.getElementById("adminTabItemsContent");
  const ordersContent = document.getElementById("adminTabOrdersContent");
  const salesContent = document.getElementById("adminTabSalesContent");
  const customersContent = document.getElementById("adminTabCustomersContent");
  const activitiesContent = document.getElementById(
    "adminTabActivitiesContent",
  );
  const itemsTab = document.getElementById("adminTabItems");
  const ordersTab = document.getElementById("adminTabOrders");
  const salesTab = document.getElementById("adminTabSales");
  const customersTab = document.getElementById("adminTabCustomers");
  const activitiesTab = document.getElementById("adminTabActivities");

  // إخفاء جميع التبويبات
  if (itemsContent) itemsContent.style.display = "none";
  if (ordersContent) ordersContent.style.display = "none";
  if (salesContent) salesContent.style.display = "none";
  if (customersContent) customersContent.style.display = "none";
  if (activitiesContent) activitiesContent.style.display = "none";

  // إرجاع جميع الأزرار إلى الحالة الطبيعية
  [itemsTab, ordersTab, salesTab, customersTab, activitiesTab].forEach(
    (tab) => {
      if (tab) {
        tab.style.background = "#E0E0E0";
        tab.style.color = "#333";
        tab.style.boxShadow = "none";
      }
    },
  );

  if (tabName === "items") {
    // عرض تبويب الأصناف
    if (itemsContent) itemsContent.style.display = "block";
    if (itemsTab) {
      itemsTab.style.background = "linear-gradient(135deg, #FF6B35, #FF8E5F)";
      itemsTab.style.color = "white";
      itemsTab.style.boxShadow = "0 2px 8px rgba(255,107,53,0.2)";
    }
  } else if (tabName === "orders") {
    // عرض تبويب الطلبات
    if (ordersContent) ordersContent.style.display = "block";
    if (ordersTab) {
      ordersTab.style.background = "linear-gradient(135deg, #3498DB, #5DADE2)";
      ordersTab.style.color = "white";
      ordersTab.style.boxShadow = "0 2px 8px rgba(52,152,219,0.2)";
    }
    // تحميل الطلبات عند الانتقال للتبويب
    renderAllOrders();
  } else if (tabName === "sales") {
    // عرض تبويب سجل المبيعات
    if (salesContent) salesContent.style.display = "block";
    if (salesTab) {
      salesTab.style.background = "linear-gradient(135deg, #27AE60, #229954)";
      salesTab.style.color = "white";
      salesTab.style.boxShadow = "0 2px 8px rgba(39,174,96,0.2)";
    }
    // تحميل سجل المبيعات عند الانتقال للتبويب
    renderSalesLog();
  } else if (tabName === "customers") {
    // عرض تبويب إدارة العملاء
    if (customersContent) customersContent.style.display = "block";
    if (customersTab) {
      customersTab.style.background =
        "linear-gradient(135deg, #9B59B6, #8E44AD)";
      customersTab.style.color = "white";
      customersTab.style.boxShadow = "0 2px 8px rgba(155,89,182,0.2)";
    }
    // تحميل قائمة العملاء عند الانتقال للتبويب
    renderCustomersManagement();
  } else if (tabName === "activities") {
    // عرض تبويب سجل الأنشطة
    if (activitiesContent) activitiesContent.style.display = "block";
    if (activitiesTab) {
      activitiesTab.style.background =
        "linear-gradient(135deg, #E74C3C, #C0392B)";
      activitiesTab.style.color = "white";
      activitiesTab.style.boxShadow = "0 2px 8px rgba(231,76,60,0.2)";
    }
    // تحميل سجل الأنشطة عند الانتقال للتبويب
    renderCustomersActivityLog();
  }
}

// دالة لعرض إدارة العملاء
function renderCustomersManagement() {
  const container = document.getElementById("adminCustomersContainer");
  if (!container) return;

  let customers = JSON.parse(localStorage.getItem("customers")) || [];

  if (customers.length === 0) {
    container.innerHTML = `
            <div style="text-align:center; padding:60px 20px;">
                <i class="fa-solid fa-users" style="font-size:64px; color:#BDC3C7; margin-bottom:15px;"></i>
                <h3 style="color:#7F8C8D; margin-bottom:10px; font-size:20px;">لا توجد عملاء مسجلين</h3>
                <p style="color:#BDC3C7;">سيظهر العملاء هنا عند تسجيلهم</p>
            </div>
        `;
    return;
  }

  // الإحصائيات
  const totalCustomers = customers.length;
  const todayCount = customers.filter((c) => {
    const regDate = new Date(c.createdAt).toLocaleDateString("ar-EG");
    const today = new Date().toLocaleDateString("ar-EG");
    return regDate === today;
  }).length;

  const statsHTML = `
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:15px; margin-bottom:30px;">
            <div style="background:linear-gradient(135deg, #9B59B6, #8E44AD); padding:20px; border-radius:12px; color:white; box-shadow:0 8px 25px rgba(155, 89, 182, 0.2);">
                <p style="font-size:13px; margin:0 0 8px 0; opacity:0.9;">👥 إجمالي العملاء</p>
                <h3 style="font-size:28px; font-weight:900; margin:0;">${totalCustomers}</h3>
            </div>
            <div style="background:linear-gradient(135deg, #E74C3C, #C0392B); padding:20px; border-radius:12px; color:white; box-shadow:0 8px 25px rgba(231, 76, 60, 0.2);">
                <p style="font-size:13px; margin:0 0 8px 0; opacity:0.9;">📆 المسجلين اليوم</p>
                <h3 style="font-size:28px; font-weight:900; margin:0;">${todayCount}</h3>
            </div>
            <div style="background:linear-gradient(135deg, #3498DB, #2980B9); padding:20px; border-radius:12px; color:white; box-shadow:0 8px 25px rgba(52, 152, 219, 0.2);">
                <p style="font-size:13px; margin:0 0 8px 0; opacity:0.9;">📊 نسبة النشاط</p>
                <h3 style="font-size:28px; font-weight:900; margin:0;">${Math.round((todayCount / totalCustomers) * 100)}%</h3>
            </div>
        </div>
    `;

  // شريط البحث
  const searchHTML = `
        <div style="margin-bottom:25px;">
            <input type="text" id="customerSearch" placeholder="🔍 ابحث عن عميل بالاسم أو البريد..." 
                   style="width:100%; padding:14px 16px; border:2px solid #E0E0E0; border-radius:10px; font-size:14px; box-sizing:border-box;" 
                   oninput="filterCustomersTable()">
        </div>
    `;

  // الجدول
  const tableHTML = `
        <div style="background:white; border-radius:14px; padding:25px; box-shadow:0 4px 15px rgba(0,0,0,0.08); overflow-x:auto;">
            <table id="customersTable" style="width:100%; border-collapse:collapse;">
                <thead>
                    <tr style="background:linear-gradient(135deg, #9B59B6, #8E44AD); color:white;">
                        <th style="padding:14px; text-align:center; font-weight:700;">#</th>
                        <th style="padding:14px; text-align:right; font-weight:700;">الاسم</th>
                        <th style="padding:14px; text-align:right; font-weight:700;">البريد الإلكتروني</th>
                        <th style="padding:14px; text-align:right; font-weight:700;">الهاتف</th>
                        <th style="padding:14px; text-align:center; font-weight:700;">التاريخ</th>
                        <th style="padding:14px; text-align:center; font-weight:700;">الإجراءات</th>
                    </tr>
                </thead>
                <tbody id="customersTableBody">
                    ${customers
                      .map((c, idx) => {
                        const regDate = new Date(
                          c.createdAt,
                        ).toLocaleDateString("ar-EG");
                        return `
                            <tr style="border-bottom:1px solid #e0e0e0; transition:all 0.3s;" onmouseover="this.style.background='#F8F9FA'" onmouseout="this.style.background=''">
                                <td style="padding:14px; text-align:center; color:#333;"><strong>${idx + 1}</strong></td>
                                <td style="padding:14px; text-align:right; color:#2C3E50;"><strong>👤 ${c.name}</strong></td>
                                <td style="padding:14px; text-align:right; color:#666; font-size:13px;">${c.email}</td>
                                <td style="padding:14px; text-align:right; color:#666; font-size:13px;">📱 ${c.phone}</td>
                                <td style="padding:14px; text-align:center; color:#666; font-size:12px;">📅 ${regDate}</td>
                                <td style="padding:14px; text-align:center;">
                                    <button onclick="deleteCustomer(${c.id})" style="background:linear-gradient(135deg, #E74C3C, #C0392B); color:white; border:none; padding:8px 14px; border-radius:6px; cursor:pointer; font-size:12px; font-weight:600; transition:all 0.3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                                        🗑️ حذف
                                    </button>
                                </td>
                            </tr>
                        `;
                      })
                      .join("")}
                </tbody>
            </table>
        </div>
    `;

  // أزرار التصدير
  const exportHTML = `
        <div style="margin-top:25px; display:flex; gap:12px; flex-wrap:wrap;">
            <button onclick="exportCustomersToCSV()" style="background:linear-gradient(135deg, #27AE60, #229954); color:white; border:none; padding:12px 24px; border-radius:8px; cursor:pointer; font-weight:700; font-size:14px; transition:all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                📥 تحميل قائمة العملاء
            </button>
            <button onclick="printCustomersList()" style="background:linear-gradient(135deg, #8B5CF6, #A78BFA); color:white; border:none; padding:12px 24px; border-radius:8px; cursor:pointer; font-weight:700; font-size:14px; transition:all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                🖨️ طباعة قائمة العملاء
            </button>
        </div>
    `;

  container.innerHTML = statsHTML + searchHTML + tableHTML + exportHTML;
}

// دالة للبحث في جدول العملاء
function filterCustomersTable() {
  const searchInput = document.getElementById("customerSearch");
  const tableBody = document.getElementById("customersTableBody");
  const rows = tableBody.querySelectorAll("tr");
  const searchText = searchInput.value.toLowerCase();

  rows.forEach((row) => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(searchText) ? "" : "none";
  });
}

// دالة لحذف عميل
function deleteCustomer(customerId) {
  if (confirm("⚠️ هل أنت متأكد من حذف هذا العميل؟")) {
    let customers = JSON.parse(localStorage.getItem("customers")) || [];
    customers = customers.filter((c) => c.id !== customerId);
    localStorage.setItem("customers", JSON.stringify(customers));
    showNotification("✅ تم حذف العميل بنجاح", "success");
    renderCustomersManagement();
    updateAdminStatistics();
  }
}

// دالة لتصدير قائمة العملاء
function exportCustomersToCSV() {
  let customers = JSON.parse(localStorage.getItem("customers")) || [];

  if (customers.length === 0) {
    showNotification("⚠️ لا توجد عملاء للتصدير", "warning");
    return;
  }

  let csv = "الرقم,الاسم,البريد الإلكتروني,الهاتف,تاريخ التسجيل\n";

  customers.forEach((c, idx) => {
    const regDate = new Date(c.createdAt).toLocaleDateString("ar-EG");
    csv += `${idx + 1},"${c.name}","${c.email}","${c.phone}","${regDate}"\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `قائمة_العملاء_${new Date().toLocaleDateString("ar-EG")}.csv`;
  link.click();

  showNotification("✅ تم تحميل قائمة العملاء بنجاح", "success");
}

// دالة لطباعة قائمة العملاء
function printCustomersList() {
  let customers = JSON.parse(localStorage.getItem("customers")) || [];

  if (customers.length === 0) {
    showNotification("⚠️ لا توجد عملاء للطباعة", "warning");
    return;
  }

  const printWindow = window.open("", "", "height=600,width=900");
  let htmlContent = `
        <html dir="rtl" style="font-family: Arial, sans-serif;">
        <head>
            <title>قائمة العملاء</title>
            <style>
                body { padding: 20px; background: white; }
                h1 { text-align: center; color: #9B59B6; margin-bottom: 10px; }
                .info { text-align: center; color: #666; margin-bottom: 20px; font-size: 14px; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th { background: linear-gradient(135deg, #9B59B6, #8E44AD); color: white; padding: 12px; text-align: right; border: 1px solid #ddd; font-weight: bold; }
                td { padding: 10px 12px; text-align: right; border: 1px solid #ddd; font-size: 13px; }
                tr:nth-child(even) { background: #f9f9f9; }
                .total-row { font-weight: bold; background: #E8D5F2; text-align: center; }
            </style>
        </head>
        <body>
            <h1>📋 قائمة العملاء المسجلين</h1>
            <div class="info">
                <p>تاريخ الطباعة: ${new Date().toLocaleDateString("ar-EG")}</p>
                <p>إجمالي العملاء: ${customers.length}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>الاسم</th>
                        <th>البريد الإلكتروني</th>
                        <th>الهاتف</th>
                        <th>تاريخ التسجيل</th>
                    </tr>
                </thead>
                <tbody>
                    ${customers
                      .map((c, idx) => {
                        const regDate = new Date(
                          c.createdAt,
                        ).toLocaleDateString("ar-EG");
                        return `
                            <tr>
                                <td>${idx + 1}</td>
                                <td><strong>${c.name}</strong></td>
                                <td>${c.email}</td>
                                <td>${c.phone}</td>
                                <td>${regDate}</td>
                            </tr>
                        `;
                      })
                      .join("")}
                </tbody>
                <tfoot>
                    <tr class="total-row">
                        <td colspan="5">إجمالي العملاء المسجلين: ${customers.length}</td>
                    </tr>
                </tfoot>
            </table>
        </body>
        </html>
    `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
  setTimeout(() => printWindow.print(), 250);
}

// دالة عرض سجل أنشطة العملاء الشامل
function renderCustomersActivityLog() {
  const container = document.getElementById("adminActivitiesContainer");
  if (!container) return;

  let customersActivityLog =
    JSON.parse(localStorage.getItem("customersActivityLog")) || [];
  let customers = JSON.parse(localStorage.getItem("customers")) || [];

  if (customersActivityLog.length === 0) {
    container.innerHTML = `
            <div style="text-align:center; padding:60px 20px;">
                <i class="fa-solid fa-chart-line" style="font-size:64px; color:#BDC3C7; margin-bottom:15px;"></i>
                <h3 style="color:#7F8C8D; margin-bottom:10px; font-size:20px;">لا توجد أنشطة مسجلة</h3>
                <p style="color:#BDC3C7;">ستظهر أنشطة العملاء هنا (تسجيل دخول، تسجيل، وخروج)</p>
            </div>
        `;
    return;
  }

  // الإحصائيات
  const todayActivities = customersActivityLog.filter((a) => {
    const actDate = new Date(a.timestamp).toLocaleDateString("ar-EG");
    const today = new Date().toLocaleDateString("ar-EG");
    return actDate === today;
  }).length;

  const registrations = customersActivityLog.filter(
    (a) => a.activityType === "تسجيل جديد",
  ).length;
  const logins = customersActivityLog.filter(
    (a) => a.activityType === "دخول",
  ).length;
  const logouts = customersActivityLog.filter(
    (a) => a.activityType === "خروج",
  ).length;

  const statsHTML = `
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:15px; margin-bottom:30px;">
            <div style="background:linear-gradient(135deg, #E74C3C, #C0392B); padding:20px; border-radius:12px; color:white; box-shadow:0 8px 25px rgba(231, 76, 60, 0.2);">
                <p style="font-size:13px; margin:0 0 8px 0; opacity:0.9;">📊 الأنشطة اليومية</p>
                <h3 style="font-size:28px; font-weight:900; margin:0;">${todayActivities}</h3>
            </div>
            <div style="background:linear-gradient(135deg, #27AE60, #229954); padding:20px; border-radius:12px; color:white; box-shadow:0 8px 25px rgba(39, 174, 96, 0.2);">
                <p style="font-size:13px; margin:0 0 8px 0; opacity:0.9;">✨ تسجيلات جديدة</p>
                <h3 style="font-size:28px; font-weight:900; margin:0;">${registrations}</h3>
            </div>
            <div style="background:linear-gradient(135deg, #3498DB, #2980B9); padding:20px; border-radius:12px; color:white; box-shadow:0 8px 25px rgba(52, 152, 219, 0.2);">
                <p style="font-size:13px; margin:0 0 8px 0; opacity:0.9;">🔓 تسجيلات الدخول</p>
                <h3 style="font-size:28px; font-weight:900; margin:0;">${logins}</h3>
            </div>
            <div style="background:linear-gradient(135deg, #F39C12, #E67E22); padding:20px; border-radius:12px; color:white; box-shadow:0 8px 25px rgba(243, 156, 18, 0.2);">
                <p style="font-size:13px; margin:0 0 8px 0; opacity:0.9;">🚪 تسجيلات الخروج</p>
                <h3 style="font-size:28px; font-weight:900; margin:0;">${logouts}</h3>
            </div>
        </div>
    `;

  // شريط البحث والفلترة
  const filtersHTML = `
        <div style="background:white; border-radius:14px; padding:20px; margin-bottom:25px; box-shadow:0 4px 15px rgba(0,0,0,0.08);">
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px;">
                <div>
                    <label style="display:block; margin-bottom:8px; font-weight:600; color:#2C3E50;">🔍 البحث عن عميل</label>
                    <input type="text" id="activityCustomerSearch" placeholder="ابحث بالاسم أو البريد..." 
                           style="width:100%; padding:12px 14px; border:2px solid #E0E0E0; border-radius:8px; font-size:13px; box-sizing:border-box;" 
                           oninput="filterActivityLog()">
                </div>
                <div>
                    <label style="display:block; margin-bottom:8px; font-weight:600; color:#2C3E50;">📋 نوع النشاط</label>
                    <select id="activityTypeFilter" style="width:100%; padding:12px 14px; border:2px solid #E0E0E0; border-radius:8px; font-size:13px; box-sizing:border-box;" onchange="filterActivityLog()">
                        <option value="">كل الأنشطة</option>
                        <option value="تسجيل جديد">✨ تسجيل جديد</option>
                        <option value="دخول">🔓 تسجيل الدخول</option>
                        <option value="خروج">🚪 تسجيل الخروج</option>
                    </select>
                </div>
                <div>
                    <label style="display:block; margin-bottom:8px; font-weight:600; color:#2C3E50;">📅 التاريخ</label>
                    <input type="date" id="activityDateFilter" 
                           style="width:100%; padding:12px 14px; border:2px solid #E0E0E0; border-radius:8px; font-size:13px; box-sizing:border-box;" 
                           oninput="filterActivityLog()">
                </div>
            </div>
        </div>
    `;

  // الجدول
  const tableHTML = `
        <div style="background:white; border-radius:14px; padding:25px; box-shadow:0 4px 15px rgba(0,0,0,0.08); overflow-x:auto;">
            <table id="activityTable" style="width:100%; border-collapse:collapse;">
                <thead>
                    <tr style="background:linear-gradient(135deg, #9B59B6, #8E44AD); color:white;">
                        <th style="padding:14px; text-align:center; font-weight:700;">#</th>
                        <th style="padding:14px; text-align:right; font-weight:700;">اسم العميل</th>
                        <th style="padding:14px; text-align:right; font-weight:700;">البريد الإلكتروني</th>
                        <th style="padding:14px; text-align:center; font-weight:700;">نوع النشاط</th>
                        <th style="padding:14px; text-align:center; font-weight:700;">الوقت</th>
                        <th style="padding:14px; text-align:right; font-weight:700;">التفاصيل</th>
                    </tr>
                </thead>
                <tbody id="activityTableBody">
                    ${customersActivityLog
                      .slice()
                      .reverse()
                      .map((activity, idx) => {
                        const customer = customers.find(
                          (c) => c.id === activity.customerId,
                        );
                        const activityTypeEmoji =
                          activity.activityType === "تسجيل جديد"
                            ? "✨"
                            : activity.activityType === "دخول"
                              ? "🔓"
                              : activity.activityType === "خروج"
                                ? "🚪"
                                : "📋";

                        const activityTypeColor =
                          activity.activityType === "تسجيل جديد"
                            ? "#27AE60"
                            : activity.activityType === "دخول"
                              ? "#3498DB"
                              : activity.activityType === "خروج"
                                ? "#F39C12"
                                : "#9B59B6";

                        return `
                            <tr style="border-bottom:1px solid #e0e0e0; transition:all 0.3s;" onmouseover="this.style.background='#F8F9FA'" onmouseout="this.style.background=''">
                                <td style="padding:14px; text-align:center; color:#333;"><strong>${idx + 1}</strong></td>
                                <td style="padding:14px; text-align:right; color:#2C3E50;"><strong>👤 ${customer ? customer.name : "عميل محذوف"}</strong></td>
                                <td style="padding:14px; text-align:right; color:#666; font-size:13px;">${customer ? customer.email : "N/A"}</td>
                                <td style="padding:14px; text-align:center; color:white; background:${activityTypeColor}; border-radius:6px; font-weight:600;">${activityTypeEmoji} ${activity.activityType}</td>
                                <td style="padding:14px; text-align:center; color:#666; font-size:12px;">⏰ ${activity.formattedTime}</td>
                                <td style="padding:14px; text-align:right; color:#666; font-size:12px; font-style:italic;">${activity.description}</td>
                            </tr>
                        `;
                      })
                      .join("")}
                </tbody>
            </table>
        </div>
    `;

  // أزرار التصدير والطباعة
  const exportHTML = `
        <div style="margin-top:25px; display:flex; gap:12px; flex-wrap:wrap;">
            <button onclick="exportActivityLogToCSV()" style="background:linear-gradient(135deg, #27AE60, #229954); color:white; border:none; padding:12px 24px; border-radius:8px; cursor:pointer; font-weight:700; font-size:14px; transition:all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                📥 تحميل السجل
            </button>
            <button onclick="printActivityLogReport()" style="background:linear-gradient(135deg, #8B5CF6, #A78BFA); color:white; border:none; padding:12px 24px; border-radius:8px; cursor:pointer; font-weight:700; font-size:14px; transition:all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                🖨️ طباعة السجل
            </button>
        </div>
    `;

  container.innerHTML = statsHTML + filtersHTML + tableHTML + exportHTML;
}

// دالة لفلترة سجل الأنشطة
function filterActivityLog() {
  const searchInput = document.getElementById("activityCustomerSearch");
  const typeFilter = document.getElementById("activityTypeFilter");
  const dateFilter = document.getElementById("activityDateFilter");
  const tableBody = document.getElementById("activityTableBody");

  if (!tableBody) return;

  const rows = tableBody.querySelectorAll("tr");
  const searchText = searchInput.value.toLowerCase();
  const selectedType = typeFilter.value;
  const selectedDate = dateFilter.value;

  rows.forEach((row) => {
    let show = true;

    // فلترة البحث
    if (searchText) {
      const customerName = row.cells[1].textContent.toLowerCase();
      const email = row.cells[2].textContent.toLowerCase();
      show =
        show &&
        (customerName.includes(searchText) || email.includes(searchText));
    }

    // فلترة النوع
    if (selectedType && show) {
      const activityType = row.cells[3].textContent;
      show = show && activityType.includes(selectedType);
    }

    // فلترة التاريخ
    if (selectedDate && show) {
      const rowDate = row.cells[4].textContent;
      const selectedDateObj = new Date(selectedDate).toLocaleDateString(
        "ar-EG",
      );
      // استخلاص التاريخ من الوقت المعروض
      show =
        show &&
        rowDate.includes(new Date(selectedDate).toLocaleDateString("ar-EG"));
    }

    row.style.display = show ? "" : "none";
  });
}

// دالة تصدير سجل الأنشطة إلى CSV
function exportActivityLogToCSV() {
  let customersActivityLog =
    JSON.parse(localStorage.getItem("customersActivityLog")) || [];
  let customers = JSON.parse(localStorage.getItem("customers")) || [];

  if (customersActivityLog.length === 0) {
    showNotification("⚠️ لا توجد أنشطة للتصدير", "warning");
    return;
  }

  let csv =
    "الرقم,اسم العميل,البريد الإلكتروني,نوع النشاط,التاريخ,الوقت,التفاصيل\n";

  customersActivityLog
    .slice()
    .reverse()
    .forEach((activity, idx) => {
      const customer = customers.find((c) => c.id === activity.customerId);
      const customerName = customer ? customer.name : "عميل محذوف";
      const customerEmail = customer ? customer.email : "N/A";
      const date = new Date(activity.timestamp).toLocaleDateString("ar-EG");
      const time = new Date(activity.timestamp).toLocaleTimeString("ar-EG");

      csv += `${idx + 1},"${customerName}","${customerEmail}","${activity.activityType}","${date}","${time}","${activity.description}"\n`;
    });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `سجل_أنشطة_العملاء_${new Date().toLocaleDateString("ar-EG")}.csv`;
  link.click();

  showNotification("✅ تم تحميل السجل بنجاح", "success");
}

// دالة طباعة سجل الأنشطة
function printActivityLogReport() {
  let customersActivityLog =
    JSON.parse(localStorage.getItem("customersActivityLog")) || [];
  let customers = JSON.parse(localStorage.getItem("customers")) || [];

  if (customersActivityLog.length === 0) {
    showNotification("⚠️ لا توجد أنشطة للطباعة", "warning");
    return;
  }

  const printWindow = window.open("", "", "height=600,width=900");
  let htmlContent = `
        <html dir="rtl" style="font-family: Arial, sans-serif;">
        <head>
            <title>سجل أنشطة العملاء</title>
            <style>
                body { padding: 20px; background: white; }
                h1 { text-align: center; color: #9B59B6; margin-bottom: 10px; }
                .info { text-align: center; color: #666; margin-bottom: 20px; font-size: 14px; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th { background: linear-gradient(135deg, #9B59B6, #8E44AD); color: white; padding: 12px; text-align: right; border: 1px solid #ddd; font-weight: bold; }
                td { padding: 10px 12px; text-align: right; border: 1px solid #ddd; font-size: 13px; }
                tr:nth-child(even) { background: #f9f9f9; }
                .total-row { font-weight: bold; background: #E8D5F2; text-align: center; }
                .activity-type { padding: 4px 8px; border-radius: 4px; color: white; font-weight: bold; text-align: center; }
                .type-register { background: #27AE60; }
                .type-login { background: #3498DB; }
                .type-logout { background: #F39C12; }
            </style>
        </head>
        <body>
            <h1>📊 سجل أنشطة العملاء الشامل</h1>
            <div class="info">
                <p>تاريخ الطباعة: ${new Date().toLocaleDateString("ar-EG")} - ${new Date().toLocaleTimeString("ar-EG")}</p>
                <p>إجمالي الأنشطة المسجلة: ${customersActivityLog.length}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>اسم العميل</th>
                        <th>البريد الإلكتروني</th>
                        <th>نوع النشاط</th>
                        <th>التاريخ</th>
                        <th>الوقت</th>
                        <th>التفاصيل</th>
                    </tr>
                </thead>
                <tbody>
                    ${customersActivityLog
                      .slice()
                      .reverse()
                      .map((activity, idx) => {
                        const customer = customers.find(
                          (c) => c.id === activity.customerId,
                        );
                        const customerName = customer
                          ? customer.name
                          : "عميل محذوف";
                        const customerEmail = customer ? customer.email : "N/A";
                        const date = new Date(
                          activity.timestamp,
                        ).toLocaleDateString("ar-EG");
                        const time = new Date(
                          activity.timestamp,
                        ).toLocaleTimeString("ar-EG");

                        let typeClass = "type-register";
                        if (activity.activityType === "دخول")
                          typeClass = "type-login";
                        if (activity.activityType === "خروج")
                          typeClass = "type-logout";

                        return `
                            <tr>
                                <td>${idx + 1}</td>
                                <td><strong>${customerName}</strong></td>
                                <td>${customerEmail}</td>
                                <td><span class="activity-type ${typeClass}">${activity.activityType}</span></td>
                                <td>${date}</td>
                                <td>${time}</td>
                                <td>${activity.description}</td>
                            </tr>
                        `;
                      })
                      .join("")}
                </tbody>
                <tfoot>
                    <tr class="total-row">
                        <td colspan="7">إجمالي الأنشطة المسجلة: ${customersActivityLog.length}</td>
                    </tr>
                </tfoot>
            </table>
        </body>
        </html>
    `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
  setTimeout(() => printWindow.print(), 250);
}

function switchCustomerTab(tab) {
  const loginForm = document.getElementById("customerLoginForm");
  const registerForm = document.getElementById("customerRegisterForm");
  const loginTab = document.getElementById("customerLoginTab");
  const registerTab = document.getElementById("customerRegisterTab");

  if (tab === "login") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    loginTab.style.color = "#FF6B35";
    loginTab.style.borderBottomColor = "#FF6B35";
    loginTab.style.background = "white";
    registerTab.style.color = "#7F8C8D";
    registerTab.style.borderBottomColor = "transparent";
    registerTab.style.background = "transparent";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    loginTab.style.color = "#7F8C8D";
    loginTab.style.borderBottomColor = "transparent";
    loginTab.style.background = "transparent";
    registerTab.style.color = "#FF6B35";
    registerTab.style.borderBottomColor = "#FF6B35";
    registerTab.style.background = "white";
  }
}

function customerLogin() {
  const email = document.getElementById("customer-email").value.trim();
  const password = document.getElementById("customer-password").value.trim();
  const errorDiv = document.getElementById("customerLoginError");

  console.log("🔐 محاولة تسجيل دخول:", { email, password });
  console.log("👥 عدد العملاء المسجلين:", customers.length);

  if (!email || !password) {
    errorDiv.textContent = "⚠️ الرجاء ملء جميع الحقول المطلوبة";
    errorDiv.style.display = "block";
    console.warn("⚠️ البريد أو كلمة المرور فارغة");
    return;
  }

  if (customers.length === 0) {
    errorDiv.textContent =
      "❌ لا توجد حسابات مسجلة في النظام. الرجاء إنشاء حساب جديد أولاً";
    errorDiv.style.display = "block";
    console.error("❌ لا توجد عملاء في النظام");
    return;
  }

  const customer = customers.find(
    (c) => c.email === email && c.password === password,
  );

  console.log(
    "🔍 نتيجة البحث:",
    customer ? "عميل وجد" : "لم يتم العثور على عميل",
  );

  if (customer) {
    currentCustomer = {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
    };
    sessionStorage.setItem("currentCustomer", JSON.stringify(currentCustomer));

    // تسجيل نشاط الدخول
    try {
      logCustomerActivity(customer.id, "دخول", "تسجيل دخول إلى الحساب");
    } catch (e) {
      console.warn("⚠️ فشل تسجيل النشاط:", e);
    }

    errorDiv.style.display = "none";
    document.getElementById("customer-email").value = "";
    document.getElementById("customer-password").value = "";
    console.log("✅ تسجيل دخول ناجح للعميل:", customer.name);
    showNotification(
      `✅ أهلاً ${customer.name}! تم تسجيل دخولك بنجاح`,
      "success",
    );
    updateUserIcon();
    setTimeout(() => showPage("home-page"), 500);
  } else {
    errorDiv.textContent = "❌ البريد الإلكتروني أو كلمة المرور غير صحيحة";
    errorDiv.style.display = "block";
    console.error("❌ بيانات تسجيل الدخول غير صحيحة");
    console.log("📧 البريد المدخل:", email);
    console.log(
      "📋 قائمة رسائل البريد المسجلة:",
      customers.map((c) => c.email),
    );
  }
}

function customerRegister() {
  const name = document.getElementById("register-name").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const phone = document.getElementById("register-phone").value.trim();
  const password = document.getElementById("register-password").value.trim();
  const confirmPassword = document
    .getElementById("register-confirm-password")
    .value.trim();
  const errorDiv = document.getElementById("customerRegisterError");

  console.log("📝 محاولة تسجيل حساب جديد:", { name, email, phone });

  if (!name || !email || !phone || !password || !confirmPassword) {
    errorDiv.textContent = "⚠️ الرجاء ملء جميع الحقول المطلوبة";
    errorDiv.style.display = "block";
    console.warn("⚠️ حقول فارغة في النموذج");
    return;
  }

  if (!email.includes("@")) {
    errorDiv.textContent = "❌ البريد الإلكتروني غير صحيح";
    errorDiv.style.display = "block";
    console.warn("⚠️ بريد إلكتروني غير صحيح");
    return;
  }

  if (password.length < 6) {
    errorDiv.textContent = "❌ كلمة المرور يجب أن تكون 6 أحرف على الأقل";
    errorDiv.style.display = "block";
    console.warn("⚠️ كلمة مرور قصيرة جداً");
    return;
  }

  if (password !== confirmPassword) {
    errorDiv.textContent = "❌ كلمات المرور غير متطابقة";
    errorDiv.style.display = "block";
    console.warn("⚠️ كلمات المرور غير متطابقة");
    return;
  }

  if (customers.some((c) => c.email === email)) {
    errorDiv.textContent = "❌ البريد الإلكتروني مسجل بالفعل";
    errorDiv.style.display = "block";
    console.warn("⚠️ البريد الإلكتروني مسجل بالفعل");
    return;
  }

  const newCustomer = {
    id: Date.now(),
    name,
    email,
    phone,
    password,
    createdAt: new Date().toISOString(),
  };

  customers.push(newCustomer);
  localStorage.setItem("customers", JSON.stringify(customers));

  // Log the customer registration to sales log
  try {
    logCustomerRegistration(newCustomer);
  } catch (e) {
    console.warn("⚠️ فشل تسجيل التسجيل:", e);
  }

  // تسجيل نشاط التسجيل
  try {
    logCustomerActivity(newCustomer.id, "تسجيل جديد", "إنشاء حساب عميل جديد");
  } catch (e) {
    console.warn("⚠️ فشل تسجيل النشاط:", e);
  }

  currentCustomer = {
    id: newCustomer.id,
    name: newCustomer.name,
    email: newCustomer.email,
    phone: newCustomer.phone,
  };
  sessionStorage.setItem("currentCustomer", JSON.stringify(currentCustomer));

  errorDiv.style.display = "none";
  document.getElementById("register-name").value = "";
  document.getElementById("register-email").value = "";
  document.getElementById("register-phone").value = "";
  document.getElementById("register-password").value = "";
  document.getElementById("register-confirm-password").value = "";

  console.log("✅ تم إنشاء حساب جديد بنجاح:", newCustomer.name);

  // تحديث الإحصائيات
  if (typeof updateAdminStatistics === "function") {
    updateAdminStatistics();
  }

  showNotification(`✅ تم إنشاء حسابك بنجاح! أهلاً ${name}`, "success");
  updateUserIcon();
  setTimeout(() => showPage("home-page"), 500);
}

function customerLogout() {
  // تسجيل نشاط الخروج
  if (currentCustomer) {
    logCustomerActivity(currentCustomer.id, "خروج", "تسجيل خروج من الحساب");
  }

  currentCustomer = null;
  sessionStorage.removeItem("currentCustomer");
  showNotification("👋 تم تسجيل خروجك بنجاح", "success");
  updateUserIcon();
  showPage("home-page");
}

function updateUserIcon() {
  const userIcon = document.querySelector(".user-icon");
  const cartIcon = document.querySelector(".cart-icon");

  if (!userIcon) return;

  if (currentCustomer) {
    userIcon.innerHTML = `<i class="fa-solid fa-user" title="${currentCustomer.name}"></i>`;
    userIcon.style.cursor = "pointer";
    userIcon.onclick = (e) => {
      e.stopPropagation();
      showCustomerMenu();
    };
  } else {
    userIcon.innerHTML = `<i class="fa-solid fa-circle-user"></i>`;
    userIcon.onclick = () => showPage("customer-login-page");
  }
}

function showCustomerMenu() {
  if (!currentCustomer) return;

  const menu = document.createElement("div");
  menu.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        z-index: 9999;
        min-width: 300px;
        text-align: center;
        direction: rtl;
        max-height: 80vh;
        overflow-y: auto;
    `;

  menu.innerHTML = `
        <h3 style="color:#2C3E50; margin-bottom:10px; font-size:18px;">👤 حسابي</h3>
        <div style="background:#F8F9FA; padding:15px; border-radius:8px; margin-bottom:20px;">
            <p style="margin:5px 0; font-size:14px;"><strong>الاسم:</strong> ${currentCustomer.name}</p>
            <p style="margin:5px 0; font-size:14px;"><strong>البريد:</strong> ${currentCustomer.email}</p>
            <p style="margin:5px 0; font-size:14px;"><strong>الهاتف:</strong> ${currentCustomer.phone}</p>
            <p style="margin:5px 0; font-size:12px; color:#7F8C8D;">📅 تاريخ التسجيل: ${new Date(currentCustomer.createdAt).toLocaleDateString("ar-EG")}</p>
        </div>
        <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
            <button id="editEmailBtn" onclick="showEditEmailDialog()" style="background:#3498DB; color:white; border:none; padding:10px 15px; border-radius:6px; cursor:pointer; font-weight:600; font-size:14px;">✏️ تعديل البريد</button>
            <button id="closeCustomerMenuBtn" style="background:#95A5A6; color:white; border:none; padding:10px 15px; border-radius:6px; cursor:pointer; font-weight:600;">إغلاق</button>
            <button onclick="customerLogout()" style="background:#E74C3C; color:white; border:none; padding:10px 15px; border-radius:6px; cursor:pointer; font-weight:600;">🚪 خروج</button>
        </div>
    `;

  const backdrop = document.createElement("div");
  backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 9998;
    `;

  document.body.appendChild(backdrop);
  document.body.appendChild(menu);

  document.getElementById("closeCustomerMenuBtn").onclick = () => {
    menu.remove();
    backdrop.remove();
  };

  backdrop.onclick = () => {
    menu.remove();
    backdrop.remove();
  };
}

// دالة لفتح نافذة تعديل البريد الإلكتروني
function showEditEmailDialog() {
  if (!currentCustomer) return;

  const dialog = document.createElement("div");
  dialog.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        z-index: 10000;
        min-width: 350px;
        text-align: center;
        direction: rtl;
    `;

  dialog.innerHTML = `
        <h3 style="color:#2C3E50; margin-bottom:20px; font-size:18px;">✏️ تعديل البريد الإلكتروني</h3>
        
        <div style="text-align:right; margin-bottom:15px;">
            <label style="display:block; color:#555; font-weight:600; margin-bottom:8px;">البريد الحالي:</label>
            <input type="text" value="${currentCustomer.email}" disabled style="width:100%; padding:10px; border:1px solid #DDD; border-radius:6px; background:#F9F9F9; color:#666;">
        </div>
        
        <div style="text-align:right; margin-bottom:20px;">
            <label style="display:block; color:#555; font-weight:600; margin-bottom:8px;">البريد الجديد:</label>
            <input type="email" id="newEmailInput" placeholder="أدخل البريد الجديد" style="width:100%; padding:10px; border:1px solid #3498DB; border-radius:6px; font-size:14px;">
        </div>
        
        <div style="display:flex; gap:10px; justify-content:center;">
            <button id="cancelEmailBtn" style="background:#95A5A6; color:white; border:none; padding:10px 20px; border-radius:6px; cursor:pointer; font-weight:600;">إلغاء</button>
            <button id="confirmEmailBtn" style="background:#27AE60; color:white; border:none; padding:10px 20px; border-radius:6px; cursor:pointer; font-weight:600;">✅ تأكيد التعديل</button>
        </div>
    `;

  const backdrop = document.createElement("div");
  backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 9999;
    `;

  document.body.appendChild(backdrop);
  document.body.appendChild(dialog);

  const newEmailInput = dialog.querySelector("#newEmailInput");
  newEmailInput.focus();

  document.getElementById("cancelEmailBtn").onclick = () => {
    dialog.remove();
    backdrop.remove();
  };

  document.getElementById("confirmEmailBtn").onclick = () => {
    const newEmail = newEmailInput.value.trim();
    if (!newEmail) {
      alert("⚠️ يرجى إدخال بريد إلكتروني");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
      alert("⚠️ صيغة البريد غير صحيحة");
      return;
    }

    let customers = JSON.parse(localStorage.getItem("customers")) || [];
    const emailExists = customers.some(
      (c) => c.email === newEmail && c.id !== currentCustomer.id,
    );

    if (emailExists) {
      alert("⚠️ هذا البريد مستخدم بالفعل");
      return;
    }

    // تحديث البريد في localStorage
    customers = customers.map((c) =>
      c.id === currentCustomer.id ? { ...c, email: newEmail } : c,
    );
    localStorage.setItem("customers", JSON.stringify(customers));

    // تحديث البريد في الجلسة
    const oldEmail = currentCustomer.email;
    currentCustomer.email = newEmail;
    sessionStorage.setItem("currentCustomer", JSON.stringify(currentCustomer));

    // تسجيل النشاط
    logCustomerActivity(
      currentCustomer.id,
      "تعديل بيانات",
      `تغيير البريد الإلكتروني من ${oldEmail} إلى ${newEmail}`,
    );

    showNotification("✅ تم تحديث البريد بنجاح", "success");
    dialog.remove();
    backdrop.remove();
  };

  backdrop.onclick = () => {
    dialog.remove();
    backdrop.remove();
  };
}

/* ==================================================
   10. دالة تسجيل الخروج من الإدارة
   ================================================== */
function logoutAdmin() {
  const adminUserJson = sessionStorage.getItem("adminUser");
  sessionStorage.removeItem("isAdmin");
  sessionStorage.removeItem("adminUser");
  document.getElementById("admin-username").value = "";
  document.getElementById("admin-password").value = "";
  alert("👋 شكراً لك! تم تسجيل الخروج بنجاح");
  try {
    const u = adminUserJson ? JSON.parse(adminUserJson) : null;
    if (typeof logEvent === "function")
      logEvent("ADMIN_LOGOUT", {
        username: u ? u.username : "unknown",
        email: u ? u.email : null,
      });
  } catch (e) {}
  showPage("home-page");
}

// تأثير تتبع الموس - تحريك العناصر مع حركة الموس
// document.addEventListener('mousemove', (e) => {
//     const cards = document.querySelectorAll('.res-card, .feature-box, .branch-card');
//     cards.forEach(card => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         const xPercent = (x / rect.width) * 5;
//         const yPercent = (y / rect.height) * 5;
//         card.style.transform = `perspective(1000px) rotateX(${yPercent - 2.5}deg) rotateY(${xPercent - 2.5}deg)`;
//     });
// });

// إعادة تعيين التحويل عند مغادرة الكارت
// Only attach mousemove tilt effects on devices that support hover (avoid touch devices)
const supportsHover =
  (window.matchMedia && window.matchMedia("(hover: hover)").matches) ||
  !("ontouchstart" in window);
// if (supportsHover) {
//     document.addEventListener('mousemove', (e) => {
//         const cards = document.querySelectorAll('.res-card, .feature-box, .branch-card');
//         cards.forEach(card => {
//             const rect = card.getBoundingClientRect();
//             const x = e.clientX - rect.left;
//             const y = e.clientY - rect.top;
//             const xPercent = (x / rect.width) * 5;
//             const yPercent = (y / rect.height) * 5;
//             card.style.transform = `perspective(1000px) rotateX(${yPercent - 2.5}deg) rotateY(${xPercent - 2.5}deg)`;
//         });
//     });

//     // Reset transform when leaving viewport
//     document.addEventListener('mouseleave', () => {
//         const cards = document.querySelectorAll('.res-card, .feature-box, .branch-card');
//         cards.forEach(card => { card.style.transform = ''; });
//     });
// }

// Image modal functions (open/close) - safe guards to avoid errors
function openImageModal(src, alt) {
  try {
    const modal = document.getElementById("image-modal");
    const img = document.getElementById("image-modal-img");
    const cap = document.getElementById("image-modal-caption");
    if (!modal || !img) return;
    img.src = src || "";
    img.alt = alt || "";
    cap.textContent = alt || "";
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  } catch (e) {
    console.warn("openImageModal error", e);
  }
}

function closeImageModal() {
  try {
    const modal = document.getElementById("image-modal");
    const img = document.getElementById("image-modal-img");
    if (!modal || !img) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    img.src = "";
    document.body.style.overflow = "";
  } catch (e) {
    console.warn("closeImageModal error", e);
  }
}

// Close modal on Escape key
document.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape") closeImageModal();
});

// تشغيل الموقع عند التحميل
window.addEventListener("load", () => {
  // التحقق من البيانات والتخزين
  console.clear();
  console.log("🚀 بدء تشغيل تطبيق My Order...\n");
  checkStorageStatus();
  verifyDataUpdate();

  showPage("home-page");
  updateCartCount();
  createSnow();
  updateUserIcon();

  // Delegated handler for interactive images and data-action buttons
  document.addEventListener("click", (ev) => {
    const t = ev.target;

    // 1) Handle elements (or ancestors) that declare a data-action
    const actionEl = t.closest && t.closest("[data-action]");
    if (actionEl) {
      const action = actionEl.dataset.action;
      const category = actionEl.dataset.category;
      const target = actionEl.dataset.target;

      switch (action) {
        case "navigate":
          ev.preventDefault();
          if (target) showPage(target);
          break;
        case "filter-home":
          ev.preventDefault();
          if (category) filterHomeMenu(category);
          break;
        case "filter":
          ev.preventDefault();
          if (category) filterItems(category);
          break;
        case "send-review":
          ev.preventDefault();
          sendReview();
          break;
        case "validate-login":
          ev.preventDefault();
          validateAdminLogin();
          break;
        case "finish-order":
          ev.preventDefault();
          finishOrder();
          break;
        case "logout":
          ev.preventDefault();
          logoutAdmin();
          break;
        case "add-new-item":
          ev.preventDefault();
          addNewItemFromAdmin();
          break;
        case "delete-item":
          ev.preventDefault();
          const delId = parseInt(actionEl.dataset.id, 10);
          if (!isNaN(delId)) deleteItem(delId);
          break;
        case "edit-item-full":
          ev.preventDefault();
          const fullEditId = parseInt(actionEl.dataset.id, 10);
          if (!isNaN(fullEditId)) editItemFull(fullEditId);
          break;
        case "edit-price":
          ev.preventDefault();
          const editId = parseInt(actionEl.dataset.id, 10);
          const currentPrice = parseFloat(actionEl.dataset.currentPrice);
          if (!isNaN(editId)) editItemPrice(editId, currentPrice);
          break;
        case "add-to-cart":
          ev.preventDefault();
          const id = parseInt(actionEl.dataset.id, 10);
          if (!isNaN(id)) addToCart(id);
          break;
        case "decrease-qty":
          ev.preventDefault();
          const decIndex = parseInt(actionEl.dataset.index, 10);
          if (!isNaN(decIndex)) decreaseQuantity(decIndex);
          break;
        case "increase-qty":
          ev.preventDefault();
          const incIndex = parseInt(actionEl.dataset.index, 10);
          if (!isNaN(incIndex)) increaseQuantity(incIndex);
          break;
        case "remove-item":
          ev.preventDefault();
          const remIndex = parseInt(actionEl.dataset.index, 10);
          if (!isNaN(remIndex)) removeFromCart(remIndex);
          break;
        case "update-phone":
          ev.preventDefault();
          updateRestaurantPhone();
          break;
        case "seed":
          ev.preventDefault();
          seedFromAdmin();
          break;
        case "clear-all":
          ev.preventDefault();
          clearAllItems();
          break;
        default:
          break;
      }

      return; // handled
    }

    // 2) Fallback: images with interactive-img class open modal (uses data-fullsrc/data-caption)
    if (t && t.classList && t.classList.contains("interactive-img")) {
      const src = t.dataset.fullsrc || t.src || "";
      const cap = t.dataset.caption || t.alt || "";
      openImageModal(src, cap);
    }
  });
  // Keyboard accessibility: trigger click on Enter/Space for elements with role=button or data-action
  document.addEventListener("keydown", (ev) => {
    if (ev.key !== "Enter" && ev.key !== " ") return;
    const active = document.activeElement;
    if (!active) return;
    const actionEl =
      (active.closest && active.closest("[data-action]")) ||
      (active.hasAttribute && active.getAttribute("role") === "button"
        ? active
        : null);
    if (actionEl) {
      ev.preventDefault();
      actionEl.click();
    }
  });
  // إذا كانت دوال Firebase متاحة، شغّل المزامنة للتأكد من تحميل البيانات الحقيقية
  if (
    typeof window.firebaseDB !== "undefined" &&
    window.firebaseDB.initializeFirebaseSync
  ) {
    try {
      window.firebaseDB.initializeFirebaseSync();
    } catch (e) {
      console.warn("Firebase sync failed or unavailable:", e);
    }
  }

  // إضافة ستايل الأنيميشن للثلج ديناميكياً
  const style = document.createElement("style");
  style.innerHTML = `
        @keyframes fall { 
            to { transform: translateY(110vh) rotate(360deg); } 
        }
        @keyframes slideIn { 
            from { transform: translateX(400px); opacity: 0; } 
            to { transform: translateX(0); opacity: 1; } 
        }
        @keyframes fadeOut { 
            to { opacity: 0; } 
        }
    `;
  document.head.appendChild(style);

  // IntersectionObserver: trigger About page animations when elements enter viewport
  (function setupAboutAnimations() {
    const selector =
      ".about-hero-text, .about-hero-visual, .feature-box, .team-card, .about-metrics .metric";
    const elements = Array.from(document.querySelectorAll(selector));
    if (!elements.length) return;

    // mark for animation
    elements.forEach((el) => el.classList.add("will-animate"));

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              // allow optional data-animate-delay in ms
              const delay = parseInt(el.dataset.animateDelay || "0", 10) || 0;
              if (delay) el.style.transitionDelay = `${delay}ms`;
              // add class to start transition
              requestAnimationFrame(() => el.classList.add("animate"));
              obs.unobserve(el);
            }
          });
        },
        { threshold: 0.12 },
      );

      elements.forEach((el) => io.observe(el));
    } else {
      // fallback: just animate everything after small timeout
      setTimeout(
        () => elements.forEach((el) => el.classList.add("animate")),
        150,
      );
    }
  })();
});
// واجهة بسيطة لاستدعاء Google Sign-In من الواجهة العامة
function googleSignIn() {
  if (window.firebaseDB && window.firebaseDB.googleSignIn) {
    window.firebaseDB.googleSignIn();
  } else {
    showNotification("⚠️ خدمة المصادقة غير جاهزة. حاول لاحقاً.", "warning");
  }
}

// Centralized contact getters (use these everywhere for consistency)
function getRestaurantEmail() {
  return (
    (window.BRANCH_DATA && window.BRANCH_DATA.email) ||
    localStorage.getItem("restaurantEmail") ||
    (typeof RESTAURANT_EMAIL !== "undefined" && RESTAURANT_EMAIL) ||
    "ibra7im.engineer@gmail.com"
  );
}

function getRestaurantPhone() {
  return (
    (window.BRANCH_DATA && window.BRANCH_DATA.phone) ||
    localStorage.getItem("restaurant_phone") ||
    (typeof RESTAURANT_PHONE !== "undefined" && RESTAURANT_PHONE) ||
    "201021279663"
  );
}

// Export to window for global use
window.getRestaurantPhone = getRestaurantPhone;

function formatPhoneForDisplay(phone) {
  if (!phone) return "";
  const p = String(phone).replace(/\D/g, "");
  if (p.startsWith("20")) return "+" + p;
  if (p.length === 11 && p.startsWith("0")) return "+20" + p.slice(1);
  return phone;
}

/* ==================================================
   شروط الاستخدام وسياسة الخصوصية
   ================================================== */

// عرض نموذج شروط الاستخدام
function showTermsOfService() {
  const modal = document.createElement("div");
  modal.id = "termsModal";
  modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        animation: fadeIn 0.3s ease-out;
        direction: rtl;
    `;

  modal.innerHTML = `
        <div style="background:white; border-radius:12px; max-width:700px; width:90%; max-height:80vh; overflow-y:auto; box-shadow:0 10px 40px rgba(0,0,0,0.3); position:relative;">
            <!-- Header -->
            <div style="background:linear-gradient(135deg, #FF6B35, #FF8E5F); color:white; padding:25px; border-radius:12px 12px 0 0; display:flex; justify-content:space-between; align-items:center; position:sticky; top:0;">
                <h2 style="margin:0; font-size:20px;">📋 شروط الاستخدام</h2>
                <button id="closeTermsBtn" style="background:rgba(255,255,255,0.3); border:none; color:white; font-size:24px; cursor:pointer; padding:0 10px; border-radius:6px; transition:0.3s;">×</button>
            </div>
            
            <!-- Content -->
            <div style="padding:25px; color:#2C3E50; line-height:1.8; font-size:14px;">
                <h3 style="color:#FF6B35; margin-top:0;">1. قبول الشروط</h3>
                <p>باستخدام My Order الإلكترونية، فأنت تقبل وتوافق على جميع الشروط والأحكام المنصوص عليها هنا. إذا كنت لا توافق على أي جزء من هذه الشروط، يُرجى عدم استخدام الخدمة.</p>
                
                <h3 style="color:#FF6B35;">2. وصف الخدمة</h3>
                <p>تقدم My Order خدمة طلب الطعام والمشروبات من المطاعم المتعاونة مع الخدمة وتوصيلها للعملاء. نحتفظ بالحق في تعديل أو إيقاف أي خدمة في أي وقت.</p>
                
                <h3 style="color:#FF6B35;">3. حسابات المستخدم</h3>
                <p>أنت مسؤول عن الحفاظ على سرية بيانات حسابك وكلمة المرور. يجب عليك إبلاغنا فوراً عن أي استخدام غير مصرح به لحسابك.</p>
                
                <h3 style="color:#FF6B35;">4. استخدام المنصة</h3>
                <p>يجب عليك استخدام المنصة بطريقة قانونية وأخلاقية. يُحظر عليك:</p>
                <ul style="margin:10px 0; padding-right:25px;">
                    <li>محاولة قرصنة أو الوصول غير المصرح به للنظام</li>
                    <li>نشر محتوى إباحي أو عنيف أو غير مناسب</li>
                    <li>استخدام البوتات أو الأتمتة بدون إذن صريح</li>
                    <li>الانخراط في الاحتيال أو الخداع</li>
                </ul>
                
                <h3 style="color:#FF6B35;">5. الطلبات والدفع</h3>
                <p>تقديم الطلب يعني قبولاً منك لشروط الطلب. يجب عليك توفير معلومات طلب دقيقة وصحيحة. أسعار المنتجات قابلة للتغيير دون إخطار مسبق.</p>
                
                <h3 style="color:#FF6B35;">6. إلغاء الطلبات</h3>
                <p>يمكنك إلغاء الطلب قبل البدء في التحضير من قبل المطعم. بعد بدء التحضير، قد تتحمل رسوم إلغاء.</p>
                
                <h3 style="color:#FF6B35;">7. تحديد المسؤولية</h3>
                <p>لا تتحمل My Order مسؤولية أي أضرار ناشئة عن استخدام المنصة أو عدم توفر الخدمة بشكل مؤقت.</p>
                
                <h3 style="color:#FF6B35;">8. القانون الواجب التطبيق</h3>
                <p>تحكم هذه الشروط وسياساتنا القوانين السارية في جمهورية مصر العربية.</p>
                
                <h3 style="color:#FF6B35;">9. تعديل الشروط</h3>
                <p>نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إبلاغك بأي تغييرات مهمة.</p>
                
                <h3 style="color:#FF6B35;">10. التواصل مع الدعم</h3>
                <p>إذا كان لديك أي استفسارات حول هذه الشروط، يرجى التواصل معنا على: <strong>${getRestaurantEmail()}</strong></p>
            </div>
            
            <!-- Footer -->
            <div style="padding:20px; text-align:center; border-top:1px solid #E0E0E0; background:#F8F9FA;">
                <button id="acceptTermsBtn" style="background:linear-gradient(135deg, #FF6B35, #FF8E5F); color:white; border:none; padding:12px 30px; border-radius:8px; cursor:pointer; font-weight:600; transition:0.3s; margin-left:10px;">✅ أوافق على الشروط</button>
                <button id="closeTermsBtnFooter" style="background:#95A5A6; color:white; border:none; padding:12px 30px; border-radius:8px; cursor:pointer; font-weight:600; transition:0.3s;">إغلاق</button>
            </div>
        </div>
    `;

  // CSS animation styles
  const style = document.createElement("style");
  style.innerHTML = `
        @keyframes fadeIn { 
            from { opacity: 0; } 
            to { opacity: 1; } 
        }
    `;
  document.head.appendChild(style);

  document.body.appendChild(modal);

  // Close button handlers
  const closeBtn = document.getElementById("closeTermsBtn");
  const closeBtnFooter = document.getElementById("closeTermsBtnFooter");
  const acceptBtn = document.getElementById("acceptTermsBtn");

  const closeModal = () => {
    modal.style.animation = "fadeOut 0.3s ease-out";
    setTimeout(() => modal.remove(), 300);
  };

  closeBtn.addEventListener("click", closeModal);
  closeBtnFooter.addEventListener("click", closeModal);
  acceptBtn.addEventListener("click", () => {
    showNotification("✅ شكراً! تم قبول شروط الاستخدام", "success");
    closeModal();
  });

  // Close on backdrop click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape key
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", handleEscape);
    }
  };
  document.addEventListener("keydown", handleEscape);
}

// عرض نموذج سياسة الخصوصية
function showPrivacyPolicy() {
  const modal = document.createElement("div");
  modal.id = "privacyModal";
  modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        animation: fadeIn 0.3s ease-out;
        direction: rtl;
    `;

  modal.innerHTML = `
        <div style="background:white; border-radius:12px; max-width:700px; width:90%; max-height:80vh; overflow-y:auto; box-shadow:0 10px 40px rgba(0,0,0,0.3); position:relative;">
            <!-- Header -->
            <div style="background:linear-gradient(135deg, #2196F3, #42A5F5); color:white; padding:25px; border-radius:12px 12px 0 0; display:flex; justify-content:space-between; align-items:center; position:sticky; top:0;">
                <h2 style="margin:0; font-size:20px;">🔐 سياسة الخصوصية</h2>
                <button id="closePrivacyBtn" style="background:rgba(255,255,255,0.3); border:none; color:white; font-size:24px; cursor:pointer; padding:0 10px; border-radius:6px; transition:0.3s;">×</button>
            </div>
            
            <!-- Content -->
            <div style="padding:25px; color:#2C3E50; line-height:1.8; font-size:14px;">
                <h3 style="color:#2196F3; margin-top:0;">1. مقدمة</h3>
                <p>تحترم My Order خصوصيتك وتلتزم بحماية بيانات المستخدمين. توضح هذه السياسة كيفية جمع واستخدام معلوماتك الشخصية.</p>
                
                <h3 style="color:#2196F3;">2. البيانات التي نجمعها</h3>
                <p>نجمع المعلومات التالية:</p>
                <ul style="margin:10px 0; padding-right:25px;">
                    <li><strong>معلومات الحساب:</strong> الاسم والبريد الإلكتروني ورقم الهاتف</li>
                    <li><strong>معلومات الطلب:</strong> عناوين التوصيل وتفاصيل الطلبات</li>
                    <li><strong>معلومات الدفع:</strong> غير كامل - نستخدم معالجات دفع آمنة</li>
                    <li><strong>بيانات الاستخدام:</strong> كيفية استخدامك للمنصة (من خلال الكوكيز)</li>
                </ul>
                
                <h3 style="color:#2196F3;">3. كيفية استخدام بيانتك</h3>
                <p>نستخدم بيانتك الشخصية لـ:</p>
                <ul style="margin:10px 0; padding-right:25px;">
                    <li>معالجة طلباتك وتوصيل الطعام</li>
                    <li>تحسين خدماتنا والتواصل معك</li>
                    <li>الامتثال للقوانين والالتزامات القانونية</li>
                    <li>مكافحة الاحتيال والجريمة</li>
                </ul>
                
                <h3 style="color:#2196F3;">4. حماية البيانات</h3>
                <p>نستخدم تقنيات الحماية المتقدمة مثل التشفير لحماية بيانتك الشخصية من الوصول غير المصرح به.</p>
                
                <h3 style="color:#2196F3;">5. مشاركة البيانات</h3>
                <p>لا نشارك بيانتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:</p>
                <ul style="margin:10px 0; padding-right:25px;">
                    <li>المطاعم المتعاونة (لتنفيذ الطلبات فقط)</li>
                    <li>خدمات التوصيل عند الحاجة</li>
                    <li>الامتثال للمتطلبات القانونية</li>
                </ul>
                
                <h3 style="color:#2196F3;">6. حقوقك</h3>
                <p>لديك الحق في:</p>
                <ul style="margin:10px 0; padding-right:25px;">
                    <li>الوصول إلى بيانتك الشخصية</li>
                    <li>تصحيح البيانات غير الدقيقة</li>
                    <li>حذف حسابك وبيانتك</li>
                    <li>الاعتراض على معالجة بيانتك</li>
                </ul>
                
                <h3 style="color:#2196F3;">7. الكوكيز</h3>
                <p>نستخدم الكوكيز لتحسين تجربتك في استخدام المنصة. يمكنك تعطيل الكوكيز من خلال إعدادات متصفحك.</p>
                
                <h3 style="color:#2196F3;">8. الروابط الخارجية</h3>
                <p>قد تحتوي المنصة على روابط لمواقع خارجية. لا نتحمل مسؤولية سياسات الخصوصية الخاصة بهذه المواقع.</p>
                
                <h3 style="color:#2196F3;">9. تعديل هذه السياسة</h3>
                <p>قد نعدل هذه السياسة في أي وقت. سيتم إبلاغك بأي تغييرات مهمة من خلال بريدك الإلكتروني.</p>
                
                <h3 style="color:#2196F3;">10. التواصل معنا</h3>
                <p>إذا كان لديك أي استفسارات حول سياسة الخصوصية، يرجى التواصل معنا على: <strong>${getRestaurantEmail()}</strong></p>
                
                <p style="margin-top:20px; padding-top:20px; border-top:1px solid #E0E0E0; font-size:12px; color:#7F8C8D;">
                    <strong>آخر تحديث:</strong> ${new Date().toLocaleDateString("ar-EG")}
                </p>
            </div>
            
            <!-- Footer -->
            <div style="padding:20px; text-align:center; border-top:1px solid #E0E0E0; background:#F8F9FA;">
                <button id="acceptPrivacyBtn" style="background:linear-gradient(135deg, #2196F3, #42A5F5); color:white; border:none; padding:12px 30px; border-radius:8px; cursor:pointer; font-weight:600; transition:0.3s; margin-left:10px;">✅ أوافق</button>
                <button id="closePrivacyBtnFooter" style="background:#95A5A6; color:white; border:none; padding:12px 30px; border-radius:8px; cursor:pointer; font-weight:600; transition:0.3s;">إغلاق</button>
            </div>
        </div>
    `;

  // CSS animation styles
  const style = document.createElement("style");
  style.innerHTML = `
        @keyframes fadeOut { 
            from { opacity: 1; } 
            to { opacity: 0; } 
        }
    `;
  document.head.appendChild(style);

  document.body.appendChild(modal);

  // Close button handlers
  const closeBtn = document.getElementById("closePrivacyBtn");
  const closeBtnFooter = document.getElementById("closePrivacyBtnFooter");
  const acceptBtn = document.getElementById("acceptPrivacyBtn");

  const closeModal = () => {
    modal.style.animation = "fadeOut 0.3s ease-out";
    setTimeout(() => modal.remove(), 300);
  };

  closeBtn.addEventListener("click", closeModal);
  closeBtnFooter.addEventListener("click", closeModal);
  acceptBtn.addEventListener("click", () => {
    showNotification("✅ شكراً! تم قبول سياسة الخصوصية", "success");
    closeModal();
  });

  // Close on backdrop click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape key
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", handleEscape);
    }
  };
  document.addEventListener("keydown", handleEscape);
}

// Export to window for backward compatibility
window.showPage = showPage;
window.renderMenu = renderMenu;
window.searchFunction = searchFunction;
window.filterItems = filterItems;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.finishOrder = finishOrder;
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;
window.deleteItem = deleteItem;
window.editItemPrice = editItemPrice;
window.editItemFull = editItemFull;
window.addNewItemFromAdmin = addNewItemFromAdmin;
window.renderAdminList = renderAdminList;
window.updateRestaurantPhone = updateRestaurantPhone;
window.seedFromAdmin = seedFromAdmin;
window.clearAllItems = clearAllItems;
window.sendReview = sendReview;
window.validateAdminLogin = validateAdminLogin;
window.logoutAdmin = logoutAdmin;
window.searchHomeMenu = searchHomeMenu;
window.switchCustomerTab = switchCustomerTab;
window.customerLogin = customerLogin;
window.customerRegister = customerRegister;
window.customerLogout = customerLogout;
window.showCustomerMenu = showCustomerMenu;
window.filterHomeMenu = filterHomeMenu;
window.initializeHomeMenu = initializeHomeMenu;
window.googleSignIn = googleSignIn;
window.showTermsOfService = showTermsOfService;
window.showPrivacyPolicy = showPrivacyPolicy;
window.printInvoice = printInvoice;
window.generateInvoiceHTML = generateInvoiceHTML;

/* ==================================================
   تحسينات متقدمة: نظام Validation و Error Handling
   ================================================== */

// Advanced Validation System
const Validator = {
  // التحقق من صحة البريد الإلكتروني
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // التحقق من صحة رقم الهاتف
  isValidPhone: (phone) => {
    const phoneRegex = /^(\+?20)?1[0125][0-9]{8}$/;
    return phoneRegex.test(phone);
  },

  // التحقق من صحة الاسم
  isValidName: (name) => {
    return name && name.trim().length >= 3 && name.length <= 100;
  },

  // التحقق من صحة العنوان
  isValidAddress: (address) => {
    return address && address.trim().length >= 10 && address.length <= 300;
  },

  // التحقق من صحة السعر
  isValidPrice: (price) => {
    const priceNum = parseFloat(price);
    return priceNum > 0 && priceNum <= 10000;
  },

  // التحقق من صحة كمية المنتج
  isValidQuantity: (qty) => {
    return Number.isInteger(qty) && qty > 0 && qty <= 100;
  },

  // التحقق الشامل لبيانات الطلب
  validateOrderData: (orderData) => {
    const errors = [];

    if (!Validator.isValidName(orderData.customerName)) {
      errors.push("اسم العميل يجب أن يكون بين 3 و 100 حرف");
    }
    if (!Validator.isValidPhone(orderData.customerPhone)) {
      errors.push("رقم الهاتف غير صحيح - يجب أن يكون رقم مصري صحيح");
    }
    if (!Validator.isValidAddress(orderData.customerAddress)) {
      errors.push("العنوان يجب أن يكون بين 10 و 300 حرف");
    }
    if (!orderData.items || orderData.items.length === 0) {
      errors.push("السلة فارغة - أضف منتجات أولاً");
    }
    if (orderData.totalPrice < 0) {
      errors.push("خطأ في حساب السعر الإجمالي");
    }

    return {
      isValid: errors.length === 0,
      errors: errors,
    };
  },
};

// Advanced Error Handler
const ErrorHandler = {
  // معالجة الأخطاء الشاملة
  handle: (error, context = "") => {
    console.error(`❌ خطأ في ${context}:`, error);

    const errorMap = {
      NetworkError: "خطأ في الاتصال - تأكد من الإنترنت",
      QuotaExceededError: "تخزين المتصفح ممتلئ",
      SecurityError: "خطأ أمني - تحقق من إعدادات المتصفح",
      TypeError: "خطأ في البيانات المُرسلة",
      ReferenceError: "خطأ في الوصول للعنصر",
    };

    const userMessage =
      errorMap[error.name] || "حدث خطأ غير متوقع - حاول مرة أخرى";

    ErrorHandler.showError(userMessage, context);
    return userMessage;
  },

  // عرض الخطأ للمستخدم
  showError: (message, title = "خطأ") => {
    const notification = showNotification(message, "error", 5000);
    console.error(`[${title}] ${message}`);
  },

  // التعامل مع أخطاء API
  handleAPIError: (response) => {
    if (response.status === 429) {
      return "الكثير من الطلبات - حاول لاحقاً";
    } else if (response.status === 500) {
      return "خطأ في الخادم - حاول لاحقاً";
    } else if (response.status === 403) {
      return "غير مصرح لك بهذا الإجراء";
    }
    return "خطأ في الاتصال بالخادم";
  },
};

// Performance Monitoring
const Performance = {
  startTime: Date.now(),
  metrics: {},

  // قياس وقت العملية
  measure: (operationName, callback) => {
    const startTime = performance.now();
    try {
      const result = callback();
      const endTime = performance.now();
      Performance.metrics[operationName] = endTime - startTime;
      console.log(`⏱️ ${operationName}: ${(endTime - startTime).toFixed(2)}ms`);
      return result;
    } catch (error) {
      console.error(`❌ إخفاق في ${operationName}:`, error);
      throw error;
    }
  },

  // الحصول على الإحصائيات
  getMetrics: () => Performance.metrics,

  // طباعة التقرير
  printReport: () => {
    console.log("📊 تقرير الأداء:");
    Object.entries(Performance.metrics).forEach(([op, time]) => {
      console.log(`  ${op}: ${time.toFixed(2)}ms`);
    });
  },
};

// Loading State Manager
const LoadingManager = {
  show: (message = "جاري التحميل...") => {
    const overlay = document.getElementById("loading-overlay");
    if (overlay) {
      overlay.classList.add("active");
      const p = overlay.querySelector("p");
      if (p) p.textContent = message;
    }
  },

  hide: () => {
    const overlay = document.getElementById("loading-overlay");
    if (overlay) {
      overlay.classList.remove("active");
    }
  },

  withLoader: async (promise, message = "جاري التحميل...") => {
    LoadingManager.show(message);
    try {
      return await promise;
    } finally {
      LoadingManager.hide();
    }
  },
};

// Enhanced LocalStorage with encryption support
const SecureStorage = {
  set: (key, value) => {
    try {
      const data = JSON.stringify({
        value: value,
        timestamp: Date.now(),
        version: "1.0",
      });
      localStorage.setItem(key, data);
      return true;
    } catch (error) {
      ErrorHandler.handle(error, "LocalStorage.set");
      return false;
    }
  },

  get: (key) => {
    try {
      const data = JSON.parse(localStorage.getItem(key));
      if (data && data.value) {
        return data.value;
      }
      return null;
    } catch (error) {
      ErrorHandler.handle(error, "LocalStorage.get");
      return null;
    }
  },

  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      ErrorHandler.handle(error, "LocalStorage.remove");
      return false;
    }
  },
};

// وظائف عالمية للصالح العام
window.Validator = Validator;
window.ErrorHandler = ErrorHandler;
window.Performance = Performance;
window.LoadingManager = LoadingManager;
window.SecureStorage = SecureStorage;

/* ==================================================
   نظام التحقق من البيانات والتخزين
   ================================================== */

// دالة شاملة للتحقق من حالة وتخزين البيانات
function checkStorageStatus() {
  console.log("🔍====== فحص حالة التخزين والبيانات ======");

  const storageData = {
    "الأصناف (Menu)": {
      key: getMenuStorageKey(),
      count: 0,
      status: "❌",
      data: null,
    },
    "الطلبات (Orders)": {
      key: "myOrders",
      count: 0,
      status: "❌",
      data: null,
    },
    "العملاء (Customers)": {
      key: "customers",
      count: 0,
      status: "❌",
      data: null,
    },
    "التقييمات (Reviews)": {
      key: "myReviews",
      count: 0,
      status: "❌",
      data: null,
    },
    "رقم المطعم (Phone)": {
      key: "restaurant_phone",
      count: 0,
      status: "❌",
      data: null,
    },
  };

  // فحص كل نوع بيانات
  for (const [name, info] of Object.entries(storageData)) {
    try {
      const stored = localStorage.getItem(info.key);
      if (stored) {
        info.data = JSON.parse(stored);
        if (Array.isArray(info.data)) {
          info.count = info.data.length;
        } else if (typeof info.data === "string") {
          info.count = 1;
        }
        info.status = "✅";
      }
    } catch (e) {
      console.error(`❌ خطأ في فحص ${name}:`, e);
      info.status = "⚠️ (خطأ)";
    }
  }

  // طباعة النتائج
  console.log("\n📊 تقرير التخزين:");
  console.log("═".repeat(60));

  for (const [name, info] of Object.entries(storageData)) {
    let symbol = "📦";
    if (name.includes("Customers")) symbol = "👥";
    if (name.includes("Orders")) symbol = "📦";
    if (name.includes("Reviews")) symbol = "⭐";
    if (name.includes("Phone")) symbol = "📱";

    console.log(`${info.status} ${symbol} ${name}: ${info.count} عنصر`);
    if (info.data && Array.isArray(info.data)) {
      console.log(`   └─ آخر تحديث: ${new Date().toLocaleString("ar-EG")}`);
    }
  }

  console.log("═".repeat(60));

  // فحص حالة الذاكرة
  try {
    const allData = {
      menu_perRestaurant: localStorage.getItem(window.getMenuStorageKey()),
      menu_global:
        typeof getGlobalMenuRaw === "function"
          ? getGlobalMenuRaw()
          : localStorage.getItem("Menu") ||
            localStorage.getItem("menuData") ||
            localStorage.getItem("myMenuData") ||
            null,
      myOrders: localStorage.getItem("myOrders"),
      customers: localStorage.getItem("customers"),
      myReviews: localStorage.getItem("myReviews"),
      restaurant_phone: localStorage.getItem("restaurant_phone"),
    };

    let totalSize = 0;
    for (const data of Object.values(allData)) {
      if (data) totalSize += new Blob([data]).size;
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    const usagePercent = ((totalSize / maxSize) * 100).toFixed(2);

    console.log(`\n💾 حالة الذاكرة:`);
    console.log(`   المستخدم: ${(totalSize / 1024).toFixed(2)} KB`);
    console.log(`   الحد الأقصى: ${(maxSize / 1024 / 1024).toFixed(0)} MB`);
    console.log(`   النسبة المئوية: ${usagePercent}%`);

    if (usagePercent < 50) {
      console.log("   الحالة: ✅ متسع كافي");
    } else if (usagePercent < 80) {
      console.log("   الحالة: ⚠️ قريب من الحد الأقصى");
    } else {
      console.log("   الحالة: ❌ يقترب من الامتلاء!");
    }
  } catch (e) {
    console.error("❌ خطأ في حساب حجم الذاكرة:", e);
  }

  console.log("🔍====== انتهى فحص التخزين ======\n");

  return storageData;
}

// دالة للتحقق من تحديث البيانات في الوقت الفعلي
function verifyDataUpdate() {
  console.log("🔄 التحقق من تحديث البيانات...\n");

  // فحص الأصناف
  const menuItems = (function () {
    const per = localStorage.getItem(window.getMenuStorageKey());
    if (per) {
      try {
        return JSON.parse(per);
      } catch (e) {
        console.warn("Failed parse per-restaurant menu", e);
      }
    }
    if (typeof MASTER_MENU !== "undefined" && MASTER_MENU) {
      return JSON.parse(JSON.stringify(MASTER_MENU));
    }
    try {
      const globalRaw =
        (typeof getGlobalMenuRaw === "function" && getGlobalMenuRaw()) ||
        localStorage.getItem("Menu") ||
        localStorage.getItem("menuData") ||
        localStorage.getItem("myMenuData") ||
        null;
      if (globalRaw) return JSON.parse(globalRaw);
    } catch (e) {
      console.warn("Failed parse global menuData/myMenuData", e);
    }
    return [];
  })();
  console.log(`📝 الأصناف المحفوظة: ${menuItems.length}`);
  if (menuItems.length > 0) {
    console.log(`   - الأول: ${menuItems[0].name} (${menuItems[0].price} ج.م)`);
    console.log(`   - الأخير: ${menuItems[menuItems.length - 1].name}`);
  }

  // فحص الطلبات
  const orders = JSON.parse(localStorage.getItem("allOrders")) || [];
  console.log(`\n📦 الطلبات المحفوظة في السجل المركزي: ${orders.length}`);
  if (orders.length > 0) {
    const lastOrder = orders[orders.length - 1];
    console.log(`   - آخر طلب: #${lastOrder.orderId}`);
    console.log(`   - العميل: ${lastOrder.customerName}`);
    console.log(`   - الإجمالي: ${lastOrder.total} ج.م`);
    console.log(
      `   - الوقت: ${new Date(lastOrder.timestamp).toLocaleString("ar-EG")}`,
    );
  }

  // فحص العملاء
  const customers = JSON.parse(localStorage.getItem("customers")) || [];
  console.log(`\n👥 العملاء المسجلين: ${customers.length}`);
  if (customers.length > 0) {
    console.log(`   - الأول: ${customers[0].name} (${customers[0].email})`);
  }

  // فحص رقم المطعم
  const phone = localStorage.getItem("restaurant_phone");
  console.log(`\n📱 رقم المطعم: ${phone || "غير محفوظ"}`);

  // فحص التقييمات
  const reviews = JSON.parse(localStorage.getItem("myReviews")) || [];
  console.log(`\n⭐ التقييمات: ${reviews.length}`);

  console.log("\n✅ انتهى التحقق من البيانات");
}

// دالة لمسح البيانات القديمة (اختياري)
function clearOldStorageData() {
  console.log("⚠️ تحذير: سيتم مسح البيانات القديمة!");
  if (confirm("هل أنت متأكد من حذف جميع البيانات المحفوظة؟")) {
    localStorage.clear();
    sessionStorage.clear();
    console.log("✅ تم مسح جميع البيانات المحفوظة");
    showNotification("تم مسح البيانات. سيتم إعادة تحميل الصفحة...", "warning");
    setTimeout(() => location.reload(), 2000);
  } else {
    console.log("❌ تم إلغاء حذف البيانات");
  }
}

// تصدير الدوال
window.checkStorageStatus = checkStorageStatus;
window.verifyDataUpdate = verifyDataUpdate;
window.clearOldStorageData = clearOldStorageData;

/* ==================================================
   Google Sheets API Integration
   ================================================== */

/* ==================================================
   Professional Data Validation & Sanitization
   ================================================== */

const DataProcessor = {
  // تنظيف وتحقق من البيانات
  sanitize: (str) => {
    if (!str) return "";
    return String(str)
      .trim()
      .replace(/[<>"']/g, "")
      .substring(0, 500);
  },

  validateName: (name) => {
    const sanitized = DataProcessor.sanitize(name);
    if (sanitized.length < 3 || sanitized.length > 100) {
      return { valid: false, error: "الاسم يجب أن يكون بين 3 و 100 حرف" };
    }
    if (!/[\u0600-\u06FF\sA-Za-z]/.test(sanitized)) {
      return {
        valid: false,
        error: "الاسم يجب أن يحتوي على أحرف عربية أو إنجليزية فقط",
      };
    }
    return { valid: true, data: sanitized };
  },

  validateEmail: (email) => {
    const sanitized = DataProcessor.sanitize(email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitized)) {
      return { valid: false, error: "البريد الإلكتروني غير صحيح" };
    }
    return { valid: true, data: sanitized };
  },

  validateOrder: (order) => {
    const sanitized = DataProcessor.sanitize(order);
    if (sanitized.length < 5) {
      return { valid: false, error: "بيانات الطلب غير كافية" };
    }
    return { valid: true, data: sanitized };
  },
};

window.DataProcessor = DataProcessor;

/* ==================================================
   Professional Form Validation
   ================================================== */

function validateField(fieldId, fieldType) {
  const field = document.getElementById(fieldId);
  const errorElement = document.getElementById(fieldId + "-error");
  if (!field || !errorElement) return true;

  const value = field.value.trim();
  let isValid = true;
  let errorMessage = "";

  switch (fieldType) {
    case "name":
      const nameVal = DataProcessor.validateName(value);
      isValid = nameVal.valid;
      errorMessage = nameVal.error || "";
      break;
    case "email":
      const emailVal = DataProcessor.validateEmail(value);
      isValid = emailVal.valid;
      errorMessage = emailVal.error || "";
      break;
    case "address":
      if (value.length < 10) {
        isValid = false;
        errorMessage = "العنوان يجب أن يكون 10 أحرف على الأقل";
      } else if (value.length > 300) {
        isValid = false;
        errorMessage = "العنوان طويل جداً";
      }
      break;
    case "phone":
      if (!/^[0-9\s+()-]*[0-9]+[0-9\s+()-]*$/.test(value)) {
        isValid = false;
        errorMessage = "رقم الهاتف غير صحيح";
      }
      break;
  }

  if (!isValid) {
    field.style.borderColor = "#EF4444";
    errorElement.textContent = errorMessage;
    errorElement.style.display = "block";
  } else {
    field.style.borderColor = "#10B981";
    errorElement.style.display = "none";
  }

  return isValid;
}

window.validateField = validateField;

// دالة لإرسال البيانات إلى Google Sheets برفع احترافي
// Offline queue + retry system for Google Sheets submissions
const OUTBOX_KEY = "outboxQueue_v1";
const MAX_ATTEMPTS = 5;
const sendingSet = new Set();

function getOutbox() {
  try {
    return JSON.parse(localStorage.getItem(OUTBOX_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveOutbox(q) {
  try {
    localStorage.setItem(OUTBOX_KEY, JSON.stringify(q));
  } catch (e) {
    console.warn("Failed saving outbox", e);
  }
}

function enqueueSubmission(payload) {
  const q = getOutbox();
  const item = {
    id: Date.now() + "-" + Math.random().toString(36).slice(2, 8),
    attempts: 0,
    payload,
  };
  q.push(item);
  saveOutbox(q);
  processOutbox();
  return item.id;
}

function removeFromOutbox(id) {
  const q = getOutbox().filter((i) => i.id !== id);
  saveOutbox(q);
}

function sendToGoogleSheets(payload) {
  const url =
    "https://script.google.com/macros/s/AKfycbynblSftffV6wM-1iP0gJrMAmTlPxRrN7LCEXdf6jiQ9_BaoOrCVp6i9NlByC_6ae-fmg/exec";

  // Use application/x-www-form-urlencoded to avoid CORS preflight (simple request)
  const bodyStr = new URLSearchParams(payload).toString();

  // Try fetch first with simple POST; treat opaque responses as success (Apps Script often doesn't return CORS headers)
  return fetch(url, {
    method: "POST",
    body: bodyStr,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    keepalive: true,
  })
    .then((res) => {
      if (res.ok || res.type === "opaque")
        return res.json?.().catch(() => ({}));
      throw new Error("Network response not ok: " + res.status);
    })
    .catch((err) => {
      // Fallback to sendBeacon for best-effort delivery (no response expected)
      try {
        if (navigator && navigator.sendBeacon) {
          const blob = new Blob([bodyStr], {
            type: "application/x-www-form-urlencoded;charset=UTF-8",
          });
          const ok = navigator.sendBeacon(url, blob);
          if (ok) return Promise.resolve({ beacon: true });
        }
      } catch (e) {
        console.warn("sendBeacon fallback failed", e);
      }
      return Promise.reject(err);
    });
}

function processItem(item) {
  if (sendingSet.has(item.id)) return;
  sendingSet.add(item.id);

  item.attempts = (item.attempts || 0) + 1;
  sendToGoogleSheets(item.payload)
    .then((result) => {
      console.log("Outbox item sent:", item.id, result);
      logEvent("OUTBOX_SEND_SUCCESS", { id: item.id });
      removeFromOutbox(item.id);
      sendingSet.delete(item.id);
    })
    .catch((err) => {
      console.warn(
        "Outbox send failed for",
        item.id,
        "attempt",
        item.attempts,
        err.message || err,
      );
      logEvent("OUTBOX_SEND_FAIL", { id: item.id, err: err.message });
      sendingSet.delete(item.id);
      if (item.attempts < MAX_ATTEMPTS) {
        const delay = Math.min(30000, Math.pow(2, item.attempts) * 1000);
        setTimeout(() => processOutbox(), delay);
        const q = getOutbox().map((i) => (i.id === item.id ? item : i));
        saveOutbox(q);
      } else {
        console.error("Outbox item failed permanently", item.id);
      }
    });
}

function processOutbox() {
  const q = getOutbox();
  if (!q || q.length === 0) return;
  q.slice(0, 10).forEach((item) => processItem(item));
}

// Public helper: submit order payload (validated) — enqueue for reliable delivery
function submitOrderToGoogleSheets(
  orderName,
  orderEmail,
  orderId,
  orderSummary,
) {
  const nameValidation = DataProcessor.validateName(orderName);
  const emailValidation = DataProcessor.validateEmail(orderEmail);
  const orderValidation = DataProcessor.validateOrder(orderSummary);

  const payload = {
    name: nameValidation.valid ? nameValidation.data : orderName || "بدون اسم",
    email: emailValidation.valid
      ? emailValidation.data
      : orderEmail || "بدون بريد",
    order: orderValidation.valid ? orderValidation.data : `طلب #${orderId}`,
    orderId: orderId || null,
    timestamp: new Date().toISOString(),
  };

  enqueueSubmission(payload);
  logEvent("ENQUEUE_ORDER", { orderId });

  // 📊 تسجيل الطلب في Google Sheets
  if (
    typeof GoogleSheetsLogger !== "undefined" &&
    GoogleSheetsLogger.logNewOrder
  ) {
    GoogleSheetsLogger.logNewOrder({
      orderId: orderId,
      customerName: payload.name,
      customerEmail: payload.email,
      items: orderSummary || "طلب جديد",
      totalAmount: cart.reduce(
        (sum, item) => sum + item.price * (item.qty || 1),
        0,
      ),
      shippingFee: SHIPPING_FEE,
      deliveryAddress:
        localStorage.getItem("deliveryAddress") || "عنوان غير محدد",
      paymentMethod: localStorage.getItem("paymentMethod") || "كاش",
      status: "جديد",
    });
  }
}

window.submitOrderToGoogleSheets = submitOrderToGoogleSheets;

// Try processing outbox on online event and on load
window.addEventListener("online", () => {
  showNotification(
    "🔄 اتصال الانترنت مستعاد - جاري إرسال الطلبات المعلقة",
    "info",
  );
  processOutbox();
});
setTimeout(() => processOutbox(), 1000);

// دالة تسجيل الأحداث المهمة
function logEvent(eventName, eventData = {}) {
  const log = {
    event: eventName,
    data: eventData,
    timestamp: new Date().toISOString(),
  };
  console.log("📊 Event:", log);
  // يمكن إرسال هذا لـ analytics service إذا لزم
}

window.logEvent = logEvent;

document.addEventListener("DOMContentLoaded", function () {
  const orderForm = document.getElementById("order-form");
  if (!orderForm) return;

  orderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const formName = formData.get("name") || "";
    const formEmail = formData.get("email") || "";
    const formOrder = formData.get("order") || "";

    // تحقق من البيانات
    const nameCheck = DataProcessor.validateName(formName);
    const emailCheck = DataProcessor.validateEmail(formEmail);
    const orderCheck = DataProcessor.validateOrder(formOrder);

    if (!nameCheck.valid) {
      alert("❌ " + nameCheck.error);
      return;
    }
    if (!emailCheck.valid) {
      alert("❌ " + emailCheck.error);
      return;
    }

    const data = {
      name: nameCheck.data,
      email: emailCheck.data,
      order: orderCheck.data,
    };

    console.log("📤 إرسال البيانات إلى Google Sheets:", data);

    const manualBody = new URLSearchParams(data).toString();
    fetch(
      "https://script.google.com/macros/s/AKfycbynblSftffV6wM-1iP0gJrMAmTlPxRrN7LCEXdf6jiQ9_BaoOrCVp6i9NlByC_6ae-fmg/exec",
      {
        method: "POST",
        body: manualBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        keepalive: true,
      },
    )
      .then((response) => {
        if (response.ok || response.type === "opaque")
          return response.json?.().catch(() => ({}));
        throw new Error("Network response not ok: " + response.status);
      })
      .then((result) => {
        alert("✅ تم بنجاح!");
        orderForm.reset();
        console.log("✅ تم إرسال البيانات إلى Google Sheets بنجاح", result);
        logEvent("MANUAL_FORM_SUBMISSION_SUCCESS", { name: data.name });
      })
      .catch((error) => {
        console.warn(
          "Manual form send failed, attempting sendBeacon...",
          error,
        );
        try {
          if (navigator && navigator.sendBeacon) {
            const blob = new Blob([manualBody], {
              type: "application/x-www-form-urlencoded;charset=UTF-8",
            });
            const ok = navigator.sendBeacon(
              "https://script.google.com/macros/s/AKfycbynblSftffV6wM-1iP0gJrMAmTlPxRrN7LCEXdf6jiQ9_BaoOrCVp6i9NlByC_6ae-fmg/exec",
              blob,
            );
            if (ok) {
              alert("✅ تم إرسال الطلب (تسجيل غير متزامن)");
              orderForm.reset();
              logEvent("MANUAL_FORM_SUBMISSION_SUCCESS_BEACON", {
                name: data.name,
              });
              return;
            }
          }
        } catch (e) {
          console.warn("sendBeacon manual fallback failed", e);
        }
        console.error("❌ خطأ في الإرسال:", error);
        alert("❌ خطأ في الإرسال. تأكد من الاتصال بالإنترنت وحاول مرة أخرى.");
        logEvent("MANUAL_FORM_SUBMISSION_ERROR", { error: error.message });
      });
  });
});

// Attach contact form: validate and optionally send to Google Sheets (type: contact)
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contact_name")?.value?.trim() || "";
    const email = document.getElementById("contact_email")?.value?.trim() || "";
    const message =
      document.getElementById("contact_message")?.value?.trim() || "";

    const nameCheck = DataProcessor.validateName(name);
    const emailCheck = DataProcessor.validateEmail(email);
    const orderCheck = DataProcessor.validateOrder(message);

    if (!nameCheck.valid) {
      alert(nameCheck.error);
      return;
    }
    if (!emailCheck.valid) {
      alert(emailCheck.error);
      return;
    }
    if (!orderCheck.valid) {
      alert(orderCheck.error);
      return;
    }

    const payload = {
      name: nameCheck.data,
      email: emailCheck.data,
      order: orderCheck.data,
      type: "contact",
      timestamp: new Date().toISOString(),
    };

    // Send to same Google Sheets endpoint (will appear in sheet if script handles 'type')
    const contactBody = new URLSearchParams(payload).toString();
    fetch(
      "https://script.google.com/macros/s/AKfycbynblSftffV6wM-1iP0gJrMAmTlPxRrN7LCEXdf6jiQ9_BaoOrCVp6i9NlByC_6ae-fmg/exec",
      {
        method: "POST",
        body: contactBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        keepalive: true,
      },
    )
      .then((res) => {
        if (res.ok || res.type === "opaque")
          return res.json?.().catch(() => ({}));
        throw new Error("Network response not ok: " + res.status);
      })
      .then((res) => {
        showNotification(
          "✅ تم إرسال رسالتك بنجاح. سنرد عليك خلال 24 ساعة",
          "success",
        );
        contactForm.reset();
        logEvent("CONTACT_FORM_SUBMIT", { name: payload.name });
      })
      .catch((err) => {
        console.warn("Contact send failed, attempting sendBeacon", err);
        try {
          if (navigator && navigator.sendBeacon) {
            const blob = new Blob([contactBody], {
              type: "application/x-www-form-urlencoded;charset=UTF-8",
            });
            const ok = navigator.sendBeacon(
              "https://script.google.com/macros/s/AKfycbynblSftffV6wM-1iP0gJrMAmTlPxRrN7LCEXdf6jiQ9_BaoOrCVp6i9NlByC_6ae-fmg/exec",
              blob,
            );
            if (ok) {
              showNotification(
                "✅ تم إرسال الرسالة (وضع عدم الاتصال)",
                "success",
              );
              contactForm.reset();
              logEvent("CONTACT_FORM_SUBMIT_BEACON", { name: payload.name });
              return;
            }
          }
        } catch (e) {
          console.warn("sendBeacon contact fallback failed", e);
        }
        console.error("Contact form send error", err);
        showNotification("❌ فشل إرسال الرسالة. حاول مرة أخرى.", "error");
        logEvent("CONTACT_FORM_ERROR", { error: err.message });
      });
  });
});
