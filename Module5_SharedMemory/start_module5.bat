@echo off
echo Starting Module 5 - Shared Memory Server
start cmd /k python server.py
timeout /t 2 > nul
pause
