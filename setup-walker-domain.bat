@echo off
echo Setting up custom local domains for Walker General Contractors...
echo 127.0.0.1 vancouvergc.local >> C:\Windows\System32\drivers\etc\hosts
echo 127.0.0.1 www.vancouvergc.local >> C:\Windows\System32\drivers\etc\hosts
echo 127.0.0.1 vancouvergc-local >> C:\Windows\System32\drivers\etc\hosts
echo 127.0.0.1 vancouvergc >> C:\Windows\System32\drivers\etc\hosts
echo 127.0.0.1 walker.local >> C:\Windows\System32\drivers\etc\hosts
echo Done! Custom domains (vancouvergc.local, vancouvergc-local, walker.local) mapped to 127.0.0.1.
pause
