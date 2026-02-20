# My Order - PowerShell Server Launcher
# تشغيل خادم محلي للتطبيق

Write-Host "`n================================" -ForegroundColor Cyan
Write-Host " My Order - Server Launcher" -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan

Write-Host "⚡ جاري البحث عن Python..." -ForegroundColor Yellow

# Try Python first
$pythonCheck = python --version 2>&1
if ($?) {
    Write-Host "✅ تم العثور على Python: $pythonCheck" -ForegroundColor Green
    Write-Host "`n🚀 تشغيل السيرفر على http://localhost:8000" -ForegroundColor Green
    Write-Host "⌛ اضغط Ctrl+C لإيقاف السيرفر`n" -ForegroundColor Yellow
    
    Start-Sleep -Seconds 2
    python -m http.server 8000
    exit
}

# Try Node.js
Write-Host "⚠️  Python غير مثبت. جاري البحث عن Node.js..." -ForegroundColor Yellow

npx --version 2>&1 | Out-Null
if ($?) {
    Write-Host "✅ تم العثور على Node.js" -ForegroundColor Green
    Write-Host "`n🚀 تشغيل السيرفر على http://localhost:8000" -ForegroundColor Green
    Write-Host "⌛ اضغط Ctrl+C لإيقاف السيرفر`n" -ForegroundColor Yellow
    
    npx http-server -p 8000
    exit
}

# If neither found
Write-Host "`n❌ لم يتم العثور على Python أو Node.js" -ForegroundColor Red
Write-Host "`n📋 الحل: الرجاء تثبيت أحد الخيارات التالية:`n" -ForegroundColor Yellow

Write-Host "1️⃣  Python - https://python.org" -ForegroundColor Cyan
Write-Host "2️⃣  Node.js - https://nodejs.org" -ForegroundColor Cyan
Write-Host "3️⃣  VS Code Live Server Extension (الأسهل)" -ForegroundColor Cyan

Write-Host "`n📚 للمزيد من التفاصيل، اقرأ: HOW_TO_RUN.md`n" -ForegroundColor Green

Read-Host "اضغط Enter للإغلاق"
