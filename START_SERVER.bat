@echo off
REM My Order - Local Server Starter
REM Start a simple HTTP server to run the app properly

echo.
echo ================================
echo  My Order - Local Server Setup
echo ================================
echo.
echo تحذير: يجب تشغيل هذا الملف من داخل مجلد المشروع
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ تم العثور على Python
    echo.
    echo جاري تشغيل السيرفر على http://localhost:8000
    echo اضغط Ctrl+C لإيقاف السيرفر
    echo.
    timeout /t 2
    python -m http.server 8000
    goto :end
)

REM If Python not found, try Node.js
npx http-server -p 8000 >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ استخدام http-server من Node.js
    echo.
    echo جاري تشغيل السيرفر على http://localhost:8000
    echo اضغط Ctrl+C لإيقاف السيرفر
    echo.
    npx http-server -p 8000
    goto :end
)

REM If neither found, show error
echo ❌ لم يتم العثور على Python أو Node.js
echo.
echo الحل:
echo 1. تثبيت Python من: https://python.org
echo 2. أو استخدم Live Server في VS Code
echo.
pause

:end
